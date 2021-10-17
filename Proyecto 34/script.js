const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;

var canvas;

var ground;
var bgImg;

var boxes = [];
var boxesHeight = 300;
var br = false;

var monster;
var hero;
var flyingSling;
var mIc = false;
var mI2;
function preload() {
    bgImg = loadImage("images/GamingBackground.png");
    mI2 = loadImage("images/Monster-02.png");
}
function setup() {
    engine = Engine.create();
    world = engine.world;
    canvas = createCanvas(1200, 400);
    ground = new Ground(20);
    do {
        for (var i = 450; i < 700; i+= 70) {
        boxes.push(new Box(i, boxesHeight, 40));
        if (i >= 590 && boxesHeight === 100) {
            br = true;
            break;
        }
    }
    if (br === true) {
        br = false;
        break;
    }
    boxesHeight = boxesHeight - 40;
}
    while (boxesHeight > 75);
    if (boxesHeight  <= 100) {
        boxes.push(new Box(590, boxesHeight, 40));
    }
    monster = new Enemy(20);
    hero = new Hero(18);
    flyingSling = new LevitationDevice(hero.body, {x: 300, y: 100});
}
function draw() {
    Engine.update(engine);
    background(bgImg);
    for (var i = 0; i < boxes.length; i++) {
        fill("red");
        boxes[i].display();
    }
    fill("blue");
    ground.display();
    if (monster.body.position.x != 785 && mIc == false) {
        monster.image = mI2;
        mIc = true;
    }
    monster.display();
    flyingSling.lineWeight = 0;
    flyingSling.display();
    hero.display();
    console.log(`x: ${mouseX}, y: ${mouseY}`);
}
function mouseDragged() {
    flyingSling.flyingD.bodyA = null;
    Body.setPosition(hero.body, {x: mouseX, y: mouseY});
}