$(document).ready(function()
{
	var canvas = new fabric.Canvas('c');
	fabric.Image.fromURL('part3.png', function(oImg)
	{
		oImg.selectable = false;
		oImg.scale(0.75);
		canvas.add(oImg);
	});
});