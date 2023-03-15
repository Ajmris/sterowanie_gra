var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
var c = canvas.getContext('2d');
var image = new Image();
image.src = 'graphics/bg.png';
// Canvas full screan
canvas.style.cssText='width: 100%; height: 100%;';
// Draw the initial background image
ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
var bgPosX = 0;
function update() {
  // Move the background image to the left
  bgPosX -= 1;
  // If the background image goes offscreen to the left, reset its position to the right
  if (bgPosX < -canvas.width) {
    bgPosX = 0;
  }
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // Draw the two background images
  ctx.drawImage(image, bgPosX, 0, canvas.width, canvas.height);
  ctx.drawImage(image, bgPosX + canvas.width, 0, canvas.width, canvas.height);
  // Draw the character
  c.drawImage(images[i],100, 740,200,200);
}
function draw() {
  update();
  requestAnimationFrame(draw);
}

//character animation
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
//create empty array
var images=[];
images.length=10;
//push the image to array
for(var i=1; i<images.length; i++){
  images[i]=new Image();
  images[i].src='graphics/Walk ('+i.toString()+').png';
}
var i=1;
setInterval(function(){
  i++;
  if(i>=10){
    i=1;
  }
},100)

draw();