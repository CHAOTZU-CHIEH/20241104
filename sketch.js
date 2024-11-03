let font; //載入字型文字
let points = []; //轉成點狀文字
let r=10 //增加上下幅度
let angle=0 //三角函數內的角度
// ==================================================
function preload(){ //在執行setup()前，必須先做此函數執行，主要先載入字型
//為載入在fonts資料夾內的Zeyada-Regular.ttf字型
font = loadFont("fonts/LXGWWenKaiMonoTC-Bold.ttf")
}
//===================================================

function setup() {
createCanvas(windowWidth,windowHeight,);
background("#fefae0")
points = font.textToPoints("411730327", -300, 100, 200, {
sampleFactor:0.1
}); //轉成文字圖檔，放在(0, 200)位置，圖形大小為200，sampleFactor為點數距離大小(點數密度，數字越小點數越少)
angleMode(DEGREES);//宣告角度使用0-360
}

function draw() {
background(0);
rectMode(CENTER)//設定方塊座標點以中心點為座標
noFill(0)//不充滿顏色
strokeWeight(2.75)
//宣告變數
var w= mouseX/10
//使用迴圈產生多排
for(var j=0;j<height/50;j++){
 for(var i=0;i<width/50;i++){
  stroke("#bfc8d7")
  ellipse(25+50*i,25+50*j,mouseX/5)
  stroke("#e3e2b4")
  rect(25+50*i,25+50*j,mouseY/12)
  stroke("#e2d2d2")
  ellipse(50+50*i,50+50*j,mouseY/8)
   }
  }
    strokeWeight(1)
    translate(width/2,height/2) //把(0,0)座標點，移到視窗中間
    rotate(frameCount/2)%360 //以(0,0)中心點旋轉角度，角度的值為0-360
    for (let i=0; i<points.length-1; i++) {
    fill("#d62828") //圓的充滿顏色
    noStroke() //不要框線
    ellipse(points[i].x+r*sin(angle+i*15),points[i].y,10)
    stroke("#f6b99d")
    strokeWeight(5) //線條粗細
    line(points[i].x+r*sin(angle+i*15),points[i].y,points[i+1].x+r*sin(angle+i*15),points[i+1].y)
    }
    angle=angle+10 //每畫圖一次就要調整角度+10
  }

