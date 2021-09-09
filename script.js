// GIVEN I need a new, secure password
function generatePassword(passwordLength, lowerCaseCharacters, upperCaseCharacters, numericalCharacters, specialCharacters) {
  var randomPassword = "Your password is: " + password;
  // WHEN I click the button to generate a password
  // THEN I am presented with a series of prompts for password criteria

  alert("Create a password with 8-128 characters using lower/uppercase alphabetical, numerical, and special characters.")

  // WHEN prompted for password criteria
  // THEN I select which criteria to include in the password

  // Prompt for input of password length
  var passwordLength = prompt("Enter the length of password between 8-128 characters.")

  var lowerCaseCharacters = confirm("Include lowercase characters?"); //true-false
  var upperCaseCharacters = confirm("Include uppercase characters?"); //true-false
  var numericalCharacters = confirm("Include numerical characters?"); //true-false
  var specialCharacters = confirm("Include special characters?"); //true-false

  // WHEN I answer each prompt
  // THEN my input should be validated and at least one character type should be selected-edge case fault(alert)
  
  // Creating the arrays from ASCII Character Codes for uppercase, lowercase, numbers, and special characters
  var UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
  var LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
  var NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
  var SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
    arrayFromLowToHigh(58,64)
    ).concat(
    arrayFromLowToHigh(91, 96)
    ).concat(
    arrayFromLowToHigh(123, 126)
  )

  // Generate an array, add 'i' to the empty array, return the new array
  function arrayFromLowToHigh(low, high) {
    var array = []
    for (var i = low; i <= high; i++) {
      array.push(i)
    }
    return array
  }

  // Default to empty array
  var charCodes = []
  // If uppercase, numerical and special characters === true include in password
  if (lowerCaseCharacters === true) charCodes = LOWERCASE_CHAR_CODES;
  if (upperCaseCharacters === true) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES);
  if (numericalCharacters === true) charCodes = charCodes.concat(NUMBER_CHAR_CODES);
  if (specialCharacters === true) charCodes = charCodes.concat(SYMBOL_CHAR_CODES);
  
  // Empty string to recieve password characters
  var passwordCharacters = []
  // Loop through charCodes length 
  for (var i = 0; i < passwordLength; i++) {
    // Get random whole number of index
    var characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
  return passwordCharacters.join("")
   
  return randomPassword;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);