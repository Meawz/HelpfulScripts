//console.show();
var incompleteFields = ""; // Initialize variable for incomplete fields message
var reportedErrors = new Set(); // Track already-reported errors

function addErrorMessage(message) {
    if (!reportedErrors.has(message)) {
        incompleteFields += message + "\n";
        reportedErrors.add(message);
    }
}

// Check a single field for completeness
function checkField(field, friendlyName, pageNumber) { 
    if (!field || !field.rawValue || field.rawValue === "") {
        var message = "Campul \"" + friendlyName + "\" pe Pagina \"" + pageNumber + "\" este obligatoriu!";
        addErrorMessage(message);
    }
}

// Mapping of internal field names to user-friendly names
var friendlyNames = {
    "DenumireUnic": "Denumire Unică",
    "CUIUnic": "Cod Unic de Înregistrare",
    "ProfitNet": "Profit Net",
    "CifraAfaceri": "Cifra de Afaceri",
    "RegiuneListB2": "Regiune",
    "JudetListB2": "Județ",
    "LocalitateListB2": "Localitate",
    "CodPostalB2": "Cod Poștal",
    "StradaB2": "Strada",
    "NrB2": "Număr",
    "TelefonB2": "Telefon",
    "EmailB2": "E-mail",
    "NumeB2": "Nume",
    "PrenumeB2": "Prenume",
    "FunctieB2": "Funcție",
    "DataNasteriiB2": "Data Nașterii",
    "CNPB2": "CNP",
    "BIB2": "Buletin de Identitate",
    "CIB2": "Carte de Identitate",
    "PasaportB2": "Pașaport",
    "SeriaB2": "Seria",
    "NumarB2": "Număr",
    "EliberatB2": "Eliberat",
    "DeCatreB2": "Eliberat de Către",
    "ValabilB2": "Valabil Până La",
    "DenumireBancaB3": "Denumire Bancă",
    "DenumireSucursalaB3": "Denumire Sucursală",
    "AdresaB3": "Adresă",
    "IBANB3": "IBAN",
    "TItularB3": "Titular",
    "TitluProiectC1": "Titlu Proiect",
    "DaC3": "Da (Întrebare C3)",
    "NuC3": "Nu (Întrebare C3)",
    "NationalC3": "Proiect Național",
    "EuropeanC3": "Proiect European",
    "InternationalC3": "Proiect Internațional",
    "DenumireC3": "Denumire Proiect",
    "NProiecteC3": "Număr de Proiecte",
    "DBeneficiarC3": "Denumire Beneficiar",
    "InDerulareC3": "Proiect În Derulare",
    "FinalizatC3": "Proiect Finalizat",
    "DataFInalizariiC3": "Data Finalizării",
    "ValNerambursabilaC3": "Valoare Nerambursabilă",
    "DescriereInvestitieC4": "Descriere Investiție",
    "ObiectiveProiectC5": "Obiectivele Proiectului",
    "RezultateAsteptateC6": "Rezultate Așteptate",
    "RiscuriIdentificateC7": "Riscuri Identificate",
    "PrincipiOrizontaleC8": "Principii Orizontale",
    "ValINS1C5": "Instalare TVA R1 C5",  
    "ValINS2C5": "Instalare TVA R2 C5", 
    "ValINS1C6": "Instalare Neeligibila R1 C6",  
    "ValINS2C6": "Instalare Neeligibila R2 C6",  
    "ValINF1C6": "Informare R1 C6",
    "ValCER2C6": "Certificat R2 C6", 
    "ContributieC11": "Contribuție",
    "DurataProiectuluiC12": "Durata Proiectului",
    "NumeD": "Nume", 
    "PrenumeD": "Prenume", 
    "CNPD": "CNP", 
    "RegiuneD": "Regiune", 
    "JudetD": "Județ", 
    "LocalitateD": "Localitate", 
    "StradaD": "Strada", 
    "NrD": "Număr", 
    "CodPostalD": "Cod Poștal",
    "Da1": "Da (Observatii 1)",
    "Nu1": "Nu (Observatii 1)",
    "Da2": "Da (Observatii 2)",
    "Nu2": "Nu (Observatii 2)",
    "Da3": "Da (Observatii 3)",
    "Nu3": "Nu (Observatii 3)", 
    "Observatii1" : "Observatii Nr.1",
    "Observatii2" : "Observatii Nr.2",
    "Observatii3" : "Observatii Nr.3",
    "Observatii4" : "Observatii Nr.4",
    "Observatii5" : "Observatii Nr.5",
    "Observatii6" : "Observatii Nr.6",
    "Observatii7" : "Observatii Nr.7",
    "Observatii8" : "Observatii Nr.8",
    "Observatii9" : "Observatii Nr.9",
    "Observatii10" : "Observatii Nr.10",
    "Observatii11" : "Observatii Nr.11",
    "Observatii12" : "Observatii Nr.12",
    "Observatii13" : "Observatii Nr.13" 
}; 

