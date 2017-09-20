window.onscroll = function() {
	scrollFunction();
};

function scrollFunction() {
	if (document.body.scrollTop >= 600 || document.documentElement.scrollTop >= 600) {
		document.getElementById("go-top").style.display = "block";
	}
	else {
		document.getElementById("go-top").style.display = "none";
	}
}

// When the user clicks on the button, scroll to the top of the document
vm.topFunction = function() {
	document.body.scrollTop = 0; // For Chrome, Safari and Opera 
	document.documentElement.scrollTop = 0; // For IE and Firefox

};
