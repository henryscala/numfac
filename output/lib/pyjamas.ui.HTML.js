/* start module: pyjamas.ui.HTML */
$pyjs.loaded_modules['pyjamas.ui.HTML'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.HTML'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.HTML'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.HTML"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.HTML>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.HTML';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.ui']['HTML'] = $pyjs.loaded_modules['pyjamas.ui.HTML'];


	$m['DOM'] = $p['___import___']('gwt.ui.HTML.DOM', 'pyjamas.ui', null, false);
	$m['Event'] = $p['___import___']('gwt.ui.HTML.Event', 'pyjamas.ui', null, false);
	$m['Factory'] = $p['___import___']('gwt.ui.HTML.Factory', 'pyjamas.ui', null, false);
	$m['HTML'] = $p['___import___']('gwt.ui.HTML.HTML', 'pyjamas.ui', null, false);
	$m['InnerHTML'] = $p['___import___']('gwt.ui.HTML.InnerHTML', 'pyjamas.ui', null, false);
	$m['Label'] = $p['___import___']('gwt.ui.HTML.Label', 'pyjamas.ui', null, false);
	$m['Widget'] = $p['___import___']('gwt.ui.HTML.Widget', 'pyjamas.ui', null, false);
	return this;
}; /* end pyjamas.ui.HTML */


/* end module: pyjamas.ui.HTML */


/*
PYJS_DEPS: ['gwt.ui.HTML.DOM', 'gwt', 'gwt.ui', 'gwt.ui.HTML', 'gwt.ui.HTML.Event', 'gwt.ui.HTML.Factory', 'gwt.ui.HTML.HTML', 'gwt.ui.HTML.InnerHTML', 'gwt.ui.HTML.Label', 'gwt.ui.HTML.Widget']
*/
