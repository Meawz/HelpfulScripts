// Retrieve the value entered in the field as a string
var numValue = this.rawValue ? this.rawValue.toString() : "";

// Proceed only if the field has some value
if (numValue) {
    // Check if the checkbox for passport is checked
    var isPasaportUnicChecked = (PasaportUnic.rawValue === "On");
    // Check if the checkbox for CI is checked
    var isCIUnicChecked = (CIUnic.rawValue === "On");

    // Validation for Passport
    if (isPasaportUnicChecked) {
        // Allow only up to 9 alphanumeric characters
        if (numValue.length > 9 || /[^a-zA-Z0-9]/.test(numValue)) {
            xfa.host.messageBox("Câmpul poate conține până la 9 caractere alfanumerice pentru pașaport.", "Eroare", 3);
            this.rawValue = ""; // Clear the field if invalid
        }
    }
    // Validation for Identity Cards
    else if (isCIUnicChecked) {
        if (numValue.length === 6 && /^[0-9]+$/.test(numValue)) {
            // Valid old CI format (6 numeric characters)
            // No action needed; field is valid
        } else if (numValue.length === 9 && /^[a-zA-Z0-9]+$/.test(numValue)) {
            // Valid new CI format (9 alphanumeric characters)
            // No action needed; field is valid
        } else {
            // Invalid CI format
            xfa.host.messageBox("Numărul de identificare este invalid. Vă rugăm să introduceți formatul corect:\n- 6 cifre pentru vechiul card\n- 9 caractere alfanumerice pentru noul card.", "Eroare", 3);
            this.rawValue = ""; // Clear the field if invalid
        }
    }
}
