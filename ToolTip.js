// Initialize event 
// Check if the field is empty
if (this.rawValue === "" || this.rawValue === null) {
    // Field is empty, proceed with the exit event
    this.execEvent("exit");

    // Set the picture value to null and assign the tooltip value
    this.format.picture.value = "null{'" + this.assist.toolTip.value + "'}";

    // Set the font size to 9pt
    this.font.size = "9pt";
} else {
    // Field is not empty, do nothing or handle accordingly
    // Optionally, you can add any logic here if the field is filled
}


// Enter event
this.fontColor = "0,0,0";
this.font.posture = "normal"; 
this.font.size = "9pt";

//Exit event
if (this.isNull){
	this.font.size = "9pt";
	this.fontColor = "102,102,102"; 
	this.font.posture = "italic"; 
	this.caption.font.fill.color.value = "0,0,0"; 
	this.caption.font.posture = "normal";
} else {
}

// Text: Daca nu este cazul introduceti: "NU SE APLICA"
