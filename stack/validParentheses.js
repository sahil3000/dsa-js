// Ques 2 Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
//          determine if the input string is valid.
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Input: "()"             ----->>>>>        Output: true
// Input: "([]{})"         ----->>>>>        Output: true
// Input: "(]"             ----->>>>>        Output: false

const isValidParentheses = (str) => {
    const stack = [];
    const strLength = str.length;
    for (let i = 0; i < strLength; i++) {
        let char = str[i];

        if (char === "(" || char === "[" || char === "{") {
            stack.push(char);
        } else if (char === ")" || char === "]" || char === "}") {
            if (isEmpty(stack)) {
                return false;
            }

            const top = stack.pop();

            if (
                char === ")" && top !== "(" || 
                char === "]" && top !== "[" ||
                char === "}" && top !== "{"
            ) {
                return false;
            }
        }
    }
    return isEmpty(stack);
}

const isEmpty = (arr) => arr.length === 0;
const string1 = "([{})";
const string2 = "([]{})[}";
const string3 = "([]{}){}";
console.log(isValidParentheses(string1));
console.log(isValidParentheses(string2));

// Time Complexity = O(n)
// Space Complexity = O(n)