x=0;
y=0;

draw_circle="";
draw_rectangle="";

var speechrecognition=window.webkitSpeechRecognition;
var recognition=new speechrecognition();

function start(){
    document.getElementById("status").innerHTML="Sytem is listening please say the shape";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);

    var content=event.results[0][0].transcript;

    document.getElementById("status").innerHTML="System has recognized the shape as "+content;

    if(content=="circle"){
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);

        document.getElementById("status").innerHTML="System has started drawing a circle";
        draw_circle="set";
    }
    if(content=="rectangle"){
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);

        document.getElementById("status").innerHTML="System has started drawing a rectangle";
        draw_rectangle="set";
    }
}
function setup(){
    canvas=createCanvas(900, 600);
}
function draw(){
    if(draw_circle=="set"){
        radius=Math.floor(Math.random()*100);
        circle(x, y, radius);
        document.getElementById("status").innerHTML="System has drawn the circle";
        draw_circle="";
    }
    if(draw_rectangle=="set"){
        w=Math.floor(Math.random()*100);
        h=Math.floor(Math.random()*100);
        rect(x, y, w, h);
        document.getElementById("status").innerHTML="System has drawn the rectangle";
        draw_rectangle="";
    }
}