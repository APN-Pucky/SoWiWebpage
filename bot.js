function escape(text) {
	return text.toString().replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;") + "<br>";
	
}
function printlnUnescaped(text) {
	var textfield = document.getElementById('text');
        textfield.innerHTML += text;
        textfield.scrollTo(0,textfield.scrollHeight);
}
function say(){
	var input = document.getElementById('input');
	printlnUnescaped("<font color='blue'>"+"You: " + escape(input.value)+"</font>");
	respond(input.value);
	input.value = "";
}
function sayBot(text) {
	printlnUnescaped("<font color='red'>"+"Bot: " + escape(text) + "</font>");
}
//run level.....1,2,3,4
function respond(text) {
	//sayBot(text);
	sayBot("Ist das dein Ernst!?	Wie kann man nur so dumm sein?!?");	
	sayBot("Jedes Kind weiß doch, dass ...");
	sayBot("Was machst du noch auf meiner Seite?	Abschaum wie dich kann ich hier nicht brauchen!");
}
//themen: Klimakrise, Weltpolitik, Religion, Geschmack(Film, Musik) -------->>> shitstorm
function init() {
	var button = document.getElementById('say');	
	button.addEventListener('click', say,true);
	sayBot("Hallo, was ist deine Meinung zu" + "Thema");
}



init();
