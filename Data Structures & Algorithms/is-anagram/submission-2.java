class Solution {
    public boolean isAnagram(String s, String t) {
        if (sortString(s).equals(sortString(t)))
            return true;
        return false;
    }

    public static String sortString(String s) {
        char[] charArr = s.toCharArray();
        Arrays.sort(charArr);
        return new String(charArr);
    }
}
