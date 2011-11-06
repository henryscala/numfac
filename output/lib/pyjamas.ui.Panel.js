/* start module: pyjamas.ui.Panel */
$pyjs.loaded_modules['pyjamas.ui.Panel'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.Panel'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.Panel'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.Panel"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.Panel>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.Panel';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.ui']['Panel'] = $pyjs.loaded_modules['pyjamas.ui.Panel'];


	$m['DOM'] = $p['___import___']('gwt.ui.Panel.DOM', 'pyjamas.ui', null, false);
	$m['Factory'] = $p['___import___']('gwt.ui.Panel.Factory', 'pyjamas.ui', null, false);
	$m['Panel'] = $p['___import___']('gwt.ui.Panel.Panel', 'pyjamas.ui', null, false);
	$m['PanelBase'] = $p['___import___']('gwt.ui.Panel.PanelBase', 'pyjamas.ui', null, false);
	$m['Widget'] = $p['___import___']('gwt.ui.Panel.Widget', 'pyjamas.ui', null, false);
	return this;
}; /* end pyjamas.ui.Panel */


/* end module: pyjamas.ui.Panel */


/*
PYJS_DEPS: ['gwt.ui.Panel.DOM', 'gwt', 'gwt.ui', 'gwt.ui.Panel', 'gwt.ui.Panel.Factory', 'gwt.ui.Panel.Panel', 'gwt.ui.Panel.PanelBase', 'gwt.ui.Panel.Widget']
*/
