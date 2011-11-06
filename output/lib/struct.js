/* start module: struct */
$pyjs.loaded_modules['struct'] = function (__mod_name__) {
	if($pyjs.loaded_modules['struct'].__was_initialized__) return $pyjs.loaded_modules['struct'];
	var $m = $pyjs.loaded_modules["struct"];
	$m.__repr__ = function() { return "<module: struct>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'struct';
	$m.__name__ = __mod_name__;
	var $attr3,$attr1,$attr2,$attr4;

	$m['math'] = $p['___import___']('math', null);
	$m['sys'] = $p['___import___']('sys', null);
	$m['StructError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'struct';
		var $bases = new Array($p['Exception']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('StructError', $p['tuple']($bases), $data);
	})();
	$m['error'] = $m['StructError'];
	$m['unpack_int'] = function(data, index, size, le) {
		var $iter2_type,$iter2_iter,$eq2,$eq1,bytes,number,$iter2_nextval,$iter2_idx,$bool1,b,$iter2_array;
		bytes = function(){
			var $add2,b,$iter1_nextval,$iter1_type,$iter1_iter,$listcomp1,$add1,$iter1_array,$iter1_idx;
	$listcomp1 = $p['list']();
		$iter1_iter = $p['slice'](data, index, (typeof ($add1=index)==typeof ($add2=size) && (typeof $add1=='number'||typeof $add1=='string')?
			$add1+$add2:
			$p['op_add']($add1,$add2)));
		if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
			$iter1_type = 0;
		} else {
			$iter1_iter = $iter1_iter.__iter__();
			$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter1_idx = 0;
		while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
			b = $iter1_nextval;
			$listcomp1['append']($p['ord'](b));
		}

	return $listcomp1;}();
		if ((($bool1=(($eq1=le)===($eq2='little')&&$eq1===null?true:
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
			bytes['reverse']();
		}
		number = 0;
		$iter2_iter = bytes;
		if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
			$iter2_type = 0;
		} else {
			$iter2_iter = $iter2_iter.__iter__();
			$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter2_idx = 0;
		while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
			b = $iter2_nextval;
			number = ((number)<<(8))|(b);
		}
		return $p['float_int'](number);
	};
	$m['unpack_int'].__name__ = 'unpack_int';

	$m['unpack_int'].__bind_type__ = 0;
	$m['unpack_int'].__args__ = [null,null,['data'],['index'],['size'],['le']];
	$m['unpack_signed_int'] = function(data, index, size, le) {
		var number,$pow3,$pow2,$pow1,$sub3,$sub2,$sub1,$sub6,$sub5,$sub4,max,$bool2,$pow4,$mul6,$mul5,$mul4,$mul3,$mul2,$mul1,$cmp1,$cmp2;
		number = $m['unpack_int'](data, index, size, le);
		max = (typeof ($pow1=2)==typeof ($pow2=(typeof ($mul1=size)==typeof ($mul2=8) && typeof $mul1=='number'?
			$mul1*$mul2:
			$p['op_mul']($mul1,$mul2))) && typeof $pow1=='number'?
			Math.pow($pow1,$pow2):
			$p['op_pow']($pow1,$pow2));
		if ((($bool2=((($cmp1=number)===($cmp2=(typeof ($sub3=(typeof ($pow3=2)==typeof ($pow4=(typeof ($sub1=(typeof ($mul3=size)==typeof ($mul4=8) && typeof $mul3=='number'?
			$mul3*$mul4:
			$p['op_mul']($mul3,$mul4)))==typeof ($sub2=1) && (typeof $sub1=='number'||typeof $sub1=='string')?
			$sub1-$sub2:
			$p['op_sub']($sub1,$sub2))) && typeof $pow3=='number'?
			Math.pow($pow3,$pow4):
			$p['op_pow']($pow3,$pow4)))==typeof ($sub4=1) && (typeof $sub3=='number'||typeof $sub3=='string')?
			$sub3-$sub4:
			$p['op_sub']($sub3,$sub4)))?0:
			(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
				($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
				$p['cmp']($cmp1, $cmp2))) == 1)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
			number = $p['float_int']((typeof ($mul5=(typeof ($usub1=1)=='number'?
				-$usub1:
				$p['op_usub']($usub1)))==typeof ($mul6=(typeof ($sub5=max)==typeof ($sub6=number) && (typeof $sub5=='number'||typeof $sub5=='string')?
				$sub5-$sub6:
				$p['op_sub']($sub5,$sub6))) && typeof $mul5=='number'?
				$mul5*$mul6:
				$p['op_mul']($mul5,$mul6)));
		}
		return number;
	};
	$m['unpack_signed_int'].__name__ = 'unpack_signed_int';

	$m['unpack_signed_int'].__bind_type__ = 0;
	$m['unpack_signed_int'].__args__ = [null,null,['data'],['index'],['size'],['le']];
	$m['unpack_float'] = function(data, index, size, le) {
		var $sub22,$sub23,$sub20,$sub21,$8,$sub24,$mul8,$sub19,$sub14,sign,$div2,bias,$pow9,$iter4_type,$7,$eq10,$iter4_iter,$pow7,$pow5,number,$5,$sub18,$2,revbytes,$mul9,prec,$pow8,$sub13,$sub9,$sub8,$sub17,$sub12,$pow10,$sub7,$eq8,$eq9,$pow6,mantissa,$eq3,$sub11,$sub10,$eq6,$eq7,$eq4,$eq5,$bool3,$sub16,$bool6,$sub15,$bool4,$bool5,$mul7,$div3,$4,$div1,$3,$div4,$1,b,e,$mul10,$iter4_nextval,bytes,$6,$iter4_idx,$add5,$add6,$add7,exp,$len1,$iter4_array,$add10,$add8,$add9,$bool7;
		bytes = function(){
			var $iter3_idx,$iter3_nextval,$iter3_type,$add3,$listcomp2,$iter3_iter,$add4,$iter3_array,b;
	$listcomp2 = $p['list']();
		$iter3_iter = $p['slice'](data, index, (typeof ($add3=index)==typeof ($add4=size) && (typeof $add3=='number'||typeof $add3=='string')?
			$add3+$add4:
			$p['op_add']($add3,$add4)));
		if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
			$iter3_type = 0;
		} else {
			$iter3_iter = $iter3_iter.__iter__();
			$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter3_idx = 0;
		while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
			b = $iter3_nextval;
			$listcomp2['append']($p['ord'](b));
		}

	return $listcomp2;}();
		if ((($bool3=!(($eq3=(($len1=bytes) === null?0:
			(typeof $len1.__array != 'undefined' ? $len1.__array.length:
				(typeof $len1.__len__ == 'function'?$len1.__len__():
					(typeof $len1.length != 'undefined'?$len1.length:
						$p['len']($len1))))))===($eq4=size)&&$eq3===null?true:
			($eq3===null?false:($eq4===null?false:
				((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3.__cmp__=='function'?$eq3.__cmp__($eq4) === 0:
					((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4.__cmp__=='function'?$eq4.__cmp__($eq3) === 0:
						$eq3==$eq4)))))) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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

			var $pyjs__raise_expr1 = $m['StructError'];
			var $pyjs__raise_expr2 = 'Not enough data to unpack';
			if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
				throw $p['TypeError']('instance exception may not have a separate value');
			}
			if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
				throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
			} else {
				throw ($pyjs__raise_expr1($pyjs__raise_expr2));
			}

		}
		if ((($bool4=(($eq5=$p['max'](bytes))===($eq6=0)&&$eq5===null?true:
			($eq5===null?false:($eq6===null?false:
				((typeof $eq5=='object'||typeof $eq5=='function')&&typeof $eq5.__cmp__=='function'?$eq5.__cmp__($eq6) === 0:
					((typeof $eq6=='object'||typeof $eq6=='function')&&typeof $eq6.__cmp__=='function'?$eq6.__cmp__($eq5) === 0:
						$eq5==$eq6)))))) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
			return 0.0;
		}
		if ((($bool5=(($eq7=le)===($eq8='big')&&$eq7===null?true:
			($eq7===null?false:($eq8===null?false:
				((typeof $eq7=='object'||typeof $eq7=='function')&&typeof $eq7.__cmp__=='function'?$eq7.__cmp__($eq8) === 0:
					((typeof $eq8=='object'||typeof $eq8=='function')&&typeof $eq8.__cmp__=='function'?$eq8.__cmp__($eq7) === 0:
						$eq7==$eq8)))))) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
			bytes['reverse']();
		}
		if ((($bool6=(($eq9=size)===($eq10=4)&&$eq9===null?true:
			($eq9===null?false:($eq10===null?false:
				((typeof $eq9=='object'||typeof $eq9=='function')&&typeof $eq9.__cmp__=='function'?$eq9.__cmp__($eq10) === 0:
					((typeof $eq10=='object'||typeof $eq10=='function')&&typeof $eq10.__cmp__=='function'?$eq10.__cmp__($eq9) === 0:
						$eq9==$eq10)))))) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
			bias = 127;
			exp = 8;
			prec = 23;
		}
		else {
			bias = 1023;
			exp = 11;
			prec = 52;
		}
		mantissa = $p['float_int'](((typeof ($1=bytes).__array != 'undefined'?
			((typeof $1.__array[$2=(typeof ($sub7=size)==typeof ($sub8=2) && (typeof $sub7=='number'||typeof $sub7=='string')?
			$sub7-$sub8:
			$p['op_sub']($sub7,$sub8))]) != 'undefined'?$1.__array[$2]:
				$1.__getitem__($2)):
				$1.__getitem__((typeof ($sub7=size)==typeof ($sub8=2) && (typeof $sub7=='number'||typeof $sub7=='string')?
			$sub7-$sub8:
			$p['op_sub']($sub7,$sub8)))))&((typeof ($sub11=(typeof ($pow5=2)==typeof ($pow6=(typeof ($sub9=15)==typeof ($sub10=exp) && (typeof $sub9=='number'||typeof $sub9=='string')?
			$sub9-$sub10:
			$p['op_sub']($sub9,$sub10))) && typeof $pow5=='number'?
			Math.pow($pow5,$pow6):
			$p['op_pow']($pow5,$pow6)))==typeof ($sub12=1) && (typeof $sub11=='number'||typeof $sub11=='string')?
			$sub11-$sub12:
			$p['op_sub']($sub11,$sub12))));
		revbytes = bytes;
		revbytes['reverse']();
		$iter4_iter = $p['slice'](revbytes, 3, null);
		if (typeof ($iter4_array = $iter4_iter.__array) != 'undefined') {
			$iter4_type = 0;
		} else {
			$iter4_iter = $iter4_iter.__iter__();
			$iter4_type = typeof ($iter4_array = $iter4_iter.__array) != 'undefined'? 0 : (typeof $iter4_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter4_idx = 0;
		while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
			b = $iter4_nextval;
			mantissa = ((mantissa)<<(8))|(b);
		}
		mantissa = (typeof ($add5=1)==typeof ($add6=(typeof ($div1=(typeof ($mul7=1.0)==typeof ($mul8=mantissa) && typeof $mul7=='number'?
			$mul7*$mul8:
			$p['op_mul']($mul7,$mul8)))==typeof ($div2=(typeof ($pow7=2)==typeof ($pow8=prec) && typeof $pow7=='number'?
			Math.pow($pow7,$pow8):
			$p['op_pow']($pow7,$pow8))) && typeof $div1=='number' && $div2 !== 0?
			$div1/$div2:
			$p['op_div']($div1,$div2))) && (typeof $add5=='number'||typeof $add5=='string')?
			$add5+$add6:
			$p['op_add']($add5,$add6));
		mantissa = (typeof ($div3=mantissa)==typeof ($div4=2) && typeof $div3=='number' && $div4 !== 0?
			$div3/$div4:
			$p['op_div']($div3,$div4));
		e = (((typeof ($3=bytes).__array != 'undefined'?
			((typeof $3.__array[$4=(typeof ($usub2=1)=='number'?
			-$usub2:
			$p['op_usub']($usub2))]) != 'undefined'?$3.__array[$4]:
				$3.__getitem__($4)):
				$3.__getitem__((typeof ($usub2=1)=='number'?
			-$usub2:
			$p['op_usub']($usub2)))))&(127))<<((typeof ($sub13=exp)==typeof ($sub14=7) && (typeof $sub13=='number'||typeof $sub13=='string')?
			$sub13-$sub14:
			$p['op_sub']($sub13,$sub14)));
		e = (typeof ($add7=e)==typeof ($add8=(((typeof ($5=bytes).__array != 'undefined'?
			((typeof $5.__array[$6=(typeof ($sub15=size)==typeof ($sub16=2) && (typeof $sub15=='number'||typeof $sub15=='string')?
			$sub15-$sub16:
			$p['op_sub']($sub15,$sub16))]) != 'undefined'?$5.__array[$6]:
				$5.__getitem__($6)):
				$5.__getitem__((typeof ($sub15=size)==typeof ($sub16=2) && (typeof $sub15=='number'||typeof $sub15=='string')?
			$sub15-$sub16:
			$p['op_sub']($sub15,$sub16)))))>>((typeof ($sub17=15)==typeof ($sub18=exp) && (typeof $sub17=='number'||typeof $sub17=='string')?
			$sub17-$sub18:
			$p['op_sub']($sub17,$sub18))))&((typeof ($sub21=(typeof ($pow9=2)==typeof ($pow10=(typeof ($sub19=exp)==typeof ($sub20=7) && (typeof $sub19=='number'||typeof $sub19=='string')?
			$sub19-$sub20:
			$p['op_sub']($sub19,$sub20))) && typeof $pow9=='number'?
			Math.pow($pow9,$pow10):
			$p['op_pow']($pow9,$pow10)))==typeof ($sub22=1) && (typeof $sub21=='number'||typeof $sub21=='string')?
			$sub21-$sub22:
			$p['op_sub']($sub21,$sub22)))) && (typeof $add7=='number'||typeof $add7=='string')?
			$add7+$add8:
			$p['op_add']($add7,$add8));
		e = (typeof ($sub23=e)==typeof ($sub24=bias) && (typeof $sub23=='number'||typeof $sub23=='string')?
			$sub23-$sub24:
			$p['op_sub']($sub23,$sub24));
		e = (typeof ($add9=e)==typeof ($add10=1) && (typeof $add9=='number'||typeof $add9=='string')?
			$add9+$add10:
			$p['op_add']($add9,$add10));
		sign = ((typeof ($7=bytes).__array != 'undefined'?
			((typeof $7.__array[$8=(typeof ($usub3=1)=='number'?
			-$usub3:
			$p['op_usub']($usub3))]) != 'undefined'?$7.__array[$8]:
				$7.__getitem__($8)):
				$7.__getitem__((typeof ($usub3=1)=='number'?
			-$usub3:
			$p['op_usub']($usub3)))))&(128);
		number = $m['math']['ldexp'](mantissa, e);
		if ((($bool7=sign) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
			number = (typeof ($mul9=number)==typeof ($mul10=(typeof ($usub4=1)=='number'?
				-$usub4:
				$p['op_usub']($usub4))) && typeof $mul9=='number'?
				$mul9*$mul10:
				$p['op_mul']($mul9,$mul10));
		}
		return number;
	};
	$m['unpack_float'].__name__ = 'unpack_float';

	$m['unpack_float'].__bind_type__ = 0;
	$m['unpack_float'].__args__ = [null,null,['data'],['index'],['size'],['le']];
	$m['unpack_char'] = function(data, index, size, le) {
		var $add11,$add12;
		return $p['slice'](data, index, (typeof ($add11=index)==typeof ($add12=size) && (typeof $add11=='number'||typeof $add11=='string')?
			$add11+$add12:
			$p['op_add']($add11,$add12)));
	};
	$m['unpack_char'].__name__ = 'unpack_char';

	$m['unpack_char'].__bind_type__ = 0;
	$m['unpack_char'].__args__ = [null,null,['data'],['index'],['size'],['le']];
	$m['pack_int'] = function(number, size, le) {
		var $iter5_nextval,$iter5_idx,$iter5_array,res,$eq11,i,$iter5_iter,$iter5_type,x,$eq12,$bool8;
		x = number;
		res = $p['list']([]);
		$iter5_iter = $p['range'](size);
		if (typeof ($iter5_array = $iter5_iter.__array) != 'undefined') {
			$iter5_type = 0;
		} else {
			$iter5_iter = $iter5_iter.__iter__();
			$iter5_type = typeof ($iter5_array = $iter5_iter.__array) != 'undefined'? 0 : (typeof $iter5_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter5_idx = 0;
		while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):$p['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
			i = $iter5_nextval;
			res['append']($p['chr']((x)&(255)));
			x >>= 8;
		}
		if ((($bool8=(($eq11=le)===($eq12='big')&&$eq11===null?true:
			($eq11===null?false:($eq12===null?false:
				((typeof $eq11=='object'||typeof $eq11=='function')&&typeof $eq11.__cmp__=='function'?$eq11.__cmp__($eq12) === 0:
					((typeof $eq12=='object'||typeof $eq12=='function')&&typeof $eq12.__cmp__=='function'?$eq12.__cmp__($eq11) === 0:
						$eq11==$eq12)))))) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
			res['reverse']();
		}
		return ''['join'](res);
	};
	$m['pack_int'].__name__ = 'pack_int';

	$m['pack_int'].__bind_type__ = 0;
	$m['pack_int'].__args__ = [null,null,['number'],['size'],['le']];
	$m['pack_signed_int'] = function(number, size, le) {
		var $sub26,$sub27,$sub25,$bool10,$bool11,$sub28,$sub29,$pow14,$pow13,$pow12,$pow11,$bool12,$sub30,$or1,$or2,$cmp6,$cmp3,$bool9,$cmp5,$cmp4,$mul15,$mul14,$mul13,$mul12,$mul11,$mul16;
		if ((($bool10=!(($bool9=$p['isinstance'](number, $p['tuple']([$p['float_int'], $p['float_int']]))) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
			false :
			(typeof $bool9=='object'?
				(typeof $bool9.__nonzero__=='function'?
					$bool9.__nonzero__() :
					(typeof $bool9.__len__=='function'?
						($bool9.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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

			var $pyjs__raise_expr1 = $m['StructError'];
			var $pyjs__raise_expr2 = 'argument for i,I,l,L,q,Q,h,H must be integer';
			if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
				throw $p['TypeError']('instance exception may not have a separate value');
			}
			if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
				throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
			} else {
				throw ($pyjs__raise_expr1($pyjs__raise_expr2));
			}

		}
		if ((($bool12=((($bool11=$or1=((($cmp3=number)===($cmp4=(typeof ($sub27=(typeof ($pow11=2)==typeof ($pow12=(typeof ($sub25=(typeof ($mul11=8)==typeof ($mul12=size) && typeof $mul11=='number'?
			$mul11*$mul12:
			$p['op_mul']($mul11,$mul12)))==typeof ($sub26=1) && (typeof $sub25=='number'||typeof $sub25=='string')?
			$sub25-$sub26:
			$p['op_sub']($sub25,$sub26))) && typeof $pow11=='number'?
			Math.pow($pow11,$pow12):
			$p['op_pow']($pow11,$pow12)))==typeof ($sub28=1) && (typeof $sub27=='number'||typeof $sub27=='string')?
			$sub27-$sub28:
			$p['op_sub']($sub27,$sub28)))?0:
			(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
				($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
				$p['cmp']($cmp3, $cmp4))) == 1)) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
			false :
			(typeof $bool11=='object'?
				(typeof $bool11.__nonzero__=='function'?
					$bool11.__nonzero__() :
					(typeof $bool11.__len__=='function'?
						($bool11.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )?$or1:((($cmp5=number)===($cmp6=(typeof ($mul15=(typeof ($usub5=1)=='number'?
			-$usub5:
			$p['op_usub']($usub5)))==typeof ($mul16=(typeof ($pow13=2)==typeof ($pow14=(typeof ($sub29=(typeof ($mul13=8)==typeof ($mul14=size) && typeof $mul13=='number'?
			$mul13*$mul14:
			$p['op_mul']($mul13,$mul14)))==typeof ($sub30=1) && (typeof $sub29=='number'||typeof $sub29=='string')?
			$sub29-$sub30:
			$p['op_sub']($sub29,$sub30))) && typeof $pow13=='number'?
			Math.pow($pow13,$pow14):
			$p['op_pow']($pow13,$pow14))) && typeof $mul15=='number'?
			$mul15*$mul16:
			$p['op_mul']($mul15,$mul16)))?0:
			(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
				($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
				$p['cmp']($cmp5, $cmp6))) == -1))) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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

			var $pyjs__raise_expr1 = (typeof OverflowError == "undefined"?$m.OverflowError:OverflowError);
			var $pyjs__raise_expr2 = $p['sprintf']('Number:%i too large to convert', number);
			if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
				throw $p['TypeError']('instance exception may not have a separate value');
			}
			if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
				throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
			} else {
				throw ($pyjs__raise_expr1($pyjs__raise_expr2));
			}

		}
		return $m['pack_int'](number, size, le);
	};
	$m['pack_signed_int'].__name__ = 'pack_signed_int';

	$m['pack_signed_int'].__bind_type__ = 0;
	$m['pack_signed_int'].__args__ = [null,null,['number'],['size'],['le']];
	$m['pack_unsigned_int'] = function(number, size, le) {
		var $mul17,$sub31,$cmp7,$cmp9,$bool13,$bool14,$bool16,$cmp8,$bool15,$cmp10,$pow16,$pow15,$mul18,$sub32;
		if ((($bool14=!(($bool13=$p['isinstance'](number, $p['tuple']([$p['float_int'], $p['float_int']]))) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
			false :
			(typeof $bool13=='object'?
				(typeof $bool13.__nonzero__=='function'?
					$bool13.__nonzero__() :
					(typeof $bool13.__len__=='function'?
						($bool13.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
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

			var $pyjs__raise_expr1 = $m['StructError'];
			var $pyjs__raise_expr2 = 'argument for i,I,l,L,q,Q,h,H must be integer';
			if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
				throw $p['TypeError']('instance exception may not have a separate value');
			}
			if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
				throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
			} else {
				throw ($pyjs__raise_expr1($pyjs__raise_expr2));
			}

		}
		if ((($bool15=((($cmp7=number)===($cmp8=0)?0:
			(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
				($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
				$p['cmp']($cmp7, $cmp8))) == -1)) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
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

			var $pyjs__raise_expr1 = $p['TypeError'];
			var $pyjs__raise_expr2 = 'can\x27t convert negative long to unsigned';
			if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
				throw $p['TypeError']('instance exception may not have a separate value');
			}
			if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
				throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
			} else {
				throw ($pyjs__raise_expr1($pyjs__raise_expr2));
			}

		}
		if ((($bool16=((($cmp9=number)===($cmp10=(typeof ($sub31=(typeof ($pow15=2)==typeof ($pow16=(typeof ($mul17=8)==typeof ($mul18=size) && typeof $mul17=='number'?
			$mul17*$mul18:
			$p['op_mul']($mul17,$mul18))) && typeof $pow15=='number'?
			Math.pow($pow15,$pow16):
			$p['op_pow']($pow15,$pow16)))==typeof ($sub32=1) && (typeof $sub31=='number'||typeof $sub31=='string')?
			$sub31-$sub32:
			$p['op_sub']($sub31,$sub32)))?0:
			(typeof $cmp9==typeof $cmp10 && ((typeof $cmp9 == 'number')||(typeof $cmp9 == 'string')||(typeof $cmp9 == 'boolean'))?
				($cmp9 == $cmp10 ? 0 : ($cmp9 < $cmp10 ? -1 : 1)):
				$p['cmp']($cmp9, $cmp10))) == 1)) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
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

			var $pyjs__raise_expr1 = (typeof OverflowError == "undefined"?$m.OverflowError:OverflowError);
			var $pyjs__raise_expr2 = $p['sprintf']('Number:%i too large to convert', number);
			if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
				throw $p['TypeError']('instance exception may not have a separate value');
			}
			if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
				throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
			} else {
				throw ($pyjs__raise_expr1($pyjs__raise_expr2));
			}

		}
		return $m['pack_int'](number, size, le);
	};
	$m['pack_unsigned_int'].__name__ = 'pack_unsigned_int';

	$m['pack_unsigned_int'].__bind_type__ = 0;
	$m['pack_unsigned_int'].__args__ = [null,null,['number'],['size'],['le']];
	$m['pack_char'] = function($$char, size, le) {
		var $$char;
		return $p['str']($$char);
	};
	$m['pack_char'].__name__ = 'pack_char';

	$m['pack_char'].__bind_type__ = 0;
	$m['pack_char'].__args__ = [null,null,['$$char'],['size'],['le']];
	$m['sane_float'] = function(man, e) {

		return true;
	};
	$m['sane_float'].__name__ = 'sane_float';

	$m['sane_float'].__bind_type__ = 0;
	$m['sane_float'].__args__ = [null,null,['man'],['e']];
	$m['pack_float'] = function(number, size, le) {
		var $bool18,$bool19,$pow20,$sub44,$iter6_type,$add13,$bool17,$sub48,$sub40,bias,$sub47,$pow19,$pow18,$pow17,$sub41,$iter6_iter,$eq13,$eq14,$eq15,$eq16,$sub38,$sub37,$bool24,res,$sub50,prec,$sub45,$sub39,$sub46,$bool21,$bool20,$bool23,$bool22,$mul24,$iter6_nextval,$mul22,$mul23,$mul20,$mul21,$eq17,$sub33,$sub35,$sub34,$iter6_idx,$sub36,mantissa,$and1,$and2,$sub49,$cmp15,$cmp14,$add16,$cmp16,$cmp11,$cmp13,$cmp12,sign,$add18,man,$add14,e,$pow21,$add15,i,$eq18,$iter6_array,$mul19,$sub43,$add17,exp,$pow22,$sub42;
		if ((($bool17=((($cmp11=number)===($cmp12=0)?0:
			(typeof $cmp11==typeof $cmp12 && ((typeof $cmp11 == 'number')||(typeof $cmp11 == 'string')||(typeof $cmp11 == 'boolean'))?
				($cmp11 == $cmp12 ? 0 : ($cmp11 < $cmp12 ? -1 : 1)):
				$p['cmp']($cmp11, $cmp12))) == -1)) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
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
			sign = 1;
			number = (typeof ($mul19=number)==typeof ($mul20=(typeof ($usub6=1)=='number'?
				-$usub6:
				$p['op_usub']($usub6))) && typeof $mul19=='number'?
				$mul19*$mul20:
				$p['op_mul']($mul19,$mul20));
		}
		else if ((($bool18=(($eq13=number)===($eq14=0.0)&&$eq13===null?true:
			($eq13===null?false:($eq14===null?false:
				((typeof $eq13=='object'||typeof $eq13=='function')&&typeof $eq13.__cmp__=='function'?$eq13.__cmp__($eq14) === 0:
					((typeof $eq14=='object'||typeof $eq14=='function')&&typeof $eq14.__cmp__=='function'?$eq14.__cmp__($eq13) === 0:
						$eq13==$eq14)))))) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
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
			return ''['ljust'](size, '\x00');
		}
		else {
			sign = 0;
		}
		if ((($bool19=(($eq15=size)===($eq16=4)&&$eq15===null?true:
			($eq15===null?false:($eq16===null?false:
				((typeof $eq15=='object'||typeof $eq15=='function')&&typeof $eq15.__cmp__=='function'?$eq15.__cmp__($eq16) === 0:
					((typeof $eq16=='object'||typeof $eq16=='function')&&typeof $eq16.__cmp__=='function'?$eq16.__cmp__($eq15) === 0:
						$eq15==$eq16)))))) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
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
			bias = 127;
			exp = 8;
			prec = 23;
		}
		else {
			bias = 1023;
			exp = 11;
			prec = 52;
		}
		var $tupleassign1 = $m['math']['frexp'](number);
		man = $tupleassign1.__getitem__(0);
		e = $tupleassign1.__getitem__(1);
		if ((($bool21=((($bool20=$and1=((($cmp13=0.5)===($cmp14=man)?0:
			(typeof $cmp13==typeof $cmp14 && ((typeof $cmp13 == 'number')||(typeof $cmp13 == 'string')||(typeof $cmp13 == 'boolean'))?
				($cmp13 == $cmp14 ? 0 : ($cmp13 < $cmp14 ? -1 : 1)):
				$p['cmp']($cmp13, $cmp14))) < 1)) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
			false :
			(typeof $bool20=='object'?
				(typeof $bool20.__nonzero__=='function'?
					$bool20.__nonzero__() :
					(typeof $bool20.__len__=='function'?
						($bool20.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )?((($cmp15=man)===($cmp16=1.0)?0:
			(typeof $cmp15==typeof $cmp16 && ((typeof $cmp15 == 'number')||(typeof $cmp15 == 'string')||(typeof $cmp15 == 'boolean'))?
				($cmp15 == $cmp16 ? 0 : ($cmp15 < $cmp16 ? -1 : 1)):
				$p['cmp']($cmp15, $cmp16))) == -1):$and1)) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
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
			man = (typeof ($mul21=man)==typeof ($mul22=2) && typeof $mul21=='number'?
				$mul21*$mul22:
				$p['op_mul']($mul21,$mul22));
			e = (typeof ($sub33=e)==typeof ($sub34=1) && (typeof $sub33=='number'||typeof $sub33=='string')?
				$sub33-$sub34:
				$p['op_sub']($sub33,$sub34));
		}
		if ((($bool22=$m['sane_float'](man, e)) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
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
			man = (typeof ($sub35=man)==typeof ($sub36=1) && (typeof $sub35=='number'||typeof $sub35=='string')?
				$sub35-$sub36:
				$p['op_sub']($sub35,$sub36));
			e = (typeof ($add13=e)==typeof ($add14=bias) && (typeof $add13=='number'||typeof $add13=='string')?
				$add13+$add14:
				$p['op_add']($add13,$add14));
			mantissa = $p['float_int']((typeof ($add15=(typeof ($mul23=(typeof ($pow17=2)==typeof ($pow18=prec) && typeof $pow17=='number'?
				Math.pow($pow17,$pow18):
				$p['op_pow']($pow17,$pow18)))==typeof ($mul24=man) && typeof $mul23=='number'?
				$mul23*$mul24:
				$p['op_mul']($mul23,$mul24)))==typeof ($add16=0.5) && (typeof $add15=='number'||typeof $add15=='string')?
				$add15+$add16:
				$p['op_add']($add15,$add16)));
			res = $p['list']([]);
			if ((($bool23=(mantissa)>>(prec)) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
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
				mantissa = 0;
				e = (typeof ($add17=e)==typeof ($add18=1) && (typeof $add17=='number'||typeof $add17=='string')?
					$add17+$add18:
					$p['op_add']($add17,$add18));
			}
			$iter6_iter = $p['range']((typeof ($sub37=size)==typeof ($sub38=2) && (typeof $sub37=='number'||typeof $sub37=='string')?
				$sub37-$sub38:
				$p['op_sub']($sub37,$sub38)));
			if (typeof ($iter6_array = $iter6_iter.__array) != 'undefined') {
				$iter6_type = 0;
			} else {
				$iter6_iter = $iter6_iter.__iter__();
				$iter6_type = typeof ($iter6_array = $iter6_iter.__array) != 'undefined'? 0 : (typeof $iter6_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter6_idx = 0;
			while (typeof ($iter6_nextval=($iter6_type?($iter6_type > 0?$iter6_iter.next(true,false):$p['wrapped_next']($iter6_iter)):$iter6_array[$iter6_idx++])) != 'undefined') {
				i = $iter6_nextval;
				res['extend']($p['list']([(mantissa)&(255)]));
				mantissa >>= 8;
			}
			res['extend']($p['list']([((mantissa)&((typeof ($sub41=(typeof ($pow19=2)==typeof ($pow20=(typeof ($sub39=15)==typeof ($sub40=exp) && (typeof $sub39=='number'||typeof $sub39=='string')?
				$sub39-$sub40:
				$p['op_sub']($sub39,$sub40))) && typeof $pow19=='number'?
				Math.pow($pow19,$pow20):
				$p['op_pow']($pow19,$pow20)))==typeof ($sub42=1) && (typeof $sub41=='number'||typeof $sub41=='string')?
				$sub41-$sub42:
				$p['op_sub']($sub41,$sub42))))|(((e)&((typeof ($sub45=(typeof ($pow21=2)==typeof ($pow22=(typeof ($sub43=exp)==typeof ($sub44=7) && (typeof $sub43=='number'||typeof $sub43=='string')?
				$sub43-$sub44:
				$p['op_sub']($sub43,$sub44))) && typeof $pow21=='number'?
				Math.pow($pow21,$pow22):
				$p['op_pow']($pow21,$pow22)))==typeof ($sub46=1) && (typeof $sub45=='number'||typeof $sub45=='string')?
				$sub45-$sub46:
				$p['op_sub']($sub45,$sub46))))<<((typeof ($sub47=15)==typeof ($sub48=exp) && (typeof $sub47=='number'||typeof $sub47=='string')?
				$sub47-$sub48:
				$p['op_sub']($sub47,$sub48))))]));
			res['extend']($p['list']([((sign)<<(7))|((e)>>((typeof ($sub49=exp)==typeof ($sub50=7) && (typeof $sub49=='number'||typeof $sub49=='string')?
				$sub49-$sub50:
				$p['op_sub']($sub49,$sub50))))]));
			if ((($bool24=(($eq17=le)===($eq18='big')&&$eq17===null?true:
				($eq17===null?false:($eq18===null?false:
					((typeof $eq17=='object'||typeof $eq17=='function')&&typeof $eq17.__cmp__=='function'?$eq17.__cmp__($eq18) === 0:
						((typeof $eq18=='object'||typeof $eq18=='function')&&typeof $eq18.__cmp__=='function'?$eq18.__cmp__($eq17) === 0:
							$eq17==$eq18)))))) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
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
				res['reverse']();
			}
			return ''['join'](function(){
				var $iter7_nextval,$iter7_iter,$iter7_array,$listcomp3,$iter7_idx,x,$iter7_type;
	$listcomp3 = $p['list']();
			$iter7_iter = res;
			if (typeof ($iter7_array = $iter7_iter.__array) != 'undefined') {
				$iter7_type = 0;
			} else {
				$iter7_iter = $iter7_iter.__iter__();
				$iter7_type = typeof ($iter7_array = $iter7_iter.__array) != 'undefined'? 0 : (typeof $iter7_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter7_idx = 0;
			while (typeof ($iter7_nextval=($iter7_type?($iter7_type > 0?$iter7_iter.next(true,false):$p['wrapped_next']($iter7_iter)):$iter7_array[$iter7_idx++])) != 'undefined') {
				x = $iter7_nextval;
				$listcomp3['append']($p['chr'](x));
			}

	return $listcomp3;}());
		}
		return null;
	};
	$m['pack_float'].__name__ = 'pack_float';

	$m['pack_float'].__bind_type__ = 0;
	$m['pack_float'].__args__ = [null,null,['number'],['size'],['le']];
	$m['big_endian_format'] = $p['dict']([['x', $p['dict']([['size', 1], ['alignment', 0], ['pack', null], ['unpack', null]])], ['b', $p['dict']([['size', 1], ['alignment', 0], ['pack', $m['pack_signed_int']], ['unpack', $m['unpack_signed_int']]])], ['B', $p['dict']([['size', 1], ['alignment', 0], ['pack', $m['pack_unsigned_int']], ['unpack', $m['unpack_int']]])], ['c', $p['dict']([['size', 1], ['alignment', 0], ['pack', $m['pack_char']], ['unpack', $m['unpack_char']]])], ['s', $p['dict']([['size', 1], ['alignment', 0], ['pack', null], ['unpack', null]])], ['p', $p['dict']([['size', 1], ['alignment', 0], ['pack', null], ['unpack', null]])], ['h', $p['dict']([['size', 2], ['alignment', 0], ['pack', $m['pack_signed_int']], ['unpack', $m['unpack_signed_int']]])], ['H', $p['dict']([['size', 2], ['alignment', 0], ['pack', $m['pack_unsigned_int']], ['unpack', $m['unpack_int']]])], ['i', $p['dict']([['size', 4], ['alignment', 0], ['pack', $m['pack_signed_int']], ['unpack', $m['unpack_signed_int']]])], ['I', $p['dict']([['size', 4], ['alignment', 0], ['pack', $m['pack_unsigned_int']], ['unpack', $m['unpack_int']]])], ['l', $p['dict']([['size', 4], ['alignment', 0], ['pack', $m['pack_signed_int']], ['unpack', $m['unpack_signed_int']]])], ['L', $p['dict']([['size', 4], ['alignment', 0], ['pack', $m['pack_unsigned_int']], ['unpack', $m['unpack_int']]])], ['q', $p['dict']([['size', 8], ['alignment', 0], ['pack', $m['pack_signed_int']], ['unpack', $m['unpack_signed_int']]])], ['Q', $p['dict']([['size', 8], ['alignment', 0], ['pack', $m['pack_unsigned_int']], ['unpack', $m['unpack_int']]])], ['f', $p['dict']([['size', 4], ['alignment', 0], ['pack', $m['pack_float']], ['unpack', $m['unpack_float']]])], ['d', $p['dict']([['size', 8], ['alignment', 0], ['pack', $m['pack_float']], ['unpack', $m['unpack_float']]])]]);
	$m['$$default'] = $m['big_endian_format'];
	$m['formatmode'] = $p['dict']([['\x3C', $p['tuple']([$m['$$default'], 'little'])], ['\x3E', $p['tuple']([$m['$$default'], 'big'])], ['!', $p['tuple']([$m['$$default'], 'big'])], ['=', $p['tuple']([$m['$$default'], (($attr1=($attr2=$m['sys'])['byteorder']) == null || (($attr2.__is_instance__) && typeof $attr1 == 'function') || (typeof $attr1['__get__'] == 'function')?
				$p['getattr']($attr2, 'byteorder'):
				$m['sys']['byteorder'])])], ['@', $p['tuple']([$m['$$default'], (($attr3=($attr4=$m['sys'])['byteorder']) == null || (($attr4.__is_instance__) && typeof $attr3 == 'function') || (typeof $attr3['__get__'] == 'function')?
				$p['getattr']($attr4, 'byteorder'):
				$m['sys']['byteorder'])])]]);
	$m['getmode'] = function(fmt) {
		var $14,index,$10,$11,$12,$13,$pyjs_try_err,endianness,$9,formatdef;
		try {
			var $tupleassign2 = (typeof ($11=$m['formatmode']).__array != 'undefined'?
				((typeof $11.__array[$12=(typeof ($9=fmt).__array != 'undefined'?
				((typeof $9.__array[$10=0]) != 'undefined'?$9.__array[$10]:
					$9.__getitem__($10)):
					$9.__getitem__(0))]) != 'undefined'?$11.__array[$12]:
					$11.__getitem__($12)):
					$11.__getitem__((typeof ($9=fmt).__array != 'undefined'?
				((typeof $9.__array[$10=0]) != 'undefined'?$9.__array[$10]:
					$9.__getitem__($10)):
					$9.__getitem__(0))));
			formatdef = $tupleassign2.__getitem__(0);
			endianness = $tupleassign2.__getitem__(1);
			index = 1;
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
			$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
			if (($pyjs_try_err_name == $p['KeyError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['KeyError'])) {
				var $tupleassign3 = (typeof ($13=$m['formatmode']).__array != 'undefined'?
					((typeof $13.__array[$14='@']) != 'undefined'?$13.__array[$14]:
						$13.__getitem__($14)):
						$13.__getitem__('@'));
				formatdef = $tupleassign3.__getitem__(0);
				endianness = $tupleassign3.__getitem__(1);
				index = 0;
			} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
		}
		return $p['tuple']([formatdef, endianness, index]);
	};
	$m['getmode'].__name__ = 'getmode';

	$m['getmode'].__bind_type__ = 0;
	$m['getmode'].__args__ = [null,null,['fmt']];
	$m['getNum'] = function(fmt, i) {
		var $cmp20,$eq19,num,cur,$add21,$add20,$add22,$cmp18,$bool25,$bool27,$bool26,$mul26,$mul25,$and3,$and4,$eq20,$cmp17,$cmp19,$add19,$15,$16,$17,$18;
		num = null;
		cur = (typeof ($15=fmt).__array != 'undefined'?
			((typeof $15.__array[$16=i]) != 'undefined'?$15.__array[$16]:
				$15.__getitem__($16)):
				$15.__getitem__(i));
		while ((($bool26=((($bool25=$and3=((($cmp17='0')===($cmp18=cur)?0:
			(typeof $cmp17==typeof $cmp18 && ((typeof $cmp17 == 'number')||(typeof $cmp17 == 'string')||(typeof $cmp17 == 'boolean'))?
				($cmp17 == $cmp18 ? 0 : ($cmp17 < $cmp18 ? -1 : 1)):
				$p['cmp']($cmp17, $cmp18))) < 1)) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
			false :
			(typeof $bool25=='object'?
				(typeof $bool25.__nonzero__=='function'?
					$bool25.__nonzero__() :
					(typeof $bool25.__len__=='function'?
						($bool25.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )?((($cmp19=cur)===($cmp20='9')?0:
			(typeof $cmp19==typeof $cmp20 && ((typeof $cmp19 == 'number')||(typeof $cmp19 == 'string')||(typeof $cmp19 == 'boolean'))?
				($cmp19 == $cmp20 ? 0 : ($cmp19 < $cmp20 ? -1 : 1)):
				$p['cmp']($cmp19, $cmp20))) < 1):$and3)) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
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
			if ((($bool27=(($eq19=num)===($eq20=null)&&$eq19===null?true:
				($eq19===null?false:($eq20===null?false:
					((typeof $eq19=='object'||typeof $eq19=='function')&&typeof $eq19.__cmp__=='function'?$eq19.__cmp__($eq20) === 0:
						((typeof $eq20=='object'||typeof $eq20=='function')&&typeof $eq20.__cmp__=='function'?$eq20.__cmp__($eq19) === 0:
							$eq19==$eq20)))))) === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
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
				num = $p['float_int'](cur);
			}
			else {
				num = (typeof ($add19=(typeof ($mul25=10)==typeof ($mul26=num) && typeof $mul25=='number'?
					$mul25*$mul26:
					$p['op_mul']($mul25,$mul26)))==typeof ($add20=$p['float_int'](cur)) && (typeof $add19=='number'||typeof $add19=='string')?
					$add19+$add20:
					$p['op_add']($add19,$add20));
			}
			i = (typeof ($add21=i)==typeof ($add22=1) && (typeof $add21=='number'||typeof $add21=='string')?
				$add21+$add22:
				$p['op_add']($add21,$add22));
			cur = (typeof ($17=fmt).__array != 'undefined'?
				((typeof $17.__array[$18=i]) != 'undefined'?$17.__array[$18]:
					$17.__getitem__($18)):
					$17.__getitem__(i));
		}
		return $p['tuple']([num, i]);
	};
	$m['getNum'].__name__ = 'getNum';

	$m['getNum'].__bind_type__ = 0;
	$m['getNum'].__args__ = [null,null,['fmt'],['i']];
	$m['calcsize'] = function(fmt) {
		var $add25,$add24,$cmp21,$cmp22,num,result,$add26,$add23,$add28,cur,$21,$20,$22,$25,$24,$add27,$26,$pyjs_try_err,endianness,$mul27,$bool29,$bool28,$mul28,format,$eq21,$eq22,formatdef,i,$19,$len2,$23;
		var $tupleassign4 = $m['getmode'](fmt);
		formatdef = $tupleassign4.__getitem__(0);
		endianness = $tupleassign4.__getitem__(1);
		i = $tupleassign4.__getitem__(2);
		num = 0;
		result = 0;
		while ((($bool28=((($cmp21=i)===($cmp22=(($len2=fmt) === null?0:
			(typeof $len2.__array != 'undefined' ? $len2.__array.length:
				(typeof $len2.__len__ == 'function'?$len2.__len__():
					(typeof $len2.length != 'undefined'?$len2.length:
						$p['len']($len2))))))?0:
			(typeof $cmp21==typeof $cmp22 && ((typeof $cmp21 == 'number')||(typeof $cmp21 == 'string')||(typeof $cmp21 == 'boolean'))?
				($cmp21 == $cmp22 ? 0 : ($cmp21 < $cmp22 ? -1 : 1)):
				$p['cmp']($cmp21, $cmp22))) == -1)) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
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
			var $tupleassign5 = $m['getNum'](fmt, i);
			num = $tupleassign5.__getitem__(0);
			i = $tupleassign5.__getitem__(1);
			cur = (typeof ($19=fmt).__array != 'undefined'?
				((typeof $19.__array[$20=i]) != 'undefined'?$19.__array[$20]:
					$19.__getitem__($20)):
					$19.__getitem__(i));
			try {
				format = (typeof ($21=formatdef).__array != 'undefined'?
					((typeof $21.__array[$22=cur]) != 'undefined'?$21.__array[$22]:
						$21.__getitem__($22)):
						$21.__getitem__(cur));
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (($pyjs_try_err_name == $p['KeyError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['KeyError'])) {

					var $pyjs__raise_expr1 = $m['StructError'];
					var $pyjs__raise_expr2 = $p['sprintf']('%s is not a valid format', cur);
					if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
						throw $p['TypeError']('instance exception may not have a separate value');
					}
					if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
						throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
					} else {
						throw ($pyjs__raise_expr1($pyjs__raise_expr2));
					}

				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			}
			if ((($bool29=!(($eq21=num)===($eq22=null)&&$eq21===null?true:
				($eq21===null?false:($eq22===null?false:
					((typeof $eq21=='object'||typeof $eq21=='function')&&typeof $eq21.__cmp__=='function'?$eq21.__cmp__($eq22) === 0:
						((typeof $eq22=='object'||typeof $eq22=='function')&&typeof $eq22.__cmp__=='function'?$eq22.__cmp__($eq21) === 0:
							$eq21==$eq22)))))) === null || $bool29 === false || $bool29 === 0 || $bool29 === '' ?
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
				result = (typeof ($add23=result)==typeof ($add24=(typeof ($mul27=num)==typeof ($mul28=(typeof ($23=format).__array != 'undefined'?
					((typeof $23.__array[$24='size']) != 'undefined'?$23.__array[$24]:
						$23.__getitem__($24)):
						$23.__getitem__('size'))) && typeof $mul27=='number'?
					$mul27*$mul28:
					$p['op_mul']($mul27,$mul28))) && (typeof $add23=='number'||typeof $add23=='string')?
					$add23+$add24:
					$p['op_add']($add23,$add24));
			}
			else {
				result = (typeof ($add25=result)==typeof ($add26=(typeof ($25=format).__array != 'undefined'?
					((typeof $25.__array[$26='size']) != 'undefined'?$25.__array[$26]:
						$25.__getitem__($26)):
						$25.__getitem__('size'))) && (typeof $add25=='number'||typeof $add25=='string')?
					$add25+$add26:
					$p['op_add']($add25,$add26));
			}
			num = 0;
			i = (typeof ($add27=i)==typeof ($add28=1) && (typeof $add27=='number'||typeof $add27=='string')?
				$add27+$add28:
				$p['op_add']($add27,$add28));
		}
		return result;
	};
	$m['calcsize'].__name__ = 'calcsize';

	$m['calcsize'].__bind_type__ = 0;
	$m['calcsize'].__args__ = [null,null,['fmt']];
	$m['pack'] = function(fmt) {
		var args = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length));

		var $cmp23,$cmp24,$cmp25,$cmp26,$cmp27,$cmp28,$cmp29,cur,$49,$48,endianness,$43,$42,$41,$40,$47,$46,$45,$44,format,$eq23,$eq25,$eq24,$eq27,$eq26,$eq29,$eq28,$cmp30,n_args,$50,$51,$52,$iter8_iter,$eq30,num,result,$bool40,$iter8_type,formatdef,$iter8_array,$bool32,$bool33,$bool30,$add29,$bool36,$bool37,$bool34,$bool35,$bool38,$bool39,$sub64,$sub62,$sub63,$sub60,$sub61,i,$add40,$eq31,$$var,$iter8_idx,padding,$iter8_nextval,$eq32,$add38,$add39,$bool31,$add32,$add33,$add30,$add31,$add36,$add37,$add34,$add35,$len6,$len7,$len4,$len5,$len3,$len8,$len9,$29,$28,$27,$pyjs_try_err,$sub57,$sub56,$sub55,$sub54,$sub53,$sub52,$sub51,$sub59,$sub58,$38,$39,$36,$37,$34,$35,$32,$33,$30,$31,$$var,num_s;
		var $tupleassign6 = $m['getmode'](fmt);
		formatdef = $tupleassign6.__getitem__(0);
		endianness = $tupleassign6.__getitem__(1);
		i = $tupleassign6.__getitem__(2);
		args = $p['list'](args);
		n_args = (($len3=args) === null?0:
			(typeof $len3.__array != 'undefined' ? $len3.__array.length:
				(typeof $len3.__len__ == 'function'?$len3.__len__():
					(typeof $len3.length != 'undefined'?$len3.length:
						$p['len']($len3)))));
		result = $p['list']([]);
		while ((($bool30=((($cmp23=i)===($cmp24=(($len4=fmt) === null?0:
			(typeof $len4.__array != 'undefined' ? $len4.__array.length:
				(typeof $len4.__len__ == 'function'?$len4.__len__():
					(typeof $len4.length != 'undefined'?$len4.length:
						$p['len']($len4))))))?0:
			(typeof $cmp23==typeof $cmp24 && ((typeof $cmp23 == 'number')||(typeof $cmp23 == 'string')||(typeof $cmp23 == 'boolean'))?
				($cmp23 == $cmp24 ? 0 : ($cmp23 < $cmp24 ? -1 : 1)):
				$p['cmp']($cmp23, $cmp24))) == -1)) === null || $bool30 === false || $bool30 === 0 || $bool30 === '' ?
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
			var $tupleassign7 = $m['getNum'](fmt, i);
			num = $tupleassign7.__getitem__(0);
			i = $tupleassign7.__getitem__(1);
			cur = (typeof ($27=fmt).__array != 'undefined'?
				((typeof $27.__array[$28=i]) != 'undefined'?$27.__array[$28]:
					$27.__getitem__($28)):
					$27.__getitem__(i));
			try {
				format = (typeof ($29=formatdef).__array != 'undefined'?
					((typeof $29.__array[$30=cur]) != 'undefined'?$29.__array[$30]:
						$29.__getitem__($30)):
						$29.__getitem__(cur));
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (($pyjs_try_err_name == $p['KeyError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['KeyError'])) {

					var $pyjs__raise_expr1 = $m['StructError'];
					var $pyjs__raise_expr2 = $p['sprintf']('%s is not a valid format', cur);
					if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
						throw $p['TypeError']('instance exception may not have a separate value');
					}
					if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
						throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
					} else {
						throw ($pyjs__raise_expr1($pyjs__raise_expr2));
					}

				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			}
			if ((($bool31=(($eq23=num)===($eq24=null)&&$eq23===null?true:
				($eq23===null?false:($eq24===null?false:
					((typeof $eq23=='object'||typeof $eq23=='function')&&typeof $eq23.__cmp__=='function'?$eq23.__cmp__($eq24) === 0:
						((typeof $eq24=='object'||typeof $eq24=='function')&&typeof $eq24.__cmp__=='function'?$eq24.__cmp__($eq23) === 0:
							$eq23==$eq24)))))) === null || $bool31 === false || $bool31 === 0 || $bool31 === '' ?
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
				num_s = 0;
				num = 1;
			}
			else {
				num_s = num;
			}
			if ((($bool32=(($eq25=cur)===($eq26='x')&&$eq25===null?true:
				($eq25===null?false:($eq26===null?false:
					((typeof $eq25=='object'||typeof $eq25=='function')&&typeof $eq25.__cmp__=='function'?$eq25.__cmp__($eq26) === 0:
						((typeof $eq26=='object'||typeof $eq26=='function')&&typeof $eq26.__cmp__=='function'?$eq26.__cmp__($eq25) === 0:
							$eq25==$eq26)))))) === null || $bool32 === false || $bool32 === 0 || $bool32 === '' ?
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
				result['extend']($p['list']([''['ljust'](num, '\x00')]));
			}
			else if ((($bool33=(($eq27=cur)===($eq28='s')&&$eq27===null?true:
				($eq27===null?false:($eq28===null?false:
					((typeof $eq27=='object'||typeof $eq27=='function')&&typeof $eq27.__cmp__=='function'?$eq27.__cmp__($eq28) === 0:
						((typeof $eq28=='object'||typeof $eq28=='function')&&typeof $eq28.__cmp__=='function'?$eq28.__cmp__($eq27) === 0:
							$eq27==$eq28)))))) === null || $bool33 === false || $bool33 === 0 || $bool33 === '' ?
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
				if ((($bool34=$p['isinstance']((typeof ($31=args).__array != 'undefined'?
					((typeof $31.__array[$32=0]) != 'undefined'?$31.__array[$32]:
						$31.__getitem__($32)):
						$31.__getitem__(0)), $p['str'])) === null || $bool34 === false || $bool34 === 0 || $bool34 === '' ?
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
					padding = (typeof ($sub51=num)==typeof ($sub52=(($len5=(typeof ($33=args).__array != 'undefined'?
						((typeof $33.__array[$34=0]) != 'undefined'?$33.__array[$34]:
							$33.__getitem__($34)):
							$33.__getitem__(0))) === null?0:
						(typeof $len5.__array != 'undefined' ? $len5.__array.length:
							(typeof $len5.__len__ == 'function'?$len5.__len__():
								(typeof $len5.length != 'undefined'?$len5.length:
									$p['len']($len5)))))) && (typeof $sub51=='number'||typeof $sub51=='string')?
						$sub51-$sub52:
						$p['op_sub']($sub51,$sub52));
					result['extend']($p['list']([(typeof ($add29=$p['slice']((typeof ($35=args).__array != 'undefined'?
						((typeof $35.__array[$36=0]) != 'undefined'?$35.__array[$36]:
							$35.__getitem__($36)):
							$35.__getitem__(0)), 0, num))==typeof ($add30=''['ljust'](padding, '\x00')) && (typeof $add29=='number'||typeof $add29=='string')?
						$add29+$add30:
						$p['op_add']($add29,$add30))]));
					args['pop'](0);
				}
				else {

					var $pyjs__raise_expr1 = $m['StructError'];
					var $pyjs__raise_expr2 = 'arg for string format not a string';
					if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
						throw $p['TypeError']('instance exception may not have a separate value');
					}
					if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
						throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
					} else {
						throw ($pyjs__raise_expr1($pyjs__raise_expr2));
					}

				}
			}
			else if ((($bool35=(($eq29=cur)===($eq30='p')&&$eq29===null?true:
				($eq29===null?false:($eq30===null?false:
					((typeof $eq29=='object'||typeof $eq29=='function')&&typeof $eq29.__cmp__=='function'?$eq29.__cmp__($eq30) === 0:
						((typeof $eq30=='object'||typeof $eq30=='function')&&typeof $eq30.__cmp__=='function'?$eq30.__cmp__($eq29) === 0:
							$eq29==$eq30)))))) === null || $bool35 === false || $bool35 === 0 || $bool35 === '' ?
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
				if ((($bool36=$p['isinstance']((typeof ($37=args).__array != 'undefined'?
					((typeof $37.__array[$38=0]) != 'undefined'?$37.__array[$38]:
						$37.__getitem__($38)):
						$37.__getitem__(0)), $p['str'])) === null || $bool36 === false || $bool36 === 0 || $bool36 === '' ?
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
					padding = (typeof ($sub55=(typeof ($sub53=num)==typeof ($sub54=(($len6=(typeof ($39=args).__array != 'undefined'?
						((typeof $39.__array[$40=0]) != 'undefined'?$39.__array[$40]:
							$39.__getitem__($40)):
							$39.__getitem__(0))) === null?0:
						(typeof $len6.__array != 'undefined' ? $len6.__array.length:
							(typeof $len6.__len__ == 'function'?$len6.__len__():
								(typeof $len6.length != 'undefined'?$len6.length:
									$p['len']($len6)))))) && (typeof $sub53=='number'||typeof $sub53=='string')?
						$sub53-$sub54:
						$p['op_sub']($sub53,$sub54)))==typeof ($sub56=1) && (typeof $sub55=='number'||typeof $sub55=='string')?
						$sub55-$sub56:
						$p['op_sub']($sub55,$sub56));
					if ((($bool37=((($cmp25=padding)===($cmp26=0)?0:
						(typeof $cmp25==typeof $cmp26 && ((typeof $cmp25 == 'number')||(typeof $cmp25 == 'string')||(typeof $cmp25 == 'boolean'))?
							($cmp25 == $cmp26 ? 0 : ($cmp25 < $cmp26 ? -1 : 1)):
							$p['cmp']($cmp25, $cmp26))) == 1)) === null || $bool37 === false || $bool37 === 0 || $bool37 === '' ?
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
						result['extend']($p['list']([(typeof ($add33=(typeof ($add31=$p['chr']((($len7=(typeof ($41=args).__array != 'undefined'?
							((typeof $41.__array[$42=0]) != 'undefined'?$41.__array[$42]:
								$41.__getitem__($42)):
								$41.__getitem__(0))) === null?0:
							(typeof $len7.__array != 'undefined' ? $len7.__array.length:
								(typeof $len7.__len__ == 'function'?$len7.__len__():
									(typeof $len7.length != 'undefined'?$len7.length:
										$p['len']($len7)))))))==typeof ($add32=$p['slice']((typeof ($43=args).__array != 'undefined'?
							((typeof $43.__array[$44=0]) != 'undefined'?$43.__array[$44]:
								$43.__getitem__($44)):
								$43.__getitem__(0)), 0, (typeof ($sub57=num)==typeof ($sub58=1) && (typeof $sub57=='number'||typeof $sub57=='string')?
							$sub57-$sub58:
							$p['op_sub']($sub57,$sub58)))) && (typeof $add31=='number'||typeof $add31=='string')?
							$add31+$add32:
							$p['op_add']($add31,$add32)))==typeof ($add34=''['ljust'](padding, '\x00')) && (typeof $add33=='number'||typeof $add33=='string')?
							$add33+$add34:
							$p['op_add']($add33,$add34))]));
					}
					else {
						if ((($bool38=((($cmp27=num)===($cmp28=255)?0:
							(typeof $cmp27==typeof $cmp28 && ((typeof $cmp27 == 'number')||(typeof $cmp27 == 'string')||(typeof $cmp27 == 'boolean'))?
								($cmp27 == $cmp28 ? 0 : ($cmp27 < $cmp28 ? -1 : 1)):
								$p['cmp']($cmp27, $cmp28))) == -1)) === null || $bool38 === false || $bool38 === 0 || $bool38 === '' ?
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
							result['extend']($p['list']([(typeof ($add35=$p['chr']((typeof ($sub59=num)==typeof ($sub60=1) && (typeof $sub59=='number'||typeof $sub59=='string')?
								$sub59-$sub60:
								$p['op_sub']($sub59,$sub60))))==typeof ($add36=$p['slice']((typeof ($45=args).__array != 'undefined'?
								((typeof $45.__array[$46=0]) != 'undefined'?$45.__array[$46]:
									$45.__getitem__($46)):
									$45.__getitem__(0)), 0, (typeof ($sub61=num)==typeof ($sub62=1) && (typeof $sub61=='number'||typeof $sub61=='string')?
								$sub61-$sub62:
								$p['op_sub']($sub61,$sub62)))) && (typeof $add35=='number'||typeof $add35=='string')?
								$add35+$add36:
								$p['op_add']($add35,$add36))]));
						}
						else {
							result['extend']($p['list']([(typeof ($add37=$p['chr'](255))==typeof ($add38=$p['slice']((typeof ($47=args).__array != 'undefined'?
								((typeof $47.__array[$48=0]) != 'undefined'?$47.__array[$48]:
									$47.__getitem__($48)):
									$47.__getitem__(0)), 0, (typeof ($sub63=num)==typeof ($sub64=1) && (typeof $sub63=='number'||typeof $sub63=='string')?
								$sub63-$sub64:
								$p['op_sub']($sub63,$sub64)))) && (typeof $add37=='number'||typeof $add37=='string')?
								$add37+$add38:
								$p['op_add']($add37,$add38))]));
						}
					}
					args['pop'](0);
				}
				else {

					var $pyjs__raise_expr1 = $m['StructError'];
					var $pyjs__raise_expr2 = 'arg for string format not a string';
					if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
						throw $p['TypeError']('instance exception may not have a separate value');
					}
					if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
						throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
					} else {
						throw ($pyjs__raise_expr1($pyjs__raise_expr2));
					}

				}
			}
			else {
				if ((($bool39=((($cmp29=(($len8=args) === null?0:
					(typeof $len8.__array != 'undefined' ? $len8.__array.length:
						(typeof $len8.__len__ == 'function'?$len8.__len__():
							(typeof $len8.length != 'undefined'?$len8.length:
								$p['len']($len8))))))===($cmp30=num)?0:
					(typeof $cmp29==typeof $cmp30 && ((typeof $cmp29 == 'number')||(typeof $cmp29 == 'string')||(typeof $cmp29 == 'boolean'))?
						($cmp29 == $cmp30 ? 0 : ($cmp29 < $cmp30 ? -1 : 1)):
						$p['cmp']($cmp29, $cmp30))) == -1)) === null || $bool39 === false || $bool39 === 0 || $bool39 === '' ?
						false :
						(typeof $bool39=='object'?
							(typeof $bool39.__nonzero__=='function'?
								$bool39.__nonzero__() :
								(typeof $bool39.__len__=='function'?
									($bool39.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {

					var $pyjs__raise_expr1 = $m['StructError'];
					var $pyjs__raise_expr2 = 'insufficient arguments to pack';
					if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
						throw $p['TypeError']('instance exception may not have a separate value');
					}
					if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
						throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
					} else {
						throw ($pyjs__raise_expr1($pyjs__raise_expr2));
					}

				}
				$iter8_iter = $p['slice'](args, 0, num);
				if (typeof ($iter8_array = $iter8_iter.__array) != 'undefined') {
					$iter8_type = 0;
				} else {
					$iter8_iter = $iter8_iter.__iter__();
					$iter8_type = typeof ($iter8_array = $iter8_iter.__array) != 'undefined'? 0 : (typeof $iter8_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter8_idx = 0;
				while (typeof ($iter8_nextval=($iter8_type?($iter8_type > 0?$iter8_iter.next(true,false):$p['wrapped_next']($iter8_iter)):$iter8_array[$iter8_idx++])) != 'undefined') {
					$$var = $iter8_nextval;
					result['extend']($p['list']([(typeof ($49=format).__array != 'undefined'?
						((typeof $49.__array[$50='pack']) != 'undefined'?$49.__array[$50]:
							$49.__getitem__($50)):
							$49.__getitem__('pack'))($$var, (typeof ($51=format).__array != 'undefined'?
						((typeof $51.__array[$52='size']) != 'undefined'?$51.__array[$52]:
							$51.__getitem__($52)):
							$51.__getitem__('size')), endianness)]));
				}
				args = $p['slice'](args, num, null);
			}
			num = null;
			i = (typeof ($add39=i)==typeof ($add40=1) && (typeof $add39=='number'||typeof $add39=='string')?
				$add39+$add40:
				$p['op_add']($add39,$add40));
		}
		if ((($bool40=!(($eq31=(($len9=args) === null?0:
			(typeof $len9.__array != 'undefined' ? $len9.__array.length:
				(typeof $len9.__len__ == 'function'?$len9.__len__():
					(typeof $len9.length != 'undefined'?$len9.length:
						$p['len']($len9))))))===($eq32=0)&&$eq31===null?true:
			($eq31===null?false:($eq32===null?false:
				((typeof $eq31=='object'||typeof $eq31=='function')&&typeof $eq31.__cmp__=='function'?$eq31.__cmp__($eq32) === 0:
					((typeof $eq32=='object'||typeof $eq32=='function')&&typeof $eq32.__cmp__=='function'?$eq32.__cmp__($eq31) === 0:
						$eq31==$eq32)))))) === null || $bool40 === false || $bool40 === 0 || $bool40 === '' ?
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

			var $pyjs__raise_expr1 = $m['StructError'];
			var $pyjs__raise_expr2 = 'too many arguments for pack format';
			if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
				throw $p['TypeError']('instance exception may not have a separate value');
			}
			if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
				throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
			} else {
				throw ($pyjs__raise_expr1($pyjs__raise_expr2));
			}

		}
		return ''['join'](result);
	};
	$m['pack'].__name__ = 'pack';

	$m['pack'].__bind_type__ = 0;
	$m['pack'].__args__ = ['args',null,['fmt']];
	$m['unpack'] = function(fmt, data) {
		var $eq40,$add51,$iter9_iter,$iter9_idx,$eq33,num,$eq36,result,$eq34,$eq35,$sub66,$eq38,$eq39,$add58,$iter9_type,$sub65,cur,$add49,$add48,$add47,$add46,$add44,$add43,$add42,$add41,$pyjs_try_err,endianness,$iter9_nextval,$64,$61,$add50,$63,$62,$bool47,$bool46,$bool45,$bool44,$bool43,$bool42,$bool41,format,$cmp33,$bool48,$57,$60,$cmp34,$cmp32,$cmp31,formatdef,$len10,$len11,$add52,$add53,$add54,$add55,$add56,$add57,i,$iter9_array,j,n,$58,$59,length,$add45,$53,$54,$55,$56,$eq37;
		var $tupleassign8 = $m['getmode'](fmt);
		formatdef = $tupleassign8.__getitem__(0);
		endianness = $tupleassign8.__getitem__(1);
		i = $tupleassign8.__getitem__(2);
		j = 0;
		num = 0;
		result = $p['list']([]);
		length = $m['calcsize'](fmt);
		if ((($bool41=!(($eq33=length)===($eq34=(($len10=data) === null?0:
			(typeof $len10.__array != 'undefined' ? $len10.__array.length:
				(typeof $len10.__len__ == 'function'?$len10.__len__():
					(typeof $len10.length != 'undefined'?$len10.length:
						$p['len']($len10))))))&&$eq33===null?true:
			($eq33===null?false:($eq34===null?false:
				((typeof $eq33=='object'||typeof $eq33=='function')&&typeof $eq33.__cmp__=='function'?$eq33.__cmp__($eq34) === 0:
					((typeof $eq34=='object'||typeof $eq34=='function')&&typeof $eq34.__cmp__=='function'?$eq34.__cmp__($eq33) === 0:
						$eq33==$eq34)))))) === null || $bool41 === false || $bool41 === 0 || $bool41 === '' ?
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

			var $pyjs__raise_expr1 = $m['StructError'];
			var $pyjs__raise_expr2 = 'unpack str size does not match format';
			if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
				throw $p['TypeError']('instance exception may not have a separate value');
			}
			if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
				throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
			} else {
				throw ($pyjs__raise_expr1($pyjs__raise_expr2));
			}

		}
		while ((($bool42=((($cmp31=i)===($cmp32=(($len11=fmt) === null?0:
			(typeof $len11.__array != 'undefined' ? $len11.__array.length:
				(typeof $len11.__len__ == 'function'?$len11.__len__():
					(typeof $len11.length != 'undefined'?$len11.length:
						$p['len']($len11))))))?0:
			(typeof $cmp31==typeof $cmp32 && ((typeof $cmp31 == 'number')||(typeof $cmp31 == 'string')||(typeof $cmp31 == 'boolean'))?
				($cmp31 == $cmp32 ? 0 : ($cmp31 < $cmp32 ? -1 : 1)):
				$p['cmp']($cmp31, $cmp32))) == -1)) === null || $bool42 === false || $bool42 === 0 || $bool42 === '' ?
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
			var $tupleassign9 = $m['getNum'](fmt, i);
			num = $tupleassign9.__getitem__(0);
			i = $tupleassign9.__getitem__(1);
			cur = (typeof ($53=fmt).__array != 'undefined'?
				((typeof $53.__array[$54=i]) != 'undefined'?$53.__array[$54]:
					$53.__getitem__($54)):
					$53.__getitem__(i));
			i = (typeof ($add41=i)==typeof ($add42=1) && (typeof $add41=='number'||typeof $add41=='string')?
				$add41+$add42:
				$p['op_add']($add41,$add42));
			try {
				format = (typeof ($55=formatdef).__array != 'undefined'?
					((typeof $55.__array[$56=cur]) != 'undefined'?$55.__array[$56]:
						$55.__getitem__($56)):
						$55.__getitem__(cur));
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (($pyjs_try_err_name == $p['KeyError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['KeyError'])) {

					var $pyjs__raise_expr1 = $m['StructError'];
					var $pyjs__raise_expr2 = $p['sprintf']('%s is not a valid format', cur);
					if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
						throw $p['TypeError']('instance exception may not have a separate value');
					}
					if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
						throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
					} else {
						throw ($pyjs__raise_expr1($pyjs__raise_expr2));
					}

				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			}
			if ((($bool44=!(($bool43=num) === null || $bool43 === false || $bool43 === 0 || $bool43 === '' ?
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
				num = 1;
			}
			if ((($bool45=(($eq35=cur)===($eq36='x')&&$eq35===null?true:
				($eq35===null?false:($eq36===null?false:
					((typeof $eq35=='object'||typeof $eq35=='function')&&typeof $eq35.__cmp__=='function'?$eq35.__cmp__($eq36) === 0:
						((typeof $eq36=='object'||typeof $eq36=='function')&&typeof $eq36.__cmp__=='function'?$eq36.__cmp__($eq35) === 0:
							$eq35==$eq36)))))) === null || $bool45 === false || $bool45 === 0 || $bool45 === '' ?
					false :
					(typeof $bool45=='object'?
						(typeof $bool45.__nonzero__=='function'?
							$bool45.__nonzero__() :
							(typeof $bool45.__len__=='function'?
								($bool45.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				j = (typeof ($add43=j)==typeof ($add44=num) && (typeof $add43=='number'||typeof $add43=='string')?
					$add43+$add44:
					$p['op_add']($add43,$add44));
			}
			else if ((($bool46=(($eq37=cur)===($eq38='s')&&$eq37===null?true:
				($eq37===null?false:($eq38===null?false:
					((typeof $eq37=='object'||typeof $eq37=='function')&&typeof $eq37.__cmp__=='function'?$eq37.__cmp__($eq38) === 0:
						((typeof $eq38=='object'||typeof $eq38=='function')&&typeof $eq38.__cmp__=='function'?$eq38.__cmp__($eq37) === 0:
							$eq37==$eq38)))))) === null || $bool46 === false || $bool46 === 0 || $bool46 === '' ?
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
				result['append']($p['slice'](data, j, (typeof ($add45=j)==typeof ($add46=num) && (typeof $add45=='number'||typeof $add45=='string')?
					$add45+$add46:
					$p['op_add']($add45,$add46))));
				j = (typeof ($add47=j)==typeof ($add48=num) && (typeof $add47=='number'||typeof $add47=='string')?
					$add47+$add48:
					$p['op_add']($add47,$add48));
			}
			else if ((($bool47=(($eq39=cur)===($eq40='p')&&$eq39===null?true:
				($eq39===null?false:($eq40===null?false:
					((typeof $eq39=='object'||typeof $eq39=='function')&&typeof $eq39.__cmp__=='function'?$eq39.__cmp__($eq40) === 0:
						((typeof $eq40=='object'||typeof $eq40=='function')&&typeof $eq40.__cmp__=='function'?$eq40.__cmp__($eq39) === 0:
							$eq39==$eq40)))))) === null || $bool47 === false || $bool47 === 0 || $bool47 === '' ?
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
				n = $p['ord']((typeof ($57=data).__array != 'undefined'?
					((typeof $57.__array[$58=j]) != 'undefined'?$57.__array[$58]:
						$57.__getitem__($58)):
						$57.__getitem__(j)));
				if ((($bool48=((((($cmp33=n)===($cmp34=num)?0:
					(typeof $cmp33==typeof $cmp34 && ((typeof $cmp33 == 'number')||(typeof $cmp33 == 'string')||(typeof $cmp33 == 'boolean'))?
						($cmp33 == $cmp34 ? 0 : ($cmp33 < $cmp34 ? -1 : 1)):
						$p['cmp']($cmp33, $cmp34))))|1) == 1)) === null || $bool48 === false || $bool48 === 0 || $bool48 === '' ?
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
					n = (typeof ($sub65=num)==typeof ($sub66=1) && (typeof $sub65=='number'||typeof $sub65=='string')?
						$sub65-$sub66:
						$p['op_sub']($sub65,$sub66));
				}
				result['append']($p['slice'](data, (typeof ($add49=j)==typeof ($add50=1) && (typeof $add49=='number'||typeof $add49=='string')?
					$add49+$add50:
					$p['op_add']($add49,$add50)), (typeof ($add53=(typeof ($add51=j)==typeof ($add52=n) && (typeof $add51=='number'||typeof $add51=='string')?
					$add51+$add52:
					$p['op_add']($add51,$add52)))==typeof ($add54=1) && (typeof $add53=='number'||typeof $add53=='string')?
					$add53+$add54:
					$p['op_add']($add53,$add54))));
				j = (typeof ($add55=j)==typeof ($add56=num) && (typeof $add55=='number'||typeof $add55=='string')?
					$add55+$add56:
					$p['op_add']($add55,$add56));
			}
			else {
				$iter9_iter = $p['range'](num);
				if (typeof ($iter9_array = $iter9_iter.__array) != 'undefined') {
					$iter9_type = 0;
				} else {
					$iter9_iter = $iter9_iter.__iter__();
					$iter9_type = typeof ($iter9_array = $iter9_iter.__array) != 'undefined'? 0 : (typeof $iter9_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter9_idx = 0;
				while (typeof ($iter9_nextval=($iter9_type?($iter9_type > 0?$iter9_iter.next(true,false):$p['wrapped_next']($iter9_iter)):$iter9_array[$iter9_idx++])) != 'undefined') {
					n = $iter9_nextval;
					result['extend']($p['list']([(typeof ($59=format).__array != 'undefined'?
						((typeof $59.__array[$60='unpack']) != 'undefined'?$59.__array[$60]:
							$59.__getitem__($60)):
							$59.__getitem__('unpack'))(data, j, (typeof ($61=format).__array != 'undefined'?
						((typeof $61.__array[$62='size']) != 'undefined'?$61.__array[$62]:
							$61.__getitem__($62)):
							$61.__getitem__('size')), endianness)]));
					j = (typeof ($add57=j)==typeof ($add58=(typeof ($63=format).__array != 'undefined'?
						((typeof $63.__array[$64='size']) != 'undefined'?$63.__array[$64]:
							$63.__getitem__($64)):
							$63.__getitem__('size'))) && (typeof $add57=='number'||typeof $add57=='string')?
						$add57+$add58:
						$p['op_add']($add57,$add58));
				}
			}
		}
		return $p['tuple'](result);
	};
	$m['unpack'].__name__ = 'unpack';

	$m['unpack'].__bind_type__ = 0;
	$m['unpack'].__args__ = [null,null,['fmt'],['data']];
	$m['pack_into'] = function(fmt, buf, offset) {
		var args = $p['tuple']($pyjs_array_slice.call(arguments,3,arguments.length));


		throw ($p['NotImplementedError']('pack_into'));
		return null;
	};
	$m['pack_into'].__name__ = 'pack_into';

	$m['pack_into'].__bind_type__ = 0;
	$m['pack_into'].__args__ = ['args',null,['fmt'],['buf'],['offset']];
	$m['unpack_from'] = function(fmt, buf, offset) {
		if (typeof offset == 'undefined') offset=arguments.callee.__args__[4][1];

		throw ($p['NotImplementedError']('unpack_from'));
		return null;
	};
	$m['unpack_from'].__name__ = 'unpack_from';

	$m['unpack_from'].__bind_type__ = 0;
	$m['unpack_from'].__args__ = [null,null,['fmt'],['buf'],['offset', 0]];
	return this;
}; /* end struct */


/* end module: struct */


/*
PYJS_DEPS: ['math', 'sys']
*/
