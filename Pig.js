class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.pigs=255;
  }

  display(){

    if(this.body.speed>3){

      World.remove(world, this.body)
      push()
      this.pigs=this.pigs-5
      tint(255,this.pigs)
      image(this.image, this.body.position.x,this.body.position.y,50,50)
      pop()
    }
    else{

     super.display()
      
    }
 
  }

};