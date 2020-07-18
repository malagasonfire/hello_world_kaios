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
* @brief Put focus / change tab index on cursor over item 
*
* @param move
*
* @return 
*/

function nav (move){

	const currIndex = document.activeElement.tabIndex;
	const nextPos 	= currIndex + move;
	
	document.getElementById("dpad-status").value = "";
	const valueCurr = "CurrIndex:" + currIndex + "\n";
	const valueNext = "NextIndex:" + nextPos + "\n";
	const valueConcat = valueCurr + valueNext;
	document.getElementById("dpad-status").value = valueConcat;
	
	const itemsList = document.querySelectorAll(".nav-items");

	itemsList[currIndex].blur();
	itemsList[nextPos].focus();

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

		case 'ArrowUp':
			nav(-1);
		break;
		
		case 'ArrowDown':
			nav(1);
		break;

		case 'ArrowRight':
			nav(-1);
		break;

		case 'ArrowLeft':
			nav(1);
		break;


	}		

};


document.addEventListener("keydown", handleKeyDown);




