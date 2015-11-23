function println(text) {
	//add filter
	document.getElementById('text').innerHTML += text + "<br>";
}
function say(){
	var input = document.getElementById('input');
	println("You: " + input.value);
	respond(input.value);
	input.value = "";
}
function respond(text) {
	println("Bot: You said: " + text);
}
function init() {
	var button = document.getElementById('say');	
	button.addEventListener('click', say,true);
}



init();
