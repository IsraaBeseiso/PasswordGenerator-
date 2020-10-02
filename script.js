// Array of special characters to be included in password
var special = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];
// Array of numeric characters to be included in password
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// Array of lowercase characters to be included in password
var lower = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
// Array of uppercase characters to be included in password
var upper = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
// Function to prompt user for password options
function passwordOptions() {
  // Variable to store length of password from user input
  var length = parseInt(
    prompt("How many characters would you like your password to contain?")
  );
  // Conditional statement to check if password length is a number. Prompts end if this evaluates false
  if (isNaN(length) === true) {
    alert("Password length must be provided as a number");
    return;
  }
  // Conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false
  if (length < 8) {
    alert("Password length must be at least 8 characters");
    return;
  }
  // Conditional statement to check if password length is less than 128 characters long. Prompts end if this evaluates false
  if (length > 128) {
    alert("Password length must less than 129 characters");
    return;
  }
  // Variable to store boolean regarding the inclusion of special characters
  var hasSpecial = confirm("Click OK to confirm including special characters.");
  // Variable to store boolean regarding the inclusion of numeric characters
  var hasNumeric = confirm("Click OK to confirm including numeric characters.");
  // Variable to store boolean regarding the inclusion of lowercase characters
  var hasLower = confirm("Click OK to confirm including lowercase characters.");
  // Variable to store boolean regarding the inclusion of uppercase characters
  varhasUpper = confirm("Click OK to confirm including uppercase characters.");
  // Conditional statement to check if user does not include any types of characters. Password generator ends if all four variables evaluate to false
  if (
    hasSpecial === false &&
    hasNumeric === false &&
    hasLower === false &&
    hasUpper === false
  ) {
    alert("Must select at least one character type");
    return;
  }
  // Object to store user input
  var password = {
    length,
    hasSpecial,
    hasNumeric,
    hasLower,
    hasUpper,
  };
  return password;
}
// Function for getting a random element from an array
function randomizer(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];
  return randElement;
}
// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();
  // Variable to store password as it's being concatenated
  var password = "";
  // Array to store types of characters to include in password
  var possible = [];
  // Array to contain one of each type of chosen character to ensure each will be used
  var guarantee = [];
  // Conditional statement that adds array of special characters into array of possible characters based on user input
  // Push new random special character to guaranteedCharacters
  if (options.hasSpecial) {
    possible = possible.concat(special);
    guaranteed.push(randomizer(special));
  }
  // Conditional statement that adds array of numeric characters into array of possible characters based on user input
  // Push new random special character to guaranteedCharacters
  if (options.hasNumeric) {
    possibleCharacters = possibleCharacters.concat(numeric);
    guaranteedCharacters.push(randomizer(numeric));
  }
  // Conditional statement that adds array of lowercase characters into array of possible characters based on user input
  // Push new random lower-cased character to guaranteedCharacters
  if (options.hasLower) {
    possible = possible.concat(lower);
    guaranteed.push(randomizer(lower));
  }
  // Conditional statement that adds array of uppercase characters into array of possible characters based on user input
  // Push new random upper-cased character to guaranteedCharacters
  if (options.hasUpper) {
    possible = possible.concat(upper);
    guaranteed.push(randomizer(upper));
  }
  // For loop to iterate over the password length from the options object, selecting random indices from the array of possible characters and concatenating those characters into the password variable
  for (var i = 0; i < options.length; i++) {
    var possible = randomizer(possible);
    password += possible;
    // password.push(possibleCharacter);
  }
  // Mix in at least one of each guaranteed character in the password
  for (var i = 0; i < guaranteed.length; i++) {
    password[i] = guaranteed[i];
  }
  // Transform the password into a string and pass into writePassword
  return password;
  // password = ['a', 'B', '1', '?'].join('') 'aB1?'
}
//** this is what you get from your develop folder */
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
