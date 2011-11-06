/* start module: gwt.Location */
$pyjs.loaded_modules['gwt.Location'] = function (__mod_name__) {
	if($pyjs.loaded_modules['gwt.Location'].__was_initialized__) return $pyjs.loaded_modules['gwt.Location'];
	if(typeof $pyjs.loaded_modules['gwt'] == 'undefined' || !$pyjs.loaded_modules['gwt'].__was_initialized__) $p['___import___']('gwt', null);
	var $m = $pyjs.loaded_modules["gwt.Location"];
	$m.__repr__ = function() { return "<module: gwt.Location>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'gwt.Location';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['gwt']['Location'] = $pyjs.loaded_modules['gwt.Location'];


	$m['makeUrlDict'] = function(urlstring) {
		var $1,pairs,$iter1_nextval,$iter1_type,$3,$cmp2,$iter1_iter,$bool1,dict,$iter1_array,$len1,pair,$cmp1,$4,kv,$2,$iter1_idx;
		dict = $p['dict']([]);
		pairs = urlstring['$$split']('\x26');
		$iter1_iter = pairs;
		if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
			$iter1_type = 0;
		} else {
			$iter1_iter = $iter1_iter.__iter__();
			$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter1_idx = 0;
		while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
			pair = $iter1_nextval;
			if ((($bool1=((($cmp1=(($len1=pair) === null?0:
				(typeof $len1.__array != 'undefined' ? $len1.__array.length:
					(typeof $len1.__len__ == 'function'?$len1.__len__():
						(typeof $len1.length != 'undefined'?$len1.length:
							$p['len']($len1))))))===($cmp2=3)?0:
				(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
					($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
					$p['cmp']($cmp1, $cmp2))) == -1)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				continue;
			}
			kv = pair['$$split']('=', 1);
			dict.__setitem__((typeof ($1=kv).__array != 'undefined'?
				((typeof $1.__array[$2=0]) != 'undefined'?$1.__array[$2]:
					$1.__getitem__($2)):
					$1.__getitem__(0)), (typeof ($3=kv).__array != 'undefined'?
				((typeof $3.__array[$4=1]) != 'undefined'?$3.__array[$4]:
					$3.__getitem__($4)):
					$3.__getitem__(1)));
		}
		return dict;
	};
	$m['makeUrlDict'].__name__ = 'makeUrlDict';

	$m['makeUrlDict'].__bind_type__ = 0;
	$m['makeUrlDict'].__args__ = [null,null,['urlstring']];
	$m['makeUrlStringFromDict'] = function(d) {
		var pairs,$iter2_nextval,$iter2_type,$iter2_iter,k,$add2,$add3,$iter2_idx,$add1,$add4,v,$iter2_array;
		pairs = $p['list']([]);
		$iter2_iter = d['iteritems']();
		if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
			$iter2_type = 0;
		} else {
			$iter2_iter = $iter2_iter.__iter__();
			$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter2_idx = 0;
		while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,true):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
			k = $iter2_nextval.__array[0];
			v = $iter2_nextval.__array[1];
			pairs['append']((typeof ($add3=(typeof ($add1=k)==typeof ($add2='=') && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				$p['op_add']($add1,$add2)))==typeof ($add4=v) && (typeof $add3=='number'||typeof $add3=='string')?
				$add3+$add4:
				$p['op_add']($add3,$add4)));
		}
		return '\x26'['join'](pairs);
	};
	$m['makeUrlStringFromDict'].__name__ = 'makeUrlStringFromDict';

	$m['makeUrlStringFromDict'].__bind_type__ = 0;
	$m['makeUrlStringFromDict'].__args__ = [null,null,['d']];
	$m['Location'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'gwt.Location';
		$method = $pyjs__bind_method2('__init__', function(location) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				location = arguments[1];
			}

			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('location', location) : $p['setattr'](self, 'location', location);
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('searchDict', null) : $p['setattr'](self, 'searchDict', null);
			return null;
		}
	, 1, [null,null,['self'],['location']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('getHash', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr1,$attr2;
			return (($attr1=($attr2=self['location'])['hash']) == null || (($attr2.__is_instance__) && typeof $attr1 == 'function') || (typeof $attr1['__get__'] == 'function')?
						$p['getattr']($attr2, 'hash'):
						self['location']['hash']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getHash'] = $method;
		$method = $pyjs__bind_method2('getHashDict', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr8,$or1,$or2,$eq2,$eq1,$attr5,$attr4,$attr7,$attr6,$bool2,$bool3,$bool4,$attr3;
			if ((($bool4=((($bool3=$or1=!(($bool2=(($attr3=($attr4=self)['hashDict']) == null || (($attr4.__is_instance__) && typeof $attr3 == 'function') || (typeof $attr3['__get__'] == 'function')?
						$p['getattr']($attr4, 'hashDict'):
						self['hashDict'])) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
					 true ) )?$or1:!(($eq1=(($attr5=($attr6=self)['hashDictHash']) == null || (($attr6.__is_instance__) && typeof $attr5 == 'function') || (typeof $attr5['__get__'] == 'function')?
						$p['getattr']($attr6, 'hashDictHash'):
						self['hashDictHash']))===($eq2=self['getHash']())&&$eq1===null?true:
				($eq1===null?false:($eq2===null?false:
					((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1.__cmp__=='function'?$eq1.__cmp__($eq2) === 0:
						((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2.__cmp__=='function'?$eq2.__cmp__($eq1) === 0:
							$eq1==$eq2))))))) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('hashDictHash', self['getHash']()) : $p['setattr'](self, 'hashDictHash', self['getHash']());
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('hashDict', $m['makeUrlDict']($p['slice'](self['getHash'](), 1, null))) : $p['setattr'](self, 'hashDict', $m['makeUrlDict']($p['slice'](self['getHash'](), 1, null)));
			}
			return (($attr7=($attr8=self)['hashDict']) == null || (($attr8.__is_instance__) && typeof $attr7 == 'function') || (typeof $attr7['__get__'] == 'function')?
						$p['getattr']($attr8, 'hashDict'):
						self['hashDict']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getHashDict'] = $method;
		$method = $pyjs__bind_method2('getHost', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr9,$attr10;
			return (($attr9=($attr10=self['location'])['host']) == null || (($attr10.__is_instance__) && typeof $attr9 == 'function') || (typeof $attr9['__get__'] == 'function')?
						$p['getattr']($attr10, 'host'):
						self['location']['host']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getHost'] = $method;
		$method = $pyjs__bind_method2('getHostname', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr11,$attr12;
			return (($attr11=($attr12=self['location'])['hostname']) == null || (($attr12.__is_instance__) && typeof $attr11 == 'function') || (typeof $attr11['__get__'] == 'function')?
						$p['getattr']($attr12, 'hostname'):
						self['location']['hostname']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getHostname'] = $method;
		$method = $pyjs__bind_method2('getHref', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr14,$attr13;
			return (($attr13=($attr14=self['location'])['href']) == null || (($attr14.__is_instance__) && typeof $attr13 == 'function') || (typeof $attr13['__get__'] == 'function')?
						$p['getattr']($attr14, 'href'):
						self['location']['href']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getHref'] = $method;
		$method = $pyjs__bind_method2('getPageHref', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr16,$6,href,$bool6,$8,$bool5,$attr15,$7,$5;
			href = (($attr15=($attr16=self['location'])['href']) == null || (($attr16.__is_instance__) && typeof $attr15 == 'function') || (typeof $attr15['__get__'] == 'function')?
						$p['getattr']($attr16, 'href'):
						self['location']['href']);
			if ((($bool5=href['find']('?')) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
				href = (typeof ($5=href['$$split']('?')).__array != 'undefined'?
					((typeof $5.__array[$6=0]) != 'undefined'?$5.__array[$6]:
						$5.__getitem__($6)):
						$5.__getitem__(0));
			}
			if ((($bool6=href['find']('#')) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
				href = (typeof ($7=href['$$split']('#')).__array != 'undefined'?
					((typeof $7.__array[$8=0]) != 'undefined'?$7.__array[$8]:
						$7.__getitem__($8)):
						$7.__getitem__(0));
			}
			return href;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getPageHref'] = $method;
		$method = $pyjs__bind_method2('getPathname', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr17,$attr18;
			return (($attr17=($attr18=self['location'])['pathname']) == null || (($attr18.__is_instance__) && typeof $attr17 == 'function') || (typeof $attr17['__get__'] == 'function')?
						$p['getattr']($attr18, 'pathname'):
						self['location']['pathname']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getPathname'] = $method;
		$method = $pyjs__bind_method2('getPort', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr20,$attr19;
			return (($attr19=($attr20=self['location'])['port']) == null || (($attr20.__is_instance__) && typeof $attr19 == 'function') || (typeof $attr19['__get__'] == 'function')?
						$p['getattr']($attr20, 'port'):
						self['location']['port']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getPort'] = $method;
		$method = $pyjs__bind_method2('getProtocol', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr21,$attr22;
			return (($attr21=($attr22=self['location'])['protocol']) == null || (($attr22.__is_instance__) && typeof $attr21 == 'function') || (typeof $attr21['__get__'] == 'function')?
						$p['getattr']($attr22, 'protocol'):
						self['location']['protocol']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getProtocol'] = $method;
		$method = $pyjs__bind_method2('getSearch', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add6,$attr23,$attr24,$add5;
			return (typeof ($add5='')==typeof ($add6=(($attr23=($attr24=self['location'])['search']) == null || (($attr24.__is_instance__) && typeof $attr23 == 'function') || (typeof $attr23['__get__'] == 'function')?
						$p['getattr']($attr24, 'search'):
						self['location']['search'])) && (typeof $add5=='number'||typeof $add5=='string')?
				$add5+$add6:
				$p['op_add']($add5,$add6));
		}
	, 1, [null,null,['self']]);
		$cls_definition['getSearch'] = $method;
		$method = $pyjs__bind_method2('getSearchDict', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var search,$attr30,$attr25,$attr26,$attr27,$attr28,$attr29,$bool8,$bool9,$bool7;
			if ((($bool7=$p['isinstance']((($attr25=($attr26=self)['location']) == null || (($attr26.__is_instance__) && typeof $attr25 == 'function') || (typeof $attr25['__get__'] == 'function')?
						$p['getattr']($attr26, 'location'):
						self['location']), $p['basestring'])) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
				return $p['dict']([]);
			}
			if ((($bool9=!(($bool8=(($attr27=($attr28=self)['searchDict']) == null || (($attr28.__is_instance__) && typeof $attr27 == 'function') || (typeof $attr27['__get__'] == 'function')?
						$p['getattr']($attr28, 'searchDict'):
						self['searchDict'])) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
				false :
				(typeof $bool8=='object'?
					(typeof $bool8.__nonzero__=='function'?
						$bool8.__nonzero__() :
						(typeof $bool8.__len__=='function'?
							($bool8.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('searchDict', $p['dict']([])) : $p['setattr'](self, 'searchDict', $p['dict']([]));
				search = $p['slice'](self['getSearch'](), 1, null);
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('searchDict', $m['makeUrlDict'](search)) : $p['setattr'](self, 'searchDict', $m['makeUrlDict'](search));
			}
			return (($attr29=($attr30=self)['searchDict']) == null || (($attr30.__is_instance__) && typeof $attr29 == 'function') || (typeof $attr29['__get__'] == 'function')?
						$p['getattr']($attr30, 'searchDict'):
						self['searchDict']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getSearchDict'] = $method;
		$method = $pyjs__bind_method2('getSearchVar', function(key) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
			}
			var searchDict;
			searchDict = self['getSearchDict']();
			return searchDict['get'](key);
		}
	, 1, [null,null,['self'],['key']]);
		$cls_definition['getSearchVar'] = $method;
		$method = $pyjs__bind_method2('reload', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['location']['reload']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['reload'] = $method;
		$method = $pyjs__bind_method2('setHref', function(href) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				href = arguments[1];
			}

			self['location'].__is_instance__ && typeof self['location'].__setattr__ == 'function' ? self['location'].__setattr__('href', href) : $p['setattr'](self['location'], 'href', href);
			return null;
		}
	, 1, [null,null,['self'],['href']]);
		$cls_definition['setHref'] = $method;
		$method = $pyjs__bind_method2('setSearch', function(search) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				search = arguments[1];
			}

			self['location'].__is_instance__ && typeof self['location'].__setattr__ == 'function' ? self['location'].__setattr__('search', search) : $p['setattr'](self['location'], 'search', search);
			return null;
		}
	, 1, [null,null,['self'],['search']]);
		$cls_definition['setSearch'] = $method;
		$method = $pyjs__bind_method2('setSearchDict', function(searchDict) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				searchDict = arguments[1];
			}

			self['setSearch']($m['makeUrlStringFromDict'](searchDict));
			return null;
		}
	, 1, [null,null,['self'],['searchDict']]);
		$cls_definition['setSearchDict'] = $method;
		$method = $pyjs__bind_method2('setHash', function(hash) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				hash = arguments[1];
			}

			self['location'].__is_instance__ && typeof self['location'].__setattr__ == 'function' ? self['location'].__setattr__('hash', hash) : $p['setattr'](self['location'], 'hash', hash);
			return null;
		}
	, 1, [null,null,['self'],['hash']]);
		$cls_definition['setHash'] = $method;
		$method = $pyjs__bind_method2('setHashDict', function(hashDict) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				hashDict = arguments[1];
			}

			self['setHash']($m['makeUrlStringFromDict'](hashDict));
			return null;
		}
	, 1, [null,null,['self'],['hashDict']]);
		$cls_definition['setHashDict'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Location', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end gwt.Location */


/* end module: gwt.Location */


