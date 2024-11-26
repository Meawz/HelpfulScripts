// Retrieve the value entered in the field
var cnp = this.rawValue;

// Initialize an empty string to hold error messages
var errorMessages = "";

// Verify if the length of the CNP is 13 characters
if (cnp.length !== 13) {
    errorMessages += "CNP-ul trebuie să aibă 13 caractere.\n";
}

// Extract information from CNP
var year = parseInt(cnp.substr(1, 2), 10);
var month = parseInt(cnp.substr(3, 2), 10);
var day = parseInt(cnp.substr(5, 2), 10);

// Adjust year based on century
if (cnp.charAt(0) === '1' || cnp.charAt(0) === '2') {
    year += 1900; // 1900 - 1999
} else if (cnp.charAt(0) === '3' || cnp.charAt(0) === '4') {
    year += 1800; // 1800 - 1899
} else if (cnp.charAt(0) === '5' || cnp.charAt(0) === '6') {
    year += 2000; // 2000 - 2099
} else if (cnp.charAt(0) === '7' || cnp.charAt(0) === '8') {
    year += 2000; // Residents are generally born after 2000
} else {
    errorMessages += "Codul CNP nu este valid.\n" + cnp;
}

// Validate month and day
if (month < 1 || month > 12) {
    errorMessages += "Luna CNP-ului nu este validă.\n";
}

if (day < 1 || day > 31) {
    errorMessages += "Ziua CNP-ului nu este validă.\n";
}

// Additional check for days in month
var daysInMonth = new Date(year, month, 0).getDate(); // Get the number of days in the month
if (day > daysInMonth) {
    errorMessages += "Data CNP-ului nu este validă.\n";
}

// Array with the multipliers used in the validation formula
var multipliers = [2, 7, 9, 1, 4, 6, 3, 5, 8, 2, 7, 9];

// Calculate the control digit
var sum = 0;
for (var i = 0; i < 12; i++) {
    sum += parseInt(cnp.charAt(i)) * multipliers[i];
}
var remainder = sum % 11;
var controlDigit = (remainder === 10) ? 1 : remainder;

// Verify the control digit
if (parseInt(cnp.charAt(12)) !== controlDigit) {
    errorMessages += "CNP-ul introdus nu este valid.\n";
}

// Display all error messages in a single message box
if (errorMessages !== "") {
    xfa.host.messageBox(errorMessages, "Erori CNP", 3);
    this.rawValue = "";
}
