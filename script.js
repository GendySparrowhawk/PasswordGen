var generateBtn = document.querySelector("#generate");
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers = '012345689';
var specials = '~!@#$%^&*?';
var combined = '';
var password = '';
var wantslowercase = confirm('Do you want lowercase letters?');
var wantsuppercase = confirm('Do you want uppercase?');
var wantsnumbers = confirm('Do you want numbers?');
var wantsspecials = confirm('Do you want special characters?');

var passwordLength = prompt('How many characters would you like in your password?');

if (wantslowercase) {
  combined += lowercase;
}
if (wantsuppercase) {
  combined += uppercase;
}
if (wantsnumbers) {
  combined += numbers;
}
if (wantsspecials) {
  combined += specials;
}

if (passwordLength.length < 1) {
  alert('you must enter a number');
  var passwordLength = prompt('How many characters would you like in your password?');
}
if (isNaN(passwordLength)) {
  alert('you must use numbers')
  passwordLength = prompt('How many characters would you like in your password?');
}

var generateBtn = document.querySelector("#generate");
for (var count = 0; count < passwordLength; count++) {
  var random = Math.random();
  var index = Math.floor(random * combined.length);
  password += combined[index];
}

function generatePassword() {
  return password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
