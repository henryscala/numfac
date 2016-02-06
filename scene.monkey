Import list 

Import config 
Import cell 
Import color 
Import mojo.app 
Import brl.json 

Const SCENE_STATE_INITIAL:Int = 0
Const SCENE_STATE_FORWARD_PLAY:Int = 1
Const SCENE_STATE_PAUSE:Int = 2
Const SCENE_STATE_MATCHED:Int = 3
Const SCENE_STATE_NOTMATCHED:Int = 4

Global gSceneArray:Scene[]  = [] 
Global gSceneIndex :Int = 0 

' the scene with coordinates info 
Class Scene 
    'followed fields are static that never changes after Scene is created 
    Field initStacks:CellStack[] = [] 'initial stacks 
    Field initToolCellLines:CellLine[] = [] 'initial cellLines, which provide available tools(operator or operand) that can be used 
    Field matchStacks:CellStack[] = [] 'final stacks to match against initial stacks afte passing the product line
    
    'followed fields are dynamic 
    Field workToolCellLines:CellLine[] = [] ' may be modified by user 
    Field workCellLines:CellLine[] = [] 'cellLines may be modified by user by putting tools on it     
    Field movingStacks:CellStack[] = [] 'after play button is hit, initial stacks begin moving 
    
    Field state:Int = SCENE_STATE_INITIAL
    Field stepsPerFrame: Float = STEPS_PER_FRAME  
    Field stepsSum : Float = 0.0 
    
    'used to handle move of opers from one cellLine to another 
    Field selectedCellLine:CellLine = Null 
    Field selectedCellIndex:Int = -1 
    
    ' after loading scenes from configuration file 
    ' the coordinates info is absent 
    ' this method is to calculate the coordinates 
    Method ArrangeCoordinates() 
    Local col%,row%,i% 
    Local cellStack:CellStack 
    col = 1 
    row = WORK_LINE_ROWS[0] + 1 
    
    For i = 0 Until initStacks.Length 
      cellStack = initStacks[i] 
      cellStack.col = col 
      cellStack.row = row 
      col += 2 
    Next 
    
    col = NUM_COLS - 1 - 1
    For i = 0 Until matchStacks.Length 
      cellStack = matchStacks[i]
      cellStack.col = col 
      cellStack.row = row  
      col -= 2  
    Next 
    
    Local cellLine:CellLine 
    col = 1 
    For i=0 Until initToolCellLines.Length 
      cellLine = initToolCellLines[i] 
      cellLine.row = 1
      cellLine.col = col 
      col += cellLine.items.Length + 1 
      cellLine.RegisterCommands
    Next
    
    Local j% = 0 
    
    Print "workCellLines.Length " + workCellLines.Length  
    For i=0 Until workCellLines.Length 
      cellLine = workCellLines[i] 
      row = WORK_LINE_ROWS[j] 
      col = NUM_COLS / 2 - cellLine.items.Length / 2 
      Print "row " + row 
      Print "col "+col 
      cellLine.col = col 
      cellLine.row = row 
      cellLine.RegisterCommands
      j += 1 
      If j >=2 Then Exit 'exit means same thing as break in C, at present only support 2 work lines 
    Next 
    
    Reset
    End 
    
    'overwrite user's operations 
    Method Reset()
      
        self.movingStacks=CloneCellStackArray(self.initStacks)
        self.workToolCellLines=CloneCellLineArray(self.initToolCellLines) 
        NullCellLines(Self.workCellLines)
        
        
        'for debug 
        Local i%
        For i=0 Until Self.workCellLines.Length
          
        Next
    End 
    
    'move movingStacks 
    Method Move()
        If state <> SCENE_STATE_FORWARD_PLAY 
            Return 
        End 
        Local left:Int 
        Local right:Int 
        Local numMached:Int = 0 
        
        For left = 0 Until movingStacks.Length     
            Local op:Oper
            Local newOp :Oper 
            Local v1:Int 
            Local v2:Int 
            Local v: Int 
            op=GetCloseCellOper(movingStacks[left], workCellLines)
            If op<>Null Then 
                If op.kind = OPERATOR Then
                    If movingStacks[left].Length < 2 Then 
                        state = SCENE_STATE_NOTMATCHED
                        Return 
                    End 
                    v2 = movingStacks[left].Pop().value 
                    v1 = movingStacks[left].Pop().value 
                    Select op.value 
                        Case OP_ADD
                            v = v1 + v2 
                            
                        Case OP_SUB
                            v = v1 - v2 
                        Case OP_MUL
                            v = v1 * v2 
                        Case OP_DIV
                            If v2 = 0 Then 
                                state = SCENE_STATE_NOTMATCHED
                                Return 
                            End 
                            v = v1 / v2 
                        Case OP_MOD
                            If v2 = 0 Then 
                                state = SCENE_STATE_NOTMATCHED
                                Return 
                            End
                            v = v1 Mod v2 
                        Default 
                            'do nothing' 
                    End 
                    newOp = NewOper(OPERAND,v)
                    movingStacks[left].Push(newOp) 
                Else 
                    movingStacks[left].Push(op)
                End 
                
                 
            End 
                                
            right = FindSamePositionStack(matchStacks,movingStacks[left])
            If right<0 Then 
                If movingStacks[left].col < MaxCol(matchStacks) 
                    movingStacks[left].col += 1 
                    Continue 
                Else 
                    state = SCENE_STATE_NOTMATCHED    'it is an error case, shall not happen
                    Print "SCENE_STATE_NOTMATCHED error happened" 
                    Return 
                End 
            End 
            If matchStacks[right].Equal(movingStacks[left]) Then 
                numMached += 1 
                Continue
            Else 
                state = SCENE_STATE_NOTMATCHED    
                Return 
            End                         
        Next 
        If numMached >= movingStacks.Length
            state = SCENE_STATE_MATCHED
        End 
    End 
    
    Method DrawCellStackArray(ary:CellStack[]) 
        Local i:Int 
        Local cellStack:CellStack 
        
        For i=0 Until ary.Length 
            cellStack=ary[i] 
            cellStack.Draw()     
        Next
    End 
    
    Method DrawCellLineArray(ary:CellLine[]) 
        Local i:Int  
        Local cellLine:CellLine
        
        For i=0 Until ary.Length
            cellLine=ary[i] 
            
            If cellLine <> Null cellLine.Draw()             
        Next 
    End 
    
    Method DrawEndingState()
        If state <> SCENE_STATE_NOTMATCHED And state <> SCENE_STATE_MATCHED Then 
            Return 
        End 
        
        Local i:Int,j:Int  
        Local x:Int, y:Int 
        Local cellStack:CellStack 
        Local theColor:Color 
        Select state
            Case SCENE_STATE_NOTMATCHED
                theColor = gCellNotMatchedColor 
            Case SCENE_STATE_MATCHED
                theColor = gCellMatchedColor
        End
                
        For i=0 Until matchStacks.Length 
            cellStack=matchStacks[i]
            x=cellStack.col
            y=cellStack.row 
            For j=0 Until cellStack.Length
                DrawCellBorder(x,y+j,theColor) 
            Next         
        Next  
    End 
    
    Method DrawSceneIndex()
        Local cell:Cell
        cell = New Cell(NUM_COLS-1,0,OPERAND,gSceneIndex) 
        cell.Draw() 
    End 
    
    Method Draw()
        Local col:Int
        Local row:Int 
        Select state
            Case SCENE_STATE_INITIAL
                DrawCellStackArray( initStacks )                  
            Default 
                DrawCellStackArray( movingStacks )    
        End 
        DrawCellStackArray( matchStacks ) 'TODO change color if state is in matched or unmatched state(green or red) 
        DrawCellLineArray ( workCellLines ) 
        DrawCellLineArray(workToolCellLines) 
        DrawEndingState()     
        
        If selectedCellIndex >= 0 Then 
            col = selectedCellLine.col
            row = selectedCellLine.row 
            DrawCellBorder(col+selectedCellIndex,row,gCellSelectedColor) 
                
        End 
        
        DrawSceneIndex() 
    End 
