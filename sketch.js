let imageFileList=['images/orange.jpg','images/banana.jpg','images/apple.jpg'];
let imageList=[];
let nameList=['orange','banana','apple']; //display name rather than number
let currentImage=0;
let nextButton,prevButton;

function setup()
{
  createCanvas(500,600);
  fill(0);
  stroke('#222222');
  strokeWeight(4);
  rect(0, 0, 410, 450,20);
  prevButton=new Clickable();
  prevButton.resize(80,45);
  prevButton.locate(5, 400);
  prevButton.onPress = function()
  {
    prev();
  }
  prevButton.color = "#CC9966";       
  prevButton.cornerRadius = 10;      
  prevButton.strokeWeight = 2;      
  prevButton.stroke = "#660000"; 
  prevButton.text = "PREVIOUS";     
  prevButton.textColor = "#000000"; 
  prevButton.textSize = 13;        
  prevButton.textFont = "avenir-black"; 
  
  nextButton=new Clickable();
  nextButton.resize(80,45);
  nextButton.locate(90, 400);
  nextButton.onPress = function()
  {
    next();
  }
  nextButton.color = "#999933";       
  nextButton.cornerRadius = 10;      
  nextButton.strokeWeight = 2;      
  nextButton.stroke = "#666633"; 
  nextButton.text = "NEXT";     
  nextButton.textColor = "#000000"; 
  nextButton.textSize = 13;        
  nextButton.textFont = "avenir-black"; 
  
  
}

function preload()
{
  for(let filename of imageFileList)//can't use var here.
  {imageList.push(loadImage(filename));}
  
  print(imageList.length+" images are loaded into the list!")
}

function draw()
{
  show();
  prevButton.draw();
  nextButton.draw();
  textFont("avenir-black");
  textAlign(LEFT);
  switch(currentImage)
  {
    case 0:
 {fill(255);
  text("This is orange",200,408);
  fill(0);
  text("This is banana",200,423);
  text("This is apple",200,438);break;
 }
    case 1:
 {fill(255);
  text("This is banana",200,423);
  fill(0);
  text("This is orange",200,408);
  text("This is apple",200,438);break;
 }
    case 2:
 {fill(255);
  text("This is apple",200,438);
  fill(0);
  text("This is orange",200,408);
  text("This is banana",200,423);break;
 }
      
  }
}

function show()
{
  image(imageList[currentImage],5,5,400,393);
}

function next()
{
  currentImage++;
  if(currentImage>imageList.length-1)
  { currentImage = 0;}
  
  print("next image is " + nameList[currentImage])
}

function prev()
{
  currentImage--;
  if(currentImage<0)
  { currentImage = imageList.length-1;}
  
  print("previous image is " + nameList[currentImage])
}