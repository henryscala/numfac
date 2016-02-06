
Import scene 
Import util  
Import mojo.input 

Global gAllCommands:IntMap<Int> = New IntMap<Int> 
Function RegisterCommand(col:Int, row:Int, cmd:Int)
	Local key:Int 
	key = (col Shl 16) | row 
	gAllCommands.Set(key,cmd) 
End 

Function GetCommand:Int (col:Int, row:Int)
	Local key:Int 
	key = (col Shl 16) | row   
	If Not gAllCommands.Contains(key) Then 
		Return -1 
	End If 
	Return gAllCommands.Get(key)
End 

Function HandleCommands(scene:Scene) 
	Local vector:Vector

	vector = PosToCellLocation(MouseX,MouseY) 
	
	If MouseDown (MOUSE_LEFT) = 0 Then
		Return 
	End If 
	
	Local cmd:Int 
	cmd = GetCommand(vector.x,vector.y) 
	If cmd <= 0 Then 
		'cancel the selection 
		scene.selectedCellLine = Null 
		scene.selectedCellIndex = -1 
		Return 
	End If 
	
	Select cmd
		Case CMD_PLAY
			scene.state = SCENE_STATE_FORWARD_PLAY  	
			scene.stepsSum = 0 		
		Case CMD_PAUSE
			scene.state = SCENE_STATE_PAUSE			
		Case CMD_FAST
			scene.stepsPerFrame *= 2.0 		
		Case CMD_SLOW
			scene.stepsPerFrame /= 2.0  
		Case CMD_REFRESH
			scene.state = SCENE_STATE_INITIAL
			scene.movingStacks=CloneCellStackArray(scene.initStacks)
		Case CMD_PREV_SCENE
            If MouseHit(MOUSE_LEFT)  > 1 Then Return
			gSceneIndex -= 1
			If gSceneIndex < 0 Then gSceneIndex = gSceneArray.Length -1 
		Case CMD_NEXT_SCENE	
            If MouseHit(MOUSE_LEFT) Then Return 
            
			gSceneIndex += 1 
			If gSceneIndex >= gSceneArray.Length Then gSceneIndex = 0 
		
		Case CMD_CELL_LINE_CLICK
			Local cellLine:CellLine 	
			Local index:Int	
			Local srcNum: Int 
			Local dstNum: Int 
			Local srcOper: Oper 
			Local dstOper: Oper 
			cellLine=GetCellLine(vector.x,vector.y,scene)	
			index = vector.x - cellLine.col  
			
			'no cellLine selected 
			If scene.selectedCellIndex<0 Then 
				dstNum = cellLine.GetNum(index)
				If dstNum > 0 Then
					scene.selectedCellLine = cellLine
					scene.selectedCellIndex = index 
				Else 
					scene.selectedCellLine = Null 
					scene.selectedCellIndex = -1 	
				End 
			Else 
				If scene.selectedCellLine = cellLine Then 
					'cancel the selection 
					If scene.selectedCellIndex = index Then 
						'comments out these two lines to make the cell be selected easily, because monkey-x uses a query model on input
						'scene.selectedCellLine = Null 
						'scene.selectedCellIndex = - 1
					Else 
						dstNum = cellLine.GetNum(index)
						If dstNum > 0 Then 'dest cell is occupied, so we make new selection
							scene.selectedCellIndex = index 
						Else 
							If IsWorkCellLine(cellLine) Then 'move within same cell line 
								MoveOper(scene,cellLine,index)
							Else 
								'cancel selection 
								scene.selectedCellLine = Null 
								scene.selectedCellIndex = - 1
							End 	
						End 	
					End 
				Else 
					dstNum = cellLine.GetNum(index)
					If dstNum > 0 Then 
						'there is already a Oper on destination, so make new selection 
						'work cell line does not allow multiple oper on a cell 
						If IsWorkCellLine(cellLine) Then 
							scene.selectedCellIndex = index 
							scene.selectedCellLine = cellLine 
						Else 
							srcOper = scene.selectedCellLine.Get(scene.selectedCellIndex)
							dstOper = cellLine.Get(index)
							If srcOper.Equal(dstOper) Then 'moving of oper happens 
								MoveOper(scene,cellLine,index)
							Else 'make new selection 
								scene.selectedCellIndex = index 
								scene.selectedCellLine = cellLine 
							End 		
						End 
					Else ' move from source selection to dest 
						MoveOper(scene,cellLine,index)
					End 		
				End 
			End 
			
	End 
End 

'move from selectedCellIndex in scene to new cellLine and index 
Function MoveOper(scene:Scene, cellLine:CellLine, index:Int)
	Local srcNum: Int 
	Local dstNum: Int 
	Local srcOper: Oper 
	
	
	srcOper = scene.selectedCellLine.Get(scene.selectedCellIndex)
	srcNum = scene.selectedCellLine.GetNum(scene.selectedCellIndex) 
	srcNum -= 1
	scene.selectedCellLine.SetNum(scene.selectedCellIndex,srcNum) 
	
	dstNum = cellLine.GetNum(index)
	dstNum += 1
	cellLine.Set(index,srcOper) 
	cellLine.SetNum(index,dstNum) 
	
	If IsWorkCellLine (scene.selectedCellLine ) Then
		If srcNum <= 0 Then 'remove the cell,make it empty 
			scene.selectedCellLine.Set(scene.selectedCellIndex,Null )
		End 
	End 
	'cancel the selection 
	scene.selectedCellLine = Null 
	scene.selectedCellIndex = -1 
End 

