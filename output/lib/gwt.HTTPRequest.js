/* start module: gwt.HTTPRequest */
$pyjs.loaded_modules['gwt.HTTPRequest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['gwt.HTTPRequest'].__was_initialized__) return $pyjs.loaded_modules['gwt.HTTPRequest'];
	if(typeof $pyjs.loaded_modules['gwt'] == 'undefined' || !$pyjs.loaded_modules['gwt'].__was_initialized__) $p['___import___']('gwt', null);
	var $m = $pyjs.loaded_modules["gwt.HTTPRequest"];
	$m.__repr__ = function() { return "<module: gwt.HTTPRequest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'gwt.HTTPRequest';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['gwt']['HTTPRequest'] = $pyjs.loaded_modules['gwt.HTTPRequest'];
	var $attr1,$attr2,$bool1;

	$m['pyjd'] = $p['___import___']('pyjd', 'gwt');
	$m['pygwt'] = $p['___import___']('pygwt', 'gwt');
	if ((($bool1=(($attr1=($attr2=$m['pyjd'])['is_desktop']) == null || (($attr2.__is_instance__) && typeof $attr1 == 'function') || (typeof $attr1['__get__'] == 'function')?
				$p['getattr']($attr2, 'is_desktop'):
				$m['pyjd']['is_desktop'])) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
	}
	$m['sys'] = $p['___import___']('sys', 'gwt');
	$m['handlers'] = $p['dict']([]);
	$m['XULrunnerHackCallback'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'gwt.HTTPRequest';
		$method = $pyjs__bind_method2('__init__', function(htr, mode, user, pwd, url, postData, handler, return_xml, content_type, headers) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				htr = arguments[1];
				mode = arguments[2];
				user = arguments[3];
				pwd = arguments[4];
				url = arguments[5];
				postData = arguments[6];
				handler = arguments[7];
				return_xml = arguments[8];
				content_type = arguments[9];
				headers = arguments[10];
			}
			if (typeof postData == 'undefined') postData=arguments.callee.__args__[8][1];
			if (typeof handler == 'undefined') handler=arguments.callee.__args__[9][1];
			if (typeof return_xml == 'undefined') return_xml=arguments.callee.__args__[10][1];
			if (typeof content_type == 'undefined') content_type=arguments.callee.__args__[11][1];
			if (typeof headers == 'undefined') headers=arguments.callee.__args__[12][1];

 			return null;
		}
	, 1, [null,null,['self'],['htr'],['mode'],['user'],['pwd'],['url'],['postData', null],['handler', null],['return_xml', false],['content_type', null],['headers', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('callback', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr9,$attr8,$attr5,$attr4,$attr7,$attr6,$attr20,$attr15,$attr19,$attr18,$attr10,$attr14,$attr17,$attr16,$attr11,$attr3,$attr13,$attr12;
			return self['htr']['asyncImpl']((($attr3=($attr4=self)['mode']) == null || (($attr4.__is_instance__) && typeof $attr3 == 'function') || (typeof $attr3['__get__'] == 'function')?
						$p['getattr']($attr4, 'mode'):
						self['mode']), (($attr5=($attr6=self)['user']) == null || (($attr6.__is_instance__) && typeof $attr5 == 'function') || (typeof $attr5['__get__'] == 'function')?
						$p['getattr']($attr6, 'user'):
						self['user']), (($attr7=($attr8=self)['pwd']) == null || (($attr8.__is_instance__) && typeof $attr7 == 'function') || (typeof $attr7['__get__'] == 'function')?
						$p['getattr']($attr8, 'pwd'):
						self['pwd']), (($attr9=($attr10=self)['url']) == null || (($attr10.__is_instance__) && typeof $attr9 == 'function') || (typeof $attr9['__get__'] == 'function')?
						$p['getattr']($attr10, 'url'):
						self['url']), (($attr11=($attr12=self)['postData']) == null || (($attr12.__is_instance__) && typeof $attr11 == 'function') || (typeof $attr11['__get__'] == 'function')?
						$p['getattr']($attr12, 'postData'):
						self['postData']), (($attr13=($attr14=self)['handler']) == null || (($attr14.__is_instance__) && typeof $attr13 == 'function') || (typeof $attr13['__get__'] == 'function')?
						$p['getattr']($attr14, 'handler'):
						self['handler']), (($attr15=($attr16=self)['return_xml']) == null || (($attr16.__is_instance__) && typeof $attr15 == 'function') || (typeof $attr15['__get__'] == 'function')?
						$p['getattr']($attr16, 'return_xml'):
						self['return_xml']), (($attr17=($attr18=self)['content_type']) == null || (($attr18.__is_instance__) && typeof $attr17 == 'function') || (typeof $attr17['__get__'] == 'function')?
						$p['getattr']($attr18, 'content_type'):
						self['content_type']), (($attr19=($attr20=self)['headers']) == null || (($attr20.__is_instance__) && typeof $attr19 == 'function') || (typeof $attr19['__get__'] == 'function')?
						$p['getattr']($attr20, 'headers'):
						self['headers']));
		}
	, 1, [null,null,['self']]);
		$cls_definition['callback'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('XULrunnerHackCallback', $p['tuple']($bases), $data);
	})();
	$m['HTTPRequest'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'gwt.HTTPRequest';
		$method = $pyjs__bind_method2('asyncGet', function(url, handler, returnxml, content_type, headers, user, pwd) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				url = arguments[1];
				handler = arguments[2];
				returnxml = arguments[3];
				content_type = arguments[4];
				headers = arguments[5];
				user = arguments[6];
				pwd = arguments[7];
			}
			if (typeof returnxml == 'undefined') returnxml=arguments.callee.__args__[5][1];
			if (typeof content_type == 'undefined') content_type=arguments.callee.__args__[6][1];
			if (typeof headers == 'undefined') headers=arguments.callee.__args__[7][1];
			if (typeof user == 'undefined') user=arguments.callee.__args__[8][1];
			if (typeof pwd == 'undefined') pwd=arguments.callee.__args__[9][1];
			var postData,$bool3,$bool2;
			postData = null;
			if ((($bool3=!(($bool2=$p['hasattr'](handler, 'onCompletion')) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
				throw ($p['RuntimeError']('Invalid call to asyncGet: handler is not a valid request handler'));
			}
			self['asyncImpl']('GET', user, pwd, url, postData, handler, returnxml, content_type, headers);
			return null;
		}
	, 1, [null,null,['self'],['url'],['handler'],['returnxml', false],['content_type', null],['headers', null],['user', null],['pwd', null]]);
		$cls_definition['asyncGet'] = $method;
		$method = $pyjs__bind_method2('asyncPost', function(url, postData, handler, returnxml, content_type, headers, user, pwd) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				url = arguments[1];
				postData = arguments[2];
				handler = arguments[3];
				returnxml = arguments[4];
				content_type = arguments[5];
				headers = arguments[6];
				user = arguments[7];
				pwd = arguments[8];
			}
			if (typeof returnxml == 'undefined') returnxml=arguments.callee.__args__[6][1];
			if (typeof content_type == 'undefined') content_type=arguments.callee.__args__[7][1];
			if (typeof headers == 'undefined') headers=arguments.callee.__args__[8][1];
			if (typeof user == 'undefined') user=arguments.callee.__args__[9][1];
			if (typeof pwd == 'undefined') pwd=arguments.callee.__args__[10][1];
			var $bool4,$bool5;
			if ((($bool5=!(($bool4=$p['hasattr'](handler, 'onCompletion')) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
				throw ($p['RuntimeError']('Invalid call to asyncPost: handler is not a valid request handler'));
			}
			return self['asyncImpl']('POST', user, pwd, url, postData, handler, returnxml, content_type, headers);
		}
	, 1, [null,null,['self'],['url'],['postData'],['handler'],['returnxml', false],['content_type', null],['headers', null],['user', null],['pwd', null]]);
		$cls_definition['asyncPost'] = $method;
		$method = $pyjs__bind_method2('asyncDelete', function(url, handler, returnxml, content_type, headers, user, pwd) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				url = arguments[1];
				handler = arguments[2];
				returnxml = arguments[3];
				content_type = arguments[4];
				headers = arguments[5];
				user = arguments[6];
				pwd = arguments[7];
			}
			if (typeof returnxml == 'undefined') returnxml=arguments.callee.__args__[5][1];
			if (typeof content_type == 'undefined') content_type=arguments.callee.__args__[6][1];
			if (typeof headers == 'undefined') headers=arguments.callee.__args__[7][1];
			if (typeof user == 'undefined') user=arguments.callee.__args__[8][1];
			if (typeof pwd == 'undefined') pwd=arguments.callee.__args__[9][1];
			var postData,$bool6,$bool7;
			postData = null;
			if ((($bool7=!(($bool6=$p['hasattr'](handler, 'onCompletion')) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
				throw ($p['RuntimeError']('Invalid call to asyncDelete: handler is not a valid request handler'));
			}
			return self['asyncImpl']('DELETE', user, pwd, url, postData, handler, returnxml, content_type, headers);
		}
	, 1, [null,null,['self'],['url'],['handler'],['returnxml', false],['content_type', null],['headers', null],['user', null],['pwd', null]]);
		$cls_definition['asyncDelete'] = $method;
		$method = $pyjs__bind_method2('asyncPut', function(url, postData, handler, returnxml, content_type, headers, user, pwd) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				url = arguments[1];
				postData = arguments[2];
				handler = arguments[3];
				returnxml = arguments[4];
				content_type = arguments[5];
				headers = arguments[6];
				user = arguments[7];
				pwd = arguments[8];
			}
			if (typeof returnxml == 'undefined') returnxml=arguments.callee.__args__[6][1];
			if (typeof content_type == 'undefined') content_type=arguments.callee.__args__[7][1];
			if (typeof headers == 'undefined') headers=arguments.callee.__args__[8][1];
			if (typeof user == 'undefined') user=arguments.callee.__args__[9][1];
			if (typeof pwd == 'undefined') pwd=arguments.callee.__args__[10][1];
			var $bool8,$bool9;
			if ((($bool9=!(($bool8=$p['hasattr'](handler, 'onCompletion')) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
				throw ($p['RuntimeError']('Invalid call to asyncPut: handler is not a valid request handler'));
			}
			return self['asyncImpl']('PUT', user, pwd, url, postData, handler, returnxml, content_type, headers);
		}
	, 1, [null,null,['self'],['url'],['postData'],['handler'],['returnxml', false],['content_type', null],['headers', null],['user', null],['pwd', null]]);
		$cls_definition['asyncPut'] = $method;
		$method = $pyjs__bind_method2('createXmlHTTPRequest', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['doCreateXmlHTTPRequest']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['createXmlHTTPRequest'] = $method;
		$method = $pyjs__bind_method2('doCreateXmlHTTPRequest', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m.get_main_frame()['getXmlHttpRequest']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['doCreateXmlHTTPRequest'] = $method;
		$method = $pyjs__bind_method2('onLoad', function(sender, event, ignorearg) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				event = arguments[2];
				ignorearg = arguments[3];
			}
			var responseText,$bool10,$bool11,$bool12,$attr21,$attr22,$attr23,$attr24,$attr25,$attr26,localHandler,handler,status,$or1,$or2,$eq2,$eq3,$eq1,$eq6,$eq4,$eq5,xmlHttp;
			xmlHttp = (($attr21=($attr22=event)['target']) == null || (($attr22.__is_instance__) && typeof $attr21 == 'function') || (typeof $attr21['__get__'] == 'function')?
						$p['getattr']($attr22, 'target'):
						event['target']);
			localHandler = $m['handlers']['get'](xmlHttp);
			$m['handlers'].__delitem__(xmlHttp);
			responseText = (($attr23=($attr24=xmlHttp)['responseText']) == null || (($attr24.__is_instance__) && typeof $attr23 == 'function') || (typeof $attr23['__get__'] == 'function')?
						$p['getattr']($attr24, 'responseText'):
						xmlHttp['responseText']);
			status = (($attr25=($attr26=xmlHttp)['status']) == null || (($attr26.__is_instance__) && typeof $attr25 == 'function') || (typeof $attr25['__get__'] == 'function')?
						$p['getattr']($attr26, 'status'):
						xmlHttp['status']);
			handler = null;
			xmlHttp = null;
			if ((($bool10=(($eq1=status)===($eq2=0)&&$eq1===null?true:
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
			}
			if ((($bool12=((($bool11=$or1=(($eq3=status)===($eq4=200)&&$eq3===null?true:
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
					 true ) )?$or1:(($eq5=status)===($eq6=0)&&$eq5===null?true:
				($eq5===null?false:($eq6===null?false:
					((typeof $eq5=='object'||typeof $eq5=='function')&&typeof $eq5.__cmp__=='function'?$eq5.__cmp__($eq6) === 0:
						((typeof $eq6=='object'||typeof $eq6=='function')&&typeof $eq6.__cmp__=='function'?$eq6.__cmp__($eq5) === 0:
							$eq5==$eq6))))))) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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
				localHandler['onCompletion'](responseText);
			}
			else {
				localHandler['onError'](responseText, status);
			}
			return null;
		}
	, 1, [null,null,['self'],['sender'],['event'],['ignorearg']]);
		$cls_definition['onLoad'] = $method;
		$method = $pyjs__bind_method2('onReadyStateChange', function(xmlHttp, event, ignorearg) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				xmlHttp = arguments[1];
				event = arguments[2];
				ignorearg = arguments[3];
			}
			var responseText,$bool13,$bool14,$bool15,$bool16,$attr28,$attr27,$eq10,$attr29,$eq12,$eq13,$eq14,localHandler,handler,status,$or4,$eq8,$eq9,$or3,$eq7,$attr32,$attr31,$attr30,$eq11,$pyjs_try_err;
			try {
				xmlHttp = $m.get_main_frame()['gobject_wrap'](xmlHttp);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (true) {
				}
			}
			if ((($bool13=!(($eq7=(($attr27=($attr28=xmlHttp)['readyState']) == null || (($attr28.__is_instance__) && typeof $attr27 == 'function') || (typeof $attr27['__get__'] == 'function')?
						$p['getattr']($attr28, 'readyState'):
						xmlHttp['readyState']))===($eq8=4)&&$eq7===null?true:
				($eq7===null?false:($eq8===null?false:
					((typeof $eq7=='object'||typeof $eq7=='function')&&typeof $eq7.__cmp__=='function'?$eq7.__cmp__($eq8) === 0:
						((typeof $eq8=='object'||typeof $eq8=='function')&&typeof $eq8.__cmp__=='function'?$eq8.__cmp__($eq7) === 0:
							$eq7==$eq8)))))) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
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
				return null;
			}
			localHandler = $m['handlers']['get'](xmlHttp);
			$m['handlers'].__delitem__(xmlHttp);
			responseText = (($attr29=($attr30=xmlHttp)['responseText']) == null || (($attr30.__is_instance__) && typeof $attr29 == 'function') || (typeof $attr29['__get__'] == 'function')?
						$p['getattr']($attr30, 'responseText'):
						xmlHttp['responseText']);
			status = (($attr31=($attr32=xmlHttp)['status']) == null || (($attr32.__is_instance__) && typeof $attr31 == 'function') || (typeof $attr31['__get__'] == 'function')?
						$p['getattr']($attr32, 'status'):
						xmlHttp['status']);
			handler = null;
			xmlHttp = null;
			if ((($bool14=(($eq9=status)===($eq10=0)&&$eq9===null?true:
				($eq9===null?false:($eq10===null?false:
					((typeof $eq9=='object'||typeof $eq9=='function')&&typeof $eq9.__cmp__=='function'?$eq9.__cmp__($eq10) === 0:
						((typeof $eq10=='object'||typeof $eq10=='function')&&typeof $eq10.__cmp__=='function'?$eq10.__cmp__($eq9) === 0:
							$eq9==$eq10)))))) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
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
			}
			if ((($bool16=((($bool15=$or3=(($eq11=status)===($eq12=200)&&$eq11===null?true:
				($eq11===null?false:($eq12===null?false:
					((typeof $eq11=='object'||typeof $eq11=='function')&&typeof $eq11.__cmp__=='function'?$eq11.__cmp__($eq12) === 0:
						((typeof $eq12=='object'||typeof $eq12=='function')&&typeof $eq12.__cmp__=='function'?$eq12.__cmp__($eq11) === 0:
							$eq11==$eq12)))))) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
				false :
				(typeof $bool15=='object'?
					(typeof $bool15.__nonzero__=='function'?
						$bool15.__nonzero__() :
						(typeof $bool15.__len__=='function'?
							($bool15.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or3:(($eq13=status)===($eq14=0)&&$eq13===null?true:
				($eq13===null?false:($eq14===null?false:
					((typeof $eq13=='object'||typeof $eq13=='function')&&typeof $eq13.__cmp__=='function'?$eq13.__cmp__($eq14) === 0:
						((typeof $eq14=='object'||typeof $eq14=='function')&&typeof $eq14.__cmp__=='function'?$eq14.__cmp__($eq13) === 0:
							$eq13==$eq14))))))) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
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
				localHandler['onCompletion'](responseText);
			}
			else {
				localHandler['onError'](responseText, status);
			}
			return null;
		}
	, 1, [null,null,['self'],['xmlHttp'],['event'],['ignorearg']]);
		$cls_definition['onReadyStateChange'] = $method;
		$method = $pyjs__bind_method2('_convertUrlToAbsolute', function(url) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				url = arguments[1];
			}
			var $bool18,$bool19,sep,$bool17,$eq18,$eq19,$eq15,$eq16,$eq17,$bool21,$bool20,slash,$bool22,$bool23,$and1,$and2,$and3,$eq21,$eq20,$eq22,$2,$1,$cmp1,$cmp2,uri,$add2,$add3,$add1,$add6,$add4,$add5;
			uri = $m['pygwt']['getModuleBaseURL']();
			if ((($bool17=(($eq15=(typeof ($1=url).__array != 'undefined'?
				((typeof $1.__array[$2=0]) != 'undefined'?$1.__array[$2]:
					$1.__getitem__($2)):
					$1.__getitem__(0)))===($eq16='/')&&$eq15===null?true:
				($eq15===null?false:($eq16===null?false:
					((typeof $eq15=='object'||typeof $eq15=='function')&&typeof $eq15.__cmp__=='function'?$eq15.__cmp__($eq16) === 0:
						((typeof $eq16=='object'||typeof $eq16=='function')&&typeof $eq16.__cmp__=='function'?$eq16.__cmp__($eq15) === 0:
							$eq15==$eq16)))))) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
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
				sep = uri['find']('://');
				if ((($bool19=!(($bool18=uri['startswith']('file://')) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
					false :
					(typeof $bool18=='object'?
						(typeof $bool18.__nonzero__=='function'?
							$bool18.__nonzero__() :
							(typeof $bool18.__len__=='function'?
								($bool18.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
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
					slash = uri['find']('/', (typeof ($add1=sep)==typeof ($add2=3) && (typeof $add1=='number'||typeof $add1=='string')?
						$add1+$add2:
						$p['op_add']($add1,$add2)));
					if ((($bool20=((($cmp1=slash)===($cmp2=0)?0:
						(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
							($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
							$p['cmp']($cmp1, $cmp2))) == 1)) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
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
						uri = $p['slice'](uri, 0, slash);
					}
				}
				return $p['sprintf']('%s%s', $p['tuple']([uri, url]));
			}
			else {
				if ((($bool23=((($bool21=$and1=!(($eq17=$p['slice'](url, 0, 7))===($eq18='file://')&&$eq17===null?true:
					($eq17===null?false:($eq18===null?false:
						((typeof $eq17=='object'||typeof $eq17=='function')&&typeof $eq17.__cmp__=='function'?$eq17.__cmp__($eq18) === 0:
							((typeof $eq18=='object'||typeof $eq18=='function')&&typeof $eq18.__cmp__=='function'?$eq18.__cmp__($eq17) === 0:
								$eq17==$eq18)))))) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
					false :
					(typeof $bool21=='object'?
						(typeof $bool21.__nonzero__=='function'?
							$bool21.__nonzero__() :
							(typeof $bool21.__len__=='function'?
								($bool21.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((($bool22=$and2=!(($eq19=$p['slice'](url, 0, 7))===($eq20='http://')&&$eq19===null?true:
					($eq19===null?false:($eq20===null?false:
						((typeof $eq19=='object'||typeof $eq19=='function')&&typeof $eq19.__cmp__=='function'?$eq19.__cmp__($eq20) === 0:
							((typeof $eq20=='object'||typeof $eq20=='function')&&typeof $eq20.__cmp__=='function'?$eq20.__cmp__($eq19) === 0:
								$eq19==$eq20)))))) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
					false :
					(typeof $bool22=='object'?
						(typeof $bool22.__nonzero__=='function'?
							$bool22.__nonzero__() :
							(typeof $bool22.__len__=='function'?
								($bool22.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?!(($eq21=$p['slice'](url, 0, 8))===($eq22='https://')&&$eq21===null?true:
					($eq21===null?false:($eq22===null?false:
						((typeof $eq21=='object'||typeof $eq21=='function')&&typeof $eq21.__cmp__=='function'?$eq21.__cmp__($eq22) === 0:
							((typeof $eq22=='object'||typeof $eq22=='function')&&typeof $eq22.__cmp__=='function'?$eq22.__cmp__($eq21) === 0:
								$eq21==$eq22))))):$and2):$and1)) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
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
					slash = uri['rfind']('/');
					return (typeof ($add5=$p['slice'](uri, 0, (typeof ($add3=slash)==typeof ($add4=1) && (typeof $add3=='number'||typeof $add3=='string')?
						$add3+$add4:
						$p['op_add']($add3,$add4))))==typeof ($add6=url) && (typeof $add5=='number'||typeof $add5=='string')?
						$add5+$add6:
						$p['op_add']($add5,$add6));
				}
			}
			return url;
		}
	, 1, [null,null,['self'],['url']]);
		$cls_definition['_convertUrlToAbsolute'] = $method;
		$method = $pyjs__bind_method2('asyncImpl', function(method, user, pwd, url, postData, handler, returnxml, content_type, headers) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				method = arguments[1];
				user = arguments[2];
				pwd = arguments[3];
				url = arguments[4];
				postData = arguments[5];
				handler = arguments[6];
				returnxml = arguments[7];
				content_type = arguments[8];
				headers = arguments[9];
			}
			if (typeof returnxml == 'undefined') returnxml=arguments.callee.__args__[9][1];
			if (typeof content_type == 'undefined') content_type=arguments.callee.__args__[10][1];
			if (typeof headers == 'undefined') headers=arguments.callee.__args__[11][1];
			var $attr35,hval,$eq26,$iter1_iter,$attr46,$6,$attr44,$attr45,$attr42,$attr43,$attr40,$attr41,$4,$5,$bool33,res,base64,$bool25,$bool24,$bool27,$bool26,$iter1_array,$bool29,$bool28,$bool37,$or5,$or7,$or6,$iter1_nextval,$bool34,$and4,$and5,$and6,$or8,$attr33,$attr37,$attr34,$eq29,$eq28,$attr39,$attr38,$3,mf,xmlHttp,$iter1_type,h,$eq23,$eq30,$bool32,$bool30,$bool31,$bool36,$iter1_idx,$attr36,$bool35,$eq25,$bool38,$eq27,$eq24;
			if ((($bool24=(headers === null)) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
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
				headers = $p['dict']([]);
			}
			if ((($bool28=((($bool25=$and4=user) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
				false :
				(typeof $bool25=='object'?
					(typeof $bool25.__nonzero__=='function'?
						$bool25.__nonzero__() :
						(typeof $bool25.__len__=='function'?
							($bool25.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((($bool26=$and5=pwd) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
				false :
				(typeof $bool26=='object'?
					(typeof $bool26.__nonzero__=='function'?
						$bool26.__nonzero__() :
						(typeof $bool26.__len__=='function'?
							($bool26.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?!(($bool27=headers.__contains__('Authorization')) === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
				false :
				(typeof $bool27=='object'?
					(typeof $bool27.__nonzero__=='function'?
						$bool27.__nonzero__() :
						(typeof $bool27.__len__=='function'?
							($bool27.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) ):$and5):$and4)) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
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
				base64 = $p['___import___']('base64', 'gwt');
				headers.__setitem__('Authorization', $p['sprintf']('Basic %s', base64['b64encode']($p['sprintf']('%s:%s', $p['tuple']([user, pwd])))));
			}
			mf = (typeof get_main_frame == "undefined"?$m.get_main_frame:get_main_frame)();
			if ((($bool29=(content_type !== null)) === null || $bool29 === false || $bool29 === 0 || $bool29 === '' ?
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
				headers.__setitem__('Content-Type', content_type);
			}
			if ((($bool31=!(($bool30=headers.__contains__('Content-Type')) === null || $bool30 === false || $bool30 === 0 || $bool30 === '' ?
				false :
				(typeof $bool30=='object'?
					(typeof $bool30.__nonzero__=='function'?
						$bool30.__nonzero__() :
						(typeof $bool30.__len__=='function'?
							($bool30.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool31 === false || $bool31 === 0 || $bool31 === '' ?
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
				if ((($bool32=returnxml) === null || $bool32 === false || $bool32 === 0 || $bool32 === '' ?
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
					headers.__setitem__('Content-Type', 'application/xml\x3B charset=utf-8');
				}
				else {
					headers.__setitem__('Content-Type', 'text/plain\x3B charset=utf-8');
				}
			}
			xmlHttp = self['doCreateXmlHTTPRequest']();
			url = self['_convertUrlToAbsolute'](url);
			if ((($bool33=(($eq23=(($attr33=($attr34=mf)['platform']) == null || (($attr34.__is_instance__) && typeof $attr33 == 'function') || (typeof $attr33['__get__'] == 'function')?
						$p['getattr']($attr34, 'platform'):
						mf['platform']))===($eq24='webkit')&&$eq23===null?true:
				($eq23===null?false:($eq24===null?false:
					((typeof $eq23=='object'||typeof $eq23=='function')&&typeof $eq23.__cmp__=='function'?$eq23.__cmp__($eq24) === 0:
						((typeof $eq24=='object'||typeof $eq24=='function')&&typeof $eq24.__cmp__=='function'?$eq24.__cmp__($eq23) === 0:
							$eq23==$eq24)))))) === null || $bool33 === false || $bool33 === 0 || $bool33 === '' ?
					false :
					(typeof $bool33=='object'?
						(typeof $bool33.__nonzero__=='function'?
							$bool33.__nonzero__() :
							(typeof $bool33.__len__=='function'?
								($bool33.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				mf['_addXMLHttpRequestEventListener'](xmlHttp, 'readystatechange', (($attr35=($attr36=self)['onReadyStateChange']) == null || (($attr36.__is_instance__) && typeof $attr35 == 'function') || (typeof $attr35['__get__'] == 'function')?
							$p['getattr']($attr36, 'onReadyStateChange'):
							self['onReadyStateChange']));
			}
			else if ((($bool34=(($eq25=(($attr37=($attr38=mf)['platform']) == null || (($attr38.__is_instance__) && typeof $attr37 == 'function') || (typeof $attr37['__get__'] == 'function')?
						$p['getattr']($attr38, 'platform'):
						mf['platform']))===($eq26='mshtml')&&$eq25===null?true:
				($eq25===null?false:($eq26===null?false:
					((typeof $eq25=='object'||typeof $eq25=='function')&&typeof $eq25.__cmp__=='function'?$eq25.__cmp__($eq26) === 0:
						((typeof $eq26=='object'||typeof $eq26=='function')&&typeof $eq26.__cmp__=='function'?$eq26.__cmp__($eq25) === 0:
							$eq25==$eq26)))))) === null || $bool34 === false || $bool34 === 0 || $bool34 === '' ?
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
				mf['_addXMLHttpRequestEventListener'](xmlHttp, 'onreadystatechange', (($attr39=($attr40=self)['onReadyStateChange']) == null || (($attr40.__is_instance__) && typeof $attr39 == 'function') || (typeof $attr39['__get__'] == 'function')?
							$p['getattr']($attr40, 'onReadyStateChange'):
							self['onReadyStateChange']));
			}
			else {
				mf['_addXMLHttpRequestEventListener'](xmlHttp, 'load', (($attr41=($attr42=self)['onLoad']) == null || (($attr42.__is_instance__) && typeof $attr41 == 'function') || (typeof $attr41['__get__'] == 'function')?
							$p['getattr']($attr42, 'onLoad'):
							self['onLoad']));
			}
			if ((($bool36=((($bool35=$or5=(($eq27=(($attr43=($attr44=mf)['platform']) == null || (($attr44.__is_instance__) && typeof $attr43 == 'function') || (typeof $attr43['__get__'] == 'function')?
						$p['getattr']($attr44, 'platform'):
						mf['platform']))===($eq28='webkit')&&$eq27===null?true:
				($eq27===null?false:($eq28===null?false:
					((typeof $eq27=='object'||typeof $eq27=='function')&&typeof $eq27.__cmp__=='function'?$eq27.__cmp__($eq28) === 0:
						((typeof $eq28=='object'||typeof $eq28=='function')&&typeof $eq28.__cmp__=='function'?$eq28.__cmp__($eq27) === 0:
							$eq27==$eq28)))))) === null || $bool35 === false || $bool35 === 0 || $bool35 === '' ?
				false :
				(typeof $bool35=='object'?
					(typeof $bool35.__nonzero__=='function'?
						$bool35.__nonzero__() :
						(typeof $bool35.__len__=='function'?
							($bool35.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or5:(($eq29=(($attr45=($attr46=mf)['platform']) == null || (($attr46.__is_instance__) && typeof $attr45 == 'function') || (typeof $attr45['__get__'] == 'function')?
						$p['getattr']($attr46, 'platform'):
						mf['platform']))===($eq30='mshtml')&&$eq29===null?true:
				($eq29===null?false:($eq30===null?false:
					((typeof $eq29=='object'||typeof $eq29=='function')&&typeof $eq29.__cmp__=='function'?$eq29.__cmp__($eq30) === 0:
						((typeof $eq30=='object'||typeof $eq30=='function')&&typeof $eq30.__cmp__=='function'?$eq30.__cmp__($eq29) === 0:
							$eq29==$eq30))))))) === null || $bool36 === false || $bool36 === 0 || $bool36 === '' ?
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
				xmlHttp['open'](method, url, true, '', '');
			}
			else {
				res = xmlHttp['open'](method, url);
			}
			$iter1_iter = headers;
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				h = $iter1_nextval;
				if ((($bool37=$p['isinstance']((typeof ($3=headers).__array != 'undefined'?
					((typeof $3.__array[$4=h]) != 'undefined'?$3.__array[$4]:
						$3.__getitem__($4)):
						$3.__getitem__(h)), $p['basestring'])) === null || $bool37 === false || $bool37 === 0 || $bool37 === '' ?
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
					xmlHttp['setRequestHeader'](h, (typeof ($5=headers).__array != 'undefined'?
						((typeof $5.__array[$6=h]) != 'undefined'?$5.__array[$6]:
							$5.__getitem__($6)):
							$5.__getitem__(h)));
				}
				else {
					hval = '\x3B'['join'](function(){
						var $iter2_nextval,$iter2_type,$iter2_iter,i,$listcomp1,$iter2_idx,$8,$7,$iter2_array;
	$listcomp1 = $p['list']();
					$iter2_iter = (typeof ($7=headers).__array != 'undefined'?
						((typeof $7.__array[$8=h]) != 'undefined'?$7.__array[$8]:
							$7.__getitem__($8)):
							$7.__getitem__(h));
					if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
						$iter2_type = 0;
					} else {
						$iter2_iter = $iter2_iter.__iter__();
						$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter2_idx = 0;
					while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
						i = $iter2_nextval;
						$listcomp1['append']($p['str'](i));
					}

	return $listcomp1;}());
					xmlHttp['setRequestHeader'](h, hval);
				}
			}
			$m['handlers'].__setitem__(xmlHttp, handler);
			xmlHttp['send'](((($bool38=$or7=postData) === null || $bool38 === false || $bool38 === 0 || $bool38 === '' ?
				false :
				(typeof $bool38=='object'?
					(typeof $bool38.__nonzero__=='function'?
						$bool38.__nonzero__() :
						(typeof $bool38.__len__=='function'?
							($bool38.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or7:''));
			return true;
			handler = null;
			xmlHttp = null;
			$m.localHandler['onError']($p['str']((typeof e == "undefined"?$m.e:e)));
			return false;
		}
	, 1, [null,null,['self'],['method'],['user'],['pwd'],['url'],['postData'],['handler'],['returnxml', false],['content_type', null],['headers', null]]);
		$cls_definition['asyncImpl'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('HTTPRequest', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end gwt.HTTPRequest */


/* end module: gwt.HTTPRequest */


/*
PYJS_DEPS: ['pyjd', 'pygwt', 'sys', 'base64']
*/
