/**


function setup() {
        canvas = createCanvas($(window).height(), $(window). width());
        //size(1280, 900);
        canvas.position(0, 0);
        canvas.id("mycanvas");
}

function draw() {
     if (mousePressed) {
        background (250);
            }
            
        stroke(255, 255, 255);
        fill(250,255,167);
        ellipse(mouseX, mouseY, 100, 140);
}

 * 
 */

function setup(){
    size(1280, 900);
    background(250);
}

function draw(){
    if (mousePressed) {
        background (250);
    }
    
    stroke(255, 255, 255);
    fill(250,255,167);
    ellipse(mouseX, mouseY, 100, 140);
}