End 

' an example scene generated by hand instead of config   
Function Scene0:Scene()
    Local scene := New Scene
    
    scene.initStacks = scene.initStacks.Resize(1)
    scene.workCellLines = scene.workCellLines.Resize(1) 
    NullArray(scene.workCellLines) 
    scene.matchStacks = scene.matchStacks.Resize(1) 
    scene.initToolCellLines = scene.initToolCellLines.Resize(1)  
    
    Local row:Int = WORK_LINE_ROWS[0] + 1
    Local col:Int = 3 
    Local cellStack:CellStack 
    
    cellStack = New CellStack(col,row) 
    cellStack.Push(NewOper(OPERAND,1)) 
    cellStack.Push(NewOper(OPERAND,2)) 
    scene.initStacks[0] = cellStack
    
    Local cellLine:CellLine 
    cellLine = New CellLine(10,WORK_LINE_ROWS[0],2) 
    scene.workCellLines[0]=cellLine 
    
    cellLine = New CellLine(1,TOOL_LINE_ROW,1) 
    cellLine.Set(0,NewOper(OPERATOR,OP_ADD) ) 
    cellLine.SetNum(0,1) 
    scene.initToolCellLines[0]=cellLine
    
    scene.matchStacks.Resize(1) 
    
    cellStack = New CellStack(col+13,row) 
    cellStack.Push(NewOper(OPERAND,3))  
    scene.matchStacks[0] = cellStack
    
    scene.movingStacks=CloneCellStackArray(scene.initStacks)
    scene.workToolCellLines=CloneCellLineArray(scene.initToolCellLines) 
    
    Return scene 
