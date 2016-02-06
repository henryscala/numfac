Import mojo.app
Import mojo.graphics
Import mojo.input 
Import list 


Import util 
Import oper 
Import config 
Import cell 
Import color 
Import scene 
Import command 






Class MyApp Extends App
    Field cmdList:List<Cell> = New List<Cell>
    
    
    
    
    
    Function DrawGrid()
        SetColor gGridLineColor.red, gGridLineColor.green, gGridLineColor.blue 
        Local row,col,x,y:Int 
        
        For row = 0 To NUM_ROWS
                y = TOP_MARGIN+row*UNIT_HEIGHT
                DrawLine(LEFT_MARGIN, y, LEFT_MARGIN + NUM_COLS*UNIT_WIDTH, y ) 
        Next 
        
        For col = 0 To NUM_COLS
                x = LEFT_MARGIN+col*UNIT_WIDTH 
                DrawLine(x, TOP_MARGIN, x,TOP_MARGIN + NUM_ROWS*UNIT_HEIGHT) 
        Next 
        
    End 
    
    Method InitScenes()
        sceneArray=sceneArray.Resize(1) 
        sceneArray[0] = Scene0()
    End 
    
    Method InitCommands() 
        Local cell : Cell 
        cell = New Cell(6,0,COMMAND,CMD_PREV_SCENE)
        RegisterCommand(6,0,CMD_PREV_SCENE)
        cmdList.AddLast(cell)
        cell = New Cell(7,0,COMMAND,CMD_SLOW)
        RegisterCommand(7,0,CMD_SLOW)
        cmdList.AddLast(cell)
        cell = New Cell(8,0,COMMAND,CMD_PLAY)
        RegisterCommand(8,0,CMD_PLAY)
        cmdList.AddLast(cell)
        cell = New Cell(9,0,COMMAND,CMD_PAUSE)
        RegisterCommand(9,0,CMD_PAUSE)
        cmdList.AddLast(cell)
        cell = New Cell(10,0,COMMAND,CMD_FAST)
        RegisterCommand(10,0,CMD_FAST)
        cmdList.AddLast(cell)
        cell = New Cell(11,0,COMMAND,CMD_REFRESH)
        RegisterCommand(11,0,CMD_REFRESH)
        cmdList.AddLast(cell)
        cell = New Cell(12,0,COMMAND,CMD_NEXT_SCENE)
        RegisterCommand(12,0,CMD_NEXT_SCENE)
        cmdList.AddLast(cell)
    End 
    'init some game params 
    Method Init()
        InitCommands()
        'InitScenes() 
        
        LEFT_MARGIN = (STAGE_WIDTH - NUM_COLS*UNIT_WIDTH)/2
        TOP_MARGIN = (STAGE_HEIGHT - NUM_ROWS*UNIT_HEIGHT) /2 
        
        
        
    End 

    Method OnCreate()
        gSceneArray = LoadScenes() 
        Init() 
        SetUpdateRate FRAME_PER_SECOND 
    End
    
    Method OnUpdate()
        HandleCommands(gSceneArray[gSceneIndex]) 
        
        gSceneArray[gSceneIndex].stepsSum += gSceneArray[gSceneIndex].stepsPerFrame 
        
        While gSceneArray[gSceneIndex].stepsSum >= 1.0
            gSceneArray[gSceneIndex].Move()     
            gSceneArray[gSceneIndex].stepsSum -= 1.0 
        Wend     
        
        
    End 
    
    Method OnRender()
        Cls gBackGroundColor.red,gBackGroundColor.green,gBackGroundColor.blue
        DrawGrid() 
        
        
        DrawCellList(cmdList) 
        
        
        DrawCellStatus() 
        
        gSceneArray[gSceneIndex].Draw() 
    End
    
End

Function Main()
    New MyApp
End





Function DrawCellStatus()
    Local vector:Vector

    vector = PosToCellLocation(MouseX,MouseY) 
    
    If MouseDown (MOUSE_LEFT) <> 0 Then
        DrawCellBorder(vector.x,vector.y,gCellClickColor)
         
    Else 
        DrawCellBorder(vector.x,vector.y,gCellFocusColor)
        
    End If 
End 

Function DrawCellStackList(list:List<CellStack>) 
    Local c:CellStack 
    For c=Eachin list
        c.Draw() 
    Next  
End 

Function DrawCellList(list:List<Cell> )
    Local cell:Cell 
    For cell=Eachin list
        cell.Draw() 
    Next  
End 