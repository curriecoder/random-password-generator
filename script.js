// Main function is defined and the arguments are given
function generatePassword(passwordLength, lowerCaseCharacters, upperCaseCharacters, numericalCharacters, specialCharacters) {

  // Alerting user of the accepted password criteria
  alert("Create a password with 8-128 characters using lower/uppercase alphabetical, numerical, and special characters.")

  // Prompt for input of password length
  var passwordLength = prompt("Enter the length of password between 8-128 characters.")

  function checkPassword () {
    if (passwordLength < 8 || passwordLength > 128) {
      alert("Password length must be between 8-128 characters")
    }
    // generatePassword(); TODO - figure out how to get back to the top after password is wrong length.
  }

  checkPassword()

  // Prompt for including lowercase characters
  var lowerCaseCharacters = confirm("Include lowercase characters?"); //true-false
  // Prompt for including uppercase characters
  var upperCaseCharacters = confirm("Include uppercase characters?"); //true-false
  // Prompt for including numerical characters
  var numericalCharacters = confirm("Include numerical characters?"); //true-false
  // Prompt for including special characters
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
      array.push(i);
    }
    return array;
  }

  // Default to empty array
  var charCodes = []
  // If uppercase, numerical and special characters === true include them in password
  if (lowerCaseCharacters === true) charCodes = LOWERCASE_CHAR_CODES;
  if (upperCaseCharacters === true) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES);
  if (numericalCharacters === true) charCodes = charCodes.concat(NUMBER_CHAR_CODES);
  if (specialCharacters === true) charCodes = charCodes.concat(SYMBOL_CHAR_CODES);
  else noInput()
  
  // Function for no input for character type
  function noInput() {
    if (lowerCaseCharacters === false && upperCaseCharacters === false && 
    numericalCharacters === false && specialCharacters === false)
    alert("Can't build something out of nothing!")
  }

  // Empty string to recieve password characters
  var passwordCharacters = []
  // Loop through charCodes length 
  for (var i = 0; i < passwordLength; i++) {
    // Get random whole number from index
    var characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
  // Returns password characters and joins into string
  return passwordCharacters.join("")
  
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