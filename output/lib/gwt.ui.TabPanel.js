/* start module: gwt.ui.TabPanel */
$pyjs.loaded_modules['gwt.ui.TabPanel'] = function (__mod_name__) {
	if($pyjs.loaded_modules['gwt.ui.TabPanel'].__was_initialized__) return $pyjs.loaded_modules['gwt.ui.TabPanel'];
	if(typeof $pyjs.loaded_modules['gwt.ui'] == 'undefined' || !$pyjs.loaded_modules['gwt.ui'].__was_initialized__) $p['___import___']('gwt.ui', null);
	var $m = $pyjs.loaded_modules["gwt.ui.TabPanel"];
	$m.__repr__ = function() { return "<module: gwt.ui.TabPanel>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'gwt.ui.TabPanel';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['gwt.ui']['TabPanel'] = $pyjs.loaded_modules['gwt.ui.TabPanel'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'gwt.ui', null, false);
	$m['Factory'] = $p['___import___']('pyjamas.Factory', 'gwt.ui', null, false);
	$m['Composite'] = $p['___import___']('pyjamas.ui.Composite.Composite', 'gwt.ui', null, false);
	$m['DeckPanel'] = $p['___import___']('pyjamas.ui.DeckPanel.DeckPanel', 'gwt.ui', null, false);
	$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', 'gwt.ui', null, false);
	$m['PanelBase'] = $p['___import___']('pyjamas.ui.Panel.PanelBase', 'gwt.ui', null, false);
	$m['TabBar'] = $p['___import___']('pyjamas.ui.TabBar.TabBar', 'gwt.ui', null, false);
	$m['TabPanel'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'gwt.ui.TabPanel';
		$method = $pyjs__bind_method2('__init__', function(tabBar) {
			if (this.__is_instance__ === true) {
				var self = this;
				var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					var kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				tabBar = arguments[1];
				var kwargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof tabBar != 'undefined') {
					if (tabBar !== null && typeof tabBar['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = tabBar;
						tabBar = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}
			if (typeof tabBar == 'undefined') tabBar=arguments.callee.__args__[3][1];
			var $attr8,$attr1,$attr2,$attr5,$attr4,$attr7,element,$bool2,$bool3,$bool1,$attr6,$attr3,panel;
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('children', $p['list']([])) : $p['setattr'](self, 'children', $p['list']([]));
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('tab_names', $p['dict']([])) : $p['setattr'](self, 'tab_names', $p['dict']([]));
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('deck', kwargs['pop']('Deck', null)) : $p['setattr'](self, 'deck', kwargs['pop']('Deck', null));
			if ((($bool1=((($attr1=($attr2=self)['deck']) == null || (($attr2.__is_instance__) && typeof $attr1 == 'function') || (typeof $attr1['__get__'] == 'function')?
						$p['getattr']($attr2, 'deck'):
						self['deck']) === null)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('deck', $pyjs_kwargs_call(null, $m['DeckPanel'], null, null, [{StyleName:'gwt-TabPanelBottom'}])) : $p['setattr'](self, 'deck', $pyjs_kwargs_call(null, $m['DeckPanel'], null, null, [{StyleName:'gwt-TabPanelBottom'}]));
			}
			if ((($bool2=(tabBar === null)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('tabBar', $m['TabBar']()) : $p['setattr'](self, 'tabBar', $m['TabBar']());
			}
			else {
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('tabBar', tabBar) : $p['setattr'](self, 'tabBar', tabBar);
			}
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('tabListeners', $p['list']([])) : $p['setattr'](self, 'tabListeners', $p['list']([]));
			element = kwargs['pop']('Element', null);
			panel = $pyjs_kwargs_call(null, $m['VerticalPanel'], null, null, [{Element:element}]);
			panel['add']((($attr3=($attr4=self)['tabBar']) == null || (($attr4.__is_instance__) && typeof $attr3 == 'function') || (typeof $attr3['__get__'] == 'function')?
						$p['getattr']($attr4, 'tabBar'):
						self['tabBar']));
			if ((($bool3=(self['deck']['getParent']() === null)) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
				panel['add']((($attr5=($attr6=self)['deck']) == null || (($attr6.__is_instance__) && typeof $attr5 == 'function') || (typeof $attr5['__get__'] == 'function')?
							$p['getattr']($attr6, 'deck'):
							self['deck']));
				panel['setCellHeight']((($attr7=($attr8=self)['deck']) == null || (($attr8.__is_instance__) && typeof $attr7 == 'function') || (typeof $attr7['__get__'] == 'function')?
							$p['getattr']($attr8, 'deck'):
							self['deck']), '100%');
			}
			self['tabBar']['setWidth']('100%');
			self['tabBar']['addTabListener'](self);
			kwargs.__setitem__('StyleName', kwargs['get']('StyleName', 'gwt-TabPanel'));
			$m['PanelBase']['__init__'](self);
			$pyjs_kwargs_call($m['Composite'], '__init__', null, kwargs, [{}, self, panel]);
			return null;
		}
	, 1, [null,['kwargs'],['self'],['tabBar', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('add', function(widget, tabText, asHTML, name) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
				tabText = arguments[2];
				asHTML = arguments[3];
				name = arguments[4];
			}
			if (typeof tabText == 'undefined') tabText=arguments.callee.__args__[4][1];
			if (typeof asHTML == 'undefined') asHTML=arguments.callee.__args__[5][1];
			if (typeof name == 'undefined') name=arguments.callee.__args__[6][1];

			self['insert'](widget, tabText, asHTML, self['getWidgetCount'](), name);
			return null;
		}
	, 1, [null,null,['self'],['widget'],['tabText', null],['asHTML', false],['name', null]]);
		$cls_definition['add'] = $method;
		$method = $pyjs__bind_method2('addTabListener', function(listener) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['tabListeners']['append'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['addTabListener'] = $method;
		$method = $pyjs__bind_method2('getDeckPanel', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr9,$attr10;
			return (($attr9=($attr10=self)['deck']) == null || (($attr10.__is_instance__) && typeof $attr9 == 'function') || (typeof $attr9['__get__'] == 'function')?
						$p['getattr']($attr10, 'deck'):
						self['deck']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getDeckPanel'] = $method;
		$method = $pyjs__bind_method2('getTabBar', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr11,$attr12;
			return (($attr11=($attr12=self)['tabBar']) == null || (($attr12.__is_instance__) && typeof $attr11 == 'function') || (typeof $attr11['__get__'] == 'function')?
						$p['getattr']($attr12, 'tabBar'):
						self['tabBar']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getTabBar'] = $method;
		$method = $pyjs__bind_method2('insert', function(widget, tabText, asHTML, beforeIndex, name) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
				tabText = arguments[2];
				asHTML = arguments[3];
				beforeIndex = arguments[4];
				name = arguments[5];
			}
			if (typeof asHTML == 'undefined') asHTML=arguments.callee.__args__[5][1];
			if (typeof beforeIndex == 'undefined') beforeIndex=arguments.callee.__args__[6][1];
			if (typeof name == 'undefined') name=arguments.callee.__args__[7][1];
			var $bool4,$bool5,$attr14,$attr13;
			if ((($bool4=(beforeIndex === null)) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
				beforeIndex = asHTML;
				asHTML = false;
			}
			self['children']['insert'](beforeIndex, widget);
			if ((($bool5=(name !== null)) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
				(($attr13=($attr14=self)['tab_names']) == null || (($attr14.__is_instance__) && typeof $attr13 == 'function') || (typeof $attr13['__get__'] == 'function')?
							$p['getattr']($attr14, 'tab_names'):
							self['tab_names']).__setitem__(name, widget);
			}
			self['tabBar']['insertTab'](tabText, asHTML, beforeIndex);
			self['deck']['insert'](widget, beforeIndex);
			return null;
		}
	, 1, [null,null,['self'],['widget'],['tabText'],['asHTML', false],['beforeIndex', null],['name', null]]);
		$cls_definition['insert'] = $method;
		$method = $pyjs__bind_method2('onBeforeTabSelected', function(sender, tabIndex) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				tabIndex = arguments[2];
			}
			var $iter1_nextval,$iter1_idx,$iter1_iter,listener,$bool6,$iter1_array,$bool7,$iter1_type;
			$iter1_iter = self['tabListeners'];
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				listener = $iter1_nextval;
				if ((($bool7=!(($bool6=listener['onBeforeTabSelected'](sender, tabIndex)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
					return false;
				}
			}
			return true;
		}
	, 1, [null,null,['self'],['sender'],['tabIndex']]);
		$cls_definition['onBeforeTabSelected'] = $method;
		$method = $pyjs__bind_method2('onTabSelected', function(sender, tabIndex) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				tabIndex = arguments[2];
			}
			var $iter2_nextval,$iter2_type,$iter2_iter,listener,$iter2_idx,$iter2_array;
			self['deck']['showWidget'](tabIndex);
			$iter2_iter = self['tabListeners'];
			if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
				$iter2_type = 0;
			} else {
				$iter2_iter = $iter2_iter.__iter__();
				$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter2_idx = 0;
			while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
				listener = $iter2_nextval;
				listener['onTabSelected'](sender, tabIndex);
			}
			return null;
		}
	, 1, [null,null,['self'],['sender'],['tabIndex']]);
		$cls_definition['onTabSelected'] = $method;
		$method = $pyjs__bind_method2('remove', function(widget) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}
			var $bool10,$bool11,$iter3_type,index,$iter3_idx,$iter3_iter,$eq2,$eq3,$eq1,$eq4,$iter3_array,$attr15,$bool8,$bool9,$2,$1,k,w,$attr16,$iter3_nextval;
			if ((($bool8=$p['isinstance'](widget, $p['basestring'])) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
				widget = (typeof ($1=(($attr15=($attr16=self)['tab_names']) == null || (($attr16.__is_instance__) && typeof $attr15 == 'function') || (typeof $attr15['__get__'] == 'function')?
							$p['getattr']($attr16, 'tab_names'):
							self['tab_names'])).__array != 'undefined'?
					((typeof $1.__array[$2=widget]) != 'undefined'?$1.__array[$2]:
						$1.__getitem__($2)):
						$1.__getitem__(widget));
			}
			else if ((($bool9=$p['isinstance'](widget, $p['float_int'])) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
				widget = self['getWidget'](widget);
			}
			$iter3_iter = self['tab_names']['items']();
			if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
				$iter3_type = 0;
			} else {
				$iter3_iter = $iter3_iter.__iter__();
				$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter3_idx = 0;
			while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,true):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
				k = $iter3_nextval.__array[0];
				w = $iter3_nextval.__array[1];
				if ((($bool10=(($eq1=widget)===($eq2=w)&&$eq1===null?true:
					($eq1===null?false:($eq2===null?false:
						((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1.__cmp__=='function'?$eq1.__cmp__($eq2) === 0:
							((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2.__cmp__=='function'?$eq2.__cmp__($eq1) === 0:
								$eq1==$eq2)))))) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
					self['tab_names']['pop'](k);
					break;
				}
			}
			index = self['getWidgetIndex'](widget);
			if ((($bool11=(($eq3=index)===($eq4=(typeof ($usub1=1)=='number'?
				-$usub1:
				$p['op_usub']($usub1)))&&$eq3===null?true:
				($eq3===null?false:($eq4===null?false:
					((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3.__cmp__=='function'?$eq3.__cmp__($eq4) === 0:
						((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4.__cmp__=='function'?$eq4.__cmp__($eq3) === 0:
							$eq3==$eq4)))))) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
					false :
					(typeof $bool11=='object'?
						(typeof $bool11.__nonzero__=='function'?
							$bool11.__nonzero__() :
							(typeof $bool11.__len__=='function'?
								($bool11.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return false;
			}
			self['children']['remove'](widget);
			self['tabBar']['removeTab'](index);
			self['deck']['remove'](widget);
			return true;
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['remove'] = $method;
		$method = $pyjs__bind_method2('removeTabListener', function(listener) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['tabListeners']['remove'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['removeTabListener'] = $method;
		$method = $pyjs__bind_method2('selectTab', function(index) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}
			var $bool14,$bool13,$4,$3,$attr18,$attr17,$bool12;
			if ((($bool12=$p['isinstance'](index, $p['basestring'])) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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
				index = (typeof ($3=(($attr17=($attr18=self)['tab_names']) == null || (($attr18.__is_instance__) && typeof $attr17 == 'function') || (typeof $attr17['__get__'] == 'function')?
							$p['getattr']($attr18, 'tab_names'):
							self['tab_names'])).__array != 'undefined'?
					((typeof $3.__array[$4=index]) != 'undefined'?$3.__array[$4]:
						$3.__getitem__($4)):
						$3.__getitem__(index));
			}
			if ((($bool14=!(($bool13=$p['isinstance'](index, $p['float_int'])) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
				false :
				(typeof $bool13=='object'?
					(typeof $bool13.__nonzero__=='function'?
						$bool13.__nonzero__() :
						(typeof $bool13.__len__=='function'?
							($bool13.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
					false :
					(typeof $bool14=='object'?
						(typeof $bool14.__nonzero__=='function'?
							$bool14.__nonzero__() :
							(typeof $bool14.__len__=='function'?
								($bool14.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				index = self['getWidgetIndex'](index);
			}
			self['tabBar']['selectTab'](index);
			return null;
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['selectTab'] = $method;
		var $bases = new Array($m['PanelBase'],$m['Composite']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('TabPanel', $p['tuple']($bases), $data);
	})();
	$m['Factory']['registerClass']('pyjamas.ui.TabPanel', 'TabPanel', $m['TabPanel']);
	return this;
}; /* end gwt.ui.TabPanel */


/* end module: gwt.ui.TabPanel */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.ui.Composite.Composite', 'pyjamas.ui', 'pyjamas.ui.Composite', 'pyjamas.ui.DeckPanel.DeckPanel', 'pyjamas.ui.DeckPanel', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.Panel.PanelBase', 'pyjamas.ui.Panel', 'pyjamas.ui.TabBar.TabBar', 'pyjamas.ui.TabBar']
*/
