//https://teachablemachine.withgoogle.com/models/lHmA-p8TK/


Webcam.set({
    height: 300,
    width: 350,
    image_format: "png",
    png_quality: 90
});

camera = document.getElementById('camera');

Webcam.attach('#camera');

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById('result').innerHTML = '<img id = "imageResult" src = "'+data_uri+'">'
    })
}

console.log('ml5_version', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/lHmA-p8TK/model.json', modelLoaded);

function modelLoaded(){
    console.log('Model Loaded!');
}

