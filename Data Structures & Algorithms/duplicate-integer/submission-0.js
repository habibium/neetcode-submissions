class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        for (let i = 0; i < nums.length; i++) {
            const n = nums[i];
            const searchIndex = nums.indexOf(n, i + 1);
            if (searchIndex !== -1) return true;
        }
        return false;
    }
}
