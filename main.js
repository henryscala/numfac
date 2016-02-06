
//${CONFIG_BEGIN}
CFG_BINARY_FILES="*.bin|*.dat";
CFG_BRL_GAMETARGET_IMPLEMENTED="1";
CFG_CD="";
CFG_CONFIG="release";
CFG_HOST="winnt";
CFG_HTML5_WEBAUDIO_ENABLED="1";
CFG_IMAGE_FILES="*.png|*.jpg";
CFG_LANG="js";
CFG_MODPATH="";
CFG_MOJO_AUTO_SUSPEND_ENABLED="1";
CFG_MOJO_DRIVER_IMPLEMENTED="1";
CFG_MUSIC_FILES="*.wav|*.ogg|*.mp3|*.m4a";
CFG_OPENGL_GLES20_ENABLED="0";
CFG_SAFEMODE="0";
CFG_SOUND_FILES="*.wav|*.ogg|*.mp3|*.m4a";
CFG_TARGET="html5";
CFG_TEXT_FILES="*.txt|*.xml|*.json";
//${CONFIG_END}

//${METADATA_BEGIN}
var META_DATA="[mojo_font.png];type=image/png;width=864;height=13;\n";
//${METADATA_END}

//${TRANSCODE_BEGIN}

// Javascript Monkey runtime.
//
// Placed into the public domain 24/02/2011.
// No warranty implied; use at your own risk.

//***** JavaScript Runtime *****

var D2R=0.017453292519943295;
var R2D=57.29577951308232;

var err_info="";
var err_stack=[];

var dbg_index=0;

function push_err(){
	err_stack.push( err_info );
}

function pop_err(){
	err_info=err_stack.pop();
}

function stackTrace(){
	if( !err_info.length ) return "";
	var str=err_info+"\n";
	for( var i=err_stack.length-1;i>0;--i ){
		str+=err_stack[i]+"\n";
	}
	return str;
}

function print( str ){
	var cons=document.getElementById( "GameConsole" );
	if( cons ){
		cons.value+=str+"\n";
		cons.scrollTop=cons.scrollHeight-cons.clientHeight;
	}else if( window.console!=undefined ){
		window.console.log( str );
	}
	return 0;
}

function alertError( err ){
	if( typeof(err)=="string" && err=="" ) return;
	alert( "Monkey Runtime Error : "+err.toString()+"\n\n"+stackTrace() );
}

function error( err ){
	throw err;
}

function debugLog( str ){
	if( window.console!=undefined ) window.console.log( str );
}

function debugStop(){
	debugger;	//	error( "STOP" );
}

function dbg_object( obj ){
	if( obj ) return obj;
	error( "Null object access" );
}

function dbg_charCodeAt( str,index ){
	if( index<0 || index>=str.length ) error( "Character index out of range" );
	return str.charCodeAt( index );
}

function dbg_array( arr,index ){
	if( index<0 || index>=arr.length ) error( "Array index out of range" );
	dbg_index=index;
	return arr;
}

function new_bool_array( len ){
	var arr=Array( len );
	for( var i=0;i<len;++i ) arr[i]=false;
	return arr;
}

function new_number_array( len ){
	var arr=Array( len );
	for( var i=0;i<len;++i ) arr[i]=0;
	return arr;
}

function new_string_array( len ){
	var arr=Array( len );
	for( var i=0;i<len;++i ) arr[i]='';
	return arr;
}

function new_array_array( len ){
	var arr=Array( len );
	for( var i=0;i<len;++i ) arr[i]=[];
	return arr;
}

function new_object_array( len ){
	var arr=Array( len );
	for( var i=0;i<len;++i ) arr[i]=null;
	return arr;
}

function resize_bool_array( arr,len ){
	var i=arr.length;
	arr=arr.slice(0,len);
	if( len<=i ) return arr;
	arr.length=len;
	while( i<len ) arr[i++]=false;
	return arr;
}

function resize_number_array( arr,len ){
	var i=arr.length;
	arr=arr.slice(0,len);
	if( len<=i ) return arr;
	arr.length=len;
	while( i<len ) arr[i++]=0;
	return arr;
}

function resize_string_array( arr,len ){
	var i=arr.length;
	arr=arr.slice(0,len);
	if( len<=i ) return arr;
	arr.length=len;
	while( i<len ) arr[i++]="";
	return arr;
}

function resize_array_array( arr,len ){
	var i=arr.length;
	arr=arr.slice(0,len);
	if( len<=i ) return arr;
	arr.length=len;
	while( i<len ) arr[i++]=[];
	return arr;
}

function resize_object_array( arr,len ){
	var i=arr.length;
	arr=arr.slice(0,len);
	if( len<=i ) return arr;
	arr.length=len;
	while( i<len ) arr[i++]=null;
	return arr;
}

function string_compare( lhs,rhs ){
	var n=Math.min( lhs.length,rhs.length ),i,t;
	for( i=0;i<n;++i ){
		t=lhs.charCodeAt(i)-rhs.charCodeAt(i);
		if( t ) return t;
	}
	return lhs.length-rhs.length;
}

function string_replace( str,find,rep ){	//no unregex replace all?!?
	var i=0;
	for(;;){
		i=str.indexOf( find,i );
		if( i==-1 ) return str;
		str=str.substring( 0,i )+rep+str.substring( i+find.length );
		i+=rep.length;
	}
}

function string_trim( str ){
	var i=0,i2=str.length;
	while( i<i2 && str.charCodeAt(i)<=32 ) i+=1;
	while( i2>i && str.charCodeAt(i2-1)<=32 ) i2-=1;
	return str.slice( i,i2 );
}

function string_startswith( str,substr ){
	return substr.length<=str.length && str.slice(0,substr.length)==substr;
}

function string_endswith( str,substr ){
	return substr.length<=str.length && str.slice(str.length-substr.length,str.length)==substr;
}

function string_tochars( str ){
	var arr=new Array( str.length );
	for( var i=0;i<str.length;++i ) arr[i]=str.charCodeAt(i);
	return arr;
}

function string_fromchars( chars ){
	var str="",i;
	for( i=0;i<chars.length;++i ){
		str+=String.fromCharCode( chars[i] );
	}
	return str;
}

function object_downcast( obj,clas ){
	if( obj instanceof clas ) return obj;
	return null;
}

function object_implements( obj,iface ){
	if( obj && obj.implments && obj.implments[iface] ) return obj;
	return null;
}

function extend_class( clas ){
	var tmp=function(){};
	tmp.prototype=clas.prototype;
	return new tmp;
}

function ThrowableObject(){
}

ThrowableObject.prototype.toString=function(){ 
	return "Uncaught Monkey Exception"; 
}


function BBGameEvent(){}
BBGameEvent.KeyDown=1;
BBGameEvent.KeyUp=2;
BBGameEvent.KeyChar=3;
BBGameEvent.MouseDown=4;
BBGameEvent.MouseUp=5;
BBGameEvent.MouseMove=6;
BBGameEvent.TouchDown=7;
BBGameEvent.TouchUp=8;
BBGameEvent.TouchMove=9;
BBGameEvent.MotionAccel=10;

function BBGameDelegate(){}
BBGameDelegate.prototype.StartGame=function(){}
BBGameDelegate.prototype.SuspendGame=function(){}
BBGameDelegate.prototype.ResumeGame=function(){}
BBGameDelegate.prototype.UpdateGame=function(){}
BBGameDelegate.prototype.RenderGame=function(){}
BBGameDelegate.prototype.KeyEvent=function( ev,data ){}
BBGameDelegate.prototype.MouseEvent=function( ev,data,x,y ){}
BBGameDelegate.prototype.TouchEvent=function( ev,data,x,y ){}
BBGameDelegate.prototype.MotionEvent=function( ev,data,x,y,z ){}
BBGameDelegate.prototype.DiscardGraphics=function(){}

function BBDisplayMode( width,height ){
	this.width=width;
	this.height=height;
}

function BBGame(){
	BBGame._game=this;
	this._delegate=null;
	this._keyboardEnabled=false;
	this._updateRate=0;
	this._started=false;
	this._suspended=false;
	this._debugExs=(CFG_CONFIG=="debug");
	this._startms=Date.now();
}

BBGame.Game=function(){
	return BBGame._game;
}

BBGame.prototype.SetDelegate=function( delegate ){
	this._delegate=delegate;
}

BBGame.prototype.Delegate=function(){
	return this._delegate;
}

BBGame.prototype.SetUpdateRate=function( updateRate ){
	this._updateRate=updateRate;
}

BBGame.prototype.SetKeyboardEnabled=function( keyboardEnabled ){
	this._keyboardEnabled=keyboardEnabled;
}

BBGame.prototype.Started=function(){
	return this._started;
}

BBGame.prototype.Suspended=function(){
	return this._suspended;
}

BBGame.prototype.Millisecs=function(){
	return Date.now()-this._startms;
}

BBGame.prototype.GetDate=function( date ){
	var n=date.length;
	if( n>0 ){
		var t=new Date();
		date[0]=t.getFullYear();
		if( n>1 ){
			date[1]=t.getMonth()+1;
			if( n>2 ){
				date[2]=t.getDate();
				if( n>3 ){
					date[3]=t.getHours();
					if( n>4 ){
						date[4]=t.getMinutes();
						if( n>5 ){
							date[5]=t.getSeconds();
							if( n>6 ){
								date[6]=t.getMilliseconds();
							}
						}
					}
				}
			}
		}
	}
}

BBGame.prototype.SaveState=function( state ){
	localStorage.setItem( "monkeystate@"+document.URL,state );	//key can't start with dot in Chrome!
	return 1;
}

BBGame.prototype.LoadState=function(){
	var state=localStorage.getItem( "monkeystate@"+document.URL );
	if( state ) return state;
	return "";
}

BBGame.prototype.LoadString=function( path ){

	var xhr=new XMLHttpRequest();
	xhr.open( "GET",this.PathToUrl( path ),false );
	
	xhr.send( null );
	
	if( xhr.status==200 || xhr.status==0 ) return xhr.responseText;
	
	return "";
}

BBGame.prototype.PollJoystick=function( port,joyx,joyy,joyz,buttons ){
	return false;
}

BBGame.prototype.OpenUrl=function( url ){
	window.location=url;
}

BBGame.prototype.SetMouseVisible=function( visible ){
	if( visible ){
		this._canvas.style.cursor='default';	
	}else{
		this._canvas.style.cursor="url('data:image/cur;base64,AAACAAEAICAAAAAAAACoEAAAFgAAACgAAAAgAAAAQAAAAAEAIAAAAAAAgBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA55ZXBgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOeWVxAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADnllcGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9////////////////////+////////f/////////8%3D'), auto";
	}
}

BBGame.prototype.GetDeviceWidth=function(){
	return 0;
}

BBGame.prototype.GetDeviceHeight=function(){
	return 0;
}

BBGame.prototype.SetDeviceWindow=function( width,height,flags ){
}

BBGame.prototype.GetDisplayModes=function(){
	return new Array();
}

BBGame.prototype.GetDesktopMode=function(){
	return null;
}

BBGame.prototype.SetSwapInterval=function( interval ){
}

BBGame.prototype.PathToFilePath=function( path ){
	return "";
}

//***** js Game *****

BBGame.prototype.PathToUrl=function( path ){
	return path;
}

BBGame.prototype.LoadData=function( path ){

	var xhr=new XMLHttpRequest();
	xhr.open( "GET",this.PathToUrl( path ),false );

	if( xhr.overrideMimeType ) xhr.overrideMimeType( "text/plain; charset=x-user-defined" );

	xhr.send( null );
	if( xhr.status!=200 && xhr.status!=0 ) return null;

	var r=xhr.responseText;
	var buf=new ArrayBuffer( r.length );
	var bytes=new Int8Array( buf );
	for( var i=0;i<r.length;++i ){
		bytes[i]=r.charCodeAt( i );
	}
	return buf;
}

//***** INTERNAL ******

BBGame.prototype.Die=function( ex ){

	this._delegate=new BBGameDelegate();
	
	if( !ex.toString() ){
		return;
	}
	
	if( this._debugExs ){
		print( "Monkey Runtime Error : "+ex.toString() );
		print( stackTrace() );
	}
	
	throw ex;
}

BBGame.prototype.StartGame=function(){

	if( this._started ) return;
	this._started=true;
	
	if( this._debugExs ){
		try{
			this._delegate.StartGame();
		}catch( ex ){
			this.Die( ex );
		}
	}else{
		this._delegate.StartGame();
	}
}

BBGame.prototype.SuspendGame=function(){

	if( !this._started || this._suspended ) return;
	this._suspended=true;
	
	if( this._debugExs ){
		try{
			this._delegate.SuspendGame();
		}catch( ex ){
			this.Die( ex );
		}
	}else{
		this._delegate.SuspendGame();
	}
}

BBGame.prototype.ResumeGame=function(){

	if( !this._started || !this._suspended ) return;
	this._suspended=false;
	
	if( this._debugExs ){
		try{
			this._delegate.ResumeGame();
		}catch( ex ){
			this.Die( ex );
		}
	}else{
		this._delegate.ResumeGame();
	}
}

BBGame.prototype.UpdateGame=function(){

	if( !this._started || this._suspended ) return;

	if( this._debugExs ){
		try{
			this._delegate.UpdateGame();
		}catch( ex ){
			this.Die( ex );
		}	
	}else{
		this._delegate.UpdateGame();
	}
}

BBGame.prototype.RenderGame=function(){

	if( !this._started ) return;
	
	if( this._debugExs ){
		try{
			this._delegate.RenderGame();
		}catch( ex ){
			this.Die( ex );
		}	
	}else{
		this._delegate.RenderGame();
	}
}

BBGame.prototype.KeyEvent=function( ev,data ){

	if( !this._started ) return;
	
	if( this._debugExs ){
		try{
			this._delegate.KeyEvent( ev,data );
		}catch( ex ){
			this.Die( ex );
		}
	}else{
		this._delegate.KeyEvent( ev,data );
	}
}

BBGame.prototype.MouseEvent=function( ev,data,x,y ){

	if( !this._started ) return;
	
	if( this._debugExs ){
		try{
			this._delegate.MouseEvent( ev,data,x,y );
		}catch( ex ){
			this.Die( ex );
		}
	}else{
		this._delegate.MouseEvent( ev,data,x,y );
	}
}

BBGame.prototype.TouchEvent=function( ev,data,x,y ){

	if( !this._started ) return;
	
	if( this._debugExs ){
		try{
			this._delegate.TouchEvent( ev,data,x,y );
		}catch( ex ){
			this.Die( ex );
		}
	}else{
		this._delegate.TouchEvent( ev,data,x,y );
	}
}

BBGame.prototype.MotionEvent=function( ev,data,x,y,z ){

	if( !this._started ) return;
	
	if( this._debugExs ){
		try{
			this._delegate.MotionEvent( ev,data,x,y,z );
		}catch( ex ){
			this.Die( ex );
		}
	}else{
		this._delegate.MotionEvent( ev,data,x,y,z );
	}
}

BBGame.prototype.DiscardGraphics=function(){

	if( !this._started ) return;
	
	if( this._debugExs ){
		try{
			this._delegate.DiscardGraphics();
		}catch( ex ){
			this.Die( ex );
		}
	}else{
		this._delegate.DiscardGraphics();
	}
}


var webglGraphicsSeq=1;

function BBHtml5Game( canvas ){

	BBGame.call( this );
	BBHtml5Game._game=this;
	this._canvas=canvas;
	this._loading=0;
	this._timerSeq=0;
	this._gl=null;
	
	if( CFG_OPENGL_GLES20_ENABLED=="1" ){

		//can't get these to fire!
		canvas.addEventListener( "webglcontextlost",function( event ){
			event.preventDefault();
//			print( "WebGL context lost!" );
		},false );

		canvas.addEventListener( "webglcontextrestored",function( event ){
			++webglGraphicsSeq;
//			print( "WebGL context restored!" );
		},false );

		var attrs={ alpha:false };
	
		this._gl=this._canvas.getContext( "webgl",attrs );

		if( !this._gl ) this._gl=this._canvas.getContext( "experimental-webgl",attrs );
		
		if( !this._gl ) this.Die( "Can't create WebGL" );
		
		gl=this._gl;
	}
}

BBHtml5Game.prototype=extend_class( BBGame );

BBHtml5Game.Html5Game=function(){
	return BBHtml5Game._game;
}

BBHtml5Game.prototype.ValidateUpdateTimer=function(){

	++this._timerSeq;
	if( this._suspended ) return;
	
	var game=this;
	var seq=game._timerSeq;
	
	var maxUpdates=4;
	var updateRate=this._updateRate;
	
	if( !updateRate ){

		var reqAnimFrame=(window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame);
	
		if( reqAnimFrame ){
			function animate(){
				if( seq!=game._timerSeq ) return;
	
				game.UpdateGame();
				if( seq!=game._timerSeq ) return;
	
				reqAnimFrame( animate );
				game.RenderGame();
			}
			reqAnimFrame( animate );
			return;
		}
		
		maxUpdates=1;
		updateRate=60;
	}
	
	var updatePeriod=1000.0/updateRate;
	var nextUpdate=0;

	function timeElapsed(){
		if( seq!=game._timerSeq ) return;
		
		if( !nextUpdate ) nextUpdate=Date.now();
		
		for( var i=0;i<maxUpdates;++i ){
		
			game.UpdateGame();
			if( seq!=game._timerSeq ) return;
			
			nextUpdate+=updatePeriod;
			var delay=nextUpdate-Date.now();
			
			if( delay>0 ){
				setTimeout( timeElapsed,delay );
				game.RenderGame();
				return;
			}
		}
		nextUpdate=0;
		setTimeout( timeElapsed,0 );
		game.RenderGame();
	}

	setTimeout( timeElapsed,0 );
}

//***** BBGame methods *****

BBHtml5Game.prototype.SetUpdateRate=function( updateRate ){

	BBGame.prototype.SetUpdateRate.call( this,updateRate );
	
	this.ValidateUpdateTimer();
}

BBHtml5Game.prototype.GetMetaData=function( path,key ){
	if( path.indexOf( "monkey://data/" )!=0 ) return "";
	path=path.slice(14);

	var i=META_DATA.indexOf( "["+path+"]" );
	if( i==-1 ) return "";
	i+=path.length+2;

	var e=META_DATA.indexOf( "\n",i );
	if( e==-1 ) e=META_DATA.length;

	i=META_DATA.indexOf( ";"+key+"=",i )
	if( i==-1 || i>=e ) return "";
	i+=key.length+2;

	e=META_DATA.indexOf( ";",i );
	if( e==-1 ) return "";

	return META_DATA.slice( i,e );
}

BBHtml5Game.prototype.PathToUrl=function( path ){
	if( path.indexOf( "monkey:" )!=0 ){
		return path;
	}else if( path.indexOf( "monkey://data/" )==0 ) {
		return "data/"+path.slice( 14 );
	}
	return "";
}

BBHtml5Game.prototype.GetLoading=function(){
	return this._loading;
}

BBHtml5Game.prototype.IncLoading=function(){
	++this._loading;
	return this._loading;
}

BBHtml5Game.prototype.DecLoading=function(){
	--this._loading;
	return this._loading;
}

BBHtml5Game.prototype.GetCanvas=function(){
	return this._canvas;
}

BBHtml5Game.prototype.GetWebGL=function(){
	return this._gl;
}

BBHtml5Game.prototype.GetDeviceWidth=function(){
	return this._canvas.width;
}

BBHtml5Game.prototype.GetDeviceHeight=function(){
	return this._canvas.height;
}

//***** INTERNAL *****

BBHtml5Game.prototype.UpdateGame=function(){

	if( !this._loading ) BBGame.prototype.UpdateGame.call( this );
}

BBHtml5Game.prototype.SuspendGame=function(){

	BBGame.prototype.SuspendGame.call( this );
	
	BBGame.prototype.RenderGame.call( this );
	
	this.ValidateUpdateTimer();
}

BBHtml5Game.prototype.ResumeGame=function(){

	BBGame.prototype.ResumeGame.call( this );
	
	this.ValidateUpdateTimer();
}

