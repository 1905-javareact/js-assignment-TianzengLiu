/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
function isPalindrome(someStr) {
    return someStr === someStr.split('/[.,\/ -]/').reverse().join('');
  
}

//Test
console.log(isPalindrome('ama, ama'));