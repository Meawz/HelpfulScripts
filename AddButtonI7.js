var cnps = []; 
var cnp;

var table = this.resolveNode('Tabel19subform._Table19'); 

if (table) {
    for (var i = 0; i < 9; i++) {
        // Add a new instance to the table
        var rand = table.addInstance();
        do { cnp = Functii.genereazaCNP();
        } while (cnps.indexOf(cnp)>= 0);
        cnps.push(cnp);  
        rand.resolveNode("Row1.Table27.Row2.CNPD").rawValue = cnp;  
    }
    
    
    if (xfa.host.version < 8) {
        xfa.form.recalculate();
    }
} else {
    xfa.host.messageBox("Subform 'Tabel19' not found.", "Error", 3);
}

