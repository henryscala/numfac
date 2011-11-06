/* start module: pyjamas.ui.Composite */
$pyjs.loaded_modules['pyjamas.ui.Composite'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.Composite'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.Composite'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.Composite"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.Composite>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.Composite';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.ui']['Composite'] = $pyjs.loaded_modules['pyjamas.ui.Composite'];


	$m['Composite'] = $p['___import___']('gwt.ui.Composite.Composite', 'pyjamas.ui', null, false);
	$m['DOM'] = $p['___import___']('gwt.ui.Composite.DOM', 'pyjamas.ui', null, false);
	$m['Factory'] = $p['___import___']('gwt.ui.Composite.Factory', 'pyjamas.ui', null, false);
	$m['Widget'] = $p['___import___']('gwt.ui.Composite.Widget', 'pyjamas.ui', null, false);
	return this;
}; /* end pyjamas.ui.Composite */


/* end module: pyjamas.ui.Composite */


/*
PYJS_DEPS: ['gwt.ui.Composite.Composite', 'gwt', 'gwt.ui', 'gwt.ui.Composite', 'gwt.ui.Composite.DOM', 'gwt.ui.Composite.Factory', 'gwt.ui.Composite.Widget']
*/
