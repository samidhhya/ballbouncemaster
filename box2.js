class Box2{
    constructor(x,y,width,height){
        var options={
            restitution:0.1,
            density:1.0
        }
        this.body=Bodies.rectangle(x,y,width,height)
        this.width=width;
        this.height=height;
        World.add(world,this.body)
    }
    display(){
        var place=this.body.position
        var angle=this.body.angle
        push()
        fill("red")
        rectMode(CENTER)
        rect(place.x, place.y, this.width, this.height);
        pop()

    }
}