//Exit Event///////////////////////////////
// Re-trigger validation on exit
this.execEvent("validationState");

// Clear the field if there's an error detected
if (this.errorText) {
    this.rawValue = null;
}


//Validate Event///////////////////////////////
// Get the value of the CNPUnic and DataNUnic fields
var cnp = xfa.resolveNode("CNPUnic").rawValue;
var selectedDate = new Date(this.rawValue);

// Get today's date
var today = new Date();

// Calculate the date 18 years ago from today
var maxDateAllowed = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());

// This function will perform validation on both fields once both are filled
function validateCNPAndDate() {
    // Check if both CNP and Date of Birth are filled
    if (cnp && this.rawValue) {
        // Minimum age check
        if (selectedDate > maxDateAllowed) {
            xfa.host.messageBox("Varsta minima trebuie sa fie 18 ani.", "Date Error", 0, 0);
            this.rawValue = null; // Clear the field if the user is younger than 18
        } else {
            // Extract date of birth from CNPUnic
            var year = parseInt(cnp.substr(1, 2), 10);
            var month = parseInt(cnp.substr(3, 2), 10);
            var day = parseInt(cnp.substr(5, 2), 10);

            // Adjust year based on CNP rules
            if (cnp.charAt(0) === '1' || cnp.charAt(0) === '2') {
                year += 1900;
            } else if (cnp.charAt(0) === '3' || cnp.charAt(0) === '4') {
                year += 1800;
            } else if (cnp.charAt(0) === '5' || cnp.charAt(0) === '6') {
                year += 2000;
            } else if (cnp.charAt(0) === '7' || cnp.charAt(0) === '8') {
                year += 2000;
            }

            // Compare the Date of Birth from CNP with the entered Date in DataNUnic
            if (selectedDate.getFullYear() !== year || selectedDate.getMonth() !== month - 1 || selectedDate.getDate() !== day) {
                xfa.host.messageBox("Data de naștere introdusă nu corespunde cu CNP-ul.", "Date Error", 0, 0);
                this.rawValue = null; // Clear DataNUnic if the dates do not match
            }
        }
    }
}

// Validate CNPUnic and DataNUnic only when both fields are filled
if (cnp && this.rawValue) {
    validateCNPAndDate(); // Validate both fields
} else if (cnp && !this.rawValue) {
    // If CNP is filled but Date of Birth is empty, do nothing
} else if (!cnp && this.rawValue) {
    // If Date of Birth is filled but CNP is empty, do nothing
}


//validationState Event////////////////////////////////
if (this.errorText) {
    // Clear the field if there's a validation error
    this.rawValue = null;
}
