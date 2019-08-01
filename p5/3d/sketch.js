let t=0;
let x=-100;
let y=-500;
let objects = [];
let btn_new_fun;
let btn_new_arg;
let btn_delete_arg;
let fun_select;
let div_args;
let btn_compute;
let btn_restart;
let btn_set_result;
let btn_auto_result;
let btn_delete_result;
let div_result;
let working = [];
let current_selected = 0;
let inconsolata;
let rec_object;

function preload() {
  //inconsolata = loadFont('./assets/Inconsolata-Regular.ttf');
}

function setup(){
	createCanvas(700,700,WEBGL);
	
	btn_new_fun = createButton("Nouvelle fonction");
	btn_new_fun.mousePressed(new_function);
	btn_new_fun.position(750,20);
	
	btn_new_fun_rec = createButton("Nouvelle fonction récursive");
	btn_new_fun_rec.mousePressed(new_function_rec);
	btn_new_fun_rec.position(950,20);
	
	btn_popRecFun = createButton("Avancer appels récursifs");
	btn_popRecFun.position(950,50);
	btn_popRecFun.mousePressed(moveRecObject);
	
	createDiv("Fonction : ").position(750,50);
	fun_select = createSelect();
	fun_select.position(820,50);
	fun_select.changed(changed_selection);
	
	btn_set_result = createButton("Choisir le résultat");
	btn_set_result.position(750,100);
	btn_set_result.mousePressed(set_result);
	
	btn_auto_result = createButton("Calculer le résultat");
	btn_auto_result.position(750,130);
	btn_auto_result.mousePressed(auto_set_result);
	
	btn_delete_result = createButton("Effacer le résultat");
	btn_delete_result.position(750,160);
	btn_delete_result.mousePressed(delete_result);
	
	createDiv("Résultat : ").position(885,100);
	
	div_result = createDiv();
	div_result.position(950,100);
	div_result.elt.style.backgroundColor = "rgb(150,150,255)";
	
	btn_new_arg = createButton("Nouvel argument");
	btn_new_arg.position(750,210);
	btn_new_arg.mousePressed(new_arg);
	
	createDiv("Argument(s) : ").position(885,210);
	
	div_args = createDiv();
	div_args.position(980,210);
	div_args.elt.style.backgroundColor = "rgb(255,150,150)";
	
	btn_delete_arg = createButton("Effacer le dernier argument");
	btn_delete_arg.position(750,240);
	btn_delete_arg.mousePressed(delete_arg);
	
	btn_compute = createButton("Go !");
	btn_compute.position(750,290);
	btn_compute.mousePressed(start_function);
	
	btn_restart = createButton("Redémarrer la fonction");
	btn_restart.position(750,320);
	btn_restart.mousePressed(restart_function);
	
	//textFont(inconsolata);
	textSize(36);
	textAlign(CENTER, CENTER);
	fill('#ED225D');
}

function draw(){
	background(0);
	
	camera(x,y,500,0,0,0,0,1,0);
	ambientLight(200,200,200);
	pointLight(255,255,255,0,-500,200);
	// Dessin du sol
	push();
	rotateX(radians(90));
	ambientMaterial(150);
	noStroke();
	plane(30000,30000);
	pop();
	
	push();
	if(fun_select.elt.length > 0) {
		let selected = fun_select.elt.selectedIndex
		if(current_selected != selected) {
			if(t > 0) {
				current_selected = selected;
				translate(-300*selected,0,0);
			} else {
				let dx = sin(radians((t+50)/100*180));
				dx *= (selected - current_selected)/2;
				dx += current_selected+(selected - current_selected)/2;
				dx *= -300;
				translate(dx,0,0);
			}
		} else {
			translate(-300*selected,0,0);
		}
	}
	translate(-sin(t/100)*10-10,0,0);
	for(let i=0;i<objects.length;i++) {
		objects[i].draw();
		if(working[i]) {
			objects[i].moveTime();
		}
	}
	pop();
	t++;
}

function mousePressed() {
	
}

function moveRecObject() {
	if(rec_object) {
		rec_object.moveForward();
	}
}

