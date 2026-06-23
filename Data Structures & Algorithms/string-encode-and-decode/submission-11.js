class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = ""
        for (const str of strs) {
            result += `#${str.length};${str}`
        }
        console.log({encoded:result})
        return result
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        // suppose `str` is `#4;neet#4;code#4;love#3;you`
        // console.log({
        //     replaced: str
        //                     .match(/#\d+;/g).join("") // #4;#4;#4;#3;
        // })
        if (!str) {
            return []
        }
        
        const countArray = str
                            .match(/#\d+;/g).join("") // #4;#4;#4;#3;
                            .replace(/#/g, "") // #4#4#4#3
                            .split(";") // [ '4', '4', '4', '3', '' ]
                            .slice(0, -1) // [ '4', '4', '4', '3' ]
                            .map(Number) // [ 4, 4, 4, 3 ]

        const strItemsJoined = str
                            .replace(/#\d+;/g, "") // neetcodeloveyou

        const result = []
        let countArrIdx = 0
        let currChar = 0
        
        while (countArrIdx < countArray.length) {
            const count = countArray[countArrIdx]
            console.log({
                currChar,
                count
            })
            result.push(strItemsJoined.slice(currChar, currChar + count))
            
            currChar += count
            countArrIdx++
        }
        console.log({
            countArray,
            strItemsJoined,
            result
        })
        return result
    }
}
