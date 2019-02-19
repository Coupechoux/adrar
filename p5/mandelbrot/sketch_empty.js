xmin = -1.5;
xmax = 0.5;
ymid=0;
ymin=0;
ymax=0;
maxiter = 100;

function setup(){
	createCanvas(600,400);
	setYRange();
	pixelDensity(10);
	noLoop();
	colors = Array();
	for(let i = 0 ; i < 256 ; i++)
	{
		append(colors,color(i,i/2,0));
	}
}

function draw()
{
	background(255);
	for(let j = 0 ; j < height ; ++j)
	{
		y = map(j,0,height-1,ymin,ymax);
		for(let i = 0 ; i < width ; i++)
		{
			x = map(i,0,width-1,xmin,xmax);
			
			z = createVector(0,0);
			c = createVector(x,y);
			n = 0
			while(n < maxiter && z.mag() < 9)
			{
				z = iter(z,c);
				n+=1;
			}
			if(n==maxiter)
			{
				stroke(0);
			}
			else
			{
				idx = floor(map(sqrt(sqrt(n)),0,sqrt(sqrt(maxiter-1)),0,255));
				stroke(colors[idx]);
			}
			point(i,j);
		}
	}
}

function setYRange()
{
	ratio = (xmax-xmin)/float(width);
	ymin = ymid-ratio*height/2;
	ymax = ymid+ratio*height/2;
}

function zoom(n,x,y)
{
	x = map(x,0,width-1,xmin,xmax);
	y = map(y,0,height,ymin,ymax);
	dx = xmax-xmin;
	xmin = x - dx/n/2;
	xmax = x + dx/n/2;
	ymid = y;
	setYRange();
}
	

function mousePressed()
{
	zoom(2,mouseX,mouseY);
	draw();
}

function keyPressed()
{
	if(key == '+')
	{
		maxiter *= 2;
		draw();
	}
	if(key == '-')
	{
		maxiter /= 2;
		draw();
	}
}

// Retourne z*z+c
function iter(z,c) {
	let z2 = createVector(z.x*z.x-z.y*z.y + c.x, 2*z.x*z.y + c.y);
	return z2;
}