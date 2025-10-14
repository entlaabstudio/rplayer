#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
srt2map.py – converts SRT subtitles to a map {time_in_ms: "text"} and outputs it to the terminal.

- The key is the number of milliseconds from the start time of each replica.
- The value is the title text; multiple lines are connected using <br>.
- The optional argument --offset will allow shifting all times (positive and negative).
"""

import argparse
import re
import sys
from typing import Dict, List, Tuple

TIME_RE = re.compile(
    r"""^\s*
    (?P<h1>\d{2}):(?P<m1>\d{2}):(?P<s1>\d{2}),(?P<ms1>\d{3})
    \s*-->\s*
    (?P<h2>\d{2}):(?P<m2>\d{2}):(?P<s2>\d{2}),(?P<ms2>\d{3})
    """,
    re.VERBOSE,
)

def time_to_ms(h: int, m: int, s: int, ms: int) -> int:
    """Converting time to milliseconds."""
    return ((h * 60 + m) * 60 + s) * 1000 + ms

def escape_js_string(s: str) -> str:
    """Escapes a string for use in quotes in JS/TS (preserves <br>)."""
    return s.replace("\\", "\\\\").replace('"', r'\"')

def parse_srt(srt_text: str, offset: int = 0) -> Dict[int, str]:
    """
    It reads SRT text and returns dict: {start_ms (+ offset): "subtitle text"}.
    It ignores empty blocks, indexes in SRT are not needed.
    """
    if srt_text and srt_text[0] == "\ufeff":
        srt_text = srt_text.lstrip("\ufeff")

    blocks = re.split(r"\r?\n\s*\r?\n+", srt_text.strip(), flags=re.MULTILINE)
    result: Dict[int, str] = {}

    for block in blocks:
        lines = [ln.rstrip("\r") for ln in block.splitlines()]
        if not lines:
            continue

        idx = 0
        if lines[0].strip().isdigit():
            idx = 1
            if len(lines) <= 1:
                continue

        if idx >= len(lines):
            continue
        m = TIME_RE.match(lines[idx])
        if not m:
            continue

        h1 = int(m.group("h1")); m1 = int(m.group("m1")); s1 = int(m.group("s1")); ms1 = int(m.group("ms1"))
        start_ms = time_to_ms(h1, m1, s1, ms1) + offset
        if start_ms < 0:
            start_ms = 0  # we will cut off negative times

        text_lines = lines[idx + 1 :]
        while text_lines and not text_lines[0].strip():
            text_lines.pop(0)
        while text_lines and not text_lines[-1].strip():
            text_lines.pop()

        subtitle_text = "<br>".join(ln.strip() for ln in text_lines) if text_lines else ""
        subtitle_text = escape_js_string(subtitle_text)
        result[start_ms] = subtitle_text

    return result

def format_as_js_map(d: Dict[int, str]) -> str:
    """Creates a JS-like map sorted by time."""
    items: List[Tuple[int, str]] = sorted(d.items(), key=lambda kv: kv[0])
    lines: List[str] = ["words: {"]

    for i, (k, v) in enumerate(items):
        if i == 0:
            lines.append(f'    {k}: "{v}", // ID is time [ms]')
        else:
            lines.append(f'    {k}: "{v}",')
    lines.append("}")
    return "\n".join(lines)

def main():
    ap = argparse.ArgumentParser(description="Converts SRT to map {time_ms: \"text\"} and prints it to the terminal.")
    ap.add_argument("srt_file", help="Input .srt file")
    ap.add_argument("--encoding", default="utf-8", help="Input coding (default: utf-8).")
    ap.add_argument("--offset", type=int, default=0, help="Offset of all times in milliseconds (positive or negative).")
    args = ap.parse_args()

    try:
        with open(args.srt_file, "r", encoding=args.encoding, errors="replace") as f:
            srt_text = f.read()
    except OSError as e:
        print(f"Error reading file: {e}", file=sys.stderr)
        sys.exit(1)

    mapping = parse_srt(srt_text, offset=args.offset)
    out = format_as_js_map(mapping)
    print(out)

if __name__ == "__main__":
    main()
