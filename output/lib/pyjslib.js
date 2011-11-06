/* start module: pyjslib */
var pyjslib;
$pyjs.loaded_modules['pyjslib'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjslib'].__was_initialized__) return $pyjs.loaded_modules['pyjslib'];
	var $m = pyjslib = $pyjs.loaded_modules["pyjslib"];
	$m.__repr__ = function() { return "<module: pyjslib>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjslib';
	$m.__name__ = __mod_name__;
	var $add1,$add3,$bool214,$add2,$add6,$add4,$add5;
	;
	$m['platform'] = $pyjs.platform;
	$m['sys'] = null;
	$m['dynamic'] = null;

var $max_float_int = 1;
for (var i = 0; i < 1000; i++) {
    $max_float_int *= 2;
    if ($max_float_int + 1 == $max_float_int) {
        break;
    }
}
$max_int = 0x7fffffff;
$min_int = -0x80000000;

	$m['_handle_exception'] = function(err) {
    $pyjs.loaded_modules['sys'].save_exception_stack();

    if (!$pyjs.in_try_except) {
        var $pyjs_msg = $pyjs.loaded_modules['sys']._get_traceback(err);
        $pyjs.__active_exception_stack__ = null;
        $p['printFunc']([$pyjs_msg], true);
        $p['debugReport']($pyjs_msg);
    }
    throw err;
};
;
	$m['_create_class'] = function(clsname, bases, methods) {
		if (typeof bases == 'undefined') bases=arguments.callee.__args__[3][1];
		if (typeof methods == 'undefined') methods=arguments.callee.__args__[4][1];
		var main_base,$and1,$and2,$and3,$bool1,$bool2,$bool3,$6,$4,$5,$2,$3,$1;
		if ((($bool3=((($bool1=$and1=bases) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
			false :
			(typeof $bool1=='object'?
				(typeof $bool1.__nonzero__=='function'?
					$bool1.__nonzero__() :
					(typeof $bool1.__len__=='function'?
						($bool1.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )?((($bool2=$and2=$p['hasattr']((typeof ($1=bases).__array != 'undefined'?
			((typeof $1.__array[$2=0]) != 'undefined'?$1.__array[$2]:
				$1.__getitem__($2)):
				$1.__getitem__(0)), '__class__')) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
			false :
			(typeof $bool2=='object'?
				(typeof $bool2.__nonzero__=='function'?
					$bool2.__nonzero__() :
					(typeof $bool2.__len__=='function'?
						($bool2.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )?$p['hasattr']((typeof ($3=bases).__array != 'undefined'?
			((typeof $3.__array[$4=0]) != 'undefined'?$3.__array[$4]:
				$3.__getitem__($4)):
				$3.__getitem__(0)), '__new__'):$and2):$and1)) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
			main_base = (typeof ($5=bases).__array != 'undefined'?
				((typeof $5.__array[$6=0]) != 'undefined'?$5.__array[$6]:
					$5.__getitem__($6)):
					$5.__getitem__(0));
			return main_base['__class__'](clsname, bases, methods);
		}
		return $p['type'](clsname, bases, methods);
	};
	$m['_create_class'].__name__ = '_create_class';

	$m['_create_class'].__bind_type__ = 0;
	$m['_create_class'].__args__ = [null,null,['clsname'],['bases', null],['methods', null]];
	$m['type'] = function(clsname, bases, methods) {
		if (typeof bases == 'undefined') bases=arguments.callee.__args__[3][1];
		if (typeof methods == 'undefined') methods=arguments.callee.__args__[4][1];
		var $bool10,$bool11,$bool12,$bool13,$iter1_iter,$8,$iter1_array,$iter1_nextval,$attr1,$attr2,$and4,$and5,$bool6,$bool7,$bool4,$bool5,$7,$bool8,$bool9,$iter1_type,k,mth,$iter1_idx;
		if ((($bool5=((($bool4=$and4=(bases === null)) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
			false :
			(typeof $bool4=='object'?
				(typeof $bool4.__nonzero__=='function'?
					$bool4.__nonzero__() :
					(typeof $bool4.__len__=='function'?
						($bool4.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )?(methods === null):$and4)) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
			if ((($bool6=$p['isinstance'](clsname, $p['str'])) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
				return $p['str'];
			}
			if ((($bool7=$p['isinstance'](clsname, $p['bool'])) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
				return $p['bool'];
			}
			if ((($bool8=$p['hasattr'](clsname, '__class__')) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
				return clsname['__class__'];
			}
			if ((($bool9=$p['isinstance'](clsname, $p['float_int'])) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
				return $p['float_int'];
			}
			if ((($bool10=$p['isinstance'](clsname, $p['float'])) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
				return $p['float'];
			}
			if ((($bool11=typeof clsname == 'number') === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
				return $p['float'];
			}
			throw ($p['ValueError']($p['sprintf']('Cannot determine type for %r', clsname)));
		}
 var mths = {}; 
		if ((($bool12=methods) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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
			$iter1_iter = methods['keys']();
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				k = $iter1_nextval;
				mth = (typeof ($7=methods).__array != 'undefined'?
					((typeof $7.__array[$8=k]) != 'undefined'?$7.__array[$8]:
						$7.__getitem__($8)):
						$7.__getitem__(k));
 mths[k] = mth; 
			}
		}
 var bss = null; 
		if ((($bool13=bases) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
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
bss = bases.__array;
		}
 return $pyjs_type(clsname, bss, mths); 
	};
	$m['type'].__name__ = 'type';

	$m['type'].__bind_type__ = 0;
	$m['type'].__args__ = [null,null,['clsname'],['bases', null],['methods', null]];
	$m['object'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = 'e1ca4008db665393ca796179a5839295';
		$method = $pyjs__bind_method2('__setattr__', function(name, value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
				value = arguments[2];
			}


        if (typeof name != 'string') {
            throw $p['TypeError']("attribute name must be string");
        }
        if (attrib_remap.indexOf(name) >= 0) {
            name = '$$' + name;
        }
        if (typeof self[name] != 'undefined'
            && self.__is_instance__
            && self[name] !== null
            && typeof self[name].__set__ == 'function') {
            self[name].__set__(self, value);
        } else {
            self[name] = value;
        }
        
		}
	, 1, [null,null,['self'],['name'],['value']]);
		$cls_definition['__setattr__'] = $method;
		var $bases = new Array();
		return $pyjs_type('object', $bases, $cls_definition);
	})();
	$m['object'].__str__ = function (self) {
    if (typeof self == 'undefined') {
        self = this;
    }
    var s;
    if (self.__is_instance__ === true) {
        s = "instance of ";
    } else if (self.__is_instance__ === false) {
        s = "class ";
    } else {
        s = "javascript " + typeof self + " ";
    }
    if (self.__module__) {
        s += self.__module__ + ".";
    }
    if (typeof self.__name__ != 'undefined') {
        return s + self.__name__;
    }
    return s + "<unknown>";
};
	$m['basestring'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = 'a7df3642000553a73b5680c164ef10e5';
		var $bases = new Array($m['object']);
		return $pyjs_type('basestring', $bases, $cls_definition);
	})();
	$m['op_is'] = function(a, b) {


    if (a === b) return true;
    if (a !== null && b !== null) {
        switch ((a.__number__ << 8) | b.__number__) {
            case 0x0101:
                return a == b;
            case 0x0202:
                return a.__v == b.__v;
            case 0x0404:
                return a.__cmp__(b) == 0;
        }
    }
    return false;

	};
	$m['op_is'].__name__ = 'op_is';

	$m['op_is'].__bind_type__ = 0;
	$m['op_is'].__args__ = [null,null,['a'],['b']];
	$m['op_eq'] = function(a, b) {


    if (a === null) {
        if (b === null) return true;
        return false;
    }
    if (b === null) {
        return false;
    }
    if (a === b) {
        if (a.__is_instance__ === false && 
            b.__is_instance__ === false) {
            return true;
        }
    }
    switch ((a.__number__ << 8) | b.__number__) {
        case 0x0101:
        case 0x0401:
            return a == b;
        case 0x0102:
            return a == b.__v;
        case 0x0201:
            return a.__v == b;
        case 0x0202:
            return a.__v == b.__v;
        case 0x0104:
        case 0x0204:
            a = new $p['float_int'](a.valueOf());
        case 0x0404:
            return a.__cmp__(b) == 0;
        case 0x0402:
            return a.__cmp__(new $p['float_int'](b.valueOf())) == 0;
    }
    if (typeof a == 'object' || typeof a == 'function') {
        if (typeof a.__eq__ == 'function') {
            if (typeof b.__eq__ != 'function') {
                return false;
            }
            if (a.__eq__ === b.__eq__) {
                return a.__eq__(b);
            }
            if ($p['_isinstance'](a, b)) {
                return a.__eq__(b);
            }
            return false;
        }
        if (typeof a.__cmp__ == 'function') {
            if (typeof b.__cmp__ != 'function') {
                return false;
            }
            if (a.__cmp__ === b.__cmp__) {
                return a.__cmp__(b) == 0;
            }
            if ($p['_isinstance'](a, b)) {
                return a.__cmp__(b) == 0;
            }
            return false;
        }
    } else if (typeof b == 'object' || typeof b == 'function') {
        if (typeof b.__eq__ == 'function') {
            if ($p['_isinstance'](a, b)) {
                return b.__eq__(a);
            }
            return false;
        }
        if (typeof b.__cmp__ == 'function') {
            // typeof bXXX.__cmp__ != 'function'
            // aXXX.__cmp__ !== bXXX.__cmp__
            if ($p['_isinstance'](a, b)) {
                return b.__cmp__(a) == 0;
            }
            return false;
        }
    }
    return a == b;
    
	};
	$m['op_eq'].__name__ = 'op_eq';

	$m['op_eq'].__bind_type__ = 0;
	$m['op_eq'].__args__ = [null,null,['a'],['b']];
	$m['op_uadd'] = function(v) {


    switch (v.__number__) {
        case 0x01:
        case 0x02:
        case 0x04:
            return v;
    }
    if (v!== null) {
        if (typeof v['__pos__'] == 'function') return v.__pos__();
    }

		throw ($p['TypeError']($p['sprintf']('bad operand type for unary +: \x27%r\x27', v)));
		return null;
	};
	$m['op_uadd'].__name__ = 'op_uadd';

	$m['op_uadd'].__bind_type__ = 0;
	$m['op_uadd'].__args__ = [null,null,['v']];
	$m['op_usub'] = function(v) {


    switch (v.__number__) {
        case 0x01:
            return -v;
        case 0x02:
            return new $p['float_int'](-v);
    }
    if (v!== null) {
        if (typeof v['__neg__'] == 'function') return v.__neg__();
    }

		throw ($p['TypeError']($p['sprintf']('bad operand type for unary -: \x27%r\x27', v)));
		return null;
	};
	$m['op_usub'].__name__ = 'op_usub';

	$m['op_usub'].__bind_type__ = 0;
	$m['op_usub'].__args__ = [null,null,['v']];
	$m['__op_add'] = function(x, y) {


        return (typeof (x)==typeof (y) && 
                (typeof x=='number'||typeof x=='string')?
                x+y:
                $p['op_add'](x,y));
    
	};
	$m['__op_add'].__name__ = '__op_add';

	$m['__op_add'].__bind_type__ = 0;
	$m['__op_add'].__args__ = [null,null,['x'],['y']];
	$m['op_add'] = function(x, y) {


    if (x!== null && y!== null) {
        switch ((x.__number__ << 8) | y.__number__) {
            case 0x0101:
            case 0x0104:
            case 0x0401:
                return x+ y;
            case 0x0102:
                return x+ y.__v;
            case 0x0201:
                return x.__v + y;
            case 0x0202:
                return new $p['float_int'](x.__v + y.__v);
            case 0x0204:
                return (new $p['float_int'](x.__v)).__add(y);
            case 0x0402:
                return x.__add(new $p['float_int'](y.__v));
            case 0x0404:
                return x.__add(y);
        }
        if (!x.__number__) {
            if (typeof x== 'string' && typeof y== 'string') return x+ y;
            if (   !y.__number__
                && x.__mro__.length > y.__mro__.length
                && $p['isinstance'](x, y)
                && typeof x['__add__'] == 'function')
                return y.__add__(x);
            if (typeof x['__add__'] == 'function') return x.__add__(y);
        }
        if (!y.__number__ && typeof y['__radd__'] == 'function') return y.__radd__(x);
    }

		throw ($p['TypeError']($p['sprintf']('unsupported operand type(s) for +: \x27%r\x27, \x27%r\x27', $p['tuple']([x, y]))));
		return null;
	};
	$m['op_add'].__name__ = 'op_add';

	$m['op_add'].__bind_type__ = 0;
	$m['op_add'].__args__ = [null,null,['x'],['y']];
	$m['__op_sub'] = function(x, y) {


        return (typeof (x)==typeof (y) && 
                (typeof x=='number'||typeof x=='string')?
                x-y:
                $p['op_sub'](x,y));
    
	};
	$m['__op_sub'].__name__ = '__op_sub';

	$m['__op_sub'].__bind_type__ = 0;
	$m['__op_sub'].__args__ = [null,null,['x'],['y']];
	$m['op_sub'] = function(x, y) {


    if (x!== null && y!== null) {
        switch ((x.__number__ << 8) | y.__number__) {
            case 0x0101:
            case 0x0104:
            case 0x0401:
                return x- y;
            case 0x0102:
                return x- y.__v;
            case 0x0201:
                return x.__v - y;
            case 0x0202:
                return new $p['float_int'](x.__v - y.__v);
            case 0x0204:
                return (new $p['float_int'](x.__v)).__sub(y);
            case 0x0402:
                return x.__sub(new $p['float_int'](y.__v));
            case 0x0404:
                return x.__sub(y);
        }
        if (!x.__number__) {
            if (   !y.__number__
                && x.__mro__.length > y.__mro__.length
                && $p['isinstance'](x, y)
                && typeof x['__sub__'] == 'function')
                return y.__sub__(x);
            if (typeof x['__sub__'] == 'function') return x.__sub__(y);
        }
        if (!y.__number__ && typeof y['__rsub__'] == 'function') return y.__rsub__(x);
    }

		throw ($p['TypeError']($p['sprintf']('unsupported operand type(s) for -: \x27%r\x27, \x27%r\x27', $p['tuple']([x, y]))));
		return null;
	};
	$m['op_sub'].__name__ = 'op_sub';

	$m['op_sub'].__bind_type__ = 0;
	$m['op_sub'].__args__ = [null,null,['x'],['y']];
	$m['op_floordiv'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x.__number__ << 8) | y.__number__) {
            case 0x0101:
            case 0x0104:
            case 0x0401:
                if (y == 0) throw $p['ZeroDivisionError']('float divmod()');
                return Math.floor(x / y);
            case 0x0102:
                if (y.__v == 0) throw $p['ZeroDivisionError']('float divmod()');
                return Math.floor(x / y.__v);
            case 0x0201:
                if (y == 0) throw $p['ZeroDivisionError']('float divmod()');
                return Math.floor(x.__v / y);
            case 0x0202:
                if (y.__v == 0) throw $p['ZeroDivisionError']('integer division or modulo by zero');
                return new $p['float_int'](Math.floor(x.__v / y.__v));
            case 0x0204:
                return (new $p['float_int'](x.__v)).__floordiv(y);
            case 0x0402:
                return x.__floordiv(new $p['float_int'](y.__v));
            case 0x0404:
                return x.__floordiv(y);
        }
        if (!x.__number__) {
            if (   !y.__number__
                && x.__mro__.length > y.__mro__.length
                && $p['isinstance'](x, y)
                && typeof x['__floordiv__'] == 'function')
                return y.__floordiv__(x);
            if (typeof x['__floordiv__'] == 'function') return x.__floordiv__(y);
        }
        if (!y.__number__ && typeof y['__rfloordiv__'] == 'function') return y.__rfloordiv__(x);
    }

		throw ($p['TypeError']($p['sprintf']('unsupported operand type(s) for //: \x27%r\x27, \x27%r\x27', $p['tuple']([x, y]))));
		return null;
	};
	$m['op_floordiv'].__name__ = 'op_floordiv';

	$m['op_floordiv'].__bind_type__ = 0;
	$m['op_floordiv'].__args__ = [null,null,['x'],['y']];
	$m['op_div'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x.__number__ << 8) | y.__number__) {
            case 0x0101:
            case 0x0104:
            case 0x0401:
                if (y == 0) throw $p['ZeroDivisionError']('float divmod()');
                return x / y;
            case 0x0102:
                if (y.__v == 0) throw $p['ZeroDivisionError']('float divmod()');
                return x / y.__v;
            case 0x0201:
                if (y == 0) throw $p['ZeroDivisionError']('float divmod()');
                return x.__v / y;
            case 0x0202:
                if (y.__v == 0) throw $p['ZeroDivisionError']('float divmod()');
                return new $p['float_int'](x.__v / y.__v);
            case 0x0204:
                return (new $p['float_int'](x.__v)).__div(y);
            case 0x0402:
                return x.__div(new $p['float_int'](y.__v));
            case 0x0404:
                return x.__div(y);
        }
        if (!x.__number__) {
            if (   !y.__number__
                && x.__mro__.length > y.__mro__.length
                && $p['isinstance'](x, y)
                && typeof x['__div__'] == 'function')
                return y.__div__(x);
            if (typeof x['__div__'] == 'function') return x.__div__(y);
        }
        if (!y.__number__ && typeof y['__rdiv__'] == 'function') return y.__rdiv__(x);
    }

		throw ($p['TypeError']($p['sprintf']('unsupported operand type(s) for /: \x27%r\x27, \x27%r\x27', $p['tuple']([x, y]))));
		return null;
	};
	$m['op_div'].__name__ = 'op_div';

	$m['op_div'].__bind_type__ = 0;
	$m['op_div'].__args__ = [null,null,['x'],['y']];
	$m['op_truediv'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x.__number__ << 8) | y.__number__) {
            case 0x0101:
            case 0x0104:
            case 0x0401:
            case 0x0204:
            case 0x0402:
            case 0x0404:
                if (y == 0) throw $p['ZeroDivisionError']('float divmod()');
                return x / y;
            case 0x0102:
                if (y.__v == 0) throw $p['ZeroDivisionError']('float divmod()');
                return x / y.__v;
            case 0x0201:
                if (y == 0) throw $p['ZeroDivisionError']('float divmod()');
                return x.__v / y;
            case 0x0202:
                if (y.__v == 0) throw $p['ZeroDivisionError']('float divmod()');
                return x.__v / y.__v;
        }
        if (!x.__number__) {
            if (   !y.__number__
                && x.__mro__.length > y.__mro__.length
                && $p['isinstance'](x, y)
                && typeof x['__truediv__'] == 'function')
                return y.__truediv__(x);
            if (typeof x['__truediv__'] == 'function') return x.__truediv__(y);
        }
        if (!y.__number__ && typeof y['__rtruediv__'] == 'function') return y.__rtruediv__(x);
    }

		throw ($p['TypeError']($p['sprintf']('unsupported operand type(s) for /: \x27%r\x27, \x27%r\x27', $p['tuple']([x, y]))));
		return null;
	};
	$m['op_truediv'].__name__ = 'op_truediv';

	$m['op_truediv'].__bind_type__ = 0;
	$m['op_truediv'].__args__ = [null,null,['x'],['y']];
	$m['op_mul'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x.__number__ << 8) | y.__number__) {
            case 0x0101:
            case 0x0104:
            case 0x0401:
                return x * y;
            case 0x0102:
                return x * y.__v;
            case 0x0201:
                return x.__v * y;
            case 0x0202:
                return new $p['float_int'](x.__v * y.__v);
            case 0x0204:
                return (new $p['float_int'](x.__v)).__mul(y);
            case 0x0402:
                return x.__mul(new $p['float_int'](y.__v));
            case 0x0404:
                return x.__mul(y);
        }
        if (!x.__number__) {
            if (   !y.__number__
                && x.__mro__.length > y.__mro__.length
                && $p['isinstance'](x, y)
                && typeof x['__mul__'] == 'function')
                return y.__mul__(x);
            if (typeof x['__mul__'] == 'function') return x.__mul__(y);
        }
        if (!y.__number__ && typeof y['__rmul__'] == 'function') return y.__rmul__(x);
    }

		throw ($p['TypeError']($p['sprintf']('unsupported operand type(s) for *: \x27%r\x27, \x27%r\x27', $p['tuple']([x, y]))));
		return null;
	};
	$m['op_mul'].__name__ = 'op_mul';

	$m['op_mul'].__bind_type__ = 0;
	$m['op_mul'].__args__ = [null,null,['x'],['y']];
	$m['op_mod'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x.__number__ << 8) | y.__number__) {
            case 0x0101:
            case 0x0104:
            case 0x0401:
                if (y == 0) throw $p['ZeroDivisionError']('float divmod()');
                var v = x % y;
                return (v < 0 && y > 0 ? v + y : v);
            case 0x0102:
                if (y.__v == 0) throw $p['ZeroDivisionError']('float divmod()');
                var v = x % y.__v;
                return (v < 0 && y.__v > 0 ? v + y.__v : v);
            case 0x0201:
                if (y == 0) throw $p['ZeroDivisionError']('float divmod()');
                var v = x.__v % y;
                return (v < 0 && y.__v > 0 ? v + y.__v : v);
            case 0x0202:
                if (y.__v == 0) throw $p['ZeroDivisionError']('integer division or modulo by zero');
                var v = x.__v % y.__v;
                return new $p['float_int'](v < 0 && y.__v > 0 ? v + y.__v : v);
            case 0x0204:
                return (new $p['float_int'](x.__v)).__mod(y);
            case 0x0402:
                return x.__mod(new $p['float_int'](y.__v));
            case 0x0404:
                return x.__mod(y);
        }
        if (typeof x == 'string') {
            return $p['sprintf'](x, y);
        }
        if (!x.__number__) {
            if (   !y.__number__
                && x.__mro__.length > y.__mro__.length
                && $p['isinstance'](x, y)
                && typeof x['__mod__'] == 'function')
                return y.__mod__(x);
            if (typeof x['__mod__'] == 'function') return x.__mod__(y);
        }
        if (!y.__number__ && typeof y['__rmod__'] == 'function') return y.__rmod__(x);
    }

		throw ($p['TypeError']($p['sprintf']('unsupported operand type(s) for %: \x27%r\x27, \x27%r\x27', $p['tuple']([x, y]))));
		return null;
	};
	$m['op_mod'].__name__ = 'op_mod';

	$m['op_mod'].__bind_type__ = 0;
	$m['op_mod'].__args__ = [null,null,['x'],['y']];
	$m['op_pow'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x.__number__ << 8) | y.__number__) {
            case 0x0101:
            case 0x0104:
            case 0x0401:
                if (y == 0) throw $p['ZeroDivisionError']('float divmod()');
                return Math.pow(x, y);
            case 0x0102:
                if (y.__v == 0) throw $p['ZeroDivisionError']('float divmod()');
                return Math.pow(x,y.__v);
            case 0x0201:
                if (y == 0) throw $p['ZeroDivisionError']('float divmod()');
                return Math.pow(x.__v,y);
            case 0x0202:
                return x.__pow__(y);
            case 0x0204:
                return (new $p['float_int'](x.__v)).__pow(y);
            case 0x0402:
                return x.__pow(new $p['float_int'](y.__v));
            case 0x0404:
                return x.__pow(y);
        }
        if (!x.__number__) {
            if (   !y.__number__
                && x.__mro__.length > y.__mro__.length
                && $p['isinstance'](x, y)
                && typeof x['__pow__'] == 'function')
                return y.__pow__(x);
            if (typeof x['__pow__'] == 'function') return x.__pow__(y);
        }
        if (!y.__number__ && typeof y['__rpow__'] == 'function') return y.__rpow__(x);
    }

		throw ($p['TypeError']($p['sprintf']('unsupported operand type(s) for %: \x27%r\x27, \x27%r\x27', $p['tuple']([x, y]))));
		return null;
	};
	$m['op_pow'].__name__ = 'op_pow';

	$m['op_pow'].__bind_type__ = 0;
	$m['op_pow'].__args__ = [null,null,['x'],['y']];
	$m['op_invert'] = function(v) {


    if (v !== null) {
        if (typeof v['__invert__'] == 'function') return v.__invert__();
    }

		throw ($p['TypeError']($p['sprintf']('bad operand type for unary -: \x27%r\x27', v)));
		return null;
	};
	$m['op_invert'].__name__ = 'op_invert';

	$m['op_invert'].__bind_type__ = 0;
	$m['op_invert'].__args__ = [null,null,['v']];
	$m['op_bitshiftleft'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x.__number__ << 8) | y.__number__) {
            case 0x0202:
                return x.__lshift__(y);
            case 0x0204:
                return y.__rlshift__(x);
            case 0x0402:
                return x.__lshift(y.__v);
            case 0x0404:
                return x.__lshift(y.valueOf());
        }
        if (typeof x['__lshift__'] == 'function') {
            var v = x.__lshift__(y);
            if (v !== $p['NotImplemented']) return v;
        }
        if (typeof y['__rlshift__'] != 'undefined') return y.__rlshift__(x);
    }

		throw ($p['TypeError']($p['sprintf']('unsupported operand type(s) for \x3C\x3C: \x27%r\x27, \x27%r\x27', $p['tuple']([x, y]))));
		return null;
	};
	$m['op_bitshiftleft'].__name__ = 'op_bitshiftleft';

	$m['op_bitshiftleft'].__bind_type__ = 0;
	$m['op_bitshiftleft'].__args__ = [null,null,['x'],['y']];
	$m['op_bitshiftright'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x.__number__ << 8) | y.__number__) {
            case 0x0202:
                return x.__rshift__(y);
            case 0x0204:
                return y.__rrshift__(x);
            case 0x0402:
                return x.__rshift(y.__v);
            case 0x0404:
                return x.__rshift(y.valueOf());
        }
        if (typeof x['__rshift__'] == 'function') {
            var v = x.__rshift__(y);
            if (v !== $p['NotImplemented']) return v;
        }
        if (typeof y['__rrshift__'] != 'undefined') return y.__rrshift__(x);
    }

		throw ($p['TypeError']($p['sprintf']('unsupported operand type(s) for \x3E\x3E: \x27%r\x27, \x27%r\x27', $p['tuple']([x, y]))));
		return null;
	};
	$m['op_bitshiftright'].__name__ = 'op_bitshiftright';

	$m['op_bitshiftright'].__bind_type__ = 0;
	$m['op_bitshiftright'].__args__ = [null,null,['x'],['y']];
	$m['op_bitand2'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x.__number__ << 8) | y.__number__) {
            case 0x0202:
                return x.__and__(y);
            case 0x0204:
                return y.__and(new $p['float_int'](x));
            case 0x0402:
                return x.__and(new $p['float_int'](y.__v));
            case 0x0404:
                return x.__and(y);
        }
        if (typeof x['__and__'] == 'function') {
            var v = x.__and__(y);
            if (v !== $p['NotImplemented']) return v;
        }
        if (typeof y['__rand__'] != 'undefined') return y.__rand__(x);
    }

		throw ($p['TypeError']($p['sprintf']('unsupported operand type(s) for \x26: \x27%r\x27, \x27%r\x27', $p['tuple']([x, y]))));
		return null;
	};
	$m['op_bitand2'].__name__ = 'op_bitand2';

	$m['op_bitand2'].__bind_type__ = 0;
	$m['op_bitand2'].__args__ = [null,null,['x'],['y']];
	$m['op_bitand'] = function (args) {
    var a;
    if (args[0] !== null && args[1] !== null && args.length > 1) {
        var res, r;
        res = args[0];
        for (i = 1; i < args.length; i++) {
            if (typeof res['__and__'] == 'function') {
                r = res;
                res = res.__and__(args[i]);
                if (res === $p['NotImplemented'] && typeof args[i]['__rand__'] == 'function') {
                    res = args[i].__rand__(r);
                }
            } else if (typeof args[i]['__rand__'] == 'function') {
                res = args[i].__rand__(res);
            } else {
                res = null;
                break;
            }
            if (res === $p['NotImplemented']) {
                res = null;
                break;
            }
        }
        if (res !== null) {
            return res;
        }
    }
;
	throw ($p['TypeError']((typeof ($add1='unsupported operand type(s) for \x26: ')==typeof ($add2=', '['join'](function(){
		var a,$iter2_nextval,$iter2_type,$iter2_iter,$listcomp1,$iter2_idx,$iter2_array;
	$listcomp1 = $p['list']();
	$iter2_iter = $p['list']((typeof args == "undefined"?$m.args:args));
	if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
		$iter2_type = 0;
	} else {
		$iter2_iter = $iter2_iter.__iter__();
		$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
	}
	$iter2_idx = 0;
	while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
		a = $iter2_nextval;
		$listcomp1['append']($p['repr'](a));
	}

	return $listcomp1;}())) && (typeof $add1=='number'||typeof $add1=='string')?
		$add1+$add2:
		$m['op_add']($add1,$add2))));

};

	$m['op_bitxor2'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x.__number__ << 8) | y.__number__) {
            case 0x0202:
                return x.__xor__(y);
            case 0x0204:
                return y.__xor(new $p['float_int'](x));
            case 0x0402:
                return x.__xor(new $p['float_int'](y.__v));
            case 0x0404:
                return x.__xor(y);
        }
        if (typeof x['__xor__'] == 'function') {
            var v = x.__xor__(y);
            if (v !== $p['NotImplemented']) return v;
        }
        if (typeof y['__rxor__'] != 'undefined') return y.__rxor__(x);
    }

		throw ($p['TypeError']($p['sprintf']('unsupported operand type(s) for ^: \x27%r\x27, \x27%r\x27', $p['tuple']([x, y]))));
		return null;
	};
	$m['op_bitxor2'].__name__ = 'op_bitxor2';

	$m['op_bitxor2'].__bind_type__ = 0;
	$m['op_bitxor2'].__args__ = [null,null,['x'],['y']];
	$m['op_bitxor'] = function (args) {
    var a;
    if (args[0] !== null && args[1] !== null && args.length > 1) {
        var res, r;
        res = args[0];
        for (i = 1; i < args.length; i++) {
            if (typeof res['__xor__'] == 'function') {
                r = res;
                res = res.__xor__(args[i]);
                if (res === $p['NotImplemented'] && typeof args[i]['__rxor__'] == 'function') {
                    res = args[i].__rxor__(r);
                }
            } else if (typeof args[i]['__rxor__'] == 'function') {
                res = args[i].__rxor__(res);
            } else {
                res = null;
                break;
            }
            if (res === $p['NotImplemented']) {
                res = null;
                break;
            }
        }
        if (res !== null) {
            return res;
        }
    }
;
	throw ($p['TypeError']((typeof ($add3='unsupported operand type(s) for ^: ')==typeof ($add4=', '['join'](function(){
		var a,$iter3_idx,$iter3_nextval,$iter3_type,$listcomp2,$iter3_iter,$iter3_array;
	$listcomp2 = $p['list']();
	$iter3_iter = $m.args;
	if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
		$iter3_type = 0;
	} else {
		$iter3_iter = $iter3_iter.__iter__();
		$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
	}
	$iter3_idx = 0;
	while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
		a = $iter3_nextval;
		$listcomp2['append']($p['repr'](a));
	}

	return $listcomp2;}())) && (typeof $add3=='number'||typeof $add3=='string')?
		$add3+$add4:
		$m['op_add']($add3,$add4))));

};

	$m['op_bitor2'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x.__number__ << 8) | y.__number__) {
            case 0x0202:
                return x.__or__(y);
            case 0x0204:
                return y.__or(new $p['float_int'](x));
            case 0x0402:
                return x.__or(new $p['float_int'](y.__v));
            case 0x0404:
                return x.__or(y);
        }
        if (typeof x['__or__'] == 'function') {
            var v = x.__or__(y);
            if (v !== $p['NotImplemented']) return v;
        }
        if (typeof y['__ror__'] != 'undefined') {
            return y.__ror__(x);
        }
    }

		throw ($p['TypeError']($p['sprintf']('unsupported operand type(s) for |: \x27%r\x27, \x27%r\x27', $p['tuple']([x, y]))));
		return null;
	};
	$m['op_bitor2'].__name__ = 'op_bitor2';

	$m['op_bitor2'].__bind_type__ = 0;
	$m['op_bitor2'].__args__ = [null,null,['x'],['y']];
	$m['op_bitor'] = function (args) {
    var a;
    if (args[0] !== null && args[1] !== null && args.length > 1) {
        var res, r;
        res = args[0];
        for (i = 1; i < args.length; i++) {
            if (typeof res['__or__'] == 'function') {
                r = res;
                res = res.__or__(args[i]);
                if (res === $p['NotImplemented'] && typeof args[i]['__ror__'] == 'function') {
                    res = args[i].__ror__(r);
                }
            } else if (typeof args[i]['__ror__'] == 'function') {
                res = args[i].__ror__(res);
            } else {
                res = null;
                break;
            }
            if (res === $p['NotImplemented']) {
                res = null;
                break;
            }
        }
        if (res !== null) {
            return res;
        }
    }
;
	throw ($p['TypeError']((typeof ($add5='unsupported operand type(s) for |: ')==typeof ($add6=', '['join'](function(){
		var a,$iter4_nextval,$iter4_idx,$listcomp3,$iter4_type,$iter4_array,$iter4_iter;
	$listcomp3 = $p['list']();
	$iter4_iter = $m.args;
	if (typeof ($iter4_array = $iter4_iter.__array) != 'undefined') {
		$iter4_type = 0;
	} else {
		$iter4_iter = $iter4_iter.__iter__();
		$iter4_type = typeof ($iter4_array = $iter4_iter.__array) != 'undefined'? 0 : (typeof $iter4_iter.$genfunc == 'function'? 1 : -1);
	}
	$iter4_idx = 0;
	while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
		a = $iter4_nextval;
		$listcomp3['append']($p['repr'](a));
	}

	return $listcomp3;}())) && (typeof $add5=='number'||typeof $add5=='string')?
		$add5+$add6:
		$m['op_add']($add5,$add6))));

};

	$m['___import___'] = function(path, context, module_name, get_base) {
		if (typeof module_name == 'undefined') module_name=arguments.callee.__args__[4][1];
		if (typeof get_base == 'undefined') get_base=arguments.callee.__args__[5][1];
		var $bool18,$bool19,$bool14,$bool15,$bool16,$bool17,$bool51,$and16,$and8,$and9,$and6,$and7,$and13,path_parts,inContextImportName,$bool47,$bool46,module,$and11,$bool42,$bool25,$bool24,$bool27,$bool26,$bool21,$bool20,$bool23,$bool22,$bool29,$bool28,$attr9,$attr8,$bool45,$bool44,$bool43,contextTopName,$bool41,$bool40,$attr3,$attr5,$attr4,$attr7,$attr6,$bool49,$and17,$bool48,$add14,topName,inContextTopName,$and10,$bool32,$bool33,$bool30,$bool31,$bool36,$bool37,$bool34,$bool35,$attr19,$bool38,$bool39,$attr18,$bool54,$bool55,$bool56,$bool57,$bool50,$and14,$bool52,$bool53,$and15,$bool58,$bool59,$eq10,$add18,objName,importName,$bool61,$bool60,$bool63,$bool62,$9,$14,$15,$16,$17,$10,$11,$12,$13,$18,$19,$and12,$add7,$add8,$add9,save_track_module,parentName,$attr20,$attr21,$attr22,$attr23,$attr24,$attr25,$attr26,is_module_object,in_context,$20,$sub2,$sub1,$eq8,$eq9,$eq2,$eq3,$eq1,$eq6,$eq7,$eq4,$eq5,sys,$add15,$add16,$add17,$add10,$add11,$add12,$add13,$attr15,$attr14,$attr17,$attr16,$attr11,$attr10,$attr13,$attr12,$cmp4,$cmp1,$cmp3,$cmp2,depth,inContextParentName;
		save_track_module = $pyjs.track.module;
		sys = $pyjs.loaded_modules['sys'];
		if ((($bool14=sys.__was_initialized__ != true) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
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
			module = $pyjs.loaded_modules[path];
			module();
$pyjs.track.module = save_track_module;
			if ((($bool15=(($eq1=path)===($eq2='sys')&&$eq1===null?true:
				($eq1===null?false:($eq2===null?false:
					((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1.__cmp__=='function'?$eq1.__cmp__($eq2) === 0:
						((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2.__cmp__=='function'?$eq2.__cmp__($eq1) === 0:
							$eq1==$eq2)))))) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
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
				module.modules = $p['dict']($p['dict']([['pyjslib', (typeof pyjslib == "undefined"?$m.pyjslib:pyjslib)], ['sys', module]]));
			}
			return module;
		}
		importName = path;
		is_module_object = false;
		path_parts = path['__split']('.');
		depth = path_parts['length'];
		topName = path_parts[0];
		objName = path_parts[path_parts.length-1];
		parentName = path_parts['slice'](0, (typeof ($sub1=path_parts['length'])==typeof ($sub2=1) && (typeof $sub1=='number'||typeof $sub1=='string')?
			$sub1-$sub2:
			$m['op_sub']($sub1,$sub2)))['join']('.');
		if ((($bool16=(context === null)) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
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
			in_context = false;
		}
		else {
			in_context = true;
			inContextImportName = (typeof ($add9=(typeof ($add7=context)==typeof ($add8='.') && (typeof $add7=='number'||typeof $add7=='string')?
				$add7+$add8:
				$m['op_add']($add7,$add8)))==typeof ($add10=importName) && (typeof $add9=='number'||typeof $add9=='string')?
				$add9+$add10:
				$m['op_add']($add9,$add10));
			if ((($bool18=!(($bool17=parentName) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
				false :
				(typeof $bool17=='object'?
					(typeof $bool17.__nonzero__=='function'?
						$bool17.__nonzero__() :
						(typeof $bool17.__len__=='function'?
							($bool17.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
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
				inContextParentName = context;
			}
			else {
				inContextParentName = (typeof ($add13=(typeof ($add11=context)==typeof ($add12='.') && (typeof $add11=='number'||typeof $add11=='string')?
					$add11+$add12:
					$m['op_add']($add11,$add12)))==typeof ($add14=parentName) && (typeof $add13=='number'||typeof $add13=='string')?
					$add13+$add14:
					$m['op_add']($add13,$add14));
			}
			inContextTopName = (typeof ($add17=(typeof ($add15=context)==typeof ($add16='.') && (typeof $add15=='number'||typeof $add15=='string')?
				$add15+$add16:
				$m['op_add']($add15,$add16)))==typeof ($add18=topName) && (typeof $add17=='number'||typeof $add17=='string')?
				$add17+$add18:
				$m['op_add']($add17,$add18));
			contextTopName = context.__split('.')[0];
			if ((($bool20=((($bool19=$and6=((($cmp1=depth)===($cmp2=1)?0:
				(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
					($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
					$p['cmp']($cmp1, $cmp2))) == 1)) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
				false :
				(typeof $bool19=='object'?
					(typeof $bool19.__nonzero__=='function'?
						$bool19.__nonzero__() :
						(typeof $bool19.__len__=='function'?
							($bool19.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?sys['modules']['has_key'](inContextParentName):$and6)) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
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
				module = (typeof ($9=sys['modules']).__array != 'undefined'?
					((typeof $9.__array[$10=inContextParentName]) != 'undefined'?$9.__array[$10]:
						$9.__getitem__($10)):
						$9.__getitem__(inContextParentName));
				if ((($bool21=typeof module[objName] != 'undefined') === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
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
					if ((($bool22=get_base) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
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
						return $pyjs.loaded_modules[inContextTopName];
					}
					return module[objName];
				}
			}
			else if ((($bool23=sys['modules']['has_key'](inContextImportName)) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
					false :
					(typeof $bool23=='object'?
						(typeof $bool23.__nonzero__=='function'?
							$bool23.__nonzero__() :
							(typeof $bool23.__len__=='function'?
								($bool23.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool24=get_base) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
						false :
						(typeof $bool24=='object'?
							(typeof $bool24.__nonzero__=='function'?
								$bool24.__nonzero__() :
								(typeof $bool24.__len__=='function'?
									($bool24.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return $pyjs.loaded_modules[inContextTopName];
				}
				return (typeof ($11=sys['modules']).__array != 'undefined'?
					((typeof $11.__array[$12=inContextImportName]) != 'undefined'?$11.__array[$12]:
						$11.__getitem__($12)):
						$11.__getitem__(inContextImportName));
			}
			else if ((($bool26=((($bool25=$and8=((($cmp3=depth)===($cmp4=1)?0:
				(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
					($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
					$p['cmp']($cmp3, $cmp4))) == 1)) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
				false :
				(typeof $bool25=='object'?
					(typeof $bool25.__nonzero__=='function'?
						$bool25.__nonzero__() :
						(typeof $bool25.__len__=='function'?
							($bool25.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?typeof (module = $pyjs.loaded_modules[inContextParentName]) != 'undefined':$and8)) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
					false :
					(typeof $bool26=='object'?
						(typeof $bool26.__nonzero__=='function'?
							$bool26.__nonzero__() :
							(typeof $bool26.__len__=='function'?
								($bool26.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				sys['modules'].__setitem__(inContextParentName, module);
module.__was_initialized__ = false;
				module(null);
$pyjs.track.module = save_track_module;
				if ((($bool27=typeof module[objName] != 'undefined') === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
						false :
						(typeof $bool27=='object'?
							(typeof $bool27.__nonzero__=='function'?
								$bool27.__nonzero__() :
								(typeof $bool27.__len__=='function'?
									($bool27.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					if ((($bool28=get_base) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
							false :
							(typeof $bool28=='object'?
								(typeof $bool28.__nonzero__=='function'?
									$bool28.__nonzero__() :
									(typeof $bool28.__len__=='function'?
										($bool28.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						return $pyjs.loaded_modules[inContextTopName];
					}
					return module[objName];
				}
			}
			if ((($bool29=sys['modules']['has_key'](inContextImportName)) === null || $bool29 === false || $bool29 === 0 || $bool29 === '' ?
					false :
					(typeof $bool29=='object'?
						(typeof $bool29.__nonzero__=='function'?
							$bool29.__nonzero__() :
							(typeof $bool29.__len__=='function'?
								($bool29.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool30=get_base) === null || $bool30 === false || $bool30 === 0 || $bool30 === '' ?
						false :
						(typeof $bool30=='object'?
							(typeof $bool30.__nonzero__=='function'?
								$bool30.__nonzero__() :
								(typeof $bool30.__len__=='function'?
									($bool30.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return $pyjs.loaded_modules[inContextTopName];
				}
				return (typeof ($13=sys['modules']).__array != 'undefined'?
					((typeof $13.__array[$14=inContextImportName]) != 'undefined'?$13.__array[$14]:
						$13.__getitem__($14)):
						$13.__getitem__(inContextImportName));
			}
			if ((($bool31=typeof (module = $pyjs.loaded_modules[inContextImportName]) != 'undefined') === null || $bool31 === false || $bool31 === 0 || $bool31 === '' ?
					false :
					(typeof $bool31=='object'?
						(typeof $bool31.__nonzero__=='function'?
							$bool31.__nonzero__() :
							(typeof $bool31.__len__=='function'?
								($bool31.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				sys['modules'].__setitem__(inContextImportName, module);
module.__was_initialized__ = false;
				module(module_name);
$pyjs.track.module = save_track_module;
				if ((($bool32=get_base) === null || $bool32 === false || $bool32 === 0 || $bool32 === '' ?
						false :
						(typeof $bool32=='object'?
							(typeof $bool32.__nonzero__=='function'?
								$bool32.__nonzero__() :
								(typeof $bool32.__len__=='function'?
									($bool32.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return $pyjs.loaded_modules[inContextTopName];
				}
				return module;
			}
			if ((($bool34=!(($bool33=sys['modules']['has_key'](inContextTopName)) === null || $bool33 === false || $bool33 === 0 || $bool33 === '' ?
				false :
				(typeof $bool33=='object'?
					(typeof $bool33.__nonzero__=='function'?
						$bool33.__nonzero__() :
						(typeof $bool33.__len__=='function'?
							($bool33.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool34 === false || $bool34 === 0 || $bool34 === '' ?
					false :
					(typeof $bool34=='object'?
						(typeof $bool34.__nonzero__=='function'?
							$bool34.__nonzero__() :
							(typeof $bool34.__len__=='function'?
								($bool34.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool35=typeof (module = $pyjs.loaded_modules[inContextTopName]) != 'function') === null || $bool35 === false || $bool35 === 0 || $bool35 === '' ?
						false :
						(typeof $bool35=='object'?
							(typeof $bool35.__nonzero__=='function'?
								$bool35.__nonzero__() :
								(typeof $bool35.__len__=='function'?
									($bool35.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					in_context = false;
					if ((($bool36=$pyjs.options.dynamic_loading) === null || $bool36 === false || $bool36 === 0 || $bool36 === '' ?
							false :
							(typeof $bool36=='object'?
								(typeof $bool36.__nonzero__=='function'?
									$bool36.__nonzero__() :
									(typeof $bool36.__len__=='function'?
										($bool36.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						module = (typeof __dynamic_load__ == "undefined"?$m.__dynamic_load__:__dynamic_load__)(inContextTopName);
						if ((($bool37=typeof module == 'function') === null || $bool37 === false || $bool37 === 0 || $bool37 === '' ?
								false :
								(typeof $bool37=='object'?
									(typeof $bool37.__nonzero__=='function'?
										$bool37.__nonzero__() :
										(typeof $bool37.__len__=='function'?
											($bool37.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							in_context = true;
							if ((($bool38=(($eq3=depth)===($eq4=1)&&$eq3===null?true:
								($eq3===null?false:($eq4===null?false:
									((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3.__cmp__=='function'?$eq3.__cmp__($eq4) === 0:
										((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4.__cmp__=='function'?$eq4.__cmp__($eq3) === 0:
											$eq3==$eq4)))))) === null || $bool38 === false || $bool38 === 0 || $bool38 === '' ?
									false :
									(typeof $bool38=='object'?
										(typeof $bool38.__nonzero__=='function'?
											$bool38.__nonzero__() :
											(typeof $bool38.__len__=='function'?
												($bool38.__len__()>0 ?
													true :
													false) :
												true ) ) :
										 true ) )) {
								module(module_name);
$pyjs.track.module = save_track_module;
								return module;
							}
							else {
								module(null);
								if ((($bool40=((($bool39=$and10=(($eq5=depth)===($eq6=2)&&$eq5===null?true:
									($eq5===null?false:($eq6===null?false:
										((typeof $eq5=='object'||typeof $eq5=='function')&&typeof $eq5.__cmp__=='function'?$eq5.__cmp__($eq6) === 0:
											((typeof $eq6=='object'||typeof $eq6=='function')&&typeof $eq6.__cmp__=='function'?$eq6.__cmp__($eq5) === 0:
												$eq5==$eq6)))))) === null || $bool39 === false || $bool39 === 0 || $bool39 === '' ?
									false :
									(typeof $bool39=='object'?
										(typeof $bool39.__nonzero__=='function'?
											$bool39.__nonzero__() :
											(typeof $bool39.__len__=='function'?
												($bool39.__len__()>0 ?
													true :
													false) :
												true ) ) :
										 true ) )?typeof module[objName] != 'undefined':$and10)) === null || $bool40 === false || $bool40 === 0 || $bool40 === '' ?
										false :
										(typeof $bool40=='object'?
											(typeof $bool40.__nonzero__=='function'?
												$bool40.__nonzero__() :
												(typeof $bool40.__len__=='function'?
													($bool40.__len__()>0 ?
														true :
														false) :
													true ) ) :
											 true ) )) {
									if ((($bool41=get_base) === null || $bool41 === false || $bool41 === 0 || $bool41 === '' ?
											false :
											(typeof $bool41=='object'?
												(typeof $bool41.__nonzero__=='function'?
													$bool41.__nonzero__() :
													(typeof $bool41.__len__=='function'?
														($bool41.__len__()>0 ?
															true :
															false) :
														true ) ) :
												 true ) )) {
										return $pyjs.loaded_modules[inContextTopName];
									}
									return module[objName];
								}
							}
						}
					}
				}
			}
			if ((($bool42=in_context) === null || $bool42 === false || $bool42 === 0 || $bool42 === '' ?
					false :
					(typeof $bool42=='object'?
						(typeof $bool42.__nonzero__=='function'?
							$bool42.__nonzero__() :
							(typeof $bool42.__len__=='function'?
								($bool42.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				importName = inContextImportName;
				parentName = inContextParentName;
				topName = inContextTopName;
			}
		}
		if ((($bool44=!(($bool43=in_context) === null || $bool43 === false || $bool43 === 0 || $bool43 === '' ?
			false :
			(typeof $bool43=='object'?
				(typeof $bool43.__nonzero__=='function'?
					$bool43.__nonzero__() :
					(typeof $bool43.__len__=='function'?
						($bool43.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )) === null || $bool44 === false || $bool44 === 0 || $bool44 === '' ?
				false :
				(typeof $bool44=='object'?
					(typeof $bool44.__nonzero__=='function'?
						$bool44.__nonzero__() :
						(typeof $bool44.__len__=='function'?
							($bool44.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			if ((($bool46=((($bool45=$and12=parentName) === null || $bool45 === false || $bool45 === 0 || $bool45 === '' ?
				false :
				(typeof $bool45=='object'?
					(typeof $bool45.__nonzero__=='function'?
						$bool45.__nonzero__() :
						(typeof $bool45.__len__=='function'?
							($bool45.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?sys['modules']['has_key'](parentName):$and12)) === null || $bool46 === false || $bool46 === 0 || $bool46 === '' ?
					false :
					(typeof $bool46=='object'?
						(typeof $bool46.__nonzero__=='function'?
							$bool46.__nonzero__() :
							(typeof $bool46.__len__=='function'?
								($bool46.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				module = (typeof ($15=sys['modules']).__array != 'undefined'?
					((typeof $15.__array[$16=parentName]) != 'undefined'?$15.__array[$16]:
						$15.__getitem__($16)):
						$15.__getitem__(parentName));
				if ((($bool47=typeof module[objName] != 'undefined') === null || $bool47 === false || $bool47 === 0 || $bool47 === '' ?
						false :
						(typeof $bool47=='object'?
							(typeof $bool47.__nonzero__=='function'?
								$bool47.__nonzero__() :
								(typeof $bool47.__len__=='function'?
									($bool47.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					if ((($bool48=get_base) === null || $bool48 === false || $bool48 === 0 || $bool48 === '' ?
							false :
							(typeof $bool48=='object'?
								(typeof $bool48.__nonzero__=='function'?
									$bool48.__nonzero__() :
									(typeof $bool48.__len__=='function'?
										($bool48.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						return $pyjs.loaded_modules[topName];
					}
					return module[objName];
				}
			}
			else if ((($bool49=sys['modules']['has_key'](importName)) === null || $bool49 === false || $bool49 === 0 || $bool49 === '' ?
					false :
					(typeof $bool49=='object'?
						(typeof $bool49.__nonzero__=='function'?
							$bool49.__nonzero__() :
							(typeof $bool49.__len__=='function'?
								($bool49.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool50=get_base) === null || $bool50 === false || $bool50 === 0 || $bool50 === '' ?
						false :
						(typeof $bool50=='object'?
							(typeof $bool50.__nonzero__=='function'?
								$bool50.__nonzero__() :
								(typeof $bool50.__len__=='function'?
									($bool50.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return $pyjs.loaded_modules[topName];
				}
				return (typeof ($17=sys['modules']).__array != 'undefined'?
					((typeof $17.__array[$18=importName]) != 'undefined'?$17.__array[$18]:
						$17.__getitem__($18)):
						$17.__getitem__(importName));
			}
			else if ((($bool52=((($bool51=$and14=parentName) === null || $bool51 === false || $bool51 === 0 || $bool51 === '' ?
				false :
				(typeof $bool51=='object'?
					(typeof $bool51.__nonzero__=='function'?
						$bool51.__nonzero__() :
						(typeof $bool51.__len__=='function'?
							($bool51.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?typeof (module = $pyjs.loaded_modules[parentName]) != 'undefined':$and14)) === null || $bool52 === false || $bool52 === 0 || $bool52 === '' ?
					false :
					(typeof $bool52=='object'?
						(typeof $bool52.__nonzero__=='function'?
							$bool52.__nonzero__() :
							(typeof $bool52.__len__=='function'?
								($bool52.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				sys['modules'].__setitem__(parentName, module);
module.__was_initialized__ = false;
				module(null);
$pyjs.track.module = save_track_module;
				if ((($bool53=typeof module[objName] != 'undefined') === null || $bool53 === false || $bool53 === 0 || $bool53 === '' ?
						false :
						(typeof $bool53=='object'?
							(typeof $bool53.__nonzero__=='function'?
								$bool53.__nonzero__() :
								(typeof $bool53.__len__=='function'?
									($bool53.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					if ((($bool54=get_base) === null || $bool54 === false || $bool54 === 0 || $bool54 === '' ?
							false :
							(typeof $bool54=='object'?
								(typeof $bool54.__nonzero__=='function'?
									$bool54.__nonzero__() :
									(typeof $bool54.__len__=='function'?
										($bool54.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						return $pyjs.loaded_modules[topName];
					}
					return module[objName];
				}
			}
			if ((($bool55=sys['modules']['has_key'](importName)) === null || $bool55 === false || $bool55 === 0 || $bool55 === '' ?
					false :
					(typeof $bool55=='object'?
						(typeof $bool55.__nonzero__=='function'?
							$bool55.__nonzero__() :
							(typeof $bool55.__len__=='function'?
								($bool55.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool56=get_base) === null || $bool56 === false || $bool56 === 0 || $bool56 === '' ?
						false :
						(typeof $bool56=='object'?
							(typeof $bool56.__nonzero__=='function'?
								$bool56.__nonzero__() :
								(typeof $bool56.__len__=='function'?
									($bool56.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return $pyjs.loaded_modules[topName];
				}
				return (typeof ($19=sys['modules']).__array != 'undefined'?
					((typeof $19.__array[$20=importName]) != 'undefined'?$19.__array[$20]:
						$19.__getitem__($20)):
						$19.__getitem__(importName));
			}
			if ((($bool57=typeof (module = $pyjs.loaded_modules[importName]) != 'undefined') === null || $bool57 === false || $bool57 === 0 || $bool57 === '' ?
					false :
					(typeof $bool57=='object'?
						(typeof $bool57.__nonzero__=='function'?
							$bool57.__nonzero__() :
							(typeof $bool57.__len__=='function'?
								($bool57.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				sys['modules'].__setitem__(importName, module);
				if ((($bool59=((($bool58=$and16=!(($eq7=importName)===($eq8='pyjslib')&&$eq7===null?true:
					($eq7===null?false:($eq8===null?false:
						((typeof $eq7=='object'||typeof $eq7=='function')&&typeof $eq7.__cmp__=='function'?$eq7.__cmp__($eq8) === 0:
							((typeof $eq8=='object'||typeof $eq8=='function')&&typeof $eq8.__cmp__=='function'?$eq8.__cmp__($eq7) === 0:
								$eq7==$eq8)))))) === null || $bool58 === false || $bool58 === 0 || $bool58 === '' ?
					false :
					(typeof $bool58=='object'?
						(typeof $bool58.__nonzero__=='function'?
							$bool58.__nonzero__() :
							(typeof $bool58.__len__=='function'?
								($bool58.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?!(($eq9=importName)===($eq10='sys')&&$eq9===null?true:
					($eq9===null?false:($eq10===null?false:
						((typeof $eq9=='object'||typeof $eq9=='function')&&typeof $eq9.__cmp__=='function'?$eq9.__cmp__($eq10) === 0:
							((typeof $eq10=='object'||typeof $eq10=='function')&&typeof $eq10.__cmp__=='function'?$eq10.__cmp__($eq9) === 0:
								$eq9==$eq10))))):$and16)) === null || $bool59 === false || $bool59 === 0 || $bool59 === '' ?
						false :
						(typeof $bool59=='object'?
							(typeof $bool59.__nonzero__=='function'?
								$bool59.__nonzero__() :
								(typeof $bool59.__len__=='function'?
									($bool59.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
module.__was_initialized__ = false;
				}
				module(module_name);
$pyjs.track.module = save_track_module;
				if ((($bool60=get_base) === null || $bool60 === false || $bool60 === 0 || $bool60 === '' ?
						false :
						(typeof $bool60=='object'?
							(typeof $bool60.__nonzero__=='function'?
								$bool60.__nonzero__() :
								(typeof $bool60.__len__=='function'?
									($bool60.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return $pyjs.loaded_modules[topName];
				}
				return module;
			}
		}
		if ((($bool61=$pyjs.options.dynamic_loading) === null || $bool61 === false || $bool61 === 0 || $bool61 === '' ?
				false :
				(typeof $bool61=='object'?
					(typeof $bool61.__nonzero__=='function'?
						$bool61.__nonzero__() :
						(typeof $bool61.__len__=='function'?
							($bool61.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			module = (typeof __dynamic_load__ == "undefined"?$m.__dynamic_load__:__dynamic_load__)(importName);
			if ((($bool62=typeof module== 'function') === null || $bool62 === false || $bool62 === 0 || $bool62 === '' ?
					false :
					(typeof $bool62=='object'?
						(typeof $bool62.__nonzero__=='function'?
							$bool62.__nonzero__() :
							(typeof $bool62.__len__=='function'?
								($bool62.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				module(module_name);
$pyjs.track.module = save_track_module;
				if ((($bool63=get_base) === null || $bool63 === false || $bool63 === 0 || $bool63 === '' ?
						false :
						(typeof $bool63=='object'?
							(typeof $bool63.__nonzero__=='function'?
								$bool63.__nonzero__() :
								(typeof $bool63.__len__=='function'?
									($bool63.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return $pyjs.loaded_modules[topName];
				}
				return module;
			}
		}
		throw ($p['ImportError']($p['sprintf']('No module named %s, %s in context %s', $p['tuple']([importName, path, context]))));
		return null;
	};
	$m['___import___'].__name__ = '___import___';

	$m['___import___'].__bind_type__ = 0;
	$m['___import___'].__args__ = [null,null,['path'],['context'],['module_name', null],['get_base', true]];
	$m['__dynamic_load__'] = function(importName) {
		var module,$bool65,$add29,$add28,$bool67,$add21,$add20,$add23,$add22,$add25,$add24,$add27,$add26,$pyjs_try_err,$or1,$bool64,$or3,$or2,$bool69,$bool68,$add19,$bool66,$add30;
		;
		module = $pyjs.loaded_modules[importName];
		if ((($bool66=((($bool64=$or1=($m['sys'] === null)) === null || $bool64 === false || $bool64 === 0 || $bool64 === '' ?
			false :
			(typeof $bool64=='object'?
				(typeof $bool64.__nonzero__=='function'?
					$bool64.__nonzero__() :
					(typeof $bool64.__len__=='function'?
						($bool64.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )?$or1:((($bool65=$or2=($m['dynamic'] === null)) === null || $bool65 === false || $bool65 === 0 || $bool65 === '' ?
			false :
			(typeof $bool65=='object'?
				(typeof $bool65.__nonzero__=='function'?
					$bool65.__nonzero__() :
					(typeof $bool65.__len__=='function'?
						($bool65.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )?$or2:$m['__nondynamic_modules__']['has_key'](importName)))) === null || $bool66 === false || $bool66 === 0 || $bool66 === '' ?
				false :
				(typeof $bool66=='object'?
					(typeof $bool66.__nonzero__=='function'?
						$bool66.__nonzero__() :
						(typeof $bool66.__len__=='function'?
							($bool66.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			return module;
		}
		if ((($bool67=typeof module== 'undefined') === null || $bool67 === false || $bool67 === 0 || $bool67 === '' ?
				false :
				(typeof $bool67=='object'?
					(typeof $bool67.__nonzero__=='function'?
						$bool67.__nonzero__() :
						(typeof $bool67.__len__=='function'?
							($bool67.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			try {
				$m['dynamic']['ajax_import']((typeof ($add25=(typeof ($add23=(typeof ($add21=(typeof ($add19='lib/')==typeof ($add20=importName) && (typeof $add19=='number'||typeof $add19=='string')?
					$add19+$add20:
					$m['op_add']($add19,$add20)))==typeof ($add22='.__') && (typeof $add21=='number'||typeof $add21=='string')?
					$add21+$add22:
					$m['op_add']($add21,$add22)))==typeof ($add24=$m['platform']) && (typeof $add23=='number'||typeof $add23=='string')?
					$add23+$add24:
					$m['op_add']($add23,$add24)))==typeof ($add26='__.js') && (typeof $add25=='number'||typeof $add25=='string')?
					$add25+$add26:
					$m['op_add']($add25,$add26)));
				module = $pyjs.loaded_modules[importName];
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (true) {
				}
			}
		}
		if ((($bool68=typeof module== 'undefined') === null || $bool68 === false || $bool68 === 0 || $bool68 === '' ?
				false :
				(typeof $bool68=='object'?
					(typeof $bool68.__nonzero__=='function'?
						$bool68.__nonzero__() :
						(typeof $bool68.__len__=='function'?
							($bool68.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			try {
				$m['dynamic']['ajax_import']((typeof ($add29=(typeof ($add27='lib/')==typeof ($add28=importName) && (typeof $add27=='number'||typeof $add27=='string')?
					$add27+$add28:
					$m['op_add']($add27,$add28)))==typeof ($add30='.js') && (typeof $add29=='number'||typeof $add29=='string')?
					$add29+$add30:
					$m['op_add']($add29,$add30)));
				module = $pyjs.loaded_modules[importName];
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (true) {
				}
			}
			if ((($bool69=typeof module== 'undefined') === null || $bool69 === false || $bool69 === 0 || $bool69 === '' ?
					false :
					(typeof $bool69=='object'?
						(typeof $bool69.__nonzero__=='function'?
							$bool69.__nonzero__() :
							(typeof $bool69.__len__=='function'?
								($bool69.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$m['__nondynamic_modules__'].__setitem__(importName, 1.0);
			}
		}
		return module;
	};
	$m['__dynamic_load__'].__name__ = '__dynamic_load__';

	$m['__dynamic_load__'].__bind_type__ = 0;
	$m['__dynamic_load__'].__args__ = [null,null,['importName']];
	$m['BaseException'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '6817748f66759da33eed77eabb69fcf3';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice.call(arguments,0,arguments.length));

			} else {
				var self = arguments[0];
				var args = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length));

			}

			self.args = args;
			return null;
		}
	, 1, ['args',null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__getitem__', function(index) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}

			return self['args']['__getitem__'](index);
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['__getitem__'] = $method;
		$method = $pyjs__bind_method2('toString', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add32,$add33,$add31,$add34,$attr27,$attr28;
			return (typeof ($add33=(typeof ($add31=self['__name__'])==typeof ($add32=': ') && (typeof $add31=='number'||typeof $add31=='string')?
				$add31+$add32:
				$m['op_add']($add31,$add32)))==typeof ($add34=self['__str__']()) && (typeof $add33=='number'||typeof $add33=='string')?
				$add33+$add34:
				$m['op_add']($add33,$add34));
		}
	, 1, [null,null,['self']]);
		$cls_definition['toString'] = $method;
		$method = $pyjs__bind_method2('__str__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $22,$21,$attr34,$bool70,$bool71,$attr33,$attr32,$attr31,$attr30,$len2,$attr36,$attr35,$len1,$attr29;
			if ((($bool70=((($len1=self['args']) === null?0:
				(typeof $len1.__array != 'undefined' ? $len1.__array.length:
					(typeof $len1.__len__ == 'function'?$len1.__len__():
						(typeof $len1.length != 'undefined'?$len1.length:
							$p['len']($len1))))) === 0)) === null || $bool70 === false || $bool70 === 0 || $bool70 === '' ?
					false :
					(typeof $bool70=='object'?
						(typeof $bool70.__nonzero__=='function'?
							$bool70.__nonzero__() :
							(typeof $bool70.__len__=='function'?
								($bool70.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return '';
			}
			else if ((($bool71=((($len2=self['args']) === null?0:
				(typeof $len2.__array != 'undefined' ? $len2.__array.length:
					(typeof $len2.__len__ == 'function'?$len2.__len__():
						(typeof $len2.length != 'undefined'?$len2.length:
							$p['len']($len2))))) === 1)) === null || $bool71 === false || $bool71 === 0 || $bool71 === '' ?
					false :
					(typeof $bool71=='object'?
						(typeof $bool71.__nonzero__=='function'?
							$bool71.__nonzero__() :
							(typeof $bool71.__len__=='function'?
								($bool71.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return $p['str']((typeof ($21=self['args']).__array != 'undefined'?
					((typeof $21.__array[$22=0]) != 'undefined'?$21.__array[$22]:
						$21.__getitem__($22)):
						$21.__getitem__(0)));
			}
			return $p['repr'](self['args']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['__str__'] = $method;
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add36,$bool72,$add35,$attr37,$attr40,$attr41,$attr42,$attr39,$attr38;
			if ((($bool72=$p['callable'](self)) === null || $bool72 === false || $bool72 === 0 || $bool72 === '' ?
					false :
					(typeof $bool72=='object'?
						(typeof $bool72.__nonzero__=='function'?
							$bool72.__nonzero__() :
							(typeof $bool72.__len__=='function'?
								($bool72.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return $p['sprintf']('\x3Ctype \x27%s\x27\x3E', self['__name__']);
			}
			return (typeof ($add35=self['__name__'])==typeof ($add36=$p['repr'](self['args'])) && (typeof $add35=='number'||typeof $add35=='string')?
				$add35+$add36:
				$m['op_add']($add35,$add36));
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		var $bases = new Array(pyjslib.object);
		return $pyjs_type('BaseException', $bases, $cls_definition);
	})();
	$m['KeyboardInterrupt'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = 'bd008dc9ba02f914c7fe94b0baf2777c';
		var $bases = new Array($m['BaseException']);
		return $pyjs_type('KeyboardInterrupt', $bases, $cls_definition);
	})();
	$m['Exception'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '130746173a94014331800fcb0f093015';
		var $bases = new Array($m['BaseException']);
		return $pyjs_type('Exception', $bases, $cls_definition);
	})();
	$m['StandardError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '722393ed2f9fa486985f2d88ed63bd8a';
		var $bases = new Array($m['Exception']);
		return $pyjs_type('StandardError', $bases, $cls_definition);
	})();
	$m['AssertionError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '38f79bcb415de1919efbd273a0cf58f3';
		var $bases = new Array($m['StandardError']);
		return $pyjs_type('AssertionError', $bases, $cls_definition);
	})();
	$m['GeneratorExit'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '9b0fa1fce812b12511206b4b1f6984b3';
		var $bases = new Array($m['Exception']);
		return $pyjs_type('GeneratorExit', $bases, $cls_definition);
	})();
	$m['TypeError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = 'cfa765f6ae278bf62056507ea644a69b';
		var $bases = new Array($m['StandardError']);
		return $pyjs_type('TypeError', $bases, $cls_definition);
	})();
	$m['AttributeError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '8adca6181bd8a62c2df5c8a9ed997ae4';
		var $bases = new Array($m['StandardError']);
		return $pyjs_type('AttributeError', $bases, $cls_definition);
	})();
	$m['NameError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '0b6b02f390bf6d77225b639ad32c273d';
		var $bases = new Array($m['StandardError']);
		return $pyjs_type('NameError', $bases, $cls_definition);
	})();
	$m['ValueError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '5af27a22ded3166deaea15e6d32ea7df';
		var $bases = new Array($m['StandardError']);
		return $pyjs_type('ValueError', $bases, $cls_definition);
	})();
	$m['ImportError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = 'af36dc767e0df980713fdc0c736db69d';
		var $bases = new Array($m['StandardError']);
		return $pyjs_type('ImportError', $bases, $cls_definition);
	})();
	$m['LookupError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = 'b8ab7fd203b13f025d64d845ddc4a91f';
		var $bases = new Array($m['StandardError']);
		return $pyjs_type('LookupError', $bases, $cls_definition);
	})();
	$m['RuntimeError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = 'c5cf071f63b24d534a65364b09384127';
		var $bases = new Array($m['StandardError']);
		return $pyjs_type('RuntimeError', $bases, $cls_definition);
	})();
	$m['ArithmeticError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '5cd86f79d321f7ce2863573065e77839';
		var $bases = new Array($m['StandardError']);
		return $pyjs_type('ArithmeticError', $bases, $cls_definition);
	})();
	$m['KeyError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '11a6743329ae1676b9333755a3fba070';
		$method = $pyjs__bind_method2('__str__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr50,$bool73,$bool74,$24,$attr46,$attr47,$attr44,$attr45,$attr43,$23,$attr49,$len4,$attr48,$len3;
			if ((($bool73=((($len3=self['args']) === null?0:
				(typeof $len3.__array != 'undefined' ? $len3.__array.length:
					(typeof $len3.__len__ == 'function'?$len3.__len__():
						(typeof $len3.length != 'undefined'?$len3.length:
							$p['len']($len3))))) === 0)) === null || $bool73 === false || $bool73 === 0 || $bool73 === '' ?
					false :
					(typeof $bool73=='object'?
						(typeof $bool73.__nonzero__=='function'?
							$bool73.__nonzero__() :
							(typeof $bool73.__len__=='function'?
								($bool73.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return '';
			}
			else if ((($bool74=((($len4=self['args']) === null?0:
				(typeof $len4.__array != 'undefined' ? $len4.__array.length:
					(typeof $len4.__len__ == 'function'?$len4.__len__():
						(typeof $len4.length != 'undefined'?$len4.length:
							$p['len']($len4))))) === 1)) === null || $bool74 === false || $bool74 === 0 || $bool74 === '' ?
					false :
					(typeof $bool74=='object'?
						(typeof $bool74.__nonzero__=='function'?
							$bool74.__nonzero__() :
							(typeof $bool74.__len__=='function'?
								($bool74.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return $p['repr']((typeof ($23=self['args']).__array != 'undefined'?
					((typeof $23.__array[$24=0]) != 'undefined'?$23.__array[$24]:
						$23.__getitem__($24)):
						$23.__getitem__(0)));
			}
			return $p['repr'](self['args']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['__str__'] = $method;
		var $bases = new Array($m['LookupError']);
		return $pyjs_type('KeyError', $bases, $cls_definition);
	})();
	$m['IndexError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = 'a2364b8a62bf1d1db3736e60cce41173';
		var $bases = new Array($m['LookupError']);
		return $pyjs_type('IndexError', $bases, $cls_definition);
	})();
	$m['NotImplementedError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '9c2324a9efbded58a9f9952170d252bc';
		var $bases = new Array($m['RuntimeError']);
		return $pyjs_type('NotImplementedError', $bases, $cls_definition);
	})();
	$m['ZeroDivisionError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '4784c8645c62e7bdcf22b041337bccdb';
		var $bases = new Array($m['ArithmeticError']);
		return $pyjs_type('ZeroDivisionError', $bases, $cls_definition);
	})();
	$m['OverflowError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = 'e469197a2d4a57598dfb21ed1faac5ee';
		var $bases = new Array($m['ArithmeticError']);
		return $pyjs_type('OverflowError', $bases, $cls_definition);
	})();
	$m['UndefinedValueError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '52e8517f2244b90ae4e76c8c557aab28';
		var $bases = new Array($m['ValueError']);
		return $pyjs_type('UndefinedValueError', $bases, $cls_definition);
	})();
	$m['init'] = function() {


$p['_errorMapping'] = function(err) {
    if (err instanceof(ReferenceError) || err instanceof(TypeError)) {
        var message = '';
        try {
            message = err.message;
        } catch ( e) {
        }
        return $m['AttributeError'](message);
    }
    return err;
};


$p['TryElse'] = function () { };
$p['TryElse'].prototype = new Error();
$p['TryElse'].__name__ = 'TryElse';


$p['StopIteration'] = function () { };
$p['StopIteration'].prototype = new Error();
$p['StopIteration'].__name__ = 'StopIteration';


String.prototype.rfind = function(sub, start, end) {
    var pos;
    if (typeof start != 'undefined') {
        /* *sigh* - python rfind goes *RIGHT*, NOT left */
        pos = this.substring(start).lastIndexOf(sub);
        if (pos == -1) {
            return -1;
        }
        pos += start;
    }
    else {
        pos=this.lastIndexOf(sub, start);
    }
    if (typeof end == 'undefined') return pos;

    if (pos + sub.length>end) return -1;
    return pos;
};

String.prototype.find = function(sub, start, end) {
    var pos=this.indexOf(sub, start);
    if (typeof end == 'undefined') return pos;

    if (pos + sub.length>end) return -1;
    return pos;
};

String.prototype.count = function(sub, start, end) {
    var pos, count = 0, n = sub.length;
    if (typeof start == 'undefined') start = 0;
    if (typeof end == 'undefined') end = this.length;
    while (start < end) {
        pos = this.find(sub, start, end);
        if (pos < 0) break;
        count ++;
        start = pos + n;
    }
    return count;
}

String.prototype.join = function(data) {
    var text="";

    if (data.constructor === Array) {
        return data.join(this);
    } else if (typeof data.__iter__ == 'function') {
        if (typeof data.__array == 'object') {
            return data.__array.join(this);
        }
        var iter=data.__iter__();
        if (typeof iter.__array == 'object') {
            return iter.__array.join(this);
        }
        data = [];
        var item, i = 0;
        if (typeof iter.$genfunc == 'function') {
            while (typeof (item=iter.next(true)) != 'undefined') {
                data[i++] = item;
            }
        } else {
            try {
                while (true) {
                    data[i++] = iter.next();
                }
            }
            catch (e) {
                if (e.__name__ != 'StopIteration') throw e;
            }
        }
        return data.join(this);
    }

    return text;
};

String.prototype.isdigit = function() {
    return (this.match(/^\d+$/g) !== null);
};

String.prototype.isalnum = function() {
    return (this.match(/^[a-zA-Z\d]+$/g) !== null);
};

String.prototype.isalpha = function() {
    return (this.match(/^[a-zA-Z]+$/g) !== null);
};

String.prototype.isupper = function() {
    return (this.match(/[a-z]/g) === null);
};

String.prototype.__replace=String.prototype.replace;

String.prototype.$$replace = function(old, replace, count) {
    var do_max=false;
    var start=0;
    var new_str="";
    var pos=0;

    if (typeof old != 'string') return this.__replace(old, replace);
    if (typeof count != 'undefined') do_max=true;

    while (start<this.length) {
        if (do_max && !count--) break;

        pos=this.indexOf(old, start);
        if (pos<0) break;

        new_str+=this.substring(start, pos) + replace;
        start=pos+old.length;
    }
    if (start<this.length) new_str+=this.substring(start);

    return new_str;
};

String.prototype.__contains__ = function(s){
    return this.indexOf(s)>=0;
};

String.prototype.__split = String.prototype.split;

String.prototype.$$split = function(sep, maxsplit) {
    var items=$p['list']();
    var do_max=false;
    var subject=this;
    var start=0;
    var pos=0;

    if (sep === null || typeof sep == 'undefined') {
        sep=" ";
        if (subject.length == 0) {
            return items;
        }
        subject=subject.strip();
        subject=subject.$$replace(/\s+/g, sep);
    }
    else if (typeof maxsplit != 'undefined') do_max=true;

    if (subject.length == 0) {
        items.__array.push('');
        return items;
    }

    while (start<subject.length) {
        if (do_max && !maxsplit--) break;

        pos=subject.indexOf(sep, start);
        if (pos<0) break;

        items.__array.push(subject.substring(start, pos));
        start=pos+sep.length;
    }
    if (start<=subject.length) items.__array.push(subject.substring(start));

    return items;
};

String.prototype.rsplit = function(sep, maxsplit) {
    var items=$p['list']();
    var do_max=false;
    var subject=this;
    var pos=0;

    if (sep === null || typeof sep == 'undefined') {
        sep=" ";
        if (subject.length == 0) {
            return items;
        }
        subject=subject.strip();
        subject=subject.$$replace(/\s+/g, sep);
    }
    else if (typeof maxsplit != 'undefined') do_max=true;

    if (subject.length == 0) {
        items.__array.push('');
        return items;
    }

    while (subject.length > 0) {
        if (do_max && !maxsplit--) break;

        pos=subject.lastIndexOf(sep);
        if (pos<0) break;

        items.__array.push(subject.substr(pos+sep.lenght));
        subject = subject.substr(0, pos);
    }
    if (subject.length > 0) items.__array.push(subject);
    items.__array.reverse()

    return items;
};

if (typeof "a"[0] == 'undefined' ) {
    // IE: cannot do "abc"[idx]
    String.prototype.__iter__ = function() {
        var i = 0;
        var s = this;
        return {
            'next': function(noStop) {
                if (i >= s.length) {
                    if (noStop === true) {
                        return;
                    }
                    throw $p['StopIteration'];
                }
                return s.charAt(i++);
            },
            '__iter__': function() {
                return this;
            }
        };
    };
} else {
    String.prototype.__iter__ = function() {
        var i = 0;
        var s = this;
        return {
            '__array': this,
            'next': function(noStop) {
                if (i >= s.length) {
                    if (noStop === true) {
                        return;
                    }
                    throw $p['StopIteration'];
                }
                return s.charAt(i++);
            },
            '__iter__': function() {
                return this;
            }
        };
    };
}

String.prototype.strip = function(chars) {
    return this.lstrip(chars).rstrip(chars);
};

String.prototype.lstrip = function(chars) {
    if (typeof chars == 'undefined') return this.$$replace(/^\s+/, "");
    if (chars.length == 0) return this;
    return this.$$replace(new RegExp("^[" + chars + "]+"), "");
};

String.prototype.rstrip = function(chars) {
    if (typeof chars == 'undefined') return this.$$replace(/\s+$/, "");
    if (chars.length == 0) return this;
    return this.$$replace(new RegExp("[" + chars + "]+$"), "");
};

String.prototype.startswith = function(prefix, start, end) {
    // FIXME: accept tuples as suffix (since 2.5)
    if (typeof start == 'undefined') start = 0;
    if (typeof end == 'undefined') end = this.length;

    if ((end - start) < prefix.length) return false;
    if (this.substr(start, prefix.length) == prefix) return true;
    return false;
};

String.prototype.endswith = function(suffix, start, end) {
    // FIXME: accept tuples as suffix (since 2.5)
    if (typeof start == 'undefined') start = 0;
    if (typeof end == 'undefined') end = this.length;

    if ((end - start) < suffix.length) return false;
    if (this.substr(end - suffix.length, suffix.length) == suffix) return true;
    return false;
};

String.prototype.ljust = function(width, fillchar) {
    switch (width.__number__) {
        case 0x02:
        case 0x04:
            width = width.valueOf();
            break;
        case 0x01:
            if (Math.floor(width) == width) break;
        default:
            throw $m['TypeError']("an integer is required (got '" + width + "')");
    }
    if (typeof fillchar == 'undefined') fillchar = ' ';
    if (typeof(fillchar) != 'string' ||
        fillchar.length != 1) {
        throw $m['TypeError']("ljust() argument 2 must be char, not " + typeof(fillchar));
    }
    if (this.length >= width) return this;
    return this + new Array(width+1 - this.length).join(fillchar);
};

String.prototype.rjust = function(width, fillchar) {
    switch (width.__number__) {
        case 0x02:
        case 0x04:
            width = width.valueOf();
            break;
        case 0x01:
            if (Math.floor(width) == width) break;
        default:
            throw $m['TypeError']("an integer is required (got '" + width + "')");
    }
    if (typeof fillchar == 'undefined') fillchar = ' ';
    if (typeof(fillchar) != 'string' ||
        fillchar.length != 1) {
        throw $m['TypeError']("rjust() argument 2 must be char, not " + typeof(fillchar));
    }
    if (this.length >= width) return this;
    return new Array(width + 1 - this.length).join(fillchar) + this;
};

String.prototype.center = function(width, fillchar) {
    switch (width.__number__) {
        case 0x02:
        case 0x04:
            width = width.valueOf();
            break;
        case 0x01:
            if (Math.floor(width) == width) break;
        default:
            throw $m['TypeError']("an integer is required (got '" + width + "')");
    }
    if (typeof fillchar == 'undefined') fillchar = ' ';
    if (typeof(fillchar) != 'string' ||
        fillchar.length != 1) {
        throw $m['TypeError']("center() argument 2 must be char, not " + typeof(fillchar));
    }
    if (this.length >= width) return this;
    var padlen = width - this.length;
    var right = Math.ceil(padlen / 2);
    var left = padlen - right;
    return new Array(left+1).join(fillchar) + this + new Array(right+1).join(fillchar);
};

String.prototype.__getslice__ = function(lower, upper) {
    if (lower === null) {
        lower = 0;
    } else if (lower < 0) {
        lower = this.length + lower;
    }
    if (upper === null) {
        upper=this.length;
    } else if (upper < 0) {
       upper = this.length + upper;
    }
    return this.substring(lower, upper);
};

String.prototype.__getitem__ = function(idx) {
    if (idx < 0) idx += this.length;
    if (idx < 0 || idx > this.length) {
        throw $m['IndexError']("string index out of range");
    }
    return this.charAt(idx);
};

String.prototype.__setitem__ = function(idx, val) {
    throw $m['TypeError']("'str' object does not support item assignment");
};

String.prototype.upper = String.prototype.toUpperCase;
String.prototype.lower = String.prototype.toLowerCase;

String.prototype.zfill = function(width) {
    return this.rjust(width, '0');
};

String.prototype.__add__ = function(y) {
    if (typeof y != "string") {
        throw $m['TypeError']("cannot concatenate 'str' and non-str objects");
    }
    return this + y;
};

String.prototype.__mul__ = function(y) {
    switch (y.__number__) {
        case 0x02:
        case 0x04:
            y = y.valueOf();
            break;
        case 0x01:
            if (Math.floor(y) == y) break;
        default:
            throw $m['TypeError']("can't multiply sequence by non-int of type 'str'");
    }
    var s = '';
    while (y-- > 0) {
        s += this;
    }
    return s;
};
String.prototype.__rmul__ = String.prototype.__mul__;
String.prototype.__number__ = null;
String.prototype.__name__ = 'str';
String.prototype.__class__ = String.prototype;
String.prototype.__is_instance__ = null;
String.prototype.__str__ = function () {
    if (typeof this == 'function') return "<type '" + this.__name__ + "'>";
    return this.toString();
};
String.prototype.__repr__ = function () {
    if (typeof this == 'function') return "<type '" + this.__name__ + "'>";
    return "'" + this.toString() + "'";
};
String.prototype.__mro__ = [$m['basestring']];


Boolean.prototype.__number__ = 0x01;
Boolean.prototype.__name__ = 'bool';
Boolean.prototype.__class__ = Boolean.prototype;
Boolean.prototype.__is_instance__ = null;
Boolean.prototype.__str__= function () {
    if (typeof this == 'function') return "<type '" + this.__name__ + "'>";
    if (this == true) return "True";
    return "False";
};
Boolean.prototype.__repr__ = Boolean.prototype.__str__;
Boolean.prototype.__and__ = function (y) {
    return this & y.valueOf();
};
Boolean.prototype.__or__ = function (y) {
    return this | y.valueOf();
};
Boolean.prototype.__xor__ = function (y) {
    return this ^ y.valueOf();
};


if (typeof Array.prototype.indexOf != 'function') {
    Array.prototype.indexOf = function(elt /*, from*/) {
        var len = this.length >>> 0;

        var from = Number(arguments[1]) || 0;
        from = (from < 0)
                ? Math.ceil(from)
                : Math.floor(from);
        if (from < 0)
            from += len;

        for (; from < len; from++) {
            if (from in this &&
                this[from] === elt)
                return from;
        }
        return -1;
    };
};


RegExp.prototype.Exec = function(pat) {
    var m = this.exec(pat);
    if (m !== null) {
        var len = m.length >>> 0;
        for (var i = 0; i < len; i++) {
            if (typeof(m[i]) == 'undefined')
                m[i] = null;
        }
    }
    return m;
};


$p['abs'] = Math.abs;

	};
	$m['init'].__name__ = 'init';

	$m['init'].__bind_type__ = 0;
	$m['init'].__args__ = [null,null];
	$m['Class'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '4b83271df1d5ff269c39b6ecd1dedede';
		$method = $pyjs__bind_method2('__init__', function(name) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
			}

			self.$$name = name;
			return null;
		}
	, 1, [null,null,['self'],['name']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__str___', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr51,$attr52;
			return self['$$name'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['__str___'] = $method;
		var $bases = new Array(pyjslib.object);
		return $pyjs_type('Class', $bases, $cls_definition);
	})();
	$m['open'] = function(fname, mode) {
		if (typeof mode == 'undefined') mode=arguments.callee.__args__[3][1];

		throw ($m['NotImplementedError']('open is not implemented in browsers'));
		return null;
	};
	$m['open'].__name__ = 'open';

	$m['open'].__bind_type__ = 0;
	$m['open'].__args__ = [null,null,['fname'],['mode', 'r']];
	$m['cmp'] = function(a, b) {
    if (typeof a == typeof b) {
        switch (typeof a) {
            case 'number':
            case 'string':
            case 'boolean':
                return a == b ? 0 : (a < b ? -1 : 1);
        }
        if (a === b) return 0;
    }
    if (a === null) {
        if (b === null) return 0;
        return -1;
    }
    if (b === null) {
        return 1;
    }

    switch ((a.__number__ << 8)|b.__number__) {
        case 0x0202:
            a = a.__v;
            b = b.__v;
        case 0x0101:
            return a == b ? 0 : (a < b ? -1 : 1);
        case 0x0100:
        case 0x0200:
        case 0x0400:
            if (typeof b.__cmp__ == 'function') {
                return -b.__cmp__(a);
            }
            return -1;
        case 0x0001:
        case 0x0002:
        case 0x0004:
            if (typeof a.__cmp__ == 'function') {
                return a.__cmp__(b);
            }
            return 1;
        case 0x0102:
            return -b.__cmp__(new $p['float_int'](a));
        case 0x0104:
            return -b.__cmp__(new $p['float_int'](a));
        case 0x0201:
            return a.__cmp__(new $p['float_int'](b));
        case 0x0401:
            return a.__cmp__(new $p['float_int'](b));
        case 0x0204:
            return -b.__cmp__(new $p['float_int'](a));
        case 0x0402:
            return a.__cmp__(new $p['float_int'](b));
        case 0x0404:
            return a.__cmp__(b);
    }

    if (typeof a.__class__ == typeof b.__class__ && typeof a.__class__ == 'function') {
        if (a.__class__.__name__ < b.__class__.__name__) {
            return -1;
        }
        if (a.__class__.__name__ > b.__class__.__name__) {
            return 1;
        }
    }

    if ((typeof a == 'object' || typeof a == 'function') && typeof a.__cmp__ == 'function') {
        return a.__cmp__(b);
    } else if ((typeof b == 'object' || typeof b == 'function') && typeof b.__cmp__ == 'function') {
        return -b.__cmp__(a);
    }
    if (a == b) return 0;
    if (a > b) return 1;
    return -1;
};
    ;
	$m['__cmp'] = $m['cmp'];
	$m['bool'] = function(v) {


    switch (v) {
        case null:
        case false:
        case 0:
        case '':
            return false;
    }
    if (typeof v == 'object') {
        if (typeof v.__nonzero__ == 'function'){
            return v.__nonzero__();
        } else if (typeof v.__len__ == 'function'){
            return v.__len__() > 0;
        }
    }
    return true;
    
	};
	$m['bool'].__name__ = 'bool';

	$m['bool'].__bind_type__ = 0;
	$m['bool'].__args__ = [null,null,['v']];
	$m['float'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = 'd8d3b8f2167096f77c3d76d2c0ee5595';
		$cls_definition['__number__'] = 0x01;
		$method = $pyjs__bind_method2('__new__', function(self, num) {


        if (typeof num == 'string') {
            num = num.lstrip();
            if (num === "") {
                throw $m['ValueError']("empty string for float()");
            }
        }
        var v = Number(num);
        if (isNaN(v)) {
            throw $m['ValueError']("invalid literal for float(): " + num);
        }
        return v;

		}
	, 3, [null,null,['self'],['num']]);
		$cls_definition['__new__'] = $method;
		var $bases = new Array(pyjslib.object);
		return $pyjs_type('float', $bases, $cls_definition);
	})();

Number.prototype.__number__ = 0x01;
Number.prototype.__name__ = 'float';
Number.prototype.__init__ = function (value, radix) {
    return null;
};

Number.prototype.__str__ = function () {
    if (typeof this == 'function') return "<type '" + this.__name__ + "'>";
    return this.toString();
};

Number.prototype.__repr__ = function () {
    if (typeof this == 'function') return "<type '" + this.__name__ + "'>";
    return this.toString();
};

Number.prototype.__nonzero__ = function () {
    return this != 0;
};

Number.prototype.__cmp__ = function (y) {
    return this < y? -1 : (this == y ? 0 : 1);
};

Number.prototype.__hash__ = function () {
    return this;
};

Number.prototype.__oct__ = function () {
    return '0'+this.toString(8);
};

Number.prototype.__hex__ = function () {
    return '0x'+this.toString(16);
};

Number.prototype.__pos__ = function () {
    return this;
};

Number.prototype.__neg__ = function () {
    return -this;
};

Number.prototype.__abs__ = function () {
    if (this >= 0) return this;
    return -this;
};

Number.prototype.__add__ = function (y) {
    if (!y.__number__ || isNaN(y = y.valueOf())) return $p['NotImplemented'];
    return this + y;
};

Number.prototype.__radd__ = function (y) {
    if (!y.__number__ || isNaN(y = y.valueOf())) return $p['NotImplemented'];
    return y + this;
};

Number.prototype.__sub__ = function (y) {
    if (!y.__number__ || isNaN(y = y.valueOf())) return $p['NotImplemented'];
    return this - y;
};

Number.prototype.__rsub__ = function (y) {
    if (!y.__number__ || isNaN(y = y.valueOf())) return $p['NotImplemented'];
    return y - this;
};

Number.prototype.__floordiv__ = function (y) {
    if (!y.__number__ || isNaN(y = y.valueOf())) return $p['NotImplemented'];
    if (y == 0) throw $m['ZeroDivisionError']('float divmod()');
    return Math.floor(this / y);
};

Number.prototype.__rfloordiv__ = function (y) {
    if (!y.__number__ || isNaN(y = y.valueOf())) return $p['NotImplemented'];
    if (this == 0) throw $m['ZeroDivisionError']('float divmod');
    return Math.floor(y / this);
};

Number.prototype.__div__ = function (y) {
    if (!y.__number__ || isNaN(y = y.valueOf())) return $p['NotImplemented'];
    if (y == 0) throw $m['ZeroDivisionError']('float division');
    return this / y;
};

Number.prototype.__rdiv__ = function (y) {
    if (!y.__number__ || isNaN(y = y.valueOf())) return $p['NotImplemented'];
    if (this == 0) throw $m['ZeroDivisionError']('float division');
    return y / this;
};

Number.prototype.__mul__ = function (y) {
    if (!y.__number__ || isNaN(y = y.valueOf())) return $p['NotImplemented'];
    return this * y;
};

Number.prototype.__rmul__ = function (y) {
    if (!y.__number__ || isNaN(y = y.valueOf())) return $p['NotImplemented'];
    return y * this;
};

Number.prototype.__mod__ = function (y) {
    if (!y.__number__ || isNaN(y = y.valueOf())) return $p['NotImplemented'];
    if (y == 0) throw $m['ZeroDivisionError']('float modulo');
    return this % y;
};

Number.prototype.__rmod__ = function (y) {
    if (!y.__number__ || isNaN(y = y.valueOf())) return $p['NotImplemented'];
    if (this == 0) throw $m['ZeroDivisionError']('float modulo');
    return y % this;
};

Number.prototype.__pow__ = function (y, z) {
    if (!y.__number__ || isNaN(y = y.valueOf())) return $p['NotImplemented'];
    if (typeof z == 'undefined' || z == null) {
        return Math.pow(this, y);
    }
    if (!z.__number__ || isNaN(z = z.valueOf())) return $p['NotImplemented'];
    return Math.pow(this, y) % z;
};

	$m['float_int'] = function(value, radix) {
		if (typeof radix == 'undefined') radix=arguments.callee.__args__[3][1];


    var v;
    if (typeof value['__int__'] != 'undefined') {
        return value['__int__']();
    }
    if (value.__number__) {
        if (radix !== null) {
            throw $m['TypeError']("int() can't convert non-string with explicit base");
        }
        v = value.valueOf();
        if (v > 0) {
            v = Math.floor(v);
        } else {
            v = Math.ceil(v);
        }
    } else if (typeof value == 'string') {
        if (radix === null) {
            radix = 10;
        }
        value = value.lstrip();
        switch (value[value.length-1]) {
            case 'l':
            case 'L':
                v = value.slice(0, value.length-2);
                break;
            default:
                v = value;
        }
        if (v.match($radix_regex[radix]) === null) {
            v = NaN;
        } else {
            v = parseInt(v, radix);
        }
    } else {
        throw $m['TypeError']("TypeError: int() argument must be a string or a number");
    }
    if (isNaN(v) || !isFinite(v)) {
        throw $m['ValueError']("invalid literal for int() with base " + radix + ": '" + value + "'");
    }
    return v;

	};
	$m['float_int'].__name__ = 'float_int';

	$m['float_int'].__bind_type__ = 0;
	$m['float_int'].__args__ = [null,null,['value'],['radix', null]];

var $radix_regex = [
    /^$/i,              //  0
    /^$/i,              //  1
    /^ *[01]+ *$/i,     //  2
    /^ *[0-2]+ *$/i,    //  3
    /^ *[0-3]+ *$/i,    //  4
    /^ *[0-4]+ *$/i,    //  5
    /^ *[0-5]+ *$/i,    //  6
    /^ *[0-6]+ *$/i,    //  7
    /^ *[0-7]+ *$/i,    //  8
    /^ *[0-8]+ *$/i,    //  9
    /^ *[0-9]+ *$/i,    // 10
    /^ *[0-9a]+ *$/i,   // 11
    /^ *[0-9ab]+ *$/i,  // 12
    /^ *[0-9a-c]+ *$/i, // 13
    /^ *[0-9a-d]+ *$/i, // 14
    /^ *[0-9a-e]+ *$/i, // 15
    /^ *[0-9a-f]+ *$/i, // 16
    /^ *[0-9a-g]+ *$/i, // 17
    /^ *[0-9a-h]+ *$/i, // 18
    /^ *[0-9a-i]+ *$/i, // 19
    /^ *[0-9a-j]+ *$/i, // 20
    /^ *[0-9a-k]+ *$/i, // 21
    /^ *[0-9a-l]+ *$/i, // 22
    /^ *[0-9a-m]+ *$/i, // 23
    /^ *[0-9a-n]+ *$/i, // 24
    /^ *[0-9a-o]+ *$/i, // 25
    /^ *[0-9a-p]+ *$/i, // 26
    /^ *[0-9a-q]+ *$/i, // 27
    /^ *[0-9a-r]+ *$/i, // 28
    /^ *[0-9a-s]+ *$/i, // 29
    /^ *[0-9a-t]+ *$/i, // 30
    /^ *[0-9a-u]+ *$/i, // 31
    /^ *[0-9a-v]+ *$/i, // 32
    /^ *[0-9a-w]+ *$/i, // 33
    /^ *[0-9a-x]+ *$/i, // 34
    /^ *[0-9a-y]+ *$/i, // 35
    /^ *[0-9a-z]+ *$/i  // 36
];

(function(){
    /* XXX do not convert to $p['float_int'] - this is correct */
    var $int = pyjslib['int'] = function (value, radix) {
        var v, i;
        if (typeof radix == 'undefined' || radix === null) {
            if (typeof value == 'undefined') {
                throw $m['TypeError']("int() takes at least 1 argument");
            }
            if (typeof value['__int__'] != 'undefined') {
                return value['__int__']();
            }
            switch (value.__number__) {
                case 0x01:
                    value = value > 0 ? Math.floor(value) : Math.ceil(value);
                    break;
                case 0x02:
                    return value;
                case 0x04:
                    v = value.valueOf();
                    if (!($min_int <= v && v <= $max_int))
                        return value;
            }
            radix = null;
        }
        if (typeof this != 'object' || this.__number__ != 0x02) return new $int(value, radix);
        if (value.__number__) {
            if (radix !== null) throw $m['TypeError']("int() can't convert non-string with explicit base");
            v = value.valueOf();
        } else if (typeof value == 'string') {
            if (radix === null) {
                radix = 10;
            }
            if (value.match($radix_regex[radix]) === null) {
                value = value.lstrip();
                v = NaN;
            } else {
                v = parseInt(value, radix);
            }
        } else {
            throw $m['TypeError']("TypeError: int() argument must be a string or a number");
        }
        if (isNaN(v) || !isFinite(v)) {
            throw $m['ValueError']("invalid literal for int() with base " + radix + ": '" + value + "'");
        }
        if ($min_int <= v && v <= $max_int) {
            this.__v = v;
            return this;
        }
        return new pyjslib['long'](v);
    };
    $int.__init__ = function () {};
    $int.__number__ = 0x02;
    $int.__v = 0;
    $int.__name__ = 'int';
    $int.prototype = $int;
    $int.__class__ = $int;

    $int.toExponential = function (fractionDigits) {
        return (typeof fractionDigits == 'undefined' || fractionDigits === null) ? this.__v.toExponential() : this.__v.toExponential(fractionDigits);
    };

    $int.toFixed = function (digits) {
        return (typeof digits == 'undefined' || digits === null) ? this.__v.toFixed() : this.__v.toFixed(digits);
    };

    $int.toLocaleString = function () {
        return this.__v.toLocaleString();
    };

    $int.toPrecision = function (precision) {
        return (typeof precision == 'undefined' || precision === null) ? this.__v.toPrecision() : this.__v.toPrecision(precision);
    };

    $int.toString = function (radix) {
        return (typeof radix == 'undefined' || radix === null) ? this.__v.toString() : this.__v.toString(radix);
    };

    $int.valueOf = function () {
        return this.__v.valueOf();
    };

    $int.__str__ = function () {
        if (typeof this == 'function') return "<type '" + this.__name__ + "'>";
        if (this.__number__ == 0x02) return this.__v.toString();
        return this.toString();
    };

    $int.__repr__ = function () {
        if (typeof this == 'function') return "<type '" + this.__name__ + "'>";
        if (this.__number__ == 0x02) return this.__v.toString();
        return this.toString();
    };

    $int.__nonzero__ = function () {
        return this.__v != 0;
    };

    $int.__cmp__ = function (y) {
        return this.__v < y? -1 : (this.__v == y ? 0 : 1);
    };

    $int.__hash__ = function () {
        return this.__v;
    };

    $int.__invert__ = function () {
        return new $int(~this.__v);
    };

    $int.__lshift__ = function (y) {
        if (y.__number__ != 0x02) return $p['NotImplemented'];
        y = y.__v;
        if (y < 32) {
            var v = this.__v << y;
            if (v > this.__v) {
                return new $int(v);
            }
        }
        return new $p['float_int'](this.__v).__lshift__(y);
    };

    $int.__rlshift__ = function (y) {
        if (y.__number__ != 0x02) return $p['NotImplemented'];
        y = y.__v;
        if (this.__v < 32) {
            var v = y << this.__v;
            if (v > this.__v) {
                return new $int(v);
            }
        }
        return new $p['float_int'](y).__lshift__(this.__v);
    };

    $int.__rshift__ = function (y) {
        if (y.__number__ != 0x02) return $p['NotImplemented'];
        y = y.__v;
        return new $int(this.__v >> y);
    };

    $int.__rrshift__ = function (y) {
        if (y.__number__ != 0x02) return $p['NotImplemented'];
        y = y.__v;
        return new $int(y >> this.__v);
    };

    $int.__and__ = function (y) {
        if (y.__number__ != 0x02) return $p['NotImplemented'];
        y = y.__v;
        return new $int(this.__v & y);
    };

    $int.__rand__ = function (y) {
        if (y.__number__ != 0x02) return $p['NotImplemented'];
        y = y.__v;
        return new $int(y & this.__v);
    };

    $int.__xor__ = function (y) {
        if (y.__number__ != 0x02) return $p['NotImplemented'];
        y = y.__v;
        return new $int(this.__v ^ y);
    };

    $int.__rxor__ = function (y) {
        if (y.__number__ != 0x02) return $p['NotImplemented'];
        y = y.__v;
        return new $int(y ^ this.__v);
    };

    $int.__or__ = function (y) {
        if (y.__number__ != 0x02) return $p['NotImplemented'];
        y = y.__v;
        return new $int(this.__v | y);
    };

    $int.__ror__ = function (y) {
        if (y.__number__ != 0x02) return $p['NotImplemented'];
        y = y.__v;
        return new $int(y | this.__v);
    };

    $int.__oct__ = function () {
        return '0x'+this.__v.toString(8);
    };

    $int.__hex__ = function () {
        return '0x'+this.__v.toString(16);
    };

    $int.__pos__ = function () {
        return this;
    };

    $int.__neg__ = function () {
        return new $int(-this.__v);
    };

    $int.__abs__ = function () {
        if (this.__v >= 0) return this;
        return new $int(-this.__v);
    };

    $int.__add__ = function (y) {
        if (y.__number__ != 0x02) return $p['NotImplemented'];
        y = y.__v;
        var v = this.__v + y;
        if ($min_int <= v && v <= $max_int) {
            return new $int(v);
        }
        if (-$max_float_int < v && v < $max_float_int) {
            return new $p['float_int'](v);
        }
        return new $p['float_int'](this.__v).__add__(new $p['float_int'](y));
    };

    $int.__radd__ = $int.__add__;

    $int.__sub__ = function (y) {
        if (y.__number__ != 0x02) return $p['NotImplemented'];
        y = y.__v;
        var v = this.__v - y;
        if ($min_int <= v && v <= $max_int) {
            return new $int(v);
        }
        if (-$max_float_int < v && v < $max_float_int) {
            return new $p['float_int'](v);
        }
        return new $p['float_int'](this.__v).__sub__(new $p['float_int'](y));
    };

    $int.__rsub__ = function (y) {
        if (y.__number__ != 0x02) return $p['NotImplemented'];
        y = y.__v;
        var v = y -this.__v;
        if ($min_int <= v && v <= $max_int) {
            return new $int(v);
        }
        if (-$max_float_int < v && v < $max_float_int) {
            return new $p['float_int'](v);
        }
        return new $p['float_int'](y).__sub__(new $p['float_int'](this.__v));
    };

    $int.__floordiv__ = function (y) {
        if (y.__number__ != 0x02) return $p['NotImplemented'];
        y = y.__v;
        if (y == 0) throw $m['ZeroDivisionError']('integer division or modulo by zero');
        return new $int(Math.floor(this.__v / y));
    };

    $int.__rfloordiv__ = function (y) {
        if (y.__number__ != 0x02) return $p['NotImplemented'];
        y = y.__v;
        if (this.__v == 0) throw $m['ZeroDivisionError']('integer division or modulo by zero');
        return new $int(Math.floor(y / this.__v));
    };

    $int.__div__ = function (y) {
        if (y.__number__ != 0x02) return $p['NotImplemented'];
        y = y.__v;
        if (y == 0) throw $m['ZeroDivisionError']('integer division or modulo by zero');
        return new $int(this.__v / y);
    };

    $int.__rdiv__ = function (y) {
        if (y.__number__ != 0x02) return $p['NotImplemented'];
        y = y.__v;
        if (this.__v == 0) throw $m['ZeroDivisionError']('integer division or modulo by zero');
        return new $int(y / this.__v);
    };

    $int.__mul__ = function (y) {
        if (y.__number__ != 0x02) return $p['NotImplemented'];
        y = y.__v;
        var v = this.__v * y;
        if ($min_int <= v && v <= $max_int) {
            return new $int(v);
        }
        if (-$max_float_int < v && v < $max_float_int) {
            return new $p['float_int'](v);
        }
        return new $p['float_int'](this.__v).__mul__(new $p['float_int'](y));
    };

    $int.__rmul__ = $int.__mul__;

    $int.__mod__ = function (y) {
        if (y.__number__ != 0x02) return $p['NotImplemented'];
        y = y.__v;
        if (y == 0) throw $m['ZeroDivisionError']('integer division or modulo by zero');
        return new $int(this.__v % y);
    };

    $int.__rmod__ = function (y) {
        if (y.__number__ != 0x02) return $p['NotImplemented'];
        y = y.__v;
        if (this.__v == 0) throw $m['ZeroDivisionError']('integer division or modulo by zero');
        return new $int(y % this.__v);
    };

    $int.__pow__ = function (y) {
        if (y.__number__ != 0x02) return $p['NotImplemented'];
        y = y.__v;
        var v = Math.pow(this.__v, y);
        if ($min_int <= v && v <= $max_int) {
            return new $int(v);
        }
        if (-$max_float_int < v && v < $max_float_int) {
            return new $p['float_int'](v);
        }
        return new $p['float_int'](this.__v).__pow__(new $p['float_int'](y));
    };
})();


(function(){

    var $log2 = Math.log(2);
    var $DigitValue = [
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37,
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37,
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37,
            0,  1,  2,  3,  4,  5,  6,  7,  8,  9,  37, 37, 37, 37, 37, 37,
            37, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
            25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 37, 37, 37, 37, 37,
            37, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
            25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 37, 37, 37, 37, 37,
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37,
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37,
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37,
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37,
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37,
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37,
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37,
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37
    ];
    var $log_base_PyLong_BASE = new Array();
    var $convwidth_base = new Array();
    var $convmultmax_base = new Array();
    for (var i = 0; i < 37; i++) {
        $log_base_PyLong_BASE[i] = $convwidth_base[i] = $convmultmax_base[i] = 0;
    }
    var $cdigit = '0123456789abcdefghijklmnopqrstuvwxyz';


    var PyLong_SHIFT = 15;
    var PyLong_MASK = 0x7fff;
    var PyLong_BASE = 0x8000;

    var KARATSUBA_CUTOFF = 70;
    var KARATSUBA_SQUARE_CUTOFF = (2 * KARATSUBA_CUTOFF);

    var FIVEARY_CUTOFF = 8;

    function array_eq(a, b, n) {
        for (var i = 0 ; i < n; i++) {
            if (a[i] != b[i])
                return false;
        }
        return true;
    }

    function long_normalize(v) {
        var j = v.ob_size < 0 ? -v.ob_size:v.ob_size;
        var i = j;
        while (i > 0 && v.ob_digit[i-1] == 0) {
            i--;
        }
        if (i != j) {
            v.ob_size = v.ob_size < 0 ? -i:i;
        }
        return v;
    }

    function AsScaledDouble(vv) {
        var multiplier = PyLong_BASE; // 1L << PyLong_SHIFT == 1 << 15
        var neg, i, x, nbitsneeded;

        if (vv.ob_size < 0) {
            i = -vv.ob_size;
            neg = true;
        } else if (vv.ob_size > 0) {
            i = vv.ob_size;
            neg = false;
        } else {
            return [0.0, 0];
        }
        --i;
        x = vv.ob_digit[i];
        nbitsneeded = 56;
        while (i > 0 && nbitsneeded > 0) {
            --i;
            x = x * multiplier + vv.ob_digit[i];
            nbitsneeded -= PyLong_SHIFT;
        }
        if (neg) {
            return [-x, i];
        }
        return [x, i];
    }

    function v_iadd(x, m, y, n) {
        var i, carry = 0;
        for (i = 0; i < n; ++i) {
                carry += x[i] + y[i];
                x[i] = carry & PyLong_MASK;
                carry >>= PyLong_SHIFT;
        }
        for (; carry && i < m; ++i) {
                carry += x[i];
                x[i] = carry & PyLong_MASK;
                carry >>= PyLong_SHIFT;
        }
        return carry;
    }

    function v_isub(x, m, y, n) {
        var i, borrow = 0;
        for (i = 0; i < n; ++i) {
                borrow = x[i] - y[i] - borrow;
                x[i] = borrow & PyLong_MASK;
                borrow >>= PyLong_SHIFT;
                borrow &= 1;
        }
        for (; borrow && i < m; ++i) {
                borrow = x[i] - borrow;
                x[i] = borrow & PyLong_MASK;
                borrow >>= PyLong_SHIFT;
                borrow &= 1;
        }
        return borrow;
    }

    //function mul1(a, n) {
    //    return muladd1(a, n, 0);
    //}

    function muladd1(z, a, n, extra) {
        var size_a = a.ob_size < 0 ? -a.ob_size : a.ob_size;
        var carry = extra, i;

        for (i = 0; i < size_a; ++i) {
                carry += a.ob_digit[i] * n;
                z.ob_digit[i] = carry & PyLong_MASK;
                carry >>= PyLong_SHIFT;
        }
        z.ob_digit[i] = carry;
        z.ob_size = i + 1;
        return long_normalize(z);
    }

    function inplace_divrem1(pout, pin, pout_idx, pin_idx, size, n) {
        var rem = 0, hi = 0;
        pin_idx += size;
        pout_idx += size;
        while (pin_idx > pin.length) {
            --size;
            --pin_idx;
            pout[--pout_idx] = 0;
        }
        while (--size >= 0) {
            rem = (rem << PyLong_SHIFT) + pin[--pin_idx];
            pout[--pout_idx] = hi = Math.floor(rem / n);
            rem -= hi * n;
        }
        return [rem, pout_idx, pin_idx];
    }

    function divrem1(a, n, prem) {
        var size = a.ob_size < 0 ? -a.ob_size : a.ob_size;
        var z = new $long(0);

        prem[0] = inplace_divrem1(z.ob_digit, a.ob_digit, 0, 0, size, n)[0];
        z.ob_size = size;
        return long_normalize(z);
    }

    function Format(aa, base, addL, newstyle, noBase) {
        var text, str, p, i, bits, sz, rem, sign = '';
        var c_0 = "0".charCodeAt(0);
        var c_a = "a".charCodeAt(0);
        base = base.valueOf();

        if (aa.ob_size == 0) {
            if (addL) {
                text = "0L";
            } else {
                text = "0";
            }
        } else {
            if (aa.ob_size < 0) {
                sign = '-';
                size_a = -aa.ob_size;
            } else {
                size_a = aa.ob_size;
            }
            i = base;
            bits = 0;
            while (i > 1) {
                ++bits;
                i >>>= 1;
            }
            i = addL ? 6 : 5;
            j = size_a * PyLong_SHIFT + bits - 1;
            sz = Math.floor(i + j / bits);
            if (j / PyLong_SHIFT < size_a || sz < i) {
                throw $m['OverflowError']("long is too large to format");
            }
            str = new Array();
            p = sz;
            if (addL) str[--p] = 'L';
            if ((base & (base - 1)) == 0) {
                var accum = 0, accumbits = 0, basebits = 1;
                i = base;
                while ((i >>>= 1) > 1) ++basebits;
                for (i = 0; i < size_a; ++i) {
                    accum |= aa.ob_digit[i] << accumbits;
                    accumbits += PyLong_SHIFT;
                    while (1) {
                        var cdigit = accum & (base - 1);
                        str[--p] = $cdigit.charAt(cdigit);
                        accumbits -= basebits;
                        accum >>>= basebits;
                        if (i < size_a-1) {
                            if (accumbits < basebits) break;
                        } else if (accum <= 0) break;
                    }
                }
                text = str.join("");
            } else {
                // Not 0, and base not a power of 2.
                var scratch, pin, scratch_idx, pin_idx;
                var powbase = base, power = 1, size = size_a;
               
                while (1) {
                    var newpow = powbase * base;
                    if (newpow >>> PyLong_SHIFT)  /* doesn't fit in a digit */
                        break;
                    powbase = newpow;
                    ++power;
                }
                scratch = aa.ob_digit.slice(0);
                pin = aa.ob_digit;
                scratch_idx = pin_idx = 0;
                do {
                        var ntostore = power;
                        rem = inplace_divrem1(scratch, pin, scratch_idx, pin_idx, size, powbase);
                        scratch_idx = rem[1];
                        rem = rem[0];
                        pin = scratch;
                        pin_idx = 0;
                        if (pin[size - 1] == 0) {
                            --size;
                        }
                        do {
                            var nextrem = Math.floor(rem / base);
                            str[--p] = $cdigit.charAt(rem - nextrem * base);
                            rem = nextrem;
                            --ntostore;
                        } while (ntostore && (size || rem));
                } while (size !=0);
                text = str.slice(p).join("");
            }
            text = text.lstrip('0');
            if (text == "" || text == "L") text = "0" + text;
        }
        if (noBase !== false) {
            switch (base) {
                case 10:
                    break;
                case 2:
                    text = '0b' + text;
                    break;
                case 8:
                    text = (newstyle ? '0o':(aa.ob_size ? '0': '')) + text;
                    break;
                case 16:
                    text = '0x' + text;
                    break;
                default:
                    text = base + '#' + text;
                    break;
            }
        }
        return sign + text;
    }

    function long_divrem(a, b, pdiv, prem) {
        var size_a = a.ob_size < 0 ? -a.ob_size : a.ob_size;
        var size_b = b.ob_size < 0 ? -b.ob_size : b.ob_size;
        var z = null;

        if (size_b == 0) {
            throw $m['ZeroDivisionError']("long division or modulo by zero");
        }
        if (size_a < size_b ||
            (size_a == size_b &&
             a.ob_digit[size_a-1] < b.ob_digit[size_b-1])) {
                // |a| < |b|
                pdiv.ob_size = 0;
                prem.ob_digit = a.ob_digit.slice(0);
                prem.ob_size = a.ob_size;
                return 0;
        }
        if (size_b == 1) {
                rem = [0];
                prem.ob_digit = [0];
                prem.ob_size = 1;
                z = divrem1(a, b.ob_digit[0], prem.ob_digit);
                prem = long_normalize(prem);
        }
        else {
                z = x_divrem(a, b, prem);
        }
        if (z === null) {
            pdiv.ob_size = 0;
        } else {
            pdiv.ob_digit = z.ob_digit.slice(0);
            pdiv.ob_size = z.ob_size;
        }
        if ((a.ob_size < 0) != (b.ob_size < 0))
                pdiv.ob_size = -(pdiv.ob_size);
        if (a.ob_size < 0 && prem.ob_size != 0)
                prem.ob_size = -prem.ob_size;
        return 0;
    }

    function x_divrem(v1, w1, prem) {
        var size_w = w1.ob_size < 0 ? -w1.ob_size : w1.ob_size;
        var d = Math.floor(PyLong_BASE / (w1.ob_digit[size_w-1] + 1));
        var v = muladd1($x_divrem_v, v1, d, 0);
        var w = muladd1($x_divrem_w, w1, d, 0);
        var a, j, k;
        var size_v = v.ob_size < 0 ? -v.ob_size : v.ob_size;
        k = size_v - size_w;
        a = new $long(0);
        a.ob_size = k + 1;

        for (j = size_v; k >= 0; --j, --k) {
            var vj = (j >= size_v) ? 0 : v.ob_digit[j];
            var carry = 0;
            var q, i;

            if (vj == w.ob_digit[size_w-1])
                q = PyLong_MASK;
            else
                q = Math.floor(((vj << PyLong_SHIFT) + v.ob_digit[j-1]) /
                        w.ob_digit[size_w-1]);

            while (w.ob_digit[size_w-2]*q >
                    ((
                        (vj << PyLong_SHIFT)
                        + v.ob_digit[j-1]
                        - q*w.ob_digit[size_w-1]
                                                ) << PyLong_SHIFT)
                    + v.ob_digit[j-2])
                --q;

            for (i = 0; i < size_w && i+k < size_v; ++i) {
                var z = w.ob_digit[i] * q;
                var zz = z >>> PyLong_SHIFT;
                carry += v.ob_digit[i+k] - z
                        + (zz << PyLong_SHIFT);
                v.ob_digit[i+k] = carry & PyLong_MASK;
                // carry = Py_ARITHMETIC_RIGHT_SHIFT(BASE_TWODIGITS_TYPE, carry, PyLong_SHIFT);
                carry >>= PyLong_SHIFT;
                carry -= zz;
            }

            if (i+k < size_v) {
                carry += v.ob_digit[i+k];
                v.ob_digit[i+k] = 0;
            }

            if (carry == 0)
                a.ob_digit[k] = q;
            else {
                a.ob_digit[k] = q-1;
                carry = 0;
                for (i = 0; i < size_w && i+k < size_v; ++i) {
                    carry += v.ob_digit[i+k] + w.ob_digit[i];
                    v.ob_digit[i+k] = carry & PyLong_MASK;
                    // carry = Py_ARITHMETIC_RIGHT_SHIFT( BASE_TWODIGITS_TYPE, carry, PyLong_SHIFT);
                    carry >>= PyLong_SHIFT;
                }
            }
        } /* for j, k */

        i = divrem1(v, d, prem);
        prem.ob_digit = i.ob_digit.slice(0);
        prem.ob_size = i.ob_size;
        return long_normalize(a);
    }

    function x_add(a, b) {
        var size_a = a.ob_size < 0 ? -a.ob_size : a.ob_size;
        var size_b = b.ob_size < 0 ? -b.ob_size : b.ob_size;
        var z = new $long(0);
        var i;
        var carry = 0;

        if (size_a < size_b) {
            var temp = a;
            a = b;
            b = temp;
            temp = size_a;
            size_a = size_b;
            size_b = temp;
        }
        for (i = 0; i < size_b; ++i) {
                carry += a.ob_digit[i] + b.ob_digit[i];
                z.ob_digit[i] = carry & PyLong_MASK;
                carry >>>= PyLong_SHIFT;
        }
        for (; i < size_a; ++i) {
                carry += a.ob_digit[i];
                z.ob_digit[i] = carry & PyLong_MASK;
                carry >>>= PyLong_SHIFT;
        }
        z.ob_digit[i] = carry;
        z.ob_size = i+1;
        return long_normalize(z);
    }

    function x_sub(a, b) {
        var size_a = a.ob_size < 0 ? -a.ob_size : a.ob_size;
        var size_b = b.ob_size < 0 ? -b.ob_size : b.ob_size;
        var z = new $long(0);
        var i;
        var borrow = 0;
        var sign = 1;

        if (size_a < size_b) {
            var temp = a;
            a = b;
            b = temp;
            temp = size_a;
            size_a = size_b;
            size_b = temp;
            sign = -1;
        } else if (size_a == size_b) {
            i = size_a;
            while (--i >= 0 && a.ob_digit[i] == b.ob_digit[i])
                ;
            if (i < 0)
                return z;
            if (a.ob_digit[i] < b.ob_digit[i]) {
                var temp = a;
                a = b;
                b = temp;
                temp = size_a;
                size_a = size_b;
                size_b = temp;
                sign = -1;
            }
            size_a = size_b = i+1;
        }
        for (i = 0; i < size_b; ++i) {
                borrow = a.ob_digit[i] - b.ob_digit[i] - borrow;
                z.ob_digit[i] = borrow & PyLong_MASK;
                borrow >>>= PyLong_SHIFT;
                borrow &= 1;
        }
        for (; i < size_a; ++i) {
                borrow = a.ob_digit[i] - borrow;
                z.ob_digit[i] = borrow & PyLong_MASK;
                borrow >>>= PyLong_SHIFT;
                borrow &= 1;
        }
        z.ob_size = i;
        if (sign < 0)
            z.ob_size = -(z.ob_size);
        return long_normalize(z);
    }

    function x_mul(a, b) {
        var size_a = a.ob_size < 0 ? -a.ob_size : a.ob_size;
        var size_b = b.ob_size < 0 ? -b.ob_size : b.ob_size;
        var z = new $long(0);
        var i, s;

        z.ob_size = size_a + size_b;
        for (i = 0; i < z.ob_size; i++) {
            z.ob_digit[i] = 0;
        }
        if (size_a == size_b && array_eq(a.ob_digit, b.ob_digit, size_a)) {
            // Efficient squaring per HAC, Algorithm 14.16:
            for (i = 0; i < size_a; ++i) {
                var carry;
                var f = a.ob_digit[i];
                var pz = (i << 1);
                var pa = i + 1;
                var paend = size_a;

                carry = z.ob_digit[pz] + f * f;
                z.ob_digit[pz++] = carry & PyLong_MASK;
                carry >>>= PyLong_SHIFT;

                f <<= 1;
                while (pa < paend) {
                    carry += z.ob_digit[pz] + a.ob_digit[pa++] * f;
                    z.ob_digit[pz++] = carry & PyLong_MASK;
                    carry >>>= PyLong_SHIFT;
                }
                if (carry) {
                    carry += z.ob_digit[pz];
                    z.ob_digit[pz++] = carry & PyLong_MASK;
                    carry >>>= PyLong_SHIFT;
                }
                if (carry) {
                    z.ob_digit[pz] += carry & PyLong_MASK;
                }
            }
        }
        else {  // a is not the same as b -- gradeschool long mult
            for (i = 0; i < size_a; ++i) {
                var carry = 0;
                var f = a.ob_digit[i];
                var pz = i;
                var pb = 0;
                var pbend = size_b;

                while (pb < pbend) {
                    carry += z.ob_digit[pz] + b.ob_digit[pb++] * f;
                    z.ob_digit[pz++] = carry & PyLong_MASK;
                    carry >>>= PyLong_SHIFT;
                }
                if (carry) {
                    z.ob_digit[pz] += carry & PyLong_MASK;
                }
            }
        }
        z.ob_size = z.ob_digit.length;
        return long_normalize(z);
    }

    function l_divmod(v, w, pdiv, pmod) {
        var div = $l_divmod_div, 
            mod = $l_divmod_mod; 

        if (long_divrem(v, w, div, mod) < 0)
                return -1;
        if (pdiv == null && pmod == null) return 0;

        if ((mod.ob_size < 0 && w.ob_size > 0) ||
            (mod.ob_size > 0 && w.ob_size < 0)) {
                mod = mod.__add__(w);
                div = div.__sub__($const_long_1);
        }
        if (pdiv !== null) {
            pdiv.ob_digit = div.ob_digit.slice(0);
            pdiv.ob_size = div.ob_size;
        }
        if (pmod !== null) {
            pmod.ob_digit = mod.ob_digit.slice(0);
            pmod.ob_size = mod.ob_size;
        }
        return 0;
    }



    /* XXX do not convert to $p['float_int'] - this is correct */
    var $long = pyjslib['long'] = function(value, radix) {
        var v, i;
        if (!radix || radix.valueOf() == 0) {
            if (typeof value == 'undefined') {
                throw $m['TypeError']("long() takes at least 1 argument");
            }
            switch (value.__number__) {
                case 0x01:
                    value = value > 0 ? Math.floor(value) : Math.ceil(value);
                    break;
                case 0x02:
                    break;
                case 0x04:
                    return value;
            }
            radix = null;
        }
        if (typeof this != 'object' || this.__number__ != 0x04) return new $long(value, radix);

        v = value;
        this.ob_size = 0;
        this.ob_digit = new Array();
        if (v.__number__) {
            if (radix) {
                throw $m['TypeError']("long() can't convert non-string with explicit base");
            }
            if (v.__number__ == 0x04) {
                var size = v.ob_size < 0 ? -v.ob_size:v.ob_size;
                for (var i = 0; i < size; i++) {
                    this.ob_digit[i] = v.ob_digit[i];
                }
                this.ob_size = v.ob_size;
                return this;
            }
            if (v.__number__ == 0x02) {
                var neg = false;
                var ndig = 0;
                v = v.valueOf();

                if (v < 0) {
                    v = -v;
                    neg = true;
                }
                // Count the number of Python digits.
                var t = v;
                while (t) {
                    this.ob_digit[ndig] = t & PyLong_MASK;
                    t >>>= PyLong_SHIFT;
                    ++ndig;
                }
                this.ob_size = neg ? -ndig : ndig;
                return this;
            }
            if (v.__number__ == 0x01) {
                var ndig, frac, expo, bits;
                var neg = false;

                if (isNaN(v)) {
                    throw $m['ValueError']('cannot convert float NaN to integer');
                }
                if (!isFinite(v)) {
                    throw $m['OverflowError']('cannot convert float infinity to integer');
                }
                if (v == 0) {
                    this.ob_digit[0] = 0;
                    this.ob_size = 0;
                    return this;
                }
                if (v < 0) {
                    v = -v;
                    neg = true;
                }
                // frac = frexp(dval, &expo); // dval = frac*2**expo; 0.0 <= frac < 1.0
                if (v == 0) {
                    frac = 0;
                    expo = 0;
                } else {
                    expo = Math.log(v)/$log2;
                    expo = (expo < 0 ? Math.ceil(expo):Math.floor(expo)) + 1;
                    frac = v / Math.pow(2.0, expo);
                }
                if (expo <= 0) {
                    return this;
                }
                ndig = Math.floor((expo-1) / PyLong_SHIFT) + 1;
                // ldexp(a,b) == a * (2**b)
                frac = frac * Math.pow(2.0, ((expo-1) % PyLong_SHIFT) + 1);
                for (var i = ndig; --i >= 0;) {
                    bits = Math.floor(frac);
                    this.ob_digit[i] = bits;
                    frac -= bits;
                    frac = frac * Math.pow(2.0, PyLong_SHIFT);
                }
                this.ob_size = neg ? -ndig : ndig;
                return this;
            }
            throw $m['ValueError']('cannot convert ' + $p['repr']($m.value) + 'to integer');
        } else if (typeof v == 'string') {
            var nchars;
            var text = value.lstrip();
            var i = 0;
            var neg = false;

            switch (text.charAt(0)) {
                case '-':
                    neg = true;
                case '+':
                    text = text.slice(1).lstrip();
            }

            if (!radix) {
                if (text == '0' || text.charAt(0) != '0') {
                    radix = 10;
                } else {
                    switch (text.charAt(1)) {
                        case 'x':
                        case 'X':
                            radix = 16;
                            break;
                        case 'o':
                        case 'O':
                            radix = 8;
                            break;
                        case 'b':
                        case 'B':
                            radix = 2;
                            break;
                        default:
                            radix = 8;
                            break;
                    }
                }
            } else if (radix < 1 || radix > 36) {
                throw $m['ValueError']("long() arg 2 must be >= 2 and <= 36");
            }
            if (text.charAt(0) == '0' && text.length > 1) {
                switch (text.charAt(1)) {
                    case 'x':
                    case 'X':
                        if (radix == 16) text = text.slice(2);
                        break;
                    case 'o':
                    case 'O':
                        if (radix == 8) text = text.slice(2);
                        break;
                    case 'b':
                    case 'B':
                        if (radix == 2) text = text.slice(2);
                        break;

                }
            }
            if ((radix & (radix - 1)) == 0) {
                // binary base: 2, 4, 8, ...
                var n, bits_per_char, accum, bits_in_accum, k, pdigit;
                var p = 0;

                n = radix;
                for (bits_per_char = -1; n; ++bits_per_char) {
                    n >>>= 1;
                }
                n = 0;
                while ($DigitValue[text.charCodeAt(p)] < radix) {
                    p++;
                }
                nchars = p;
                n = p * bits_per_char + PyLong_SHIFT-1; //14 = PyLong_SHIFT - 1
                if (n / bits_per_char < p) {
                    throw $m['ValueError']("long string too large to convert");
                }
                this.ob_size = n = Math.floor(n/PyLong_SHIFT);
                for (var i = 0; i < n; i++) {
                    this.ob_digit[i] = 0;
                }
                // Read string from right, and fill in long from left
                accum = 0;
                bits_in_accum = 0;
                pdigit = 0;
                while (--p >= 0) {
                    k = $DigitValue[text.charCodeAt(p)];
                    accum |= k << bits_in_accum;
                    bits_in_accum += bits_per_char;
                    if (bits_in_accum >= PyLong_SHIFT) {
                        this.ob_digit[pdigit] = accum & PyLong_MASK;
                        pdigit++;
                        accum >>>= PyLong_SHIFT;
                        bits_in_accum -= PyLong_SHIFT;
                    }
                }
                if (bits_in_accum) {
                    this.ob_digit[pdigit++] = accum;
                }
                while (pdigit < n) {
                    this.ob_digit[pdigit++] = 0;
                }
                long_normalize(this);
            } else {
                // Non-binary bases (such as radix == 10)
                var c, i, convwidth, convmultmax, convmult, pz, pzstop, scan, size_z;

                if ($log_base_PyLong_BASE[radix] == 0.0) {
                    var i = 1;
                    var convmax = radix;
                    $log_base_PyLong_BASE[radix] = Math.log(radix) / Math.log(PyLong_BASE);
                    while (1) {
                        var next = convmax * radix;
                        if (next > PyLong_BASE) break;
                        convmax = next;
                        ++i;
                    }
                    $convmultmax_base[radix] = convmax;
                    $convwidth_base[radix] = i;
                }
                scan = 0;
                while ($DigitValue[text.charCodeAt(scan)] < radix)
                    ++scan;
                nchars = scan;
                size_z = scan * $log_base_PyLong_BASE[radix] + 1;
                for (var i = 0; i < size_z; i ++) {
                    this.ob_digit[i] = 0;
                }
                this.ob_size = 0;
                convwidth = $convwidth_base[radix];
                convmultmax = $convmultmax_base[radix];
                for (var str = 0; str < scan;) {
                    c = $DigitValue[text.charCodeAt(str++)];
                    for (i = 1; i < convwidth && str != scan; ++i, ++str) {
                        c = c * radix + $DigitValue[text.charCodeAt(str)];
                    }
                    convmult = convmultmax;
                    if (i != convwidth) {
                        convmult = radix;
                        for ( ; i > 1; --i) convmult *= radix;
                    }
                    pz = 0;
                    pzstop = this.ob_size;
                    for (; pz < pzstop; ++pz) {
                        c += this.ob_digit[pz] * convmult;
                        this.ob_digit[pz] = c & PyLong_MASK;
                        c >>>= PyLong_SHIFT;
                    }
                    if (c) {
                        if (this.ob_size < size_z) {
                            this.ob_digit[pz] = c;
                            this.ob_size++;
                        } else {
                            this.ob_digit[this.ob_size] = c;
                        }
                    }
                }
            }
            text = text.slice(nchars);
            if (neg) this.ob_size = -this.ob_size;
            if (text.charAt(0) == 'l' || text.charAt(0) == 'L') text = text.slice(1);
            text = text.lstrip();
            if (text.length === 0) {
                return this;
            }
            throw $m['ValueError']("invalid literal for long() with base " +
                                     radix + ": " + value);
        } else {
            throw $m['TypeError']("TypeError: long() argument must be a string or a number");
        }
        if (isNaN(v) || !isFinite(v)) {
            throw $m['ValueError']("invalid literal for long() with base " + radix + ": '" + v + "'");
        }
        return this;
    };
    $long.__init__ = function () {};
    $long.__number__ = 0x04;
    $long.__name__ = 'long';
    $long.prototype = $long;
    $long.__class__ = $long;
    $long.ob_size = 0;

    $long.toExponential = function (fractionDigits) {
        return (typeof fractionDigits == 'undefined' || fractionDigits === null) ? this.__v.toExponential() : this.__v.toExponential(fractionDigits);
    };

    $long.toFixed = function (digits) {
        return (typeof digits == 'undefined' || digits === null) ? this.__v.toFixed() : this.__v.toFixed(digits);
    };

    $long.toLocaleString = function () {
        return this.__v.toLocaleString();
    };

    $long.toPrecision = function (precision) {
        return (typeof precision == 'undefined' || precision === null) ? this.__v.toPrecision() : this.__v.toPrecision(precision);
    };

    $long.toString = function (radix) {
        return (typeof radix == 'undefined' || radix === null) ? Format(this, 10, false, false) : Format(this, radix, false, false, false);
    };

    $long.valueOf = function() {
        var x, v;
        x = AsScaledDouble(this);
        // ldexp(a,b) == a * (2**b)
        v = x[0] * Math.pow(2.0, x[1] * PyLong_SHIFT);
        if (!isFinite(v)) {
            throw $m['OverflowError']('long int too large to convert to float');
        }
        return v;
    };

    $long.__str__ = function () {
        if (typeof this == 'function') return "<type '" + this.__name__ + "'>";
        return Format(this, 10, false, false);
    };

    $long.__repr__ = function () {
        if (typeof this == 'function') return "<type '" + this.__name__ + "'>";
        return Format(this, 10, true, false);
    };

    $long.__nonzero__ = function () {
        return this.ob_size != 0;
    };

    $long.__cmp__ = function (b) {
        var sign;
 
        if (this.ob_size != b.ob_size) {
            if (this.ob_size < b.ob_size) return -1;
            return 1;
        }
        var i = this.ob_size < 0 ? - this.ob_size : this.ob_size;
        while (--i >= 0 && this.ob_digit[i] == b.ob_digit[i])
            ;
        if (i < 0) return 0;
        if (this.ob_digit[i] < b.ob_digit[i]) {
            if (this.ob_size < 0) return 1;
            return -1;
        }
        if (this.ob_size < 0) return -1;
        return 1;
    };

    $long.__hash__ = function () {
        var s = this.__str__();
        var v = this.valueOf();
        if (v.toString() == s) {
            return v;
        }
        return s;
    };

    $long.__invert__ = function () {
        var x = this.__add__($const_long_1);
        x.ob_size = -x.ob_size;
        return x;
    };

    $long.__neg__ = function () {
        var x = new $long(0);
        x.ob_digit = this.ob_digit.slice(0);
        x.ob_size = -this.ob_size;
        return x;
    };

    $long.__abs__ = function () {
        if (this.ob_size >= 0) return this;
        var x = new $long(0);
        x.ob_digit = this.ob_digit.slice(0);
        x.ob_size = -x.ob_size;
        return x;
    };

    $long.__lshift = function (y) {
        var a, z, wordshift, remshift, oldsize, newsize, 
            accum, i, j;
        if (y < 0) {
            throw $m['ValueError']('negative shift count');
        }
        if (y >= $max_float_int) {
            throw $m['ValueError']('outrageous left shift count');
        }
        a = this;

        wordshift = Math.floor(y / PyLong_SHIFT);
        remshift  = y - wordshift * PyLong_SHIFT;

        oldsize = a.ob_size < 0 ? -a.ob_size : a.ob_size;
        newsize = oldsize + wordshift;
        if (remshift) ++newsize;
        z = new $long(0);
        z.ob_size = a.ob_size < 0 ? -newsize : newsize;
        for (i = 0; i < wordshift; i++) {
            z.ob_digit[i] = 0;
        }
        accum = 0;
        for (i = wordshift, j = 0; j < oldsize; i++, j++) {
            accum |= a.ob_digit[j] << remshift;
            z.ob_digit[i] = accum & PyLong_MASK;
            accum >>>= PyLong_SHIFT;
        }
        if (remshift) {
            z.ob_digit[newsize-1] = accum;
        }
        z = long_normalize(z);
        return z;
    };

    $long.__lshift__ = function (y) {
        switch (y.__number__) {
            case 0x01:
                if (y == Math.floor(y)) return this.__lshift(y);
                break;
            case 0x02:
                return this.__lshift(y.__v);
            case 0x04:
                y = y.valueOf();
                return this.__lshift(y);
        }
        return $p['NotImplemented'];
    };

    $long.__rlshift__ = function (y) {
        switch (y.__number__) {
            case 0x02:
                return (new $long(y.__v)).__lshift(this.valueOf());
            case 0x04:
                return y.__lshift(this.valueOf());
        }
        return $p['NotImplemented'];
    };

    $long.__rshift = function (y) {
        var a, z, size, wordshift, newsize, loshift, hishift,
            lomask, himask, i, j;
        if (y.__number__ != 0x01) {
            y = y.valueOf();
        } else {
            if (y != Math.floor(y)) {
                throw $m['TypeError']("unsupported operand type(s) for >>: 'long' and 'float'");
            }
        }
        if (y < 0) {
            throw $m['ValueError']('negative shift count');
        }
        if (y >= $max_float_int) {
            throw $m['ValueError']('shift count too big');
        }
        a = this;
        size = this.ob_size;
        if (this.ob_size < 0) {
            size = -size;
            a = this.__add__($const_long_1);
            a.ob_size = -a.ob_size;
        }

        wordshift = Math.floor(y / PyLong_SHIFT);
        newsize = size - wordshift;
        if (newsize <= 0) {
            z = $const_long_0;
        } else {
            loshift = y % PyLong_SHIFT;
            hishift = PyLong_SHIFT - loshift;
            lomask = (1 << hishift) - 1;
            himask = PyLong_MASK ^ lomask;
            z = new $long(0);
            z.ob_size = a.ob_size < 0 ? -newsize : newsize;
            for (i = 0, j = wordshift; i < newsize; i++, j++) {
                z.ob_digit[i] = (a.ob_digit[j] >>> loshift) & lomask;
                if (i+1 < newsize) {
                    z.ob_digit[i] |=
                      (a.ob_digit[j+1] << hishift) & himask;
                }
            }
            z = long_normalize(z);
        }

        if (this.ob_size < 0) {
            z = z.__add__($const_long_1);
            z.ob_size = -z.ob_size;
        }
        return z;
    };

    $long.__rshift__ = function (y) {
        switch (y.__number__) {
            case 0x01:
                if (y == Math.floor(y)) return this.__rshift(y);
                break;
            case 0x02:
                return this.__rshift(y.__v);
            case 0x04:
                y = y.valueOf();
                return this.__rshift(y);
        }
        return $p['NotImplemented'];
    };

    $long.__rrshift__ = function (y) {
        switch (y.__number__) {
            case 0x02:
                return (new $long(y.__v)).__rshift(this.valueOf());
            case 0x04:
                return y.__rshift(this.valueOf());
        }
        return $p['NotImplemented'];
    };

    $long.__and = function (b) {
        var a, maska, maskb, negz, size_a, size_b, size_z,
            i, z, diga, digb, v, op;

        a = this;

        if (a.ob_size < 0) {
            a = a.__invert__();
            maska = PyLong_MASK;
        } else {
            maska = 0;
        }
        if (b.ob_size < 0) {
            b = b.__invert__();
            maskb = PyLong_MASK;
        } else {
            maskb = 0;
        }
        negz = 0;


            op = '&';
            if (maska && maskb) {
                op = '|';
                maska ^= PyLong_MASK;
                maskb ^= PyLong_MASK;
                negz = -1;
            }


        size_a = a.ob_size;
        size_b = b.ob_size;
        size_z = op == '&'
                    ? (maska
                        ? size_b
                        : (maskb ? size_a : (size_a < size_b ? size_a : size_b)))
                    : (size_a > size_b ? size_a : size_b);
        z = new $long(0);
        z.ob_size = size_z;

        switch (op) {
            case '&':
                for (i = 0; i < size_z; ++i) {
                    diga = (i < size_a ? a.ob_digit[i] : 0) ^ maska;
                    digb = (i < size_b ? b.ob_digit[i] : 0) ^ maskb;
                    z.ob_digit[i] = diga & digb;
                }
                break;
            case '|':
                for (i = 0; i < size_z; ++i) {
                    diga = (i < size_a ? a.ob_digit[i] : 0) ^ maska;
                    digb = (i < size_b ? b.ob_digit[i] : 0) ^ maskb;
                    z.ob_digit[i] = diga | digb;
                }
                break;
            case '^':
                for (i = 0; i < size_z; ++i) {
                    diga = (i < size_a ? a.ob_digit[i] : 0) ^ maska;
                    digb = (i < size_b ? b.ob_digit[i] : 0) ^ maskb;
                    z.ob_digit[i] = diga ^ digb;
                }
                break;
        }
        z = long_normalize(z);
        if (negz == 0) {
            return z;
        }
        return z.__invert__();
    };

    $long.__and__ = function (y) {
        switch (y.__number__) {
            case 0x01:
                if (y == Math.floor(y)) return this.__and(new $long(y));
                break;
            case 0x02:
                return this.__and(new $long(y.__v));
            case 0x04:
                return this.__and(y);
        }
        return $p['NotImplemented'];
    };

    $long.__rand__ = $long.__and__;

    $long.__xor = function (b) {
        var a,maska, maskb, negz, size_a, size_b, size_z,
            i, z, diga, digb, v, op;

        a = this;

        if (a.ob_size < 0) {
            a = a.__invert__();
            maska = PyLong_MASK;
        } else {
            maska = 0;
        }
        if (b.ob_size < 0) {
            b = b.__invert__();
            maskb = PyLong_MASK;
        } else {
            maskb = 0;
        }
        negz = 0;


            op = '^';
            if (maska != maskb) {
                maska ^= PyLong_MASK;
                negz = -1;
            }


        size_a = a.ob_size;
        size_b = b.ob_size;
        size_z = op == '&'
                    ? (maska
                        ? size_b
                        : (maskb ? size_a : (size_a < size_b ? size_a : size_b)))
                    : (size_a > size_b ? size_a : size_b);
        z = new $long(0);
        z.ob_size = size_z;

        switch (op) {
            case '&':
                for (i = 0; i < size_z; ++i) {
                    diga = (i < size_a ? a.ob_digit[i] : 0) ^ maska;
                    digb = (i < size_b ? b.ob_digit[i] : 0) ^ maskb;
                    z.ob_digit[i] = diga & digb;
                }
                break;
            case '|':
                for (i = 0; i < size_z; ++i) {
                    diga = (i < size_a ? a.ob_digit[i] : 0) ^ maska;
                    digb = (i < size_b ? b.ob_digit[i] : 0) ^ maskb;
                    z.ob_digit[i] = diga | digb;
                }
                break;
            case '^':
                for (i = 0; i < size_z; ++i) {
                    diga = (i < size_a ? a.ob_digit[i] : 0) ^ maska;
                    digb = (i < size_b ? b.ob_digit[i] : 0) ^ maskb;
                    z.ob_digit[i] = diga ^ digb;
                }
                break;
        }
        z = long_normalize(z);
        if (negz == 0) {
            return z;
        }
        return z.__invert__();
    };

    $long.__xor__ = function (y) {
        switch (y.__number__) {
            case 0x01:
                if (y == Math.floor(y)) return this.__xor(new $long(y));
                break;
            case 0x02:
                return this.__xor(new $long(y.__v));
            case 0x04:
                return this.__xor(y);
        }
        return $p['NotImplemented'];
    };

    $long.__rxor__ = $long.__xor__;

    $long.__or = function (b) {
        var a, maska, maskb, negz, size_a, size_b, size_z,
            i, z, diga, digb, v, op;

        a = this;

        if (a.ob_size < 0) {
            a = a.__invert__();
            maska = PyLong_MASK;
        } else {
            maska = 0;
        }
        if (b.ob_size < 0) {
            b = b.__invert__();
            maskb = PyLong_MASK;
        } else {
            maskb = 0;
        }
        negz = 0;


            op = '|';
            if (maska || maskb) {
                op = '&';
                maska ^= PyLong_MASK;
                maskb ^= PyLong_MASK;
                negz = -1;
            }


        size_a = a.ob_size;
        size_b = b.ob_size;
        size_z = op == '&'
                    ? (maska
                        ? size_b
                        : (maskb ? size_a : (size_a < size_b ? size_a : size_b)))
                    : (size_a > size_b ? size_a : size_b);
        z = new $long(0);
        z.ob_size = size_z;

        switch (op) {
            case '&':
                for (i = 0; i < size_z; ++i) {
                    diga = (i < size_a ? a.ob_digit[i] : 0) ^ maska;
                    digb = (i < size_b ? b.ob_digit[i] : 0) ^ maskb;
                    z.ob_digit[i] = diga & digb;
                }
                break;
            case '|':
                for (i = 0; i < size_z; ++i) {
                    diga = (i < size_a ? a.ob_digit[i] : 0) ^ maska;
                    digb = (i < size_b ? b.ob_digit[i] : 0) ^ maskb;
                    z.ob_digit[i] = diga | digb;
                }
                break;
            case '^':
                for (i = 0; i < size_z; ++i) {
                    diga = (i < size_a ? a.ob_digit[i] : 0) ^ maska;
                    digb = (i < size_b ? b.ob_digit[i] : 0) ^ maskb;
                    z.ob_digit[i] = diga ^ digb;
                }
                break;
        }
        z = long_normalize(z);
        if (negz == 0) {
            return z;
        }
        return z.__invert__();
    };

    $long.__or__ = function (y) {
        switch (y.__number__) {
            case 0x01:
                if (y == Math.floor(y)) return this.__or(new $long(y));
                break;
            case 0x02:
                return this.__or(new $long(y.__v));
            case 0x04:
                return this.__or(y);
        }
        return $p['NotImplemented'];
    };

    $long.__ror__ = $long.__or__;

    $long.__oct__ = function () {
        return Format(this, 8, true, false);
    };

    $long.__hex__ = function () {
        return Format(this, 16, true, false);
    };

    $long.__add = function (b) {
        var a = this, z;
        if (a.ob_size < 0) {
            if (b.ob_size < 0) {
                z = x_add(a, b);
                z.ob_size = -(z.ob_size);
            }
            else {
                z = x_sub(b, a);
            }
        }
        else {
            z = b.ob_size < 0 ? x_sub(a, b) : x_add(a, b);
        }
        return z;
    };

    $long.__add__ = function (y) {
        switch (y.__number__) {
            case 0x02:
                return this.__add(new $long(y.__v));
            case 0x04:
                return this.__add(y);
        }
        return $p['NotImplemented'];
    };

    $long.__radd__ = $long.__add__;

    $long.__sub = function (b) {
        var a = this, z;
        if (a.ob_size < 0) {
            z = b.ob_size < 0 ? x_sub(a, b) : x_add(a, b);
            z.ob_size = -(z.ob_size);
        }
        else {
            z = b.ob_size < 0 ?  x_add(a, b) : x_sub(a, b);
        }
        return z;
    };

    $long.__sub__ = function (y) {
        switch (y.__number__) {
            case 0x02:
                return this.__sub(new $long(y.__v));
            case 0x04:
                return this.__sub(y);
        }
        return $p['NotImplemented'];
    };

    $long.__rsub__ = function (y) {
        switch (y.__number__) {
            case 0x02:
                return (new $long(y.__v)).__sub(this);
            case 0x04:
                return y.__sub(this);
        }
        return $p['NotImplemented'];
    };

    $long.__mul = function (b) {
        //var z = k_mul(a, b);
        var z = x_mul(this, b);
        if ((this.ob_size ^ b.ob_size) < 0)
            z.ob_size = -(z.ob_size);
        return z;
    };

    $long.__mul__ = function (y) {
        switch (y.__number__) {
            case 0x02:
                return this.__mul(new $long(y.__v));
            case 0x04:
                return this.__mul(y);
        }
        return $p['NotImplemented'];
    };

    $long.__rmul__ = $long.__mul__;

    $long.__div = function (b) {
        var div = new $long(0);
        l_divmod(this, b, div, null);
        return div;
    };

    $long.__div__ = function (y) {
        switch (y.__number__) {
            case 0x02:
                return this.__sub(new $long(y.__v));
            case 0x04:
                return this.__sub(y);
        }
        return $p['NotImplemented'];
    };

    $long.__rdiv__ = function (y) {
        switch (y.__number__) {
            case 0x02:
                return (new $long(y.__v)).__div(this);
            case 0x04:
                return y.__div(this);
        }
        return $p['NotImplemented'];
    };

    $long.__mod = function (b) {
        var mod = new $long(0);
        l_divmod(this, b, null, mod);
        return mod;
    };

    $long.__mod__ = function (y) {
        switch (y.__number__) {
            case 0x02:
                return this.__mod(new $long(y.__v));
            case 0x04:
                return this.__mod(y);
        }
        return $p['NotImplemented'];
    };

    $long.__rmod__ = function (y) {
        switch (y.__number__) {
            case 0x02:
                return (new $long(y.__v)).__mod(this);
            case 0x04:
                return y.__mod(this);
        }
        return $p['NotImplemented'];
    };

    $long.__divmod = function (b) {
        var div = new $long(0);
        var mod = new $long(0);
        l_divmod(this, b, div, mod);
        return $p['tuple']([div, mod]);
    };

    $long.__divmod__ = function (y) {
        switch (y.__number__) {
            case 0x02:
                return this.__divmod(new $long(y.__v));
            case 0x04:
                return this.__divmod(y);
        }
        return $p['NotImplemented'];
    };

    $long.__rdivmod__ = function (y) {
        switch (y.__number__) {
            case 0x02:
                return (new $long(y.__v)).__divmod(this);
            case 0x04:
                return y.__divmod(this);
        }
        return $p['NotImplemented'];
    };

    $long.__floordiv = function (b) {
        var div = new $long(0);
        l_divmod(this, b, div, null);
        return div;
    };

    $long.__floordiv__ = function (y) {
        switch (y.__number__) {
            case 0x02:
                return this.__floordiv(new $long(y.__v));
            case 0x04:
                return this.__floordiv(y);
        }
        return $p['NotImplemented'];
    };

    $long.__rfloordiv__ = function (y) {
        switch (y.__number__) {
            case 0x02:
                return (new $long(y.__v)).__floordiv(this);
            case 0x04:
                return y.__floordiv(this);
        }
        return $p['NotImplemented'];
    };

    $long.__pow = function (w, x) {
        var v = this;
        var a, b, c, negativeOutput = 0, z, i, j, k, temp, bi;
        var table = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                     0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

        a = this;
        b = w.__number__ == 0x04 ? w : new $long(w);
        if (x === null || typeof x == 'undefined') {
            c = null;
        } else {
            c = x.__number__ == 0x04 ? x : new $long(x);
        }

        if (b.ob_size < 0) {
            if (c !== null) {
                throw $m['TypeError']("pow() 2nd argument cannot be negative when 3rd argument specified");
            }
            return Math.pow(v.valueOf(), w.valueOf());
        }

        if (c !== null) {
            if (c.ob_size == 0) {
                throw $m['ValueError']("pow() 3rd argument cannot be 0");
            }
            if (c.ob_size < 0) {
                negativeOutput = 1;
                temp = $pow_temp_c;
                temp.ob_digit = c.ob_digit.slice(0);
                temp.ob_size = -c.ob_size;
                c = temp;
            }
            if (c.ob_size == 1 && c.ob_digit[0] == 1) {
                return $const_long_0;
            }
            if (a.ob_size < 0) {
                temp = $pow_temp_a;
                l_divmod(a, c, null, temp);
                a = temp;
            }
        }
        z = new $long(1);
        temp = $pow_temp_z;
        if (b.ob_size <= FIVEARY_CUTOFF) {
            for (i = b.ob_size - 1; i >= 0; --i) {
                bi = b.ob_digit[i];
                for (j = 1 << (PyLong_SHIFT-1); j != 0; j >>>= 1) {
                    z = z.__mul(z);
                    if (c !== null) {
                        l_divmod(z, c, null, temp);
                        z.ob_digit = temp.ob_digit.slice(0);
                        z.ob_size = temp.ob_size;
                    }
                    if (bi & j) {
                        z = z.__mul(a);
                        if (c !== null) {
                            l_divmod(z, c, null, temp);
                            z.ob_digit = temp.ob_digit.slice(0);
                            z.ob_size = temp.ob_size;
                        }
                    }
                }
            }
        } else {
            table[0] = z;
            for (i = 1; i < 32; ++i) {
                table[i] = table[i-1].__mul(a);
                if (c !== null) {
                    l_divmod(table[i], c, null, temp);
                    table[i].ob_digit = temp.ob_digit.slice(0);
                    table[i].ob_size = temp.ob_size;
                }
            }
            for (i = b.ob_size - 1; i >= 0; --i) {
                bi = b.ob_digit[i];
                for (j = PyLong_SHIFT - 5; j >= 0; j -= 5) {
                    var index = (bi >>> j) & 0x1f;
                    for (k = 0; k < 5; ++k) {
                        z = z.__mul(z);
                        if (c !== null) {
                            l_divmod(z, c, null, temp);
                            z.ob_digit = temp.ob_digit.slice(0);
                            z.ob_size = temp.ob_size;
                        }
                    }
                    if (index) {
                        z = z.__mul(table[index]);
                        if (c !== null) {
                            l_divmod(z, c, null, temp);
                            z.ob_digit = temp.ob_digit.slice(0);
                            z.ob_size = temp.ob_size;
                        }
                    }
                }
            }
        }

        if ((c !== null) && negativeOutput && 
            (z.ob_size != 0) && (c.ob_size != 0)) {
            z = z.__sub__(c);
        }
        return z;
    };

    $long.__pow__ = function (y, z) {
        switch (y.__number__) {
            case 0x02:
                if (typeof z == 'undefined')
                    return this.__pow(new $long(y.__v), null);
                switch (z.__number) {
                    case 0x02:
                        return this.__pow(new $long(y.__v), new $long(z));
                    case 0x04:
                        return this.__pow(new $long(y.__v), z);
                }
                break;
            case 0x04:
                if (typeof z == 'undefined')
                    return this.__pow(y, null);
                switch (z.__number) {
                    case 0x02:
                        return this.__pow(y, new $long(z));
                    case 0x04:
                        return this.__pow(y, z);
                }
                break;
        }
        return $p['NotImplemented'];
    };


    var $const_long_0 = new $long(0),
        $const_long_1 = new $long(1);
    // Since javascript is single threaded:
    var $l_divmod_div = new $long(0),
        $l_divmod_mod = new $long(0),
        $x_divrem_v = new $long(0),
        $x_divrem_w = new $long(0),
        $pow_temp_a = new $long(0),
        $pow_temp_c = new $long(0),
        $pow_temp_z = new $long(0);
})();

	var attrib_remap = $m.attrib_remap = ['apply', 'break', 'call', 'case', 'catch', 'class', 'comment', 'const', 'constructor', 'continue', 'debugger', 'default', 'delete', 'do', 'else', 'enum', 'export', 'extends', 'finally', 'for', 'function', 'if', 'import', 'in', 'label', 'name', 'new', 'prototype', 'replace', 'return', 'split', 'super', 'switch', 'this', 'throw', 'try', 'typeof', 'var', 'void', 'while', 'with'];
	var var_remap = $m.var_remap = ['arguments', 'break', 'case', 'catch', 'char', 'class', 'comment', 'const', 'continue', 'debugger', 'default', 'delete', 'do', 'else', 'enum', 'export', 'extends', 'final', 'finally', 'for', 'function', 'if', 'import', 'in', 'label', 'new', 'return', 'super', 'switch', 'this', 'throw', 'try', 'typeof', 'var', 'void', 'while', 'with'];

	$m['NotImplementedType'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = 'dd5c613d7262e8a680928bffff333914';
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return '\x3Ctype \x27NotImplementedType\x27\x3E';
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		$method = $pyjs__bind_method2('__str__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['__repr__']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__str__'] = $method;
		$method = $pyjs__bind_method2('toString', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['__repr__']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['toString'] = $method;
		var $bases = new Array($m['object']);
		return $pyjs_type('NotImplementedType', $bases, $cls_definition);
	})();
	$m['NotImplemented'] = $m['NotImplementedType']();

var $iter_array = function (l) {
    this.__array = l;
    this.i = -1;
};
$iter_array.prototype.next = function (noStop) {
    if (++this.i == this.__array.length) {
        if (noStop === true) {
            return;
        }
        throw $p['StopIteration'];
    }
    return this.__array[this.i];
};
$iter_array.prototype.__iter__ = function ( ) {
    return this;
};
var $reversed_iter_array = function (l) {
    this.___array = l;
    this.i = l.length;
};
$reversed_iter_array.prototype.next = function (noStop) {
    if (--this.i == -1) {
        if (noStop === true) {
            return;
        }
        throw $p['StopIteration'];
    }
    return this.___array[this.i];
};
$reversed_iter_array.prototype.__iter__ = function ( ) {
    return this;
};
//$reversed_iter_array.prototype.$genfunc = $reversed_iter_array.prototype.next;
var $enumerate_array = function (l) {
    this.array = l;
    this.i = -1;
    this.tuple = 
	$p['tuple']($p['list']([0, '']));

    this.tl = this.tuple.__array;
};
$enumerate_array.prototype.next = function (noStop, reuseTuple) {
    if (++this.i == this.array.length) {
        if (noStop === true) {
            return;
        }
        throw $p['StopIteration'];
    }
    this.tl[1] = this.array[this.i];
    if (this.tl[0].__number__ == 0x01) {
        this.tl[0] = this.i;
    } else {
        this.tl[0] = new $p['float_int'](this.i);
    }
    return reuseTuple === true ? this.tuple : $p['tuple'](this.tl);
};
$enumerate_array.prototype.__iter__ = function ( ) {
    return this;
};
$enumerate_array.prototype.$genfunc = $enumerate_array.prototype.next;

	$m['list'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '7a7b370deec2b40fcd01444fddbab0a6';
		$method = $pyjs__bind_method2('__init__', function(data) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
			}
			if (typeof data == 'undefined') data=arguments.callee.__args__[3][1];


        if (data === null) {
            throw $m['TypeError']("'NoneType' is not iterable");
        }
        if (data.constructor === Array) {
            self.__array = data.slice();
            return null;
        }
        if (typeof data.__iter__ == 'function') {
            if (typeof data.__array == 'object') {
                self.__array = data.__array.slice();
                return null;
            }
            var iter = data.__iter__();
            if (typeof iter.__array == 'object') {
                self.__array = iter.__array.slice();
                return null;
            }
            data = [];
            var item, i = 0;
            if (typeof iter.$genfunc == 'function') {
                while (typeof (item=iter.next(true)) != 'undefined') {
                    data[i++] = item;
                }
            } else {
                try {
                    while (true) {
                        data[i++] = iter.next();
                    }
                }
                catch (e) {
                    if (e.__name__ != 'StopIteration') throw e;
                }
            }
            self.__array = data;
            return null;
        }
        throw $m['TypeError']("'" + $p['repr'](data) + "' is not iterable");
        
		}
	, 1, [null,null,['self'],['data', []]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__hash__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			throw ($m['TypeError']('list objects are unhashable'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__hash__'] = $method;
		$method = $pyjs__bind_method2('append', function(item) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				item = arguments[1];
			}

self.__array[self.__array.length] = item;
		}
	, 1, [null,null,['self'],['item']]);
		$cls_definition['append'] = $method;
		$method = $pyjs__bind_method2('extend', function(data) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
			}


        if (data === null) {
            throw $m['TypeError']("'NoneType' is not iterable");
        }
        if (data.constructor === Array) {
        } else if (typeof data.__iter__ == 'function') {
            if (typeof data.__array == 'object') {
                data = data.__array;
            } else {
                var iter = data.__iter__();
                if (typeof iter.__array == 'object') {
                    data = iter.__array;
                }
                data = [];
                var item, i = 0;
                if (typeof iter.$genfunc == 'function') {
                    while (typeof (item=iter.next(true)) != 'undefined') {
                        data[i++] = item;
                    }
                } else {
                    try {
                        while (true) {
                            data[i++] = iter.next();
                        }
                    }
                    catch (e) {
                        if (e.__name__ != 'StopIteration') throw e;
                    }
                }
            }
        } else {
            throw $m['TypeError']("'" + $p['repr'](data) + "' is not iterable");
        }
        var l = self.__array;
        var j = self.__array.length;
        var n = data.length, i = 0;
        while (i < n) {
            l[j++] = data[i++];
        }
        
		}
	, 1, [null,null,['self'],['data']]);
		$cls_definition['extend'] = $method;
		$method = $pyjs__bind_method2('remove', function(value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}


        var index=self.index(value);
        if (index<0) {
            throw $m['ValueError']("list.remove(x): x not in list");
        }
        self.__array.splice(index, 1);
        return true;
        
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['remove'] = $method;
		$method = $pyjs__bind_method2('index', function(value, _start) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
				_start = arguments[2];
			}
			if (typeof _start == 'undefined') _start=arguments.callee.__args__[4][1];


        var start = _start.valueOf();
        /* if (typeof valueXXX == 'number' || typeof valueXXX == 'string') {
            start = selfXXX.__array.indexOf(valueXXX, start);
            if (start >= 0)
                return start;
        } else */ {
            var len = self.__array.length >>> 0;

            start = (start < 0)
                    ? Math.ceil(start)
                    : Math.floor(start);
            if (start < 0)
                start += len;

            for (; start < len; start++) {
                if ( /*start in selfXXX.__array && */
                    $m['cmp'](self.__array[start], value) == 0)
                    return start;
            }
        }
        
			throw ($m['ValueError']('list.index(x): x not in list'));
			return null;
		}
	, 1, [null,null,['self'],['value'],['_start', 0]]);
		$cls_definition['index'] = $method;
		$method = $pyjs__bind_method2('insert', function(index, value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
				value = arguments[2];
			}

    var a = self.__array; self.__array=a.slice(0, index).concat(value, a.slice(index));
		}
	, 1, [null,null,['self'],['index'],['value']]);
		$cls_definition['insert'] = $method;
		$method = $pyjs__bind_method2('pop', function(_index) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				_index = arguments[1];
			}
			if (typeof _index == 'undefined') _index=arguments.callee.__args__[3][1];


        var index = _index.valueOf();
        if (index<0) index += self.__array.length;
        if (index < 0 || index >= self.__array.length) {
            if (self.__array.length == 0) {
                throw $m['IndexError']("pop from empty list");
            }
            throw $m['IndexError']("pop index out of range");
        }
        var a = self.__array[index];
        self.__array.splice(index, 1);
        return a;
        
		}
	, 1, [null,null,['self'],['_index', (typeof ($usub1=1)=='number'?
			-$usub1:
			$m['op_usub']($usub1))]]);
		$cls_definition['pop'] = $method;
		$method = $pyjs__bind_method2('__cmp__', function(l) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				l = arguments[1];
			}
			var $bool76,$bool75;
			if ((($bool76=!(($bool75=$p['isinstance'](l, $m['list'])) === null || $bool75 === false || $bool75 === 0 || $bool75 === '' ?
				false :
				(typeof $bool75=='object'?
					(typeof $bool75.__nonzero__=='function'?
						$bool75.__nonzero__() :
						(typeof $bool75.__len__=='function'?
							($bool75.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool76 === false || $bool76 === 0 || $bool76 === '' ?
					false :
					(typeof $bool76=='object'?
						(typeof $bool76.__nonzero__=='function'?
							$bool76.__nonzero__() :
							(typeof $bool76.__len__=='function'?
								($bool76.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return (typeof ($usub2=1)=='number'?
					-$usub2:
					$m['op_usub']($usub2));
			}

        var n1 = self.__array.length,
            n2 = l.__array.length,
            a1 = self.__array,
            a2 = l.__array,
            n, c;
        n = (n1 < n2 ? n1 : n2);
        for (var i = 0; i < n; i++) {
            c = $m['cmp'](a1[i], a2[i]);
            if (c) return c;
        }
        if (n1 < n2) return -1;
        if (n1 > n2) return 1;
        return 0;
		}
	, 1, [null,null,['self'],['l']]);
		$cls_definition['__cmp__'] = $method;
		$method = $pyjs__bind_method2('__getslice__', function(lower, upper) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				lower = arguments[1];
				upper = arguments[2];
			}


        if (upper==null)
            return $m['list'](self.__array.slice(lower));
        return $m['list'](self.__array.slice(lower, upper));
        
		}
	, 1, [null,null,['self'],['lower'],['upper']]);
		$cls_definition['__getslice__'] = $method;
		$method = $pyjs__bind_method2('__delslice__', function(_lower, upper) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				_lower = arguments[1];
				upper = arguments[2];
			}


        var lower = _lower;
        var n = upper - lower;
        if (upper==null) {
            n =  self.__array.length;
        }
        if (!lower) lower = 0;
        if (n > 0) self.__array.splice(lower, n);
        
			return null;
		}
	, 1, [null,null,['self'],['_lower'],['upper']]);
		$cls_definition['__delslice__'] = $method;
		$method = $pyjs__bind_method2('__setslice__', function(lower, upper, data) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				lower = arguments[1];
				upper = arguments[2];
				data = arguments[3];
			}
			var tail;
			self['__delslice__'](lower, upper);
			tail = self['__getslice__'](lower, null);
			self['__delslice__'](lower, null);
			self['extend'](data);
			self['extend'](tail);
			return null;
		}
	, 1, [null,null,['self'],['lower'],['upper'],['data']]);
		$cls_definition['__setslice__'] = $method;
		$method = $pyjs__bind_method2('__getitem__', function(_index) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				_index = arguments[1];
			}


        var index = _index.valueOf();
        if (index < 0) index += self.__array.length;
        if (index < 0 || index >= self.__array.length) {
            throw $m['IndexError']("list index out of range");
        }
        return self.__array[index];
        
		}
	, 1, [null,null,['self'],['_index']]);
		$cls_definition['__getitem__'] = $method;
		$method = $pyjs__bind_method2('__setitem__', function(_index, value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				_index = arguments[1];
				value = arguments[2];
			}


        var index = _index.valueOf();
        if (index < 0) index += self.__array.length;
        if (index < 0 || index >= self.__array.length) {
            throw $m['IndexError']("list assignment index out of range");
        }
        self.__array[index]=value;
        
		}
	, 1, [null,null,['self'],['_index'],['value']]);
		$cls_definition['__setitem__'] = $method;
		$method = $pyjs__bind_method2('__delitem__', function(_index) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				_index = arguments[1];
			}


        var index = _index.valueOf();
        if (index < 0) index += self.__array.length;
        if (index < 0 || index >= self.__array.length) {
            throw $m['IndexError']("list assignment index out of range");
        }
        self.__array.splice(index, 1);
        
		}
	, 1, [null,null,['self'],['_index']]);
		$cls_definition['__delitem__'] = $method;
		$method = $pyjs__bind_method2('__len__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self.__array.length;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__len__'] = $method;
		$method = $pyjs__bind_method2('__contains__', function(value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}
			var $pyjs_try_err;
			try {
				self['index'](value);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (($pyjs_try_err_name == $m['ValueError'].__name__)||$p['_isinstance']($pyjs_try_err,$m['ValueError'])) {
					return false;
				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			}
			return true;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['__contains__'] = $method;
		$method = $pyjs__bind_method2('__iter__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return new $iter_array(self.__array);
		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		$method = $pyjs__bind_method2('__reversed__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return new $reversed_iter_array(self.__array);
		}
	, 1, [null,null,['self']]);
		$cls_definition['__reversed__'] = $method;
		$method = $pyjs__bind_method2('__enumerate__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return new $enumerate_array(self.__array);
		}
	, 1, [null,null,['self']]);
		$cls_definition['__enumerate__'] = $method;
		$method = $pyjs__bind_method2('reverse', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

    self.__array.reverse();
		}
	, 1, [null,null,['self']]);
		$cls_definition['reverse'] = $method;
		$method = $pyjs__bind_method2('sort', function(cmp, key, reverse) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				cmp = arguments[1];
				key = arguments[2];
				reverse = arguments[3];
			}
			if (typeof cmp == 'undefined') cmp=arguments.callee.__args__[3][1];
			if (typeof key == 'undefined') key=arguments.callee.__args__[4][1];
			if (typeof reverse == 'undefined') reverse=arguments.callee.__args__[5][1];
			var $bool81,$bool80,$bool78,$bool79,thisSort1,$bool77,thisSort2,$and18,$and19,thisSort3;
			if ((($bool77=(cmp === null)) === null || $bool77 === false || $bool77 === 0 || $bool77 === '' ?
					false :
					(typeof $bool77=='object'?
						(typeof $bool77.__nonzero__=='function'?
							$bool77.__nonzero__() :
							(typeof $bool77.__len__=='function'?
								($bool77.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				cmp = $m['__cmp'];
			}
			if ((($bool79=((($bool78=$and18=key) === null || $bool78 === false || $bool78 === 0 || $bool78 === '' ?
				false :
				(typeof $bool78=='object'?
					(typeof $bool78.__nonzero__=='function'?
						$bool78.__nonzero__() :
						(typeof $bool78.__len__=='function'?
							($bool78.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?reverse:$and18)) === null || $bool79 === false || $bool79 === 0 || $bool79 === '' ?
					false :
					(typeof $bool79=='object'?
						(typeof $bool79.__nonzero__=='function'?
							$bool79.__nonzero__() :
							(typeof $bool79.__len__=='function'?
								($bool79.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				thisSort1 = function(a, b) {

					return (typeof ($usub3=cmp(key(a), key(b)))=='number'?
						-$usub3:
						$m['op_usub']($usub3));
				};
				thisSort1.__name__ = 'thisSort1';

				thisSort1.__bind_type__ = 0;
				thisSort1.__args__ = [null,null,['a'],['b']];
				self['__array']['sort'](thisSort1);
			}
			else if ((($bool80=key) === null || $bool80 === false || $bool80 === 0 || $bool80 === '' ?
					false :
					(typeof $bool80=='object'?
						(typeof $bool80.__nonzero__=='function'?
							$bool80.__nonzero__() :
							(typeof $bool80.__len__=='function'?
								($bool80.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				thisSort2 = function(a, b) {

					return cmp(key(a), key(b));
				};
				thisSort2.__name__ = 'thisSort2';

				thisSort2.__bind_type__ = 0;
				thisSort2.__args__ = [null,null,['a'],['b']];
				self['__array']['sort'](thisSort2);
			}
			else if ((($bool81=reverse) === null || $bool81 === false || $bool81 === 0 || $bool81 === '' ?
					false :
					(typeof $bool81=='object'?
						(typeof $bool81.__nonzero__=='function'?
							$bool81.__nonzero__() :
							(typeof $bool81.__len__=='function'?
								($bool81.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				thisSort3 = function(a, b) {

					return (typeof ($usub4=cmp(a, b))=='number'?
						-$usub4:
						$m['op_usub']($usub4));
				};
				thisSort3.__name__ = 'thisSort3';

				thisSort3.__bind_type__ = 0;
				thisSort3.__args__ = [null,null,['a'],['b']];
				self['__array']['sort'](thisSort3);
			}
			else {
				self['__array']['sort'](cmp);
			}
			return null;
		}
	, 1, [null,null,['self'],['cmp', null],['key', null],['reverse', false]]);
		$cls_definition['sort'] = $method;
		$method = $pyjs__bind_method2('getArray', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr53,$attr54;
			return self['__array'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['getArray'] = $method;
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool82,$attr55,$attr56;
			if ((($bool82=$p['callable'](self)) === null || $bool82 === false || $bool82 === 0 || $bool82 === '' ?
					false :
					(typeof $bool82=='object'?
						(typeof $bool82.__nonzero__=='function'?
							$bool82.__nonzero__() :
							(typeof $bool82.__len__=='function'?
								($bool82.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return $p['sprintf']('\x3Ctype \x27%s\x27\x3E', self['__name__']);
			}

        var s = "[";
        for (var i=0; i < self.__array.length; i++) {
            s += $p['repr'](self.__array[i]);
            if (i < self.__array.length - 1)
                s += ", ";
        }
        s += "]";
        return s;
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		$method = $pyjs__bind_method2('__add__', function(y) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				y = arguments[1];
			}
			var $bool83,$attr58,$bool84,$attr57;
			if ((($bool84=!(($bool83=$p['isinstance'](y, self)) === null || $bool83 === false || $bool83 === 0 || $bool83 === '' ?
				false :
				(typeof $bool83=='object'?
					(typeof $bool83.__nonzero__=='function'?
						$bool83.__nonzero__() :
						(typeof $bool83.__len__=='function'?
							($bool83.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool84 === false || $bool84 === 0 || $bool84 === '' ?
					false :
					(typeof $bool84=='object'?
						(typeof $bool84.__nonzero__=='function'?
							$bool84.__nonzero__() :
							(typeof $bool84.__len__=='function'?
								($bool84.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				throw ($m['TypeError']('can only concatenate list to list'));
			}
			return $m['list'](self['__array']['concat'](y['__array']));
		}
	, 1, [null,null,['self'],['y']]);
		$cls_definition['__add__'] = $method;
		$method = $pyjs__bind_method2('__mul__', function(n) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				n = arguments[1];
			}
			var a,$attr59,$bool87,$bool86,$bool85,$attr60,$sub3,$sub4;
			if ((($bool86=!(($bool85=n !== null && n.__number__ && (n.__number__ != 0x01 || isFinite(n))) === null || $bool85 === false || $bool85 === 0 || $bool85 === '' ?
				false :
				(typeof $bool85=='object'?
					(typeof $bool85.__nonzero__=='function'?
						$bool85.__nonzero__() :
						(typeof $bool85.__len__=='function'?
							($bool85.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool86 === false || $bool86 === 0 || $bool86 === '' ?
					false :
					(typeof $bool86=='object'?
						(typeof $bool86.__nonzero__=='function'?
							$bool86.__nonzero__() :
							(typeof $bool86.__len__=='function'?
								($bool86.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				throw ($m['TypeError']('can\x27t multiply sequence by non-int'));
			}
			a = $p['list']([]);
			while ((($bool87=n) === null || $bool87 === false || $bool87 === 0 || $bool87 === '' ?
					false :
					(typeof $bool87=='object'?
						(typeof $bool87.__nonzero__=='function'?
							$bool87.__nonzero__() :
							(typeof $bool87.__len__=='function'?
								($bool87.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				n = (typeof ($sub3=n)==typeof ($sub4=1) && (typeof $sub3=='number'||typeof $sub3=='string')?
					$sub3-$sub4:
					$m['op_sub']($sub3,$sub4));
				a['extend'](self['__array']);
			}
			return a;
		}
	, 1, [null,null,['self'],['n']]);
		$cls_definition['__mul__'] = $method;
		$method = $pyjs__bind_method2('__rmul__', function(n) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				n = arguments[1];
			}

			return self['__mul__'](n);
		}
	, 1, [null,null,['self'],['n']]);
		$cls_definition['__rmul__'] = $method;
		var $bases = new Array(pyjslib.object);
		return $pyjs_type('list', $bases, $cls_definition);
	})();
$m['list'].__str__ = $m['list'].__repr__;
$m['list'].toString = $m['list'].__str__;
	$m['tuple'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '49659543f89a58a51e7896590207f92d';
		$method = $pyjs__bind_method2('__init__', function(data) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
			}
			if (typeof data == 'undefined') data=arguments.callee.__args__[3][1];


        if (data === null) {
            throw $m['TypeError']("'NoneType' is not iterable");
        }
        if (data.constructor === Array) {
            self.__array = data.slice();
            return null;
        }
        if (typeof data.__iter__ == 'function') {
            if (typeof data.__array == 'object') {
                self.__array = data.__array.slice();
                return null;
            }
            var iter = data.__iter__();
            if (typeof iter.__array == 'object') {
                self.__array = iter.__array.slice();
                return null;
            }
            data = [];
            var item, i = 0;
            if (typeof iter.$genfunc == 'function') {
                while (typeof (item=iter.next(true)) != 'undefined') {
                    data[i++] = item;
                }
            } else {
                try {
                    while (true) {
                        data[i++] = iter.next();
                    }
                }
                catch (e) {
                    if (e.__name__ != 'StopIteration') throw e;
                }
            }
            self.__array = data;
            return null;
        }
        throw $m['TypeError']("'" + $p['repr'](data) + "' is not iterable");
        
		}
	, 1, [null,null,['self'],['data', []]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__hash__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add38,$attr61,$attr62,$add37;
			return (typeof ($add37='$tuple$')==typeof ($add38=$p['str'](self['__array'])) && (typeof $add37=='number'||typeof $add37=='string')?
				$add37+$add38:
				$m['op_add']($add37,$add38));
		}
	, 1, [null,null,['self']]);
		$cls_definition['__hash__'] = $method;
		$method = $pyjs__bind_method2('__cmp__', function(l) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				l = arguments[1];
			}
			var $bool88,$bool89;
			if ((($bool89=!(($bool88=$p['isinstance'](l, $m['tuple'])) === null || $bool88 === false || $bool88 === 0 || $bool88 === '' ?
				false :
				(typeof $bool88=='object'?
					(typeof $bool88.__nonzero__=='function'?
						$bool88.__nonzero__() :
						(typeof $bool88.__len__=='function'?
							($bool88.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool89 === false || $bool89 === 0 || $bool89 === '' ?
					false :
					(typeof $bool89=='object'?
						(typeof $bool89.__nonzero__=='function'?
							$bool89.__nonzero__() :
							(typeof $bool89.__len__=='function'?
								($bool89.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return 1;
			}

        var n1 = self.__array.length,
            n2 = l.__array.length,
            a1 = self.__array,
            a2 = l.__array,
            n, c;
        n = (n1 < n2 ? n1 : n2);
        for (var i = 0; i < n; i++) {
            c = $m['cmp'](a1[i], a2[i]);
            if (c) return c;
        }
        if (n1 < n2) return -1;
        if (n1 > n2) return 1;
        return 0;
		}
	, 1, [null,null,['self'],['l']]);
		$cls_definition['__cmp__'] = $method;
		$method = $pyjs__bind_method2('__getslice__', function(lower, upper) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				lower = arguments[1];
				upper = arguments[2];
			}


        if (upper==null) return $m['tuple'](self.__array.slice(lower));
        return $m['tuple'](self.__array.slice(lower, upper));
        
		}
	, 1, [null,null,['self'],['lower'],['upper']]);
		$cls_definition['__getslice__'] = $method;
		$method = $pyjs__bind_method2('__getitem__', function(_index) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				_index = arguments[1];
			}


        var index = _index.valueOf();
        if (index < 0) index += self.__array.length;
        if (index < 0 || index >= self.__array.length) {
            throw $m['IndexError']("tuple index out of range");
        }
        return self.__array[index];
        
		}
	, 1, [null,null,['self'],['_index']]);
		$cls_definition['__getitem__'] = $method;
		$method = $pyjs__bind_method2('__len__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self.__array.length;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__len__'] = $method;
		$method = $pyjs__bind_method2('__contains__', function(value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}

			return self.__array.indexOf(value)>=0;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['__contains__'] = $method;
		$method = $pyjs__bind_method2('__iter__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return new $iter_array(self.__array);

        var i = 0;
        var l = self.__array;
        return {
            'next': function() {
                if (i >= l.length) {
                    throw $p['StopIteration'];
                }
                return l[i++];
            },
            '__iter__': function() {
                return this;
            }
        };
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		$method = $pyjs__bind_method2('__enumerate__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return new $enumerate_array(self.__array);
		}
	, 1, [null,null,['self']]);
		$cls_definition['__enumerate__'] = $method;
		$method = $pyjs__bind_method2('getArray', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr64,$attr63;
			return self['__array'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['getArray'] = $method;
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool90,$attr65,$attr66;
			if ((($bool90=$p['callable'](self)) === null || $bool90 === false || $bool90 === 0 || $bool90 === '' ?
					false :
					(typeof $bool90=='object'?
						(typeof $bool90.__nonzero__=='function'?
							$bool90.__nonzero__() :
							(typeof $bool90.__len__=='function'?
								($bool90.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return $p['sprintf']('\x3Ctype \x27%s\x27\x3E', self['__name__']);
			}

        var s = "(";
        for (var i=0; i < self.__array.length; i++) {
            s += $p['repr'](self.__array[i]);
            if (i < self.__array.length - 1)
                s += ", ";
        }
        if (self.__array.length == 1)
            s += ",";
        s += ")";
        return s;
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		$method = $pyjs__bind_method2('__add__', function(y) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				y = arguments[1];
			}
			var $bool91,$bool92,$attr68,$attr67;
			if ((($bool92=!(($bool91=$p['isinstance'](y, self)) === null || $bool91 === false || $bool91 === 0 || $bool91 === '' ?
				false :
				(typeof $bool91=='object'?
					(typeof $bool91.__nonzero__=='function'?
						$bool91.__nonzero__() :
						(typeof $bool91.__len__=='function'?
							($bool91.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool92 === false || $bool92 === 0 || $bool92 === '' ?
					false :
					(typeof $bool92=='object'?
						(typeof $bool92.__nonzero__=='function'?
							$bool92.__nonzero__() :
							(typeof $bool92.__len__=='function'?
								($bool92.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				throw ($m['TypeError']('can only concatenate tuple to tuple'));
			}
			return $m['tuple'](self['__array']['concat'](y['__array']));
		}
	, 1, [null,null,['self'],['y']]);
		$cls_definition['__add__'] = $method;
		$method = $pyjs__bind_method2('__mul__', function(n) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				n = arguments[1];
			}
			var a,$bool93,$bool94,$bool95,$attr70,$sub6,$sub5,$attr69;
			if ((($bool94=!(($bool93=n !== null && n.__number__ && (n.__number__ != 0x01 || isFinite(n))) === null || $bool93 === false || $bool93 === 0 || $bool93 === '' ?
				false :
				(typeof $bool93=='object'?
					(typeof $bool93.__nonzero__=='function'?
						$bool93.__nonzero__() :
						(typeof $bool93.__len__=='function'?
							($bool93.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool94 === false || $bool94 === 0 || $bool94 === '' ?
					false :
					(typeof $bool94=='object'?
						(typeof $bool94.__nonzero__=='function'?
							$bool94.__nonzero__() :
							(typeof $bool94.__len__=='function'?
								($bool94.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				throw ($m['TypeError']('can\x27t multiply sequence by non-int'));
			}
			a = $p['list']([]);
			while ((($bool95=n) === null || $bool95 === false || $bool95 === 0 || $bool95 === '' ?
					false :
					(typeof $bool95=='object'?
						(typeof $bool95.__nonzero__=='function'?
							$bool95.__nonzero__() :
							(typeof $bool95.__len__=='function'?
								($bool95.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				n = (typeof ($sub5=n)==typeof ($sub6=1) && (typeof $sub5=='number'||typeof $sub5=='string')?
					$sub5-$sub6:
					$m['op_sub']($sub5,$sub6));
				a['extend'](self['__array']);
			}
			return a;
		}
	, 1, [null,null,['self'],['n']]);
		$cls_definition['__mul__'] = $method;
		$method = $pyjs__bind_method2('__rmul__', function(n) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				n = arguments[1];
			}

			return self['__mul__'](n);
		}
	, 1, [null,null,['self'],['n']]);
		$cls_definition['__rmul__'] = $method;
		var $bases = new Array(pyjslib.object);
		return $pyjs_type('tuple', $bases, $cls_definition);
	})();
$m['tuple'].__str__ = $m['tuple'].__repr__;
$m['tuple'].toString = $m['tuple'].__str__;
	$m['dict'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '8b9a0c4f21f7ca02e397e79415a68980';
		$method = $pyjs__bind_method2('__init__', function(seq) {
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
				seq = arguments[1];
				var kwargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof seq != 'undefined') {
					if (seq !== null && typeof seq['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = seq;
						seq = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}
			if (typeof seq == 'undefined') seq=arguments.callee.__args__[3][1];
			var $bool96,init;
			self.__object = {};
			init = function(_data) {


        var item, i, n, sKey;
        var data = _data;
        //selfXXX.__object = {};

        if (data === null) {
            throw $m['TypeError']("'NoneType' is not iterable");
        }
        if (data.constructor === Array) {
        } else if (typeof data.__object == 'object') {
            data = data.__object;
            for (sKey in data) {
                self.__object[sKey] = data[sKey].slice();
            }
            return null;
        } else if (typeof data.__iter__ == 'function') {
            if (typeof data.__array == 'object') {
                data = data.__array;
            } else {
                var iter = data.__iter__();
                if (typeof iter.__array == 'object') {
                    data = iter.__array;
                }
                data = [];
                var item, i = 0;
                if (typeof iter.$genfunc == 'function') {
                    while (typeof (item=iter.next(true)) != 'undefined') {
                        data[i++] = item;
                    }
                } else {
                    try {
                        while (true) {
                            data[i++] = iter.next();
                        }
                    }
                    catch (e) {
                        if (e.__name__ != 'StopIteration') throw e;
                    }
                }
            }
        } else if (typeof data == 'object' || typeof data == 'function') {
            for (var key in data) {
                var _key = key;
                if (key.substring(0,2) == '$$') {
                    // handle back mapping of name
                    // d = dict(comment='value')
                    // comment will be in the object as $$comment
                    _key = key.substring(2);
                    if (var_remap.indexOf(_key) < 0) {
                        _key = key;
                    }
                }
                self.__object['$'+_key] = [_key, data[key]];
            }
            return null;
        } else {
            throw $m['TypeError']("'" + $p['repr'](data) + "' is not iterable");
        }
        // Assume uniform array content...
        if ((n = data.length) == 0) {
            return null;
        }
        i = 0;
        if (data[0].constructor === Array) {
            while (i < n) {
                item = data[i++];
                key = item[0];
                sKey = (key===null?null:(typeof key.$H != 'undefined'?key.$H:((typeof key=='string'||key.__number__)?'$'+key:$p['__hash'](key))));
                self.__object[sKey] = [key, item[1]];
            }
            return null;
        }
        if (typeof data[0].__array != 'undefined') {
            while (i < n) {
                item = data[i++].__array;
                key = item[0];
                sKey = (key===null?null:(typeof key.$H != 'undefined'?key.$H:((typeof key=='string'||key.__number__)?'$'+key:$p['__hash'](key))));
                self.__object[sKey] = [key, item[1]];
            }
            return null;
        }
        i = -1;
        var key;
        while (++i < n) {
            key = data[i].__getitem__(0);
            sKey = (key===null?null:(typeof key.$H != 'undefined'?key.$H:((typeof key=='string'||key.__number__)?'$'+key:$p['__hash'](key))));
            self.__object[sKey] = [key, data[i].__getitem__(1)];
        }
        return null;
        
			};
			init.__name__ = 'init';

			init.__bind_type__ = 0;
			init.__args__ = [null,null,['_data']];
			init(seq);
			if ((($bool96=kwargs) === null || $bool96 === false || $bool96 === 0 || $bool96 === '' ?
					false :
					(typeof $bool96=='object'?
						(typeof $bool96.__nonzero__=='function'?
							$bool96.__nonzero__() :
							(typeof $bool96.__len__=='function'?
								($bool96.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				init(kwargs);
			}
			return null;
		}
	, 1, [null,['kwargs'],['self'],['seq', []]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__hash__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			throw ($m['TypeError']('dict objects are unhashable'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__hash__'] = $method;
		$method = $pyjs__bind_method2('__setitem__', function(key, value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
				value = arguments[2];
			}


        if (typeof value == 'undefined') {
            throw $m['ValueError']("Value for key '" + key + "' is undefined");
        }
        var sKey = (key===null?null:(typeof key.$H != 'undefined'?key.$H:((typeof key=='string'||key.__number__)?'$'+key:$p['__hash'](key))));
        self.__object[sKey] = [key, value];
        
		}
	, 1, [null,null,['self'],['key'],['value']]);
		$cls_definition['__setitem__'] = $method;
		$method = $pyjs__bind_method2('__getitem__', function(key) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
			}


        var sKey = (key===null?null:(typeof key.$H != 'undefined'?key.$H:((typeof key=='string'||key.__number__)?'$'+key:$p['__hash'](key))));
        var value=self.__object[sKey];
        if (typeof value == 'undefined'){
            throw $m['KeyError'](key);
        }
        return value[1];
        
		}
	, 1, [null,null,['self'],['key']]);
		$cls_definition['__getitem__'] = $method;
		$method = $pyjs__bind_method2('__hash__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			throw ($m['TypeError']('dict objects are unhashable'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__hash__'] = $method;
		$method = $pyjs__bind_method2('__nonzero__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}


        for (var i in self.__object){
            return true;
        }
        return false;
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['__nonzero__'] = $method;
		$method = $pyjs__bind_method2('__cmp__', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $bool98,$bool97;
			if ((($bool98=!(($bool97=$p['isinstance'](other, $m['dict'])) === null || $bool97 === false || $bool97 === 0 || $bool97 === '' ?
				false :
				(typeof $bool97=='object'?
					(typeof $bool97.__nonzero__=='function'?
						$bool97.__nonzero__() :
						(typeof $bool97.__len__=='function'?
							($bool97.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool98 === false || $bool98 === 0 || $bool98 === '' ?
					false :
					(typeof $bool98=='object'?
						(typeof $bool98.__nonzero__=='function'?
							$bool98.__nonzero__() :
							(typeof $bool98.__len__=='function'?
								($bool98.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				throw ($m['TypeError']('dict.__cmp__(x,y) requires y to be a \x27dict\x27'));
			}

        var self_sKeys = new Array(),
            other_sKeys = new Array(),
            selfLen = 0,
            otherLen = 0,
            selfObj = self.__object,
            otherObj = other.__object;
        for (sKey in selfObj) {
           self_sKeys[selfLen++] = sKey;
        }
        for (sKey in otherObj) {
           other_sKeys[otherLen++] = sKey;
        }
        if (selfLen < otherLen) {
            return -1;
        }
        if (selfLen > otherLen) {
            return 1;
        }
        self_sKeys.sort();
        other_sKeys.sort();
        var c, sKey;
        for (var idx = 0; idx < selfLen; idx++) {
            c = $m['cmp'](selfObj[sKey = self_sKeys[idx]][0], otherObj[other_sKeys[idx]][0]);
            if (c != 0) {
                return c;
            }
            c = $m['cmp'](selfObj[sKey][1], otherObj[sKey][1]);
            if (c != 0) {
                return c;
            }
        }
        return 0;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__cmp__'] = $method;
		$method = $pyjs__bind_method2('__len__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var size;
			size = 0;

        for (var i in self.__object) size++;
        
			return size;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__len__'] = $method;
		$method = $pyjs__bind_method2('__delitem__', function(key) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
			}


        var sKey = (key===null?null:(typeof key.$H != 'undefined'?key.$H:((typeof key=='string'||key.__number__)?'$'+key:$p['__hash'](key))));
        delete self.__object[sKey];
        
		}
	, 1, [null,null,['self'],['key']]);
		$cls_definition['__delitem__'] = $method;
		$method = $pyjs__bind_method2('__contains__', function(key) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
			}


        var sKey = (key===null?null:(typeof key.$H != 'undefined'?key.$H:((typeof key=='string'||key.__number__)?'$'+key:$p['__hash'](key))));
        return typeof self.__object[sKey] == 'undefined' ? false : true;
        
		}
	, 1, [null,null,['self'],['key']]);
		$cls_definition['__contains__'] = $method;
		$method = $pyjs__bind_method2('keys', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}


        var keys=$m['list'](),
            selfObj = self.__object,
            __array = keys.__array,
            i = 0;
        for (var sKey in self.__object) {
            __array[i++] = selfObj[sKey][0];
        }
        return keys;
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['keys'] = $method;
		$method = $pyjs__bind_method2('fromkeys', function(iterable, v) {
			if (typeof v == 'undefined') v=arguments.callee.__args__[3][1];
			var $iter5_nextval,$iter5_idx,d,i,$iter5_array,$iter5_iter,$iter5_type;
			d = $p['dict']([]);
			$iter5_iter = iterable;
			if (typeof ($iter5_array = $iter5_iter.__array) != 'undefined') {
				$iter5_type = 0;
			} else {
				$iter5_iter = $iter5_iter.__iter__();
				$iter5_type = typeof ($iter5_array = $iter5_iter.__array) != 'undefined'? 0 : (typeof $iter5_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter5_idx = 0;
			while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):$p['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
				i = $iter5_nextval;
				d.__setitem__(i, v);
			}
			return d;
		}
	, 3, [null,null,['iterable'],['v', null]]);
		$cls_definition['fromkeys'] = $method;
		$method = $pyjs__bind_method2('values', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}


        var values=$m['list']();
        var i = 0;
        for (var key in self.__object) {
            values.__array[i++] = self.__object[key][1];
        }
        return values;
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['values'] = $method;
		$method = $pyjs__bind_method2('items', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}


        var items = $m['list']();
        var i = 0;
        for (var key in self.__object) {
          var kv = self.__object[key];
          items.__array[i++] = $m['list'](kv);
          }
          return items;
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['items'] = $method;
		$method = $pyjs__bind_method2('__iter__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}


        var keys = new Array();
        var i = 0;
        for (var key in self.__object) {
            keys[i++] = self.__object[key][0];
        }
        return new $iter_array(keys);

		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		$method = $pyjs__bind_method2('__enumerate__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}


        var keys = new Array();
        var i = 0;
        for (var key in self.__object) {
            keys[i++] = self.__object[key][0];
        }
        return new $enumerate_array(keys);

		}
	, 1, [null,null,['self']]);
		$cls_definition['__enumerate__'] = $method;
		$method = $pyjs__bind_method2('itervalues', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['values']()['__iter__']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['itervalues'] = $method;
		$method = $pyjs__bind_method2('iteritems', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['items']()['__iter__']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['iteritems'] = $method;
		$method = $pyjs__bind_method2('setdefault', function(key, default_value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
				default_value = arguments[2];
			}


        var sKey = (key===null?null:(typeof key.$H != 'undefined'?key.$H:((typeof key=='string'||key.__number__)?'$'+key:$p['__hash'](key))));
        return typeof self.__object[sKey] == 'undefined' ? (self.__object[sKey]=[key, default_value])[1] : self.__object[sKey][1];

		}
	, 1, [null,null,['self'],['key'],['default_value']]);
		$cls_definition['setdefault'] = $method;
		$method = $pyjs__bind_method2('get', function(key, default_value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
				default_value = arguments[2];
			}
			if (typeof default_value == 'undefined') default_value=arguments.callee.__args__[4][1];


        var empty = true;
        for (var sKey in self.__object) {
            empty = false;
            break;
        }
        if (empty) return default_value;
        var sKey = (key===null?null:(typeof key.$H != 'undefined'?key.$H:((typeof key=='string'||key.__number__)?'$'+key:$p['__hash'](key))));
        return typeof self.__object[sKey] == 'undefined' ? default_value : self.__object[sKey][1];

		}
	, 1, [null,null,['self'],['key'],['default_value', null]]);
		$cls_definition['get'] = $method;
		$method = $pyjs__bind_method2('update', function() {
			if (this.__is_instance__ === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice.call(arguments,0,arguments.length-1));

				var kwargs = arguments.length >= 1 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					if (typeof kwargs != 'undefined') args.__array.push(kwargs);
					var kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				var args = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length-1));

				var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					if (typeof kwargs != 'undefined') args.__array.push(kwargs);
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
			var $iter6_type,$iter9_nextval,$iter7_idx,$iter8_iter,$iter6_iter,$iter6_nextval,$28,$iter9_iter,$25,$iter9_idx,$27,$26,$iter7_type,$iter9_type,$iter8_idx,$iter6_idx,$iter7_iter,$iter8_type,$iter6_array,$bool101,$bool100,$bool103,$bool102,$cmp5,$cmp6,d,$iter7_nextval,$bool99,k,$iter7_array,$iter8_array,$len6,$len5,v,$iter9_array,$iter8_nextval;
			if ((($bool99=args) === null || $bool99 === false || $bool99 === 0 || $bool99 === '' ?
					false :
					(typeof $bool99=='object'?
						(typeof $bool99.__nonzero__=='function'?
							$bool99.__nonzero__() :
							(typeof $bool99.__len__=='function'?
								($bool99.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool100=((($cmp5=(($len5=args) === null?0:
					(typeof $len5.__array != 'undefined' ? $len5.__array.length:
						(typeof $len5.__len__ == 'function'?$len5.__len__():
							(typeof $len5.length != 'undefined'?$len5.length:
								$p['len']($len5))))))===($cmp6=1)?0:
					(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
						($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
						$m['cmp']($cmp5, $cmp6))) == 1)) === null || $bool100 === false || $bool100 === 0 || $bool100 === '' ?
						false :
						(typeof $bool100=='object'?
							(typeof $bool100.__nonzero__=='function'?
								$bool100.__nonzero__() :
								(typeof $bool100.__len__=='function'?
									($bool100.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					throw ($m['TypeError']($p['sprintf']('update expected at most 1 arguments, got %d', (($len6=args) === null?0:
						(typeof $len6.__array != 'undefined' ? $len6.__array.length:
							(typeof $len6.__len__ == 'function'?$len6.__len__():
								(typeof $len6.length != 'undefined'?$len6.length:
									$p['len']($len6))))))));
				}
				d = (typeof ($25=args).__array != 'undefined'?
					((typeof $25.__array[$26=0]) != 'undefined'?$25.__array[$26]:
						$25.__getitem__($26)):
						$25.__getitem__(0));
				if ((($bool101=$p['hasattr'](d, 'iteritems')) === null || $bool101 === false || $bool101 === 0 || $bool101 === '' ?
						false :
						(typeof $bool101=='object'?
							(typeof $bool101.__nonzero__=='function'?
								$bool101.__nonzero__() :
								(typeof $bool101.__len__=='function'?
									($bool101.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$iter6_iter = d['iteritems']();
					if (typeof ($iter6_array = $iter6_iter.__array) != 'undefined') {
						$iter6_type = 0;
					} else {
						$iter6_iter = $iter6_iter.__iter__();
						$iter6_type = typeof ($iter6_array = $iter6_iter.__array) != 'undefined'? 0 : (typeof $iter6_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter6_idx = 0;
					while (typeof ($iter6_nextval=($iter6_type?($iter6_type > 0?$iter6_iter.next(true,true):$p['wrapped_next']($iter6_iter)):$iter6_array[$iter6_idx++])) != 'undefined') {
						k = $iter6_nextval.__array[0];
						v = $iter6_nextval.__array[1];
						self.__setitem__(k, v);
					}
				}
				else if ((($bool102=$p['hasattr'](d, 'keys')) === null || $bool102 === false || $bool102 === 0 || $bool102 === '' ?
						false :
						(typeof $bool102=='object'?
							(typeof $bool102.__nonzero__=='function'?
								$bool102.__nonzero__() :
								(typeof $bool102.__len__=='function'?
									($bool102.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$iter7_iter = d;
					if (typeof ($iter7_array = $iter7_iter.__array) != 'undefined') {
						$iter7_type = 0;
					} else {
						$iter7_iter = $iter7_iter.__iter__();
						$iter7_type = typeof ($iter7_array = $iter7_iter.__array) != 'undefined'? 0 : (typeof $iter7_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter7_idx = 0;
					while (typeof ($iter7_nextval=($iter7_type?($iter7_type > 0?$iter7_iter.next(true,false):$p['wrapped_next']($iter7_iter)):$iter7_array[$iter7_idx++])) != 'undefined') {
						k = $iter7_nextval;
						self.__setitem__(k, (typeof ($27=d).__array != 'undefined'?
							((typeof $27.__array[$28=k]) != 'undefined'?$27.__array[$28]:
								$27.__getitem__($28)):
								$27.__getitem__(k)));
					}
				}
				else {
					$iter8_iter = d;
					if (typeof ($iter8_array = $iter8_iter.__array) != 'undefined') {
						$iter8_type = 0;
					} else {
						$iter8_iter = $iter8_iter.__iter__();
						$iter8_type = typeof ($iter8_array = $iter8_iter.__array) != 'undefined'? 0 : (typeof $iter8_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter8_idx = 0;
					while (typeof ($iter8_nextval=($iter8_type?($iter8_type > 0?$iter8_iter.next(true,true):$p['wrapped_next']($iter8_iter)):$iter8_array[$iter8_idx++])) != 'undefined') {
						k = $iter8_nextval.__array[0];
						v = $iter8_nextval.__array[1];
						self.__setitem__(k, v);
					}
				}
			}
			if ((($bool103=kwargs) === null || $bool103 === false || $bool103 === 0 || $bool103 === '' ?
					false :
					(typeof $bool103=='object'?
						(typeof $bool103.__nonzero__=='function'?
							$bool103.__nonzero__() :
							(typeof $bool103.__len__=='function'?
								($bool103.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$iter9_iter = kwargs['iteritems']();
				if (typeof ($iter9_array = $iter9_iter.__array) != 'undefined') {
					$iter9_type = 0;
				} else {
					$iter9_iter = $iter9_iter.__iter__();
					$iter9_type = typeof ($iter9_array = $iter9_iter.__array) != 'undefined'? 0 : (typeof $iter9_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter9_idx = 0;
				while (typeof ($iter9_nextval=($iter9_type?($iter9_type > 0?$iter9_iter.next(true,true):$p['wrapped_next']($iter9_iter)):$iter9_array[$iter9_idx++])) != 'undefined') {
					k = $iter9_nextval.__array[0];
					v = $iter9_nextval.__array[1];
					self.__setitem__(k, v);
				}
			}
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['update'] = $method;
		$method = $pyjs__bind_method2('pop', function(k) {
			if (this.__is_instance__ === true) {
				var self = this;
				var d = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length));

			} else {
				var self = arguments[0];
				k = arguments[1];
				var d = $p['tuple']($pyjs_array_slice.call(arguments,2,arguments.length));

			}
			var $29,$cmp7,$add39,$bool104,res,$32,$cmp8,$30,$add40,$bool105,$len7,$pyjs_try_err,$31,$len8;
			if ((($bool104=((($cmp7=(($len7=d) === null?0:
				(typeof $len7.__array != 'undefined' ? $len7.__array.length:
					(typeof $len7.__len__ == 'function'?$len7.__len__():
						(typeof $len7.length != 'undefined'?$len7.length:
							$p['len']($len7))))))===($cmp8=1)?0:
				(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
					($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
					$m['cmp']($cmp7, $cmp8))) == 1)) === null || $bool104 === false || $bool104 === 0 || $bool104 === '' ?
					false :
					(typeof $bool104=='object'?
						(typeof $bool104.__nonzero__=='function'?
							$bool104.__nonzero__() :
							(typeof $bool104.__len__=='function'?
								($bool104.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				throw ($m['TypeError']($p['sprintf']('pop expected at most 2 arguments, got %s', (typeof ($add39=1)==typeof ($add40=(($len8=d) === null?0:
					(typeof $len8.__array != 'undefined' ? $len8.__array.length:
						(typeof $len8.__len__ == 'function'?$len8.__len__():
							(typeof $len8.length != 'undefined'?$len8.length:
								$p['len']($len8)))))) && (typeof $add39=='number'||typeof $add39=='string')?
					$add39+$add40:
					$m['op_add']($add39,$add40)))));
			}
			try {
				res = (typeof ($29=self).__array != 'undefined'?
					((typeof $29.__array[$30=k]) != 'undefined'?$29.__array[$30]:
						$29.__getitem__($30)):
						$29.__getitem__(k));
				self.__delitem__(k);
				return res;
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (($pyjs_try_err_name == $m['KeyError'].__name__)||$p['_isinstance']($pyjs_try_err,$m['KeyError'])) {
					if ((($bool105=d) === null || $bool105 === false || $bool105 === 0 || $bool105 === '' ?
							false :
							(typeof $bool105=='object'?
								(typeof $bool105.__nonzero__=='function'?
									$bool105.__nonzero__() :
									(typeof $bool105.__len__=='function'?
										($bool105.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						return (typeof ($31=d).__array != 'undefined'?
							((typeof $31.__array[$32=0]) != 'undefined'?$31.__array[$32]:
								$31.__getitem__($32)):
								$31.__getitem__(0));
					}
					else {
						throw ($pyjs.__last_exception__?
							$pyjs.__last_exception__.error:
							$m['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
					}
				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			}
			return null;
		}
	, 1, ['d',null,['self'],['k']]);
		$cls_definition['pop'] = $method;
		$method = $pyjs__bind_method2('popitem', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter10_nextval,$iter10_array,v,$iter10_type,k,$iter10_iter,$iter10_idx;
			$iter10_iter = self['iteritems']();
			if (typeof ($iter10_array = $iter10_iter.__array) != 'undefined') {
				$iter10_type = 0;
			} else {
				$iter10_iter = $iter10_iter.__iter__();
				$iter10_type = typeof ($iter10_array = $iter10_iter.__array) != 'undefined'? 0 : (typeof $iter10_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter10_idx = 0;
			while (typeof ($iter10_nextval=($iter10_type?($iter10_type > 0?$iter10_iter.next(true,true):$p['wrapped_next']($iter10_iter)):$iter10_array[$iter10_idx++])) != 'undefined') {
				k = $iter10_nextval.__array[0];
				v = $iter10_nextval.__array[1];
				return $p['tuple']([k, v]);
			}
			throw ($m['KeyError']('popitem(): dictionary is empty'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['popitem'] = $method;
		$method = $pyjs__bind_method2('getObject', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr72,$attr71;
			return self['__object'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['getObject'] = $method;
		$method = $pyjs__bind_method2('copy', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['dict'](self['items']());
		}
	, 1, [null,null,['self']]);
		$cls_definition['copy'] = $method;
		$method = $pyjs__bind_method2('clear', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self.__object = {};
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['clear'] = $method;
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr74,$bool106,$attr73;
			if ((($bool106=$p['callable'](self)) === null || $bool106 === false || $bool106 === 0 || $bool106 === '' ?
					false :
					(typeof $bool106=='object'?
						(typeof $bool106.__nonzero__=='function'?
							$bool106.__nonzero__() :
							(typeof $bool106.__len__=='function'?
								($bool106.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return $p['sprintf']('\x3Ctype \x27%s\x27\x3E', self['__name__']);
			}

        var keys = new Array();
        for (var key in self.__object)
            keys.push(key);

        var s = "{";
        for (var i=0; i<keys.length; i++) {
            var v = self.__object[keys[i]];
            s += $p['repr'](v[0]) + ": " + $p['repr'](v[1]);
            if (i < keys.length-1)
                s += ", ";
        }
        s += "}";
        return s;
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		$method = $pyjs__bind_method2('toString', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['__repr__']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['toString'] = $method;
		var $bases = new Array(pyjslib.object);
		return $pyjs_type('dict', $bases, $cls_definition);
	})();
$m['dict'].has_key = $m['dict'].__contains__;
$m['dict'].iterkeys = $m['dict'].__iter__;
$m['dict'].__str__ = $m['dict'].__repr__;
	$m['__empty_dict'] = function() {


    var dict__init__ = $m['dict'].__init__;
    var d;
    $m['dict'].__init__ = function() {
        this.__object = {};
    };
    d = $m['dict']();
    d.__init__ = $m['dict'].__init__ = dict__init__;
    return d;

	};
	$m['__empty_dict'].__name__ = '__empty_dict';

	$m['__empty_dict'].__bind_type__ = 0;
	$m['__empty_dict'].__args__ = [null,null];
	$m['set'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '9407975d8e29b40b9c3735b1afa97015';
		$method = $pyjs__bind_method2('__init__', function(_data) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				_data = arguments[1];
			}
			if (typeof _data == 'undefined') _data=arguments.callee.__args__[3][1];
			var $bool107,$bool108;
			if ((($bool107=(_data === null)) === null || $bool107 === false || $bool107 === 0 || $bool107 === '' ?
					false :
					(typeof $bool107=='object'?
						(typeof $bool107.__nonzero__=='function'?
							$bool107.__nonzero__() :
							(typeof $bool107.__len__=='function'?
								($bool107.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
var data = [];
			}
			else {
var data = _data;
			}
			if ((($bool108=(typeof isSet == "undefined"?$m.isSet:isSet)(_data)) === null || $bool108 === false || $bool108 === 0 || $bool108 === '' ?
					false :
					(typeof $bool108=='object'?
						(typeof $bool108.__nonzero__=='function'?
							$bool108.__nonzero__() :
							(typeof $bool108.__len__=='function'?
								($bool108.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {

            self.__object = {};
            var selfObj = self.__object,
                dataObj = data.__object;
            for (var sVal in dataObj) {
                selfObj[sVal] = dataObj[sVal];
            }
            return null;
			}

        var item, 
            i, 
            n,
            selfObj = self.__object = {};

        if (data.constructor === Array) { 
        // data is already an Array.
        // We deal with the Array of data after this if block.
          } 
          
          // We may have some other set-like thing with __object
          else if (typeof data.__object == 'object') {
            var dataObj = data.__object;
            for (var sKey in dataObj) {
                selfObj[sKey] = dataObj[sKey];
            }
            return null;
          } 
          
          // Something with an __iter__ method
          else if (typeof data.__iter__ == 'function') {
          
            // It has an __array member to iterate over. Make that our data.
            if (typeof data.__array == 'object') {
                data = data.__array;
                } 
            else {
                // Several ways to deal with the __iter__ method
                var iter = data.__iter__();
                // iter has an __array member that's an array. Use that.
                if (typeof iter.__array == 'object') {
                    data = iter.__array;
                }
                var data = [];
                var item, i = 0;
                // iter has a .$genfunc
                if (typeof iter.$genfunc == 'function') {
                    while (typeof (item=iter.next(true)) != 'undefined') {
                        data[i++] = item;
                    }
                } else {
                // actually use the object's __iter__ method
                    try {
                        while (true) {
                            data[i++] = iter.next();
                        }
                    }
                    catch (e) {
                        if (e.__name__ != 'StopIteration') throw e;
                    }
                }
            }
          // Check undefined first so isIteratable can do check for __iter__.
        } else if (!($p['isUndefined']($m.data)) && $m.isIteratable($m.data))
            {
            for (var item in $m.data) {
                selfObj[$p['__hash'](item)] = item;
            }
            return null;
        } else {
            throw $m['TypeError']("'" + $p['repr'](data) + "' is not iterable");
        }
        // Assume uniform array content...
        if ((n = data.length) == 0) {
            return null;
        }
        i = n-1;
        do {
            item = data[i];
            selfObj[$p['__hash'](item)] = item;
        }
        while (i--);
        return null;
        
		}
	, 1, [null,null,['self'],['_data', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__cmp__', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $bool109,$bool110;
			if ((($bool110=!(($bool109=(typeof isSet == "undefined"?$m.isSet:isSet)(other)) === null || $bool109 === false || $bool109 === 0 || $bool109 === '' ?
				false :
				(typeof $bool109=='object'?
					(typeof $bool109.__nonzero__=='function'?
						$bool109.__nonzero__() :
						(typeof $bool109.__len__=='function'?
							($bool109.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool110 === false || $bool110 === 0 || $bool110 === '' ?
					false :
					(typeof $bool110=='object'?
						(typeof $bool110.__nonzero__=='function'?
							$bool110.__nonzero__() :
							(typeof $bool110.__len__=='function'?
								($bool110.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return 2;
			}

        var selfObj = self.__object,
            otherObj = other.__object,
            selfMismatch = false,
            otherMismatch = false;
        if (selfObj === otherObj) {
            throw $m['TypeError']("Set operations must use two sets.");
            }
        for (var sVal in selfObj) {
            if (!(sVal in otherObj)) {
                selfMismatch = true;
                break;
            }
        }
        for (var sVal in otherObj) {
            if (!(sVal in selfObj)) {
                otherMismatch = true;
                break;
            }
        }
        if (selfMismatch && otherMismatch) return 2;
        if (selfMismatch) return 1;
        if (otherMismatch) return -1;
        return 0;

		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__cmp__'] = $method;
		$method = $pyjs__bind_method2('__contains__', function(value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}
			var $eq11,$bool111,$eq12;
			if ((($bool111=(($eq11=(typeof isSet == "undefined"?$m.isSet:isSet)(value))===($eq12=1)&&$eq11===null?true:
				($eq11===null?false:($eq12===null?false:
					((typeof $eq11=='object'||typeof $eq11=='function')&&typeof $eq11.__cmp__=='function'?$eq11.__cmp__($eq12) === 0:
						((typeof $eq12=='object'||typeof $eq12=='function')&&typeof $eq12.__cmp__=='function'?$eq12.__cmp__($eq11) === 0:
							$eq11==$eq12)))))) === null || $bool111 === false || $bool111 === 0 || $bool111 === '' ?
					false :
					(typeof $bool111=='object'?
						(typeof $bool111.__nonzero__=='function'?
							$bool111.__nonzero__() :
							(typeof $bool111.__len__=='function'?
								($bool111.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {

            var hashes = new Array(), 
                obj = self.__object, 
                i = 0;
            for (var v in obj) {
                hashes[i++] = v;
            }
            hashes.sort();
            var h = hashes.join("|");
            return (h in obj);

			}
return $p['__hash'](value) in self.__object;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['__contains__'] = $method;
		$method = $pyjs__bind_method2('__hash__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			throw ($m['TypeError']('set objects are unhashable'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__hash__'] = $method;
		$method = $pyjs__bind_method2('__iter__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}


        var items = new Array(),
            i = 0, 
            obj = self.__object;
        for (var key in obj) {
            items[i++] = obj[key];
        }
        return new $iter_array(items);
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		$method = $pyjs__bind_method2('__len__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var size;
			size = 0.0;

        for (var i in self.__object) size++;
        
			return size;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__len__'] = $method;
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool112,$attr76,$attr75;
			if ((($bool112=$p['callable'](self)) === null || $bool112 === false || $bool112 === 0 || $bool112 === '' ?
					false :
					(typeof $bool112=='object'?
						(typeof $bool112.__nonzero__=='function'?
							$bool112.__nonzero__() :
							(typeof $bool112.__len__=='function'?
								($bool112.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return $p['sprintf']('\x3Ctype \x27%s\x27\x3E', self['__name__']);
			}

        var values = new Array();
        var i = 0,
            obj = self.__object,
            s = self.__name__ + "([";
        for (var sVal in obj) {
            values[i++] = $p['repr'](obj[sVal]);
        }
        s += values.join(", ");
        s += "])";
        return s;
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		$method = $pyjs__bind_method2('__and__', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $bool113,$bool114;
			if ((($bool114=!(($bool113=(typeof isSet == "undefined"?$m.isSet:isSet)(other)) === null || $bool113 === false || $bool113 === 0 || $bool113 === '' ?
				false :
				(typeof $bool113=='object'?
					(typeof $bool113.__nonzero__=='function'?
						$bool113.__nonzero__() :
						(typeof $bool113.__len__=='function'?
							($bool113.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool114 === false || $bool114 === 0 || $bool114 === '' ?
					false :
					(typeof $bool114=='object'?
						(typeof $bool114.__nonzero__=='function'?
							$bool114.__nonzero__() :
							(typeof $bool114.__len__=='function'?
								($bool114.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return $m['NotImplemented'];
			}
			return self['intersection'](other);
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__and__'] = $method;
		$method = $pyjs__bind_method2('__or__', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $bool116,$bool115;
			if ((($bool116=!(($bool115=(typeof isSet == "undefined"?$m.isSet:isSet)(other)) === null || $bool115 === false || $bool115 === 0 || $bool115 === '' ?
				false :
				(typeof $bool115=='object'?
					(typeof $bool115.__nonzero__=='function'?
						$bool115.__nonzero__() :
						(typeof $bool115.__len__=='function'?
							($bool115.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool116 === false || $bool116 === 0 || $bool116 === '' ?
					false :
					(typeof $bool116=='object'?
						(typeof $bool116.__nonzero__=='function'?
							$bool116.__nonzero__() :
							(typeof $bool116.__len__=='function'?
								($bool116.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return $m['NotImplemented'];
			}
			return self['union'](other);
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__or__'] = $method;
		$method = $pyjs__bind_method2('__xor__', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $bool117,$bool118;
			if ((($bool118=!(($bool117=(typeof isSet == "undefined"?$m.isSet:isSet)(other)) === null || $bool117 === false || $bool117 === 0 || $bool117 === '' ?
				false :
				(typeof $bool117=='object'?
					(typeof $bool117.__nonzero__=='function'?
						$bool117.__nonzero__() :
						(typeof $bool117.__len__=='function'?
							($bool117.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool118 === false || $bool118 === 0 || $bool118 === '' ?
					false :
					(typeof $bool118=='object'?
						(typeof $bool118.__nonzero__=='function'?
							$bool118.__nonzero__() :
							(typeof $bool118.__len__=='function'?
								($bool118.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return $m['NotImplemented'];
			}
			return self['symmetric_difference'](other);
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__xor__'] = $method;
		$method = $pyjs__bind_method2('__sub__', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $bool119,$bool120;
			if ((($bool120=!(($bool119=(typeof isSet == "undefined"?$m.isSet:isSet)(other)) === null || $bool119 === false || $bool119 === 0 || $bool119 === '' ?
				false :
				(typeof $bool119=='object'?
					(typeof $bool119.__nonzero__=='function'?
						$bool119.__nonzero__() :
						(typeof $bool119.__len__=='function'?
							($bool119.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool120 === false || $bool120 === 0 || $bool120 === '' ?
					false :
					(typeof $bool120=='object'?
						(typeof $bool120.__nonzero__=='function'?
							$bool120.__nonzero__() :
							(typeof $bool120.__len__=='function'?
								($bool120.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return $m['NotImplemented'];
			}
			return self['difference'](other);
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__sub__'] = $method;
		$method = $pyjs__bind_method2('add', function(value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}

self.__object[$p['hash'](value)] = value;
			return null;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['add'] = $method;
		$method = $pyjs__bind_method2('clear', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

self.__object = {};
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['clear'] = $method;
		$method = $pyjs__bind_method2('copy', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var new_set;
			new_set = $m['set']();

        var obj = new_set.__object,
            selfObj = self.__object;
        for (var sVal in selfObj) {
            obj[sVal] = selfObj[sVal];
        }

			return new_set;
		}
	, 1, [null,null,['self']]);
		$cls_definition['copy'] = $method;
		$method = $pyjs__bind_method2('difference', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var new_set,$bool122,$bool121;
			if ((($bool122=!(($bool121=(typeof isSet == "undefined"?$m.isSet:isSet)(other)) === null || $bool121 === false || $bool121 === 0 || $bool121 === '' ?
				false :
				(typeof $bool121=='object'?
					(typeof $bool121.__nonzero__=='function'?
						$bool121.__nonzero__() :
						(typeof $bool121.__len__=='function'?
							($bool121.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool122 === false || $bool122 === 0 || $bool122 === '' ?
					false :
					(typeof $bool122=='object'?
						(typeof $bool122.__nonzero__=='function'?
							$bool122.__nonzero__() :
							(typeof $bool122.__len__=='function'?
								($bool122.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				other = $p['frozenset'](other);
			}
			new_set = $m['set']();

        var obj = new_set.__object,
            selfObj = self.__object,
            otherObj = other.__object;
        for (var sVal in selfObj) {
            if (!(sVal in otherObj)) {
                obj[sVal] = selfObj[sVal];
            }
        }

			return new_set;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['difference'] = $method;
		$method = $pyjs__bind_method2('difference_update', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $bool123,$bool124;
			if ((($bool124=!(($bool123=(typeof isSet == "undefined"?$m.isSet:isSet)(other)) === null || $bool123 === false || $bool123 === 0 || $bool123 === '' ?
				false :
				(typeof $bool123=='object'?
					(typeof $bool123.__nonzero__=='function'?
						$bool123.__nonzero__() :
						(typeof $bool123.__len__=='function'?
							($bool123.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool124 === false || $bool124 === 0 || $bool124 === '' ?
					false :
					(typeof $bool124=='object'?
						(typeof $bool124.__nonzero__=='function'?
							$bool124.__nonzero__() :
							(typeof $bool124.__len__=='function'?
								($bool124.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				other = $p['frozenset'](other);
			}

        var selfObj = self.__object,
            otherObj = other.__object;
        for (var sVal in otherObj) {
            if (sVal in selfObj) {
                delete selfObj[sVal];
            }
        }

			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['difference_update'] = $method;
		$method = $pyjs__bind_method2('discard', function(value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}
			var $eq13,$eq14,$bool125;
			if ((($bool125=(($eq13=(typeof isSet == "undefined"?$m.isSet:isSet)(value))===($eq14=1)&&$eq13===null?true:
				($eq13===null?false:($eq14===null?false:
					((typeof $eq13=='object'||typeof $eq13=='function')&&typeof $eq13.__cmp__=='function'?$eq13.__cmp__($eq14) === 0:
						((typeof $eq14=='object'||typeof $eq14=='function')&&typeof $eq14.__cmp__=='function'?$eq14.__cmp__($eq13) === 0:
							$eq13==$eq14)))))) === null || $bool125 === false || $bool125 === 0 || $bool125 === '' ?
					false :
					(typeof $bool125=='object'?
						(typeof $bool125.__nonzero__=='function'?
							$bool125.__nonzero__() :
							(typeof $bool125.__len__=='function'?
								($bool125.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				value = $p['frozenset'](value);
			}
delete self.__object[$p['hash'](value)];
			return null;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['discard'] = $method;
		$method = $pyjs__bind_method2('intersection', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $bool127,$bool126,new_set;
			if ((($bool127=!(($bool126=(typeof isSet == "undefined"?$m.isSet:isSet)(other)) === null || $bool126 === false || $bool126 === 0 || $bool126 === '' ?
				false :
				(typeof $bool126=='object'?
					(typeof $bool126.__nonzero__=='function'?
						$bool126.__nonzero__() :
						(typeof $bool126.__len__=='function'?
							($bool126.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool127 === false || $bool127 === 0 || $bool127 === '' ?
					false :
					(typeof $bool127=='object'?
						(typeof $bool127.__nonzero__=='function'?
							$bool127.__nonzero__() :
							(typeof $bool127.__len__=='function'?
								($bool127.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				other = $p['frozenset'](other);
			}
			new_set = $m['set']();

        var obj = new_set.__object,
            selfObj = self.__object,
            otherObj = other.__object;
        for (var sVal in selfObj) {
            if (sVal in otherObj) {
                obj[sVal] = selfObj[sVal];
            }
        }

			return new_set;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['intersection'] = $method;
		$method = $pyjs__bind_method2('intersection_update', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $bool129,$bool128;
			if ((($bool129=!(($bool128=(typeof isSet == "undefined"?$m.isSet:isSet)(other)) === null || $bool128 === false || $bool128 === 0 || $bool128 === '' ?
				false :
				(typeof $bool128=='object'?
					(typeof $bool128.__nonzero__=='function'?
						$bool128.__nonzero__() :
						(typeof $bool128.__len__=='function'?
							($bool128.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool129 === false || $bool129 === 0 || $bool129 === '' ?
					false :
					(typeof $bool129=='object'?
						(typeof $bool129.__nonzero__=='function'?
							$bool129.__nonzero__() :
							(typeof $bool129.__len__=='function'?
								($bool129.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				other = $p['frozenset'](other);
			}

        var selfObj = self.__object,
            otherObj = other.__object;
        for (var sVal in selfObj) {
            if (!(sVal in otherObj)) {
                delete selfObj[sVal];
            }
        }

			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['intersection_update'] = $method;
		$method = $pyjs__bind_method2('isdisjoint', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $bool130,$bool131;
			if ((($bool131=!(($bool130=(typeof isSet == "undefined"?$m.isSet:isSet)(other)) === null || $bool130 === false || $bool130 === 0 || $bool130 === '' ?
				false :
				(typeof $bool130=='object'?
					(typeof $bool130.__nonzero__=='function'?
						$bool130.__nonzero__() :
						(typeof $bool130.__len__=='function'?
							($bool130.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool131 === false || $bool131 === 0 || $bool131 === '' ?
					false :
					(typeof $bool131=='object'?
						(typeof $bool131.__nonzero__=='function'?
							$bool131.__nonzero__() :
							(typeof $bool131.__len__=='function'?
								($bool131.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				other = $p['frozenset'](other);
			}

        var selfObj = self.__object,
            otherObj = other.__object;
        for (var sVal in selfObj) {
            if (typeof otherObj[sVal] != 'undefined') {
                return false;
            }
        }
        for (var sVal in otherObj) {
            if (typeof selfObj[sVal] != 'undefined') {
                return false;
            }
        }

			return true;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['isdisjoint'] = $method;
		$method = $pyjs__bind_method2('issubset', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $bool132,$bool133;
			if ((($bool133=!(($bool132=(typeof isSet == "undefined"?$m.isSet:isSet)(other)) === null || $bool132 === false || $bool132 === 0 || $bool132 === '' ?
				false :
				(typeof $bool132=='object'?
					(typeof $bool132.__nonzero__=='function'?
						$bool132.__nonzero__() :
						(typeof $bool132.__len__=='function'?
							($bool132.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool133 === false || $bool133 === 0 || $bool133 === '' ?
					false :
					(typeof $bool133=='object'?
						(typeof $bool133.__nonzero__=='function'?
							$bool133.__nonzero__() :
							(typeof $bool133.__len__=='function'?
								($bool133.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				other = $p['frozenset'](other);
			}
			return self.__cmp__(other) < 0;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['issubset'] = $method;
		$method = $pyjs__bind_method2('issuperset', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $bool134,$bool135;
			if ((($bool135=!(($bool134=(typeof isSet == "undefined"?$m.isSet:isSet)(other)) === null || $bool134 === false || $bool134 === 0 || $bool134 === '' ?
				false :
				(typeof $bool134=='object'?
					(typeof $bool134.__nonzero__=='function'?
						$bool134.__nonzero__() :
						(typeof $bool134.__len__=='function'?
							($bool134.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool135 === false || $bool135 === 0 || $bool135 === '' ?
					false :
					(typeof $bool135=='object'?
						(typeof $bool135.__nonzero__=='function'?
							$bool135.__nonzero__() :
							(typeof $bool135.__len__=='function'?
								($bool135.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				other = $p['frozenset'](other);
			}
			return (self.__cmp__(other)|1) == 1;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['issuperset'] = $method;
		$method = $pyjs__bind_method2('pop', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}


        for (var sVal in self.__object) {
            var value = self.__object[sVal];
            delete self.__object[sVal];
            return value;
        }
        
			throw ($m['KeyError']('pop from an empty set'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['pop'] = $method;
		$method = $pyjs__bind_method2('remove', function(value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}
			var val,$bool136,$eq15,$eq16;
			if ((($bool136=(($eq15=(typeof isSet == "undefined"?$m.isSet:isSet)(value))===($eq16=1)&&$eq15===null?true:
				($eq15===null?false:($eq16===null?false:
					((typeof $eq15=='object'||typeof $eq15=='function')&&typeof $eq15.__cmp__=='function'?$eq15.__cmp__($eq16) === 0:
						((typeof $eq16=='object'||typeof $eq16=='function')&&typeof $eq16.__cmp__=='function'?$eq16.__cmp__($eq15) === 0:
							$eq15==$eq16)))))) === null || $bool136 === false || $bool136 === 0 || $bool136 === '' ?
					false :
					(typeof $bool136=='object'?
						(typeof $bool136.__nonzero__=='function'?
							$bool136.__nonzero__() :
							(typeof $bool136.__len__=='function'?
								($bool136.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				val = $p['frozenset'](value);
			}
			else {
				val = value;
			}

        var h = $p['hash'](val);
        if (!(h in self.__object)) {
            throw $m['KeyError'](value);
        }
        delete self.__object[h];
        
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['remove'] = $method;
		$method = $pyjs__bind_method2('symmetric_difference', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $bool137,new_set,$bool138;
			if ((($bool138=!(($bool137=(typeof isSet == "undefined"?$m.isSet:isSet)(other)) === null || $bool137 === false || $bool137 === 0 || $bool137 === '' ?
				false :
				(typeof $bool137=='object'?
					(typeof $bool137.__nonzero__=='function'?
						$bool137.__nonzero__() :
						(typeof $bool137.__len__=='function'?
							($bool137.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool138 === false || $bool138 === 0 || $bool138 === '' ?
					false :
					(typeof $bool138=='object'?
						(typeof $bool138.__nonzero__=='function'?
							$bool138.__nonzero__() :
							(typeof $bool138.__len__=='function'?
								($bool138.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				other = $p['frozenset'](other);
			}
			new_set = $m['set']();

        var obj = new_set.__object,
            selfObj = self.__object,
            otherObj = other.__object;
        for (var sVal in selfObj) {
            if (typeof otherObj[sVal] == 'undefined') {
                obj[sVal] = selfObj[sVal];
            }
        }
        for (var sVal in otherObj) {
            if (typeof selfObj[sVal] == 'undefined') {
                obj[sVal] = otherObj[sVal];
            }
        }

			return new_set;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['symmetric_difference'] = $method;
		$method = $pyjs__bind_method2('symmetric_difference_update', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $bool140,$bool139;
			if ((($bool140=!(($bool139=(typeof isSet == "undefined"?$m.isSet:isSet)(other)) === null || $bool139 === false || $bool139 === 0 || $bool139 === '' ?
				false :
				(typeof $bool139=='object'?
					(typeof $bool139.__nonzero__=='function'?
						$bool139.__nonzero__() :
						(typeof $bool139.__len__=='function'?
							($bool139.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool140 === false || $bool140 === 0 || $bool140 === '' ?
					false :
					(typeof $bool140=='object'?
						(typeof $bool140.__nonzero__=='function'?
							$bool140.__nonzero__() :
							(typeof $bool140.__len__=='function'?
								($bool140.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				other = $p['frozenset'](other);
			}

        var obj = new Object(),
            selfObj = self.__object,
            otherObj = other.__object;
        for (var sVal in selfObj) {
            if (typeof otherObj[sVal] == 'undefined') {
                obj[sVal] = selfObj[sVal];
            }
        }
        for (var sVal in otherObj) {
            if (typeof selfObj[sVal] == 'undefined') {
                obj[sVal] = otherObj[sVal];
            }
        }
        self.__object = obj;

			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['symmetric_difference_update'] = $method;
		$method = $pyjs__bind_method2('union', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $bool141,new_set,$bool142;
			new_set = $m['set']();
			if ((($bool142=!(($bool141=(typeof isSet == "undefined"?$m.isSet:isSet)(other)) === null || $bool141 === false || $bool141 === 0 || $bool141 === '' ?
				false :
				(typeof $bool141=='object'?
					(typeof $bool141.__nonzero__=='function'?
						$bool141.__nonzero__() :
						(typeof $bool141.__len__=='function'?
							($bool141.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool142 === false || $bool142 === 0 || $bool142 === '' ?
					false :
					(typeof $bool142=='object'?
						(typeof $bool142.__nonzero__=='function'?
							$bool142.__nonzero__() :
							(typeof $bool142.__len__=='function'?
								($bool142.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				other = $p['frozenset'](other);
			}

        var obj = new_set.__object,
            selfObj = self.__object,
            otherObj = other.__object;
        for (var sVal in selfObj) {
            obj[sVal] = selfObj[sVal];
        }
        for (var sVal in otherObj) {
            if (!(sVal in selfObj)) {
                obj[sVal] = otherObj[sVal];
            }
        }

			return new_set;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['union'] = $method;
		$method = $pyjs__bind_method2('update', function(data) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
			}
			var $bool143,$bool144;
			if ((($bool144=!(($bool143=(typeof isSet == "undefined"?$m.isSet:isSet)(data)) === null || $bool143 === false || $bool143 === 0 || $bool143 === '' ?
				false :
				(typeof $bool143=='object'?
					(typeof $bool143.__nonzero__=='function'?
						$bool143.__nonzero__() :
						(typeof $bool143.__len__=='function'?
							($bool143.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool144 === false || $bool144 === 0 || $bool144 === '' ?
					false :
					(typeof $bool144=='object'?
						(typeof $bool144.__nonzero__=='function'?
							$bool144.__nonzero__() :
							(typeof $bool144.__len__=='function'?
								($bool144.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				data = $p['frozenset'](data);
			}

        var selfObj = self.__object,
            dataObj = data.__object;
        for (var sVal in dataObj) {
            if (!(sVal in selfObj)) {
                selfObj[sVal] = dataObj[sVal];
            }
        }
        
			return null;
		}
	, 1, [null,null,['self'],['data']]);
		$cls_definition['update'] = $method;
		var $bases = new Array($m['object']);
		return $pyjs_type('set', $bases, $cls_definition);
	})();
$m['set']['__str__'] = $m['set']['__repr__'];
$m['set']['toString'] = $m['set']['__repr__'];
	$m['frozenset'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '72fb4aa4b1d694dd042611c737e6f18e';
		$method = $pyjs__bind_method2('__init__', function(_data) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				_data = arguments[1];
			}
			if (typeof _data == 'undefined') _data=arguments.callee.__args__[3][1];
			var $bool145;
			if ((($bool145=(!('__object' in self))) === null || $bool145 === false || $bool145 === 0 || $bool145 === '' ?
					false :
					(typeof $bool145=='object'?
						(typeof $bool145.__nonzero__=='function'?
							$bool145.__nonzero__() :
							(typeof $bool145.__len__=='function'?
								($bool145.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$m['set']['__init__'](self, _data);
			}
			return null;
		}
	, 1, [null,null,['self'],['_data', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__hash__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}


        var hashes = new Array(), obj = self.__object, i = 0;
        for (var v in obj) {
            hashes[i++] = v;
        }
        hashes.sort();
        return (self.$H = hashes.join("|"));

		}
	, 1, [null,null,['self']]);
		$cls_definition['__hash__'] = $method;
		$method = $pyjs__bind_method2('add', function(value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}

			throw ($m['AttributeError']('frozenset is immutable'));
			return null;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['add'] = $method;
		$method = $pyjs__bind_method2('clear', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			throw ($m['AttributeError']('frozenset is immutable'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['clear'] = $method;
		$method = $pyjs__bind_method2('difference_update', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			throw ($m['AttributeError']('frozenset is immutable'));
			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['difference_update'] = $method;
		$method = $pyjs__bind_method2('discard', function(value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}

			throw ($m['AttributeError']('frozenset is immutable'));
			return null;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['discard'] = $method;
		$method = $pyjs__bind_method2('intersection_update', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			throw ($m['AttributeError']('frozenset is immutable'));
			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['intersection_update'] = $method;
		$method = $pyjs__bind_method2('pop', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			throw ($m['AttributeError']('frozenset is immutable'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['pop'] = $method;
		$method = $pyjs__bind_method2('symmetric_difference_update', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			throw ($m['AttributeError']('frozenset is immutable'));
			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['symmetric_difference_update'] = $method;
		var $bases = new Array($m['set']);
		return $pyjs_type('frozenset', $bases, $cls_definition);
	})();
$m['frozenset']['__str__'] = $m['frozenset']['__repr__'];
$m['frozenset']['toString'] = $m['frozenset']['__repr__'];
	$m['property'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = 'a09ef77e6a7d5f07a94790e97b522ba0';
		$method = $pyjs__bind_method2('__init__', function(fget, fset, fdel, doc) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				fget = arguments[1];
				fset = arguments[2];
				fdel = arguments[3];
				doc = arguments[4];
			}
			if (typeof fget == 'undefined') fget=arguments.callee.__args__[3][1];
			if (typeof fset == 'undefined') fset=arguments.callee.__args__[4][1];
			if (typeof fdel == 'undefined') fdel=arguments.callee.__args__[5][1];
			if (typeof doc == 'undefined') doc=arguments.callee.__args__[6][1];
			var $or5,$or4,$attr78,$attr77,$bool149,$bool148,$bool147,$bool146;
			self.fget = fget;
			self.fset = fset;
			self.fdel = fdel;
			if ((($bool149=((($bool147=$or4=!(($bool146=(doc === null)) === null || $bool146 === false || $bool146 === 0 || $bool146 === '' ?
				false :
				(typeof $bool146=='object'?
					(typeof $bool146.__nonzero__=='function'?
						$bool146.__nonzero__() :
						(typeof $bool146.__len__=='function'?
							($bool146.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool147 === false || $bool147 === 0 || $bool147 === '' ?
				false :
				(typeof $bool147=='object'?
					(typeof $bool147.__nonzero__=='function'?
						$bool147.__nonzero__() :
						(typeof $bool147.__len__=='function'?
							($bool147.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or4:!(($bool148=$p['hasattr'](fget, '__doc__')) === null || $bool148 === false || $bool148 === 0 || $bool148 === '' ?
				false :
				(typeof $bool148=='object'?
					(typeof $bool148.__nonzero__=='function'?
						$bool148.__nonzero__() :
						(typeof $bool148.__len__=='function'?
							($bool148.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) ))) === null || $bool149 === false || $bool149 === 0 || $bool149 === '' ?
					false :
					(typeof $bool149=='object'?
						(typeof $bool149.__nonzero__=='function'?
							$bool149.__nonzero__() :
							(typeof $bool149.__len__=='function'?
								($bool149.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self.__doc__ = doc;
			}
			else {
				self.__doc__ = fget['__doc__'];
			}
			return null;
		}
	, 1, [null,null,['self'],['fget', null],['fset', null],['fdel', null],['doc', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__get__', function(obj, objtype) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				obj = arguments[1];
				objtype = arguments[2];
			}
			if (typeof objtype == 'undefined') objtype=arguments.callee.__args__[4][1];
			var $attr80,$bool150,$attr79,$bool151;
			if ((($bool150=(obj === null)) === null || $bool150 === false || $bool150 === 0 || $bool150 === '' ?
					false :
					(typeof $bool150=='object'?
						(typeof $bool150.__nonzero__=='function'?
							$bool150.__nonzero__() :
							(typeof $bool150.__len__=='function'?
								($bool150.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return self;
			}
			if ((($bool151=(self['fget'] === null)) === null || $bool151 === false || $bool151 === 0 || $bool151 === '' ?
					false :
					(typeof $bool151=='object'?
						(typeof $bool151.__nonzero__=='function'?
							$bool151.__nonzero__() :
							(typeof $bool151.__len__=='function'?
								($bool151.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {

				var $pyjs__raise_expr1 = $m['AttributeError'];
				var $pyjs__raise_expr2 = 'unreadable attribute';
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
					throw $m['TypeError']('instance exception may not have a separate value');
				}
				if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
					throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

			}
			return self['fget'](obj);
		}
	, 1, [null,null,['self'],['obj'],['objtype', null]]);
		$cls_definition['__get__'] = $method;
		$method = $pyjs__bind_method2('__set__', function(obj, value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				obj = arguments[1];
				value = arguments[2];
			}
			var $attr82,$attr81,$bool152;
			if ((($bool152=(self['fset'] === null)) === null || $bool152 === false || $bool152 === 0 || $bool152 === '' ?
					false :
					(typeof $bool152=='object'?
						(typeof $bool152.__nonzero__=='function'?
							$bool152.__nonzero__() :
							(typeof $bool152.__len__=='function'?
								($bool152.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {

				var $pyjs__raise_expr1 = $m['AttributeError'];
				var $pyjs__raise_expr2 = 'can\x27t set attribute';
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
					throw $m['TypeError']('instance exception may not have a separate value');
				}
				if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
					throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

			}
			self['fset'](obj, value);
			return null;
		}
	, 1, [null,null,['self'],['obj'],['value']]);
		$cls_definition['__set__'] = $method;
		$method = $pyjs__bind_method2('__delete__', function(obj) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				obj = arguments[1];
			}
			var $attr83,$bool153,$attr84;
			if ((($bool153=(self['fdel'] === null)) === null || $bool153 === false || $bool153 === 0 || $bool153 === '' ?
					false :
					(typeof $bool153=='object'?
						(typeof $bool153.__nonzero__=='function'?
							$bool153.__nonzero__() :
							(typeof $bool153.__len__=='function'?
								($bool153.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {

				var $pyjs__raise_expr1 = $m['AttributeError'];
				var $pyjs__raise_expr2 = 'can\x27t delete attribute';
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
					throw $m['TypeError']('instance exception may not have a separate value');
				}
				if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
					throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

			}
			self['fdel'](obj);
			return null;
		}
	, 1, [null,null,['self'],['obj']]);
		$cls_definition['__delete__'] = $method;
		$method = $pyjs__bind_method2('setter', function(fset) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				fset = arguments[1];
			}

			self.fset = fset;
			return self;
		}
	, 1, [null,null,['self'],['fset']]);
		$cls_definition['setter'] = $method;
		$method = $pyjs__bind_method2('deleter', function(fdel) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				fdel = arguments[1];
			}

			self.fdel = fdel;
			return self;
		}
	, 1, [null,null,['self'],['fdel']]);
		$cls_definition['deleter'] = $method;
		var $bases = new Array($m['object']);
		return $pyjs_type('property', $bases, $cls_definition);
	})();
	$m['staticmethod'] = function(func) {


    var fnwrap = function() {
        return func.apply(null,$pyjs_array_slice.call(arguments));
    };
    fnwrap.__name__ = func.__name__;
    fnwrap.__args__ = func.__args__;
    fnwrap.__bind_type__ = 3;
    return fnwrap;
    
	};
	$m['staticmethod'].__name__ = 'staticmethod';

	$m['staticmethod'].__bind_type__ = 0;
	$m['staticmethod'].__args__ = [null,null,['func']];
	$m['$$super'] = function(typ, object_or_type) {
		if (typeof object_or_type == 'undefined') object_or_type=arguments.callee.__args__[3][1];
		var i,$bool154,$bool155;
		if ((($bool155=!(($bool154=(typeof _issubtype == "undefined"?$m._issubtype:_issubtype)(object_or_type, typ)) === null || $bool154 === false || $bool154 === 0 || $bool154 === '' ?
			false :
			(typeof $bool154=='object'?
				(typeof $bool154.__nonzero__=='function'?
					$bool154.__nonzero__() :
					(typeof $bool154.__len__=='function'?
						($bool154.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )) === null || $bool155 === false || $bool155 === 0 || $bool155 === '' ?
				false :
				(typeof $bool155=='object'?
					(typeof $bool155.__nonzero__=='function'?
						$bool155.__nonzero__() :
						(typeof $bool155.__len__=='function'?
							($bool155.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			i = (typeof _issubtype == "undefined"?$m._issubtype:_issubtype)(object_or_type, typ);
			throw ($m['TypeError']('super(type, obj): obj must be an instance or subtype of type'));
		}

    var type_ = typ
    if (typeof type_.__mro__ == 'undefined') {
        type_ = type_.__class__;
    }
    var fn = $pyjs_type('super', type_.__mro__.slice(1), {});
    fn.__new__ = fn.__mro__[1].__new__;
    fn.__init__ = fn.__mro__[1].__init__;
    if (object_or_type.__is_instance__ === false) {
        return fn;
    }
    var obj = new Object();
    function wrapper(obj, name) {
        var fnwrap = function() {
            return obj[name].apply(object_or_type,
                                   $pyjs_array_slice.call(arguments));
        };
        fnwrap.__name__ = name;
        fnwrap.__args__ = obj[name].__args__;
        fnwrap.__bind_type__ = obj[name].__bind_type__;
        return fnwrap;
    }
    for (var m in fn) {
        if (typeof fn[m] == 'function') {
            obj[m] = wrapper(fn, m);
        }
    }
    obj.__is_instance__ = object_or_type.__is_instance__;
    return obj;
    
	};
	$m['$$super'].__name__ = 'super';

	$m['$$super'].__bind_type__ = 0;
	$m['$$super'].__args__ = [null,null,['typ'],['object_or_type', null]];
	$m['xrange'] = function(start, stop, step) {
		if (typeof stop == 'undefined') stop=arguments.callee.__args__[3][1];
		if (typeof step == 'undefined') step=arguments.callee.__args__[4][1];
		var $bool156,$bool157,$bool161,$bool160,$attr86,$attr87,$attr85,$attr88,$bool162,$bool158,$bool159,$attr90,$assign1,rval,nval,$attr89;
		if ((($bool156=(stop === null)) === null || $bool156 === false || $bool156 === 0 || $bool156 === '' ?
				false :
				(typeof $bool156=='object'?
					(typeof $bool156.__nonzero__=='function'?
						$bool156.__nonzero__() :
						(typeof $bool156.__len__=='function'?
							($bool156.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			stop = start;
			start = 0;
		}
		if ((($bool158=!(($bool157=start!== null && start.__number__ && (start.__number__ != 0x01 || isFinite(start))) === null || $bool157 === false || $bool157 === 0 || $bool157 === '' ?
			false :
			(typeof $bool157=='object'?
				(typeof $bool157.__nonzero__=='function'?
					$bool157.__nonzero__() :
					(typeof $bool157.__len__=='function'?
						($bool157.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )) === null || $bool158 === false || $bool158 === 0 || $bool158 === '' ?
				false :
				(typeof $bool158=='object'?
					(typeof $bool158.__nonzero__=='function'?
						$bool158.__nonzero__() :
						(typeof $bool158.__len__=='function'?
							($bool158.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			throw ($m['TypeError']($p['sprintf']('xrange() integer start argument expected, got %s', start['__class__']['__name__'])));
		}
		if ((($bool160=!(($bool159=stop!== null && stop.__number__ && (stop.__number__ != 0x01 || isFinite(stop))) === null || $bool159 === false || $bool159 === 0 || $bool159 === '' ?
			false :
			(typeof $bool159=='object'?
				(typeof $bool159.__nonzero__=='function'?
					$bool159.__nonzero__() :
					(typeof $bool159.__len__=='function'?
						($bool159.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )) === null || $bool160 === false || $bool160 === 0 || $bool160 === '' ?
				false :
				(typeof $bool160=='object'?
					(typeof $bool160.__nonzero__=='function'?
						$bool160.__nonzero__() :
						(typeof $bool160.__len__=='function'?
							($bool160.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			throw ($m['TypeError']($p['sprintf']('xrange() integer end argument expected, got %s', stop['__class__']['__name__'])));
		}
		if ((($bool162=!(($bool161=step!== null && step.__number__ && (step.__number__ != 0x01 || isFinite(step))) === null || $bool161 === false || $bool161 === 0 || $bool161 === '' ?
			false :
			(typeof $bool161=='object'?
				(typeof $bool161.__nonzero__=='function'?
					$bool161.__nonzero__() :
					(typeof $bool161.__len__=='function'?
						($bool161.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )) === null || $bool162 === false || $bool162 === 0 || $bool162 === '' ?
				false :
				(typeof $bool162=='object'?
					(typeof $bool162.__nonzero__=='function'?
						$bool162.__nonzero__() :
						(typeof $bool162.__len__=='function'?
							($bool162.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			throw ($m['TypeError']($p['sprintf']('xrange() integer step argument expected, got %s', step['__class__']['__name__'])));
		}
		$assign1 = start;
		rval = $assign1;
		nval = $assign1;

    var nstep = (stop-start)/step;
    nstep = nstep < 0 ? Math.ceil(nstep) : Math.floor(nstep);
    if ((stop-start) % step) {
        nstep++;
    }
    var _stop = start+ nstep * step;
    if (nstep <= 0) nval = _stop;
    var x = {
        'next': function(noStop) {
            if (nval == _stop) {
                if (noStop === true) {
                    return;
                }
                throw $p['StopIteration'];
            }
            rval = nval;
            nval += step;

		return rval;

        },
        '$genfunc': function() {
            return this.next(true);
        },
        '__iter__': function() {
            return this;
        },
        '__reversed__': function() {
            return $m['xrange'](_stop-step, start-step, -step);
        },
        'toString': function() {
            var s = "xrange(";
            if (start!= 0) {
                s += start+ ", ";
            }
            s += _stop;
            if (step!= 1) {
                s += ", " + step;
            }
            return s + ")";
        },
        '__repr__': function() {
            return "'" + this.toString() + "'";
        }
    };
    x['__str__'] = x.toString;
    return x;
    
	};
	$m['xrange'].__name__ = 'xrange';

	$m['xrange'].__bind_type__ = 0;
	$m['xrange'].__args__ = [null,null,['start'],['stop', null],['step', 1]];
	$m['range'] = function(start, stop, step) {
		if (typeof stop == 'undefined') stop=arguments.callee.__args__[3][1];
		if (typeof step == 'undefined') step=arguments.callee.__args__[4][1];
		var $bool163,$attr94,$bool168,$attr91,$bool166,$bool165,$bool164,i,$attr93,$bool169,$attr92,$attr96,$attr95,items,$bool167;
		if ((($bool163=(stop === null)) === null || $bool163 === false || $bool163 === 0 || $bool163 === '' ?
				false :
				(typeof $bool163=='object'?
					(typeof $bool163.__nonzero__=='function'?
						$bool163.__nonzero__() :
						(typeof $bool163.__len__=='function'?
							($bool163.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			stop = start;
			start = 0;
		}
		i = start;
		if ((($bool165=!(($bool164=start!== null && start.__number__ && (start.__number__ != 0x01 || isFinite(start))) === null || $bool164 === false || $bool164 === 0 || $bool164 === '' ?
			false :
			(typeof $bool164=='object'?
				(typeof $bool164.__nonzero__=='function'?
					$bool164.__nonzero__() :
					(typeof $bool164.__len__=='function'?
						($bool164.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )) === null || $bool165 === false || $bool165 === 0 || $bool165 === '' ?
				false :
				(typeof $bool165=='object'?
					(typeof $bool165.__nonzero__=='function'?
						$bool165.__nonzero__() :
						(typeof $bool165.__len__=='function'?
							($bool165.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			throw ($m['TypeError']($p['sprintf']('xrange() integer start argument expected, got %s', start['__class__']['__name__'])));
		}
		if ((($bool167=!(($bool166=stop!== null && stop.__number__ && (stop.__number__ != 0x01 || isFinite(stop))) === null || $bool166 === false || $bool166 === 0 || $bool166 === '' ?
			false :
			(typeof $bool166=='object'?
				(typeof $bool166.__nonzero__=='function'?
					$bool166.__nonzero__() :
					(typeof $bool166.__len__=='function'?
						($bool166.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )) === null || $bool167 === false || $bool167 === 0 || $bool167 === '' ?
				false :
				(typeof $bool167=='object'?
					(typeof $bool167.__nonzero__=='function'?
						$bool167.__nonzero__() :
						(typeof $bool167.__len__=='function'?
							($bool167.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			throw ($m['TypeError']($p['sprintf']('xrange() integer end argument expected, got %s', stop['__class__']['__name__'])));
		}
		if ((($bool169=!(($bool168=step!== null && step.__number__ && (step.__number__ != 0x01 || isFinite(step))) === null || $bool168 === false || $bool168 === 0 || $bool168 === '' ?
			false :
			(typeof $bool168=='object'?
				(typeof $bool168.__nonzero__=='function'?
					$bool168.__nonzero__() :
					(typeof $bool168.__len__=='function'?
						($bool168.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )) === null || $bool169 === false || $bool169 === 0 || $bool169 === '' ?
				false :
				(typeof $bool169=='object'?
					(typeof $bool169.__nonzero__=='function'?
						$bool169.__nonzero__() :
						(typeof $bool169.__len__=='function'?
							($bool169.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			throw ($m['TypeError']($p['sprintf']('xrange() integer step argument expected, got %s', step['__class__']['__name__'])));
		}
		items = new Array();

    var nstep = (stop-start)/step;
    nstep = nstep < 0 ? Math.ceil(nstep) : Math.floor(nstep);
    if ((stop-start) % step) {
        nstep++;
    }
    var _stop = start+ nstep * step;
    if (nstep <= 0) i= _stop;
    for (; i!= _stop; i+= step) {

		items['push'](i);
}
		return $m['list'](items);
	};
	$m['range'].__name__ = 'range';

	$m['range'].__bind_type__ = 0;
	$m['range'].__args__ = [null,null,['start'],['stop', null],['step', 1]];
	$m['slice'] = function(object, lower, upper) {


    if (object=== null) {
        return null;
    }
    if (typeof object.__getslice__ == 'function') {
        return object.__getslice__(lower, upper);
    }
    if (object.slice == 'function')
        return object.slice(lower, upper);

    return null;
    
	};
	$m['slice'].__name__ = 'slice';

	$m['slice'].__bind_type__ = 0;
	$m['slice'].__args__ = [null,null,['object'],['lower'],['upper']];
	$m['__delslice'] = function(object, lower, upper) {


    if (typeof object.__delslice__ == 'function') {
        return object.__delslice__(lower, upper);
    }
    if (object.__getslice__ == 'function'
      && object.__delitem__ == 'function') {
        if (upper== null) {
            upper= $p['len'](object);
        }
        for (var i = lower; i < upper; i++) {
            object.__delitem__(i);
        }
        return null;
    }
    throw $m['TypeError']('object does not support item deletion');
    return null;
    
	};
	$m['__delslice'].__name__ = '__delslice';

	$m['__delslice'].__bind_type__ = 0;
	$m['__delslice'].__args__ = [null,null,['object'],['lower'],['upper']];
	$m['__setslice'] = function(object, lower, upper, value) {


    if (typeof object.__setslice__ == 'function') {
        return object.__setslice__(lower, upper, value);
    }
    throw $m['TypeError']('object does not support __setslice__');
    return null;
    
	};
	$m['__setslice'].__name__ = '__setslice';

	$m['__setslice'].__bind_type__ = 0;
	$m['__setslice'].__args__ = [null,null,['object'],['lower'],['upper'],['value']];
	$m['str'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = 'f56b682f769d55c516ef5560c369f5eb';
		$method = $pyjs__bind_method2('__new__', function(self, text) {
			if (typeof text == 'undefined') text=arguments.callee.__args__[3][1];


        if (text==='') {
            return text;
        }
        if (text===null) {
            return 'None';
        }
        if (typeof text=='boolean') {
            if (text) return 'True';
            return 'False';
        }
        if ($p['hasattr'](text,'__str__')) {
            return text.__str__();
        }
        return String(text);

		}
	, 3, [null,null,['self'],['text', '']]);
		$cls_definition['__new__'] = $method;
		var $bases = new Array($m['basestring']);
		return $pyjs_type('str', $bases, $cls_definition);
	})();
	$m['ord'] = function(x) {
		var $bool170,$bool171,$and21,$and20,$len9;
		if ((($bool171=((($bool170=$and20=typeof x== 'string') === null || $bool170 === false || $bool170 === 0 || $bool170 === '' ?
			false :
			(typeof $bool170=='object'?
				(typeof $bool170.__nonzero__=='function'?
					$bool170.__nonzero__() :
					(typeof $bool170.__len__=='function'?
						($bool170.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )?((($len9=x) === null?0:
			(typeof $len9.__array != 'undefined' ? $len9.__array.length:
				(typeof $len9.__len__ == 'function'?$len9.__len__():
					(typeof $len9.length != 'undefined'?$len9.length:
						$p['len']($len9))))) === 1):$and20)) === null || $bool171 === false || $bool171 === 0 || $bool171 === '' ?
				false :
				(typeof $bool171=='object'?
					(typeof $bool171.__nonzero__=='function'?
						$bool171.__nonzero__() :
						(typeof $bool171.__len__=='function'?
							($bool171.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			return x['charCodeAt'](0);
		}
		else {
throw $m['TypeError']("ord() expected string of length 1");
		}
		return null;
	};
	$m['ord'].__name__ = 'ord';

	$m['ord'].__bind_type__ = 0;
	$m['ord'].__args__ = [null,null,['x']];
	$m['chr'] = function(x) {


        return String.fromCharCode(x);
    
	};
	$m['chr'].__name__ = 'chr';

	$m['chr'].__bind_type__ = 0;
	$m['chr'].__args__ = [null,null,['x']];
	$m['is_basetype'] = function(x) {


       var t = typeof(x);
       return t == 'boolean' ||
       t == 'function' ||
       t == 'number' ||
       t == 'string' ||
       t == 'undefined';
    
	};
	$m['is_basetype'].__name__ = 'is_basetype';

	$m['is_basetype'].__bind_type__ = 0;
	$m['is_basetype'].__args__ = [null,null,['x']];
	$m['get_pyjs_classtype'] = function(x) {


        if (x!== null && typeof x.__is_instance__ == 'boolean') {
            var src = x.__name__;
            return src;
        }
        return null;
    
	};
	$m['get_pyjs_classtype'].__name__ = 'get_pyjs_classtype';

	$m['get_pyjs_classtype'].__bind_type__ = 0;
	$m['get_pyjs_classtype'].__args__ = [null,null,['x']];
	$m['repr'] = function(x) {
		var $bool172,$bool173;

       if (x=== null)
           return "None";

       var t = typeof(x);

       if (t == "undefined")
           return "undefined";

       if (t == "boolean") {
           if (x) return "True";
           return "False";
       }

       if (t == "number")
           return x.toString();

       if (t == "string") {
           if (x.indexOf("'") == -1)
               return "'" + x+ "'";
           if (x.indexOf('"') == -1)
               return '"' + x+ '"';
           var s = x.$$replace(new RegExp('"', "g"), '\\"');
           return '"' + s + '"';
       }


		if ((($bool172=$p['hasattr'](x, '__repr__')) === null || $bool172 === false || $bool172 === 0 || $bool172 === '' ?
				false :
				(typeof $bool172=='object'?
					(typeof $bool172.__nonzero__=='function'?
						$bool172.__nonzero__() :
						(typeof $bool172.__len__=='function'?
							($bool172.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			if ((($bool173=$p['callable'](x)) === null || $bool173 === false || $bool173 === 0 || $bool173 === '' ?
					false :
					(typeof $bool173=='object'?
						(typeof $bool173.__nonzero__=='function'?
							$bool173.__nonzero__() :
							(typeof $bool173.__len__=='function'?
								($bool173.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return x['__repr__'](x);
			}
			return x['__repr__']();
		}

       if (t == "function")
           return "<function " + x.toString() + ">";

       // If we get here, x is an object.  See if it's a Pyjamas class.

       if (!$p['hasattr'](x, "__init__"))
           return "<" + x.toString() + ">";

       // Handle the common Pyjamas data types.

       var constructor = "UNKNOWN";

       constructor = $m['get_pyjs_classtype'](x);

        //alert("repr constructor: " + constructor);

       // If we get here, the class isn't one we know -> return the class name.
       // Note that we replace underscores with dots so that the name will
       // (hopefully!) look like the original Python name.
       // (XXX this was for pyjamas 0.4 but may come back in an optimised mode)

       //var s = constructor.$$replace(new RegExp('_', "g"), '.');
       return "<" + constructor + " object>";
    
	};
	$m['repr'].__name__ = 'repr';

	$m['repr'].__bind_type__ = 0;
	$m['repr'].__args__ = [null,null,['x']];
	$m['len'] = function(object) {
		var v;
		v = 0;

    if (typeof object== 'undefined') {
        throw $m['UndefinedValueError']("obj");
    }
    if (object=== null) 
        return v;
    else if (typeof object.__array != 'undefined') 
        v = object.__array.length;
    else if (typeof object.__len__ == 'function') 
        v = object.__len__();
    else if (typeof object.length != 'undefined')
        v = object.length;
    else throw $m['TypeError']("object has no len()");
    if (v.__number__ & 0x06) return v;
    
		return v;
	};
	$m['len'].__name__ = 'len';

	$m['len'].__bind_type__ = 0;
	$m['len'].__args__ = [null,null,['object']];
	$m['isinstance'] = function(object_, classinfo) {
		var ci,$iter11_idx,$bool174,$bool175,$bool176,$iter11_iter,$iter11_type,$iter11_array,$iter11_nextval;

    if (typeof object_== 'undefined') {
        return false;
    }
    if (object_== null) {
        if (classinfo== null) {
            return true;
        }
        return false;
    }
    switch (classinfo.__name__) {
        case 'float':
            return typeof object_== 'number' && object_.__number__ == 0x01 && isFinite(object_);
        case 'int':
        case 'float_int':
            if (object_!== null
                && object_.__number__) {
                if (object_.__number__ == 0x02) {
                    return true;
                }
                if (isFinite(object_) && 
                    Math.ceil(object_) == object_) {
                    return true;
                }
            }
            return false;
        case 'basestring':
        case 'str':
            return typeof object_== 'string';
        case 'bool':
            return typeof object_== 'boolean';
        case 'long':
            return object_.__number__ == 0x04;
    }
    if (typeof object_!= 'object' && typeof object_!= 'function') {
        return false;
    }

		if ((($bool174=$p['_isinstance'](classinfo, $m['tuple'])) === null || $bool174 === false || $bool174 === 0 || $bool174 === '' ?
				false :
				(typeof $bool174=='object'?
					(typeof $bool174.__nonzero__=='function'?
						$bool174.__nonzero__() :
						(typeof $bool174.__len__=='function'?
							($bool174.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			if ((($bool175=$p['_isinstance'](object_, $m['tuple'])) === null || $bool175 === false || $bool175 === 0 || $bool175 === '' ?
					false :
					(typeof $bool175=='object'?
						(typeof $bool175.__nonzero__=='function'?
							$bool175.__nonzero__() :
							(typeof $bool175.__len__=='function'?
								($bool175.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return true;
			}
			$iter11_iter = classinfo;
			if (typeof ($iter11_array = $iter11_iter.__array) != 'undefined') {
				$iter11_type = 0;
			} else {
				$iter11_iter = $iter11_iter.__iter__();
				$iter11_type = typeof ($iter11_array = $iter11_iter.__array) != 'undefined'? 0 : (typeof $iter11_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter11_idx = 0;
			while (typeof ($iter11_nextval=($iter11_type?($iter11_type > 0?$iter11_iter.next(true,false):$p['wrapped_next']($iter11_iter)):$iter11_array[$iter11_idx++])) != 'undefined') {
				ci = $iter11_nextval;
				if ((($bool176=$m['isinstance'](object_, ci)) === null || $bool176 === false || $bool176 === 0 || $bool176 === '' ?
						false :
						(typeof $bool176=='object'?
							(typeof $bool176.__nonzero__=='function'?
								$bool176.__nonzero__() :
								(typeof $bool176.__len__=='function'?
									($bool176.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return true;
				}
			}
			return false;
		}
		else {
			return $p['_isinstance'](object_, classinfo);
		}
		return null;
	};
	$m['isinstance'].__name__ = 'isinstance';

	$m['isinstance'].__bind_type__ = 0;
	$m['isinstance'].__args__ = [null,null,['object_'],['classinfo']];
	$m['_isinstance'] = function(object_, classinfo) {


    if (   object_.__is_instance__ !== true 
        || classinfo.__is_instance__ === null) {
        return false;
    }
    var __mro__ = object_.__mro__;
    var n = __mro__.length;
    if (classinfo.__is_instance__ === false) {
        while (--n >= 0) {
            if (object_.__mro__[n] === classinfo.prototype) {
                return true;
            }
        }
        return false;
    }
    while (--n >= 0) {
        if (object_.__mro__[n] === classinfo.__class__) return true;
    }
    return false;
    
	};
	$m['_isinstance'].__name__ = '_isinstance';

	$m['_isinstance'].__bind_type__ = 0;
	$m['_isinstance'].__args__ = [null,null,['object_'],['classinfo']];
	$m['issubclass'] = function(class_, classinfo) {
		var ci,$bool177,$bool178,$bool179,$iter12_type,$iter12_array,$bool180,$iter12_iter,$iter12_idx,$iter12_nextval;
		if ((($bool177= typeof class_ == 'undefined' || class_ === null || class_.__is_instance__ !== false ) === null || $bool177 === false || $bool177 === 0 || $bool177 === '' ?
				false :
				(typeof $bool177=='object'?
					(typeof $bool177.__nonzero__=='function'?
						$bool177.__nonzero__() :
						(typeof $bool177.__len__=='function'?
							($bool177.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			throw ($m['TypeError']('arg 1 must be a class'));
		}
		if ((($bool178=$m['isinstance'](classinfo, $m['tuple'])) === null || $bool178 === false || $bool178 === 0 || $bool178 === '' ?
				false :
				(typeof $bool178=='object'?
					(typeof $bool178.__nonzero__=='function'?
						$bool178.__nonzero__() :
						(typeof $bool178.__len__=='function'?
							($bool178.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			$iter12_iter = classinfo;
			if (typeof ($iter12_array = $iter12_iter.__array) != 'undefined') {
				$iter12_type = 0;
			} else {
				$iter12_iter = $iter12_iter.__iter__();
				$iter12_type = typeof ($iter12_array = $iter12_iter.__array) != 'undefined'? 0 : (typeof $iter12_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter12_idx = 0;
			while (typeof ($iter12_nextval=($iter12_type?($iter12_type > 0?$iter12_iter.next(true,false):$p['wrapped_next']($iter12_iter)):$iter12_array[$iter12_idx++])) != 'undefined') {
				ci = $iter12_nextval;
				if ((($bool179=$m['issubclass'](class_, ci)) === null || $bool179 === false || $bool179 === 0 || $bool179 === '' ?
						false :
						(typeof $bool179=='object'?
							(typeof $bool179.__nonzero__=='function'?
								$bool179.__nonzero__() :
								(typeof $bool179.__len__=='function'?
									($bool179.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return true;
				}
			}
			return false;
		}
		else {
			if ((($bool180= typeof classinfo == 'undefined' || classinfo.__is_instance__ !== false ) === null || $bool180 === false || $bool180 === 0 || $bool180 === '' ?
					false :
					(typeof $bool180=='object'?
						(typeof $bool180.__nonzero__=='function'?
							$bool180.__nonzero__() :
							(typeof $bool180.__len__=='function'?
								($bool180.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				throw ($m['TypeError']('arg 2 must be a class or tuple of classes'));
			}
			return (typeof _issubtype == "undefined"?$m._issubtype:_issubtype)(class_, classinfo);
		}
		return null;
	};
	$m['issubclass'].__name__ = 'issubclass';

	$m['issubclass'].__bind_type__ = 0;
	$m['issubclass'].__args__ = [null,null,['class_'],['classinfo']];
	$m['_issubtype'] = function(object_, classinfo) {


    if (   object_.__is_instance__ === null 
        || classinfo.__is_instance__ === null) {
        return false;
    }
    var __mro__ = object_.__mro__;
    var n = __mro__.length;
    if (classinfo.__is_instance__ === false) {
        while (--n >= 0) {
            if (object_.__mro__[n] === classinfo.prototype) {
                return true;
            }
        }
        return false;
    }
    while (--n >= 0) {
        if (object_.__mro__[n] === classinfo.__class__) return true;
    }
    return false;
    
	};
	$m['_issubtype'].__name__ = '_issubtype';

	$m['_issubtype'].__bind_type__ = 0;
	$m['_issubtype'].__args__ = [null,null,['object_'],['classinfo']];
	$m['__getattr_check'] = function(attr, attr_left, attr_right, attrstr, bound_methods, descriptors, attribute_checking, source_tracking) {

 		return null;
	};
	$m['__getattr_check'].__name__ = '__getattr_check';

	$m['__getattr_check'].__bind_type__ = 0;
	$m['__getattr_check'].__args__ = [null,null,['attr'],['attr_left'],['attr_right'],['attrstr'],['bound_methods'],['descriptors'],['attribute_checking'],['source_tracking']];
	$m['getattr'] = function(obj, name, default_value) {
		if (typeof default_value == 'undefined') default_value=arguments.callee.__args__[4][1];


    if (obj=== null || typeof obj== 'undefined') {
        if (arguments.length != 3 || typeof obj== 'undefined') {
            throw $m['AttributeError']("'" + $m['repr'](obj) + "' has no attribute '" + name+ "'");
        }
        return default_value;
    }
    var mapped_name = name;
    if (typeof obj[name] == 'undefined') {
        mapped_name = '$$' + name;
        if (typeof obj[mapped_name] == 'undefined' || attrib_remap.indexOf(name) < 0) {
            if (arguments.length != 3) {
                throw $m['AttributeError']("'" + $m['repr'](obj) + "' has no attribute '" + name+ "'");
            }
            return default_value;
        }
    }
    var method = obj[mapped_name];
    if (method === null) return method;

    if (typeof method.__get__ == 'function') {
        if (obj.__is_instance__) {
            return method.__get__(obj, obj.__class__);
        }
        return method.__get__(null, obj.__class__);
    }
    if (   typeof method != 'function'
        || typeof method.__is_instance__ != 'undefined'
        || obj.__is_instance__ !== true
        || name== '__class__') {
        return obj[mapped_name];
    }

    var fnwrap = function() {
        return method.apply(obj,$pyjs_array_slice.call(arguments));
    };
    fnwrap.__name__ = name;
    fnwrap.__args__ = obj[mapped_name].__args__;
    fnwrap.__class__ = obj.__class__;
    fnwrap.__doc__ = method.__doc__ || '';
    fnwrap.__bind_type__ = obj[mapped_name].__bind_type__;
    if (typeof obj[mapped_name].__is_instance__ != 'undefined') {
        fnwrap.__is_instance__ = obj[mapped_name].__is_instance__;
    } else {
        fnwrap.__is_instance__ = false;
    }
    return fnwrap;
    
	};
	$m['getattr'].__name__ = 'getattr';

	$m['getattr'].__bind_type__ = 0;
	$m['getattr'].__args__ = [null,null,['obj'],['name'],['default_value', null]];
	$m['_del'] = function(obj) {


    if (typeof obj.__delete__ == 'function') {
        obj.__delete__(obj);
    } else {
        delete obj;
    }
    
	};
	$m['_del'].__name__ = '_del';

	$m['_del'].__bind_type__ = 0;
	$m['_del'].__args__ = [null,null,['obj']];
	$m['delattr'] = function(obj, name) {


    if (typeof obj== 'undefined') {
        throw $m['UndefinedValueError']("obj");
    }
    if (typeof name!= 'string') {
        throw $m['TypeError']("attribute name must be string");
    }
    if (obj.__is_instance__ && typeof obj.__delattr__ == 'function') {
        obj.__delattr__(name);
        return;
    }
    var mapped_name = attrib_remap.indexOf(name) < 0 ? name: 
                        '$$'+name;
    if (   obj!== null
        && (typeof obj== 'object' || typeof obj== 'function')
        && (typeof(obj[mapped_name]) != "undefined")
        &&(typeof(obj[mapped_name]) != "function") ){
        if (obj.__is_instance__
            && typeof obj[mapped_name].__delete__ == 'function') {
            obj[mapped_name].__delete__(obj);
        } else {
            delete obj[mapped_name];
        }
        return;
    }
    if (obj=== null) {
        throw $m['AttributeError']("'NoneType' object"+
                                  "has no attribute '"+name+"'");
    }
    if (typeof obj!= 'object' && typeof obj== 'function') {
       throw $m['AttributeError']("'"+typeof(obj)+
                                 "' object has no attribute '"+name+"'");
    }
    throw $m['AttributeError'](obj.__name__+
                              " instance has no attribute '"+ name+"'");
    
	};
	$m['delattr'].__name__ = 'delattr';

	$m['delattr'].__bind_type__ = 0;
	$m['delattr'].__args__ = [null,null,['obj'],['name']];
	$m['setattr'] = function(obj, name, value) {


    if (typeof obj== 'undefined') {
        throw $m['UndefinedValueError']("obj");
    }
    if (typeof name!= 'string') {
        throw $m['TypeError']("attribute name must be string");
    }
    if (obj.__is_instance__ && typeof obj.__setattr__ == 'function') {
        obj.__setattr__(name, value)
        return;
    }
    if (attrib_remap.indexOf(name) >= 0) {
        name= '$$' + name;
    }
    if (   typeof obj[name] != 'undefined'
        && obj.__is_instance__
        && obj[name] !== null
        && typeof obj[name].__set__ == 'function') {
        obj[name].__set__(obj, value);
    } else {
        obj[name] = value;
    }
    
	};
	$m['setattr'].__name__ = 'setattr';

	$m['setattr'].__bind_type__ = 0;
	$m['setattr'].__args__ = [null,null,['obj'],['name'],['value']];
	$m['hasattr'] = function(obj, name) {


    if (typeof obj== 'undefined') {
        throw $m['UndefinedValueError']("obj");
    }
    if (typeof name != 'string') {
        throw $m['TypeError']("attribute name must be string");
    }
    if (obj=== null) return false;
    if (typeof obj[name] == 'undefined' && (
            typeof obj['$$'+name] == 'undefined' ||
            attrib_remap.indexOf(name) < 0)
      ) {
        return false;
    }
    //if (obj!= 'object' && typeof obj!= 'function')
    //    return false;
    return true;
    
	};
	$m['hasattr'].__name__ = 'hasattr';

	$m['hasattr'].__bind_type__ = 0;
	$m['hasattr'].__args__ = [null,null,['obj'],['name']];
	$m['dir'] = function(obj) {


    if (typeof obj== 'undefined') {
        throw $m['UndefinedValueError']("obj");
    }
    var properties=$m['list']();
    for (var property in obj) properties.append(property);
    return properties;
    
	};
	$m['dir'].__name__ = 'dir';

	$m['dir'].__bind_type__ = 0;
	$m['dir'].__args__ = [null,null,['obj']];
	$m['filter'] = function(obj, method, sequence) {
		if (typeof sequence == 'undefined') sequence=arguments.callee.__args__[4][1];
		var $iter14_array,$iter13_iter,items,$bool181,$bool183,$iter13_type,item,$iter14_nextval,$iter14_type,$iter13_array,$iter14_iter,$iter13_nextval,$bool182,$iter14_idx,$iter13_idx;
		items = $p['list']([]);
		if ((($bool181=(sequence === null)) === null || $bool181 === false || $bool181 === 0 || $bool181 === '' ?
				false :
				(typeof $bool181=='object'?
					(typeof $bool181.__nonzero__=='function'?
						$bool181.__nonzero__() :
						(typeof $bool181.__len__=='function'?
							($bool181.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			sequence = method;
			method = obj;
			$iter13_iter = sequence;
			if (typeof ($iter13_array = $iter13_iter.__array) != 'undefined') {
				$iter13_type = 0;
			} else {
				$iter13_iter = $iter13_iter.__iter__();
				$iter13_type = typeof ($iter13_array = $iter13_iter.__array) != 'undefined'? 0 : (typeof $iter13_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter13_idx = 0;
			while (typeof ($iter13_nextval=($iter13_type?($iter13_type > 0?$iter13_iter.next(true,false):$p['wrapped_next']($iter13_iter)):$iter13_array[$iter13_idx++])) != 'undefined') {
				item = $iter13_nextval;
				if ((($bool182=method(item)) === null || $bool182 === false || $bool182 === 0 || $bool182 === '' ?
						false :
						(typeof $bool182=='object'?
							(typeof $bool182.__nonzero__=='function'?
								$bool182.__nonzero__() :
								(typeof $bool182.__len__=='function'?
									($bool182.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					items['append'](item);
				}
			}
		}
		else {
			$iter14_iter = sequence;
			if (typeof ($iter14_array = $iter14_iter.__array) != 'undefined') {
				$iter14_type = 0;
			} else {
				$iter14_iter = $iter14_iter.__iter__();
				$iter14_type = typeof ($iter14_array = $iter14_iter.__array) != 'undefined'? 0 : (typeof $iter14_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter14_idx = 0;
			while (typeof ($iter14_nextval=($iter14_type?($iter14_type > 0?$iter14_iter.next(true,false):$p['wrapped_next']($iter14_iter)):$iter14_array[$iter14_idx++])) != 'undefined') {
				item = $iter14_nextval;
				if ((($bool183=method['$$call'](obj, item)) === null || $bool183 === false || $bool183 === 0 || $bool183 === '' ?
						false :
						(typeof $bool183=='object'?
							(typeof $bool183.__nonzero__=='function'?
								$bool183.__nonzero__() :
								(typeof $bool183.__len__=='function'?
									($bool183.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					items['append'](item);
				}
			}
		}
		return items;
	};
	$m['filter'].__name__ = 'filter';

	$m['filter'].__bind_type__ = 0;
	$m['filter'].__args__ = [null,null,['obj'],['method'],['sequence', null]];
	$m['map'] = function(obj, method, sequence) {
		if (typeof sequence == 'undefined') sequence=arguments.callee.__args__[4][1];
		var $iter16_array,$iter15_array,$iter15_iter,$iter16_type,items,$iter15_type,$iter15_idx,$iter16_idx,item,$iter15_nextval,$bool184,$iter16_nextval,$iter16_iter;
		items = $p['list']([]);
		if ((($bool184=(sequence === null)) === null || $bool184 === false || $bool184 === 0 || $bool184 === '' ?
				false :
				(typeof $bool184=='object'?
					(typeof $bool184.__nonzero__=='function'?
						$bool184.__nonzero__() :
						(typeof $bool184.__len__=='function'?
							($bool184.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			sequence = method;
			method = obj;
			$iter15_iter = sequence;
			if (typeof ($iter15_array = $iter15_iter.__array) != 'undefined') {
				$iter15_type = 0;
			} else {
				$iter15_iter = $iter15_iter.__iter__();
				$iter15_type = typeof ($iter15_array = $iter15_iter.__array) != 'undefined'? 0 : (typeof $iter15_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter15_idx = 0;
			while (typeof ($iter15_nextval=($iter15_type?($iter15_type > 0?$iter15_iter.next(true,false):$p['wrapped_next']($iter15_iter)):$iter15_array[$iter15_idx++])) != 'undefined') {
				item = $iter15_nextval;
				items['append'](method(item));
			}
		}
		else {
			$iter16_iter = sequence;
			if (typeof ($iter16_array = $iter16_iter.__array) != 'undefined') {
				$iter16_type = 0;
			} else {
				$iter16_iter = $iter16_iter.__iter__();
				$iter16_type = typeof ($iter16_array = $iter16_iter.__array) != 'undefined'? 0 : (typeof $iter16_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter16_idx = 0;
			while (typeof ($iter16_nextval=($iter16_type?($iter16_type > 0?$iter16_iter.next(true,false):$p['wrapped_next']($iter16_iter)):$iter16_array[$iter16_idx++])) != 'undefined') {
				item = $iter16_nextval;
				items['append'](method['$$call'](obj, item));
			}
		}
		return items;
	};
	$m['map'].__name__ = 'map';

	$m['map'].__bind_type__ = 0;
	$m['map'].__args__ = [null,null,['obj'],['method'],['sequence', null]];
	$m['reduce'] = function(func, iterable, initializer) {
		if (typeof initializer == 'undefined') initializer=arguments.callee.__args__[4][1];
		var $iter17_nextval,$iter17_iter,$bool185,$bool187,$bool186,emtpy,$iter17_array,$pyjs_try_err,value,$iter17_idx,$iter17_type;
		try {
			iterable = $p['iter'](iterable);
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
			$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
			if (true) {

				var $pyjs__raise_expr1 = $m['TypeError'];
				var $pyjs__raise_expr2 = 'reduce() arg 2 must support iteration';
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
					throw $m['TypeError']('instance exception may not have a separate value');
				}
				if ($m['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
					throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

			}
		}
		emtpy = true;
		$iter17_iter = iterable;
		if (typeof ($iter17_array = $iter17_iter.__array) != 'undefined') {
			$iter17_type = 0;
		} else {
			$iter17_iter = $iter17_iter.__iter__();
			$iter17_type = typeof ($iter17_array = $iter17_iter.__array) != 'undefined'? 0 : (typeof $iter17_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter17_idx = 0;
		while (typeof ($iter17_nextval=($iter17_type?($iter17_type > 0?$iter17_iter.next(true,false):$p['wrapped_next']($iter17_iter)):$iter17_array[$iter17_idx++])) != 'undefined') {
			value = $iter17_nextval;
			emtpy = false;
			if ((($bool185=typeof initializer== 'undefined') === null || $bool185 === false || $bool185 === 0 || $bool185 === '' ?
					false :
					(typeof $bool185=='object'?
						(typeof $bool185.__nonzero__=='function'?
							$bool185.__nonzero__() :
							(typeof $bool185.__len__=='function'?
								($bool185.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				initializer = value;
			}
			else {
				initializer = func(initializer, value);
			}
		}
		if ((($bool186=(typeof empty == "undefined"?$m.empty:empty)) === null || $bool186 === false || $bool186 === 0 || $bool186 === '' ?
				false :
				(typeof $bool186=='object'?
					(typeof $bool186.__nonzero__=='function'?
						$bool186.__nonzero__() :
						(typeof $bool186.__len__=='function'?
							($bool186.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			if ((($bool187=typeof initializer== 'undefined') === null || $bool187 === false || $bool187 === 0 || $bool187 === '' ?
					false :
					(typeof $bool187=='object'?
						(typeof $bool187.__nonzero__=='function'?
							$bool187.__nonzero__() :
							(typeof $bool187.__len__=='function'?
								($bool187.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {

				var $pyjs__raise_expr1 = $m['TypeError'];
				var $pyjs__raise_expr2 = 'reduce() of empty sequence with no initial value';
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
					throw $m['TypeError']('instance exception may not have a separate value');
				}
				if ($m['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
					throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

			}
			return initializer;
		}
		return initializer;
	};
	$m['reduce'].__name__ = 'reduce';

	$m['reduce'].__bind_type__ = 0;
	$m['reduce'].__args__ = [null,null,['func'],['iterable'],['initializer', (function(){return;})()]];
	$m['zip'] = function() {
		var iterables = $p['tuple']($pyjs_array_slice.call(arguments,0,arguments.length));

		var $bool189,$bool188,i,$cmp10,$cmp9,$33,$add41,n,$eq18,$34,lst,$pyjs_try_err,t,$add42,$bool190,$eq17;
		n = $m['len'](iterables);
		if ((($bool188=(($eq17=n)===($eq18=0)&&$eq17===null?true:
			($eq17===null?false:($eq18===null?false:
				((typeof $eq17=='object'||typeof $eq17=='function')&&typeof $eq17.__cmp__=='function'?$eq17.__cmp__($eq18) === 0:
					((typeof $eq18=='object'||typeof $eq18=='function')&&typeof $eq18.__cmp__=='function'?$eq18.__cmp__($eq17) === 0:
						$eq17==$eq18)))))) === null || $bool188 === false || $bool188 === 0 || $bool188 === '' ?
				false :
				(typeof $bool188=='object'?
					(typeof $bool188.__nonzero__=='function'?
						$bool188.__nonzero__() :
						(typeof $bool188.__len__=='function'?
							($bool188.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			return $p['list']([]);
		}
		lst = $p['list']([]);
		iterables = function(){
			var $iter18_type,$iter18_iter,$iter18_array,i,$iter18_idx,$listcomp4,$iter18_nextval;
	$listcomp4 = $p['list']();
		$iter18_iter = iterables;
		if (typeof ($iter18_array = $iter18_iter.__array) != 'undefined') {
			$iter18_type = 0;
		} else {
			$iter18_iter = $iter18_iter.__iter__();
			$iter18_type = typeof ($iter18_array = $iter18_iter.__array) != 'undefined'? 0 : (typeof $iter18_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter18_idx = 0;
		while (typeof ($iter18_nextval=($iter18_type?($iter18_type > 0?$iter18_iter.next(true,false):$p['wrapped_next']($iter18_iter)):$iter18_array[$iter18_idx++])) != 'undefined') {
			i = $iter18_nextval;
			$listcomp4['append']($p['iter'](i));
		}

	return $listcomp4;}();
		try {
			while ((($bool189=true) === null || $bool189 === false || $bool189 === 0 || $bool189 === '' ?
					false :
					(typeof $bool189=='object'?
						(typeof $bool189.__nonzero__=='function'?
							$bool189.__nonzero__() :
							(typeof $bool189.__len__=='function'?
								($bool189.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				t = $p['list']([]);
				i = 0;
				while ((($bool190=((($cmp9=i)===($cmp10=n)?0:
					(typeof $cmp9==typeof $cmp10 && ((typeof $cmp9 == 'number')||(typeof $cmp9 == 'string')||(typeof $cmp9 == 'boolean'))?
						($cmp9 == $cmp10 ? 0 : ($cmp9 < $cmp10 ? -1 : 1)):
						$m['cmp']($cmp9, $cmp10))) == -1)) === null || $bool190 === false || $bool190 === 0 || $bool190 === '' ?
						false :
						(typeof $bool190=='object'?
							(typeof $bool190.__nonzero__=='function'?
								$bool190.__nonzero__() :
								(typeof $bool190.__len__=='function'?
									($bool190.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					t['append']((typeof ($33=iterables).__array != 'undefined'?
						((typeof $33.__array[$34=i]) != 'undefined'?$33.__array[$34]:
							$33.__getitem__($34)):
							$33.__getitem__(i))['next']());
					i = (typeof ($add41=i)==typeof ($add42=1) && (typeof $add41=='number'||typeof $add41=='string')?
						$add41+$add42:
						$m['op_add']($add41,$add42));
				}
				lst['append']($m['tuple'](t));
			}
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
			$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
			if (($pyjs_try_err_name == $p['StopIteration'].__name__)||$m['_isinstance']($pyjs_try_err,$p['StopIteration'])) {
			} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
		}
		return lst;
	};
	$m['zip'].__name__ = 'zip';

	$m['zip'].__bind_type__ = 0;
	$m['zip'].__args__ = ['iterables',null];
	$m['sorted'] = function(iterable, cmp, key, reverse) {
		if (typeof cmp == 'undefined') cmp=arguments.callee.__args__[3][1];
		if (typeof key == 'undefined') key=arguments.callee.__args__[4][1];
		if (typeof reverse == 'undefined') reverse=arguments.callee.__args__[5][1];
		var lst;
		lst = $m['list'](iterable);
		lst['sort'](cmp, key, reverse);
		return lst;
	};
	$m['sorted'].__name__ = 'sorted';

	$m['sorted'].__bind_type__ = 0;
	$m['sorted'].__args__ = [null,null,['iterable'],['cmp', null],['key', null],['reverse', false]];
	$m['reversed'] = function(iterable) {
		var $35,$eq20,$bool192,$bool193,$bool191,l,$bool194,$eq19,$pyjs_try_err,$36,v,$and23,$and22;
		if ((($bool191=$m['hasattr'](iterable, '__reversed__')) === null || $bool191 === false || $bool191 === 0 || $bool191 === '' ?
				false :
				(typeof $bool191=='object'?
					(typeof $bool191.__nonzero__=='function'?
						$bool191.__nonzero__() :
						(typeof $bool191.__len__=='function'?
							($bool191.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			return iterable['__reversed__']();
		}
		if ((($bool193=((($bool192=$and22=$m['hasattr'](iterable, '__len__')) === null || $bool192 === false || $bool192 === 0 || $bool192 === '' ?
			false :
			(typeof $bool192=='object'?
				(typeof $bool192.__nonzero__=='function'?
					$bool192.__nonzero__() :
					(typeof $bool192.__len__=='function'?
						($bool192.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )?$m['hasattr'](iterable, '__getitem__'):$and22)) === null || $bool193 === false || $bool193 === 0 || $bool193 === '' ?
				false :
				(typeof $bool193=='object'?
					(typeof $bool193.__nonzero__=='function'?
						$bool193.__nonzero__() :
						(typeof $bool193.__len__=='function'?
							($bool193.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			if ((($bool194=(($eq19=$m['len'](iterable))===($eq20=0)&&$eq19===null?true:
				($eq19===null?false:($eq20===null?false:
					((typeof $eq19=='object'||typeof $eq19=='function')&&typeof $eq19.__cmp__=='function'?$eq19.__cmp__($eq20) === 0:
						((typeof $eq20=='object'||typeof $eq20=='function')&&typeof $eq20.__cmp__=='function'?$eq20.__cmp__($eq19) === 0:
							$eq19==$eq20)))))) === null || $bool194 === false || $bool194 === 0 || $bool194 === '' ?
					false :
					(typeof $bool194=='object'?
						(typeof $bool194.__nonzero__=='function'?
							$bool194.__nonzero__() :
							(typeof $bool194.__len__=='function'?
								($bool194.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				l = $p['list']([]);
				return l['__iter__']();
			}
			try {
				v = (typeof ($35=iterable).__array != 'undefined'?
					((typeof $35.__array[$36=0]) != 'undefined'?$35.__array[$36]:
						$35.__getitem__($36)):
						$35.__getitem__(0));
				return (typeof _reversed == "undefined"?$m._reversed:_reversed)(iterable);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (true) {
				}
			}
		}
		throw ($m['TypeError']('argument to reversed() must be a sequence'));
		return null;
	};
	$m['reversed'].__name__ = 'reversed';

	$m['reversed'].__bind_type__ = 0;
	$m['reversed'].__args__ = [null,null,['iterable']];
	$m['_reversed'] = function(iterable) {
		var $38,$39,i,$37,$sub10,$bool196,$bool195,$cmp14,$sub9,$sub8,$cmp11,$cmp13,$cmp12,$40,$sub7;
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
		var $generator = function () {};
		$generator['next'] = function (noStop) {
		
			var $res;
			$yield_value = $exc = null;
			try {
				$res = $generator['$genfunc']();
				$is_executing=false;
				if (typeof $res == 'undefined') {
					if (noStop === true) {
						$generator_state[0] = -1;
						return;
					}
					throw $p['StopIteration'];
				}
			} catch (e) {
		
				$is_executing=false;
				$generator_state[0] = -1;
				if (noStop === true && e === $p['StopIteration']) {
					return;
				}
				throw e;
			}
			return $res;
		};
		$generator['__iter__'] = function () {return $generator;};
		$generator['send'] = function ($val) {
		
			$yield_value = $val;
			$exc = null;
			try {
				var $res = $generator['$genfunc']();
				if (typeof $res == 'undefined') throw $p['StopIteration'];
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				throw e;
			}
			$is_executing=false;
			return $res;
		};
		$generator['$$throw'] = function ($exc_type, $exc_value) {
		
			$yield_value = null;
			$exc=(typeof $exc_value == 'undefined'?$exc_type():$exc_type($exc_value));
			try {
				var $res = $generator['$genfunc']();
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				throw (e);
			}
			$is_executing=false;
			return $res;
		};
		$generator['close'] = function () {
		
			$yield_value = null;
			$exc=$m['GeneratorExit'];
			try {
				var $res = $generator['$genfunc']();
				$is_executing=false;
				if (typeof $res != 'undefined') throw $m['RuntimeError']('generator ignored GeneratorExit');
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				if (e.__name__ == 'StopIteration' || e.__name__ == 'GeneratorExit') return null;
				throw (e);
			}
			return null;
		};
		$generator['$genfunc'] = function () {
			var $yielding = false;
			if ($is_executing) throw $m['ValueError']('generator already executing');
			$is_executing = true;
		
			if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
				for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
				if (typeof $exc != 'undefined' && $exc !== null) {
					$yielding = null;
					$generator_state[0] = -1;
					throw $exc;
				}
				i = $m['len'](iterable);
				$generator_state[0]=1;
			}
			if ($generator_state[0] == 1) {
				$generator_state.splice(1, $generator_state.length-1);
				$generator_state[0]=2;
			}
			if ($generator_state[0] == 2) {
				for (;($generator_state[1] > 0)||((($bool196=((($cmp13=i)===($cmp14=0)?0:
					(typeof $cmp13==typeof $cmp14 && ((typeof $cmp13 == 'number')||(typeof $cmp13 == 'string')||(typeof $cmp13 == 'boolean'))?
						($cmp13 == $cmp14 ? 0 : ($cmp13 < $cmp14 ? -1 : 1)):
						$m['cmp']($cmp13, $cmp14))) == 1)) === null || $bool196 === false || $bool196 === 0 || $bool196 === '' ?
						false :
						(typeof $bool196=='object'?
							(typeof $bool196.__nonzero__=='function'?
								$bool196.__nonzero__() :
								(typeof $bool196.__len__=='function'?
									($bool196.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) ));$generator_state[1] = 0) {
					if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
						for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
						i = (typeof ($sub9=i)==typeof ($sub10=1) && (typeof $sub9=='number'||typeof $sub9=='string')?
							$sub9-$sub10:
							$m['op_sub']($sub9,$sub10));
						$yield_value = (typeof ($39=iterable).__array != 'undefined'?
							((typeof $39.__array[$40=i]) != 'undefined'?$39.__array[$40]:
								$39.__getitem__($40)):
								$39.__getitem__(i));
						$yielding = true;
						$generator_state[1] = 1;
						return $yield_value;
						$generator_state[1]=1;
					}
					if ($generator_state[1] == 1) {
						if (typeof $exc != 'undefined' && $exc !== null) {
							$yielding = null;
							$generator_state[1] = -1;
							throw $exc;
						}
						$generator_state[1]=2;
					}
					if ($generator_state[1] == 2) {
					}
				}
				$generator_state[0]=3;
			}
			if ($generator_state[0] == 3) {
				$generator_state[0]=4;
			}
			if ($generator_state[0] == 4) {
			}

			return;
		};
		return $generator;
	};
	$m['_reversed'].__name__ = '_reversed';

	$m['_reversed'].__bind_type__ = 0;
	$m['_reversed'].__args__ = [null,null,['iterable']];
	$m['enumerate'] = function(seq) {


    if (typeof seq.__enumerate__ == 'function') {
        return seq.__enumerate__();
    }

		return (typeof _enumerate == "undefined"?$m._enumerate:_enumerate)(seq);
	};
	$m['enumerate'].__name__ = 'enumerate';

	$m['enumerate'].__bind_type__ = 0;
	$m['enumerate'].__args__ = [null,null,['seq']];
	$m['_enumerate'] = function(sequence) {
		var $iter20_iter,$iter20_nextval,$iter19_idx,$iter20_idx,$add46,$add45,$add44,$add43,$iter19_array,$iter19_iter,$iter19_nextval,$iter19_type,nextIndex,item,$iter20_type,$iter20_array;
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
		var $generator = function () {};
		$generator['next'] = function (noStop) {
		
			var $res;
			$yield_value = $exc = null;
			try {
				$res = $generator['$genfunc']();
				$is_executing=false;
				if (typeof $res == 'undefined') {
					if (noStop === true) {
						$generator_state[0] = -1;
						return;
					}
					throw $p['StopIteration'];
				}
			} catch (e) {
		
				$is_executing=false;
				$generator_state[0] = -1;
				if (noStop === true && e === $p['StopIteration']) {
					return;
				}
				throw e;
			}
			return $res;
		};
		$generator['__iter__'] = function () {return $generator;};
		$generator['send'] = function ($val) {
		
			$yield_value = $val;
			$exc = null;
			try {
				var $res = $generator['$genfunc']();
				if (typeof $res == 'undefined') throw $p['StopIteration'];
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				throw e;
			}
			$is_executing=false;
			return $res;
		};
		$generator['$$throw'] = function ($exc_type, $exc_value) {
		
			$yield_value = null;
			$exc=(typeof $exc_value == 'undefined'?$exc_type():$exc_type($exc_value));
			try {
				var $res = $generator['$genfunc']();
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				throw (e);
			}
			$is_executing=false;
			return $res;
		};
		$generator['close'] = function () {
		
			$yield_value = null;
			$exc=$m['GeneratorExit'];
			try {
				var $res = $generator['$genfunc']();
				$is_executing=false;
				if (typeof $res != 'undefined') throw $m['RuntimeError']('generator ignored GeneratorExit');
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				if (e.__name__ == 'StopIteration' || e.__name__ == 'GeneratorExit') return null;
				throw (e);
			}
			return null;
		};
		$generator['$genfunc'] = function () {
			var $yielding = false;
			if ($is_executing) throw $m['ValueError']('generator already executing');
			$is_executing = true;
		
			if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
				for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
				if (typeof $exc != 'undefined' && $exc !== null) {
					$yielding = null;
					$generator_state[0] = -1;
					throw $exc;
				}
				nextIndex = 0;
				$iter20_iter = sequence;
				if (typeof ($iter20_array = $iter20_iter.__array) != 'undefined') {
					$iter20_type = 0;
				} else {
					$iter20_iter = $iter20_iter.__iter__();
					$iter20_type = typeof ($iter20_array = $iter20_iter.__array) != 'undefined'? 0 : (typeof $iter20_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter20_idx = 0;
				$generator_state[0]=1;
			}
			if ($generator_state[0] == 1) {
				$generator_state[1] = 0;
				$generator_state[0]=2;
			}
			if ($generator_state[0] == 2) {
				for (;($generator_state[1] > 0 || typeof ($iter20_nextval=($iter20_type?($iter20_type > 0?$iter20_iter.next(true,false):$p['wrapped_next']($iter20_iter)):$iter20_array[$iter20_idx++])) != 'undefined');$generator_state[1] = 0) {
					if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
						for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
						item = $iter20_nextval;
						$yield_value = $p['tuple']([nextIndex, item]);
						$yielding = true;
						$generator_state[1] = 1;
						return $yield_value;
						$generator_state[1]=1;
					}
					if ($generator_state[1] == 1) {
						if (typeof $exc != 'undefined' && $exc !== null) {
							$yielding = null;
							$generator_state[1] = -1;
							throw $exc;
						}
						nextIndex = (typeof ($add45=nextIndex)==typeof ($add46=1) && (typeof $add45=='number'||typeof $add45=='string')?
							$add45+$add46:
							$m['op_add']($add45,$add46));
						$generator_state[1]=2;
					}
					if ($generator_state[1] == 2) {
					}
				}
				$generator_state[0]=3;
			}
			if ($generator_state[0] == 3) {
				$generator_state[0]=4;
			}
			if ($generator_state[0] == 4) {
			}

			return;
		};
		return $generator;
	};
	$m['_enumerate'].__name__ = '_enumerate';

	$m['_enumerate'].__bind_type__ = 0;
	$m['_enumerate'].__args__ = [null,null,['sequence']];
	$m['iter'] = function(iterable, sentinel) {
		if (typeof sentinel == 'undefined') sentinel=arguments.callee.__args__[3][1];
		var $bool198,$bool199,$bool197,$bool200;
		if ((($bool197=(sentinel === null)) === null || $bool197 === false || $bool197 === 0 || $bool197 === '' ?
				false :
				(typeof $bool197=='object'?
					(typeof $bool197.__nonzero__=='function'?
						$bool197.__nonzero__() :
						(typeof $bool197.__len__=='function'?
							($bool197.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			if ((($bool198=(typeof isIteratable == "undefined"?$m.isIteratable:isIteratable)(iterable)) === null || $bool198 === false || $bool198 === 0 || $bool198 === '' ?
					false :
					(typeof $bool198=='object'?
						(typeof $bool198.__nonzero__=='function'?
							$bool198.__nonzero__() :
							(typeof $bool198.__len__=='function'?
								($bool198.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return iterable['__iter__']();
			}
			if ((($bool199=$m['hasattr'](iterable, '__getitem__')) === null || $bool199 === false || $bool199 === 0 || $bool199 === '' ?
					false :
					(typeof $bool199=='object'?
						(typeof $bool199.__nonzero__=='function'?
							$bool199.__nonzero__() :
							(typeof $bool199.__len__=='function'?
								($bool199.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return (typeof _iter_getitem == "undefined"?$m._iter_getitem:_iter_getitem)(iterable);
			}
			throw ($m['TypeError']('object is not iterable'));
		}
		if ((($bool200=(typeof isFunction == "undefined"?$m.isFunction:isFunction)(iterable)) === null || $bool200 === false || $bool200 === 0 || $bool200 === '' ?
				false :
				(typeof $bool200=='object'?
					(typeof $bool200.__nonzero__=='function'?
						$bool200.__nonzero__() :
						(typeof $bool200.__len__=='function'?
							($bool200.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			return (typeof _iter_callable == "undefined"?$m._iter_callable:_iter_callable)(iterable, sentinel);
		}
		throw ($m['TypeError']('iter(v, w): v must be callable'));
		return null;
	};
	$m['iter'].__name__ = 'iter';

	$m['iter'].__bind_type__ = 0;
	$m['iter'].__args__ = [null,null,['iterable'],['sentinel', null]];
	$m['_iter_getitem'] = function(object) {
		var $add50,$add49,$add48,i,$bool202,$bool201,$add47,$pyjs_try_err,$43,$42,$41,$44;
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
		var $generator = function () {};
		$generator['next'] = function (noStop) {
		
			var $res;
			$yield_value = $exc = null;
			try {
				$res = $generator['$genfunc']();
				$is_executing=false;
				if (typeof $res == 'undefined') {
					if (noStop === true) {
						$generator_state[0] = -1;
						return;
					}
					throw $p['StopIteration'];
				}
			} catch (e) {
		
				$is_executing=false;
				$generator_state[0] = -1;
				if (noStop === true && e === $p['StopIteration']) {
					return;
				}
				throw e;
			}
			return $res;
		};
		$generator['__iter__'] = function () {return $generator;};
		$generator['send'] = function ($val) {
		
			$yield_value = $val;
			$exc = null;
			try {
				var $res = $generator['$genfunc']();
				if (typeof $res == 'undefined') throw $p['StopIteration'];
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				throw e;
			}
			$is_executing=false;
			return $res;
		};
		$generator['$$throw'] = function ($exc_type, $exc_value) {
		
			$yield_value = null;
			$exc=(typeof $exc_value == 'undefined'?$exc_type():$exc_type($exc_value));
			try {
				var $res = $generator['$genfunc']();
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				throw (e);
			}
			$is_executing=false;
			return $res;
		};
		$generator['close'] = function () {
		
			$yield_value = null;
			$exc=$m['GeneratorExit'];
			try {
				var $res = $generator['$genfunc']();
				$is_executing=false;
				if (typeof $res != 'undefined') throw $m['RuntimeError']('generator ignored GeneratorExit');
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				if (e.__name__ == 'StopIteration' || e.__name__ == 'GeneratorExit') return null;
				throw (e);
			}
			return null;
		};
		$generator['$genfunc'] = function () {
			var $yielding = false;
			if ($is_executing) throw $m['ValueError']('generator already executing');
			$is_executing = true;
		
			if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
				for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
				if (typeof $exc != 'undefined' && $exc !== null) {
					$yielding = null;
					$generator_state[0] = -1;
					throw $exc;
				}
				i = 0;
				$generator_state[0]=1;
			}
			if ($generator_state[0] == 1) {
				try {
					if (typeof $generator_exc[0] != 'undefined' && $generator_exc[0] !== null) throw $generator_exc[0];
					if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
						for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
						$generator_exc[0] = null;
						$generator_state[1]=1;
					}
					if ($generator_state[1] == 1) {
						$generator_state[1]=2;
					}
					if ($generator_state[1] == 2) {
						$generator_state.splice(2, $generator_state.length-2);
						$generator_state[1]=3;
					}
					if ($generator_state[1] == 3) {
						for (;($generator_state[2] > 0)||((($bool202=true) === null || $bool202 === false || $bool202 === 0 || $bool202 === '' ?
								false :
								(typeof $bool202=='object'?
									(typeof $bool202.__nonzero__=='function'?
										$bool202.__nonzero__() :
										(typeof $bool202.__len__=='function'?
											($bool202.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) ));$generator_state[2] = 0) {
							if (typeof $generator_state[2] == 'undefined' || $generator_state[2] === 0) {
								for (var $i = 2 ; $i < ($generator_state.length<4?4:$generator_state.length); $i++) $generator_state[$i]=0;
								$yield_value = (typeof ($43=object).__array != 'undefined'?
									((typeof $43.__array[$44=i]) != 'undefined'?$43.__array[$44]:
										$43.__getitem__($44)):
										$43.__getitem__(i));
								$yielding = true;
								$generator_state[2] = 1;
								return $yield_value;
								$generator_state[2]=1;
							}
							if ($generator_state[2] == 1) {
								if (typeof $exc != 'undefined' && $exc !== null) {
									$yielding = null;
									$generator_state[2] = -1;
									throw $exc;
								}
								i = (typeof ($add49=i)==typeof ($add50=1) && (typeof $add49=='number'||typeof $add49=='string')?
									$add49+$add50:
									$m['op_add']($add49,$add50));
								$generator_state[2]=2;
							}
							if ($generator_state[2] == 2) {
							}
						}
						$generator_state[1]=4;
					}
					if ($generator_state[1] == 4) {
						$generator_state[1]=5;
					}
					if ($generator_state[1] == 5) {
						$generator_state[1]=6;
					}
					if ($generator_state[1] == 6) {
					}
				} catch($pyjs_try_err) {
					$generator_exc[0] = $pyjs_try_err;
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (($pyjs_try_err_name == $m['IndexError'].__name__)||$m['_isinstance']($pyjs_try_err,$m['IndexError'])) {
						if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
							for (var $i = 3 ; $i < ($generator_state.length<5?5:$generator_state.length); $i++) $generator_state[$i]=0;
							$generator_state[3]=1;
						}
						if ($generator_state[3] == 1) {
						}
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$generator_exc[0] = null;
				for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
				$generator_state[0]=2;
			}
			if ($generator_state[0] == 2) {
				$generator_state[0]=3;
			}
			if ($generator_state[0] == 3) {
			}

			return;
		};
		return $generator;
	};
	$m['_iter_getitem'].__name__ = '_iter_getitem';

	$m['_iter_getitem'].__bind_type__ = 0;
	$m['_iter_getitem'].__args__ = [null,null,['object']];
	$m['_iter_callable'] = function(callable, sentinel) {
		var $eq21,nextval,$bool206,$bool204,$bool205,$bool203,$eq23,$eq22,$eq24;
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
		var $generator = function () {};
		$generator['next'] = function (noStop) {
		
			var $res;
			$yield_value = $exc = null;
			try {
				$res = $generator['$genfunc']();
				$is_executing=false;
				if (typeof $res == 'undefined') {
					if (noStop === true) {
						$generator_state[0] = -1;
						return;
					}
					throw $p['StopIteration'];
				}
			} catch (e) {
		
				$is_executing=false;
				$generator_state[0] = -1;
				if (noStop === true && e === $p['StopIteration']) {
					return;
				}
				throw e;
			}
			return $res;
		};
		$generator['__iter__'] = function () {return $generator;};
		$generator['send'] = function ($val) {
		
			$yield_value = $val;
			$exc = null;
			try {
				var $res = $generator['$genfunc']();
				if (typeof $res == 'undefined') throw $p['StopIteration'];
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				throw e;
			}
			$is_executing=false;
			return $res;
		};
		$generator['$$throw'] = function ($exc_type, $exc_value) {
		
			$yield_value = null;
			$exc=(typeof $exc_value == 'undefined'?$exc_type():$exc_type($exc_value));
			try {
				var $res = $generator['$genfunc']();
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				throw (e);
			}
			$is_executing=false;
			return $res;
		};
		$generator['close'] = function () {
		
			$yield_value = null;
			$exc=$m['GeneratorExit'];
			try {
				var $res = $generator['$genfunc']();
				$is_executing=false;
				if (typeof $res != 'undefined') throw $m['RuntimeError']('generator ignored GeneratorExit');
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				if (e.__name__ == 'StopIteration' || e.__name__ == 'GeneratorExit') return null;
				throw (e);
			}
			return null;
		};
		$generator['$genfunc'] = function () {
			var $yielding = false;
			if ($is_executing) throw $m['ValueError']('generator already executing');
			$is_executing = true;
		
			if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
				for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
				if (typeof $exc != 'undefined' && $exc !== null) {
					$yielding = null;
					$generator_state[0] = -1;
					throw $exc;
				}
				$generator_state[0]=1;
			}
			if ($generator_state[0] == 1) {
				$generator_state.splice(1, $generator_state.length-1);
				$generator_state[0]=2;
			}
			if ($generator_state[0] == 2) {
				for (;($generator_state[1] > 0)||((($bool205=true) === null || $bool205 === false || $bool205 === 0 || $bool205 === '' ?
						false :
						(typeof $bool205=='object'?
							(typeof $bool205.__nonzero__=='function'?
								$bool205.__nonzero__() :
								(typeof $bool205.__len__=='function'?
									($bool205.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) ));$generator_state[1] = 0) {
					if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
						for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
						nextval = callable();
						if ((($bool206=(($eq23=nextval)===($eq24=sentinel)&&$eq23===null?true:
							($eq23===null?false:($eq24===null?false:
								((typeof $eq23=='object'||typeof $eq23=='function')&&typeof $eq23.__cmp__=='function'?$eq23.__cmp__($eq24) === 0:
									((typeof $eq24=='object'||typeof $eq24=='function')&&typeof $eq24.__cmp__=='function'?$eq24.__cmp__($eq23) === 0:
										$eq23==$eq24)))))) === null || $bool206 === false || $bool206 === 0 || $bool206 === '' ?
								false :
								(typeof $bool206=='object'?
									(typeof $bool206.__nonzero__=='function'?
										$bool206.__nonzero__() :
										(typeof $bool206.__len__=='function'?
											($bool206.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							break;
						}
						$yield_value = nextval;
						$yielding = true;
						$generator_state[1] = 1;
						return $yield_value;
						$generator_state[1]=1;
					}
					if ($generator_state[1] == 1) {
						if (typeof $exc != 'undefined' && $exc !== null) {
							$yielding = null;
							$generator_state[1] = -1;
							throw $exc;
						}
						$generator_state[1]=2;
					}
					if ($generator_state[1] == 2) {
					}
				}
				$generator_state[0]=3;
			}
			if ($generator_state[0] == 3) {
				$generator_state[0]=4;
			}
			if ($generator_state[0] == 4) {
			}

			return;
		};
		return $generator;
	};
	$m['_iter_callable'].__name__ = '_iter_callable';

	$m['_iter_callable'].__bind_type__ = 0;
	$m['_iter_callable'].__args__ = [null,null,['callable'],['sentinel']];
	$m['min'] = function() {
		var sequence = $p['tuple']($pyjs_array_slice.call(arguments,0,arguments.length));

		var $iter21_idx,$eq27,$bool208,$bool207,$iter21_nextval,minValue,$iter21_type,item,$iter21_iter,$eq25,$iter21_array,$eq26,$eq28,$bool209,$46,$45;
		if ((($bool207=(($eq25=$m['len'](sequence))===($eq26=1)&&$eq25===null?true:
			($eq25===null?false:($eq26===null?false:
				((typeof $eq25=='object'||typeof $eq25=='function')&&typeof $eq25.__cmp__=='function'?$eq25.__cmp__($eq26) === 0:
					((typeof $eq26=='object'||typeof $eq26=='function')&&typeof $eq26.__cmp__=='function'?$eq26.__cmp__($eq25) === 0:
						$eq25==$eq26)))))) === null || $bool207 === false || $bool207 === 0 || $bool207 === '' ?
				false :
				(typeof $bool207=='object'?
					(typeof $bool207.__nonzero__=='function'?
						$bool207.__nonzero__() :
						(typeof $bool207.__len__=='function'?
							($bool207.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			sequence = (typeof ($45=sequence).__array != 'undefined'?
				((typeof $45.__array[$46=0]) != 'undefined'?$45.__array[$46]:
					$45.__getitem__($46)):
					$45.__getitem__(0));
		}
		minValue = null;
		$iter21_iter = sequence;
		if (typeof ($iter21_array = $iter21_iter.__array) != 'undefined') {
			$iter21_type = 0;
		} else {
			$iter21_iter = $iter21_iter.__iter__();
			$iter21_type = typeof ($iter21_array = $iter21_iter.__array) != 'undefined'? 0 : (typeof $iter21_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter21_idx = 0;
		while (typeof ($iter21_nextval=($iter21_type?($iter21_type > 0?$iter21_iter.next(true,false):$p['wrapped_next']($iter21_iter)):$iter21_array[$iter21_idx++])) != 'undefined') {
			item = $iter21_nextval;
			if ((($bool208=(minValue === null)) === null || $bool208 === false || $bool208 === 0 || $bool208 === '' ?
					false :
					(typeof $bool208=='object'?
						(typeof $bool208.__nonzero__=='function'?
							$bool208.__nonzero__() :
							(typeof $bool208.__len__=='function'?
								($bool208.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				minValue = item;
			}
			else if ((($bool209=(($eq27=$m['cmp'](item, minValue))===($eq28=(typeof ($usub5=1)=='number'?
				-$usub5:
				$m['op_usub']($usub5)))&&$eq27===null?true:
				($eq27===null?false:($eq28===null?false:
					((typeof $eq27=='object'||typeof $eq27=='function')&&typeof $eq27.__cmp__=='function'?$eq27.__cmp__($eq28) === 0:
						((typeof $eq28=='object'||typeof $eq28=='function')&&typeof $eq28.__cmp__=='function'?$eq28.__cmp__($eq27) === 0:
							$eq27==$eq28)))))) === null || $bool209 === false || $bool209 === 0 || $bool209 === '' ?
					false :
					(typeof $bool209=='object'?
						(typeof $bool209.__nonzero__=='function'?
							$bool209.__nonzero__() :
							(typeof $bool209.__len__=='function'?
								($bool209.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				minValue = item;
			}
		}
		return minValue;
	};
	$m['min'].__name__ = 'min';

	$m['min'].__bind_type__ = 0;
	$m['min'].__args__ = ['sequence',null];
	$m['max'] = function() {
		var sequence = $p['tuple']($pyjs_array_slice.call(arguments,0,arguments.length));

		var $bool211,$bool210,$bool212,$iter22_array,$iter22_nextval,maxValue,$iter22_idx,$eq32,item,$eq30,$48,$eq31,$iter22_type,$eq29,$47,$iter22_iter;
		if ((($bool210=(($eq29=$m['len'](sequence))===($eq30=1)&&$eq29===null?true:
			($eq29===null?false:($eq30===null?false:
				((typeof $eq29=='object'||typeof $eq29=='function')&&typeof $eq29.__cmp__=='function'?$eq29.__cmp__($eq30) === 0:
					((typeof $eq30=='object'||typeof $eq30=='function')&&typeof $eq30.__cmp__=='function'?$eq30.__cmp__($eq29) === 0:
						$eq29==$eq30)))))) === null || $bool210 === false || $bool210 === 0 || $bool210 === '' ?
				false :
				(typeof $bool210=='object'?
					(typeof $bool210.__nonzero__=='function'?
						$bool210.__nonzero__() :
						(typeof $bool210.__len__=='function'?
							($bool210.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			sequence = (typeof ($47=sequence).__array != 'undefined'?
				((typeof $47.__array[$48=0]) != 'undefined'?$47.__array[$48]:
					$47.__getitem__($48)):
					$47.__getitem__(0));
		}
		maxValue = null;
		$iter22_iter = sequence;
		if (typeof ($iter22_array = $iter22_iter.__array) != 'undefined') {
			$iter22_type = 0;
		} else {
			$iter22_iter = $iter22_iter.__iter__();
			$iter22_type = typeof ($iter22_array = $iter22_iter.__array) != 'undefined'? 0 : (typeof $iter22_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter22_idx = 0;
		while (typeof ($iter22_nextval=($iter22_type?($iter22_type > 0?$iter22_iter.next(true,false):$p['wrapped_next']($iter22_iter)):$iter22_array[$iter22_idx++])) != 'undefined') {
			item = $iter22_nextval;
			if ((($bool211=(maxValue === null)) === null || $bool211 === false || $bool211 === 0 || $bool211 === '' ?
					false :
					(typeof $bool211=='object'?
						(typeof $bool211.__nonzero__=='function'?
							$bool211.__nonzero__() :
							(typeof $bool211.__len__=='function'?
								($bool211.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				maxValue = item;
			}
			else if ((($bool212=(($eq31=$m['cmp'](item, maxValue))===($eq32=1)&&$eq31===null?true:
				($eq31===null?false:($eq32===null?false:
					((typeof $eq31=='object'||typeof $eq31=='function')&&typeof $eq31.__cmp__=='function'?$eq31.__cmp__($eq32) === 0:
						((typeof $eq32=='object'||typeof $eq32=='function')&&typeof $eq32.__cmp__=='function'?$eq32.__cmp__($eq31) === 0:
							$eq31==$eq32)))))) === null || $bool212 === false || $bool212 === 0 || $bool212 === '' ?
					false :
					(typeof $bool212=='object'?
						(typeof $bool212.__nonzero__=='function'?
							$bool212.__nonzero__() :
							(typeof $bool212.__len__=='function'?
								($bool212.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				maxValue = item;
			}
		}
		return maxValue;
	};
	$m['max'].__name__ = 'max';

	$m['max'].__bind_type__ = 0;
	$m['max'].__args__ = ['sequence',null];
	$m['sum'] = function(iterable, start) {
		if (typeof start == 'undefined') start=arguments.callee.__args__[3][1];
		var $add51,$bool213,$iter23_nextval,$iter23_iter,i,$iter23_type,$iter23_array,$iter23_idx,$add52;
		if ((($bool213=(start === null)) === null || $bool213 === false || $bool213 === 0 || $bool213 === '' ?
				false :
				(typeof $bool213=='object'?
					(typeof $bool213.__nonzero__=='function'?
						$bool213.__nonzero__() :
						(typeof $bool213.__len__=='function'?
							($bool213.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			start = 0;
		}
		$iter23_iter = iterable;
		if (typeof ($iter23_array = $iter23_iter.__array) != 'undefined') {
			$iter23_type = 0;
		} else {
			$iter23_iter = $iter23_iter.__iter__();
			$iter23_type = typeof ($iter23_array = $iter23_iter.__array) != 'undefined'? 0 : (typeof $iter23_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter23_idx = 0;
		while (typeof ($iter23_nextval=($iter23_type?($iter23_type > 0?$iter23_iter.next(true,false):$p['wrapped_next']($iter23_iter)):$iter23_array[$iter23_idx++])) != 'undefined') {
			i = $iter23_nextval;
			start = (typeof ($add51=start)==typeof ($add52=i) && (typeof $add51=='number'||typeof $add51=='string')?
				$add51+$add52:
				$m['op_add']($add51,$add52));
		}
		return start;
	};
	$m['sum'].__name__ = 'sum';

	$m['sum'].__bind_type__ = 0;
	$m['sum'].__args__ = [null,null,['iterable'],['start', null]];
$p['next_hash_id'] = 0;
	if ((($bool214=typeof 'a'[0] == 'undefined') === null || $bool214 === false || $bool214 === 0 || $bool214 === '' ?
			false :
			(typeof $bool214=='object'?
				(typeof $bool214.__nonzero__=='function'?
					$bool214.__nonzero__() :
					(typeof $bool214.__len__=='function'?
						($bool214.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )) {
$p['__hash'] = function(obj) {
        switch (obj.constructor) {
            case String:
            case Number:
            case Date:
                return '$'+obj;
        }
        if (typeof obj.__hash__ == 'function') return obj.__hash__();
        if (typeof obj.nodeType != 'number') {
            try {
            obj.$H = ++$p['next_hash_id'];
            } catch (e) {
                return obj;
            }
            return $p['next_hash_id'];
            return obj.$H = ++$p['next_hash_id'];
        }
        if (typeof obj.setAttribute == 'undefined') {
            return obj;
        }
        var $H;
        if ($H = obj.getAttribute('$H')) {
            return $H;
        }
        obj.setAttribute('$H', ++$p['next_hash_id']);
        return $p['next_hash_id'];
    };
        
$p['hash'] = function(obj) {
        if (obj === null) return null;

        if (typeof obj.$H != 'undefined') return obj.$H;
        if (typeof obj == 'string' || obj.__number__) return '$'+obj;
        switch (obj.constructor) {
            case String:
            case Number:
            case Date:
                return '$'+obj;
        }
        if (typeof obj.__hash__ == 'function') return obj.__hash__();
        if (typeof obj.nodeType != 'number') {
            try {
            obj.$H = ++$p['next_hash_id'];
            } catch (e) {
                return obj;
            }
            return $p['next_hash_id'];
            return obj.$H = ++$p['next_hash_id'];
        }
        if (typeof obj.setAttribute == 'undefined') {
            return obj;
        }
        var $H;
        if ($H = obj.getAttribute('$H')) {
            return $H;
        }
        obj.setAttribute('$H', ++$p['next_hash_id']);
        return $p['next_hash_id'];
    };
        
	}
	else {
$p['__hash'] = function(obj) {
        switch (obj.constructor) {
            case String:
            case Number:
            case Date:
                return '$'+obj;
        }
        if (typeof obj.__hash__ == 'function') return obj.__hash__();
        obj.$H = ++$p['next_hash_id'];
        return obj.$H;
    };
        
$p['hash'] = function(obj) {
        if (obj === null) return null;

        if (typeof obj.$H != 'undefined') return obj.$H;
        if (typeof obj == 'string' || obj.__number__) return '$'+obj;
        switch (obj.constructor) {
            case String:
            case Number:
            case Date:
                return '$'+obj;
        }
        if (typeof obj.__hash__ == 'function') return obj.__hash__();
        obj.$H = ++$p['next_hash_id'];
        return obj.$H;
    };
        
	}
	$m['isObject'] = function(a) {


    return (a!== null && (typeof a== 'object')) || typeof a== 'function';
    
	};
	$m['isObject'].__name__ = 'isObject';

	$m['isObject'].__bind_type__ = 0;
	$m['isObject'].__args__ = [null,null,['a']];
	$m['isFunction'] = function(a) {


    return typeof a== 'function';
    
	};
	$m['isFunction'].__name__ = 'isFunction';

	$m['isFunction'].__bind_type__ = 0;
	$m['isFunction'].__args__ = [null,null,['a']];
	$m['callable'] = $m['isFunction'];
	$m['isString'] = function(a) {


    return typeof a== 'string';
    
	};
	$m['isString'].__name__ = 'isString';

	$m['isString'].__bind_type__ = 0;
	$m['isString'].__args__ = [null,null,['a']];
	$m['isNull'] = function(a) {


    return typeof a== 'object' && !a;
    
	};
	$m['isNull'].__name__ = 'isNull';

	$m['isNull'].__bind_type__ = 0;
	$m['isNull'].__args__ = [null,null,['a']];
	$m['isArray'] = function(a) {


    return $m['isObject'](a) && a.constructor === Array;
    
	};
	$m['isArray'].__name__ = 'isArray';

	$m['isArray'].__bind_type__ = 0;
	$m['isArray'].__args__ = [null,null,['a']];
	$m['isUndefined'] = function(a) {


    return typeof a== 'undefined';
    
	};
	$m['isUndefined'].__name__ = 'isUndefined';

	$m['isUndefined'].__bind_type__ = 0;
	$m['isUndefined'].__args__ = [null,null,['a']];
	$m['isIteratable'] = function(a) {


    if (a=== null) return false;
    return typeof a.__iter__ == 'function';
    
	};
	$m['isIteratable'].__name__ = 'isIteratable';

	$m['isIteratable'].__bind_type__ = 0;
	$m['isIteratable'].__args__ = [null,null,['a']];
	$m['isNumber'] = function(a) {


    return a!== null && a.__number__ && 
           (a.__number__ != 0x01 || isFinite(a));
    
	};
	$m['isNumber'].__name__ = 'isNumber';

	$m['isNumber'].__bind_type__ = 0;
	$m['isNumber'].__args__ = [null,null,['a']];
	$m['isInteger'] = function(a) {


    switch (a.__number__) {
        case 0x01:
            if (a != Math.floor(a)) break;
        case 0x02:
        case 0x04:
            return true;
    }
    return false;

	};
	$m['isInteger'].__name__ = 'isInteger';

	$m['isInteger'].__bind_type__ = 0;
	$m['isInteger'].__args__ = [null,null,['a']];
	$m['isSet'] = function(a) {


    if (a=== null) return false;
    if (typeof a.__object == 'undefined') return false;
    var a_mro = a.__mro__;
    switch (a_mro[a_mro.length-2].__md5__) {
        case $m['set'].__md5__:
            return 1;
        case $m['frozenset'].__md5__:
            return 2;
    }
    return false;

	};
	$m['isSet'].__name__ = 'isSet';

	$m['isSet'].__bind_type__ = 0;
	$m['isSet'].__args__ = [null,null,['a']];
	$m['toJSObjects'] = function(x) {
		var $attr97,$bool215,$bool217,$bool216,$bool219,$bool218,$bool222,$attr99,$attr98,$bool220,$attr100,$bool221;
		if ((($bool215=$m['isArray'](x)) === null || $bool215 === false || $bool215 === 0 || $bool215 === '' ?
				false :
				(typeof $bool215=='object'?
					(typeof $bool215.__nonzero__=='function'?
						$bool215.__nonzero__() :
						(typeof $bool215.__len__=='function'?
							($bool215.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {

        var result = [];
        for(var k=0; k < x.length; k++) {
           var v = x[k];
           var tv = $m['toJSObjects'](v);
           result.push(tv);
        }
        return result;
        
		}
		if ((($bool216=$m['isObject'](x)) === null || $bool216 === false || $bool216 === 0 || $bool216 === '' ?
				false :
				(typeof $bool216=='object'?
					(typeof $bool216.__nonzero__=='function'?
						$bool216.__nonzero__() :
						(typeof $bool216.__len__=='function'?
							($bool216.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			if ((($bool217=x['__number__']) === null || $bool217 === false || $bool217 === 0 || $bool217 === '' ?
					false :
					(typeof $bool217=='object'?
						(typeof $bool217.__nonzero__=='function'?
							$bool217.__nonzero__() :
							(typeof $bool217.__len__=='function'?
								($bool217.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return x['valueOf']();
			}
			else if ((($bool218=$m['isinstance'](x, $m['dict'])) === null || $bool218 === false || $bool218 === 0 || $bool218 === '' ?
					false :
					(typeof $bool218=='object'?
						(typeof $bool218.__nonzero__=='function'?
							$bool218.__nonzero__() :
							(typeof $bool218.__len__=='function'?
								($bool218.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {

            var o = x.getObject();
            var result = {};
            for (var i in o) {
               result[o[i][0].toString()] = $m['toJSObjects'](o[i][1]);
            }
            return result;
            
			}
			else if ((($bool219=$m['isinstance'](x, $m['list'])) === null || $bool219 === false || $bool219 === 0 || $bool219 === '' ?
					false :
					(typeof $bool219=='object'?
						(typeof $bool219.__nonzero__=='function'?
							$bool219.__nonzero__() :
							(typeof $bool219.__len__=='function'?
								($bool219.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return $m['toJSObjects'](x['__array']);
			}
			else if ((($bool220=$m['hasattr'](x, '__class__')) === null || $bool220 === false || $bool220 === 0 || $bool220 === '' ?
					false :
					(typeof $bool220=='object'?
						(typeof $bool220.__nonzero__=='function'?
							$bool220.__nonzero__() :
							(typeof $bool220.__len__=='function'?
								($bool220.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return x;
			}
		}
		if ((($bool221=$m['isObject'](x)) === null || $bool221 === false || $bool221 === 0 || $bool221 === '' ?
				false :
				(typeof $bool221=='object'?
					(typeof $bool221.__nonzero__=='function'?
						$bool221.__nonzero__() :
						(typeof $bool221.__len__=='function'?
							($bool221.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {

        var result = {};
        for(var k in x) {
            var v = x[k];
            var tv = $m['toJSObjects'](v);
            result[k] = tv;
            }
            return result;
         
		}
		if ((($bool222=$m['isString'](x)) === null || $bool222 === false || $bool222 === 0 || $bool222 === '' ?
				false :
				(typeof $bool222=='object'?
					(typeof $bool222.__nonzero__=='function'?
						$bool222.__nonzero__() :
						(typeof $bool222.__len__=='function'?
							($bool222.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			return $m['str'](x);
		}
		return x;
	};
	$m['toJSObjects'].__name__ = 'toJSObjects';

	$m['toJSObjects'].__bind_type__ = 0;
	$m['toJSObjects'].__args__ = [null,null,['x']];
	$m['sprintf'] = function(strng, args) {


    var re_dict = /([^%]*)%[(]([^)]+)[)]([#0\x20\x2B-]*)(\d+)?(\.\d+)?[hlL]?(.)((.|\n)*)/;
    var re_list = /([^%]*)%([#0\x20\x2B-]*)(\*|(\d+))?(\.\d+)?[hlL]?(.)((.|\n)*)/;
    var re_exp = /(.*)([+-])(.*)/;

    var argidx = 0;
    var nargs = 0;
    var result = [];
    var remainder = strng;

    function formatarg(flags, minlen, precision, conversion, param) {
        var subst = '';
        var numeric = true;
        var left_padding = 1;
        var padchar = ' ';
        if (minlen === null || minlen == 0 || !minlen) {
            minlen=0;
        } else {
            minlen = parseInt(minlen);
        }
        if (!precision) {
            precision = null;
        } else {
            precision = parseInt(precision.substr(1));
        }
        if (flags.indexOf('-') >= 0) {
            left_padding = 0;
        }
        switch (conversion) {
            case '%':
                numeric = false;
                subst = '%';
                break;
            case 'c':
                numeric = false;
                subst = String.fromCharCode(parseInt(param));
                break;
            case 'd':
            case 'i':
            case 'u':
                subst = '' + parseInt(param);
                break;
            case 'e':
                if (precision === null) {
                    precision = 6;
                }
                subst = re_exp.exec(String(param.toExponential(precision)));
                if (subst[3].length == 1) {
                    subst = subst[1] + subst[2] + '0' + subst[3];
                } else {
                    subst = subst[1] + subst[2] + subst[3];
                }
                break;
            case 'E':
                if (precision === null) {
                    precision = 6;
                }
                subst = re_exp.exec(String(param.toExponential(precision)).toUpperCase());
                if (subst[3].length == 1) {
                    subst = subst[1] + subst[2] + '0' + subst[3];
                } else {
                    subst = subst[1] + subst[2] + subst[3];
                }
                break;
            case 'f':
                if (precision === null) {
                    precision = 6;
                }
                subst = String(parseFloat(param).toFixed(precision));
                break;
            case 'F':
                if (precision === null) {
                    precision = 6;
                }
                subst = String(parseFloat(param).toFixed(precision)).toUpperCase();
                break;
            case 'g':
                if (precision === null && flags.indexOf('#') >= 0) {
                    precision = 6;
                }
                if (param >= 1E6 || param < 1E-5) {
                    subst = String(precision == null ? param.toExponential() : param.toExponential().toPrecision(precision));
                } else {
                    subst = String(precision == null ? parseFloat(param) : parseFloat(param).toPrecision(precision));
                }
                break;
            case 'G':
                if (precision === null && flags.indexOf('#') >= 0) {
                    precision = 6;
                }
                if (param >= 1E6 || param < 1E-5) {
                    subst = String(precision == null ? param.toExponential() : param.toExponential().toPrecision(precision)).toUpperCase();
                } else {
                    subst = String(precision == null ? parseFloat(param) : parseFloat(param).toPrecision(precision)).toUpperCase().toUpperCase();
                }
                break;
            case 'r':
                numeric = false;
                subst = $m['repr'](param);
                break;
            case 's':
                numeric = false;
                subst = $m['str'](param);
                break;
            case 'o':
                param = $p['float_int'](param);
                subst = param.toString(8);
                if (subst != '0' && flags.indexOf('#') >= 0) {
                    subst = '0' + subst;
                }
                break;
            case 'x':
                param = $p['float_int'](param);
                subst = param.toString(16);
                if (flags.indexOf('#') >= 0) {
                    if (left_padding) {
                        subst = subst.rjust(minlen - 2, '0');
                    }
                    subst = '0x' + subst;
                }
                break;
            case 'X':
                param = $p['float_int'](param);
                subst = param.toString(16).toUpperCase();
                if (flags.indexOf('#') >= 0) {
                    if (left_padding) {
                        subst = subst.rjust(minlen - 2, '0');
                    }
                    subst = '0x' + subst;
                }
                break;
            default:
                throw $m['ValueError']("unsupported format character '" + conversion + "' ("+$p['hex'](conversion.charCodeAt(0))+") at index " + (strng.length - remainder.length - 1));
        }
        if (minlen && subst.length < minlen) {
            if (numeric && left_padding && flags.indexOf('0') >= 0) {
                padchar = '0';
            }
            subst = left_padding ? subst.rjust(minlen, padchar) : subst.ljust(minlen, padchar);
        }
        return subst;
    }

    function sprintf_list(strng, args) {
        var a, left, flags, precision, conversion, minlen, param,
            __array = result;
        while (remainder) {
            a = re_list.exec(remainder);
            if (a === null) {
                __array[__array.length] = remainder;
                break;
            }
            left = a[1]; flags = a[2];
            minlen = a[3]; precision = a[5]; conversion = a[6];
            remainder = a[7];
            if (typeof minlen == 'undefined') minlen = null;
            if (typeof precision == 'undefined') precision = null;
            if (typeof conversion == 'undefined') conversion = null;
            __array[__array.length] = left;
            if (minlen == '*') {
                if (argidx == nargs) {
                    throw $m['TypeError']("not enough arguments for format string");
                }
                minlen = args.__getitem__(argidx++);
                switch (minlen.__number__) {
                    case 0x02:
                    case 0x04:
                        break;
                    case 0x01:
                        if (minlen == Math.floor(minlen)) {
                            break;
                        }
                    default:
                        throw $m['TypeError']('* wants int');
                }
            }
            if (conversion != '%') {
                if (argidx == nargs) {
                    throw $m['TypeError']("not enough arguments for format string");
                }
                param = args.__getitem__(argidx++);
            }
            __array[__array.length] = formatarg(flags, minlen, precision, conversion, param);
        }
    }

    function sprintf_dict(strng, args) {
        var a = null,
            left = null,
            flags = null,
            precision = null,
            conversion = null,
            minlen = null,
            minlen_type = null,
            key = null,
            arg = args,
            param,
            __array = result;

        argidx++;
        while (remainder) {
            a = re_dict.exec(remainder);
            if (a === null) {
                __array[__array.length] = remainder;
                break;
            }
            left = a[1]; key = a[2]; flags = a[3];
            minlen = a[4]; precision = a[5]; conversion = a[6];
            remainder = a[7];
            if (typeof minlen == 'undefined') minlen = null;
            if (typeof precision == 'undefined') precision = null;
            if (typeof conversion == 'undefined') conversion = null;
            __array[__array.length] = left;
            param = arg.__getitem__(key);
            __array[__array.length] = formatarg(flags, minlen, precision, conversion, param);
        }
    }

    var constructor = args === null ? 'NoneType' : (args.__md5__ == $m['tuple'].__md5__ ? 'tuple': (args.__md5__ == $m['dict'].__md5__ ? 'dict': 'Other'));
    if (strng.indexOf("%(") >= 0) {
        if (re_dict.exec(strng) !== null) {
            if (constructor != "dict") {
                throw $m['TypeError']("format requires a mapping");
            }
            sprintf_dict(strng, args);
            return result.join("");
        }
    }
    if (constructor != "tuple") {
        args = $m['tuple']([args]);
    }
    nargs = args.__array.length;
    sprintf_list(strng, args);
    if (argidx != nargs) {
        throw $m['TypeError']('not all arguments converted during string formatting');
    }
    return result.join("");

	};
	$m['sprintf'].__name__ = 'sprintf';

	$m['sprintf'].__bind_type__ = 0;
	$m['sprintf'].__args__ = [null,null,['strng'],['args']];
	$m['debugReport'] = function(msg) {


    alert(msg);
    
	};
	$m['debugReport'].__name__ = 'debugReport';

	$m['debugReport'].__bind_type__ = 0;
	$m['debugReport'].__args__ = [null,null,['msg']];

var $printFunc = null;
if (   typeof $wnd.console != 'undefined'
    && typeof $wnd.console.debug == 'function') {
    $printFunc = function(s) {
        $wnd.console.debug(s);
    };
} else if (   typeof $wnd.opera != 'undefined'
           && typeof $wnd.opera.postError == 'function') {
    $printFunc = function(s) {
        $wnd.opera.postError(s);
    };
} else if ( typeof console != 'undefined') {
    if (   typeof console.log == 'function'
        || typeof console.log == 'object') {
        $printFunc = function(s){
            console.log(s);
        };
    }
}

	$m['_print_to_console'] = function(s) {


    if ($printFunc === null) return null;
    $printFunc(s);
    
	};
	$m['_print_to_console'].__name__ = '_print_to_console';

	$m['_print_to_console'].__bind_type__ = 0;
	$m['_print_to_console'].__args__ = [null,null,['s']];
	$m['printFunc'] = function(objs, newline) {


    var s = "";
    for(var i=0; i < objs.length; i++) {
        if(s != "") s += " ";
        s += objs[i];
    }
    if (newline) {
      s += '\n';
    }
    $m['sys'].stdout.write(s);
    
	};
	$m['printFunc'].__name__ = 'printFunc';

	$m['printFunc'].__bind_type__ = 0;
	$m['printFunc'].__args__ = [null,null,['objs'],['newline']];
	$m['pow'] = function(x, y, z) {
		if (typeof z == 'undefined') z=arguments.callee.__args__[4][1];
		var $bool223,p,$mod1,$mod2;
		p = null;
p = Math.pow(x, y);
		if ((($bool223=(z === null)) === null || $bool223 === false || $bool223 === 0 || $bool223 === '' ?
				false :
				(typeof $bool223=='object'?
					(typeof $bool223.__nonzero__=='function'?
						$bool223.__nonzero__() :
						(typeof $bool223.__len__=='function'?
							($bool223.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			return $m['float'](p);
		}
		return $m['float']((typeof ($mod1=p)==typeof ($mod2=z) && typeof $mod1=='number'?
			(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
			$m['op_mod']($mod1,$mod2)));
	};
	$m['pow'].__name__ = 'pow';

	$m['pow'].__bind_type__ = 0;
	$m['pow'].__args__ = [null,null,['x'],['y'],['z', null]];
	$m['hex'] = function(x) {


    if (typeof x == 'number') {
        if (Math.floor(x) == x) {
            return '0x' + x.toString(16);
        }
    } else {
        switch (x.__number__) {
            case 0x02:
                return '0x' + x.__v.toString(16);
            case 0x04:
                return x.__hex__();
        }
    }

		throw ($m['TypeError']('hex() argument can\x27t be converted to hex'));
		return null;
	};
	$m['hex'].__name__ = 'hex';

	$m['hex'].__bind_type__ = 0;
	$m['hex'].__args__ = [null,null,['x']];
	$m['oct'] = function(x) {


    if (typeof x == 'number') {
        if (Math.floor(x) == x) {
            return x == 0 ? '0': '0' + x.toString(8);
        }
    } else {
        switch (x.__number__) {
            case 0x02:
                return x.__v == 0 ? '0': '0' + x.__v.toString(8);
            case 0x04:
                return x.__oct__();
        }
    }

		throw ($m['TypeError']('oct() argument can\x27t be converted to oct'));
		return null;
	};
	$m['oct'].__name__ = 'oct';

	$m['oct'].__bind_type__ = 0;
	$m['oct'].__args__ = [null,null,['x']];
	$m['round'] = function(x, n) {
		if (typeof n == 'undefined') n=arguments.callee.__args__[3][1];
		var r;
		n = $m['pow'](10, n);
		r = null;
r = Math.round(n*x)/n;
		return $m['float'](r);
	};
	$m['round'].__name__ = 'round';

	$m['round'].__bind_type__ = 0;
	$m['round'].__args__ = [null,null,['x'],['n', 0]];
	$m['divmod'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x.__number__ << 8) | y.__number__) {
            case 0x0101:
            case 0x0104:
            case 0x0401:
                if (y == 0) throw $m['ZeroDivisionError']('float divmod()');
                var f = Math.floor(x / y);
                return $m['tuple']([f, x - f * y]);
            case 0x0102:
                if (y.__v == 0) throw $m['ZeroDivisionError']('float divmod()');
                var f = Math.floor(x / y.__v);
                return $m['tuple']([f, x - f * y.__v]);
            case 0x0201:
                if (y == 0) throw $m['ZeroDivisionError']('float divmod()');
                var f = Math.floor(x.__v / y);
                return $m['tuple']([f, x.__v - f * y]);
            case 0x0202:
                if (y.__v == 0) throw $m['ZeroDivisionError']('integer division or modulo by zero');
                var f = Math.floor(x.__v / y.__v);
                return $m['tuple']([new $p['float_int'](f), new $p['float_int'](x.__v - f * y.__v)]);
            case 0x0204:
                return y.__rdivmod__(new $p['float_int'](x.__v));
            case 0x0402:
                return x.__divmod__(new $p['float_int'](y.__v));
            case 0x0404:
                return x.__divmod__(y);
        }
        if (!x.__number__) {
            if (   !y.__number__
                && x.__mro__.length > y.__mro__.length
                && $m['isinstance'](x, y)
                && typeof x['__divmod__'] == 'function')
                return y.__divmod__(x);
            if (typeof x['__divmod__'] == 'function') return x.__divmod__(y);
        }
        if (!y.__number__ && typeof y['__rdivmod__'] == 'function') return y.__rdivmod__(x);
    }

		throw ($m['TypeError']($m['sprintf']('unsupported operand type(s) for divmod(): \x27%r\x27, \x27%r\x27', $p['tuple']([x, y]))));
		return null;
	};
	$m['divmod'].__name__ = 'divmod';

	$m['divmod'].__bind_type__ = 0;
	$m['divmod'].__args__ = [null,null,['x'],['y']];
	$m['all'] = function(iterable) {
		var $iter24_idx,$bool224,$bool225,$iter24_type,$iter24_array,$iter24_nextval,element,$iter24_iter;
		$iter24_iter = iterable;
		if (typeof ($iter24_array = $iter24_iter.__array) != 'undefined') {
			$iter24_type = 0;
		} else {
			$iter24_iter = $iter24_iter.__iter__();
			$iter24_type = typeof ($iter24_array = $iter24_iter.__array) != 'undefined'? 0 : (typeof $iter24_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter24_idx = 0;
		while (typeof ($iter24_nextval=($iter24_type?($iter24_type > 0?$iter24_iter.next(true,false):$p['wrapped_next']($iter24_iter)):$iter24_array[$iter24_idx++])) != 'undefined') {
			element = $iter24_nextval;
			if ((($bool225=!(($bool224=element) === null || $bool224 === false || $bool224 === 0 || $bool224 === '' ?
				false :
				(typeof $bool224=='object'?
					(typeof $bool224.__nonzero__=='function'?
						$bool224.__nonzero__() :
						(typeof $bool224.__len__=='function'?
							($bool224.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool225 === false || $bool225 === 0 || $bool225 === '' ?
					false :
					(typeof $bool225=='object'?
						(typeof $bool225.__nonzero__=='function'?
							$bool225.__nonzero__() :
							(typeof $bool225.__len__=='function'?
								($bool225.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return false;
			}
		}
		return true;
	};
	$m['all'].__name__ = 'all';

	$m['all'].__bind_type__ = 0;
	$m['all'].__args__ = [null,null,['iterable']];
	$m['any'] = function(iterable) {
		var $iter25_nextval,$iter25_array,$iter25_iter,element,$bool226,$iter25_idx,$iter25_type;
		$iter25_iter = iterable;
		if (typeof ($iter25_array = $iter25_iter.__array) != 'undefined') {
			$iter25_type = 0;
		} else {
			$iter25_iter = $iter25_iter.__iter__();
			$iter25_type = typeof ($iter25_array = $iter25_iter.__array) != 'undefined'? 0 : (typeof $iter25_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter25_idx = 0;
		while (typeof ($iter25_nextval=($iter25_type?($iter25_type > 0?$iter25_iter.next(true,false):$p['wrapped_next']($iter25_iter)):$iter25_array[$iter25_idx++])) != 'undefined') {
			element = $iter25_nextval;
			if ((($bool226=element) === null || $bool226 === false || $bool226 === 0 || $bool226 === '' ?
					false :
					(typeof $bool226=='object'?
						(typeof $bool226.__nonzero__=='function'?
							$bool226.__nonzero__() :
							(typeof $bool226.__len__=='function'?
								($bool226.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return true;
			}
		}
		return false;
	};
	$m['any'].__name__ = 'any';

	$m['any'].__bind_type__ = 0;
	$m['any'].__args__ = [null,null,['iterable']];
	$m['__iter_prepare'] = function(iter, reuse_tuple) {

    if (typeof iter == 'undefined') {
        throw $m['TypeError']("iter is undefined");
    }
    var it = {};
    it.$iter = iter;
    it.$loopvar = 0;
    it.$reuse_tuple = reuse_tuple;
    if (typeof (it.$arr = iter.__array) != 'undefined') {
        it.$gentype = 0;
    } else {
        it.$iter = iter.__iter__();
        it.$gentype = typeof (it.$arr = iter.__array) != 'undefined'? 0 : (typeof iter.$genfunc == 'function'? 1 : -1);
    }
    return it;
};
	$m['__wrapped_next'] = function(it) {
    var iterator = it.$iter;
    it.$nextval = it.$gentype?(it.$gentype > 0?
        iterator.next(true,it.$reuse_tuple):$p['wrapped_next'](iterator)
                              ) : it.$arr[it.$loopvar++];
    return it;
};
	$m['wrapped_next'] = function (iter) {
    try {
        var res = iter.next();
    } catch (e) {
        if (e === $p['StopIteration']) {
            return;
        }
        throw e;
    }
    return res;
};
	$m['init']();
	$m['__nondynamic_modules__'] = $p['dict']([]);
	$m['__import__'] = function(name, globals, locals, fromlist, level) {
		if (typeof globals == 'undefined') globals=arguments.callee.__args__[3][1];
		if (typeof locals == 'undefined') locals=arguments.callee.__args__[4][1];
		if (typeof fromlist == 'undefined') fromlist=arguments.callee.__args__[5][1];
		if (typeof level == 'undefined') level=arguments.callee.__args__[6][1];
		var $bool228,$add53,$add54,module,$bool227,$and25,$bool229,$and24;
		module = $m['___import___'](name, null);
		if ((($bool229=((($bool228=$and24=!(($bool227=(module === null)) === null || $bool227 === false || $bool227 === 0 || $bool227 === '' ?
			false :
			(typeof $bool227=='object'?
				(typeof $bool227.__nonzero__=='function'?
					$bool227.__nonzero__() :
					(typeof $bool227.__len__=='function'?
						($bool227.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )) === null || $bool228 === false || $bool228 === 0 || $bool228 === '' ?
			false :
			(typeof $bool228=='object'?
				(typeof $bool228.__nonzero__=='function'?
					$bool228.__nonzero__() :
					(typeof $bool228.__len__=='function'?
						($bool228.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )?$m['hasattr'](module, '__was_initialized__'):$and24)) === null || $bool229 === false || $bool229 === 0 || $bool229 === '' ?
				false :
				(typeof $bool229=='object'?
					(typeof $bool229.__nonzero__=='function'?
						$bool229.__nonzero__() :
						(typeof $bool229.__len__=='function'?
							($bool229.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			return module;
		}
		throw ($m['ImportError']((typeof ($add53='No module named ')==typeof ($add54=name) && (typeof $add53=='number'||typeof $add53=='string')?
			$add53+$add54:
			$m['op_add']($add53,$add54))));
		return null;
	};
	$m['__import__'].__name__ = '__import__';

	$m['__import__'].__bind_type__ = 0;
	$m['__import__'].__args__ = [null,null,['name'],['globals', $p['dict']([])],['locals', $p['dict']([])],['fromlist', $p['list']([])],['level', (typeof ($usub6=1)=='number'?
		-$usub6:
		$m['op_usub']($usub6))]];
	$m['sys'] = $m['___import___']('sys', null);
	$m['dynamic'] = $m['___import___']('dynamic', null);
	return this;
}; /* end pyjslib */


/* end module: pyjslib */


/*
PYJS_DEPS: ['sys', 'dynamic']
*/
