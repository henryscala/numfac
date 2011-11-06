/* start module: gwt.ui.HTMLPanel */
$pyjs.loaded_modules['gwt.ui.HTMLPanel'] = function (__mod_name__) {
	if($pyjs.loaded_modules['gwt.ui.HTMLPanel'].__was_initialized__) return $pyjs.loaded_modules['gwt.ui.HTMLPanel'];
	if(typeof $pyjs.loaded_modules['gwt.ui'] == 'undefined' || !$pyjs.loaded_modules['gwt.ui'].__was_initialized__) $p['___import___']('gwt.ui', null);
	var $m = $pyjs.loaded_modules["gwt.ui.HTMLPanel"];
	$m.__repr__ = function() { return "<module: gwt.ui.HTMLPanel>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'gwt.ui.HTMLPanel';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['gwt.ui']['HTMLPanel'] = $pyjs.loaded_modules['gwt.ui.HTMLPanel'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'gwt.ui', null, false);
	$m['Factory'] = $p['___import___']('pyjamas.Factory', 'gwt.ui', null, false);
	$m['InnerHTML'] = $p['___import___']('pyjamas.ui.InnerHTML.InnerHTML', 'gwt.ui', null, false);
	$m['ComplexPanel'] = $p['___import___']('pyjamas.ui.ComplexPanel.ComplexPanel', 'gwt.ui', null, false);
	$m['HTMLPanel_sUid'] = 0;
	$m['getElementsByTagName'] = function(element, tagname) {
		var el,$bool1,$eq1,res,$iter1_type,$bool3,$attr1,$and1,$and2,$attr2,child,$bool2,$eq2,$pyjs_try_err,$iter1_array,element_tagname,$iter1_nextval,$iter1_iter,$iter1_idx;
		try {
			element_tagname = (($attr1=($attr2=element)['nodeName']) == null || (($attr2.__is_instance__) && typeof $attr1 == 'function') || (typeof $attr1['__get__'] == 'function')?
						$p['getattr']($attr2, 'nodeName'):
						element['nodeName']);
			element_tagname = $p['str'](element_tagname)['lower']();
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
			$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
			if (true) {
				element_tagname = null;
			}
		}
		if ((($bool2=((($bool1=$and1=(element_tagname !== null)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
			false :
			(typeof $bool1=='object'?
				(typeof $bool1.__nonzero__=='function'?
					$bool1.__nonzero__() :
					(typeof $bool1.__len__=='function'?
						($bool1.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )?(($eq1=element_tagname)===($eq2=tagname)&&$eq1===null?true:
			($eq1===null?false:($eq2===null?false:
				((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1.__cmp__=='function'?$eq1.__cmp__($eq2) === 0:
					((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2.__cmp__=='function'?$eq2.__cmp__($eq1) === 0:
						$eq1==$eq2))))):$and1)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
			return $p['list']([element]);
		}
		res = $p['list']([]);
		child = $m['DOM']['getFirstChild'](element);
		while ((($bool3=(child !== null)) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
			$iter1_iter = $m['getElementsByTagName'](child, tagname);
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				el = $iter1_nextval;
				res['append'](el);
			}
			child = $m['DOM']['getNextSibling'](child);
		}
		return res;
	};
	$m['getElementsByTagName'].__name__ = 'getElementsByTagName';

	$m['getElementsByTagName'].__bind_type__ = 0;
	$m['getElementsByTagName'].__args__ = [null,null,['element'],['tagname']];
	$m['getElementById'] = function(element, id) {
		var child,$eq3,$and3,$and4,$eq4,$pyjs_try_err,$bool6,ret,$bool4,$bool5,element_id,$bool7;
		try {
			element_id = $m['DOM']['getAttribute'](element, 'id');
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
			$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
			if (true) {
				element_id = null;
			}
		}
		if ((($bool5=((($bool4=$and3=(element_id !== null)) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
			false :
			(typeof $bool4=='object'?
				(typeof $bool4.__nonzero__=='function'?
					$bool4.__nonzero__() :
					(typeof $bool4.__len__=='function'?
						($bool4.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )?(($eq3=element_id)===($eq4=id)&&$eq3===null?true:
			($eq3===null?false:($eq4===null?false:
				((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3.__cmp__=='function'?$eq3.__cmp__($eq4) === 0:
					((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4.__cmp__=='function'?$eq4.__cmp__($eq3) === 0:
						$eq3==$eq4))))):$and3)) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
			return element;
		}
		child = $m['DOM']['getFirstChild'](element);
		while ((($bool6=(child !== null)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
			ret = $m['getElementById'](child, id);
			if ((($bool7=(ret !== null)) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
				return ret;
			}
			child = $m['DOM']['getNextSibling'](child);
		}
		return null;
	};
	$m['getElementById'].__name__ = 'getElementById';

	$m['getElementById'].__bind_type__ = 0;
	$m['getElementById'].__args__ = [null,null,['element'],['id']];
	$m['HTMLPanel'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'gwt.ui.HTMLPanel';
		$method = $pyjs__bind_method2('__init__', function(html) {
			if (this.__is_instance__ === true) {
				var self = this;
				var ka = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof ka != 'object' || ka.__name__ != 'dict' || typeof ka.$pyjs_is_kwarg == 'undefined') {
					var ka = arguments[arguments.length+1];
				} else {
					delete ka['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				html = arguments[1];
				var ka = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof ka != 'object' || ka.__name__ != 'dict' || typeof ka.$pyjs_is_kwarg == 'undefined') {
					ka = arguments[arguments.length+1];
				} else {
					delete ka['$pyjs_is_kwarg'];
				}
			}
			if (typeof ka == 'undefined') {
				ka = $p['__empty_dict']();
				if (typeof html != 'undefined') {
					if (html !== null && typeof html['$pyjs_is_kwarg'] != 'undefined') {
						ka = html;
						html = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						ka = self;
						self = arguments[2];
					}
				} else {
				}
			}
			var $or1,$or2,element,$bool8,$bool9;
			if ((($bool8=html) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
				ka.__setitem__('HTML', html);
			}
			element = ((($bool9=$or1=ka['pop']('Element', null)) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
				false :
				(typeof $bool9=='object'?
					(typeof $bool9.__nonzero__=='function'?
						$bool9.__nonzero__() :
						(typeof $bool9.__len__=='function'?
							($bool9.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or1:$m['DOM']['createDiv']());
			self['setElement'](element);
			$pyjs_kwargs_call($m['ComplexPanel'], '__init__', null, ka, [{}, self]);
			return null;
		}
	, 1, [null,['ka'],['self'],['html']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('add', function(widget, id) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
				id = arguments[2];
			}
			var $bool10,element;
			element = $m['getElementById'](self['getElement'](), id);
			if ((($bool10=(element === null)) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
				throw ($p['Exception']($p['sprintf']('HTMLPanel.add: no element with id \x27%s\x27', $p['str'](id))));
			}
			$m['ComplexPanel']['add'](self, widget, element);
			return null;
		}
	, 1, [null,null,['self'],['widget'],['id']]);
		$cls_definition['add'] = $method;
		$method = $pyjs__bind_method2('findTags', function(tagname) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				tagname = arguments[1];
			}

			return $m['getElementsByTagName'](self['getElement'](), tagname);
		}
	, 1, [null,null,['self'],['tagname']]);
		$cls_definition['findTags'] = $method;
		$method = $pyjs__bind_method2('createUniqueId', function() {
			var $add2,$add1;
			$m['HTMLPanel_sUid'] = (typeof ($add1=$m['HTMLPanel_sUid'])==typeof ($add2=1) && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				$p['op_add']($add1,$add2));
			return $p['sprintf']('HTMLPanel_%d', $m['HTMLPanel_sUid']);
		}
	, 3, [null,null]);
		$cls_definition['createUniqueId'] = $method;
		var $bases = new Array($m['ComplexPanel'],$m['InnerHTML']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('HTMLPanel', $p['tuple']($bases), $data);
	})();
	$m['Factory']['registerClass']('pyjamas.ui.HTMLPanel', 'HTMLPanel', $m['HTMLPanel']);
	return this;
}; /* end gwt.ui.HTMLPanel */


/* end module: gwt.ui.HTMLPanel */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.ui.InnerHTML.InnerHTML', 'pyjamas.ui', 'pyjamas.ui.InnerHTML', 'pyjamas.ui.ComplexPanel.ComplexPanel', 'pyjamas.ui.ComplexPanel']
*/
