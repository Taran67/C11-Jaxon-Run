
function preload(){
  //pre-load images
  pathImg = loadImage("path.png")
  jaxonImg = loadAnimation("Runner-1.png", "Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200, 200)
  path.addImage(pathImg);

  jaxon = createSprite(200, 325)
  jaxon.addAnimation("jaxon", jaxonImg);
  jaxon.scale = 0.075;

  invis1 = createSprite(400, 0, 100, 800)
  invis1.visible = false;

  invis2 = createSprite(0, 0, 100, 800)
  invis2.visible = false;
  
}

  

function draw() {
  background(0);
  path.velocityY = 4;
  path.scale = 1.2;

  if (path.y > 400) {
    path.y = height/2
    
  }
  jaxon.x = mouseX
  jaxon.collide(invis1)
  jaxon.collide(invis2)

  text(mouseX+","+mouseY, mouseX, mouseY)

  drawSprites();

}
