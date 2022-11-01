var box1,box2;
function setup() 
{
  createCanvas(400, 400);
  box1 = new Box(100,200,30,50,0,1); // pass the argument
  box2  =new Box(200,100,30,57,0,3);


}

function draw() 
{
  background(220);
 box1.show();
 box1.moveup();
 box2.show();
 box2.moveup();

}





