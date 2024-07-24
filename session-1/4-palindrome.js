function isPalindrome(word) {
    let reversed = ''
    for (let i = word.length - 1; i >= 0; i--) {
        reversed += word[i]
    }
    return reversed === word
  }
  
  const word = 'racecar'
  if (isPalindrome(word)) {
    console.log('It is a palindrome!')
  } else {
    console.log('It is not a palindrome!')
  }