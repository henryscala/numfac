/* start module: pyjamas.log */
$pyjs.loaded_modules['pyjamas.log'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.log'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.log'];
	if(typeof $pyjs.loaded_modules['pyjamas'] == 'undefined' || !$pyjs.loaded_modules['pyjamas'].__was_initialized__) $p['___import___']('pyjamas', null);
	var $m = $pyjs.loaded_modules["pyjamas.log"];
	$m.__repr__ = function() { return "<module: pyjamas.log>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.log';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas']['log'] = $pyjs.loaded_modules['pyjamas.log'];


	$m['DOM'] = $p['___import___']('gwt.log.DOM', 'pyjamas', null, false);
	$m['add_elem'] = $p['___import___']('gwt.log.add_elem', 'pyjamas', null, false);
	$m['data'] = $p['___import___']('gwt.log.data', 'pyjamas', null, false);
	$m['element'] = $p['___import___']('gwt.log.element', 'pyjamas', null, false);
	$m['getBodyElement'] = $p['___import___']('gwt.log.getBodyElement', 'pyjamas', null, false);
	$m['write'] = $p['___import___']('gwt.log.write', 'pyjamas', null, false);
	$m['writebr'] = $p['___import___']('gwt.log.writebr', 'pyjamas', null, false);
	return this;
}; /* end pyjamas.log */


/* end module: pyjamas.log */


/*
PYJS_DEPS: ['gwt.log.DOM', 'gwt', 'gwt.log', 'gwt.log.add_elem', 'gwt.log.data', 'gwt.log.element', 'gwt.log.getBodyElement', 'gwt.log.write', 'gwt.log.writebr']
*/
