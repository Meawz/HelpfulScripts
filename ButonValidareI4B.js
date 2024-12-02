 form1.Page22.Button1::mouseUp - (JavaScript, client)
var incompleteFields = ""; // Initialize variable for incomplete fields message

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
    "InstalareR3C5": "Instalare Activitate R3 C5", 
    "InstalareR3C6": "Instalare Activitate R3 C6", 
    "InformareR3C6": "Informare Activitate R3 C6",
    "CertificatR6C6": "Certificat Activitate R6 C6", 
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
    "Observatii1" : "Observatii Nr.1",
    "Observatii2" : "Observatii Nr.2",
    "Observatii3" : "Observatii Nr.3",
    "Observatii4" : "Observatii Nr.4",
    "Observatii5" : "Observatii Nr.5",
    "Observatii6" : "Observatii Nr.6",
    "Observatii7" : "Observatii Nr.7",
    "Observatii8" : "Observatii Nr.8",
    "Observatii9" : "Observatii Nr.9",
    "Observatii10" : "Observatii Nr.10" 
    // Add more fields as needed
};

// Manually define the paths to all mandatory fields
var mandatoryFieldPaths = [
    "Page1.DenumireUnic",
    "Page1.CUIUnic",
    "Page1.Table33.Row3.ProfitNet",
    "Page1.Table33.Row3.CifraAfaceri",
    "Page2.TableB2P2.Row2.RegiuneListB2",
    "Page2.TableB2P2.Row2.JudetListB2",
    "Page2.TableB2P2.Row2.LocalitateListB2",
    "Page2.Table1.Row2.CodPostalB2",
    "Page2.Table1.Row2.StradaB2",
    "Page2.Table1.Row2.NrB2",
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
    "Page5.Table16.Row3.Table21.Row1.InstalareR3C5", 
    "Page5.Table16.Row3.Table22.Row1.InstalareR3C6",
    "Page6.Table26.Row3.InformareR3C6", 
    "Page6.Table26.Row6.CertificatR6C6", 
    "Page6.ContributieC11",
    "Page6.DurataProiectuluiC12",
    "Page7.Table34Subform.Table34.Row2.NumeD",
    "Page7.Table34Subform.Table34.Row2.PrenumeD",
    "Page7.Table34Subform.Table34.Row2.CNPD",
    "Page7.Table34Subform.Table34.Row2[1].Table35.Row2.RegiuneD",
    "Page7.Table34Subform.Table34.Row2[1].Table35.Row2.JudetD",
    "Page7.Table34Subform.Table34.Row2[1].Table35.Row2.LocalitateD",
    "Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2.StradaD", 
    "Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2.NrD", 
    "Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2.CodPostalD",
    "Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row2.Observatii1",
    "Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row3.Observatii2", 
    "Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row4.Observatii3", 
    "Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row5.Observatii4", 
    "Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row6.Observatii5", 
    "Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row7.Observatii6", 
    "Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row7[1].Observatii7", 
    "Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row7[2].Observatii8", 
    "Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row7[3].Observatii9", 
    "Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row7[4].Observatii10"      
]; 

var checkboxGroups = [
		{
				group: ["Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row2.Da1", "Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row2.Nu1"], 
				message: "Trebuie să selectați fie \"Da\", fie \"Nu\" la Observatii 1!"
		},
		{
				group: ["Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row3.Da2", "Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row3.Nu2"],  
				message: "Trebuie să selectați fie \"Da\", fie \"Nu\" la Observatii 2!"
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
				group: ["Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row7[1].Da7", "Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row7[1].Nu7"],  
				message: "Trebuie să selectați fie \"Da\", fie \"Nu\" la Observatii 7!"
		},
		{
				group: ["Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row7[2].Da8", "Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row7[2].Nu8"],  
				message: "Trebuie să selectați fie \"Da\", fie \"Nu\" la Observatii 8!"
		},
		{
				group: ["Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row7[3].Da9", "Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row7[3].Nu9"],  
				message: "Trebuie să selectați fie \"Da\", fie \"Nu\" la Observatii 9!"
		},
		{
				group: ["Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row7[4].Da10", "Page7.Table34Subform.Table34.Row2[1].Table35.Row2[1].Table36.Row2[2].Table37.Row7[4].Nu10"],  
				message: "Trebuie să selectați fie \"Da\", fie \"Nu\" la Observatii 10!"
		},
		{
				group:["Page5.DaC3", "Page5.NuC3"],
				message: "Trebuie să selectați fie \"Da\", fie \"Nu\" la C3. Finanțări nerambursabile obținute sau solicitate!"  
		},
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
    xfa.resolveNode("SemnaturaElecJ").presence = "hidden";
} else {
    xfa.host.messageBox("Toate campurile obligatorii sunt completate.", "Validare completa!", 3);
    xfa.resolveNode("SemnaturaElecJ").presence = "visible";
}
