nbStars = 500;
stars = [];

function setup()
{
	createCanvas(windowWidth,windowHeight);
	for(var i=0;i<nbStars;i++)
	{
		stars.push(new Star());
	}
}

function draw()
{
	background(0);
	translate(width/2,height/2);
	for(var i=0;i<stars.length;i++)
	{
		stars[i].move();
		stars[i].draw();
	}
}

class Star
{
	constructor()
	{
		this.angle = random(2*PI);
		this.r = random(width/2);
	}
	move()
	{
		this.r *= 1.01;
		if(this.r>width)
		{
			this.r = random(width/20);
		}
	}
	draw()
	{
		var x1 = this.r * cos(this.angle);
		var y1 = this.r * sin(this.angle);
		var x2 = 1.05*this.r * cos(this.angle);
		var y2 = 1.05*this.r * sin(this.angle);
		stroke(255);
		line(x1,y1,x2,y2);
	}
}