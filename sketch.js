
const numScars = 50;
const numImgs = 6;
const scarSize = 700;
const scars = Array.from({ length: numScars });
const imgs = Array.from({ length: numImgs});

let img;

function preload(){
  
   img = loadImage('ocean.png');
    imgs[0] = loadImage(`fish1.png`);
    imgs[1] = loadImage(`fish2.png`);
    imgs[2] = loadImage(`fish3.png`);
    imgs[3] = loadImage(`fish4.png`);
    imgs[4] = loadImage(`fish5.png`);
    imgs[5] = loadImage(`fish6.png`);
}


function setup(){
    createCanvas( displayWidth, displayHeight);
  scars.forEach( (scar, i) => {
    scars[i] = new Scar(imgs[i%numImgs], random(50, width-100), random(50,height - 100))
  })
  
  console.log(scars);

}


function draw(){
  background(img);
  scars.forEach(scar=>{
    scar.checkEdge();
    scar.move();
    scar.display();
    
  })
}