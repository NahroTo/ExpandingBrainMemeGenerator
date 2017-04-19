$(document).ready(function()
{
	const IMAGE_SCALE = 0.8;
	const IMAGE_HEIGHT = 301 * IMAGE_SCALE;
	var rects = [];
	var canvas = new fabric.Canvas('c');
	var offset = document.documentElement.clientWidth / 2 - canvas.width / 2;
	$("#c").css("margin-left", offset);
	fabric.Image.fromURL('part3.png', function(oImg)
	{
		oImg.selectable = false;
		oImg.scale(IMAGE_SCALE);
		oImg.left = canvas.width - oImg.width * oImg.scaleX;
		canvas.add(oImg);
	});
	for (var i = 0; i < 3; i++)
	{
		var height = IMAGE_HEIGHT;
		if (i == 2)
			height = 224;
		var rect = new fabric.Rect({
			width:400, height: height,
			top:IMAGE_HEIGHT * i,
			fill:"white", stroke:"black",strokeWidth:3,
			selectable:false
		});
		rects.push(rect);
		canvas.add(rect);
	}
	
});