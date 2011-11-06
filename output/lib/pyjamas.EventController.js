/* start module: pyjamas.EventController */
$pyjs.loaded_modules['pyjamas.EventController'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.EventController'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.EventController'];
	if(typeof $pyjs.loaded_modules['pyjamas'] == 'undefined' || !$pyjs.loaded_modules['pyjamas'].__was_initialized__) $p['___import___']('pyjamas', null);
	var $m = $pyjs.loaded_modules["pyjamas.EventController"];
	$m.__repr__ = function() { return "<module: pyjamas.EventController>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.EventController';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas']['EventController'] = $pyjs.loaded_modules['pyjamas.EventController'];


	$m['EventGenerator'] = $p['___import___']('gwt.EventController.EventGenerator', 'pyjamas', null, false);
	$m['EventListener'] = $p['___import___']('gwt.EventController.EventListener', 'pyjamas', null, false);
	$m['Handler'] = $p['___import___']('gwt.EventController.Handler', 'pyjamas', null, false);
	return this;
}; /* end pyjamas.EventController */


/* end module: pyjamas.EventController */


/*
PYJS_DEPS: ['gwt.EventController.EventGenerator', 'gwt', 'gwt.EventController', 'gwt.EventController.EventListener', 'gwt.EventController.Handler']
*/
