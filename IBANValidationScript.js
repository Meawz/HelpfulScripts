 // Function to validate the IBAN
function validateIBAN(iban) {
    // Remove any spaces and convert to uppercase for standardization
    iban = iban.replace(/\s+/g, '').toUpperCase();
    
    // Check if IBAN contains only alphanumeric characters
    if (!/^[A-Z0-9]+$/.test(iban)) {
        return false; // Invalid IBAN format
    }

    // Check length based on country (example lengths for a few countries)
    var countryCode = iban.substring(0, 2);
    var ibanLengths = {
        'RO': 24, // Romania IBAN length
       // 'DE': 22, // Germany IBAN length
       // 'GB': 22, // UK IBAN length
       // 'FR': 27, // France IBAN length
        // Add more countries as needed
    };
    
    if (ibanLengths[countryCode] && iban.length !== ibanLengths[countryCode]) {
        return false; // Invalid IBAN length for the given country
    }

    // Move the first four characters (country code and check digits) to the end
    var rearrangedIban = iban.substring(4) + iban.substring(0, 4);
    
    // Convert letters to numbers (A = 10, B = 11, ..., Z = 35)
    var numericIban = "";
    for (var i = 0; i < rearrangedIban.length; i++) {
        var char = rearrangedIban.charAt(i);
        if (char >= 'A' && char <= 'Z') {
            numericIban += (char.charCodeAt(0) - 55).toString();
        } else {
            numericIban += char;
        }
    }
    
    // Perform mod-97 operation to validate the checksum
    var checksum = parseInt(numericIban.substring(0, 9)) % 97;
    for (var j = 9; j < numericIban.length; j += 7) {
        checksum = parseInt(checksum.toString() + numericIban.substring(j, j + 7)) % 97;
    }
    
    return checksum === 1; // IBAN is valid if mod-97 equals 1
}

// Perform the validation on IBANField exit
var ibanValue = this.rawValue;

if (ibanValue !== null && ibanValue !== "") {
    if (!validateIBAN(ibanValue)) {
        // Display an error message if the IBAN is invalid
        xfa.host.messageBox("IBAN-ul introdus nu este valid. Verificați și încercați din nou.", "Invalid IBAN", 3);
        this.rawValue = ""; // Clear the field
    }
}

