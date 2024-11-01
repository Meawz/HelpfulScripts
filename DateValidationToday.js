// Get the selected date from the date field
var selectedDate = new Date(this.rawValue);

// Get today's date and set the time to midnight for accurate comparison
var today = new Date();
today.setHours(0, 0, 0, 0);

// Check if the selected date is after today's date (in the future)
if (selectedDate > today) {
    // Display a message to the user in Romanian
    xfa.host.messageBox("Data nu poate fi în viitor. Vă rugăm să selectați o dată validă.", "Data invalidă", 0, 0);

    // Clear the field or reset it
    this.rawValue = null;
}
