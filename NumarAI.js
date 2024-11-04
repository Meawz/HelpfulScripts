// Retrieve the value entered in the field as a string
var numValue = this.rawValue ? this.rawValue.toString() : "";

// Check if the checkbox is checked
var isChecked = (PasaportUnic.rawValue === "On");

// Validate based on the checkbox status
if (isChecked) {
    // If checked, allow only exactly 9 alphanumeric characters
    if (numValue.length > 9 || /[^a-zA-Z0-9]/.test(numValue)) {
        xfa.host.messageBox("Câmpul trebuie să conțină exact 9 caractere alfanumerice.", "Eroare", 3);
        this.rawValue = ""; // Clear the field if invalid
    }
} else {
    // If unchecked, allow only exactly 6 digits
    if (numValue.length !== 6 || /[^0-9]/.test(numValue)) {
        xfa.host.messageBox("Câmpul trebuie să conțină exact 6 cifre.", "Eroare", 3);
        this.rawValue = ""; // Clear the field if invalid
    }
}
