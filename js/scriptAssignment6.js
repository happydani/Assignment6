/*global launchProgram, validateSimpleCharField, addressType*/
var W3CDOM = (document.getElementsByTagName && document.createElement);
var VALID_EMAIL_REGEX = "^[^\\W][a-zA-Z0-9\\_\\-\\.]+([a-zA-Z0-9\\_\\-\\.]+)*\\@[-a-zA-Z0-9_]+(\\.[a-zA-Z0-9_]+)*\\.[a-zA-Z]{2,4}$";
document.addEventListener("DOMContentLoaded", launchProgram, false);
/*----------------Initialize Customer Objects--------------*/
function launchProgram() {
	'use strict';
	var customer = {}; // the customer object
	
	/*----------------Launch Customer Objects--------------*/
	function launchCustomer() {
		//make sure to handle otherAddressType differently
		var myName = document.getElementById('myName'),
			addressType = document.getElementById('addressType'),
			otherAddressType = document.getElementById('otherAddressType'),
			streetAddress1 = document.getElementById('streetAddress1'),
			aptSteRoom = document.getElementById('aptSteRoom'),
			city = document.getElementById('city'),
			state = document.getElementById('state'),
			zip = document.getElementById('zip'),
			phone = document.getElementById('phone'),
			myEmail = document.getElementById('myEmail');
		/*----------------Hide/Show 'Other Address' Types--------------*/
		function hideField() {

			var x = document.getElementById("addressType").value;
			if (x === "other") {
				document.getElementById("hideOtherAddressType").style.display = 'block';
			} else {
				document.getElementById("hideOtherAddressType").style.display = 'none';
			}
		}
		//window.console.log(hideField);
		//window.console.dir(myName);
		myName.onblur = function () {
			window.console.log(myName.value);
			var myInput = myName.value;
			if (validateSimpleAlphaCharField(myInput) === true) {
				customer.myName = myInput;
			} else {
				// it's false so create html message "invalid input, please use alphabetic characters A-Z"
				document.getElementById("div")
				document.getElementById().myName.id.innerHTML('Oops! Please only use alphabetic characters for your name');
			}
		};
		addressType.addEventListener("change", hideField, false);
		// populate remaining form fields
	} /* end launchCustomer */
	
	function validateSimpleCharField(input) {
		// declare local variables 
		// including a boolean (validInput) initially set to true 
		var validInput = true, //need a var to hold the regex equation
			regex = '^[A-Za-z]$';
		//test whether 'input' has valid alpha characters (and no numbers etc)
		// if input is valid (test against regex)
		if (input === regex) {
			//create a property for (input) in the Customer object for future use will take place in calling function
			validInput = true;
		} else {
			validInput = false;
		}
		//return (validInput) that says whet her valid or result 
		return validInput;
	}

	function validateSimpleNumberField(input) {
		// declare local variables 
		// including a boolean (validInput) initially set to true 
		// and one for assigning the input to a one with local scope if I plan on saving it (which I think I should so I can pass it back later to billing if the customer checks it's the same as the customer's contact info)
		var validInput = true;
		//test whether 'input' has valid alpha characters (and no numbers etc)
		// if input is valid create an Object for that input
		// if it's false create html message "invalid input, please use alphabetic characters A-Z"
		if (validateSimpleCharField(input)) {
			validInput = false;
		}
		//return (validInput) that says whether valid or result or not and maybe one for
		return validInput;
	}

/*--------------------- Execute the logic ---------------------*/

	launchCustomer();

	//	initPizzaOrder();
	//	initBilling();
	//	initCreditCard();
} // end launchProgram function 
/*---------------- Alternative Customer Collection--------------*/
/*function customerInfo () {	
	// this function will store the customer data and validate on clicking the button rather than testing each field as the customer inputs data on blur.
	
	"use strict";
	var orderToday = document.getElementById('orderToday');
	var btnBuildPizza = orderToday.getElementById('btnBuildPizza');

	btnBuildPizza.addEventListener("click", validateForm, false);
}
*/