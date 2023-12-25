function getIndexsForPalindrome(word) {
    let res = null
    for (const a of Array.from({ length: word.length }).keys()) {
      for (const b of Array.from({ length: word.length }).keys()) {
        let swapped = [...word]
        let aux = word[a]
        swapped[a] = word[b]
        swapped[b] = aux
        let left = swapped.slice(0, Math.floor(word.length / 2)).join("")
        let right = swapped.slice(Math.ceil(word.length / 2)).reverse().join("")
        res = [
          [
            null
            , [
              []
              , [a, b]
            ][+((a + b) > 0)]
          ][+(left == right)]
          , res
        ][+!!res]
      }
    }
    return res
}
  
console.log(getIndexsForPalindrome('anna'));      // []
console.log(getIndexsForPalindrome('abab'));      // [0, 1]
console.log(getIndexsForPalindrome('abac'));      // null
console.log(getIndexsForPalindrome('aaaaaaaa')); // []
console.log(getIndexsForPalindrome('aaababa'));  // [1, 3]
console.log(getIndexsForPalindrome('caababa'));  // null
  