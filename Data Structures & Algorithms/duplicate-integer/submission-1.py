class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        for i, n in enumerate(nums):
            try:
                nums.index(n, i + 1)
                return True
            except ValueError:
                continue

        return False