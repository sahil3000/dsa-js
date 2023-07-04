// Ques 3 : Given an integer x, return true if x is a palindrome, and false otherwise.
// Input: x = 121      ----->>>>>      Output: true;


const isPalindrome = (num) => {
    const str = String(num);
    let len = str.length;
    if (len <= 1) return true;
    if (str[0] != str[len-1]) return false;
    return isPalindrome(str.slice(1, -1));
}

console.log(isPalindrome(123))
console.log(isPalindrome(121))
console.log(isPalindrome(1001))
console.log(isPalindrome(1002))
