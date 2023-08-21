var nose_x = 0;
var nose_y = 0;




function preload() {
clown_nose = loadImage("https://i.postimg.cc/Bv3p6WSM/Clown-nose-large.webp");
}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.position(650, 200);
    //canvas.center();
    video = createCapture(VIDEO);
    video.size(400,400);
    video.hide();
    //classifier = ml5.imageClassifier("teachable machine model/model.json", model_loaded function);
    //my_pose_net = ml5.poseNet(input to detect the keypoint, function to be called after loading the poseenet model)
    pose_net = ml5.poseNet(video,model_loaded);
    pose_net.on('pose',got_poses);
}

function draw() {
    image(video,0,0,400,400);
    
    //stroke("red");
    //fill("red");
    //circle(nose_x,nose_y,20);
    image(clown_nose,nose_x-36,nose_y-28,75,75);
}

function snapshot() {
    save("you-are-a-clown.png");

}

function model_loaded(){
    console.log("Posenet success");
}

function got_poses(results){
    if (results.length > 0){
       //console.log(results);
    //console.log("got poses"); 
        console.log("nose x position : " + results[0].pose.nose.x);
        console.log("nose y position : " + results[0].pose.nose.y);

        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;

       
    }
    
}