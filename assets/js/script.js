// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Function for password generator//
function generatePassword() {
  var passwordLength = window.prompt("Enter the desired number of characters; passwords must be at least 8 characters.");
  var numbers = window.prompt ("Would you care to utilize numbers?");
  var upperCases = window.prompt("Would you care to utilize uppercase letters?");
  var lowerCases = window.prompt("Would you care to utilize lowercase letters?");
  var specials = window.prompt("Would you care to utilize special characters?");
}

//Add special characters here//
const specialCharacters = "!@#$%^&*()";

//Minimum standards//

//Random character array//

//Input verification//

//Loops//

//Remaining callbacks from above//

//Endgame-run//