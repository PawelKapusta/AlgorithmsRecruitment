//Function that checks if word is a palindrome
const isPalindrome = (word: string): boolean => {
  const regex = /[\W_]/g;
  const cleaned = word.toLowerCase().replace(regex, '');
  const reversedCleaned = cleaned.split('').reverse().join('');
  return cleaned === reversedCleaned;
};

console.log("Is 'Kayak' a palindrome?: ", isPalindrome('Kayak'));
console.log("Is 'malayalam' a palindrome?: ", isPalindrome('malayalam'));
console.log("Is 'palindrome' a palindrome?: ", isPalindrome('palindrome'));
console.log("Is '11/11/11' a palindrome?: ", isPalindrome('11/11/11'));
console.log(
  "Is 'Surprisingly Funny Palindromes' a palindrome?: ",
  isPalindrome('Surprisingly Funny Palindromes'),
);
console.log("Is 'Level' a palindrome?: ", isPalindrome('Level'));
console.log(
  "Is 'Red rum, sir, is murder' a palindrome?: ",
  isPalindrome('Red rum, sir, is murder'),
);
console.log(
  "Is 'Eva, can I see bees in a cave?' a palindrome?: ",
  isPalindrome('Eva, can I see bees in a cave?\n'),
);
