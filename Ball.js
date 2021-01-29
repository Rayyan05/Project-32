class Ball{
    constructor(x,y,width,height){
       var options = {
           'isStatic': false,
           'restitution':0.8,
           'density':0.3,
           
           
       } 

       this.body = Bodies.rectangle(x,y,width,height,options)
       this.width = width
       this.height = height
       this.image = loadImage("Monkey_01.png")
      
       World.add(world,this.body)
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        imageMode(CENTER)
        //fill("red")
        image(this.image,pos.x,pos.y,this.width,this.height);
        pop();
    }
}