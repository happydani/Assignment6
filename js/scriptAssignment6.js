/*global launchProgram, isSimpleAlpha, isSimpleNumber, isAddress, isState, isEmail, addressType, dir */

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
			streetAddress = document.getElementById('streetAddress'),
			aptSteRoom = document.getElementById('aptSteRoom'),
			city = document.getElementById('city'),
			state = document.getElementById('state'),
			zip = document.getElementById('zip'),
			phone = document.getElementById('phone'),
			myEmail = document.getElementById('myEmail'),
			btnBuildPizza = document.getElementById('btnBuildPizza');
		/*----------------Hide/Show 'Other Address' Types--------------*/
		function hideOrShowOtherField() {

			var x = document.getElementById("addressType").value;
			if (x === "other") {
				document.getElementById("hideOtherAddressType").style.display = 'block';
			} else {
				document.getElementById("hideOtherAddressType").style.display = 'none';
			}
		}

		dir(myName);
		myName.onkeyup = function () {
			if (isSimpleAlpha(myName.value)) {
				customer.myName = myName.value;
				myName.nextSibling.innerHTML = '';
			} else {
				myName.nextSibling.innerHTML = ' Oops! Please use alphabetic characters';
			}
		};
		
		
		addressType.onchange = function () {
			dir('addressType[0].selected =');
			dir(addressType[0].selected);
			if (addressType[0].selected !== true) {
//				customer.otherAddressType = otherAddressType.value;
				addressType.nextSibling.innerHTML = '';
			} else {
				addressType.nextSibling.innerHTML = ' Oops! Please select your type of residence';
			}
		};
		
		dir(otherAddressType);
		otherAddressType.onkeyup = function () {
			if (isSimpleAlpha(otherAddressType.value)) {
				customer.otherAddressType = otherAddressType.value;
				otherAddressType.nextSibling.innerHTML = '';
			} else {
				otherAddressType.nextSibling.innerHTML = ' Oops! Please use alphabetic characters';
			}
		};

		//	validate Address Type and assure all required fields have input
		btnBuildPizza.onclick = function () {
			var i;
			/*if (myName.value === '') {
				myName.nextSibling.innerHTML = ' Oops! This field is required now';
			} else {
				myName.nextSibling.innerHTML = '';
			}*/
			dir(addressType);

			if (addressType['0'].selected) {
				addressType.nextSibling.innerHTML = ' Oops! Please select your type of residence';

			} else {
				addressType.nextSibling.innerHTML = '';
				for (i = 0; i < addressType.length; i += 1) {
					if (addressType[i].selected) {
						if (i === 7) { //selection is 'Other'
							dir(i);
							dir('otherAddressType.value =');
							dir(otherAddressType.value);
							if (isAddress(otherAddressType.value)) {
								customer.otherAddressType = otherAddressType.value;
								addressType.nextSibling.innerHTML = '';
							} else {
								otherAddressType.nextSibling.innerHTML = ' Oops! Please use alphabetic characters';
							}
						} else { // i === 1 thru 6
							customer.addressType = addressType[i].value;
							addressType.nextSibling.innerHTML = '';
							break;
						}
					}
				}
			}

//			dir(customer);
//			dir(customer.addressType);
//			dir(addressType[i].value);
			
			
			if (myName.value === '') {
				myName.nextSibling.innerHTML = ' Oops! This field is required';
			} else {
				myName.nextSibling.innerHTML = '';
			}
			if (streetAddress.value === '') {
				streetAddress.nextSibling.innerHTML = ' Oops! This field is required';
			} else {
				streetAddress.nextSibling.innerHTML = '';
			}
			if (city.value === '') {
				city.nextSibling.innerHTML = ' Oops! This field is required';
			} else {
				city.nextSibling.innerHTML = '';
			}
			if (state.value === '') {
				state.nextSibling.innerHTML = ' Oops! This field is required';
			} else {
				state.nextSibling.innerHTML = '';
			}
			if (zip.value === '') {
				zip.nextSibling.innerHTML = ' Oops! This field is required';
			} else {
				zip.nextSibling.innerHTML = '';
			}
			if (phone.value === '') {
				phone.nextSibling.innerHTML = ' Oops! This field is required';
			} else {
				phone.nextSibling.innerHTML = '';
			}
			if (myEmail.value === '') {
				myEmail.nextSibling.innerHTML = ' Oops! This field is required';
			} else {
				myEmail.nextSibling.innerHTML = '';
			}
		}; // end validating Address Type

		// determine whether to show otherAddressType input field
		addressType.addEventListener("change", hideOrShowOtherField, false);


		dir(streetAddress);
		streetAddress.onkeyup = function () {
			var myInput = streetAddress.value;
			if (isAddress(myInput)) {
				customer.streetAddress = myInput;
				streetAddress.nextSibling.innerHTML = '';
			} else {
				streetAddress.nextSibling.innerHTML = ' Oops! Please use alphanumeric characters';
			}
		};
		
		dir(city);
		city.onkeyup = function () {
			if (isSimpleAlpha(city.value)) {
				customer.city = city.value;
				city.nextSibling.innerHTML = '';
			} else {
				city.nextSibling.innerHTML = ' Oops! Please use alphabetic characters';
			}
		};

		dir(state);
		state.onkeyup = function () {
			if (isState(state.value)) {
				customer.state = state.value;
				state.nextSibling.innerHTML = '';
			} else {
				state.nextSibling.innerHTML = ' Oops! Please use two alphabetic characters abbreviation for your state';
			}
		};
		// populate remaining form fields
	} /* end launchCustomer */


	/*--------------------- Form Validation ---------------------*/

	function isSimpleAlpha(input) {
		dir('entered isSimpleAlpha ... input = ');
		dir(input);
		var validInput,
			letters = /^[A-Za-z\. ]+$/; // '+' assure there's at least one char in the string
		dir(input.match(letters));
		if (input.match(letters) !== null) {
			validInput = true;
		} else {
			validInput = false;
		}
		dir('valid simple alpha input =');
		dir(validInput);
		return validInput;
	}
	
	function isState(input) {
		dir('entered isState ... input = ');
		dir(input);
		var validInput,
			state = /^[A-Za-z]{2}$/;
		dir(input.match(state));
		if (input.match(state) !== null) {
			validInput = true;
		} else {
			validInput = false;
		}
		dir('valid state input =');
		dir(validInput);
		return validInput;
	}

	function isAddress(input) {
		dir('entered isAddress ... input = ');
		dir(input);
		var validInput,
			address = /^[0-9#\- ]+[A-Za-z0-9\.\-# ]+$/;
		dir(input.match(address));
		if (input.match(address) !== null) {
			validInput = true;
		} else {
			validInput = false;
		}
		dir('valid address input =');
		dir(validInput);
		return validInput;
	}

	function isSimpleNumber(input) {
		dir('entered isSimpleNumber ... input = ');
		dir(input);
		var validInput,
			numbers = /^[0-9 ]+$/; // '+' assure there's at least one number in the string
		dir(input.match(numbers));
		if (input.match(numbers) !== null) {
			validInput = true;
		} else {
			validInput = false;
		}
		dir('valid simple numeric input =');
		dir(validInput);
		return validInput;
		//	/\d{5}(-\d{4})?/  //zip validation string
	}

	function isEmail(input) {
		dir('entered isEmail ... input = ');
		dir(input);
		var validInput,
			emails = /^[a-zA-Z_.]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/; //works fine
		// emails = /^[a-zA-Z_.]+@[a-zA-Z]+\.(com|edu|io)$/; //if I want to specify the domain explicitly
		dir(input.match(emails));
		if (input.match(emails) !== null) {
			validInput = true;
		} else {
			validInput = false;
		}
		dir('valid email input =');
		dir(validInput);
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