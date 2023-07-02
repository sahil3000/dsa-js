// Ques 1 : Given an input string s, reverse the order of the words

// Input: "the sky is blue"     ----->>>>>     Output: "blue is sky the"
// Input: "  hello world  "     ----->>>>>     Output: "world hello"
// Input: "a good   example"    ----->>>>>     Output: "example good a"

// "the sky is blue" => [the,sky,is,blue]
// [] => [the,sky,is,blue] => blue is sky the

const reverseWords = (str) => {
    const words = str.split(" ");
    const stack = [];

    for (let word of words) {
        // if (word) {
            stack.push(word);
        // }
    }

    let finalResult = "";

    while (stack.length) {
        const current = stack.pop();
        finalResult += " " + current;
    }
    return finalResult.trim();
}

console.log(reverseWords("the sky is blue"));
console.log(reverseWords("a good   example"));

// Time Complexity = O(n)
// Space Complexity = O(n)