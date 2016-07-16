document.addEventListener("DOMContentLoaded", init, false);
var VALID_EMAIL_REGEX = "^[^\\W][a-zA-Z0-9\\_\\-\\.]+([a-zA-Z0-9\\_\\-\\.]+)*\\@[-a-zA-Z0-9_]+(\\.[a-zA-Z0-9_]+)*\\.[a-zA-Z]{2,4}$";

function init() {
	<!---------------------------Validation--------------------------------->
		
	//var myName = document.getElementById("myName");
	window.console.log('myName = ', myName);
	myName.addEventListener("blur", myValidate, false);
	myEmail.addEventListener("blur",myValidate,false);
	
	
	
	<!--------------------Show Other Address Types-------------------------->		
	addressType.addEventListener("change", hideField, false);	
	
	<!--------------------		-------------------------->
	
}
function myValidate() {
	document.getElementById("buildPizza");
	window.console.log("Got inside validator");
	validForm = true;
	firstError = null;
	errorstring = '';
	var elem = document.forms[0].elements;
	for (var i=0; i < elem.length; i++) {
		if (!elem[i].value)
			writeError(elem[i],'This field is required');
	}
	if (elem['myEmail'].value.indexOf('@') == -1) {
		regex = VALID_EMAIL_REGEX;
		writeError(elem['myEmail'],'Valid email address required');}
	if (!W3CDOM) {
		alert(errorstring);}
	if (firstError) {
		firstError.focus();}
	if (validForm) {
		alert('All data is valid!');}
	else {
		console.log("Everything looks good!")
	}
	return false;
}
function hideField() {
	<!--------------------Show Other Address Types-------------------------->
	var x = document.getElementById("addressType").value;
	if (x == "other") {
		document.getElementById("hideOtherAddressType").style.display='block';
	}
	else {	
		document.getElementById("hideOtherAddressType").style.display='none';
	}
}

function myValidate() {
	document.getElementById("buildPizza");
	window.console.log("Got inside validator");
	validForm = true;
	firstError = null;
	errorstring = '';
	var elem = document.forms[0].elements;
	for (var i=0; i < elem.length; i++) {
		if (!elem[i].value)
			writeError(elem[i],'This field is required');
	}
	if (elem['email'].value.indexOf('@') == -1) {
		writeError(elem['email'],'This is not a valid email address');}
	if (!W3CDOM) {
		alert(errorstring);}
	if (firstError) {
		firstError.focus();}
	if (validForm) {
		alert('All data is valid!');}
	else {
		console.log("Everything looks good!")
	}
	return false;
}
    


