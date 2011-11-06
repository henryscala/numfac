/* start module: pyjamas.ui.FocusListener */
$pyjs.loaded_modules['pyjamas.ui.FocusListener'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.FocusListener'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.FocusListener'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.FocusListener"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.FocusListener>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.FocusListener';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.ui']['FocusListener'] = $pyjs.loaded_modules['pyjamas.ui.FocusListener'];


	$m['DOM'] = $p['___import___']('gwt.ui.FocusListener.DOM', 'pyjamas.ui', null, false);
	$m['Event'] = $p['___import___']('gwt.ui.FocusListener.Event', 'pyjamas.ui', null, false);
	$m['FOCUS_EVENTS'] = $p['___import___']('gwt.ui.FocusListener.FOCUS_EVENTS', 'pyjamas.ui', null, false);
	$m['FocusHandler'] = $p['___import___']('gwt.ui.FocusListener.FocusHandler', 'pyjamas.ui', null, false);
	$m['fireFocusEvent'] = $p['___import___']('gwt.ui.FocusListener.fireFocusEvent', 'pyjamas.ui', null, false);
	return this;
}; /* end pyjamas.ui.FocusListener */


/* end module: pyjamas.ui.FocusListener */


/*
PYJS_DEPS: ['gwt.ui.FocusListener.DOM', 'gwt', 'gwt.ui', 'gwt.ui.FocusListener', 'gwt.ui.FocusListener.Event', 'gwt.ui.FocusListener.FOCUS_EVENTS', 'gwt.ui.FocusListener.FocusHandler', 'gwt.ui.FocusListener.fireFocusEvent']
*/
