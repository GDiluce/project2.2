class Scar{
    constructor(img, x, y){
        this.img = img;
        this.x = x;
        this.y = y;
        this.size = random(50,scarSize);
        this.speedX = random(-2,2);
        this.speedY = random(-2,2);
    }

    checkEdge(){
      if(this.x < -400 || this.x > width + 400){
        this.speedX *= -1;
      }
      if(this.y < -400 || this.y > height + 400){
        this.speedY *= -1;
      }
    }
  
  
    display(){
        image(this.img, this.x, this.y, this.size, this.size);
    }
  
    move(){
       this.x+=this.speedX;
      this.y+=this.speedY;
    }
}
