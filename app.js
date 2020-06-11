var keyLeft
var keyCenter
var keyRight

window.addEventListener("load", function() {
  console.log("Hello World!");
});

function msg(){
  alert("Hello World!!");
}


/**
* @brief KeyDown Handler
*
* @param et
*
* @return 
*/



function handleKeyDown(et) {
	
	switch (et.key)
	{
		case 'SoftLeft':
			window.alert("Left softkey has been pressed");
			document.getElementById("key-alert").value = "";
			document.getElementById("key-alert").value = "SoftLeft";
		break;

		case 'Enter':
			window.alert("Enter softkey has been pressed");
			document.getElementById("key-alert").value = "";
			document.getElementById("key-alert").value = "Enter";
		break;
	
		case 'SoftRight':
			window.alert("Right softkey has been pressed");
			document.getElementById("key-alert").value = "";
			document.getElementById("key-alert").value = "SoftRight"
		break;

	}		

};


document.addEventListener("keydown", handleKeyDown);



