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

//Add special characters here//
const specialCharacters = "!@#$%^&*()";

//Function for password generator//

//Minimum standards//

//Random character array//

//Input verification//

//Loops//

//Remaining callbacks from above//

//Endgame-run//