class Banana{
    constructor(x,y,width,height){
        var options  = {
            'isStatic':true,
            'restitution':1.0
        }

        this.body = Bodies.rectangle(x,y,width,height)
        this.width = width
        this.height = height
        this.image = loadImage("stone.png")
        World.add(world,this.body)


    }

    display(){
        var pos = this.body.position
        var angle = this.body.angle

        push();
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,this.width,this.height)
        pop();
        
    }
}