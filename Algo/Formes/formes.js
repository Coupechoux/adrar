function fullLine(w,c)
{
	var s = "";
	for(var i=0;i<w;i++)
	{
		s += c;
	}
	s += '<br/>';
	return s;
}

function fullRectangle(w,h,c)
{
	var s="";
	for(var i=0;i<h;i++)
	{
		s += fullLine(w,c);
	}
	return s;
}

function emptyLine(w,c1,c2)
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

function emptyRectangle(w,h,c1,c2)
{
	var s = fullLine(w,c1);
	for(var i=0 ; i<h-2 ; i++)
	{
		s += emptyLine(w,c1,c2);
	}
	if(h>1)
	{
		s += fullLine(w,c1);
	}
	return s;
}

function fullTriangle1(h,c)
{
	var s = "";
	for(var i=1 ; i<=h ; i++)
	{
		s += fullLine(i,c);
	}
	return s;
}

function fullTriangle2(h,c1,c2)
{
	var s = "";
	for(var i=1 ; i<=h ; i++)
	{
		for(var j=0;j<h-i;j++)
		{
			s+=c2;
		}
		s += fullLine(i,c1);
	}
	return s;
}

function fullTriangle3(h,c1,c2)
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
		s += fullLine(nbC1,c1);
		
		nbC2--;
		nbC1 += 2;
	}
	return s;
}

function emptyTriangle1(h,c1,c2)
{
	var s = "";
	for(var i=1 ; i<=h-1 ; i++)
	{
		s += emptyLine(i,c1,c2);
	}
	s += fullLine(h,c1);
	return s;
}

function emptyTriangle2(h,c1,c2)
{
	var s = "";
	for(var i=1 ; i<=h-1 ; i++)
	{
		for(var j=0;j<h-i;j++)
		{
			s+=c2;
		}
		s += emptyLine(i,c1,c2);
	}
	s += fullLine(h,c1);
	return s;
}

function emptyTriangle3(h,c1,c2)
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
		s += emptyLine(nbC1,c1,c2);
		
		nbC2--;
		nbC1 += 2;
	}
	s += fullLine(nbC1,c1);
	return s;
}