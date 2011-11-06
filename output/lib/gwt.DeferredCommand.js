/* start module: gwt.DeferredCommand */
$pyjs.loaded_modules['gwt.DeferredCommand'] = function (__mod_name__) {
	if($pyjs.loaded_modules['gwt.DeferredCommand'].__was_initialized__) return $pyjs.loaded_modules['gwt.DeferredCommand'];
	if(typeof $pyjs.loaded_modules['gwt'] == 'undefined' || !$pyjs.loaded_modules['gwt'].__was_initialized__) $p['___import___']('gwt', null);
	var $m = $pyjs.loaded_modules["gwt.DeferredCommand"];
	$m.__repr__ = function() { return "<module: gwt.DeferredCommand>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'gwt.DeferredCommand';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['gwt']['DeferredCommand'] = $pyjs.loaded_modules['gwt.DeferredCommand'];


	$m['Timer'] = $p['___import___']('pyjamas.Timer.Timer', 'gwt', null, false);
	$m['deferredCommands'] = $p['list']([]);
	$m['timerIsActive'] = false;
	$m['add'] = function(cmd) {

		$m['deferredCommands']['append'](cmd);
		(typeof maybeSetDeferredCommandTimer == "undefined"?$m.maybeSetDeferredCommandTimer:maybeSetDeferredCommandTimer)();
		return null;
	};
	$m['add'].__name__ = 'add';

	$m['add'].__bind_type__ = 0;
	$m['add'].__args__ = [null,null,['cmd']];
	$m['flushDeferredCommands'] = function() {
		var $iter1_nextval,$iter1_type,i,$iter1_iter,current,$bool1,$iter1_array,$len1,$1,$2,$iter1_idx;
		$iter1_iter = $p['range']((($len1=$m['deferredCommands']) === null?0:
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
			current = (typeof ($1=$m['deferredCommands']).__array != 'undefined'?
				((typeof $1.__array[$2=0]) != 'undefined'?$1.__array[$2]:
					$1.__getitem__($2)):
					$1.__getitem__(0));
			$m['deferredCommands'].__delitem__(0);
			if ((($bool1=current) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				current['execute']();
			}
		}
		return null;
	};
	$m['flushDeferredCommands'].__name__ = 'flushDeferredCommands';

	$m['flushDeferredCommands'].__bind_type__ = 0;
	$m['flushDeferredCommands'].__args__ = [null,null];
	$m['maybeSetDeferredCommandTimer'] = function() {
		var $eq2,$and1,$and2,$eq1,$bool2,$bool3,$len2,$bool4,$bool5;
		if ((($bool5=((($bool3=$and1=!(($bool2=$m['timerIsActive']) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
				 true ) )?!(($bool4=(($eq1=(($len2=$m['deferredCommands']) === null?0:
			(typeof $len2.__array != 'undefined' ? $len2.__array.length:
				(typeof $len2.__len__ == 'function'?$len2.__len__():
					(typeof $len2.length != 'undefined'?$len2.length:
						$p['len']($len2))))))===($eq2=0)&&$eq1===null?true:
			($eq1===null?false:($eq2===null?false:
				((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1.__cmp__=='function'?$eq1.__cmp__($eq2) === 0:
					((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2.__cmp__=='function'?$eq2.__cmp__($eq1) === 0:
						$eq1==$eq2)))))) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
			false :
			(typeof $bool4=='object'?
				(typeof $bool4.__nonzero__=='function'?
					$bool4.__nonzero__() :
					(typeof $bool4.__len__=='function'?
						($bool4.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) ):$and1)) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
			$m['Timer'](1, (typeof onTimer == "undefined"?$m.onTimer:onTimer));
			$m['timerIsActive'] = true;
		}
		return null;
	};
	$m['maybeSetDeferredCommandTimer'].__name__ = 'maybeSetDeferredCommandTimer';

	$m['maybeSetDeferredCommandTimer'].__bind_type__ = 0;
	$m['maybeSetDeferredCommandTimer'].__args__ = [null,null];
	$m['onTimer'] = function(t) {

		$m['flushDeferredCommands']();
		$m['timerIsActive'] = false;
		$m['maybeSetDeferredCommandTimer']();
		return null;
	};
	$m['onTimer'].__name__ = 'onTimer';

	$m['onTimer'].__bind_type__ = 0;
	$m['onTimer'].__args__ = [null,null,['t']];
	$m['DPC_Obj'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'gwt.DeferredCommand';
		$method = $pyjs__bind_method2('__init__', function(func) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				func = arguments[1];
			}

			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('_func', func) : $p['setattr'](self, '_func', func);
			return null;
		}
	, 1, [null,null,['self'],['func']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('execute', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['_func']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['execute'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('DPC_Obj', $p['tuple']($bases), $data);
	})();
	$m['queue_Call'] = function(func) {

		$m['add']($m['DPC_Obj'](func));
		return null;
	};
	$m['queue_Call'].__name__ = 'queue_Call';

	$m['queue_Call'].__bind_type__ = 0;
	$m['queue_Call'].__args__ = [null,null,['func']];
	return this;
}; /* end gwt.DeferredCommand */


/* end module: gwt.DeferredCommand */


/*
PYJS_DEPS: ['pyjamas.Timer.Timer', 'pyjamas', 'pyjamas.Timer']
*/
