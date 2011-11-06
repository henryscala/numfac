/* start module: pyjamas.Timer */
$pyjs.loaded_modules['pyjamas.Timer'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.Timer'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.Timer'];
	if(typeof $pyjs.loaded_modules['pyjamas'] == 'undefined' || !$pyjs.loaded_modules['pyjamas'].__was_initialized__) $p['___import___']('pyjamas', null);
	var $m = $pyjs.loaded_modules["pyjamas.Timer"];
	$m.__repr__ = function() { return "<module: pyjamas.Timer>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.Timer';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas']['Timer'] = $pyjs.loaded_modules['pyjamas.Timer'];


	$m['Timer'] = $p['___import___']('gwt.Timer.Timer', 'pyjamas', null, false);
	$m['Window'] = $p['___import___']('gwt.Timer.Window', 'pyjamas', null, false);
	$m['pyjd'] = $p['___import___']('gwt.Timer.pyjd', 'pyjamas', null, false);
	return this;
}; /* end pyjamas.Timer */


/* end module: pyjamas.Timer */


/*
PYJS_DEPS: ['gwt.Timer.Timer', 'gwt', 'gwt.Timer', 'gwt.Timer.Window', 'gwt.Timer.pyjd']
*/
