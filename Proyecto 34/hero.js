class Hero {
    constructor(scale) {
        var options = {
            density: 2,
            restitution: 1.2,
            friction: 0.8
        }
        scale = scale * 10;
        this.body = Bodies.rectangle(190, 250, scale * 2, scale);
        World.add(world, this.body);
        this.scale = scale;
        this.image = loadImage("images/Superhero-01.png");
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.scale * 2, this.scale);
        pop();
    }
}