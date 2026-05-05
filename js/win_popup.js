// this hides the window
// document.getElementById("window").className = "inviswindow";

// this shows the window
// document.getElementById("window").className = "window";

function openWindow(title,desc,url) {
	document.getElementById("window").className = "window";
    document.getElementById("title-bar-text").innerHTML = title;  
	document.getElementById("description").innerHTML = desc;  
	document.getElementById("link").setAttribute("onclick", "window.open('"+url+"');");
}

function closeWindow(){
	document.getElementById("window").className = "inviswindow";
}