BBHtml5Game.prototype.Run=function(){

	var game=this;
	var canvas=game._canvas;
	
	var xscale=1;
	var yscale=1;
	
	var touchIds=new Array( 32 );
	for( i=0;i<32;++i ) touchIds[i]=-1;
	
	function eatEvent( e ){
		if( e.stopPropagation ){
			e.stopPropagation();
			e.preventDefault();
		}else{
			e.cancelBubble=true;
			e.returnValue=false;
		}
	}
	
	function keyToChar( key ){
		switch( key ){
		case 8:case 9:case 13:case 27:case 32:return key;
		case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 45:return key|0x10000;
		case 46:return 127;
		}
		return 0;
	}
	
	function mouseX( e ){
		var x=e.clientX+document.body.scrollLeft;
		var c=canvas;
		while( c ){
			x-=c.offsetLeft;
			c=c.offsetParent;
		}
		return x*xscale;
	}
	
	function mouseY( e ){
		var y=e.clientY+document.body.scrollTop;
		var c=canvas;
		while( c ){
			y-=c.offsetTop;
			c=c.offsetParent;
		}
		return y*yscale;
	}

	function touchX( touch ){
		var x=touch.pageX;
		var c=canvas;
		while( c ){
			x-=c.offsetLeft;
			c=c.offsetParent;
		}
		return x;
	}			
	
	function touchY( touch ){
		var y=touch.pageY;
		var c=canvas;
		while( c ){
			y-=c.offsetTop;
			c=c.offsetParent;
		}
		return y;
	}
	
	canvas.onkeydown=function( e ){
		game.KeyEvent( BBGameEvent.KeyDown,e.keyCode );
		var chr=keyToChar( e.keyCode );
		if( chr ) game.KeyEvent( BBGameEvent.KeyChar,chr );
		if( e.keyCode<48 || (e.keyCode>111 && e.keyCode<122) ) eatEvent( e );
	}

	canvas.onkeyup=function( e ){
		game.KeyEvent( BBGameEvent.KeyUp,e.keyCode );
	}

	canvas.onkeypress=function( e ){
		if( e.charCode ){
			game.KeyEvent( BBGameEvent.KeyChar,e.charCode );
		}else if( e.which ){
			game.KeyEvent( BBGameEvent.KeyChar,e.which );
		}
	}

	canvas.onmousedown=function( e ){
		switch( e.button ){
		case 0:game.MouseEvent( BBGameEvent.MouseDown,0,mouseX(e),mouseY(e) );break;
		case 1:game.MouseEvent( BBGameEvent.MouseDown,2,mouseX(e),mouseY(e) );break;
		case 2:game.MouseEvent( BBGameEvent.MouseDown,1,mouseX(e),mouseY(e) );break;
		}
		eatEvent( e );
	}
	
	canvas.onmouseup=function( e ){
		switch( e.button ){
		case 0:game.MouseEvent( BBGameEvent.MouseUp,0,mouseX(e),mouseY(e) );break;
		case 1:game.MouseEvent( BBGameEvent.MouseUp,2,mouseX(e),mouseY(e) );break;
		case 2:game.MouseEvent( BBGameEvent.MouseUp,1,mouseX(e),mouseY(e) );break;
		}
		eatEvent( e );
	}
	
	canvas.onmousemove=function( e ){
		game.MouseEvent( BBGameEvent.MouseMove,-1,mouseX(e),mouseY(e) );
		eatEvent( e );
	}

	canvas.onmouseout=function( e ){
		game.MouseEvent( BBGameEvent.MouseUp,0,mouseX(e),mouseY(e) );
		game.MouseEvent( BBGameEvent.MouseUp,1,mouseX(e),mouseY(e) );
		game.MouseEvent( BBGameEvent.MouseUp,2,mouseX(e),mouseY(e) );
		eatEvent( e );
	}
	
	canvas.onclick=function( e ){
		if( game.Suspended() ){
			canvas.focus();
		}
		eatEvent( e );
		return;
	}
	
	canvas.oncontextmenu=function( e ){
		return false;
	}
	
	canvas.ontouchstart=function( e ){
		if( game.Suspended() ){
			canvas.focus();
		}
		for( var i=0;i<e.changedTouches.length;++i ){
			var touch=e.changedTouches[i];
			for( var j=0;j<32;++j ){
				if( touchIds[j]!=-1 ) continue;
				touchIds[j]=touch.identifier;
				game.TouchEvent( BBGameEvent.TouchDown,j,touchX(touch),touchY(touch) );
				break;
			}
		}
		eatEvent( e );
	}
	
	canvas.ontouchmove=function( e ){
		for( var i=0;i<e.changedTouches.length;++i ){
			var touch=e.changedTouches[i];
			for( var j=0;j<32;++j ){
				if( touchIds[j]!=touch.identifier ) continue;
				game.TouchEvent( BBGameEvent.TouchMove,j,touchX(touch),touchY(touch) );
				break;
			}
		}
		eatEvent( e );
	}
	
	canvas.ontouchend=function( e ){
		for( var i=0;i<e.changedTouches.length;++i ){
			var touch=e.changedTouches[i];
			for( var j=0;j<32;++j ){
				if( touchIds[j]!=touch.identifier ) continue;
				touchIds[j]=-1;
				game.TouchEvent( BBGameEvent.TouchUp,j,touchX(touch),touchY(touch) );
				break;
			}
		}
		eatEvent( e );
	}
	
	window.ondevicemotion=function( e ){
		var tx=e.accelerationIncludingGravity.x/9.81;
		var ty=e.accelerationIncludingGravity.y/9.81;
		var tz=e.accelerationIncludingGravity.z/9.81;
		var x,y;
		switch( window.orientation ){
		case   0:x=+tx;y=-ty;break;
		case 180:x=-tx;y=+ty;break;
		case  90:x=-ty;y=-tx;break;
		case -90:x=+ty;y=+tx;break;
		}
		game.MotionEvent( BBGameEvent.MotionAccel,0,x,y,tz );
		eatEvent( e );
	}

	canvas.onfocus=function( e ){
		if( CFG_MOJO_AUTO_SUSPEND_ENABLED=="1" ){
			game.ResumeGame();
		}
	}
	
	canvas.onblur=function( e ){
		for( var i=0;i<256;++i ) game.KeyEvent( BBGameEvent.KeyUp,i );
		if( CFG_MOJO_AUTO_SUSPEND_ENABLED=="1" ){
			game.SuspendGame();
		}
	}
	
	canvas.updateSize=function(){
		xscale=canvas.width/canvas.clientWidth;
		yscale=canvas.height/canvas.clientHeight;
		game.RenderGame();
	}
	
	canvas.updateSize();
	
	canvas.focus();
	
	game.StartGame();

	game.RenderGame();
}


function BBMonkeyGame( canvas ){
	BBHtml5Game.call( this,canvas );
}

BBMonkeyGame.prototype=extend_class( BBHtml5Game );

BBMonkeyGame.Main=function( canvas ){

	var game=new BBMonkeyGame( canvas );

	try{

		bbInit();
		bbMain();

	}catch( ex ){
	
		game.Die( ex );
		return;
	}

	if( !game.Delegate() ) return;
	
	game.Run();
}


// HTML5 mojo runtime.
//
// Copyright 2011 Mark Sibly, all rights reserved.
// No warranty implied; use at your own risk.

// ***** gxtkGraphics class *****

function gxtkGraphics(){
	this.game=BBHtml5Game.Html5Game();
	this.canvas=this.game.GetCanvas()
	this.width=this.canvas.width;
	this.height=this.canvas.height;
	this.gl=null;
	this.gc=this.canvas.getContext( '2d' );
	this.tmpCanvas=null;
	this.r=255;
	this.b=255;
	this.g=255;
	this.white=true;
	this.color="rgb(255,255,255)"
	this.alpha=1;
	this.blend="source-over";
	this.ix=1;this.iy=0;
	this.jx=0;this.jy=1;
	this.tx=0;this.ty=0;
	this.tformed=false;
	this.scissorX=0;
	this.scissorY=0;
	this.scissorWidth=0;
	this.scissorHeight=0;
	this.clipped=false;
}

gxtkGraphics.prototype.BeginRender=function(){
	this.width=this.canvas.width;
	this.height=this.canvas.height;
	if( !this.gc ) return 0;
	this.gc.save();
	if( this.game.GetLoading() ) return 2;
	return 1;
}

gxtkGraphics.prototype.EndRender=function(){
	if( this.gc ) this.gc.restore();
}

gxtkGraphics.prototype.Width=function(){
	return this.width;
}

gxtkGraphics.prototype.Height=function(){
	return this.height;
}

gxtkGraphics.prototype.LoadSurface=function( path ){
	var game=this.game;

	var ty=game.GetMetaData( path,"type" );
	if( ty.indexOf( "image/" )!=0 ) return null;
	
	game.IncLoading();

	var image=new Image();
	image.onload=function(){ game.DecLoading(); }
	image.onerror=function(){ game.DecLoading(); }
	image.meta_width=parseInt( game.GetMetaData( path,"width" ) );
	image.meta_height=parseInt( game.GetMetaData( path,"height" ) );
	image.src=game.PathToUrl( path );

	return new gxtkSurface( image,this );
}

gxtkGraphics.prototype.CreateSurface=function( width,height ){
	var canvas=document.createElement( 'canvas' );
	
	canvas.width=width;
	canvas.height=height;
	canvas.meta_width=width;
	canvas.meta_height=height;
	canvas.complete=true;
	
	var surface=new gxtkSurface( canvas,this );
	
	surface.gc=canvas.getContext( '2d' );
	
	return surface;
}

gxtkGraphics.prototype.SetAlpha=function( alpha ){
	this.alpha=alpha;
	this.gc.globalAlpha=alpha;
}

gxtkGraphics.prototype.SetColor=function( r,g,b ){
	this.r=r;
	this.g=g;
	this.b=b;
	this.white=(r==255 && g==255 && b==255);
	this.color="rgb("+(r|0)+","+(g|0)+","+(b|0)+")";
	this.gc.fillStyle=this.color;
	this.gc.strokeStyle=this.color;
}

gxtkGraphics.prototype.SetBlend=function( blend ){
	switch( blend ){
	case 1:
		this.blend="lighter";
		break;
	default:
		this.blend="source-over";
	}
	this.gc.globalCompositeOperation=this.blend;
}

gxtkGraphics.prototype.SetScissor=function( x,y,w,h ){
	this.scissorX=x;
	this.scissorY=y;
	this.scissorWidth=w;
	this.scissorHeight=h;
	this.clipped=(x!=0 || y!=0 || w!=this.canvas.width || h!=this.canvas.height);
	this.gc.restore();
	this.gc.save();
	if( this.clipped ){
		this.gc.beginPath();
		this.gc.rect( x,y,w,h );
		this.gc.clip();
		this.gc.closePath();
	}
	this.gc.fillStyle=this.color;
	this.gc.strokeStyle=this.color;	
	this.gc.globalAlpha=this.alpha;	
	this.gc.globalCompositeOperation=this.blend;
	if( this.tformed ) this.gc.setTransform( this.ix,this.iy,this.jx,this.jy,this.tx,this.ty );
}

gxtkGraphics.prototype.SetMatrix=function( ix,iy,jx,jy,tx,ty ){
	this.ix=ix;this.iy=iy;
	this.jx=jx;this.jy=jy;
	this.tx=tx;this.ty=ty;
	this.gc.setTransform( ix,iy,jx,jy,tx,ty );
	this.tformed=(ix!=1 || iy!=0 || jx!=0 || jy!=1 || tx!=0 || ty!=0);
}

gxtkGraphics.prototype.Cls=function( r,g,b ){
	if( this.tformed ) this.gc.setTransform( 1,0,0,1,0,0 );
	this.gc.fillStyle="rgb("+(r|0)+","+(g|0)+","+(b|0)+")";
	this.gc.globalAlpha=1;
	this.gc.globalCompositeOperation="source-over";
	this.gc.fillRect( 0,0,this.canvas.width,this.canvas.height );
	this.gc.fillStyle=this.color;
	this.gc.globalAlpha=this.alpha;
	this.gc.globalCompositeOperation=this.blend;
	if( this.tformed ) this.gc.setTransform( this.ix,this.iy,this.jx,this.jy,this.tx,this.ty );
}

gxtkGraphics.prototype.DrawPoint=function( x,y ){
	if( this.tformed ){
		var px=x;
		x=px * this.ix + y * this.jx + this.tx;
		y=px * this.iy + y * this.jy + this.ty;
		this.gc.setTransform( 1,0,0,1,0,0 );
		this.gc.fillRect( x,y,1,1 );
		this.gc.setTransform( this.ix,this.iy,this.jx,this.jy,this.tx,this.ty );
	}else{
		this.gc.fillRect( x,y,1,1 );
	}
}

gxtkGraphics.prototype.DrawRect=function( x,y,w,h ){
	if( w<0 ){ x+=w;w=-w; }
	if( h<0 ){ y+=h;h=-h; }
	if( w<=0 || h<=0 ) return;
	//
	this.gc.fillRect( x,y,w,h );
}

gxtkGraphics.prototype.DrawLine=function( x1,y1,x2,y2 ){
	if( this.tformed ){
		var x1_t=x1 * this.ix + y1 * this.jx + this.tx;
		var y1_t=x1 * this.iy + y1 * this.jy + this.ty;
		var x2_t=x2 * this.ix + y2 * this.jx + this.tx;
		var y2_t=x2 * this.iy + y2 * this.jy + this.ty;
		this.gc.setTransform( 1,0,0,1,0,0 );
	  	this.gc.beginPath();
	  	this.gc.moveTo( x1_t,y1_t );
	  	this.gc.lineTo( x2_t,y2_t );
	  	this.gc.stroke();
	  	this.gc.closePath();
		this.gc.setTransform( this.ix,this.iy,this.jx,this.jy,this.tx,this.ty );
	}else{
	  	this.gc.beginPath();
	  	this.gc.moveTo( x1,y1 );
	  	this.gc.lineTo( x2,y2 );
	  	this.gc.stroke();
	  	this.gc.closePath();
	}
}

gxtkGraphics.prototype.DrawOval=function( x,y,w,h ){
	if( w<0 ){ x+=w;w=-w; }
	if( h<0 ){ y+=h;h=-h; }
	if( w<=0 || h<=0 ) return;
	//
  	var w2=w/2,h2=h/2;
	this.gc.save();
	this.gc.translate( x+w2,y+h2 );
	this.gc.scale( w2,h2 );
  	this.gc.beginPath();
	this.gc.arc( 0,0,1,0,Math.PI*2,false );
	this.gc.fill();
  	this.gc.closePath();
	this.gc.restore();
}

gxtkGraphics.prototype.DrawPoly=function( verts ){
	if( verts.length<2 ) return;
	this.gc.beginPath();
	this.gc.moveTo( verts[0],verts[1] );
	for( var i=2;i<verts.length;i+=2 ){
		this.gc.lineTo( verts[i],verts[i+1] );
	}
	this.gc.fill();
	this.gc.closePath();
}

gxtkGraphics.prototype.DrawPoly2=function( verts,surface,srx,srcy ){
	if( verts.length<4 ) return;
	this.gc.beginPath();
	this.gc.moveTo( verts[0],verts[1] );
	for( var i=4;i<verts.length;i+=4 ){
		this.gc.lineTo( verts[i],verts[i+1] );
	}
	this.gc.fill();
	this.gc.closePath();
}

gxtkGraphics.prototype.DrawSurface=function( surface,x,y ){
	if( !surface.image.complete ) return;
	
	if( this.white ){
		this.gc.drawImage( surface.image,x,y );
		return;
	}
	
	this.DrawImageTinted( surface.image,x,y,0,0,surface.swidth,surface.sheight );
}

gxtkGraphics.prototype.DrawSurface2=function( surface,x,y,srcx,srcy,srcw,srch ){
	if( !surface.image.complete ) return;

	if( srcw<0 ){ srcx+=srcw;srcw=-srcw; }
	if( srch<0 ){ srcy+=srch;srch=-srch; }
	if( srcw<=0 || srch<=0 ) return;

	if( this.white ){
		this.gc.drawImage( surface.image,srcx,srcy,srcw,srch,x,y,srcw,srch );
		return;
	}
	
	this.DrawImageTinted( surface.image,x,y,srcx,srcy,srcw,srch  );
}

gxtkGraphics.prototype.DrawImageTinted=function( image,dx,dy,sx,sy,sw,sh ){

	if( !this.tmpCanvas ){
		this.tmpCanvas=document.createElement( "canvas" );
	}

	if( sw>this.tmpCanvas.width || sh>this.tmpCanvas.height ){
		this.tmpCanvas.width=Math.max( sw,this.tmpCanvas.width );
		this.tmpCanvas.height=Math.max( sh,this.tmpCanvas.height );
	}
	
	var tmpGC=this.tmpCanvas.getContext( "2d" );
	tmpGC.globalCompositeOperation="copy";
	
	tmpGC.drawImage( image,sx,sy,sw,sh,0,0,sw,sh );
	
	var imgData=tmpGC.getImageData( 0,0,sw,sh );
	
	var p=imgData.data,sz=sw*sh*4,i;
	
	for( i=0;i<sz;i+=4 ){
		p[i]=p[i]*this.r/255;
		p[i+1]=p[i+1]*this.g/255;
		p[i+2]=p[i+2]*this.b/255;
	}
	
	tmpGC.putImageData( imgData,0,0 );
	
	this.gc.drawImage( this.tmpCanvas,0,0,sw,sh,dx,dy,sw,sh );
}

gxtkGraphics.prototype.ReadPixels=function( pixels,x,y,width,height,offset,pitch ){

	var imgData=this.gc.getImageData( x,y,width,height );
	
	var p=imgData.data,i=0,j=offset,px,py;
	
	for( py=0;py<height;++py ){
		for( px=0;px<width;++px ){
			pixels[j++]=(p[i+3]<<24)|(p[i]<<16)|(p[i+1]<<8)|p[i+2];
			i+=4;
		}
		j+=pitch-width;
	}
}

gxtkGraphics.prototype.WritePixels2=function( surface,pixels,x,y,width,height,offset,pitch ){

	if( !surface.gc ){
		if( !surface.image.complete ) return;
		var canvas=document.createElement( "canvas" );
		canvas.width=surface.swidth;
		canvas.height=surface.sheight;
		surface.gc=canvas.getContext( "2d" );
		surface.gc.globalCompositeOperation="copy";
		surface.gc.drawImage( surface.image,0,0 );
		surface.image=canvas;
	}

	var imgData=surface.gc.createImageData( width,height );

	var p=imgData.data,i=0,j=offset,px,py,argb;
	
	for( py=0;py<height;++py ){
		for( px=0;px<width;++px ){
			argb=pixels[j++];
			p[i]=(argb>>16) & 0xff;
			p[i+1]=(argb>>8) & 0xff;
			p[i+2]=argb & 0xff;
			p[i+3]=(argb>>24) & 0xff;
			i+=4;
		}
		j+=pitch-width;
	}
	
	surface.gc.putImageData( imgData,x,y );
}

// ***** gxtkSurface class *****

function gxtkSurface( image,graphics ){
	this.image=image;
	this.graphics=graphics;
	this.swidth=image.meta_width;
	this.sheight=image.meta_height;
}

// ***** GXTK API *****

gxtkSurface.prototype.Discard=function(){
	if( this.image ){
		this.image=null;
	}
}

gxtkSurface.prototype.Width=function(){
	return this.swidth;
}

gxtkSurface.prototype.Height=function(){
	return this.sheight;
}

gxtkSurface.prototype.Loaded=function(){
	return this.image.complete;
}

gxtkSurface.prototype.OnUnsafeLoadComplete=function(){
}

