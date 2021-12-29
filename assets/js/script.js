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
    if (passwordLength < 8) {
      window.alert("Passwords must be at least 8 characters.");
      return;
  } else {
    if (passwordLength > 129) {
      window.alert("Passwords must be fewer than 129 characters.");
      return;
  } else {
  
  var numbers = window.confirm ("Would you care to utilize numbers?");
  var upperCases = window.confirm("Would you care to utilize uppercase letters?");
  var lowerCases = window.confirm("Would you care to utilize lowercase letters?");
  var specials = window.confirm("Would you care to utilize special characters?");
  }
  }

//Add special characters here//
const specialCharacters = "!@#$%^&*()";

//Minimum standards//
var minimumCount = 0;
var minimumNumbers = "";
var minimumUpperCases = "";
var minimumLowerCases = "";
var minimumSpecialCharacters = "";

//Random character array//
var inputArray = {
  getNumbers: function () {
    return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
  },
  getUpperCases: function () {
    return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
  },
  getLowerCases: function () {
    return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
  },
  getSpecialCharacters: function () {
    return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
  }
};

//Input verification//
if (numbers === true) {
  minimumNumbers = inputArray.getNumbers();
  minimumCount++;
}
if (upperCases === true) {
  minimumUpperCases = inputArray.getUpperCases();
  minimumCount++;
}
if (lowerCases === true) {
  minimumLowerCases = inputArray.getLowerCases();
  minimumCount++;
}
if (specials === true) {
  minimumSpecialCharacters = inputArray.getSpecialCharacters();
  minimumCount++;
}

//Loops//
var passwordSuccess = "";
for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
  var anyNumber = Math.floor(Math.random() * 4);
  passwordSuccess += anyNumber;
}

//Remaining callbacks from above//
passwordSuccess += minimumNumbers;
passwordSuccess += minimumUpperCases;
passwordSuccess += minimumLowerCases;
passwordSuccess += minimumSpecialCharacters;


//Endgame-run//
return passwordSuccess;
}
