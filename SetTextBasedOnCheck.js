if (Page1.Unic.rawValue == "On"){
	event.value = "Solicitant/Parteneriatul pe care il reprezint " + Page1.DenumireB2.rawValue;
} else if (Page1.Parteneriat.rawValue == "On"){
	event.value = "Parteneriatul format din " + Page1.DenumireB2.rawValue + " si " + Page3.DenumirePartener.rawValue;
} else {
	event.value = "";
}
