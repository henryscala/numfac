

Const STAGE_WIDTH:Int = 640
const STAGE_HEIGHT:int = 480
const UNIT_HEIGHT:int = 24
Const UNIT_WIDTH:Int = 32
Const NUM_ROWS:Int = 20 'STAGE_HEIGHT / UNIT_HEIGHT 
Const NUM_COLS:Int = 20 'STAGE_WIDTH / UNIT_WIDTH 
Const FRAME_PER_SECOND:Int = 60
Const STEPS_PER_FRAME:Float = 0.0166666667 
' there are two product lines,
' the followed array specify the row number of lines 
Global WORK_LINE_ROWS:Int[]=[3,12] 
Global TOOL_LINE_ROW:Int = 1  

Global LEFT_MARGIN:int = 0
Global TOP_MARGIN:Int = 0