function mouseDragged() {
	x -= mouseX-pmouseX;
	y -= mouseY-pmouseY;
}

function new_function(name){
	if(typeof name == "undefined") {
		name = prompt("Quelle est le nom de la fonction ?","");
	}
	fun_select.option(name);
	let i = objects.length;
	objects.push(new BlackBox(300*i,0,0,200,name));
	working.push(false);
}

function new_function_rec(name){
	if(typeof name == "undefined") {
		name = prompt("Quelle est le nom de la fonction ?","");
	}
	rec_object = new RecFunction(name);
	rec_object.setFunction(fact(rec_object));
	var args = [3];
	rec_object.run(args);
}

function update_div_args(sel) {
	if(typeof sel == "undefined") {
		sel = current_selected;
	}
	if(sel >= 0) {
		let args = objects[sel].args;
		if(args.length > 0) {
			div_args.elt.style.padding = "5px";
			div_args.elt.innerHTML=args[0];
			for(let i=1; i<args.length; i++) {
				div_args.elt.innerHTML += "<br>"+args[i];
			}
		}
		else {
			div_args.elt.style.padding = "0px";
			div_args.elt.innerHTML="";
		}
	}
}

function changed_selection() {
	let selected = fun_select.elt.selectedIndex;
	if(selected != current_selected) {
		t = -100;
	}
	update_div_args(selected);
	update_div_result(selected);
}

function update_div_result(sel) {
	if(typeof sel == "undefined") {
		sel = current_selected;
	}
	if(sel >= 0) {
		let r = objects[sel].result;
		if(!objects[sel].showResult) {
			r = null;
		}
		if(r == null) {
			div_result.elt.style.padding = "0px";
			div_result.elt.innerHTML = "";
		} else {
			div_result.elt.style.padding = "5px";
			div_result.elt.innerHTML = r;
		}
	}
}

function new_arg(arg) {
	if(typeof arg == "undefined") {
		arg = prompt("Quel est le nouvel argument ?","");
	}
	objects[current_selected].addArg(arg);
	args = objects[current_selected].args;
	update_div_args();
}

function set_result(res) {
	if(typeof res == "undefined") {
		res = prompt("Quel est le résultat de la fonction ?","");
	}
	if(current_selected >= 0) {
		objects[current_selected].setResult(res);
		update_div_result();
	}
}

function delete_result() {
	if(current_selected >= 0) {
		objects[current_selected].deleteResult();
		update_div_result();
	}
}

function start_function() {
	if(current_selected >= 0) {
		working[current_selected] = true;
	}
}

function restart_function() {
	if(current_selected >= 0) {
		working[current_selected] = false;
		objects[current_selected].resetTime();
	}
}

function auto_set_result() {
	if(current_selected >= 0) {
		objects[current_selected].setFunction(fullLine);
		objects[current_selected].computeResult();
		update_div_result();
	}
}

function delete_arg() {
	if(current_selected >= 0) {
		objects[current_selected].deleteArg();
	}
	update_div_args();
}

function fullLine(args) {
	let n = args[0];
	let c = args[1];
	n = parseInt(n,10);
	let r = "";
	for(let i=0; i<n; i++) {
		r += c;
	}
	return r;
}

function sumOfList(bb) {
	return function f(l) {
		if(l[0].length == 0) {
			return 0;
		}
		return l[0][0]+bb.recCall([l[0].slice(1)]);
	};
}

function minOfTab(bb) {
	return function f(l) {
		if(l[0].length == 1) {
			return l[0][1];
		}
		var min_rec = bb.recCall([l[0].slice(1)]);
		if(l[0][0] < min_rec) {
			return l[0][0];
		}
		return min_rec;
	};
}

function fact(bb) {
	return function f(l) {
		if(l[0] < 2) {
			return 1;
		}
		var rec = bb.recCall([l[0]-1]);
		return l[0]*rec;
	};
}

function fibo(bb) {
	return function f(l) {
		if(l[0] < 2) {
			return [1,1];
		} else {
			var ret = bb.recCall([l[0]-1]);
			return [ret[0]+ret[1],ret[0]];
		}
	};
}