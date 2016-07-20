/*global init, btn1, btn2, btn3, btn4, validateForm, isValid, writeError, removeError, addressType, hideField*/
var W3CDOM = (document.getElementsByTagName && document.createElement);
var VALID_EMAIL_REGEX = "^[^\\W][a-zA-Z0-9\\_\\-\\.]+([a-zA-Z0-9\\_\\-\\.]+)*\\@[-a-zA-Z0-9_]+(\\.[a-zA-Z0-9_]+)*\\.[a-zA-Z]{2,4}$";
document.addEventListener("DOMContentLoaded", init, false);


/*---------------------------Validation---------------------------------*/
function init() {
	'use strict';
	window.addEventListener("load", function () {
		btn1.addEventListener("click", validateForm, false);
		/*btn2.addEventListener("click", validateForm, false);
		btn3.addEventListener("click", validateForm, false);
		btn4.addEventListener("click", validateForm, false);*/
		/*function myFunction () {
			window.console.log(this.innerHTML);
		}*/
	}, false);
	 
	function validateForm() {
		var resultOptional = "",
			resultRequired = "",
			i = 0,
			j = 0,
			x = '',
			text = "",
			opt = document.getElementsByClassName("optional"),
			rqd = document.getElementsByClassName("reqd");

		for (j = 0; j < opt.length; j += 1) {
			if (opt.item(j).tagName === 'INPUT') {
				resultOptional += opt.item(j).id + " = " + opt.item(j).value + '\n';
			}
		}
		
		for (i = 0; i < rqd.length; i += 1) {
			if (!rqd.item(i).value) {
				writeError(rqd.item(i), 'This field is required');
			}
			if (rqd.item(i).value === '') {
				window.console.log(rqd.item(i).id + " is required");
				x = rqd.item(i).id + " is required";
				document.getElementById("err").innerHTML = x;
				
				if (rqd.item(i).tagName === 'INPUT') {
					resultRequired += rqd.item(i).id + " = " +   rqd.item(i).value + '\n ';
				}
			} /* end checking empty fields */
		}
		window.console.log('resultOptional = ' + resultOptional);
		window.console.log('resultRequired = ' + resultRequired);

	}
}

	
	/*--------------------Show Other Address Types-------------------------*/
	
//addressType.addEventListener("change", hideField, false);
	
function removeError() {
	'use strict';
/*	this.className = this.className.substring(0, this.className.lastIndexOf(' '));
	this.parentNode.removeChild(this.hasError);
	this.hasError = null;
	this.onchange = null;*/
}

	/*--------------------	Write Error	--------------------------*/

function writeError(obj, message) {
	"use strict";
	var validForm = false,
		sp = document.createElement('span');
	if (obj.hasError) {
		return;
	}
	if (W3CDOM) {
		obj.className += ' error';
		obj.onchange = removeError;
//		var sp = document.createElement('span');
		sp.className = 'error';
		sp.appendChild(document.createTextNode(message));
		obj.parentNode.appendChild(sp);
		obj.hasError = sp;
	} else {
		errorstring += obj.name + ': ' + message + '\n';
		obj.hasError = true;
	}
//	if (!firstError)
//		firstError = obj; 
}

/*--------------------	isValid 	--------------------------*/
function isValid() {
	'use strict';
	
	window.console.log("Got inside isValid");
	var i = 0,
		validForm = true,
		firstError = null,
		errorstring = '',
		regex = '',
		elem = document.forms["fs1"].elements;
	/*
	window.console.log('elem = ' + document.forms[0].elements);
	for (i = 0; i < elem.length; i += 1) {
		if (!elem[i].value) {
			writeError(elem[i], 'This field is required');
		}
	}
	if (elem.myEmail.value.indexOf('@') === -1) {
		regex = VALID_EMAIL_REGEX;
		writeError(elem.myEmail, 'Valid email address required');
	}
	if (!W3CDOM) {
		window.alert(errorstring);
	}
	if (firstError) {
		firstError.focus();
	}
	if (validForm) {
		window.alert('All data is valid!');
	} else {
		window.console.log("Everything looks good!");
	}*/
	return false;
}


/*--------------------Show Other Address Types--------------------------*/
/*function hideField() {
	
	'use strict';
	var x = document.getElementById("addressType").value;
	if (x === "other") {
		document.getElementById("hideOtherAddressType").style.display = 'block';
	} else {
		document.getElementById("hideOtherAddressType").style.display = 'none';
	}
}
// original
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
   */


