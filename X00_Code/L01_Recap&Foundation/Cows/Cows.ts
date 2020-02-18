namespace Cows {
    let nums: number[] = [2, 6, 5];
    let results: string[] = [];
    for (let i: number = 0; i < nums.length; i++) {
        let result: string = createCall("m", nums[i]);
        results.push(result);
    }
    console.log(results);

    function createCall(_start: string, _length: number): string {
        for (let k: number = _length; k > 0; k--) {
            if (k == 1 || k == _length / 2)
                _start += "h";
            _start += "u";
        }
        return _start;
    }
}