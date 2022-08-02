canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
MarsIMGNASA_Array=["MarsIMGNASA1.jpg","MarsIMGNASA2.jpg","MarsIMGNASA3.jpg","MarsIMGNASA4.jpg"];
random_number=Math.floor(Math.random()*4);
console.log(random_number);
rover_width=100;
rover_height=90;
rover_x=10;
rover_y=10;
background_image=MarsIMGNASA_Array[random_number];
console.log(background_image);
rover_image= "rover.png";
function add() {
    background_IMG=new Image;
    background_IMG.onload=uploadbackground();
    background_IMG.src=background_image;

    rover_IMG=new Image;
    rover_IMG.onload=uplaodrover();
    rover_IMG.src=rover_image;
}
function uploadbackground() {
    ctx.drawImage(background_IMG, 0,0,canvas.width,canvas.height);
}
function uplaodrover() {
    ctx.drawImage(rover_IMG,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=="38") {
        up();
        console.log("up");
    }
    if(keyPressed=="40") {
        down();
        console.log("down");
    }
    if(keyPressed=="37") {
        left();
        console.log("left");
    }
    if(keyPressed=="39") {
        right();
        console.log("right");
    }
}
function up() {
    if(rover_y >=0) {
        rover_y=rover_y-10;
        console.log("When up arrow is pressed, x =" +rover_x+ "| y= " +rover_y);
        uploadbackground();
        uplaodrover();
    }
}
function down() {
    if(rover_y <=500) {
        rover_y=rover_y+10;
        console.log("When down arrow is pressed, x =" +rover_x+ "| y= " + rover_y);
        uploadbackground();
        uplaodrover();
    }
}
function left() {
    if(rover_x >=0) {
        rover_x=rover_x-10;
        console.log("When left arrow is pressed' x =" +rover_x+ "| y= " +rover_y);
        uploadbackground();
        uplaodrover();
    }
}
function right() {
    if(rover_x <=700) {
        rover_x=rover_x+10;
        console.log("When right arrow is pressed, x =" +rover_x+ "| y= " + rover_y);
        uploadbackground();
        uplaodrover();
    }
}