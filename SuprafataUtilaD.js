// Retrieve the value entered in the field
var value = parseFloat(this.rawValue);

// Check if the value is a valid number
if (!isNaN(value)) {
    // Check if the value is zero
    if (value === 0) {
        xfa.host.messageBox("Valoarea introdusă nu poate fi 0. Vă rugăm să introduceți o valoare diferită de zero.", "Input Error", 3);
        this.rawValue = null; // Clear the field if the value is 0
    }
    // Check if the value is within the acceptable range (40 to 100)
    else if (value < 40 || value > 100) {
        xfa.host.messageBox("Valoarea introdusă trebuie să fie între 40 și 100.", "Input Error", 3);
        this.rawValue = null; // Clear the field if the value is out of range
    } 
    // If the value is valid and within the range, proceed with other validation (if necessary)
    else {
        // Additional checks can be added here if needed
    }
} else {
    // If the value is not a valid number
    xfa.host.messageBox("Vă rugăm să introduceți un număr valid.", "Input Error", 3);
    this.rawValue = null; // Clear the field if the value is invalid
}
