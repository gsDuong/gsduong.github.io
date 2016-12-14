function replace(){
	x = document.getElementById("personal-info");
	x.style.color = "red";
}

function showAll(){
	x = document.getElementsByTagName("p");
	var i = 0;
	while(i < x.length){
		x[i].style.color = "red";
		i++;
	}
}