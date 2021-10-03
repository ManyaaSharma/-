img="";
Status="";
objects="";

function preload(){
    img=loadImage("download.jpg");
}

function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);

}

function draw(){
    image(img, 0, 0, 640, 420);
            document.getElementById("status").innerHTML="Status: Object Detected";
            document.getElementById("number_of_objects").innerHTML="The number of objects are "+objects.length;
            fill("#FF000");
            percent=floor(objects[i].confidence*100);
            text(objects[i].label+" "+percent+"%",objects[i].x,objects[i].y);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
            
        }

function modelLoaded(){
    console.log("Model Loaded!");
    Status=true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        objects=results;
    }
}