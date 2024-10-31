var incompleteFields = ""; // Initialize variable for incomplete fields message

// Mapping of internal field names to user-friendly names
var friendlyNames = {
    "DenumireUnic": "Denumire Unică",
    "CUIUnic": "Cod Unic de Înregistrare",
    "ProfitB2": "Profit Net",
    "CifraB2": "Cifra de Afaceri",
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
    "InstalareR4C5": "Instalare Activitate R4 C5",
    "InstalareR3C6": "Instalare Activitate R3 C6",
    "InstalareR4C6": "Instalare Activitate R4 C6",
    "InformareR3C6": "Informare Activitate R3 C6",
    "CertificatR4C6": "Certificat Activitate R4 C6",
    "CertificatR5C6": "Certificat Activitate R5 C6",
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
    "InitialD": "Inițial", 
    "PropusD": "Propus" 
    // Add more fields as needed
};

// Manually define the paths to all mandatory fields
var mandatoryFieldPaths = [
    "Page1.DenumireUnic",
    "Page1.CUIUnic",
    "Page1.Table1.Row2.ProfitB2",
    "Page1.Table1.Row2.CifraB2",
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
    "Page5.Table16.Row3.Table21.Row1.InstalareR3C5",
    "Page5.Table16.Row3.Table21.Row2.InstalareR4C5",
    "Page5.Table16.Row3.Table22.Row1.InstalareR3C6",
    "Page5.Table16.Row3.Table22.Row2.InstalareR4C6",
    "Page6.Table26.Row3.InformareR3C6",
    "Page6.Table26.Row4.CertificatR4C6",
    "Page6.Table26.Row5.CertificatR5C6",
    "Page6.Table26.Row6.CertificatR6C6",
    "Page7.ContributieC11",
    "Page7.DurataProiectuluiC12",
    "Page7.Table19Subform.Table19.Row1.Table27.Row2.NumeD",
    "Page7.Table19Subform.Table19.Row1.Table27.Row2.PrenumeD",
    "Page7.Table19Subform.Table19.Row1.Table27.Row2.CNPD",
    "Page7.Table19Subform.Table19.Row1.Table27.Row4.RegiuneD",
    "Page7.Table19Subform.Table19.Row1.Table27.Row4.JudetD",
    "Page7.Table19Subform.Table19.Row1.Table27.Row4.LocalitateD",
    "Page7.Table19Subform.Table19.Row1.Table27.Row6.StradaD",
    "Page7.Table19Subform.Table19.Row1.Table27.Row6.NrD",
    "Page7.Table19Subform.Table19.Row1.Table27.Row6.CodPostalD",
    "Page7.Table19Subform.Table19.Row1.Table27.Row6[2].Table28.Row2.InitialD",  
    "Page7.Table19Subform.Table19.Row1.Table27.Row6[2].Table28.Row2.PropusD", 
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

// Display a message if there are incomplete fields
if (incompleteFields !== "") {
    xfa.host.messageBox("Urmatoarele campuri sunt necompletate:\n" + incompleteFields, "Campuri Incomplete", 3);
} else {
    xfa.host.messageBox("Toate campurile obligatorii sunt completate.", "Validare completa!", 3);
}

