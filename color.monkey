Class Color
	Field red:Float
	Field green:Float
	Field blue:Float
	
	Method New(r,g,b:Float)
		red = r
		green = g
		blue = b
	End 		
End 

Global gBackGroundColor:Color = New Color(0,0,0) 'http://www.colorpicker.com
Global gGridLineColor:Color = New Color(96,99,99) 
Global gCellFocusColor:Color = New Color(57,178,196) 
Global gCellClickColor:Color = New Color(250,1,1) 
Global gCellSelectedColor:Color = New Color(0,0,255) 
Global gTextColor:Color = New Color(255,255,255) 'white 
Global gCommandColor:Color = New Color(250,250,1) 
Global gCellMatchedColor:Color = New Color(0,255,0) 
Global gCellNotMatchedColor:Color = New Color(237,38,231) 