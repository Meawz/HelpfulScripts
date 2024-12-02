var incompleteFields = ""; // Initialize variable for incomplete fields message

// Mapping of internal field names to user-friendly names
var friendlyNames = {
    "DenumireB2": "Denumire Solicitant Unic/Lider", 
    "CUIB2": "Cod Unic de Înregistrare",
    "ProfitNetL": "Profit Net", 
    "CifraAfaceriL": "Cifra de Afaceri", 
    "RegiuneListUnic": "Regiune", 
    "JudetUnic": "Județ", 
    "LocalitateUnic": "Localitate", 
    "CodPostalUnic": "Cod Poștal",
    "StradaUnic": "Strada",
    "NrUnic": "Număr",
    "TelefonUnic": "Telefon",
    "EmailUnic": "E-mail",
    "NumeUnic": "Nume",
    "PrenumeUnic": "Prenume",
    "FunctieUnic": "Funcție",
    "DataNUnic": "Data Nașterii",
    "CNPUnic": "Cod Numeric Personal",
    "BIUnic": "Buletin de Identitate",
    "CIUnic": "Carte de Identitate",
    "PasaportUnic": "Pașaport",
    "SeriaUnic": "Seria",
    "NumarUnic": "Număr",
    "EliberatUnic": "Eliberat la data de",
    "DeCatreUnic": "de Către", 
    "ValabilUnic": "Valabil Până La",
    "DenumirePartener": "Denumire Partener",
    "CUIPartener": "Cod Unic de Înregistrare Partener",
    "ProfitNetP": "Profit Partener", 
    "CifraAfaceriP": "Cifra de Afaceri Partener", 
    "RegiunePartener": "Regiune Partener",
    "JudetPartener": "Județ Partener",
    "LocalitatePartener": "Localitate Partener",
    "CodPostalPartener": "Cod Poștal Partener",
    "StradaPartener": "Strada Partener",
    "NrPartener": "Număr Partener",
    "TelefonPartener": "Telefon Partener",
    "EmailPartener": "E-mail Partener",
    "NumePartener": "Nume Partener",
    "PrenumePartener": "Prenume Partener",
    "FunctiePartner": "Funcție Partener",
    "DataNPartener": "Data Nașterii Partener",
    "CNPPartener": "CNP Partener",
    "BIPartener": "Buletin de Identitate Partener",
    "CIPartener": "Carte de Identitate Partener",
    "PasaportPartener": "Pașaport Partener",
    "SeriaPartener": "Seria Partener",
    "NumarPartener": "Număr Partener",
    "EliberatPartener": "Eliberat la data",
    "DeCatrePartener": "de Către", 
    "ValabilPartener": "Valabil Până La", 
    "BancaB3": "Denumire Bancă",
    "SucursalaB3": "Denumire Sucursală",
    "AdresaB3": "Adresa Băncii",
    "IBANB3": "IBAN",
    "TitularB3": "Titular",
    "TitluProiectC1": "Titlu Proiect",
    "DaC3": "Da (Întrebare C3)",
    "NuC3": "Nu (Întrebare C3)",
    "NationalC3": "Proiect Național",
    "EuropeanC3": "Proiect European",
    "InternationalC3": "Proiect Internațional",
    "DenumireProgramC3": "Denumire Program",
    "NumarProiecteC3": "Număr de Proiecte",
    "DenumireBeneficiarC3": "Denumire Beneficiar",
    "InDerulareC3": "Proiect În Derulare",
    "FinalizatC3": "Proiect Finalizat",
    "DataFinalC3": "Data Finalizării",
    "ValoareC3": "Valoare Proiect",
    "DescriereC4": "Descriere Investiție",
    "ObiectiveC5": "Obiectivele Proiectului",
    "RezultateC6": "Rezultate Așteptate",
    "RiscuriC7": "Riscuri Identificate",
    "PrincipiiC8": "Principii Orizontale",
    "NumericField4": "Număr Vouchere Activitatea 1", 
    "NumericField5": "Număr Vouchere Activitatea 2", 
    "NumericField6": "Număr Vouchere Activitatea 3", 
    "NumericField7": "Număr Vouchere Activitatea 4", 
    "NumericField8": "Număr Vouchere Activitatea 5", 
    "NumericField9": "Număr Vouchere Activitatea 6", 
    "ActR1C5": "Activitatea 1 (Coloana 5)",
    "ActR2C5": "Activitatea 2 (Coloana 5)",
    "ActR3C5": "Activitatea 3 (Coloana 5)",
    "ActR4C5": "Activitatea 4 (Coloana 5)",
    "ActR5C5": "Activitatea 5 (Coloana 5)",
    "ActR6C5": "Activitatea 6 (Coloana 5)",
    "ActR1C6": "Activitatea 1 (Coloana 6)",
    "ActR2C6": "Activitatea 2 (Coloana 6)",
    "ActR3C6": "Activitatea 3 (Coloana 6)",
    "ActR4C6": "Activitatea 4 (Coloana 6)",
    "ActR5C6": "Activitatea 5 (Coloana 6)",
    "ActR6C6": "Activitatea 6 (Coloana 6)",
    "Informare6": "Informare și Publicitate (Coloana 6)",
    "Cerificate6": "Certificate de Racordare (Coloana 6)",
    "ContributiaC11": "Contribuție",
    "DurataC12": "Durata Proiectului",
    "NumeD": "Nume",
    "PrenumeD": "Prenume",
    "CNPD": "CNP",
    "RegiuneD": "Regiune",
    "JudetD": "Județ",
    "LocalitateD": "Localitate",
    "StradaD": "Strada",
    "NrD": "Număr",
    "CodPostalD": "Cod Poștal",
    "SuprafataUtilaD": "Suprafață",
    "InitialD": "Valoare Inițială",
    "PropusFinalD": "Valoare Propusă/Finală"
    // Add more fields as needed
};

