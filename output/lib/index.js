/* start module: index */
$pyjs.loaded_modules['index'] = function (__mod_name__) {
	if($pyjs.loaded_modules['index'].__was_initialized__) return $pyjs.loaded_modules['index'];
	var $m = $pyjs.loaded_modules["index"];
	$m.__repr__ = function() { return "<module: index>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'index';
	$m.__name__ = __mod_name__;
	var $eq19,$bool11,$eq20;

	$m['pyjd'] = $p['___import___']('pyjd', null);
	$m['TabBar'] = $p['___import___']('pyjamas.ui.TabBar.TabBar', null, null, false);
	$m['TabPanel'] = $p['___import___']('pyjamas.ui.TabPanel.TabPanel', null, null, false);
	$m['HasAlignment'] = $p['___import___']('pyjamas.ui.HasAlignment', null, null, false);
	$m['Image'] = $p['___import___']('pyjamas.ui.Image.Image', null, null, false);
	$m['DockPanel'] = $p['___import___']('pyjamas.ui.DockPanel.DockPanel', null, null, false);
	$m['HasAlignment'] = $p['___import___']('pyjamas.ui.HasAlignment', null, null, false);
	$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
	$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', null, null, false);
	$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
	$m['Composite'] = $p['___import___']('pyjamas.ui.Composite.Composite', null, null, false);
	$m['MouseListener'] = $p['___import___']('pyjamas.ui.MouseListener', null, null, false);
	$m['Event'] = $p['___import___']('pyjamas.ui.Event', null, null, false);
	$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
	$m['DeferredCommand'] = $p['___import___']('pyjamas.DeferredCommand', null, null, false);
	$m['DecoratedTabPanel'] = $p['___import___']('pyjamas.ui.DecoratorPanel.DecoratedTabPanel', null, null, false);
	$m['DecoratorPanel'] = $p['___import___']('pyjamas.ui.DecoratorPanel.DecoratorPanel', null, null, false);
	$m['DecoratorTitledPanel'] = $p['___import___']('pyjamas.ui.DecoratorPanel.DecoratorTitledPanel', null, null, false);
	$m['HTTPRequest'] = $p['___import___']('pyjamas.HTTPRequest.HTTPRequest', null, null, false);
	$m['PageListLoader'] = $p['___import___']('PageLoader.PageListLoader', null, null, false);
	$m['PageLoader'] = $p['___import___']('PageLoader.PageLoader', null, null, false);
	$m['HTMLLinkPanel'] = $p['___import___']('pyjamas.ui.HTMLLinkPanel.HTMLLinkPanel', null, null, false);
	$m['History'] = $p['___import___']('pyjamas.History', null, null, false);
	$m['PrettyTab'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'index';
		$method = $pyjs__bind_method2('__init__', function(text, imageUrl) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
				imageUrl = arguments[2];
			}
			var $attr1,$attr2,$attr5,$attr4,$attr6,p,$attr3;
			$m['DecoratorPanel']['__init__'](self, (($attr1=($attr2=$m['DecoratorPanel'])['DECORATE_ALL']) == null || (($attr2.__is_instance__) && typeof $attr1 == 'function') || (typeof $attr1['__get__'] == 'function')?
						$p['getattr']($attr2, 'DECORATE_ALL'):
						$m['DecoratorPanel']['DECORATE_ALL']));
			p = $m['HorizontalPanel']();
			p['setSpacing'](3);
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('img', $m['Image'](imageUrl)) : $p['setattr'](self, 'img', $m['Image'](imageUrl));
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('txt', $m['HTML'](text)) : $p['setattr'](self, 'txt', $m['HTML'](text));
			p['add']((($attr3=($attr4=self)['img']) == null || (($attr4.__is_instance__) && typeof $attr3 == 'function') || (typeof $attr3['__get__'] == 'function')?
						$p['getattr']($attr4, 'img'):
						self['img']));
			p['add']((($attr5=($attr6=self)['txt']) == null || (($attr6.__is_instance__) && typeof $attr5 == 'function') || (typeof $attr5['__get__'] == 'function')?
						$p['getattr']($attr6, 'txt'):
						self['txt']));
			self['add'](p);
			return null;
		}
	, 1, [null,null,['self'],['text'],['imageUrl']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('addClickListener', function(listener) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['img']['addClickListener'](listener);
			self['txt']['addClickListener'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['addClickListener'] = $method;
		var $bases = new Array($m['Composite']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('PrettyTab', $p['tuple']($bases), $data);
	})();
	$m['Tabs'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'index';
		$method = $pyjs__bind_method2('onModuleLoad', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr20,$attr21,$attr22,$attr23,$attr24,$attr25,$attr26,$attr27,$attr28,$attr29,$attr9,$attr8,$attr7,$attr33,dock,$attr31,$attr30,$attr19,$attr18,$attr34,$attr15,$attr14,$attr17,$attr16,$attr11,$attr10,$attr13,$attr12,initToken,$attr32;
			dock = $m['DockPanel']();
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('header', $pyjs_kwargs_call(null, $m['HTML'], null, null, [{Width:'100%', Height:'150px'}])) : $p['setattr'](self, 'header', $pyjs_kwargs_call(null, $m['HTML'], null, null, [{Width:'100%', Height:'150px'}]));
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('footer', $pyjs_kwargs_call(null, $m['HTML'], null, null, [{Width:'100%'}])) : $p['setattr'](self, 'footer', $pyjs_kwargs_call(null, $m['HTML'], null, null, [{Width:'100%'}]));
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('sidebar', $pyjs_kwargs_call(null, $m['HTML'], null, null, [{Width:'200px', Height:'100%', StyleName:'sidebar'}])) : $p['setattr'](self, 'sidebar', $pyjs_kwargs_call(null, $m['HTML'], null, null, [{Width:'200px', Height:'100%', StyleName:'sidebar'}]));
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('fTabs', $pyjs_kwargs_call(null, $m['DecoratedTabPanel'], null, null, [{Size:$p['tuple'](['100%', '100%']), StyleName:'tabs'}])) : $p['setattr'](self, 'fTabs', $pyjs_kwargs_call(null, $m['DecoratedTabPanel'], null, null, [{Size:$p['tuple'](['100%', '100%']), StyleName:'tabs'}]));
			dock['add']((($attr7=($attr8=self)['header']) == null || (($attr8.__is_instance__) && typeof $attr7 == 'function') || (typeof $attr7['__get__'] == 'function')?
						$p['getattr']($attr8, 'header'):
						self['header']), (($attr9=($attr10=$m['DockPanel'])['NORTH']) == null || (($attr10.__is_instance__) && typeof $attr9 == 'function') || (typeof $attr9['__get__'] == 'function')?
						$p['getattr']($attr10, 'NORTH'):
						$m['DockPanel']['NORTH']));
			dock['add']((($attr11=($attr12=self)['footer']) == null || (($attr12.__is_instance__) && typeof $attr11 == 'function') || (typeof $attr11['__get__'] == 'function')?
						$p['getattr']($attr12, 'footer'):
						self['footer']), (($attr13=($attr14=$m['DockPanel'])['SOUTH']) == null || (($attr14.__is_instance__) && typeof $attr13 == 'function') || (typeof $attr13['__get__'] == 'function')?
						$p['getattr']($attr14, 'SOUTH'):
						$m['DockPanel']['SOUTH']));
			dock['add']((($attr15=($attr16=self)['sidebar']) == null || (($attr16.__is_instance__) && typeof $attr15 == 'function') || (typeof $attr15['__get__'] == 'function')?
						$p['getattr']($attr16, 'sidebar'):
						self['sidebar']), (($attr17=($attr18=$m['DockPanel'])['EAST']) == null || (($attr18.__is_instance__) && typeof $attr17 == 'function') || (typeof $attr17['__get__'] == 'function')?
						$p['getattr']($attr18, 'EAST'):
						$m['DockPanel']['EAST']));
			dock['add']((($attr19=($attr20=self)['fTabs']) == null || (($attr20.__is_instance__) && typeof $attr19 == 'function') || (typeof $attr19['__get__'] == 'function')?
						$p['getattr']($attr20, 'fTabs'):
						self['fTabs']), (($attr21=($attr22=$m['DockPanel'])['CENTER']) == null || (($attr22.__is_instance__) && typeof $attr21 == 'function') || (typeof $attr21['__get__'] == 'function')?
						$p['getattr']($attr22, 'CENTER'):
						$m['DockPanel']['CENTER']));
			dock['setCellVerticalAlignment']((($attr23=($attr24=self)['fTabs']) == null || (($attr24.__is_instance__) && typeof $attr23 == 'function') || (typeof $attr23['__get__'] == 'function')?
						$p['getattr']($attr24, 'fTabs'):
						self['fTabs']), (($attr25=($attr26=$m['HasAlignment'])['ALIGN_TOP']) == null || (($attr26.__is_instance__) && typeof $attr25 == 'function') || (typeof $attr25['__get__'] == 'function')?
						$p['getattr']($attr26, 'ALIGN_TOP'):
						$m['HasAlignment']['ALIGN_TOP']));
			dock['setCellWidth']((($attr27=($attr28=self)['header']) == null || (($attr28.__is_instance__) && typeof $attr27 == 'function') || (typeof $attr27['__get__'] == 'function')?
						$p['getattr']($attr28, 'header'):
						self['header']), '100%');
			dock['setCellHeight']((($attr29=($attr30=self)['header']) == null || (($attr30.__is_instance__) && typeof $attr29 == 'function') || (typeof $attr29['__get__'] == 'function')?
						$p['getattr']($attr30, 'header'):
						self['header']), '150px');
			dock['setCellWidth']((($attr31=($attr32=self)['footer']) == null || (($attr32.__is_instance__) && typeof $attr31 == 'function') || (typeof $attr31['__get__'] == 'function')?
						$p['getattr']($attr32, 'footer'):
						self['footer']), '100%');
			dock['setCellWidth']((($attr33=($attr34=self)['sidebar']) == null || (($attr34.__is_instance__) && typeof $attr33 == 'function') || (typeof $attr33['__get__'] == 'function')?
						$p['getattr']($attr34, 'sidebar'):
						self['sidebar']), '200px');
			$m['History']['addHistoryListener'](self);
			initToken = $m['History']['getToken']();
			$m['RootPanel']()['add'](dock);
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('dock', dock) : $p['setattr'](self, 'dock', dock);
			self['loadPageList']();
			$m['Window']['addWindowResizeListener'](self);
			$m['DeferredCommand']['add'](self);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onModuleLoad'] = $method;
		$method = $pyjs__bind_method2('execute', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['onWindowResized']($m['Window']['getClientWidth'](), $m['Window']['getClientHeight']());
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['execute'] = $method;
		$method = $pyjs__bind_method2('onWindowResized', function(width, height) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
				height = arguments[2];
			}
			var tabwidth,$attr36,$attr35,$sub2,$sub1;
			tabwidth = $p['sprintf']('%dpx', (typeof ($sub1=width)==typeof ($sub2=350) && (typeof $sub1=='number'||typeof $sub1=='string')?
				$sub1-$sub2:
				$p['op_sub']($sub1,$sub2)));
			self['fTabs']['setWidth'](tabwidth);
			self['dock']['setCellWidth']((($attr35=($attr36=self)['fTabs']) == null || (($attr36.__is_instance__) && typeof $attr35 == 'function') || (typeof $attr35['__get__'] == 'function')?
						$p['getattr']($attr36, 'fTabs'):
						self['fTabs']), tabwidth);
			return null;
		}
	, 1, [null,null,['self'],['width'],['height']]);
		$cls_definition['onWindowResized'] = $method;
		$method = $pyjs__bind_method2('createPage', function(title, purpose, text) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				title = arguments[1];
				purpose = arguments[2];
				text = arguments[3];
			}
			var $8,$attr54,$9,widget,$eq9,$iter1_iter,$attr46,$attr47,$attr44,$attr45,$attr42,$attr43,$attr40,$attr41,$eq10,$eq11,$eq12,$eq13,$eq14,$4,$attr48,$attr49,$5,$iter2_iter,$iter2_type,question,html,$iter1_array,answer,$len3,$eq8,faq,$iter1_nextval,$eq2,$eq3,$attr60,$eq1,$eq6,$eq7,$eq4,$eq5,$bool2,$bool3,$iter2_idx,$bool1,$attr37,$bool4,$bool5,$6,$7,$attr39,$attr38,$2,$3,$1,$attr59,$attr58,$iter2_nextval,$10,$iter1_type,idx,$attr51,$attr50,$attr53,$attr52,$attr55,l,$attr57,$attr56,$add2,$add3,$len4,$add1,$len2,$iter1_idx,$add4,$len1,$bool6,$iter2_array,$bool7;
			if ((($bool1=(($eq1=purpose)===($eq2='faq')&&$eq1===null?true:
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
				(($attr37=($attr38=self)['faq_pages']) == null || (($attr38.__is_instance__) && typeof $attr37 == 'function') || (typeof $attr37['__get__'] == 'function')?
							$p['getattr']($attr38, 'faq_pages'):
							self['faq_pages']).__setitem__(title, text);
				if ((($bool2=!(($eq3=(($len1=(($attr39=($attr40=self)['faq_pages']) == null || (($attr40.__is_instance__) && typeof $attr39 == 'function') || (typeof $attr39['__get__'] == 'function')?
							$p['getattr']($attr40, 'faq_pages'):
							self['faq_pages'])) === null?0:
					(typeof $len1.__array != 'undefined' ? $len1.__array.length:
						(typeof $len1.__len__ == 'function'?$len1.__len__():
							(typeof $len1.length != 'undefined'?$len1.length:
								$p['len']($len1))))))===($eq4=(($len2=(($attr41=($attr42=self)['faq_list']) == null || (($attr42.__is_instance__) && typeof $attr41 == 'function') || (typeof $attr41['__get__'] == 'function')?
							$p['getattr']($attr42, 'faq_list'):
							self['faq_list'])) === null?0:
					(typeof $len2.__array != 'undefined' ? $len2.__array.length:
						(typeof $len2.__len__ == 'function'?$len2.__len__():
							(typeof $len2.length != 'undefined'?$len2.length:
								$p['len']($len2))))))&&$eq3===null?true:
					($eq3===null?false:($eq4===null?false:
						((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3.__cmp__=='function'?$eq3.__cmp__($eq4) === 0:
							((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4.__cmp__=='function'?$eq4.__cmp__($eq3) === 0:
								$eq3==$eq4)))))) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
					return null;
				}
				faq = (typeof ($1=(($attr43=($attr44=self)['page_widgets']) == null || (($attr44.__is_instance__) && typeof $attr43 == 'function') || (typeof $attr43['__get__'] == 'function')?
							$p['getattr']($attr44, 'page_widgets'):
							self['page_widgets'])).__array != 'undefined'?
					((typeof $1.__array[$2='FAQ']) != 'undefined'?$1.__array[$2]:
						$1.__getitem__($2)):
						$1.__getitem__('FAQ'));
				$iter1_iter = self['faq_list'];
				if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter.__iter__();
					$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					l = $iter1_nextval;
					question = (typeof ($3=l).__array != 'undefined'?
						((typeof $3.__array[$4=0]) != 'undefined'?$3.__array[$4]:
							$3.__getitem__($4)):
							$3.__getitem__(0));
					answer = (typeof ($5=(($attr45=($attr46=self)['faq_pages']) == null || (($attr46.__is_instance__) && typeof $attr45 == 'function') || (typeof $attr45['__get__'] == 'function')?
								$p['getattr']($attr46, 'faq_pages'):
								self['faq_pages'])).__array != 'undefined'?
						((typeof $5.__array[$6=question]) != 'undefined'?$5.__array[$6]:
							$5.__getitem__($6)):
							$5.__getitem__(question));
					html = faq['getHTML']();
					html = (typeof ($add1=html)==typeof ($add2=$p['sprintf']('\x3Ch3\x3E%s\x3C/h3\x3E\x0A', question)) && (typeof $add1=='number'||typeof $add1=='string')?
						$add1+$add2:
						$p['op_add']($add1,$add2));
					html = (typeof ($add3=html)==typeof ($add4=$p['sprintf']('\x0A%s\x0A\x0A', answer)) && (typeof $add3=='number'||typeof $add3=='string')?
						$add3+$add4:
						$p['op_add']($add3,$add4));
					faq['setHTML'](html);
				}
				html = $p['sprintf']('\x3Cdiv class=\x27faq\x27\x3E\x0A%s\x3C/div\x3E\x0A', html);
				faq['setHTML'](html);
				$pyjs_kwargs_call(faq, 'replaceLinks', null, null, [{use_page_href:false}]);
				return null;
			}
			if ((($bool3=(($eq5=title)===($eq6='header')&&$eq5===null?true:
				($eq5===null?false:($eq6===null?false:
					((typeof $eq5=='object'||typeof $eq5=='function')&&typeof $eq5.__cmp__=='function'?$eq5.__cmp__($eq6) === 0:
						((typeof $eq6=='object'||typeof $eq6=='function')&&typeof $eq6.__cmp__=='function'?$eq6.__cmp__($eq5) === 0:
							$eq5==$eq6)))))) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
				self['header']['setHTML'](text);
				return null;
			}
			else if ((($bool4=(($eq7=title)===($eq8='footer')&&$eq7===null?true:
				($eq7===null?false:($eq8===null?false:
					((typeof $eq7=='object'||typeof $eq7=='function')&&typeof $eq7.__cmp__=='function'?$eq7.__cmp__($eq8) === 0:
						((typeof $eq8=='object'||typeof $eq8=='function')&&typeof $eq8.__cmp__=='function'?$eq8.__cmp__($eq7) === 0:
							$eq7==$eq8)))))) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
				self['footer']['setHTML'](text);
				return null;
			}
			else if ((($bool5=(($eq9=title)===($eq10='sidebar')&&$eq9===null?true:
				($eq9===null?false:($eq10===null?false:
					((typeof $eq9=='object'||typeof $eq9=='function')&&typeof $eq9.__cmp__=='function'?$eq9.__cmp__($eq10) === 0:
						((typeof $eq10=='object'||typeof $eq10=='function')&&typeof $eq10.__cmp__=='function'?$eq10.__cmp__($eq9) === 0:
							$eq9==$eq10)))))) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
				self['sidebar']['setHTML'](text);
				return null;
			}
			(($attr47=($attr48=self)['pages']) == null || (($attr48.__is_instance__) && typeof $attr47 == 'function') || (typeof $attr47['__get__'] == 'function')?
						$p['getattr']($attr48, 'pages'):
						self['pages']).__setitem__(title, text);
			if ((($bool6=!(($eq11=(($len3=(($attr49=($attr50=self)['pages']) == null || (($attr50.__is_instance__) && typeof $attr49 == 'function') || (typeof $attr49['__get__'] == 'function')?
						$p['getattr']($attr50, 'pages'):
						self['pages'])) === null?0:
				(typeof $len3.__array != 'undefined' ? $len3.__array.length:
					(typeof $len3.__len__ == 'function'?$len3.__len__():
						(typeof $len3.length != 'undefined'?$len3.length:
							$p['len']($len3))))))===($eq12=(($len4=(($attr51=($attr52=self)['page_list']) == null || (($attr52.__is_instance__) && typeof $attr51 == 'function') || (typeof $attr51['__get__'] == 'function')?
						$p['getattr']($attr52, 'page_list'):
						self['page_list'])) === null?0:
				(typeof $len4.__array != 'undefined' ? $len4.__array.length:
					(typeof $len4.__len__ == 'function'?$len4.__len__():
						(typeof $len4.length != 'undefined'?$len4.length:
							$p['len']($len4))))))&&$eq11===null?true:
				($eq11===null?false:($eq12===null?false:
					((typeof $eq11=='object'||typeof $eq11=='function')&&typeof $eq11.__cmp__=='function'?$eq11.__cmp__($eq12) === 0:
						((typeof $eq12=='object'||typeof $eq12=='function')&&typeof $eq12.__cmp__=='function'?$eq12.__cmp__($eq11) === 0:
							$eq11==$eq12)))))) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
				return null;
			}
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('page_widgets', $p['dict']([])) : $p['setattr'](self, 'page_widgets', $p['dict']([]));
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('tab_index', $p['dict']([])) : $p['setattr'](self, 'tab_index', $p['dict']([]));
			$iter2_iter = $p['enumerate']((($attr53=($attr54=self)['page_list']) == null || (($attr54.__is_instance__) && typeof $attr53 == 'function') || (typeof $attr53['__get__'] == 'function')?
						$p['getattr']($attr54, 'page_list'):
						self['page_list']));
			if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
				$iter2_type = 0;
			} else {
				$iter2_iter = $iter2_iter.__iter__();
				$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter2_idx = 0;
			while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,true):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
				idx = $iter2_nextval.__array[0];
				l = $iter2_nextval.__array[1];
				title = (typeof ($7=l).__array != 'undefined'?
					((typeof $7.__array[$8=0]) != 'undefined'?$7.__array[$8]:
						$7.__getitem__($8)):
						$7.__getitem__(0));
				text = (typeof ($9=(($attr55=($attr56=self)['pages']) == null || (($attr56.__is_instance__) && typeof $attr55 == 'function') || (typeof $attr55['__get__'] == 'function')?
							$p['getattr']($attr56, 'pages'):
							self['pages'])).__array != 'undefined'?
					((typeof $9.__array[$10=title]) != 'undefined'?$9.__array[$10]:
						$9.__getitem__($10)):
						$9.__getitem__(title));
				(($attr57=($attr58=self)['tab_index']) == null || (($attr58.__is_instance__) && typeof $attr57 == 'function') || (typeof $attr57['__get__'] == 'function')?
							$p['getattr']($attr58, 'tab_index'):
							self['tab_index']).__setitem__(title, idx);
				widget = $m['HTMLLinkPanel'](text);
				self['fTabs']['add'](widget, title, true);
				(($attr59=($attr60=self)['page_widgets']) == null || (($attr60.__is_instance__) && typeof $attr59 == 'function') || (typeof $attr59['__get__'] == 'function')?
							$p['getattr']($attr60, 'page_widgets'):
							self['page_widgets']).__setitem__(title, widget);
				if ((($bool7=(($eq13=title)===($eq14='FAQ')&&$eq13===null?true:
					($eq13===null?false:($eq14===null?false:
						((typeof $eq13=='object'||typeof $eq13=='function')&&typeof $eq13.__cmp__=='function'?$eq13.__cmp__($eq14) === 0:
							((typeof $eq14=='object'||typeof $eq14=='function')&&typeof $eq14.__cmp__=='function'?$eq14.__cmp__($eq13) === 0:
								$eq13==$eq14)))))) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
					$m['HTTPRequest']()['asyncGet']('faq/questions.txt', $m['PageListLoader'](self, 'faq'));
				}
				else {
					$pyjs_kwargs_call(widget, 'replaceLinks', null, null, [{use_page_href:false}]);
				}
			}
			self['fTabs']['selectTab'](0);
			return null;
		}
	, 1, [null,null,['self'],['title'],['purpose'],['text']]);
		$cls_definition['createPage'] = $method;
		$method = $pyjs__bind_method2('onHistoryChanged', function(token) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				token = arguments[1];
			}
			var $11,$12,$attr61,$attr62,idx,$bool8;
			if ((($bool8=self['pages']['has_key'](token)) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
				idx = (typeof ($11=(($attr61=($attr62=self)['tab_index']) == null || (($attr62.__is_instance__) && typeof $attr61 == 'function') || (typeof $attr61['__get__'] == 'function')?
							$p['getattr']($attr62, 'tab_index'):
							self['tab_index'])).__array != 'undefined'?
					((typeof $11.__array[$12=token]) != 'undefined'?$11.__array[$12]:
						$11.__getitem__($12)):
						$11.__getitem__(token));
				self['fTabs']['selectTab'](idx);
			}
			return null;
		}
	, 1, [null,null,['self'],['token']]);
		$cls_definition['onHistoryChanged'] = $method;
		$method = $pyjs__bind_method2('onError', function(text, code) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
				code = arguments[2];
			}

 			return null;
		}
	, 1, [null,null,['self'],['text'],['code']]);
		$cls_definition['onError'] = $method;
		$method = $pyjs__bind_method2('loadPageList', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['HTTPRequest']()['asyncGet']('sidebar.html', $m['PageLoader'](self, 'sidebar', 'contents'));
			$m['HTTPRequest']()['asyncGet']('header.html', $m['PageLoader'](self, 'header', 'contents'));
			$m['HTTPRequest']()['asyncGet']('footer.html', $m['PageLoader'](self, 'footer', 'contents'));
			$m['HTTPRequest']()['asyncGet']('contents.txt', $m['PageListLoader'](self, 'contents'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['loadPageList'] = $method;
		$method = $pyjs__bind_method2('loadPages', function(pages, purpose) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				pages = arguments[1];
				purpose = arguments[2];
			}
			var $14,$15,$16,$iter3_nextval,l,$13,$bool10,$iter3_array,$iter3_iter,$eq18,$iter3_idx,$iter3_type,title,desc,$bool9,$eq15,$eq16,$eq17;
			if ((($bool9=(($eq15=purpose)===($eq16='contents')&&$eq15===null?true:
				($eq15===null?false:($eq16===null?false:
					((typeof $eq15=='object'||typeof $eq15=='function')&&typeof $eq15.__cmp__=='function'?$eq15.__cmp__($eq16) === 0:
						((typeof $eq16=='object'||typeof $eq16=='function')&&typeof $eq16.__cmp__=='function'?$eq16.__cmp__($eq15) === 0:
							$eq15==$eq16)))))) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('pages', $p['dict']([])) : $p['setattr'](self, 'pages', $p['dict']([]));
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('page_list', pages) : $p['setattr'](self, 'page_list', pages);
			}
			else if ((($bool10=(($eq17=purpose)===($eq18='faq')&&$eq17===null?true:
				($eq17===null?false:($eq18===null?false:
					((typeof $eq17=='object'||typeof $eq17=='function')&&typeof $eq17.__cmp__=='function'?$eq17.__cmp__($eq18) === 0:
						((typeof $eq18=='object'||typeof $eq18=='function')&&typeof $eq18.__cmp__=='function'?$eq18.__cmp__($eq17) === 0:
							$eq17==$eq18)))))) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('faq_pages', $p['dict']([])) : $p['setattr'](self, 'faq_pages', $p['dict']([]));
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('faq_list', pages) : $p['setattr'](self, 'faq_list', pages);
			}
			$iter3_iter = pages;
			if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
				$iter3_type = 0;
			} else {
				$iter3_iter = $iter3_iter.__iter__();
				$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter3_idx = 0;
			while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
				l = $iter3_nextval;
				title = (typeof ($13=l).__array != 'undefined'?
					((typeof $13.__array[$14=0]) != 'undefined'?$13.__array[$14]:
						$13.__getitem__($14)):
						$13.__getitem__(0));
				desc = (typeof ($15=l).__array != 'undefined'?
					((typeof $15.__array[$16=1]) != 'undefined'?$15.__array[$16]:
						$15.__getitem__($16)):
						$15.__getitem__(1));
				$m['HTTPRequest']()['asyncGet'](desc, $m['PageLoader'](self, title, purpose));
			}
			return null;
		}
	, 1, [null,null,['self'],['pages'],['purpose']]);
		$cls_definition['loadPages'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Tabs', $p['tuple']($bases), $data);
	})();
	if ((($bool11=(($eq19=(typeof __name__ == "undefined"?$m.__name__:__name__))===($eq20='__main__')&&$eq19===null?true:
		($eq19===null?false:($eq20===null?false:
			((typeof $eq19=='object'||typeof $eq19=='function')&&typeof $eq19.__cmp__=='function'?$eq19.__cmp__($eq20) === 0:
				((typeof $eq20=='object'||typeof $eq20=='function')&&typeof $eq20.__cmp__=='function'?$eq20.__cmp__($eq19) === 0:
					$eq19==$eq20)))))) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
		$m['pyjd']['setup']('./public/index.html');
		$m['app'] = $m['Tabs']();
		$m['app']['onModuleLoad']();
		$m['pyjd']['run']();
	}
	return this;
}; /* end index */


/* end module: index */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.ui.TabBar.TabBar', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.TabBar', 'pyjamas.ui.TabPanel.TabPanel', 'pyjamas.ui.TabPanel', 'pyjamas.ui.HasAlignment', 'pyjamas.ui.Image.Image', 'pyjamas.ui.Image', 'pyjamas.ui.DockPanel.DockPanel', 'pyjamas.ui.DockPanel', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui.RootPanel', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.Composite.Composite', 'pyjamas.ui.Composite', 'pyjamas.ui.MouseListener', 'pyjamas.ui.Event', 'pyjamas.Window', 'pyjamas.DeferredCommand', 'pyjamas.ui.DecoratorPanel.DecoratedTabPanel', 'pyjamas.ui.DecoratorPanel', 'pyjamas.ui.DecoratorPanel.DecoratorPanel', 'pyjamas.ui.DecoratorPanel.DecoratorTitledPanel', 'pyjamas.HTTPRequest.HTTPRequest', 'pyjamas.HTTPRequest', 'PageLoader.PageListLoader', 'PageLoader', 'PageLoader.PageLoader', 'pyjamas.ui.HTMLLinkPanel.HTMLLinkPanel', 'pyjamas.ui.HTMLLinkPanel', 'pyjamas.History']
*/
