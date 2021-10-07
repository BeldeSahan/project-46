class Box{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.boxWidth=100;
        this.boxHeight=150;
        this.boxThickness=10;
        this.angle=0;
this.bottom=Bodies.rectangle(this.x,this.y,this.boxWidth,this.boxThickness,{isStatic:true});
this.left=Bodies.rectangle(this.x-this.boxWidth/2,this.y-this.boxHeight/2,this.boxThickness,{isStatic:true});
Matter.Body.setAngle(this.left,this.angle);
this.right=Bodies.rectangle(this.x+this.boxWidth/2,this.y+this.boxHeight/2,this.boxThickness,{isStatic:true});
Matter.Body.setAngle(this.right,this.angle*-1);
World.add(world,this.bottom);
World.add(world,this.left);
World.add(world,this.right);
    }
display(){
    
}
}