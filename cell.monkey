Import oper 
Import config 
Import mojo.graphics
Import list 
Import color 
Import command 

'horizontal, cell may be null 
Class CellLine
	Field col:Int
	Field row:Int 
	Field items:Oper[] = []
	Field itemsNum:Int [] = [] ' it correspond to items. It describes how many item element is there in a single index.   
	   
	Method New (col:Int,row:Int, size:Int)
		Self.col = col 
		Self.row = row 
		items=items.Resize(size)
		itemsNum = itemsNum.Resize(size)
		Local i:Int 
		For i=0 Until size
			items[i]=Null 
			itemsNum[i] = 0 			
		Next 
	End
	Method RegisterCommands()
    Local i%
    For i=0 Until items.Length
      RegisterCommand(col+i,row,CMD_CELL_LINE_CLICK)
    Next
	End 
	Method Clone:CellLine()
		Local cellLine:CellLine = New CellLine(Self.col,Self.row,items.Length)
		Local o:Oper 
		Local i:Int 
		For i=0 Until items.Length
			o=items[i]
			cellLine.items[i] = o 
			cellLine.itemsNum[i] = itemsNum[i] 
		Next 
		Return cellLine 
	End  
	Method Set(index:Int, value:Oper)
		items[index]=value 
	End 
	Method Get:Oper (index:Int)
		Return items[index] 
	End 
	Method SetNum(index:Int, n:Int ) 
		itemsNum[index] = n 
	End 
	Method GetNum:Int(index:int)
		Return itemsNum[index] 
	End 
	Method Draw() 
		Local o:Oper 
		Local i:Int = 0 
		Local c:Cell  
		For i = 0 Until items.Length
			o = Get(i)
			If o = Null Then
        
				o = gEmptyOper  
			Endif 
			c=New Cell(col+i,row,o)
			c.Draw() 
			If Not IsWorkCellLine(col+i,row) Then 
				DrawItemNum(col+i,row,itemsNum[i]) 
			End 	
		Next 
	End 
	'on top-right corner of the cell 
	Method DrawItemNum (x:Int,y:Int,num:Int )
		Local numStr:String 
		numStr = String(num) 
		DrawText(numStr,LEFT_MARGIN+x*UNIT_WIDTH+UNIT_WIDTH,TOP_MARGIN+row*UNIT_HEIGHT,1,0) 
	End 
End 



'vertical 
Class CellStack
	Field col:Int
	Field row:Int  
	Field items:List<Oper>=New List<Oper>
	Method New(c:Int ,r :Int) 
		col = c
		row = r 
	End 
	Method Clone:CellStack()
		Local cellStack:CellStack = New CellStack(Self.col,Self.row)
		Local o:Oper 
		For o=Eachin items
			cellStack.Push(o)
		Next 
		Return cellStack 
	End 
	'whether this cellStack's coordinate is the same with that 
	Method SamePosition:Bool (cellStack:CellStack)
		If cellStack.col <> col Or cellStack.row <> row Then Return False 
		Return True 
	End 
	'whether this cellStack matches another CellStack 
	Method Equal:Bool (cellStack:CellStack)
		If cellStack.col <> col Or cellStack.row <> row Then Return False 
		Local this:Oper[]
		Local that:Oper[]
		this=items.ToArray
		that=cellStack.items.ToArray 
		
		If this.Length <> that.Length Then Return False 
		
		
		Local i:Int 
		
		For i=0 Until  this.Length 
			If this[i].kind <> that[i].kind Or this[i].value <> that[i].value Then Return False 
		Next 
		Return True 
	End 
	Method Push(o:Oper)
		items.AddLast(o) 
	End
	Method Pop:Oper()
		Return items.RemoveLast()
	End 
	Method Top:Oper()
		Return items.Last 
	End 
	'takes O(n) time 
	Method Length:int()
		Return items.Count 
	End 
	Method IsEmpty:Bool()
		Return items.IsEmpty 
	End 
	Method Draw() 
		Local o:Oper 
		Local i:Int = 0 
		Local c:Cell  
		For o = Eachin items.Backwards()
			c=New Cell(col,row+i,o)
			c.Draw() 
			i+=1 
		Next 
	End 
End 

Class Cell
	Field col:Int 
	Field row:Int 
	Field item:Oper 
	
	Method New(c:int,r :Int, o:Oper ) 
		col = c
		row = r 
		item = o 
	End 
	
	Method New(c:Int,r:Int,kind:Int,value:Int )
		col = c 
		row = r 
		item = NewOper(kind,value) 
	End 
	
	Method Draw() 
		If item.kind = COMMAND Then 
			SetColor gCommandColor.red, gCommandColor.green, gCommandColor.blue
			DrawCellBorder(col,row,gCommandColor)
		Else 
			SetColor gTextColor.red, gTextColor.green, gTextColor.blue
			DrawCellBorder(col,row,gTextColor)
		End 	 
		DrawText(item,LEFT_MARGIN+col*UNIT_WIDTH+UNIT_WIDTH/2,TOP_MARGIN+row*UNIT_HEIGHT+UNIT_HEIGHT/2,0.5,0.5) ' 0.5 means align center on the given point 
	End 
