Webcam.set({
    height : 300,
    width  :350,
    image_fromat :'png',
    png_quality : 90
  });
  var camera = document.getElementById("camera");
  Webcam.attach('#camera');
  
  function Capture(){
      Webcam.snap(function(data_uri){
          document.getElementById("Result").innerHTML = 
          "<img id = 'captured_image' src = " + data_uri + ">";
      })
  }
  console.log("ml5 version : ",ml5.version);

  classifier = ml5.imageClassifier('Mobilenet', modelloaded);

  function modelloaded(){
      console.log("model Loaded")
  }

  function Check(){
      img = document.getElementById("captured_image");
      classifier.classify(img , gotresult);
  }

  function gotresult(error , results){

if(error){
    console.error(error);
}
else{
    console.log(results);
    document.getElementById("object_name").innerHTML = results [0].label;
}

  }
  