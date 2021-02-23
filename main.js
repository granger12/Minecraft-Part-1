var canvas = new fabric.Canvas('myCanvas')

block_image_width= 30;
block_image_height= 30;

player_x= 10
player_y= 10;

var player_object= "";

function player_update(){
    fabric.Image.fromURL("player.png", function img(){
player_object=Img;

player_object.scaleToWidth(150);
player_object.scaleToWHeight(140);
player_object.set({
    top:player_y,
    left:player_x
});

canvas.add(player_object);

    })

}

function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(image){
        block_image_object = Img;

        block_image_object.scaleToWidth(block_image_width);
        block_object.scaleToWHeight(block_image_height);
block_object.set({
    top:player_y,
    left:player_x
});
canvas.add(block_image_object);
    });
}