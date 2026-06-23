class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map()
        strs.forEach(str => {
            const sortedStr = str.split('').sort().join('')
            if (map.has(sortedStr)) map.get(sortedStr).push(str)
            else map.set(sortedStr, [str])
        })

        const result = []
        for (const [_k, v] of map) 
            result.push(v)
        
        return result
    }
}
