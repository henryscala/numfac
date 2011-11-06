/* start module: pyjamas.Window */
$pyjs.loaded_modules['pyjamas.Window'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.Window'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.Window'];
	if(typeof $pyjs.loaded_modules['pyjamas'] == 'undefined' || !$pyjs.loaded_modules['pyjamas'].__was_initialized__) $p['___import___']('pyjamas', null);
	var $m = $pyjs.loaded_modules["pyjamas.Window"];
	$m.__repr__ = function() { return "<module: pyjamas.Window>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.Window';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas']['Window'] = $pyjs.loaded_modules['pyjamas.Window'];


	$m['Location'] = $p['___import___']('gwt.Window.Location', 'pyjamas', null, false);
	$m['addWindowCloseListener'] = $p['___import___']('gwt.Window.addWindowCloseListener', 'pyjamas', null, false);
	$m['addWindowResizeListener'] = $p['___import___']('gwt.Window.addWindowResizeListener', 'pyjamas', null, false);
	$m['alert'] = $p['___import___']('gwt.Window.alert', 'pyjamas', null, false);
	$m['closingListeners'] = $p['___import___']('gwt.Window.closingListeners', 'pyjamas', null, false);
	$m['confirm'] = $p['___import___']('gwt.Window.confirm', 'pyjamas', null, false);
	$m['enableScrolling'] = $p['___import___']('gwt.Window.enableScrolling', 'pyjamas', null, false);
	$m['fireClosedAndCatch'] = $p['___import___']('gwt.Window.fireClosedAndCatch', 'pyjamas', null, false);
	$m['fireClosedImpl'] = $p['___import___']('gwt.Window.fireClosedImpl', 'pyjamas', null, false);
	$m['fireClosingAndCatch'] = $p['___import___']('gwt.Window.fireClosingAndCatch', 'pyjamas', null, false);
	$m['fireClosingImpl'] = $p['___import___']('gwt.Window.fireClosingImpl', 'pyjamas', null, false);
	$m['fireResizedAndCatch'] = $p['___import___']('gwt.Window.fireResizedAndCatch', 'pyjamas', null, false);
	$m['fireResizedImpl'] = $p['___import___']('gwt.Window.fireResizedImpl', 'pyjamas', null, false);
	$m['getClientHeight'] = $p['___import___']('gwt.Window.getClientHeight', 'pyjamas', null, false);
	$m['getClientWidth'] = $p['___import___']('gwt.Window.getClientWidth', 'pyjamas', null, false);
	$m['getDocumentRoot'] = $p['___import___']('gwt.Window.getDocumentRoot', 'pyjamas', null, false);
	$m['getLocation'] = $p['___import___']('gwt.Window.getLocation', 'pyjamas', null, false);
	$m['getScrollLeft'] = $p['___import___']('gwt.Window.getScrollLeft', 'pyjamas', null, false);
	$m['getScrollTop'] = $p['___import___']('gwt.Window.getScrollTop', 'pyjamas', null, false);
	$m['getTitle'] = $p['___import___']('gwt.Window.getTitle', 'pyjamas', null, false);
	$m['init'] = $p['___import___']('gwt.Window.init', 'pyjamas', null, false);
	$m['init_listeners'] = $p['___import___']('gwt.Window.init_listeners', 'pyjamas', null, false);
	$m['location'] = $p['___import___']('gwt.Window.location', 'pyjamas', null, false);
	$m['onClosed'] = $p['___import___']('gwt.Window.onClosed', 'pyjamas', null, false);
	$m['onClosing'] = $p['___import___']('gwt.Window.onClosing', 'pyjamas', null, false);
	$m['onError'] = $p['___import___']('gwt.Window.onError', 'pyjamas', null, false);
	$m['onResize'] = $p['___import___']('gwt.Window.onResize', 'pyjamas', null, false);
	$m['open'] = $p['___import___']('gwt.Window.open', 'pyjamas', null, false);
	$m['prompt'] = $p['___import___']('gwt.Window.prompt', 'pyjamas', null, false);
	$m['removeWindowCloseListener'] = $p['___import___']('gwt.Window.removeWindowCloseListener', 'pyjamas', null, false);
	$m['removeWindowResizeListener'] = $p['___import___']('gwt.Window.removeWindowResizeListener', 'pyjamas', null, false);
	$m['resize'] = $p['___import___']('gwt.Window.resize', 'pyjamas', null, false);
	$m['resizeBy'] = $p['___import___']('gwt.Window.resizeBy', 'pyjamas', null, false);
	$m['resizeListeners'] = $p['___import___']('gwt.Window.resizeListeners', 'pyjamas', null, false);
	$m['scroll'] = $p['___import___']('gwt.Window.scroll', 'pyjamas', null, false);
	$m['scrollBy'] = $p['___import___']('gwt.Window.scrollBy', 'pyjamas', null, false);
	$m['setLocation'] = $p['___import___']('gwt.Window.setLocation', 'pyjamas', null, false);
	$m['setMargin'] = $p['___import___']('gwt.Window.setMargin', 'pyjamas', null, false);
	$m['setOnError'] = $p['___import___']('gwt.Window.setOnError', 'pyjamas', null, false);
	$m['setTitle'] = $p['___import___']('gwt.Window.setTitle', 'pyjamas', null, false);
	return this;
}; /* end pyjamas.Window */


/* end module: pyjamas.Window */


/*
PYJS_DEPS: ['gwt.Window.Location', 'gwt', 'gwt.Window', 'gwt.Window.addWindowCloseListener', 'gwt.Window.addWindowResizeListener', 'gwt.Window.alert', 'gwt.Window.closingListeners', 'gwt.Window.confirm', 'gwt.Window.enableScrolling', 'gwt.Window.fireClosedAndCatch', 'gwt.Window.fireClosedImpl', 'gwt.Window.fireClosingAndCatch', 'gwt.Window.fireClosingImpl', 'gwt.Window.fireResizedAndCatch', 'gwt.Window.fireResizedImpl', 'gwt.Window.getClientHeight', 'gwt.Window.getClientWidth', 'gwt.Window.getDocumentRoot', 'gwt.Window.getLocation', 'gwt.Window.getScrollLeft', 'gwt.Window.getScrollTop', 'gwt.Window.getTitle', 'gwt.Window.init', 'gwt.Window.init_listeners', 'gwt.Window.location', 'gwt.Window.onClosed', 'gwt.Window.onClosing', 'gwt.Window.onError', 'gwt.Window.onResize', 'gwt.Window.open', 'gwt.Window.prompt', 'gwt.Window.removeWindowCloseListener', 'gwt.Window.removeWindowResizeListener', 'gwt.Window.resize', 'gwt.Window.resizeBy', 'gwt.Window.resizeListeners', 'gwt.Window.scroll', 'gwt.Window.scrollBy', 'gwt.Window.setLocation', 'gwt.Window.setMargin', 'gwt.Window.setOnError', 'gwt.Window.setTitle']
*/
