function Viz(){
	this.numOrbits = 6;
	this.start = 1975;
	this.end = 2020;
	this.yrdiff = this.end - this.start;
	this.orbitDist = 40;
	this.innerF  = 2;
	this.orbitCols = ['#046697','#03517f','#18384f','#13212d','#030507','#1c1a51'];

}

Viz.prototype.show = function(){
	translate(width*0.35,height*0.5);
	for(var i=0; i<this.numOrbits;i++){
		fill(this.orbitCols[i])
		noStroke();
		//fill('red');
		//ellipse(0,0,this.orbitDist*i,this.orbitDist*i);
		var rad = 200+2* this.orbitDist * (this.orbitCols.length - i - 1);
		ellipse(0,0,rad,rad);
	}
	fill(255);
	rotate(-PI/2);
	for(var yr = 0; yr<this.yrdiff; yr++){
		rotate(2*PI/this.yrdiff);
		push();
		translate(this.orbitDist*this.innerF,0);
		strokeWeight(0.2);
		stroke(255);
		textSize(10);
		textFont('Montserrat');
		text(this.start+yr,this.orbitDist*this.innerF+10,5)
		strokeWeight(2);
		line(0,0,this.orbitDist*this.innerF,0);
		translate(3*textWidth('1990  '),0)
		line(0,0,300,0);
		pop();
	}
}
let viz;
function setup(){
	var canvas = createCanvas(innerWidth,innerHeight);
	canvas.parent = document.getElementById('canvas');
	viz = new Viz();
	textFont('Graphik');
  }
function draw(){
	background('#13143e');
	viz.show();
}
