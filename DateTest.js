// Retrieve the values from the two date fields
var date1 = EliberatB2.rawValue; // The first date field
var date2 = this.rawValue;       // The second date field (current field)

// Proceed if both date fields have values
if (date1 && date2) {
    // Convert the date strings to actual Date objects for comparison
    var firstDate = new Date(date1);
    var secondDate = new Date(date2);

    // Compare the two dates
    if (secondDate < firstDate) {
        // Display an error message if the second date is earlier than the first
        xfa.host.messageBox("Data introdusa este invalida. Va rugam sa va asigurati ca ati introdus o data calendaristica mai mare decat in campul Eliberat la data de:", "Eroare", 3); 
        
        // Clear the current date field if it's invalid
        this.rawValue = null;

        // Manually trigger validation after clearing the value to avoid triggering built-in validation errors
        this.execValidate();
    }
}

// Check if any validation error is present
if (this.errorText) { 
    // If there's any validation error, clear the field 
    this.rawValue = null; 
} 
