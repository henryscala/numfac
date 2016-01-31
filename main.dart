import 'dart:html' as html;
import 'package:stagexl/stagexl.dart' as st; 

void main() {
  
  var canvas = html.querySelector('#canvas');
  var stage = new st.Stage(canvas,width:800,height:600); 
  var loop = new st.RenderLoop();
  loop.addStage( stage);

  var shape = new st.Shape(); 
  shape.graphics.circle(100,100,100); 
  shape.graphics.fillColor(st.Color.Red); 
  shape.graphics.strokeColor(st.Color.Black,10);



  stage.addChild(shape); 

  
 
}