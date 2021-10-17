class Enemy {
    constructor(scale) {
        var options = {
            restitution: 0.675,
            density: 1,
            friction: 0.95
        }
        scale = scale *10;
        this.body = Bodies.rectangle(785, 260, scale, scale, options);
        World.add(world, this.body);
        this.scale = scale;
        this.image = loadImage("images/Monster-01.png");
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y + (this.scale / 10));
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.scale, this.scale);
        pop();
    }
}