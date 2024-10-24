//Regular expression to validate email format
var regExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

//Check if the email input is valid
if (!regExp.test(this.rawValue)){
	app.alert("Va rugam introduceti o adresa de e-mail valida.");
	this.rawValue = "";
	false;
} else {
	true;
}
