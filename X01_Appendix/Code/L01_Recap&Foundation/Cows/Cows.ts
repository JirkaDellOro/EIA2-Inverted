namespace Cows {
    let nums: number[] = [2, 6, 5];
    let results: string[] = [];
    for (let i: number = 0; i < nums.length; i++) {
        let result: string = createCall("m", nums[i]);
        results.push(result);
    }
    console.log(results);

    function createCall(start: string, length: number): string {
        for (let k: number = length; k > 0; k--) {
            if (k == 1 || k == length / 2)
                start += "h";
            start += "u";
        }
        return start;
    }
}