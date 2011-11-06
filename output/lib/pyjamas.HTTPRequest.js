/* start module: pyjamas.HTTPRequest */
$pyjs.loaded_modules['pyjamas.HTTPRequest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.HTTPRequest'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.HTTPRequest'];
	if(typeof $pyjs.loaded_modules['pyjamas'] == 'undefined' || !$pyjs.loaded_modules['pyjamas'].__was_initialized__) $p['___import___']('pyjamas', null);
	var $m = $pyjs.loaded_modules["pyjamas.HTTPRequest"];
	$m.__repr__ = function() { return "<module: pyjamas.HTTPRequest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.HTTPRequest';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas']['HTTPRequest'] = $pyjs.loaded_modules['pyjamas.HTTPRequest'];


	$m['HTTPRequest'] = $p['___import___']('gwt.HTTPRequest.HTTPRequest', 'pyjamas', null, false);
	$m['XULrunnerHackCallback'] = $p['___import___']('gwt.HTTPRequest.XULrunnerHackCallback', 'pyjamas', null, false);
	$m['handlers'] = $p['___import___']('gwt.HTTPRequest.handlers', 'pyjamas', null, false);
	$m['pygwt'] = $p['___import___']('gwt.HTTPRequest.pygwt', 'pyjamas', null, false);
	$m['pyjd'] = $p['___import___']('gwt.HTTPRequest.pyjd', 'pyjamas', null, false);
	$m['sys'] = $p['___import___']('gwt.HTTPRequest.sys', 'pyjamas', null, false);
	return this;
}; /* end pyjamas.HTTPRequest */


/* end module: pyjamas.HTTPRequest */


/*
PYJS_DEPS: ['gwt.HTTPRequest.HTTPRequest', 'gwt', 'gwt.HTTPRequest', 'gwt.HTTPRequest.XULrunnerHackCallback', 'gwt.HTTPRequest.handlers', 'gwt.HTTPRequest.pygwt', 'gwt.HTTPRequest.pyjd', 'gwt.HTTPRequest.sys']
*/
