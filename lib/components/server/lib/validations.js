/*
* This encapsulates parameter validation. It is included in the Route class,
*  and can be used when declaring a route.
* */

/**
 * The crux Server component comes with a few built-in validation functions. These work in tandem with the incoming request's body or query data,
 * used in the endpoint validation process. It can also be overridden or extended. This is a singleton, instantiated on component load<br>
 * <b>Note</b>: All validation functions will try and validate the input data, and convert the source value into the required validation type.<br>
 * <b>Note 2</b>: Every validation function will be attached a <b>default()</b> function that will use the given value as a default fallback value when validating. See example.
 * @name crux.Server.Validations
 * @class
 * @static
 * @example
 *  var source = {
 *    id: "12"
 *  };
 *  var isValid = crux.Server.Validations.NUMBER("id",source); // => true
 *  // At this point, isValid is set to true and
 *  console.log(typeof source.id); // => number. The value was converted to number.
 *  var isValid2 = crux.Server.Validations.NUMBER("id2", { id: "2a" });// => false
 *  // We can make use of its default() functionality
 *  var source3 = {
 *    id: "one"
 *  }
 *  // NOTE: this approach is ugly here but it is far more cleaner in route definitions
 *  var isValid3 = crux.Server.Validations.NUMBER.default(4)("id", source3);//  => true
 *  console.log(source3.id); // => 4
* */
var validation = {};

/**
 * Performs number validation on the given source object.
 *
 * @memberof crux.Server.Validations
 * @function NUMBER
 * @static
 * @param {String} name - the name of the property inside the source object
 * @param {Object} source - the source object to look for the number in.
* */
validation.NUMBER = function ValidateNumber(name, source) {
  if(typeof source[name] === 'undefined') return false;
  if(typeof source[name] === 'number') return true;

  if(typeof source[name] === 'string') {
    var alphaReg = /^\d+$/;
    if(!alphaReg.test(source[name])) return false;
    var tmp = parseInt(source[name]);
    if(isNaN(tmp)) return false;
    source[name] = tmp;
    return true;
  }
  return false;
};

/**
* Performs array validation on the given source object. An array can be viewed as a comma-delimited string, or an actual JSON stringified array.
 * @memberof crux.Server.Validations
 * @function ARRAY
 * @static
 * @param {String} name - the name of the property inside the source object
 * @param {Object} source - the source object to look for the array in
 * @example
 *  var obj = {
 *    arr: "1,2,3"
 *  };
 *  var isValid = crux.Server.Validations.ARRAY("arr", obj);  => true
 *  console.log(obj.arr); // => [1, 2, 3]
 *  var obj2 = {
 *    arr: '1, "two", 3, false, {fi: "ve"}'
 *  };
 *  crux.Server.Validations.ARRAY("arr", obj2); => true
 *  console.log(obj2.arr); // =>[1, "two", 3, false, { fi: "ve" }]
* */
validation.ARRAY = function ValidateArray(name, source) {
  if(typeof source[name] === 'undefined') return false;
  var val = source[name];
  if(typeof val === 'string') {
    if(val.trim() === '') return false;
    if(val.indexOf('[') === 0) {
      try {
        var arr = JSON.parse(val);
        source[name] = arr;
        return true;
      } catch(e) {
        return false;
      }
    }
    var arr = val.split(',');
    source[name] = arr;
    return true;
  }
  if(val instanceof Array) {
    return true;
  }
  return false;
};

/**
 * Performs string validation. Note that an emptry string is not valid.
 * @memberof crux.Server.Validations
 * @function STRING
 * @static
 * @param {String} name - the name of the property inside the source object
 * @param {Object} source - the source object to look for the array in
 * */
validation.STRING = function ValidateString(name, source) {
  if(typeof source[name] !== 'string' || source[name].trim().length === 0) return false;
  source[name] = source[name].trim();
  return true;
};


/**
 * This will perform ENUM-like validations.<br>
 * Note: ENUM validations are always upperCase.
 * NOTE2: all values in the arguments are enum strings.
 * @memberof crux.Server.Validations
 * @function ENUM
 * @static
 * @param {String[]} enums - an array of enum values to match against.
 * @example
 *  var enumValidation = crux.Server.Validations.ENUM('USER','TASK');
 *  var source = {
 *    name: "user"
 *  }
 *  enumValidation("name", source); // => true
 *  console.log(source.name); // => USER
 * */
