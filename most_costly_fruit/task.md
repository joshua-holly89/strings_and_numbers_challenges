# Most costly fruit
Given an array string strs combination of fruit name and their price, return the most costly fruit in strs. The cost of fruit can be defined as:
• The integers represent actual cost of the fruit if not associated with any fruit.
• The length of the string, otherwise.

# Examples
## Example 1:
Input: strs = ["apple3", "banana", "8","3"]
Output: 8
Explanation:
"apple3" consists of both letters and digits, so its cost is its length, i.e. 6.
"banana" consists only of letters, so its cost is also its length, i.e. 6.
"8" consists only of digits, so its cost is its numeric equivalent, i.e. 8.
"3" also consists only of digits, so its cost is 3.
Hence, the maximum cost is 8, of "8"