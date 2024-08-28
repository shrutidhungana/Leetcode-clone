import assert from "assert";
import { Problem } from "../types/problem";
import example from "./images/binary-tree.jpg";

// Definition for a binary tree node
class TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(
    value: number,
    left: TreeNode | null = null,
    right: TreeNode | null = null
  ) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

export const maxDepthHandler = (fn: any) => {
  try {
    const tests = [
      createBinaryTree([3, 9, 20, null, null, 15, 7]),
      createBinaryTree([1, null, 2]),
      createBinaryTree([]),
      createBinaryTree([0]),
    ];
    const answers = [3, 2, 0, 1];
    for (let i = 0; i < tests.length; i++) {
      const result = fn(tests[i]);
      assert.equal(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("Error from maxDepthHandler: ", error);
    throw new Error(error);
  }
};

// Helper function to create a binary tree from an array
function createBinaryTree(values: (number | null)[]): TreeNode | null {
  if (values.length === 0) return null;

  const root = new TreeNode(values[0]!);
  const queue = [root];
  let i = 1;

  while (i < values.length) {
    const current = queue.shift()!;
    if (values[i] !== null) {
      current.left = new TreeNode(values[i]!);
      queue.push(current.left);
    }
    i++;
    if (i < values.length && values[i] !== null) {
      current.right = new TreeNode(values[i]!);
      queue.push(current.right);
    }
    i++;
  }

  return root;
}

const starterCodeMaxDepthJS = `
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// Do not edit function name
function maxDepth(root) {
  // Write your code here
};`;

export const maxDepthOfBinaryTree: Problem = {
  id: "maximum-depth-of-binary-tree",
  title: "8. Maximum Depth of Binary Tree",
  problemStatement: `<p class='mt-3'>Given the <code>root</code> of a binary tree, return <em>its maximum depth</em>.</p>
<p class='mt-3'>A binary tree's <strong>maximum depth</strong> is the number of nodes along the longest path from the root node down to the farthest leaf node.</p>`,
  examples: [
    {
      id: 0,
      inputText: "root = [3,9,20,null,null,15,7]",
      outputText: "3",
      img: example.src,
    },
    {
      id: 1,
      inputText: "root = [1,null,2]",
      outputText: "2",
    },
  ],
  constraints: `<li class='mt-2'><code>The number of nodes in the tree is in the range [0, 10<sup>4</sup>].</code></li>
<li class='mt-2'><code>-100 <= Node.val <= 100</code></li>`,
  starterCode: starterCodeMaxDepthJS,
  handlerFunction: maxDepthHandler,
  starterFunctionName: "function maxDepth(",
  order: 8,
};
