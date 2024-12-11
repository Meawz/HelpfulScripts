// Retrieve the value entered in the CNPUnic field
var cnp = this.rawValue;

// Get the value of DataNUnic (Date of Birth) field
var dateOfBirth = xfa.resolveNode("DataNUnic").rawValue;

// Initialize error messages
var errorMessages = "";

// Validate CNP only if DataNUnic is also filled (both fields need to be filled)
if (cnp && dateOfBirth) {
    // Validate CNP length (13 characters)
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

    // If any errors are found in the CNP, show the error message
    if (errorMessages !== "") {
        xfa.host.messageBox(errorMessages, "Erori CNP", 3);
        this.rawValue = ""; // Clear the CNP field if it's invalid
    } else {
        // Perform the check for matching Date of Birth
        var selectedDate = new Date(dateOfBirth);
        if (selectedDate.getFullYear() !== year || selectedDate.getMonth() !== month - 1 || selectedDate.getDate() !== day) {
            xfa.host.messageBox("Data de naștere introdusă nu corespunde cu CNP-ul.", "Date Error", 0, 0);
            xfa.resolveNode("DataNUnic").rawValue = ""; // Clear the Date of Birth field if it doesn't match
        }
    }
}
