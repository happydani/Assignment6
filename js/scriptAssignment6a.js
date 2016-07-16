
document.addEventListener("DOMContentLoaded", init, false);

function init() {
	addressType.addEventListener("change", hideField, false);
	
}

function hideField() {
	var x = document.getElementById("addressType").value;
	if (x == "other") {
		document.getElementById("hideOtherAddressType").style.display='block';
	}
	else {
		document.getElementById("hideOtherAddressType").style.display='none';
	}
}