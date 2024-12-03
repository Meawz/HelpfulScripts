// Setează limita maximă de caractere
var maxCaractere = 5000;

// Verifică dacă lungimea textului depășește limita
if (xfa.event.newText.length > maxCaractere) {
    // Avertizează utilizatorul că a atins limita maximă
    xfa.host.messageBox("Ați atins limita maximă de " + maxCaractere + " caractere.", "Limita de caractere atinsă", 3);

    // Revine la textul anterior pentru a împiedica introducerea de caractere suplimentare
    xfa.event.change = "";
}
