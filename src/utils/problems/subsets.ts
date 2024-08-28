import assert from "assert";
import { Problem } from "../types/problem";

export const subsetsHandler = (fn: any) => {
  try {
    const tests = [[1, 2, 3], [0], [1], [1, 2]];
    const answers = [
      [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]],
      [[], [0]],
      [[], [1]],
      [[], [1], [2], [1, 2]],
    ];
    for (let i = 0; i < tests.length; i++) {
      const result = fn(tests[i]);
      assert.deepEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("Error from subsetsHandler: ", error);
    throw new Error(error);
  }
};

const starterCodeSubsetsJS = `
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// Do not edit function name
function subsets(nums) {
  // Write your code here
};`;

export const subsets: Problem = {
  id: "subsets",
  title: "10. Subsets",
  problemStatement: `<p class='mt-3'>Given an integer array <code>nums</code> of unique elements, return all possible subsets (the power set).</p>
<p class='mt-3'>The solution set must not contain duplicate subsets. Return the solution in any order.</p>`,
  examples: [
    {
      id: 0,
      inputText: "nums = [1,2,3]",
      outputText: "[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]",
    },
    {
      id: 1,
      inputText: "nums = [0]",
      outputText: "[[],[0]]",
    },
  ],
  constraints: `<li class='mt-2'><code>1 <= nums.length <= 10</code></li>
<li class='mt-2'><code>-10 <= nums[i] <= 10</code></li>
<li class='mt-2'><code>All the numbers of <code>nums</code> are unique.</code></li>`,
  starterCode: starterCodeSubsetsJS,
  handlerFunction: subsetsHandler,
  starterFunctionName: "function subsets(",
  order: 10,
};
