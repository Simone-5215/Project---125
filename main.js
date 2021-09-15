noseX = 0;
noseY = 0;
difference = 0;
right_wristX = 0;
left_wristX = 0;

function setup()
{
  video = createCapture(VIDEO);
  video.size(550 , 500);

  canvas = createCanvas(550 , 550);
  canvas.position(560 , 150);
  
  poseNet = ml5.poseNet(video , modelLoaded);
  poseNet.on('pose' , gotPoses);
}

function draw()
{
  background('#0bfc03');
  fill('#000000');
  textSize(difference);
  text('Hello!' , 50 , 400);
  document.getElementById("font_size").innerHTML = "Font size of the text will be = " + difference + "px";
}
function modelLoaded()
{
  console.log('PoseNet is inishlized');
}

function gotPoses(results)
{
  if(results.length > 0)
{
  console.log(results);
  left_wristX = results[0].pose.leftWrist.x;
  right_wristX = results[0].pose.rightWrist.x;
  difference = floor(left_wristX - right_wristX);
  console.log("left wristX = " + left_wristX + "right wristX = " + right_wristX + "difference = " + difference);
}
}