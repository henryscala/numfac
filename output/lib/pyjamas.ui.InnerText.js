/* start module: pyjamas.ui.InnerText */
$pyjs.loaded_modules['pyjamas.ui.InnerText'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.InnerText'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.InnerText'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.InnerText"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.InnerText>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.InnerText';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.ui']['InnerText'] = $pyjs.loaded_modules['pyjamas.ui.InnerText'];


	$m['DOM'] = $p['___import___']('gwt.ui.InnerText.DOM', 'pyjamas.ui', null, false);
	$m['InnerText'] = $p['___import___']('gwt.ui.InnerText.InnerText', 'pyjamas.ui', null, false);
	return this;
}; /* end pyjamas.ui.InnerText */


/* end module: pyjamas.ui.InnerText */


/*
PYJS_DEPS: ['gwt.ui.InnerText.DOM', 'gwt', 'gwt.ui', 'gwt.ui.InnerText', 'gwt.ui.InnerText.InnerText']
*/