// Manually define the paths to all mandatory fields
var mandatoryFieldPaths = [
    "Page1.DenumireUnic",
    "Page1.CUIUnic",
    "Page1.Table33.Row3.ProfitNet",
    "Page1.Table33.Row3.CifraAfaceri",
    "Page2.Table1.Row2.RegiuneListB2",
    "Page2.Table1.Row2.JudetListB2",
    "Page2.Table1.Row2.LocalitateListB2",
    "Page2.Table9.Row2.CodPostalB2",
    "Page2.Table9.Row2.StradaB2",
    "Page2.Table9.Row2.NrB2",
    "Page2.Table2.Row2.TelefonB2",
    "Page2.Table2.Row2.EmailB2",
    "Page2.Table3.Row2.NumeB2",
    "Page2.Table3.Row2.PrenumeB2",
    "Page2.Table3.Row2.FunctieB2",
    "Page2.Table4.Row2.DataNasteriiB2",
    "Page2.Table4.Row2.CNPB2",
    "Page2.Table5.Row2.BIB2",
    "Page2.Table5.Row2.CIB2",
    "Page2.Table5.Row2.PasaportB2",
    "Page2.Table5.Row2.SeriaB2",
    "Page2.Table5.Row2.NumarB2",
    "Page2.Table5.Row2.EliberatB2",
    "Page2.Table5.Row2.DeCatreB2",
    "Page2.Table5.Row2.ValabilB2",
    "Page2.Table6.Row2.DenumireBancaB3",
    "Page2.Table6.Row2.DenumireSucursalaB3",
    "Page2.Table7.Row2.AdresaB3",
    "Page2.Table8.Row2.IBANB3",
    "Page2.Table8.Row2.TItularB3",
    "Page3.TitluProiectC1",
    "Page3.DaC3",
    "Page3.NuC3",
    "Page3.Tabel11Subform.Table11.Row2.Table13.Row1.NationalC3",
    "Page3.Tabel11Subform.Table11.Row2.Table13.Row2.EuropeanC3",
    "Page3.Tabel11Subform.Table11.Row2.Table13.Row3.InternationalC3",
    "Page3.Tabel11Subform.Table11.Row2.DenumireC3",
    "Page3.Tabel11Subform.Table11.Row2.NProiecteC3",
    "Page3.Tabel11Subform.Table11.Row2.DBeneficiarC3",
    "Page3.Tabel11Subform.Table11.Row2.Table14.Row1.InDerulareC3",
    "Page3.Tabel11Subform.Table11.Row2.Table14.Row2.FinalizatC3",
    "Page3.Tabel11Subform.Table11.Row2.Table14.Row3.DataFInalizariiC3",
    "Page3.Tabel11Subform.Table11.Row2.ValNerambursabilaC3",
    "Page4.DescriereInvestitieC4",
    "Page4.ObiectiveProiectC5",
    "Page4.RezultateAsteptateC6",
    "Page4.RiscuriIdentificateC7",
    "Page4.PrincipiOrizontaleC8",
    "Page5.Table16.Row3.Table21.Row1.ValINS1C5", 
    "Page5.Table16.Row3.Table21.Row2.ValINS2C5",
    "Page5.Table16.Row3.Table22.Row1.ValINS1C6",
    "Page5.Table16.Row3.Table22.Row2.ValINS2C6",
    "Page6.Table26.Row3.ValINF1C6", 
    "Page6.Table26.Row6.ValCER2C6", 
    "Page6.ContributieC11",
    "Page6.DurataProiectuluiC12",
    "Page7.Table34Subform.Table34.Row2.NumeD",
    "Page7.Table34Subform.Table34.Row2.PrenumeD",
    "Page7.Table34Subform.Table34.Row2.CNPD",
    "Page2.Table1.Row2.RegiuneListB2",
    "Page2.Table1.Row2.JudetListB2",
    "Page2.Table1.Row2.LocalitateListB2",
    "Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2.StradaD", 
    "Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2.NrD", 
    "Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2.CodPostalD",
    "Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row2.Da1", 
    "Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row2.Nu1",
    "Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row3.Da2", 
    "Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row3.Nu2", 
    "Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row4.Da3",
    "Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row4.Nu3", 
    "Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row2.Observatii1",
    "Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row3.Observatii2", 
    "Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row4.Observatii3", 
    "Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row5.Observatii4", 
    "Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row6.Observatii5", 
    "Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row7.Observatii6", 
    "Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row8.Observatii7", 
    "Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row9.Observatii8", 
    "Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row10.Observatii9", 
    "Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row11.Observatii10",
    "Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row11[1].Observatii11",
    "Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row11[2].Observatii12",
    "Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row11[3].Observatii13"      
]; 

