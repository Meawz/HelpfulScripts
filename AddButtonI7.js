var table = this.resolveNode('Tabel19subform._Table19'); 

if (table) {
    for (var i = 0; i < 9; i++) {
        // Add a new instance to the table
        var rand = table.addInstance();
        
        // Generate a random CNP
        var genderCentury = Math.random() < 0.5 ? 1 : 2; // Randomly choose 1 (male) or 2 (female) 
        var birthYear = Math.floor(Math.random() * 100).toString().padStart(2, '0'); // Random year (00-99) 
        var birthMonth = (Math.floor(Math.random() * 12) + 1).toString().padStart(2, '0'); // Random month (01-12) 
        var birthDay = (Math.floor(Math.random() * 28) + 1).toString().padStart(2, '0'); // Random day (01-28)
        var countyCode = (Math.floor(Math.random() * 52) + 1).toString().padStart(2, '0'); // Random county (01-52)
        var uniqueNumber = (Math.floor(Math.random() * 999) + 1).toString().padStart(3, '0'); // Random unique number (001-999)

        // Assemble the preliminary CNP without control digit
        var cnp = genderCentury + birthYear + birthMonth + birthDay + countyCode + uniqueNumber;

        // Calculate the control digit
        var weights = [2, 7, 9, 1, 4, 6, 3, 5, 8, 2, 7, 9];
        var sum = 0;

        for (var j = 0; j < 12; j++) {
            sum += parseInt(cnp.charAt(j)) * weights[j];
        }

        var controlDigit = sum % 11;
        if (controlDigit === 10) {
            controlDigit = 1; // Special rule for modulus result 10
        }

        
        cnp += controlDigit;

        
        rand.resolveNode("Row1.Table27.Row2.CNPD").rawValue = cnp; 
    }
    
    
    if (xfa.host.version < 8) {
        xfa.form.recalculate();
    }
} else {
    xfa.host.messageBox("Subform 'Tabel19' not found.", "Error", 3);
}
