/* start module: gwt.ui.VerticalPanel */
$pyjs.loaded_modules['gwt.ui.VerticalPanel'] = function (__mod_name__) {
	if($pyjs.loaded_modules['gwt.ui.VerticalPanel'].__was_initialized__) return $pyjs.loaded_modules['gwt.ui.VerticalPanel'];
	if(typeof $pyjs.loaded_modules['gwt.ui'] == 'undefined' || !$pyjs.loaded_modules['gwt.ui'].__was_initialized__) $p['___import___']('gwt.ui', null);
	var $m = $pyjs.loaded_modules["gwt.ui.VerticalPanel"];
	$m.__repr__ = function() { return "<module: gwt.ui.VerticalPanel>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'gwt.ui.VerticalPanel';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['gwt.ui']['VerticalPanel'] = $pyjs.loaded_modules['gwt.ui.VerticalPanel'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'gwt.ui', null, false);
	$m['Factory'] = $p['___import___']('pyjamas.Factory', 'gwt.ui', null, false);
	$m['CellPanel'] = $p['___import___']('pyjamas.ui.CellPanel.CellPanel', 'gwt.ui', null, false);
	$m['HasHorizontalAlignment'] = $p['___import___']('pyjamas.ui.HasHorizontalAlignment', 'gwt.ui', null, false);
	$m['HasVerticalAlignment'] = $p['___import___']('pyjamas.ui.HasVerticalAlignment', 'gwt.ui', null, false);
	$m['VerticalPanel'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'gwt.ui.VerticalPanel';
		$method = $pyjs__bind_method2('insert', function(widget, beforeIndex) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
				beforeIndex = arguments[2];
			}
			var $attr1,$attr2,tr,$attr4,td,$attr3;
			widget['removeFromParent']();
			tr = $m['DOM']['createTR']();
			td = $m['DOM']['createTD']();
			$m['DOM']['insertChild'](self['getBody'](), tr, beforeIndex);
			$m['DOM']['appendChild'](tr, td);
			$m['CellPanel']['insert'](self, widget, td, beforeIndex);
			self['setCellHorizontalAlignment'](widget, (($attr1=($attr2=self)['horzAlign']) == null || (($attr2.__is_instance__) && typeof $attr1 == 'function') || (typeof $attr1['__get__'] == 'function')?
						$p['getattr']($attr2, 'horzAlign'):
						self['horzAlign']));
			self['setCellVerticalAlignment'](widget, (($attr3=($attr4=self)['vertAlign']) == null || (($attr4.__is_instance__) && typeof $attr3 == 'function') || (typeof $attr3['__get__'] == 'function')?
						$p['getattr']($attr4, 'vertAlign'):
						self['vertAlign']));
			return null;
		}
	, 1, [null,null,['self'],['widget'],['beforeIndex']]);
		$cls_definition['insert'] = $method;
		$method = $pyjs__bind_method2('remove', function(widget) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}
			var $eq2,$eq1,tr,$bool2,$bool1,td;
			if ((($bool1=$p['isinstance'](widget, $p['float_int'])) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				widget = self['getWidget'](widget);
			}
			if ((($bool2=!(($eq1=widget['getParent']())===($eq2=self)&&$eq1===null?true:
				($eq1===null?false:($eq2===null?false:
					((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1.__cmp__=='function'?$eq1.__cmp__($eq2) === 0:
						((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2.__cmp__=='function'?$eq2.__cmp__($eq1) === 0:
							$eq1==$eq2)))))) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
				return false;
			}
			td = $m['DOM']['getParent'](widget['getElement']());
			tr = $m['DOM']['getParent'](td);
			$m['DOM']['removeChild'](self['getBody'](), tr);
			$m['CellPanel']['remove'](self, widget);
			return true;
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['remove'] = $method;
		var $bases = new Array($m['CellPanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('VerticalPanel', $p['tuple']($bases), $data);
	})();
	$m['Factory']['registerClass']('pyjamas.ui.VerticalPanel', 'VerticalPanel', $m['VerticalPanel']);
	return this;
}; /* end gwt.ui.VerticalPanel */


/* end module: gwt.ui.VerticalPanel */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.ui.CellPanel.CellPanel', 'pyjamas.ui', 'pyjamas.ui.CellPanel', 'pyjamas.ui.HasHorizontalAlignment', 'pyjamas.ui.HasVerticalAlignment']
*/
