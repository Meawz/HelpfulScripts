// Now add your custom validation logic 
var selectedDate = new Date(this.rawValue);

// Get today's date
var today = new Date();

// Calculate the date 18 years ago from today
var maxDateAllowed = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());

// Check if the selected date is in the future
if (selectedDate > today) {
    xfa.host.messageBox("Data nu poate fi din viitor. Vă rugăm să selectați o dată validă.", "Data Invalidă", 0, 0);
    this.rawValue = null; // Clear the field
}
// Check if the selected date makes the person younger than 18
else if (selectedDate > maxDateAllowed) {
    xfa.host.messageBox("Vârsta minimă trebuie să fie de 18 ani.", "Date Invalidă", 0, 0);
    this.rawValue = null; // Clear the field
}
