var fixedRect, movingRect;
var rect1;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
rect1 = createSprite(350, 200,50,90);
rect1.shapeColor = "green";
  
}

function draw() {
  background(0,0,0);  
movingRect.x = mouseX
movingRect.y = mouseY
  if (isTouching(rect1,movingRect)){
rect1.shapeColor = "red"
movingRect.shapeColor = "red"
  }else{
    rect1.shapeColor = "green"
    movingRect.shapeColor = "green"
  }
  drawSprites();
}