var checkboxGroups = [
	{
		group: ["Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row2.Da1", "Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row2.Nu1"],
		message: "Trebuie să selectați fie \"Da\", fie \"Nu\" la Observatii 1!" 
	},
	{
		group: ["Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row3.Da2", "Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row3.Nu2"],
		message:  "Trebuie să selectați fie \"Da\", fie \"Nu\" la Observatii 2!"
	},
	{
		group: ["Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row4.Da3", "Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row4.Nu3"], 
		message: "Trebuie să selectați fie \"Da\", fie \"Nu\" la Observatii 3!"
	},
	{
		group: ["Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row5.Da4", "Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row5.Nu4"],  
		message: "Trebuie să selectați fie \"Da\", fie \"Nu\" la Observatii 4!"
	},
	{
		group: ["Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row6.Da5", "Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row6.Nu5"],  
		message: "Trebuie să selectați fie \"Da\", fie \"Nu\" la Observatii 5!"
	},
	{
		group: ["Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row7.Da6", "Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row7.Nu6"],  
		message: "Trebuie să selectați fie \"Da\", fie \"Nu\" la Observatii 6!"
	},
	{
		group: ["Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row8.Da7", "Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row8.Nu7"],  
		message: "Trebuie să selectați fie \"Da\", fie \"Nu\" la Observatii 7!"
	},
	{
		group: ["Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row9.Da8", "Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row9.Nu8"],  
		message: "Trebuie să selectați fie \"Da\", fie \"Nu\" la Observatii 8!"
	},
	{
		group: ["Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row10.Da9", "Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row10.Nu9"],  
		message: "Trebuie să selectați fie \"Da\", fie \"Nu\" la Observatii 9!"
	},
	{
		group: ["Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row11.Da10", "Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row11.Nu10"],  
		message: "Trebuie să selectați fie \"Da\", fie \"Nu\" la Observatii 10!"
	},
	{
		group: ["Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row11[1].Da11", "Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row11[1].Nu11"],  
		message: "Trebuie să selectați fie \"Da\", fie \"Nu\" la Observatii 11!"
	},
	{
		group: ["Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row11[2].Da12", "Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row11[2].Nu12"],  
		message: "Trebuie să selectați fie \"Da\", fie \"Nu\" la Observatii 12!"
	},
	{
		group: ["Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row11[3].Da13", "Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row11[3].Nu13"],  
		message: "Trebuie să selectați fie \"Da\", fie \"Nu\" la Observatii 13!"
	},
	{
		group:["Page3.DaC3", "Page3.NuC3"], 
		message: "Trebuie să selectați fie \"Da\", fie \"Nu\" la C3. Finanțări nerambursabile obținute sau solicitate!"   
	}   
];

