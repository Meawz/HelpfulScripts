var selectedCategory = this.rawValue;

// Define the options for subDropdown based on the selected category
var townList = {"Bucuresti Ilfov":["Bucuresti - Sector 1","Bucuresti - Sector 2","Bucuresti - Sector 3","Bucuresti - Sector 4","Bucuresti - Sector 5","Bucuresti - Sector 6","Ilfov"],"Centru":["Alba","Brasov","Covasna","Harghita","Mures","Sibiu"],"Nord Est":["Bacau","Botosani","Iasi","Neamt","Suceava","Vaslui"],"Nord Vest":["Bihor","Bistrita-Nasaud","Cluj","Maramures","Salaj","Satu Mare"],"Sud Est":["Braila","Buzau","Constanta","Galati","Tulcea","Vrancea"],"Sud Muntenia":["Arges","Calarasi","Dambovita","Giurgiu","Ialomita","Prahova","Teleorman"],"Sud Vest":["Dolj","Gorj","Mehedinti","Olt","Valcea"],"Vest":["Arad","Caras-Severin","Hunedoara","Timis"]}
//var LocalitateR = xfa.resolveNode("form1.#subform[0].subDropdown");
JudetUnic.clearItems();

JudetUnic.addItem("Selectati un judet");

// Populate subDropdown with new options based on the selected category
if (selectedCategory && townList[selectedCategory]) {
    var items = townList[selectedCategory];
    for (var i = 0; i < items.length; i++) {
        JudetUnic.addItem(items[i]);
    }
} else {
    // Optionally, handle the case where no matching category is found
    JudetUnic.addItem("Please select a valid category");
}

JudetUnic.setItemState(0, true);
LocalitateUnic.setItemState(0, true);
