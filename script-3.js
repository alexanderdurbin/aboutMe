/***************************
This is JavaScript (JS), the programming language that powers the web (and this is a comment, which you can delete).

To use this file, link it to your markup by placing a <script> in the <body> of your HTML file:

  <body>
    <script src="script.js"></script>

replacing "script.js" with the name of this JS file.

Learn more about JavaScript at

https://developer.mozilla.org/en-US/Learn/JavaScript
***************************/

document.getElementById("mySidebar").innerHTML = 
	"<span id = 'closeButt' class='closebtn' onclick='closeNav()'>☰</span>" +
     "<a href='index.html'>Home</a>" +
	 "<a href='about.html'>About Me</a>" +
     "<a href='projects.html'>Projects</a>" +
     "<a href='mailto:alexanderdurbin@gmail.com'>Contact</a>";

document.getElementById("menubutton").innerHTML = 
	"<span onclick='openNav()'>☰</span>";

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0px";
  document.getElementById("main").style.marginLeft = "0px";
  document.body.style.backgroundColor = "white";
}