//Exit Event
// Mark the field as cleared by custom validation (reset at the beginning)
this.isClearedByCustomValidation = false;

// Get the values from both date fields
var date1 = EliberatB2.rawValue;
var date2 = this.rawValue;

// Proceed if both dates are filled
if (date1 && date2) {
    var firstDate = new Date(date1);
    var secondDate = new Date(date2);

    // Compare the two dates: secondDate must be after firstDate
    if (secondDate < firstDate) {
        xfa.host.messageBox("Data introdusă este invalidă. Vă rugăm să introduceți o dată mai mare decât în câmpul Eliberat la data de:", "Eroare", 3);

        // Clear the field and set custom flag
        this.rawValue = null;
        this.isClearedByCustomValidation = true;
    }
}

// Re-trigger validation to check for other errors
this.execEvent("validationState");

// If there's an error (either from validation pattern or custom validation), clear the field
if (this.errorText) {
    // Only clear the field if it wasn't cleared by the custom validation above
    if (!this.isClearedByCustomValidation) {
        this.rawValue = null;
    }
}

//validationState
if (this.errorText) {
    // Clear the field if there's a validation error
    this.rawValue = null;
}
