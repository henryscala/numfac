/* start module: pyjamas.DeferredCommand */
$pyjs.loaded_modules['pyjamas.DeferredCommand'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.DeferredCommand'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.DeferredCommand'];
	if(typeof $pyjs.loaded_modules['pyjamas'] == 'undefined' || !$pyjs.loaded_modules['pyjamas'].__was_initialized__) $p['___import___']('pyjamas', null);
	var $m = $pyjs.loaded_modules["pyjamas.DeferredCommand"];
	$m.__repr__ = function() { return "<module: pyjamas.DeferredCommand>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.DeferredCommand';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas']['DeferredCommand'] = $pyjs.loaded_modules['pyjamas.DeferredCommand'];


	$m['DPC_Obj'] = $p['___import___']('gwt.DeferredCommand.DPC_Obj', 'pyjamas', null, false);
	$m['Timer'] = $p['___import___']('gwt.DeferredCommand.Timer', 'pyjamas', null, false);
	$m['add'] = $p['___import___']('gwt.DeferredCommand.add', 'pyjamas', null, false);
	$m['deferredCommands'] = $p['___import___']('gwt.DeferredCommand.deferredCommands', 'pyjamas', null, false);
	$m['flushDeferredCommands'] = $p['___import___']('gwt.DeferredCommand.flushDeferredCommands', 'pyjamas', null, false);
	$m['maybeSetDeferredCommandTimer'] = $p['___import___']('gwt.DeferredCommand.maybeSetDeferredCommandTimer', 'pyjamas', null, false);
	$m['onTimer'] = $p['___import___']('gwt.DeferredCommand.onTimer', 'pyjamas', null, false);
	$m['queue_Call'] = $p['___import___']('gwt.DeferredCommand.queue_Call', 'pyjamas', null, false);
	$m['timerIsActive'] = $p['___import___']('gwt.DeferredCommand.timerIsActive', 'pyjamas', null, false);
	return this;
}; /* end pyjamas.DeferredCommand */


/* end module: pyjamas.DeferredCommand */


/*
PYJS_DEPS: ['gwt.DeferredCommand.DPC_Obj', 'gwt', 'gwt.DeferredCommand', 'gwt.DeferredCommand.Timer', 'gwt.DeferredCommand.add', 'gwt.DeferredCommand.deferredCommands', 'gwt.DeferredCommand.flushDeferredCommands', 'gwt.DeferredCommand.maybeSetDeferredCommandTimer', 'gwt.DeferredCommand.onTimer', 'gwt.DeferredCommand.queue_Call', 'gwt.DeferredCommand.timerIsActive']
*/
