# Array Reconstruction
Given an array of distinct integers called "main" and an array of integer arrays called "sub", where the integers in each sub- array are distinct. The task is to check if the "main" array can be formed by concatenating the arrays in "sub" in any order, but without reordering the integers in each sub-array.
Return true if it is possible to form the "main" array from "sub", otherwise return false.

# Examples

## Example 1:
Input: main = [15,88], sub = [[88], [15]]
Output: true
Explanation: Concatenate [15] then [88]

## Example 2:
Input: main = [49,18,16], sub = [[16,18,49]]
Output: false
Explanation: Even though the numbers match, we cannot reorder pieces[0].

# Constraints:
• 1 <= sub.length <= main.length <= 100
sum(sub[i].length) ==main.length
• 1 <= sub[i].length <= main.length
1 <= main[i], sub[i][j] <= 100