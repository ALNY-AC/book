// <ul id="ListJava" class="list-ul list-java" >
// <li>
// <a href="list/Java/2017211.html"> 2017年2月11日 第一篇博客 </a>
// </li>
// </ul>



$(document).ready(function() {

	printJava();



})

function printJava() {
	javasrc = "list/Java/";

	var javali = [

		{
			file: "2017211.html",
			time: "2017年2月11日",
			title: "第一篇"
		},

	]
	var listJava = $("#ListJava");
	for (var i = 0; i < javali.length; i++) {
		listJava.append("<li><a href='" + javasrc + javali[i].file + "'>" + javali[i].time + " " + javali[i].title + "</a></li>");
	}
}