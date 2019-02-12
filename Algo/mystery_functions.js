function pikachu(a,b) {
	var result = 0;
	for(var i=0; i<a; i++) {
		// result += b;
		result = result + b;
	}
	return result;
}

function plafond(a,b) {
	var result = 0;
	for(var i=0; i<a; i++) {
		result = b;
	}
	return result;
}

function tableur(a,b) {
	var result=0;
	for(var i=0; i<=a; i++) {
		result += b;
	}
	return result;
}

function lol(a,b) {
	var result=0;
	for(var i=0.0; i<a; i+=0.5) {
		result += b;
	}
	return result;
}

function wolverine(a,b) {
	var result=0;
	for(var i=0; i<a; i++) {
		for(var j=0; j<b; j++) {
			result++;
		}
	}
	return result;
}

function ventilateur(a,b) {
	var result = 0;
	for(var i=a; i<a; i++) {
		result += b;
	}
	return result;
}

function bob(a,b,c) {
	var result=0;
	for(var i=0; i<a; i++) {
		for(var j=0; j<b; j++) {
			for(var k=0; k<c; k++) {
				result += 1;
			}
		}
	}
	return result;
}

function calcul(a) {
	var result=1;
	for(var i=2; i<=a; i++) {
		result *= i;
	}
	return result;
}

function python(a) {
	var result;
	if(a<2) {
		result = 1;
	} else {
		result = a*python(a-1);
	}
	return result;
}

function erogahtyp(a) {
	var result;
	if(a%2 == 0) {
		result = a/2;
	}
	else {
		result = 3*a+1;
	}
	return result;
}

function pythagore(a,b) {
	var result = a;
	for(var i=0; i<b; i++) {
		result=erogahtyp(result);
	}
	return result;
}

function aceeilnrtt(a) {
	var result = 0;
	var v = a;
	while(v != 1) {
		v = erogahtyp(v);
		result++;
	}
	return result;
}

function micmath(a,b) {
	var result=0;
	while(a>=b) {
		a/=b;
		result++;
	}
	return result;
}

function stylo(a,b) {
	var result = 1;
	for(var i=0; i<b; i++) {
		result *= a;
	}
	return result;
}

function crayon(a,b) {
	var result = 0;
	for(var i=0; i<b; i++) {
		result *= a;
	}
	return result;
}

function minecraft(a) {
	var result = 1;
	for(var i=0; i<a; i++) {
		result *= a;
	}
	return result;
}

function nenio(a) {
	var result = Math.random(); // Google ?
	result = Math.floor(result);
	return result;
}

function carapuce_samourai(a) {
	var result = 1;
	for(var i=0; i<a; i++) {
		result = 1-result;
	}
	return result;
}

function bouteille_d_eau(a) {
	var result;
	if(a<0) {
		result=0;
	}
	else {
		if(a>0) {
			result = -1;
		}
		else {
			result = 1;
		}
	}
	return result;
}

function spiderman(a) {
	var result = 1;
	for(var i=0; i<a; i++) {
		result = bouteille_d_eau(result);
	}
	return result;
}