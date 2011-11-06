/* start module: gwt.ui.Hyperlink */
$pyjs.loaded_modules['gwt.ui.Hyperlink'] = function (__mod_name__) {
	if($pyjs.loaded_modules['gwt.ui.Hyperlink'].__was_initialized__) return $pyjs.loaded_modules['gwt.ui.Hyperlink'];
	if(typeof $pyjs.loaded_modules['gwt.ui'] == 'undefined' || !$pyjs.loaded_modules['gwt.ui'].__was_initialized__) $p['___import___']('gwt.ui', null);
	var $m = $pyjs.loaded_modules["gwt.ui.Hyperlink"];
	$m.__repr__ = function() { return "<module: gwt.ui.Hyperlink>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'gwt.ui.Hyperlink';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['gwt.ui']['Hyperlink'] = $pyjs.loaded_modules['gwt.ui.Hyperlink'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'gwt.ui', null, false);
	$m['Factory'] = $p['___import___']('pyjamas.Factory', 'gwt.ui', null, false);
	$m['History'] = $p['___import___']('pyjamas.History', 'gwt.ui', null, false);
	$m['Widget'] = $p['___import___']('pyjamas.ui.Widget.Widget', 'gwt.ui', null, false);
	$m['Event'] = $p['___import___']('pyjamas.ui.Event', 'gwt.ui', null, false);
	$m['ClickHandler'] = $p['___import___']('pyjamas.ui.ClickListener.ClickHandler', 'gwt.ui', null, false);
	$m['Hyperlink'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'gwt.ui.Hyperlink';
		$method = $pyjs__bind_method2('__init__', function(text, asHTML, Element) {
			if (this.__is_instance__ === true) {
				var self = this;
				var kwargs = arguments.length >= 4 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					var kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				text = arguments[1];
				asHTML = arguments[2];
				Element = arguments[3];
				var kwargs = arguments.length >= 5 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof Element != 'undefined') {
					if (Element !== null && typeof Element['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = Element;
						Element = arguments[4];
					}
				} else 				if (typeof asHTML != 'undefined') {
					if (asHTML !== null && typeof asHTML['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = asHTML;
						asHTML = arguments[4];
					}
				} else 				if (typeof text != 'undefined') {
					if (text !== null && typeof text['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = text;
						text = arguments[4];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[4];
					}
				} else {
				}
			}
			if (typeof text == 'undefined') text=arguments.callee.__args__[3][1];
			if (typeof asHTML == 'undefined') asHTML=arguments.callee.__args__[4][1];
			if (typeof Element == 'undefined') Element=arguments.callee.__args__[5][1];
			var $attr1,$attr2,$bool2,$bool3,$bool1,$bool6,$bool7,$bool4,$bool5;
			if ((($bool1=(Element === null)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				Element = $m['DOM']['createDiv']();
			}
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('anchorElem', $m['DOM']['createAnchor']()) : $p['setattr'](self, 'anchorElem', $m['DOM']['createAnchor']());
			self['setElement'](Element);
			$m['DOM']['appendChild'](self['getElement'](), (($attr1=($attr2=self)['anchorElem']) == null || (($attr2.__is_instance__) && typeof $attr1 == 'function') || (typeof $attr1['__get__'] == 'function')?
						$p['getattr']($attr2, 'anchorElem'):
						self['anchorElem']));
			if ((($bool3=!(($bool2=kwargs['has_key']('StyleName')) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
				false :
				(typeof $bool2=='object'?
					(typeof $bool2.__nonzero__=='function'?
						$bool2.__nonzero__() :
						(typeof $bool2.__len__=='function'?
							($bool2.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
				kwargs.__setitem__('StyleName', 'gwt-Hyperlink');
			}
			if ((($bool4=text) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
				if ((($bool5=asHTML) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
					kwargs.__setitem__('HTML', text);
				}
				else {
					kwargs.__setitem__('Text', text);
				}
			}
			if ((($bool7=!(($bool6=kwargs['has_key']('TargetHistoryToken')) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
				false :
				(typeof $bool6=='object'?
					(typeof $bool6.__nonzero__=='function'?
						$bool6.__nonzero__() :
						(typeof $bool6.__len__=='function'?
							($bool6.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
					false :
					(typeof $bool7=='object'?
						(typeof $bool7.__nonzero__=='function'?
							$bool7.__nonzero__() :
							(typeof $bool7.__len__=='function'?
								($bool7.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				kwargs.__setitem__('TargetHistoryToken', null);
			}
			$pyjs_kwargs_call($m['Widget'], '__init__', null, kwargs, [{}, self]);
			$m['ClickHandler']['__init__'](self);
			return null;
		}
	, 1, [null,['kwargs'],['self'],['text', ''],['asHTML', false],['Element', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onBrowserEvent', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var event_type,$eq2,$eq1,$attr5,$attr4,$attr6,$attr3,$bool8,$bool9;
			$m['Widget']['onBrowserEvent'](self, event);
			event_type = $m['DOM']['eventGetType'](event);
			if ((($bool8=(($eq1=event_type)===($eq2='click')&&$eq1===null?true:
				($eq1===null?false:($eq2===null?false:
					((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1.__cmp__=='function'?$eq1.__cmp__($eq2) === 0:
						((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2.__cmp__=='function'?$eq2.__cmp__($eq1) === 0:
							$eq1==$eq2)))))) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
				$m['DOM']['eventPreventDefault'](event);
				if ((($bool9=((($attr3=($attr4=self)['targetHistoryToken']) == null || (($attr4.__is_instance__) && typeof $attr3 == 'function') || (typeof $attr3['__get__'] == 'function')?
							$p['getattr']($attr4, 'targetHistoryToken'):
							self['targetHistoryToken']) !== null)) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
						false :
						(typeof $bool9=='object'?
							(typeof $bool9.__nonzero__=='function'?
								$bool9.__nonzero__() :
								(typeof $bool9.__len__=='function'?
									($bool9.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$m['History']['newItem']((($attr5=($attr6=self)['targetHistoryToken']) == null || (($attr6.__is_instance__) && typeof $attr5 == 'function') || (typeof $attr5['__get__'] == 'function')?
								$p['getattr']($attr6, 'targetHistoryToken'):
								self['targetHistoryToken']));
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onBrowserEvent'] = $method;
		$method = $pyjs__bind_method2('getHTML', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr8,$attr7;
			return $m['DOM']['getInnerHTML']((($attr7=($attr8=self)['anchorElem']) == null || (($attr8.__is_instance__) && typeof $attr7 == 'function') || (typeof $attr7['__get__'] == 'function')?
						$p['getattr']($attr8, 'anchorElem'):
						self['anchorElem']));
		}
	, 1, [null,null,['self']]);
		$cls_definition['getHTML'] = $method;
		$method = $pyjs__bind_method2('setHTML', function(html) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				html = arguments[1];
			}
			var $attr9,$attr10;
			$m['DOM']['setInnerHTML']((($attr9=($attr10=self)['anchorElem']) == null || (($attr10.__is_instance__) && typeof $attr9 == 'function') || (typeof $attr9['__get__'] == 'function')?
						$p['getattr']($attr10, 'anchorElem'):
						self['anchorElem']), html);
			return null;
		}
	, 1, [null,null,['self'],['html']]);
		$cls_definition['setHTML'] = $method;
		$method = $pyjs__bind_method2('getText', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr11,$attr12;
			return $m['DOM']['getInnerText']((($attr11=($attr12=self)['anchorElem']) == null || (($attr12.__is_instance__) && typeof $attr11 == 'function') || (typeof $attr11['__get__'] == 'function')?
						$p['getattr']($attr12, 'anchorElem'):
						self['anchorElem']));
		}
	, 1, [null,null,['self']]);
		$cls_definition['getText'] = $method;
		$method = $pyjs__bind_method2('setText', function(text) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
			}
			var $attr13,$attr14;
			$m['DOM']['setInnerText']((($attr13=($attr14=self)['anchorElem']) == null || (($attr14.__is_instance__) && typeof $attr13 == 'function') || (typeof $attr13['__get__'] == 'function')?
						$p['getattr']($attr14, 'anchorElem'):
						self['anchorElem']), text);
			return null;
		}
	, 1, [null,null,['self'],['text']]);
		$cls_definition['setText'] = $method;
		$method = $pyjs__bind_method2('getTargetHistoryToken', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr15,$attr16;
			return (($attr15=($attr16=self)['targetHistoryToken']) == null || (($attr16.__is_instance__) && typeof $attr15 == 'function') || (typeof $attr15['__get__'] == 'function')?
						$p['getattr']($attr16, 'targetHistoryToken'):
						self['targetHistoryToken']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getTargetHistoryToken'] = $method;
		$method = $pyjs__bind_method2('setTargetHistoryToken', function(targetHistoryToken) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				targetHistoryToken = arguments[1];
			}
			var $bool10,$add2,$add1,$attr18,$attr17;
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('targetHistoryToken', targetHistoryToken) : $p['setattr'](self, 'targetHistoryToken', targetHistoryToken);
			if ((($bool10=(targetHistoryToken === null)) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
				targetHistoryToken = '';
			}
			$m['DOM']['setAttribute']((($attr17=($attr18=self)['anchorElem']) == null || (($attr18.__is_instance__) && typeof $attr17 == 'function') || (typeof $attr17['__get__'] == 'function')?
						$p['getattr']($attr18, 'anchorElem'):
						self['anchorElem']), 'href', (typeof ($add1='#')==typeof ($add2=targetHistoryToken) && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				$p['op_add']($add1,$add2)));
			return null;
		}
	, 1, [null,null,['self'],['targetHistoryToken']]);
		$cls_definition['setTargetHistoryToken'] = $method;
		var $bases = new Array($m['Widget'],$m['ClickHandler']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Hyperlink', $p['tuple']($bases), $data);
	})();
	$m['Factory']['registerClass']('pyjamas.ui.Hyperlink', 'Hyperlink', $m['Hyperlink']);
	return this;
}; /* end gwt.ui.Hyperlink */


/* end module: gwt.ui.Hyperlink */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.History', 'pyjamas.ui.Widget.Widget', 'pyjamas.ui', 'pyjamas.ui.Widget', 'pyjamas.ui.Event', 'pyjamas.ui.ClickListener.ClickHandler', 'pyjamas.ui.ClickListener']
*/
