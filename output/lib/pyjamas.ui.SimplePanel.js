/* start module: pyjamas.ui.SimplePanel */
$pyjs.loaded_modules['pyjamas.ui.SimplePanel'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.SimplePanel'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.SimplePanel'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.SimplePanel"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.SimplePanel>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.SimplePanel';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.ui']['SimplePanel'] = $pyjs.loaded_modules['pyjamas.ui.SimplePanel'];


	$m['DOM'] = $p['___import___']('gwt.ui.SimplePanel.DOM', 'pyjamas.ui', null, false);
	$m['Factory'] = $p['___import___']('gwt.ui.SimplePanel.Factory', 'pyjamas.ui', null, false);
	$m['Panel'] = $p['___import___']('gwt.ui.SimplePanel.Panel', 'pyjamas.ui', null, false);
	$m['SimplePanel'] = $p['___import___']('gwt.ui.SimplePanel.SimplePanel', 'pyjamas.ui', null, false);
	return this;
}; /* end pyjamas.ui.SimplePanel */


/* end module: pyjamas.ui.SimplePanel */


/*
PYJS_DEPS: ['gwt.ui.SimplePanel.DOM', 'gwt', 'gwt.ui', 'gwt.ui.SimplePanel', 'gwt.ui.SimplePanel.Factory', 'gwt.ui.SimplePanel.Panel', 'gwt.ui.SimplePanel.SimplePanel']
*/
