 form1.Page2.Table1.Row2.CodPostalB2::exit - (JavaScript, client)
var numValue = this.rawValue ? this.rawValue.toString() : "";

// Check if the value contains only digits using a regular expression
if (!/^\d+$/.test(numValue)) {
    xfa.host.messageBox("Acest câmp poate conține doar cifre.", "Eroare", 3);
    this.rawValue = ""; // Clear the field if non-digits are found
}
// Check if the value is exactly 6 digits
else if (numValue.length !== 6) {
    xfa.host.messageBox("Acest câmp trebuie să conțină exact 6 cifre.", "Eroare", 3);
    this.rawValue = ""; // Clear the field if the length is incorrect
}
// Check if the value starts with '00'
else if (numValue.startsWith("00")) {
    xfa.host.messageBox("Codul poștal incorect.", "Eroare", 3);
    this.rawValue = ""; // Clear the field if the zip code starts with '00'
}
