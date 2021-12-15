let clientSocket = io();

clientSocket.on("connect", newConnection);

clientSocket.on("mouseBroadcast", newBroadcast);

function newConnection(){
  console.log(clientSocket.id);
}


function newBroadcast(data){
  console.log(data);
  fill(data.r, data.g, data.b)
  circle(data.x, data.y, data.s)
}



let sliderR;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0)

 

  sliderR = createSlider(20, 255, 100);
  sliderR.position(90, 90);
 

  sliderG = createSlider(40, 255, 100);
  sliderG.position(90, 120);

  sliderB = createSlider(40, 255, 100);
  sliderB.position(90, 150);

  sliderS = createSlider(5, 45, 50);
  sliderS.position(90, 220);

}

function draw() {
 // background(220);
  
 textSize(20);
fill('red')
text('R', 70, 110);
fill('green')
text('G', 70, 140);
fill('blue')
text('B', 70, 170);
fill('white')
text('SIZE', 130, 220);



  let valR = sliderR.value();
  let valG = sliderG.value();
  let valB = sliderB.value();
  let valS = sliderS.value();

  

  r = valR; // r is a random number between 0 - 255
  g = valG; // g is a random number betwen 100 - 200
  b = valB; // b is a random number between 0 - 100
  s = valS
  noStroke()
  fill(r,g,b)
  circle(mouseX, mouseY, valS)





}

function mouseMoved(){

  let message = {
    x: mouseX,
    y: mouseY,
    r : r,
    g : g,
    b : b,
    s : s,

  };

  clientSocket.emit("mouse",message);
}


 
