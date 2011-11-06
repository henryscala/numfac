/* start module: gwt.ui.ClickDelegatePanel */
$pyjs.loaded_modules['gwt.ui.ClickDelegatePanel'] = function (__mod_name__) {
	if($pyjs.loaded_modules['gwt.ui.ClickDelegatePanel'].__was_initialized__) return $pyjs.loaded_modules['gwt.ui.ClickDelegatePanel'];
	if(typeof $pyjs.loaded_modules['gwt.ui'] == 'undefined' || !$pyjs.loaded_modules['gwt.ui'].__was_initialized__) $p['___import___']('gwt.ui', null);
	var $m = $pyjs.loaded_modules["gwt.ui.ClickDelegatePanel"];
	$m.__repr__ = function() { return "<module: gwt.ui.ClickDelegatePanel>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'gwt.ui.ClickDelegatePanel';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['gwt.ui']['ClickDelegatePanel'] = $pyjs.loaded_modules['gwt.ui.ClickDelegatePanel'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'gwt.ui', null, false);
	$m['Factory'] = $p['___import___']('pyjamas.Factory', 'gwt.ui', null, false);
	$m['Composite'] = $p['___import___']('pyjamas.ui.Composite.Composite', 'gwt.ui', null, false);
	$m['Event'] = $p['___import___']('pyjamas.ui.Event', 'gwt.ui', null, false);
	$m['Focus'] = $p['___import___']('pyjamas.ui.Focus', 'gwt.ui', null, false);
	$m['SimplePanel'] = $p['___import___']('pyjamas.ui.SimplePanel.SimplePanel', 'gwt.ui', null, false);
	$m['KeyboardListener'] = $p['___import___']('pyjamas.ui.KeyboardListener', 'gwt.ui', null, false);
	$m['ClickDelegatePanel'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'gwt.ui.ClickDelegatePanel';
		$method = $pyjs__bind_method2('__init__', function(p, child, cDelegate, kDelegate) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				p = arguments[1];
				child = arguments[2];
				cDelegate = arguments[3];
				kDelegate = arguments[4];
			}
			var $attr8,$attr1,$attr2,$attr5,$attr4,$attr7,$attr6,$bool2,$bool1,wrapperWidget,$attr3;
			$m['Composite']['__init__'](self);
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('clickDelegate', cDelegate) : $p['setattr'](self, 'clickDelegate', cDelegate);
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('keyDelegate', kDelegate) : $p['setattr'](self, 'keyDelegate', kDelegate);
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('focusablePanel', $m['SimplePanel']($m['Focus']['createFocusable']())) : $p['setattr'](self, 'focusablePanel', $m['SimplePanel']($m['Focus']['createFocusable']()));
			self['focusablePanel']['setWidget'](child);
			wrapperWidget = p['createTabTextWrapper']();
			if ((($bool1=(wrapperWidget === null)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				self['initWidget']((($attr1=($attr2=self)['focusablePanel']) == null || (($attr2.__is_instance__) && typeof $attr1 == 'function') || (typeof $attr1['__get__'] == 'function')?
							$p['getattr']($attr2, 'focusablePanel'):
							self['focusablePanel']));
			}
			else {
				wrapperWidget['setWidget']((($attr3=($attr4=self)['focusablePanel']) == null || (($attr4.__is_instance__) && typeof $attr3 == 'function') || (typeof $attr3['__get__'] == 'function')?
							$p['getattr']($attr4, 'focusablePanel'):
							self['focusablePanel']));
				self['initWidget'](wrapperWidget);
			}
			if ((($bool2=$p['hasattr'](child, 'addKeyboardListener')) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
				child['addKeyboardListener'](kDelegate);
			}
			self['sinkEvents'](((($attr5=($attr6=$m['Event'])['ONCLICK']) == null || (($attr6.__is_instance__) && typeof $attr5 == 'function') || (typeof $attr5['__get__'] == 'function')?
						$p['getattr']($attr6, 'ONCLICK'):
						$m['Event']['ONCLICK']))|((($attr7=($attr8=$m['Event'])['ONKEYDOWN']) == null || (($attr8.__is_instance__) && typeof $attr7 == 'function') || (typeof $attr7['__get__'] == 'function')?
						$p['getattr']($attr8, 'ONKEYDOWN'):
						$m['Event']['ONKEYDOWN'])));
			return null;
		}
	, 1, [null,null,['self'],['p'],['child'],['cDelegate'],['kDelegate']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			if (typeof sender == 'undefined') sender=arguments.callee.__args__[3][1];

			self['clickDelegate']['onClick'](sender);
			return null;
		}
	, 1, [null,null,['self'],['sender', null]]);
		$cls_definition['onClick'] = $method;
		$method = $pyjs__bind_method2('getFocusablePanel', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr9,$attr10;
			return (($attr9=($attr10=self)['focusablePanel']) == null || (($attr10.__is_instance__) && typeof $attr9 == 'function') || (typeof $attr9['__get__'] == 'function')?
						$p['getattr']($attr10, 'focusablePanel'):
						self['focusablePanel']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getFocusablePanel'] = $method;
		$method = $pyjs__bind_method2('onBrowserEvent', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var modifiers,$eq2,$eq3,$eq1,$attr11,$eq4,$bool3,$bool4,$bool5,type,$attr12;
			type = $m['DOM']['eventGetType'](event);
			if ((($bool3=(($eq1=type)===($eq2='click')&&$eq1===null?true:
				($eq1===null?false:($eq2===null?false:
					((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1.__cmp__=='function'?$eq1.__cmp__($eq2) === 0:
						((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2.__cmp__=='function'?$eq2.__cmp__($eq1) === 0:
							$eq1==$eq2)))))) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
				self['onClick'](self);
			}
			else if ((($bool4=(($eq3=type)===($eq4='keydown')&&$eq3===null?true:
				($eq3===null?false:($eq4===null?false:
					((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3.__cmp__=='function'?$eq3.__cmp__($eq4) === 0:
						((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4.__cmp__=='function'?$eq4.__cmp__($eq3) === 0:
							$eq3==$eq4)))))) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
				modifiers = $m['KeyboardListener']['getKeyboardModifiers'](event);
				if ((($bool5=$p['hasattr']((($attr11=($attr12=self)['keyDelegate']) == null || (($attr12.__is_instance__) && typeof $attr11 == 'function') || (typeof $attr11['__get__'] == 'function')?
							$p['getattr']($attr12, 'keyDelegate'):
							self['keyDelegate']), 'onKeyDown')) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
					self['keyDelegate']['onKeyDown'](self, $m['DOM']['eventGetKeyCode'](event), modifiers);
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onBrowserEvent'] = $method;
		var $bases = new Array($m['Composite']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('ClickDelegatePanel', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end gwt.ui.ClickDelegatePanel */


/* end module: gwt.ui.ClickDelegatePanel */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.ui.Composite.Composite', 'pyjamas.ui', 'pyjamas.ui.Composite', 'pyjamas.ui.Event', 'pyjamas.ui.Focus', 'pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.ui.SimplePanel', 'pyjamas.ui.KeyboardListener']
*/
