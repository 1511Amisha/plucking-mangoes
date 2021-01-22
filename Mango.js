class Mango{
    constructor(x,y,radius){
        var options={
            isStatic:true,
            restitution:0,
            friction:1
        }

        this.image=loadImage("Plucking_mangoes/mango.png");
        this.body=Bodies.circle(x,y,radius,options);
        this.radius=radius

        World.add(world,this.body)
           
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image,0,0,this.radius*2,this.radius*2);
      //  ellipseMode(RADIUS);
        //ellipse(0,0,this.radius,this.radius);
        pop();
    }
}
//image(this.image, 0, 0, this.width, this.height);
