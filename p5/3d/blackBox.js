class BlackBox {
	constructor(x,y,z,size,name) {
		this.x = x;
		this.y = y;
		this.z = z;
		this.size = size;
		this.name = name;
		let states = ["waiting","working","delivering","finished"];
		this.etat = states["0"];
		
		this.resetArgs();
		this.internalTime = 0;
		
		this.result = null;
		this.workingDuration = 100;
		this.f = null;
		
		this.periodArgEating = this.size/2;
		
		this.showResult = true;
	}
	
	setShowResult(b) {
		this.showResult = b;
	}
	
	setFunction(f) {
		this.f = f;
	}
	
	computeResult() {
		if(this.f != null) {
			this.result = this.f(this.args);
		}
	}
	
	setResult(r) {
		this.result = r;
	}
	
	deleteResult() {
		this.result = null;
	}
	
	setWorkingDuration(n) {
		this.workingDuration = n;
	}
	
	moveTime() {
		if(this.etat == "waiting") {
			this.internalTime += 1;
			if(this.internalTime >= this.args.length*this.periodArgEating)
			{
				this.resetTime();
				this.etat = "working";
			}
		}
		if(this.etat == "working") {
			this.internalTime += 1;
			if(this.internalTime >= this.workingDuration) {
				this.resetTime();
				if(this.result != null) {
					this.etat = "delivering";
				} else {
					this.etat = "finished";
				}
			}
		}
		if(this.etat == "delivering") {
			this.internalTime += 1;
			if(this.internalTime >= this.periodArgEating){
				this.resetTime();
				this.etat = "finished";
			}
		}
	}
	
	resetTime() {
		this.internalTime = 0;
		this.etat = "waiting";
	}
	
	resetArgs() {
		this.args = [];
		this.resetTime();
	}
	
	addArg(s) {
		this.args.push(s);
	}
	
	deleteArg() {
		this.args.pop();
	}
	
	draw() {
			push();
			
			// The box
			normalMaterial();
			ambientMaterial(50,50,50);
			translate(this.x,this.y-this.size/2,this.z-this.size/2);
			box(this.size,this.size,this.size);
			
			// Light on the box
			push();
			translate(0,-this.size/2-5,0);
			let bubbleColor;
			switch(this.etat) {
				case "waiting":
					bubbleColor = color(255);
					break;
				case "working":
					bubbleColor = color(255,0,0);
					break;
				case "delivering":
					bubbleColor = color(0,0,255);
					break;
				case "finished":
					bubbleColor = color(0,255,0);
					break;
				default:
					bubbleColor = color(0,0,0);
			}
			ambientMaterial(bubbleColor);
			ellipsoid(10,10,10);
			pop();
			
			// Name on the box
			push();
			translate(0,-this.size/2+10,this.size/2+1);
			fill(255);
			text(this.name,0,0);
			pop();
			
			// Args
			if(this.etat == "waiting") {
				for(let i=0; i<this.args.length; i++) {
					push();
					
					// Paper arg
					translate(0,0,+this.size);
					rotateX(radians(90));
					translate(0,0,this.size*(0.4-0.9*(i+1)/(this.args.length+1)));

					let cpt = Math.trunc(this.internalTime/this.periodArgEating);
					if(cpt == i) {
						let t = this.internalTime%this.periodArgEating;
						translate(0,-(this.size/this.periodArgEating)*t,0);
					}
					if(cpt > i) {
						translate(0,-this.size,0);
					}
					fill(255,150,150,100);
					box(this.size/2,this.size/2, 2);
					fill(0,0,0,255);
					
					// Text of the arg
					push();
					translate(0,0,3);
					textSize(18);
					text(this.args[i],-this.size/4,-this.size/4,this.size/2,this.size/2);
					pop();
					
					pop();
				}
			}
			else if(this.etat == "working") {
				
			}
			else if(this.etat == "delivering") {
				push();
					
				// Paper result
				translate(0,0,+this.size);
				rotateX(radians(90));

				translate(0,-this.size+this.size/this.periodArgEating*this.internalTime,0);
				fill(100,100,255,100);
				box(this.size/2,this.size/2, 2);
				fill(0,0,0,255);
				
				// Text of the result
				push();
				translate(0,0,3);
				textSize(18);
				text(this.result,-this.size/4,-this.size/4,this.size/2,this.size/2);
				pop();
				
				pop();
			}
			else if(this.etat == "finished") {
				if(this.result != null) {
					push();
					// Paper arg
					translate(0,0,+this.size);
					rotateX(radians(90));

					fill(100,100,255,100);
					box(this.size/2,this.size/2, 2);
					fill(0,0,0,255);
					
					// Text of the arg
					push();
					translate(0,0,3);
					textSize(18);
					text(this.result,-this.size/4,-this.size/4,this.size/2,this.size/2);
					pop();
					
					pop();
				}
			}
			
			pop();
			
			return this.etat;
	}
}