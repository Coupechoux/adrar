sommets = []
radius = 250;
nb_points = 3;
colors = [];
poids = 1/2.0;

x = 0;
y = 0;

function setup()
{
	createCanvas(2*radius+50,2*radius+50);
	var angle = 0;
	sommets = [];
	for(var i=0; i< nb_points; i++)
	{
		print(angle);
		append(sommets,createVector(radius*cos(angle*PI/180),radius*sin(angle*PI/180)));
		angle += 360.0/nb_points;
		
		append(colors,color(random(255),random(255),random(255)));
	}
	background(0);
	draw_attractors();
	compute_weight(nb_points,radius);
}

function move()
{
	r = int(random(sommets.length));
	s = sommets[r];
	x = (1-poids)*x+poids*s.x;
	y = (1-poids)*y+poids*s.y;
}
function draw()
{
	translate(width/2,height/2);
	rotate(-PI/2);
	strokeWeight(1);
	for(var i=0; i < 1000 ; i++)
	{
		move();
		stroke(colors[r]);
		point(x,y);
	}
}

function mousePressed()
{
	nb_points += 2;
	setup();
}

function draw_attractors() {
	translate(width/2,height/2);
	rotate(-PI/2);
	stroke(255);
	strokeWeight(3);
	for(var i=0;i<sommets.length;i++) {
		s = sommets[i];
		point(s.x,s.y);
	}
}

function compute_weight(n,radius)
{
	
	var y = radius*compute_max_y_polygon(n);
	var size = compute_edge_size(n,radius);
	
	poids = y/(size/2+y);
}

function compute_max_y_polygon(n)
{
	var my = 0;
	angle = -PI/n;
	for(var i=0; i<n; i++)
	{
		y = sin(angle);
		if(y>my)
		{
			my = y;
		}
		angle += 2*PI/n;
	}
	return my;
}

function compute_edge_size(n, radius)
{
	return 2 * radius * sin(PI/n);
}