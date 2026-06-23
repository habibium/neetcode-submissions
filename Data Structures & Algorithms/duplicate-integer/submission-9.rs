impl Solution {
    pub fn has_duplicate(nums: Vec<i32>) -> bool {
        let mut nums_set = HashSet::new();
        for n in &nums {
            nums_set.insert(n);
        }

        nums.len() != nums_set.len()
    }
}
