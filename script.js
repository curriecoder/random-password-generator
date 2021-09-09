// GIVEN I need a new, secure password
function generatePassword() {
  var randomPassword = "Your password is: " + password;
  // WHEN I click the button to generate a password
  // THEN I am presented with a series of prompts for password criteria

  alert("Create a password with 8-128 characters using lower/uppercase alphabetical, numerical, and special characters.")

  // WHEN prompted for password criteria
  // THEN I select which criteria to include in the password

  var passwordLength = prompt("Enter the length of password between 8-128 characters.")

  // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters

  // WHEN asked for character types to include in the password
  // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

  var upperCaseCharacters = confirm("Include uppercase characters?"); //true-false
  var lowerCaseCharacters = confirm("Include lowercase characters?"); //true-false
  var numericalCharacters = confirm("Include numerical characters?"); //true-false
  var specialCharacters = confirm("Include special characters?"); //true-false

  // WHEN I answer each prompt
  // THEN my input should be validated and at least one character type should be selected-edge case fault(alert)

  var upperCaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var lowerCaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var numericalArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var specialCharactersArr = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]

  // WHEN all prompts are answered
  // THEN a password is generated that matches the selected criteria
  // if uppercase, lowercase, etc === true include in password
  
  var passwordCharacters = []

  if (upperCaseCharacters === true) {
    // access array of uppercase randomly
  }
  else //don't include uppercase array

  if (lowerCaseCharacters === true) {
    // access array of lowercase randomly
  }
  else //don't include lowercase

  if (numericalCharacters === true) {
    // access array of numerical randomly
  }
  else //don't include numerical
  
  if (specialCharacters === true) {
    // access array of specailcharacters randomly
  }
  else //don't include specialcharacters
  // need an else if none of the classes were selected.

  // WHEN the password is generated
  // THEN the password is either displayed in an alert or written to the page

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