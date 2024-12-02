if (this.rawValue && this.rawValue.length > 5000) {
    xfa.host.messageBox("Nu puteți introduce mai mult de 5000 de caractere.", "Limită de Caractere", 3);
    this.rawValue = this.rawValue.substring(0, 5000); // Trunchiere imediată
}
