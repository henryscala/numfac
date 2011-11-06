/* start module: pyjamas.ui.InnerHTML */
$pyjs.loaded_modules['pyjamas.ui.InnerHTML'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.InnerHTML'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.InnerHTML'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.InnerHTML"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.InnerHTML>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.InnerHTML';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.ui']['InnerHTML'] = $pyjs.loaded_modules['pyjamas.ui.InnerHTML'];


	$m['DOM'] = $p['___import___']('gwt.ui.InnerHTML.DOM', 'pyjamas.ui', null, false);
	$m['InnerHTML'] = $p['___import___']('gwt.ui.InnerHTML.InnerHTML', 'pyjamas.ui', null, false);
	return this;
}; /* end pyjamas.ui.InnerHTML */


/* end module: pyjamas.ui.InnerHTML */


/*
PYJS_DEPS: ['gwt.ui.InnerHTML.DOM', 'gwt', 'gwt.ui', 'gwt.ui.InnerHTML', 'gwt.ui.InnerHTML.InnerHTML']
*/
