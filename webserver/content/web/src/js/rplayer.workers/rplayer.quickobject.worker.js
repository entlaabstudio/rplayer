/**
 * @file QuickObject worker for RPlayer web application
 * @copyright Robert Rajs 2022
 * @author Robert Rajs
 * @see {@link https://rajs.info|Home}
 * @see {@link https://zesilovac.cz|Zesilovač}
 * @see {@link https://bandzone.cz/rajs|Bandzone}
 * @see {@link https://technotramp.com|Technotramp}
 * @see {@link https://github.com/entlaabstudio/rplayer|GitHub}
 * @see {@link https://cs-cz.facebook.com/robert.rajs.9|Facebook}
 * @license
 * Copyright (c) 2022 Robert Rajs
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

export default class QuickObject {
    constructor(input, condition = false) {
        this.input = input;
        if (!condition) {
            this.input = input;
        } else {
            this.input = {};
            for (const [key, value] of Object.entries(input)) {
                if (
                    value[condition.key] !== undefined &&
                    value[condition.key] == condition.val
                ) {
                    this.input[key] = value;
                }
            }
        }
    }
    
    find(n) {
        var interval = {
            low: 0,
            high: this.length()
        }
        var that = this;
        var ret;
        var lastRet = false;
        var steps = 0;
        function recursion() {
            steps += 1;
            var intervalLength = interval.high - interval.low;
            if (lastRet != ret) {
                lastRet = ret;
                var half = Math.floor(intervalLength / 2);
                ret = that.nthKey(interval.low + half);
                if (that.nthKey(interval.low + half) > n) {
                    interval.high = interval.low + half;
                } else {
                    interval.low = interval.low + half;
                }
                recursion();
            }
        }
        recursion();
        return {
            key: ret,
            value: this.input[ret],
            steps: steps
        };
    }
    
    nthKey(n) {
        return parseInt(Object.keys(this.input).slice(n, n + 1)[0]);
    }
    
    length() {
        return Object.keys(this.input).length;
    }
}