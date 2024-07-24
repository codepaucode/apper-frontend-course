function convertToVowels(word) {
    const vowels = 'aeiouAEIOU' //vowel upper and lowercase
    //convert input word to an array then filter letters if it is included in the vowels string then join.
    return Array.from(word).filter(letter => vowels.includes(letter)).join('');
}
  
  const word = 'thisissomeword'
  const wordWithOnlyVowels = convertToVowels(word)
  console.log(wordWithOnlyVowels) // iioeo
