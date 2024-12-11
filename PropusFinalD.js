// Retrieve the value entered in the field
var value = parseFloat(this.rawValue);

var InitialDvalue = parseFloat(InitialD.rawValue);

// Check if the value is a number
if (!isNaN(value)) {
    // Check if the value is not an integer (i.e., has decimal points)
    if (value % 1 !== 0) {
        xfa.host.messageBox("Valoarea introdusă nu poate să conțină zecimale. Vă rugăm să introduceți un număr întreg.", "Input Error", 3);
        this.rawValue = null; // Clear the field if the value contains decimals
    }
    // Check if the value is negative
    else if (value < 0) {
        xfa.host.messageBox("Valoarea introdusă nu poate să fie negativă. Vă rugăm să introduceți o valoare pozitivă.", "Input Error", 3);
        this.rawValue = null; // Clear the field if the value is negative
    }
    // Check if PropusFinalD is greater than InitialD
    else if (!isNaN(InitialDvalue) && value > InitialDvalue) {
        xfa.host.messageBox("Valoarea din câmpul Propus/Final nu poate fi mai mare decât valoarea din câmpul Inițial. Vă rugăm să introduceți o valoare mai mică sau egală.", "Input Error", 3);
        this.rawValue = null; // Clear the field if the value exceeds InitialD
    }
} else {
    // Clear the field if the input is not a valid number at all
    xfa.host.messageBox("Vă rugăm să introduceți un număr valid.", "Input Error", 3);
    this.rawValue = null; // Clear the field if the value is invalid
}
