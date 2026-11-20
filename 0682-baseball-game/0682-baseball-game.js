/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let scores = [];

    for (let i = 0; i < operations.length; i++) {
        let op = operations[i];

        if (op === "C") {
            scores.pop();
        }
        else if (op === "D") {
            scores.push(scores[scores.length - 1] * 2);
        }
        else if (op === "+") {
            let last = scores[scores.length - 1];
            let secondLast = scores[scores.length - 2];

            scores.push(last + secondLast);
        }
        else {
            scores.push(Number(op));
        }
    }

    return scores.reduce((sum, score) => sum + score, 0);
};