End 



Function IsWorkCellLine:Bool (cellLine:CellLine)
	Return IsWorkCellLine(cellLine.col, cellLine.row)
End 

'input col and row are a cell in CellLine 
Function IsWorkCellLine:Bool (col:Int,row:Int)
	Local i:Int 
	For i=0 Until WORK_LINE_ROWS.Length 
		If WORK_LINE_ROWS[i] = row Then Return True 
	End 
	Return False 
End 

'get the cellLine that the mouse clicked by coordinate from the scene
'different celllines shall locate in different rows  
Function GetCellLine:CellLine(col:Int,row:Int,scene:Scene)
	Local i:Int 
	Local cellLine:CellLine 
	For i=0 Until scene.workToolCellLines.Length 
		cellLine = scene.workToolCellLines[i]
		If row = cellLine.row Then Return cellLine 
	Next 
	
	For i=0 Until scene.workCellLines.Length 
		cellLine = scene.workCellLines[i]
		If row = cellLine.row Then Return cellLine 
	Next 
	
	
	Return Null 
End 

Function CloneCellLineArray:CellLine[](ary:CellLine[])
	Local a : CellLine[] = [] 
	Local i: Int 
	a = a.Resize(ary.Length) 
	For i = 0 Until ary.Length
		a[i] = ary[i].Clone() 
	End 
	Return a 
End 

Function CloneCellStackArray:CellStack[](ary:CellStack[])
	Local a : CellStack[] = [] 
	Local i: Int 
	a = a.Resize(ary.Length) 
	For i = 0 Until ary.Length
		a[i] = ary[i].Clone() 
	End 
	Return a 
End 

'max colum value in the CellStack array 
Function MaxCol:Int (ary:CellStack[])
	Local maxCol:Int  = -1 
	Local i:Int 
	
	For i=0 Until ary.Length 
		If ary[i].col > maxCol Then 
			maxCol = ary[i].col 
		End 
	Next 
	Return maxCol 
End 

'find from the array whether cellStack with same position exists, if yes return index, else return -1 
Function FindSamePositionStack:Int (ary:CellStack[],cellStack:CellStack)
	Local i% 
	For i=0 Until ary.Length 
		If ary[i].SamePosition(cellStack) Then Return i 
	Next 
	Return -1 
End 

Function GetCloseCellOper:Oper(cellStack:CellStack, cellLineArray:CellLine[])
	Local c:Cell 
	Local cellLine:CellLine
	Local i:Int 
	Local col:Int 
	Local x:Int 
	i = GetCloseCellLine(cellStack, cellLineArray)
	cellLine = cellLineArray[i] 
	
	col=cellLine.col 
	For i = 0 Until cellLine.items.Length
		x = col + i 
		If x = cellStack.col Then 
			Return cellLine.Get(i)
		End 
	Next 
	Return Null 
End 

'return the index of cellLineArray, must succeed 
Function GetCloseCellLine:int(cellStack:CellStack, cellLineArray:CellLine[])
	Local i:Int = -1 
	For i=0 Until cellLineArray.Length 
		If cellLineArray[i].row = cellStack.row - 1 Then 
			Return i 
		End 
	Next 
	
	Return i 
End 

Function DrawCellBorder(col:Int,row:Int,c:Color)
	Local x:Int 
	Local y:Int 
	SetColor c.red, c.green, c.blue 
	x=LEFT_MARGIN+col*UNIT_WIDTH 
	y=TOP_MARGIN+row*UNIT_HEIGHT
	DrawLine(x,y,x+UNIT_WIDTH,y)
	DrawLine(x,y+UNIT_HEIGHT,x+UNIT_WIDTH,y+UNIT_HEIGHT)
	DrawLine(x,y,x,y+UNIT_HEIGHT)
	DrawLine(x+UNIT_WIDTH,y,x+UNIT_WIDTH,y+UNIT_HEIGHT)
End 

Function NullCellLines(cellLines:CellLine[])
  Local i% 
  For i = 0 Until cellLines.Length 
    NullCellLine(cellLines[i]) 
  Next
End 

Function NullCellLine(cellLine:CellLine)
  Local i% 
  For i=0 Until cellLine.items.Length 
    cellLine.items[i] = Null 
    cellLine.itemsNum[i] = 0 
  Next
End 