// Manually define the paths to all mandatory fields
var mandatoryFieldPaths = [
    "Page1.DenumireB2",
    "Page1.CUIB2",
    "Page1.Table31.Row3.ProfitNetL",
    "Page1.Table31.Row3.CifraAfaceriL",
    "Page2.Table2.Row2.RegiuneListUnic",
    "Page2.Table2.Row2.JudetUnic",
    "Page2.Table2.Row2.LocalitateUnic",
    "Page2.Table3.Row2.CodPostalUnic",
    "Page2.Table3.Row2.StradaUnic",
    "Page2.Table3.Row2.NrUnic",
    "Page2.Table4.Row2.TelefonUnic",
    "Page2.Table4.Row2.EmailUnic",
    "Page2.Table5.Row2.NumeUnic",
    "Page2.Table5.Row2.PrenumeUnic",
    "Page2.Table5.Row2.FunctieUnic",
    "Page2.Table6.Row2.DataNUnic",
    "Page2.Table6.Row2.CNPUnic",
    "Page2.Table7.Row2.BIUnic",
    "Page2.Table7.Row2.CIUnic",
    "Page2.Table7.Row2.PasaportUnic",
    "Page2.Table7.Row2.SeriaUnic",
    "Page2.Table7.Row2.NumarUnic",
    "Page2.Table7.Row2.EliberatUnic",
    "Page2.Table7.Row2.DeCatreUnic",
    "Page2.Table7.Row2.ValabilUnic",
    "Page3.DenumirePartener",
    "Page3.CUIPartener",
    "Page3.Table32.Row3.ProfitNetP",
    "Page3.Table32.Row3.CifraAfaceriP",
    "Page3.Table2.Row2.RegiunePartener",
    "Page3.Table2.Row2.JudetPartener",
    "Page3.Table2.Row2.LocalitatePartener",
    "Page3.Table3.Row2.CodPostalPartener",
    "Page3.Table3.Row2.StradaPartener",
    "Page3.Table3.Row2.NrPartener",
    "Page3.Table4.Row2.TelefonPartener",
    "Page3.Table4.Row2.EmailPartener",
    "Page3.Table5.Row2.NumePartener",
    "Page3.Table5.Row2.PrenumePartener",
    "Page3.Table5.Row2.FunctiePartner",
    "Page3.Table6.Row2.DataNPartener",
    "Page3.Table6.Row2.CNPPartener",
    "Page3.Table7.Row2.BIPartener",
    "Page3.Table7.Row2.CIPartener",
    "Page3.Table7.Row2.PasaportPartener",
    "Page3.Table7.Row2.SeriaPartener",
    "Page3.Table7.Row2.NumarPartener",
    "Page3.Table7.Row2.EliberatPartener",
    "Page3.Table7.Row2.DeCatrePartener",
    "Page3.Table7.Row2.ValabilPartener",
    "Page4.Table8.Row2.BancaB3",
    "Page4.Table8.Row2.SucursalaB3",
    "Page4.Table9.Row2.AdresaB3",
    "Page4.Table10.Row2.IBANB3",
    "Page4.Table10.Row2.TItularB3",
    "Page5.TitluProiectC1",
    "Page5.DaC3",
    "Page5.NuC3",
    "Page5.Tabel12Subform.Table12.Row2.Table14.Row1.NationalC3",
    "Page5.Tabel12Subform.Table12.Row2.Table14.Row2.EuropeanC3",
    "Page5.Tabel12Subform.Table12.Row2.Table14.Row3.InternationalC3",
    "Page5.Tabel12Subform.Table12.Row2.DenumireProgramC3",
    "Page5.Tabel12Subform.Table12.Row2.NumarProiecteC3",
    "Page5.Tabel12Subform.Table12.Row2.DenumireBeneficiarC3",
    "Page5.Tabel12Subform.Table12.Row2.Table15.Row1.InDerulareC3",
    "Page5.Tabel12Subform.Table12.Row2.Table15.Row2.FinalizatC3",
    "Page5.Tabel12Subform.Table12.Row2.Table15.Row3.DataFinalC3",
    "Page5.Tabel12Subform.Table12.Row2.ValoareC3",
    "Page6.DescriereC4",
    "Page6.ObiectiveC5",
    "Page6.RezultateC6",
    "Page6.RiscuriC7",
    "Page6.PrincipiiC8",
    "Page7.Table17.Row3.NumericField4",
    "Page7.Table17.Row4.NumericField5",
    "Page7.Table17.Row5.NumericField6",
    "Page7.Table17.Row6.NumericField7",
    "Page7.Table17.Row7.NumericField8",
    "Page7.Table17.Row8.NumericField9",
    "Page7.Table17.Row3.ActR1C5",
    "Page7.Table17.Row4.ActR2C5",
    "Page7.Table17.Row5.ActR3C5",
    "Page7.Table17.Row6.ActR4C5",
    "Page7.Table17.Row7.ActR5C5",
    "Page7.Table17.Row8.ActR6C5",
    "Page7.Table17.Row3.ActR1C6",
    "Page7.Table17.Row4.ActR2C6",
    "Page7.Table17.Row5.ActR3C6",
    "Page7.Table17.Row6.ActR4C6",
    "Page7.Table17.Row7.ActR5C6",
    "Page7.Table17.Row8.ActR6C6",
    "Page8.Table18.Row3.Informare6",
    "Page8.Table18.Row4.Cerificate6",
    "Page9.ContributiaC11",
    "Page9.DurataC12",
    "Page9.Table19subform.Table19.Row1.Table2.Row2.NumeD",
    "Page9.Table19subform.Table19.Row1.Table2.Row2.PrenumeD",
    "Page9.Table19subform.Table19.Row1.Table2.Row2.CNPD",
    "Page9.Table19subform.Table19.Row1.Table2.Row4.RegiuneD",
    "Page9.Table19subform.Table19.Row1.Table2.Row4.JudetD",
    "Page9.Table19subform.Table19.Row1.Table2.Row4.LocalitateD",
    "Page9.Table19subform.Table19.Row1.Table2.Row6.StradaD",
    "Page9.Table19subform.Table19.Row1.Table2.Row6.NrD",
    "Page9.Table19subform.Table19.Row1.Table2.Row6.CodPostalD",
    "Page9.Table19subform.Table19.Row1.Table2.Row7.Table3.Row2.SuprafataUtilaD", 
    "Page9.Table19subform.Table19.Row1.Table2.Row7.Table3.Row3.Table4.Row3.InitialD",   
    "Page9.Table19subform.Table19.Row1.Table2.Row7.Table3.Row3.Table4.Row3.PropusFinalD"   
];

var checkboxGroups = [
		{
			group:["Page5.DaC3", "Page5.NuC3"],
			message: "Trebuie să selectați fie \"Da\", fie \"Nu\" la C3. Finanțări nerambursabile obținute sau solicitate!"  
		}
]

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

// Display a message if there are incomplete fields
if (incompleteFields !== "") {
    xfa.host.messageBox("Urmatoarele campuri sunt necompletate:\n" + incompleteFields, "Campuri Incomplete", 3);
    xfa.resolveNode("SignatureField1").presence = "hidden";
} else {
    xfa.host.messageBox("Toate campurile obligatorii sunt completate.", "Validare completa!", 3);
    xfa.resolveNode("SignatureField1").presence = "visible";
}
