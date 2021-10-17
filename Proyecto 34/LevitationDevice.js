class LevitationDevice {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.06,
            length: 150
        }
        this.lineWeight = 5;
        this.flyingD = Constraint.create(options);
        World.add(world, this.flyingD);
    }
    display() {
        if (this.flyingD.bodyA) {
        strokeWeight(this.lineWeight);
        var pointA = this.flyingD.bodyA.position;
        var pointB = this.flyingD.pointB;
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }   
}