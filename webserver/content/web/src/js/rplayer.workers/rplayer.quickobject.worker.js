export default class QuickObject {
    constructor(input, condition = false) {
        console.log(input,condition);
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
        console.log("[RPlayer:QuickObject]",this.input);
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