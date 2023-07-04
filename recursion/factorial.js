// 5 * 4 * 3 * 2 * 1

// 5 * factorial(4)
// 4 * factorial(3)
// 3 * factorial(2)
// 2 * factorial(1)
// 1 * factorial(0)

const factorial = (num) => {
    if (num === 0) {
        return 1;
    }
    return num * factorial(num - 1);
}

console.log(factorial(5))