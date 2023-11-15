# Find large groups

## Task

For a given string, find large groups. A large group is, when the same letter is repeated at least 3 times. Return an array of large groups. A large group should be an array too, where the first element is the start position of the letter and the second the end position of the letter.

## Example

Given string "abcdddeeeeaabbbcd"
The first group is "ddd", from the 3rd to the 5th letter.
The second group is "eeee", from the 6th to the 9th letter.
The third group is "bbb", from the 12th to the 14th letter.
Hence the result is: [ [ 3, 5 ], [ 6, 9 ], [ 12, 14 ] ]
