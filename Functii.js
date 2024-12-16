 form1.#variables[0].Functii - (JavaScript, client)
function padStart(str, targetLength, padString) {       
	str = String(str); // Ensure str is a string  
	padString = padString || ' ';   
while (str.length < targetLength) { 
	str = padString + str; 
} 
return str; }  

function genereazaCNP(){
var sex = Math.floor(Math.random() * (8 - 1 + 1)) + 1;
var an = Math.floor(Math.random() * (99 - 14 + 1)) + 14;
var luna = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
var ziua = Math.floor(Math.random() * (28 - 1 + 1)) + 1;
var judet = Math.floor(Math.random() * (52 - 1 + 1)) + 1;
var nnn = Math.floor(Math.random() * (999 - 1 + 1)) + 1;
 
if(luna<10) luna = "0" + luna;
if(ziua<10) ziua = "0" + ziua;
if(judet<10) judet = "0" + judet; //adaugare un 0 in fata daca numarul este mai mic decat 10
if(nnn<10) nnn = "00" + nnn;
if(nnn<100 && nnn>10) nnn = "0" + nnn;
 
var cnp_i = sex+""+an+""+luna+""+ziua+""+judet+""+nnn; //concatenarea datelor
var cnp_f = cnp_i.replace(/ /g, ''); //eliminarea spatiilor
 
//calcularea cifrei de control
var cnp = cnp_i.split('');
var cifra = ["2", "7", "9", "1","4","6","3","5","8","2","7","9"];
suma = 0;
for (i = 0; i < 12; i++) {
if(isNaN(cnp[i])==false) //verificarea daca cnp-ul generat pana acum este format doar din numere
suma += (cifra[i] * cnp[i]); //calcularea sumei de control
}
var rest = suma % 11;
if(rest==10)
var cifra_control = 1;
else
var cifra_control = rest;
var cnp_final=cnp_f.concat(cifra_control);
return cnp_final;
}	
	
