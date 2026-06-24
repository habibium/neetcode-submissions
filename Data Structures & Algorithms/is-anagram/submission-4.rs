impl Solution {
    pub fn is_anagram(s: String, t: String) -> bool {
        let mut s: Vec<char> = s.chars().collect();
        s.sort_unstable();
        let s: String = s.iter().collect();
        let mut t: Vec<char> = t.chars().collect();
        t.sort_unstable();
        let t: String = t.iter().collect();

        s == t
    }
}
