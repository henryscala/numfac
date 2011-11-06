/* start module: pyjamas.ui.MouseListener */
$pyjs.loaded_modules['pyjamas.ui.MouseListener'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.MouseListener'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.MouseListener'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.MouseListener"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.MouseListener>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.MouseListener';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.ui']['MouseListener'] = $pyjs.loaded_modules['pyjamas.ui.MouseListener'];


	$m['DOM'] = $p['___import___']('gwt.ui.MouseListener.DOM', 'pyjamas.ui', null, false);
	$m['Event'] = $p['___import___']('gwt.ui.MouseListener.Event', 'pyjamas.ui', null, false);
	$m['Handler'] = $p['___import___']('gwt.ui.MouseListener.Handler', 'pyjamas.ui', null, false);
	$m['MOUSE_EVENTS'] = $p['___import___']('gwt.ui.MouseListener.MOUSE_EVENTS', 'pyjamas.ui', null, false);
	$m['MouseHandler'] = $p['___import___']('gwt.ui.MouseListener.MouseHandler', 'pyjamas.ui', null, false);
	$m['MouseWheelHandler'] = $p['___import___']('gwt.ui.MouseListener.MouseWheelHandler', 'pyjamas.ui', null, false);
	$m['fireMouseEvent'] = $p['___import___']('gwt.ui.MouseListener.fireMouseEvent', 'pyjamas.ui', null, false);
	return this;
}; /* end pyjamas.ui.MouseListener */


/* end module: pyjamas.ui.MouseListener */


/*
PYJS_DEPS: ['gwt.ui.MouseListener.DOM', 'gwt', 'gwt.ui', 'gwt.ui.MouseListener', 'gwt.ui.MouseListener.Event', 'gwt.ui.MouseListener.Handler', 'gwt.ui.MouseListener.MOUSE_EVENTS', 'gwt.ui.MouseListener.MouseHandler', 'gwt.ui.MouseListener.MouseWheelHandler', 'gwt.ui.MouseListener.fireMouseEvent']
*/
