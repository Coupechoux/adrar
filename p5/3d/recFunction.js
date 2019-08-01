class RecFunction {
	constructor(name) {
		this.blackBoxes = new Array(new BlackBox(0,0,0,200,name));
		fun_select.option(name);
		objects.push(this.blackBoxes[0]);
		this.pos = 0;
		this.direction = 1;
		this.attente = true;
	}
	
	moveForward() {
		console.log(this.pos + " " + (this.blackBoxes.length-1) +" "+this.attente);
		if(this.direction > 0) {
			if(this.pos == this.blackBoxes.length-1 && this.attente) {
				working[this.pos] = true;
				this.blackBoxes[this.pos].setWorkingDuration(9999999);
				this.direction = -1;
			} else {
				if(this.attente) {
					working[this.pos] = true;
					this.blackBoxes[this.pos].setWorkingDuration(9999999);
					this.pos++;
				} else {
					var box = this.blackBoxes[this.pos]
					fun_select.option(box.name);
					objects.push(box);
					working.push(false);
					fun_select.elt.selectedIndex = this.pos;
					changed_selection();
				}
				this.attente = !this.attente;
			}
			
		} else {
			if(this.blackBoxes.length > 0) {
				if(this.attente) {
					this.blackBoxes[this.pos].setWorkingDuration(0);
					this.blackBoxes[this.pos].setShowResult(true);
					changed_selection();
					this.pop();
					this.pos--;
					if(this.pos < 0) {
						this.pos = 0;
					}	
				} else {
					fun_select.elt.selectedIndex = this.pos;
					changed_selection();
				}
				this.attente = !this.attente;
			}
		}
	}
	
	pop() {
		var last = this.blackBoxes[this.blackBoxes.length-1];
		last.setWorkingDuration(0);
		this.blackBoxes.pop();
	}
	
	setFunction(fun) {
		this.fun = fun;
	}
	
	recCall(args) {
		// Create new Blackbox
		var last = this.blackBoxes[this.blackBoxes.length-1];
		console.log(last.args);
		name = last.name;
		var match = name.match(/\d+$/);
		var new_name = name+'_0';
		if(match) {
			var base_name = name.slice(0,name.length - match[0].length);
			var old_num = parseInt(match[0]);
			new_name = base_name + (old_num+1);
		}
		var newBlackBox = new BlackBox(last.x+300, 0, 0, 200, new_name)
		this.blackBoxes.push(newBlackBox);
		var i = 0;
		for(const arg of args) {
			newBlackBox.addArg(arg);
		}
		// newBlackBox.addArg(args);
		
		var ret = this.fun(args);
		newBlackBox.setResult(ret);
		newBlackBox.setShowResult(false);
		return ret;
	}
	
	run(args) {
		for(const arg of args) {
			this.blackBoxes[0].addArg(arg);
		}
		var result = this.fun(args);
		this.blackBoxes[0].setResult(result);
		this.blackBoxes[0].setShowResult(false);
		changed_selection();
	}
}