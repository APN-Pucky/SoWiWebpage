var $dein = "was ist deine";
var $mein = $dein +" Meinung zu";
var $themen = [$mein +"m Syrien Konflikt", $mein+"m besten Musikgenre", $mein+"r NSA und BND Affäre", $dein + "r Meinung nach der beste Film", "ist dir der Schutz vor Terror oder die eigene Freiheit wichtiger", "was denkst du über die Klimakrise", "glaubst du an Gott"];
var $greet = ["Hallo, ", "Schönes Wetter heute, ","Moin, ", "Guten Tag, "];
var $resp1=["Ist das dein Ernst!?   Wie kann man nur so dumm sein?!?", "Ich hoffe dich überfährt ein Panzer.", "Hahahahaha"]; 
var $resp3=["Was machst du noch auf meiner Seite?","Hau ab!","Stirb einen grausamen Tod!", "Du Witzfigur"];
var $resp4=["Abschaum wie dich kann ich hier nicht brauchen!","Arschloch","Lol, immer dies Trolle im Internet"];
var $resp5=["Ich weiß wo du wohnst, weil du auf meinem Server mit deiner IP warst. Jetzt rufe ich bei der Polizei an und sage dass ich Schüsse und Schreie aus deinem Haus gehört habe!", "Mit dir brauch ich nicht weiter reden."];
var $thema=-1;
var $runlevel=0;
var $repl;
function rr(a) {
	return Math.floor((Math.random() *a.length) );
}
function r(a)
{
	return a[rr(a)];
}
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
	if(!/^\s*$/.test(input.value)) {	
		printlnUnescaped("<font color='blue'>"+"You: " + escape(input.value)+"</font>");
		respond(input.value);
	}
	input.value = "";
	
}
function sayBot(text) {
	printlnUnescaped("<font color='red'>"+"Bot: " + escape(text) + "</font>");
}
//run level.....1,2,3,4
function respond(text) {
	//sayBot(text);
	$runlevel++;
	switch($runlevel) {
    		case 1:
			sayBot(r($resp1));	
       			$repl = text;		
			break;
    		case 2:
			sayBot("Jedes Kind weiß doch, dass die Aussage:\"" + $repl+ "\" BULLSHIT ist. Was für ein Mensch müsste man sein um so etwas von sich zu geben?!?");
        		break;
		case 3:
			sayBot(r($resp3)); 
			break;
		case 4:
			sayBot(r($resp4));
			break;
		case 5:
			sayBot(r($resp5));
		default:
			
	} 
}
//themen: Klimakrise, Weltpolitik, Religion, Geschmack(Film, Musik) -------->>> shitstorm
function init() {
	var button = document.getElementById('say');	
	button.addEventListener('click', say,true);
	$thema = rr($themen);
	sayBot(r($greet) + $themen[$thema] +"?");
}



init();
