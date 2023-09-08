var generateBtn = document.querySelector("#generate");

var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers = '012345689';
var specials = '~!@#$%^&*?';
var combined = '';
var password = '';
var lovelowercase = confirm('Do you want lowercase letters?');
var loveuppercase = confirm('Do you want uppercase?');
var lovenumbers = confirm('Do you want numbers?');
var lovespecials = confirm('Do you want special characters?');

var passwordLength = prompt('How many characters would you like in your password?');

if (lovelowercase) {
  combined += lowercase;
}
if (loveuppercase) {
  combined += uppercase;
}
if (lovenumbers) {
  combined += numbers;
}
if (lovespecials) {
  combined += specials;
}

if (passwordLength.length < 1) {
  alert('you must enter at least one number');
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