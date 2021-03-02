var canvas = new fabric.Canvas('myCanvas')

block_image_width= 30;
block_image_height= 30;

player_x= 10;
player_y= 10;

var player_object= "";

function player_update(){
    fabric.Image.fromURL("player.png", function img(){
player_object=Img;

player_object.scaleToWidth(150);
player_object.scaleToHeight(140);
player_object.set({
    top:player_y,
    left:player_x
});

canvas.add(player_object);

    });

}

function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(image){
        block_image_object = Img;

        block_image_object.scaleToWidth(block_image_width);
        block_object.scaleToHeight(block_image_height);
block_object.set({
    top:player_y,
    left:player_x
});
canvas.add(block_image_object);
    });
}

function up(){
    if(player_y >=0)
    {
        player_y=player_y-block_image_height;
        console.log("block image height = " + block_image_height );
        console.log("When Up arrow key is pressed, X = " + player_x + " , Y ="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}


function down(){
    if(player_y <=500)
    {
        player_y=player_y + block_image_height;
        console.log("block image height = " + block_image_height );
        console.log("When Down arrow key is pressed, X = " + player_x + " , Y ="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left(){
    if(player_x >=0)
    {
        player_x=player_x-block_image_width;
        console.log("block image width = " + block_image_width);
        console.log("When Left arrow key is pressed, X = " + player_x + " , Y ="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}


function right(){
    if(player_y <=850)
    {
        player_x=player_x + block_image_width;
        console.log("block image width = " + block_image_width );
        console.log("When Right arrow key is pressed, X = " + player_x + " , Y ="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}