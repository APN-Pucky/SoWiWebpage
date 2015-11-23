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
function sayBot(text) {
	println("Bot: " + text);
}
function respond(text) {
	sayBot(text);
	sayBot("You use: " + navigator.userAgent.match(/\w*/)[0]);
	sayBot("on       " + navigator.platform.match(/\w*/)[0]);
}
function init() {
	var button = document.getElementById('say');	
	button.addEventListener('click', say,true);
	sayBot("Lol, du Spast!");
}



init();
