/* start module: pyjamas.ui.DropHandler */
$pyjs.loaded_modules['pyjamas.ui.DropHandler'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.DropHandler'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.DropHandler'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.DropHandler"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.DropHandler>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.DropHandler';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.ui']['DropHandler'] = $pyjs.loaded_modules['pyjamas.ui.DropHandler'];


	$m['DOM'] = $p['___import___']('gwt.ui.DropHandler.DOM', 'pyjamas.ui', null, false);
	$m['DROP_EVENTS'] = $p['___import___']('gwt.ui.DropHandler.DROP_EVENTS', 'pyjamas.ui', null, false);
	$m['DropHandler'] = $p['___import___']('gwt.ui.DropHandler.DropHandler', 'pyjamas.ui', null, false);
	$m['Event'] = $p['___import___']('gwt.ui.DropHandler.Event', 'pyjamas.ui', null, false);
	$m['fireDropEvent'] = $p['___import___']('gwt.ui.DropHandler.fireDropEvent', 'pyjamas.ui', null, false);
	return this;
}; /* end pyjamas.ui.DropHandler */


/* end module: pyjamas.ui.DropHandler */


/*
PYJS_DEPS: ['gwt.ui.DropHandler.DOM', 'gwt', 'gwt.ui', 'gwt.ui.DropHandler', 'gwt.ui.DropHandler.DROP_EVENTS', 'gwt.ui.DropHandler.DropHandler', 'gwt.ui.DropHandler.Event', 'gwt.ui.DropHandler.fireDropEvent']
*/
