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
    function createCall(_start, _length) {
        for (let k = _length; k > 0; k--) {
            if (k == 1 || k == _length / 2)
                _start += "h";
            _start += "u";
        }
        return _start;
    }
})(Cows || (Cows = {}));
//# sourceMappingURL=Cows.js.map