
function fullLine_answer(w,c)
{
	var s = "";
	for(var i=0;i<w;i++)
	{
		s += c;
	}
	s += '<br/>';
	return s;
}

function fullRectangle_answer(w,h,c)
{
	var s="";
	for(var i=0;i<h;i++)
	{
		s += fullLine_answer(w,c);
	}
	return s;
}

function emptyLine_answer(w,c1,c2)
{
	var s = c1;
	for(var i=0; i<w-2;i++)
	{
		s += c2;
	}
	if(w > 1)
	{
		s += c1;
	}
	s += "<br/>";
	return s;
}

function emptyRectangle_answer(w,h,c1,c2)
{
	var s = fullLine_answer(w,c1);
	for(var i=0 ; i<h-2 ; i++)
	{
		s += emptyLine_answer(w,c1,c2);
	}
	if(h>1)
	{
		s += fullLine_answer(w,c1);
	}
	return s;
}

function fullTriangle1_answer(h,c)
{
	var s = "";
	for(var i=1 ; i<=h ; i++)
	{
		s += fullLine_answer(i,c);
	}
	return s;
}

function fullTriangle2_answer(h,c1,c2)
{
	var s = "";
	for(var i=1 ; i<=h ; i++)
	{
		for(var j=0;j<h-i;j++)
		{
			s+=c2;
		}
		s += fullLine_answer(i,c1);
	}
	return s;
}

function fullTriangle3_answer(h,c1,c2)
{
	var s = "";
	var nbC2 = h-1;
	var nbC1 = 1;
	for(var i=1 ; i<=h ; i++)
	{
		for(var j=0;j<nbC2;j++)
		{
			s+=c2;
		}
		s += fullLine_answer(nbC1,c1);
		
		nbC2--;
		nbC1 += 2;
	}
	return s;
}

function emptyTriangle1_answer(h,c1,c2)
{
	var s = "";
	for(var i=1 ; i<=h-1 ; i++)
	{
		s += emptyLine_answer(i,c1,c2);
	}
	s += fullLine_answer(h,c1);
	return s;
}

function emptyTriangle2_answer(h,c1,c2)
{
	var s = "";
	for(var i=1 ; i<=h-1 ; i++)
	{
		for(var j=0;j<h-i;j++)
		{
			s+=c2;
		}
		s += emptyLine_answer(i,c1,c2);
	}
	s += fullLine_answer(h,c1);
	return s;
}

function emptyTriangle3_answer(h,c1,c2)
{
	var s = "";
	var nbC2 = h-1;
	var nbC1 = 1;
	for(var i=1 ; i<=h-1 ; i++)
	{
		for(var j=0;j<nbC2;j++)
		{
			s+=c2;
		}
		s += emptyLine_answer(nbC1,c1,c2);
		
		nbC2--;
		nbC1 += 2;
	}
	s += fullLine_answer(nbC1,c1);
	return s;
}

function pacman_answer(h,c1) {
	var s = "";
	var nbC1 = h;
	var nbC2 = 0;
	if(nbC1%2 == 0) {
		nbC1--;
	}
	
	for(var i=0; i<Math.floor(h/2); i++) {
		for(var j=0; j<nbC2; j++) {
			s += c2;
		}
		s += fullLine_answer(nbC1,c1);
		nbC1 -= 2;
		nbC2++;
	}
	
	nbC1 = 1;
	if(h%2==0) {
		nbC2--;
	}
	for(var i=0; i<h/2; i++) {
		for(var j=0; j<nbC2; j++) {
			s += c2;
		}
		s += fullLine_answer(nbC1,c1);
		nbC1 += 2;
		nbC2--;
	}
	
	return s;
}

function hourglass_answer(h,c1,c2) {
	var s = "";
	var nbC1 = h;
	var nbC2 = 0;
	if(nbC1%2 == 0) {
		nbC1--;
	}
	
	for(var i=0; i<Math.floor(h/2); i++) {
		for(var j=0; j<nbC2; j++) {
			s += c2;
		}
		s += fullLine_answer(nbC1,c1);
		nbC1 -= 2;
		nbC2++;
	}
	
	nbC1 = 1;
	if(h%2==0) {
		nbC2--;
	}
	for(var i=0; i<h/2; i++) {
		for(var j=0; j<nbC2; j++) {
			s += c2;
		}
		s += fullLine_answer(nbC1,c1);
		nbC1 += 2;
		nbC2--;
	}
	
	return s;
}