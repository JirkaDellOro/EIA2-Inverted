"use strict";
var Cows;
(function (Cows) {
    let nums = [2, 6, 5];
    let results = [];
    for (let i = 0; i < nums.length; i++) {
        let result = createCall("m", nums[i]);
        results.push(result);
    }
    console.log(results);
    function createCall(start, length) {
        for (let k = length; k > 0; k--) {
            if (k == 1 || k == length / 2)
                start += "h";
            start += "u";
        }
        return start;
    }
})(Cows || (Cows = {}));
//# sourceMappingURL=Cows.js.map