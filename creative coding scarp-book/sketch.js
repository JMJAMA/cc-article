let vid;
let playing = true;


let img,img1,img2,img3,img4,img5;
let pg,pg1,pg2,pg3,pg4;
let font,font1,font2;


function preload(){
  
  
  font = loadFont("Roboto-Regular.ttf");
  font1 = loadFont("Roboto-Medium.ttf");
  font2 = loadFont("Roboto-Light.ttf");
  
  img = loadImage("asset.jpg");
  img1 = loadImage("crop.jpg");
  img2 = loadImage("vscode.jpg");
  img3 = loadImage("web asset 1.png");
  img4 = loadImage("inspo.png");
  
  
 
}

function setup() {
  createCanvas(windowWidth, windowHeight*8);

  vid = createVideo("chrome video asset.mp4");
  vid.size(windowWidth, windowHeight);
  vid.volume(0);
  vid.loop();
  vid.hide(); // hides the html video loader
  // vid.position(0.0);
  
  img.resize(width,0);
  img1.resize(width/2,0);
  img2.resize(width/2,0);
  img3.resize(width/2,0);
  //img4.resize(width/2,0);
  
  pg = createGraphics(windowWidth,windowHeight);
  pg1 = createGraphics(windowWidth,windowHeight);
  pg2 = createGraphics(windowWidth,windowHeight);
}

function draw() {
  background(242, 242, 242);

  
  
  
  textFont(font);
  textSize(26);
  textAlign(LEFT,TOP);
  textLeading(28);
  fill(0);
  text("Generating motion assets using creative code",200,200,700,height);
  textFont(font);
  textSize(35);
  textLeading(38);
  text("My brief was to create a web application to compliment what the team at Fable & Co had created for the strategic realignment of the Chrome Productions brand, identity, & website. Using the asset that would feature throughout the design strategy, I was tasked with turning the static image into an animation that could be applied where appropriate.",200,300,700,height);
  
  
  
  imageMode(CENTER);
  image(img,width/2,1100);
  
  text("The approved design concept utilised a static monochrome liquid asset which has a metallic liquid quality which would work well animated but would be impractical using traditional motion graphic software. That’s where the power of creative coding comes in, a powerful and effective approach to creating unique motion assets and interactive web pages by building custom tools to achieve specific results. Looking at the asset I saw an opportunity to push it further through experiments In order to turn the static asset into a moving liquid which is continuously in motion, involving over time in an endless generation of new forms.",200,1600,700,height);
  
  pg.background(0);
  pg.imageMode(CENTER);
  pg.image(img1,pg.width/3,pg.height/2);
  pg.image(img2,pg.width/2+width/5,pg.height/2);
  
  image(pg,width/2,2600);

  text("After cropping the asset in order to fill the frame I wrote a program using P5.js which is a library for JavaScript allowing me to manipulate the pixels of the image individually within the browser, without lowering performance.",200,3070,700,height);
  
// push();
//   pg1.background(0);
  
//   //pg1.translate(pg1.width/2,pg1.height/2);
  
//   // pg1.imageMode(CENTER);
//   pg1.scale(0.7);
//   pg1.image(img4,0,0);
// pop ();



push ();
translate (width/2,0);
  scale (0.5);
  image(img4,0,7500);
pop ();

 text("As a reference I looked at Roni Cantor’s programmed plotter drawings of waveforms using mathematical equations. I used this as inspiration for my own program to see if it would be possible to take the assets from still to moving images by changing certain variables but using the same principles.",200,4200,700,height);

  image(vid,width/2,5000);
  
 
  
  
  
  
  
  
}




