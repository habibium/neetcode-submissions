impl Solution {
    pub fn has_duplicate(nums: Vec<i32>) -> bool {
        let mut seen = HashSet::with_capacity(nums.len());
        nums.iter().any(|n| !seen.insert(n))
    }
}