End 

Function LoadStack:CellStack(ary:JsonArray) 
  Local cellStack:CellStack
  cellStack = New CellStack
  Local i%, value% 
  Local oper:Oper 
  For i=0 Until ary.Length 
    value = ary.GetInt(i)
    oper = NewOper(OPERAND,value)
    cellStack.Push(oper) 
  Next
  Return cellStack  
End 

Function LoadStackArray:CellStack[](jsonObject:JsonObject, key:String)
  Local strMap:StringMap<JsonValue>
  Local jsonArray:JsonArray 
  Local cellStack:CellStack[]=[]
  Local i : Int 
  strMap=jsonObject.GetData
  jsonArray = JsonArray(strMap.Get(key)) 
  cellStack=cellStack.Resize(jsonArray.Length) 
  For i=0 Until jsonArray.Length 
    cellStack[i] = LoadStack(JsonArray(jsonArray.Get(i))) ' array of array 
  Next 
  Return cellStack 
End 

Function LoadInitToolCellLine:CellLine(ary:JsonArray)
  Local cellLine:CellLine
  cellLine = New CellLine(-1,-1,ary.Length) ' the coordinates will be calculated later 
  Local i%, kind%,value%,num% 
  Local oper:Oper 
  Local jsonObj:JsonObject 
  Local strMap:StringMap<JsonValue>
  
  For i=0 Until ary.Length 
    jsonObj = JsonObject(ary.Get(i)) 
    strMap = jsonObj.GetData
    kind = strMap.Get("kind").IntValue
    value = strMap.Get("value").IntValue
    num = strMap.Get("num").IntValue
    oper = NewOper(kind,value)
    cellLine.Set(i,oper) 
    cellLine.SetNum(i,num) 
  Next
  Return cellLine 
End 



Function LoadInitToolCellLines:CellLine[](jsonObject:JsonObject)
  Local strMap:StringMap<JsonValue>
  Local jsonArray:JsonArray 
  Local cellLines:CellLine[]=[]
  Local i : Int 
  strMap=jsonObject.GetData
  jsonArray = JsonArray(strMap.Get("initToolCellLines")) 
  cellLines=cellLines.Resize(jsonArray.Length) 
  For i=0 Until jsonArray.Length 
    cellLines[i] = LoadInitToolCellLine(JsonArray(jsonArray.Get(i))) ' array of array 
  Next 
  Return cellLines 
End 

Function LoadWorkCellLines:CellLine[](jsonObject:JsonObject) 
  Local strMap:StringMap<JsonValue>
  Local jsonArray:JsonArray 
  Local cellLines:CellLine[]=[]
  Local i : Int 
  strMap=jsonObject.GetData
  jsonArray = JsonArray(strMap.Get("workCellLines")) 'one dimention array 
  cellLines=cellLines.Resize(jsonArray.Length) 
  For i=0 Until jsonArray.Length 
    cellLines[i] = New CellLine(-1,-1, jsonArray.Get(i).IntValue) 'only specify the size of the cell line, the coordinates are calculated later 
  Next 
  Return cellLines 
End 

'load scenes from config file 
Function LoadScenes:Scene[] () 
    Local strScenes:String 
    Local jsonParser:JsonParser 
    Local jsonScenesArray : JsonArray 
    Local jsonSceneObject : JsonObject 
    Local sceneArray:Scene[] = []
    Local scene:Scene 
    Local i :Int 
    
    
    strScenes = LoadString ("scenes.json") 
    
    jsonParser = New JsonParser(strScenes) 
    jsonScenesArray =  JsonArray( jsonParser.ParseValue ) 
    
    Print "scene Number " + jsonScenesArray.Length
    sceneArray=sceneArray.Resize(jsonScenesArray.Length)
    For i = 0 Until jsonScenesArray.Length
    scene = New Scene
    sceneArray[i] = scene  
    
    jsonSceneObject = JsonObject(jsonScenesArray.Get(i))  
    scene.initStacks = LoadStackArray(jsonSceneObject,"initStacks")
    scene.matchStacks = LoadStackArray(jsonSceneObject,"matchStacks")
    scene.initToolCellLines = LoadInitToolCellLines(jsonSceneObject) 
    scene.workCellLines = LoadWorkCellLines(jsonSceneObject) 
    End 
    
    For i = 0 Until sceneArray.Length 
    scene = sceneArray[i]
    scene.ArrangeCoordinates
    Next 
    
    Return sceneArray     
End 