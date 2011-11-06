/* start module: PageLoader */
$pyjs.loaded_modules['PageLoader'] = function (__mod_name__) {
	if($pyjs.loaded_modules['PageLoader'].__was_initialized__) return $pyjs.loaded_modules['PageLoader'];
	var $m = $pyjs.loaded_modules["PageLoader"];
	$m.__repr__ = function() { return "<module: PageLoader>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'PageLoader';
	$m.__name__ = __mod_name__;


	$m['process_question'] = function(qtxt) {
		var $iter1_nextval,$iter1_type,$or2,skip,question,$iter1_iter,$add2,$add1,$iter1_array,letter,$or1,$iter1_idx;
		question = '';
		skip = false;
		$iter1_iter = qtxt;
		$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
		while (typeof($p['__wrapped_next']($iter1_nextval).$nextval) != 'undefined') {
			letter = $iter1_nextval.$nextval;
			if ($p['bool']($p['op_eq'](letter, '\x3C'))) {
				skip = true;
			}
			if ($p['bool']($p['op_eq'](letter, '\x3E'))) {
				skip = false;
			}
			if ($p['bool'](skip)) {
				continue;
			}
			if ($p['bool'](($p['bool']($or1=letter['isalnum']())?$or1:$p['op_eq'](letter, ' ')))) {
				if ($p['bool']($p['op_eq'](letter, ' '))) {
					letter = '_';
				}
				question = $p['__op_add']($add1=question,$add2=letter['lower']());
			}
		}
		return question;
	};
	$m['process_question'].__name__ = 'process_question';

	$m['process_question'].__bind_type__ = 0;
	$m['process_question'].__args__ = [null,null,['qtxt']];
	$m['PageListLoader'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'PageLoader';
		$method = $pyjs__bind_method2('__init__', function(panel, purpose) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				panel = arguments[1];
				purpose = arguments[2];
			}

			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('panel', panel) : $p['setattr'](self, 'panel', panel);
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('purpose', purpose) : $p['setattr'](self, 'purpose', purpose);
			return null;
		}
	, 1, [null,null,['self'],['panel'],['purpose']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onCompletion', function(text) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
			}
			var $iter2_nextval,$iter2_type,$iter2_iter,$attr1,$attr2,$attr5,l,$attr4,$iter2_idx,fname,res,$attr6,$attr3,$iter2_array;
			res = $p['list']([]);
			$iter2_iter = text['$$split']('\x0A');
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval).$nextval) != 'undefined') {
				l = $iter2_nextval.$nextval;
				if ($p['bool'](!$p['bool'](l))) {
					continue;
				}
				if ($p['bool']($p['op_eq']((($attr1=($attr2=self)['purpose']) == null || (($attr2.__is_instance__) && typeof $attr1 == 'function') || (typeof $attr1['__get__'] == 'function')?
							$p['getattr']($attr2, 'purpose'):
							self['purpose']), 'contents'))) {
					l = l['$$split'](':');
					if ($p['bool'](!$p['op_eq']($p['len'](l), 2))) {
						continue;
					}
					res['append']($p['list']([l.__getitem__(0)['strip'](), l.__getitem__(1)['strip']()]));
				}
				else if ($p['bool']($p['op_eq']((($attr3=($attr4=self)['purpose']) == null || (($attr4.__is_instance__) && typeof $attr3 == 'function') || (typeof $attr3['__get__'] == 'function')?
							$p['getattr']($attr4, 'purpose'):
							self['purpose']), 'faq'))) {
					fname = $m['process_question'](l);
					res['append']($p['list']([l, $p['sprintf']('faq/answers/%s.html', fname)]));
				}
			}
			self['panel']['loadPages'](res, (($attr5=($attr6=self)['purpose']) == null || (($attr6.__is_instance__) && typeof $attr5 == 'function') || (typeof $attr5['__get__'] == 'function')?
						$p['getattr']($attr6, 'purpose'):
						self['purpose']));
			return null;
		}
	, 1, [null,null,['self'],['text']]);
		$cls_definition['onCompletion'] = $method;
		$method = $pyjs__bind_method2('onError', function(text, code) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
				code = arguments[2];
			}

			self['panel']['onError'](text, code);
			return null;
		}
	, 1, [null,null,['self'],['text'],['code']]);
		$cls_definition['onError'] = $method;
		$method = $pyjs__bind_method2('onTimeout', function(text) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
			}

			self['panel']['onTimeout'](text);
			return null;
		}
	, 1, [null,null,['self'],['text']]);
		$cls_definition['onTimeout'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('PageListLoader', $p['tuple']($bases), $data);
	})();
	$m['PageLoader'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'PageLoader';
		$method = $pyjs__bind_method2('__init__', function(panel, title, purpose) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				panel = arguments[1];
				title = arguments[2];
				purpose = arguments[3];
			}

			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('panel', panel) : $p['setattr'](self, 'panel', panel);
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('title', title) : $p['setattr'](self, 'title', title);
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('purpose', purpose) : $p['setattr'](self, 'purpose', purpose);
			return null;
		}
	, 1, [null,null,['self'],['panel'],['title'],['purpose']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onCompletion', function(text) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
			}
			var $attr9,$attr8,$attr7,$attr10;
			self['panel']['createPage']((($attr7=($attr8=self)['title']) == null || (($attr8.__is_instance__) && typeof $attr7 == 'function') || (typeof $attr7['__get__'] == 'function')?
						$p['getattr']($attr8, 'title'):
						self['title']), (($attr9=($attr10=self)['purpose']) == null || (($attr10.__is_instance__) && typeof $attr9 == 'function') || (typeof $attr9['__get__'] == 'function')?
						$p['getattr']($attr10, 'purpose'):
						self['purpose']), text);
			return null;
		}
	, 1, [null,null,['self'],['text']]);
		$cls_definition['onCompletion'] = $method;
		$method = $pyjs__bind_method2('onError', function(text, code) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
				code = arguments[2];
			}

			self['panel']['onError'](text, code);
			return null;
		}
	, 1, [null,null,['self'],['text'],['code']]);
		$cls_definition['onError'] = $method;
		$method = $pyjs__bind_method2('onTimeout', function(text) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
			}

			self['panel']['onTimeout'](text);
			return null;
		}
	, 1, [null,null,['self'],['text']]);
		$cls_definition['onTimeout'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('PageLoader', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end PageLoader */


/* end module: PageLoader */


