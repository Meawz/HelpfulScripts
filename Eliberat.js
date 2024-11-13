//Exit Event////////////////////////////////////////
// Re-trigger validation on exit
this.execEvent("validationState");

// Clear the field if there's an error detected
if (this.errorText) {
    this.rawValue = null;
}

//Validate Event////////////////////////////////////
// Get the selected date from the date field
var selectedDate = new Date(this.rawValue);

// Get today's date and set the time to midnight for accurate comparison
var today = new Date();
today.setHours(0, 0, 0, 0);


selectedDate.setHours(0, 0, 0, 0);

// Check if the selected date is after today's date (in the future)
if (selectedDate > today) { 
    // Display a message to the user
    xfa.host.messageBox("Data nu poate fi în viitor. Vă rugăm să selectați o dată validă.", "Data invalidă", 0, 0);

    // Clear the field or reset it
    this.rawValue = null;
}


//validationState Event/////////////////////////////
if (this.errorText) {
    // Clear the field if there's a validation error
    this.rawValue = null;
}
