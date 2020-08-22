var keyLeft
var keyCenter
var keyRight

window.addEventListener("load", function() {
  	/*alert("Hello World!!\n Demo");*/
	console.log("Hello World!");
	document.getElementById("hello-btn").focus();
});

function msg(){
  alert("Hello World!!");
}

function OpenBackWindow(){

	var txt = document.getElementById("dpad-status").value;
	var bwc = window.confirm("Exit App?");
	if (bwc){
		txt +="\nExited\n";
		window.close();
	}else{
		txt +="\nExit Cancelled\n";
	}
	
	document.getElementById("dpad-status").value += txt;
}

function OpenRightWindow(){
	
	var srw = window.open("", "MsgBox", "width=240,height=240");
	srw.document.write ( "<h3> Credits</h3>");
	srw.document.write ( "<p> BananaHackers </p>");
	srw.document.write ( "<p> Malagas </p>");
	
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
	
	const itemsList = document.querySelectorAll(".nav-items");

	/* visual debug on locked textarea*/
	document.getElementById("dpad-status").value = "";
	const valueCurr = "CurrIndex:" + currIndex + "\n";
	const valueNext = "NextIndex:" + nextPos + "\n";
	const valueLen = "ItemLength:" + itemsList.length + "\n";
	const valueConcat = valueCurr + valueNext + valueLen;
	document.getElementById("dpad-status").value = valueConcat;
	
	/* shade direction flow */
	if ( (currIndex - nextPos < 0)  ) 
		itemsList[nextPos].style.backgroundColor = "red";
	else
		itemsList[nextPos].style.backgroundColor   = "yellow";

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
		//	window.alert("Left softkey has been pressed");
			OpenBackWindow();
			document.getElementById("key-alert").value = "";
			document.getElementById("key-alert").value = "SoftLeft";
		break;

		case 'Enter':
			window.alert("Enter softkey has been pressed");
			document.getElementById("key-alert").value = "";
			document.getElementById("key-alert").value = "Enter";
		break;
	
		case 'SoftRight':
	//		window.alert("Right softkey has been pressed");
			OpenRightWindow();
			document.getElementById("key-alert").value = "";
			document.getElementById("key-alert").value = "SoftRight"
		break;

	

	}		

};

function handleActiveKeyDown(ev){

	switch(ev.key){
	
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


document.activeElement.addEventListener("keydown", handleActiveKeyDown);
document.addEventListener("keydown", handleKeyDown);




