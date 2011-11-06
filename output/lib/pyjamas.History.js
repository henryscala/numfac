/* start module: pyjamas.History */
$pyjs.loaded_modules['pyjamas.History'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.History'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.History'];
	if(typeof $pyjs.loaded_modules['pyjamas'] == 'undefined' || !$pyjs.loaded_modules['pyjamas'].__was_initialized__) $p['___import___']('pyjamas', null);
	var $m = $pyjs.loaded_modules["pyjamas.History"];
	$m.__repr__ = function() { return "<module: pyjamas.History>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.History';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas']['History'] = $pyjs.loaded_modules['pyjamas.History'];


	$m['addHistoryListener'] = $p['___import___']('gwt.History.addHistoryListener', 'pyjamas', null, false);
	$m['back'] = $p['___import___']('gwt.History.back', 'pyjamas', null, false);
	$m['fireHistoryChangedAndCatch'] = $p['___import___']('gwt.History.fireHistoryChangedAndCatch', 'pyjamas', null, false);
	$m['fireHistoryChangedImpl'] = $p['___import___']('gwt.History.fireHistoryChangedImpl', 'pyjamas', null, false);
	$m['forward'] = $p['___import___']('gwt.History.forward', 'pyjamas', null, false);
	$m['getToken'] = $p['___import___']('gwt.History.getToken', 'pyjamas', null, false);
	$m['historyListeners'] = $p['___import___']('gwt.History.historyListeners', 'pyjamas', null, false);
	$m['historyToken'] = $p['___import___']('gwt.History.historyToken', 'pyjamas', null, false);
	$m['init'] = $p['___import___']('gwt.History.init', 'pyjamas', null, false);
	$m['newItem'] = $p['___import___']('gwt.History.newItem', 'pyjamas', null, false);
	$m['onHistoryChanged'] = $p['___import___']('gwt.History.onHistoryChanged', 'pyjamas', null, false);
	$m['pyjd'] = $p['___import___']('gwt.History.pyjd', 'pyjamas', null, false);
	$m['removeHistoryListener'] = $p['___import___']('gwt.History.removeHistoryListener', 'pyjamas', null, false);
	return this;
}; /* end pyjamas.History */


/* end module: pyjamas.History */


/*
PYJS_DEPS: ['gwt.History.addHistoryListener', 'gwt', 'gwt.History', 'gwt.History.back', 'gwt.History.fireHistoryChangedAndCatch', 'gwt.History.fireHistoryChangedImpl', 'gwt.History.forward', 'gwt.History.getToken', 'gwt.History.historyListeners', 'gwt.History.historyToken', 'gwt.History.init', 'gwt.History.newItem', 'gwt.History.onHistoryChanged', 'gwt.History.pyjd', 'gwt.History.removeHistoryListener']
*/