if( CFG_HTML5_WEBAUDIO_ENABLED=="1" && (window.AudioContext || window.webkitAudioContext) ){

//print( "Using WebAudio!" );

// ***** WebAudio *****

var wa=null;

// ***** WebAudio gxtkSample *****

var gxtkSample=function(){
	this.waBuffer=null;
	this.state=0;
}

gxtkSample.prototype.Load=function( path ){
	if( this.state ) return false;

	var req=new XMLHttpRequest();
	
	req.open( "get",BBGame.Game().PathToUrl( path ),true );
	req.responseType="arraybuffer";
	
	var abuf=this;
	
	req.onload=function(){
		wa.decodeAudioData( req.response,function( buffer ){
			//success!
			abuf.waBuffer=buffer;
			abuf.state=1;
		},function(){
			abuf.state=-1;
		} );
	}
	
	req.onerror=function(){
		abuf.state=-1;
	}
	
	req.send();
	
	this.state=2;
			
	return true;
}

gxtkSample.prototype.Discard=function(){
}

// ***** WebAudio gxtkChannel *****

var gxtkChannel=function(){
	this.buffer=null;
	this.flags=0;
	this.volume=1;
	this.pan=0;
	this.rate=1;
	this.waSource=null;
	this.waPan=wa.create
	this.waGain=wa.createGain();
	this.waGain.connect( wa.destination );
	this.waPanner=wa.createPanner();
	this.waPanner.rolloffFactor=0;
	this.waPanner.panningModel="equalpower";
	this.waPanner.connect( this.waGain );
	this.startTime=0;
	this.offset=0;
	this.state=0;
}

// ***** WebAudio gxtkAudio *****

var gxtkAudio=function(){

	if( !wa ){
		window.AudioContext=window.AudioContext || window.webkitAudioContext;
		wa=new AudioContext();
	}
	
	this.okay=true;
	this.music=null;
	this.musicState=0;
	this.musicVolume=1;
	this.channels=new Array();
	for( var i=0;i<32;++i ){
		this.channels[i]=new gxtkChannel();
	}
}

gxtkAudio.prototype.Suspend=function(){
	if( this.MusicState()==1 ) this.music.pause();
	for( var i=0;i<32;++i ){
		var chan=this.channels[i];
		if( chan.state!=1 ) continue;
		this.PauseChannel( i );
		chan.state=5;
	}
}

gxtkAudio.prototype.Resume=function(){
	if( this.MusicState()==1 ) this.music.play();
	for( var i=0;i<32;++i ){
		var chan=this.channels[i];
		if( chan.state!=5 ) continue;
		chan.state=2;
		this.ResumeChannel( i );
	}
}

gxtkAudio.prototype.LoadSample=function( path ){

	var sample=new gxtkSample();
	if( !sample.Load( BBHtml5Game.Html5Game().PathToUrl( path ) ) ) return null;
	
	return sample;
}

gxtkAudio.prototype.PlaySample=function( buffer,channel,flags ){

	if( buffer.state!=1 ) return;

	var chan=this.channels[channel];
	
	if( chan.state ){
		chan.waSource.onended=null
		chan.waSource.stop( 0 );
	}
	
	chan.buffer=buffer;
	chan.flags=flags;

	chan.waSource=wa.createBufferSource();
	chan.waSource.buffer=buffer.waBuffer;
	chan.waSource.playbackRate.value=chan.rate;
	chan.waSource.loop=(flags&1)!=0;
	chan.waSource.connect( chan.waPanner );
	
	chan.waSource.onended=function( e ){
		chan.waSource=null;
		chan.state=0;
	}

	chan.offset=0;	
	chan.startTime=wa.currentTime;
	chan.waSource.start( 0 );

	chan.state=1;
}

gxtkAudio.prototype.StopChannel=function( channel ){

	var chan=this.channels[channel];
	if( !chan.state ) return;
	
	if( chan.state==1 ){
		chan.waSource.onended=null;
		chan.waSource.stop( 0 );
		chan.waSource=null;
	}

	chan.state=0;
}

gxtkAudio.prototype.PauseChannel=function( channel ){

	var chan=this.channels[channel];
	if( chan.state!=1 ) return;
	
	chan.offset=(chan.offset+(wa.currentTime-chan.startTime)*chan.rate)%chan.buffer.waBuffer.duration;
	
	chan.waSource.onended=null;
	chan.waSource.stop( 0 );
	chan.waSource=null;
	
	chan.state=2;
}

gxtkAudio.prototype.ResumeChannel=function( channel ){

	var chan=this.channels[channel];
	if( chan.state!=2 ) return;
	
	chan.waSource=wa.createBufferSource();
	chan.waSource.buffer=chan.buffer.waBuffer;
	chan.waSource.playbackRate.value=chan.rate;
	chan.waSource.loop=(chan.flags&1)!=0;
	chan.waSource.connect( chan.waPanner );
	
	chan.waSource.onended=function( e ){
		chan.waSource=null;
		chan.state=0;
	}
	
	chan.startTime=wa.currentTime;
	chan.waSource.start( 0,chan.offset );

	chan.state=1;
}

gxtkAudio.prototype.ChannelState=function( channel ){
	return this.channels[channel].state & 3;
}

gxtkAudio.prototype.SetVolume=function( channel,volume ){
	var chan=this.channels[channel];

	chan.volume=volume;
	
	chan.waGain.gain.value=volume;
}

gxtkAudio.prototype.SetPan=function( channel,pan ){
	var chan=this.channels[channel];

	chan.pan=pan;
	
	var sin=Math.sin( pan*3.14159265359/2 );
	var cos=Math.cos( pan*3.14159265359/2 );
	
	chan.waPanner.setPosition( sin,0,-cos );
}

gxtkAudio.prototype.SetRate=function( channel,rate ){

	var chan=this.channels[channel];

	if( chan.state==1 ){
		//update offset for pause/resume
		var time=wa.currentTime;
		chan.offset=(chan.offset+(time-chan.startTime)*chan.rate)%chan.buffer.waBuffer.duration;
		chan.startTime=time;
	}

	chan.rate=rate;
	
	if( chan.waSource ) chan.waSource.playbackRate.value=rate;
}

gxtkAudio.prototype.PlayMusic=function( path,flags ){
	if( this.musicState ) this.music.pause();
	this.music=new Audio( BBGame.Game().PathToUrl( path ) );
	this.music.loop=(flags&1)!=0;
	this.music.play();
	this.musicState=1;
}

gxtkAudio.prototype.StopMusic=function(){
	if( !this.musicState ) return;
	this.music.pause();
	this.music=null;
	this.musicState=0;
}

gxtkAudio.prototype.PauseMusic=function(){
	if( this.musicState!=1 ) return;
	this.music.pause();
	this.musicState=2;
}

gxtkAudio.prototype.ResumeMusic=function(){
	if( this.musicState!=2 ) return;
	this.music.play();
	this.musicState=1;
}

gxtkAudio.prototype.MusicState=function(){
	if( this.musicState==1 && this.music.ended && !this.music.loop ){
		this.music=null;
		this.musicState=0;
	}
	return this.musicState;
}

gxtkAudio.prototype.SetMusicVolume=function( volume ){
	this.musicVolume=volume;
	if( this.musicState ) this.music.volume=volume;
}

}else{

//print( "Using OldAudio!" );

// ***** gxtkChannel class *****

var gxtkChannel=function(){
	this.sample=null;
	this.audio=null;
	this.volume=1;
	this.pan=0;
	this.rate=1;
	this.flags=0;
	this.state=0;
}

// ***** gxtkAudio class *****

var gxtkAudio=function(){
	this.game=BBHtml5Game.Html5Game();
	this.okay=typeof(Audio)!="undefined";
	this.music=null;
	this.channels=new Array(33);
	for( var i=0;i<33;++i ){
		this.channels[i]=new gxtkChannel();
		if( !this.okay ) this.channels[i].state=-1;
	}
}

gxtkAudio.prototype.Suspend=function(){
	var i;
	for( i=0;i<33;++i ){
		var chan=this.channels[i];
		if( chan.state==1 ){
			if( chan.audio.ended && !chan.audio.loop ){
				chan.state=0;
			}else{
				chan.audio.pause();
				chan.state=3;
			}
		}
	}
}

gxtkAudio.prototype.Resume=function(){
	var i;
	for( i=0;i<33;++i ){
		var chan=this.channels[i];
		if( chan.state==3 ){
			chan.audio.play();
			chan.state=1;
		}
	}
}

gxtkAudio.prototype.LoadSample=function( path ){
	if( !this.okay ) return null;

	var audio=new Audio( this.game.PathToUrl( path ) );
	if( !audio ) return null;
	
	return new gxtkSample( audio );
}

gxtkAudio.prototype.PlaySample=function( sample,channel,flags ){
	if( !this.okay ) return;
	
	var chan=this.channels[channel];

	if( chan.state>0 ){
		chan.audio.pause();
		chan.state=0;
	}
	
	for( var i=0;i<33;++i ){
		var chan2=this.channels[i];
		if( chan2.state==1 && chan2.audio.ended && !chan2.audio.loop ) chan.state=0;
		if( chan2.state==0 && chan2.sample ){
			chan2.sample.FreeAudio( chan2.audio );
			chan2.sample=null;
			chan2.audio=null;
		}
	}

	var audio=sample.AllocAudio();
	if( !audio ) return;

	audio.loop=(flags&1)!=0;
	audio.volume=chan.volume;
	audio.play();

	chan.sample=sample;
	chan.audio=audio;
	chan.flags=flags;
	chan.state=1;
}

gxtkAudio.prototype.StopChannel=function( channel ){
	var chan=this.channels[channel];
	
	if( chan.state>0 ){
		chan.audio.pause();
		chan.state=0;
	}
}

gxtkAudio.prototype.PauseChannel=function( channel ){
	var chan=this.channels[channel];
	
	if( chan.state==1 ){
		if( chan.audio.ended && !chan.audio.loop ){
			chan.state=0;
		}else{
			chan.audio.pause();
			chan.state=2;
		}
	}
}

gxtkAudio.prototype.ResumeChannel=function( channel ){
	var chan=this.channels[channel];
	
	if( chan.state==2 ){
		chan.audio.play();
		chan.state=1;
	}
}

gxtkAudio.prototype.ChannelState=function( channel ){
	var chan=this.channels[channel];
	if( chan.state==1 && chan.audio.ended && !chan.audio.loop ) chan.state=0;
	if( chan.state==3 ) return 1;
	return chan.state;
}

gxtkAudio.prototype.SetVolume=function( channel,volume ){
	var chan=this.channels[channel];
	if( chan.state>0 ) chan.audio.volume=volume;
	chan.volume=volume;
}

gxtkAudio.prototype.SetPan=function( channel,pan ){
	var chan=this.channels[channel];
	chan.pan=pan;
}

gxtkAudio.prototype.SetRate=function( channel,rate ){
	var chan=this.channels[channel];
	chan.rate=rate;
}

gxtkAudio.prototype.PlayMusic=function( path,flags ){
	this.StopMusic();
	
	this.music=this.LoadSample( path );
	if( !this.music ) return;
	
	this.PlaySample( this.music,32,flags );
}

gxtkAudio.prototype.StopMusic=function(){
	this.StopChannel( 32 );

	if( this.music ){
		this.music.Discard();
		this.music=null;
	}
}

gxtkAudio.prototype.PauseMusic=function(){
	this.PauseChannel( 32 );
}

gxtkAudio.prototype.ResumeMusic=function(){
	this.ResumeChannel( 32 );
}

gxtkAudio.prototype.MusicState=function(){
	return this.ChannelState( 32 );
}

gxtkAudio.prototype.SetMusicVolume=function( volume ){
	this.SetVolume( 32,volume );
}

// ***** gxtkSample class *****

//function gxtkSample( audio ){
var gxtkSample=function( audio ){
	this.audio=audio;
	this.free=new Array();
	this.insts=new Array();
}

gxtkSample.prototype.FreeAudio=function( audio ){
	this.free.push( audio );
}

gxtkSample.prototype.AllocAudio=function(){
	var audio;
	while( this.free.length ){
		audio=this.free.pop();
		try{
			audio.currentTime=0;
			return audio;
		}catch( ex ){
//			print( "AUDIO ERROR1!" );
		}
	}
	
	//Max out?
	if( this.insts.length==8 ) return null;
	
	audio=new Audio( this.audio.src );
	
	//yucky loop handler for firefox!
	//
	audio.addEventListener( 'ended',function(){
		if( this.loop ){
			try{
				this.currentTime=0;
				this.play();
			}catch( ex ){
//				print( "AUDIO ERROR2!" );
			}
		}
	},false );

	this.insts.push( audio );
	return audio;
}

gxtkSample.prototype.Discard=function(){
}

}

