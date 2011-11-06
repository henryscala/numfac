/* start module: pyjamas.Location */
$pyjs.loaded_modules['pyjamas.Location'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.Location'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.Location'];
	if(typeof $pyjs.loaded_modules['pyjamas'] == 'undefined' || !$pyjs.loaded_modules['pyjamas'].__was_initialized__) $p['___import___']('pyjamas', null);
	var $m = $pyjs.loaded_modules["pyjamas.Location"];
	$m.__repr__ = function() { return "<module: pyjamas.Location>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.Location';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas']['Location'] = $pyjs.loaded_modules['pyjamas.Location'];


	$m['Location'] = $p['___import___']('gwt.Location.Location', 'pyjamas', null, false);
	$m['makeUrlDict'] = $p['___import___']('gwt.Location.makeUrlDict', 'pyjamas', null, false);
	$m['makeUrlStringFromDict'] = $p['___import___']('gwt.Location.makeUrlStringFromDict', 'pyjamas', null, false);
	return this;
}; /* end pyjamas.Location */


/* end module: pyjamas.Location */


/*
PYJS_DEPS: ['gwt.Location.Location', 'gwt', 'gwt.Location', 'gwt.Location.makeUrlDict', 'gwt.Location.makeUrlStringFromDict']
*/
