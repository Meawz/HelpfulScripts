var selectedCategory = this.rawValue;

// Define the options for subDropdown based on the selected category
var townList = {
    "Bucuresti Ilfov": ["Bucuresti - Sector 1", "Bucuresti - Sector 2", "Bucuresti - Sector 3", "Bucuresti - Sector 4", "Bucuresti - Sector 5", "Bucuresti - Sector 6", "Ilfov"],
    "Centru": ["Alba", "Brasov", "Covasna", "Harghita", "Mures", "Sibiu"],
    "Nord Est": ["Bacau", "Botosani", "Iasi", "Neamt", "Suceava", "Vaslui"],
    "Nord Vest": ["Bihor", "Bistrita-Nasaud", "Cluj", "Maramures", "Salaj", "Satu Mare"],
    "Sud Est": ["Braila", "Buzau", "Constanta", "Galati", "Tulcea", "Vrancea"],
    "Sud Muntenia": ["Arges", "Calarasi", "Dambovita", "Giurgiu", "Ialomita", "Prahova", "Teleorman"],
    "Sud Vest": ["Dolj", "Gorj", "Mehedinti", "Olt", "Valcea"],
    "Vest": ["Arad", "Caras-Severin", "Hunedoara", "Timis"]
};

// Temporarily disable validation
JudetUnic.validate.nullTest = "disabled";
LocalitateUnic.validate.nullTest = "disabled";

// Clear existing items
JudetUnic.clearItems();

// Populate subDropdown with new options based on the selected category
if (selectedCategory && townList[selectedCategory]) {
    var items = townList[selectedCategory];
    for (var i = 0; i < items.length; i++) {
        JudetUnic.addItem(items[i]);
    }
}

// Reset values
JudetUnic.rawValue = null;
LocalitateUnic.rawValue = null;

// Re-enable validation
JudetUnic.validate.nullTest = "error";
LocalitateUnic.validate.nullTest = "error";

// Handle font styles
if (this.isNull) {
    this.font.size = "9pt";
    this.fontColor = "102,102,102";
    this.font.posture = "italic";
    this.caption.font.fill.color.value = "0,0,0";
    this.caption.font.posture = "normal";
} else {
    // Additional styling or logic can go here if needed
}
