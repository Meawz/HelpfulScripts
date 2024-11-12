// Define the cutoff date (end of September 30, 2025)
var cutoffDate = new Date(2025, 8, 30); // Month is 0-based, so 8 is September

// Get today's date (preserving the original date)
var today = new Date();

// Get the number of months entered by the user
var enteredMonths = parseInt(this.rawValue);

// Validate if the input is a valid number
if (isNaN(enteredMonths) || enteredMonths < 0) {
    xfa.host.messageBox("Introduceti un numar valid de luni.", "Invalid Input", 3);
} else {
    // Create a copy of today's date to calculate the future date
    var futureDate = new Date(today);
    futureDate.setMonth(futureDate.getMonth() + enteredMonths);
    
    // Fix any end-of-month rollover by setting the date explicitly
    futureDate.setDate(today.getDate());

    // Check if the future date surpasses the cutoff date of 30.09.2025
    if (futureDate > cutoffDate) {
        // Notify the user that the number of months surpasses the allowed limit
        xfa.host.messageBox("Numarul de luni introduse depaseste 30.09.2025. Introduceti un numar mai mic.", "Exceeded Limit", 3);
        
        // Clear the input field if the limit is exceeded
        this.rawValue = null;
    }
}