// Loop through each mandatory field path
for (var i = 0; i < mandatoryFieldPaths.length; i++) {
    var fieldPath = mandatoryFieldPaths[i];
    var field = xfa.resolveNode(fieldPath);
    
    // Check if the field is found
    if (field != null) {
        // Check if the field is mandatory and empty
        if (field.mandatory === "error" && (!field.rawValue || field.rawValue === "")) {
            // Extract the page number from the field path
            var pageMatch = fieldPath.match(/Page(\d+)/);
            var pageNumber = pageMatch ? pageMatch[1] : "unknown";
            
            // Use friendly name if available, otherwise fall back to the internal name
            var friendlyName = friendlyNames[field.name] || field.name;
            incompleteFields += "Campul \"" + friendlyName + "\" pe Pagina \"" + pageNumber + "\" este obligatoriu!\n";  
        }
    } else {
        incompleteFields += "Campul la calea \"" + fieldPath + "\" nu există.\n";
    }
}

for (var j = 0; j < checkboxGroups.length; j++) {
	var group = checkboxGroups[j].group;
	var groupChecked = false;
	
	for (var k = 0; k < group.length; k++) {
		var checkbox = xfa.resolveNode(group[k]);
		
		if (checkbox && checkbox.rawValue == "On") { 
			groupChecked = true;
			break;
		}
	}
	
	if (!groupChecked) {
		incompleteFields += checkboxGroups[j].message + "\n";
	}
}

// Validate dynamically for Table11
var nodesC = xfa.resolveNodes("Page3.Tabel11Subform.Table11[*]");   
for (var i = 0; i < nodesC.length; i++) {
    var nodeC = nodesC.item(i);

    // Define fields to validate within each Table11 instance
    var tableFieldsC = [
        { fieldC: nodeC.resolveNode("Row2.DenumireC3"), name: "Denumire Program" },
        { fieldC: nodeC.resolveNode("Row2.NProiecteC3"), name: "Număr Proiecte" },
        { fieldC: nodeC.resolveNode("Row2.DBeneficiarC3"), name: "Denumire Beneficiar" },
        { fieldC: nodeC.resolveNode("Row2.Table14.Row3.DataFInalizariiC3"), name: "Data Finalizării" },
        { fieldC: nodeC.resolveNode("Row2.ValNerambursabilaC3"), name: "Valoare Proiect" }  
    ];

    // Check each field in the current Table11 instance
    for (var j = 0; j < tableFieldsC.length; j++) {
        var tableField = tableFieldsC[j];
        checkField(tableField.fieldC, tableField.name, "3");
 	}
}

