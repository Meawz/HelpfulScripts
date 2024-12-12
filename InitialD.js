// Retrieve the value entered in the field
var value = parseFloat(this.rawValue);

var PropusDvalue = parseFloat(PropusFinalD.rawValue);

// Check if the value is a number
if (!isNaN(value)) {
	// Check if the value is zero
    if (value === 0) {
        xfa.host.messageBox("Valoarea introdusă nu poate fi 0. Vă rugăm să introduceți o valoare diferită de zero.", "Input Error", 3);
        this.rawValue = null; // Clear the field if the value is 0
    }
    // Check if the value is not an integer (i.e., has decimal points)
    else if (value % 1 !== 0) {
        xfa.host.messageBox("Valoarea introdusă nu poate să conțină zecimale. Vă rugăm să introduceți un număr întreg.", "Input Error", 3);
        this.rawValue = null; // Clear the field if the value contains decimals
    }
    // Check if the value is negative
    else if (value < 0) {
        xfa.host.messageBox("Valoarea introdusă nu poate să fie negativă. Vă rugăm să introduceți o valoare pozitivă.", "Input Error", 3);
        this.rawValue = null; // Clear the field if the value is negative
    }
    // Check if InitialD is less than PropusFinalD
    else if (!isNaN(PropusDvalue) && value < PropusDvalue) {
        xfa.host.messageBox("Valoarea din câmpul Inițial nu poate fi mai mică decât valoarea din câmpul Propus/Final. Vă rugăm să ajustați valorile.", "Input Error", 3);
        this.rawValue = null; // Clear the field if InitialD is invalid
    }
} else {
    // Clear the field if the input is not a valid number at all
    xfa.host.messageBox("Vă rugăm să introduceți un număr valid.", "Input Error", 3);
    this.rawValue = null; // Clear the field if the value is invalid
}

