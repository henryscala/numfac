/* start module: pyjamas.ui.UIObject */
$pyjs.loaded_modules['pyjamas.ui.UIObject'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.UIObject'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.UIObject'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.UIObject"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.UIObject>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.UIObject';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.ui']['UIObject'] = $pyjs.loaded_modules['pyjamas.ui.UIObject'];


	$m['Applier'] = $p['___import___']('gwt.ui.UIObject.Applier', 'pyjamas.ui', null, false);
	$m['DOM'] = $p['___import___']('gwt.ui.UIObject.DOM', 'pyjamas.ui', null, false);
	$m['Factory'] = $p['___import___']('gwt.ui.UIObject.Factory', 'pyjamas.ui', null, false);
	$m['UIObject'] = $p['___import___']('gwt.ui.UIObject.UIObject', 'pyjamas.ui', null, false);
	$m['Window'] = $p['___import___']('gwt.ui.UIObject.Window', 'pyjamas.ui', null, false);
	$m['setStyleName'] = $p['___import___']('gwt.ui.UIObject.setStyleName', 'pyjamas.ui', null, false);
	return this;
}; /* end pyjamas.ui.UIObject */


/* end module: pyjamas.ui.UIObject */


/*
PYJS_DEPS: ['gwt.ui.UIObject.Applier', 'gwt', 'gwt.ui', 'gwt.ui.UIObject', 'gwt.ui.UIObject.DOM', 'gwt.ui.UIObject.Factory', 'gwt.ui.UIObject.UIObject', 'gwt.ui.UIObject.Window', 'gwt.ui.UIObject.setStyleName']
*/
