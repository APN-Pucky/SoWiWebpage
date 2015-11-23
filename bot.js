function println(text) {
	//add filter
	text = text.toString().replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
	var textfield = document.getElementById('text');
	textfield.innerHTML += text + "<br>";
	textfield.scrollTo(0,textfield.scrollHeight);
	
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
