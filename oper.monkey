Const OPERATOR:Int = 1
Const OPERAND:Int = 2 
Const COMMAND:Int = 3 

Const OP_ADD = 1
Const OP_SUB = 2
Const OP_MUL = 3
Const OP_DIV = 4
Const OP_MOD = 5 
Const OP_EMPTY = 6 'to show an empty cell


Const CMD_PAUSE:Int = 1
Const CMD_FAST:Int = 2
Const CMD_SLOW:Int = 3
Const CMD_REFRESH:Int = 4
Const CMD_PLAY:Int = 5
Const CMD_NEXT_SCENE:Int = 6
Const CMD_PREV_SCENE:Int = 7 

Const CMD_CELL_LINE_CLICK:Int = 101




Class Oper
	Field kind: Int 
	Field value: Int 
	Method Equal:Bool(o:Oper)
		If kind = o.kind And value = o.value Then Return True 
		Return False 
	End 
	Method ToString:String()
		If kind = OPERATOR then
			Select value 
				Case OP_ADD
					Return "+" 
				Case OP_SUB
					Return "-" 
				Case OP_MUL
					Return "*" 
				Case OP_DIV
					Return "/" 
				Case OP_MOD
					Return "%" 
				Case OP_EMPTY
					Return " " 	
				Default 
					Return "not implemented" 				
			End 
		ElseIf kind = OPERAND then
			Return String(value)
		Elseif kind = COMMAND Then 
			Select value
				Case CMD_PLAY
					Return ">"
				Case CMD_PAUSE
					Return "||"
				Case CMD_FAST
					Return ">>"
				Case CMD_SLOW
					Return "<<"
				Case CMD_REFRESH
					Return "~~"
				Case CMD_NEXT_SCENE	
					Return "v" 
				Case CMD_PREV_SCENE
					Return "^" 	
			End 		
		End If 
	End 
End 

Class Operator Extends Oper 
	
	Method New(v)
		value = v 
		kind = OPERATOR 
	End 
End 

Class Operand Extends Oper
	Method New(v)
		value = v 
		kind = OPERAND
	End 
	
End 

Class Command Extends Oper
	Method New(v)
		value = v 
		kind = COMMAND
	End 
	
End 

Function NewOper:Oper(kind,value:Int )
	Local o:Oper
	If kind = OPERATOR Then 
		o = New Operator(value)
	Elseif kind = OPERAND
		o = New Operand(value)
	Else
		o = New Command(value) 	
	End If 	
	Return o 
End 

Global gEmptyOper:Oper = NewOper(OPERATOR,OP_EMPTY) 