function c_App(){
	Object.call(this);
}
c_App.m_new=function(){
	if((bb_app__app)!=null){
		error("App has already been created");
	}
	bb_app__app=this;
	bb_app__delegate=c_GameDelegate.m_new.call(new c_GameDelegate);
	bb_app__game.SetDelegate(bb_app__delegate);
	return this;
}
c_App.prototype.p_OnResize=function(){
	return 0;
}
c_App.prototype.p_OnCreate=function(){
	return 0;
}
c_App.prototype.p_OnSuspend=function(){
	return 0;
}
c_App.prototype.p_OnResume=function(){
	return 0;
}
c_App.prototype.p_OnUpdate=function(){
	return 0;
}
c_App.prototype.p_OnLoading=function(){
	return 0;
}
c_App.prototype.p_OnRender=function(){
	return 0;
}
c_App.prototype.p_OnClose=function(){
	bb_app_EndApp();
	return 0;
}
c_App.prototype.p_OnBack=function(){
	this.p_OnClose();
	return 0;
}
function c_MyApp(){
	c_App.call(this);
	this.m_cmdList=c_List2.m_new.call(new c_List2);
}
c_MyApp.prototype=extend_class(c_App);
c_MyApp.m_new=function(){
	c_App.m_new.call(this);
	return this;
}
c_MyApp.prototype.p_InitCommands=function(){
	var t_cell=null;
	t_cell=c_Cell.m_new2.call(new c_Cell,6,0,3,7);
	bb_command_RegisterCommand(6,0,7);
	this.m_cmdList.p_AddLast2(t_cell);
	t_cell=c_Cell.m_new2.call(new c_Cell,7,0,3,3);
	bb_command_RegisterCommand(7,0,3);
	this.m_cmdList.p_AddLast2(t_cell);
	t_cell=c_Cell.m_new2.call(new c_Cell,8,0,3,5);
	bb_command_RegisterCommand(8,0,5);
	this.m_cmdList.p_AddLast2(t_cell);
	t_cell=c_Cell.m_new2.call(new c_Cell,9,0,3,1);
	bb_command_RegisterCommand(9,0,1);
	this.m_cmdList.p_AddLast2(t_cell);
	t_cell=c_Cell.m_new2.call(new c_Cell,10,0,3,2);
	bb_command_RegisterCommand(10,0,2);
	this.m_cmdList.p_AddLast2(t_cell);
	t_cell=c_Cell.m_new2.call(new c_Cell,11,0,3,4);
	bb_command_RegisterCommand(11,0,4);
	this.m_cmdList.p_AddLast2(t_cell);
	t_cell=c_Cell.m_new2.call(new c_Cell,12,0,3,6);
	bb_command_RegisterCommand(12,0,6);
	this.m_cmdList.p_AddLast2(t_cell);
	return 0;
}
c_MyApp.prototype.p_Init=function(){
	this.p_InitCommands();
	bb_config_LEFT_MARGIN=0;
	bb_config_TOP_MARGIN=0;
	return 0;
}
c_MyApp.prototype.p_OnCreate=function(){
	bb_scene_gSceneArray=bb_scene_LoadScenes();
	this.p_Init();
	bb_app_SetUpdateRate(60);
	return 0;
}
c_MyApp.prototype.p_OnUpdate=function(){
	bb_command_HandleCommands(bb_scene_gSceneArray[bb_scene_gSceneIndex]);
	bb_scene_gSceneArray[bb_scene_gSceneIndex].m_stepsSum+=bb_scene_gSceneArray[bb_scene_gSceneIndex].m_stepsPerFrame;
	while(bb_scene_gSceneArray[bb_scene_gSceneIndex].m_stepsSum>=1.0){
		bb_scene_gSceneArray[bb_scene_gSceneIndex].p_Move();
		bb_scene_gSceneArray[bb_scene_gSceneIndex].m_stepsSum-=1.0;
	}
	return 0;
}
c_MyApp.m_DrawGrid=function(){
	bb_graphics_SetColor(bb_color_gGridLineColor.m_red,bb_color_gGridLineColor.m_green,bb_color_gGridLineColor.m_blue);
	var t_row=0;
	var t_col=0;
	var t_x=0;
	var t_y=0;
	for(t_row=0;t_row<=20;t_row=t_row+1){
		t_y=bb_config_TOP_MARGIN+t_row*24;
		bb_graphics_DrawLine((bb_config_LEFT_MARGIN),(t_y),(bb_config_LEFT_MARGIN+640),(t_y));
	}
	for(t_col=0;t_col<=20;t_col=t_col+1){
		t_x=bb_config_LEFT_MARGIN+t_col*32;
		bb_graphics_DrawLine((t_x),(bb_config_TOP_MARGIN),(t_x),(bb_config_TOP_MARGIN+480));
	}
	return 0;
}
c_MyApp.prototype.p_OnRender=function(){
	bb_graphics_Cls(bb_color_gBackGroundColor.m_red,bb_color_gBackGroundColor.m_green,bb_color_gBackGroundColor.m_blue);
	c_MyApp.m_DrawGrid();
	bb_numfac_DrawCellList(this.m_cmdList);
	bb_numfac_DrawCellStatus();
	bb_scene_gSceneArray[bb_scene_gSceneIndex].p_Draw();
	return 0;
}
var bb_app__app=null;
function c_GameDelegate(){
	BBGameDelegate.call(this);
	this.m__graphics=null;
	this.m__audio=null;
	this.m__input=null;
}
c_GameDelegate.prototype=extend_class(BBGameDelegate);
c_GameDelegate.m_new=function(){
	return this;
}
c_GameDelegate.prototype.StartGame=function(){
	this.m__graphics=(new gxtkGraphics);
	bb_graphics_SetGraphicsDevice(this.m__graphics);
	bb_graphics_SetFont(null,32);
	this.m__audio=(new gxtkAudio);
	bb_audio_SetAudioDevice(this.m__audio);
	this.m__input=c_InputDevice.m_new.call(new c_InputDevice);
	bb_input_SetInputDevice(this.m__input);
	bb_app_ValidateDeviceWindow(false);
	bb_app_EnumDisplayModes();
	bb_app__app.p_OnCreate();
}
c_GameDelegate.prototype.SuspendGame=function(){
	bb_app__app.p_OnSuspend();
	this.m__audio.Suspend();
}
c_GameDelegate.prototype.ResumeGame=function(){
	this.m__audio.Resume();
	bb_app__app.p_OnResume();
}
c_GameDelegate.prototype.UpdateGame=function(){
	bb_app_ValidateDeviceWindow(true);
	this.m__input.p_BeginUpdate();
	bb_app__app.p_OnUpdate();
	this.m__input.p_EndUpdate();
}
c_GameDelegate.prototype.RenderGame=function(){
	bb_app_ValidateDeviceWindow(true);
	var t_mode=this.m__graphics.BeginRender();
	if((t_mode)!=0){
		bb_graphics_BeginRender();
	}
	if(t_mode==2){
		bb_app__app.p_OnLoading();
	}else{
		bb_app__app.p_OnRender();
	}
	if((t_mode)!=0){
		bb_graphics_EndRender();
	}
	this.m__graphics.EndRender();
}
c_GameDelegate.prototype.KeyEvent=function(t_event,t_data){
	this.m__input.p_KeyEvent(t_event,t_data);
	if(t_event!=1){
		return;
	}
	var t_1=t_data;
	if(t_1==432){
		bb_app__app.p_OnClose();
	}else{
		if(t_1==416){
			bb_app__app.p_OnBack();
		}
	}
}
c_GameDelegate.prototype.MouseEvent=function(t_event,t_data,t_x,t_y){
	this.m__input.p_MouseEvent(t_event,t_data,t_x,t_y);
}
c_GameDelegate.prototype.TouchEvent=function(t_event,t_data,t_x,t_y){
	this.m__input.p_TouchEvent(t_event,t_data,t_x,t_y);
}
c_GameDelegate.prototype.MotionEvent=function(t_event,t_data,t_x,t_y,t_z){
	this.m__input.p_MotionEvent(t_event,t_data,t_x,t_y,t_z);
}
c_GameDelegate.prototype.DiscardGraphics=function(){
	this.m__graphics.DiscardGraphics();
}
var bb_app__delegate=null;
var bb_app__game=null;
function bbMain(){
	c_MyApp.m_new.call(new c_MyApp);
	return 0;
}
var bb_graphics_device=null;
function bb_graphics_SetGraphicsDevice(t_dev){
	bb_graphics_device=t_dev;
	return 0;
}
function c_Image(){
	Object.call(this);
	this.m_surface=null;
	this.m_width=0;
	this.m_height=0;
	this.m_frames=[];
	this.m_flags=0;
	this.m_tx=.0;
	this.m_ty=.0;
	this.m_source=null;
}
c_Image.m_DefaultFlags=0;
c_Image.m_new=function(){
	return this;
}
c_Image.prototype.p_SetHandle=function(t_tx,t_ty){
	this.m_tx=t_tx;
	this.m_ty=t_ty;
	this.m_flags=this.m_flags&-2;
	return 0;
}
c_Image.prototype.p_ApplyFlags=function(t_iflags){
	this.m_flags=t_iflags;
	if((this.m_flags&2)!=0){
		var t_=this.m_frames;
		var t_2=0;
		while(t_2<t_.length){
			var t_f=t_[t_2];
			t_2=t_2+1;
			t_f.m_x+=1;
		}
		this.m_width-=2;
	}
	if((this.m_flags&4)!=0){
		var t_3=this.m_frames;
		var t_4=0;
		while(t_4<t_3.length){
			var t_f2=t_3[t_4];
			t_4=t_4+1;
			t_f2.m_y+=1;
		}
		this.m_height-=2;
	}
	if((this.m_flags&1)!=0){
		this.p_SetHandle((this.m_width)/2.0,(this.m_height)/2.0);
	}
	if(this.m_frames.length==1 && this.m_frames[0].m_x==0 && this.m_frames[0].m_y==0 && this.m_width==this.m_surface.Width() && this.m_height==this.m_surface.Height()){
		this.m_flags|=65536;
	}
	return 0;
}
c_Image.prototype.p_Init2=function(t_surf,t_nframes,t_iflags){
	if((this.m_surface)!=null){
		error("Image already initialized");
	}
	this.m_surface=t_surf;
	this.m_width=((this.m_surface.Width()/t_nframes)|0);
	this.m_height=this.m_surface.Height();
	this.m_frames=new_object_array(t_nframes);
	for(var t_i=0;t_i<t_nframes;t_i=t_i+1){
		this.m_frames[t_i]=c_Frame.m_new.call(new c_Frame,t_i*this.m_width,0);
	}
	this.p_ApplyFlags(t_iflags);
	return this;
}
c_Image.prototype.p_Init3=function(t_surf,t_x,t_y,t_iwidth,t_iheight,t_nframes,t_iflags,t_src,t_srcx,t_srcy,t_srcw,t_srch){
	if((this.m_surface)!=null){
		error("Image already initialized");
	}
	this.m_surface=t_surf;
	this.m_source=t_src;
	this.m_width=t_iwidth;
	this.m_height=t_iheight;
	this.m_frames=new_object_array(t_nframes);
	var t_ix=t_x;
	var t_iy=t_y;
	for(var t_i=0;t_i<t_nframes;t_i=t_i+1){
		if(t_ix+this.m_width>t_srcw){
			t_ix=0;
			t_iy+=this.m_height;
		}
		if(t_ix+this.m_width>t_srcw || t_iy+this.m_height>t_srch){
			error("Image frame outside surface");
		}
		this.m_frames[t_i]=c_Frame.m_new.call(new c_Frame,t_ix+t_srcx,t_iy+t_srcy);
		t_ix+=this.m_width;
	}
	this.p_ApplyFlags(t_iflags);
	return this;
}
c_Image.prototype.p_Width=function(){
	return this.m_width;
}
c_Image.prototype.p_Height=function(){
	return this.m_height;
}
c_Image.prototype.p_Frames=function(){
	return this.m_frames.length;
}
function c_GraphicsContext(){
	Object.call(this);
	this.m_defaultFont=null;
	this.m_font=null;
	this.m_firstChar=0;
	this.m_matrixSp=0;
	this.m_ix=1.0;
	this.m_iy=.0;
	this.m_jx=.0;
	this.m_jy=1.0;
	this.m_tx=.0;
	this.m_ty=.0;
	this.m_tformed=0;
	this.m_matDirty=0;
	this.m_color_r=.0;
	this.m_color_g=.0;
	this.m_color_b=.0;
	this.m_alpha=.0;
	this.m_blend=0;
	this.m_scissor_x=.0;
	this.m_scissor_y=.0;
	this.m_scissor_width=.0;
	this.m_scissor_height=.0;
	this.m_matrixStack=new_number_array(192);
}
c_GraphicsContext.m_new=function(){
	return this;
}
c_GraphicsContext.prototype.p_Validate=function(){
	if((this.m_matDirty)!=0){
		bb_graphics_renderDevice.SetMatrix(bb_graphics_context.m_ix,bb_graphics_context.m_iy,bb_graphics_context.m_jx,bb_graphics_context.m_jy,bb_graphics_context.m_tx,bb_graphics_context.m_ty);
		this.m_matDirty=0;
	}
	return 0;
}
var bb_graphics_context=null;
function bb_data_FixDataPath(t_path){
	var t_i=t_path.indexOf(":/",0);
	if(t_i!=-1 && t_path.indexOf("/",0)==t_i+1){
		return t_path;
	}
	if(string_startswith(t_path,"./") || string_startswith(t_path,"/")){
		return t_path;
	}
	return "monkey://data/"+t_path;
}
function c_Frame(){
	Object.call(this);
	this.m_x=0;
	this.m_y=0;
}
c_Frame.m_new=function(t_x,t_y){
	this.m_x=t_x;
	this.m_y=t_y;
	return this;
}
c_Frame.m_new2=function(){
	return this;
}
function bb_graphics_LoadImage(t_path,t_frameCount,t_flags){
	var t_surf=bb_graphics_device.LoadSurface(bb_data_FixDataPath(t_path));
	if((t_surf)!=null){
		return (c_Image.m_new.call(new c_Image)).p_Init2(t_surf,t_frameCount,t_flags);
	}
	return null;
}
function bb_graphics_LoadImage2(t_path,t_frameWidth,t_frameHeight,t_frameCount,t_flags){
	var t_surf=bb_graphics_device.LoadSurface(bb_data_FixDataPath(t_path));
	if((t_surf)!=null){
		return (c_Image.m_new.call(new c_Image)).p_Init3(t_surf,0,0,t_frameWidth,t_frameHeight,t_frameCount,t_flags,null,0,0,t_surf.Width(),t_surf.Height());
	}
	return null;
}
function bb_graphics_SetFont(t_font,t_firstChar){
	if(!((t_font)!=null)){
		if(!((bb_graphics_context.m_defaultFont)!=null)){
			bb_graphics_context.m_defaultFont=bb_graphics_LoadImage("mojo_font.png",96,2);
		}
		t_font=bb_graphics_context.m_defaultFont;
		t_firstChar=32;
	}
	bb_graphics_context.m_font=t_font;
	bb_graphics_context.m_firstChar=t_firstChar;
	return 0;
}
var bb_audio_device=null;
function bb_audio_SetAudioDevice(t_dev){
	bb_audio_device=t_dev;
	return 0;
}
function c_InputDevice(){
	Object.call(this);
	this.m__joyStates=new_object_array(4);
	this.m__keyDown=new_bool_array(512);
	this.m__keyHitPut=0;
	this.m__keyHitQueue=new_number_array(33);
	this.m__keyHit=new_number_array(512);
	this.m__charGet=0;
	this.m__charPut=0;
	this.m__charQueue=new_number_array(32);
	this.m__mouseX=.0;
	this.m__mouseY=.0;
	this.m__touchX=new_number_array(32);
	this.m__touchY=new_number_array(32);
	this.m__accelX=.0;
	this.m__accelY=.0;
	this.m__accelZ=.0;
}
c_InputDevice.m_new=function(){
	for(var t_i=0;t_i<4;t_i=t_i+1){
		this.m__joyStates[t_i]=c_JoyState.m_new.call(new c_JoyState);
	}
	return this;
}
c_InputDevice.prototype.p_PutKeyHit=function(t_key){
	if(this.m__keyHitPut==this.m__keyHitQueue.length){
		return;
	}
	this.m__keyHit[t_key]+=1;
	this.m__keyHitQueue[this.m__keyHitPut]=t_key;
	this.m__keyHitPut+=1;
}
c_InputDevice.prototype.p_BeginUpdate=function(){
	for(var t_i=0;t_i<4;t_i=t_i+1){
		var t_state=this.m__joyStates[t_i];
		if(!BBGame.Game().PollJoystick(t_i,t_state.m_joyx,t_state.m_joyy,t_state.m_joyz,t_state.m_buttons)){
			break;
		}
		for(var t_j=0;t_j<32;t_j=t_j+1){
			var t_key=256+t_i*32+t_j;
			if(t_state.m_buttons[t_j]){
				if(!this.m__keyDown[t_key]){
					this.m__keyDown[t_key]=true;
					this.p_PutKeyHit(t_key);
				}
			}else{
				this.m__keyDown[t_key]=false;
			}
		}
	}
}
c_InputDevice.prototype.p_EndUpdate=function(){
	for(var t_i=0;t_i<this.m__keyHitPut;t_i=t_i+1){
		this.m__keyHit[this.m__keyHitQueue[t_i]]=0;
	}
	this.m__keyHitPut=0;
	this.m__charGet=0;
	this.m__charPut=0;
}
c_InputDevice.prototype.p_KeyEvent=function(t_event,t_data){
	var t_1=t_event;
	if(t_1==1){
		if(!this.m__keyDown[t_data]){
			this.m__keyDown[t_data]=true;
			this.p_PutKeyHit(t_data);
			if(t_data==1){
				this.m__keyDown[384]=true;
				this.p_PutKeyHit(384);
			}else{
				if(t_data==384){
					this.m__keyDown[1]=true;
					this.p_PutKeyHit(1);
				}
			}
		}
	}else{
		if(t_1==2){
			if(this.m__keyDown[t_data]){
				this.m__keyDown[t_data]=false;
				if(t_data==1){
					this.m__keyDown[384]=false;
				}else{
					if(t_data==384){
						this.m__keyDown[1]=false;
					}
				}
			}
		}else{
			if(t_1==3){
				if(this.m__charPut<this.m__charQueue.length){
					this.m__charQueue[this.m__charPut]=t_data;
					this.m__charPut+=1;
				}
			}
		}
	}
}
c_InputDevice.prototype.p_MouseEvent=function(t_event,t_data,t_x,t_y){
	var t_2=t_event;
	if(t_2==4){
		this.p_KeyEvent(1,1+t_data);
	}else{
		if(t_2==5){
			this.p_KeyEvent(2,1+t_data);
			return;
		}else{
			if(t_2==6){
			}else{
				return;
			}
		}
	}
	this.m__mouseX=t_x;
	this.m__mouseY=t_y;
	this.m__touchX[0]=t_x;
	this.m__touchY[0]=t_y;
}
c_InputDevice.prototype.p_TouchEvent=function(t_event,t_data,t_x,t_y){
	var t_3=t_event;
	if(t_3==7){
		this.p_KeyEvent(1,384+t_data);
	}else{
		if(t_3==8){
			this.p_KeyEvent(2,384+t_data);
			return;
		}else{
			if(t_3==9){
			}else{
				return;
			}
		}
	}
	this.m__touchX[t_data]=t_x;
	this.m__touchY[t_data]=t_y;
	if(t_data==0){
		this.m__mouseX=t_x;
		this.m__mouseY=t_y;
	}
}
c_InputDevice.prototype.p_MotionEvent=function(t_event,t_data,t_x,t_y,t_z){
	var t_4=t_event;
	if(t_4==10){
	}else{
		return;
	}
	this.m__accelX=t_x;
	this.m__accelY=t_y;
	this.m__accelZ=t_z;
}
c_InputDevice.prototype.p_MouseX=function(){
	return this.m__mouseX;
}
c_InputDevice.prototype.p_MouseY=function(){
	return this.m__mouseY;
}
c_InputDevice.prototype.p_KeyDown=function(t_key){
	if(t_key>0 && t_key<512){
		return this.m__keyDown[t_key];
	}
	return false;
}
c_InputDevice.prototype.p_KeyHit=function(t_key){
	if(t_key>0 && t_key<512){
		return this.m__keyHit[t_key];
	}
	return 0;
}
function c_JoyState(){
	Object.call(this);
	this.m_joyx=new_number_array(2);
	this.m_joyy=new_number_array(2);
	this.m_joyz=new_number_array(2);
	this.m_buttons=new_bool_array(32);
}
c_JoyState.m_new=function(){
	return this;
}
var bb_input_device=null;
function bb_input_SetInputDevice(t_dev){
	bb_input_device=t_dev;
	return 0;
}
var bb_app__devWidth=0;
var bb_app__devHeight=0;
function bb_app_ValidateDeviceWindow(t_notifyApp){
	var t_w=bb_app__game.GetDeviceWidth();
	var t_h=bb_app__game.GetDeviceHeight();
	if(t_w==bb_app__devWidth && t_h==bb_app__devHeight){
		return;
	}
	bb_app__devWidth=t_w;
	bb_app__devHeight=t_h;
	if(t_notifyApp){
		bb_app__app.p_OnResize();
	}
}
function c_DisplayMode(){
	Object.call(this);
	this.m__width=0;
	this.m__height=0;
}
c_DisplayMode.m_new=function(t_width,t_height){
	this.m__width=t_width;
	this.m__height=t_height;
	return this;
}
c_DisplayMode.m_new2=function(){
	return this;
}
function c_Map(){
	Object.call(this);
	this.m_root=null;
}
c_Map.m_new=function(){
	return this;
}
c_Map.prototype.p_Compare=function(t_lhs,t_rhs){
}
c_Map.prototype.p_FindNode=function(t_key){
	var t_node=this.m_root;
	while((t_node)!=null){
		var t_cmp=this.p_Compare(t_key,t_node.m_key);
		if(t_cmp>0){
			t_node=t_node.m_right;
		}else{
			if(t_cmp<0){
				t_node=t_node.m_left;
			}else{
				return t_node;
			}
		}
	}
	return t_node;
}
c_Map.prototype.p_Contains=function(t_key){
	return this.p_FindNode(t_key)!=null;
}
c_Map.prototype.p_RotateLeft=function(t_node){
	var t_child=t_node.m_right;
	t_node.m_right=t_child.m_left;
	if((t_child.m_left)!=null){
		t_child.m_left.m_parent=t_node;
	}
	t_child.m_parent=t_node.m_parent;
	if((t_node.m_parent)!=null){
		if(t_node==t_node.m_parent.m_left){
			t_node.m_parent.m_left=t_child;
		}else{
			t_node.m_parent.m_right=t_child;
		}
	}else{
		this.m_root=t_child;
	}
	t_child.m_left=t_node;
	t_node.m_parent=t_child;
	return 0;
}
c_Map.prototype.p_RotateRight=function(t_node){
	var t_child=t_node.m_left;
	t_node.m_left=t_child.m_right;
	if((t_child.m_right)!=null){
		t_child.m_right.m_parent=t_node;
	}
	t_child.m_parent=t_node.m_parent;
	if((t_node.m_parent)!=null){
		if(t_node==t_node.m_parent.m_right){
			t_node.m_parent.m_right=t_child;
		}else{
			t_node.m_parent.m_left=t_child;
		}
	}else{
		this.m_root=t_child;
	}
	t_child.m_right=t_node;
	t_node.m_parent=t_child;
	return 0;
}
c_Map.prototype.p_InsertFixup=function(t_node){
	while(((t_node.m_parent)!=null) && t_node.m_parent.m_color==-1 && ((t_node.m_parent.m_parent)!=null)){
		if(t_node.m_parent==t_node.m_parent.m_parent.m_left){
			var t_uncle=t_node.m_parent.m_parent.m_right;
			if(((t_uncle)!=null) && t_uncle.m_color==-1){
				t_node.m_parent.m_color=1;
				t_uncle.m_color=1;
				t_uncle.m_parent.m_color=-1;
				t_node=t_uncle.m_parent;
			}else{
				if(t_node==t_node.m_parent.m_right){
					t_node=t_node.m_parent;
					this.p_RotateLeft(t_node);
				}
				t_node.m_parent.m_color=1;
				t_node.m_parent.m_parent.m_color=-1;
				this.p_RotateRight(t_node.m_parent.m_parent);
			}
		}else{
			var t_uncle2=t_node.m_parent.m_parent.m_left;
			if(((t_uncle2)!=null) && t_uncle2.m_color==-1){
				t_node.m_parent.m_color=1;
				t_uncle2.m_color=1;
				t_uncle2.m_parent.m_color=-1;
				t_node=t_uncle2.m_parent;
			}else{
				if(t_node==t_node.m_parent.m_left){
					t_node=t_node.m_parent;
					this.p_RotateRight(t_node);
				}
				t_node.m_parent.m_color=1;
				t_node.m_parent.m_parent.m_color=-1;
				this.p_RotateLeft(t_node.m_parent.m_parent);
			}
		}
	}
	this.m_root.m_color=1;
	return 0;
}
c_Map.prototype.p_Set=function(t_key,t_value){
	var t_node=this.m_root;
	var t_parent=null;
	var t_cmp=0;
	while((t_node)!=null){
		t_parent=t_node;
		t_cmp=this.p_Compare(t_key,t_node.m_key);
		if(t_cmp>0){
			t_node=t_node.m_right;
		}else{
			if(t_cmp<0){
				t_node=t_node.m_left;
			}else{
				t_node.m_value=t_value;
				return false;
			}
		}
	}
	t_node=c_Node.m_new.call(new c_Node,t_key,t_value,-1,t_parent);
	if((t_parent)!=null){
		if(t_cmp>0){
			t_parent.m_right=t_node;
		}else{
			t_parent.m_left=t_node;
		}
		this.p_InsertFixup(t_node);
	}else{
		this.m_root=t_node;
	}
	return true;
}
c_Map.prototype.p_Insert=function(t_key,t_value){
	return this.p_Set(t_key,t_value);
}
function c_IntMap(){
	c_Map.call(this);
}
c_IntMap.prototype=extend_class(c_Map);
c_IntMap.m_new=function(){
	c_Map.m_new.call(this);
	return this;
}
c_IntMap.prototype.p_Compare=function(t_lhs,t_rhs){
	return t_lhs-t_rhs;
}
function c_Stack(){
	Object.call(this);
	this.m_data=[];
	this.m_length=0;
}
c_Stack.m_new=function(){
	return this;
}
c_Stack.m_new2=function(t_data){
	this.m_data=t_data.slice(0);
	this.m_length=t_data.length;
	return this;
}
c_Stack.prototype.p_Push=function(t_value){
	if(this.m_length==this.m_data.length){
		this.m_data=resize_object_array(this.m_data,this.m_length*2+10);
	}
	this.m_data[this.m_length]=t_value;
	this.m_length+=1;
}
c_Stack.prototype.p_Push2=function(t_values,t_offset,t_count){
	for(var t_i=0;t_i<t_count;t_i=t_i+1){
		this.p_Push(t_values[t_offset+t_i]);
	}
}
c_Stack.prototype.p_Push3=function(t_values,t_offset){
	this.p_Push2(t_values,t_offset,t_values.length-t_offset);
}
c_Stack.prototype.p_ToArray=function(){
	var t_t=new_object_array(this.m_length);
	for(var t_i=0;t_i<this.m_length;t_i=t_i+1){
		t_t[t_i]=this.m_data[t_i];
	}
	return t_t;
}
function c_Node(){
	Object.call(this);
	this.m_key=0;
	this.m_right=null;
	this.m_left=null;
	this.m_value=null;
	this.m_color=0;
	this.m_parent=null;
}
c_Node.m_new=function(t_key,t_value,t_color,t_parent){
	this.m_key=t_key;
	this.m_value=t_value;
	this.m_color=t_color;
	this.m_parent=t_parent;
	return this;
}
c_Node.m_new2=function(){
	return this;
}
var bb_app__displayModes=[];
var bb_app__desktopMode=null;
function bb_app_DeviceWidth(){
	return bb_app__devWidth;
}
function bb_app_DeviceHeight(){
	return bb_app__devHeight;
}
function bb_app_EnumDisplayModes(){
	var t_modes=bb_app__game.GetDisplayModes();
	var t_mmap=c_IntMap.m_new.call(new c_IntMap);
	var t_mstack=c_Stack.m_new.call(new c_Stack);
	for(var t_i=0;t_i<t_modes.length;t_i=t_i+1){
		var t_w=t_modes[t_i].width;
		var t_h=t_modes[t_i].height;
		var t_size=t_w<<16|t_h;
		if(t_mmap.p_Contains(t_size)){
		}else{
			var t_mode=c_DisplayMode.m_new.call(new c_DisplayMode,t_modes[t_i].width,t_modes[t_i].height);
			t_mmap.p_Insert(t_size,t_mode);
			t_mstack.p_Push(t_mode);
		}
	}
	bb_app__displayModes=t_mstack.p_ToArray();
	var t_mode2=bb_app__game.GetDesktopMode();
	if((t_mode2)!=null){
		bb_app__desktopMode=c_DisplayMode.m_new.call(new c_DisplayMode,t_mode2.width,t_mode2.height);
	}else{
		bb_app__desktopMode=c_DisplayMode.m_new.call(new c_DisplayMode,bb_app_DeviceWidth(),bb_app_DeviceHeight());
	}
}
var bb_graphics_renderDevice=null;
function bb_graphics_SetMatrix(t_ix,t_iy,t_jx,t_jy,t_tx,t_ty){
	bb_graphics_context.m_ix=t_ix;
	bb_graphics_context.m_iy=t_iy;
	bb_graphics_context.m_jx=t_jx;
	bb_graphics_context.m_jy=t_jy;
	bb_graphics_context.m_tx=t_tx;
	bb_graphics_context.m_ty=t_ty;
	bb_graphics_context.m_tformed=((t_ix!=1.0 || t_iy!=0.0 || t_jx!=0.0 || t_jy!=1.0 || t_tx!=0.0 || t_ty!=0.0)?1:0);
	bb_graphics_context.m_matDirty=1;
	return 0;
}
function bb_graphics_SetMatrix2(t_m){
	bb_graphics_SetMatrix(t_m[0],t_m[1],t_m[2],t_m[3],t_m[4],t_m[5]);
	return 0;
}
function bb_graphics_SetColor(t_r,t_g,t_b){
	bb_graphics_context.m_color_r=t_r;
	bb_graphics_context.m_color_g=t_g;
	bb_graphics_context.m_color_b=t_b;
	bb_graphics_renderDevice.SetColor(t_r,t_g,t_b);
	return 0;
}
function bb_graphics_SetAlpha(t_alpha){
	bb_graphics_context.m_alpha=t_alpha;
	bb_graphics_renderDevice.SetAlpha(t_alpha);
	return 0;
}
function bb_graphics_SetBlend(t_blend){
	bb_graphics_context.m_blend=t_blend;
	bb_graphics_renderDevice.SetBlend(t_blend);
	return 0;
}
function bb_graphics_SetScissor(t_x,t_y,t_width,t_height){
	bb_graphics_context.m_scissor_x=t_x;
	bb_graphics_context.m_scissor_y=t_y;
	bb_graphics_context.m_scissor_width=t_width;
	bb_graphics_context.m_scissor_height=t_height;
	bb_graphics_renderDevice.SetScissor(((t_x)|0),((t_y)|0),((t_width)|0),((t_height)|0));
	return 0;
}
function bb_graphics_BeginRender(){
	bb_graphics_renderDevice=bb_graphics_device;
	bb_graphics_context.m_matrixSp=0;
	bb_graphics_SetMatrix(1.0,0.0,0.0,1.0,0.0,0.0);
	bb_graphics_SetColor(255.0,255.0,255.0);
	bb_graphics_SetAlpha(1.0);
	bb_graphics_SetBlend(0);
	bb_graphics_SetScissor(0.0,0.0,(bb_app_DeviceWidth()),(bb_app_DeviceHeight()));
	return 0;
}
function bb_graphics_EndRender(){
	bb_graphics_renderDevice=null;
	return 0;
}
function c_BBGameEvent(){
	Object.call(this);
}
function bb_app_EndApp(){
	error("");
}
function c_Scene(){
	Object.call(this);
	this.m_initStacks=[];
	this.m_matchStacks=[];
	this.m_initToolCellLines=[];
	this.m_workCellLines=[];
	this.m_movingStacks=[];
	this.m_workToolCellLines=[];
	this.m_selectedCellLine=null;
	this.m_selectedCellIndex=-1;
	this.m_state=0;
	this.m_stepsSum=0.0;
	this.m_stepsPerFrame=0.0166666667;
}
c_Scene.m_new=function(){
	return this;
}
c_Scene.prototype.p_Reset=function(){
	this.m_movingStacks=bb_cell_CloneCellStackArray(this.m_initStacks);
	this.m_workToolCellLines=bb_cell_CloneCellLineArray(this.m_initToolCellLines);
	bb_cell_NullCellLines(this.m_workCellLines);
	var t_i=0;
	for(t_i=0;t_i<this.m_workCellLines.length;t_i=t_i+1){
	}
	return 0;
}
c_Scene.prototype.p_ArrangeCoordinates=function(){
	var t_col=0;
	var t_row=0;
	var t_i=0;
	var t_cellStack=null;
	t_col=1;
	t_row=bb_config_WORK_LINE_ROWS[0]+1;
	for(t_i=0;t_i<this.m_initStacks.length;t_i=t_i+1){
		t_cellStack=this.m_initStacks[t_i];
		t_cellStack.m_col=t_col;
		t_cellStack.m_row=t_row;
		t_col+=2;
	}
	t_col=18;
	for(t_i=0;t_i<this.m_matchStacks.length;t_i=t_i+1){
		t_cellStack=this.m_matchStacks[t_i];
		t_cellStack.m_col=t_col;
		t_cellStack.m_row=t_row;
		t_col-=2;
	}
	var t_cellLine=null;
	t_col=1;
	for(t_i=0;t_i<this.m_initToolCellLines.length;t_i=t_i+1){
		t_cellLine=this.m_initToolCellLines[t_i];
		t_cellLine.m_row=1;
		t_cellLine.m_col=t_col;
		t_col+=t_cellLine.m_items.length+1;
		t_cellLine.p_RegisterCommands();
	}
	var t_j=0;
	for(t_i=0;t_i<this.m_workCellLines.length;t_i=t_i+1){
		t_cellLine=this.m_workCellLines[t_i];
		t_row=bb_config_WORK_LINE_ROWS[t_j];
		t_col=10-((t_cellLine.m_items.length/2)|0);
		t_cellLine.m_col=t_col;
		t_cellLine.m_row=t_row;
		t_cellLine.p_RegisterCommands();
		t_j+=1;
		if(t_j>=2){
			break;
		}
	}
	this.p_Reset();
	return 0;
}
c_Scene.prototype.p_Move=function(){
	if(this.m_state!=1){
		return 0;
	}
	var t_left=0;
	var t_right=0;
	var t_numMached=0;
	for(t_left=0;t_left<this.m_movingStacks.length;t_left=t_left+1){
		var t_op=null;
		var t_newOp=null;
		var t_v1=0;
		var t_v2=0;
		var t_v=0;
		t_op=bb_cell_GetCloseCellOper(this.m_movingStacks[t_left],this.m_workCellLines);
		if(t_op!=null){
			if(t_op.m_kind==1){
				if(this.m_movingStacks[t_left].p_Length()<2){
					this.m_state=4;
					return 0;
				}
				t_v2=this.m_movingStacks[t_left].p_Pop().m_value;
				t_v1=this.m_movingStacks[t_left].p_Pop().m_value;
				var t_1=t_op.m_value;
				if(t_1==1){
					t_v=t_v1+t_v2;
				}else{
					if(t_1==2){
						t_v=t_v1-t_v2;
					}else{
						if(t_1==3){
							t_v=t_v1*t_v2;
						}else{
							if(t_1==4){
								if(t_v2==0){
									this.m_state=4;
									return 0;
								}
								t_v=((t_v1/t_v2)|0);
							}else{
								if(t_1==5){
									if(t_v2==0){
										this.m_state=4;
										return 0;
									}
									t_v=t_v1 % t_v2;
								}
							}
						}
					}
				}
				t_newOp=bb_oper_NewOper(2,t_v);
				this.m_movingStacks[t_left].p_Push10(t_newOp);
			}else{
				this.m_movingStacks[t_left].p_Push10(t_op);
			}
		}
		t_right=bb_cell_FindSamePositionStack(this.m_matchStacks,this.m_movingStacks[t_left]);
		if(t_right<0){
			if(this.m_movingStacks[t_left].m_col<bb_cell_MaxCol(this.m_matchStacks)){
				this.m_movingStacks[t_left].m_col+=1;
				continue;
			}else{
				this.m_state=4;
				return 0;
			}
		}
		if(this.m_matchStacks[t_right].p_Equal(this.m_movingStacks[t_left])){
			t_numMached+=1;
			continue;
		}else{
			this.m_state=4;
			return 0;
		}
	}
	if(t_numMached>=this.m_movingStacks.length){
		this.m_state=3;
	}
	return 0;
}
c_Scene.prototype.p_DrawCellStackArray=function(t_ary){
	var t_i=0;
	var t_cellStack=null;
	for(t_i=0;t_i<t_ary.length;t_i=t_i+1){
		t_cellStack=t_ary[t_i];
		t_cellStack.p_Draw();
	}
	return 0;
}
c_Scene.prototype.p_DrawCellLineArray=function(t_ary){
	var t_i=0;
	var t_cellLine=null;
	for(t_i=0;t_i<t_ary.length;t_i=t_i+1){
		t_cellLine=t_ary[t_i];
		if(t_cellLine!=null){
			t_cellLine.p_Draw();
		}
	}
	return 0;
}
c_Scene.prototype.p_DrawEndingState=function(){
	if(this.m_state!=4 && this.m_state!=3){
		return 0;
	}
	var t_i=0;
	var t_j=0;
	var t_x=0;
	var t_y=0;
	var t_cellStack=null;
	var t_theColor=null;
	var t_2=this.m_state;
	if(t_2==4){
		t_theColor=bb_color_gCellNotMatchedColor;
	}else{
		if(t_2==3){
			t_theColor=bb_color_gCellMatchedColor;
		}
	}
	for(t_i=0;t_i<this.m_matchStacks.length;t_i=t_i+1){
		t_cellStack=this.m_matchStacks[t_i];
		t_x=t_cellStack.m_col;
		t_y=t_cellStack.m_row;
		for(t_j=0;t_j<t_cellStack.p_Length();t_j=t_j+1){
			bb_cell_DrawCellBorder(t_x,t_y+t_j,t_theColor);
		}
	}
	return 0;
}
c_Scene.prototype.p_DrawSceneIndex=function(){
	var t_cell=null;
	t_cell=c_Cell.m_new2.call(new c_Cell,19,0,2,bb_scene_gSceneIndex);
	t_cell.p_Draw();
	return 0;
}
c_Scene.prototype.p_Draw=function(){
	var t_col=0;
	var t_row=0;
	var t_3=this.m_state;
	if(t_3==0){
		this.p_DrawCellStackArray(this.m_initStacks);
	}else{
		this.p_DrawCellStackArray(this.m_movingStacks);
	}
	this.p_DrawCellStackArray(this.m_matchStacks);
	this.p_DrawCellLineArray(this.m_workCellLines);
	this.p_DrawCellLineArray(this.m_workToolCellLines);
	this.p_DrawEndingState();
	if(this.m_selectedCellIndex>=0){
		t_col=this.m_selectedCellLine.m_col;
		t_row=this.m_selectedCellLine.m_row;
		bb_cell_DrawCellBorder(t_col+this.m_selectedCellIndex,t_row,bb_color_gCellSelectedColor);
	}
	this.p_DrawSceneIndex();
	return 0;
}
function c_JsonParser(){
	Object.call(this);
	this.m__text="";
	this.m__pos=0;
	this.m__toke="";
	this.m__type=0;
}
c_JsonParser.prototype.p_GetChar=function(){
	if(this.m__pos==this.m__text.length){
		bb_json_ThrowError();
	}
	this.m__pos+=1;
	return this.m__text.charCodeAt(this.m__pos-1);
}
c_JsonParser.prototype.p_CParseDigits=function(){
	var t_p=this.m__pos;
	while(this.m__pos<this.m__text.length && this.m__text.charCodeAt(this.m__pos)>=48 && this.m__text.charCodeAt(this.m__pos)<=57){
		this.m__pos+=1;
	}
	return this.m__pos>t_p;
}
c_JsonParser.prototype.p_CParseChar=function(t_chr){
	if(this.m__pos>=this.m__text.length || this.m__text.charCodeAt(this.m__pos)!=t_chr){
		return false;
	}
	this.m__pos+=1;
	return true;
}
c_JsonParser.prototype.p_PeekChar=function(){
	if(this.m__pos==this.m__text.length){
		return 0;
	}
	return this.m__text.charCodeAt(this.m__pos);
}
c_JsonParser.prototype.p_Bump=function(){
	while(this.m__pos<this.m__text.length && this.m__text.charCodeAt(this.m__pos)<=32){
		this.m__pos+=1;
	}
	if(this.m__pos==this.m__text.length){
		this.m__toke="";
		this.m__type=0;
		return this.m__toke;
	}
	var t_pos=this.m__pos;
	var t_chr=this.p_GetChar();
	if(t_chr==34){
		do{
			var t_chr2=this.p_GetChar();
			if(t_chr2==34){
				break;
			}
			if(t_chr2==92){
				this.p_GetChar();
			}
		}while(!(false));
		this.m__type=1;
	}else{
		if(t_chr==45 || t_chr>=48 && t_chr<=57){
			if(t_chr==45){
				t_chr=this.p_GetChar();
				if(t_chr<48 || t_chr>57){
					bb_json_ThrowError();
				}
			}
			if(t_chr!=48){
				this.p_CParseDigits();
			}
			if(this.p_CParseChar(46)){
				this.p_CParseDigits();
			}
			if(this.p_CParseChar(69) || this.p_CParseChar(101)){
				if(this.p_PeekChar()==43 || this.p_PeekChar()==45){
					this.p_GetChar();
				}
				if(!this.p_CParseDigits()){
					bb_json_ThrowError();
				}
			}
			this.m__type=2;
		}else{
			if(t_chr>=65 && t_chr<91 || t_chr>=97 && t_chr<123){
				t_chr=this.p_PeekChar();
				while(t_chr>=65 && t_chr<91 || t_chr>=97 && t_chr<123){
					this.p_GetChar();
					t_chr=this.p_PeekChar();
				}
				this.m__type=4;
			}else{
				this.m__type=3;
			}
		}
	}
	this.m__toke=this.m__text.slice(t_pos,this.m__pos);
	return this.m__toke;
}
c_JsonParser.m_new=function(t_json){
	this.m__text=t_json;
	this.p_Bump();
	return this;
}
c_JsonParser.m_new2=function(){
	return this;
}
c_JsonParser.prototype.p_TokeType=function(){
	return this.m__type;
}
c_JsonParser.prototype.p_Toke=function(){
	return this.m__toke;
}
c_JsonParser.prototype.p_ParseString=function(){
	if(this.p_TokeType()!=1){
		bb_json_ThrowError();
	}
	var t_toke=this.p_Toke().slice(1,-1);
	var t_i=t_toke.indexOf("\\",0);
	if(t_i!=-1){
		var t_frags=c_StringStack.m_new2.call(new c_StringStack);
		var t_p=0;
		var t_esc="";
		do{
			if(t_i+1>=t_toke.length){
				bb_json_ThrowError();
			}
			t_frags.p_Push4(t_toke.slice(t_p,t_i));
			var t_1=t_toke.charCodeAt(t_i+1);
			if(t_1==34){
				t_esc="\"";
			}else{
				if(t_1==92){
					t_esc="\\";
				}else{
					if(t_1==47){
						t_esc="/";
					}else{
						if(t_1==98){
							t_esc=String.fromCharCode(8);
						}else{
							if(t_1==102){
								t_esc=String.fromCharCode(12);
							}else{
								if(t_1==114){
									t_esc=String.fromCharCode(13);
								}else{
									if(t_1==110){
										t_esc=String.fromCharCode(10);
									}else{
										if(t_1==117){
											if(t_i+6>t_toke.length){
												bb_json_ThrowError();
											}
											var t_val=0;
											for(var t_j=2;t_j<6;t_j=t_j+1){
												var t_chr=t_toke.charCodeAt(t_i+t_j);
												if(t_chr>=48 && t_chr<58){
													t_val=t_val<<4|t_chr-48;
												}else{
													if(t_chr>=65 && t_chr<123){
														t_chr&=31;
														if(t_chr<1 || t_chr>6){
															bb_json_ThrowError();
														}
														t_val=t_val<<4|t_chr+9;
													}else{
														bb_json_ThrowError();
													}
												}
											}
											t_esc=String.fromCharCode(t_val);
											t_i+=4;
										}else{
											bb_json_ThrowError();
										}
									}
								}
							}
						}
					}
				}
			}
			t_frags.p_Push4(t_esc);
			t_p=t_i+2;
			t_i=t_toke.indexOf("\\",t_p);
			if(t_i!=-1){
				continue;
			}
			t_frags.p_Push4(t_toke.slice(t_p));
			break;
		}while(!(false));
		t_toke=t_frags.p_Join("");
	}
	this.p_Bump();
	return t_toke;
}
c_JsonParser.prototype.p_ParseNumber=function(){
	if(this.p_TokeType()!=2){
		bb_json_ThrowError();
	}
	var t_toke=this.p_Toke();
	this.p_Bump();
	return t_toke;
}
c_JsonParser.prototype.p_CParse=function(t_toke){
	if(t_toke!=this.m__toke){
		return false;
	}
	this.p_Bump();
	return true;
}
c_JsonParser.prototype.p_Parse=function(t_toke){
	if(!this.p_CParse(t_toke)){
		bb_json_ThrowError();
	}
}
c_JsonParser.prototype.p_ParseObject=function(){
	this.p_Parse("{");
	var t_map=c_StringMap.m_new.call(new c_StringMap);
	if(this.p_CParse("}")){
		return t_map;
	}
	do{
		var t_name=this.p_ParseString();
		this.p_Parse(":");
		var t_value=this.p_ParseValue();
		t_map.p_Set2(t_name,t_value);
	}while(!(!this.p_CParse(",")));
	this.p_Parse("}");
	return t_map;
}
c_JsonParser.prototype.p_ParseArray=function(){
	this.p_Parse("[");
	if(this.p_CParse("]")){
		return [];
	}
	var t_stack=c_Stack3.m_new.call(new c_Stack3);
	do{
		var t_value=this.p_ParseValue();
		t_stack.p_Push7(t_value);
	}while(!(!this.p_CParse(",")));
	this.p_Parse("]");
	return t_stack.p_ToArray();
}
c_JsonParser.prototype.p_ParseValue=function(){
	if(this.p_TokeType()==1){
		return (c_JsonString.m_Instance(this.p_ParseString()));
	}
	if(this.p_TokeType()==2){
		return (c_JsonNumber.m_Instance(this.p_ParseNumber()));
	}
	if(this.p_Toke()=="{"){
		return (c_JsonObject.m_new3.call(new c_JsonObject,this.p_ParseObject()));
	}
	if(this.p_Toke()=="["){
		return (c_JsonArray.m_new2.call(new c_JsonArray,this.p_ParseArray()));
	}
	if(this.p_CParse("true")){
		return (c_JsonBool.m_Instance(true));
	}
	if(this.p_CParse("false")){
		return (c_JsonBool.m_Instance(false));
	}
	if(this.p_CParse("null")){
		return (c_JsonNull.m_Instance());
	}
	bb_json_ThrowError();
	return null;
}
function c_JsonValue(){
	Object.call(this);
}
c_JsonValue.m_new=function(){
	return this;
}
c_JsonValue.prototype.p_IntValue=function(){
	bb_json_ThrowError();
	return 0;
}
function c_JsonArray(){
	c_JsonValue.call(this);
	this.m__data=[];
}
c_JsonArray.prototype=extend_class(c_JsonValue);
c_JsonArray.m_new=function(t_length){
	c_JsonValue.m_new.call(this);
	this.m__data=new_object_array(t_length);
	return this;
}
c_JsonArray.m_new2=function(t_data){
	c_JsonValue.m_new.call(this);
	this.m__data=t_data;
	return this;
}
c_JsonArray.m_new3=function(){
	c_JsonValue.m_new.call(this);
	return this;
}
c_JsonArray.prototype.p_Length=function(){
	return this.m__data.length;
}
c_JsonArray.prototype.p_Get=function(t_index){
	if(t_index<0 || t_index>=this.m__data.length){
		bb_json_ThrowError();
	}
	var t_val=this.m__data[t_index];
	if((t_val)!=null){
		return t_val;
	}
	return (c_JsonNull.m_Instance());
}
c_JsonArray.prototype.p_GetInt=function(t_index){
	return this.p_Get(t_index).p_IntValue();
}
function c_JsonObject(){
	c_JsonValue.call(this);
	this.m__data=null;
}
c_JsonObject.prototype=extend_class(c_JsonValue);
c_JsonObject.m_new=function(){
	c_JsonValue.m_new.call(this);
	this.m__data=c_StringMap.m_new.call(new c_StringMap);
	return this;
}
c_JsonObject.m_new2=function(t_json){
	c_JsonValue.m_new.call(this);
	this.m__data=(c_JsonParser.m_new.call(new c_JsonParser,t_json)).p_ParseObject();
	return this;
}
c_JsonObject.m_new3=function(t_data){
	c_JsonValue.m_new.call(this);
	this.m__data=t_data;
	return this;
}
c_JsonObject.prototype.p_GetData=function(){
	return this.m__data;
}
function bb_app_LoadString(t_path){
	return bb_app__game.LoadString(bb_data_FixDataPath(t_path));
}
function c_JsonError(){
	ThrowableObject.call(this);
}
c_JsonError.prototype=extend_class(ThrowableObject);
c_JsonError.m_new=function(){
	return this;
}
function bb_json_ThrowError(){
	throw c_JsonError.m_new.call(new c_JsonError);
}
function c_Stack2(){
	Object.call(this);
	this.m_data=[];
	this.m_length=0;
}
c_Stack2.m_new=function(){
	return this;
}
c_Stack2.m_new2=function(t_data){
	this.m_data=t_data.slice(0);
	this.m_length=t_data.length;
	return this;
}
c_Stack2.prototype.p_Push4=function(t_value){
	if(this.m_length==this.m_data.length){
		this.m_data=resize_string_array(this.m_data,this.m_length*2+10);
	}
	this.m_data[this.m_length]=t_value;
	this.m_length+=1;
}
c_Stack2.prototype.p_Push5=function(t_values,t_offset,t_count){
	for(var t_i=0;t_i<t_count;t_i=t_i+1){
		this.p_Push4(t_values[t_offset+t_i]);
	}
}
c_Stack2.prototype.p_Push6=function(t_values,t_offset){
	this.p_Push5(t_values,t_offset,t_values.length-t_offset);
}
c_Stack2.prototype.p_ToArray=function(){
	var t_t=new_string_array(this.m_length);
	for(var t_i=0;t_i<this.m_length;t_i=t_i+1){
		t_t[t_i]=this.m_data[t_i];
	}
	return t_t;
}
function c_StringStack(){
	c_Stack2.call(this);
}
c_StringStack.prototype=extend_class(c_Stack2);
c_StringStack.m_new=function(t_data){
	c_Stack2.m_new2.call(this,t_data);
	return this;
}
c_StringStack.m_new2=function(){
	c_Stack2.m_new.call(this);
	return this;
}
c_StringStack.prototype.p_Join=function(t_separator){
	return this.p_ToArray().join(t_separator);
}
function c_JsonString(){
	c_JsonValue.call(this);
	this.m__value="";
}
c_JsonString.prototype=extend_class(c_JsonValue);
c_JsonString.m_new=function(t_value){
	c_JsonValue.m_new.call(this);
	this.m__value=t_value;
	return this;
}
c_JsonString.m_new2=function(){
	c_JsonValue.m_new.call(this);
	return this;
}
c_JsonString.m__null=null;
c_JsonString.m_Instance=function(t_value){
	if((t_value).length!=0){
		return c_JsonString.m_new.call(new c_JsonString,t_value);
	}
	return c_JsonString.m__null;
}
function c_JsonNumber(){
	c_JsonValue.call(this);
	this.m__value="";
}
c_JsonNumber.prototype=extend_class(c_JsonValue);
c_JsonNumber.m_new=function(t_value){
	c_JsonValue.m_new.call(this);
	this.m__value=t_value;
	return this;
}
c_JsonNumber.m_new2=function(){
	c_JsonValue.m_new.call(this);
	return this;
}
c_JsonNumber.m__zero=null;
c_JsonNumber.m_Instance=function(t_value){
	if(t_value!="0"){
		return c_JsonNumber.m_new.call(new c_JsonNumber,t_value);
	}
	return c_JsonNumber.m__zero;
}
c_JsonNumber.prototype.p_IntValue=function(){
	return parseInt((this.m__value),10);
}
function c_Map2(){
	Object.call(this);
	this.m_root=null;
}
c_Map2.m_new=function(){
	return this;
}
c_Map2.prototype.p_Compare2=function(t_lhs,t_rhs){
}
c_Map2.prototype.p_RotateLeft2=function(t_node){
	var t_child=t_node.m_right;
	t_node.m_right=t_child.m_left;
	if((t_child.m_left)!=null){
		t_child.m_left.m_parent=t_node;
	}
	t_child.m_parent=t_node.m_parent;
	if((t_node.m_parent)!=null){
		if(t_node==t_node.m_parent.m_left){
			t_node.m_parent.m_left=t_child;
		}else{
			t_node.m_parent.m_right=t_child;
		}
	}else{
		this.m_root=t_child;
	}
	t_child.m_left=t_node;
	t_node.m_parent=t_child;
	return 0;
}
c_Map2.prototype.p_RotateRight2=function(t_node){
	var t_child=t_node.m_left;
	t_node.m_left=t_child.m_right;
	if((t_child.m_right)!=null){
		t_child.m_right.m_parent=t_node;
	}
	t_child.m_parent=t_node.m_parent;
	if((t_node.m_parent)!=null){
		if(t_node==t_node.m_parent.m_right){
			t_node.m_parent.m_right=t_child;
		}else{
			t_node.m_parent.m_left=t_child;
		}
	}else{
		this.m_root=t_child;
	}
	t_child.m_right=t_node;
	t_node.m_parent=t_child;
	return 0;
}
c_Map2.prototype.p_InsertFixup2=function(t_node){
	while(((t_node.m_parent)!=null) && t_node.m_parent.m_color==-1 && ((t_node.m_parent.m_parent)!=null)){
		if(t_node.m_parent==t_node.m_parent.m_parent.m_left){
			var t_uncle=t_node.m_parent.m_parent.m_right;
			if(((t_uncle)!=null) && t_uncle.m_color==-1){
				t_node.m_parent.m_color=1;
				t_uncle.m_color=1;
				t_uncle.m_parent.m_color=-1;
				t_node=t_uncle.m_parent;
			}else{
				if(t_node==t_node.m_parent.m_right){
					t_node=t_node.m_parent;
					this.p_RotateLeft2(t_node);
				}
				t_node.m_parent.m_color=1;
				t_node.m_parent.m_parent.m_color=-1;
				this.p_RotateRight2(t_node.m_parent.m_parent);
			}
		}else{
			var t_uncle2=t_node.m_parent.m_parent.m_left;
			if(((t_uncle2)!=null) && t_uncle2.m_color==-1){
				t_node.m_parent.m_color=1;
				t_uncle2.m_color=1;
				t_uncle2.m_parent.m_color=-1;
				t_node=t_uncle2.m_parent;
			}else{
				if(t_node==t_node.m_parent.m_left){
					t_node=t_node.m_parent;
					this.p_RotateRight2(t_node);
				}
				t_node.m_parent.m_color=1;
				t_node.m_parent.m_parent.m_color=-1;
				this.p_RotateLeft2(t_node.m_parent.m_parent);
			}
		}
	}
	this.m_root.m_color=1;
	return 0;
}
c_Map2.prototype.p_Set2=function(t_key,t_value){
	var t_node=this.m_root;
	var t_parent=null;
	var t_cmp=0;
	while((t_node)!=null){
		t_parent=t_node;
		t_cmp=this.p_Compare2(t_key,t_node.m_key);
		if(t_cmp>0){
			t_node=t_node.m_right;
		}else{
			if(t_cmp<0){
				t_node=t_node.m_left;
			}else{
				t_node.m_value=t_value;
				return false;
			}
		}
	}
	t_node=c_Node2.m_new.call(new c_Node2,t_key,t_value,-1,t_parent);
	if((t_parent)!=null){
		if(t_cmp>0){
			t_parent.m_right=t_node;
		}else{
			t_parent.m_left=t_node;
		}
		this.p_InsertFixup2(t_node);
	}else{
		this.m_root=t_node;
	}
	return true;
}
c_Map2.prototype.p_FindNode2=function(t_key){
	var t_node=this.m_root;
	while((t_node)!=null){
		var t_cmp=this.p_Compare2(t_key,t_node.m_key);
		if(t_cmp>0){
			t_node=t_node.m_right;
		}else{
			if(t_cmp<0){
				t_node=t_node.m_left;
			}else{
				return t_node;
			}
		}
	}
	return t_node;
}
c_Map2.prototype.p_Get2=function(t_key){
	var t_node=this.p_FindNode2(t_key);
	if((t_node)!=null){
		return t_node.m_value;
	}
	return null;
}
function c_StringMap(){
	c_Map2.call(this);
}
c_StringMap.prototype=extend_class(c_Map2);
c_StringMap.m_new=function(){
	c_Map2.m_new.call(this);
	return this;
}
c_StringMap.prototype.p_Compare2=function(t_lhs,t_rhs){
	return string_compare(t_lhs,t_rhs);
}
function c_Node2(){
	Object.call(this);
	this.m_key="";
	this.m_right=null;
	this.m_left=null;
	this.m_value=null;
	this.m_color=0;
	this.m_parent=null;
}
c_Node2.m_new=function(t_key,t_value,t_color,t_parent){
	this.m_key=t_key;
	this.m_value=t_value;
	this.m_color=t_color;
	this.m_parent=t_parent;
	return this;
}
c_Node2.m_new2=function(){
	return this;
}
function c_Stack3(){
	Object.call(this);
	this.m_data=[];
	this.m_length=0;
}
c_Stack3.m_new=function(){
	return this;
}
c_Stack3.m_new2=function(t_data){
	this.m_data=t_data.slice(0);
	this.m_length=t_data.length;
	return this;
}
c_Stack3.prototype.p_Push7=function(t_value){
	if(this.m_length==this.m_data.length){
		this.m_data=resize_object_array(this.m_data,this.m_length*2+10);
	}
	this.m_data[this.m_length]=t_value;
	this.m_length+=1;
}
c_Stack3.prototype.p_Push8=function(t_values,t_offset,t_count){
	for(var t_i=0;t_i<t_count;t_i=t_i+1){
		this.p_Push7(t_values[t_offset+t_i]);
	}
}
c_Stack3.prototype.p_Push9=function(t_values,t_offset){
	this.p_Push8(t_values,t_offset,t_values.length-t_offset);
}
c_Stack3.prototype.p_ToArray=function(){
	var t_t=new_object_array(this.m_length);
	for(var t_i=0;t_i<this.m_length;t_i=t_i+1){
		t_t[t_i]=this.m_data[t_i];
	}
	return t_t;
}
function c_JsonBool(){
	c_JsonValue.call(this);
	this.m__value=false;
}
c_JsonBool.prototype=extend_class(c_JsonValue);
c_JsonBool.m_new=function(t_value){
	c_JsonValue.m_new.call(this);
	this.m__value=t_value;
	return this;
}
c_JsonBool.m_new2=function(){
	c_JsonValue.m_new.call(this);
	return this;
}
c_JsonBool.m__true=null;
c_JsonBool.m__false=null;
c_JsonBool.m_Instance=function(t_value){
	if(t_value){
		return c_JsonBool.m__true;
	}
	return c_JsonBool.m__false;
}
function c_JsonNull(){
	c_JsonValue.call(this);
}
c_JsonNull.prototype=extend_class(c_JsonValue);
c_JsonNull.m_new=function(){
	c_JsonValue.m_new.call(this);
	return this;
}
c_JsonNull.m__instance=null;
c_JsonNull.m_Instance=function(){
	return c_JsonNull.m__instance;
}
function c_CellStack(){
	Object.call(this);
	this.m_col=0;
	this.m_row=0;
	this.m_items=c_List.m_new.call(new c_List);
}
c_CellStack.m_new=function(t_c,t_r){
	this.m_col=t_c;
	this.m_row=t_r;
	return this;
}
c_CellStack.m_new2=function(){
	return this;
}
c_CellStack.prototype.p_Push10=function(t_o){
	this.m_items.p_AddLast(t_o);
	return 0;
}
c_CellStack.prototype.p_Clone=function(){
	var t_cellStack=c_CellStack.m_new.call(new c_CellStack,this.m_col,this.m_row);
	var t_o=null;
	var t_=this.m_items.p_ObjectEnumerator();
	while(t_.p_HasNext()){
		t_o=t_.p_NextObject();
		t_cellStack.p_Push10(t_o);
	}
	return t_cellStack;
}
c_CellStack.prototype.p_Length=function(){
	return this.m_items.p_Count();
}
c_CellStack.prototype.p_Pop=function(){
	return this.m_items.p_RemoveLast();
}
c_CellStack.prototype.p_SamePosition=function(t_cellStack){
	if(t_cellStack.m_col!=this.m_col || t_cellStack.m_row!=this.m_row){
		return false;
	}
	return true;
}
c_CellStack.prototype.p_Equal=function(t_cellStack){
	if(t_cellStack.m_col!=this.m_col || t_cellStack.m_row!=this.m_row){
		return false;
	}
	var t_this=[];
	var t_that=[];
	t_this=this.m_items.p_ToArray();
	t_that=t_cellStack.m_items.p_ToArray();
	if(t_this.length!=t_that.length){
		return false;
	}
	var t_i=0;
	for(t_i=0;t_i<t_this.length;t_i=t_i+1){
		if(t_this[t_i].m_kind!=t_that[t_i].m_kind || t_this[t_i].m_value!=t_that[t_i].m_value){
			return false;
		}
	}
	return true;
}
c_CellStack.prototype.p_Draw=function(){
	var t_o=null;
	var t_i=0;
	var t_c=null;
	var t_=this.m_items.p_Backwards().p_ObjectEnumerator();
	while(t_.p_HasNext()){
		t_o=t_.p_NextObject();
		t_c=c_Cell.m_new.call(new c_Cell,this.m_col,this.m_row+t_i,t_o);
		t_c.p_Draw();
		t_i+=1;
	}
	return 0;
}
function c_Oper(){
	Object.call(this);
	this.m_value=0;
	this.m_kind=0;
}
c_Oper.m_new=function(){
	return this;
}
c_Oper.prototype.p_Equal2=function(t_o){
	if(this.m_kind==t_o.m_kind && this.m_value==t_o.m_value){
		return true;
	}
	return false;
}
c_Oper.prototype.p_ToString=function(){
	if(this.m_kind==1){
		var t_1=this.m_value;
		if(t_1==1){
			return "+";
		}else{
			if(t_1==2){
				return "-";
			}else{
				if(t_1==3){
					return "*";
				}else{
					if(t_1==4){
						return "/";
					}else{
						if(t_1==5){
							return "%";
						}else{
							if(t_1==6){
								return " ";
							}else{
								return "not implemented";
							}
						}
					}
				}
			}
		}
	}else{
		if(this.m_kind==2){
			return String(this.m_value);
		}else{
			if(this.m_kind==3){
				var t_2=this.m_value;
				if(t_2==5){
					return ">";
				}else{
					if(t_2==1){
						return "||";
					}else{
						if(t_2==2){
							return ">>";
						}else{
							if(t_2==3){
								return "<<";
							}else{
								if(t_2==4){
									return "~";
								}else{
									if(t_2==6){
										return "v";
									}else{
										if(t_2==7){
											return "^";
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
	return "";
}
function c_Operator(){
	c_Oper.call(this);
}
c_Operator.prototype=extend_class(c_Oper);
c_Operator.m_new=function(t_v){
	c_Oper.m_new.call(this);
	this.m_value=t_v;
	this.m_kind=1;
	return this;
}
c_Operator.m_new2=function(){
	c_Oper.m_new.call(this);
	return this;
}
function c_Operand(){
	c_Oper.call(this);
}
c_Operand.prototype=extend_class(c_Oper);
c_Operand.m_new=function(t_v){
	c_Oper.m_new.call(this);
	this.m_value=t_v;
	this.m_kind=2;
	return this;
}
c_Operand.m_new2=function(){
	c_Oper.m_new.call(this);
	return this;
}
function c_Command(){
	c_Oper.call(this);
}
c_Command.prototype=extend_class(c_Oper);
c_Command.m_new=function(t_v){
	c_Oper.m_new.call(this);
	this.m_value=t_v;
	this.m_kind=3;
	return this;
}
c_Command.m_new2=function(){
	c_Oper.m_new.call(this);
	return this;
}
function bb_oper_NewOper(t_kind,t_value){
	var t_o=null;
	if(t_kind==1){
		t_o=(c_Operator.m_new.call(new c_Operator,t_value));
	}else{
		if(t_kind==2){
			t_o=(c_Operand.m_new.call(new c_Operand,t_value));
		}else{
			t_o=(c_Command.m_new.call(new c_Command,t_value));
		}
	}
	return t_o;
}
function c_List(){
	Object.call(this);
	this.m__head=(c_HeadNode.m_new.call(new c_HeadNode));
}
c_List.m_new=function(){
	return this;
}
c_List.prototype.p_AddLast=function(t_data){
	return c_Node3.m_new.call(new c_Node3,this.m__head,this.m__head.m__pred,t_data);
}
c_List.m_new2=function(t_data){
	var t_=t_data;
	var t_2=0;
	while(t_2<t_.length){
		var t_t=t_[t_2];
		t_2=t_2+1;
		this.p_AddLast(t_t);
	}
	return this;
}
c_List.prototype.p_ObjectEnumerator=function(){
	return c_Enumerator.m_new.call(new c_Enumerator,this);
}
c_List.prototype.p_Count=function(){
	var t_n=0;
	var t_node=this.m__head.m__succ;
	while(t_node!=this.m__head){
		t_node=t_node.m__succ;
		t_n+=1;
	}
	return t_n;
}
c_List.prototype.p_RemoveLast=function(){
	var t_data=this.m__head.m__pred.m__data;
	this.m__head.m__pred.p_Remove();
	return t_data;
}
c_List.prototype.p_Equals=function(t_lhs,t_rhs){
	return t_lhs==t_rhs;
}
c_List.prototype.p_FindLast=function(t_value,t_start){
	while(t_start!=this.m__head){
		if(this.p_Equals(t_value,t_start.m__data)){
			return t_start;
		}
		t_start=t_start.m__pred;
	}
	return null;
}
c_List.prototype.p_FindLast2=function(t_value){
	return this.p_FindLast(t_value,this.m__head.m__pred);
}
c_List.prototype.p_RemoveLast2=function(t_value){
	var t_node=this.p_FindLast2(t_value);
	if((t_node)!=null){
		t_node.p_Remove();
	}
}
c_List.prototype.p_ToArray=function(){
	var t_arr=new_object_array(this.p_Count());
	var t_i=0;
	var t_=this.p_ObjectEnumerator();
	while(t_.p_HasNext()){
		var t_t=t_.p_NextObject();
		t_arr[t_i]=t_t;
		t_i+=1;
	}
	return t_arr;
}
c_List.prototype.p_Backwards=function(){
	return c_BackwardsList.m_new.call(new c_BackwardsList,this);
}
function c_Node3(){
	Object.call(this);
	this.m__succ=null;
	this.m__pred=null;
	this.m__data=null;
}
c_Node3.m_new=function(t_succ,t_pred,t_data){
	this.m__succ=t_succ;
	this.m__pred=t_pred;
	this.m__succ.m__pred=this;
	this.m__pred.m__succ=this;
	this.m__data=t_data;
	return this;
}
c_Node3.m_new2=function(){
	return this;
}
c_Node3.prototype.p_Remove=function(){
	this.m__succ.m__pred=this.m__pred;
	this.m__pred.m__succ=this.m__succ;
	return 0;
}
function c_HeadNode(){
	c_Node3.call(this);
}
c_HeadNode.prototype=extend_class(c_Node3);
c_HeadNode.m_new=function(){
	c_Node3.m_new2.call(this);
	this.m__succ=(this);
	this.m__pred=(this);
	return this;
}
function bb_scene_LoadStack(t_ary){
	var t_cellStack=null;
	t_cellStack=c_CellStack.m_new2.call(new c_CellStack);
	var t_i=0;
	var t_value=0;
	var t_oper=null;
	for(t_i=0;t_i<t_ary.p_Length();t_i=t_i+1){
		t_value=t_ary.p_GetInt(t_i);
		t_oper=bb_oper_NewOper(2,t_value);
		t_cellStack.p_Push10(t_oper);
	}
	return t_cellStack;
}
function bb_scene_LoadStackArray(t_jsonObject,t_key){
	var t_strMap=null;
	var t_jsonArray=null;
	var t_cellStack=[];
	var t_i=0;
	t_strMap=t_jsonObject.p_GetData();
	t_jsonArray=object_downcast((t_strMap.p_Get2(t_key)),c_JsonArray);
	t_cellStack=resize_object_array(t_cellStack,t_jsonArray.p_Length());
	for(t_i=0;t_i<t_jsonArray.p_Length();t_i=t_i+1){
		t_cellStack[t_i]=bb_scene_LoadStack(object_downcast((t_jsonArray.p_Get(t_i)),c_JsonArray));
	}
	return t_cellStack;
}
function c_CellLine(){
	Object.call(this);
	this.m_col=0;
	this.m_row=0;
	this.m_items=[];
	this.m_itemsNum=[];
}
c_CellLine.m_new=function(t_col,t_row,t_size){
	this.m_col=t_col;
	this.m_row=t_row;
	this.m_items=resize_object_array(this.m_items,t_size);
	this.m_itemsNum=resize_number_array(this.m_itemsNum,t_size);
	var t_i=0;
	for(t_i=0;t_i<t_size;t_i=t_i+1){
		this.m_items[t_i]=null;
		this.m_itemsNum[t_i]=0;
	}
	return this;
}
c_CellLine.m_new2=function(){
	return this;
}
c_CellLine.prototype.p_Set3=function(t_index,t_value){
	this.m_items[t_index]=t_value;
	return 0;
}
c_CellLine.prototype.p_SetNum=function(t_index,t_n){
	this.m_itemsNum[t_index]=t_n;
	return 0;
}
c_CellLine.prototype.p_RegisterCommands=function(){
	var t_i=0;
	for(t_i=0;t_i<this.m_items.length;t_i=t_i+1){
		bb_command_RegisterCommand(this.m_col+t_i,this.m_row,101);
	}
	return 0;
}
c_CellLine.prototype.p_Clone=function(){
	var t_cellLine=c_CellLine.m_new.call(new c_CellLine,this.m_col,this.m_row,this.m_items.length);
	var t_o=null;
	var t_i=0;
	for(t_i=0;t_i<this.m_items.length;t_i=t_i+1){
		t_o=this.m_items[t_i];
		t_cellLine.m_items[t_i]=t_o;
		t_cellLine.m_itemsNum[t_i]=this.m_itemsNum[t_i];
	}
	return t_cellLine;
}
c_CellLine.prototype.p_GetNum=function(t_index){
	return this.m_itemsNum[t_index];
}
c_CellLine.prototype.p_Get=function(t_index){
	return this.m_items[t_index];
}
c_CellLine.prototype.p_DrawItemNum=function(t_x,t_y,t_num){
	var t_numStr="";
	t_numStr=String(t_num);
	bb_graphics_DrawText(t_numStr,(bb_config_LEFT_MARGIN+t_x*32+32),(bb_config_TOP_MARGIN+this.m_row*24),1.0,0.0);
	return 0;
}
c_CellLine.prototype.p_Draw=function(){
	var t_o=null;
	var t_i=0;
	var t_c=null;
	for(t_i=0;t_i<this.m_items.length;t_i=t_i+1){
		t_o=this.p_Get(t_i);
		if(t_o==null){
			t_o=bb_oper_gEmptyOper;
		}
		t_c=c_Cell.m_new.call(new c_Cell,this.m_col+t_i,this.m_row,t_o);
		t_c.p_Draw();
		if(!bb_cell_IsWorkCellLine(this.m_col+t_i,this.m_row)){
			this.p_DrawItemNum(this.m_col+t_i,this.m_row,this.m_itemsNum[t_i]);
		}
	}
	return 0;
}
function bb_scene_LoadInitToolCellLine(t_ary){
	var t_cellLine=null;
	t_cellLine=c_CellLine.m_new.call(new c_CellLine,-1,-1,t_ary.p_Length());
	var t_i=0;
	var t_kind=0;
	var t_value=0;
	var t_num=0;
	var t_oper=null;
	var t_jsonObj=null;
	var t_strMap=null;
	for(t_i=0;t_i<t_ary.p_Length();t_i=t_i+1){
		t_jsonObj=object_downcast((t_ary.p_Get(t_i)),c_JsonObject);
		t_strMap=t_jsonObj.p_GetData();
		t_kind=t_strMap.p_Get2("kind").p_IntValue();
		t_value=t_strMap.p_Get2("value").p_IntValue();
		t_num=t_strMap.p_Get2("num").p_IntValue();
		t_oper=bb_oper_NewOper(t_kind,t_value);
		t_cellLine.p_Set3(t_i,t_oper);
		t_cellLine.p_SetNum(t_i,t_num);
	}
	return t_cellLine;
}
function bb_scene_LoadInitToolCellLines(t_jsonObject){
	var t_strMap=null;
	var t_jsonArray=null;
	var t_cellLines=[];
	var t_i=0;
	t_strMap=t_jsonObject.p_GetData();
	t_jsonArray=object_downcast((t_strMap.p_Get2("initToolCellLines")),c_JsonArray);
	t_cellLines=resize_object_array(t_cellLines,t_jsonArray.p_Length());
	for(t_i=0;t_i<t_jsonArray.p_Length();t_i=t_i+1){
		t_cellLines[t_i]=bb_scene_LoadInitToolCellLine(object_downcast((t_jsonArray.p_Get(t_i)),c_JsonArray));
	}
	return t_cellLines;
}
function bb_scene_LoadWorkCellLines(t_jsonObject){
	var t_strMap=null;
	var t_jsonArray=null;
	var t_cellLines=[];
	var t_i=0;
	t_strMap=t_jsonObject.p_GetData();
	t_jsonArray=object_downcast((t_strMap.p_Get2("workCellLines")),c_JsonArray);
	t_cellLines=resize_object_array(t_cellLines,t_jsonArray.p_Length());
	for(t_i=0;t_i<t_jsonArray.p_Length();t_i=t_i+1){
		t_cellLines[t_i]=c_CellLine.m_new.call(new c_CellLine,-1,-1,t_jsonArray.p_Get(t_i).p_IntValue());
	}
	return t_cellLines;
}
var bb_config_WORK_LINE_ROWS=[];
function c_Map3(){
	Object.call(this);
	this.m_root=null;
}
c_Map3.m_new=function(){
	return this;
}
c_Map3.prototype.p_Compare=function(t_lhs,t_rhs){
}
c_Map3.prototype.p_RotateLeft3=function(t_node){
	var t_child=t_node.m_right;
	t_node.m_right=t_child.m_left;
	if((t_child.m_left)!=null){
		t_child.m_left.m_parent=t_node;
	}
	t_child.m_parent=t_node.m_parent;
	if((t_node.m_parent)!=null){
		if(t_node==t_node.m_parent.m_left){
			t_node.m_parent.m_left=t_child;
		}else{
			t_node.m_parent.m_right=t_child;
		}
	}else{
		this.m_root=t_child;
	}
	t_child.m_left=t_node;
	t_node.m_parent=t_child;
	return 0;
}
c_Map3.prototype.p_RotateRight3=function(t_node){
	var t_child=t_node.m_left;
	t_node.m_left=t_child.m_right;
	if((t_child.m_right)!=null){
		t_child.m_right.m_parent=t_node;
	}
	t_child.m_parent=t_node.m_parent;
	if((t_node.m_parent)!=null){
		if(t_node==t_node.m_parent.m_right){
			t_node.m_parent.m_right=t_child;
		}else{
			t_node.m_parent.m_left=t_child;
		}
	}else{
		this.m_root=t_child;
	}
	t_child.m_right=t_node;
	t_node.m_parent=t_child;
	return 0;
}
c_Map3.prototype.p_InsertFixup3=function(t_node){
	while(((t_node.m_parent)!=null) && t_node.m_parent.m_color==-1 && ((t_node.m_parent.m_parent)!=null)){
		if(t_node.m_parent==t_node.m_parent.m_parent.m_left){
			var t_uncle=t_node.m_parent.m_parent.m_right;
			if(((t_uncle)!=null) && t_uncle.m_color==-1){
				t_node.m_parent.m_color=1;
				t_uncle.m_color=1;
				t_uncle.m_parent.m_color=-1;
				t_node=t_uncle.m_parent;
			}else{
				if(t_node==t_node.m_parent.m_right){
					t_node=t_node.m_parent;
					this.p_RotateLeft3(t_node);
				}
				t_node.m_parent.m_color=1;
				t_node.m_parent.m_parent.m_color=-1;
				this.p_RotateRight3(t_node.m_parent.m_parent);
			}
		}else{
			var t_uncle2=t_node.m_parent.m_parent.m_left;
			if(((t_uncle2)!=null) && t_uncle2.m_color==-1){
				t_node.m_parent.m_color=1;
				t_uncle2.m_color=1;
				t_uncle2.m_parent.m_color=-1;
				t_node=t_uncle2.m_parent;
			}else{
				if(t_node==t_node.m_parent.m_left){
					t_node=t_node.m_parent;
					this.p_RotateRight3(t_node);
				}
				t_node.m_parent.m_color=1;
				t_node.m_parent.m_parent.m_color=-1;
				this.p_RotateLeft3(t_node.m_parent.m_parent);
			}
		}
	}
	this.m_root.m_color=1;
	return 0;
}
c_Map3.prototype.p_Set4=function(t_key,t_value){
	var t_node=this.m_root;
	var t_parent=null;
	var t_cmp=0;
	while((t_node)!=null){
		t_parent=t_node;
		t_cmp=this.p_Compare(t_key,t_node.m_key);
		if(t_cmp>0){
			t_node=t_node.m_right;
		}else{
			if(t_cmp<0){
				t_node=t_node.m_left;
			}else{
				t_node.m_value=t_value;
				return false;
			}
		}
	}
	t_node=c_Node4.m_new.call(new c_Node4,t_key,t_value,-1,t_parent);
	if((t_parent)!=null){
		if(t_cmp>0){
			t_parent.m_right=t_node;
		}else{
			t_parent.m_left=t_node;
		}
		this.p_InsertFixup3(t_node);
	}else{
		this.m_root=t_node;
	}
	return true;
}
c_Map3.prototype.p_FindNode=function(t_key){
	var t_node=this.m_root;
	while((t_node)!=null){
		var t_cmp=this.p_Compare(t_key,t_node.m_key);
		if(t_cmp>0){
			t_node=t_node.m_right;
		}else{
			if(t_cmp<0){
				t_node=t_node.m_left;
			}else{
				return t_node;
			}
		}
	}
	return t_node;
}
c_Map3.prototype.p_Contains=function(t_key){
	return this.p_FindNode(t_key)!=null;
}
c_Map3.prototype.p_Get=function(t_key){
	var t_node=this.p_FindNode(t_key);
	if((t_node)!=null){
		return t_node.m_value;
	}
	return 0;
}
function c_IntMap2(){
	c_Map3.call(this);
}
c_IntMap2.prototype=extend_class(c_Map3);
c_IntMap2.m_new=function(){
	c_Map3.m_new.call(this);
	return this;
}
c_IntMap2.prototype.p_Compare=function(t_lhs,t_rhs){
	return t_lhs-t_rhs;
}
var bb_command_gAllCommands=null;
function c_Node4(){
	Object.call(this);
	this.m_key=0;
	this.m_right=null;
	this.m_left=null;
	this.m_value=0;
	this.m_color=0;
	this.m_parent=null;
}
c_Node4.m_new=function(t_key,t_value,t_color,t_parent){
	this.m_key=t_key;
	this.m_value=t_value;
	this.m_color=t_color;
	this.m_parent=t_parent;
	return this;
}
c_Node4.m_new2=function(){
	return this;
}
function bb_command_RegisterCommand(t_col,t_row,t_cmd){
	var t_key=0;
	t_key=t_col<<16|t_row;
	bb_command_gAllCommands.p_Set4(t_key,t_cmd);
	return 0;
}
function c_Enumerator(){
	Object.call(this);
	this.m__list=null;
	this.m__curr=null;
}
c_Enumerator.m_new=function(t_list){
	this.m__list=t_list;
	this.m__curr=t_list.m__head.m__succ;
	return this;
}
c_Enumerator.m_new2=function(){
	return this;
}
c_Enumerator.prototype.p_HasNext=function(){
	while(this.m__curr.m__succ.m__pred!=this.m__curr){
		this.m__curr=this.m__curr.m__succ;
	}
	return this.m__curr!=this.m__list.m__head;
}
c_Enumerator.prototype.p_NextObject=function(){
	var t_data=this.m__curr.m__data;
	this.m__curr=this.m__curr.m__succ;
	return t_data;
}
function bb_cell_CloneCellStackArray(t_ary){
	var t_a=[];
	var t_i=0;
	t_a=resize_object_array(t_a,t_ary.length);
	for(t_i=0;t_i<t_ary.length;t_i=t_i+1){
		t_a[t_i]=t_ary[t_i].p_Clone();
	}
	return t_a;
}
function bb_cell_CloneCellLineArray(t_ary){
	var t_a=[];
	var t_i=0;
	t_a=resize_object_array(t_a,t_ary.length);
	for(t_i=0;t_i<t_ary.length;t_i=t_i+1){
		t_a[t_i]=t_ary[t_i].p_Clone();
	}
	return t_a;
}
function bb_cell_NullCellLine(t_cellLine){
	var t_i=0;
	for(t_i=0;t_i<t_cellLine.m_items.length;t_i=t_i+1){
		t_cellLine.m_items[t_i]=null;
		t_cellLine.m_itemsNum[t_i]=0;
	}
	return 0;
}
function bb_cell_NullCellLines(t_cellLines){
	var t_i=0;
	for(t_i=0;t_i<t_cellLines.length;t_i=t_i+1){
		bb_cell_NullCellLine(t_cellLines[t_i]);
	}
	return 0;
}
function bb_scene_LoadScenes(){
	var t_strScenes="";
	var t_jsonParser=null;
	var t_jsonScenesArray=null;
	var t_jsonSceneObject=null;
	var t_sceneArray=[];
	var t_scene=null;
	var t_i=0;
	t_strScenes=bb_app_LoadString("scenes.json");
	t_jsonParser=c_JsonParser.m_new.call(new c_JsonParser,t_strScenes);
	t_jsonScenesArray=object_downcast((t_jsonParser.p_ParseValue()),c_JsonArray);
	t_sceneArray=resize_object_array(t_sceneArray,t_jsonScenesArray.p_Length());
	for(t_i=0;t_i<t_jsonScenesArray.p_Length();t_i=t_i+1){
		t_scene=c_Scene.m_new.call(new c_Scene);
		t_sceneArray[t_i]=t_scene;
		t_jsonSceneObject=object_downcast((t_jsonScenesArray.p_Get(t_i)),c_JsonObject);
		t_scene.m_initStacks=bb_scene_LoadStackArray(t_jsonSceneObject,"initStacks");
		t_scene.m_matchStacks=bb_scene_LoadStackArray(t_jsonSceneObject,"matchStacks");
		t_scene.m_initToolCellLines=bb_scene_LoadInitToolCellLines(t_jsonSceneObject);
		t_scene.m_workCellLines=bb_scene_LoadWorkCellLines(t_jsonSceneObject);
	}
	for(t_i=0;t_i<t_sceneArray.length;t_i=t_i+1){
		t_scene=t_sceneArray[t_i];
		t_scene.p_ArrangeCoordinates();
	}
	return t_sceneArray;
}
var bb_scene_gSceneArray=[];
function c_Cell(){
	Object.call(this);
	this.m_col=0;
	this.m_row=0;
	this.m_item=null;
}
c_Cell.m_new=function(t_c,t_r,t_o){
	this.m_col=t_c;
	this.m_row=t_r;
	this.m_item=t_o;
	return this;
}
c_Cell.m_new2=function(t_c,t_r,t_kind,t_value){
	this.m_col=t_c;
	this.m_row=t_r;
	this.m_item=bb_oper_NewOper(t_kind,t_value);
	return this;
}
c_Cell.m_new3=function(){
	return this;
}
c_Cell.prototype.p_Draw=function(){
	if(this.m_item.m_kind==3){
		bb_graphics_SetColor(bb_color_gCommandColor.m_red,bb_color_gCommandColor.m_green,bb_color_gCommandColor.m_blue);
		bb_cell_DrawCellBorder(this.m_col,this.m_row,bb_color_gCommandColor);
	}else{
		bb_graphics_SetColor(bb_color_gTextColor.m_red,bb_color_gTextColor.m_green,bb_color_gTextColor.m_blue);
		bb_cell_DrawCellBorder(this.m_col,this.m_row,bb_color_gTextColor);
	}
	bb_graphics_DrawText((this.m_item.p_ToString()),(bb_config_LEFT_MARGIN+this.m_col*32+16),(bb_config_TOP_MARGIN+this.m_row*24+12),0.5,0.5);
	return 0;
}
function c_List2(){
	Object.call(this);
	this.m__head=(c_HeadNode2.m_new.call(new c_HeadNode2));
}
c_List2.m_new=function(){
	return this;
}
c_List2.prototype.p_AddLast2=function(t_data){
	return c_Node5.m_new.call(new c_Node5,this.m__head,this.m__head.m__pred,t_data);
}
c_List2.m_new2=function(t_data){
	var t_=t_data;
	var t_2=0;
	while(t_2<t_.length){
		var t_t=t_[t_2];
		t_2=t_2+1;
		this.p_AddLast2(t_t);
	}
	return this;
}
c_List2.prototype.p_ObjectEnumerator=function(){
	return c_Enumerator2.m_new.call(new c_Enumerator2,this);
}
function c_Node5(){
	Object.call(this);
	this.m__succ=null;
	this.m__pred=null;
	this.m__data=null;
}
c_Node5.m_new=function(t_succ,t_pred,t_data){
	this.m__succ=t_succ;
	this.m__pred=t_pred;
	this.m__succ.m__pred=this;
	this.m__pred.m__succ=this;
	this.m__data=t_data;
	return this;
}
c_Node5.m_new2=function(){
	return this;
}
function c_HeadNode2(){
	c_Node5.call(this);
}
c_HeadNode2.prototype=extend_class(c_Node5);
c_HeadNode2.m_new=function(){
	c_Node5.m_new2.call(this);
	this.m__succ=(this);
	this.m__pred=(this);
	return this;
}
var bb_config_LEFT_MARGIN=0;
var bb_config_TOP_MARGIN=0;
var bb_app__updateRate=0;
function bb_app_SetUpdateRate(t_hertz){
	bb_app__updateRate=t_hertz;
	bb_app__game.SetUpdateRate(t_hertz);
}
var bb_scene_gSceneIndex=0;
function c_Vector(){
	Object.call(this);
	this.m_x=0;
	this.m_y=0;
}
c_Vector.m_new=function(t_x,t_y){
	this.m_x=t_x;
	this.m_y=t_y;
	return this;
}
c_Vector.m_new2=function(){
	return this;
}
function bb_input_MouseX(){
	return bb_input_device.p_MouseX();
}
function bb_input_MouseY(){
	return bb_input_device.p_MouseY();
}
function bb_util_PosToCellLocation(t_x,t_y){
	var t_col=0;
	var t_row=0;
	t_x=t_x % 640;
	t_y=t_y % 480;
	t_col=(((t_x-bb_config_LEFT_MARGIN)/32)|0);
	t_row=(((t_y-bb_config_TOP_MARGIN)/24)|0);
	return c_Vector.m_new.call(new c_Vector,t_col,t_row);
}
function bb_input_MouseDown(t_button){
	return ((bb_input_device.p_KeyDown(1+t_button))?1:0);
}
function bb_command_GetCommand(t_col,t_row){
	var t_key=0;
	t_key=t_col<<16|t_row;
	if(!bb_command_gAllCommands.p_Contains(t_key)){
		return -1;
	}
	return bb_command_gAllCommands.p_Get(t_key);
}
function bb_input_MouseHit(t_button){
	return bb_input_device.p_KeyHit(1+t_button);
}
function bb_cell_GetCellLine(t_col,t_row,t_scene){
	var t_i=0;
	var t_cellLine=null;
	for(t_i=0;t_i<t_scene.m_workToolCellLines.length;t_i=t_i+1){
		t_cellLine=t_scene.m_workToolCellLines[t_i];
		if(t_row==t_cellLine.m_row){
			return t_cellLine;
		}
	}
	for(t_i=0;t_i<t_scene.m_workCellLines.length;t_i=t_i+1){
		t_cellLine=t_scene.m_workCellLines[t_i];
		if(t_row==t_cellLine.m_row){
			return t_cellLine;
		}
	}
	return null;
}
function bb_cell_IsWorkCellLine(t_col,t_row){
	var t_i=0;
	for(t_i=0;t_i<bb_config_WORK_LINE_ROWS.length;t_i=t_i+1){
		if(bb_config_WORK_LINE_ROWS[t_i]==t_row){
			return true;
		}
	}
	return false;
}
function bb_cell_IsWorkCellLine2(t_cellLine){
	return bb_cell_IsWorkCellLine(t_cellLine.m_col,t_cellLine.m_row);
}
function bb_command_MoveOper(t_scene,t_cellLine,t_index){
	var t_srcNum=0;
	var t_dstNum=0;
	var t_srcOper=null;
	t_srcOper=t_scene.m_selectedCellLine.p_Get(t_scene.m_selectedCellIndex);
	t_srcNum=t_scene.m_selectedCellLine.p_GetNum(t_scene.m_selectedCellIndex);
	t_srcNum-=1;
	t_scene.m_selectedCellLine.p_SetNum(t_scene.m_selectedCellIndex,t_srcNum);
	t_dstNum=t_cellLine.p_GetNum(t_index);
	t_dstNum+=1;
	t_cellLine.p_Set3(t_index,t_srcOper);
	t_cellLine.p_SetNum(t_index,t_dstNum);
	if(bb_cell_IsWorkCellLine2(t_scene.m_selectedCellLine)){
		if(t_srcNum<=0){
			t_scene.m_selectedCellLine.p_Set3(t_scene.m_selectedCellIndex,null);
		}
	}
	t_scene.m_selectedCellLine=null;
	t_scene.m_selectedCellIndex=-1;
	return 0;
}
function bb_command_HandleCommands(t_scene){
	var t_vector=null;
	t_vector=bb_util_PosToCellLocation(((bb_input_MouseX())|0),((bb_input_MouseY())|0));
	if(bb_input_MouseDown(0)==0){
		return 0;
	}
	var t_cmd=0;
	t_cmd=bb_command_GetCommand(t_vector.m_x,t_vector.m_y);
	if(t_cmd<=0){
		t_scene.m_selectedCellLine=null;
		t_scene.m_selectedCellIndex=-1;
		return 0;
	}
	var t_1=t_cmd;
	if(t_1==5){
		t_scene.m_state=1;
		t_scene.m_stepsSum=0.0;
	}else{
		if(t_1==1){
			t_scene.m_state=2;
		}else{
			if(t_1==2){
				t_scene.m_stepsPerFrame*=2.0;
			}else{
				if(t_1==3){
					t_scene.m_stepsPerFrame/=2.0;
				}else{
					if(t_1==4){
						t_scene.m_state=0;
						t_scene.m_movingStacks=bb_cell_CloneCellStackArray(t_scene.m_initStacks);
					}else{
						if(t_1==7){
							if(bb_input_MouseHit(0)>1){
								return 0;
							}
							bb_scene_gSceneIndex-=1;
							if(bb_scene_gSceneIndex<0){
								bb_scene_gSceneIndex=bb_scene_gSceneArray.length-1;
							}
						}else{
							if(t_1==6){
								if((bb_input_MouseHit(0))!=0){
									return 0;
								}
								bb_scene_gSceneIndex+=1;
								if(bb_scene_gSceneIndex>=bb_scene_gSceneArray.length){
									bb_scene_gSceneIndex=0;
								}
							}else{
								if(t_1==101){
									var t_cellLine=null;
									var t_index=0;
									var t_srcNum=0;
									var t_dstNum=0;
									var t_srcOper=null;
									var t_dstOper=null;
									t_cellLine=bb_cell_GetCellLine(t_vector.m_x,t_vector.m_y,t_scene);
									t_index=t_vector.m_x-t_cellLine.m_col;
									if(t_scene.m_selectedCellIndex<0){
										t_dstNum=t_cellLine.p_GetNum(t_index);
										if(t_dstNum>0){
											t_scene.m_selectedCellLine=t_cellLine;
											t_scene.m_selectedCellIndex=t_index;
										}else{
											t_scene.m_selectedCellLine=null;
											t_scene.m_selectedCellIndex=-1;
										}
									}else{
										if(t_scene.m_selectedCellLine==t_cellLine){
											if(t_scene.m_selectedCellIndex==t_index){
											}else{
												t_dstNum=t_cellLine.p_GetNum(t_index);
												if(t_dstNum>0){
													t_scene.m_selectedCellIndex=t_index;
												}else{
													if(bb_cell_IsWorkCellLine2(t_cellLine)){
														bb_command_MoveOper(t_scene,t_cellLine,t_index);
													}else{
														t_scene.m_selectedCellLine=null;
														t_scene.m_selectedCellIndex=-1;
													}
												}
											}
										}else{
											t_dstNum=t_cellLine.p_GetNum(t_index);
											if(t_dstNum>0){
												if(bb_cell_IsWorkCellLine2(t_cellLine)){
													t_scene.m_selectedCellIndex=t_index;
													t_scene.m_selectedCellLine=t_cellLine;
												}else{
													t_srcOper=t_scene.m_selectedCellLine.p_Get(t_scene.m_selectedCellIndex);
													t_dstOper=t_cellLine.p_Get(t_index);
													if(t_srcOper.p_Equal2(t_dstOper)){
														bb_command_MoveOper(t_scene,t_cellLine,t_index);
													}else{
														t_scene.m_selectedCellIndex=t_index;
														t_scene.m_selectedCellLine=t_cellLine;
													}
												}
											}else{
												bb_command_MoveOper(t_scene,t_cellLine,t_index);
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
	return 0;
}
function bb_cell_GetCloseCellLine(t_cellStack,t_cellLineArray){
	var t_i=-1;
	for(t_i=0;t_i<t_cellLineArray.length;t_i=t_i+1){
		if(t_cellLineArray[t_i].m_row==t_cellStack.m_row-1){
			return t_i;
		}
	}
	return t_i;
}
function bb_cell_GetCloseCellOper(t_cellStack,t_cellLineArray){
	var t_c=null;
	var t_cellLine=null;
	var t_i=0;
	var t_col=0;
	var t_x=0;
	t_i=bb_cell_GetCloseCellLine(t_cellStack,t_cellLineArray);
	t_cellLine=t_cellLineArray[t_i];
	t_col=t_cellLine.m_col;
	for(t_i=0;t_i<t_cellLine.m_items.length;t_i=t_i+1){
		t_x=t_col+t_i;
		if(t_x==t_cellStack.m_col){
			return t_cellLine.p_Get(t_i);
		}
	}
	return null;
}
function bb_cell_FindSamePositionStack(t_ary,t_cellStack){
	var t_i=0;
	for(t_i=0;t_i<t_ary.length;t_i=t_i+1){
		if(t_ary[t_i].p_SamePosition(t_cellStack)){
			return t_i;
		}
	}
	return -1;
}
function bb_cell_MaxCol(t_ary){
	var t_maxCol=-1;
	var t_i=0;
	for(t_i=0;t_i<t_ary.length;t_i=t_i+1){
		if(t_ary[t_i].m_col>t_maxCol){
			t_maxCol=t_ary[t_i].m_col;
		}
	}
	return t_maxCol;
}
function c_Color(){
	Object.call(this);
	this.m_red=.0;
	this.m_green=.0;
	this.m_blue=.0;
}
c_Color.m_new=function(t_r,t_g,t_b){
	this.m_red=(t_r);
	this.m_green=(t_g);
	this.m_blue=t_b;
	return this;
}
c_Color.m_new2=function(){
	return this;
}
var bb_color_gBackGroundColor=null;
function bb_graphics_Cls(t_r,t_g,t_b){
	bb_graphics_renderDevice.Cls(t_r,t_g,t_b);
	return 0;
}
var bb_color_gGridLineColor=null;
function bb_graphics_DrawLine(t_x1,t_y1,t_x2,t_y2){
	bb_graphics_context.p_Validate();
	bb_graphics_renderDevice.DrawLine(t_x1,t_y1,t_x2,t_y2);
	return 0;
}
function c_Enumerator2(){
	Object.call(this);
	this.m__list=null;
	this.m__curr=null;
}
c_Enumerator2.m_new=function(t_list){
	this.m__list=t_list;
	this.m__curr=t_list.m__head.m__succ;
	return this;
}
c_Enumerator2.m_new2=function(){
	return this;
}
c_Enumerator2.prototype.p_HasNext=function(){
	while(this.m__curr.m__succ.m__pred!=this.m__curr){
		this.m__curr=this.m__curr.m__succ;
	}
	return this.m__curr!=this.m__list.m__head;
}
c_Enumerator2.prototype.p_NextObject=function(){
	var t_data=this.m__curr.m__data;
	this.m__curr=this.m__curr.m__succ;
	return t_data;
}
var bb_color_gCommandColor=null;
function bb_cell_DrawCellBorder(t_col,t_row,t_c){
	var t_x=0;
	var t_y=0;
	bb_graphics_SetColor(t_c.m_red,t_c.m_green,t_c.m_blue);
	t_x=bb_config_LEFT_MARGIN+t_col*32;
	t_y=bb_config_TOP_MARGIN+t_row*24;
	bb_graphics_DrawLine((t_x),(t_y),(t_x+32),(t_y));
	bb_graphics_DrawLine((t_x),(t_y+24),(t_x+32),(t_y+24));
	bb_graphics_DrawLine((t_x),(t_y),(t_x),(t_y+24));
	bb_graphics_DrawLine((t_x+32),(t_y),(t_x+32),(t_y+24));
	return 0;
}
var bb_color_gTextColor=null;
function bb_graphics_DrawImage(t_image,t_x,t_y,t_frame){
	var t_f=t_image.m_frames[t_frame];
	bb_graphics_context.p_Validate();
	if((t_image.m_flags&65536)!=0){
		bb_graphics_renderDevice.DrawSurface(t_image.m_surface,t_x-t_image.m_tx,t_y-t_image.m_ty);
	}else{
		bb_graphics_renderDevice.DrawSurface2(t_image.m_surface,t_x-t_image.m_tx,t_y-t_image.m_ty,t_f.m_x,t_f.m_y,t_image.m_width,t_image.m_height);
	}
	return 0;
}
function bb_graphics_PushMatrix(){
	var t_sp=bb_graphics_context.m_matrixSp;
	if(t_sp==bb_graphics_context.m_matrixStack.length){
		bb_graphics_context.m_matrixStack=resize_number_array(bb_graphics_context.m_matrixStack,t_sp*2);
	}
	bb_graphics_context.m_matrixStack[t_sp+0]=bb_graphics_context.m_ix;
	bb_graphics_context.m_matrixStack[t_sp+1]=bb_graphics_context.m_iy;
	bb_graphics_context.m_matrixStack[t_sp+2]=bb_graphics_context.m_jx;
	bb_graphics_context.m_matrixStack[t_sp+3]=bb_graphics_context.m_jy;
	bb_graphics_context.m_matrixStack[t_sp+4]=bb_graphics_context.m_tx;
	bb_graphics_context.m_matrixStack[t_sp+5]=bb_graphics_context.m_ty;
	bb_graphics_context.m_matrixSp=t_sp+6;
	return 0;
}
function bb_graphics_Transform(t_ix,t_iy,t_jx,t_jy,t_tx,t_ty){
	var t_ix2=t_ix*bb_graphics_context.m_ix+t_iy*bb_graphics_context.m_jx;
	var t_iy2=t_ix*bb_graphics_context.m_iy+t_iy*bb_graphics_context.m_jy;
	var t_jx2=t_jx*bb_graphics_context.m_ix+t_jy*bb_graphics_context.m_jx;
	var t_jy2=t_jx*bb_graphics_context.m_iy+t_jy*bb_graphics_context.m_jy;
	var t_tx2=t_tx*bb_graphics_context.m_ix+t_ty*bb_graphics_context.m_jx+bb_graphics_context.m_tx;
	var t_ty2=t_tx*bb_graphics_context.m_iy+t_ty*bb_graphics_context.m_jy+bb_graphics_context.m_ty;
	bb_graphics_SetMatrix(t_ix2,t_iy2,t_jx2,t_jy2,t_tx2,t_ty2);
	return 0;
}
function bb_graphics_Transform2(t_m){
	bb_graphics_Transform(t_m[0],t_m[1],t_m[2],t_m[3],t_m[4],t_m[5]);
	return 0;
}
function bb_graphics_Translate(t_x,t_y){
	bb_graphics_Transform(1.0,0.0,0.0,1.0,t_x,t_y);
	return 0;
}
function bb_graphics_Rotate(t_angle){
	bb_graphics_Transform(Math.cos((t_angle)*D2R),-Math.sin((t_angle)*D2R),Math.sin((t_angle)*D2R),Math.cos((t_angle)*D2R),0.0,0.0);
	return 0;
}
function bb_graphics_Scale(t_x,t_y){
	bb_graphics_Transform(t_x,0.0,0.0,t_y,0.0,0.0);
	return 0;
}
function bb_graphics_PopMatrix(){
	var t_sp=bb_graphics_context.m_matrixSp-6;
	bb_graphics_SetMatrix(bb_graphics_context.m_matrixStack[t_sp+0],bb_graphics_context.m_matrixStack[t_sp+1],bb_graphics_context.m_matrixStack[t_sp+2],bb_graphics_context.m_matrixStack[t_sp+3],bb_graphics_context.m_matrixStack[t_sp+4],bb_graphics_context.m_matrixStack[t_sp+5]);
	bb_graphics_context.m_matrixSp=t_sp;
	return 0;
}
function bb_graphics_DrawImage2(t_image,t_x,t_y,t_rotation,t_scaleX,t_scaleY,t_frame){
	var t_f=t_image.m_frames[t_frame];
	bb_graphics_PushMatrix();
	bb_graphics_Translate(t_x,t_y);
	bb_graphics_Rotate(t_rotation);
	bb_graphics_Scale(t_scaleX,t_scaleY);
	bb_graphics_Translate(-t_image.m_tx,-t_image.m_ty);
	bb_graphics_context.p_Validate();
	if((t_image.m_flags&65536)!=0){
		bb_graphics_renderDevice.DrawSurface(t_image.m_surface,0.0,0.0);
	}else{
		bb_graphics_renderDevice.DrawSurface2(t_image.m_surface,0.0,0.0,t_f.m_x,t_f.m_y,t_image.m_width,t_image.m_height);
	}
	bb_graphics_PopMatrix();
	return 0;
}
function bb_graphics_DrawText(t_text,t_x,t_y,t_xalign,t_yalign){
	if(!((bb_graphics_context.m_font)!=null)){
		return 0;
	}
	var t_w=bb_graphics_context.m_font.p_Width();
	var t_h=bb_graphics_context.m_font.p_Height();
	t_x-=Math.floor((t_w*t_text.length)*t_xalign);
	t_y-=Math.floor((t_h)*t_yalign);
	for(var t_i=0;t_i<t_text.length;t_i=t_i+1){
		var t_ch=t_text.charCodeAt(t_i)-bb_graphics_context.m_firstChar;
		if(t_ch>=0 && t_ch<bb_graphics_context.m_font.p_Frames()){
			bb_graphics_DrawImage(bb_graphics_context.m_font,t_x+(t_i*t_w),t_y,t_ch);
		}
	}
	return 0;
}
function bb_numfac_DrawCellList(t_list){
	var t_cell=null;
	var t_=t_list.p_ObjectEnumerator();
	while(t_.p_HasNext()){
		t_cell=t_.p_NextObject();
		t_cell.p_Draw();
	}
	return 0;
}
var bb_color_gCellClickColor=null;
var bb_color_gCellFocusColor=null;
function bb_numfac_DrawCellStatus(){
	var t_vector=null;
	t_vector=bb_util_PosToCellLocation(((bb_input_MouseX())|0),((bb_input_MouseY())|0));
	if(bb_input_MouseDown(0)!=0){
		bb_cell_DrawCellBorder(t_vector.m_x,t_vector.m_y,bb_color_gCellClickColor);
	}else{
		bb_cell_DrawCellBorder(t_vector.m_x,t_vector.m_y,bb_color_gCellFocusColor);
	}
	return 0;
}
function c_BackwardsList(){
	Object.call(this);
	this.m__list=null;
}
c_BackwardsList.m_new=function(t_list){
	this.m__list=t_list;
	return this;
}
c_BackwardsList.m_new2=function(){
	return this;
}
c_BackwardsList.prototype.p_ObjectEnumerator=function(){
	return c_BackwardsEnumerator.m_new.call(new c_BackwardsEnumerator,this.m__list);
}
function c_BackwardsEnumerator(){
	Object.call(this);
	this.m__list=null;
	this.m__curr=null;
}
c_BackwardsEnumerator.m_new=function(t_list){
	this.m__list=t_list;
	this.m__curr=t_list.m__head.m__pred;
	return this;
}
c_BackwardsEnumerator.m_new2=function(){
	return this;
}
c_BackwardsEnumerator.prototype.p_HasNext=function(){
	while(this.m__curr.m__pred.m__succ!=this.m__curr){
		this.m__curr=this.m__curr.m__pred;
	}
	return this.m__curr!=this.m__list.m__head;
}
c_BackwardsEnumerator.prototype.p_NextObject=function(){
	var t_data=this.m__curr.m__data;
	this.m__curr=this.m__curr.m__pred;
	return t_data;
}
var bb_oper_gEmptyOper=null;
var bb_color_gCellNotMatchedColor=null;
var bb_color_gCellMatchedColor=null;
var bb_color_gCellSelectedColor=null;
function bbInit(){
	bb_app__app=null;
	bb_app__delegate=null;
	bb_app__game=BBGame.Game();
	bb_graphics_device=null;
	bb_graphics_context=c_GraphicsContext.m_new.call(new c_GraphicsContext);
	c_Image.m_DefaultFlags=0;
	bb_audio_device=null;
	bb_input_device=null;
	bb_app__devWidth=0;
	bb_app__devHeight=0;
	bb_app__displayModes=[];
	bb_app__desktopMode=null;
	bb_graphics_renderDevice=null;
	c_JsonString.m__null=c_JsonString.m_new.call(new c_JsonString,"");
	c_JsonNumber.m__zero=c_JsonNumber.m_new.call(new c_JsonNumber,"0");
	c_JsonBool.m__true=c_JsonBool.m_new.call(new c_JsonBool,true);
	c_JsonBool.m__false=c_JsonBool.m_new.call(new c_JsonBool,false);
	c_JsonNull.m__instance=c_JsonNull.m_new.call(new c_JsonNull);
	bb_config_WORK_LINE_ROWS=[3,12];
	bb_command_gAllCommands=c_IntMap2.m_new.call(new c_IntMap2);
	bb_scene_gSceneArray=[];
	bb_config_LEFT_MARGIN=0;
	bb_config_TOP_MARGIN=0;
	bb_app__updateRate=0;
	bb_scene_gSceneIndex=0;
	bb_color_gBackGroundColor=c_Color.m_new.call(new c_Color,0,0,0.0);
	bb_color_gGridLineColor=c_Color.m_new.call(new c_Color,96,99,99.0);
	bb_color_gCommandColor=c_Color.m_new.call(new c_Color,250,250,1.0);
	bb_color_gTextColor=c_Color.m_new.call(new c_Color,255,255,255.0);
	bb_color_gCellClickColor=c_Color.m_new.call(new c_Color,250,1,1.0);
	bb_color_gCellFocusColor=c_Color.m_new.call(new c_Color,57,178,196.0);
	bb_oper_gEmptyOper=bb_oper_NewOper(1,6);
	bb_color_gCellNotMatchedColor=c_Color.m_new.call(new c_Color,237,38,231.0);
	bb_color_gCellMatchedColor=c_Color.m_new.call(new c_Color,0,255,0.0);
	bb_color_gCellSelectedColor=c_Color.m_new.call(new c_Color,0,0,255.0);
}
//${TRANSCODE_END}
