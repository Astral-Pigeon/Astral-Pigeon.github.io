//index.js

$(document).ready(function() {

"use strict";

$("#CurrentContent").load("buttons.html");

function SetContentToWhoHTML(){
	$("#CurrentContent").load("who.html");
}

function SetContentToWhatHTML(){
	$("#CurrentContent").load("what.html");
}

function SetContentToWhereHTML(){
	$("#CurrentContent").load("where.html");
}

function SetContentToButtonsHTML(){
	$("#CurrentContent").load("buttons.html");
}

});