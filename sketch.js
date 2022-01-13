var ejemplo

function setup() {
  createCanvas(1200,1200);

  ejemplo = createSprite (200,200,20,20)
  ejemplo.shapeColor = ("Orange")
}

function draw() 
{
  background(30);
 drawSprites()

if (keyDown("W")) {
  background("Red")
  ejemplo.position.y = ejemplo.position.y-5
}

 if (keyDown("S")) {
  ejemplo.position.y = ejemplo.position.y+5
  background("Blue")
 }

 if (keyDown("A")) {
  ejemplo.position.x = ejemplo.position.x-5
}

 if (keyDown("D")) {
  ejemplo.position.x = ejemplo.position.x+5
 }
}




