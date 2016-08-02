/*global launchProgram, showHideDiv, isSimpleAlpha, isSimpleNumber, isAddress, isState, isZip, isPhone, isEmail, addressType, dir */

document.addEventListener("DOMContentLoaded", launchProgram, false);
/*----------------Initialize Customer Objects--------------*/
function launchProgram() {
	'use strict';
	var customerInfo = {customer:{}, order:{}, billing:{}}, // the customer object
		isValidated = true; // button flag will not proceed to next fieldset unless it remains true
	/*----------------Launch Customer Objects--------------*/


	function launchCustomer() {
		var myName = document.getElementById('myName'),
			addressType = document.getElementById('addressType'),
			otherAddressType = document.getElementById('otherAddressType'),
			streetAddress = document.getElementById('streetAddress'),
			aptSteRoom = document.getElementById('aptSteRoom'),
			city = document.getElementById('city'),
			state = document.getElementById('state'),
			zip = document.getElementById('zip'),
			phone = document.getElementById('phone'),
			myEmail = document.getElementById('myEmail'),
			btnBuildPizza = document.getElementById('btnBuildPizza');
		
		/*---------------- Hide/Show Functions --------------*/
		function hideOrShowOtherField() {
			var x = document.getElementById("addressType").value;
			if (x === "other") {
				document.getElementById("hideOtherAddressType").style.display = 'block';
			} else {
				document.getElementById("hideOtherAddressType").style.display = 'none';
			}
		}

		function showHideDiv(reveal, hide) {
			var revealFieldset = document.getElementById(reveal),
				hideFieldset = document.getElementById(hide);
			revealFieldset.style.display = 'block';
			hideFieldset.style.display = 'none';
		}
		
		
		/*---------------- Validate Fields  --------------*/
		
		//	dir(myName);
		myName.onkeyup = function () {
			if (isSimpleAlpha(myName.value)) {
				customerInfo.customer.myName = myName.value;
				myName.nextSibling.innerHTML = '';
				myName.parentElement.firstElementChild.firstElementChild.innerHTML = '';

			} else {
				myName.nextSibling.innerHTML = ' Oops! Please use alphabetic characters';
				myName.parentElement.firstElementChild.firstElementChild.innerHTML = '*';
				isValidated = false;
			}
		};


		addressType.onchange = function () {
			// dir('addressType[0].selected =');
			// dir(addressType[0].selected);
			if (addressType[0].selected !== true) {
				customerInfo.customer.addressType = addressType.value; ////////////////////////////////
				addressType.nextSibling.innerHTML = '';
				addressType.parentElement.firstElementChild.firstElementChild.innerHTML = '';
			} else {
				addressType.nextSibling.innerHTML = ' Oops! Please select your type of residence';
				addressType.parentElement.firstElementChild.firstElementChild.innerHTML = '*';
				isValidated = false;
			}
		};

		// dir(otherAddressType);
		otherAddressType.onkeyup = function () {
			if (isSimpleAlpha(otherAddressType.value)) {
				customerInfo.customer.otherAddressType = otherAddressType.value;
				otherAddressType.nextSibling.innerHTML = '';
				otherAddressType.parentElement.firstElementChild.firstElementChild.innerHTML = '';
			} else {
				otherAddressType.nextSibling.innerHTML = ' Oops! Please use alphabetic characters to indicate your type of residence';
				otherAddressType.parentElement.firstElementChild.firstElementChild.innerHTML = '*';
				isValidated = false;
			}
		};

		//	validate Address Type and assure all required fields have input
		btnBuildPizza.onclick = function () {
			var i,
				customerOrderForm = document.getElementById('#customerOrderForm');
			dir('customerOrderForm = ');
			dir(customerOrderForm);
			isValidated = true;

			if (addressType['0'].selected) {
				customerInfo.customer.addressType = addressType[0].value;
				addressType.nextSibling.innerHTML = ' Oops! Please select your type of residence';
				addressType.parentElement.firstElementChild.firstElementChild.innerHTML = '*';
				isValidated = false;
			} else {
				
				addressType.nextSibling.innerHTML = '';
				//addressType.parentElement.firstElementChild.firstElementChild.innerHTML = ''; Do we need this one?
				for (i = 0; i < addressType.length; i += 1) {
					if (addressType[i].selected) {
						if (i === 7) { //selection is 'Other'
							// dir(i);
							// dir('otherAddressType.value =');
							// dir(otherAddressType.value);
							if (isSimpleAlpha(otherAddressType.value)) {
								customerInfo.customer.otherAddressType = otherAddressType.value;
								addressType.nextSibling.innerHTML = '';
								addressType.parentElement.firstElementChild.firstElementChild.innerHTML = '';
							} else {
								otherAddressType.nextSibling.innerHTML = ' Oops! Please use alphabetic characters';
								otherAddressType.parentElement.firstElementChild.firstElementChild.innerHTML = '*';
								isValidated = false;
							}
						} else { // i === 1 thru 6
							customerInfo.customer.addressType = addressType[i].value;
							addressType.nextSibling.innerHTML = '';
							addressType.parentElement.firstElementChild.firstElementChild.innerHTML = '';
							break;
						}
					}
				}
			}
			dir('customerInfo = ');
			dir(customerInfo);

			// We need to revalidate fields that aren't controlled by the button handler

			myName.onkeyup(); // This triggers the field's keyup event 
			streetAddress.onkeyup();
			city.onkeyup();
			state.onkeyup();
			zip.onkeyup();
			phone.onkeyup();
			myEmail.onkeyup();
			
/////////// BUILD MY PIZZA .... Check that all required fields are validated
//			var placeOrder = getElementById('#customerOrderForm');
			if (isValidated) {
				showHideDiv('buildPizza', 'orderToday'); //show customerOrderForm
				//show buildPizza
				
			} else { // If any isValidated flags are tripped, then wait to proceed until isValidated is true
						//error message to See above error messages
				btnBuildPizza.nextSibling.innerHTML = 'See above error messages';
			}

		}; // end validatin

		// determine whether to show otherAddressType input field
		addressType.addEventListener("change", hideOrShowOtherField, false);


		// dir(streetAddress);
		streetAddress.onkeyup = function () {
			var myInput = streetAddress.value;
			if (isAddress(myInput)) {
				customerInfo.customer.streetAddress = myInput;
				streetAddress.nextSibling.innerHTML = '';
				streetAddress.parentElement.firstElementChild.firstElementChild.innerHTML = '';
			} else {
				streetAddress.nextSibling.innerHTML = ' Oops! Please use alphanumeric characters';
				streetAddress.parentElement.firstElementChild.firstElementChild.innerHTML = '*';
				isValidated = false;
			}
		};
		
		// dir(aptSteRoom);
		aptSteRoom.onkeyup = function () {
			customerInfo.customer.aptSteRoom = aptSteRoom.value;
		};

		// dir(city);
		city.onkeyup = function () {
			if (isSimpleAlpha(city.value)) {
				customerInfo.customer.city = city.value;
				city.nextSibling.innerHTML = '';
				city.parentElement.firstElementChild.firstElementChild.innerHTML = '';
			} else {
				city.nextSibling.innerHTML = ' Oops! Please use alphabetic characters';
				city.parentElement.firstElementChild.firstElementChild.innerHTML = '*';
			   isValidated = false;
			}
		};

		// dir(state);
		state.onkeyup = function () {
			if (isState(state.value)) {
				customerInfo.customer.state = state.value;
				state.nextSibling.innerHTML = '';
				state.parentElement.firstElementChild.firstElementChild.innerHTML = '';
			} else {
				state.nextSibling.innerHTML = ' Oops! Please use two alphabetic characters abbreviation for your state';
				state.parentElement.firstElementChild.firstElementChild.innerHTML = '*';
				isValidated = false;
			}
		};

		// dir(zip);
		zip.onkeyup = function () {
			if (isZip(zip.value)) {
				customerInfo.customer.zip = zip.value;
				zip.nextSibling.innerHTML = '';
				zip.parentElement.firstElementChild.firstElementChild.innerHTML = '';
			} else {
				zip.nextSibling.innerHTML = ' Oops! Please use at least five  digits for your zip (optionally zip + 4)';
				zip.parentElement.firstElementChild.firstElementChild.innerHTML = '*';
				isValidated = false;
			}
		};

		// dir(phone);
		phone.onkeyup = function () {
			if (isPhone(phone.value)) {
				customerInfo.customer.phone = phone.value;
				phone.nextSibling.innerHTML = '';
				phone.parentElement.firstElementChild.firstElementChild.innerHTML = '';
			} else {
				phone.nextSibling.innerHTML = ' Keep typing digits until you match this format xxx-xxx-xxxx';
				phone.parentElement.firstElementChild.firstElementChild.innerHTML = '*';
				isValidated = false;
			}
		};

		// dir(myEmail);
		myEmail.onkeyup = function () {
			if (isEmail(myEmail.value)) {
				customerInfo.customer.myEmail = myEmail.value;
				myEmail.nextSibling.innerHTML = '';
				myEmail.parentElement.firstElementChild.firstElementChild.innerHTML = '';
			} else {
				myEmail.nextSibling.innerHTML = ' Keep typing digits until you match this format abc@def.xyz or abc@def.xy';
				myEmail.parentElement.firstElementChild.firstElementChild.innerHTML = '*';
				isValidated = false;
			}
		};
	} /* end launchCustomer */


	/*--------------------- Form Validation ---------------------*/

	function isSimpleAlpha(input) {
		// dir('entered isSimpleAlpha ... input = ');
		// dir(input);
		var validInput,
			letters = /^[A-Za-z\. ]+$/; // '+' assure there's at least one char in the string
		// dir(input.match(letters));
		if (input.match(letters) !== null) {
			validInput = true;
		} else {
			validInput = false;
		}
		// dir('valid simple alpha input =');
		// dir(validInput);
		return validInput;
	}

	function isState(input) {
		// dir('entered isState ... input = ');
		// dir(input);
		var validInput,
			state = /^[A-Za-z]{2}$/;
		// dir(input.match(state));
		if (input.match(state) !== null) {
			validInput = true;
		} else {
			validInput = false;
		}
		// dir('valid state input =');
		// dir(validInput);
		return validInput;
	}

	function isAddress(input) {
		// dir('entered isAddress ... input = ');
		// dir(input);
		var validInput,
			address = /^[0-9#\- ]+[A-Za-z0-9\.\-# ]+$/;
		// dir(input.match(address));
		if (input.match(address) !== null) {
			validInput = true;
		} else {
			validInput = false;
		}
		// dir('valid address input =');
		// dir(validInput);
		return validInput;
	}

	function isSimpleNumber(input) {
		// dir('entered isSimpleNumber ... input = ');
		// dir(input);
		var validInput,
			numbers = /^[0-9 ]+$/;
		// dir(input.match(numbers));
		if (input.match(numbers) !== null) {
			validInput = true;
		} else {
			validInput = false;
		}
		// dir('valid simple numeric input =');
		// dir(validInput);
		return validInput;
	}

	function isZip(input) {
		// dir('entered isZip ... input = ');
		// dir(input);
		var validInput,
			zip = /^\d{5}-?(\d{4})?$/; //zip validation string; 
		// dir(input.match(zip));
		if (input.match(zip) !== null) {
			validInput = true;
		} else {
			validInput = false;
		}
		// dir('valid zip input =');
		// dir(validInput);
		return validInput;
	}

	function isPhone(input) {
		// dir('entered isPhone ... input = ');
		// dir(input);
		var validInput,
			phone = /^\d{3}-?\d{3}-?\d{4}$/; //phone validation string; 
		// dir(input.match(phone));
		if (input.match(phone) !== null) {
			validInput = true;
		} else {
			validInput = false;
		}
		// dir('valid isPhone input =');
		// dir(validInput);
		return validInput;
	}

	function isEmail(input) {
		// dir('entered isEmail ... input = ');
		// dir(input);
		var validInput,
			emails = /^[a-zA-Z_.]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/; //works fine
		// emails = /^[a-zA-Z_.]+@[a-zA-Z]+\.(com|edu|io)$/; //if I want to specify the domain explicitly
		// dir(input.match(emails));
		if (input.match(emails) !== null) {
			validInput = true;
		} else {
			validInput = false;
		}
		// dir('valid email input =');
		// dir(validInput);
		return validInput;
	}

	/*--------------------- Output to the Console ---------------------*/
	function dir(arg) {
		window.console.dir(arg);
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