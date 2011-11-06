/* start module: gwt.ui.DecoratorPanel */
$pyjs.loaded_modules['gwt.ui.DecoratorPanel'] = function (__mod_name__) {
	if($pyjs.loaded_modules['gwt.ui.DecoratorPanel'].__was_initialized__) return $pyjs.loaded_modules['gwt.ui.DecoratorPanel'];
	if(typeof $pyjs.loaded_modules['gwt.ui'] == 'undefined' || !$pyjs.loaded_modules['gwt.ui'].__was_initialized__) $p['___import___']('gwt.ui', null);
	var $m = $pyjs.loaded_modules["gwt.ui.DecoratorPanel"];
	$m.__repr__ = function() { return "<module: gwt.ui.DecoratorPanel>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'gwt.ui.DecoratorPanel';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['gwt.ui']['DecoratorPanel'] = $pyjs.loaded_modules['gwt.ui.DecoratorPanel'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'gwt.ui', null, false);
	$m['SimplePanel'] = $p['___import___']('pyjamas.ui.SimplePanel.SimplePanel', 'gwt.ui', null, false);
	$m['Factory'] = $p['___import___']('pyjamas.Factory', 'gwt.ui', null, false);
	$m['TabPanel'] = $p['___import___']('pyjamas.ui.TabPanel.TabPanel', 'gwt.ui', null, false);
	$m['TabBar'] = $p['___import___']('pyjamas.ui.TabBar.TabBar', 'gwt.ui', null, false);
	$m['DecoratorPanel'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'gwt.ui.DecoratorPanel';
		$cls_definition['DEFAULT_STYLENAME'] = 'gwt-DecoratorPanel';
		$cls_definition['DEFAULT_ROW_STYLENAMES'] = $p['list'](['top', 'middle', 'bottom']);
		$method = $pyjs__bind_method2('__init__', function(rowStyles, containerIndex) {
			if (this.__is_instance__ === true) {
				var self = this;
				var kwargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					var kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				rowStyles = arguments[1];
				containerIndex = arguments[2];
				var kwargs = arguments.length >= 4 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof containerIndex != 'undefined') {
					if (containerIndex !== null && typeof containerIndex['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = containerIndex;
						containerIndex = arguments[3];
					}
				} else 				if (typeof rowStyles != 'undefined') {
					if (rowStyles !== null && typeof rowStyles['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = rowStyles;
						rowStyles = arguments[3];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[3];
					}
				} else {
				}
			}
			if (typeof rowStyles == 'undefined') rowStyles=arguments.callee.__args__[3][1];
			if (typeof containerIndex == 'undefined') containerIndex=arguments.callee.__args__[4][1];
			var $iter1_iter,$attr20,$attr21,$attr22,row,$2,$eq2,$iter1_array,$1,$attr9,$attr8,$eq1,$iter1_nextval,$attr1,$attr3,$attr2,$attr5,$attr4,$attr7,$attr6,$bool2,$bool3,$bool1,$attr19,$attr18,$bool4,$bool5,$attr15,$attr14,$attr17,$attr16,$attr11,$attr10,$attr13,$attr12,$iter1_type,i,fc,$iter1_idx,$len1,$bool6;
			if ((($bool1=(rowStyles === null)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				rowStyles = (($attr1=($attr2=self)['DEFAULT_ROW_STYLENAMES']) == null || (($attr2.__is_instance__) && typeof $attr1 == 'function') || (typeof $attr1['__get__'] == 'function')?
							$p['getattr']($attr2, 'DEFAULT_ROW_STYLENAMES'):
							self['DEFAULT_ROW_STYLENAMES']);
			}
			if ((($bool2=kwargs['has_key']('Element')) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('table', kwargs['pop']('Element')) : $p['setattr'](self, 'table', kwargs['pop']('Element'));
				fc = $m['DOM']['getFirstChild']((($attr3=($attr4=self)['table']) == null || (($attr4.__is_instance__) && typeof $attr3 == 'function') || (typeof $attr3['__get__'] == 'function')?
							$p['getattr']($attr4, 'table'):
							self['table']));
				if ((($bool3=fc) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('tbody', fc) : $p['setattr'](self, 'tbody', fc);
				}
				else {
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('tbody', $m['DOM']['createTBody']()) : $p['setattr'](self, 'tbody', $m['DOM']['createTBody']());
					$m['DOM']['appendChild']((($attr5=($attr6=self)['table']) == null || (($attr6.__is_instance__) && typeof $attr5 == 'function') || (typeof $attr5['__get__'] == 'function')?
								$p['getattr']($attr6, 'table'):
								self['table']), (($attr7=($attr8=self)['tbody']) == null || (($attr8.__is_instance__) && typeof $attr7 == 'function') || (typeof $attr7['__get__'] == 'function')?
								$p['getattr']($attr8, 'tbody'):
								self['tbody']));
				}
			}
			else {
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('table', $m['DOM']['createTable']()) : $p['setattr'](self, 'table', $m['DOM']['createTable']());
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('tbody', $m['DOM']['createTBody']()) : $p['setattr'](self, 'tbody', $m['DOM']['createTBody']());
				$m['DOM']['appendChild']((($attr9=($attr10=self)['table']) == null || (($attr10.__is_instance__) && typeof $attr9 == 'function') || (typeof $attr9['__get__'] == 'function')?
							$p['getattr']($attr10, 'table'):
							self['table']), (($attr11=($attr12=self)['tbody']) == null || (($attr12.__is_instance__) && typeof $attr11 == 'function') || (typeof $attr11['__get__'] == 'function')?
							$p['getattr']($attr12, 'tbody'):
							self['tbody']));
				$m['DOM']['setAttribute']((($attr13=($attr14=self)['table']) == null || (($attr14.__is_instance__) && typeof $attr13 == 'function') || (typeof $attr13['__get__'] == 'function')?
							$p['getattr']($attr14, 'table'):
							self['table']), 'cellSpacing', '0');
				$m['DOM']['setAttribute']((($attr15=($attr16=self)['table']) == null || (($attr16.__is_instance__) && typeof $attr15 == 'function') || (typeof $attr15['__get__'] == 'function')?
							$p['getattr']($attr16, 'table'):
							self['table']), 'cellPadding', '0');
			}
			if ((($bool5=!(($bool4=kwargs['has_key']('StyleName')) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
				false :
				(typeof $bool4=='object'?
					(typeof $bool4.__nonzero__=='function'?
						$bool4.__nonzero__() :
						(typeof $bool4.__len__=='function'?
							($bool4.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
				kwargs.__setitem__('StyleName', (($attr17=($attr18=self)['DEFAULT_STYLENAME']) == null || (($attr18.__is_instance__) && typeof $attr17 == 'function') || (typeof $attr17['__get__'] == 'function')?
							$p['getattr']($attr18, 'DEFAULT_STYLENAME'):
							self['DEFAULT_STYLENAME']));
			}
			$pyjs_kwargs_call($m['SimplePanel'], '__init__', null, kwargs, [{}, self, (($attr19=($attr20=self)['table']) == null || (($attr20.__is_instance__) && typeof $attr19 == 'function') || (typeof $attr19['__get__'] == 'function')?
						$p['getattr']($attr20, 'table'):
						self['table'])]);
			$iter1_iter = $p['range']((($len1=rowStyles) === null?0:
				(typeof $len1.__array != 'undefined' ? $len1.__array.length:
					(typeof $len1.__len__ == 'function'?$len1.__len__():
						(typeof $len1.length != 'undefined'?$len1.length:
							$p['len']($len1))))));
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				i = $iter1_nextval;
				row = self['createTR']((typeof ($1=rowStyles).__array != 'undefined'?
					((typeof $1.__array[$2=i]) != 'undefined'?$1.__array[$2]:
						$1.__getitem__($2)):
						$1.__getitem__(i)));
				$m['DOM']['appendChild']((($attr21=($attr22=self)['tbody']) == null || (($attr22.__is_instance__) && typeof $attr21 == 'function') || (typeof $attr21['__get__'] == 'function')?
							$p['getattr']($attr22, 'tbody'):
							self['tbody']), row);
				if ((($bool6=(($eq1=i)===($eq2=containerIndex)&&$eq1===null?true:
					($eq1===null?false:($eq2===null?false:
						((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1.__cmp__=='function'?$eq1.__cmp__($eq2) === 0:
							((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2.__cmp__=='function'?$eq2.__cmp__($eq1) === 0:
								$eq1==$eq2)))))) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('containerElem', $m['DOM']['getFirstChild']($m['DOM']['getChild'](row, 1))) : $p['setattr'](self, 'containerElem', $m['DOM']['getFirstChild']($m['DOM']['getChild'](row, 1)));
				}
			}
			return null;
		}
	, 1, [null,['kwargs'],['self'],['rowStyles', null],['containerIndex', 1]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('createTR', function(styleName) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				styleName = arguments[1];
			}
			var $add2,$add3,$add1,$add6,$add4,$add5,trElem;
			trElem = $m['DOM']['createTR']();
			self['setStyleName'](trElem, styleName);
			$m['DOM']['appendChild'](trElem, self['createTD']((typeof ($add1=styleName)==typeof ($add2='Left') && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				$p['op_add']($add1,$add2))));
			$m['DOM']['appendChild'](trElem, self['createTD']((typeof ($add3=styleName)==typeof ($add4='Center') && (typeof $add3=='number'||typeof $add3=='string')?
				$add3+$add4:
				$p['op_add']($add3,$add4))));
			$m['DOM']['appendChild'](trElem, self['createTD']((typeof ($add5=styleName)==typeof ($add6='Right') && (typeof $add5=='number'||typeof $add5=='string')?
				$add5+$add6:
				$p['op_add']($add5,$add6))));
			return trElem;
		}
	, 1, [null,null,['self'],['styleName']]);
		$cls_definition['createTR'] = $method;
		$method = $pyjs__bind_method2('createTD', function(styleName) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				styleName = arguments[1];
			}
			var tdElem,inner,$add8,$add7;
			tdElem = $m['DOM']['createTD']();
			inner = $m['DOM']['createDiv']();
			$m['DOM']['appendChild'](tdElem, inner);
			self['setStyleName'](tdElem, styleName);
			self['setStyleName'](inner, (typeof ($add7=styleName)==typeof ($add8='Inner') && (typeof $add7=='number'||typeof $add7=='string')?
				$add7+$add8:
				$p['op_add']($add7,$add8)));
			return tdElem;
		}
	, 1, [null,null,['self'],['styleName']]);
		$cls_definition['createTD'] = $method;
		$method = $pyjs__bind_method2('getCellElement', function(row, cell) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				cell = arguments[2];
			}
			var tr,$attr23,$attr24,td;
			tr = $m['DOM']['getChild']((($attr23=($attr24=self)['tbody']) == null || (($attr24.__is_instance__) && typeof $attr23 == 'function') || (typeof $attr23['__get__'] == 'function')?
						$p['getattr']($attr24, 'tbody'):
						self['tbody']), row);
			td = $m['DOM']['getChild'](tr, cell);
			return $m['DOM']['getFirstChild'](td);
		}
	, 1, [null,null,['self'],['row'],['cell']]);
		$cls_definition['getCellElement'] = $method;
		$method = $pyjs__bind_method2('getContainerElement', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr25,$attr26;
			return (($attr25=($attr26=self)['containerElem']) == null || (($attr26.__is_instance__) && typeof $attr25 == 'function') || (typeof $attr25['__get__'] == 'function')?
						$p['getattr']($attr26, 'containerElem'):
						self['containerElem']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getContainerElement'] = $method;
		var $bases = new Array($m['SimplePanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('DecoratorPanel', $p['tuple']($bases), $data);
	})();
	$m['Factory']['registerClass']('pyjamas.ui.DecoratorPanel', 'DecoratorPanel', $m['DecoratorPanel']);
	$m['DecoratedTabBar'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'gwt.ui.DecoratorPanel';
		$cls_definition['TAB_ROW_STYLES'] = $p['list'](['tabTop', 'tabMiddle']);
		$cls_definition['STYLENAME_DEFAULT'] = 'gwt-DecoratedTabBar';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
				var kwargs = arguments.length >= 1 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					var kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[1];
					}
				} else {
				}
			}

			$pyjs_kwargs_call($m['TabBar'], '__init__', null, kwargs, [{}, self]);
			return null;
		}
	, 1, [null,['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('createTabTextWrapper', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr28,$attr27;
			return $m['DecoratorPanel']((($attr27=($attr28=self)['TAB_ROW_STYLES']) == null || (($attr28.__is_instance__) && typeof $attr27 == 'function') || (typeof $attr27['__get__'] == 'function')?
						$p['getattr']($attr28, 'TAB_ROW_STYLES'):
						self['TAB_ROW_STYLES']), 1);
		}
	, 1, [null,null,['self']]);
		$cls_definition['createTabTextWrapper'] = $method;
		var $bases = new Array($m['TabBar']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('DecoratedTabBar', $p['tuple']($bases), $data);
	})();
	$m['Factory']['registerClass']('pyjamas.ui.DecoratorPanel', 'DecoratedTabBar', $m['DecoratedTabBar']);
	$m['DecoratedTabPanel'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'gwt.ui.DecoratorPanel';
		$cls_definition['DEFAULT_STYLENAME'] = 'gwt-DecoratedTabPanel';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
				var kwargs = arguments.length >= 1 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					var kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[1];
					}
				} else {
				}
			}
			var $attr32,$attr31,$attr30,$bool7,$attr29,$bool8;
			if ((($bool8=!(($bool7=kwargs['has_key']('StyleName')) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
				false :
				(typeof $bool7=='object'?
					(typeof $bool7.__nonzero__=='function'?
						$bool7.__nonzero__() :
						(typeof $bool7.__len__=='function'?
							($bool7.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
				kwargs.__setitem__('StyleName', (($attr29=($attr30=self)['DEFAULT_STYLENAME']) == null || (($attr30.__is_instance__) && typeof $attr29 == 'function') || (typeof $attr29['__get__'] == 'function')?
							$p['getattr']($attr30, 'DEFAULT_STYLENAME'):
							self['DEFAULT_STYLENAME']));
			}
			$pyjs_kwargs_call($m['TabPanel'], '__init__', null, kwargs, [{}, self, $m['DecoratedTabBar']()]);
			self['getTabBar']()['setStyleName']((($attr31=($attr32=$m['DecoratedTabBar'])['STYLENAME_DEFAULT']) == null || (($attr32.__is_instance__) && typeof $attr31 == 'function') || (typeof $attr31['__get__'] == 'function')?
						$p['getattr']($attr32, 'STYLENAME_DEFAULT'):
						$m['DecoratedTabBar']['STYLENAME_DEFAULT']));
			return null;
		}
	, 1, [null,['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('createTabTextWrapper', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr33,$attr34;
			return $m['DecoratorPanel']((($attr33=($attr34=$m['DecoratedTabBar'])['TAB_ROW_STYLES']) == null || (($attr34.__is_instance__) && typeof $attr33 == 'function') || (typeof $attr33['__get__'] == 'function')?
						$p['getattr']($attr34, 'TAB_ROW_STYLES'):
						$m['DecoratedTabBar']['TAB_ROW_STYLES']), 1);
		}
	, 1, [null,null,['self']]);
		$cls_definition['createTabTextWrapper'] = $method;
		var $bases = new Array($m['TabPanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('DecoratedTabPanel', $p['tuple']($bases), $data);
	})();
	$m['Factory']['registerClass']('pyjamas.ui.DecoratorPanel', 'DecoratedTabPanel', $m['DecoratedTabPanel']);
	$m['DecoratorTitledPanel'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'gwt.ui.DecoratorPanel';
		$method = $pyjs__bind_method2('__init__', function(title, titleStyle, imgStyle, rowStyles, containerIndex, titleIndex) {
			if (this.__is_instance__ === true) {
				var self = this;
				var kwargs = arguments.length >= 7 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					var kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				title = arguments[1];
				titleStyle = arguments[2];
				imgStyle = arguments[3];
				rowStyles = arguments[4];
				containerIndex = arguments[5];
				titleIndex = arguments[6];
				var kwargs = arguments.length >= 8 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof titleIndex != 'undefined') {
					if (titleIndex !== null && typeof titleIndex['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = titleIndex;
						titleIndex = arguments[7];
					}
				} else 				if (typeof containerIndex != 'undefined') {
					if (containerIndex !== null && typeof containerIndex['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = containerIndex;
						containerIndex = arguments[7];
					}
				} else 				if (typeof rowStyles != 'undefined') {
					if (rowStyles !== null && typeof rowStyles['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = rowStyles;
						rowStyles = arguments[7];
					}
				} else 				if (typeof imgStyle != 'undefined') {
					if (imgStyle !== null && typeof imgStyle['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = imgStyle;
						imgStyle = arguments[7];
					}
				} else 				if (typeof titleStyle != 'undefined') {
					if (titleStyle !== null && typeof titleStyle['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = titleStyle;
						titleStyle = arguments[7];
					}
				} else 				if (typeof title != 'undefined') {
					if (title !== null && typeof title['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = title;
						title = arguments[7];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[7];
					}
				} else {
				}
			}
			if (typeof titleStyle == 'undefined') titleStyle=arguments.callee.__args__[4][1];
			if (typeof imgStyle == 'undefined') imgStyle=arguments.callee.__args__[5][1];
			if (typeof rowStyles == 'undefined') rowStyles=arguments.callee.__args__[6][1];
			if (typeof containerIndex == 'undefined') containerIndex=arguments.callee.__args__[7][1];
			if (typeof titleIndex == 'undefined') titleIndex=arguments.callee.__args__[8][1];
			var img,$bool10,$bool11,tdiv,inner,$bool9;
			if ((($bool9=(rowStyles === null)) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
				rowStyles = $p['list'](['top', 'top2', 'middle', 'bottom']);
			}
			if ((($bool10=(titleStyle === null)) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
				titleStyle = 'title';
			}
			$pyjs_kwargs_call($m['DecoratorPanel'], '__init__', null, kwargs, [{}, self, rowStyles, containerIndex]);
			inner = self['getCellElement'](titleIndex, 1);
			if ((($bool11=imgStyle) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
				img = $m['DOM']['createDiv']();
				$m['DOM']['setAttribute'](img, 'className', imgStyle);
				$m['DOM']['appendChild'](inner, img);
			}
			tdiv = $m['DOM']['createDiv']();
			$m['DOM']['setAttribute'](tdiv, 'className', titleStyle);
			$m['DOM']['setInnerText'](tdiv, title);
			$m['DOM']['appendChild'](inner, tdiv);
			return null;
		}
	, 1, [null,['kwargs'],['self'],['title'],['titleStyle', null],['imgStyle', null],['rowStyles', null],['containerIndex', 2],['titleIndex', 1]]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['DecoratorPanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('DecoratorTitledPanel', $p['tuple']($bases), $data);
	})();
	$m['Factory']['registerClass']('pyjamas.ui.DecoratorPanel', 'DecoratorTitledPanel', $m['DecoratorTitledPanel']);
	return this;
}; /* end gwt.ui.DecoratorPanel */


/* end module: gwt.ui.DecoratorPanel */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.ui', 'pyjamas.ui.SimplePanel', 'pyjamas.Factory', 'pyjamas.ui.TabPanel.TabPanel', 'pyjamas.ui.TabPanel', 'pyjamas.ui.TabBar.TabBar', 'pyjamas.ui.TabBar']
*/
