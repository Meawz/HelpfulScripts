var incompleteFields = "";
var pageCount = 22; // Set the total number of pages here

// Loop through each page under form1
for (var i = 1; i <= pageCount; i++) {
    // Build the page reference dynamically (e.g., form1.Page1, form1.Page2, ...)
    var pageName = "form1.Page" + i;

    // Use xfa.resolveNodes to access each field in the current page
    var fields = xfa.resolveNodes(pageName + ".#field[*]");

    // Check if fields were found on the page
    if (fields != null) {
        // Loop through each field in fields using the index k
        for (var k = 0; k < fields.length; k++) {
            var field = fields.item(k);

            // Check if the field is mandatory and empty
            if (field.mandatory == "error" && (field.rawValue == "" || field.rawValue == null)) {
                incompleteFields += field.name + " on Page " + i + " is required." + "\n";
            }
        }
    }
}

// Display a message if there are incomplete fields
if (incompleteFields !== "") {
    xfa.host.messageBox("The following mandatory fields are incomplete: " + "\n" + incompleteFields, "Incomplete Fields", 3);
} else {
    xfa.host.messageBox("All mandatory fields are complete.", "Validation Successful", 3);
}
