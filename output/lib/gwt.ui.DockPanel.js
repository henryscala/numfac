/* start module: gwt.ui.DockPanel */
$pyjs.loaded_modules['gwt.ui.DockPanel'] = function (__mod_name__) {
	if($pyjs.loaded_modules['gwt.ui.DockPanel'].__was_initialized__) return $pyjs.loaded_modules['gwt.ui.DockPanel'];
	if(typeof $pyjs.loaded_modules['gwt.ui'] == 'undefined' || !$pyjs.loaded_modules['gwt.ui'].__was_initialized__) $p['___import___']('gwt.ui', null);
	var $m = $pyjs.loaded_modules["gwt.ui.DockPanel"];
	$m.__repr__ = function() { return "<module: gwt.ui.DockPanel>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'gwt.ui.DockPanel';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['gwt.ui']['DockPanel'] = $pyjs.loaded_modules['gwt.ui.DockPanel'];


	$m['Factory'] = $p['___import___']('pyjamas.Factory', 'gwt.ui', null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'gwt.ui', null, false);
	$m['CellPanel'] = $p['___import___']('pyjamas.ui.CellPanel.CellPanel', 'gwt.ui', null, false);
	$m['HasHorizontalAlignment'] = $p['___import___']('pyjamas.ui.HasHorizontalAlignment', 'gwt.ui', null, false);
	$m['HasVerticalAlignment'] = $p['___import___']('pyjamas.ui.HasVerticalAlignment', 'gwt.ui', null, false);
	$m['DockPanelTmpRow'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'gwt.ui.DockPanel';
		$cls_definition['center'] = 0;
		$cls_definition['tr'] = null;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('DockPanelTmpRow', $p['tuple']($bases), $data);
	})();
	$m['LayoutData'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'gwt.ui.DockPanel';
		$method = $pyjs__bind_method2('__init__', function(direction) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				direction = arguments[1];
			}

			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('direction', direction) : $p['setattr'](self, 'direction', direction);
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('hAlign', 'left') : $p['setattr'](self, 'hAlign', 'left');
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('height', '') : $p['setattr'](self, 'height', '');
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('td', null) : $p['setattr'](self, 'td', null);
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('vAlign', 'top') : $p['setattr'](self, 'vAlign', 'top');
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('width', '') : $p['setattr'](self, 'width', '');
			return null;
		}
	, 1, [null,null,['self'],['direction']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('LayoutData', $p['tuple']($bases), $data);
	})();
	$m['DockPanel'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'gwt.ui.DockPanel';
		$cls_definition['CENTER'] = 'center';
		$cls_definition['EAST'] = 'east';
		$cls_definition['NORTH'] = 'north';
		$cls_definition['SOUTH'] = 'south';
		$cls_definition['WEST'] = 'west';
		$cls_definition['elem_props'] = $p['list']([$p['tuple'](['height', 'Cell Height', 'CellHeight', $p['str'], null]), $p['tuple'](['width', 'Cell Width', 'CellWidth', $p['str'], null]), $p['tuple'](['halign', 'Cell Horizontal Alignment', 'CellHorizontalAlignment', null, 'left']), $p['tuple'](['valign', 'Cell Vertical Alignment', 'CellVerticalAlignment', null, 'top'])]);
		$method = $pyjs__bind_method2('_getElementProps', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr1,$add2,$attr2,$add1;
			return (typeof ($add1=$m['CellPanel']['_getElementProps']())==typeof ($add2=(($attr1=($attr2=self)['elem_props']) == null || (($attr2.__is_instance__) && typeof $attr1 == 'function') || (typeof $attr1['__get__'] == 'function')?
						$p['getattr']($attr2, 'elem_props'):
						self['elem_props'])) && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				$p['op_add']($add1,$add2));
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getElementProps'] = $method;
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

			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('center', null) : $p['setattr'](self, 'center', null);
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('dock_children', $p['list']([])) : $p['setattr'](self, 'dock_children', $p['list']([]));
			$pyjs_kwargs_call($m['CellPanel'], '__init__', null, kwargs, [{}, self]);
			return null;
		}
	, 1, [null,['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('add', function(widget, direction) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
				direction = arguments[2];
			}
			var $attr9,$attr8,layout,$eq2,$attr3,$eq1,$attr5,$attr7,$attr4,$bool2,$bool1,$attr10,$attr6;
			if ((($bool1=(($eq1=direction)===($eq2=(($attr3=($attr4=self)['CENTER']) == null || (($attr4.__is_instance__) && typeof $attr3 == 'function') || (typeof $attr3['__get__'] == 'function')?
						$p['getattr']($attr4, 'CENTER'):
						self['CENTER']))&&$eq1===null?true:
				($eq1===null?false:($eq2===null?false:
					((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1.__cmp__=='function'?$eq1.__cmp__($eq2) === 0:
						((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2.__cmp__=='function'?$eq2.__cmp__($eq1) === 0:
							$eq1==$eq2)))))) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				if ((($bool2=((($attr5=($attr6=self)['center']) == null || (($attr6.__is_instance__) && typeof $attr5 == 'function') || (typeof $attr5['__get__'] == 'function')?
							$p['getattr']($attr6, 'center'):
							self['center']) !== null)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
					throw ($p['Exception']('Only one CENTER widget may be added'));
				}
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('center', widget) : $p['setattr'](self, 'center', widget);
			}
			layout = $m['LayoutData'](direction);
			widget['setLayoutData'](layout);
			self['setCellHorizontalAlignment'](widget, (($attr7=($attr8=self)['horzAlign']) == null || (($attr8.__is_instance__) && typeof $attr7 == 'function') || (typeof $attr7['__get__'] == 'function')?
						$p['getattr']($attr8, 'horzAlign'):
						self['horzAlign']));
			self['setCellVerticalAlignment'](widget, (($attr9=($attr10=self)['vertAlign']) == null || (($attr10.__is_instance__) && typeof $attr9 == 'function') || (typeof $attr9['__get__'] == 'function')?
						$p['getattr']($attr10, 'vertAlign'):
						self['vertAlign']));
			self['dock_children']['append'](widget);
			self['realizeTable'](widget);
			return null;
		}
	, 1, [null,null,['self'],['widget'],['direction']]);
		$cls_definition['add'] = $method;
		$method = $pyjs__bind_method2('addIndexedItem', function(index, item) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
				item = arguments[2];
			}
			var $1,$2;
			self['add'](item, (typeof ($1=index).__array != 'undefined'?
				((typeof $1.__array[$2=1]) != 'undefined'?$1.__array[$2]:
					$1.__getitem__($2)):
					$1.__getitem__(1)));
			return null;
		}
	, 1, [null,null,['self'],['index'],['item']]);
		$cls_definition['addIndexedItem'] = $method;
		$method = $pyjs__bind_method2('getWidgetIndex', function(widget) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}
			var index,direction;
			index = self['dock_children']['index'](widget);
			direction = self['getWidgetDirection'](widget);
			return $p['tuple']([index, direction]);
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['getWidgetIndex'] = $method;
		$method = $pyjs__bind_method2('getIndexedChild', function(index) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}
			var direction,$4,$attr11,$3,$attr12;
			var $tupleassign1 = index;
			index = $tupleassign1.__getitem__(0);
			direction = $tupleassign1.__getitem__(1);
			return (typeof ($3=(($attr11=($attr12=self)['dock_children']) == null || (($attr12.__is_instance__) && typeof $attr11 == 'function') || (typeof $attr11['__get__'] == 'function')?
						$p['getattr']($attr12, 'dock_children'):
						self['dock_children'])).__array != 'undefined'?
				((typeof $3.__array[$4=index]) != 'undefined'?$3.__array[$4]:
					$3.__getitem__($4)):
					$3.__getitem__(index));
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['getIndexedChild'] = $method;
		$method = $pyjs__bind_method2('getWidgetDirection', function(widget) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}
			var $eq3,$eq4,$bool3,$attr14,$attr13;
			if ((($bool3=!(($eq3=widget['getParent']())===($eq4=self)&&$eq3===null?true:
				($eq3===null?false:($eq4===null?false:
					((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3.__cmp__=='function'?$eq3.__cmp__($eq4) === 0:
						((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4.__cmp__=='function'?$eq4.__cmp__($eq3) === 0:
							$eq3==$eq4)))))) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
				return null;
			}
			return (($attr13=($attr14=widget['getLayoutData']())['direction']) == null || (($attr14.__is_instance__) && typeof $attr13 == 'function') || (typeof $attr13['__get__'] == 'function')?
						$p['getattr']($attr14, 'direction'):
						widget['getLayoutData']()['direction']);
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['getWidgetDirection'] = $method;
		$method = $pyjs__bind_method2('__len__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr15,$attr16,$len1;
			return (($len1=(($attr15=($attr16=self)['dock_children']) == null || (($attr16.__is_instance__) && typeof $attr15 == 'function') || (typeof $attr15['__get__'] == 'function')?
						$p['getattr']($attr16, 'dock_children'):
						self['dock_children'])) === null?0:
				(typeof $len1.__array != 'undefined' ? $len1.__array.length:
					(typeof $len1.__len__ == 'function'?$len1.__len__():
						(typeof $len1.length != 'undefined'?$len1.length:
							$p['len']($len1)))));
		}
	, 1, [null,null,['self']]);
		$cls_definition['__len__'] = $method;
		$method = $pyjs__bind_method2('__iter__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['dock_children']['__iter__']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		$method = $pyjs__bind_method2('remove', function(widget) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}
			var $eq6,ret,$eq5,$attr18,$bool4,$bool5,$attr17;
			if ((($bool4=(($eq5=widget)===($eq6=(($attr17=($attr18=self)['center']) == null || (($attr18.__is_instance__) && typeof $attr17 == 'function') || (typeof $attr17['__get__'] == 'function')?
						$p['getattr']($attr18, 'center'):
						self['center']))&&$eq5===null?true:
				($eq5===null?false:($eq6===null?false:
					((typeof $eq5=='object'||typeof $eq5=='function')&&typeof $eq5.__cmp__=='function'?$eq5.__cmp__($eq6) === 0:
						((typeof $eq6=='object'||typeof $eq6=='function')&&typeof $eq6.__cmp__=='function'?$eq6.__cmp__($eq5) === 0:
							$eq5==$eq6)))))) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('center', null) : $p['setattr'](self, 'center', null);
			}
			ret = $m['CellPanel']['remove'](self, widget);
			if ((($bool5=ret) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
				self['dock_children']['remove'](widget);
				self['realizeTable'](null);
			}
			return ret;
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['remove'] = $method;
		$method = $pyjs__bind_method2('setCellHeight', function(widget, height) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
				height = arguments[2];
			}
			var $attr20,$attr21,$attr22,$attr23,$attr19,$bool6,data,$attr24;
			data = widget['getLayoutData']();
			data.__is_instance__ && typeof data.__setattr__ == 'function' ? data.__setattr__('height', height) : $p['setattr'](data, 'height', height);
			if ((($bool6=((($attr19=($attr20=data)['td']) == null || (($attr20.__is_instance__) && typeof $attr19 == 'function') || (typeof $attr19['__get__'] == 'function')?
						$p['getattr']($attr20, 'td'):
						data['td']) !== null)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
				$m['DOM']['setStyleAttribute']((($attr21=($attr22=data)['td']) == null || (($attr22.__is_instance__) && typeof $attr21 == 'function') || (typeof $attr21['__get__'] == 'function')?
							$p['getattr']($attr22, 'td'):
							data['td']), 'height', (($attr23=($attr24=data)['height']) == null || (($attr24.__is_instance__) && typeof $attr23 == 'function') || (typeof $attr23['__get__'] == 'function')?
							$p['getattr']($attr24, 'height'):
							data['height']));
			}
			return null;
		}
	, 1, [null,null,['self'],['widget'],['height']]);
		$cls_definition['setCellHeight'] = $method;
		$method = $pyjs__bind_method2('setCellHorizontalAlignment', function(widget, align) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
				align = arguments[2];
			}
			var $attr30,$attr25,$attr26,$attr27,$attr28,$attr29,data,$bool7;
			data = widget['getLayoutData']();
			data.__is_instance__ && typeof data.__setattr__ == 'function' ? data.__setattr__('hAlign', align) : $p['setattr'](data, 'hAlign', align);
			if ((($bool7=((($attr25=($attr26=data)['td']) == null || (($attr26.__is_instance__) && typeof $attr25 == 'function') || (typeof $attr25['__get__'] == 'function')?
						$p['getattr']($attr26, 'td'):
						data['td']) !== null)) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
				$m['DOM']['setAttribute']((($attr27=($attr28=data)['td']) == null || (($attr28.__is_instance__) && typeof $attr27 == 'function') || (typeof $attr27['__get__'] == 'function')?
							$p['getattr']($attr28, 'td'):
							data['td']), 'align', (($attr29=($attr30=data)['hAlign']) == null || (($attr30.__is_instance__) && typeof $attr29 == 'function') || (typeof $attr29['__get__'] == 'function')?
							$p['getattr']($attr30, 'hAlign'):
							data['hAlign']));
			}
			return null;
		}
	, 1, [null,null,['self'],['widget'],['align']]);
		$cls_definition['setCellHorizontalAlignment'] = $method;
		$method = $pyjs__bind_method2('setCellVerticalAlignment', function(widget, align) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
				align = arguments[2];
			}
			var $attr33,$attr32,$attr31,$attr36,$attr35,$attr34,$bool8,data;
			data = widget['getLayoutData']();
			data.__is_instance__ && typeof data.__setattr__ == 'function' ? data.__setattr__('vAlign', align) : $p['setattr'](data, 'vAlign', align);
			if ((($bool8=((($attr31=($attr32=data)['td']) == null || (($attr32.__is_instance__) && typeof $attr31 == 'function') || (typeof $attr31['__get__'] == 'function')?
						$p['getattr']($attr32, 'td'):
						data['td']) !== null)) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
				$m['DOM']['setStyleAttribute']((($attr33=($attr34=data)['td']) == null || (($attr34.__is_instance__) && typeof $attr33 == 'function') || (typeof $attr33['__get__'] == 'function')?
							$p['getattr']($attr34, 'td'):
							data['td']), 'verticalAlign', (($attr35=($attr36=data)['vAlign']) == null || (($attr36.__is_instance__) && typeof $attr35 == 'function') || (typeof $attr35['__get__'] == 'function')?
							$p['getattr']($attr36, 'vAlign'):
							data['vAlign']));
			}
			return null;
		}
	, 1, [null,null,['self'],['widget'],['align']]);
		$cls_definition['setCellVerticalAlignment'] = $method;
		$method = $pyjs__bind_method2('setCellWidth', function(widget, width) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
				width = arguments[2];
			}
			var $bool9,$attr37,$attr40,$attr41,$attr42,$attr39,$attr38,data;
			data = widget['getLayoutData']();
			data.__is_instance__ && typeof data.__setattr__ == 'function' ? data.__setattr__('width', width) : $p['setattr'](data, 'width', width);
			if ((($bool9=((($attr37=($attr38=data)['td']) == null || (($attr38.__is_instance__) && typeof $attr37 == 'function') || (typeof $attr37['__get__'] == 'function')?
						$p['getattr']($attr38, 'td'):
						data['td']) !== null)) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
				$m['DOM']['setStyleAttribute']((($attr39=($attr40=data)['td']) == null || (($attr40.__is_instance__) && typeof $attr39 == 'function') || (typeof $attr39['__get__'] == 'function')?
							$p['getattr']($attr40, 'td'):
							data['td']), 'width', (($attr41=($attr42=data)['width']) == null || (($attr42.__is_instance__) && typeof $attr41 == 'function') || (typeof $attr41['__get__'] == 'function')?
							$p['getattr']($attr42, 'width'):
							data['width']));
			}
			return null;
		}
	, 1, [null,null,['self'],['widget'],['width']]);
		$cls_definition['setCellWidth'] = $method;
		$method = $pyjs__bind_method2('realizeTable', function(beingAdded) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				beingAdded = arguments[1];
			}
			var $bool18,$bool19,$bool10,$bool11,$bool12,$bool13,$bool14,$bool15,$bool16,$iter1_iter,$bool20,$attr91,$eq19,row,$attr82,$attr83,$attr80,$attr81,layout,$attr87,$attr84,$attr85,$attr88,$attr89,$attr106,$attr107,$attr104,$attr105,$attr102,$iter3_iter,$attr100,$attr101,td,$attr108,$attr109,$iter2_type,$eq21,$eq20,$eq23,$17,eastCol,$eq24,$bool17,$eq18,$add16,$attr79,$attr78,$attr77,$attr76,$attr75,$attr74,$attr73,$attr72,$attr71,$attr70,$attr111,$attr110,$attr113,dir,$attr112,$attr114,$attr68,$attr69,$iter2_iter,bodyElement,$attr64,$attr65,$attr66,$attr67,$attr60,$attr61,$attr62,$attr63,$eq16,$eq17,$add7,$iter1_nextval,$sub13,$sub12,$sub11,$sub10,$sub16,$sub15,$sub14,$attr86,$attr59,$attr58,$add15,$attr51,$attr50,$attr53,$attr52,$attr55,$attr54,$attr57,$attr56,$iter2_array,westCol,$iter3_array,$attr46,$attr47,$attr44,$attr45,$attr43,$eq10,$eq11,$eq12,$eq13,$eq14,$eq15,$attr48,$attr49,rows,$add18,$iter3_nextval,$iter1_array,$attr103,$add13,$iter2_idx,$8,child,$6,$7,$5,$attr90,$14,$15,$16,$iter2_nextval,$10,$11,$12,$13,northRow,$18,$19,$add3,colCount,$add6,$iter1_idx,$add4,$add5,$add8,$add9,$attr98,centerTd,$iter3_idx,$21,$20,$22,$sub9,$sub8,$sub3,$sub2,$sub1,$sub7,$sub6,$sub5,$sub4,$or4,$eq8,$eq9,$or1,$or3,$or2,$eq7,$add14,rowCount,$9,$add17,$add10,$add11,$add12,$iter3_type,$attr92,$add19,$attr95,$attr94,$attr97,$attr96,$cmp1,$iter1_type,$attr93,$cmp2,i,$attr99,southRow,$eq22,$add20;
			bodyElement = self['getBody']();
			while ((($bool10=((($cmp1=$m['DOM']['getChildCount'](bodyElement))===($cmp2=0)?0:
				(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
					($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
					$p['cmp']($cmp1, $cmp2))) == 1)) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
				$m['DOM']['removeChild'](bodyElement, $m['DOM']['getChild'](bodyElement, 0));
			}
			rowCount = 1;
			colCount = 1;
			$iter1_iter = self['dock_children'];
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				child = $iter1_nextval;
				dir = (($attr43=($attr44=child['getLayoutData']())['direction']) == null || (($attr44.__is_instance__) && typeof $attr43 == 'function') || (typeof $attr43['__get__'] == 'function')?
							$p['getattr']($attr44, 'direction'):
							child['getLayoutData']()['direction']);
				if ((($bool12=((($bool11=$or1=(($eq7=dir)===($eq8=(($attr45=($attr46=self)['NORTH']) == null || (($attr46.__is_instance__) && typeof $attr45 == 'function') || (typeof $attr45['__get__'] == 'function')?
							$p['getattr']($attr46, 'NORTH'):
							self['NORTH']))&&$eq7===null?true:
					($eq7===null?false:($eq8===null?false:
						((typeof $eq7=='object'||typeof $eq7=='function')&&typeof $eq7.__cmp__=='function'?$eq7.__cmp__($eq8) === 0:
							((typeof $eq8=='object'||typeof $eq8=='function')&&typeof $eq8.__cmp__=='function'?$eq8.__cmp__($eq7) === 0:
								$eq7==$eq8)))))) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
					false :
					(typeof $bool11=='object'?
						(typeof $bool11.__nonzero__=='function'?
							$bool11.__nonzero__() :
							(typeof $bool11.__len__=='function'?
								($bool11.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or1:(($eq9=dir)===($eq10=(($attr47=($attr48=self)['SOUTH']) == null || (($attr48.__is_instance__) && typeof $attr47 == 'function') || (typeof $attr47['__get__'] == 'function')?
							$p['getattr']($attr48, 'SOUTH'):
							self['SOUTH']))&&$eq9===null?true:
					($eq9===null?false:($eq10===null?false:
						((typeof $eq9=='object'||typeof $eq9=='function')&&typeof $eq9.__cmp__=='function'?$eq9.__cmp__($eq10) === 0:
							((typeof $eq10=='object'||typeof $eq10=='function')&&typeof $eq10.__cmp__=='function'?$eq10.__cmp__($eq9) === 0:
								$eq9==$eq10))))))) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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
					rowCount = (typeof ($add3=rowCount)==typeof ($add4=1) && (typeof $add3=='number'||typeof $add3=='string')?
						$add3+$add4:
						$p['op_add']($add3,$add4));
				}
				else if ((($bool14=((($bool13=$or3=(($eq11=dir)===($eq12=(($attr49=($attr50=self)['EAST']) == null || (($attr50.__is_instance__) && typeof $attr49 == 'function') || (typeof $attr49['__get__'] == 'function')?
							$p['getattr']($attr50, 'EAST'):
							self['EAST']))&&$eq11===null?true:
					($eq11===null?false:($eq12===null?false:
						((typeof $eq11=='object'||typeof $eq11=='function')&&typeof $eq11.__cmp__=='function'?$eq11.__cmp__($eq12) === 0:
							((typeof $eq12=='object'||typeof $eq12=='function')&&typeof $eq12.__cmp__=='function'?$eq12.__cmp__($eq11) === 0:
								$eq11==$eq12)))))) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
					false :
					(typeof $bool13=='object'?
						(typeof $bool13.__nonzero__=='function'?
							$bool13.__nonzero__() :
							(typeof $bool13.__len__=='function'?
								($bool13.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or3:(($eq13=dir)===($eq14=(($attr51=($attr52=self)['WEST']) == null || (($attr52.__is_instance__) && typeof $attr51 == 'function') || (typeof $attr51['__get__'] == 'function')?
							$p['getattr']($attr52, 'WEST'):
							self['WEST']))&&$eq13===null?true:
					($eq13===null?false:($eq14===null?false:
						((typeof $eq13=='object'||typeof $eq13=='function')&&typeof $eq13.__cmp__=='function'?$eq13.__cmp__($eq14) === 0:
							((typeof $eq14=='object'||typeof $eq14=='function')&&typeof $eq14.__cmp__=='function'?$eq14.__cmp__($eq13) === 0:
								$eq13==$eq14))))))) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
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
					colCount = (typeof ($add5=colCount)==typeof ($add6=1) && (typeof $add5=='number'||typeof $add5=='string')?
						$add5+$add6:
						$p['op_add']($add5,$add6));
				}
			}
			rows = $p['list']([]);
			$iter2_iter = $p['range'](rowCount);
			if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
				$iter2_type = 0;
			} else {
				$iter2_iter = $iter2_iter.__iter__();
				$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter2_idx = 0;
			while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
				i = $iter2_nextval;
				rows['append']($m['DockPanelTmpRow']());
				(typeof ($5=rows).__array != 'undefined'?
					((typeof $5.__array[$6=i]) != 'undefined'?$5.__array[$6]:
						$5.__getitem__($6)):
						$5.__getitem__(i)).__is_instance__ && typeof (typeof ($5=rows).__array != 'undefined'?
					((typeof $5.__array[$6=i]) != 'undefined'?$5.__array[$6]:
						$5.__getitem__($6)):
						$5.__getitem__(i)).__setattr__ == 'function' ? (typeof ($5=rows).__array != 'undefined'?
					((typeof $5.__array[$6=i]) != 'undefined'?$5.__array[$6]:
						$5.__getitem__($6)):
						$5.__getitem__(i)).__setattr__('tr', $m['DOM']['createTR']()) : $p['setattr']((typeof ($5=rows).__array != 'undefined'?
					((typeof $5.__array[$6=i]) != 'undefined'?$5.__array[$6]:
						$5.__getitem__($6)):
						$5.__getitem__(i)), 'tr', $m['DOM']['createTR']());
				$m['DOM']['appendChild'](bodyElement, (($attr53=($attr54=(typeof ($7=rows).__array != 'undefined'?
					((typeof $7.__array[$8=i]) != 'undefined'?$7.__array[$8]:
						$7.__getitem__($8)):
						$7.__getitem__(i)))['tr']) == null || (($attr54.__is_instance__) && typeof $attr53 == 'function') || (typeof $attr53['__get__'] == 'function')?
							$p['getattr']($attr54, 'tr'):
							(typeof ($7=rows).__array != 'undefined'?
					((typeof $7.__array[$8=i]) != 'undefined'?$7.__array[$8]:
						$7.__getitem__($8)):
						$7.__getitem__(i))['tr']));
			}
			westCol = 0;
			eastCol = (typeof ($sub1=colCount)==typeof ($sub2=1) && (typeof $sub1=='number'||typeof $sub1=='string')?
				$sub1-$sub2:
				$p['op_sub']($sub1,$sub2));
			northRow = 0;
			southRow = (typeof ($sub3=rowCount)==typeof ($sub4=1) && (typeof $sub3=='number'||typeof $sub3=='string')?
				$sub3-$sub4:
				$p['op_sub']($sub3,$sub4));
			centerTd = null;
			$iter3_iter = self['dock_children'];
			if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
				$iter3_type = 0;
			} else {
				$iter3_iter = $iter3_iter.__iter__();
				$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter3_idx = 0;
			while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
				child = $iter3_nextval;
				layout = child['getLayoutData']();
				td = $m['DOM']['createTD']();
				layout.__is_instance__ && typeof layout.__setattr__ == 'function' ? layout.__setattr__('td', td) : $p['setattr'](layout, 'td', td);
				$m['DOM']['setAttribute']((($attr55=($attr56=layout)['td']) == null || (($attr56.__is_instance__) && typeof $attr55 == 'function') || (typeof $attr55['__get__'] == 'function')?
							$p['getattr']($attr56, 'td'):
							layout['td']), 'align', (($attr57=($attr58=layout)['hAlign']) == null || (($attr58.__is_instance__) && typeof $attr57 == 'function') || (typeof $attr57['__get__'] == 'function')?
							$p['getattr']($attr58, 'hAlign'):
							layout['hAlign']));
				$m['DOM']['setStyleAttribute']((($attr59=($attr60=layout)['td']) == null || (($attr60.__is_instance__) && typeof $attr59 == 'function') || (typeof $attr59['__get__'] == 'function')?
							$p['getattr']($attr60, 'td'):
							layout['td']), 'verticalAlign', (($attr61=($attr62=layout)['vAlign']) == null || (($attr62.__is_instance__) && typeof $attr61 == 'function') || (typeof $attr61['__get__'] == 'function')?
							$p['getattr']($attr62, 'vAlign'):
							layout['vAlign']));
				$m['DOM']['setAttribute']((($attr63=($attr64=layout)['td']) == null || (($attr64.__is_instance__) && typeof $attr63 == 'function') || (typeof $attr63['__get__'] == 'function')?
							$p['getattr']($attr64, 'td'):
							layout['td']), 'width', (($attr65=($attr66=layout)['width']) == null || (($attr66.__is_instance__) && typeof $attr65 == 'function') || (typeof $attr65['__get__'] == 'function')?
							$p['getattr']($attr66, 'width'):
							layout['width']));
				$m['DOM']['setAttribute']((($attr67=($attr68=layout)['td']) == null || (($attr68.__is_instance__) && typeof $attr67 == 'function') || (typeof $attr67['__get__'] == 'function')?
							$p['getattr']($attr68, 'td'):
							layout['td']), 'height', (($attr69=($attr70=layout)['height']) == null || (($attr70.__is_instance__) && typeof $attr69 == 'function') || (typeof $attr69['__get__'] == 'function')?
							$p['getattr']($attr70, 'height'):
							layout['height']));
				if ((($bool15=(($eq15=(($attr71=($attr72=layout)['direction']) == null || (($attr72.__is_instance__) && typeof $attr71 == 'function') || (typeof $attr71['__get__'] == 'function')?
							$p['getattr']($attr72, 'direction'):
							layout['direction']))===($eq16=(($attr73=($attr74=self)['NORTH']) == null || (($attr74.__is_instance__) && typeof $attr73 == 'function') || (typeof $attr73['__get__'] == 'function')?
							$p['getattr']($attr74, 'NORTH'):
							self['NORTH']))&&$eq15===null?true:
					($eq15===null?false:($eq16===null?false:
						((typeof $eq15=='object'||typeof $eq15=='function')&&typeof $eq15.__cmp__=='function'?$eq15.__cmp__($eq16) === 0:
							((typeof $eq16=='object'||typeof $eq16=='function')&&typeof $eq16.__cmp__=='function'?$eq16.__cmp__($eq15) === 0:
								$eq15==$eq16)))))) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
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
					$m['DOM']['insertChild']((($attr75=($attr76=(typeof ($9=rows).__array != 'undefined'?
						((typeof $9.__array[$10=northRow]) != 'undefined'?$9.__array[$10]:
							$9.__getitem__($10)):
							$9.__getitem__(northRow)))['tr']) == null || (($attr76.__is_instance__) && typeof $attr75 == 'function') || (typeof $attr75['__get__'] == 'function')?
								$p['getattr']($attr76, 'tr'):
								(typeof ($9=rows).__array != 'undefined'?
						((typeof $9.__array[$10=northRow]) != 'undefined'?$9.__array[$10]:
							$9.__getitem__($10)):
							$9.__getitem__(northRow))['tr']), td, (($attr77=($attr78=(typeof ($11=rows).__array != 'undefined'?
						((typeof $11.__array[$12=northRow]) != 'undefined'?$11.__array[$12]:
							$11.__getitem__($12)):
							$11.__getitem__(northRow)))['center']) == null || (($attr78.__is_instance__) && typeof $attr77 == 'function') || (typeof $attr77['__get__'] == 'function')?
								$p['getattr']($attr78, 'center'):
								(typeof ($11=rows).__array != 'undefined'?
						((typeof $11.__array[$12=northRow]) != 'undefined'?$11.__array[$12]:
							$11.__getitem__($12)):
							$11.__getitem__(northRow))['center']));
					self['appendAndMaybeAdopt'](td, child['getElement'](), beingAdded);
					$m['DOM']['setIntAttribute'](td, 'colSpan', (typeof ($add7=(typeof ($sub5=eastCol)==typeof ($sub6=westCol) && (typeof $sub5=='number'||typeof $sub5=='string')?
						$sub5-$sub6:
						$p['op_sub']($sub5,$sub6)))==typeof ($add8=1) && (typeof $add7=='number'||typeof $add7=='string')?
						$add7+$add8:
						$p['op_add']($add7,$add8)));
					northRow = (typeof ($add9=northRow)==typeof ($add10=1) && (typeof $add9=='number'||typeof $add9=='string')?
						$add9+$add10:
						$p['op_add']($add9,$add10));
				}
				else if ((($bool16=(($eq17=(($attr79=($attr80=layout)['direction']) == null || (($attr80.__is_instance__) && typeof $attr79 == 'function') || (typeof $attr79['__get__'] == 'function')?
							$p['getattr']($attr80, 'direction'):
							layout['direction']))===($eq18=(($attr81=($attr82=self)['SOUTH']) == null || (($attr82.__is_instance__) && typeof $attr81 == 'function') || (typeof $attr81['__get__'] == 'function')?
							$p['getattr']($attr82, 'SOUTH'):
							self['SOUTH']))&&$eq17===null?true:
					($eq17===null?false:($eq18===null?false:
						((typeof $eq17=='object'||typeof $eq17=='function')&&typeof $eq17.__cmp__=='function'?$eq17.__cmp__($eq18) === 0:
							((typeof $eq18=='object'||typeof $eq18=='function')&&typeof $eq18.__cmp__=='function'?$eq18.__cmp__($eq17) === 0:
								$eq17==$eq18)))))) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
						false :
						(typeof $bool16=='object'?
							(typeof $bool16.__nonzero__=='function'?
								$bool16.__nonzero__() :
								(typeof $bool16.__len__=='function'?
									($bool16.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$m['DOM']['insertChild']((($attr83=($attr84=(typeof ($13=rows).__array != 'undefined'?
						((typeof $13.__array[$14=southRow]) != 'undefined'?$13.__array[$14]:
							$13.__getitem__($14)):
							$13.__getitem__(southRow)))['tr']) == null || (($attr84.__is_instance__) && typeof $attr83 == 'function') || (typeof $attr83['__get__'] == 'function')?
								$p['getattr']($attr84, 'tr'):
								(typeof ($13=rows).__array != 'undefined'?
						((typeof $13.__array[$14=southRow]) != 'undefined'?$13.__array[$14]:
							$13.__getitem__($14)):
							$13.__getitem__(southRow))['tr']), td, (($attr85=($attr86=(typeof ($15=rows).__array != 'undefined'?
						((typeof $15.__array[$16=southRow]) != 'undefined'?$15.__array[$16]:
							$15.__getitem__($16)):
							$15.__getitem__(southRow)))['center']) == null || (($attr86.__is_instance__) && typeof $attr85 == 'function') || (typeof $attr85['__get__'] == 'function')?
								$p['getattr']($attr86, 'center'):
								(typeof ($15=rows).__array != 'undefined'?
						((typeof $15.__array[$16=southRow]) != 'undefined'?$15.__array[$16]:
							$15.__getitem__($16)):
							$15.__getitem__(southRow))['center']));
					self['appendAndMaybeAdopt'](td, child['getElement'](), beingAdded);
					$m['DOM']['setIntAttribute'](td, 'colSpan', (typeof ($add11=(typeof ($sub7=eastCol)==typeof ($sub8=westCol) && (typeof $sub7=='number'||typeof $sub7=='string')?
						$sub7-$sub8:
						$p['op_sub']($sub7,$sub8)))==typeof ($add12=1) && (typeof $add11=='number'||typeof $add11=='string')?
						$add11+$add12:
						$p['op_add']($add11,$add12)));
					southRow = (typeof ($sub9=southRow)==typeof ($sub10=1) && (typeof $sub9=='number'||typeof $sub9=='string')?
						$sub9-$sub10:
						$p['op_sub']($sub9,$sub10));
				}
				else if ((($bool17=(($eq19=(($attr87=($attr88=layout)['direction']) == null || (($attr88.__is_instance__) && typeof $attr87 == 'function') || (typeof $attr87['__get__'] == 'function')?
							$p['getattr']($attr88, 'direction'):
							layout['direction']))===($eq20=(($attr89=($attr90=self)['WEST']) == null || (($attr90.__is_instance__) && typeof $attr89 == 'function') || (typeof $attr89['__get__'] == 'function')?
							$p['getattr']($attr90, 'WEST'):
							self['WEST']))&&$eq19===null?true:
					($eq19===null?false:($eq20===null?false:
						((typeof $eq19=='object'||typeof $eq19=='function')&&typeof $eq19.__cmp__=='function'?$eq19.__cmp__($eq20) === 0:
							((typeof $eq20=='object'||typeof $eq20=='function')&&typeof $eq20.__cmp__=='function'?$eq20.__cmp__($eq19) === 0:
								$eq19==$eq20)))))) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
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
					row = (typeof ($17=rows).__array != 'undefined'?
						((typeof $17.__array[$18=northRow]) != 'undefined'?$17.__array[$18]:
							$17.__getitem__($18)):
							$17.__getitem__(northRow));
					$m['DOM']['insertChild']((($attr91=($attr92=row)['tr']) == null || (($attr92.__is_instance__) && typeof $attr91 == 'function') || (typeof $attr91['__get__'] == 'function')?
								$p['getattr']($attr92, 'tr'):
								row['tr']), td, (($attr93=($attr94=row)['center']) == null || (($attr94.__is_instance__) && typeof $attr93 == 'function') || (typeof $attr93['__get__'] == 'function')?
								$p['getattr']($attr94, 'center'):
								row['center']));
					row.__is_instance__ && typeof row.__setattr__ == 'function' ? row.__setattr__('center', (typeof ($add13=(($attr95=($attr96=row)['center']) == null || (($attr96.__is_instance__) && typeof $attr95 == 'function') || (typeof $attr95['__get__'] == 'function')?
								$p['getattr']($attr96, 'center'):
								row['center']))==typeof ($add14=1) && (typeof $add13=='number'||typeof $add13=='string')?
						$add13+$add14:
						$p['op_add']($add13,$add14))) : $p['setattr'](row, 'center', (typeof ($add13=(($attr95=($attr96=row)['center']) == null || (($attr96.__is_instance__) && typeof $attr95 == 'function') || (typeof $attr95['__get__'] == 'function')?
								$p['getattr']($attr96, 'center'):
								row['center']))==typeof ($add14=1) && (typeof $add13=='number'||typeof $add13=='string')?
						$add13+$add14:
						$p['op_add']($add13,$add14)));
					self['appendAndMaybeAdopt'](td, child['getElement'](), beingAdded);
					$m['DOM']['setIntAttribute'](td, 'rowSpan', (typeof ($add15=(typeof ($sub11=southRow)==typeof ($sub12=northRow) && (typeof $sub11=='number'||typeof $sub11=='string')?
						$sub11-$sub12:
						$p['op_sub']($sub11,$sub12)))==typeof ($add16=1) && (typeof $add15=='number'||typeof $add15=='string')?
						$add15+$add16:
						$p['op_add']($add15,$add16)));
					westCol = (typeof ($add17=westCol)==typeof ($add18=1) && (typeof $add17=='number'||typeof $add17=='string')?
						$add17+$add18:
						$p['op_add']($add17,$add18));
				}
				else if ((($bool18=(($eq21=(($attr97=($attr98=layout)['direction']) == null || (($attr98.__is_instance__) && typeof $attr97 == 'function') || (typeof $attr97['__get__'] == 'function')?
							$p['getattr']($attr98, 'direction'):
							layout['direction']))===($eq22=(($attr99=($attr100=self)['EAST']) == null || (($attr100.__is_instance__) && typeof $attr99 == 'function') || (typeof $attr99['__get__'] == 'function')?
							$p['getattr']($attr100, 'EAST'):
							self['EAST']))&&$eq21===null?true:
					($eq21===null?false:($eq22===null?false:
						((typeof $eq21=='object'||typeof $eq21=='function')&&typeof $eq21.__cmp__=='function'?$eq21.__cmp__($eq22) === 0:
							((typeof $eq22=='object'||typeof $eq22=='function')&&typeof $eq22.__cmp__=='function'?$eq22.__cmp__($eq21) === 0:
								$eq21==$eq22)))))) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
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
					row = (typeof ($19=rows).__array != 'undefined'?
						((typeof $19.__array[$20=northRow]) != 'undefined'?$19.__array[$20]:
							$19.__getitem__($20)):
							$19.__getitem__(northRow));
					$m['DOM']['insertChild']((($attr101=($attr102=row)['tr']) == null || (($attr102.__is_instance__) && typeof $attr101 == 'function') || (typeof $attr101['__get__'] == 'function')?
								$p['getattr']($attr102, 'tr'):
								row['tr']), td, (($attr103=($attr104=row)['center']) == null || (($attr104.__is_instance__) && typeof $attr103 == 'function') || (typeof $attr103['__get__'] == 'function')?
								$p['getattr']($attr104, 'center'):
								row['center']));
					self['appendAndMaybeAdopt'](td, child['getElement'](), beingAdded);
					$m['DOM']['setIntAttribute'](td, 'rowSpan', (typeof ($add19=(typeof ($sub13=southRow)==typeof ($sub14=northRow) && (typeof $sub13=='number'||typeof $sub13=='string')?
						$sub13-$sub14:
						$p['op_sub']($sub13,$sub14)))==typeof ($add20=1) && (typeof $add19=='number'||typeof $add19=='string')?
						$add19+$add20:
						$p['op_add']($add19,$add20)));
					eastCol = (typeof ($sub15=eastCol)==typeof ($sub16=1) && (typeof $sub15=='number'||typeof $sub15=='string')?
						$sub15-$sub16:
						$p['op_sub']($sub15,$sub16));
				}
				else if ((($bool19=(($eq23=(($attr105=($attr106=layout)['direction']) == null || (($attr106.__is_instance__) && typeof $attr105 == 'function') || (typeof $attr105['__get__'] == 'function')?
							$p['getattr']($attr106, 'direction'):
							layout['direction']))===($eq24=(($attr107=($attr108=self)['CENTER']) == null || (($attr108.__is_instance__) && typeof $attr107 == 'function') || (typeof $attr107['__get__'] == 'function')?
							$p['getattr']($attr108, 'CENTER'):
							self['CENTER']))&&$eq23===null?true:
					($eq23===null?false:($eq24===null?false:
						((typeof $eq23=='object'||typeof $eq23=='function')&&typeof $eq23.__cmp__=='function'?$eq23.__cmp__($eq24) === 0:
							((typeof $eq24=='object'||typeof $eq24=='function')&&typeof $eq24.__cmp__=='function'?$eq24.__cmp__($eq23) === 0:
								$eq23==$eq24)))))) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
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
					centerTd = td;
				}
			}
			if ((($bool20=((($attr109=($attr110=self)['center']) == null || (($attr110.__is_instance__) && typeof $attr109 == 'function') || (typeof $attr109['__get__'] == 'function')?
						$p['getattr']($attr110, 'center'):
						self['center']) !== null)) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
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
				row = (typeof ($21=rows).__array != 'undefined'?
					((typeof $21.__array[$22=northRow]) != 'undefined'?$21.__array[$22]:
						$21.__getitem__($22)):
						$21.__getitem__(northRow));
				$m['DOM']['insertChild']((($attr111=($attr112=row)['tr']) == null || (($attr112.__is_instance__) && typeof $attr111 == 'function') || (typeof $attr111['__get__'] == 'function')?
							$p['getattr']($attr112, 'tr'):
							row['tr']), centerTd, (($attr113=($attr114=row)['center']) == null || (($attr114.__is_instance__) && typeof $attr113 == 'function') || (typeof $attr113['__get__'] == 'function')?
							$p['getattr']($attr114, 'center'):
							row['center']));
				self['appendAndMaybeAdopt'](centerTd, self['center']['getElement'](), beingAdded);
			}
			return null;
		}
	, 1, [null,null,['self'],['beingAdded']]);
		$cls_definition['realizeTable'] = $method;
		$method = $pyjs__bind_method2('appendAndMaybeAdopt', function(parent, child, beingAdded) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				parent = arguments[1];
				child = arguments[2];
				beingAdded = arguments[3];
			}
			var $bool21,$bool22;
			if ((($bool21=(beingAdded !== null)) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
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
				if ((($bool22=$m['DOM']['compare'](child, beingAdded['getElement']())) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
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
					$m['CellPanel']['add'](self, beingAdded, parent);
					return null;
				}
			}
			$m['DOM']['appendChild'](parent, child);
			return null;
		}
	, 1, [null,null,['self'],['parent'],['child'],['beingAdded']]);
		$cls_definition['appendAndMaybeAdopt'] = $method;
		var $bases = new Array($m['CellPanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('DockPanel', $p['tuple']($bases), $data);
	})();
	$m['Factory']['registerClass']('pyjamas.ui.DockPanel', 'DockPanel', $m['DockPanel']);
	return this;
}; /* end gwt.ui.DockPanel */


/* end module: gwt.ui.DockPanel */


/*
PYJS_DEPS: ['pyjamas.Factory', 'pyjamas', 'pyjamas.DOM', 'pyjamas.ui.CellPanel.CellPanel', 'pyjamas.ui', 'pyjamas.ui.CellPanel', 'pyjamas.ui.HasHorizontalAlignment', 'pyjamas.ui.HasVerticalAlignment']
*/
