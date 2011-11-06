/* start module: pyjamas.ui.Focus */
$pyjs.loaded_modules['pyjamas.ui.Focus'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.Focus'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.Focus'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.Focus"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.Focus>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.Focus';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.ui']['Focus'] = $pyjs.loaded_modules['pyjamas.ui.Focus'];


	$m['DOM'] = $p['___import___']('gwt.ui.Focus.DOM', 'pyjamas.ui', null, false);
	$m['FocusMixin'] = $p['___import___']('gwt.ui.Focus.FocusMixin', 'pyjamas.ui', null, false);
	$m['blur'] = $p['___import___']('gwt.ui.Focus.blur', 'pyjamas.ui', null, false);
	$m['createFocusable'] = $p['___import___']('gwt.ui.Focus.createFocusable', 'pyjamas.ui', null, false);
	$m['focus'] = $p['___import___']('gwt.ui.Focus.focus', 'pyjamas.ui', null, false);
	$m['getTabIndex'] = $p['___import___']('gwt.ui.Focus.getTabIndex', 'pyjamas.ui', null, false);
	$m['setAccessKey'] = $p['___import___']('gwt.ui.Focus.setAccessKey', 'pyjamas.ui', null, false);
	$m['setTabIndex'] = $p['___import___']('gwt.ui.Focus.setTabIndex', 'pyjamas.ui', null, false);
	return this;
}; /* end pyjamas.ui.Focus */


/* end module: pyjamas.ui.Focus */


/*
PYJS_DEPS: ['gwt.ui.Focus.DOM', 'gwt', 'gwt.ui', 'gwt.ui.Focus', 'gwt.ui.Focus.FocusMixin', 'gwt.ui.Focus.blur', 'gwt.ui.Focus.createFocusable', 'gwt.ui.Focus.focus', 'gwt.ui.Focus.getTabIndex', 'gwt.ui.Focus.setAccessKey', 'gwt.ui.Focus.setTabIndex']
*/
