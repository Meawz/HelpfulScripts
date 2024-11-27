var rowCount = xfa.resolveNode("Page9.Tabel19subform.Table19").instanceManager.count;

this.rawValue = rowCount;


// Check if the row count exceeds 1000
if (rowCount > 1000) {  
    xfa.host.messageBox("Numărul de rânduri nu poate depăși 1000. Butonul a fost dezactivat.", "Limita Depășită", 3);
    // Disable the button
    xfa.resolveNode("Page9.Tabel19subform.Table19.Row1.Table20.Row1.Button3").access = "protected"; 
} else {
    // Enable the button
    xfa.resolveNode("Page9.Tabel19subform.Table19.Row1.Table20.Row1.Button3").access = "open"; 
}
