/* start module: pyjamas.ui.Image */
$pyjs.loaded_modules['pyjamas.ui.Image'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.Image'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.Image'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.Image"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.Image>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.Image';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.ui']['Image'] = $pyjs.loaded_modules['pyjamas.ui.Image'];


	$m['ClickHandler'] = $p['___import___']('gwt.ui.Image.ClickHandler', 'pyjamas.ui', null, false);
	$m['DOM'] = $p['___import___']('gwt.ui.Image.DOM', 'pyjamas.ui', null, false);
	$m['Event'] = $p['___import___']('gwt.ui.Image.Event', 'pyjamas.ui', null, false);
	$m['Factory'] = $p['___import___']('gwt.ui.Image.Factory', 'pyjamas.ui', null, false);
	$m['Image'] = $p['___import___']('gwt.ui.Image.Image', 'pyjamas.ui', null, false);
	$m['MouseHandler'] = $p['___import___']('gwt.ui.Image.MouseHandler', 'pyjamas.ui', null, false);
	$m['Widget'] = $p['___import___']('gwt.ui.Image.Widget', 'pyjamas.ui', null, false);
	$m['prefetchImages'] = $p['___import___']('gwt.ui.Image.prefetchImages', 'pyjamas.ui', null, false);
	return this;
}; /* end pyjamas.ui.Image */


/* end module: pyjamas.ui.Image */


/*
PYJS_DEPS: ['gwt.ui.Image.ClickHandler', 'gwt', 'gwt.ui', 'gwt.ui.Image', 'gwt.ui.Image.DOM', 'gwt.ui.Image.Event', 'gwt.ui.Image.Factory', 'gwt.ui.Image.Image', 'gwt.ui.Image.MouseHandler', 'gwt.ui.Image.Widget', 'gwt.ui.Image.prefetchImages']
*/
