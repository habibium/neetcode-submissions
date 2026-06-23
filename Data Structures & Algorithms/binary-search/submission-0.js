class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let leftIdx = 0
        let rightIdx = nums.length

        while (leftIdx < rightIdx) {
            const midIdx = Math.round((leftIdx + rightIdx) / 2) - 1
            const midItem = nums[midIdx]

            if (target === midItem) {
                return midIdx
            }

            if (target < midItem) {
                rightIdx = midIdx
            }

            if (target > midItem) {
                leftIdx = midIdx + 1
            }
        }

        return -1
    }
}
