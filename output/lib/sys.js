/* start module: sys */
var sys;
$pyjs.loaded_modules['sys'] = function (__mod_name__) {
	if($pyjs.loaded_modules['sys'].__was_initialized__) return $pyjs.loaded_modules['sys'];
	var $m = sys = $pyjs.loaded_modules["sys"];
	$m.__repr__ = function() { return "<module: sys>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'sys';
	$m.__name__ = __mod_name__;


	$m['overrides'] = null;
	$m['loadpath'] = null;
	$m['stacktrace'] = null;
	$m['appname'] = null;
	$m['version_info'] = $p['tuple']([2, 5, 0, 'pyjamas', 0]);
	$m['setloadpath'] = function(lp) {

		$m['loadpath'] = lp;
		return null;
	};
	$m['setloadpath'].__name__ = 'setloadpath';

	$m['setloadpath'].__bind_type__ = 0;
	$m['setloadpath'].__args__ = [null,null,['lp']];
	$m['setappname'] = function(an) {

		$m['appname'] = an;
		return null;
	};
	$m['setappname'].__name__ = 'setappname';

	$m['setappname'].__bind_type__ = 0;
	$m['setappname'].__args__ = [null,null,['an']];
	$m['getloadpath'] = function() {

		return $m['loadpath'];
	};
	$m['getloadpath'].__name__ = 'getloadpath';

	$m['getloadpath'].__bind_type__ = 0;
	$m['getloadpath'].__args__ = [null,null];
	$m['addoverride'] = function(module_name, path) {

		$m['overrides'].__setitem__(module_name, path);
		return null;
	};
	$m['addoverride'].__name__ = 'addoverride';

	$m['addoverride'].__bind_type__ = 0;
	$m['addoverride'].__args__ = [null,null,['module_name'],['path']];
	$m['exc_info'] = function() {
		var le,start,$sub2,$sub1,tb,$and2,cls,$attr9,$attr8,$attr1,$and1,$attr3,$attr2,$attr5,$attr4,$attr7,$attr6,$bool2,$bool3,$bool1,$bool6,$bool7,$bool4,$bool5,$attr10,$cmp1,$cmp2;
		le = $pyjs.__last_exception__;
		if ((($bool2=!(($bool1=le) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
			false :
			(typeof $bool1=='object'?
				(typeof $bool1.__nonzero__=='function'?
					$bool1.__nonzero__() :
					(typeof $bool1.__len__=='function'?
						($bool1.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
			return $p['tuple']([null, null, null]);
		}
		if ((($bool4=!(($bool3=$p['hasattr']((($attr1=($attr2=le)['error']) == null || (($attr2.__is_instance__) && typeof $attr1 == 'function') || (typeof $attr1['__get__'] == 'function')?
					$p['getattr']($attr2, 'error'):
					le['error']), '__class__')) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
			false :
			(typeof $bool3=='object'?
				(typeof $bool3.__nonzero__=='function'?
					$bool3.__nonzero__() :
					(typeof $bool3.__len__=='function'?
						($bool3.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
			cls = null;
		}
		else {
			cls = (($attr3=($attr4=le['error'])['__class__']) == null || (($attr4.__is_instance__) && typeof $attr3 == 'function') || (typeof $attr3['__get__'] == 'function')?
						$p['getattr']($attr4, '__class__'):
						le['error']['__class__']);
		}
		tb = $pyjs.__last_exception_stack__;
		if ((($bool5=tb) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
			start = (($attr5=($attr6=tb)['start']) == null || (($attr6.__is_instance__) && typeof $attr5 == 'function') || (typeof $attr5['__get__'] == 'function')?
						$p['getattr']($attr6, 'start'):
						tb['start']);
			while ((($bool7=((($bool6=$and1=tb) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
				false :
				(typeof $bool6=='object'?
					(typeof $bool6.__nonzero__=='function'?
						$bool6.__nonzero__() :
						(typeof $bool6.__len__=='function'?
							($bool6.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((($cmp1=start)===($cmp2=0)?0:
				(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
					($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
					$p['cmp']($cmp1, $cmp2))) == 1):$and1)) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
				tb = (($attr7=($attr8=tb)['tb_next']) == null || (($attr8.__is_instance__) && typeof $attr7 == 'function') || (typeof $attr7['__get__'] == 'function')?
							$p['getattr']($attr8, 'tb_next'):
							tb['tb_next']);
				start = (typeof ($sub1=start)==typeof ($sub2=1) && (typeof $sub1=='number'||typeof $sub1=='string')?
					$sub1-$sub2:
					$p['op_sub']($sub1,$sub2));
			}
		}
		return $p['tuple']([cls, (($attr9=($attr10=le)['error']) == null || (($attr10.__is_instance__) && typeof $attr9 == 'function') || (typeof $attr9['__get__'] == 'function')?
					$p['getattr']($attr10, 'error'):
					le['error']), tb]);
	};
	$m['exc_info'].__name__ = 'exc_info';

	$m['exc_info'].__bind_type__ = 0;
	$m['exc_info'].__args__ = [null,null];
	$m['exc_clear'] = function() {

$pyjs.__last_exception_stack__ = $pyjs.__last_exception__ = null;
	};
	$m['exc_clear'].__name__ = 'exc_clear';

	$m['exc_clear'].__bind_type__ = 0;
	$m['exc_clear'].__args__ = [null,null];
sys._exception_from_trackstack = function (trackstack, start) {
    if (typeof start == 'undefined') {
      start = 0;
    }
    var exception_stack = null;
    var top = null;
    for (var needle=0; needle < $pyjs.trackstack.length; needle++) {
        var t = new Object();
        for (var p in $pyjs.trackstack[needle]) {
            t[p] = $pyjs.trackstack[needle][p];
        }
        if (typeof $pyjs.loaded_modules[t.module].__track_lines__ != 'undefined') {
          var f_globals = $p['dict']();
          for (var name in $pyjs.loaded_modules[t.module]) {
            f_globals.__setitem__(name, $pyjs.loaded_modules[t.module][name]);
          }
          t.tb_frame = {f_globals: f_globals};
        }
        if (exception_stack == null) {
            exception_stack = top = t;
        } else {
          top.tb_next = t;
        }
        top = t;
    }
    top.tb_next = null;
    exception_stack.start = start;
    return exception_stack;
};
sys.save_exception_stack = function (start) {
    if ($pyjs.__active_exception_stack__) {
        $pyjs.__active_exception_stack__.start = start;
        return $pyjs.__active_exception_stack__;
    }
    $pyjs.__active_exception_stack__ = sys._exception_from_trackstack($pyjs.trackstack, start);
    return $pyjs.__active_exception_stack__;
};
	$m['trackstacklist'] = function(stack, limit) {
		if (typeof stack == 'undefined') stack=arguments.callee.__args__[2][1];
		if (typeof limit == 'undefined') limit=arguments.callee.__args__[3][1];
		var $bool10,$bool11,$bool12,$bool13,$bool14,stackstrings,$bool9,msg,$sub4,$and3,$and4,$sub3,$attr15,$attr14,$bool8,$attr16,$attr11,$attr13,$attr12,pyjslib,$add2,$add1;
		if ((($bool8=(stack === null)) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
			stack = $pyjs.__active_exception_stack__;
		}
		else {
			pyjslib = $p['___import___']('pyjslib', null);
			if ((($bool9=pyjslib['isArray'](stack)) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
				stack = (typeof _exception_from_trackstack == "undefined"?$m._exception_from_trackstack:_exception_from_trackstack)(stack);
			}
		}
		if ((($bool10=(stack === null)) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
			return '';
		}
		stackstrings = $p['list']([]);
		msg = '';
		if ((($bool11=(limit === null)) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
			limit = (typeof ($usub1=1)=='number'?
				-$usub1:
				$p['op_usub']($usub1));
		}
		while ((($bool13=((($bool12=$and3=stack) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
			false :
			(typeof $bool12=='object'?
				(typeof $bool12.__nonzero__=='function'?
					$bool12.__nonzero__() :
					(typeof $bool12.__len__=='function'?
						($bool12.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )?limit:$and3)) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
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
msg = $pyjs.loaded_modules[stack.module]['__track_lines__'][stack['lineno']];
if (typeof msg == 'undefined') msg = null;
			if ((($bool14=msg) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
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
				stackstrings['append']((typeof ($add1=msg)==typeof ($add2='\x0A') && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2)));
			}
			else {
				stackstrings['append']($p['sprintf']('%s.py, line %d\x0A', $p['tuple']([(($attr11=($attr12=stack)['module']) == null || (($attr12.__is_instance__) && typeof $attr11 == 'function') || (typeof $attr11['__get__'] == 'function')?
							$p['getattr']($attr12, 'module'):
							stack['module']), (($attr13=($attr14=stack)['lineno']) == null || (($attr14.__is_instance__) && typeof $attr13 == 'function') || (typeof $attr13['__get__'] == 'function')?
							$p['getattr']($attr14, 'lineno'):
							stack['lineno'])])));
			}
			stack = (($attr15=($attr16=stack)['tb_next']) == null || (($attr16.__is_instance__) && typeof $attr15 == 'function') || (typeof $attr15['__get__'] == 'function')?
						$p['getattr']($attr16, 'tb_next'):
						stack['tb_next']);
			limit = (typeof ($sub3=limit)==typeof ($sub4=1) && (typeof $sub3=='number'||typeof $sub3=='string')?
				$sub3-$sub4:
				$p['op_sub']($sub3,$sub4));
		}
		return stackstrings;
	};
	$m['trackstacklist'].__name__ = 'trackstacklist';

	$m['trackstacklist'].__bind_type__ = 0;
	$m['trackstacklist'].__args__ = [null,null,['stack', null],['limit', null]];
	$m['trackstackstr'] = function(stack, limit) {
		if (typeof stack == 'undefined') stack=arguments.callee.__args__[2][1];
		if (typeof limit == 'undefined') limit=arguments.callee.__args__[3][1];
		var stackstrings;
		stackstrings = $pyjs_kwargs_call(null, $m['trackstacklist'], null, null, [{limit:limit}, stack]);
		return ''['join'](stackstrings);
	};
	$m['trackstackstr'].__name__ = 'trackstackstr';

	$m['trackstackstr'].__bind_type__ = 0;
	$m['trackstackstr'].__args__ = [null,null,['stack', null],['limit', null]];
	$m['_get_traceback_list'] = function(err, tb, limit) {
		if (typeof tb == 'undefined') tb=arguments.callee.__args__[3][1];
		if (typeof limit == 'undefined') limit=arguments.callee.__args__[4][1];
		var $add3,$pyjs_try_err,$add4,msg;
		msg = $p['list']([(typeof ($add3=$p['str'](err))==typeof ($add4='\x0A') && (typeof $add3=='number'||typeof $add3=='string')?
			$add3+$add4:
			$p['op_add']($add3,$add4)), 'Traceback:\x0A']);
		try {
			msg['extend']($pyjs_kwargs_call(null, $m['trackstacklist'], null, null, [{limit:limit}, tb]));
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
			$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
			if (true) {
			}
		}
		return msg;
	};
	$m['_get_traceback_list'].__name__ = '_get_traceback_list';

	$m['_get_traceback_list'].__bind_type__ = 0;
	$m['_get_traceback_list'].__args__ = [null,null,['err'],['tb', null],['limit', null]];
	$m['_get_traceback'] = function(err, tb, limit) {
		if (typeof tb == 'undefined') tb=arguments.callee.__args__[3][1];
		if (typeof limit == 'undefined') limit=arguments.callee.__args__[4][1];

		return ''['join']($pyjs_kwargs_call(null, $m['_get_traceback_list'], null, null, [{limit:limit}, err, tb]));
	};
	$m['_get_traceback'].__name__ = '_get_traceback';

	$m['_get_traceback'].__bind_type__ = 0;
	$m['_get_traceback'].__args__ = [null,null,['err'],['tb', null],['limit', null]];
	$m['platform'] = $pyjs.platform;
	$m['byteorder'] = 'little';
	$m['maxint'] = 2147483647;
	$m['_StdStream'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'sys';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('content', '') : $p['setattr'](self, 'content', '');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('flush', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

$p._print_to_console(self.content)
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('content', '') : $p['setattr'](self, 'content', '');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['flush'] = $method;
		$method = $pyjs__bind_method2('write', function(output) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				output = arguments[1];
			}
			var $bool15,$add6,$attr18,$add5,$attr17;
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('content', (typeof ($add5=(($attr17=($attr18=self)['content']) == null || (($attr18.__is_instance__) && typeof $attr17 == 'function') || (typeof $attr17['__get__'] == 'function')?
						$p['getattr']($attr18, 'content'):
						self['content']))==typeof ($add6=output) && (typeof $add5=='number'||typeof $add5=='string')?
				$add5+$add6:
				$p['op_add']($add5,$add6))) : $p['setattr'](self, 'content', (typeof ($add5=(($attr17=($attr18=self)['content']) == null || (($attr18.__is_instance__) && typeof $attr17 == 'function') || (typeof $attr17['__get__'] == 'function')?
						$p['getattr']($attr18, 'content'):
						self['content']))==typeof ($add6=output) && (typeof $add5=='number'||typeof $add5=='string')?
				$add5+$add6:
				$p['op_add']($add5,$add6)));
			if ((($bool15=self['content']['endswith']('\x0A')) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
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
				self['flush']();
			}
			return null;
		}
	, 1, [null,null,['self'],['output']]);
		$cls_definition['write'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('_StdStream', $p['tuple']($bases), $data);
	})();
	$m['stdout'] = $m['_StdStream']();
	$m['stderr'] = $m['_StdStream']();
	return this;
}; /* end sys */


/* end module: sys */


/*
PYJS_DEPS: ['pyjslib']
*/
