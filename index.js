/* start module: index */
$pyjs.loaded_modules['index'] = function (__mod_name__) {
	if($pyjs.loaded_modules['index'].__was_initialized__) return $pyjs.loaded_modules['index'];
	var $m = $pyjs.loaded_modules["index"];
	$m.__repr__ = function() { return "<module: index>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'index';
	$m.__name__ = __mod_name__;


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
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('header', $pyjs_kwargs_call(null, $m['HTML'], null, null, [{Width:'100%', Height:'270px'}])) : $p['setattr'](self, 'header', $pyjs_kwargs_call(null, $m['HTML'], null, null, [{Width:'100%', Height:'270px'}]));
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
						self['header']), '270px');
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
			tabwidth = $p['sprintf']('%dpx', $p['__op_sub']($sub1=width,$sub2=350));
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
			var $iter1_iter,$attr46,$attr47,$attr44,$attr45,$attr42,$attr43,$attr40,$attr41,$iter2_type,$attr48,$attr49,$attr54,$iter2_iter,question,html,$iter1_array,answer,widget,$iter1_nextval,$attr60,faq,$iter2_idx,$attr37,$attr39,$attr38,$attr59,$attr58,$iter2_nextval,$iter1_type,idx,$attr51,$attr50,$attr53,$attr52,$attr55,l,$attr57,$attr56,$add2,$add3,$add1,$iter1_idx,$add4,$iter2_array;
			if ($p['bool']($p['op_eq'](purpose, 'faq'))) {
				(($attr37=($attr38=self)['faq_pages']) == null || (($attr38.__is_instance__) && typeof $attr37 == 'function') || (typeof $attr37['__get__'] == 'function')?
							$p['getattr']($attr38, 'faq_pages'):
							self['faq_pages']).__setitem__(title, text);
				if ($p['bool'](!$p['op_eq']($p['len']((($attr39=($attr40=self)['faq_pages']) == null || (($attr40.__is_instance__) && typeof $attr39 == 'function') || (typeof $attr39['__get__'] == 'function')?
							$p['getattr']($attr40, 'faq_pages'):
							self['faq_pages'])), $p['len']((($attr41=($attr42=self)['faq_list']) == null || (($attr42.__is_instance__) && typeof $attr41 == 'function') || (typeof $attr41['__get__'] == 'function')?
							$p['getattr']($attr42, 'faq_list'):
							self['faq_list']))))) {
					return null;
				}
				faq = (($attr43=($attr44=self)['page_widgets']) == null || (($attr44.__is_instance__) && typeof $attr43 == 'function') || (typeof $attr43['__get__'] == 'function')?
							$p['getattr']($attr44, 'page_widgets'):
							self['page_widgets']).__getitem__('FAQ');
				$iter1_iter = self['faq_list'];
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval).$nextval) != 'undefined') {
					l = $iter1_nextval.$nextval;
					question = l.__getitem__(0);
					answer = (($attr45=($attr46=self)['faq_pages']) == null || (($attr46.__is_instance__) && typeof $attr45 == 'function') || (typeof $attr45['__get__'] == 'function')?
								$p['getattr']($attr46, 'faq_pages'):
								self['faq_pages']).__getitem__(question);
					html = faq['getHTML']();
					html = $p['__op_add']($add1=html,$add2=$p['sprintf']('\x3Ch3\x3E%s\x3C/h3\x3E\x0A', question));
					html = $p['__op_add']($add3=html,$add4=$p['sprintf']('\x0A%s\x0A\x0A', answer));
					faq['setHTML'](html);
				}
				html = $p['sprintf']('\x3Cdiv class=\x27faq\x27\x3E\x0A%s\x3C/div\x3E\x0A', html);
				faq['setHTML'](html);
				$pyjs_kwargs_call(faq, 'replaceLinks', null, null, [{use_page_href:false}]);
				return null;
			}
			if ($p['bool']($p['op_eq'](title, 'header'))) {
				self['header']['setHTML'](text);
				return null;
			}
			else if ($p['bool']($p['op_eq'](title, 'footer'))) {
				self['footer']['setHTML'](text);
				return null;
			}
			else if ($p['bool']($p['op_eq'](title, 'sidebar'))) {
				self['sidebar']['setHTML'](text);
				return null;
			}
			(($attr47=($attr48=self)['pages']) == null || (($attr48.__is_instance__) && typeof $attr47 == 'function') || (typeof $attr47['__get__'] == 'function')?
						$p['getattr']($attr48, 'pages'):
						self['pages']).__setitem__(title, text);
			if ($p['bool'](!$p['op_eq']($p['len']((($attr49=($attr50=self)['pages']) == null || (($attr50.__is_instance__) && typeof $attr49 == 'function') || (typeof $attr49['__get__'] == 'function')?
						$p['getattr']($attr50, 'pages'):
						self['pages'])), $p['len']((($attr51=($attr52=self)['page_list']) == null || (($attr52.__is_instance__) && typeof $attr51 == 'function') || (typeof $attr51['__get__'] == 'function')?
						$p['getattr']($attr52, 'page_list'):
						self['page_list']))))) {
				return null;
			}
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('page_widgets', $p['dict']([])) : $p['setattr'](self, 'page_widgets', $p['dict']([]));
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('tab_index', $p['dict']([])) : $p['setattr'](self, 'tab_index', $p['dict']([]));
			$iter2_iter = $p['enumerate']((($attr53=($attr54=self)['page_list']) == null || (($attr54.__is_instance__) && typeof $attr53 == 'function') || (typeof $attr53['__get__'] == 'function')?
						$p['getattr']($attr54, 'page_list'):
						self['page_list']));
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,true);
			while (typeof($p['__wrapped_next']($iter2_nextval).$nextval) != 'undefined') {
				idx = $iter2_nextval.$nextval.__array[0];
				l = $iter2_nextval.$nextval.__array[1];
				title = l.__getitem__(0);
				text = (($attr55=($attr56=self)['pages']) == null || (($attr56.__is_instance__) && typeof $attr55 == 'function') || (typeof $attr55['__get__'] == 'function')?
							$p['getattr']($attr56, 'pages'):
							self['pages']).__getitem__(title);
				(($attr57=($attr58=self)['tab_index']) == null || (($attr58.__is_instance__) && typeof $attr57 == 'function') || (typeof $attr57['__get__'] == 'function')?
							$p['getattr']($attr58, 'tab_index'):
							self['tab_index']).__setitem__(title, idx);
				widget = $m['HTMLLinkPanel'](text);
				self['fTabs']['add'](widget, title, true);
				(($attr59=($attr60=self)['page_widgets']) == null || (($attr60.__is_instance__) && typeof $attr59 == 'function') || (typeof $attr59['__get__'] == 'function')?
							$p['getattr']($attr60, 'page_widgets'):
							self['page_widgets']).__setitem__(title, widget);
				if ($p['bool']($p['op_eq'](title, 'FAQ'))) {
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
			var idx,$attr62,$attr61;
			if ($p['bool'](self['pages']['has_key'](token))) {
				idx = (($attr61=($attr62=self)['tab_index']) == null || (($attr62.__is_instance__) && typeof $attr61 == 'function') || (typeof $attr61['__get__'] == 'function')?
							$p['getattr']($attr62, 'tab_index'):
							self['tab_index']).__getitem__(token);
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

			$p['printFunc'](['LOAD ERROR(', code, '):', text], 1);
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
			var $iter3_idx,title,$iter3_array,l,$iter3_iter,$iter3_type,desc,$iter3_nextval;
			if ($p['bool']($p['op_eq'](purpose, 'contents'))) {
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('pages', $p['dict']([])) : $p['setattr'](self, 'pages', $p['dict']([]));
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('page_list', pages) : $p['setattr'](self, 'page_list', pages);
			}
			else if ($p['bool']($p['op_eq'](purpose, 'faq'))) {
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('faq_pages', $p['dict']([])) : $p['setattr'](self, 'faq_pages', $p['dict']([]));
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('faq_list', pages) : $p['setattr'](self, 'faq_list', pages);
			}
			$iter3_iter = pages;
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval).$nextval) != 'undefined') {
				l = $iter3_nextval.$nextval;
				title = l.__getitem__(0);
				desc = l.__getitem__(1);
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
	if ($p['bool']($p['op_eq']((typeof __name__ == "undefined"?$m.__name__:__name__), '__main__'))) {
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
