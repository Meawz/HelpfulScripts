 form1.Page2.Table2.Row2.EmailB2::exit - (JavaScript, client)
// Retrieve the value entered in the email field
var emailValue = this.rawValue;

// Regular expression to validate email format with a comprehensive list of supported domains (case-insensitive)
var regExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|net|org|info|biz|gov|edu|mil|ac|ad|ae|aero|af|ag|ai|al|am|an|ao|aq|ar|arpa|as|at|au|aw|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|coop|cr|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|int|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|museum|mv|mw|mx|my|mz|na|name|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|pro|ps|pt|pw|py|qa|re|ro|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tf|tg|th|tj|tk|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|um|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|za|zm|zw|gmail\.com|yahoo\.com|hotmail\.com|outlook\.com|icloud\.com|mail\.com|aol\.com|protonmail\.com|zoho\.com|mail\.ro)$/i;

// Check if the email field is empty or null
if (emailValue !== null && emailValue !== "") {
    // Validate the email input with regex
    if (!regExp.test(emailValue)) {
        // Show error if the email is invalid
        xfa.host.messageBox("Vă rugăm să introduceți o adresă de e-mail validă.", "Error", 3);
        this.rawValue = ""; // Clear the field if invalid
    } else {
        // Convert to lowercase if the email is valid
        this.rawValue = this.rawValue.toLowerCase();  
    }
} else {
    // Handle the case where the email field is empty (optional)
    // If needed, you can add a check here to show a message or perform other actions.
}
