// Initialize event 
this.execEvent("exit"); 
this.format.picture.value = "null{'" + this.assist.toolTip.value + "'}";
this.font.size = "9pt";

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
