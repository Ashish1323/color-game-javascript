var colors = [];
colors=generatecolor(6);

var squares = document.querySelectorAll(".square");
var ele=pickcolor();
var print=document.getElementById("madarchod");
var i=0;
print.textContent=ele;
for(i=0;i<squares.length;i++){
	squares[i].style.background = colors[i];

	squares[i].addEventListener("click",function(){
		var clickcolor = this.style.background;
		
		if(clickcolor==ele){
			for(i=0;i<squares.length;i++){

	        squares[i].style.background = ele;
	}

		}
		else{
			this.style.backgroundColor="#232323";
		}
	})
}

function pickcolor(){
	var x=Math.floor(Math.random()*6);
	return colors[x];
}

function generatecolor(num){
	var arr=[];
	for(var j=0;j<num;j++){
	arr.push(coolor());
}
	return arr;
}

function coolor(){
	var red=Math.floor(Math.random()*256);
	var green=Math.floor(Math.random()*256);
	var blue=Math.floor(Math.random()*256);
	return  "rgb("  + red + ", " + green + ", " + blue + ")";
}