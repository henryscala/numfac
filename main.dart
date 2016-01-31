import 'dart:html' as html;
import 'package:stagexl/stagexl.dart' as stagexl; 

//With this config, there are 30 rows and 20 columns 
int STAGE_WIDTH = 1024;
int STAGE_HEIGHT = 768; 
int UNIT_HEIGHT = 25; 
int UNIT_WIDTH = 50; 
int LEFT_MARGIN = 0; //it is calculated
int TOP_MARGIN = 0; //it is calculated 

stagexl.Stage gStage;


stagexl.DisplayObject backgroundObject(  ){
  stagexl.Shape shape = new stagexl.Shape(); 

  int col, row; 
  int numCol = gStage.contentRectangle.width ~/ UNIT_WIDTH;
  int numRow = gStage.contentRectangle.height ~/ UNIT_HEIGHT;
  LEFT_MARGIN = gStage.contentRectangle.width % UNIT_WIDTH ~/ 2; 
  TOP_MARGIN = gStage.contentRectangle.height % UNIT_HEIGHT ~/ 2; 
  print("numCol=${numCol}");
  print("numRow=${numRow}");

  shape.graphics.rect(LEFT_MARGIN, TOP_MARGIN, gStage.contentRectangle.width-2*LEFT_MARGIN, gStage.contentRectangle.height-2*TOP_MARGIN);
  shape.graphics.fillColor(stagexl.Color.SkyBlue); 

  shape.graphics.beginPath(); 

  //verticle lines 
  for (col=0;col<=numCol;col++) {
    shape.graphics.moveTo(col*UNIT_WIDTH+LEFT_MARGIN, TOP_MARGIN);
    shape.graphics.lineTo(col*UNIT_WIDTH+LEFT_MARGIN, numRow*UNIT_HEIGHT+TOP_MARGIN);
  }

  //horizontal lines 
  for (row=0;row<=numRow;row++){
    shape.graphics.moveTo(LEFT_MARGIN,row*UNIT_HEIGHT+TOP_MARGIN);
    shape.graphics.lineTo(LEFT_MARGIN+numCol*UNIT_WIDTH,row*UNIT_HEIGHT+TOP_MARGIN);
  }

  shape.graphics.strokeColor(stagexl.Color.DarkBlue);
  return shape; 
}

void onResize(e) {
  print("resize happened");
}



void main() {
  
  var canvas = html.querySelector('#stage');
  gStage = new stagexl.Stage(canvas,width:STAGE_WIDTH,height:STAGE_HEIGHT); 
  gStage.scaleMode = stagexl.StageScaleMode.NO_SCALE;
  gStage.align = stagexl.StageAlign.TOP_LEFT;
  var loop = new stagexl.RenderLoop();
  loop.addStage( gStage);
  gStage.addChild(backgroundObject());
  
  gStage.onResize.listen(onResize);
}