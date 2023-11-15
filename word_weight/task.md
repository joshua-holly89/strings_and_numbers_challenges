# Word Weight

## Task

Given is a string s and a number of cross-sum-iterations n>=1.

1) For every character in the string, find the corresponding index in the alphabet: a=0, b=1, c=2,...
2) Calculate the cross sum. If n > 1 calculate the cross sum of the cross sum. If n > 2 repeat, and so on. So you calculated the cross sum n times.

## Example

s = "turing", n = 2

"turing" => 20 21 18 9 14 7
n=1 => cross sum of 2021189147 is 35
n=2 => cross sum of 35 is 8
