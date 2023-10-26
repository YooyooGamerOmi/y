

function preload(){
 img=loadImage("mumbai-traffic.jpg");
}

function setup() {
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector  = ml5.objectDetector('cocossd',modelLoaded)
  document.getElementById("status").innerHTML ="status : Detcting Objects";





}


function draw(){
    image(img ,0,0,640,420)
    //fill("rgb(69,45,169)")
   // text("Dog",45,75);
    //noFill()
    //stroke("rgb(25,45,8)")
    //rect(30,60,450,350);
    
    

}
function modelLoaded(){
    console.log("Model Loaded")
    status1 = true;
    objectDetector.detect(img , gotResult)
}

function gotResult(error,results){
    if(error)  {
        console.log(error);

    }
    else{
        console.log(results)

    }

}