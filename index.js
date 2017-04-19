$(document).ready(function()
{
	var row = 2;
	const IMAGE_SCALE = 0.6;
	const IMAGE_HEIGHT = 300 * IMAGE_SCALE;
	var rects = [];
	var canvas = new fabric.Canvas('c');
	canvas.setWidth(400 * IMAGE_SCALE + 438 * IMAGE_SCALE)
	var offset = document.documentElement.clientWidth / 2 - canvas.width / 2;
	$("#c").css("margin-left", offset);
	var sumHeight = 0;
	for (var i = 0; i < 9; i++)
	{
		var height = getAdjustedHeight(i, IMAGE_HEIGHT);
		sumHeight += height;
		var rect = new fabric.Rect({
			width:400 * IMAGE_SCALE, height: height,
			top:sumHeight - height, left:0,
			fill:"white", stroke:"black",strokeWidth:3,
			selectable:false
		});
		rects.push(rect);
		canvas.add(rect);
	}
	fabric.Image.fromURL('part3.png', function(oImg)
	{
		oImg.selectable = false;
		oImg.scale(IMAGE_SCALE);
		oImg.left = rects[0].left + rects[0].width;
		canvas.add(oImg);
	});
	
	
	$("#addrow").click(function()
	{
		addRow();
		if (row == 8)
			$(this).hide();
		$("#removerow").show();
	});
	$("#removerow").click(function()
	{
		removeRow();
		if (row == 2)
			$(this).hide();
		if (row < 8)
			$("#addrow").show();
	});

	function addRow()
	{
		row++;
		var height = getAdjustedHeight(row, IMAGE_HEIGHT);
		increaseCanvasHeight(height);
	}

	function removeRow()
	{
		var height = getAdjustedHeight(row, IMAGE_HEIGHT);
		increaseCanvasHeight(-height);
		row--;
	}

	function getAdjustedHeight(index, defaultHeight)
	{
		var height = defaultHeight;
		switch(index)
		{
			case 2:
			height = 226;
			break;
			case 3:
			height = 323 * IMAGE_SCALE;
			break;
			case 4:
			height = 384 * IMAGE_SCALE;
			break;
			case 5:
			height = 384 * IMAGE_SCALE;
			break;
			case 6:
			height = 457 * IMAGE_SCALE;
			break;
			case 7:
			height = 516 * IMAGE_SCALE;
			break;
			case 8:
			height = 615 * IMAGE_SCALE;
			break;
		}
		return height;
	}

	function increaseCanvasHeight(additionalHeight)
	{
		canvas.setHeight(canvas.height + additionalHeight);
	}
});