validation.ENUM = function BuildEnumValidation(arra) {
  var enums = [],
    enumArray = (_.isArray(arra) ? arra : arguments);
  _.forEach(enumArray, function(val) {
    if(!_.isString(val)) return;
    enums.push(val.toUpperCase());
  });
  return function ValidateEnum(name, source) {
    if(!validation.STRING(name, source)) return false;
    if(enums.indexOf(source[name].toUpperCase()) === -1) return false;
    source[name] = source[name].toUpperCase();
    return true;
  };
};
/**
* Performs boolean validations.
 * Truthy values: 1, "true", true
 * Falsy values: 0, "false", false
 * @memberof crux.Server.Validations
 * @function BOOLEAN
 * @static
 * @param {String} name - the name of the property inside the source object
 * @param {Object} source - the source object to look for the array in
 * */
validation.BOOLEAN = function ValidateBoolean(name, source) {
  if(typeof source[name] === 'undefined') return false;
  if(typeof source[name] === 'number') {
    if(source[name] === 1) {
      source[name] = true;
      return true;
    }
    if(source[name] === 0) {
      source[name] = false;
      return true;
    }
    return false;
  }
  if(typeof source[name] === 'string') {
    if(source[name] === '1' || source[name] === 'true') {
      source[name] = true;
      return true;
    }
    if(source[name] === '0' || source[name] === 'false') {
      source[name] = false;
      return true;
    }
  }
  if(typeof source[name] === 'boolean') {
    return true;
  }
  return false;
};

/**
 * Json validations
 * @memberof crux.Server.Validations
 * @function JSON
 * @static
 * @param {String} name - the name of the property inside the source object
 * @param {Object} source - the source object to look for the array in
 * */
validation.JSON = function ValidateJson(name, source) {
  if(typeof source[name] === 'object' && source[name] !== null) return true;
  if(typeof source[name] !== 'string' || source[name].trim().length < 2) return false;
  try {
    source[name] = JSON.parse(source[name]);
    return true;
  } catch(e) {
    return false;
  }
};

/**
 * E-mail validations. Note: this will perform shallow e-mail validations (check for only alpha-numeric, @ and .)
 * @memberof crux.Server.Validations
 * @function EMAIL
 * @static
 * @param {String} name - the name of the property inside the source object
 * @param {Object} source - the source object to look for the array in
 * */
validation.EMAIL = function ValidateEmail(name, source) {
  if(!validation.STRING(name, source)) return false;
  if(source[name].length < 5) return false;
  var regex = /\S+@\S+\.\S+/;
  if(!regex.test(source[name])) {
    return false;
  }
  source[name] = source[name].trim().toLowerCase();
  return true;
};

function _init() {
// We now bind the "default" call to each validation type, and their type
  _.forEach(validation, function(validateFunc, key) {
    validateFunc['type'] = key.toUpperCase();
    // We add a wrapper over the validation callback, ONLY when we do not find anything in the source.
    validateFunc['default'] = function DefaultValue(_default) {
      function defaultValidation(name, source) {
        var isValid = validateFunc.apply(this, arguments);
        if(!isValid) {
          source[name] = _default;
          isValid = true;
        }
        return isValid;
      }
      return defaultValidation;
    };
    // We also add a wrapper over each validation, to allow users to set custom error messages if a field is missing.
    // Note: if the code contains spaces, we will consider it as the message and set the default code to 'MISSING_DATA'
    function onInvalidData(code, message) {
      var err = {};
      if(typeof message === 'undefined') {
        err.code = 'INVALID_DATA';
        err.message = code;
      } else {
        err.code = code;
        err.message = message;
      }
      function InvalidValidationWrapper() {
        return validateFunc.apply(this, arguments);
      }
      InvalidValidationWrapper.error = err;
      return InvalidValidationWrapper;
    }
    validateFunc['invalid'] = validateFunc['default']['invalid'] = onInvalidData;
  });
}

module.exports = {
  types: validation,
  init: _init
};