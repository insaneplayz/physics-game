class Launcher{
    constructor(body, anchor){
        var options = {
            bodyA: body,
            pointB: anchor,
            stiffness: 0.004,
            length: 1
        }
        this.bodyA=body;
        this.pointB=anchor;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
       attach(body){
            this.sling.bodyA = body;}
        fly(){
            this.sling.bodyA =null;
        }
        display(){
            if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            
            strokeWeight(4);
            stroke("black");
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            }
            }
}