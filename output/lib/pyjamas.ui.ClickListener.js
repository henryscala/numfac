/* start module: pyjamas.ui.ClickListener */
$pyjs.loaded_modules['pyjamas.ui.ClickListener'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.ClickListener'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.ClickListener'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.ClickListener"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.ClickListener>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.ClickListener';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.ui']['ClickListener'] = $pyjs.loaded_modules['pyjamas.ui.ClickListener'];


	$m['ClickHandler'] = $p['___import___']('gwt.ui.ClickListener.ClickHandler', 'pyjamas.ui', null, false);
	$m['DOM'] = $p['___import___']('gwt.ui.ClickListener.DOM', 'pyjamas.ui', null, false);
	$m['Event'] = $p['___import___']('gwt.ui.ClickListener.Event', 'pyjamas.ui', null, false);
	return this;
}; /* end pyjamas.ui.ClickListener */


/* end module: pyjamas.ui.ClickListener */


/*
PYJS_DEPS: ['gwt.ui.ClickListener.ClickHandler', 'gwt', 'gwt.ui', 'gwt.ui.ClickListener', 'gwt.ui.ClickListener.DOM', 'gwt.ui.ClickListener.Event']
*/
