// Ques 4 : Sliding Window Maximum
// You are given an array of integers nums, there is a sliding window of size k which is
// moving from the very left of the array to the very right.You can only see the k numbers
// in the window. Each time the sliding window moves right by one position. For each window,
// take the maximum element and add them to a final result array.

// Input: nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3
// Output: [3, 3, 5, 5, 6, 7]

// Brute Force Solution
const maxSlidingWindow = (nums, size) => {
    const result = [];
    const length = nums.length;
    for (let i = 0; i <= length - size; i++) {
        let max = nums[i];

        for (let j = 1; j < size; j++) {
            if (nums[i + j] > max) {
                max = nums[i + j];
            }
        }
        result.push(max);
    }
    return result;
}
const nums = [1, 3, -1, -3, 5, 3, 6, 7];
const k = 3;
console.log(maxSlidingWindow(nums, k));


// Optimised Solution - Deque
const maxSlidingWindowQueue = function (nums, k) {
    const result = [];
    const deque = [];

    for (let i = 0; i < nums.length; i++) {
        // O(n)
        console.log("deque", deque, i)
        console.log("result ", result, i)

        // remove first element if it's outside the window
        if (deque.length > 0 && deque[0] <= i - k) {
            console.log("deque remove element before", deque, i)
            deque.shift();
            console.log("deque remove element after", deque, i)
            console.log("\n")
        }

        while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
            console.log("deque pop before", deque, i)
            deque.pop();
            console.log("deque pop after", deque, i)
            console.log("\n")
        }

        deque.push(i);

        // if window has k elements add to results (first k-1 windows have < k elements because we start from empty window and add 1 element each iteration)
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }

    return result;
};

// Time Complexity - O(n)
// Space Complexity - O(n)
console.log(maxSlidingWindowQueue([1, 3, -1, -3, 5, 3, 6, 7], 3));