class Box {
    constructor(x, y, scale) {
        var options = {
            restitution: 0,
            density: 1, 
            friction: 1, 
            isStatic: false
        }
        this.body = Bodies.rectangle(x, y, scale, scale, options);
        World.add(world, this.body);
        this.scale = scale;
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, this.scale, this.scale);
        pop();
    }
}