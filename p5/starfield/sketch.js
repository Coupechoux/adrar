nbStars = 1000;
rspeed = 1.02;
persistance = rspeed*rspeed;
stars = [];

function setup()
{
	createCanvas(windowWidth,windowHeight);
	for(var i=0;i<nbStars;i++)
	{
		stars.push(new Star());
	}
	//frameRate(1);
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
		this.red = int(random(255));
		this.green = int(random(255));
		this.blue = int(random(255));
	}
	move()
	{
		this.r *= rspeed;
		if(this.r>width/2 && this.r>height/2)
		{
			this.r = 0.01+random(100);
		}
	}
	draw()
	{
		var x1 = this.r * cos(this.angle);
		var y1 = this.r * sin(this.angle);
		var x2 = this.r/persistance * cos(this.angle);
		var y2 = this.r/persistance * sin(this.angle);
		var c = color(this.red,this.green,this.blue, map(this.r,0,width/2,0,255));
		stroke(c);
		strokeWeight(3);
		line(x1,y1,x2,y2);
	}
}