/* start module: pyjamas.ui.DragHandler */
$pyjs.loaded_modules['pyjamas.ui.DragHandler'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.DragHandler'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.DragHandler'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.DragHandler"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.DragHandler>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.DragHandler';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.ui']['DragHandler'] = $pyjs.loaded_modules['pyjamas.ui.DragHandler'];


	$m['DOM'] = $p['___import___']('gwt.ui.DragHandler.DOM', 'pyjamas.ui', null, false);
	$m['DRAG_EVENTS'] = $p['___import___']('gwt.ui.DragHandler.DRAG_EVENTS', 'pyjamas.ui', null, false);
	$m['DragHandler'] = $p['___import___']('gwt.ui.DragHandler.DragHandler', 'pyjamas.ui', null, false);
	$m['Event'] = $p['___import___']('gwt.ui.DragHandler.Event', 'pyjamas.ui', null, false);
	$m['fireDragEvent'] = $p['___import___']('gwt.ui.DragHandler.fireDragEvent', 'pyjamas.ui', null, false);
	return this;
}; /* end pyjamas.ui.DragHandler */


/* end module: pyjamas.ui.DragHandler */


/*
PYJS_DEPS: ['gwt.ui.DragHandler.DOM', 'gwt', 'gwt.ui', 'gwt.ui.DragHandler', 'gwt.ui.DragHandler.DRAG_EVENTS', 'gwt.ui.DragHandler.DragHandler', 'gwt.ui.DragHandler.Event', 'gwt.ui.DragHandler.fireDragEvent']
*/
