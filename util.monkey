Import config 

Class Vector
	Field x:Int 
	Field y:Int 
	Method New(x:Int,y:Int)
		Self.x = x
		Self.y = y 
	End 
End 

Function PosToCellLocation:Vector(x:Int,y:Int)
	Local col: Int 
	Local row: Int 
	
	x=x Mod STAGE_WIDTH
	y=y Mod STAGE_HEIGHT 
	col = (x - LEFT_MARGIN) / UNIT_WIDTH 
	row = (y - TOP_MARGIN) / UNIT_HEIGHT
	
	Return New Vector(col,row) 
End 	

