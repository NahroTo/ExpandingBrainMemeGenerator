$(document).ready(function()
{
	var row = 2;
	const IMAGE_SCALE = 0.7;
	const IMAGE_HEIGHT = 300 * IMAGE_SCALE;
	const INIT_CANVAS_HEIGHT = IMAGE_HEIGHT + 305 * IMAGE_SCALE + 275 * IMAGE_SCALE + 3;
	var rects = [];
	var canvas = new fabric.Canvas('c');
	canvas.setWidth(400 * IMAGE_SCALE + 438 * IMAGE_SCALE);
	canvas.setHeight(INIT_CANVAS_HEIGHT);
	var offset = document.documentElement.clientWidth / 2 - canvas.width / 2;
	$("#cis").css("margin-left", offset);
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
	var text = new fabric.IText("Edit this text...", { left:30, top:30, fontFamily:"Arial", fontSize:32});
	canvas.add(text);
	
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
	$("#addtext").click(function()
	{
		var text = new fabric.IText("Edit this text...", { left:30, top:30, fontFamily:"Arial", fontSize:32});
		canvas.add(text);
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
			case 1:
			height = 305 * IMAGE_SCALE;
			break;
			case 2:
			height = 275 * IMAGE_SCALE;
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

