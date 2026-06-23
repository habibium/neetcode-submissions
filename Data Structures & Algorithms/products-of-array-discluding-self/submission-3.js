class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        //              [48, 24, 6, 1]
        // nums =      [1, 2, 4, 6]
        // result = [1, 1, 2, 8]
        // prod = 1
        // result = [,8]
        // [48,24,12,8]
        const n = nums.length
        const output = new Array(n).fill(1) // [1,1,1,1]
        for (let i = 1; i < n; i++) {// nums = [1,2,4,6]
            output[i] = output[i-1] * nums[i-1]
        }
        // output = [1, 1, 2, 8]
        // nums =   [1, 2, 4, 6]
        let p = 1
        for (let i = n - 1; i >= 0; i--) {
            output[i] = p * output[i]
            p *= nums[i]
        }

        return output
    }
}