// Validate dynamically for Table34
var nodesD = xfa.resolveNodes("Page7.Table34Subform.Table34[*]"); 
for (var i = 0; i < nodesD.length; i++) {
    var nodeD = nodesD.item(i);

    // Define fields to validate within each Table34 instance
    var tableFieldsD = [
        { fieldD: nodeD.resolveNode("Row2.CNPD"), name: "CNP" },
        { fieldD: nodeD.resolveNode("Row2.NumeD"), name: "Nume" },
        { fieldD: nodeD.resolveNode("Row2.PrenumeD"), name: "Prenume" },
        { fieldD: nodeD.resolveNode("Row2[1].Table35.Row2.RegiuneD"), name: "Regiune" },
        { fieldD: nodeD.resolveNode("Row2[1].Table35.Row2.JudetD"), name: "Județ" },
        { fieldD: nodeD.resolveNode("Row2[1].Table35.Row2.LocalitateaD"), name: "Localitate" },
        { fieldD: nodeD.resolveNode("Row2[1].Table35.Row2[1].Table36.Row2.StradaD"), name: "Strada" },
        { fieldD: nodeD.resolveNode("Row2[1].Table35.Row2[1].Table36.Row2.NrD"), name: "Număr" },
        { fieldD: nodeD.resolveNode("Row2[1].Table35.Row2[1].Table36.Row2.CodPostalD"), name: "Cod Poștal" }, 
    ];

    // Check each field in the current Table34 instance
    for (var j = 0; j < tableFieldsD.length; j++) {
        var tableField = tableFieldsD[j]; 
        checkField(tableField.fieldD, tableField.name, "7"); 
    }
    var checkboxGroupsD = [
    {
        group: [
            nodeD.resolveNode("Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row2.Da1"),
            nodeD.resolveNode("Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row2.Nu1")
        ],
        message: "Trebuie să selectați fie \"Da\", fie \"Nu\" la Observatii 1!" 
    },
    {
        group: [
            nodeD.resolveNode("Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row3.Da2"),
            nodeD.resolveNode("Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row3.Nu2")
        ],
        message: "Trebuie să selectați fie \"Da\", fie \"Nu\" la Observatii 2!"
    },
    {
        group: [
            nodeD.resolveNode("Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row4.Da3"),
            nodeD.resolveNode("Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row4.Nu3")
        ],
        message: "Trebuie să selectați fie \"Da\", fie \"Nu\" la Observatii 3!"
    },
    {
        group: [
            nodeD.resolveNode("Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row5.Da4"),
            nodeD.resolveNode("Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row5.Nu4")
        ],
        message: "Trebuie să selectați fie \"Da\", fie \"Nu\" la Observatii 4!"
    },
    {
        group: [
            nodeD.resolveNode("Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row6.Da5"),
            nodeD.resolveNode("Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row6.Nu5")
        ],
        message: "Trebuie să selectați fie \"Da\", fie \"Nu\" la Observatii 5!"
    },
    {
        group: [
            nodeD.resolveNode("Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row7.Da6"),
            nodeD.resolveNode("Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row7.Nu6")
        ],
        message: "Trebuie să selectați fie \"Da\", fie \"Nu\" la Observatii 6!"
    },
    {
        group: [
            nodeD.resolveNode("Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row8.Da7"),
            nodeD.resolveNode("Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row8.Nu7")
        ],
        message: "Trebuie să selectați fie \"Da\", fie \"Nu\" la Observatii 7!"
    },
    {
        group: [
            nodeD.resolveNode("Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row9.Da8"),
            nodeD.resolveNode("Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row9.Nu8")
        ],
        message: "Trebuie să selectați fie \"Da\", fie \"Nu\" la Observatii 8!"
    },
    {
        group: [
            nodeD.resolveNode("Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row10.Da9"),
            nodeD.resolveNode("Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row10.Nu9")
        ],
        message: "Trebuie să selectați fie \"Da\", fie \"Nu\" la Observatii 9!"
    },
    {
        group: [
            nodeD.resolveNode("Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row11.Da10"),
            nodeD.resolveNode("Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row11.Nu10")
        ],
        message: "Trebuie să selectați fie \"Da\", fie \"Nu\" la Observatii 10!"
    },
    {
        group: [
            nodeD.resolveNode("Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row11[1].Da11"),
            nodeD.resolveNode("Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row11[1].Nu11")
        ],
        message: "Trebuie să selectați fie \"Da\", fie \"Nu\" la Observatii 11!"
    },
    {
        group: [
            nodeD.resolveNode("Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row11[2].Da12"),
            nodeD.resolveNode("Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row11[2].Nu12")
        ],
        message: "Trebuie să selectați fie \"Da\", fie \"Nu\" la Observatii 12!"
    },
    {
        group: [
            nodeD.resolveNode("Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row11[3].Da13"),
            nodeD.resolveNode("Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row11[3].Nu13")
        ],
        message: "Trebuie să selectați fie \"Da\", fie \"Nu\" la Observatii 13!"
    }
  ];

  // Check each checkbox group in the current Table34 instance
    for (var k = 0; k < checkboxGroupsD.length; k++) {
        var group = checkboxGroupsD[k].group;
        var groupChecked = false;

        for (var m = 0; m < group.length; m++) {
            var checkbox = group[m];
            if (checkbox && checkbox.rawValue == "On") {
                groupChecked = true;
                break;
            }
        }

        if (!groupChecked) {
            incompleteFields += checkboxGroupsD[k].message + "\n";
        }
    }
}  

// Display a message if there are incomplete fields
if (incompleteFields !== "") {
    xfa.host.messageBox("Urmatoarele campuri sunt necompletate:\n" + incompleteFields, "Campuri Incomplete", 3);
    xfa.resolveNode("SemnaturaElecJ").presence = "hidden";
} else {
    xfa.host.messageBox("Toate campurile obligatorii sunt completate.", "Validare completa!", 3);
    xfa.resolveNode("SemnaturaElecJ").presence = "visible";
}
