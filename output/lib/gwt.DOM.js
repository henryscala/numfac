/* start module: gwt.DOM */
$pyjs.loaded_modules['gwt.DOM'] = function (__mod_name__) {
	if($pyjs.loaded_modules['gwt.DOM'].__was_initialized__) return $pyjs.loaded_modules['gwt.DOM'];
	if(typeof $pyjs.loaded_modules['gwt'] == 'undefined' || !$pyjs.loaded_modules['gwt'].__was_initialized__) $p['___import___']('gwt', null);
	var $m = $pyjs.loaded_modules["gwt.DOM"];
	$m.__repr__ = function() { return "<module: gwt.DOM>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'gwt.DOM';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['gwt']['DOM'] = $pyjs.loaded_modules['gwt.DOM'];
	var $bool1,$attr251,$attr2,$attr1,$attr252,$bool122,$bool121;

	$m['pyjd'] = $p['___import___']('pyjd', 'gwt');
	if ((($bool1=(($attr1=($attr2=$m['pyjd'])['is_desktop']) == null || (($attr2.__is_instance__) && typeof $attr1 == 'function') || (typeof $attr1['__get__'] == 'function')?
				$p['getattr']($attr2, 'is_desktop'):
				$m['pyjd']['is_desktop'])) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
			false :
			(typeof $bool1=='object'?
				(typeof $bool1.__nonzero__=='function'?
					$bool1.__nonzero__() :
					(typeof $bool1.__len__=='function'?
						($bool1.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )) {
		$m['onResize'] = $p['___import___']('pyjamas.Window.onResize', 'gwt', null, false);
		$m['onClosing'] = $p['___import___']('pyjamas.Window.onClosing', 'gwt', null, false);
		$m['onClosed'] = $p['___import___']('pyjamas.Window.onClosed', 'gwt', null, false);
		$m['currentEvent'] = null;
	}
	$m['sCaptureElem'] = null;
	$m['sEventPreviewStack'] = $p['list']([]);
	$m['listeners'] = $p['dict']([]);
	$m['Event'] = $p['___import___']('pyjamas.ui.Event', 'gwt', null, false);
	$m['ONBLUR'] = $p['___import___']('pyjamas.ui.Event.ONBLUR', 'gwt', null, false);
	$m['ONCHANGE'] = $p['___import___']('pyjamas.ui.Event.ONCHANGE', 'gwt', null, false);
	$m['ONCLICK'] = $p['___import___']('pyjamas.ui.Event.ONCLICK', 'gwt', null, false);
	$m['ONCONTEXTMENU'] = $p['___import___']('pyjamas.ui.Event.ONCONTEXTMENU', 'gwt', null, false);
	$m['ONDBLCLICK'] = $p['___import___']('pyjamas.ui.Event.ONDBLCLICK', 'gwt', null, false);
	$m['ONERROR'] = $p['___import___']('pyjamas.ui.Event.ONERROR', 'gwt', null, false);
	$m['ONFOCUS'] = $p['___import___']('pyjamas.ui.Event.ONFOCUS', 'gwt', null, false);
	$m['ONKEYDOWN'] = $p['___import___']('pyjamas.ui.Event.ONKEYDOWN', 'gwt', null, false);
	$m['ONKEYPRESS'] = $p['___import___']('pyjamas.ui.Event.ONKEYPRESS', 'gwt', null, false);
	$m['ONKEYUP'] = $p['___import___']('pyjamas.ui.Event.ONKEYUP', 'gwt', null, false);
	$m['ONLOAD'] = $p['___import___']('pyjamas.ui.Event.ONLOAD', 'gwt', null, false);
	$m['ONLOSECAPTURE'] = $p['___import___']('pyjamas.ui.Event.ONLOSECAPTURE', 'gwt', null, false);
	$m['ONMOUSEDOWN'] = $p['___import___']('pyjamas.ui.Event.ONMOUSEDOWN', 'gwt', null, false);
	$m['ONMOUSEMOVE'] = $p['___import___']('pyjamas.ui.Event.ONMOUSEMOVE', 'gwt', null, false);
	$m['ONMOUSEOUT'] = $p['___import___']('pyjamas.ui.Event.ONMOUSEOUT', 'gwt', null, false);
	$m['ONMOUSEOVER'] = $p['___import___']('pyjamas.ui.Event.ONMOUSEOVER', 'gwt', null, false);
	$m['ONMOUSEUP'] = $p['___import___']('pyjamas.ui.Event.ONMOUSEUP', 'gwt', null, false);
	$m['ONSCROLL'] = $p['___import___']('pyjamas.ui.Event.ONSCROLL', 'gwt', null, false);
	$m['ONINPUT'] = $p['___import___']('pyjamas.ui.Event.ONINPUT', 'gwt', null, false);
	$m['get_listener'] = function(item) {
		var $bool3,$attr3,$attr4,ret,$bool2;
		if ((($bool2=(item === null)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
				false :
				(typeof $bool2=='object'?
					(typeof $bool2.__nonzero__=='function'?
						$bool2.__nonzero__() :
						(typeof $bool2.__len__=='function'?
							($bool2.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			return null;
		}
		if ((($bool3=$p['hasattr'](item, '__instance__')) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
				false :
				(typeof $bool3=='object'?
					(typeof $bool3.__nonzero__=='function'?
						$bool3.__nonzero__() :
						(typeof $bool3.__len__=='function'?
							($bool3.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			ret = $m['listeners']['get']((($attr3=($attr4=item)['__instance__']) == null || (($attr4.__is_instance__) && typeof $attr3 == 'function') || (typeof $attr3['__get__'] == 'function')?
						$p['getattr']($attr4, '__instance__'):
						item['__instance__']));
		}
		else {
			ret = $m['listeners']['get']($p['hash'](item));
		}
		return ret;
	};
	$m['get_listener'].__name__ = 'get_listener';

	$m['get_listener'].__bind_type__ = 0;
	$m['get_listener'].__args__ = [null,null,['item']];
	$m['set_listener'] = function(item, listener) {
		var $attr5,$attr6,$bool4,$bool5;
		if ((($bool4=$p['hasattr'](item, '__instance__')) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
				false :
				(typeof $bool4=='object'?
					(typeof $bool4.__nonzero__=='function'?
						$bool4.__nonzero__() :
						(typeof $bool4.__len__=='function'?
							($bool4.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			$m['listeners'].__setitem__((($attr5=($attr6=item)['__instance__']) == null || (($attr6.__is_instance__) && typeof $attr5 == 'function') || (typeof $attr5['__get__'] == 'function')?
						$p['getattr']($attr6, '__instance__'):
						item['__instance__']), listener);
		}
		else if ((($bool5=(listener === null)) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
				false :
				(typeof $bool5=='object'?
					(typeof $bool5.__nonzero__=='function'?
						$bool5.__nonzero__() :
						(typeof $bool5.__len__=='function'?
							($bool5.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			$m['listeners']['pop']($p['hash'](item));
		}
		else {
			$m['listeners'].__setitem__($p['hash'](item), listener);
		}
		return null;
	};
	$m['set_listener'].__name__ = 'set_listener';

	$m['set_listener'].__bind_type__ = 0;
	$m['set_listener'].__args__ = [null,null,['item'],['listener']];
	$m['hack_timer_workaround_bug_button'] = null;
	$m['init'] = function() {
		var mf;
		mf = (typeof get_main_frame == "undefined"?$m.get_main_frame:get_main_frame)();
		mf['_addWindowEventListener']('click', (typeof browser_event_cb == "undefined"?$m.browser_event_cb:browser_event_cb));
		mf['_addWindowEventListener']('change', (typeof browser_event_cb == "undefined"?$m.browser_event_cb:browser_event_cb));
		mf['_addWindowEventListener']('mouseout', (typeof browser_event_cb == "undefined"?$m.browser_event_cb:browser_event_cb));
		mf['_addWindowEventListener']('mousedown', (typeof browser_event_cb == "undefined"?$m.browser_event_cb:browser_event_cb));
		mf['_addWindowEventListener']('mouseup', (typeof browser_event_cb == "undefined"?$m.browser_event_cb:browser_event_cb));
		mf['_addWindowEventListener']('resize', (typeof browser_event_cb == "undefined"?$m.browser_event_cb:browser_event_cb));
		mf['_addWindowEventListener']('keyup', (typeof browser_event_cb == "undefined"?$m.browser_event_cb:browser_event_cb));
		mf['_addWindowEventListener']('keydown', (typeof browser_event_cb == "undefined"?$m.browser_event_cb:browser_event_cb));
		mf['_addWindowEventListener']('keypress', (typeof browser_event_cb == "undefined"?$m.browser_event_cb:browser_event_cb));
		mf['_addWindowEventListener']('mousewheel', (typeof browser_event_cb == "undefined"?$m.browser_event_cb:browser_event_cb));
		return null;
	};
	$m['init'].__name__ = 'init';

	$m['init'].__bind_type__ = 0;
	$m['init'].__args__ = [null,null];
	$m['_init_testing'] = function() {
		var body,$2,$1;
		body = (typeof ($1=$doc['getElementsByTagName']('body')).__array != 'undefined'?
			((typeof $1.__array[$2=0]) != 'undefined'?$1.__array[$2]:
				$1.__getitem__($2)):
				$1.__getitem__(0));
		$m.mf['_addEventListener'](body, 'click', (typeof cb == "undefined"?$m.cb:cb));
		$m.mf['_addEventListener'](body, 'change', (typeof cb == "undefined"?$m.cb:cb));
		$m.mf['_addEventListener'](body, 'mouseout', (typeof cb == "undefined"?$m.cb:cb));
		$m.mf['_addEventListener'](body, 'mousedown', (typeof cb == "undefined"?$m.cb:cb));
		$m.mf['_addEventListener'](body, 'mouseup', (typeof cb == "undefined"?$m.cb:cb));
		$m.mf['_addEventListener'](body, 'mousemove', (typeof cb == "undefined"?$m.cb:cb));
		$m.mf['_addEventListener'](body, 'resize', (typeof cb == "undefined"?$m.cb:cb));
		$m.mf['_addEventListener'](body, 'keyup', (typeof cb == "undefined"?$m.cb:cb));
		$m.mf['_addEventListener'](body, 'keydown', (typeof cb == "undefined"?$m.cb:cb));
		$m.mf['_addEventListener'](body, 'keypress', (typeof cb == "undefined"?$m.cb:cb));
		return null;
	};
	$m['_init_testing'].__name__ = '_init_testing';

	$m['_init_testing'].__bind_type__ = 0;
	$m['_init_testing'].__args__ = [null,null];
	$m['_dispatchWindowEvent'] = function(sender, evt, useCap) {

 		return null;
	};
	$m['_dispatchWindowEvent'].__name__ = '_dispatchWindowEvent';

	$m['_dispatchWindowEvent'].__bind_type__ = 0;
	$m['_dispatchWindowEvent'].__args__ = [null,null,['sender'],['evt'],['useCap']];
	$m['_dispatchEvent'] = function(sender, evt, useCap) {
		var $bool10,$bool11,$bool12,$bool13,$pyjs_try_err,$attr8,$eq1,$eq2,$and1,$and2,$and3,$and4,$and5,$attr7,curElem,$bool6,$and6,$bool8,$bool9,listener,cap,$bool7;
		if ((($bool6=(evt === null)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
				false :
				(typeof $bool6=='object'?
					(typeof $bool6.__nonzero__=='function'?
						$bool6.__nonzero__() :
						(typeof $bool6.__len__=='function'?
							($bool6.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			evt = (($attr7=($attr8=$wnd)['event']) == null || (($attr8.__is_instance__) && typeof $attr7 == 'function') || (typeof $attr7['__get__'] == 'function')?
						$p['getattr']($attr8, 'event'):
						$wnd['event']);
		}
		else {
			try {
				sender = $m.get_main_frame()['gobject_wrap'](sender);
				evt = $m.get_main_frame()['gobject_wrap'](evt);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (true) {
				}
			}
		}
		listener = null;
		curElem = sender;
		cap = (typeof getCaptureElement == "undefined"?$m.getCaptureElement:getCaptureElement)();
		listener = $m['get_listener'](cap);
		if ((($bool8=((($bool7=$and1=cap) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
			false :
			(typeof $bool7=='object'?
				(typeof $bool7.__nonzero__=='function'?
					$bool7.__nonzero__() :
					(typeof $bool7.__len__=='function'?
						($bool7.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )?(listener !== null):$and1)) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
				false :
				(typeof $bool8=='object'?
					(typeof $bool8.__nonzero__=='function'?
						$bool8.__nonzero__() :
						(typeof $bool8.__len__=='function'?
							($bool8.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			(typeof dispatchEvent == "undefined"?$m.dispatchEvent:dispatchEvent)(evt, cap, listener);
			evt['stopPropagation']();
			return null;
		}
		while ((($bool10=((($bool9=$and3=curElem) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
			false :
			(typeof $bool9=='object'?
				(typeof $bool9.__nonzero__=='function'?
					$bool9.__nonzero__() :
					(typeof $bool9.__len__=='function'?
						($bool9.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )?($m['get_listener'](curElem) === null):$and3)) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
				false :
				(typeof $bool10=='object'?
					(typeof $bool10.__nonzero__=='function'?
						$bool10.__nonzero__() :
						(typeof $bool10.__len__=='function'?
							($bool10.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			curElem = (typeof getParent == "undefined"?$m.getParent:getParent)(curElem);
		}
		if ((($bool12=((($bool11=$and5=curElem) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
			false :
			(typeof $bool11=='object'?
				(typeof $bool11.__nonzero__=='function'?
					$bool11.__nonzero__() :
					(typeof $bool11.__len__=='function'?
						($bool11.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )?!(($eq1=(typeof getNodeType == "undefined"?$m.getNodeType:getNodeType)(curElem))===($eq2=1)&&$eq1===null?true:
			($eq1===null?false:($eq2===null?false:
				((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1.__cmp__=='function'?$eq1.__cmp__($eq2) === 0:
					((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2.__cmp__=='function'?$eq2.__cmp__($eq1) === 0:
						$eq1==$eq2))))):$and5)) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
				false :
				(typeof $bool12=='object'?
					(typeof $bool12.__nonzero__=='function'?
						$bool12.__nonzero__() :
						(typeof $bool12.__len__=='function'?
							($bool12.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			curElem = null;
		}
		listener = $m['get_listener'](curElem);
		if ((($bool13=(listener !== null)) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
				false :
				(typeof $bool13=='object'?
					(typeof $bool13.__nonzero__=='function'?
						$bool13.__nonzero__() :
						(typeof $bool13.__len__=='function'?
							($bool13.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			(typeof dispatchEvent == "undefined"?$m.dispatchEvent:dispatchEvent)(evt, curElem, listener);
		}
		return null;
	};
	$m['_dispatchEvent'].__name__ = '_dispatchEvent';

	$m['_dispatchEvent'].__bind_type__ = 0;
	$m['_dispatchEvent'].__args__ = [null,null,['sender'],['evt'],['useCap']];
	$m['_dispatchCapturedMouseEvent'] = function(evt) {
		var $and8,cap,$bool14,$bool15,$bool16,$and7,listener,$bool17;
		if ((($bool15=!(($bool14=(typeof _dispatchCapturedEvent == "undefined"?$m._dispatchCapturedEvent:_dispatchCapturedEvent)(evt)) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
			false :
			(typeof $bool14=='object'?
				(typeof $bool14.__nonzero__=='function'?
					$bool14.__nonzero__() :
					(typeof $bool14.__len__=='function'?
						($bool14.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
				false :
				(typeof $bool15=='object'?
					(typeof $bool15.__nonzero__=='function'?
						$bool15.__nonzero__() :
						(typeof $bool15.__len__=='function'?
							($bool15.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			return null;
		}
		cap = (typeof getCaptureElement == "undefined"?$m.getCaptureElement:getCaptureElement)();
		listener = $m['get_listener'](cap);
		if ((($bool17=((($bool16=$and7=cap) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
			false :
			(typeof $bool16=='object'?
				(typeof $bool16.__nonzero__=='function'?
					$bool16.__nonzero__() :
					(typeof $bool16.__len__=='function'?
						($bool16.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )?(listener !== null):$and7)) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
				false :
				(typeof $bool17=='object'?
					(typeof $bool17.__nonzero__=='function'?
						$bool17.__nonzero__() :
						(typeof $bool17.__len__=='function'?
							($bool17.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			(typeof dispatchEvent == "undefined"?$m.dispatchEvent:dispatchEvent)(evt, cap, listener);
			evt['stopPropagation']();
		}
		return null;
	};
	$m['_dispatchCapturedMouseEvent'].__name__ = '_dispatchCapturedMouseEvent';

	$m['_dispatchCapturedMouseEvent'].__bind_type__ = 0;
	$m['_dispatchCapturedMouseEvent'].__args__ = [null,null,['evt']];
	$m['_dispatchCapturedMouseoutEvent'] = function(evt) {
		var $bool18,$bool19,cap,listener,lcEvent,$bool20;
		cap = (typeof getCaptureElement == "undefined"?$m.getCaptureElement:getCaptureElement)();
		if ((($bool18=(cap === null)) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
				false :
				(typeof $bool18=='object'?
					(typeof $bool18.__nonzero__=='function'?
						$bool18.__nonzero__() :
						(typeof $bool18.__len__=='function'?
							($bool18.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			return null;
		}
		if ((($bool19=(typeof eventGetToElement == "undefined"?$m.eventGetToElement:eventGetToElement)(evt)) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
				false :
				(typeof $bool19=='object'?
					(typeof $bool19.__nonzero__=='function'?
						$bool19.__nonzero__() :
						(typeof $bool19.__len__=='function'?
							($bool19.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			return null;
		}
		(typeof setCapture == "undefined"?$m.setCapture:setCapture)(null);
		listener = $m['get_listener'](cap);
		if ((($bool20=(listener === null)) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
				false :
				(typeof $bool20=='object'?
					(typeof $bool20.__nonzero__=='function'?
						$bool20.__nonzero__() :
						(typeof $bool20.__len__=='function'?
							($bool20.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			return null;
		}
		lcEvent = $doc['createEvent']('UIEvent');
		lcEvent['initUIEvent']('losecapture', false, false, $wnd, 0);
		(typeof dispatchEvent == "undefined"?$m.dispatchEvent:dispatchEvent)(lcEvent, cap, listener);
		return null;
	};
	$m['_dispatchCapturedMouseoutEvent'].__name__ = '_dispatchCapturedMouseoutEvent';

	$m['_dispatchCapturedMouseoutEvent'].__bind_type__ = 0;
	$m['_dispatchCapturedMouseoutEvent'].__args__ = [null,null,['evt']];
	$m['browser_event_cb'] = function(view, event, from_window) {
		var et,$eq10,$eq11,$eq12,$eq13,$eq14,$bool25,$bool24,$bool27,$pyjs_try_err,$bool21,$bool23,$bool22,$attr9,$or4,$eq8,$eq9,$or1,$or3,$or2,$eq3,$eq6,$eq7,$eq4,$eq5,$bool26,$attr10;
		if ((($bool21=(event === null)) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
				false :
				(typeof $bool21=='object'?
					(typeof $bool21.__nonzero__=='function'?
						$bool21.__nonzero__() :
						(typeof $bool21.__len__=='function'?
							($bool21.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			event = (($attr9=($attr10=$wnd)['event']) == null || (($attr10.__is_instance__) && typeof $attr9 == 'function') || (typeof $attr9['__get__'] == 'function')?
						$p['getattr']($attr10, 'event'):
						$wnd['event']);
		}
		else {
			try {
				event = $m.get_main_frame()['gobject_wrap'](event);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (true) {
				}
			}
		}
		et = (typeof eventGetType == "undefined"?$m.eventGetType:eventGetType)(event);
		if ((($bool22=(($eq3=et)===($eq4='resize')&&$eq3===null?true:
			($eq3===null?false:($eq4===null?false:
				((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3.__cmp__=='function'?$eq3.__cmp__($eq4) === 0:
					((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4.__cmp__=='function'?$eq4.__cmp__($eq3) === 0:
						$eq3==$eq4)))))) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
				false :
				(typeof $bool22=='object'?
					(typeof $bool22.__nonzero__=='function'?
						$bool22.__nonzero__() :
						(typeof $bool22.__len__=='function'?
							($bool22.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			$m['onResize']();
			return null;
		}
		if ((($bool23=(($eq5=et)===($eq6='mouseout')&&$eq5===null?true:
			($eq5===null?false:($eq6===null?false:
				((typeof $eq5=='object'||typeof $eq5=='function')&&typeof $eq5.__cmp__=='function'?$eq5.__cmp__($eq6) === 0:
					((typeof $eq6=='object'||typeof $eq6=='function')&&typeof $eq6.__cmp__=='function'?$eq6.__cmp__($eq5) === 0:
						$eq5==$eq6)))))) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
				false :
				(typeof $bool23=='object'?
					(typeof $bool23.__nonzero__=='function'?
						$bool23.__nonzero__() :
						(typeof $bool23.__len__=='function'?
							($bool23.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			$m['_dispatchCapturedMouseoutEvent'](event);
		}
		if ((($bool27=((($bool24=$or1=(($eq7=et)===($eq8='keyup')&&$eq7===null?true:
			($eq7===null?false:($eq8===null?false:
				((typeof $eq7=='object'||typeof $eq7=='function')&&typeof $eq7.__cmp__=='function'?$eq7.__cmp__($eq8) === 0:
					((typeof $eq8=='object'||typeof $eq8=='function')&&typeof $eq8.__cmp__=='function'?$eq8.__cmp__($eq7) === 0:
						$eq7==$eq8)))))) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
			false :
			(typeof $bool24=='object'?
				(typeof $bool24.__nonzero__=='function'?
					$bool24.__nonzero__() :
					(typeof $bool24.__len__=='function'?
						($bool24.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )?$or1:((($bool25=$or2=(($eq9=et)===($eq10='keydown')&&$eq9===null?true:
			($eq9===null?false:($eq10===null?false:
				((typeof $eq9=='object'||typeof $eq9=='function')&&typeof $eq9.__cmp__=='function'?$eq9.__cmp__($eq10) === 0:
					((typeof $eq10=='object'||typeof $eq10=='function')&&typeof $eq10.__cmp__=='function'?$eq10.__cmp__($eq9) === 0:
						$eq9==$eq10)))))) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
			false :
			(typeof $bool25=='object'?
				(typeof $bool25.__nonzero__=='function'?
					$bool25.__nonzero__() :
					(typeof $bool25.__len__=='function'?
						($bool25.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )?$or2:((($bool26=$or3=(($eq11=et)===($eq12='keypress')&&$eq11===null?true:
			($eq11===null?false:($eq12===null?false:
				((typeof $eq11=='object'||typeof $eq11=='function')&&typeof $eq11.__cmp__=='function'?$eq11.__cmp__($eq12) === 0:
					((typeof $eq12=='object'||typeof $eq12=='function')&&typeof $eq12.__cmp__=='function'?$eq12.__cmp__($eq11) === 0:
						$eq11==$eq12)))))) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
			false :
			(typeof $bool26=='object'?
				(typeof $bool26.__nonzero__=='function'?
					$bool26.__nonzero__() :
					(typeof $bool26.__len__=='function'?
						($bool26.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )?$or3:(($eq13=et)===($eq14='change')&&$eq13===null?true:
			($eq13===null?false:($eq14===null?false:
				((typeof $eq13=='object'||typeof $eq13=='function')&&typeof $eq13.__cmp__=='function'?$eq13.__cmp__($eq14) === 0:
					((typeof $eq14=='object'||typeof $eq14=='function')&&typeof $eq14.__cmp__=='function'?$eq14.__cmp__($eq13) === 0:
						$eq13==$eq14))))))))) === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
				false :
				(typeof $bool27=='object'?
					(typeof $bool27.__nonzero__=='function'?
						$bool27.__nonzero__() :
						(typeof $bool27.__len__=='function'?
							($bool27.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			return (typeof _dispatchCapturedEvent == "undefined"?$m._dispatchCapturedEvent:_dispatchCapturedEvent)(event);
		}
		else {
			return $m['_dispatchCapturedMouseEvent'](event);
		}
		return null;
	};
	$m['browser_event_cb'].__name__ = 'browser_event_cb';

	$m['browser_event_cb'].__bind_type__ = 0;
	$m['browser_event_cb'].__args__ = [null,null,['view'],['event'],['from_window']];
	$m['_dispatchCapturedEvent'] = function(event) {
		var $bool29,$bool28;
		if ((($bool29=!(($bool28=(typeof previewEvent == "undefined"?$m.previewEvent:previewEvent)(event)) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
			false :
			(typeof $bool28=='object'?
				(typeof $bool28.__nonzero__=='function'?
					$bool28.__nonzero__() :
					(typeof $bool28.__len__=='function'?
						($bool28.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )) === null || $bool29 === false || $bool29 === 0 || $bool29 === '' ?
				false :
				(typeof $bool29=='object'?
					(typeof $bool29.__nonzero__=='function'?
						$bool29.__nonzero__() :
						(typeof $bool29.__len__=='function'?
							($bool29.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			event['stopPropagation']();
			(typeof eventPreventDefault == "undefined"?$m.eventPreventDefault:eventPreventDefault)(event);
			return false;
		}
		return true;
	};
	$m['_dispatchCapturedEvent'].__name__ = '_dispatchCapturedEvent';

	$m['_dispatchCapturedEvent'].__bind_type__ = 0;
	$m['_dispatchCapturedEvent'].__args__ = [null,null,['event']];
	$m['addEventPreview'] = function(preview) {

		$m['sEventPreviewStack']['append'](preview);
		return null;
	};
	$m['addEventPreview'].__name__ = 'addEventPreview';

	$m['addEventPreview'].__bind_type__ = 0;
	$m['addEventPreview'].__args__ = [null,null,['preview']];
	$m['appendChild'] = function(parent, child) {

		parent['appendChild'](child);
		return null;
	};
	$m['appendChild'].__name__ = 'appendChild';

	$m['appendChild'].__bind_type__ = 0;
	$m['appendChild'].__args__ = [null,null,['parent'],['child']];
	$m['removeChild'] = function(parent, child) {

		parent['removeChild'](child);
		return null;
	};
	$m['removeChild'].__name__ = 'removeChild';

	$m['removeChild'].__bind_type__ = 0;
	$m['removeChild'].__args__ = [null,null,['parent'],['child']];
	$m['replaceChild'] = function(parent, newChild, oldChild) {

		parent['replaceChild'](newChild, oldChild);
		return null;
	};
	$m['replaceChild'].__name__ = 'replaceChild';

	$m['replaceChild'].__bind_type__ = 0;
	$m['replaceChild'].__args__ = [null,null,['parent'],['newChild'],['oldChild']];
	$m['buttonClick'] = function(element) {
		var evt;
		evt = $doc['createEvent']('MouseEvents');
		evt['initMouseEvent']('click', true, true, $wnd, 1, 0, 0, 0, 0, false, false, false, false, 0, element);
		element['dispatchEvent'](evt);
		return null;
	};
	$m['buttonClick'].__name__ = 'buttonClick';

	$m['buttonClick'].__bind_type__ = 0;
	$m['buttonClick'].__args__ = [null,null,['element']];
	$m['compare'] = function(elem1, elem2) {
		var $bool30,$eq15,$eq16;
		if ((($bool30=$p['hasattr'](elem1, 'isSameNode')) === null || $bool30 === false || $bool30 === 0 || $bool30 === '' ?
				false :
				(typeof $bool30=='object'?
					(typeof $bool30.__nonzero__=='function'?
						$bool30.__nonzero__() :
						(typeof $bool30.__len__=='function'?
							($bool30.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			return elem1['isSameNode'](elem2);
		}
		return (($eq15=elem1)===($eq16=elem2)&&$eq15===null?true:
			($eq15===null?false:($eq16===null?false:
				((typeof $eq15=='object'||typeof $eq15=='function')&&typeof $eq15.__cmp__=='function'?$eq15.__cmp__($eq16) === 0:
					((typeof $eq16=='object'||typeof $eq16=='function')&&typeof $eq16.__cmp__=='function'?$eq16.__cmp__($eq15) === 0:
						$eq15==$eq16)))));
	};
	$m['compare'].__name__ = 'compare';

	$m['compare'].__bind_type__ = 0;
	$m['compare'].__args__ = [null,null,['elem1'],['elem2']];
	$m['createAnchor'] = function() {

		return (typeof createElement == "undefined"?$m.createElement:createElement)('A');
	};
	$m['createAnchor'].__name__ = 'createAnchor';

	$m['createAnchor'].__bind_type__ = 0;
	$m['createAnchor'].__args__ = [null,null];
	$m['createButton'] = function() {

		return (typeof createElement == "undefined"?$m.createElement:createElement)('button');
	};
	$m['createButton'].__name__ = 'createButton';

	$m['createButton'].__bind_type__ = 0;
	$m['createButton'].__args__ = [null,null];
	$m['createCol'] = function() {

		return (typeof createElement == "undefined"?$m.createElement:createElement)('col');
	};
	$m['createCol'].__name__ = 'createCol';

	$m['createCol'].__bind_type__ = 0;
	$m['createCol'].__args__ = [null,null];
	$m['createDiv'] = function() {

		return (typeof createElement == "undefined"?$m.createElement:createElement)('div');
	};
	$m['createDiv'].__name__ = 'createDiv';

	$m['createDiv'].__bind_type__ = 0;
	$m['createDiv'].__args__ = [null,null];
	$m['createElement'] = function(tag) {

		return $doc['createElement'](tag);
	};
	$m['createElement'].__name__ = 'createElement';

	$m['createElement'].__bind_type__ = 0;
	$m['createElement'].__args__ = [null,null,['tag']];
	$m['createFieldSet'] = function() {

		return $m['createElement']('fieldset');
	};
	$m['createFieldSet'].__name__ = 'createFieldSet';

	$m['createFieldSet'].__bind_type__ = 0;
	$m['createFieldSet'].__args__ = [null,null];
	$m['createForm'] = function() {

		return $m['createElement']('form');
	};
	$m['createForm'].__name__ = 'createForm';

	$m['createForm'].__bind_type__ = 0;
	$m['createForm'].__args__ = [null,null];
	$m['createIFrame'] = function() {

		return $m['createElement']('iframe');
	};
	$m['createIFrame'].__name__ = 'createIFrame';

	$m['createIFrame'].__bind_type__ = 0;
	$m['createIFrame'].__args__ = [null,null];
	$m['createImg'] = function() {

		return $m['createElement']('img');
	};
	$m['createImg'].__name__ = 'createImg';

	$m['createImg'].__bind_type__ = 0;
	$m['createImg'].__args__ = [null,null];
	$m['createInputCheck'] = function() {

		return (typeof createInputElement == "undefined"?$m.createInputElement:createInputElement)('checkbox');
	};
	$m['createInputCheck'].__name__ = 'createInputCheck';

	$m['createInputCheck'].__bind_type__ = 0;
	$m['createInputCheck'].__args__ = [null,null];
	$m['createInputElement'] = function(elementType) {
		var e;
		e = $m['createElement']('input');
		e.__is_instance__ && typeof e.__setattr__ == 'function' ? e.__setattr__('type', elementType) : $p['setattr'](e, 'type', elementType);
		return e;
	};
	$m['createInputElement'].__name__ = 'createInputElement';

	$m['createInputElement'].__bind_type__ = 0;
	$m['createInputElement'].__args__ = [null,null,['elementType']];
	$m['createInputPassword'] = function() {

		return $m['createInputElement']('password');
	};
	$m['createInputPassword'].__name__ = 'createInputPassword';

	$m['createInputPassword'].__bind_type__ = 0;
	$m['createInputPassword'].__args__ = [null,null];
	$m['createInputRadio'] = function(group) {
		var e;
		e = $m['createInputElement']('radio');
		e.__is_instance__ && typeof e.__setattr__ == 'function' ? e.__setattr__('$$name', group) : $p['setattr'](e, '$$name', group);
		return e;
	};
	$m['createInputRadio'].__name__ = 'createInputRadio';

	$m['createInputRadio'].__bind_type__ = 0;
	$m['createInputRadio'].__args__ = [null,null,['group']];
	$m['createInputText'] = function() {

		return $m['createInputElement']('text');
	};
	$m['createInputText'].__name__ = 'createInputText';

	$m['createInputText'].__bind_type__ = 0;
	$m['createInputText'].__args__ = [null,null];
	$m['createLabel'] = function() {

		return $m['createElement']('label');
	};
	$m['createLabel'].__name__ = 'createLabel';

	$m['createLabel'].__bind_type__ = 0;
	$m['createLabel'].__args__ = [null,null];
	$m['createLegend'] = function() {

		return $m['createElement']('legend');
	};
	$m['createLegend'].__name__ = 'createLegend';

	$m['createLegend'].__bind_type__ = 0;
	$m['createLegend'].__args__ = [null,null];
	$m['createOptions'] = function() {

		return $m['createElement']('options');
	};
	$m['createOptions'].__name__ = 'createOptions';

	$m['createOptions'].__bind_type__ = 0;
	$m['createOptions'].__args__ = [null,null];
	$m['createSelect'] = function() {

		return $m['createElement']('select');
	};
	$m['createSelect'].__name__ = 'createSelect';

	$m['createSelect'].__bind_type__ = 0;
	$m['createSelect'].__args__ = [null,null];
	$m['createSpan'] = function() {

		return $m['createElement']('span');
	};
	$m['createSpan'].__name__ = 'createSpan';

	$m['createSpan'].__bind_type__ = 0;
	$m['createSpan'].__args__ = [null,null];
	$m['createTable'] = function() {

		return $m['createElement']('table');
	};
	$m['createTable'].__name__ = 'createTable';

	$m['createTable'].__bind_type__ = 0;
	$m['createTable'].__args__ = [null,null];
	$m['createTBody'] = function() {

		return $m['createElement']('tbody');
	};
	$m['createTBody'].__name__ = 'createTBody';

	$m['createTBody'].__bind_type__ = 0;
	$m['createTBody'].__args__ = [null,null];
	$m['createTD'] = function() {

		return $m['createElement']('td');
	};
	$m['createTD'].__name__ = 'createTD';

	$m['createTD'].__bind_type__ = 0;
	$m['createTD'].__args__ = [null,null];
	$m['createTextArea'] = function() {

		return $m['createElement']('textarea');
	};
	$m['createTextArea'].__name__ = 'createTextArea';

	$m['createTextArea'].__bind_type__ = 0;
	$m['createTextArea'].__args__ = [null,null];
	$m['createTH'] = function() {

		return $m['createElement']('th');
	};
	$m['createTH'].__name__ = 'createTH';

	$m['createTH'].__bind_type__ = 0;
	$m['createTH'].__args__ = [null,null];
	$m['createTR'] = function() {

		return $m['createElement']('tr');
	};
	$m['createTR'].__name__ = 'createTR';

	$m['createTR'].__bind_type__ = 0;
	$m['createTR'].__args__ = [null,null];
	$m['eventStopPropagation'] = function(evt) {

		evt['stopPropagation']();
		return null;
	};
	$m['eventStopPropagation'].__name__ = 'eventStopPropagation';

	$m['eventStopPropagation'].__bind_type__ = 0;
	$m['eventStopPropagation'].__args__ = [null,null,['evt']];
	$m['eventCancelBubble'] = function(evt, cancel) {

		evt.__is_instance__ && typeof evt.__setattr__ == 'function' ? evt.__setattr__('cancelBubble', cancel) : $p['setattr'](evt, 'cancelBubble', cancel);
		return null;
	};
	$m['eventCancelBubble'].__name__ = 'eventCancelBubble';

	$m['eventCancelBubble'].__bind_type__ = 0;
	$m['eventCancelBubble'].__args__ = [null,null,['evt'],['cancel']];
	$m['eventGetAltKey'] = function(evt) {
		var $attr11,$attr12;
		return (($attr11=($attr12=evt)['altKey']) == null || (($attr12.__is_instance__) && typeof $attr11 == 'function') || (typeof $attr11['__get__'] == 'function')?
					$p['getattr']($attr12, 'altKey'):
					evt['altKey']);
	};
	$m['eventGetAltKey'].__name__ = 'eventGetAltKey';

	$m['eventGetAltKey'].__bind_type__ = 0;
	$m['eventGetAltKey'].__args__ = [null,null,['evt']];
	$m['eventGetButton'] = function(evt) {
		var $attr14,$attr13;
		return (($attr13=($attr14=evt)['button']) == null || (($attr14.__is_instance__) && typeof $attr13 == 'function') || (typeof $attr13['__get__'] == 'function')?
					$p['getattr']($attr14, 'button'):
					evt['button']);
	};
	$m['eventGetButton'].__name__ = 'eventGetButton';

	$m['eventGetButton'].__bind_type__ = 0;
	$m['eventGetButton'].__args__ = [null,null,['evt']];
	$m['eventGetClientX'] = function(evt) {
		var $attr15,$attr16;
		return (($attr15=($attr16=evt)['clientX']) == null || (($attr16.__is_instance__) && typeof $attr15 == 'function') || (typeof $attr15['__get__'] == 'function')?
					$p['getattr']($attr16, 'clientX'):
					evt['clientX']);
	};
	$m['eventGetClientX'].__name__ = 'eventGetClientX';

	$m['eventGetClientX'].__bind_type__ = 0;
	$m['eventGetClientX'].__args__ = [null,null,['evt']];
	$m['eventGetClientY'] = function(evt) {
		var $attr17,$attr18;
		return (($attr17=($attr18=evt)['clientY']) == null || (($attr18.__is_instance__) && typeof $attr17 == 'function') || (typeof $attr17['__get__'] == 'function')?
					$p['getattr']($attr18, 'clientY'):
					evt['clientY']);
	};
	$m['eventGetClientY'].__name__ = 'eventGetClientY';

	$m['eventGetClientY'].__bind_type__ = 0;
	$m['eventGetClientY'].__args__ = [null,null,['evt']];
	$m['eventGetCtrlKey'] = function(evt) {
		var $attr20,$attr19;
		return (($attr19=($attr20=evt)['ctrlKey']) == null || (($attr20.__is_instance__) && typeof $attr19 == 'function') || (typeof $attr19['__get__'] == 'function')?
					$p['getattr']($attr20, 'ctrlKey'):
					evt['ctrlKey']);
	};
	$m['eventGetCtrlKey'].__name__ = 'eventGetCtrlKey';

	$m['eventGetCtrlKey'].__bind_type__ = 0;
	$m['eventGetCtrlKey'].__args__ = [null,null,['evt']];
	$m['eventGetFromElement'] = function(evt) {
		var $attr21,$attr22,$pyjs_try_err;
		try {
			return (($attr21=($attr22=evt)['fromElement']) == null || (($attr22.__is_instance__) && typeof $attr21 == 'function') || (typeof $attr21['__get__'] == 'function')?
						$p['getattr']($attr22, 'fromElement'):
						evt['fromElement']);
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
			$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
			if (true) {
				return null;
			}
		}
		return null;
	};
	$m['eventGetFromElement'].__name__ = 'eventGetFromElement';

	$m['eventGetFromElement'].__bind_type__ = 0;
	$m['eventGetFromElement'].__args__ = [null,null,['evt']];
	$m['eventGetKeyCode'] = function(evt) {
		var $or5,$or7,$or6,$bool31,$bool32,$attr23,$attr24,$attr25,$attr26;
		return ((($bool31=$or5=(($attr23=($attr24=evt)['which']) == null || (($attr24.__is_instance__) && typeof $attr23 == 'function') || (typeof $attr23['__get__'] == 'function')?
					$p['getattr']($attr24, 'which'):
					evt['which'])) === null || $bool31 === false || $bool31 === 0 || $bool31 === '' ?
			false :
			(typeof $bool31=='object'?
				(typeof $bool31.__nonzero__=='function'?
					$bool31.__nonzero__() :
					(typeof $bool31.__len__=='function'?
						($bool31.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )?$or5:((($bool32=$or6=(($attr25=($attr26=evt)['keyCode']) == null || (($attr26.__is_instance__) && typeof $attr25 == 'function') || (typeof $attr25['__get__'] == 'function')?
					$p['getattr']($attr26, 'keyCode'):
					evt['keyCode'])) === null || $bool32 === false || $bool32 === 0 || $bool32 === '' ?
			false :
			(typeof $bool32=='object'?
				(typeof $bool32.__nonzero__=='function'?
					$bool32.__nonzero__() :
					(typeof $bool32.__len__=='function'?
						($bool32.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )?$or6:0));
	};
	$m['eventGetKeyCode'].__name__ = 'eventGetKeyCode';

	$m['eventGetKeyCode'].__bind_type__ = 0;
	$m['eventGetKeyCode'].__args__ = [null,null,['evt']];
	$m['eventGetRepeat'] = function(evt) {
		var $attr28,$attr27;
		return (($attr27=($attr28=evt)['repeat']) == null || (($attr28.__is_instance__) && typeof $attr27 == 'function') || (typeof $attr27['__get__'] == 'function')?
					$p['getattr']($attr28, 'repeat'):
					evt['repeat']);
	};
	$m['eventGetRepeat'].__name__ = 'eventGetRepeat';

	$m['eventGetRepeat'].__bind_type__ = 0;
	$m['eventGetRepeat'].__args__ = [null,null,['evt']];
	$m['eventGetScreenX'] = function(evt) {
		var $attr29,$attr30;
		return (($attr29=($attr30=evt)['screenX']) == null || (($attr30.__is_instance__) && typeof $attr29 == 'function') || (typeof $attr29['__get__'] == 'function')?
					$p['getattr']($attr30, 'screenX'):
					evt['screenX']);
	};
	$m['eventGetScreenX'].__name__ = 'eventGetScreenX';

	$m['eventGetScreenX'].__bind_type__ = 0;
	$m['eventGetScreenX'].__args__ = [null,null,['evt']];
	$m['eventGetScreenY'] = function(evt) {
		var $attr32,$attr31;
		return (($attr31=($attr32=evt)['screenY']) == null || (($attr32.__is_instance__) && typeof $attr31 == 'function') || (typeof $attr31['__get__'] == 'function')?
					$p['getattr']($attr32, 'screenY'):
					evt['screenY']);
	};
	$m['eventGetScreenY'].__name__ = 'eventGetScreenY';

	$m['eventGetScreenY'].__bind_type__ = 0;
	$m['eventGetScreenY'].__args__ = [null,null,['evt']];
	$m['eventGetShiftKey'] = function(evt) {
		var $attr33,$attr34;
		return (($attr33=($attr34=evt)['shiftKey']) == null || (($attr34.__is_instance__) && typeof $attr33 == 'function') || (typeof $attr33['__get__'] == 'function')?
					$p['getattr']($attr34, 'shiftKey'):
					evt['shiftKey']);
	};
	$m['eventGetShiftKey'].__name__ = 'eventGetShiftKey';

	$m['eventGetShiftKey'].__bind_type__ = 0;
	$m['eventGetShiftKey'].__args__ = [null,null,['evt']];
	$m['eventGetCurrentTarget'] = function(event) {
		var $attr35,$attr36;
		return (($attr35=($attr36=event)['currentTarget']) == null || (($attr36.__is_instance__) && typeof $attr35 == 'function') || (typeof $attr35['__get__'] == 'function')?
					$p['getattr']($attr36, 'currentTarget'):
					event['currentTarget']);
	};
	$m['eventGetCurrentTarget'].__name__ = 'eventGetCurrentTarget';

	$m['eventGetCurrentTarget'].__bind_type__ = 0;
	$m['eventGetCurrentTarget'].__args__ = [null,null,['event']];
	$m['eventGetTarget'] = function(event) {
		var $attr38,$attr37;
		return (($attr37=($attr38=event)['target']) == null || (($attr38.__is_instance__) && typeof $attr37 == 'function') || (typeof $attr37['__get__'] == 'function')?
					$p['getattr']($attr38, 'target'):
					event['target']);
	};
	$m['eventGetTarget'].__name__ = 'eventGetTarget';

	$m['eventGetTarget'].__bind_type__ = 0;
	$m['eventGetTarget'].__args__ = [null,null,['event']];
	$m['eventGetToElement'] = function(evt) {
		var $bool34,$eq20,$eq19,$eq18,$bool33,$attr42,$attr40,$attr41,$attr39,type,$eq17;
		type = (typeof eventGetType == "undefined"?$m.eventGetType:eventGetType)(evt);
		if ((($bool33=(($eq17=type)===($eq18='mouseout')&&$eq17===null?true:
			($eq17===null?false:($eq18===null?false:
				((typeof $eq17=='object'||typeof $eq17=='function')&&typeof $eq17.__cmp__=='function'?$eq17.__cmp__($eq18) === 0:
					((typeof $eq18=='object'||typeof $eq18=='function')&&typeof $eq18.__cmp__=='function'?$eq18.__cmp__($eq17) === 0:
						$eq17==$eq18)))))) === null || $bool33 === false || $bool33 === 0 || $bool33 === '' ?
				false :
				(typeof $bool33=='object'?
					(typeof $bool33.__nonzero__=='function'?
						$bool33.__nonzero__() :
						(typeof $bool33.__len__=='function'?
							($bool33.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			return (($attr39=($attr40=evt)['relatedTarget']) == null || (($attr40.__is_instance__) && typeof $attr39 == 'function') || (typeof $attr39['__get__'] == 'function')?
						$p['getattr']($attr40, 'relatedTarget'):
						evt['relatedTarget']);
		}
		else if ((($bool34=(($eq19=type)===($eq20='mouseover')&&$eq19===null?true:
			($eq19===null?false:($eq20===null?false:
				((typeof $eq19=='object'||typeof $eq19=='function')&&typeof $eq19.__cmp__=='function'?$eq19.__cmp__($eq20) === 0:
					((typeof $eq20=='object'||typeof $eq20=='function')&&typeof $eq20.__cmp__=='function'?$eq20.__cmp__($eq19) === 0:
						$eq19==$eq20)))))) === null || $bool34 === false || $bool34 === 0 || $bool34 === '' ?
				false :
				(typeof $bool34=='object'?
					(typeof $bool34.__nonzero__=='function'?
						$bool34.__nonzero__() :
						(typeof $bool34.__len__=='function'?
							($bool34.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			return (($attr41=($attr42=evt)['target']) == null || (($attr42.__is_instance__) && typeof $attr41 == 'function') || (typeof $attr41['__get__'] == 'function')?
						$p['getattr']($attr42, 'target'):
						evt['target']);
		}
		return null;
	};
	$m['eventGetToElement'].__name__ = 'eventGetToElement';

	$m['eventGetToElement'].__bind_type__ = 0;
	$m['eventGetToElement'].__args__ = [null,null,['evt']];
	$m['eventGetType'] = function(event) {
		var $attr44,$attr43;
		return (($attr43=($attr44=event)['type']) == null || (($attr44.__is_instance__) && typeof $attr43 == 'function') || (typeof $attr43['__get__'] == 'function')?
					$p['getattr']($attr44, 'type'):
					event['type']);
	};
	$m['eventGetType'].__name__ = 'eventGetType';

	$m['eventGetType'].__bind_type__ = 0;
	$m['eventGetType'].__args__ = [null,null,['event']];
	$m['eventGetTypeInt'] = function(event) {
		var $attr46,$attr45;
		return $m['Event']['eventmap']['get']($p['str']((($attr45=($attr46=event)['type']) == null || (($attr46.__is_instance__) && typeof $attr45 == 'function') || (typeof $attr45['__get__'] == 'function')?
					$p['getattr']($attr46, 'type'):
					event['type'])), 0);
	};
	$m['eventGetTypeInt'].__name__ = 'eventGetTypeInt';

	$m['eventGetTypeInt'].__bind_type__ = 0;
	$m['eventGetTypeInt'].__args__ = [null,null,['event']];
	$m['eventGetTypeString'] = function(event) {

		return $m['eventGetType'](event);
	};
	$m['eventGetTypeString'].__name__ = 'eventGetTypeString';

	$m['eventGetTypeString'].__bind_type__ = 0;
	$m['eventGetTypeString'].__args__ = [null,null,['event']];
	$m['eventPreventDefault'] = function(evt) {

		evt['preventDefault']();
		return null;
	};
	$m['eventPreventDefault'].__name__ = 'eventPreventDefault';

	$m['eventPreventDefault'].__bind_type__ = 0;
	$m['eventPreventDefault'].__args__ = [null,null,['evt']];
	$m['eventSetKeyCode'] = function(evt, key) {

		evt.__is_instance__ && typeof evt.__setattr__ == 'function' ? evt.__setattr__('keyCode', key) : $p['setattr'](evt, 'keyCode', key);
		return null;
	};
	$m['eventSetKeyCode'].__name__ = 'eventSetKeyCode';

	$m['eventSetKeyCode'].__bind_type__ = 0;
	$m['eventSetKeyCode'].__args__ = [null,null,['evt'],['key']];
	$m['eventToString'] = function(evt) {

		return evt['toString']();
	};
	$m['eventToString'].__name__ = 'eventToString';

	$m['eventToString'].__bind_type__ = 0;
	$m['eventToString'].__args__ = [null,null,['evt']];
	$m['iframeGetSrc'] = function(elem) {
		var $attr47,$attr48;
		return (($attr47=($attr48=elem)['src']) == null || (($attr48.__is_instance__) && typeof $attr47 == 'function') || (typeof $attr47['__get__'] == 'function')?
					$p['getattr']($attr48, 'src'):
					elem['src']);
	};
	$m['iframeGetSrc'].__name__ = 'iframeGetSrc';

	$m['iframeGetSrc'].__bind_type__ = 0;
	$m['iframeGetSrc'].__args__ = [null,null,['elem']];
	$m['getAbsoluteLeft'] = function(elem) {
		var curr,$attr54,$attr49,$attr60,$sub3,$sub2,$sub1,$sub4,$attr59,$attr58,$attr51,$attr50,$attr53,$attr52,$attr55,$attr57,$attr56,$add2,$add1,$bool36,$bool35,left;
		left = 0;
		curr = elem;
		while ((($bool35=(($attr49=($attr50=curr)['offsetParent']) == null || (($attr50.__is_instance__) && typeof $attr49 == 'function') || (typeof $attr49['__get__'] == 'function')?
					$p['getattr']($attr50, 'offsetParent'):
					curr['offsetParent'])) === null || $bool35 === false || $bool35 === 0 || $bool35 === '' ?
				false :
				(typeof $bool35=='object'?
					(typeof $bool35.__nonzero__=='function'?
						$bool35.__nonzero__() :
						(typeof $bool35.__len__=='function'?
							($bool35.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			left = (typeof ($sub1=left)==typeof ($sub2=(($attr51=($attr52=curr)['scrollLeft']) == null || (($attr52.__is_instance__) && typeof $attr51 == 'function') || (typeof $attr51['__get__'] == 'function')?
						$p['getattr']($attr52, 'scrollLeft'):
						curr['scrollLeft'])) && (typeof $sub1=='number'||typeof $sub1=='string')?
				$sub1-$sub2:
				$p['op_sub']($sub1,$sub2));
			curr = (($attr53=($attr54=curr)['parentNode']) == null || (($attr54.__is_instance__) && typeof $attr53 == 'function') || (typeof $attr53['__get__'] == 'function')?
						$p['getattr']($attr54, 'parentNode'):
						curr['parentNode']);
		}
		while ((($bool36=elem) === null || $bool36 === false || $bool36 === 0 || $bool36 === '' ?
				false :
				(typeof $bool36=='object'?
					(typeof $bool36.__nonzero__=='function'?
						$bool36.__nonzero__() :
						(typeof $bool36.__len__=='function'?
							($bool36.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			left = (typeof ($add1=left)==typeof ($add2=(typeof ($sub3=(($attr55=($attr56=elem)['offsetLeft']) == null || (($attr56.__is_instance__) && typeof $attr55 == 'function') || (typeof $attr55['__get__'] == 'function')?
						$p['getattr']($attr56, 'offsetLeft'):
						elem['offsetLeft']))==typeof ($sub4=(($attr57=($attr58=elem)['scrollLeft']) == null || (($attr58.__is_instance__) && typeof $attr57 == 'function') || (typeof $attr57['__get__'] == 'function')?
						$p['getattr']($attr58, 'scrollLeft'):
						elem['scrollLeft'])) && (typeof $sub3=='number'||typeof $sub3=='string')?
				$sub3-$sub4:
				$p['op_sub']($sub3,$sub4))) && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				$p['op_add']($add1,$add2));
			elem = (($attr59=($attr60=elem)['offsetParent']) == null || (($attr60.__is_instance__) && typeof $attr59 == 'function') || (typeof $attr59['__get__'] == 'function')?
						$p['getattr']($attr60, 'offsetParent'):
						elem['offsetParent']);
		}
		return left;
	};
	$m['getAbsoluteLeft'].__name__ = 'getAbsoluteLeft';

	$m['getAbsoluteLeft'].__bind_type__ = 0;
	$m['getAbsoluteLeft'].__args__ = [null,null,['elem']];
	$m['getAbsoluteTop'] = function(elem) {
		var curr,$attr72,$attr68,$attr69,$attr64,$attr65,top,$attr67,$attr61,$attr62,$attr63,$sub8,$sub7,$sub6,$sub5,$attr71,$attr70,$add3,$bool37,$add4,$bool38,$attr66;
		top = 0;
		curr = elem;
		while ((($bool37=(($attr61=($attr62=curr)['offsetParent']) == null || (($attr62.__is_instance__) && typeof $attr61 == 'function') || (typeof $attr61['__get__'] == 'function')?
					$p['getattr']($attr62, 'offsetParent'):
					curr['offsetParent'])) === null || $bool37 === false || $bool37 === 0 || $bool37 === '' ?
				false :
				(typeof $bool37=='object'?
					(typeof $bool37.__nonzero__=='function'?
						$bool37.__nonzero__() :
						(typeof $bool37.__len__=='function'?
							($bool37.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			top = (typeof ($sub5=top)==typeof ($sub6=(($attr63=($attr64=curr)['scrollTop']) == null || (($attr64.__is_instance__) && typeof $attr63 == 'function') || (typeof $attr63['__get__'] == 'function')?
						$p['getattr']($attr64, 'scrollTop'):
						curr['scrollTop'])) && (typeof $sub5=='number'||typeof $sub5=='string')?
				$sub5-$sub6:
				$p['op_sub']($sub5,$sub6));
			curr = (($attr65=($attr66=curr)['parentNode']) == null || (($attr66.__is_instance__) && typeof $attr65 == 'function') || (typeof $attr65['__get__'] == 'function')?
						$p['getattr']($attr66, 'parentNode'):
						curr['parentNode']);
		}
		while ((($bool38=elem) === null || $bool38 === false || $bool38 === 0 || $bool38 === '' ?
				false :
				(typeof $bool38=='object'?
					(typeof $bool38.__nonzero__=='function'?
						$bool38.__nonzero__() :
						(typeof $bool38.__len__=='function'?
							($bool38.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			top = (typeof ($add3=top)==typeof ($add4=(typeof ($sub7=(($attr67=($attr68=elem)['offsetTop']) == null || (($attr68.__is_instance__) && typeof $attr67 == 'function') || (typeof $attr67['__get__'] == 'function')?
						$p['getattr']($attr68, 'offsetTop'):
						elem['offsetTop']))==typeof ($sub8=(($attr69=($attr70=elem)['scrollTop']) == null || (($attr70.__is_instance__) && typeof $attr69 == 'function') || (typeof $attr69['__get__'] == 'function')?
						$p['getattr']($attr70, 'scrollTop'):
						elem['scrollTop'])) && (typeof $sub7=='number'||typeof $sub7=='string')?
				$sub7-$sub8:
				$p['op_sub']($sub7,$sub8))) && (typeof $add3=='number'||typeof $add3=='string')?
				$add3+$add4:
				$p['op_add']($add3,$add4));
			elem = (($attr71=($attr72=elem)['offsetParent']) == null || (($attr72.__is_instance__) && typeof $attr71 == 'function') || (typeof $attr71['__get__'] == 'function')?
						$p['getattr']($attr72, 'offsetParent'):
						elem['offsetParent']);
		}
		return top;
	};
	$m['getAbsoluteTop'].__name__ = 'getAbsoluteTop';

	$m['getAbsoluteTop'].__bind_type__ = 0;
	$m['getAbsoluteTop'].__args__ = [null,null,['elem']];
	$m['getAttribute'] = function(elem, attr) {
		var $bool39;
		attr = $p['getattr'](elem, attr);
		if ((($bool39=(attr === null)) === null || $bool39 === false || $bool39 === 0 || $bool39 === '' ?
				false :
				(typeof $bool39=='object'?
					(typeof $bool39.__nonzero__=='function'?
						$bool39.__nonzero__() :
						(typeof $bool39.__len__=='function'?
							($bool39.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			return null;
		}
		return $p['str'](attr);
	};
	$m['getAttribute'].__name__ = 'getAttribute';

	$m['getAttribute'].__bind_type__ = 0;
	$m['getAttribute'].__args__ = [null,null,['elem'],['attr']];
	$m['getElemAttribute'] = function(elem, attr) {
		var $bool41,mf,$bool40;
		mf = (typeof get_main_frame == "undefined"?$m.get_main_frame:get_main_frame)();
		if ((($bool41=!(($bool40=elem['hasAttribute'](attr)) === null || $bool40 === false || $bool40 === 0 || $bool40 === '' ?
			false :
			(typeof $bool40=='object'?
				(typeof $bool40.__nonzero__=='function'?
					$bool40.__nonzero__() :
					(typeof $bool40.__len__=='function'?
						($bool40.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )) === null || $bool41 === false || $bool41 === 0 || $bool41 === '' ?
				false :
				(typeof $bool41=='object'?
					(typeof $bool41.__nonzero__=='function'?
						$bool41.__nonzero__() :
						(typeof $bool41.__len__=='function'?
							($bool41.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			return $p['str']($p['getattr'](elem, mf['mash_attrib'](attr)));
		}
		return $p['str'](elem['getAttribute'](attr));
	};
	$m['getElemAttribute'].__name__ = 'getElemAttribute';

	$m['getElemAttribute'].__bind_type__ = 0;
	$m['getElemAttribute'].__args__ = [null,null,['elem'],['attr']];
	$m['getBooleanAttribute'] = function(elem, attr) {
		var mf;
		mf = (typeof get_main_frame == "undefined"?$m.get_main_frame:get_main_frame)();
		return $p['bool']($p['getattr'](elem, mf['mash_attrib'](attr)));
	};
	$m['getBooleanAttribute'].__name__ = 'getBooleanAttribute';

	$m['getBooleanAttribute'].__bind_type__ = 0;
	$m['getBooleanAttribute'].__args__ = [null,null,['elem'],['attr']];
	$m['getBooleanElemAttribute'] = function(elem, attr) {
		var $bool42,$bool43;
		if ((($bool43=!(($bool42=elem['hasAttribute'](attr)) === null || $bool42 === false || $bool42 === 0 || $bool42 === '' ?
			false :
			(typeof $bool42=='object'?
				(typeof $bool42.__nonzero__=='function'?
					$bool42.__nonzero__() :
					(typeof $bool42.__len__=='function'?
						($bool42.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )) === null || $bool43 === false || $bool43 === 0 || $bool43 === '' ?
				false :
				(typeof $bool43=='object'?
					(typeof $bool43.__nonzero__=='function'?
						$bool43.__nonzero__() :
						(typeof $bool43.__len__=='function'?
							($bool43.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			return null;
		}
		return $p['bool'](elem['getAttribute'](attr));
	};
	$m['getBooleanElemAttribute'].__name__ = 'getBooleanElemAttribute';

	$m['getBooleanElemAttribute'].__bind_type__ = 0;
	$m['getBooleanElemAttribute'].__args__ = [null,null,['elem'],['attr']];
	$m['getCaptureElement'] = function() {

		return $m['sCaptureElem'];
	};
	$m['getCaptureElement'].__name__ = 'getCaptureElement';

	$m['getCaptureElement'].__bind_type__ = 0;
	$m['getCaptureElement'].__args__ = [null,null];
	$m['getChild'] = function(elem, index) {
		var count,$bool45,$bool44,$bool46,$attr78,$attr77,$attr76,$attr75,$attr74,$attr73,next,$eq21,$eq23,$eq22,$add6,$eq24,child,$add5;
		count = 0;
		child = (($attr73=($attr74=elem)['firstChild']) == null || (($attr74.__is_instance__) && typeof $attr73 == 'function') || (typeof $attr73['__get__'] == 'function')?
					$p['getattr']($attr74, 'firstChild'):
					elem['firstChild']);
		while ((($bool44=child) === null || $bool44 === false || $bool44 === 0 || $bool44 === '' ?
				false :
				(typeof $bool44=='object'?
					(typeof $bool44.__nonzero__=='function'?
						$bool44.__nonzero__() :
						(typeof $bool44.__len__=='function'?
							($bool44.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			next = (($attr75=($attr76=child)['nextSibling']) == null || (($attr76.__is_instance__) && typeof $attr75 == 'function') || (typeof $attr75['__get__'] == 'function')?
						$p['getattr']($attr76, 'nextSibling'):
						child['nextSibling']);
			if ((($bool45=(($eq21=(($attr77=($attr78=child)['nodeType']) == null || (($attr78.__is_instance__) && typeof $attr77 == 'function') || (typeof $attr77['__get__'] == 'function')?
						$p['getattr']($attr78, 'nodeType'):
						child['nodeType']))===($eq22=1)&&$eq21===null?true:
				($eq21===null?false:($eq22===null?false:
					((typeof $eq21=='object'||typeof $eq21=='function')&&typeof $eq21.__cmp__=='function'?$eq21.__cmp__($eq22) === 0:
						((typeof $eq22=='object'||typeof $eq22=='function')&&typeof $eq22.__cmp__=='function'?$eq22.__cmp__($eq21) === 0:
							$eq21==$eq22)))))) === null || $bool45 === false || $bool45 === 0 || $bool45 === '' ?
					false :
					(typeof $bool45=='object'?
						(typeof $bool45.__nonzero__=='function'?
							$bool45.__nonzero__() :
							(typeof $bool45.__len__=='function'?
								($bool45.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool46=(($eq23=index)===($eq24=count)&&$eq23===null?true:
					($eq23===null?false:($eq24===null?false:
						((typeof $eq23=='object'||typeof $eq23=='function')&&typeof $eq23.__cmp__=='function'?$eq23.__cmp__($eq24) === 0:
							((typeof $eq24=='object'||typeof $eq24=='function')&&typeof $eq24.__cmp__=='function'?$eq24.__cmp__($eq23) === 0:
								$eq23==$eq24)))))) === null || $bool46 === false || $bool46 === 0 || $bool46 === '' ?
						false :
						(typeof $bool46=='object'?
							(typeof $bool46.__nonzero__=='function'?
								$bool46.__nonzero__() :
								(typeof $bool46.__len__=='function'?
									($bool46.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return child;
				}
				count = (typeof ($add5=count)==typeof ($add6=1) && (typeof $add5=='number'||typeof $add5=='string')?
					$add5+$add6:
					$p['op_add']($add5,$add6));
			}
			child = next;
		}
		return null;
	};
	$m['getChild'].__name__ = 'getChild';

	$m['getChild'].__bind_type__ = 0;
	$m['getChild'].__args__ = [null,null,['elem'],['index']];
	$m['getChildCount'] = function(elem) {
		var count,$bool47,$attr80,$attr81,$attr83,$attr79,$attr82,$eq26,$bool48,$eq25,$add7,child,$add8,$attr84;
		count = 0;
		child = (($attr79=($attr80=elem)['firstChild']) == null || (($attr80.__is_instance__) && typeof $attr79 == 'function') || (typeof $attr79['__get__'] == 'function')?
					$p['getattr']($attr80, 'firstChild'):
					elem['firstChild']);
		while ((($bool47=child) === null || $bool47 === false || $bool47 === 0 || $bool47 === '' ?
				false :
				(typeof $bool47=='object'?
					(typeof $bool47.__nonzero__=='function'?
						$bool47.__nonzero__() :
						(typeof $bool47.__len__=='function'?
							($bool47.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			if ((($bool48=(($eq25=(($attr81=($attr82=child)['nodeType']) == null || (($attr82.__is_instance__) && typeof $attr81 == 'function') || (typeof $attr81['__get__'] == 'function')?
						$p['getattr']($attr82, 'nodeType'):
						child['nodeType']))===($eq26=1)&&$eq25===null?true:
				($eq25===null?false:($eq26===null?false:
					((typeof $eq25=='object'||typeof $eq25=='function')&&typeof $eq25.__cmp__=='function'?$eq25.__cmp__($eq26) === 0:
						((typeof $eq26=='object'||typeof $eq26=='function')&&typeof $eq26.__cmp__=='function'?$eq26.__cmp__($eq25) === 0:
							$eq25==$eq26)))))) === null || $bool48 === false || $bool48 === 0 || $bool48 === '' ?
					false :
					(typeof $bool48=='object'?
						(typeof $bool48.__nonzero__=='function'?
							$bool48.__nonzero__() :
							(typeof $bool48.__len__=='function'?
								($bool48.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				count = (typeof ($add7=count)==typeof ($add8=1) && (typeof $add7=='number'||typeof $add7=='string')?
					$add7+$add8:
					$p['op_add']($add7,$add8));
			}
			child = (($attr83=($attr84=child)['nextSibling']) == null || (($attr84.__is_instance__) && typeof $attr83 == 'function') || (typeof $attr83['__get__'] == 'function')?
						$p['getattr']($attr84, 'nextSibling'):
						child['nextSibling']);
		}
		return count;
	};
	$m['getChildCount'].__name__ = 'getChildCount';

	$m['getChildCount'].__bind_type__ = 0;
	$m['getChildCount'].__args__ = [null,null,['elem']];
	$m['getChildIndex'] = function(parent, toFind) {
		var count,$attr86,$attr87,$attr85,$attr88,$attr89,$eq30,$bool49,$attr90,$bool50,$eq27,child,$eq29,$eq28,$add9,$add10,$bool51;
		count = 0;
		child = (($attr85=($attr86=parent)['firstChild']) == null || (($attr86.__is_instance__) && typeof $attr85 == 'function') || (typeof $attr85['__get__'] == 'function')?
					$p['getattr']($attr86, 'firstChild'):
					parent['firstChild']);
		while ((($bool49=child) === null || $bool49 === false || $bool49 === 0 || $bool49 === '' ?
				false :
				(typeof $bool49=='object'?
					(typeof $bool49.__nonzero__=='function'?
						$bool49.__nonzero__() :
						(typeof $bool49.__len__=='function'?
							($bool49.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			if ((($bool50=(($eq27=child)===($eq28=toFind)&&$eq27===null?true:
				($eq27===null?false:($eq28===null?false:
					((typeof $eq27=='object'||typeof $eq27=='function')&&typeof $eq27.__cmp__=='function'?$eq27.__cmp__($eq28) === 0:
						((typeof $eq28=='object'||typeof $eq28=='function')&&typeof $eq28.__cmp__=='function'?$eq28.__cmp__($eq27) === 0:
							$eq27==$eq28)))))) === null || $bool50 === false || $bool50 === 0 || $bool50 === '' ?
					false :
					(typeof $bool50=='object'?
						(typeof $bool50.__nonzero__=='function'?
							$bool50.__nonzero__() :
							(typeof $bool50.__len__=='function'?
								($bool50.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return count;
			}
			if ((($bool51=(($eq29=(($attr87=($attr88=child)['nodeType']) == null || (($attr88.__is_instance__) && typeof $attr87 == 'function') || (typeof $attr87['__get__'] == 'function')?
						$p['getattr']($attr88, 'nodeType'):
						child['nodeType']))===($eq30=1)&&$eq29===null?true:
				($eq29===null?false:($eq30===null?false:
					((typeof $eq29=='object'||typeof $eq29=='function')&&typeof $eq29.__cmp__=='function'?$eq29.__cmp__($eq30) === 0:
						((typeof $eq30=='object'||typeof $eq30=='function')&&typeof $eq30.__cmp__=='function'?$eq30.__cmp__($eq29) === 0:
							$eq29==$eq30)))))) === null || $bool51 === false || $bool51 === 0 || $bool51 === '' ?
					false :
					(typeof $bool51=='object'?
						(typeof $bool51.__nonzero__=='function'?
							$bool51.__nonzero__() :
							(typeof $bool51.__len__=='function'?
								($bool51.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				count = (typeof ($add9=count)==typeof ($add10=1) && (typeof $add9=='number'||typeof $add9=='string')?
					$add9+$add10:
					$p['op_add']($add9,$add10));
			}
			child = (($attr89=($attr90=child)['nextSibling']) == null || (($attr90.__is_instance__) && typeof $attr89 == 'function') || (typeof $attr89['__get__'] == 'function')?
						$p['getattr']($attr90, 'nextSibling'):
						child['nextSibling']);
		}
		return (typeof ($usub1=1)=='number'?
			-$usub1:
			$p['op_usub']($usub1));
	};
	$m['getChildIndex'].__name__ = 'getChildIndex';

	$m['getChildIndex'].__bind_type__ = 0;
	$m['getChildIndex'].__args__ = [null,null,['parent'],['toFind']];
	$m['getElementById'] = function(id) {

		return $doc['getElementById'](id);
	};
	$m['getElementById'].__name__ = 'getElementById';

	$m['getElementById'].__bind_type__ = 0;
	$m['getElementById'].__args__ = [null,null,['id']];
	$m['getEventListener'] = function(element) {

		return $m['get_listener'](element);
	};
	$m['getEventListener'].__name__ = 'getEventListener';

	$m['getEventListener'].__bind_type__ = 0;
	$m['getEventListener'].__args__ = [null,null,['element']];
	$m['eventbitsmap'] = $p['dict']([]);
	$m['getEventsSunk'] = function(element) {

		return $m['eventbitsmap']['get'](element, 0);
	};
	$m['getEventsSunk'].__name__ = 'getEventsSunk';

	$m['getEventsSunk'].__bind_type__ = 0;
	$m['getEventsSunk'].__args__ = [null,null,['element']];
	$m['getFirstChild'] = function(elem) {
		var $bool54,$and9,$attr96,$attr91,$attr93,$bool52,$attr92,$bool53,$and12,$and10,$and11,$eq31,$attr95,child,$attr94,$eq32;
		child = ((($bool52=$and9=elem) === null || $bool52 === false || $bool52 === 0 || $bool52 === '' ?
			false :
			(typeof $bool52=='object'?
				(typeof $bool52.__nonzero__=='function'?
					$bool52.__nonzero__() :
					(typeof $bool52.__len__=='function'?
						($bool52.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )?(($attr91=($attr92=elem)['firstChild']) == null || (($attr92.__is_instance__) && typeof $attr91 == 'function') || (typeof $attr91['__get__'] == 'function')?
					$p['getattr']($attr92, 'firstChild'):
					elem['firstChild']):$and9);
		while ((($bool54=((($bool53=$and11=child) === null || $bool53 === false || $bool53 === 0 || $bool53 === '' ?
			false :
			(typeof $bool53=='object'?
				(typeof $bool53.__nonzero__=='function'?
					$bool53.__nonzero__() :
					(typeof $bool53.__len__=='function'?
						($bool53.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )?!(($eq31=(($attr93=($attr94=child)['nodeType']) == null || (($attr94.__is_instance__) && typeof $attr93 == 'function') || (typeof $attr93['__get__'] == 'function')?
					$p['getattr']($attr94, 'nodeType'):
					child['nodeType']))===($eq32=1)&&$eq31===null?true:
			($eq31===null?false:($eq32===null?false:
				((typeof $eq31=='object'||typeof $eq31=='function')&&typeof $eq31.__cmp__=='function'?$eq31.__cmp__($eq32) === 0:
					((typeof $eq32=='object'||typeof $eq32=='function')&&typeof $eq32.__cmp__=='function'?$eq32.__cmp__($eq31) === 0:
						$eq31==$eq32))))):$and11)) === null || $bool54 === false || $bool54 === 0 || $bool54 === '' ?
				false :
				(typeof $bool54=='object'?
					(typeof $bool54.__nonzero__=='function'?
						$bool54.__nonzero__() :
						(typeof $bool54.__len__=='function'?
							($bool54.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			child = (($attr95=($attr96=child)['nextSibling']) == null || (($attr96.__is_instance__) && typeof $attr95 == 'function') || (typeof $attr95['__get__'] == 'function')?
						$p['getattr']($attr96, 'nextSibling'):
						child['nextSibling']);
		}
		return child;
	};
	$m['getFirstChild'].__name__ = 'getFirstChild';

	$m['getFirstChild'].__bind_type__ = 0;
	$m['getFirstChild'].__args__ = [null,null,['elem']];
	$m['getInnerHTML'] = function(element) {
		var $bool55,$attr97,$attr100,$attr99,$attr98,$and13,$pyjs_try_err,$and16,$and14,$and15,$bool56;
		try {
			return ((($bool55=$and13=element) === null || $bool55 === false || $bool55 === 0 || $bool55 === '' ?
				false :
				(typeof $bool55=='object'?
					(typeof $bool55.__nonzero__=='function'?
						$bool55.__nonzero__() :
						(typeof $bool55.__len__=='function'?
							($bool55.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?(($attr97=($attr98=element)['innerHtml']) == null || (($attr98.__is_instance__) && typeof $attr97 == 'function') || (typeof $attr97['__get__'] == 'function')?
						$p['getattr']($attr98, 'innerHtml'):
						element['innerHtml']):$and13);
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
			$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
			if (true) {
				return ((($bool56=$and15=element) === null || $bool56 === false || $bool56 === 0 || $bool56 === '' ?
					false :
					(typeof $bool56=='object'?
						(typeof $bool56.__nonzero__=='function'?
							$bool56.__nonzero__() :
							(typeof $bool56.__len__=='function'?
								($bool56.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?(($attr99=($attr100=element)['innerHTML']) == null || (($attr100.__is_instance__) && typeof $attr99 == 'function') || (typeof $attr99['__get__'] == 'function')?
							$p['getattr']($attr100, 'innerHTML'):
							element['innerHTML']):$and15);
			}
		}
		return null;
	};
	$m['getInnerHTML'].__name__ = 'getInnerHTML';

	$m['getInnerHTML'].__bind_type__ = 0;
	$m['getInnerHTML'].__args__ = [null,null,['element']];
	$m['getInnerText'] = function(element) {
		var $bool57,text,child,$bool58,$bool59,$eq33,$eq34,$attr106,$attr107,$attr104,$attr105,$attr102,$attr103,$attr101,$attr108,$attr109,$add14,$add11,$add12,$add13,$attr110;
		text = '';
		child = (($attr101=($attr102=element)['firstChild']) == null || (($attr102.__is_instance__) && typeof $attr101 == 'function') || (typeof $attr101['__get__'] == 'function')?
					$p['getattr']($attr102, 'firstChild'):
					element['firstChild']);
		while ((($bool57=child) === null || $bool57 === false || $bool57 === 0 || $bool57 === '' ?
				false :
				(typeof $bool57=='object'?
					(typeof $bool57.__nonzero__=='function'?
						$bool57.__nonzero__() :
						(typeof $bool57.__len__=='function'?
							($bool57.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			if ((($bool58=(($eq33=(($attr103=($attr104=child)['nodeType']) == null || (($attr104.__is_instance__) && typeof $attr103 == 'function') || (typeof $attr103['__get__'] == 'function')?
						$p['getattr']($attr104, 'nodeType'):
						child['nodeType']))===($eq34=1)&&$eq33===null?true:
				($eq33===null?false:($eq34===null?false:
					((typeof $eq33=='object'||typeof $eq33=='function')&&typeof $eq33.__cmp__=='function'?$eq33.__cmp__($eq34) === 0:
						((typeof $eq34=='object'||typeof $eq34=='function')&&typeof $eq34.__cmp__=='function'?$eq34.__cmp__($eq33) === 0:
							$eq33==$eq34)))))) === null || $bool58 === false || $bool58 === 0 || $bool58 === '' ?
					false :
					(typeof $bool58=='object'?
						(typeof $bool58.__nonzero__=='function'?
							$bool58.__nonzero__() :
							(typeof $bool58.__len__=='function'?
								($bool58.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				text = (typeof ($add11=text)==typeof ($add12=$m['getInnerText'](child)) && (typeof $add11=='number'||typeof $add11=='string')?
					$add11+$add12:
					$p['op_add']($add11,$add12));
			}
			else if ((($bool59=(($attr105=($attr106=child)['nodeValue']) == null || (($attr106.__is_instance__) && typeof $attr105 == 'function') || (typeof $attr105['__get__'] == 'function')?
						$p['getattr']($attr106, 'nodeValue'):
						child['nodeValue'])) === null || $bool59 === false || $bool59 === 0 || $bool59 === '' ?
					false :
					(typeof $bool59=='object'?
						(typeof $bool59.__nonzero__=='function'?
							$bool59.__nonzero__() :
							(typeof $bool59.__len__=='function'?
								($bool59.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				text = (typeof ($add13=text)==typeof ($add14=(($attr107=($attr108=child)['nodeValue']) == null || (($attr108.__is_instance__) && typeof $attr107 == 'function') || (typeof $attr107['__get__'] == 'function')?
							$p['getattr']($attr108, 'nodeValue'):
							child['nodeValue'])) && (typeof $add13=='number'||typeof $add13=='string')?
					$add13+$add14:
					$p['op_add']($add13,$add14));
			}
			child = (($attr109=($attr110=child)['nextSibling']) == null || (($attr110.__is_instance__) && typeof $attr109 == 'function') || (typeof $attr109['__get__'] == 'function')?
						$p['getattr']($attr110, 'nextSibling'):
						child['nextSibling']);
		}
		return text;
	};
	$m['getInnerText'].__name__ = 'getInnerText';

	$m['getInnerText'].__bind_type__ = 0;
	$m['getInnerText'].__args__ = [null,null,['element']];
	$m['getIntAttribute'] = function(elem, attr) {

		return $p['float_int']($p['getattr'](elem, attr));
	};
	$m['getIntAttribute'].__name__ = 'getIntAttribute';

	$m['getIntAttribute'].__bind_type__ = 0;
	$m['getIntAttribute'].__args__ = [null,null,['elem'],['attr']];
	$m['getIntElemAttribute'] = function(elem, attr) {
		var $bool61,$bool60;
		if ((($bool61=!(($bool60=elem['hasAttribute'](attr)) === null || $bool60 === false || $bool60 === 0 || $bool60 === '' ?
			false :
			(typeof $bool60=='object'?
				(typeof $bool60.__nonzero__=='function'?
					$bool60.__nonzero__() :
					(typeof $bool60.__len__=='function'?
						($bool60.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )) === null || $bool61 === false || $bool61 === 0 || $bool61 === '' ?
				false :
				(typeof $bool61=='object'?
					(typeof $bool61.__nonzero__=='function'?
						$bool61.__nonzero__() :
						(typeof $bool61.__len__=='function'?
							($bool61.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			return null;
		}
		return $p['float_int'](elem['getAttribute'](attr));
	};
	$m['getIntElemAttribute'].__name__ = 'getIntElemAttribute';

	$m['getIntElemAttribute'].__bind_type__ = 0;
	$m['getIntElemAttribute'].__args__ = [null,null,['elem'],['attr']];
	$m['getIntStyleAttribute'] = function(elem, attr) {
		var $attr111,$attr112;
		return $m['getIntAttribute']((($attr111=($attr112=elem)['style']) == null || (($attr112.__is_instance__) && typeof $attr111 == 'function') || (typeof $attr111['__get__'] == 'function')?
					$p['getattr']($attr112, 'style'):
					elem['style']), attr);
	};
	$m['getIntStyleAttribute'].__name__ = 'getIntStyleAttribute';

	$m['getIntStyleAttribute'].__bind_type__ = 0;
	$m['getIntStyleAttribute'].__args__ = [null,null,['elem'],['attr']];
	$m['getNextSibling'] = function(elem) {
		var $attr118,$bool63,$bool62,$attr113,$attr115,$attr117,$attr114,sib,$eq36,$and17,$eq35,$and18,$attr116;
		sib = (($attr113=($attr114=elem)['nextSibling']) == null || (($attr114.__is_instance__) && typeof $attr113 == 'function') || (typeof $attr113['__get__'] == 'function')?
					$p['getattr']($attr114, 'nextSibling'):
					elem['nextSibling']);
		while ((($bool63=((($bool62=$and17=sib) === null || $bool62 === false || $bool62 === 0 || $bool62 === '' ?
			false :
			(typeof $bool62=='object'?
				(typeof $bool62.__nonzero__=='function'?
					$bool62.__nonzero__() :
					(typeof $bool62.__len__=='function'?
						($bool62.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )?!(($eq35=(($attr115=($attr116=sib)['nodeType']) == null || (($attr116.__is_instance__) && typeof $attr115 == 'function') || (typeof $attr115['__get__'] == 'function')?
					$p['getattr']($attr116, 'nodeType'):
					sib['nodeType']))===($eq36=1)&&$eq35===null?true:
			($eq35===null?false:($eq36===null?false:
				((typeof $eq35=='object'||typeof $eq35=='function')&&typeof $eq35.__cmp__=='function'?$eq35.__cmp__($eq36) === 0:
					((typeof $eq36=='object'||typeof $eq36=='function')&&typeof $eq36.__cmp__=='function'?$eq36.__cmp__($eq35) === 0:
						$eq35==$eq36))))):$and17)) === null || $bool63 === false || $bool63 === 0 || $bool63 === '' ?
				false :
				(typeof $bool63=='object'?
					(typeof $bool63.__nonzero__=='function'?
						$bool63.__nonzero__() :
						(typeof $bool63.__len__=='function'?
							($bool63.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			sib = (($attr117=($attr118=sib)['nextSibling']) == null || (($attr118.__is_instance__) && typeof $attr117 == 'function') || (typeof $attr117['__get__'] == 'function')?
						$p['getattr']($attr118, 'nextSibling'):
						sib['nextSibling']);
		}
		return sib;
	};
	$m['getNextSibling'].__name__ = 'getNextSibling';

	$m['getNextSibling'].__bind_type__ = 0;
	$m['getNextSibling'].__args__ = [null,null,['elem']];
	$m['getNodeType'] = function(elem) {
		var $attr119,$attr120;
		return (($attr119=($attr120=elem)['nodeType']) == null || (($attr120.__is_instance__) && typeof $attr119 == 'function') || (typeof $attr119['__get__'] == 'function')?
					$p['getattr']($attr120, 'nodeType'):
					elem['nodeType']);
	};
	$m['getNodeType'].__name__ = 'getNodeType';

	$m['getNodeType'].__bind_type__ = 0;
	$m['getNodeType'].__args__ = [null,null,['elem']];
	$m['getParent'] = function(elem) {
		var $bool65,$bool64,parent,$attr121,$attr122,$eq37,$eq38;
		parent = (($attr121=($attr122=elem)['parentNode']) == null || (($attr122.__is_instance__) && typeof $attr121 == 'function') || (typeof $attr121['__get__'] == 'function')?
					$p['getattr']($attr122, 'parentNode'):
					elem['parentNode']);
		if ((($bool64=(parent === null)) === null || $bool64 === false || $bool64 === 0 || $bool64 === '' ?
				false :
				(typeof $bool64=='object'?
					(typeof $bool64.__nonzero__=='function'?
						$bool64.__nonzero__() :
						(typeof $bool64.__len__=='function'?
							($bool64.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			return null;
		}
		if ((($bool65=!(($eq37=$m['getNodeType'](parent))===($eq38=1)&&$eq37===null?true:
			($eq37===null?false:($eq38===null?false:
				((typeof $eq37=='object'||typeof $eq37=='function')&&typeof $eq37.__cmp__=='function'?$eq37.__cmp__($eq38) === 0:
					((typeof $eq38=='object'||typeof $eq38=='function')&&typeof $eq38.__cmp__=='function'?$eq38.__cmp__($eq37) === 0:
						$eq37==$eq38)))))) === null || $bool65 === false || $bool65 === 0 || $bool65 === '' ?
				false :
				(typeof $bool65=='object'?
					(typeof $bool65.__nonzero__=='function'?
						$bool65.__nonzero__() :
						(typeof $bool65.__len__=='function'?
							($bool65.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			return null;
		}
		return parent;
	};
	$m['getParent'].__name__ = 'getParent';

	$m['getParent'].__bind_type__ = 0;
	$m['getParent'].__args__ = [null,null,['elem']];
	$m['getStyleAttribute'] = function(elem, attr) {
		var $bool66,$attr123,$pyjs_try_err,$attr124,$attr125,$attr126;
		try {
			if ((($bool66=$p['hasattr']((($attr123=($attr124=elem)['style']) == null || (($attr124.__is_instance__) && typeof $attr123 == 'function') || (typeof $attr123['__get__'] == 'function')?
						$p['getattr']($attr124, 'style'):
						elem['style']), 'getProperty')) === null || $bool66 === false || $bool66 === 0 || $bool66 === '' ?
					false :
					(typeof $bool66=='object'?
						(typeof $bool66.__nonzero__=='function'?
							$bool66.__nonzero__() :
							(typeof $bool66.__len__=='function'?
								($bool66.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return elem['style']['getProperty']((typeof mash_name_for_glib == "undefined"?$m.mash_name_for_glib:mash_name_for_glib)(attr));
			}
			return elem['style']['getAttribute'](attr);
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
			$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
			if (($pyjs_try_err_name == $p['AttributeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['AttributeError'])) {
				return $p['getattr']((($attr125=($attr126=elem)['style']) == null || (($attr126.__is_instance__) && typeof $attr125 == 'function') || (typeof $attr125['__get__'] == 'function')?
							$p['getattr']($attr126, 'style'):
							elem['style']), attr, null);
			} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
		}
		return null;
	};
	$m['getStyleAttribute'].__name__ = 'getStyleAttribute';

	$m['getStyleAttribute'].__bind_type__ = 0;
	$m['getStyleAttribute'].__args__ = [null,null,['elem'],['attr']];
	$m['insertChild'] = function(parent, toAdd, index) {
		var $bool70,$eq39,before,$attr127,$attr128,$attr129,$bool67,$bool69,$bool68,$add15,$add16,child,count,$eq42,$eq41,$eq40,$attr132,$attr131,$attr130;
		count = 0;
		child = (($attr127=($attr128=parent)['firstChild']) == null || (($attr128.__is_instance__) && typeof $attr127 == 'function') || (typeof $attr127['__get__'] == 'function')?
					$p['getattr']($attr128, 'firstChild'):
					parent['firstChild']);
		before = null;
		while ((($bool67=child) === null || $bool67 === false || $bool67 === 0 || $bool67 === '' ?
				false :
				(typeof $bool67=='object'?
					(typeof $bool67.__nonzero__=='function'?
						$bool67.__nonzero__() :
						(typeof $bool67.__len__=='function'?
							($bool67.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			if ((($bool68=(($eq39=(($attr129=($attr130=child)['nodeType']) == null || (($attr130.__is_instance__) && typeof $attr129 == 'function') || (typeof $attr129['__get__'] == 'function')?
						$p['getattr']($attr130, 'nodeType'):
						child['nodeType']))===($eq40=1)&&$eq39===null?true:
				($eq39===null?false:($eq40===null?false:
					((typeof $eq39=='object'||typeof $eq39=='function')&&typeof $eq39.__cmp__=='function'?$eq39.__cmp__($eq40) === 0:
						((typeof $eq40=='object'||typeof $eq40=='function')&&typeof $eq40.__cmp__=='function'?$eq40.__cmp__($eq39) === 0:
							$eq39==$eq40)))))) === null || $bool68 === false || $bool68 === 0 || $bool68 === '' ?
					false :
					(typeof $bool68=='object'?
						(typeof $bool68.__nonzero__=='function'?
							$bool68.__nonzero__() :
							(typeof $bool68.__len__=='function'?
								($bool68.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool69=(($eq41=count)===($eq42=index)&&$eq41===null?true:
					($eq41===null?false:($eq42===null?false:
						((typeof $eq41=='object'||typeof $eq41=='function')&&typeof $eq41.__cmp__=='function'?$eq41.__cmp__($eq42) === 0:
							((typeof $eq42=='object'||typeof $eq42=='function')&&typeof $eq42.__cmp__=='function'?$eq42.__cmp__($eq41) === 0:
								$eq41==$eq42)))))) === null || $bool69 === false || $bool69 === 0 || $bool69 === '' ?
						false :
						(typeof $bool69=='object'?
							(typeof $bool69.__nonzero__=='function'?
								$bool69.__nonzero__() :
								(typeof $bool69.__len__=='function'?
									($bool69.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					before = child;
					break;
				}
				count = (typeof ($add15=count)==typeof ($add16=1) && (typeof $add15=='number'||typeof $add15=='string')?
					$add15+$add16:
					$p['op_add']($add15,$add16));
			}
			child = (($attr131=($attr132=child)['nextSibling']) == null || (($attr132.__is_instance__) && typeof $attr131 == 'function') || (typeof $attr131['__get__'] == 'function')?
						$p['getattr']($attr132, 'nextSibling'):
						child['nextSibling']);
		}
		if ((($bool70=(before === null)) === null || $bool70 === false || $bool70 === 0 || $bool70 === '' ?
				false :
				(typeof $bool70=='object'?
					(typeof $bool70.__nonzero__=='function'?
						$bool70.__nonzero__() :
						(typeof $bool70.__len__=='function'?
							($bool70.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			parent['appendChild'](toAdd);
		}
		else {
			parent['insertBefore'](toAdd, before);
		}
		return null;
	};
	$m['insertChild'].__name__ = 'insertChild';

	$m['insertChild'].__bind_type__ = 0;
	$m['insertChild'].__args__ = [null,null,['parent'],['toAdd'],['index']];
	$m['IterChildrenClass'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'gwt.DOM';
		$method = $pyjs__bind_method2('__init__', function(elem) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				elem = arguments[1];
			}
			var $attr133,$attr134;
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('parent', elem) : $p['setattr'](self, 'parent', elem);
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('child', (($attr133=($attr134=elem)['firstChild']) == null || (($attr134.__is_instance__) && typeof $attr133 == 'function') || (typeof $attr133['__get__'] == 'function')?
						$p['getattr']($attr134, 'firstChild'):
						elem['firstChild'])) : $p['setattr'](self, 'child', (($attr133=($attr134=elem)['firstChild']) == null || (($attr134.__is_instance__) && typeof $attr133 == 'function') || (typeof $attr133['__get__'] == 'function')?
						$p['getattr']($attr134, 'firstChild'):
						elem['firstChild']));
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('lastChild', null) : $p['setattr'](self, 'lastChild', null);
			return null;
		}
	, 1, [null,null,['self'],['elem']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('next', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr142,$attr140,$attr141,$bool72,$bool71,$attr137,$attr136,$attr135,$attr139,$attr138;
			if ((($bool72=!(($bool71=(($attr135=($attr136=self)['child']) == null || (($attr136.__is_instance__) && typeof $attr135 == 'function') || (typeof $attr135['__get__'] == 'function')?
						$p['getattr']($attr136, 'child'):
						self['child'])) === null || $bool71 === false || $bool71 === 0 || $bool71 === '' ?
				false :
				(typeof $bool71=='object'?
					(typeof $bool71.__nonzero__=='function'?
						$bool71.__nonzero__() :
						(typeof $bool71.__len__=='function'?
							($bool71.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool72 === false || $bool72 === 0 || $bool72 === '' ?
					false :
					(typeof $bool72=='object'?
						(typeof $bool72.__nonzero__=='function'?
							$bool72.__nonzero__() :
							(typeof $bool72.__len__=='function'?
								($bool72.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				throw ($p['StopIteration']);
			}
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('lastChild', (($attr137=($attr138=self)['child']) == null || (($attr138.__is_instance__) && typeof $attr137 == 'function') || (typeof $attr137['__get__'] == 'function')?
						$p['getattr']($attr138, 'child'):
						self['child'])) : $p['setattr'](self, 'lastChild', (($attr137=($attr138=self)['child']) == null || (($attr138.__is_instance__) && typeof $attr137 == 'function') || (typeof $attr137['__get__'] == 'function')?
						$p['getattr']($attr138, 'child'):
						self['child']));
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('child', $m['getNextSibling']((($attr139=($attr140=self)['child']) == null || (($attr140.__is_instance__) && typeof $attr139 == 'function') || (typeof $attr139['__get__'] == 'function')?
						$p['getattr']($attr140, 'child'):
						self['child']))) : $p['setattr'](self, 'child', $m['getNextSibling']((($attr139=($attr140=self)['child']) == null || (($attr140.__is_instance__) && typeof $attr139 == 'function') || (typeof $attr139['__get__'] == 'function')?
						$p['getattr']($attr140, 'child'):
						self['child'])));
			return (($attr141=($attr142=self)['lastChild']) == null || (($attr142.__is_instance__) && typeof $attr141 == 'function') || (typeof $attr141['__get__'] == 'function')?
						$p['getattr']($attr142, 'lastChild'):
						self['lastChild']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['next'] = $method;
		$method = $pyjs__bind_method2('remove', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr143,$attr144;
			self['parent']['removeChild']((($attr143=($attr144=self)['lastChild']) == null || (($attr144.__is_instance__) && typeof $attr143 == 'function') || (typeof $attr143['__get__'] == 'function')?
						$p['getattr']($attr144, 'lastChild'):
						self['lastChild']));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['remove'] = $method;
		$method = $pyjs__bind_method2('__iter__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('IterChildrenClass', $p['tuple']($bases), $data);
	})();
	$m['iterChildren'] = function(elem) {

		return $m['IterChildrenClass'](elem);
	};
	$m['iterChildren'].__name__ = 'iterChildren';

	$m['iterChildren'].__bind_type__ = 0;
	$m['iterChildren'].__args__ = [null,null,['elem']];
	$m['IterWalkChildren'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'gwt.DOM';
		$method = $pyjs__bind_method2('__init__', function(elem) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				elem = arguments[1];
			}

			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('parent', elem) : $p['setattr'](self, 'parent', elem);
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('child', $m['getFirstChild'](elem)) : $p['setattr'](self, 'child', $m['getFirstChild'](elem));
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('lastChild', null) : $p['setattr'](self, 'lastChild', null);
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('stack', $p['list']([])) : $p['setattr'](self, 'stack', $p['list']([]));
			return null;
		}
	, 1, [null,null,['self'],['elem']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('next', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool78,$bool76,$bool77,$bool74,$bool75,nextSibling,$bool73,$attr146,$attr147,$attr145,$attr149,$attr160,$cmp1,$attr155,$attr154,$attr157,$attr156,$attr151,$attr150,$attr153,$attr152,$cmp2,$attr159,$attr158,firstChild,$len1,$attr148;
			if ((($bool74=!(($bool73=(($attr145=($attr146=self)['child']) == null || (($attr146.__is_instance__) && typeof $attr145 == 'function') || (typeof $attr145['__get__'] == 'function')?
						$p['getattr']($attr146, 'child'):
						self['child'])) === null || $bool73 === false || $bool73 === 0 || $bool73 === '' ?
				false :
				(typeof $bool73=='object'?
					(typeof $bool73.__nonzero__=='function'?
						$bool73.__nonzero__() :
						(typeof $bool73.__len__=='function'?
							($bool73.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool74 === false || $bool74 === 0 || $bool74 === '' ?
					false :
					(typeof $bool74=='object'?
						(typeof $bool74.__nonzero__=='function'?
							$bool74.__nonzero__() :
							(typeof $bool74.__len__=='function'?
								($bool74.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				throw ($p['StopIteration']);
			}
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('lastChild', (($attr147=($attr148=self)['child']) == null || (($attr148.__is_instance__) && typeof $attr147 == 'function') || (typeof $attr147['__get__'] == 'function')?
						$p['getattr']($attr148, 'child'):
						self['child'])) : $p['setattr'](self, 'lastChild', (($attr147=($attr148=self)['child']) == null || (($attr148.__is_instance__) && typeof $attr147 == 'function') || (typeof $attr147['__get__'] == 'function')?
						$p['getattr']($attr148, 'child'):
						self['child']));
			firstChild = $m['getFirstChild']((($attr149=($attr150=self)['child']) == null || (($attr150.__is_instance__) && typeof $attr149 == 'function') || (typeof $attr149['__get__'] == 'function')?
						$p['getattr']($attr150, 'child'):
						self['child']));
			nextSibling = $m['getNextSibling']((($attr151=($attr152=self)['child']) == null || (($attr152.__is_instance__) && typeof $attr151 == 'function') || (typeof $attr151['__get__'] == 'function')?
						$p['getattr']($attr152, 'child'):
						self['child']));
			if ((($bool75=(firstChild !== null)) === null || $bool75 === false || $bool75 === 0 || $bool75 === '' ?
					false :
					(typeof $bool75=='object'?
						(typeof $bool75.__nonzero__=='function'?
							$bool75.__nonzero__() :
							(typeof $bool75.__len__=='function'?
								($bool75.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool76=(nextSibling !== null)) === null || $bool76 === false || $bool76 === 0 || $bool76 === '' ?
						false :
						(typeof $bool76=='object'?
							(typeof $bool76.__nonzero__=='function'?
								$bool76.__nonzero__() :
								(typeof $bool76.__len__=='function'?
									($bool76.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['stack']['append']($p['tuple']([nextSibling, (($attr153=($attr154=self)['parent']) == null || (($attr154.__is_instance__) && typeof $attr153 == 'function') || (typeof $attr153['__get__'] == 'function')?
								$p['getattr']($attr154, 'parent'):
								self['parent'])]));
				}
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('parent', (($attr155=($attr156=self)['child']) == null || (($attr156.__is_instance__) && typeof $attr155 == 'function') || (typeof $attr155['__get__'] == 'function')?
							$p['getattr']($attr156, 'child'):
							self['child'])) : $p['setattr'](self, 'parent', (($attr155=($attr156=self)['child']) == null || (($attr156.__is_instance__) && typeof $attr155 == 'function') || (typeof $attr155['__get__'] == 'function')?
							$p['getattr']($attr156, 'child'):
							self['child']));
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('child', firstChild) : $p['setattr'](self, 'child', firstChild);
			}
			else if ((($bool77=(nextSibling !== null)) === null || $bool77 === false || $bool77 === 0 || $bool77 === '' ?
					false :
					(typeof $bool77=='object'?
						(typeof $bool77.__nonzero__=='function'?
							$bool77.__nonzero__() :
							(typeof $bool77.__len__=='function'?
								($bool77.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('child', nextSibling) : $p['setattr'](self, 'child', nextSibling);
			}
			else if ((($bool78=((($cmp1=(($len1=(($attr157=($attr158=self)['stack']) == null || (($attr158.__is_instance__) && typeof $attr157 == 'function') || (typeof $attr157['__get__'] == 'function')?
						$p['getattr']($attr158, 'stack'):
						self['stack'])) === null?0:
				(typeof $len1.__array != 'undefined' ? $len1.__array.length:
					(typeof $len1.__len__ == 'function'?$len1.__len__():
						(typeof $len1.length != 'undefined'?$len1.length:
							$p['len']($len1))))))===($cmp2=0)?0:
				(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
					($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
					$p['cmp']($cmp1, $cmp2))) == 1)) === null || $bool78 === false || $bool78 === 0 || $bool78 === '' ?
					false :
					(typeof $bool78=='object'?
						(typeof $bool78.__nonzero__=='function'?
							$bool78.__nonzero__() :
							(typeof $bool78.__len__=='function'?
								($bool78.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				var $tupleassign1 = self['stack']['pop']();
				self.child = $tupleassign1.__getitem__(0);
				self.parent = $tupleassign1.__getitem__(1);
			}
			else {
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('child', null) : $p['setattr'](self, 'child', null);
			}
			return (($attr159=($attr160=self)['lastChild']) == null || (($attr160.__is_instance__) && typeof $attr159 == 'function') || (typeof $attr159['__get__'] == 'function')?
						$p['getattr']($attr160, 'lastChild'):
						self['lastChild']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['next'] = $method;
		$method = $pyjs__bind_method2('remove', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr161,$attr162;
			self['parent']['removeChild']((($attr161=($attr162=self)['lastChild']) == null || (($attr162.__is_instance__) && typeof $attr161 == 'function') || (typeof $attr161['__get__'] == 'function')?
						$p['getattr']($attr162, 'lastChild'):
						self['lastChild']));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['remove'] = $method;
		$method = $pyjs__bind_method2('__iter__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('IterWalkChildren', $p['tuple']($bases), $data);
	})();
	$m['walkChildren'] = function(elem) {

		return $m['IterWalkChildren'](elem);
	};
	$m['walkChildren'].__name__ = 'walkChildren';

	$m['walkChildren'].__bind_type__ = 0;
	$m['walkChildren'].__args__ = [null,null,['elem']];
	$m['isOrHasChild'] = function(parent, child) {
		var $bool83,$bool82,$bool81,$bool80,$bool79,$attr164,$attr165,$attr166,$attr163,$eq43,$eq44;
		while ((($bool79=child) === null || $bool79 === false || $bool79 === 0 || $bool79 === '' ?
				false :
				(typeof $bool79=='object'?
					(typeof $bool79.__nonzero__=='function'?
						$bool79.__nonzero__() :
						(typeof $bool79.__len__=='function'?
							($bool79.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			if ((($bool80=$m['compare'](parent, child)) === null || $bool80 === false || $bool80 === 0 || $bool80 === '' ?
					false :
					(typeof $bool80=='object'?
						(typeof $bool80.__nonzero__=='function'?
							$bool80.__nonzero__() :
							(typeof $bool80.__len__=='function'?
								($bool80.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return true;
			}
			child = (($attr163=($attr164=child)['parentNode']) == null || (($attr164.__is_instance__) && typeof $attr163 == 'function') || (typeof $attr163['__get__'] == 'function')?
						$p['getattr']($attr164, 'parentNode'):
						child['parentNode']);
			if ((($bool82=!(($bool81=child) === null || $bool81 === false || $bool81 === 0 || $bool81 === '' ?
				false :
				(typeof $bool81=='object'?
					(typeof $bool81.__nonzero__=='function'?
						$bool81.__nonzero__() :
						(typeof $bool81.__len__=='function'?
							($bool81.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool82 === false || $bool82 === 0 || $bool82 === '' ?
					false :
					(typeof $bool82=='object'?
						(typeof $bool82.__nonzero__=='function'?
							$bool82.__nonzero__() :
							(typeof $bool82.__len__=='function'?
								($bool82.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return false;
			}
			if ((($bool83=!(($eq43=(($attr165=($attr166=child)['nodeType']) == null || (($attr166.__is_instance__) && typeof $attr165 == 'function') || (typeof $attr165['__get__'] == 'function')?
						$p['getattr']($attr166, 'nodeType'):
						child['nodeType']))===($eq44=1)&&$eq43===null?true:
				($eq43===null?false:($eq44===null?false:
					((typeof $eq43=='object'||typeof $eq43=='function')&&typeof $eq43.__cmp__=='function'?$eq43.__cmp__($eq44) === 0:
						((typeof $eq44=='object'||typeof $eq44=='function')&&typeof $eq44.__cmp__=='function'?$eq44.__cmp__($eq43) === 0:
							$eq43==$eq44)))))) === null || $bool83 === false || $bool83 === 0 || $bool83 === '' ?
					false :
					(typeof $bool83=='object'?
						(typeof $bool83.__nonzero__=='function'?
							$bool83.__nonzero__() :
							(typeof $bool83.__len__=='function'?
								($bool83.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				child = null;
			}
		}
		return false;
	};
	$m['isOrHasChild'].__name__ = 'isOrHasChild';

	$m['isOrHasChild'].__bind_type__ = 0;
	$m['isOrHasChild'].__args__ = [null,null,['parent'],['child']];
	$m['releaseCapture'] = function(elem) {
		var $and20,$bool85,$bool84,$and19;
		if ((($bool85=((($bool84=$and19=$m['sCaptureElem']) === null || $bool84 === false || $bool84 === 0 || $bool84 === '' ?
			false :
			(typeof $bool84=='object'?
				(typeof $bool84.__nonzero__=='function'?
					$bool84.__nonzero__() :
					(typeof $bool84.__len__=='function'?
						($bool84.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )?$m['compare'](elem, $m['sCaptureElem']):$and19)) === null || $bool85 === false || $bool85 === 0 || $bool85 === '' ?
				false :
				(typeof $bool85=='object'?
					(typeof $bool85.__nonzero__=='function'?
						$bool85.__nonzero__() :
						(typeof $bool85.__len__=='function'?
							($bool85.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			$m['sCaptureElem'] = null;
			(typeof releaseCapture_impl == "undefined"?$m.releaseCapture_impl:releaseCapture_impl)(elem);
		}
		return null;
	};
	$m['releaseCapture'].__name__ = 'releaseCapture';

	$m['releaseCapture'].__bind_type__ = 0;
	$m['releaseCapture'].__args__ = [null,null,['elem']];
	$m['releaseCapture_impl'] = function(elem) {

 		return null;
	};
	$m['releaseCapture_impl'].__name__ = 'releaseCapture_impl';

	$m['releaseCapture_impl'].__bind_type__ = 0;
	$m['releaseCapture_impl'].__args__ = [null,null,['elem']];
	$m['removeEventPreview'] = function(preview) {

		$m['sEventPreviewStack']['remove'](preview);
		return null;
	};
	$m['removeEventPreview'].__name__ = 'removeEventPreview';

	$m['removeEventPreview'].__bind_type__ = 0;
	$m['removeEventPreview'].__args__ = [null,null,['preview']];
	$m['getOffsetHeight'] = function(elem) {
		var $attr167,$attr168;
		return (($attr167=($attr168=elem)['offsetHeight']) == null || (($attr168.__is_instance__) && typeof $attr167 == 'function') || (typeof $attr167['__get__'] == 'function')?
					$p['getattr']($attr168, 'offsetHeight'):
					elem['offsetHeight']);
	};
	$m['getOffsetHeight'].__name__ = 'getOffsetHeight';

	$m['getOffsetHeight'].__bind_type__ = 0;
	$m['getOffsetHeight'].__args__ = [null,null,['elem']];
	$m['getOffsetWidth'] = function(elem) {
		var $attr170,$attr169;
		return (($attr169=($attr170=elem)['offsetWidth']) == null || (($attr170.__is_instance__) && typeof $attr169 == 'function') || (typeof $attr169['__get__'] == 'function')?
					$p['getattr']($attr170, 'offsetWidth'):
					elem['offsetWidth']);
	};
	$m['getOffsetWidth'].__name__ = 'getOffsetWidth';

	$m['getOffsetWidth'].__bind_type__ = 0;
	$m['getOffsetWidth'].__args__ = [null,null,['elem']];
	$m['scrollIntoView'] = function(elem) {
		var $attr191,$attr190,$attr193,$attr192,$attr195,$attr194,$attr197,$attr196,$attr199,$attr198,$sub20,$eq54,$sub21,$eq50,$eq51,$eq52,$eq53,$bool87,$bool86,$bool89,$bool88,offsetLeft,$sub23,$bool90,$bool91,$bool92,$bool93,$bool94,$bool95,$bool96,$bool97,$bool98,$bool99,$attr218,$attr219,$attr212,$attr213,$attr210,$attr211,$attr216,$attr217,$attr214,$attr215,$sub22,$and23,$and22,$and21,$and25,$and24,$attr221,$attr220,$attr209,$attr208,offsetTop,$attr205,$attr204,$attr207,$attr206,$attr201,$attr200,$attr203,$attr202,$sub19,$sub18,$sub13,$sub12,$sub11,$sub10,$sub17,$sub16,$sub15,$sub14,$attr229,$attr228,cur,$attr179,$attr178,$attr177,$attr176,$attr175,$attr174,$attr173,$attr172,$attr171,height,top,width,$sub24,$eq49,$eq48,$add32,$add30,$add31,$attr234,$attr230,$attr231,$attr232,$attr233,$cmp9,$eq46,$attr182,$cmp8,$add29,$add28,$add21,$add20,$attr183,$add22,$add25,$add24,$add27,$add26,$sub9,$attr227,$attr226,$attr225,$attr224,$attr223,$attr222,$attr188,$attr189,$attr186,$attr187,$attr184,$attr185,$or9,$or8,$attr180,$attr181,$add17,$cmp10,$add18,$add19,$cmp5,$cmp4,$cmp7,$cmp6,$cmp3,$eq47,$eq45,$add23,left;
		left = (($attr171=($attr172=elem)['offsetLeft']) == null || (($attr172.__is_instance__) && typeof $attr171 == 'function') || (typeof $attr171['__get__'] == 'function')?
					$p['getattr']($attr172, 'offsetLeft'):
					elem['offsetLeft']);
		top = (($attr173=($attr174=elem)['offsetTop']) == null || (($attr174.__is_instance__) && typeof $attr173 == 'function') || (typeof $attr173['__get__'] == 'function')?
					$p['getattr']($attr174, 'offsetTop'):
					elem['offsetTop']);
		width = (($attr175=($attr176=elem)['offsetWidth']) == null || (($attr176.__is_instance__) && typeof $attr175 == 'function') || (typeof $attr175['__get__'] == 'function')?
					$p['getattr']($attr176, 'offsetWidth'):
					elem['offsetWidth']);
		height = (($attr177=($attr178=elem)['offsetHeight']) == null || (($attr178.__is_instance__) && typeof $attr177 == 'function') || (typeof $attr177['__get__'] == 'function')?
					$p['getattr']($attr178, 'offsetHeight'):
					elem['offsetHeight']);
		if ((($bool86=!(($eq45=(($attr179=($attr180=elem)['parentNode']) == null || (($attr180.__is_instance__) && typeof $attr179 == 'function') || (typeof $attr179['__get__'] == 'function')?
					$p['getattr']($attr180, 'parentNode'):
					elem['parentNode']))===($eq46=(($attr181=($attr182=elem)['offsetParent']) == null || (($attr182.__is_instance__) && typeof $attr181 == 'function') || (typeof $attr181['__get__'] == 'function')?
					$p['getattr']($attr182, 'offsetParent'):
					elem['offsetParent']))&&$eq45===null?true:
			($eq45===null?false:($eq46===null?false:
				((typeof $eq45=='object'||typeof $eq45=='function')&&typeof $eq45.__cmp__=='function'?$eq45.__cmp__($eq46) === 0:
					((typeof $eq46=='object'||typeof $eq46=='function')&&typeof $eq46.__cmp__=='function'?$eq46.__cmp__($eq45) === 0:
						$eq45==$eq46)))))) === null || $bool86 === false || $bool86 === 0 || $bool86 === '' ?
				false :
				(typeof $bool86=='object'?
					(typeof $bool86.__nonzero__=='function'?
						$bool86.__nonzero__() :
						(typeof $bool86.__len__=='function'?
							($bool86.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			left = (typeof ($sub9=left)==typeof ($sub10=(($attr183=($attr184=elem['parentNode'])['offsetLeft']) == null || (($attr184.__is_instance__) && typeof $attr183 == 'function') || (typeof $attr183['__get__'] == 'function')?
						$p['getattr']($attr184, 'offsetLeft'):
						elem['parentNode']['offsetLeft'])) && (typeof $sub9=='number'||typeof $sub9=='string')?
				$sub9-$sub10:
				$p['op_sub']($sub9,$sub10));
			top = (typeof ($sub11=top)==typeof ($sub12=(($attr185=($attr186=elem['parentNode'])['offsetTop']) == null || (($attr186.__is_instance__) && typeof $attr185 == 'function') || (typeof $attr185['__get__'] == 'function')?
						$p['getattr']($attr186, 'offsetTop'):
						elem['parentNode']['offsetTop'])) && (typeof $sub11=='number'||typeof $sub11=='string')?
				$sub11-$sub12:
				$p['op_sub']($sub11,$sub12));
		}
		cur = (($attr187=($attr188=elem)['parentNode']) == null || (($attr188.__is_instance__) && typeof $attr187 == 'function') || (typeof $attr187['__get__'] == 'function')?
					$p['getattr']($attr188, 'parentNode'):
					elem['parentNode']);
		while ((($bool88=((($bool87=$and21=cur) === null || $bool87 === false || $bool87 === 0 || $bool87 === '' ?
			false :
			(typeof $bool87=='object'?
				(typeof $bool87.__nonzero__=='function'?
					$bool87.__nonzero__() :
					(typeof $bool87.__len__=='function'?
						($bool87.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )?(($eq47=(($attr189=($attr190=cur)['nodeType']) == null || (($attr190.__is_instance__) && typeof $attr189 == 'function') || (typeof $attr189['__get__'] == 'function')?
					$p['getattr']($attr190, 'nodeType'):
					cur['nodeType']))===($eq48=1)&&$eq47===null?true:
			($eq47===null?false:($eq48===null?false:
				((typeof $eq47=='object'||typeof $eq47=='function')&&typeof $eq47.__cmp__=='function'?$eq47.__cmp__($eq48) === 0:
					((typeof $eq48=='object'||typeof $eq48=='function')&&typeof $eq48.__cmp__=='function'?$eq48.__cmp__($eq47) === 0:
						$eq47==$eq48))))):$and21)) === null || $bool88 === false || $bool88 === 0 || $bool88 === '' ?
				false :
				(typeof $bool88=='object'?
					(typeof $bool88.__nonzero__=='function'?
						$bool88.__nonzero__() :
						(typeof $bool88.__len__=='function'?
							($bool88.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			if ((($bool92=((($bool89=$and23=$p['hasattr'](cur, 'style')) === null || $bool89 === false || $bool89 === 0 || $bool89 === '' ?
				false :
				(typeof $bool89=='object'?
					(typeof $bool89.__nonzero__=='function'?
						$bool89.__nonzero__() :
						(typeof $bool89.__len__=='function'?
							($bool89.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((($bool90=$and24=$p['hasattr']((($attr191=($attr192=cur)['style']) == null || (($attr192.__is_instance__) && typeof $attr191 == 'function') || (typeof $attr191['__get__'] == 'function')?
						$p['getattr']($attr192, 'style'):
						cur['style']), 'overflow')) === null || $bool90 === false || $bool90 === 0 || $bool90 === '' ?
				false :
				(typeof $bool90=='object'?
					(typeof $bool90.__nonzero__=='function'?
						$bool90.__nonzero__() :
						(typeof $bool90.__len__=='function'?
							($bool90.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((($bool91=$or8=(($eq49=(($attr193=($attr194=cur['style'])['overflow']) == null || (($attr194.__is_instance__) && typeof $attr193 == 'function') || (typeof $attr193['__get__'] == 'function')?
						$p['getattr']($attr194, 'overflow'):
						cur['style']['overflow']))===($eq50='auto')&&$eq49===null?true:
				($eq49===null?false:($eq50===null?false:
					((typeof $eq49=='object'||typeof $eq49=='function')&&typeof $eq49.__cmp__=='function'?$eq49.__cmp__($eq50) === 0:
						((typeof $eq50=='object'||typeof $eq50=='function')&&typeof $eq50.__cmp__=='function'?$eq50.__cmp__($eq49) === 0:
							$eq49==$eq50)))))) === null || $bool91 === false || $bool91 === 0 || $bool91 === '' ?
				false :
				(typeof $bool91=='object'?
					(typeof $bool91.__nonzero__=='function'?
						$bool91.__nonzero__() :
						(typeof $bool91.__len__=='function'?
							($bool91.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or8:(($eq51=(($attr195=($attr196=cur['style'])['overflow']) == null || (($attr196.__is_instance__) && typeof $attr195 == 'function') || (typeof $attr195['__get__'] == 'function')?
						$p['getattr']($attr196, 'overflow'):
						cur['style']['overflow']))===($eq52='scroll')&&$eq51===null?true:
				($eq51===null?false:($eq52===null?false:
					((typeof $eq51=='object'||typeof $eq51=='function')&&typeof $eq51.__cmp__=='function'?$eq51.__cmp__($eq52) === 0:
						((typeof $eq52=='object'||typeof $eq52=='function')&&typeof $eq52.__cmp__=='function'?$eq52.__cmp__($eq51) === 0:
							$eq51==$eq52)))))):$and24):$and23)) === null || $bool92 === false || $bool92 === 0 || $bool92 === '' ?
					false :
					(typeof $bool92=='object'?
						(typeof $bool92.__nonzero__=='function'?
							$bool92.__nonzero__() :
							(typeof $bool92.__len__=='function'?
								($bool92.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool93=((($cmp3=left)===($cmp4=(($attr197=($attr198=cur)['scrollLeft']) == null || (($attr198.__is_instance__) && typeof $attr197 == 'function') || (typeof $attr197['__get__'] == 'function')?
							$p['getattr']($attr198, 'scrollLeft'):
							cur['scrollLeft']))?0:
					(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
						($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
						$p['cmp']($cmp3, $cmp4))) == -1)) === null || $bool93 === false || $bool93 === 0 || $bool93 === '' ?
						false :
						(typeof $bool93=='object'?
							(typeof $bool93.__nonzero__=='function'?
								$bool93.__nonzero__() :
								(typeof $bool93.__len__=='function'?
									($bool93.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					cur.__is_instance__ && typeof cur.__setattr__ == 'function' ? cur.__setattr__('scrollLeft', left) : $p['setattr'](cur, 'scrollLeft', left);
				}
				if ((($bool94=((($cmp5=(typeof ($add17=left)==typeof ($add18=width) && (typeof $add17=='number'||typeof $add17=='string')?
					$add17+$add18:
					$p['op_add']($add17,$add18)))===($cmp6=(typeof ($add19=(($attr199=($attr200=cur)['scrollLeft']) == null || (($attr200.__is_instance__) && typeof $attr199 == 'function') || (typeof $attr199['__get__'] == 'function')?
							$p['getattr']($attr200, 'scrollLeft'):
							cur['scrollLeft']))==typeof ($add20=(($attr201=($attr202=cur)['clientWidth']) == null || (($attr202.__is_instance__) && typeof $attr201 == 'function') || (typeof $attr201['__get__'] == 'function')?
							$p['getattr']($attr202, 'clientWidth'):
							cur['clientWidth'])) && (typeof $add19=='number'||typeof $add19=='string')?
					$add19+$add20:
					$p['op_add']($add19,$add20)))?0:
					(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
						($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
						$p['cmp']($cmp5, $cmp6))) == 1)) === null || $bool94 === false || $bool94 === 0 || $bool94 === '' ?
						false :
						(typeof $bool94=='object'?
							(typeof $bool94.__nonzero__=='function'?
								$bool94.__nonzero__() :
								(typeof $bool94.__len__=='function'?
									($bool94.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					cur.__is_instance__ && typeof cur.__setattr__ == 'function' ? cur.__setattr__('scrollLeft', (typeof ($sub13=(typeof ($add21=left)==typeof ($add22=width) && (typeof $add21=='number'||typeof $add21=='string')?
						$add21+$add22:
						$p['op_add']($add21,$add22)))==typeof ($sub14=(($attr203=($attr204=cur)['clientWidth']) == null || (($attr204.__is_instance__) && typeof $attr203 == 'function') || (typeof $attr203['__get__'] == 'function')?
								$p['getattr']($attr204, 'clientWidth'):
								cur['clientWidth'])) && (typeof $sub13=='number'||typeof $sub13=='string')?
						$sub13-$sub14:
						$p['op_sub']($sub13,$sub14))) : $p['setattr'](cur, 'scrollLeft', (typeof ($sub13=(typeof ($add21=left)==typeof ($add22=width) && (typeof $add21=='number'||typeof $add21=='string')?
						$add21+$add22:
						$p['op_add']($add21,$add22)))==typeof ($sub14=(($attr203=($attr204=cur)['clientWidth']) == null || (($attr204.__is_instance__) && typeof $attr203 == 'function') || (typeof $attr203['__get__'] == 'function')?
								$p['getattr']($attr204, 'clientWidth'):
								cur['clientWidth'])) && (typeof $sub13=='number'||typeof $sub13=='string')?
						$sub13-$sub14:
						$p['op_sub']($sub13,$sub14)));
				}
				if ((($bool95=((($cmp7=top)===($cmp8=(($attr205=($attr206=cur)['scrollTop']) == null || (($attr206.__is_instance__) && typeof $attr205 == 'function') || (typeof $attr205['__get__'] == 'function')?
							$p['getattr']($attr206, 'scrollTop'):
							cur['scrollTop']))?0:
					(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
						($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
						$p['cmp']($cmp7, $cmp8))) == -1)) === null || $bool95 === false || $bool95 === 0 || $bool95 === '' ?
						false :
						(typeof $bool95=='object'?
							(typeof $bool95.__nonzero__=='function'?
								$bool95.__nonzero__() :
								(typeof $bool95.__len__=='function'?
									($bool95.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					cur.__is_instance__ && typeof cur.__setattr__ == 'function' ? cur.__setattr__('scrollTop', top) : $p['setattr'](cur, 'scrollTop', top);
				}
				if ((($bool96=((($cmp9=(typeof ($add23=top)==typeof ($add24=height) && (typeof $add23=='number'||typeof $add23=='string')?
					$add23+$add24:
					$p['op_add']($add23,$add24)))===($cmp10=(typeof ($add25=(($attr207=($attr208=cur)['scrollTop']) == null || (($attr208.__is_instance__) && typeof $attr207 == 'function') || (typeof $attr207['__get__'] == 'function')?
							$p['getattr']($attr208, 'scrollTop'):
							cur['scrollTop']))==typeof ($add26=(($attr209=($attr210=cur)['clientHeight']) == null || (($attr210.__is_instance__) && typeof $attr209 == 'function') || (typeof $attr209['__get__'] == 'function')?
							$p['getattr']($attr210, 'clientHeight'):
							cur['clientHeight'])) && (typeof $add25=='number'||typeof $add25=='string')?
					$add25+$add26:
					$p['op_add']($add25,$add26)))?0:
					(typeof $cmp9==typeof $cmp10 && ((typeof $cmp9 == 'number')||(typeof $cmp9 == 'string')||(typeof $cmp9 == 'boolean'))?
						($cmp9 == $cmp10 ? 0 : ($cmp9 < $cmp10 ? -1 : 1)):
						$p['cmp']($cmp9, $cmp10))) == 1)) === null || $bool96 === false || $bool96 === 0 || $bool96 === '' ?
						false :
						(typeof $bool96=='object'?
							(typeof $bool96.__nonzero__=='function'?
								$bool96.__nonzero__() :
								(typeof $bool96.__len__=='function'?
									($bool96.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					cur.__is_instance__ && typeof cur.__setattr__ == 'function' ? cur.__setattr__('scrollTop', (typeof ($sub15=(typeof ($add27=top)==typeof ($add28=height) && (typeof $add27=='number'||typeof $add27=='string')?
						$add27+$add28:
						$p['op_add']($add27,$add28)))==typeof ($sub16=(($attr211=($attr212=cur)['clientHeight']) == null || (($attr212.__is_instance__) && typeof $attr211 == 'function') || (typeof $attr211['__get__'] == 'function')?
								$p['getattr']($attr212, 'clientHeight'):
								cur['clientHeight'])) && (typeof $sub15=='number'||typeof $sub15=='string')?
						$sub15-$sub16:
						$p['op_sub']($sub15,$sub16))) : $p['setattr'](cur, 'scrollTop', (typeof ($sub15=(typeof ($add27=top)==typeof ($add28=height) && (typeof $add27=='number'||typeof $add27=='string')?
						$add27+$add28:
						$p['op_add']($add27,$add28)))==typeof ($sub16=(($attr211=($attr212=cur)['clientHeight']) == null || (($attr212.__is_instance__) && typeof $attr211 == 'function') || (typeof $attr211['__get__'] == 'function')?
								$p['getattr']($attr212, 'clientHeight'):
								cur['clientHeight'])) && (typeof $sub15=='number'||typeof $sub15=='string')?
						$sub15-$sub16:
						$p['op_sub']($sub15,$sub16)));
				}
			}
			offsetLeft = (($attr213=($attr214=cur)['offsetLeft']) == null || (($attr214.__is_instance__) && typeof $attr213 == 'function') || (typeof $attr213['__get__'] == 'function')?
						$p['getattr']($attr214, 'offsetLeft'):
						cur['offsetLeft']);
			offsetTop = (($attr215=($attr216=cur)['offsetTop']) == null || (($attr216.__is_instance__) && typeof $attr215 == 'function') || (typeof $attr215['__get__'] == 'function')?
						$p['getattr']($attr216, 'offsetTop'):
						cur['offsetTop']);
			if ((($bool97=!(($eq53=(($attr217=($attr218=cur)['parentNode']) == null || (($attr218.__is_instance__) && typeof $attr217 == 'function') || (typeof $attr217['__get__'] == 'function')?
						$p['getattr']($attr218, 'parentNode'):
						cur['parentNode']))===($eq54=(($attr219=($attr220=cur)['offsetParent']) == null || (($attr220.__is_instance__) && typeof $attr219 == 'function') || (typeof $attr219['__get__'] == 'function')?
						$p['getattr']($attr220, 'offsetParent'):
						cur['offsetParent']))&&$eq53===null?true:
				($eq53===null?false:($eq54===null?false:
					((typeof $eq53=='object'||typeof $eq53=='function')&&typeof $eq53.__cmp__=='function'?$eq53.__cmp__($eq54) === 0:
						((typeof $eq54=='object'||typeof $eq54=='function')&&typeof $eq54.__cmp__=='function'?$eq54.__cmp__($eq53) === 0:
							$eq53==$eq54)))))) === null || $bool97 === false || $bool97 === 0 || $bool97 === '' ?
					false :
					(typeof $bool97=='object'?
						(typeof $bool97.__nonzero__=='function'?
							$bool97.__nonzero__() :
							(typeof $bool97.__len__=='function'?
								($bool97.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool98=$p['hasattr']((($attr221=($attr222=cur)['parentNode']) == null || (($attr222.__is_instance__) && typeof $attr221 == 'function') || (typeof $attr221['__get__'] == 'function')?
							$p['getattr']($attr222, 'parentNode'):
							cur['parentNode']), 'offsetLeft')) === null || $bool98 === false || $bool98 === 0 || $bool98 === '' ?
						false :
						(typeof $bool98=='object'?
							(typeof $bool98.__nonzero__=='function'?
								$bool98.__nonzero__() :
								(typeof $bool98.__len__=='function'?
									($bool98.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					offsetLeft = (typeof ($sub17=offsetLeft)==typeof ($sub18=(($attr223=($attr224=cur['parentNode'])['offsetLeft']) == null || (($attr224.__is_instance__) && typeof $attr223 == 'function') || (typeof $attr223['__get__'] == 'function')?
								$p['getattr']($attr224, 'offsetLeft'):
								cur['parentNode']['offsetLeft'])) && (typeof $sub17=='number'||typeof $sub17=='string')?
						$sub17-$sub18:
						$p['op_sub']($sub17,$sub18));
				}
				if ((($bool99=$p['hasattr']((($attr225=($attr226=cur)['parentNode']) == null || (($attr226.__is_instance__) && typeof $attr225 == 'function') || (typeof $attr225['__get__'] == 'function')?
							$p['getattr']($attr226, 'parentNode'):
							cur['parentNode']), 'offsetTop')) === null || $bool99 === false || $bool99 === 0 || $bool99 === '' ?
						false :
						(typeof $bool99=='object'?
							(typeof $bool99.__nonzero__=='function'?
								$bool99.__nonzero__() :
								(typeof $bool99.__len__=='function'?
									($bool99.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					offsetTop = (typeof ($sub19=offsetTop)==typeof ($sub20=(($attr227=($attr228=cur['parentNode'])['offsetTop']) == null || (($attr228.__is_instance__) && typeof $attr227 == 'function') || (typeof $attr227['__get__'] == 'function')?
								$p['getattr']($attr228, 'offsetTop'):
								cur['parentNode']['offsetTop'])) && (typeof $sub19=='number'||typeof $sub19=='string')?
						$sub19-$sub20:
						$p['op_sub']($sub19,$sub20));
				}
			}
			left = (typeof ($add29=left)==typeof ($add30=(typeof ($sub21=offsetLeft)==typeof ($sub22=(($attr229=($attr230=cur)['scrollLeft']) == null || (($attr230.__is_instance__) && typeof $attr229 == 'function') || (typeof $attr229['__get__'] == 'function')?
						$p['getattr']($attr230, 'scrollLeft'):
						cur['scrollLeft'])) && (typeof $sub21=='number'||typeof $sub21=='string')?
				$sub21-$sub22:
				$p['op_sub']($sub21,$sub22))) && (typeof $add29=='number'||typeof $add29=='string')?
				$add29+$add30:
				$p['op_add']($add29,$add30));
			top = (typeof ($add31=top)==typeof ($add32=(typeof ($sub23=offsetTop)==typeof ($sub24=(($attr231=($attr232=cur)['scrollTop']) == null || (($attr232.__is_instance__) && typeof $attr231 == 'function') || (typeof $attr231['__get__'] == 'function')?
						$p['getattr']($attr232, 'scrollTop'):
						cur['scrollTop'])) && (typeof $sub23=='number'||typeof $sub23=='string')?
				$sub23-$sub24:
				$p['op_sub']($sub23,$sub24))) && (typeof $add31=='number'||typeof $add31=='string')?
				$add31+$add32:
				$p['op_add']($add31,$add32));
			cur = (($attr233=($attr234=cur)['parentNode']) == null || (($attr234.__is_instance__) && typeof $attr233 == 'function') || (typeof $attr233['__get__'] == 'function')?
						$p['getattr']($attr234, 'parentNode'):
						cur['parentNode']);
		}
		return null;
	};
	$m['scrollIntoView'].__name__ = 'scrollIntoView';

	$m['scrollIntoView'].__bind_type__ = 0;
	$m['scrollIntoView'].__args__ = [null,null,['elem']];
	$m['mash_name_for_glib'] = function(name, joiner) {
		if (typeof joiner == 'undefined') joiner=arguments.callee.__args__[3][1];
		var c,$add35,$iter1_nextval,$iter1_idx,res,$bool100,$add36,$add37,$add34,$iter1_iter,$iter1_array,$add33,$add38,$iter1_type;
		res = '';
		$iter1_iter = name;
		if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
			$iter1_type = 0;
		} else {
			$iter1_iter = $iter1_iter.__iter__();
			$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter1_idx = 0;
		while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
			c = $iter1_nextval;
			if ((($bool100=c['isupper']()) === null || $bool100 === false || $bool100 === 0 || $bool100 === '' ?
					false :
					(typeof $bool100=='object'?
						(typeof $bool100.__nonzero__=='function'?
							$bool100.__nonzero__() :
							(typeof $bool100.__len__=='function'?
								($bool100.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				res = (typeof ($add35=res)==typeof ($add36=(typeof ($add33=joiner)==typeof ($add34=c['lower']()) && (typeof $add33=='number'||typeof $add33=='string')?
					$add33+$add34:
					$p['op_add']($add33,$add34))) && (typeof $add35=='number'||typeof $add35=='string')?
					$add35+$add36:
					$p['op_add']($add35,$add36));
			}
			else {
				res = (typeof ($add37=res)==typeof ($add38=c) && (typeof $add37=='number'||typeof $add37=='string')?
					$add37+$add38:
					$p['op_add']($add37,$add38));
			}
		}
		return res;
	};
	$m['mash_name_for_glib'].__name__ = 'mash_name_for_glib';

	$m['mash_name_for_glib'].__bind_type__ = 0;
	$m['mash_name_for_glib'].__args__ = [null,null,['name'],['joiner', '-']];
	$m['removeAttribute'] = function(element, attribute) {

		element['removeAttribute'](attribute);
		return null;
	};
	$m['removeAttribute'].__name__ = 'removeAttribute';

	$m['removeAttribute'].__bind_type__ = 0;
	$m['removeAttribute'].__args__ = [null,null,['element'],['attribute']];
	$m['setAttribute'] = function(element, attribute, value) {

		$p['setattr'](element, attribute, value);
		return null;
	};
	$m['setAttribute'].__name__ = 'setAttribute';

	$m['setAttribute'].__bind_type__ = 0;
	$m['setAttribute'].__args__ = [null,null,['element'],['attribute'],['value']];
	$m['setElemAttribute'] = function(element, attribute, value) {

		element['setAttribute'](attribute, value);
		return null;
	};
	$m['setElemAttribute'].__name__ = 'setElemAttribute';

	$m['setElemAttribute'].__bind_type__ = 0;
	$m['setElemAttribute'].__args__ = [null,null,['element'],['attribute'],['value']];
	$m['setBooleanAttribute'] = function(elem, attr, value) {
		var mf;
		mf = (typeof get_main_frame == "undefined"?$m.get_main_frame:get_main_frame)();
		$p['setattr'](elem, mf['mash_attrib'](attr), value);
		return null;
	};
	$m['setBooleanAttribute'].__name__ = 'setBooleanAttribute';

	$m['setBooleanAttribute'].__bind_type__ = 0;
	$m['setBooleanAttribute'].__args__ = [null,null,['elem'],['attr'],['value']];
	$m['setCapture'] = function(elem) {

		$m['sCaptureElem'] = elem;
		(typeof setCapture_impl == "undefined"?$m.setCapture_impl:setCapture_impl)(elem);
		return null;
	};
	$m['setCapture'].__name__ = 'setCapture';

	$m['setCapture'].__bind_type__ = 0;
	$m['setCapture'].__args__ = [null,null,['elem']];
	$m['setCapture_impl'] = function(elem) {

 		return null;
	};
	$m['setCapture_impl'].__name__ = 'setCapture_impl';

	$m['setCapture_impl'].__bind_type__ = 0;
	$m['setCapture_impl'].__args__ = [null,null,['elem']];
	$m['setEventListener'] = function(element, listener) {

		$m['set_listener'](element, listener);
		return null;
	};
	$m['setEventListener'].__name__ = 'setEventListener';

	$m['setEventListener'].__bind_type__ = 0;
	$m['setEventListener'].__args__ = [null,null,['element'],['listener']];
	$m['createTextNode'] = function(txt) {

		return $doc['createTextNode'](txt);
	};
	$m['createTextNode'].__name__ = 'createTextNode';

	$m['createTextNode'].__bind_type__ = 0;
	$m['createTextNode'].__args__ = [null,null,['txt']];
	$m['setInnerHTML'] = function(element, html) {
		var $pyjs_try_err;
		try {
			element.__is_instance__ && typeof element.__setattr__ == 'function' ? element.__setattr__('innerHtml', html) : $p['setattr'](element, 'innerHtml', html);
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
			$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
			if (true) {
				element.__is_instance__ && typeof element.__setattr__ == 'function' ? element.__setattr__('innerHTML', html) : $p['setattr'](element, 'innerHTML', html);
			}
		}
		return null;
	};
	$m['setInnerHTML'].__name__ = 'setInnerHTML';

	$m['setInnerHTML'].__bind_type__ = 0;
	$m['setInnerHTML'].__args__ = [null,null,['element'],['html']];
	$m['setInnerText'] = function(elem, text) {
		var $attr235,$attr236,$attr237,$attr238,$bool101,$or10,$bool102,$or11;
		while ((($bool101=((($attr235=($attr236=elem)['firstChild']) == null || (($attr236.__is_instance__) && typeof $attr235 == 'function') || (typeof $attr235['__get__'] == 'function')?
					$p['getattr']($attr236, 'firstChild'):
					elem['firstChild']) !== null)) === null || $bool101 === false || $bool101 === 0 || $bool101 === '' ?
				false :
				(typeof $bool101=='object'?
					(typeof $bool101.__nonzero__=='function'?
						$bool101.__nonzero__() :
						(typeof $bool101.__len__=='function'?
							($bool101.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			elem['removeChild']((($attr237=($attr238=elem)['firstChild']) == null || (($attr238.__is_instance__) && typeof $attr237 == 'function') || (typeof $attr237['__get__'] == 'function')?
						$p['getattr']($attr238, 'firstChild'):
						elem['firstChild']));
		}
		elem['appendChild']($m['createTextNode'](((($bool102=$or10=text) === null || $bool102 === false || $bool102 === 0 || $bool102 === '' ?
			false :
			(typeof $bool102=='object'?
				(typeof $bool102.__nonzero__=='function'?
					$bool102.__nonzero__() :
					(typeof $bool102.__len__=='function'?
						($bool102.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )?$or10:'')));
		return null;
	};
	$m['setInnerText'].__name__ = 'setInnerText';

	$m['setInnerText'].__bind_type__ = 0;
	$m['setInnerText'].__args__ = [null,null,['elem'],['text']];
	$m['setIntElemAttribute'] = function(elem, attr, value) {

		elem['setAttribute'](attr, $p['str'](value));
		return null;
	};
	$m['setIntElemAttribute'].__name__ = 'setIntElemAttribute';

	$m['setIntElemAttribute'].__bind_type__ = 0;
	$m['setIntElemAttribute'].__args__ = [null,null,['elem'],['attr'],['value']];
	$m['setIntAttribute'] = function(elem, attr, value) {

		$p['setattr'](elem, attr, $p['float_int'](value));
		return null;
	};
	$m['setIntAttribute'].__name__ = 'setIntAttribute';

	$m['setIntAttribute'].__bind_type__ = 0;
	$m['setIntAttribute'].__args__ = [null,null,['elem'],['attr'],['value']];
	$m['setIntStyleAttribute'] = function(elem, attr, value) {
		var $attr240,mf,$attr239,$bool103;
		mf = (typeof get_main_frame == "undefined"?$m.get_main_frame:get_main_frame)();
		if ((($bool103=$p['hasattr']((($attr239=($attr240=elem)['style']) == null || (($attr240.__is_instance__) && typeof $attr239 == 'function') || (typeof $attr239['__get__'] == 'function')?
					$p['getattr']($attr240, 'style'):
					elem['style']), 'setProperty')) === null || $bool103 === false || $bool103 === 0 || $bool103 === '' ?
				false :
				(typeof $bool103=='object'?
					(typeof $bool103.__nonzero__=='function'?
						$bool103.__nonzero__() :
						(typeof $bool103.__len__=='function'?
							($bool103.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			elem['style']['setProperty'](mf['mash_attrib'](attr), $p['str'](value), '');
		}
		else {
			elem['style']['setAttribute'](mf['mash_attrib'](attr), $p['str'](value), '');
		}
		return null;
	};
	$m['setIntStyleAttribute'].__name__ = 'setIntStyleAttribute';

	$m['setIntStyleAttribute'].__bind_type__ = 0;
	$m['setIntStyleAttribute'].__args__ = [null,null,['elem'],['attr'],['value']];
	$m['setOptionText'] = function(select, text, index) {
		var option;
		option = select['options']['item'](index);
		option.__is_instance__ && typeof option.__setattr__ == 'function' ? option.__setattr__('textContent', text) : $p['setattr'](option, 'textContent', text);
		return null;
	};
	$m['setOptionText'].__name__ = 'setOptionText';

	$m['setOptionText'].__bind_type__ = 0;
	$m['setOptionText'].__args__ = [null,null,['select'],['text'],['index']];
	$m['setStyleAttribute'] = function(element, name, value) {
		var $attr241,$attr242,$bool104;
		if ((($bool104=$p['hasattr']((($attr241=($attr242=element)['style']) == null || (($attr242.__is_instance__) && typeof $attr241 == 'function') || (typeof $attr241['__get__'] == 'function')?
					$p['getattr']($attr242, 'style'):
					element['style']), 'setProperty')) === null || $bool104 === false || $bool104 === 0 || $bool104 === '' ?
				false :
				(typeof $bool104=='object'?
					(typeof $bool104.__nonzero__=='function'?
						$bool104.__nonzero__() :
						(typeof $bool104.__len__=='function'?
							($bool104.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			element['style']['setProperty']($m['mash_name_for_glib'](name), value, '');
		}
		else {
			element['style']['setAttribute'](name, value, '');
		}
		return null;
	};
	$m['setStyleAttribute'].__name__ = 'setStyleAttribute';

	$m['setStyleAttribute'].__bind_type__ = 0;
	$m['setStyleAttribute'].__args__ = [null,null,['element'],['name'],['value']];
	$m['setStyleAttributes'] = function(element) {
		var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
		if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
			kwargs = arguments[arguments.length+1];
		} else {
			delete kwargs['$pyjs_is_kwarg'];
		}
		if (typeof kwargs == 'undefined') {
			kwargs = $p['__empty_dict']();
			if (typeof element != 'undefined') {
				if (element !== null && typeof element['$pyjs_is_kwarg'] != 'undefined') {
					kwargs = element;
					element = arguments[1];
				}
			} else {
			}
		}
		var $attr243,$iter2_nextval,$iter2_type,attr,$iter2_iter,$bool105,$iter2_idx,val,$iter2_array,$attr244;
		$iter2_iter = kwargs['items']();
		if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
			$iter2_type = 0;
		} else {
			$iter2_iter = $iter2_iter.__iter__();
			$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter2_idx = 0;
		while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,true):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
			attr = $iter2_nextval.__array[0];
			val = $iter2_nextval.__array[1];
			if ((($bool105=$p['hasattr']((($attr243=($attr244=element)['style']) == null || (($attr244.__is_instance__) && typeof $attr243 == 'function') || (typeof $attr243['__get__'] == 'function')?
						$p['getattr']($attr244, 'style'):
						element['style']), 'setProperty')) === null || $bool105 === false || $bool105 === 0 || $bool105 === '' ?
					false :
					(typeof $bool105=='object'?
						(typeof $bool105.__nonzero__=='function'?
							$bool105.__nonzero__() :
							(typeof $bool105.__len__=='function'?
								($bool105.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				element['style']['setProperty']($m['mash_name_for_glib'](attr), val, '');
			}
			else {
				element['style']['setAttribute'](attr, val, '');
			}
		}
		return null;
	};
	$m['setStyleAttributes'].__name__ = 'setStyleAttributes';

	$m['setStyleAttributes'].__bind_type__ = 0;
	$m['setStyleAttributes'].__args__ = [null,['kwargs'],['element']];
	$m['sinkEvents'] = function(element, bits) {
		var cb,$iter3_type,$attr250,$bool112,$bool113,$bool110,$bool111,$4,$iter3_idx,$iter3_array,$iter3_nextval,$3,$attr249,$iter3_iter,$attr245,$attr247,$attr246,event_name,$attr248,$bool107,$bool106,$cmp11,$cmp12,$6,bit,$5,$bool109,$bool108,mf,aev,mask;
		mask = ($m['getEventsSunk'](element))^(bits);
		$m['eventbitsmap'].__setitem__(element, bits);
		if ((($bool107=!(($bool106=mask) === null || $bool106 === false || $bool106 === 0 || $bool106 === '' ?
			false :
			(typeof $bool106=='object'?
				(typeof $bool106.__nonzero__=='function'?
					$bool106.__nonzero__() :
					(typeof $bool106.__len__=='function'?
						($bool106.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )) === null || $bool107 === false || $bool107 === 0 || $bool107 === '' ?
				false :
				(typeof $bool107=='object'?
					(typeof $bool107.__nonzero__=='function'?
						$bool107.__nonzero__() :
						(typeof $bool107.__len__=='function'?
							($bool107.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			return null;
		}
		bits = mask;
		if ((($bool109=!(($bool108=bits) === null || $bool108 === false || $bool108 === 0 || $bool108 === '' ?
			false :
			(typeof $bool108=='object'?
				(typeof $bool108.__nonzero__=='function'?
					$bool108.__nonzero__() :
					(typeof $bool108.__len__=='function'?
						($bool108.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )) === null || $bool109 === false || $bool109 === 0 || $bool109 === '' ?
				false :
				(typeof $bool109=='object'?
					(typeof $bool109.__nonzero__=='function'?
						$bool109.__nonzero__() :
						(typeof $bool109.__len__=='function'?
							($bool109.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			return null;
		}
		mf = (typeof get_main_frame == "undefined"?$m.get_main_frame:get_main_frame)();
		if ((($bool110=$p['hasattr'](mf, '_addEventListener')) === null || $bool110 === false || $bool110 === 0 || $bool110 === '' ?
				false :
				(typeof $bool110=='object'?
					(typeof $bool110.__nonzero__=='function'?
						$bool110.__nonzero__() :
						(typeof $bool110.__len__=='function'?
							($bool110.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			aev = (($attr245=($attr246=mf)['_addEventListener']) == null || (($attr246.__is_instance__) && typeof $attr245 == 'function') || (typeof $attr245['__get__'] == 'function')?
						$p['getattr']($attr246, '_addEventListener'):
						mf['_addEventListener']);
		}
		else {
			aev = (($attr247=($attr248=mf)['addEventListener']) == null || (($attr248.__is_instance__) && typeof $attr247 == 'function') || (typeof $attr247['__get__'] == 'function')?
						$p['getattr']($attr248, 'addEventListener'):
						mf['addEventListener']);
		}
		cb = $m['_dispatchEvent'];
		(typeof sinkEventsMozilla == "undefined"?$m.sinkEventsMozilla:sinkEventsMozilla)(element, bits);
		bit = 1;
		while ((($bool111=bits) === null || $bool111 === false || $bool111 === 0 || $bool111 === '' ?
				false :
				(typeof $bool111=='object'?
					(typeof $bool111.__nonzero__=='function'?
						$bool111.__nonzero__() :
						(typeof $bool111.__len__=='function'?
							($bool111.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			if ((($bool112=((($cmp11=bit)===($cmp12=bits)?0:
				(typeof $cmp11==typeof $cmp12 && ((typeof $cmp11 == 'number')||(typeof $cmp11 == 'string')||(typeof $cmp11 == 'boolean'))?
					($cmp11 == $cmp12 ? 0 : ($cmp11 < $cmp12 ? -1 : 1)):
					$p['cmp']($cmp11, $cmp12))) == 1)) === null || $bool112 === false || $bool112 === 0 || $bool112 === '' ?
					false :
					(typeof $bool112=='object'?
						(typeof $bool112.__nonzero__=='function'?
							$bool112.__nonzero__() :
							(typeof $bool112.__len__=='function'?
								($bool112.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				throw ($p['RuntimeError']('sinkEvents: bit outruns bits'));
			}
			if ((($bool113=(bits)&(bit)) === null || $bool113 === false || $bool113 === 0 || $bool113 === '' ?
					false :
					(typeof $bool113=='object'?
						(typeof $bool113.__nonzero__=='function'?
							$bool113.__nonzero__() :
							(typeof $bool113.__len__=='function'?
								($bool113.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$iter3_iter = (typeof ($5=(typeof ($3=(($attr249=($attr250=$m['Event'])['eventbits']) == null || (($attr250.__is_instance__) && typeof $attr249 == 'function') || (typeof $attr249['__get__'] == 'function')?
							$p['getattr']($attr250, 'eventbits'):
							$m['Event']['eventbits'])).__array != 'undefined'?
					((typeof $3.__array[$4=bit]) != 'undefined'?$3.__array[$4]:
						$3.__getitem__($4)):
						$3.__getitem__(bit))).__array != 'undefined'?
					((typeof $5.__array[$6=1]) != 'undefined'?$5.__array[$6]:
						$5.__getitem__($6)):
						$5.__getitem__(1));
				if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
					$iter3_type = 0;
				} else {
					$iter3_iter = $iter3_iter.__iter__();
					$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter3_idx = 0;
				while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
					event_name = $iter3_nextval;
					aev(element, event_name, cb);
				}
				bits ^= bit;
			}
			bit <<= 1;
		}
		return null;
	};
	$m['sinkEvents'].__name__ = 'sinkEvents';

	$m['sinkEvents'].__bind_type__ = 0;
	$m['sinkEvents'].__args__ = [null,null,['element'],['bits']];
	$m['sinkEventsMozilla'] = function(element, bits) {

 		return null;
	};
	$m['sinkEventsMozilla'].__name__ = 'sinkEventsMozilla';

	$m['sinkEventsMozilla'].__bind_type__ = 0;
	$m['sinkEventsMozilla'].__args__ = [null,null,['element'],['bits']];
	$m['toString'] = function(elem) {
		var outer,tempDiv,temp;
		temp = elem['cloneNode'](true);
		tempDiv = $m['createDiv']();
		tempDiv['appendChild'](temp);
		outer = $m['getInnerHTML'](tempDiv);
		$m['setInnerHTML'](temp, '');
		return outer;
	};
	$m['toString'].__name__ = 'toString';

	$m['toString'].__bind_type__ = 0;
	$m['toString'].__args__ = [null,null,['elem']];
	$m['dispatchEvent'] = function(event, element, listener) {

		(typeof dispatchEventImpl == "undefined"?$m.dispatchEventImpl:dispatchEventImpl)(event, element, listener);
		return null;
	};
	$m['dispatchEvent'].__name__ = 'dispatchEvent';

	$m['dispatchEvent'].__bind_type__ = 0;
	$m['dispatchEvent'].__args__ = [null,null,['event'],['element'],['listener']];
	$m['previewEvent'] = function(evt) {
		var $8,ret,$eq55,$eq56,$len2,$bool114,$bool115,$7,$bool116,preview;
		if ((($bool114=(($eq55=(($len2=$m['sEventPreviewStack']) === null?0:
			(typeof $len2.__array != 'undefined' ? $len2.__array.length:
				(typeof $len2.__len__ == 'function'?$len2.__len__():
					(typeof $len2.length != 'undefined'?$len2.length:
						$p['len']($len2))))))===($eq56=0)&&$eq55===null?true:
			($eq55===null?false:($eq56===null?false:
				((typeof $eq55=='object'||typeof $eq55=='function')&&typeof $eq55.__cmp__=='function'?$eq55.__cmp__($eq56) === 0:
					((typeof $eq56=='object'||typeof $eq56=='function')&&typeof $eq56.__cmp__=='function'?$eq56.__cmp__($eq55) === 0:
						$eq55==$eq56)))))) === null || $bool114 === false || $bool114 === 0 || $bool114 === '' ?
				false :
				(typeof $bool114=='object'?
					(typeof $bool114.__nonzero__=='function'?
						$bool114.__nonzero__() :
						(typeof $bool114.__len__=='function'?
							($bool114.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			return true;
		}
		preview = (typeof ($7=$m['sEventPreviewStack']).__array != 'undefined'?
			((typeof $7.__array[$8=(typeof ($usub2=1)=='number'?
			-$usub2:
			$p['op_usub']($usub2))]) != 'undefined'?$7.__array[$8]:
				$7.__getitem__($8)):
				$7.__getitem__((typeof ($usub2=1)=='number'?
			-$usub2:
			$p['op_usub']($usub2))));
		ret = preview['onEventPreview'](evt);
		if ((($bool115=ret) === null || $bool115 === false || $bool115 === 0 || $bool115 === '' ?
				false :
				(typeof $bool115=='object'?
					(typeof $bool115.__nonzero__=='function'?
						$bool115.__nonzero__() :
						(typeof $bool115.__len__=='function'?
							($bool115.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			return true;
		}
		if ((($bool116=evt) === null || $bool116 === false || $bool116 === 0 || $bool116 === '' ?
				false :
				(typeof $bool116=='object'?
					(typeof $bool116.__nonzero__=='function'?
						$bool116.__nonzero__() :
						(typeof $bool116.__len__=='function'?
							($bool116.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			$m['eventCancelBubble'](evt, true);
			$m['eventPreventDefault'](evt);
		}
		return ret;
	};
	$m['previewEvent'].__name__ = 'previewEvent';

	$m['previewEvent'].__bind_type__ = 0;
	$m['previewEvent'].__args__ = [null,null,['evt']];
	$m['dispatchEventAndCatch'] = function(evt, elem, listener, handler) {

 		return null;
	};
	$m['dispatchEventAndCatch'].__name__ = 'dispatchEventAndCatch';

	$m['dispatchEventAndCatch'].__bind_type__ = 0;
	$m['dispatchEventAndCatch'].__args__ = [null,null,['evt'],['elem'],['listener'],['handler']];
	$m['currentEvent'] = null;
	$m['dispatchEventImpl'] = function(event, element, listener) {
		var prevCurrentEvent,$eq59,$eq60,$eq57,$bool117,$bool118,$eq58;
		if ((($bool117=(($eq57=element)===($eq58=$m['sCaptureElem'])&&$eq57===null?true:
			($eq57===null?false:($eq58===null?false:
				((typeof $eq57=='object'||typeof $eq57=='function')&&typeof $eq57.__cmp__=='function'?$eq57.__cmp__($eq58) === 0:
					((typeof $eq58=='object'||typeof $eq58=='function')&&typeof $eq58.__cmp__=='function'?$eq58.__cmp__($eq57) === 0:
						$eq57==$eq58)))))) === null || $bool117 === false || $bool117 === 0 || $bool117 === '' ?
				false :
				(typeof $bool117=='object'?
					(typeof $bool117.__nonzero__=='function'?
						$bool117.__nonzero__() :
						(typeof $bool117.__len__=='function'?
							($bool117.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			if ((($bool118=(($eq59=$m['eventGetType'](event))===($eq60='losecapture')&&$eq59===null?true:
				($eq59===null?false:($eq60===null?false:
					((typeof $eq59=='object'||typeof $eq59=='function')&&typeof $eq59.__cmp__=='function'?$eq59.__cmp__($eq60) === 0:
						((typeof $eq60=='object'||typeof $eq60=='function')&&typeof $eq60.__cmp__=='function'?$eq60.__cmp__($eq59) === 0:
							$eq59==$eq60)))))) === null || $bool118 === false || $bool118 === 0 || $bool118 === '' ?
					false :
					(typeof $bool118=='object'?
						(typeof $bool118.__nonzero__=='function'?
							$bool118.__nonzero__() :
							(typeof $bool118.__len__=='function'?
								($bool118.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$m['sCaptureElem'] = null;
			}
		}
		prevCurrentEvent = $m['currentEvent'];
		$m['currentEvent'] = event;
		listener['onBrowserEvent'](event);
		$m['currentEvent'] = prevCurrentEvent;
		return null;
	};
	$m['dispatchEventImpl'].__name__ = 'dispatchEventImpl';

	$m['dispatchEventImpl'].__bind_type__ = 0;
	$m['dispatchEventImpl'].__args__ = [null,null,['event'],['element'],['listener']];
	$m['eventGetCurrentEvent'] = function() {

		return $m['currentEvent'];
	};
	$m['eventGetCurrentEvent'].__name__ = 'eventGetCurrentEvent';

	$m['eventGetCurrentEvent'].__bind_type__ = 0;
	$m['eventGetCurrentEvent'].__args__ = [null,null];
	$m['insertListItem'] = function(select, item, value, index) {
		var option,$eq61,$eq62,$bool119,$bool120;
		option = $m['createElement']('OPTION');
		$m['setInnerText'](option, item);
		if ((($bool119=(value !== null)) === null || $bool119 === false || $bool119 === 0 || $bool119 === '' ?
				false :
				(typeof $bool119=='object'?
					(typeof $bool119.__nonzero__=='function'?
						$bool119.__nonzero__() :
						(typeof $bool119.__len__=='function'?
							($bool119.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			$m['setAttribute'](option, 'value', value);
		}
		if ((($bool120=(($eq61=index)===($eq62=(typeof ($usub3=1)=='number'?
			-$usub3:
			$p['op_usub']($usub3)))&&$eq61===null?true:
			($eq61===null?false:($eq62===null?false:
				((typeof $eq61=='object'||typeof $eq61=='function')&&typeof $eq61.__cmp__=='function'?$eq61.__cmp__($eq62) === 0:
					((typeof $eq62=='object'||typeof $eq62=='function')&&typeof $eq62.__cmp__=='function'?$eq62.__cmp__($eq61) === 0:
						$eq61==$eq62)))))) === null || $bool120 === false || $bool120 === 0 || $bool120 === '' ?
				false :
				(typeof $bool120=='object'?
					(typeof $bool120.__nonzero__=='function'?
						$bool120.__nonzero__() :
						(typeof $bool120.__len__=='function'?
							($bool120.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			$m['appendChild'](select, option);
		}
		else {
			$m['insertChild'](select, option, index);
		}
		return null;
	};
	$m['insertListItem'].__name__ = 'insertListItem';

	$m['insertListItem'].__bind_type__ = 0;
	$m['insertListItem'].__args__ = [null,null,['select'],['item'],['value'],['index']];
	$m['getBodyOffsetTop'] = function() {

		return 0;
	};
	$m['getBodyOffsetTop'].__name__ = 'getBodyOffsetTop';

	$m['getBodyOffsetTop'].__bind_type__ = 0;
	$m['getBodyOffsetTop'].__args__ = [null,null];
	$m['getBodyOffsetLeft'] = function() {

		return 0;
	};
	$m['getBodyOffsetLeft'].__name__ = 'getBodyOffsetLeft';

	$m['getBodyOffsetLeft'].__bind_type__ = 0;
	$m['getBodyOffsetLeft'].__args__ = [null,null];
	$m['eventGetMouseWheelVelocityY'] = function(evt) {

 		return null;
	};
	$m['eventGetMouseWheelVelocityY'].__name__ = 'eventGetMouseWheelVelocityY';

	$m['eventGetMouseWheelVelocityY'].__bind_type__ = 0;
	$m['eventGetMouseWheelVelocityY'].__args__ = [null,null,['evt']];
	if ((($bool122=!(($bool121=(($attr251=($attr252=$m['pyjd'])['is_desktop']) == null || (($attr252.__is_instance__) && typeof $attr251 == 'function') || (typeof $attr251['__get__'] == 'function')?
				$p['getattr']($attr252, 'is_desktop'):
				$m['pyjd']['is_desktop'])) === null || $bool121 === false || $bool121 === 0 || $bool121 === '' ?
		false :
		(typeof $bool121=='object'?
			(typeof $bool121.__nonzero__=='function'?
				$bool121.__nonzero__() :
				(typeof $bool121.__len__=='function'?
					($bool121.__len__()>0 ?
						true :
						false) :
					true ) ) :
			 true ) )) === null || $bool122 === false || $bool122 === 0 || $bool122 === '' ?
			false :
			(typeof $bool122=='object'?
				(typeof $bool122.__nonzero__=='function'?
					$bool122.__nonzero__() :
					(typeof $bool122.__len__=='function'?
						($bool122.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )) {
		$m['init']();
	}
	return this;
}; /* end gwt.DOM */


/* end module: gwt.DOM */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.Window.onResize', 'pyjamas', 'pyjamas.Window', 'pyjamas.Window.onClosing', 'pyjamas.Window.onClosed', 'pyjamas.ui.Event', 'pyjamas.ui', 'pyjamas.ui.Event.ONBLUR', 'pyjamas.ui.Event.ONCHANGE', 'pyjamas.ui.Event.ONCLICK', 'pyjamas.ui.Event.ONCONTEXTMENU', 'pyjamas.ui.Event.ONDBLCLICK', 'pyjamas.ui.Event.ONERROR', 'pyjamas.ui.Event.ONFOCUS', 'pyjamas.ui.Event.ONKEYDOWN', 'pyjamas.ui.Event.ONKEYPRESS', 'pyjamas.ui.Event.ONKEYUP', 'pyjamas.ui.Event.ONLOAD', 'pyjamas.ui.Event.ONLOSECAPTURE', 'pyjamas.ui.Event.ONMOUSEDOWN', 'pyjamas.ui.Event.ONMOUSEMOVE', 'pyjamas.ui.Event.ONMOUSEOUT', 'pyjamas.ui.Event.ONMOUSEOVER', 'pyjamas.ui.Event.ONMOUSEUP', 'pyjamas.ui.Event.ONSCROLL', 'pyjamas.ui.Event.ONINPUT']
*/
