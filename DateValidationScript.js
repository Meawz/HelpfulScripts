// Retrieve the values from the two date fields
var date1 = EliberatUnic.rawValue; // The first date field
var date2 = this.rawValue;       // The second date field (current field)

// Proceed if both date fields have values
if (date1 !== null && date2 !== null) {
    // Convert the date strings to actual Date objects for comparison
    var firstDate = new Date(date1);
    var secondDate = new Date(date2);

    // Compare the two dates
    if (secondDate < firstDate) {
        // Display an error message if the second date is earlier than the first
        xfa.host.messageBox("Data introdusa este invalida. Va rugam sa va asigurati ca ati introdus o data calendaristica mai mare decat in campul Eliberat la data de:", "Eroare", 3);
        
        // Optionally, clear the second date field if it's invalid
        this.rawValue = null;
    }
}
