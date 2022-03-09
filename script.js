canvas=new fabric.Canvas('myCanvas');
block_y=1;
block_x=1;

blockImageWidth = 350;
blockImageHeight = 430;

blockImageObject= "";

function new_image(getImage){
	fabric.Image.fromURL(getImage, function (Img){
        blockImageObject=Img;
        blockImageObject.scaleToWidth(blockImageWidth);
        blockImageObject.scaleToHeight(blockImageHeight);
        blockImageObject.set({
            top:block_y,
            left:block_x,
        })
        canvas.add(blockImageObject);
    })
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if(keyPressed == '70'){
		new_image('Fuecoco.png');
		console.log("f");
		block_x=1;
	}
	if(keyPressed == '81'){
		new_image('Quaxly.png');
		console.log("q");
		block_x=330;
	}
	if(keyPressed == '83'){
		new_image('Sprigatito.png');
		console.log("s");
		block_x=660;
	}
}