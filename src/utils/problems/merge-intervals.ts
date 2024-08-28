import assert from "assert";
import { Problem } from "../types/problem";

export const mergeIntervalsHandler = (fn: any) => {
  try {
    const tests = [
      [
        [1, 3],
        [2, 6],
        [8, 10],
        [15, 18],
      ],
      [
        [1, 4],
        [4, 5],
      ],
      [
        [1, 4],
        [0, 4],
      ],
      [
        [1, 4],
        [2, 3],
      ],
    ];
    const answers = [
      [
        [1, 6],
        [8, 10],
        [15, 18],
      ],
      [[1, 5]],
      [[0, 4]],
      [[1, 4]],
    ];
    for (let i = 0; i < tests.length; i++) {
      const result = fn(tests[i]);
      assert.deepEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("Error from mergeIntervalsHandler: ", error);
    throw new Error(error);
  }
};

const starterCodeMergeIntervalsJS = `
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// Do not edit function name
function merge(intervals) {
  // Write your code here
};`;

export const mergeIntervals: Problem = {
  id: "merge-intervals",
  title: "7. Merge Intervals",
  problemStatement: `<p class='mt-3'>Given an array of <code>intervals</code> where <code>intervals[i] = [start<sub>i</sub>, end<sub>i</sub>]</code>, merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.</p>`,
  examples: [
    {
      id: 0,
      inputText: "intervals = [[1,3],[2,6],[8,10],[15,18]]",
      outputText: "[[1,6],[8,10],[15,18]]",
      explanation: `<p class='mt-3'>Intervals <code>[1,3]</code> and <code>[2,6]</code> overlap, so they are merged into <code>[1,6]</code>.</p>`,
    },
    {
      id: 1,
      inputText: "intervals = [[1,4],[4,5]]",
      outputText: "[[1,5]]",
      explanation: `<p class='mt-3'>Intervals <code>[1,4]</code> and <code>[4,5]</code> are considered overlapping, so they are merged into <code>[1,5]</code>.</p>`,
    },
  ],
  constraints: `<li class='mt-2'><code>1 <= intervals.length <= 10<sup>4</sup></code></li>
<li class='mt-2'><code>intervals[i].length == 2</code></li>
<li class='mt-2'><code>0 <= start<sub>i</sub> <= end<sub>i</sub> <= 10<sup>4</sup></code></li>`,
  starterCode: starterCodeMergeIntervalsJS,
  handlerFunction: mergeIntervalsHandler,
  starterFunctionName: "function merge(",
  order: 7,
};
