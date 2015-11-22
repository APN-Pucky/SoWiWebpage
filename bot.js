function println(text) {
	document.getElementById('text').innerHTML += text + "<br>";
}
function say(){
	var input = document.getElementById('input');
	println("You: " + input.value);
	input.value = "";
	
}
function respond(){}
function init() {
	var button = document.getElementById('say');	
	button.addEventListener('click', say,true);
}



init();
