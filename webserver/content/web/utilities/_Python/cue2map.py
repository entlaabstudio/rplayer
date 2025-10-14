import json
import re
import sys

def cue_time_to_seconds(cue_time: str) -> float:
    """
    Convert CUE time format (MM:SS:FF) to seconds with 3 decimal places.
    Each second has 75 frames (FF).
    """
    minutes, seconds, frames = map(int, cue_time.split(':'))
    total_seconds = minutes * 60 + seconds + frames / 75
    return round(total_seconds, 3)


def parse_cue(file_path: str):
    """
    Loads a CUE file and returns JSON with track times in seconds (3 decimal places).
    """
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    result = {}
    current_title = None

    for line in lines:
        line = line.strip()

        # We find the song title
        title_match = re.match(r'^TITLE\s+"(.+)"$', line)
        if title_match:
            current_title = title_match.group(1)

        # We find index 01 (beginning of the song)
        index_match = re.match(r'^INDEX\s+01\s+(\d{2}:\d{2}:\d{2})$', line)
        if index_match and current_title:
            cue_time = index_match.group(1)
            seconds = cue_time_to_seconds(cue_time)
            result[seconds] = current_title
            current_title = None

    return result


def main():
    if len(sys.argv) != 2:
        print("Using: python cue_to_json.py file.cue")
        sys.exit(1)

    file_path = sys.argv[1]
    data = parse_cue(file_path)
    print(json.dumps(data, indent=4, ensure_ascii=False))


if __name__ == "__main__":
    main()
