/* start module: pyjamas.ui.Event */
$pyjs.loaded_modules['pyjamas.ui.Event'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.Event'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.Event'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.Event"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.Event>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.Event';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.ui']['Event'] = $pyjs.loaded_modules['pyjamas.ui.Event'];


	$m['BUTTON_LEFT'] = $p['___import___']('gwt.ui.Event.BUTTON_LEFT', 'pyjamas.ui', null, false);
	$m['BUTTON_MIDDLE'] = $p['___import___']('gwt.ui.Event.BUTTON_MIDDLE', 'pyjamas.ui', null, false);
	$m['BUTTON_RIGHT'] = $p['___import___']('gwt.ui.Event.BUTTON_RIGHT', 'pyjamas.ui', null, false);
	$m['DRAGEVENTS'] = $p['___import___']('gwt.ui.Event.DRAGEVENTS', 'pyjamas.ui', null, false);
	$m['DROPEVENTS'] = $p['___import___']('gwt.ui.Event.DROPEVENTS', 'pyjamas.ui', null, false);
	$m['FOCUSEVENTS'] = $p['___import___']('gwt.ui.Event.FOCUSEVENTS', 'pyjamas.ui', null, false);
	$m['KEYEVENTS'] = $p['___import___']('gwt.ui.Event.KEYEVENTS', 'pyjamas.ui', null, false);
	$m['MOUSEEVENTS'] = $p['___import___']('gwt.ui.Event.MOUSEEVENTS', 'pyjamas.ui', null, false);
	$m['ONBLUR'] = $p['___import___']('gwt.ui.Event.ONBLUR', 'pyjamas.ui', null, false);
	$m['ONCHANGE'] = $p['___import___']('gwt.ui.Event.ONCHANGE', 'pyjamas.ui', null, false);
	$m['ONCLICK'] = $p['___import___']('gwt.ui.Event.ONCLICK', 'pyjamas.ui', null, false);
	$m['ONCONTEXTMENU'] = $p['___import___']('gwt.ui.Event.ONCONTEXTMENU', 'pyjamas.ui', null, false);
	$m['ONDBLCLICK'] = $p['___import___']('gwt.ui.Event.ONDBLCLICK', 'pyjamas.ui', null, false);
	$m['ONERROR'] = $p['___import___']('gwt.ui.Event.ONERROR', 'pyjamas.ui', null, false);
	$m['ONFOCUS'] = $p['___import___']('gwt.ui.Event.ONFOCUS', 'pyjamas.ui', null, false);
	$m['ONINPUT'] = $p['___import___']('gwt.ui.Event.ONINPUT', 'pyjamas.ui', null, false);
	$m['ONKEYDOWN'] = $p['___import___']('gwt.ui.Event.ONKEYDOWN', 'pyjamas.ui', null, false);
	$m['ONKEYPRESS'] = $p['___import___']('gwt.ui.Event.ONKEYPRESS', 'pyjamas.ui', null, false);
	$m['ONKEYUP'] = $p['___import___']('gwt.ui.Event.ONKEYUP', 'pyjamas.ui', null, false);
	$m['ONLOAD'] = $p['___import___']('gwt.ui.Event.ONLOAD', 'pyjamas.ui', null, false);
	$m['ONLOSECAPTURE'] = $p['___import___']('gwt.ui.Event.ONLOSECAPTURE', 'pyjamas.ui', null, false);
	$m['ONMOUSEDOWN'] = $p['___import___']('gwt.ui.Event.ONMOUSEDOWN', 'pyjamas.ui', null, false);
	$m['ONMOUSEMOVE'] = $p['___import___']('gwt.ui.Event.ONMOUSEMOVE', 'pyjamas.ui', null, false);
	$m['ONMOUSEOUT'] = $p['___import___']('gwt.ui.Event.ONMOUSEOUT', 'pyjamas.ui', null, false);
	$m['ONMOUSEOVER'] = $p['___import___']('gwt.ui.Event.ONMOUSEOVER', 'pyjamas.ui', null, false);
	$m['ONMOUSEUP'] = $p['___import___']('gwt.ui.Event.ONMOUSEUP', 'pyjamas.ui', null, false);
	$m['ONMOUSEWHEEL'] = $p['___import___']('gwt.ui.Event.ONMOUSEWHEEL', 'pyjamas.ui', null, false);
	$m['ONSCROLL'] = $p['___import___']('gwt.ui.Event.ONSCROLL', 'pyjamas.ui', null, false);
	$m['_create_eventmap'] = $p['___import___']('gwt.ui.Event._create_eventmap', 'pyjamas.ui', null, false);
	$m['eventbits'] = $p['___import___']('gwt.ui.Event.eventbits', 'pyjamas.ui', null, false);
	$m['eventmap'] = $p['___import___']('gwt.ui.Event.eventmap', 'pyjamas.ui', null, false);
	$m['init'] = $p['___import___']('gwt.ui.Event.init', 'pyjamas.ui', null, false);
	return this;
}; /* end pyjamas.ui.Event */


/* end module: pyjamas.ui.Event */


/*
PYJS_DEPS: ['gwt.ui.Event.BUTTON_LEFT', 'gwt', 'gwt.ui', 'gwt.ui.Event', 'gwt.ui.Event.BUTTON_MIDDLE', 'gwt.ui.Event.BUTTON_RIGHT', 'gwt.ui.Event.DRAGEVENTS', 'gwt.ui.Event.DROPEVENTS', 'gwt.ui.Event.FOCUSEVENTS', 'gwt.ui.Event.KEYEVENTS', 'gwt.ui.Event.MOUSEEVENTS', 'gwt.ui.Event.ONBLUR', 'gwt.ui.Event.ONCHANGE', 'gwt.ui.Event.ONCLICK', 'gwt.ui.Event.ONCONTEXTMENU', 'gwt.ui.Event.ONDBLCLICK', 'gwt.ui.Event.ONERROR', 'gwt.ui.Event.ONFOCUS', 'gwt.ui.Event.ONINPUT', 'gwt.ui.Event.ONKEYDOWN', 'gwt.ui.Event.ONKEYPRESS', 'gwt.ui.Event.ONKEYUP', 'gwt.ui.Event.ONLOAD', 'gwt.ui.Event.ONLOSECAPTURE', 'gwt.ui.Event.ONMOUSEDOWN', 'gwt.ui.Event.ONMOUSEMOVE', 'gwt.ui.Event.ONMOUSEOUT', 'gwt.ui.Event.ONMOUSEOVER', 'gwt.ui.Event.ONMOUSEUP', 'gwt.ui.Event.ONMOUSEWHEEL', 'gwt.ui.Event.ONSCROLL', 'gwt.ui.Event._create_eventmap', 'gwt.ui.Event.eventbits', 'gwt.ui.Event.eventmap', 'gwt.ui.Event.init']
*/
