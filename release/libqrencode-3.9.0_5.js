/*
 * Libqrencode port to JavaScript
 * https://github.com/lymar/libqrencode-js
 *
 * Copyright (c) Kentaro Fukuchi <kentaro@fukuchi.org> (original Libqrencode)
 * Copyright (c) Sergey Lymar <sergey.lymar@gmail.com> (port to JavaScript)
 *
 * Licensed under GNU Lesser General Public License.
 */
var qrencode = (function() {
    var libqrException = (function() {
        function libqrException(type, msg) {
            this.type = type;
            this.msg = msg;
        }
        
        libqrException.prototype.toString = function() {
            return "libqrencode exception [" + this.type + "]: " + this.msg;
        };

        return libqrException;
    })();
    
    var print = function(m) {};

    return {
        // QRencodeMode
        QR_MODE_NUM:            0,  // Numeric mode
        QR_MODE_AN:             1,  // Alphabet-numeric mode
        QR_MODE_8:              2,  // 8-bit data mode
        QR_MODE_KANJI:          3,  // Kanji (shift-jis) mode
        QR_MODE_ECI:            5,  // ECI mode
        QR_MODE_FNC1FIRST:      6,  // FNC1, first position
        QR_MODE_FNC1SECOND:     7,  // FNC1, second position
        // QRecLevel
        QR_ECLEVEL_L:           0,  // lowest
        QR_ECLEVEL_M:           1,
        QR_ECLEVEL_Q:           2,
        QR_ECLEVEL_H:           3,  // highest
        
        "libqrException":       libqrException,
        
        encodeString:
    
function(str, version, level, mode, caseSensitive) {

var locQre = 
(function(Module, args) {
    Module = Module || {};
    Module.arguments = args || [];
    
// Note: Some Emscripten settings will significantly limit the speed of the generated code.
// Note: Some Emscripten settings may limit the speed of the generated code.
// Warning: .ll contains ptrtoint and/or inttoptr. These may be dangerous in QUANTUM == 1. The safest thing is to investigate every appearance, and modify the source code to avoid this. Emscripten will print a list of the .ll lines, and also annotate the .js.
//   ptrtoint on .ll line 14771
//   ptrtoint on .ll line 14772
//   ptrtoint on .ll line 14958
//   ptrtoint on .ll line 14959
//   ptrtoint on .ll line 14964
//   ptrtoint on .ll line 14965
//   ptrtoint on .ll line 14974
//   ptrtoint on .ll line 14975
//   ptrtoint on .ll line 15007
//   ptrtoint on .ll line 15008
//   ptrtoint on .ll line 15127
//   ptrtoint on .ll line 15128
//   ptrtoint on .ll line 15235
//   ptrtoint on .ll line 15236
//   ptrtoint on .ll line 15241
//   ptrtoint on .ll line 15242
//   ptrtoint on .ll line 15251
//   ptrtoint on .ll line 15252
//   ptrtoint on .ll line 15316
//   ptrtoint on .ll line 15317
//   ptrtoint on .ll line 15322
//   ptrtoint on .ll line 15323
//   ptrtoint on .ll line 15332
//   ptrtoint on .ll line 15333
//   ptrtoint on .ll line 15368
//   ptrtoint on .ll line 15369
// TODO: " u s e   s t r i c t ";

/*
// Capture the output of this into a variable, if you want
(function(Module, args) {
  Module = Module || {};
  Module.arguments = args || [];
*/

///*
// Runs much faster, for some reason
if (!this['Module']) {
  this['Module'] = {};
}
if (!Module.arguments) {
  try {
    Module.arguments = scriptArgs;
  } catch(e) {
    try {
      Module.arguments = arguments;
    } catch(e) {
      Module.arguments = [];
    }
  }
}
//*/

  
// === Auto-generated preamble library stuff ===

//========================================
// Runtime code shared with compiler
//========================================

var Runtime = {
  stackSave: function () {
    return STACKTOP;
  },
  stackRestore: function (stackTop) {
    STACKTOP = stackTop;
  },
  forceAlign: function (target, quantum) {
    quantum = quantum || 1;
    if (isNumber(target) && isNumber(quantum)) {
      return Math.ceil(target/quantum)*quantum;
    } else {
      return 'Math.ceil((' + target + ')/' + quantum + ')*' + quantum;
    }
  },
  isNumberType: function (type) {
    return type in Runtime.INT_TYPES || type in Runtime.FLOAT_TYPES;
  },
  isPointerType: function isPointerType(type) {
  return pointingLevels(type) > 0;
},
  isStructType: function isStructType(type) {
  if (isPointerType(type)) return false;
  if (new RegExp(/^\[\d+\ x\ (.*)\]/g).test(type)) return true; // [15 x ?] blocks. Like structs
  if (new RegExp(/<?{ [^}]* }>?/g).test(type)) return true; // { i32, i8 } etc. - anonymous struct types
  // See comment in isStructPointerType()
  return !Runtime.isNumberType(type) && type[0] == '%';
},
  INT_TYPES: {"i1":0,"i8":0,"i16":0,"i32":0,"i64":0},
  FLOAT_TYPES: {"float":0,"double":0},
  or64: function (x, y) {
    var l = (x | 0) | (y | 0);
    var h = (Math.round(x / 4294967296) | Math.round(y / 4294967296)) * 4294967296;
    return l + h;
  },
  and64: function (x, y) {
    var l = (x | 0) & (y | 0);
    var h = (Math.round(x / 4294967296) & Math.round(y / 4294967296)) * 4294967296;
    return l + h;
  },
  xor64: function (x, y) {
    var l = (x | 0) ^ (y | 0);
    var h = (Math.round(x / 4294967296) ^ Math.round(y / 4294967296)) * 4294967296;
    return l + h;
  },
  getNativeFieldSize: function getNativeFieldSize(type) {
  return Math.max(Runtime.getNativeTypeSize(type), 1);
},
  getNativeTypeSize: function getNativeTypeSize(type) {
  if (1 == 1) return 1;
  var size = {
    '_i1': 1,
    '_i8': 1,
    '_i16': 2,
    '_i32': 4,
    '_i64': 8,
    "_float": 4,
    "_double": 8
  }['_'+type]; // add '_' since float&double confuse Closure compiler as keys.
  if (!size && type[type.length-1] == '*') {
    size = 1; // A pointer
  }
  return size;
},
  dedup: function dedup(items, ident) {
  var seen = {};
  if (ident) {
    return items.filter(function(item) {
      if (seen[item[ident]]) return false;
      seen[item[ident]] = true;
      return true;
    });
  } else {
    return items.filter(function(item) {
      if (seen[item]) return false;
      seen[item] = true;
      return true;
    });
  }
},
  set: function set() {
  var args = typeof arguments[0] === 'object' ? arguments[0] : arguments;
  var ret = {};
  for (var i = 0; i < args.length; i++) {
    ret[args[i]] = 0;
  }
  return ret;
},
  calculateStructAlignment: function calculateStructAlignment(type) {
    type.flatSize = 0;
    type.alignSize = 0;
    var diffs = [];
    var prev = -1;
    type.flatIndexes = type.fields.map(function(field) {
      var size, alignSize;
      if (Runtime.isNumberType(field) || Runtime.isPointerType(field)) {
        size = Runtime.getNativeTypeSize(field); // pack char; char; in structs, also char[X]s.
        alignSize = size;
      } else if (Runtime.isStructType(field)) {
        size = Types.types[field].flatSize;
        alignSize = Types.types[field].alignSize;
      } else {
        dprint('Unclear type in struct: ' + field + ', in ' + type.name_ + ' :: ' + dump(Types.types[type.name_]));
        assert(0);
      }
      alignSize = type.packed ? 1 : Math.min(alignSize, 1);
      type.alignSize = Math.max(type.alignSize, alignSize);
      var curr = Runtime.alignMemory(type.flatSize, alignSize); // if necessary, place this on aligned memory
      type.flatSize = curr + size;
      if (prev >= 0) {
        diffs.push(curr-prev);
      }
      prev = curr;
      return curr;
    });
    type.flatSize = Runtime.alignMemory(type.flatSize, type.alignSize);
    if (diffs.length == 0) {
      type.flatFactor = type.flatSize;
    } else if (Runtime.dedup(diffs).length == 1) {
      type.flatFactor = diffs[0];
    }
    type.needsFlattening = (type.flatFactor != 1);
    return type.flatIndexes;
  },
  generateStructInfo: function (struct, typeName, offset) {
    var type, alignment;
    if (typeName) {
      offset = offset || 0;
      type = (typeof Types === 'undefined' ? Runtime.typeInfo : Types.types)[typeName];
      if (!type) return null;
      if (!struct) struct = (typeof Types === 'undefined' ? Runtime : Types).structMetadata[typeName.replace(/.*\./, '')];
      if (!struct) return null;
      assert(type.fields.length === struct.length, 'Number of named fields must match the type for ' + typeName + '. Perhaps due to inheritance, which is not supported yet?');
      alignment = type.flatIndexes;
    } else {
      var type = { fields: struct.map(function(item) { return item[0] }) };
      alignment = Runtime.calculateStructAlignment(type);
    }
    var ret = {
      __size__: type.flatSize
    };
    if (typeName) {
      struct.forEach(function(item, i) {
        if (typeof item === 'string') {
          ret[item] = alignment[i] + offset;
        } else {
          // embedded struct
          var key;
          for (var k in item) key = k;
          ret[key] = Runtime.generateStructInfo(item[key], type.fields[i], alignment[i]);
        }
      });
    } else {
      struct.forEach(function(item, i) {
        ret[item[1]] = alignment[i];
      });
    }
    return ret;
  },
  stackAlloc: function stackAlloc(size) { var ret = STACKTOP; assert(size > 0, "Trying to allocate 0"); _memset(STACKTOP, 0, size); STACKTOP += size; assert(STACKTOP < STACK_ROOT + STACK_MAX, "Ran out of stack"); return ret; },
  staticAlloc: function staticAlloc(size) { var ret = STATICTOP; assert(size > 0, "Trying to allocate 0"); STATICTOP += size; return ret; },
  alignMemory: function alignMemory(size,quantum) { var ret = size = Math.ceil((size)/(quantum ? quantum : 1))*(quantum ? quantum : 1);; return ret; },
  __dummy__: 0
}



var CorrectionsMonitor = {
  MAX_ALLOWED: 0, // XXX
  corrections: 0,
  sigs: {},

  note: function(type, succeed, sig) {
    if (!succeed) {
      this.corrections++;
      if (this.corrections >= this.MAX_ALLOWED) abort('\n\nToo many corrections!');
    }
  },

  print: function() {
    var items = [];
    for (var sig in this.sigs) {
      items.push({
        sig: sig,
        fails: this.sigs[sig][0],
        succeeds: this.sigs[sig][1],
        total: this.sigs[sig][0] + this.sigs[sig][1]
      });
    }
    items.sort(function(x, y) { return y.total - x.total; });
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      print(item.sig + ' : ' + item.total + ' hits, %' + (Math.ceil(100*item.fails/item.total)) + ' failures');
    }
  }
};






//========================================
// Runtime essentials
//========================================

var __globalConstructor__ = function globalConstructor() {
};

var __THREW__ = false; // Used in checking for thrown exceptions.

var __ATEXIT__ = [];

var ABORT = false;

var undef = 0;
var tempValue, tempInt, tempBigInt, tempInt2, tempBigInt2, tempPair;

function abort(text) {
  print(text + ':\n' + (new Error).stack);
  ABORT = true;
  throw "Assertion: " + text;
}

function assert(condition, text) {
  if (!condition) {
    abort('Assertion failed: ' + text);
  }
}

// Sets a value in memory in a dynamic way at run-time. Uses the
// type data. This is the same as makeSetValue, except that
// makeSetValue is done at compile-time and generates the needed
// code then, whereas this function picks the right code at
// run-time.

function setValue(ptr, value, type) {
  if (type[type.length-1] === '*') type = 'i32'; // pointers are 32-bit
  switch(type) {
    case 'i1': HEAP[ptr]=value; break;
    case 'i8': HEAP[ptr]=value; break;
    case 'i16': HEAP[ptr]=value; break;
    case 'i32': HEAP[ptr]=value; break;
    case 'i64': HEAP[ptr]=value; break;
    case 'float': HEAP[ptr]=value; break;
    case 'double': HEAP[ptr]=value; break;
    default: abort('invalid type for setValue: ' + type);
  }
}
Module['setValue'] = setValue;

// Parallel to setValue.

function getValue(ptr, type) {
  if (type[type.length-1] === '*') type = 'i32'; // pointers are 32-bit
  switch(type) {
    case 'i1': return HEAP[ptr];
    case 'i8': return HEAP[ptr];
    case 'i16': return HEAP[ptr];
    case 'i32': return HEAP[ptr];
    case 'i64': return HEAP[ptr];
    case 'float': return HEAP[ptr];
    case 'double': return HEAP[ptr];
    default: abort('invalid type for setValue: ' + type);
  }
  return null;
}
Module['getValue'] = getValue;

// Allocates memory for some data and initializes it properly.

var ALLOC_NORMAL = 0; // Tries to use _malloc()
var ALLOC_STACK = 1; // Lives for the duration of the current function call
var ALLOC_STATIC = 2; // Cannot be freed
Module['ALLOC_NORMAL'] = ALLOC_NORMAL;
Module['ALLOC_STACK'] = ALLOC_STACK;
Module['ALLOC_STATIC'] = ALLOC_STATIC;

function allocate(slab, types, allocator) {
  var zeroinit, size;
  if (typeof slab === 'number') {
    zeroinit = true;
    size = slab;
  } else {
    zeroinit = false;
    size = slab.length;
  }

  var ret = [_malloc, Runtime.stackAlloc, Runtime.staticAlloc][allocator === undefined ? ALLOC_STATIC : allocator](Math.max(size, 1));

  var singleType = typeof types === 'string' ? types : null;

  var i = 0, type;
  while (i < size) {
    var curr = zeroinit ? 0 : slab[i];

    if (typeof curr === 'function') {
      curr = Runtime.getFunctionIndex(curr);
    }

    type = singleType || types[i];
    if (type === 0) {
      i++;
      continue;
    }
    assert(type, 'Must know what type to store in allocate!');


    setValue(ret+i, curr, type);
    i += Runtime.getNativeTypeSize(type);
  }

  return ret;
}
Module['allocate'] = allocate;

function Pointer_stringify(ptr) {
  var ret = "";
  var i = 0;
  var t;
  var nullByte = String.fromCharCode(0);
  while (1) {
    t = String.fromCharCode(HEAP[ptr+i]);
    if (t == nullByte) { break; } else {}
    ret += t;
    i += 1;
  }
  return ret;
}
Module['Pointer_stringify'] = Pointer_stringify;

function Array_stringify(array) {
  var ret = "";
  for (var i = 0; i < array.length; i++) {
    ret += String.fromCharCode(array[i]);
  }
  return ret;
}
Module['Array_stringify'] = Array_stringify;

// Memory management

var FUNCTION_TABLE; // XXX: In theory the indexes here can be equal to pointers to stacked or malloced memory. Such comparisons should
                    //      be false, but can turn out true. We should probably set the top bit to prevent such issues.

var PAGE_SIZE = 4096;
function alignMemoryPage(x) {
  return Math.ceil(x/PAGE_SIZE)*PAGE_SIZE;
}

var HEAP;

var STACK_ROOT, STACKTOP, STACK_MAX;
var STATICTOP;

var TOTAL_MEMORY = Module['TOTAL_MEMORY'] || 52428800;
var FAST_MEMORY = Module['FAST_MEMORY'] || 1;

// Initialize the runtime's memory
  // Make sure that our HEAP is implemented as a flat array.
  HEAP = new Array(TOTAL_MEMORY);
  for (var i = 0; i < FAST_MEMORY; i++) {
    HEAP[i] = 0; // XXX We do *not* use {{| makeSetValue(0, 'i', 0, 'null') |}} here, since this is done just to optimize runtime speed
  }

var base = intArrayFromString('(null)'); // So printing %s of NULL gives '(null)'
                                         // Also this ensures we leave 0 as an invalid address, 'NULL'
for (var i = 0; i < base.length; i++) {
  HEAP[i]=base[i]
}

Module['HEAP'] = HEAP;

STACK_ROOT = STACKTOP = alignMemoryPage(10);
var TOTAL_STACK = 1024*1024; // XXX: Changing this value can lead to bad perf on v8!
STACK_MAX = STACK_ROOT + TOTAL_STACK;

STATICTOP = alignMemoryPage(STACK_MAX);

function __shutdownRuntime__() {
  while(__ATEXIT__.length > 0) {
    var atexit = __ATEXIT__.pop();
    var func = atexit.func;
    if (typeof func === 'number') {
      func = FUNCTION_TABLE[func];
    }
    func(atexit.arg === undefined ? null : atexit.arg);
  }

  // allow browser to GC, set heaps to null?

  // Print summary of correction activity
  CorrectionsMonitor.print();
}


// Copies a list of num items on the HEAP into a
// a normal JavaScript array of numbers
function Array_copy(ptr, num) {
  return HEAP.slice(ptr, ptr+num);
}
Module['Array_copy'] = Array_copy;

function String_len(ptr) {
  var i = 0;
  while (HEAP[ptr+i]) i++; // Note: should be |!= 0|, technically. But this helps catch bugs with undefineds
  return i;
}
Module['String_len'] = String_len;

// Copies a C-style string, terminated by a zero, from the HEAP into
// a normal JavaScript array of numbers
function String_copy(ptr, addZero) {
  var len = String_len(ptr);
  if (addZero) len++;
  var ret = Array_copy(ptr, len);
  if (addZero) ret[len-1] = 0;
  return ret;
}
Module['String_copy'] = String_copy;

// Tools

if (typeof console === 'object' && typeof console.log === 'function') {
  this['print'] = function(x) { console.log(x) }; // web console
} else if (typeof print === 'undefined') {
  this['print'] = function(){}; // harmless no-op
}

// This processes a JS string into a C-line array of numbers, 0-terminated.
// For LLVM-originating strings, see parser.js:parseLLVMString function
function intArrayFromString(stringy, dontAddNull) {
  var ret = [];
  var t;
  var i = 0;
  while (i < stringy.length) {
    var chr = stringy.charCodeAt(i);
    if (chr > 0xFF) {
        assert(false, 'Character code ' + chr + ' (' + stringy[i] + ')  at offset ' + i + ' not in 0x00-0xFF.');
      chr &= 0xFF;
    }
    ret.push(chr);
    i = i + 1;
  }
  if (!dontAddNull) {
    ret.push(0);
  }
  return ret;
}
Module['intArrayFromString'] = intArrayFromString;

function intArrayToString(array) {
  var ret = [];
  for (var i = 0; i < array.length; i++) {
    var chr = array[i];
    if (chr > 0xFF) {
        assert(false, 'Character code ' + chr + ' (' + String.fromCharCode(chr) + ')  at offset ' + i + ' not in 0x00-0xFF.');
      chr &= 0xFF;
    }
    ret.push(String.fromCharCode(chr));
  }
  return ret.join('');
}
Module['intArrayToString'] = intArrayToString;

function unSign(value, bits, ignore, sig) {
  if (value >= 0) {
    return value;
  }
  return bits <= 32 ? 2*Math.abs(1 << (bits-1)) + value // Need some trickery, since if bits == 32, we are right at the limit of the bits JS uses in bitshifts
                    : Math.pow(2, bits)         + value;
  // TODO: clean up previous line
}
function reSign(value, bits, ignore, sig) {
  if (value <= 0) {
    return value;
  }
  var half = bits <= 32 ? Math.abs(1 << (bits-1)) // abs is needed if bits == 32
                        : Math.pow(2, bits-1);
  if (value >= half && (bits <= 32 || value > half)) { // for huge values, we can hit the precision limit and always get true here. so don't do that
    value = -2*half + value; // Cannot bitshift half, as it may be at the limit of the bits JS uses in bitshifts
  }
  return value;
}

// === Body ===



Runtime.QUANTUM_SIZE = 1
var $struct_MQRspec_Capacity___SIZE = 5; // %struct.MQRspec_Capacity
  
var $struct_QRspec_Capacity___SIZE = 7; // %struct.QRspec_Capacity
  
var $struct__RS___SIZE = 12; // %struct._RS
  
var $struct_BitStream___SIZE = 2; // %struct.BitStream
  
var $struct_QRcode___SIZE = 3; // %struct.QRcode
  
var $struct__QRinput___SIZE = 7; // %struct._QRinput
  
var $struct__QRinput_List___SIZE = 5; // %struct._QRinput_List
  
var $struct_BitStream_1___SIZE = 2; // %struct.BitStream.1
  
var $struct_MQRRawCode___SIZE = 8; // %struct.MQRRawCode
  
var $struct_RSblock___SIZE = 4; // %struct.RSblock
  
var $struct_FrameFiller___SIZE = 7; // %struct.FrameFiller
  
var $struct_QRRawCode___SIZE = 9; // %struct.QRRawCode
  
var $struct__QRcode_List___SIZE = 2; // %struct._QRcode_List
  
var $struct__QRinput_Struct___SIZE = 4; // %struct._QRinput_Struct
  
var $struct__QRinput_InputList___SIZE = 2; // %struct._QRinput_InputList
  
var __str;
var __str1;
var __str2;
var __str3;
var __str4;
var __str5;
var __str6;
var __str7;
var __str8;
var __str9;
var _maskMakers;
var _maskMakers1;
var _mqrspecCapacity;
var _lengthTableBits;
var _typeTable;
var _formatInfo;
var _frames;
var _putFinderPattern_finder;
var _QRinput_anTable;
var _qrspecCapacity;
var _lengthTableBits28;
var _eccTable;
var _versionPattern;
var _formatInfo29;
var _frames30;
var _alignmentPattern;
var _QRspec_putAlignmentMarker_finder;
var _putFinderPattern_finder31;
var _rslist;

  function _malloc(bytes) {
      return Runtime.staticAlloc(bytes || 1); // accept 0 as an input because libc implementations tend to
    }

  
  function _memcpy(dest, src, num, idunno) {
      assert(num % 1 === 0, 'memcpy given ' + num + ' bytes to copy. Problem with 1=1 corrections perhaps?');
      for (var mcpi_s=src,mcpi_e=src+num,mcpi_d=dest; mcpi_s<mcpi_e; mcpi_s++, mcpi_d++) {
    HEAP[mcpi_d] = HEAP[mcpi_s];
  };
    }var _llvm_memcpy_p0i8_p0i8_i32=_memcpy;

  function _free(){}

  
  function _strncmp(px, py, n) {
      var i = 0;
      while (i < n) {
        var x = HEAP[px+i];
        var y = HEAP[py+i];
        if (x == y && x == 0) return 0;
        if (x == 0) return -1;
        if (y == 0) return 1;
        if (x == y) {
          i ++;
          continue;
        } else {
          return x > y ? 1 : -1;
        }
      }
      return 0;
    }function _strcmp(px, py) {
      return _strncmp(px, py, TOTAL_MEMORY);
    }

  
  function _isspace(chr) {
      return chr in { 32: 0, 9: 0, 10: 0, 11: 0, 12: 0, 13: 0 };
    }
  
  function _isdigit(chr) {
      return chr >= '0'.charCodeAt(0) && chr <= '9'.charCodeAt(0);
    }function _atoi(s) {
      var c;
      while ((c = HEAP[s]) && _isspace(c)) s++;
      if (!c || !_isdigit(c)) return 0;
      var e = s;
      while ((c = HEAP[e]) && _isdigit(c)) e++;
      return Math.floor(Number(Pointer_stringify(s).substr(0, e-s)));
    }

  
  
  
  
  var ERRNO_CODES={E2BIG: 7, EACCES: 13, EADDRINUSE: 98, EADDRNOTAVAIL: 99, EAFNOSUPPORT: 97, EAGAIN: 11, EALREADY: 114, EBADF: 9, EBADMSG: 74, EBUSY: 16, ECANCELED: 125, ECHILD: 10, ECONNABORTED: 103, ECONNREFUSED: 111, ECONNRESET: 104, EDEADLK: 35, EDESTADDRREQ: 89, EDOM: 33, EDQUOT: 122, EEXIST: 17, EFAULT: 14, EFBIG: 27, EHOSTUNREACH: 113, EIDRM: 43, EILSEQ: 84, EINPROGRESS: 115, EINTR: 4, EINVAL: 22, EIO: 5, EISCONN: 106, EISDIR: 21, ELOOP: 40, EMFILE: 24, EMLINK: 31, EMSGSIZE: 90, EMULTIHOP: 72, ENAMETOOLONG: 36, ENETDOWN: 100, ENETRESET: 102, ENETUNREACH: 101, ENFILE: 23, ENOBUFS: 105, ENODATA: 61, ENODEV: 19, ENOENT: 2, ENOEXEC: 8, ENOLCK: 37, ENOLINK: 67, ENOMEM: 12, ENOMSG: 42, ENOPROTOOPT: 92, ENOSPC: 28, ENOSR: 63, ENOSTR: 60, ENOSYS: 38, ENOTCONN: 107, ENOTDIR: 20, ENOTEMPTY: 39, ENOTRECOVERABLE: 131, ENOTSOCK: 88, ENOTSUP: 95, ENOTTY: 25, ENXIO: 6, EOVERFLOW: 75, EOWNERDEAD: 130, EPERM: 1, EPIPE: 32, EPROTO: 71, EPROTONOSUPPORT: 93, EPROTOTYPE: 91, ERANGE: 34, EROFS: 30, ESPIPE: 29, ESRCH: 3, ESTALE: 116, ETIME: 62, ETIMEDOUT: 110, ETXTBSY: 26, EWOULDBLOCK: 11, EXDEV: 18 };
  
  function ___setErrNo(value) {
      // For convenient setting and returning of errno.
      if (!___setErrNo.ret) ___setErrNo.ret = allocate([0], 'i32', ALLOC_STATIC);
      HEAP[___setErrNo.ret]=value
      return value;
    }
  
  var _stdin=0;
  
  var _stdout=0;
  
  var _stderr=0;
  
  var __impure_ptr=0;var FS={currentPath: "/", nextInode: 2, streams: [null], ignorePermissions: true, absolutePath: function (relative, base) {
        if (typeof relative !== 'string') return null;
        if (base === undefined) base = FS.currentPath;
        if (relative && relative[0] == '/') base = '';
        var full = base + '/' + relative;
        var parts = full.split('/').reverse();
        var absolute = [''];
        while (parts.length) {
          var part = parts.pop();
          if (part == '' || part == '.') {
            // Nothing.
          } else if (part == '..') {
            if (absolute.length > 1) absolute.pop();
          } else {
            absolute.push(part);
          }
        }
        return absolute.length == 1 ? '/' : absolute.join('/');
      }, analyzePath: function (path, dontResolveLastLink, linksVisited) {
        var ret = {
          isRoot: false,
          exists: false,
          error: 0,
          name: null,
          path: null,
          object: null,
          parentExists: false,
          parentPath: null,
          parentObject: null
        };
        path = FS.absolutePath(path);
        if (path == '/') {
          ret.isRoot = true;
          ret.exists = ret.parentExists = true;
          ret.name = '/';
          ret.path = ret.parentPath = '/';
          ret.object = ret.parentObject = FS.root;
        } else if (path !== null) {
          linksVisited = linksVisited || 0;
          path = path.slice(1).split('/');
          var current = FS.root;
          var traversed = [''];
          while (path.length) {
            if (path.length == 1 && current.isFolder) {
              ret.parentExists = true;
              ret.parentPath = traversed.length == 1 ? '/' : traversed.join('/');
              ret.parentObject = current;
              ret.name = path[0];
            }
            var target = path.shift();
            if (!current.isFolder) {
              ret.error = ERRNO_CODES.ENOTDIR;
              break;
            } else if (!current.read) {
              ret.error = ERRNO_CODES.EACCES;
              break;
            } else if (!current.contents.hasOwnProperty(target)) {
              ret.error = ERRNO_CODES.ENOENT;
              break;
            }
            current = current.contents[target];
            if (current.link && !(dontResolveLastLink && path.length == 0)) {
              if (linksVisited > 40) { // Usual Linux SYMLOOP_MAX.
                ret.error = ERRNO_CODES.ELOOP;
                break;
              }
              var link = FS.absolutePath(current.link, traversed.join('/'));
              return FS.analyzePath([link].concat(path).join('/'),
                                    dontResolveLastLink, linksVisited + 1);
            }
            traversed.push(target);
            if (path.length == 0) {
              ret.exists = true;
              ret.path = traversed.join('/');
              ret.object = current;
            }
          }
          return ret;
        }
        return ret;
      }, findObject: function (path, dontResolveLastLink) {
        FS.ensureRoot();
        var ret = FS.analyzePath(path, dontResolveLastLink);
        if (ret.exists) {
          return ret.object;
        } else {
          ___setErrNo(ret.error);
          return null;
        }
      }, createObject: function (parent, name, properties, canRead, canWrite) {
        if (!parent) parent = '/';
        if (typeof parent === 'string') parent = FS.findObject(parent);
  
        if (!parent) {
          ___setErrNo(ERRNO_CODES.EACCES);
          throw new Error('Parent path must exist.');
        }
        if (!parent.isFolder) {
          ___setErrNo(ERRNO_CODES.ENOTDIR);
          throw new Error('Parent must be a folder.');
        }
        if (!parent.write && !FS.ignorePermissions) {
          ___setErrNo(ERRNO_CODES.EACCES);
          throw new Error('Parent folder must be writeable.');
        }
        if (!name || name == '.' || name == '..') {
          ___setErrNo(ERRNO_CODES.ENOENT);
          throw new Error('Name must not be empty.');
        }
        if (parent.contents.hasOwnProperty(name)) {
          ___setErrNo(ERRNO_CODES.EEXIST);
          throw new Error("Can't overwrite object.");
        }
  
        parent.contents[name] = {
          read: canRead === undefined ? true : canRead,
          write: canWrite === undefined ? false : canWrite,
          timestamp: Date.now(),
          inodeNumber: FS.nextInode++
        };
        for (var key in properties) {
          if (properties.hasOwnProperty(key)) {
            parent.contents[name][key] = properties[key];
          }
        }
  
        return parent.contents[name];
      }, createFolder: function (parent, name, canRead, canWrite) {
        var properties = {isFolder: true, isDevice: false, contents: {}};
        return FS.createObject(parent, name, properties, canRead, canWrite);
      }, createPath: function (parent, path, canRead, canWrite) {
        var current = FS.findObject(parent);
        if (current === null) throw new Error('Invalid parent.');
        path = path.split('/').reverse();
        while (path.length) {
          var part = path.pop();
          if (!part) continue;
          if (!current.contents.hasOwnProperty(part)) {
            FS.createFolder(current, part, canRead, canWrite);
          }
          current = current.contents[part];
        }
        return current;
      }, createFile: function (parent, name, properties, canRead, canWrite) {
        properties.isFolder = false;
        return FS.createObject(parent, name, properties, canRead, canWrite);
      }, createDataFile: function (parent, name, data, canRead, canWrite) {
        if (typeof data === 'string') {
          var dataArray = [];
          for (var i = 0; i < data.length; i++) dataArray.push(data.charCodeAt(i));
          data = dataArray;
        }
        var properties = {isDevice: false, contents: data};
        return FS.createFile(parent, name, properties, canRead, canWrite);
      }, createLazyFile: function (parent, name, url, canRead, canWrite) {
        var properties = {isDevice: false, url: url};
        return FS.createFile(parent, name, properties, canRead, canWrite);
      }, createLink: function (parent, name, target, canRead, canWrite) {
        var properties = {isDevice: false, link: target};
        return FS.createFile(parent, name, properties, canRead, canWrite);
      }, createDevice: function (parent, name, input, output) {
        if (!(input || output)) {
          throw new Error('A device must have at least one callback defined.');
        }
        var ops = {isDevice: true, input: input, output: output};
        return FS.createFile(parent, name, ops, Boolean(input), Boolean(output));
      }, forceLoadFile: function (obj) {
        if (obj.isDevice || obj.isFolder || obj.link || obj.contents) return true;
        var success = true;
        if (typeof XMLHttpRequest !== 'undefined') {
          // Browser.
          // TODO: Use mozResponseArrayBuffer, responseStream, etc. if available.
          var xhr = new XMLHttpRequest();
          xhr.open('GET', obj.url, false);
  
          // Some hints to the browser that we want binary data.
          if (typeof Uint8Array != 'undefined') xhr.responseType = 'arraybuffer';
          if (xhr.overrideMimeType) {
            xhr.overrideMimeType('text/plain; charset=x-user-defined');
          }
  
          xhr.send(null);
          if (xhr.status != 200 && xhr.status != 0) success = false;
          if (xhr.response !== undefined) {
            obj.contents = new Uint8Array(xhr.response || []);
          } else {
            obj.contents = intArrayFromString(xhr.responseText || '', true);
          }
        } else if (typeof read !== 'undefined') {
          // Command-line.
          try {
            // WARNING: Can't read binary files in V8's d8 or tracemonkey's js, as
            //          read() will try to parse UTF8.
            obj.contents = intArrayFromString(read(obj.url), true);
          } catch (e) {
            success = false;
          }
        } else {
          throw new Error('Cannot load without read() or XMLHttpRequest.');
        }
        if (!success) ___setErrNo(ERRNO_CODES.EIO);
        return success;
      }, ensureRoot: function () {
        if (FS.root) return;
        // The main file system tree. All the contents are inside this.
        FS.root = {
          read: true,
          write: false,
          isFolder: true,
          isDevice: false,
          timestamp: Date.now(),
          inodeNumber: 1,
          contents: {}
        };
      }, init: function (input, output, error) {
        // Make sure we initialize only once.
        if (FS.init.initialized) return;
        FS.init.initialized = true;
  
        FS.ensureRoot();
  
        // Default handlers.
        if (!input) input = function() {
          if (!input.cache || !input.cache.length) {
            var result;
            if (typeof window != 'undefined' &&
                typeof window.prompt == 'function') {
              // Browser.
              result = window.prompt('Input: ');
            } else if (typeof readline == 'function') {
              // Command line.
              result = readline();
            }
            if (!result) result = '';
            input.cache = intArrayFromString(result + '\n', true);
          }
          return input.cache.shift();
        };
        if (!output) output = function(val) {
          if (val === null || val === '\n'.charCodeAt(0)) {
            output.printer(output.buffer.join(''));
            output.buffer = [];
          } else {
            output.buffer.push(String.fromCharCode(val));
          }
        };
        if (!output.printer) output.printer = print;
        if (!output.buffer) output.buffer = [];
        if (!error) error = output;
  
        // Create the temporary folder.
        FS.createFolder('/', 'tmp', true, true);
  
        // Create the I/O devices.
        var devFolder = FS.createFolder('/', 'dev', true, false);
        var stdin = FS.createDevice(devFolder, 'stdin', input);
        var stdout = FS.createDevice(devFolder, 'stdout', null, output);
        var stderr = FS.createDevice(devFolder, 'stderr', null, error);
        FS.createDevice(devFolder, 'tty', input, output);
  
        // Create default streams.
        FS.streams[1] = {
          path: '/dev/stdin',
          object: stdin,
          position: 0,
          isRead: true,
          isWrite: false,
          isAppend: false,
          error: false,
          eof: false,
          ungotten: []
        };
        FS.streams[2] = {
          path: '/dev/stdout',
          object: stdout,
          position: 0,
          isRead: false,
          isWrite: true,
          isAppend: false,
          error: false,
          eof: false,
          ungotten: []
        };
        FS.streams[3] = {
          path: '/dev/stderr',
          object: stderr,
          position: 0,
          isRead: false,
          isWrite: true,
          isAppend: false,
          error: false,
          eof: false,
          ungotten: []
        };
        _stdin = allocate([1], 'void*', ALLOC_STATIC);
        _stdout = allocate([2], 'void*', ALLOC_STATIC);
        _stderr = allocate([3], 'void*', ALLOC_STATIC);
  
        // Newlib initialization
        FS.streams[_stdin] = FS.streams[1];
        FS.streams[_stdout] = FS.streams[2];
        FS.streams[_stderr] = FS.streams[3];
        __impure_ptr = allocate([ allocate(
          [0, _stdin, _stdout, _stderr],
          'void*', ALLOC_STATIC) ], 'void*', ALLOC_STATIC);
  
        // Once initialized, permissions start having effect.
        FS.ignorePermissions = false;
      }, quit: function () {
        // Flush any partially-printed lines in stdout and stderr
        if (FS.streams[2].object.output.buffer.length > 0) FS.streams[2].object.output('\n'.charCodeAt(0));
        if (FS.streams[3].object.output.buffer.length > 0) FS.streams[3].object.output('\n'.charCodeAt(0));
      } };
  
  
  
  
  
  
  
  function _pwrite(fildes, buf, nbyte, offset) {
      // ssize_t pwrite(int fildes, const void *buf, size_t nbyte, off_t offset);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/write.html
      var stream = FS.streams[fildes];
      if (!stream || stream.object.isDevice) {
        ___setErrNo(ERRNO_CODES.EBADF);
        return -1;
      } else if (!stream.isWrite) {
        ___setErrNo(ERRNO_CODES.EACCES);
        return -1;
      } else if (stream.object.isFolder) {
        ___setErrNo(ERRNO_CODES.EISDIR);
        return -1;
      } else if (nbyte < 0 || offset < 0) {
        ___setErrNo(ERRNO_CODES.EINVAL);
        return -1;
      } else {
        var contents = stream.object.contents;
        while (contents.length < offset) contents.push(0);
        for (var i = 0; i < nbyte; i++) {
          contents[offset + i] = HEAP[buf+i];
        }
        stream.object.timestamp = Date.now();
        return i;
      }
    }function _write(fildes, buf, nbyte) {
      // ssize_t write(int fildes, const void *buf, size_t nbyte);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/write.html
      var stream = FS.streams[fildes];
      if (!stream) {
        ___setErrNo(ERRNO_CODES.EBADF);
        return -1;
      } else if (!stream.isWrite) {
        ___setErrNo(ERRNO_CODES.EACCES);
        return -1;
      } else if (nbyte < 0) {
        ___setErrNo(ERRNO_CODES.EINVAL);
        return -1;
      } else {
        if (stream.object.isDevice) {
          if (stream.object.output) {
            for (var i = 0; i < nbyte; i++) {
              try {
                stream.object.output(HEAP[buf+i]);
              } catch (e) {
                ___setErrNo(ERRNO_CODES.EIO);
                return -1;
              }
            }
            stream.object.timestamp = Date.now();
            return i;
          } else {
            ___setErrNo(ERRNO_CODES.ENXIO);
            return -1;
          }
        } else {
          var bytesWritten = _pwrite(fildes, buf, nbyte, stream.position);
          if (bytesWritten != -1) stream.position += bytesWritten;
          return bytesWritten;
        }
      }
    }function _fwrite(ptr, size, nitems, stream) {
      // size_t fwrite(const void *restrict ptr, size_t size, size_t nitems, FILE *restrict stream);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/fwrite.html
      var bytesToWrite = nitems * size;
      if (bytesToWrite == 0) return 0;
      var bytesWritten = _write(stream, ptr, bytesToWrite);
      if (bytesWritten == -1) {
        if (FS.streams[stream]) FS.streams[stream].error = true;
        return -1;
      } else {
        return Math.floor(bytesWritten / size);
      }
    }
  
  function __formatString(format, varargs) {
      var textIndex = format;
      var argIndex = 0;
      var getNextArg = function(type) {
        // NOTE: Explicitly ignoring type safety. Otherwise this fails:
        //       int x = 4; printf("%c\n", (char)x);
        var ret;
        if (type === 'float' || type === 'double') {
          ret = HEAP[varargs+argIndex];
        } else {
          ret = HEAP[varargs+argIndex];
        }
        argIndex += Runtime.getNativeFieldSize(type);
        return Number(ret);
      };
  
      var ret = [];
      var curr, next, currArg;
      while(1) {
        var startTextIndex = textIndex;
        curr = HEAP[textIndex];
        if (curr === 0) break;
        next = HEAP[textIndex+1];
        if (curr == '%'.charCodeAt(0)) {
          // Handle flags.
          var flagAlwaysSigned = false;
          var flagLeftAlign = false;
          var flagAlternative = false;
          var flagZeroPad = false;
          flagsLoop: while (1) {
            switch (next) {
              case '+'.charCodeAt(0):
                flagAlwaysSigned = true;
                break;
              case '-'.charCodeAt(0):
                flagLeftAlign = true;
                break;
              case '#'.charCodeAt(0):
                flagAlternative = true;
                break;
              case '0'.charCodeAt(0):
                if (flagZeroPad) {
                  break flagsLoop;
                } else {
                  flagZeroPad = true;
                  break;
                }
              default:
                break flagsLoop;
            }
            textIndex++;
            next = HEAP[textIndex+1];
          }
  
          // Handle width.
          var width = 0;
          if (next == '*'.charCodeAt(0)) {
            width = getNextArg('i32');
            textIndex++;
            next = HEAP[textIndex+1];
          } else {
            while (next >= '0'.charCodeAt(0) && next <= '9'.charCodeAt(0)) {
              width = width * 10 + (next - '0'.charCodeAt(0));
              textIndex++;
              next = HEAP[textIndex+1];
            }
          }
  
          // Handle precision.
          var precisionSet = false;
          if (next == '.'.charCodeAt(0)) {
            var precision = 0;
            precisionSet = true;
            textIndex++;
            next = HEAP[textIndex+1];
            if (next == '*'.charCodeAt(0)) {
              precision = getNextArg('i32');
              textIndex++;
            } else {
              while(1) {
                var precisionChr = HEAP[textIndex+1];
                if (precisionChr < '0'.charCodeAt(0) ||
                    precisionChr > '9'.charCodeAt(0)) break;
                precision = precision * 10 + (precisionChr - '0'.charCodeAt(0));
                textIndex++;
              }
            }
            next = HEAP[textIndex+1];
          } else {
            var precision = 6; // Standard default.
          }
  
          // Handle integer sizes. WARNING: These assume a 32-bit architecture!
          var argSize;
          switch (String.fromCharCode(next)) {
            case 'h':
              var nextNext = HEAP[textIndex+2];
              if (nextNext == 'h'.charCodeAt(0)) {
                textIndex++;
                argSize = 1; // char
              } else {
                argSize = 2; // short
              }
              break;
            case 'l':
              var nextNext = HEAP[textIndex+2];
              if (nextNext == 'l'.charCodeAt(0)) {
                textIndex++;
                argSize = 8; // long long
              } else {
                argSize = 4; // long
              }
              break;
            case 'L': // long long
            case 'q': // int64_t
            case 'j': // intmax_t
              argSize = 8;
              break;
            case 'z': // size_t
            case 't': // ptrdiff_t
            case 'I': // signed ptrdiff_t or unsigned size_t
              argSize = 4;
              break;
            default:
              argSize = undefined;
          }
          if (argSize !== undefined) textIndex++;
          next = HEAP[textIndex+1];
  
          // Handle type specifier.
          if (['d', 'i', 'u', 'o', 'x', 'X', 'p'].indexOf(String.fromCharCode(next)) != -1) {
            // Integer.
            var signed = next == 'd'.charCodeAt(0) || next == 'i'.charCodeAt(0);
            argSize = argSize || 4;
            var currArg = getNextArg('i' + (argSize * 8));
            // Truncate to requested size.
            if (argSize <= 4) {
              var limit = Math.pow(256, argSize) - 1;
              currArg = (signed ? reSign : unSign)(currArg & limit, argSize * 8);
            }
            // Format the number.
            var currAbsArg = Math.abs(currArg);
            var argText;
            var prefix = '';
            if (next == 'd'.charCodeAt(0) || next == 'i'.charCodeAt(0)) {
              argText = reSign(currArg, 8 * argSize, 1).toString(10);
            } else if (next == 'u'.charCodeAt(0)) {
              argText = unSign(currArg, 8 * argSize, 1).toString(10);
              currArg = Math.abs(currArg);
            } else if (next == 'o'.charCodeAt(0)) {
              argText = (flagAlternative ? '0' : '') + currAbsArg.toString(8);
            } else if (next == 'x'.charCodeAt(0) || next == 'X'.charCodeAt(0)) {
              prefix = flagAlternative ? '0x' : '';
              if (currArg < 0) {
                // Represent negative numbers in hex as 2's complement.
                currArg = -currArg;
                argText = (currAbsArg - 1).toString(16);
                var buffer = [];
                for (var i = 0; i < argText.length; i++) {
                  buffer.push((0xF - parseInt(argText[i], 16)).toString(16));
                }
                argText = buffer.join('');
                while (argText.length < argSize * 2) argText = 'f' + argText;
              } else {
                argText = currAbsArg.toString(16);
              }
              if (next == 'X'.charCodeAt(0)) {
                prefix = prefix.toUpperCase();
                argText = argText.toUpperCase();
              }
            } else if (next == 'p'.charCodeAt(0)) {
              if (currAbsArg === 0) {
                argText = '(nil)';
              } else {
                prefix = '0x';
                argText = currAbsArg.toString(16);
              }
            }
            if (precisionSet) {
              while (argText.length < precision) {
                argText = '0' + argText;
              }
            }
  
            // Add sign if needed
            if (flagAlwaysSigned) {
              if (currArg < 0) {
                prefix = '-' + prefix;
              } else {
                prefix = '+' + prefix;
              }
            }
  
            // Add padding.
            while (prefix.length + argText.length < width) {
              if (flagLeftAlign) {
                argText += ' ';
              } else {
                if (flagZeroPad) {
                  argText = '0' + argText;
                } else {
                  prefix = ' ' + prefix;
                }
              }
            }
  
            // Insert the result into the buffer.
            argText = prefix + argText;
            argText.split('').forEach(function(chr) {
              ret.push(chr.charCodeAt(0));
            });
          } else if (['f', 'F', 'e', 'E', 'g', 'G'].indexOf(String.fromCharCode(next)) != -1) {
            // Float.
            var currArg = getNextArg(argSize === 4 ? 'float' : 'double');
            var argText;
  
            if (isNaN(currArg)) {
              argText = 'nan';
              flagZeroPad = false;
            } else if (!isFinite(currArg)) {
              argText = (currArg < 0 ? '-' : '') + 'inf';
              flagZeroPad = false;
            } else {
              var isGeneral = false;
              var effectivePrecision = Math.min(precision, 20);
  
              // Convert g/G to f/F or e/E, as per:
              // http://pubs.opengroup.org/onlinepubs/9699919799/functions/printf.html
              if (next == 'g'.charCodeAt(0) || next == 'G'.charCodeAt(0)) {
                isGeneral = true;
                precision = precision || 1;
                var exponent = parseInt(currArg.toExponential(effectivePrecision).split('e')[1], 10);
                if (precision > exponent && exponent >= -4) {
                  next = ((next == 'g'.charCodeAt(0)) ? 'f' : 'F').charCodeAt(0);
                  precision -= exponent + 1;
                } else {
                  next = ((next == 'g'.charCodeAt(0)) ? 'e' : 'E').charCodeAt(0);
                  precision--;
                }
                effectivePrecision = Math.min(precision, 20);
              }
  
              if (next == 'e'.charCodeAt(0) || next == 'E'.charCodeAt(0)) {
                argText = currArg.toExponential(effectivePrecision);
                // Make sure the exponent has at least 2 digits.
                if (/[eE][-+]\d$/.test(argText)) {
                  argText = argText.slice(0, -1) + '0' + argText.slice(-1);
                }
              } else if (next == 'f'.charCodeAt(0) || next == 'F'.charCodeAt(0)) {
                argText = currArg.toFixed(effectivePrecision);
              }
  
              var parts = argText.split('e');
              if (isGeneral && !flagAlternative) {
                // Discard trailing zeros and periods.
                while (parts[0].length > 1 && parts[0].indexOf('.') != -1 &&
                       (parts[0].slice(-1) == '0' || parts[0].slice(-1) == '.')) {
                  parts[0] = parts[0].slice(0, -1);
                }
              } else {
                // Make sure we have a period in alternative mode.
                if (flagAlternative && argText.indexOf('.') == -1) parts[0] += '.';
                // Zero pad until required precision.
                while (precision > effectivePrecision++) parts[0] += '0';
              }
              argText = parts[0] + (parts.length > 1 ? 'e' + parts[1] : '');
  
              // Capitalize 'E' if needed.
              if (next == 'E'.charCodeAt(0)) argText = argText.toUpperCase();
  
              // Add sign.
              if (flagAlwaysSigned && currArg >= 0) {
                argText = '+' + argText;
              }
            }
  
            // Add padding.
            while (argText.length < width) {
              if (flagLeftAlign) {
                argText += ' ';
              } else {
                if (flagZeroPad && (argText[0] == '-' || argText[0] == '+')) {
                  argText = argText[0] + '0' + argText.slice(1);
                } else {
                  argText = (flagZeroPad ? '0' : ' ') + argText;
                }
              }
            }
  
            // Adjust case.
            if (next < 'a'.charCodeAt(0)) argText = argText.toUpperCase();
  
            // Insert the result into the buffer.
            argText.split('').forEach(function(chr) {
              ret.push(chr.charCodeAt(0));
            });
          } else if (next == 's'.charCodeAt(0)) {
            // String.
            var arg = getNextArg('i8*');
            var copiedString;
            if (arg) {
              copiedString = String_copy(arg);
              if (precisionSet && copiedString.length > precision) {
                copiedString = copiedString.slice(0, precision);
              }
            } else {
              copiedString = intArrayFromString('(null)', true);
            }
            if (!flagLeftAlign) {
              while (copiedString.length < width--) {
                ret.push(' '.charCodeAt(0));
              }
            }
            ret = ret.concat(copiedString);
            if (flagLeftAlign) {
              while (copiedString.length < width--) {
                ret.push(' '.charCodeAt(0));
              }
            }
          } else if (next == 'c'.charCodeAt(0)) {
            // Character.
            if (flagLeftAlign) ret.push(getNextArg('i8'));
            while (--width > 0) {
              ret.push(' '.charCodeAt(0));
            }
            if (!flagLeftAlign) ret.push(getNextArg('i8'));
          } else if (next == 'n'.charCodeAt(0)) {
            // Write the length written so far to the next parameter.
            var ptr = getNextArg('i32*');
            HEAP[ptr]=ret.length
          } else if (next == '%'.charCodeAt(0)) {
            // Literal percent sign.
            ret.push(curr);
          } else {
            // Unknown specifiers remain untouched.
            for (var i = startTextIndex; i < textIndex + 2; i++) {
              ret.push(HEAP[i]);
            }
          }
          textIndex += 2;
          // TODO: Support a/A (hex float) and m (last error) specifiers.
          // TODO: Support %1${specifier} for arg selection.
        } else {
          ret.push(curr);
          textIndex += 1;
        }
      }
      return ret;
    }function _fprintf(stream, format, varargs) {
      // int fprintf(FILE *restrict stream, const char *restrict format, ...);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/printf.html
      var result = __formatString(format, varargs);
      var stack = Runtime.stackSave();
      var ret = _fwrite(allocate(result, 'i8', ALLOC_STACK), 1, result.length, stream);
      Runtime.stackRestore(stack);
      return ret;
    }function _printf(format, varargs) {
      // int printf(const char *restrict format, ...);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/printf.html
      var stdout = HEAP[_stdout];
      return _fprintf(stdout, format, varargs);
    }

  
  function ___errno_location() {
      return ___setErrNo.ret;
    }
  var ___errno=___errno_location;

  function _strlen(ptr) {
      return String_len(ptr);
    }

  var _abs=Math.abs;

  
  function _memset(ptr, value, num) {
      for (var mspi = 0; mspi < num; mspi++) {
  HEAP[ptr+mspi]=value
  }
    }var _llvm_memset_p0i8_i32=_memset;

  function _calloc(n, s) {
      var ret = _malloc(n*s);
      _memset(ret, 0, n*s);
      return ret;
    }

  
  function _memmove(dest, src, num, idunno) {
      // not optimized!
      if (num === 0) return; // will confuse malloc if 0
      var tmp = _malloc(num);
      _memcpy(tmp, src, num);
      _memcpy(dest, tmp, num);
      _free(tmp);
    }
  var _llvm_memmove_p0i8_p0i8_i32=_memmove;

  function _strdup(ptr) {
      var len = String_len(ptr);
      var newStr = _malloc(len + 1);
      for (var mcpi_s=ptr,mcpi_e=ptr+len,mcpi_d=newStr; mcpi_s<mcpi_e; mcpi_s++, mcpi_d++) {
    HEAP[mcpi_d] = HEAP[mcpi_s];
  };
      HEAP[newStr+len]=0;
      return newStr;
    }




  function _BitStream_new() {
    ;
    var __label__;
  
    var $retval;
    var $bstream;
    var $call=_malloc(8);
    var $0=$call;
    $bstream=$0;
    var $1=$bstream;
    var $cmp=((($1))|0)==0;
    if ($cmp) { __label__ = 1;; } else { __label__ = 2;; }
    if (__label__ == 1) {
  
      $retval=0;
      ;
    }
    else if (__label__ == 2) {
  
      var $2=$bstream;
      var $length=$2;
      HEAP[$length]=0;
      var $3=$bstream;
      var $data=$3+1;
      HEAP[$data]=0;
      var $4=$bstream;
      $retval=$4;
      ;
    }
  
    var $5=$retval;
    ;
    return $5;
    return null;
  }
  

  function _BitStream_append($bstream, $arg) {
    ;
    var __label__;
  
    var $retval;
    var $bstream_addr;
    var $arg_addr;
    var $data;
    $bstream_addr=$bstream;
    $arg_addr=$arg;
    var $0=$arg_addr;
    var $cmp=((($0))|0)==0;
    if ($cmp) { __label__ = 1;; } else { __label__ = 2;; }
    if (__label__ == 1) {
  
      $retval=-1;
      ;
    }
    else if (__label__ == 2) {
  
      var $1=$arg_addr;
      var $length=$1;
      var $2=HEAP[$length];
      var $cmp1=((($2))|0)==0;
      if ($cmp1) { __label__ = 3;; } else { __label__ = 4;; }
      if (__label__ == 3) {
  
        $retval=0;
        ;
      }
      else if (__label__ == 4) {
  
        var $3=$bstream_addr;
        var $length4=$3;
        var $4=HEAP[$length4];
        var $cmp5=((($4))|0)==0;
        if ($cmp5) { __label__ = 5;; } else { __label__ = 8;; }
        if (__label__ == 5) {
  
          var $5=$bstream_addr;
          var $6=$arg_addr;
          var $length7=$6;
          var $7=HEAP[$length7];
          var $call=_BitStream_allocate($5, $7);
          var $tobool=((($call))|0)!=0;
          if ($tobool) { __label__ = 6;; } else { __label__ = 7;; }
          if (__label__ == 6) {
  
            $retval=-1;
            ;
          }
          else if (__label__ == 7) {
  
            var $8=$bstream_addr;
            var $data10=$8+1;
            var $9=HEAP[$data10];
            var $10=$arg_addr;
            var $data11=$10+1;
            var $11=HEAP[$data11];
            var $12=$arg_addr;
            var $length12=$12;
            var $13=HEAP[$length12];
            assert($13 % 1 === 0, 'memcpy given ' + $13 + ' bytes to copy. Problem with 1=1 corrections perhaps?');for (var mcpi_s=$11,mcpi_e=$11+$13,mcpi_d=$9; mcpi_s<mcpi_e; mcpi_s++, mcpi_d++) {
              HEAP[mcpi_d] = HEAP[mcpi_s];
            };
            $retval=0;
            ;
          }
        }
        else if (__label__ == 8) {
  
          var $14=$bstream_addr;
          var $length14=$14;
          var $15=HEAP[$length14];
          var $16=$arg_addr;
          var $length15=$16;
          var $17=HEAP[$length15];
          var $add=($15)+($17);
          var $call16=_malloc($add);
          $data=$call16;
          var $18=$data;
          var $cmp17=((($18))|0)==0;
          if ($cmp17) { __label__ = 9;; } else { __label__ = 10;; }
          if (__label__ == 9) {
  
            $retval=-1;
            ;
          }
          else if (__label__ == 10) {
  
            var $19=$data;
            var $20=$bstream_addr;
            var $data20=$20+1;
            var $21=HEAP[$data20];
            var $22=$bstream_addr;
            var $length21=$22;
            var $23=HEAP[$length21];
            assert($23 % 1 === 0, 'memcpy given ' + $23 + ' bytes to copy. Problem with 1=1 corrections perhaps?');for (var mcpi_s=$21,mcpi_e=$21+$23,mcpi_d=$19; mcpi_s<mcpi_e; mcpi_s++, mcpi_d++) {
              HEAP[mcpi_d] = HEAP[mcpi_s];
            };
            var $24=$data;
            var $25=$bstream_addr;
            var $length22=$25;
            var $26=HEAP[$length22];
            var $add_ptr=$24+$26;
            var $27=$arg_addr;
            var $data23=$27+1;
            var $28=HEAP[$data23];
            var $29=$arg_addr;
            var $length24=$29;
            var $30=HEAP[$length24];
            assert($30 % 1 === 0, 'memcpy given ' + $30 + ' bytes to copy. Problem with 1=1 corrections perhaps?');for (var mcpi_s=$28,mcpi_e=$28+$30,mcpi_d=$add_ptr; mcpi_s<mcpi_e; mcpi_s++, mcpi_d++) {
              HEAP[mcpi_d] = HEAP[mcpi_s];
            };
            var $31=$bstream_addr;
            var $data25=$31+1;
            var $32=HEAP[$data25];
            ;
            var $33=$arg_addr;
            var $length26=$33;
            var $34=HEAP[$length26];
            var $35=$bstream_addr;
            var $length27=$35;
            var $36=HEAP[$length27];
            var $add28=($36)+($34);
            HEAP[$length27]=$add28;
            var $37=$data;
            var $38=$bstream_addr;
            var $data29=$38+1;
            HEAP[$data29]=$37;
            $retval=0;
            ;
          }
        }
      }
    }
  
    var $39=$retval;
    ;
    return $39;
    return null;
  }
  _BitStream_append["X"]=1;

  function _BitStream_allocate($bstream, $length) {
    ;
    var __label__;
  
    var $retval;
    var $bstream_addr;
    var $length_addr;
    var $data;
    $bstream_addr=$bstream;
    $length_addr=$length;
    var $0=$bstream_addr;
    var $cmp=((($0))|0)==0;
    if ($cmp) { __label__ = 1;; } else { __label__ = 2;; }
    if (__label__ == 1) {
  
      $retval=-1;
      ;
    }
    else if (__label__ == 2) {
  
      var $1=$length_addr;
      var $call=_malloc($1);
      $data=$call;
      var $2=$data;
      var $cmp1=((($2))|0)==0;
      if ($cmp1) { __label__ = 3;; } else { __label__ = 4;; }
      if (__label__ == 3) {
  
        $retval=-1;
        ;
      }
      else if (__label__ == 4) {
  
        var $3=$bstream_addr;
        var $data4=$3+1;
        var $4=HEAP[$data4];
        var $tobool=((($4))|0)!=0;
        if ($tobool) { __label__ = 5;; } else { __label__ = 6;; }
        if (__label__ == 5) {
  
          var $5=$bstream_addr;
          var $data6=$5+1;
          var $6=HEAP[$data6];
          ;
          ;
        }
  
        var $7=$length_addr;
        var $8=$bstream_addr;
        var $length8=$8;
        HEAP[$length8]=$7;
        var $9=$data;
        var $10=$bstream_addr;
        var $data9=$10+1;
        HEAP[$data9]=$9;
        $retval=0;
        ;
      }
    }
  
    var $11=$retval;
    ;
    return $11;
    return null;
  }
  

  function _BitStream_appendNum($bstream, $bits, $num) {
    ;
    var __label__;
  
    var $retval;
    var $bstream_addr;
    var $bits_addr;
    var $num_addr;
    var $b;
    var $ret;
    $bstream_addr=$bstream;
    $bits_addr=$bits;
    $num_addr=$num;
    var $0=$bits_addr;
    var $cmp=((($0))|0)==0;
    if ($cmp) { __label__ = 1;; } else { __label__ = 2;; }
    if (__label__ == 1) {
  
      $retval=0;
      ;
    }
    else if (__label__ == 2) {
  
      var $1=$bits_addr;
      var $2=$num_addr;
      var $call=_BitStream_newFromNum($1, $2);
      $b=$call;
      var $3=$b;
      var $cmp1=((($3))|0)==0;
      if ($cmp1) { __label__ = 3;; } else { __label__ = 4;; }
      if (__label__ == 3) {
  
        $retval=-1;
        ;
      }
      else if (__label__ == 4) {
  
        var $4=$bstream_addr;
        var $5=$b;
        var $call4=_BitStream_append($4, $5);
        $ret=$call4;
        var $6=$b;
        _BitStream_free($6);
        var $7=$ret;
        $retval=$7;
        ;
      }
    }
  
    var $8=$retval;
    ;
    return $8;
    return null;
  }
  

  function _BitStream_newFromNum($bits, $num) {
    ;
    var __label__;
  
    var $retval;
    var $bits_addr;
    var $num_addr;
    var $mask;
    var $i;
    var $p;
    var $bstream;
    $bits_addr=$bits;
    $num_addr=$num;
    var $call=_BitStream_new();
    $bstream=$call;
    var $0=$bstream;
    var $cmp=((($0))|0)==0;
    if ($cmp) { __label__ = 1;; } else { __label__ = 2;; }
    if (__label__ == 1) {
  
      $retval=0;
      ;
    }
    else if (__label__ == 2) {
  
      var $1=$bstream;
      var $2=$bits_addr;
      var $call1=_BitStream_allocate($1, $2);
      var $tobool=((($call1))|0)!=0;
      if ($tobool) { __label__ = 3;; } else { __label__ = 4;; }
      if (__label__ == 3) {
  
        var $3=$bstream;
        _BitStream_free($3);
        $retval=0;
        ;
      }
      else if (__label__ == 4) {
  
        var $4=$bstream;
        var $data=$4+1;
        var $5=HEAP[$data];
        $p=$5;
        var $6=$bits_addr;
        var $sub=($6)-1;
        var $shl=1 << ($sub);
        $mask=$shl;
        $i=0;
        ;
        while(1) { 
  
          var $7=$i;
          var $8=$bits_addr;
          var $cmp4=((($7))|0) < ((($8))|0);
          if (!($cmp4)) { __label__ = 11;break ; }
  
          var $9=$num_addr;
          var $10=$mask;
          var $and=($9) & ($10);
          var $tobool5=((($and))|0)!=0;
          if ($tobool5) { __label__ = 7;; } else { __label__ = 8;; }
          if (__label__ == 7) {
  
            var $11=$p;
            HEAP[$11]=1;
            ;
          }
          else if (__label__ == 8) {
  
            var $12=$p;
            HEAP[$12]=0;
            ;
          }
  
          var $13=$p;
          var $incdec_ptr=$13+1;
          $p=$incdec_ptr;
          var $14=$mask;
          var $shr=($14) >>> 1;
          $mask=$shr;
          ;
  
          var $15=$i;
          var $inc=($15)+1;
          $i=$inc;
          __label__ = 5;continue ;
        }
  
        var $16=$bstream;
        $retval=$16;
        ;
      }
    }
  
    var $17=$retval;
    ;
    return $17;
    return null;
  }
  _BitStream_newFromNum["X"]=1;

  function _BitStream_free($bstream) {
    ;
    var __label__;
  
    var $bstream_addr;
    $bstream_addr=$bstream;
    var $0=$bstream_addr;
    var $cmp=((($0))|0)!=0;
    if ($cmp) { __label__ = 1;; } else { __label__ = 2;; }
    if (__label__ == 1) {
  
      var $1=$bstream_addr;
      var $data=$1+1;
      var $2=HEAP[$data];
      ;
      var $3=$bstream_addr;
      var $4=$3;
      ;
      ;
    }
  
    ;
    return;
    return;
  }
  

  function _BitStream_appendBytes($bstream, $size, $data) {
    ;
    var __label__;
  
    var $retval;
    var $bstream_addr;
    var $size_addr;
    var $data_addr;
    var $b;
    var $ret;
    $bstream_addr=$bstream;
    $size_addr=$size;
    $data_addr=$data;
    var $0=$size_addr;
    var $cmp=((($0))|0)==0;
    if ($cmp) { __label__ = 1;; } else { __label__ = 2;; }
    if (__label__ == 1) {
  
      $retval=0;
      ;
    }
    else if (__label__ == 2) {
  
      var $1=$size_addr;
      var $2=$data_addr;
      var $call=_BitStream_newFromBytes($1, $2);
      $b=$call;
      var $3=$b;
      var $cmp1=((($3))|0)==0;
      if ($cmp1) { __label__ = 3;; } else { __label__ = 4;; }
      if (__label__ == 3) {
  
        $retval=-1;
        ;
      }
      else if (__label__ == 4) {
  
        var $4=$bstream_addr;
        var $5=$b;
        var $call4=_BitStream_append($4, $5);
        $ret=$call4;
        var $6=$b;
        _BitStream_free($6);
        var $7=$ret;
        $retval=$7;
        ;
      }
    }
  
    var $8=$retval;
    ;
    return $8;
    return null;
  }
  

  function _BitStream_newFromBytes($size, $data) {
    ;
    var __label__;
  
    var $retval;
    var $size_addr;
    var $data_addr;
    var $mask;
    var $i;
    var $j;
    var $p;
    var $bstream;
    $size_addr=$size;
    $data_addr=$data;
    var $call=_BitStream_new();
    $bstream=$call;
    var $0=$bstream;
    var $cmp=((($0))|0)==0;
    if ($cmp) { __label__ = 1;; } else { __label__ = 2;; }
    if (__label__ == 1) {
  
      $retval=0;
      ;
    }
    else if (__label__ == 2) {
  
      var $1=$bstream;
      var $2=$size_addr;
      var $mul=(($2)<<3);
      var $call1=_BitStream_allocate($1, $mul);
      var $tobool=((($call1))|0)!=0;
      if ($tobool) { __label__ = 3;; } else { __label__ = 4;; }
      if (__label__ == 3) {
  
        var $3=$bstream;
        _BitStream_free($3);
        $retval=0;
        ;
      }
      else if (__label__ == 4) {
  
        var $4=$bstream;
        var $data4=$4+1;
        var $5=HEAP[$data4];
        $p=$5;
        $i=0;
        ;
        $for_cond$8: while(1) { 
  
          var $6=$i;
          var $7=$size_addr;
          var $cmp5=((($6))|0) < ((($7))|0);
          if (!($cmp5)) { __label__ = 15;break $for_cond$8; }
  
          $mask=-128;
          $j=0;
          ;
          while(1) { 
  
            var $8=$j;
            var $cmp7=((($8))|0) < 8;
            if (!($cmp7)) { __label__ = 13;break ; }
  
            var $9=$i;
            var $10=$data_addr;
            var $arrayidx=$10+$9;
            var $11=HEAP[$arrayidx];
            var $conv=((($11))&255);
            var $12=$mask;
            var $conv9=((($12))&255);
            var $and=($conv) & ($conv9);
            var $tobool10=((($and))|0)!=0;
            if ($tobool10) { __label__ = 9;; } else { __label__ = 10;; }
            if (__label__ == 9) {
  
              var $13=$p;
              HEAP[$13]=1;
              ;
            }
            else if (__label__ == 10) {
  
              var $14=$p;
              HEAP[$14]=0;
              ;
            }
  
            var $15=$p;
            var $incdec_ptr=$15+1;
            $p=$incdec_ptr;
            var $16=$mask;
            var $conv13=((($16))&255);
            var $shr=($conv13) >> 1;
            var $conv14=((($shr)) & 255);
            $mask=$conv14;
            ;
  
            var $17=$j;
            var $inc=($17)+1;
            $j=$inc;
            __label__ = 7;continue ;
          }
  
          ;
  
          var $18=$i;
          var $inc16=($18)+1;
          $i=$inc16;
          __label__ = 5;continue $for_cond$8;
        }
  
        var $19=$bstream;
        $retval=$19;
        ;
      }
    }
  
    var $20=$retval;
    ;
    return $20;
    return null;
  }
  _BitStream_newFromBytes["X"]=1;

  function _BitStream_toByte($bstream) {
    ;
    var __label__;
  
    var $retval;
    var $bstream_addr;
    var $i;
    var $j;
    var $size;
    var $bytes;
    var $data;
    var $v;
    var $p;
    $bstream_addr=$bstream;
    var $0=$bstream_addr;
    var $length=$0;
    var $1=HEAP[$length];
    $size=$1;
    var $2=$size;
    var $cmp=((($2))|0)==0;
    if ($cmp) { __label__ = 1;; } else { __label__ = 2;; }
    if (__label__ == 1) {
  
      $retval=0;
      ;
    }
    else if (__label__ == 2) {
  
      var $3=$size;
      var $add=($3)+7;
      var $div=((((($add))|0)/8)|0);
      var $call=_malloc($div);
      $data=$call;
      var $4=$data;
      var $cmp1=((($4))|0)==0;
      if ($cmp1) { __label__ = 3;; } else { __label__ = 4;; }
      if (__label__ == 3) {
  
        $retval=0;
        ;
      }
      else if (__label__ == 4) {
  
        var $5=$size;
        var $div4=((((($5))|0)/8)|0);
        $bytes=$div4;
        var $6=$bstream_addr;
        var $data5=$6+1;
        var $7=HEAP[$data5];
        $p=$7;
        $i=0;
        ;
        $for_cond$8: while(1) { 
  
          var $8=$i;
          var $9=$bytes;
          var $cmp6=((($8))|0) < ((($9))|0);
          if (!($cmp6)) { __label__ = 12;break $for_cond$8; }
  
          $v=0;
          $j=0;
          ;
          while(1) { 
  
            var $10=$j;
            var $cmp8=((($10))|0) < 8;
            if (!($cmp8)) { __label__ = 10;break ; }
  
            var $11=$v;
            var $conv=((($11))&255);
            var $shl=($conv) << 1;
            var $conv10=((($shl)) & 255);
            $v=$conv10;
            var $12=$p;
            var $13=HEAP[$12];
            var $conv11=((($13))&255);
            var $14=$v;
            var $conv12=((($14))&255);
            var $or=($conv12) | ($conv11);
            var $conv13=((($or)) & 255);
            $v=$conv13;
            var $15=$p;
            var $incdec_ptr=$15+1;
            $p=$incdec_ptr;
            ;
  
            var $16=$j;
            var $inc=($16)+1;
            $j=$inc;
            __label__ = 7;continue ;
          }
  
          var $17=$v;
          var $18=$i;
          var $19=$data;
          var $arrayidx=$19+$18;
          HEAP[$arrayidx]=$17;
          ;
  
          var $20=$i;
          var $inc15=($20)+1;
          $i=$inc15;
          __label__ = 5;continue $for_cond$8;
        }
  
        var $21=$size;
        var $and=($21) & 7;
        var $tobool=((($and))|0)!=0;
        if ($tobool) { __label__ = 13;; } else { __label__ = 18;; }
        if (__label__ == 13) {
  
          $v=0;
          $j=0;
          ;
          while(1) { 
  
            var $22=$j;
            var $23=$size;
            var $and19=($23) & 7;
            var $cmp20=((($22))|0) < ((($and19))|0);
            if (!($cmp20)) { __label__ = 17;break ; }
  
            var $24=$v;
            var $conv23=((($24))&255);
            var $shl24=($conv23) << 1;
            var $conv25=((($shl24)) & 255);
            $v=$conv25;
            var $25=$p;
            var $26=HEAP[$25];
            var $conv26=((($26))&255);
            var $27=$v;
            var $conv27=((($27))&255);
            var $or28=($conv27) | ($conv26);
            var $conv29=((($or28)) & 255);
            $v=$conv29;
            var $28=$p;
            var $incdec_ptr30=$28+1;
            $p=$incdec_ptr30;
            ;
  
            var $29=$j;
            var $inc32=($29)+1;
            $j=$inc32;
            __label__ = 14;continue ;
          }
  
          var $30=$v;
          var $31=$bytes;
          var $32=$data;
          var $arrayidx34=$32+$31;
          HEAP[$arrayidx34]=$30;
          ;
        }
  
        var $33=$data;
        $retval=$33;
        ;
      }
    }
  
    var $34=$retval;
    ;
    return $34;
    return null;
  }
  _BitStream_toByte["X"]=1;

  function _main($argc, $argv) {
    ;
    var __label__;
  
    var $retval;
    var $argc_addr;
    var $argv_addr;
    $retval=0;
    $argc_addr=$argc;
    $argv_addr=$argv;
    var $0=$argc_addr;
    var $cmp=((($0))|0) < 2;
    if ($cmp) { __label__ = 1;; } else { __label__ = 2;; }
    $if_then$$if_end$2: do { 
      if (__label__ == 1) {
  
        $retval=-1;
        ;
      }
      else if (__label__ == 2) {
  
        var $1=$argv_addr;
        var $arrayidx=$1+1;
        var $2=HEAP[$arrayidx];
        var $call=_strcmp($2, __str);
        var $tobool=((($call))|0)!=0;
        if ($tobool) { __label__ = 4;break $if_then$$if_end$2; }
  
        var $3=$argv_addr;
        var $arrayidx2=$3+2;
        var $call3=_func_encodeString($arrayidx2);
        $retval=$call3;
        ;
      }
    } while(0);
  
    var $4=$retval;
    ;
    return $4;
    return null;
  }
  Module["_main"] = _main;

  function _func_encodeString($argv) {
    var __stackBase__  = STACKTOP; STACKTOP += 16384; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16384);
    var __label__;
  
    var $retval;
    var $argv_addr;
    var $str=__stackBase__;
    var $version;
    var $level;
    var $hint;
    var $casesensitive;
    var $res;
    var $i;
    $argv_addr=$argv;
    var $0=$argv_addr;
    var $arrayidx=$0;
    var $1=HEAP[$arrayidx];
    var $arraydecay=$str;
    _covertNumString($1, $arraydecay, 16384);
    var $2=$argv_addr;
    var $arrayidx1=$2+1;
    var $3=HEAP[$arrayidx1];
    var $call=_atoi($3);
    $version=$call;
    var $4=$argv_addr;
    var $arrayidx2=$4+2;
    var $5=HEAP[$arrayidx2];
    var $call3=_atoi($5);
    $level=$call3;
    var $6=$argv_addr;
    var $arrayidx4=$6+3;
    var $7=HEAP[$arrayidx4];
    var $call5=_atoi($7);
    $hint=$call5;
    var $8=$argv_addr;
    var $arrayidx6=$8+4;
    var $9=HEAP[$arrayidx6];
    var $call7=_atoi($9);
    $casesensitive=$call7;
    var $arraydecay8=$str;
    var $10=$version;
    var $11=$level;
    var $12=$hint;
    var $13=$casesensitive;
    var $call9=_QRcode_encodeString($arraydecay8, $10, $11, $12, $13);
    $res=$call9;
    var $14=$res;
    var $tobool=((($14))|0)!=0;
    if ($tobool) { __label__ = 1;; } else { __label__ = 6;; }
    if (__label__ == 1) {
  
      var $call10=_printf(__str1, allocate(1, "i32", ALLOC_STACK));
      var $15=$res;
      var $width=$15+1;
      var $16=HEAP[$width];
      var $call11=_printf(__str2, allocate([$16], "i32", ALLOC_STACK));
      $i=0;
      ;
      while(1) { 
  
        var $17=$i;
        var $18=$res;
        var $width12=$18+1;
        var $19=HEAP[$width12];
        var $20=$res;
        var $width13=$20+1;
        var $21=HEAP[$width13];
        var $mul=($19)*($21);
        var $cmp=((($17))|0) < ((($mul))|0);
        if (!($cmp)) { __label__ = 5;break ; }
  
        var $22=$i;
        var $23=$res;
        var $data=$23+2;
        var $24=HEAP[$data];
        var $arrayidx14=$24+$22;
        var $25=HEAP[$arrayidx14];
        var $conv=((($25))&255);
        var $and=($conv) & 1;
        var $call15=_printf(__str3, allocate([$and], "i32", ALLOC_STACK));
        ;
  
        var $26=$i;
        var $inc=($26)+1;
        $i=$inc;
        __label__ = 2;continue ;
      }
  
      var $call16=_printf(__str4, allocate(1, "i32", ALLOC_STACK));
      var $27=$res;
      _QRcode_free($27);
      $retval=0;
      ;
    }
    else if (__label__ == 6) {
  
      var $call17=_printf(__str5, allocate(1, "i32", ALLOC_STACK));
      var $call18=___errno();
      var $28=HEAP[$call18];
      if ($28 == 22) {
        __label__ = 7;;
      }
      else if ($28 == 12) {
        __label__ = 8;;
      }
      else if ($28 == 34) {
        __label__ = 9;;
      }
      else {
      __label__ = 10;;
      }
      
      if (__label__ == 10) {
  
        var $call24=_printf(__str9, allocate(1, "i32", ALLOC_STACK));
        ;
      }
      else if (__label__ == 7) {
  
        var $call19=_printf(__str6, allocate(1, "i32", ALLOC_STACK));
        ;
      }
      else if (__label__ == 8) {
  
        var $call21=_printf(__str7, allocate(1, "i32", ALLOC_STACK));
        ;
      }
      else if (__label__ == 9) {
  
        var $call23=_printf(__str8, allocate(1, "i32", ALLOC_STACK));
        ;
      }
  
      var $29=$res;
      _QRcode_free($29);
      var $call25=___errno();
      var $30=HEAP[$call25];
      $retval=$30;
      ;
    }
  
    var $31=$retval;
    STACKTOP = __stackBase__;
    return $31;
    return null;
  }
  _func_encodeString["X"]=1;

  function _covertNumString($numStr, $resStr, $resStrMax) {
    ;
    var __label__;
    var __lastLabel__ = null;
  
    var $numStr_addr;
    var $resStr_addr;
    var $resStrMax_addr;
    var $nsl;
    var $i;
    $numStr_addr=$numStr;
    $resStr_addr=$resStr;
    $resStrMax_addr=$resStrMax;
    var $0=$numStr_addr;
    var $call=_strlen($0);
    $nsl=$call;
    var $1=$resStrMax_addr;
    var $dec=($1)-1;
    $resStrMax_addr=$dec;
    $i=0;
    ;
    while(1) { 
  
      var $2=$i;
      var $mul=(($2)<<1);
      var $add=($mul)+1;
      var $3=$nsl;
      var $cmp=((($add))|0) < ((($3))|0);
      if ($cmp) { __lastLabel__ = 1; __label__ = 2;; } else { __lastLabel__ = 1; __label__ = 3;; }
      if (__label__ == 2) {
  
        var $4=$i;
        var $5=$resStrMax_addr;
        var $cmp1=((($4))|0) < ((($5))|0);
        __lastLabel__ = 2; ;
      }
  
      var $6=__lastLabel__ == 1 ? 0 : ($cmp1);
      if (!($6)) { __label__ = 6;break ; }
  
      var $7=$i;
      var $mul2=(($7)<<1);
      var $8=$numStr_addr;
      var $arrayidx=$8+$mul2;
      var $9=HEAP[$arrayidx];
      var $call3=_parseHex($9);
      var $conv=(tempInt=(($call3)),(tempInt>=128?tempInt-256:tempInt));
      var $shl=($conv) << 4;
      var $10=$i;
      var $mul4=(($10)<<1);
      var $add5=($mul4)+1;
      var $11=$numStr_addr;
      var $arrayidx6=$11+$add5;
      var $12=HEAP[$arrayidx6];
      var $call7=_parseHex($12);
      var $conv8=(tempInt=(($call7)),(tempInt>=128?tempInt-256:tempInt));
      var $or=($shl) | ($conv8);
      var $conv9=((($or)) & 255);
      var $13=$i;
      var $14=$resStr_addr;
      var $arrayidx10=$14+$13;
      HEAP[$arrayidx10]=$conv9;
      ;
  
      var $15=$i;
      var $inc=($15)+1;
      $i=$inc;
      __label__ = 1;continue ;
    }
  
    var $16=$i;
    var $17=$resStr_addr;
    var $arrayidx11=$17+$16;
    HEAP[$arrayidx11]=0;
    ;
    return;
    return;
  }
  _covertNumString["X"]=1;

  function _parseHex($s) {
    ;
    var __label__;
  
    var $retval;
    var $s_addr;
    $s_addr=$s;
    var $0=$s_addr;
    var $conv=(tempInt=(($0)),(tempInt>=128?tempInt-256:tempInt));
    if ($conv == 48) {
      __label__ = 1;;
    }
    else if ($conv == 49) {
      __label__ = 2;;
    }
    else if ($conv == 50) {
      __label__ = 3;;
    }
    else if ($conv == 51) {
      __label__ = 4;;
    }
    else if ($conv == 52) {
      __label__ = 5;;
    }
    else if ($conv == 53) {
      __label__ = 6;;
    }
    else if ($conv == 54) {
      __label__ = 7;;
    }
    else if ($conv == 55) {
      __label__ = 8;;
    }
    else if ($conv == 56) {
      __label__ = 9;;
    }
    else if ($conv == 57) {
      __label__ = 10;;
    }
    else if ($conv == 65) {
      __label__ = 11;;
    }
    else if ($conv == 97) {
      __label__ = 11;;
    }
    else if ($conv == 66) {
      __label__ = 12;;
    }
    else if ($conv == 98) {
      __label__ = 12;;
    }
    else if ($conv == 67) {
      __label__ = 13;;
    }
    else if ($conv == 99) {
      __label__ = 13;;
    }
    else if ($conv == 68) {
      __label__ = 14;;
    }
    else if ($conv == 100) {
      __label__ = 14;;
    }
    else if ($conv == 69) {
      __label__ = 15;;
    }
    else if ($conv == 101) {
      __label__ = 15;;
    }
    else if ($conv == 70) {
      __label__ = 16;;
    }
    else if ($conv == 102) {
      __label__ = 16;;
    }
    else {
    __label__ = 17;;
    }
    
    if (__label__ == 17) {
  
      $retval=0;
      ;
    }
    else if (__label__ == 1) {
  
      $retval=0;
      ;
    }
    else if (__label__ == 2) {
  
      $retval=1;
      ;
    }
    else if (__label__ == 3) {
  
      $retval=2;
      ;
    }
    else if (__label__ == 4) {
  
      $retval=3;
      ;
    }
    else if (__label__ == 5) {
  
      $retval=4;
      ;
    }
    else if (__label__ == 6) {
  
      $retval=5;
      ;
    }
    else if (__label__ == 7) {
  
      $retval=6;
      ;
    }
    else if (__label__ == 8) {
  
      $retval=7;
      ;
    }
    else if (__label__ == 9) {
  
      $retval=8;
      ;
    }
    else if (__label__ == 10) {
  
      $retval=9;
      ;
    }
    else if (__label__ == 11) {
  
      $retval=10;
      ;
    }
    else if (__label__ == 12) {
  
      $retval=11;
      ;
    }
    else if (__label__ == 13) {
  
      $retval=12;
      ;
    }
    else if (__label__ == 14) {
  
      $retval=13;
      ;
    }
    else if (__label__ == 15) {
  
      $retval=14;
      ;
    }
    else if (__label__ == 16) {
  
      $retval=15;
      ;
    }
  
    var $1=$retval;
    ;
    return $1;
    return null;
  }
  

  function _Mask_makeMask($width, $frame, $mask, $level) {
    ;
    var __label__;
  
    var $retval;
    var $width_addr;
    var $frame_addr;
    var $mask_addr;
    var $level_addr;
    var $masked;
    $width_addr=$width;
    $frame_addr=$frame;
    $mask_addr=$mask;
    $level_addr=$level;
    var $0=$mask_addr;
    var $cmp=((($0))|0) < 0;
    if ($cmp) { __label__ = 2;; } else { __label__ = 1;; }
    $if_then$$lor_lhs_false$2: do { 
      if (__label__ == 1) {
  
        var $1=$mask_addr;
        var $cmp1=((($1))|0) >= 8;
        if ($cmp1) { __label__ = 2;break $if_then$$lor_lhs_false$2; }
  
        var $2=$width_addr;
        var $3=$width_addr;
        var $mul=($2)*($3);
        var $call2=_malloc($mul);
        $masked=$call2;
        var $4=$masked;
        var $cmp3=((($4))|0)==0;
        if ($cmp3) { __label__ = 4;; } else { __label__ = 5;; }
        if (__label__ == 4) {
  
          $retval=0;
          __label__ = 6;break $if_then$$lor_lhs_false$2;
        }
        else if (__label__ == 5) {
  
          var $5=$mask_addr;
          var $arrayidx=_maskMakers+$5;
          var $6=HEAP[$arrayidx];
          var $7=$width_addr;
          var $8=$frame_addr;
          var $9=$masked;
          var $call6=FUNCTION_TABLE[$6]($7, $8, $9);
          var $10=$width_addr;
          var $11=$masked;
          var $12=$mask_addr;
          var $13=$level_addr;
          var $call7=_Mask_writeFormatInformation($10, $11, $12, $13);
          var $14=$masked;
          $retval=$14;
          __label__ = 6;break $if_then$$lor_lhs_false$2;
        }
      }
    } while(0);
    if (__label__ == 2) {
  
      var $call=___errno();
      HEAP[$call]=22;
      $retval=0;
      ;
    }
  
    var $15=$retval;
    ;
    return $15;
    return null;
  }
  

  function _Mask_writeFormatInformation($width, $frame, $mask, $level) {
    ;
    var __label__;
  
    var $width_addr;
    var $frame_addr;
    var $mask_addr;
    var $level_addr;
    var $format;
    var $v;
    var $i;
    var $blacks;
    $width_addr=$width;
    $frame_addr=$frame;
    $mask_addr=$mask;
    $level_addr=$level;
    $blacks=0;
    var $0=$mask_addr;
    var $1=$level_addr;
    var $call=_QRspec_getFormatInfo($0, $1);
    $format=$call;
    $i=0;
    ;
    $for_cond$2: while(1) { 
  
      var $2=$i;
      var $cmp=((($2))|0) < 8;
      if (!($cmp)) { __label__ = 10;break $for_cond$2; }
  
      var $3=$format;
      var $and=($3) & 1;
      var $tobool=((($and))|0)!=0;
      if ($tobool) { __label__ = 3;; } else { __label__ = 4;; }
      if (__label__ == 3) {
  
        var $4=$blacks;
        var $add=($4)+2;
        $blacks=$add;
        $v=-123;
        ;
      }
      else if (__label__ == 4) {
  
        $v=-124;
        ;
      }
  
      var $5=$v;
      var $6=$width_addr;
      var $mul=(($6)<<3);
      var $7=$width_addr;
      var $add1=($mul)+($7);
      var $sub=($add1)-1;
      var $8=$i;
      var $sub2=($sub)-($8);
      var $9=$frame_addr;
      var $arrayidx=$9+$sub2;
      HEAP[$arrayidx]=$5;
      var $10=$i;
      var $cmp3=((($10))|0) < 6;
      if ($cmp3) { __label__ = 6;; } else { __label__ = 7;; }
      if (__label__ == 6) {
  
        var $11=$v;
        var $12=$width_addr;
        var $13=$i;
        var $mul5=($12)*($13);
        var $add6=($mul5)+8;
        var $14=$frame_addr;
        var $arrayidx7=$14+$add6;
        HEAP[$arrayidx7]=$11;
        ;
      }
      else if (__label__ == 7) {
  
        var $15=$v;
        var $16=$width_addr;
        var $17=$i;
        var $add9=($17)+1;
        var $mul10=($16)*($add9);
        var $add11=($mul10)+8;
        var $18=$frame_addr;
        var $arrayidx12=$18+$add11;
        HEAP[$arrayidx12]=$15;
        ;
      }
  
      var $19=$format;
      var $shr=($19) >>> 1;
      $format=$shr;
      ;
  
      var $20=$i;
      var $inc=($20)+1;
      $i=$inc;
      __label__ = 1;continue $for_cond$2;
    }
  
    $i=0;
    ;
    while(1) { 
  
      var $21=$i;
      var $cmp15=((($21))|0) < 7;
      if (!($cmp15)) { __label__ = 20;break ; }
  
      var $22=$format;
      var $and17=($22) & 1;
      var $tobool18=((($and17))|0)!=0;
      if ($tobool18) { __label__ = 13;; } else { __label__ = 14;; }
      if (__label__ == 13) {
  
        var $23=$blacks;
        var $add20=($23)+2;
        $blacks=$add20;
        $v=-123;
        ;
      }
      else if (__label__ == 14) {
  
        $v=-124;
        ;
      }
  
      var $24=$v;
      var $25=$width_addr;
      var $26=$width_addr;
      var $sub23=($26)-7;
      var $27=$i;
      var $add24=($sub23)+($27);
      var $mul25=($25)*($add24);
      var $add26=($mul25)+8;
      var $28=$frame_addr;
      var $arrayidx27=$28+$add26;
      HEAP[$arrayidx27]=$24;
      var $29=$i;
      var $cmp28=((($29))|0)==0;
      if ($cmp28) { __label__ = 16;; } else { __label__ = 17;; }
      if (__label__ == 16) {
  
        var $30=$v;
        var $31=$width_addr;
        var $mul30=(($31)<<3);
        var $add31=($mul30)+7;
        var $32=$frame_addr;
        var $arrayidx32=$32+$add31;
        HEAP[$arrayidx32]=$30;
        ;
      }
      else if (__label__ == 17) {
  
        var $33=$v;
        var $34=$width_addr;
        var $mul34=(($34)<<3);
        var $add35=($mul34)+6;
        var $35=$i;
        var $sub36=($add35)-($35);
        var $36=$frame_addr;
        var $arrayidx37=$36+$sub36;
        HEAP[$arrayidx37]=$33;
        ;
      }
  
      var $37=$format;
      var $shr39=($37) >>> 1;
      $format=$shr39;
      ;
  
      var $38=$i;
      var $inc41=($38)+1;
      $i=$inc41;
      __label__ = 11;continue ;
    }
  
    var $39=$blacks;
    ;
    return $39;
    return null;
  }
  _Mask_writeFormatInformation["X"]=1;

  function _Mask_mask($width, $frame, $level) {
    ;
    var __label__;
  
    var $retval;
    var $width_addr;
    var $frame_addr;
    var $level_addr;
    var $i;
    var $mask;
    var $bestMask;
    var $minDemerit;
    var $blacks;
    var $bratio;
    var $demerit;
    var $w2;
    $width_addr=$width;
    $frame_addr=$frame;
    $level_addr=$level;
    $minDemerit=2147483647;
    var $0=$width_addr;
    var $1=$width_addr;
    var $mul=($0)*($1);
    $w2=$mul;
    var $2=$w2;
    var $call=_malloc($2);
    $mask=$call;
    var $3=$mask;
    var $cmp=((($3))|0)==0;
    if ($cmp) { __label__ = 1;; } else { __label__ = 2;; }
    if (__label__ == 1) {
  
      $retval=0;
      ;
    }
    else if (__label__ == 2) {
  
      $bestMask=0;
      $i=0;
      ;
      while(1) { 
  
        var $4=$i;
        var $cmp1=((($4))|0) < 8;
        if (!($cmp1)) { __label__ = 10;break ; }
  
        $demerit=0;
        var $5=$i;
        var $arrayidx=_maskMakers+$5;
        var $6=HEAP[$arrayidx];
        var $7=$width_addr;
        var $8=$frame_addr;
        var $9=$mask;
        var $call2=FUNCTION_TABLE[$6]($7, $8, $9);
        $blacks=$call2;
        var $10=$width_addr;
        var $11=$mask;
        var $12=$i;
        var $13=$level_addr;
        var $call3=_Mask_writeFormatInformation($10, $11, $12, $13);
        var $14=$blacks;
        var $add=($14)+($call3);
        $blacks=$add;
        var $15=$blacks;
        var $mul4=($15)*200;
        var $16=$w2;
        var $add5=($mul4)+($16);
        var $17=$w2;
        var $div=((((($add5))|0)/((($17))|0))|0);
        var $div6=((((($div))|0)/2)|0);
        $bratio=$div6;
        var $18=$bratio;
        var $sub=($18)-50;
        var $call7=_abs($sub);
        var $div8=((((($call7))|0)/5)|0);
        var $mul9=($div8)*10;
        $demerit=$mul9;
        var $19=$width_addr;
        var $20=$mask;
        var $call10=_Mask_evaluateSymbol($19, $20);
        var $21=$demerit;
        var $add11=($21)+($call10);
        $demerit=$add11;
        var $22=$demerit;
        var $23=$minDemerit;
        var $cmp12=((($22))|0) < ((($23))|0);
        if ($cmp12) { __label__ = 5;; } else { __label__ = 8;; }
        if (__label__ == 5) {
  
          var $24=$demerit;
          $minDemerit=$24;
          var $25=$bestMask;
          ;
          var $26=$mask;
          $bestMask=$26;
          var $27=$w2;
          var $call14=_malloc($27);
          $mask=$call14;
          var $28=$mask;
          var $cmp15=((($28))|0)==0;
          if ($cmp15) { __label__ = 6;break ; }
  
          ;
        }
  
        ;
  
        var $29=$i;
        var $inc=($29)+1;
        $i=$inc;
        __label__ = 3;continue ;
      }
      if (__label__ == 6) {
  
        ;
      }
  
      var $30=$mask;
      ;
      var $31=$bestMask;
      $retval=$31;
      ;
    }
  
    var $32=$retval;
    ;
    return $32;
    return null;
  }
  _Mask_mask["X"]=1;

  function _Mask_evaluateSymbol($width, $frame) {
    var __stackBase__  = STACKTOP; STACKTOP += 178; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 178);
    var __label__;
  
    var $width_addr;
    var $frame_addr;
    var $x;
    var $y;
    var $demerit;
    var $runLength=__stackBase__;
    var $length;
    $width_addr=$width;
    $frame_addr=$frame;
    $demerit=0;
    var $0=$width_addr;
    var $1=$frame_addr;
    var $call=_Mask_calcN2($0, $1);
    var $2=$demerit;
    var $add=($2)+($call);
    $demerit=$add;
    $y=0;
    ;
    $for_cond$2: while(1) { 
  
      var $3=$y;
      var $4=$width_addr;
      var $cmp=((($3))|0) < ((($4))|0);
      if (!($cmp)) { __label__ = 4;break $for_cond$2; }
  
      var $5=$width_addr;
      var $6=$frame_addr;
      var $7=$y;
      var $8=$width_addr;
      var $mul=($7)*($8);
      var $add_ptr=$6+$mul;
      var $arraydecay=$runLength;
      var $call1=_Mask_calcRunLength($5, $add_ptr, 0, $arraydecay);
      $length=$call1;
      var $9=$length;
      var $arraydecay2=$runLength;
      var $call3=_Mask_calcN1N3($9, $arraydecay2);
      var $10=$demerit;
      var $add4=($10)+($call3);
      $demerit=$add4;
      ;
  
      var $11=$y;
      var $inc=($11)+1;
      $y=$inc;
      __label__ = 1;continue $for_cond$2;
    }
  
    $x=0;
    ;
    while(1) { 
  
      var $12=$x;
      var $13=$width_addr;
      var $cmp6=((($12))|0) < ((($13))|0);
      if (!($cmp6)) { __label__ = 8;break ; }
  
      var $14=$width_addr;
      var $15=$frame_addr;
      var $16=$x;
      var $add_ptr8=$15+$16;
      var $arraydecay9=$runLength;
      var $call10=_Mask_calcRunLength($14, $add_ptr8, 1, $arraydecay9);
      $length=$call10;
      var $17=$length;
      var $arraydecay11=$runLength;
      var $call12=_Mask_calcN1N3($17, $arraydecay11);
      var $18=$demerit;
      var $add13=($18)+($call12);
      $demerit=$add13;
      ;
  
      var $19=$x;
      var $inc15=($19)+1;
      $x=$inc15;
      __label__ = 5;continue ;
    }
  
    var $20=$demerit;
    STACKTOP = __stackBase__;
    return $20;
    return null;
  }
  _Mask_evaluateSymbol["X"]=1;

  function _Mask_calcN2($width, $frame) {
    ;
    var __label__;
  
    var $width_addr;
    var $frame_addr;
    var $x;
    var $y;
    var $p;
    var $b22;
    var $w22;
    var $demerit;
    $width_addr=$width;
    $frame_addr=$frame;
    $demerit=0;
    var $0=$frame_addr;
    var $1=$width_addr;
    var $add_ptr=$0+$1;
    var $add_ptr1=$add_ptr+1;
    $p=$add_ptr1;
    $y=1;
    ;
    $for_cond$2: while(1) { 
  
      var $2=$y;
      var $3=$width_addr;
      var $cmp=((($2))|0) < ((($3))|0);
      if (!($cmp)) { __label__ = 10;break $for_cond$2; }
  
      $x=1;
      ;
      while(1) { 
  
        var $4=$x;
        var $5=$width_addr;
        var $cmp3=((($4))|0) < ((($5))|0);
        if (!($cmp3)) { __label__ = 8;break ; }
  
        var $6=$p;
        var $arrayidx=$6;
        var $7=HEAP[$arrayidx];
        var $conv=((($7))&255);
        var $8=$p;
        var $arrayidx5=$8-1;
        var $9=HEAP[$arrayidx5];
        var $conv6=((($9))&255);
        var $and=($conv) & ($conv6);
        var $10=$width_addr;
        var $sub=(-($10));
        var $11=$p;
        var $arrayidx7=$11+$sub;
        var $12=HEAP[$arrayidx7];
        var $conv8=((($12))&255);
        var $and9=($and) & ($conv8);
        var $13=$width_addr;
        var $sub10=(-($13));
        var $sub11=($sub10)-1;
        var $14=$p;
        var $arrayidx12=$14+$sub11;
        var $15=HEAP[$arrayidx12];
        var $conv13=((($15))&255);
        var $and14=($and9) & ($conv13);
        var $conv15=((($and14)) & 255);
        $b22=$conv15;
        var $16=$p;
        var $arrayidx16=$16;
        var $17=HEAP[$arrayidx16];
        var $conv17=((($17))&255);
        var $18=$p;
        var $arrayidx18=$18-1;
        var $19=HEAP[$arrayidx18];
        var $conv19=((($19))&255);
        var $or=($conv17) | ($conv19);
        var $20=$width_addr;
        var $sub20=(-($20));
        var $21=$p;
        var $arrayidx21=$21+$sub20;
        var $22=HEAP[$arrayidx21];
        var $conv22=((($22))&255);
        var $or23=($or) | ($conv22);
        var $23=$width_addr;
        var $sub24=(-($23));
        var $sub25=($sub24)-1;
        var $24=$p;
        var $arrayidx26=$24+$sub25;
        var $25=HEAP[$arrayidx26];
        var $conv27=((($25))&255);
        var $or28=($or23) | ($conv27);
        var $conv29=((($or28)) & 255);
        $w22=$conv29;
        var $26=$b22;
        var $conv30=((($26))&255);
        var $27=$w22;
        var $conv31=((($27))&255);
        var $xor=($conv31) ^ 1;
        var $or32=($conv30) | ($xor);
        var $and33=($or32) & 1;
        var $tobool=((($and33))|0)!=0;
        if ($tobool) { __label__ = 5;; } else { __label__ = 6;; }
        if (__label__ == 5) {
  
          var $28=$demerit;
          var $add=($28)+3;
          $demerit=$add;
          ;
        }
  
        var $29=$p;
        var $incdec_ptr=$29+1;
        $p=$incdec_ptr;
        ;
  
        var $30=$x;
        var $inc=($30)+1;
        $x=$inc;
        __label__ = 3;continue ;
      }
  
      var $31=$p;
      var $incdec_ptr34=$31+1;
      $p=$incdec_ptr34;
      ;
  
      var $32=$y;
      var $inc36=($32)+1;
      $y=$inc36;
      __label__ = 1;continue $for_cond$2;
    }
  
    var $33=$demerit;
    ;
    return $33;
    return null;
  }
  _Mask_calcN2["X"]=1;

  function _Mask_calcRunLength($width, $frame, $dir, $runLength) {
    ;
    var __label__;
    var __lastLabel__ = null;
  
    var $width_addr;
    var $frame_addr;
    var $dir_addr;
    var $runLength_addr;
    var $head;
    var $i;
    var $p;
    var $pitch;
    $width_addr=$width;
    $frame_addr=$frame;
    $dir_addr=$dir;
    $runLength_addr=$runLength;
    var $0=$dir_addr;
    var $cmp=((($0))|0)==0;
    if ($cmp) { __label__ = 1;; } else { __label__ = 2;; }
    if (__label__ == 1) {
  
      __lastLabel__ = 1; ;
    }
    else if (__label__ == 2) {
  
      var $1=$width_addr;
      __lastLabel__ = 2; ;
    }
  
    var $cond=__lastLabel__ == 1 ? 1 : ($1);
    $pitch=$cond;
    var $2=$frame_addr;
    var $arrayidx=$2;
    var $3=HEAP[$arrayidx];
    var $conv=((($3))&255);
    var $and=($conv) & 1;
    var $tobool=((($and))|0)!=0;
    if ($tobool) { __label__ = 4;; } else { __label__ = 5;; }
    if (__label__ == 4) {
  
      var $4=$runLength_addr;
      var $arrayidx1=$4;
      HEAP[$arrayidx1]=-1;
      $head=1;
      ;
    }
    else if (__label__ == 5) {
  
      $head=0;
      ;
    }
  
    var $5=$head;
    var $6=$runLength_addr;
    var $arrayidx2=$6+$5;
    HEAP[$arrayidx2]=1;
    var $7=$frame_addr;
    var $8=$pitch;
    var $add_ptr=$7+$8;
    $p=$add_ptr;
    $i=1;
    ;
    while(1) { 
  
      var $9=$i;
      var $10=$width_addr;
      var $cmp3=((($9))|0) < ((($10))|0);
      if (!($cmp3)) { __label__ = 13;break ; }
  
      var $11=$p;
      var $arrayidx5=$11;
      var $12=HEAP[$arrayidx5];
      var $conv6=((($12))&255);
      var $13=$pitch;
      var $sub=(-($13));
      var $14=$p;
      var $arrayidx7=$14+$sub;
      var $15=HEAP[$arrayidx7];
      var $conv8=((($15))&255);
      var $xor=($conv6) ^ ($conv8);
      var $and9=($xor) & 1;
      var $tobool10=((($and9))|0)!=0;
      if ($tobool10) { __label__ = 9;; } else { __label__ = 10;; }
      if (__label__ == 9) {
  
        var $16=$head;
        var $inc=($16)+1;
        $head=$inc;
        var $17=$head;
        var $18=$runLength_addr;
        var $arrayidx12=$18+$17;
        HEAP[$arrayidx12]=1;
        ;
      }
      else if (__label__ == 10) {
  
        var $19=$head;
        var $20=$runLength_addr;
        var $arrayidx14=$20+$19;
        var $21=HEAP[$arrayidx14];
        var $inc15=($21)+1;
        HEAP[$arrayidx14]=$inc15;
        ;
      }
  
      var $22=$pitch;
      var $23=$p;
      var $add_ptr17=$23+$22;
      $p=$add_ptr17;
      ;
  
      var $24=$i;
      var $inc18=($24)+1;
      $i=$inc18;
      __label__ = 7;continue ;
    }
  
    var $25=$head;
    var $add=($25)+1;
    ;
    return $add;
    return null;
  }
  _Mask_calcRunLength["X"]=1;

  function _Mask_calcN1N3($length, $runLength) {
    ;
    var __label__;
  
    var $length_addr;
    var $runLength_addr;
    var $i;
    var $demerit;
    var $fact;
    $length_addr=$length;
    $runLength_addr=$runLength;
    $demerit=0;
    $i=0;
    ;
    $for_cond$2: while(1) { 
  
      var $0=$i;
      var $1=$length_addr;
      var $cmp=((($0))|0) < ((($1))|0);
      if (!($cmp)) { __label__ = 24;break $for_cond$2; }
  
      var $2=$i;
      var $3=$runLength_addr;
      var $arrayidx=$3+$2;
      var $4=HEAP[$arrayidx];
      var $cmp1=((($4))|0) >= 5;
      if ($cmp1) { __label__ = 3;; } else { __label__ = 4;; }
      if (__label__ == 3) {
  
        var $5=$i;
        var $6=$runLength_addr;
        var $arrayidx2=$6+$5;
        var $7=HEAP[$arrayidx2];
        var $sub=($7)-5;
        var $add=($sub)+3;
        var $8=$demerit;
        var $add3=($8)+($add);
        $demerit=$add3;
        ;
      }
  
      var $9=$i;
      var $and=($9) & 1;
      var $tobool=((($and))|0)!=0;
      if ($tobool) { __label__ = 5;; } else { __label__ = 22;; }
      if (__label__ == 5) {
  
        var $10=$i;
        var $cmp5=((($10))|0) >= 3;
        if ($cmp5) { __label__ = 6;; } else { __label__ = 21;; }
        $land_lhs_true$$if_end47$10: do { 
          if (__label__ == 6) {
  
            var $11=$i;
            var $12=$length_addr;
            var $sub6=($12)-2;
            var $cmp7=((($11))|0) < ((($sub6))|0);
            if (!($cmp7)) { __label__ = 21;break $land_lhs_true$$if_end47$10; }
  
            var $13=$i;
            var $14=$runLength_addr;
            var $arrayidx9=$14+$13;
            var $15=HEAP[$arrayidx9];
            var $rem=((($15))|0)%3;
            var $cmp10=((($rem))|0)==0;
            if (!($cmp10)) { __label__ = 21;break $land_lhs_true$$if_end47$10; }
  
            var $16=$i;
            var $17=$runLength_addr;
            var $arrayidx12=$17+$16;
            var $18=HEAP[$arrayidx12];
            var $div=((((($18))|0)/3)|0);
            $fact=$div;
            var $19=$i;
            var $sub13=($19)-2;
            var $20=$runLength_addr;
            var $arrayidx14=$20+$sub13;
            var $21=HEAP[$arrayidx14];
            var $22=$fact;
            var $cmp15=((($21))|0)==((($22))|0);
            if ($cmp15) { __label__ = 9;; } else { __label__ = 20;; }
            $land_lhs_true16$$if_end46$14: do { 
              if (__label__ == 9) {
  
                var $23=$i;
                var $sub17=($23)-1;
                var $24=$runLength_addr;
                var $arrayidx18=$24+$sub17;
                var $25=HEAP[$arrayidx18];
                var $26=$fact;
                var $cmp19=((($25))|0)==((($26))|0);
                if (!($cmp19)) { __label__ = 20;break $land_lhs_true16$$if_end46$14; }
  
                var $27=$i;
                var $add21=($27)+1;
                var $28=$runLength_addr;
                var $arrayidx22=$28+$add21;
                var $29=HEAP[$arrayidx22];
                var $30=$fact;
                var $cmp23=((($29))|0)==((($30))|0);
                if (!($cmp23)) { __label__ = 20;break $land_lhs_true16$$if_end46$14; }
  
                var $31=$i;
                var $add25=($31)+2;
                var $32=$runLength_addr;
                var $arrayidx26=$32+$add25;
                var $33=HEAP[$arrayidx26];
                var $34=$fact;
                var $cmp27=((($33))|0)==((($34))|0);
                if (!($cmp27)) { __label__ = 20;break $land_lhs_true16$$if_end46$14; }
  
                var $35=$i;
                var $cmp29=((($35))|0)==3;
                if ($cmp29) { __label__ = 14;; } else { __label__ = 13;; }
                $if_then33$$lor_lhs_false$19: do { 
                  if (__label__ == 13) {
  
                    var $36=$i;
                    var $sub30=($36)-3;
                    var $37=$runLength_addr;
                    var $arrayidx31=$37+$sub30;
                    var $38=HEAP[$arrayidx31];
                    var $39=$fact;
                    var $mul=(($39)<<2);
                    var $cmp32=((($38))|0) >= ((($mul))|0);
                    if ($cmp32) { __label__ = 14;break $if_then33$$lor_lhs_false$19; }
  
                    var $41=$i;
                    var $add35=($41)+4;
                    var $42=$length_addr;
                    var $cmp36=((($add35))|0) >= ((($42))|0);
                    if ($cmp36) { __label__ = 17;; } else { __label__ = 16;; }
                    $if_then42$$lor_lhs_false37$22: do { 
                      if (__label__ == 16) {
  
                        var $43=$i;
                        var $add38=($43)+3;
                        var $44=$runLength_addr;
                        var $arrayidx39=$44+$add38;
                        var $45=HEAP[$arrayidx39];
                        var $46=$fact;
                        var $mul40=(($46)<<2);
                        var $cmp41=((($45))|0) >= ((($mul40))|0);
                        if ($cmp41) { __label__ = 17;break $if_then42$$lor_lhs_false37$22; } else { __label__ = 18;break $if_then42$$lor_lhs_false37$22; }
                      }
                    } while(0);
                    if (__label__ == 17) {
  
                      var $47=$demerit;
                      var $add43=($47)+40;
                      $demerit=$add43;
                      ;
                    }
  
                    __label__ = 19;break $if_then33$$lor_lhs_false$19;
                  }
                } while(0);
                if (__label__ == 14) {
  
                  var $40=$demerit;
                  var $add34=($40)+40;
                  $demerit=$add34;
                  ;
                }
  
                ;
              }
            } while(0);
  
            ;
          }
        } while(0);
  
        ;
      }
  
      ;
  
      var $48=$i;
      var $inc=($48)+1;
      $i=$inc;
      __label__ = 1;continue $for_cond$2;
    }
  
    var $49=$demerit;
    ;
    return $49;
    return null;
  }
  _Mask_calcN1N3["X"]=1;

  function _Mask_mask0($width, $s, $d) {
    ;
    var __label__;
  
    var $width_addr;
    var $s_addr;
    var $d_addr;
    var $x;
    var $y;
    var $b;
    $width_addr=$width;
    $s_addr=$s;
    $d_addr=$d;
    $b=0;
    $y=0;
    ;
    $for_cond$2: while(1) { 
  
      var $0=$y;
      var $1=$width_addr;
      var $cmp=((($0))|0) < ((($1))|0);
      if (!($cmp)) { __label__ = 11;break $for_cond$2; }
  
      $x=0;
      ;
      while(1) { 
  
        var $2=$x;
        var $3=$width_addr;
        var $cmp2=((($2))|0) < ((($3))|0);
        if (!($cmp2)) { __label__ = 9;break ; }
  
        var $4=$s_addr;
        var $5=HEAP[$4];
        var $conv=((($5))&255);
        var $and=($conv) & 128;
        var $tobool=((($and))|0)!=0;
        if ($tobool) { __label__ = 5;; } else { __label__ = 6;; }
        if (__label__ == 5) {
  
          var $6=$s_addr;
          var $7=HEAP[$6];
          var $8=$d_addr;
          HEAP[$8]=$7;
          ;
        }
        else if (__label__ == 6) {
  
          var $9=$s_addr;
          var $10=HEAP[$9];
          var $conv4=((($10))&255);
          var $11=$x;
          var $12=$y;
          var $add=($11)+($12);
          var $and5=($add) & 1;
          var $cmp6=((($and5))|0)==0;
          var $conv7=((($cmp6))&1);
          var $xor=($conv4) ^ ($conv7);
          var $conv8=((($xor)) & 255);
          var $13=$d_addr;
          HEAP[$13]=$conv8;
          ;
        }
  
        var $14=$d_addr;
        var $15=HEAP[$14];
        var $conv9=((($15))&255);
        var $and10=($conv9) & 1;
        var $16=$b;
        var $add11=($16)+($and10);
        $b=$add11;
        var $17=$s_addr;
        var $incdec_ptr=$17+1;
        $s_addr=$incdec_ptr;
        var $18=$d_addr;
        var $incdec_ptr12=$18+1;
        $d_addr=$incdec_ptr12;
        ;
  
        var $19=$x;
        var $inc=($19)+1;
        $x=$inc;
        __label__ = 3;continue ;
      }
  
      ;
  
      var $20=$y;
      var $inc14=($20)+1;
      $y=$inc14;
      __label__ = 1;continue $for_cond$2;
    }
  
    var $21=$b;
    ;
    return $21;
    return null;
  }
  _Mask_mask0["X"]=1;

  function _Mask_mask1($width, $s, $d) {
    ;
    var __label__;
  
    var $width_addr;
    var $s_addr;
    var $d_addr;
    var $x;
    var $y;
    var $b;
    $width_addr=$width;
    $s_addr=$s;
    $d_addr=$d;
    $b=0;
    $y=0;
    ;
    $for_cond$2: while(1) { 
  
      var $0=$y;
      var $1=$width_addr;
      var $cmp=((($0))|0) < ((($1))|0);
      if (!($cmp)) { __label__ = 11;break $for_cond$2; }
  
      $x=0;
      ;
      while(1) { 
  
        var $2=$x;
        var $3=$width_addr;
        var $cmp2=((($2))|0) < ((($3))|0);
        if (!($cmp2)) { __label__ = 9;break ; }
  
        var $4=$s_addr;
        var $5=HEAP[$4];
        var $conv=((($5))&255);
        var $and=($conv) & 128;
        var $tobool=((($and))|0)!=0;
        if ($tobool) { __label__ = 5;; } else { __label__ = 6;; }
        if (__label__ == 5) {
  
          var $6=$s_addr;
          var $7=HEAP[$6];
          var $8=$d_addr;
          HEAP[$8]=$7;
          ;
        }
        else if (__label__ == 6) {
  
          var $9=$s_addr;
          var $10=HEAP[$9];
          var $conv4=((($10))&255);
          var $11=$y;
          var $and5=($11) & 1;
          var $cmp6=((($and5))|0)==0;
          var $conv7=((($cmp6))&1);
          var $xor=($conv4) ^ ($conv7);
          var $conv8=((($xor)) & 255);
          var $12=$d_addr;
          HEAP[$12]=$conv8;
          ;
        }
  
        var $13=$d_addr;
        var $14=HEAP[$13];
        var $conv9=((($14))&255);
        var $and10=($conv9) & 1;
        var $15=$b;
        var $add=($15)+($and10);
        $b=$add;
        var $16=$s_addr;
        var $incdec_ptr=$16+1;
        $s_addr=$incdec_ptr;
        var $17=$d_addr;
        var $incdec_ptr11=$17+1;
        $d_addr=$incdec_ptr11;
        ;
  
        var $18=$x;
        var $inc=($18)+1;
        $x=$inc;
        __label__ = 3;continue ;
      }
  
      ;
  
      var $19=$y;
      var $inc13=($19)+1;
      $y=$inc13;
      __label__ = 1;continue $for_cond$2;
    }
  
    var $20=$b;
    ;
    return $20;
    return null;
  }
  _Mask_mask1["X"]=1;

  function _Mask_mask2($width, $s, $d) {
    ;
    var __label__;
  
    var $width_addr;
    var $s_addr;
    var $d_addr;
    var $x;
    var $y;
    var $b;
    $width_addr=$width;
    $s_addr=$s;
    $d_addr=$d;
    $b=0;
    $y=0;
    ;
    $for_cond$2: while(1) { 
  
      var $0=$y;
      var $1=$width_addr;
      var $cmp=((($0))|0) < ((($1))|0);
      if (!($cmp)) { __label__ = 11;break $for_cond$2; }
  
      $x=0;
      ;
      while(1) { 
  
        var $2=$x;
        var $3=$width_addr;
        var $cmp2=((($2))|0) < ((($3))|0);
        if (!($cmp2)) { __label__ = 9;break ; }
  
        var $4=$s_addr;
        var $5=HEAP[$4];
        var $conv=((($5))&255);
        var $and=($conv) & 128;
        var $tobool=((($and))|0)!=0;
        if ($tobool) { __label__ = 5;; } else { __label__ = 6;; }
        if (__label__ == 5) {
  
          var $6=$s_addr;
          var $7=HEAP[$6];
          var $8=$d_addr;
          HEAP[$8]=$7;
          ;
        }
        else if (__label__ == 6) {
  
          var $9=$s_addr;
          var $10=HEAP[$9];
          var $conv4=((($10))&255);
          var $11=$x;
          var $rem=((($11))|0)%3;
          var $cmp5=((($rem))|0)==0;
          var $conv6=((($cmp5))&1);
          var $xor=($conv4) ^ ($conv6);
          var $conv7=((($xor)) & 255);
          var $12=$d_addr;
          HEAP[$12]=$conv7;
          ;
        }
  
        var $13=$d_addr;
        var $14=HEAP[$13];
        var $conv8=((($14))&255);
        var $and9=($conv8) & 1;
        var $15=$b;
        var $add=($15)+($and9);
        $b=$add;
        var $16=$s_addr;
        var $incdec_ptr=$16+1;
        $s_addr=$incdec_ptr;
        var $17=$d_addr;
        var $incdec_ptr10=$17+1;
        $d_addr=$incdec_ptr10;
        ;
  
        var $18=$x;
        var $inc=($18)+1;
        $x=$inc;
        __label__ = 3;continue ;
      }
  
      ;
  
      var $19=$y;
      var $inc12=($19)+1;
      $y=$inc12;
      __label__ = 1;continue $for_cond$2;
    }
  
    var $20=$b;
    ;
    return $20;
    return null;
  }
  _Mask_mask2["X"]=1;

  function _Mask_mask3($width, $s, $d) {
    ;
    var __label__;
  
    var $width_addr;
    var $s_addr;
    var $d_addr;
    var $x;
    var $y;
    var $b;
    $width_addr=$width;
    $s_addr=$s;
    $d_addr=$d;
    $b=0;
    $y=0;
    ;
    $for_cond$2: while(1) { 
  
      var $0=$y;
      var $1=$width_addr;
      var $cmp=((($0))|0) < ((($1))|0);
      if (!($cmp)) { __label__ = 11;break $for_cond$2; }
  
      $x=0;
      ;
      while(1) { 
  
        var $2=$x;
        var $3=$width_addr;
        var $cmp2=((($2))|0) < ((($3))|0);
        if (!($cmp2)) { __label__ = 9;break ; }
  
        var $4=$s_addr;
        var $5=HEAP[$4];
        var $conv=((($5))&255);
        var $and=($conv) & 128;
        var $tobool=((($and))|0)!=0;
        if ($tobool) { __label__ = 5;; } else { __label__ = 6;; }
        if (__label__ == 5) {
  
          var $6=$s_addr;
          var $7=HEAP[$6];
          var $8=$d_addr;
          HEAP[$8]=$7;
          ;
        }
        else if (__label__ == 6) {
  
          var $9=$s_addr;
          var $10=HEAP[$9];
          var $conv4=((($10))&255);
          var $11=$x;
          var $12=$y;
          var $add=($11)+($12);
          var $rem=((($add))|0)%3;
          var $cmp5=((($rem))|0)==0;
          var $conv6=((($cmp5))&1);
          var $xor=($conv4) ^ ($conv6);
          var $conv7=((($xor)) & 255);
          var $13=$d_addr;
          HEAP[$13]=$conv7;
          ;
        }
  
        var $14=$d_addr;
        var $15=HEAP[$14];
        var $conv8=((($15))&255);
        var $and9=($conv8) & 1;
        var $16=$b;
        var $add10=($16)+($and9);
        $b=$add10;
        var $17=$s_addr;
        var $incdec_ptr=$17+1;
        $s_addr=$incdec_ptr;
        var $18=$d_addr;
        var $incdec_ptr11=$18+1;
        $d_addr=$incdec_ptr11;
        ;
  
        var $19=$x;
        var $inc=($19)+1;
        $x=$inc;
        __label__ = 3;continue ;
      }
  
      ;
  
      var $20=$y;
      var $inc13=($20)+1;
      $y=$inc13;
      __label__ = 1;continue $for_cond$2;
    }
  
    var $21=$b;
    ;
    return $21;
    return null;
  }
  _Mask_mask3["X"]=1;

  function _Mask_mask4($width, $s, $d) {
    ;
    var __label__;
  
    var $width_addr;
    var $s_addr;
    var $d_addr;
    var $x;
    var $y;
    var $b;
    $width_addr=$width;
    $s_addr=$s;
    $d_addr=$d;
    $b=0;
    $y=0;
    ;
    $for_cond$2: while(1) { 
  
      var $0=$y;
      var $1=$width_addr;
      var $cmp=((($0))|0) < ((($1))|0);
      if (!($cmp)) { __label__ = 11;break $for_cond$2; }
  
      $x=0;
      ;
      while(1) { 
  
        var $2=$x;
        var $3=$width_addr;
        var $cmp2=((($2))|0) < ((($3))|0);
        if (!($cmp2)) { __label__ = 9;break ; }
  
        var $4=$s_addr;
        var $5=HEAP[$4];
        var $conv=((($5))&255);
        var $and=($conv) & 128;
        var $tobool=((($and))|0)!=0;
        if ($tobool) { __label__ = 5;; } else { __label__ = 6;; }
        if (__label__ == 5) {
  
          var $6=$s_addr;
          var $7=HEAP[$6];
          var $8=$d_addr;
          HEAP[$8]=$7;
          ;
        }
        else if (__label__ == 6) {
  
          var $9=$s_addr;
          var $10=HEAP[$9];
          var $conv4=((($10))&255);
          var $11=$y;
          var $div=((((($11))|0)/2)|0);
          var $12=$x;
          var $div5=((((($12))|0)/3)|0);
          var $add=($div)+($div5);
          var $and6=($add) & 1;
          var $cmp7=((($and6))|0)==0;
          var $conv8=((($cmp7))&1);
          var $xor=($conv4) ^ ($conv8);
          var $conv9=((($xor)) & 255);
          var $13=$d_addr;
          HEAP[$13]=$conv9;
          ;
        }
  
        var $14=$d_addr;
        var $15=HEAP[$14];
        var $conv10=((($15))&255);
        var $and11=($conv10) & 1;
        var $16=$b;
        var $add12=($16)+($and11);
        $b=$add12;
        var $17=$s_addr;
        var $incdec_ptr=$17+1;
        $s_addr=$incdec_ptr;
        var $18=$d_addr;
        var $incdec_ptr13=$18+1;
        $d_addr=$incdec_ptr13;
        ;
  
        var $19=$x;
        var $inc=($19)+1;
        $x=$inc;
        __label__ = 3;continue ;
      }
  
      ;
  
      var $20=$y;
      var $inc15=($20)+1;
      $y=$inc15;
      __label__ = 1;continue $for_cond$2;
    }
  
    var $21=$b;
    ;
    return $21;
    return null;
  }
  _Mask_mask4["X"]=1;

  function _Mask_mask5($width, $s, $d) {
    ;
    var __label__;
  
    var $width_addr;
    var $s_addr;
    var $d_addr;
    var $x;
    var $y;
    var $b;
    $width_addr=$width;
    $s_addr=$s;
    $d_addr=$d;
    $b=0;
    $y=0;
    ;
    $for_cond$2: while(1) { 
  
      var $0=$y;
      var $1=$width_addr;
      var $cmp=((($0))|0) < ((($1))|0);
      if (!($cmp)) { __label__ = 11;break $for_cond$2; }
  
      $x=0;
      ;
      while(1) { 
  
        var $2=$x;
        var $3=$width_addr;
        var $cmp2=((($2))|0) < ((($3))|0);
        if (!($cmp2)) { __label__ = 9;break ; }
  
        var $4=$s_addr;
        var $5=HEAP[$4];
        var $conv=((($5))&255);
        var $and=($conv) & 128;
        var $tobool=((($and))|0)!=0;
        if ($tobool) { __label__ = 5;; } else { __label__ = 6;; }
        if (__label__ == 5) {
  
          var $6=$s_addr;
          var $7=HEAP[$6];
          var $8=$d_addr;
          HEAP[$8]=$7;
          ;
        }
        else if (__label__ == 6) {
  
          var $9=$s_addr;
          var $10=HEAP[$9];
          var $conv4=((($10))&255);
          var $11=$x;
          var $12=$y;
          var $mul=($11)*($12);
          var $and5=($mul) & 1;
          var $13=$x;
          var $14=$y;
          var $mul6=($13)*($14);
          var $rem=((($mul6))|0)%3;
          var $add=($and5)+($rem);
          var $cmp7=((($add))|0)==0;
          var $conv8=((($cmp7))&1);
          var $xor=($conv4) ^ ($conv8);
          var $conv9=((($xor)) & 255);
          var $15=$d_addr;
          HEAP[$15]=$conv9;
          ;
        }
  
        var $16=$d_addr;
        var $17=HEAP[$16];
        var $conv10=((($17))&255);
        var $and11=($conv10) & 1;
        var $18=$b;
        var $add12=($18)+($and11);
        $b=$add12;
        var $19=$s_addr;
        var $incdec_ptr=$19+1;
        $s_addr=$incdec_ptr;
        var $20=$d_addr;
        var $incdec_ptr13=$20+1;
        $d_addr=$incdec_ptr13;
        ;
  
        var $21=$x;
        var $inc=($21)+1;
        $x=$inc;
        __label__ = 3;continue ;
      }
  
      ;
  
      var $22=$y;
      var $inc15=($22)+1;
      $y=$inc15;
      __label__ = 1;continue $for_cond$2;
    }
  
    var $23=$b;
    ;
    return $23;
    return null;
  }
  _Mask_mask5["X"]=1;

  function _Mask_mask6($width, $s, $d) {
    ;
    var __label__;
  
    var $width_addr;
    var $s_addr;
    var $d_addr;
    var $x;
    var $y;
    var $b;
    $width_addr=$width;
    $s_addr=$s;
    $d_addr=$d;
    $b=0;
    $y=0;
    ;
    $for_cond$2: while(1) { 
  
      var $0=$y;
      var $1=$width_addr;
      var $cmp=((($0))|0) < ((($1))|0);
      if (!($cmp)) { __label__ = 11;break $for_cond$2; }
  
      $x=0;
      ;
      while(1) { 
  
        var $2=$x;
        var $3=$width_addr;
        var $cmp2=((($2))|0) < ((($3))|0);
        if (!($cmp2)) { __label__ = 9;break ; }
  
        var $4=$s_addr;
        var $5=HEAP[$4];
        var $conv=((($5))&255);
        var $and=($conv) & 128;
        var $tobool=((($and))|0)!=0;
        if ($tobool) { __label__ = 5;; } else { __label__ = 6;; }
        if (__label__ == 5) {
  
          var $6=$s_addr;
          var $7=HEAP[$6];
          var $8=$d_addr;
          HEAP[$8]=$7;
          ;
        }
        else if (__label__ == 6) {
  
          var $9=$s_addr;
          var $10=HEAP[$9];
          var $conv4=((($10))&255);
          var $11=$x;
          var $12=$y;
          var $mul=($11)*($12);
          var $and5=($mul) & 1;
          var $13=$x;
          var $14=$y;
          var $mul6=($13)*($14);
          var $rem=((($mul6))|0)%3;
          var $add=($and5)+($rem);
          var $and7=($add) & 1;
          var $cmp8=((($and7))|0)==0;
          var $conv9=((($cmp8))&1);
          var $xor=($conv4) ^ ($conv9);
          var $conv10=((($xor)) & 255);
          var $15=$d_addr;
          HEAP[$15]=$conv10;
          ;
        }
  
        var $16=$d_addr;
        var $17=HEAP[$16];
        var $conv11=((($17))&255);
        var $and12=($conv11) & 1;
        var $18=$b;
        var $add13=($18)+($and12);
        $b=$add13;
        var $19=$s_addr;
        var $incdec_ptr=$19+1;
        $s_addr=$incdec_ptr;
        var $20=$d_addr;
        var $incdec_ptr14=$20+1;
        $d_addr=$incdec_ptr14;
        ;
  
        var $21=$x;
        var $inc=($21)+1;
        $x=$inc;
        __label__ = 3;continue ;
      }
  
      ;
  
      var $22=$y;
      var $inc16=($22)+1;
      $y=$inc16;
      __label__ = 1;continue $for_cond$2;
    }
  
    var $23=$b;
    ;
    return $23;
    return null;
  }
  _Mask_mask6["X"]=1;

  function _Mask_mask7($width, $s, $d) {
    ;
    var __label__;
  
    var $width_addr;
    var $s_addr;
    var $d_addr;
    var $x;
    var $y;
    var $b;
    $width_addr=$width;
    $s_addr=$s;
    $d_addr=$d;
    $b=0;
    $y=0;
    ;
    $for_cond$2: while(1) { 
  
      var $0=$y;
      var $1=$width_addr;
      var $cmp=((($0))|0) < ((($1))|0);
      if (!($cmp)) { __label__ = 11;break $for_cond$2; }
  
      $x=0;
      ;
      while(1) { 
  
        var $2=$x;
        var $3=$width_addr;
        var $cmp2=((($2))|0) < ((($3))|0);
        if (!($cmp2)) { __label__ = 9;break ; }
  
        var $4=$s_addr;
        var $5=HEAP[$4];
        var $conv=((($5))&255);
        var $and=($conv) & 128;
        var $tobool=((($and))|0)!=0;
        if ($tobool) { __label__ = 5;; } else { __label__ = 6;; }
        if (__label__ == 5) {
  
          var $6=$s_addr;
          var $7=HEAP[$6];
          var $8=$d_addr;
          HEAP[$8]=$7;
          ;
        }
        else if (__label__ == 6) {
  
          var $9=$s_addr;
          var $10=HEAP[$9];
          var $conv4=((($10))&255);
          var $11=$x;
          var $12=$y;
          var $mul=($11)*($12);
          var $rem=((($mul))|0)%3;
          var $13=$x;
          var $14=$y;
          var $add=($13)+($14);
          var $and5=($add) & 1;
          var $add6=($rem)+($and5);
          var $and7=($add6) & 1;
          var $cmp8=((($and7))|0)==0;
          var $conv9=((($cmp8))&1);
          var $xor=($conv4) ^ ($conv9);
          var $conv10=((($xor)) & 255);
          var $15=$d_addr;
          HEAP[$15]=$conv10;
          ;
        }
  
        var $16=$d_addr;
        var $17=HEAP[$16];
        var $conv11=((($17))&255);
        var $and12=($conv11) & 1;
        var $18=$b;
        var $add13=($18)+($and12);
        $b=$add13;
        var $19=$s_addr;
        var $incdec_ptr=$19+1;
        $s_addr=$incdec_ptr;
        var $20=$d_addr;
        var $incdec_ptr14=$20+1;
        $d_addr=$incdec_ptr14;
        ;
  
        var $21=$x;
        var $inc=($21)+1;
        $x=$inc;
        __label__ = 3;continue ;
      }
  
      ;
  
      var $22=$y;
      var $inc16=($22)+1;
      $y=$inc16;
      __label__ = 1;continue $for_cond$2;
    }
  
    var $23=$b;
    ;
    return $23;
    return null;
  }
  _Mask_mask7["X"]=1;

  function _MMask_makeMask($version, $frame, $mask, $level) {
    ;
    var __label__;
  
    var $retval;
    var $version_addr;
    var $frame_addr;
    var $mask_addr;
    var $level_addr;
    var $masked;
    var $width;
    $version_addr=$version;
    $frame_addr=$frame;
    $mask_addr=$mask;
    $level_addr=$level;
    var $0=$mask_addr;
    var $cmp=((($0))|0) < 0;
    if ($cmp) { __label__ = 2;; } else { __label__ = 1;; }
    $if_then$$lor_lhs_false$2: do { 
      if (__label__ == 1) {
  
        var $1=$mask_addr;
        var $cmp1=((($1))|0) >= 4;
        if ($cmp1) { __label__ = 2;break $if_then$$lor_lhs_false$2; }
  
        var $2=$version_addr;
        var $call2=_MQRspec_getWidth($2);
        $width=$call2;
        var $3=$width;
        var $4=$width;
        var $mul=($3)*($4);
        var $call3=_malloc($mul);
        $masked=$call3;
        var $5=$masked;
        var $cmp4=((($5))|0)==0;
        if ($cmp4) { __label__ = 4;; } else { __label__ = 5;; }
        if (__label__ == 4) {
  
          $retval=0;
          __label__ = 6;break $if_then$$lor_lhs_false$2;
        }
        else if (__label__ == 5) {
  
          var $6=$mask_addr;
          var $arrayidx=_maskMakers1+$6;
          var $7=HEAP[$arrayidx];
          var $8=$width;
          var $9=$frame_addr;
          var $10=$masked;
          FUNCTION_TABLE[$7]($8, $9, $10);
          var $11=$version_addr;
          var $12=$width;
          var $13=$masked;
          var $14=$mask_addr;
          var $15=$level_addr;
          _MMask_writeFormatInformation($11, $12, $13, $14, $15);
          var $16=$masked;
          $retval=$16;
          __label__ = 6;break $if_then$$lor_lhs_false$2;
        }
      }
    } while(0);
    if (__label__ == 2) {
  
      var $call=___errno();
      HEAP[$call]=22;
      $retval=0;
      ;
    }
  
    var $17=$retval;
    ;
    return $17;
    return null;
  }
  _MMask_makeMask["X"]=1;

  function _MMask_writeFormatInformation($version, $width, $frame, $mask, $level) {
    ;
    var __label__;
  
    var $version_addr;
    var $width_addr;
    var $frame_addr;
    var $mask_addr;
    var $level_addr;
    var $format;
    var $v;
    var $i;
    $version_addr=$version;
    $width_addr=$width;
    $frame_addr=$frame;
    $mask_addr=$mask;
    $level_addr=$level;
    var $0=$mask_addr;
    var $1=$version_addr;
    var $2=$level_addr;
    var $call=_MQRspec_getFormatInfo($0, $1, $2);
    $format=$call;
    $i=0;
    ;
    $for_cond$2: while(1) { 
  
      var $3=$i;
      var $cmp=((($3))|0) < 8;
      if (!($cmp)) { __label__ = 4;break $for_cond$2; }
  
      var $4=$format;
      var $and=($4) & 1;
      var $or=132 | ($and);
      var $conv=((($or)) & 255);
      $v=$conv;
      var $5=$v;
      var $6=$width_addr;
      var $7=$i;
      var $add=($7)+1;
      var $mul=($6)*($add);
      var $add1=($mul)+8;
      var $8=$frame_addr;
      var $arrayidx=$8+$add1;
      HEAP[$arrayidx]=$5;
      var $9=$format;
      var $shr=($9) >>> 1;
      $format=$shr;
      ;
  
      var $10=$i;
      var $inc=($10)+1;
      $i=$inc;
      __label__ = 1;continue $for_cond$2;
    }
  
    $i=0;
    ;
    while(1) { 
  
      var $11=$i;
      var $cmp3=((($11))|0) < 7;
      if (!($cmp3)) { __label__ = 8;break ; }
  
      var $12=$format;
      var $and6=($12) & 1;
      var $or7=132 | ($and6);
      var $conv8=((($or7)) & 255);
      $v=$conv8;
      var $13=$v;
      var $14=$width_addr;
      var $mul9=(($14)<<3);
      var $add10=($mul9)+7;
      var $15=$i;
      var $sub=($add10)-($15);
      var $16=$frame_addr;
      var $arrayidx11=$16+$sub;
      HEAP[$arrayidx11]=$13;
      var $17=$format;
      var $shr12=($17) >>> 1;
      $format=$shr12;
      ;
  
      var $18=$i;
      var $inc14=($18)+1;
      $i=$inc14;
      __label__ = 5;continue ;
    }
  
    ;
    return;
    return;
  }
  _MMask_writeFormatInformation["X"]=1;

  function _MMask_mask($version, $frame, $level) {
    ;
    var __label__;
  
    var $retval;
    var $version_addr;
    var $frame_addr;
    var $level_addr;
    var $i;
    var $mask;
    var $bestMask;
    var $maxScore;
    var $score;
    var $width;
    $version_addr=$version;
    $frame_addr=$frame;
    $level_addr=$level;
    $maxScore=0;
    var $0=$version_addr;
    var $call=_MQRspec_getWidth($0);
    $width=$call;
    var $1=$width;
    var $2=$width;
    var $mul=($1)*($2);
    var $call1=_malloc($mul);
    $mask=$call1;
    var $3=$mask;
    var $cmp=((($3))|0)==0;
    if ($cmp) { __label__ = 1;; } else { __label__ = 2;; }
    if (__label__ == 1) {
  
      $retval=0;
      ;
    }
    else if (__label__ == 2) {
  
      $bestMask=0;
      $i=0;
      ;
      while(1) { 
  
        var $4=$i;
        var $cmp2=((($4))|0) < 4;
        if (!($cmp2)) { __label__ = 10;break ; }
  
        $score=0;
        var $5=$i;
        var $arrayidx=_maskMakers1+$5;
        var $6=HEAP[$arrayidx];
        var $7=$width;
        var $8=$frame_addr;
        var $9=$mask;
        FUNCTION_TABLE[$6]($7, $8, $9);
        var $10=$version_addr;
        var $11=$width;
        var $12=$mask;
        var $13=$i;
        var $14=$level_addr;
        _MMask_writeFormatInformation($10, $11, $12, $13, $14);
        var $15=$width;
        var $16=$mask;
        var $call3=_MMask_evaluateSymbol($15, $16);
        $score=$call3;
        var $17=$score;
        var $18=$maxScore;
        var $cmp4=((($17))|0) > ((($18))|0);
        if ($cmp4) { __label__ = 5;; } else { __label__ = 8;; }
        if (__label__ == 5) {
  
          var $19=$score;
          $maxScore=$19;
          var $20=$bestMask;
          ;
          var $21=$mask;
          $bestMask=$21;
          var $22=$width;
          var $23=$width;
          var $mul6=($22)*($23);
          var $call7=_malloc($mul6);
          $mask=$call7;
          var $24=$mask;
          var $cmp8=((($24))|0)==0;
          if ($cmp8) { __label__ = 6;break ; }
  
          ;
        }
  
        ;
  
        var $25=$i;
        var $inc=($25)+1;
        $i=$inc;
        __label__ = 3;continue ;
      }
      if (__label__ == 6) {
  
        ;
      }
  
      var $26=$mask;
      ;
      var $27=$bestMask;
      $retval=$27;
      ;
    }
  
    var $28=$retval;
    ;
    return $28;
    return null;
  }
  _MMask_mask["X"]=1;

  function _MMask_evaluateSymbol($width, $frame) {
    ;
    var __label__;
    var __lastLabel__ = null;
  
    var $width_addr;
    var $frame_addr;
    var $x;
    var $y;
    var $p;
    var $sum1;
    var $sum2;
    $width_addr=$width;
    $frame_addr=$frame;
    $sum1=0;
    $sum2=0;
    var $0=$frame_addr;
    var $1=$width_addr;
    var $2=$width_addr;
    var $sub=($2)-1;
    var $mul=($1)*($sub);
    var $add_ptr=$0+$mul;
    $p=$add_ptr;
    $x=0;
    ;
    $for_cond$2: while(1) { 
  
      var $3=$x;
      var $4=$width_addr;
      var $cmp=((($3))|0) < ((($4))|0);
      if (!($cmp)) { __label__ = 4;break $for_cond$2; }
  
      var $5=$x;
      var $6=$p;
      var $arrayidx=$6+$5;
      var $7=HEAP[$arrayidx];
      var $conv=((($7))&255);
      var $and=($conv) & 1;
      var $8=$sum1;
      var $add=($8)+($and);
      $sum1=$add;
      ;
  
      var $9=$x;
      var $inc=($9)+1;
      $x=$inc;
      __label__ = 1;continue $for_cond$2;
    }
  
    var $10=$frame_addr;
    var $11=$width_addr;
    var $add_ptr1=$10+$11;
    var $add_ptr2=$add_ptr1-1;
    $p=$add_ptr2;
    $y=0;
    ;
    while(1) { 
  
      var $12=$y;
      var $13=$width_addr;
      var $cmp4=((($12))|0) < ((($13))|0);
      if (!($cmp4)) { __label__ = 8;break ; }
  
      var $14=$p;
      var $15=HEAP[$14];
      var $conv7=((($15))&255);
      var $and8=($conv7) & 1;
      var $16=$sum2;
      var $add9=($16)+($and8);
      $sum2=$add9;
      var $17=$width_addr;
      var $18=$p;
      var $add_ptr10=$18+$17;
      $p=$add_ptr10;
      ;
  
      var $19=$y;
      var $inc12=($19)+1;
      $y=$inc12;
      __label__ = 5;continue ;
    }
  
    var $20=$sum1;
    var $21=$sum2;
    var $cmp14=((($20))|0) <= ((($21))|0);
    if ($cmp14) { __label__ = 9;; } else { __label__ = 10;; }
    if (__label__ == 9) {
  
      var $22=$sum1;
      var $mul16=(($22)<<4);
      var $23=$sum2;
      var $add17=($mul16)+($23);
      __lastLabel__ = 9; ;
    }
    else if (__label__ == 10) {
  
      var $24=$sum2;
      var $mul18=(($24)<<4);
      var $25=$sum1;
      var $add19=($mul18)+($25);
      __lastLabel__ = 10; ;
    }
  
    var $cond=__lastLabel__ == 9 ? $add17 : ($add19);
    ;
    return $cond;
    return null;
  }
  _MMask_evaluateSymbol["X"]=1;

  function _Mask_mask02($width, $s, $d) {
    ;
    var __label__;
  
    var $width_addr;
    var $s_addr;
    var $d_addr;
    var $x;
    var $y;
    $width_addr=$width;
    $s_addr=$s;
    $d_addr=$d;
    $y=0;
    ;
    $for_cond$2: while(1) { 
  
      var $0=$y;
      var $1=$width_addr;
      var $cmp=((($0))|0) < ((($1))|0);
      if (!($cmp)) { __label__ = 11;break $for_cond$2; }
  
      $x=0;
      ;
      while(1) { 
  
        var $2=$x;
        var $3=$width_addr;
        var $cmp2=((($2))|0) < ((($3))|0);
        if (!($cmp2)) { __label__ = 9;break ; }
  
        var $4=$s_addr;
        var $5=HEAP[$4];
        var $conv=((($5))&255);
        var $and=($conv) & 128;
        var $tobool=((($and))|0)!=0;
        if ($tobool) { __label__ = 5;; } else { __label__ = 6;; }
        if (__label__ == 5) {
  
          var $6=$s_addr;
          var $7=HEAP[$6];
          var $8=$d_addr;
          HEAP[$8]=$7;
          ;
        }
        else if (__label__ == 6) {
  
          var $9=$s_addr;
          var $10=HEAP[$9];
          var $conv4=((($10))&255);
          var $11=$y;
          var $and5=($11) & 1;
          var $cmp6=((($and5))|0)==0;
          var $conv7=((($cmp6))&1);
          var $xor=($conv4) ^ ($conv7);
          var $conv8=((($xor)) & 255);
          var $12=$d_addr;
          HEAP[$12]=$conv8;
          ;
        }
  
        var $13=$s_addr;
        var $incdec_ptr=$13+1;
        $s_addr=$incdec_ptr;
        var $14=$d_addr;
        var $incdec_ptr9=$14+1;
        $d_addr=$incdec_ptr9;
        ;
  
        var $15=$x;
        var $inc=($15)+1;
        $x=$inc;
        __label__ = 3;continue ;
      }
  
      ;
  
      var $16=$y;
      var $inc11=($16)+1;
      $y=$inc11;
      __label__ = 1;continue $for_cond$2;
    }
  
    ;
    return;
    return;
  }
  _Mask_mask02["X"]=1;

  function _Mask_mask13($width, $s, $d) {
    ;
    var __label__;
  
    var $width_addr;
    var $s_addr;
    var $d_addr;
    var $x;
    var $y;
    $width_addr=$width;
    $s_addr=$s;
    $d_addr=$d;
    $y=0;
    ;
    $for_cond$2: while(1) { 
  
      var $0=$y;
      var $1=$width_addr;
      var $cmp=((($0))|0) < ((($1))|0);
      if (!($cmp)) { __label__ = 11;break $for_cond$2; }
  
      $x=0;
      ;
      while(1) { 
  
        var $2=$x;
        var $3=$width_addr;
        var $cmp2=((($2))|0) < ((($3))|0);
        if (!($cmp2)) { __label__ = 9;break ; }
  
        var $4=$s_addr;
        var $5=HEAP[$4];
        var $conv=((($5))&255);
        var $and=($conv) & 128;
        var $tobool=((($and))|0)!=0;
        if ($tobool) { __label__ = 5;; } else { __label__ = 6;; }
        if (__label__ == 5) {
  
          var $6=$s_addr;
          var $7=HEAP[$6];
          var $8=$d_addr;
          HEAP[$8]=$7;
          ;
        }
        else if (__label__ == 6) {
  
          var $9=$s_addr;
          var $10=HEAP[$9];
          var $conv4=((($10))&255);
          var $11=$y;
          var $div=((((($11))|0)/2)|0);
          var $12=$x;
          var $div5=((((($12))|0)/3)|0);
          var $add=($div)+($div5);
          var $and6=($add) & 1;
          var $cmp7=((($and6))|0)==0;
          var $conv8=((($cmp7))&1);
          var $xor=($conv4) ^ ($conv8);
          var $conv9=((($xor)) & 255);
          var $13=$d_addr;
          HEAP[$13]=$conv9;
          ;
        }
  
        var $14=$s_addr;
        var $incdec_ptr=$14+1;
        $s_addr=$incdec_ptr;
        var $15=$d_addr;
        var $incdec_ptr10=$15+1;
        $d_addr=$incdec_ptr10;
        ;
  
        var $16=$x;
        var $inc=($16)+1;
        $x=$inc;
        __label__ = 3;continue ;
      }
  
      ;
  
      var $17=$y;
      var $inc12=($17)+1;
      $y=$inc12;
      __label__ = 1;continue $for_cond$2;
    }
  
    ;
    return;
    return;
  }
  _Mask_mask13["X"]=1;

  function _Mask_mask24($width, $s, $d) {
    ;
    var __label__;
  
    var $width_addr;
    var $s_addr;
    var $d_addr;
    var $x;
    var $y;
    $width_addr=$width;
    $s_addr=$s;
    $d_addr=$d;
    $y=0;
    ;
    $for_cond$2: while(1) { 
  
      var $0=$y;
      var $1=$width_addr;
      var $cmp=((($0))|0) < ((($1))|0);
      if (!($cmp)) { __label__ = 11;break $for_cond$2; }
  
      $x=0;
      ;
      while(1) { 
  
        var $2=$x;
        var $3=$width_addr;
        var $cmp2=((($2))|0) < ((($3))|0);
        if (!($cmp2)) { __label__ = 9;break ; }
  
        var $4=$s_addr;
        var $5=HEAP[$4];
        var $conv=((($5))&255);
        var $and=($conv) & 128;
        var $tobool=((($and))|0)!=0;
        if ($tobool) { __label__ = 5;; } else { __label__ = 6;; }
        if (__label__ == 5) {
  
          var $6=$s_addr;
          var $7=HEAP[$6];
          var $8=$d_addr;
          HEAP[$8]=$7;
          ;
        }
        else if (__label__ == 6) {
  
          var $9=$s_addr;
          var $10=HEAP[$9];
          var $conv4=((($10))&255);
          var $11=$x;
          var $12=$y;
          var $mul=($11)*($12);
          var $and5=($mul) & 1;
          var $13=$x;
          var $14=$y;
          var $mul6=($13)*($14);
          var $rem=((($mul6))|0)%3;
          var $add=($and5)+($rem);
          var $and7=($add) & 1;
          var $cmp8=((($and7))|0)==0;
          var $conv9=((($cmp8))&1);
          var $xor=($conv4) ^ ($conv9);
          var $conv10=((($xor)) & 255);
          var $15=$d_addr;
          HEAP[$15]=$conv10;
          ;
        }
  
        var $16=$s_addr;
        var $incdec_ptr=$16+1;
        $s_addr=$incdec_ptr;
        var $17=$d_addr;
        var $incdec_ptr11=$17+1;
        $d_addr=$incdec_ptr11;
        ;
  
        var $18=$x;
        var $inc=($18)+1;
        $x=$inc;
        __label__ = 3;continue ;
      }
  
      ;
  
      var $19=$y;
      var $inc13=($19)+1;
      $y=$inc13;
      __label__ = 1;continue $for_cond$2;
    }
  
    ;
    return;
    return;
  }
  _Mask_mask24["X"]=1;

  function _Mask_mask35($width, $s, $d) {
    ;
    var __label__;
  
    var $width_addr;
    var $s_addr;
    var $d_addr;
    var $x;
    var $y;
    $width_addr=$width;
    $s_addr=$s;
    $d_addr=$d;
    $y=0;
    ;
    $for_cond$2: while(1) { 
  
      var $0=$y;
      var $1=$width_addr;
      var $cmp=((($0))|0) < ((($1))|0);
      if (!($cmp)) { __label__ = 11;break $for_cond$2; }
  
      $x=0;
      ;
      while(1) { 
  
        var $2=$x;
        var $3=$width_addr;
        var $cmp2=((($2))|0) < ((($3))|0);
        if (!($cmp2)) { __label__ = 9;break ; }
  
        var $4=$s_addr;
        var $5=HEAP[$4];
        var $conv=((($5))&255);
        var $and=($conv) & 128;
        var $tobool=((($and))|0)!=0;
        if ($tobool) { __label__ = 5;; } else { __label__ = 6;; }
        if (__label__ == 5) {
  
          var $6=$s_addr;
          var $7=HEAP[$6];
          var $8=$d_addr;
          HEAP[$8]=$7;
          ;
        }
        else if (__label__ == 6) {
  
          var $9=$s_addr;
          var $10=HEAP[$9];
          var $conv4=((($10))&255);
          var $11=$x;
          var $12=$y;
          var $add=($11)+($12);
          var $and5=($add) & 1;
          var $13=$x;
          var $14=$y;
          var $mul=($13)*($14);
          var $rem=((($mul))|0)%3;
          var $add6=($and5)+($rem);
          var $and7=($add6) & 1;
          var $cmp8=((($and7))|0)==0;
          var $conv9=((($cmp8))&1);
          var $xor=($conv4) ^ ($conv9);
          var $conv10=((($xor)) & 255);
          var $15=$d_addr;
          HEAP[$15]=$conv10;
          ;
        }
  
        var $16=$s_addr;
        var $incdec_ptr=$16+1;
        $s_addr=$incdec_ptr;
        var $17=$d_addr;
        var $incdec_ptr11=$17+1;
        $d_addr=$incdec_ptr11;
        ;
  
        var $18=$x;
        var $inc=($18)+1;
        $x=$inc;
        __label__ = 3;continue ;
      }
  
      ;
  
      var $19=$y;
      var $inc13=($19)+1;
      $y=$inc13;
      __label__ = 1;continue $for_cond$2;
    }
  
    ;
    return;
    return;
  }
  _Mask_mask35["X"]=1;

  function _MQRspec_getDataLengthBit($version, $level) {
    ;
    var __label__;
  
    var $retval;
    var $version_addr;
    var $level_addr;
    var $w;
    var $ecc;
    $version_addr=$version;
    $level_addr=$level;
    var $0=$version_addr;
    var $arrayidx=_mqrspecCapacity+$0*5;
    var $width=$arrayidx;
    var $1=HEAP[$width];
    var $sub=($1)-1;
    $w=$sub;
    var $2=$level_addr;
    var $3=$version_addr;
    var $arrayidx1=_mqrspecCapacity+$3*5;
    var $ec=$arrayidx1+1;
    var $arrayidx2=$ec+$2;
    var $4=HEAP[$arrayidx2];
    $ecc=$4;
    var $5=$ecc;
    var $cmp=((($5))|0)==0;
    if ($cmp) { __label__ = 1;; } else { __label__ = 2;; }
    if (__label__ == 1) {
  
      $retval=0;
      ;
    }
    else if (__label__ == 2) {
  
      var $6=$w;
      var $7=$w;
      var $mul=($6)*($7);
      var $sub3=($mul)-64;
      var $8=$ecc;
      var $mul4=(($8)<<3);
      var $sub5=($sub3)-($mul4);
      $retval=$sub5;
      ;
    }
  
    var $9=$retval;
    ;
    return $9;
    return null;
  }
  

  function _MQRspec_getDataLength($version, $level) {
    ;
    var __label__;
  
    var $version_addr;
    var $level_addr;
    $version_addr=$version;
    $level_addr=$level;
    var $0=$version_addr;
    var $1=$level_addr;
    var $call=_MQRspec_getDataLengthBit($0, $1);
    var $add=($call)+4;
    var $div=((((($add))|0)/8)|0);
    ;
    return $div;
    return null;
  }
  

  function _MQRspec_getECCLength($version, $level) {
    ;
    var __label__;
  
    var $version_addr;
    var $level_addr;
    $version_addr=$version;
    $level_addr=$level;
    var $0=$level_addr;
    var $1=$version_addr;
    var $arrayidx=_mqrspecCapacity+$1*5;
    var $ec=$arrayidx+1;
    var $arrayidx1=$ec+$0;
    var $2=HEAP[$arrayidx1];
    ;
    return $2;
    return null;
  }
  

  function _MQRspec_getWidth($version) {
    ;
    var __label__;
  
    var $version_addr;
    $version_addr=$version;
    var $0=$version_addr;
    var $arrayidx=_mqrspecCapacity+$0*5;
    var $width=$arrayidx;
    var $1=HEAP[$width];
    ;
    return $1;
    return null;
  }
  

  function _MQRspec_lengthIndicator($mode, $version) {
    ;
    var __label__;
  
    var $mode_addr;
    var $version_addr;
    $mode_addr=$mode;
    $version_addr=$version;
    var $0=$version_addr;
    var $sub=($0)-1;
    var $1=$mode_addr;
    var $arrayidx=_lengthTableBits+($1<<2);
    var $arrayidx1=$arrayidx+$sub;
    var $2=HEAP[$arrayidx1];
    ;
    return $2;
    return null;
  }
  

  function _MQRspec_maximumWords($mode, $version) {
    ;
    var __label__;
  
    var $mode_addr;
    var $version_addr;
    var $bits;
    var $words;
    $mode_addr=$mode;
    $version_addr=$version;
    var $0=$version_addr;
    var $sub=($0)-1;
    var $1=$mode_addr;
    var $arrayidx=_lengthTableBits+($1<<2);
    var $arrayidx1=$arrayidx+$sub;
    var $2=HEAP[$arrayidx1];
    $bits=$2;
    var $3=$bits;
    var $shl=1 << ($3);
    var $sub2=($shl)-1;
    $words=$sub2;
    var $4=$mode_addr;
    var $cmp=((($4))|0)==3;
    if ($cmp) { __label__ = 1;; } else { __label__ = 2;; }
    if (__label__ == 1) {
  
      var $5=$words;
      var $mul=(($5)<<1);
      $words=$mul;
      ;
    }
  
    var $6=$words;
    ;
    return $6;
    return null;
  }
  

  function _MQRspec_getFormatInfo($mask, $version, $level) {
    ;
    var __label__;
  
    var $retval;
    var $mask_addr;
    var $version_addr;
    var $level_addr;
    var $type;
    $mask_addr=$mask;
    $version_addr=$version;
    $level_addr=$level;
    var $0=$mask_addr;
    var $cmp=((($0))|0) < 0;
    if ($cmp) { __label__ = 2;; } else { __label__ = 1;; }
    $if_then$$lor_lhs_false$2: do { 
      if (__label__ == 1) {
  
        var $1=$mask_addr;
        var $cmp1=((($1))|0) > 3;
        if ($cmp1) { __label__ = 2;break $if_then$$lor_lhs_false$2; }
  
        var $2=$version_addr;
        var $cmp2=((($2))|0) <= 0;
        if ($cmp2) { __label__ = 5;; } else { __label__ = 4;; }
        $if_then5$$lor_lhs_false3$5: do { 
          if (__label__ == 4) {
  
            var $3=$version_addr;
            var $cmp4=((($3))|0) > 4;
            if ($cmp4) { __label__ = 5;break $if_then5$$lor_lhs_false3$5; }
  
            var $4=$level_addr;
            var $cmp7=((($4))|0)==3;
            if ($cmp7) { __label__ = 7;; } else { __label__ = 8;; }
            if (__label__ == 7) {
  
              $retval=0;
              __label__ = 11;break $if_then$$lor_lhs_false$2;
            }
            else if (__label__ == 8) {
  
              var $5=$level_addr;
              var $6=$version_addr;
              var $arrayidx=_typeTable+$6*3;
              var $arrayidx10=$arrayidx+$5;
              var $7=HEAP[$arrayidx10];
              $type=$7;
              var $8=$type;
              var $cmp11=((($8))|0) < 0;
              if ($cmp11) { __label__ = 9;; } else { __label__ = 10;; }
              if (__label__ == 9) {
  
                $retval=0;
                __label__ = 11;break $if_then$$lor_lhs_false$2;
              }
              else if (__label__ == 10) {
  
                var $9=$type;
                var $10=$mask_addr;
                var $arrayidx14=_formatInfo+($10<<3);
                var $arrayidx15=$arrayidx14+$9;
                var $11=HEAP[$arrayidx15];
                $retval=$11;
                __label__ = 11;break $if_then$$lor_lhs_false$2;
              }
            }
          }
        } while(0);
  
        $retval=0;
        __label__ = 11;break $if_then$$lor_lhs_false$2;
      }
    } while(0);
    if (__label__ == 2) {
  
      $retval=0;
      ;
    }
  
    var $12=$retval;
    ;
    return $12;
    return null;
  }
  

  function _MQRspec_newFrame($version) {
    ;
    var __label__;
  
    var $retval;
    var $version_addr;
    var $frame;
    var $width;
    $version_addr=$version;
    var $0=$version_addr;
    var $cmp=((($0))|0) < 1;
    if ($cmp) { __label__ = 2;; } else { __label__ = 1;; }
    $if_then$$lor_lhs_false$2: do { 
      if (__label__ == 1) {
  
        var $1=$version_addr;
        var $cmp1=((($1))|0) > 4;
        if ($cmp1) { __label__ = 2;break $if_then$$lor_lhs_false$2; }
  
        var $2=$version_addr;
        var $arrayidx=_frames+$2;
        var $3=HEAP[$arrayidx];
        var $cmp2=((($3))|0)==0;
        if ($cmp2) { __label__ = 4;; } else { __label__ = 5;; }
        if (__label__ == 4) {
  
          var $4=$version_addr;
          var $call=_MQRspec_createFrame($4);
          var $5=$version_addr;
          var $arrayidx4=_frames+$5;
          HEAP[$arrayidx4]=$call;
          ;
        }
  
        var $6=$version_addr;
        var $arrayidx6=_frames+$6;
        var $7=HEAP[$arrayidx6];
        var $cmp7=((($7))|0)==0;
        if ($cmp7) { __label__ = 6;; } else { __label__ = 7;; }
        if (__label__ == 6) {
  
          $retval=0;
          __label__ = 10;break $if_then$$lor_lhs_false$2;
        }
        else if (__label__ == 7) {
  
          var $8=$version_addr;
          var $arrayidx10=_mqrspecCapacity+$8*5;
          var $width11=$arrayidx10;
          var $9=HEAP[$width11];
          $width=$9;
          var $10=$width;
          var $11=$width;
          var $mul=($10)*($11);
          var $call12=_malloc($mul);
          $frame=$call12;
          var $12=$frame;
          var $cmp13=((($12))|0)==0;
          if ($cmp13) { __label__ = 8;; } else { __label__ = 9;; }
          if (__label__ == 8) {
  
            $retval=0;
            __label__ = 10;break $if_then$$lor_lhs_false$2;
          }
          else if (__label__ == 9) {
  
            var $13=$frame;
            var $14=$version_addr;
            var $arrayidx16=_frames+$14;
            var $15=HEAP[$arrayidx16];
            var $16=$width;
            var $17=$width;
            var $mul17=($16)*($17);
            assert($mul17 % 1 === 0, 'memcpy given ' + $mul17 + ' bytes to copy. Problem with 1=1 corrections perhaps?');for (var mcpi_s=$15,mcpi_e=$15+$mul17,mcpi_d=$13; mcpi_s<mcpi_e; mcpi_s++, mcpi_d++) {
              HEAP[mcpi_d] = HEAP[mcpi_s];
            };
            var $18=$frame;
            $retval=$18;
            __label__ = 10;break $if_then$$lor_lhs_false$2;
          }
        }
      }
    } while(0);
    if (__label__ == 2) {
  
      $retval=0;
      ;
    }
  
    var $19=$retval;
    ;
    return $19;
    return null;
  }
  _MQRspec_newFrame["X"]=1;

  function _MQRspec_createFrame($version) {
    ;
    var __label__;
  
    var $retval;
    var $version_addr;
    var $frame;
    var $p;
    var $q;
    var $width;
    var $x;
    var $y;
    $version_addr=$version;
    var $0=$version_addr;
    var $arrayidx=_mqrspecCapacity+$0*5;
    var $width1=$arrayidx;
    var $1=HEAP[$width1];
    $width=$1;
    var $2=$width;
    var $3=$width;
    var $mul=($2)*($3);
    var $call=_malloc($mul);
    $frame=$call;
    var $4=$frame;
    var $cmp=((($4))|0)==0;
    if ($cmp) { __label__ = 1;; } else { __label__ = 2;; }
    if (__label__ == 1) {
  
      $retval=0;
      ;
    }
    else if (__label__ == 2) {
  
      var $5=$frame;
      var $6=$width;
      var $7=$width;
      var $mul2=($6)*($7);
      for (var mspi = 0; mspi < $mul2; mspi++) {
      HEAP[$5+mspi]=0
      };
      var $8=$frame;
      var $9=$width;
      _putFinderPattern($8, $9, 0, 0);
      var $10=$frame;
      $p=$10;
      $y=0;
      ;
      $for_cond$5: while(1) { 
  
        var $11=$y;
        var $cmp3=((($11))|0) < 7;
        if (!($cmp3)) { __label__ = 6;break $for_cond$5; }
  
        var $12=$p;
        var $arrayidx4=$12+7;
        HEAP[$arrayidx4]=-64;
        var $13=$width;
        var $14=$p;
        var $add_ptr=$14+$13;
        $p=$add_ptr;
        ;
  
        var $15=$y;
        var $inc=($15)+1;
        $y=$inc;
        __label__ = 3;continue $for_cond$5;
      }
  
      var $16=$frame;
      var $17=$width;
      var $mul5=($17)*7;
      var $add_ptr6=$16+$mul5;
      for (var mspi = 0; mspi < 8; mspi++) {
      HEAP[$add_ptr6+mspi]=-64
      };
      var $18=$frame;
      var $19=$width;
      var $mul7=(($19)<<3);
      var $add_ptr8=$18+$mul7;
      var $add_ptr9=$add_ptr8+1;
      for (var mspi = 0; mspi < 8; mspi++) {
      HEAP[$add_ptr9+mspi]=-124
      };
      var $20=$frame;
      var $21=$width;
      var $add_ptr10=$20+$21;
      var $add_ptr11=$add_ptr10+8;
      $p=$add_ptr11;
      $y=0;
      ;
      $for_cond12$10: while(1) { 
  
        var $22=$y;
        var $cmp13=((($22))|0) < 7;
        if (!($cmp13)) { __label__ = 10;break $for_cond12$10; }
  
        var $23=$p;
        HEAP[$23]=-124;
        var $24=$width;
        var $25=$p;
        var $add_ptr15=$25+$24;
        $p=$add_ptr15;
        ;
  
        var $26=$y;
        var $inc17=($26)+1;
        $y=$inc17;
        __label__ = 7;continue $for_cond12$10;
      }
  
      var $27=$frame;
      var $add_ptr19=$27+8;
      $p=$add_ptr19;
      var $28=$frame;
      var $29=$width;
      var $mul20=(($29)<<3);
      var $add_ptr21=$28+$mul20;
      $q=$add_ptr21;
      $x=1;
      ;
      while(1) { 
  
        var $30=$x;
        var $31=$width;
        var $sub=($31)-7;
        var $cmp23=((($30))|0) < ((($sub))|0);
        if (!($cmp23)) { __label__ = 14;break ; }
  
        var $32=$x;
        var $and=($32) & 1;
        var $or=144 | ($and);
        var $conv=((($or)) & 255);
        var $33=$p;
        HEAP[$33]=$conv;
        var $34=$x;
        var $and25=($34) & 1;
        var $or26=144 | ($and25);
        var $conv27=((($or26)) & 255);
        var $35=$q;
        HEAP[$35]=$conv27;
        var $36=$p;
        var $incdec_ptr=$36+1;
        $p=$incdec_ptr;
        var $37=$width;
        var $38=$q;
        var $add_ptr28=$38+$37;
        $q=$add_ptr28;
        ;
  
        var $39=$x;
        var $inc30=($39)+1;
        $x=$inc30;
        __label__ = 11;continue ;
      }
  
      var $40=$frame;
      $retval=$40;
      ;
    }
  
    var $41=$retval;
    ;
    return $41;
    return null;
  }
  _MQRspec_createFrame["X"]=1;

  function _MQRspec_clearCache() {
    ;
    var __label__;
  
    var $i;
    $i=1;
    ;
    while(1) { 
  
      var $0=$i;
      var $cmp=((($0))|0) <= 4;
      if (!($cmp)) { __label__ = 4;break ; }
  
      var $1=$i;
      var $arrayidx=_frames+$1;
      var $2=HEAP[$arrayidx];
      ;
      var $3=$i;
      var $arrayidx1=_frames+$3;
      HEAP[$arrayidx1]=0;
      ;
  
      var $4=$i;
      var $inc=($4)+1;
      $i=$inc;
      __label__ = 1;continue ;
    }
  
    ;
    return;
    return;
  }
  

  function _putFinderPattern($frame, $width, $ox, $oy) {
    ;
    var __label__;
  
    var $frame_addr;
    var $width_addr;
    var $ox_addr;
    var $oy_addr;
    var $x;
    var $y;
    var $s;
    $frame_addr=$frame;
    $width_addr=$width;
    $ox_addr=$ox;
    $oy_addr=$oy;
    var $0=$oy_addr;
    var $1=$width_addr;
    var $mul=($0)*($1);
    var $2=$ox_addr;
    var $add=($mul)+($2);
    var $3=$frame_addr;
    var $add_ptr=$3+$add;
    $frame_addr=$add_ptr;
    $s=_putFinderPattern_finder;
    $y=0;
    ;
    $for_cond$2: while(1) { 
  
      var $4=$y;
      var $cmp=((($4))|0) < 7;
      if (!($cmp)) { __label__ = 8;break $for_cond$2; }
  
      $x=0;
      ;
      while(1) { 
  
        var $5=$x;
        var $cmp2=((($5))|0) < 7;
        if (!($cmp2)) { __label__ = 6;break ; }
  
        var $6=$x;
        var $7=$s;
        var $arrayidx=$7+$6;
        var $8=HEAP[$arrayidx];
        var $9=$x;
        var $10=$frame_addr;
        var $arrayidx4=$10+$9;
        HEAP[$arrayidx4]=$8;
        ;
  
        var $11=$x;
        var $inc=($11)+1;
        $x=$inc;
        __label__ = 3;continue ;
      }
  
      var $12=$width_addr;
      var $13=$frame_addr;
      var $add_ptr5=$13+$12;
      $frame_addr=$add_ptr5;
      var $14=$s;
      var $add_ptr6=$14+7;
      $s=$add_ptr6;
      ;
  
      var $15=$y;
      var $inc8=($15)+1;
      $y=$inc8;
      __label__ = 1;continue $for_cond$2;
    }
  
    ;
    return;
    return;
  }
  _putFinderPattern["X"]=1;

  function _QRcode_free($qrcode) {
    ;
    var __label__;
  
    var $qrcode_addr;
    $qrcode_addr=$qrcode;
    var $0=$qrcode_addr;
    var $cmp=((($0))|0)!=0;
    if ($cmp) { __label__ = 1;; } else { __label__ = 2;; }
    if (__label__ == 1) {
  
      var $1=$qrcode_addr;
      var $data=$1+2;
      var $2=HEAP[$data];
      ;
      var $3=$qrcode_addr;
      var $4=$3;
      ;
      ;
    }
  
    ;
    return;
    return;
  }
  

  function _QRcode_encodeInput($input) {
    ;
    var __label__;
  
    var $retval;
    var $input_addr;
    $input_addr=$input;
    var $0=$input_addr;
    var $mqr=$0+4;
    var $1=HEAP[$mqr];
    var $tobool=((($1))|0)!=0;
    if ($tobool) { __label__ = 1;; } else { __label__ = 2;; }
    if (__label__ == 1) {
  
      var $2=$input_addr;
      var $call=_QRcode_encodeMaskMQR($2, -1);
      $retval=$call;
      ;
    }
    else if (__label__ == 2) {
  
      var $3=$input_addr;
      var $call1=_QRcode_encodeMask($3, -1);
      $retval=$call1;
      ;
    }
  
    var $4=$retval;
    ;
    return $4;
    return null;
  }
  

  function _QRcode_encodeMaskMQR($input, $mask) {
    ;
    var __label__;
  
    var $retval;
    var $input_addr;
    var $mask_addr;
    var $width;
    var $version;
    var $raw;
    var $frame;
    var $masked;
    var $p;
    var $code;
    var $bit;
    var $filler;
    var $i;
    var $j;
    var $qrcode;
    $input_addr=$input;
    $mask_addr=$mask;
    $qrcode=0;
    var $0=$input_addr;
    var $mqr=$0+4;
    var $1=HEAP[$mqr];
    var $tobool=((($1))|0)!=0;
    if ($tobool) { __label__ = 2;; } else { __label__ = 1;; }
    $if_end$$if_then$2: do { 
      if (__label__ == 2) {
  
        var $2=$input_addr;
        var $version1=$2;
        var $3=HEAP[$version1];
        var $cmp=((($3))|0) <= 0;
        if ($cmp) { __label__ = 4;; } else { __label__ = 3;; }
        $if_then4$$lor_lhs_false$4: do { 
          if (__label__ == 3) {
  
            var $4=$input_addr;
            var $version2=$4;
            var $5=HEAP[$version2];
            var $cmp3=((($5))|0) > 4;
            if ($cmp3) { __label__ = 4;break $if_then4$$lor_lhs_false$4; }
  
            var $6=$input_addr;
            var $level=$6+1;
            var $7=HEAP[$level];
            var $cmp7=((($7))>>>0) > 2;
            if ($cmp7) { __label__ = 6;; } else { __label__ = 7;; }
            if (__label__ == 6) {
  
              var $call9=___errno();
              HEAP[$call9]=22;
              $retval=0;
              __label__ = 40;break $if_end$$if_then$2;
            }
            else if (__label__ == 7) {
  
              var $8=$input_addr;
              var $call11=_MQRraw_new($8);
              $raw=$call11;
              var $9=$raw;
              var $cmp12=((($9))|0)==0;
              if ($cmp12) { __label__ = 8;; } else { __label__ = 9;; }
              if (__label__ == 8) {
  
                $retval=0;
                __label__ = 40;break $if_end$$if_then$2;
              }
              else if (__label__ == 9) {
  
                var $10=$raw;
                var $version15=$10;
                var $11=HEAP[$version15];
                $version=$11;
                var $12=$version;
                var $call16=_MQRspec_getWidth($12);
                $width=$call16;
                var $13=$version;
                var $call17=_MQRspec_newFrame($13);
                $frame=$call17;
                var $14=$frame;
                var $cmp18=((($14))|0)==0;
                if ($cmp18) { __label__ = 10;; } else { __label__ = 11;; }
                if (__label__ == 10) {
  
                  var $15=$raw;
                  _MQRraw_free($15);
                  $retval=0;
                  __label__ = 40;break $if_end$$if_then$2;
                }
                else if (__label__ == 11) {
  
                  var $16=$width;
                  var $17=$frame;
                  var $call21=_FrameFiller_new($16, $17, 1);
                  $filler=$call21;
                  var $18=$filler;
                  var $cmp22=((($18))|0)==0;
                  if ($cmp22) { __label__ = 12;; } else { __label__ = 13;; }
                  if (__label__ == 12) {
  
                    var $19=$raw;
                    _MQRraw_free($19);
                    var $20=$frame;
                    ;
                    $retval=0;
                    __label__ = 40;break $if_end$$if_then$2;
                  }
                  else if (__label__ == 13) {
  
                    $i=0;
                    ;
                    $for_cond$19: while(1) { 
  
                      var $21=$i;
                      var $22=$raw;
                      var $dataLength=$22+1;
                      var $23=HEAP[$dataLength];
                      var $24=$raw;
                      var $eccLength=$24+2;
                      var $25=HEAP[$eccLength];
                      var $add=($23)+($25);
                      var $cmp25=((($21))|0) < ((($add))|0);
                      if (!($cmp25)) { __label__ = 33;break $for_cond$19; }
  
                      var $26=$raw;
                      var $call26=_MQRraw_getCode($26);
                      $code=$call26;
                      var $27=$raw;
                      var $oddbits=$27+6;
                      var $28=HEAP[$oddbits];
                      var $tobool27=((($28))|0)!=0;
                      if ($tobool27) { __label__ = 16;; } else { __label__ = 24;; }
                      $land_lhs_true$$if_else$22: do { 
                        if (__label__ == 16) {
  
                          var $29=$i;
                          var $30=$raw;
                          var $dataLength28=$30+1;
                          var $31=HEAP[$dataLength28];
                          var $sub=($31)-1;
                          var $cmp29=((($29))|0)==((($sub))|0);
                          if (!($cmp29)) { __label__ = 24;break $land_lhs_true$$if_else$22; }
  
                          var $32=$raw;
                          var $oddbits31=$32+6;
                          var $33=HEAP[$oddbits31];
                          var $shl=1 << ($33);
                          var $conv=((($shl)) & 255);
                          $bit=$conv;
                          $j=0;
                          ;
                          while(1) { 
  
                            var $34=$j;
                            var $35=$raw;
                            var $oddbits33=$35+6;
                            var $36=HEAP[$oddbits33];
                            var $cmp34=((($34))|0) < ((($36))|0);
                            if (!($cmp34)) { __label__ = 23;break ; }
  
                            var $37=$filler;
                            var $call37=_FrameFiller_next($37);
                            $p=$call37;
                            var $38=$p;
                            var $cmp38=((($38))|0)==0;
                            if ($cmp38) { __label__ = 20;break $for_cond$19; }
  
                            var $39=$bit;
                            var $conv42=((($39))&255);
                            var $40=$code;
                            var $conv43=((($40))&255);
                            var $and=($conv42) & ($conv43);
                            var $cmp44=((($and))|0)!=0;
                            var $conv45=((($cmp44))&1);
                            var $or=2 | ($conv45);
                            var $conv46=((($or)) & 255);
                            var $41=$p;
                            HEAP[$41]=$conv46;
                            var $42=$bit;
                            var $conv47=((($42))&255);
                            var $shr=($conv47) >> 1;
                            var $conv48=((($shr)) & 255);
                            $bit=$conv48;
                            ;
  
                            var $43=$j;
                            var $inc=($43)+1;
                            $j=$inc;
                            __label__ = 18;continue ;
                          }
  
                          __label__ = 31;break $land_lhs_true$$if_else$22;
                        }
                      } while(0);
                      if (__label__ == 24) {
  
                        $bit=-128;
                        $j=0;
                        ;
                        while(1) { 
  
                          var $44=$j;
                          var $cmp50=((($44))|0) < 8;
                          if (!($cmp50)) { __label__ = 30;break ; }
  
                          var $45=$filler;
                          var $call53=_FrameFiller_next($45);
                          $p=$call53;
                          var $46=$p;
                          var $cmp54=((($46))|0)==0;
                          if ($cmp54) { __label__ = 27;break $for_cond$19; }
  
                          var $47=$bit;
                          var $conv58=((($47))&255);
                          var $48=$code;
                          var $conv59=((($48))&255);
                          var $and60=($conv58) & ($conv59);
                          var $cmp61=((($and60))|0)!=0;
                          var $conv62=((($cmp61))&1);
                          var $or63=2 | ($conv62);
                          var $conv64=((($or63)) & 255);
                          var $49=$p;
                          HEAP[$49]=$conv64;
                          var $50=$bit;
                          var $conv65=((($50))&255);
                          var $shr66=($conv65) >> 1;
                          var $conv67=((($shr66)) & 255);
                          $bit=$conv67;
                          ;
  
                          var $51=$j;
                          var $inc69=($51)+1;
                          $j=$inc69;
                          __label__ = 25;continue ;
                        }
  
                        ;
                      }
  
                      ;
  
                      var $52=$i;
                      var $inc73=($52)+1;
                      $i=$inc73;
                      __label__ = 14;continue $for_cond$19;
                    }
                    if (__label__ == 33) {
  
                      var $53=$raw;
                      _MQRraw_free($53);
                      $raw=0;
                      var $54=$mask_addr;
                      var $cmp75=((($54))|0) < 0;
                      if ($cmp75) { __label__ = 34;; } else { __label__ = 35;; }
                      if (__label__ == 34) {
  
                        var $55=$version;
                        var $56=$frame;
                        var $57=$input_addr;
                        var $level78=$57+1;
                        var $58=HEAP[$level78];
                        var $call79=_MMask_mask($55, $56, $58);
                        $masked=$call79;
                        ;
                      }
                      else if (__label__ == 35) {
  
                        var $59=$version;
                        var $60=$frame;
                        var $61=$mask_addr;
                        var $62=$input_addr;
                        var $level81=$62+1;
                        var $63=HEAP[$level81];
                        var $call82=_MMask_makeMask($59, $60, $61, $63);
                        $masked=$call82;
                        ;
                      }
  
                      var $64=$masked;
                      var $cmp84=((($64))|0)==0;
                      if ($cmp84) { __label__ = 37;; } else { __label__ = 38;; }
                      if (__label__ == 37) {
  
                        ;
                      }
                      else if (__label__ == 38) {
  
                        var $65=$version;
                        var $66=$width;
                        var $67=$masked;
                        var $call88=_QRcode_new($65, $66, $67);
                        $qrcode=$call88;
                        ;
                      }
                    }
                    else if (__label__ == 20) {
  
                      ;
                    }
                    else if (__label__ == 27) {
  
                      ;
                    }
  
                    var $68=$raw;
                    _MQRraw_free($68);
                    var $69=$filler;
                    var $70=$69;
                    ;
                    var $71=$frame;
                    ;
                    var $72=$qrcode;
                    $retval=$72;
                    __label__ = 40;break $if_end$$if_then$2;
                  }
                }
              }
            }
          }
        } while(0);
  
        var $call5=___errno();
        HEAP[$call5]=22;
        $retval=0;
        ;
      }
      else if (__label__ == 1) {
  
        var $call=___errno();
        HEAP[$call]=22;
        $retval=0;
        ;
      }
    } while(0);
  
    var $73=$retval;
    ;
    return $73;
    return null;
  }
  _QRcode_encodeMaskMQR["X"]=1;

  function _QRcode_encodeMask($input, $mask) {
    ;
    var __label__;
  
    var $retval;
    var $input_addr;
    var $mask_addr;
    var $width;
    var $version;
    var $raw;
    var $frame;
    var $masked;
    var $p;
    var $code;
    var $bit;
    var $filler;
    var $i;
    var $j;
    var $qrcode;
    $input_addr=$input;
    $mask_addr=$mask;
    $qrcode=0;
    var $0=$input_addr;
    var $mqr=$0+4;
    var $1=HEAP[$mqr];
    var $tobool=((($1))|0)!=0;
    if ($tobool) { __label__ = 1;; } else { __label__ = 2;; }
    $if_then$$if_end$2: do { 
      if (__label__ == 1) {
  
        var $call=___errno();
        HEAP[$call]=22;
        $retval=0;
        ;
      }
      else if (__label__ == 2) {
  
        var $2=$input_addr;
        var $version1=$2;
        var $3=HEAP[$version1];
        var $cmp=((($3))|0) < 0;
        if ($cmp) { __label__ = 4;; } else { __label__ = 3;; }
        $if_then4$$lor_lhs_false$5: do { 
          if (__label__ == 3) {
  
            var $4=$input_addr;
            var $version2=$4;
            var $5=HEAP[$version2];
            var $cmp3=((($5))|0) > 40;
            if ($cmp3) { __label__ = 4;break $if_then4$$lor_lhs_false$5; }
  
            var $6=$input_addr;
            var $level=$6+1;
            var $7=HEAP[$level];
            var $cmp7=((($7))>>>0) > 3;
            if ($cmp7) { __label__ = 6;; } else { __label__ = 7;; }
            if (__label__ == 6) {
  
              var $call9=___errno();
              HEAP[$call9]=22;
              $retval=0;
              __label__ = 39;break $if_then$$if_end$2;
            }
            else if (__label__ == 7) {
  
              var $8=$input_addr;
              var $call11=_QRraw_new($8);
              $raw=$call11;
              var $9=$raw;
              var $cmp12=((($9))|0)==0;
              if ($cmp12) { __label__ = 8;; } else { __label__ = 9;; }
              if (__label__ == 8) {
  
                $retval=0;
                __label__ = 39;break $if_then$$if_end$2;
              }
              else if (__label__ == 9) {
  
                var $10=$raw;
                var $version15=$10;
                var $11=HEAP[$version15];
                $version=$11;
                var $12=$version;
                var $call16=_QRspec_getWidth($12);
                $width=$call16;
                var $13=$version;
                var $call17=_QRspec_newFrame($13);
                $frame=$call17;
                var $14=$frame;
                var $cmp18=((($14))|0)==0;
                if ($cmp18) { __label__ = 10;; } else { __label__ = 11;; }
                if (__label__ == 10) {
  
                  var $15=$raw;
                  _QRraw_free($15);
                  $retval=0;
                  __label__ = 39;break $if_then$$if_end$2;
                }
                else if (__label__ == 11) {
  
                  var $16=$width;
                  var $17=$frame;
                  var $call21=_FrameFiller_new($16, $17, 0);
                  $filler=$call21;
                  var $18=$filler;
                  var $cmp22=((($18))|0)==0;
                  if ($cmp22) { __label__ = 12;; } else { __label__ = 13;; }
                  if (__label__ == 12) {
  
                    var $19=$raw;
                    _QRraw_free($19);
                    var $20=$frame;
                    ;
                    $retval=0;
                    __label__ = 39;break $if_then$$if_end$2;
                  }
                  else if (__label__ == 13) {
  
                    $i=0;
                    ;
                    $for_cond$20: while(1) { 
  
                      var $21=$i;
                      var $22=$raw;
                      var $dataLength=$22+1;
                      var $23=HEAP[$dataLength];
                      var $24=$raw;
                      var $eccLength=$24+2;
                      var $25=HEAP[$eccLength];
                      var $add=($23)+($25);
                      var $cmp25=((($21))|0) < ((($add))|0);
                      if (!($cmp25)) { __label__ = 23;break $for_cond$20; }
  
                      var $26=$raw;
                      var $call26=_QRraw_getCode($26);
                      $code=$call26;
                      $bit=-128;
                      $j=0;
                      ;
                      while(1) { 
  
                        var $27=$j;
                        var $cmp28=((($27))|0) < 8;
                        if (!($cmp28)) { __label__ = 21;break ; }
  
                        var $28=$filler;
                        var $call30=_FrameFiller_next($28);
                        $p=$call30;
                        var $29=$p;
                        var $cmp31=((($29))|0)==0;
                        if ($cmp31) { __label__ = 18;break $for_cond$20; }
  
                        var $30=$bit;
                        var $conv=((($30))&255);
                        var $31=$code;
                        var $conv34=((($31))&255);
                        var $and=($conv) & ($conv34);
                        var $cmp35=((($and))|0)!=0;
                        var $conv36=((($cmp35))&1);
                        var $or=2 | ($conv36);
                        var $conv37=((($or)) & 255);
                        var $32=$p;
                        HEAP[$32]=$conv37;
                        var $33=$bit;
                        var $conv38=((($33))&255);
                        var $shr=($conv38) >> 1;
                        var $conv39=((($shr)) & 255);
                        $bit=$conv39;
                        ;
  
                        var $34=$j;
                        var $inc=($34)+1;
                        $j=$inc;
                        __label__ = 16;continue ;
                      }
  
                      ;
  
                      var $35=$i;
                      var $inc41=($35)+1;
                      $i=$inc41;
                      __label__ = 14;continue $for_cond$20;
                    }
                    if (__label__ == 23) {
  
                      var $36=$raw;
                      _QRraw_free($36);
                      $raw=0;
                      var $37=$version;
                      var $call43=_QRspec_getRemainder($37);
                      $j=$call43;
                      $i=0;
                      ;
                      while(1) { 
  
                        var $38=$i;
                        var $39=$j;
                        var $cmp45=((($38))|0) < ((($39))|0);
                        if (!($cmp45)) { __label__ = 29;break ; }
  
                        var $40=$filler;
                        var $call48=_FrameFiller_next($40);
                        $p=$call48;
                        var $41=$p;
                        var $cmp49=((($41))|0)==0;
                        if ($cmp49) { __label__ = 26;break ; }
  
                        var $42=$p;
                        HEAP[$42]=2;
                        ;
  
                        var $43=$i;
                        var $inc54=($43)+1;
                        $i=$inc54;
                        __label__ = 24;continue ;
                      }
                      if (__label__ == 29) {
  
                        var $44=$mask_addr;
                        var $cmp56=((($44))|0)==-2;
                        if ($cmp56) { __label__ = 30;; } else { __label__ = 31;; }
                        if (__label__ == 30) {
  
                          var $45=$width;
                          var $46=$width;
                          var $mul=($45)*($46);
                          var $call59=_malloc($mul);
                          $masked=$call59;
                          var $47=$masked;
                          var $48=$frame;
                          var $49=$width;
                          var $50=$width;
                          var $mul60=($49)*($50);
                          assert($mul60 % 1 === 0, 'memcpy given ' + $mul60 + ' bytes to copy. Problem with 1=1 corrections perhaps?');for (var mcpi_s=$48,mcpi_e=$48+$mul60,mcpi_d=$47; mcpi_s<mcpi_e; mcpi_s++, mcpi_d++) {
                            HEAP[mcpi_d] = HEAP[mcpi_s];
                          };
                          ;
                        }
                        else if (__label__ == 31) {
  
                          var $51=$mask_addr;
                          var $cmp61=((($51))|0) < 0;
                          if ($cmp61) { __label__ = 32;; } else { __label__ = 33;; }
                          if (__label__ == 32) {
  
                            var $52=$width;
                            var $53=$frame;
                            var $54=$input_addr;
                            var $level64=$54+1;
                            var $55=HEAP[$level64];
                            var $call65=_Mask_mask($52, $53, $55);
                            $masked=$call65;
                            ;
                          }
                          else if (__label__ == 33) {
  
                            var $56=$width;
                            var $57=$frame;
                            var $58=$mask_addr;
                            var $59=$input_addr;
                            var $level67=$59+1;
                            var $60=HEAP[$level67];
                            var $call68=_Mask_makeMask($56, $57, $58, $60);
                            $masked=$call68;
                            ;
                          }
  
                          ;
                        }
  
                        var $61=$masked;
                        var $cmp71=((($61))|0)==0;
                        if ($cmp71) { __label__ = 36;; } else { __label__ = 37;; }
                        if (__label__ == 36) {
  
                          ;
                        }
                        else if (__label__ == 37) {
  
                          var $62=$version;
                          var $63=$width;
                          var $64=$masked;
                          var $call75=_QRcode_new($62, $63, $64);
                          $qrcode=$call75;
                          ;
                        }
                      }
                      else if (__label__ == 26) {
  
                        ;
                      }
                    }
                    else if (__label__ == 18) {
  
                      ;
                    }
  
                    var $65=$raw;
                    _QRraw_free($65);
                    var $66=$filler;
                    var $67=$66;
                    ;
                    var $68=$frame;
                    ;
                    var $69=$qrcode;
                    $retval=$69;
                    __label__ = 39;break $if_then$$if_end$2;
                  }
                }
              }
            }
          }
        } while(0);
  
        var $call5=___errno();
        HEAP[$call5]=22;
        $retval=0;
        ;
      }
    } while(0);
  
    var $70=$retval;
    ;
    return $70;
    return null;
  }
  _QRcode_encodeMask["X"]=1;

  function _QRcode_encodeString($string, $version, $level, $hint, $casesensitive) {
    ;
    var __label__;
  
    var $string_addr;
    var $version_addr;
    var $level_addr;
    var $hint_addr;
    var $casesensitive_addr;
    $string_addr=$string;
    $version_addr=$version;
    $level_addr=$level;
    $hint_addr=$hint;
    $casesensitive_addr=$casesensitive;
    var $0=$string_addr;
    var $1=$version_addr;
    var $2=$level_addr;
    var $3=$hint_addr;
    var $4=$casesensitive_addr;
    var $call=_QRcode_encodeStringReal($0, $1, $2, 0, $3, $4);
    ;
    return $call;
    return null;
  }
  

  function _QRcode_encodeStringReal($string, $version, $level, $mqr, $hint, $casesensitive) {
    ;
    var __label__;
  
    var $retval;
    var $string_addr;
    var $version_addr;
    var $level_addr;
    var $mqr_addr;
    var $hint_addr;
    var $casesensitive_addr;
    var $input;
    var $code;
    var $ret;
    $string_addr=$string;
    $version_addr=$version;
    $level_addr=$level;
    $mqr_addr=$mqr;
    $hint_addr=$hint;
    $casesensitive_addr=$casesensitive;
    var $0=$string_addr;
    var $cmp=((($0))|0)==0;
    if ($cmp) { __label__ = 1;; } else { __label__ = 2;; }
    $if_then$$if_end$2: do { 
      if (__label__ == 1) {
  
        var $call=___errno();
        HEAP[$call]=22;
        $retval=0;
        ;
      }
      else if (__label__ == 2) {
  
        var $1=$hint_addr;
        var $cmp1=((($1))|0)!=2;
        if ($cmp1) { __label__ = 3;; } else { __label__ = 5;; }
        $land_lhs_true$$if_end5$5: do { 
          if (__label__ == 3) {
  
            var $2=$hint_addr;
            var $cmp2=((($2))|0)!=3;
            if (!($cmp2)) { __label__ = 5;break $land_lhs_true$$if_end5$5; }
  
            var $call4=___errno();
            HEAP[$call4]=22;
            $retval=0;
            __label__ = 13;break $if_then$$if_end$2;
          }
        } while(0);
  
        var $3=$mqr_addr;
        var $tobool=((($3))|0)!=0;
        if ($tobool) { __label__ = 6;; } else { __label__ = 7;; }
        if (__label__ == 6) {
  
          var $4=$version_addr;
          var $5=$level_addr;
          var $call7=_QRinput_newMQR($4, $5);
          $input=$call7;
          ;
        }
        else if (__label__ == 7) {
  
          var $6=$version_addr;
          var $7=$level_addr;
          var $call8=_QRinput_new2($6, $7);
          $input=$call8;
          ;
        }
  
        var $8=$input;
        var $cmp10=((($8))|0)==0;
        if ($cmp10) { __label__ = 9;; } else { __label__ = 10;; }
        if (__label__ == 9) {
  
          $retval=0;
          ;
        }
        else if (__label__ == 10) {
  
          var $9=$string_addr;
          var $10=$input;
          var $11=$hint_addr;
          var $12=$casesensitive_addr;
          var $call13=_Split_splitStringToQRinput($9, $10, $11, $12);
          $ret=$call13;
          var $13=$ret;
          var $cmp14=((($13))|0) < 0;
          if ($cmp14) { __label__ = 11;; } else { __label__ = 12;; }
          if (__label__ == 11) {
  
            var $14=$input;
            _QRinput_free($14);
            $retval=0;
            ;
          }
          else if (__label__ == 12) {
  
            var $15=$input;
            var $call17=_QRcode_encodeInput($15);
            $code=$call17;
            var $16=$input;
            _QRinput_free($16);
            var $17=$code;
            $retval=$17;
            ;
          }
        }
      }
    } while(0);
  
    var $18=$retval;
    ;
    return $18;
    return null;
  }
  _QRcode_encodeStringReal["X"]=1;

  function _QRcode_encodeStringMQR($string, $version, $level, $hint, $casesensitive) {
    ;
    var __label__;
  
    var $string_addr;
    var $version_addr;
    var $level_addr;
    var $hint_addr;
    var $casesensitive_addr;
    $string_addr=$string;
    $version_addr=$version;
    $level_addr=$level;
    $hint_addr=$hint;
    $casesensitive_addr=$casesensitive;
    var $0=$string_addr;
    var $1=$version_addr;
    var $2=$level_addr;
    var $3=$hint_addr;
    var $4=$casesensitive_addr;
    var $call=_QRcode_encodeStringReal($0, $1, $2, 1, $3, $4);
    ;
    return $call;
    return null;
  }
  

  function _QRcode_encodeData($size, $data, $version, $level) {
    ;
    var __label__;
  
    var $size_addr;
    var $data_addr;
    var $version_addr;
    var $level_addr;
    $size_addr=$size;
    $data_addr=$data;
    $version_addr=$version;
    $level_addr=$level;
    var $0=$data_addr;
    var $1=$size_addr;
    var $2=$version_addr;
    var $3=$level_addr;
    var $call=_QRcode_encodeDataReal($0, $1, $2, $3, 0);
    ;
    return $call;
    return null;
  }
  

  function _QRcode_encodeDataReal($data, $length, $version, $level, $mqr) {
    ;
    var __label__;
  
    var $retval;
    var $data_addr;
    var $length_addr;
    var $version_addr;
    var $level_addr;
    var $mqr_addr;
    var $input;
    var $code;
    var $ret;
    $data_addr=$data;
    $length_addr=$length;
    $version_addr=$version;
    $level_addr=$level;
    $mqr_addr=$mqr;
    var $0=$data_addr;
    var $cmp=((($0))|0)==0;
    if ($cmp) { __label__ = 2;; } else { __label__ = 1;; }
    $if_then$$lor_lhs_false$2: do { 
      if (__label__ == 1) {
  
        var $1=$length_addr;
        var $cmp1=((($1))|0)==0;
        if ($cmp1) { __label__ = 2;break $if_then$$lor_lhs_false$2; }
  
        var $2=$mqr_addr;
        var $tobool=((($2))|0)!=0;
        if ($tobool) { __label__ = 4;; } else { __label__ = 5;; }
        if (__label__ == 4) {
  
          var $3=$version_addr;
          var $4=$level_addr;
          var $call3=_QRinput_newMQR($3, $4);
          $input=$call3;
          ;
        }
        else if (__label__ == 5) {
  
          var $5=$version_addr;
          var $6=$level_addr;
          var $call4=_QRinput_new2($5, $6);
          $input=$call4;
          ;
        }
  
        var $7=$input;
        var $cmp6=((($7))|0)==0;
        if ($cmp6) { __label__ = 7;; } else { __label__ = 8;; }
        if (__label__ == 7) {
  
          $retval=0;
          __label__ = 11;break $if_then$$lor_lhs_false$2;
        }
        else if (__label__ == 8) {
  
          var $8=$input;
          var $9=$length_addr;
          var $10=$data_addr;
          var $call9=_QRinput_append($8, 2, $9, $10);
          $ret=$call9;
          var $11=$ret;
          var $cmp10=((($11))|0) < 0;
          if ($cmp10) { __label__ = 9;; } else { __label__ = 10;; }
          if (__label__ == 9) {
  
            var $12=$input;
            _QRinput_free($12);
            $retval=0;
            __label__ = 11;break $if_then$$lor_lhs_false$2;
          }
          else if (__label__ == 10) {
  
            var $13=$input;
            var $call13=_QRcode_encodeInput($13);
            $code=$call13;
            var $14=$input;
            _QRinput_free($14);
            var $15=$code;
            $retval=$15;
            __label__ = 11;break $if_then$$lor_lhs_false$2;
          }
        }
      }
    } while(0);
    if (__label__ == 2) {
  
      var $call=___errno();
      HEAP[$call]=22;
      $retval=0;
      ;
    }
  
    var $16=$retval;
    ;
    return $16;
    return null;
  }
  _QRcode_encodeDataReal["X"]=1;

  function _QRcode_encodeString8bit($string, $version, $level) {
    ;
    var __label__;
  
    var $retval;
    var $string_addr;
    var $version_addr;
    var $level_addr;
    $string_addr=$string;
    $version_addr=$version;
    $level_addr=$level;
    var $0=$string_addr;
    var $cmp=((($0))|0)==0;
    if ($cmp) { __label__ = 1;; } else { __label__ = 2;; }
    if (__label__ == 1) {
  
      var $call=___errno();
      HEAP[$call]=22;
      $retval=0;
      ;
    }
    else if (__label__ == 2) {
  
      var $1=$string_addr;
      var $2=$string_addr;
      var $call1=_strlen($2);
      var $3=$version_addr;
      var $4=$level_addr;
      var $call2=_QRcode_encodeDataReal($1, $call1, $3, $4, 0);
      $retval=$call2;
      ;
    }
  
    var $5=$retval;
    ;
    return $5;
    return null;
  }
  

  function _QRcode_encodeDataMQR($size, $data, $version, $level) {
    ;
    var __label__;
  
    var $size_addr;
    var $data_addr;
    var $version_addr;
    var $level_addr;
    $size_addr=$size;
    $data_addr=$data;
    $version_addr=$version;
    $level_addr=$level;
    var $0=$data_addr;
    var $1=$size_addr;
    var $2=$version_addr;
    var $3=$level_addr;
    var $call=_QRcode_encodeDataReal($0, $1, $2, $3, 1);
    ;
    return $call;
    return null;
  }
  

  function _QRcode_encodeString8bitMQR($string, $version, $level) {
    ;
    var __label__;
  
    var $retval;
    var $string_addr;
    var $version_addr;
    var $level_addr;
    $string_addr=$string;
    $version_addr=$version;
    $level_addr=$level;
    var $0=$string_addr;
    var $cmp=((($0))|0)==0;
    if ($cmp) { __label__ = 1;; } else { __label__ = 2;; }
    if (__label__ == 1) {
  
      var $call=___errno();
      HEAP[$call]=22;
      $retval=0;
      ;
    }
    else if (__label__ == 2) {
  
      var $1=$string_addr;
      var $2=$string_addr;
      var $call1=_strlen($2);
      var $3=$version_addr;
      var $4=$level_addr;
      var $call2=_QRcode_encodeDataReal($1, $call1, $3, $4, 1);
      $retval=$call2;
      ;
    }
  
    var $5=$retval;
    ;
    return $5;
    return null;
  }
  

  function _QRcode_List_free($qrlist) {
    ;
    var __label__;
  
    var $qrlist_addr;
    var $list;
    var $next;
    $qrlist_addr=$qrlist;
    var $0=$qrlist_addr;
    $list=$0;
    ;
    while(1) { 
  
      var $1=$list;
      var $cmp=((($1))|0)!=0;
      if (!($cmp)) { __label__ = 3;break ; }
  
      var $2=$list;
      var $next1=$2+1;
      var $3=HEAP[$next1];
      $next=$3;
      var $4=$list;
      _QRcode_List_freeEntry($4);
      var $5=$next;
      $list=$5;
      __label__ = 1;continue ;
    }
  
    ;
    return;
    return;
  }
  

  function _QRcode_List_freeEntry($entry1) {
    ;
    var __label__;
  
    var $entry_addr;
    $entry_addr=$entry1;
    var $0=$entry_addr;
    var $cmp=((($0))|0)!=0;
    if ($cmp) { __label__ = 1;; } else { __label__ = 2;; }
    if (__label__ == 1) {
  
      var $1=$entry_addr;
      var $code=$1;
      var $2=HEAP[$code];
      _QRcode_free($2);
      var $3=$entry_addr;
      var $4=$3;
      ;
      ;
    }
  
    ;
    return;
    return;
  }
  

  function _QRcode_List_size($qrlist) {
    ;
    var __label__;
  
    var $qrlist_addr;
    var $list;
    var $size;
    $qrlist_addr=$qrlist;
    var $0=$qrlist_addr;
    $list=$0;
    $size=0;
    ;
    while(1) { 
  
      var $1=$list;
      var $cmp=((($1))|0)!=0;
      if (!($cmp)) { __label__ = 3;break ; }
  
      var $2=$size;
      var $inc=($2)+1;
      $size=$inc;
      var $3=$list;
      var $next=$3+1;
      var $4=HEAP[$next];
      $list=$4;
      __label__ = 1;continue ;
    }
  
    var $5=$size;
    ;
    return $5;
    return null;
  }
  

  function _QRcode_encodeInputStructured($s) {
    ;
    var __label__;
  
    var $retval;
    var $s_addr;
    var $head;
    var $tail;
    var $entry1;
    var $list;
    $s_addr=$s;
    $head=0;
    $tail=0;
    var $0=$s_addr;
    var $head2=$0+2;
    var $1=HEAP[$head2];
    $list=$1;
    ;
    $while_cond$2: while(1) { 
  
      var $2=$list;
      var $cmp=((($2))|0)!=0;
      if (!($cmp)) { __label__ = 12;break $while_cond$2; }
  
      var $3=$head;
      var $cmp3=((($3))|0)==0;
      if ($cmp3) { __label__ = 3;; } else { __label__ = 6;; }
      if (__label__ == 3) {
  
        var $call=_QRcode_List_newEntry();
        $entry1=$call;
        var $4=$entry1;
        var $cmp4=((($4))|0)==0;
        if ($cmp4) { __label__ = 4;break $while_cond$2; }
  
        var $5=$entry1;
        $head=$5;
        var $6=$head;
        $tail=$6;
        ;
      }
      else if (__label__ == 6) {
  
        var $call6=_QRcode_List_newEntry();
        $entry1=$call6;
        var $7=$entry1;
        var $cmp7=((($7))|0)==0;
        if ($cmp7) { __label__ = 7;break $while_cond$2; }
  
        var $8=$entry1;
        var $9=$tail;
        var $next=$9+1;
        HEAP[$next]=$8;
        var $10=$tail;
        var $next10=$10+1;
        var $11=HEAP[$next10];
        $tail=$11;
        ;
      }
  
      var $12=$list;
      var $input=$12;
      var $13=HEAP[$input];
      var $call12=_QRcode_encodeInput($13);
      var $14=$tail;
      var $code=$14;
      HEAP[$code]=$call12;
      var $15=$tail;
      var $code13=$15;
      var $16=HEAP[$code13];
      var $cmp14=((($16))|0)==0;
      if ($cmp14) { __label__ = 10;break $while_cond$2; }
  
      var $17=$list;
      var $next17=$17+1;
      var $18=HEAP[$next17];
      $list=$18;
      __label__ = 1;continue $while_cond$2;
    }
    $while_end$$if_then5$$if_then8$$if_then15$12: do { 
      if (__label__ == 12) {
  
        var $19=$head;
        $retval=$19;
        __label__ = 14;break $while_end$$if_then5$$if_then8$$if_then15$12;
      }
      else if (__label__ == 4) {
  
        __label__ = 13;break $while_end$$if_then5$$if_then8$$if_then15$12;
      }
      else if (__label__ == 7) {
  
        __label__ = 13;break $while_end$$if_then5$$if_then8$$if_then15$12;
      }
      else if (__label__ == 10) {
  
        __label__ = 13;break $while_end$$if_then5$$if_then8$$if_then15$12;
      }
    } while(0);
    if (__label__ == 13) {
  
      var $20=$head;
      _QRcode_List_free($20);
      $retval=0;
      ;
    }
  
    var $21=$retval;
    ;
    return $21;
    return null;
  }
  _QRcode_encodeInputStructured["X"]=1;

  function _QRcode_List_newEntry() {
    ;
    var __label__;
  
    var $retval;
    var $entry1;
    var $call=_malloc(8);
    var $0=$call;
    $entry1=$0;
    var $1=$entry1;
    var $cmp=((($1))|0)==0;
    if ($cmp) { __label__ = 1;; } else { __label__ = 2;; }
    if (__label__ == 1) {
  
      $retval=0;
      ;
    }
    else if (__label__ == 2) {
  
      var $2=$entry1;
      var $next=$2+1;
      HEAP[$next]=0;
      var $3=$entry1;
      var $code=$3;
      HEAP[$code]=0;
      var $4=$entry1;
      $retval=$4;
      ;
    }
  
    var $5=$retval;
    ;
    return $5;
    return null;
  }
  

  function _QRcode_encodeDataStructured($size, $data, $version, $level) {
    ;
    var __label__;
  
    var $size_addr;
    var $data_addr;
    var $version_addr;
    var $level_addr;
    $size_addr=$size;
    $data_addr=$data;
    $version_addr=$version;
    $level_addr=$level;
    var $0=$size_addr;
    var $1=$data_addr;
    var $2=$version_addr;
    var $3=$level_addr;
    var $call=_QRcode_encodeDataStructuredReal($0, $1, $2, $3, 1, -1, 0);
    ;
    return $call;
    return null;
  }
  

  function _QRcode_encodeDataStructuredReal($size, $data, $version, $level, $eightbit, $hint, $casesensitive) {
    ;
    var __label__;
  
    var $retval;
    var $size_addr;
    var $data_addr;
    var $version_addr;
    var $level_addr;
    var $eightbit_addr;
    var $hint_addr;
    var $casesensitive_addr;
    var $input;
    var $codes;
    var $ret;
    $size_addr=$size;
    $data_addr=$data;
    $version_addr=$version;
    $level_addr=$level;
    $eightbit_addr=$eightbit;
    $hint_addr=$hint;
    $casesensitive_addr=$casesensitive;
    var $0=$version_addr;
    var $cmp=((($0))|0) <= 0;
    if ($cmp) { __label__ = 1;; } else { __label__ = 2;; }
    $if_then$$if_end$2: do { 
      if (__label__ == 1) {
  
        var $call=___errno();
        HEAP[$call]=22;
        $retval=0;
        ;
      }
      else if (__label__ == 2) {
  
        var $1=$eightbit_addr;
        var $tobool=((($1))|0)!=0;
        if ($tobool) { __label__ = 6;; } else { __label__ = 3;; }
        $if_end6$$land_lhs_true$5: do { 
          if (__label__ == 3) {
  
            var $2=$hint_addr;
            var $cmp1=((($2))|0)!=2;
            if (!($cmp1)) { __label__ = 6;break $if_end6$$land_lhs_true$5; }
  
            var $3=$hint_addr;
            var $cmp3=((($3))|0)!=3;
            if (!($cmp3)) { __label__ = 6;break $if_end6$$land_lhs_true$5; }
  
            var $call5=___errno();
            HEAP[$call5]=22;
            $retval=0;
            __label__ = 14;break $if_then$$if_end$2;
          }
        } while(0);
  
        var $4=$version_addr;
        var $5=$level_addr;
        var $call7=_QRinput_new2($4, $5);
        $input=$call7;
        var $6=$input;
        var $cmp8=((($6))|0)==0;
        if ($cmp8) { __label__ = 7;; } else { __label__ = 8;; }
        if (__label__ == 7) {
  
          $retval=0;
          ;
        }
        else if (__label__ == 8) {
  
          var $7=$eightbit_addr;
          var $tobool11=((($7))|0)!=0;
          if ($tobool11) { __label__ = 9;; } else { __label__ = 10;; }
          if (__label__ == 9) {
  
            var $8=$input;
            var $9=$size_addr;
            var $10=$data_addr;
            var $call13=_QRinput_append($8, 2, $9, $10);
            $ret=$call13;
            ;
          }
          else if (__label__ == 10) {
  
            var $11=$data_addr;
            var $12=$input;
            var $13=$hint_addr;
            var $14=$casesensitive_addr;
            var $call14=_Split_splitStringToQRinput($11, $12, $13, $14);
            $ret=$call14;
            ;
          }
  
          var $15=$ret;
          var $cmp16=((($15))|0) < 0;
          if ($cmp16) { __label__ = 12;; } else { __label__ = 13;; }
          if (__label__ == 12) {
  
            var $16=$input;
            _QRinput_free($16);
            $retval=0;
            ;
          }
          else if (__label__ == 13) {
  
            var $17=$input;
            var $call19=_QRcode_encodeInputToStructured($17);
            $codes=$call19;
            var $18=$input;
            _QRinput_free($18);
            var $19=$codes;
            $retval=$19;
            ;
          }
        }
      }
    } while(0);
  
    var $20=$retval;
    ;
    return $20;
    return null;
  }
  _QRcode_encodeDataStructuredReal["X"]=1;

  function _QRcode_encodeString8bitStructured($string, $version, $level) {
    ;
    var __label__;
  
    var $retval;
    var $string_addr;
    var $version_addr;
    var $level_addr;
    $string_addr=$string;
    $version_addr=$version;
    $level_addr=$level;
    var $0=$string_addr;
    var $cmp=((($0))|0)==0;
    if ($cmp) { __label__ = 1;; } else { __label__ = 2;; }
    if (__label__ == 1) {
  
      var $call=___errno();
      HEAP[$call]=22;
      $retval=0;
      ;
    }
    else if (__label__ == 2) {
  
      var $1=$string_addr;
      var $call1=_strlen($1);
      var $2=$string_addr;
      var $3=$version_addr;
      var $4=$level_addr;
      var $call2=_QRcode_encodeDataStructured($call1, $2, $3, $4);
      $retval=$call2;
      ;
    }
  
    var $5=$retval;
    ;
    return $5;
    return null;
  }
  

  function _QRcode_encodeStringStructured($string, $version, $level, $hint, $casesensitive) {
    ;
    var __label__;
  
    var $retval;
    var $string_addr;
    var $version_addr;
    var $level_addr;
    var $hint_addr;
    var $casesensitive_addr;
    $string_addr=$string;
    $version_addr=$version;
    $level_addr=$level;
    $hint_addr=$hint;
    $casesensitive_addr=$casesensitive;
    var $0=$string_addr;
    var $cmp=((($0))|0)==0;
    if ($cmp) { __label__ = 1;; } else { __label__ = 2;; }
    if (__label__ == 1) {
  
      var $call=___errno();
      HEAP[$call]=22;
      $retval=0;
      ;
    }
    else if (__label__ == 2) {
  
      var $1=$string_addr;
      var $call1=_strlen($1);
      var $2=$string_addr;
      var $3=$version_addr;
      var $4=$level_addr;
      var $5=$hint_addr;
      var $6=$casesensitive_addr;
      var $call2=_QRcode_encodeDataStructuredReal($call1, $2, $3, $4, 0, $5, $6);
      $retval=$call2;
      ;
    }
  
    var $7=$retval;
    ;
    return $7;
    return null;
  }
  

  function _QRcode_clearCache() {
    ;
    var __label__;
  
    _QRspec_clearCache();
    _MQRspec_clearCache();
    _free_rs_cache();
    ;
    return;
    return;
  }
  

  function _QRcode_encodeInputToStructured($input) {
    ;
    var __label__;
  
    var $retval;
    var $input_addr;
    var $s;
    var $codes;
    $input_addr=$input;
    var $0=$input_addr;
    var $call=_QRinput_splitQRinputToStruct($0);
    $s=$call;
    var $1=$s;
    var $cmp=((($1))|0)==0;
    if ($cmp) { __label__ = 1;; } else { __label__ = 2;; }
    if (__label__ == 1) {
  
      $retval=0;
      ;
    }
    else if (__label__ == 2) {
  
      var $2=$s;
      var $call1=_QRcode_encodeInputStructured($2);
      $codes=$call1;
      var $3=$s;
      _QRinput_Struct_free($3);
      var $4=$codes;
      $retval=$4;
      ;
    }
  
    var $5=$retval;
    ;
    return $5;
    return null;
  }
  

  function _QRraw_new($input) {
    var __stackBase__  = STACKTOP; STACKTOP += 5; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 5);
    var __label__;
  
    var $retval;
    var $input_addr;
    var $raw;
    var $spec=__stackBase__;
    var $ret;
    $input_addr=$input;
    var $call=_malloc(36);
    var $0=$call;
    $raw=$0;
    var $1=$raw;
    var $cmp=((($1))|0)==0;
    if ($cmp) { __label__ = 1;; } else { __label__ = 2;; }
    if (__label__ == 1) {
  
      $retval=0;
      ;
    }
    else if (__label__ == 2) {
  
      var $2=$input_addr;
      var $call1=_QRinput_getByteStream($2);
      var $3=$raw;
      var $datacode=$3+3;
      HEAP[$datacode]=$call1;
      var $4=$raw;
      var $datacode2=$4+3;
      var $5=HEAP[$datacode2];
      var $cmp3=((($5))|0)==0;
      if ($cmp3) { __label__ = 3;; } else { __label__ = 4;; }
      if (__label__ == 3) {
  
        var $6=$raw;
        var $7=$6;
        ;
        $retval=0;
        ;
      }
      else if (__label__ == 4) {
  
        var $8=$input_addr;
        var $version=$8;
        var $9=HEAP[$version];
        var $10=$input_addr;
        var $level=$10+1;
        var $11=HEAP[$level];
        var $arraydecay=$spec;
        _QRspec_getEccSpec($9, $11, $arraydecay);
        var $12=$input_addr;
        var $version6=$12;
        var $13=HEAP[$version6];
        var $14=$raw;
        var $version7=$14;
        HEAP[$version7]=$13;
        var $arrayidx=$spec;
        var $15=HEAP[$arrayidx];
        var $16=$raw;
        var $b1=$16+5;
        HEAP[$b1]=$15;
        var $arrayidx8=$spec;
        var $17=HEAP[$arrayidx8];
        var $arrayidx9=$spec+1;
        var $18=HEAP[$arrayidx9];
        var $mul=($17)*($18);
        var $arrayidx10=$spec+3;
        var $19=HEAP[$arrayidx10];
        var $arrayidx11=$spec+4;
        var $20=HEAP[$arrayidx11];
        var $mul12=($19)*($20);
        var $add=($mul)+($mul12);
        var $21=$raw;
        var $dataLength=$21+1;
        HEAP[$dataLength]=$add;
        var $arrayidx13=$spec;
        var $22=HEAP[$arrayidx13];
        var $arrayidx14=$spec+3;
        var $23=HEAP[$arrayidx14];
        var $add15=($22)+($23);
        var $arrayidx16=$spec+2;
        var $24=HEAP[$arrayidx16];
        var $mul17=($add15)*($24);
        var $25=$raw;
        var $eccLength=$25+2;
        HEAP[$eccLength]=$mul17;
        var $26=$raw;
        var $eccLength18=$26+2;
        var $27=HEAP[$eccLength18];
        var $call19=_malloc($27);
        var $28=$raw;
        var $ecccode=$28+4;
        HEAP[$ecccode]=$call19;
        var $29=$raw;
        var $ecccode20=$29+4;
        var $30=HEAP[$ecccode20];
        var $cmp21=((($30))|0)==0;
        if ($cmp21) { __label__ = 5;; } else { __label__ = 6;; }
        if (__label__ == 5) {
  
          var $31=$raw;
          var $datacode23=$31+3;
          var $32=HEAP[$datacode23];
          ;
          var $33=$raw;
          var $34=$33;
          ;
          $retval=0;
          ;
        }
        else if (__label__ == 6) {
  
          var $arrayidx25=$spec;
          var $35=HEAP[$arrayidx25];
          var $arrayidx26=$spec+3;
          var $36=HEAP[$arrayidx26];
          var $add27=($35)+($36);
          var $37=$raw;
          var $blocks=$37+6;
          HEAP[$blocks]=$add27;
          var $38=$raw;
          var $blocks28=$38+6;
          var $39=HEAP[$blocks28];
          var $call29=_calloc(16, $39);
          var $40=$call29;
          var $41=$raw;
          var $rsblock=$41+7;
          HEAP[$rsblock]=$40;
          var $42=$raw;
          var $rsblock30=$42+7;
          var $43=HEAP[$rsblock30];
          var $cmp31=((($43))|0)==0;
          if ($cmp31) { __label__ = 7;; } else { __label__ = 8;; }
          if (__label__ == 7) {
  
            var $44=$raw;
            _QRraw_free($44);
            $retval=0;
            ;
          }
          else if (__label__ == 8) {
  
            var $45=$raw;
            var $rsblock34=$45+7;
            var $46=HEAP[$rsblock34];
            var $arraydecay35=$spec;
            var $47=$raw;
            var $datacode36=$47+3;
            var $48=HEAP[$datacode36];
            var $49=$raw;
            var $ecccode37=$49+4;
            var $50=HEAP[$ecccode37];
            var $call38=_RSblock_init($46, $arraydecay35, $48, $50);
            $ret=$call38;
            var $51=$ret;
            var $cmp39=((($51))|0) < 0;
            if ($cmp39) { __label__ = 9;; } else { __label__ = 10;; }
            if (__label__ == 9) {
  
              var $52=$raw;
              _QRraw_free($52);
              $retval=0;
              ;
            }
            else if (__label__ == 10) {
  
              var $53=$raw;
              var $count=$53+8;
              HEAP[$count]=0;
              var $54=$raw;
              $retval=$54;
              ;
            }
          }
        }
      }
    }
  
    var $55=$retval;
    STACKTOP = __stackBase__;
    return $55;
    return null;
  }
  _QRraw_new["X"]=1;

  function _QRraw_free($raw) {
    ;
    var __label__;
  
    var $raw_addr;
    $raw_addr=$raw;
    var $0=$raw_addr;
    var $cmp=((($0))|0)!=0;
    if ($cmp) { __label__ = 1;; } else { __label__ = 2;; }
    if (__label__ == 1) {
  
      var $1=$raw_addr;
      var $datacode=$1+3;
      var $2=HEAP[$datacode];
      ;
      var $3=$raw_addr;
      var $ecccode=$3+4;
      var $4=HEAP[$ecccode];
      ;
      var $5=$raw_addr;
      var $rsblock=$5+7;
      var $6=HEAP[$rsblock];
      var $7=$6;
      ;
      var $8=$raw_addr;
      var $9=$8;
      ;
      ;
    }
  
    ;
    return;
    return;
  }
  

  function _FrameFiller_new($width, $frame, $mqr) {
    ;
    var __label__;
  
    var $retval;
    var $width_addr;
    var $frame_addr;
    var $mqr_addr;
    var $filler;
    $width_addr=$width;
    $frame_addr=$frame;
    $mqr_addr=$mqr;
    var $call=_malloc(28);
    var $0=$call;
    $filler=$0;
    var $1=$filler;
    var $cmp=((($1))|0)==0;
    if ($cmp) { __label__ = 1;; } else { __label__ = 2;; }
    if (__label__ == 1) {
  
      $retval=0;
      ;
    }
    else if (__label__ == 2) {
  
      var $2=$width_addr;
      var $3=$filler;
      var $width1=$3;
      HEAP[$width1]=$2;
      var $4=$frame_addr;
      var $5=$filler;
      var $frame2=$5+1;
      HEAP[$frame2]=$4;
      var $6=$width_addr;
      var $sub=($6)-1;
      var $7=$filler;
      var $x=$7+2;
      HEAP[$x]=$sub;
      var $8=$width_addr;
      var $sub3=($8)-1;
      var $9=$filler;
      var $y=$9+3;
      HEAP[$y]=$sub3;
      var $10=$filler;
      var $dir=$10+4;
      HEAP[$dir]=-1;
      var $11=$filler;
      var $bit=$11+5;
      HEAP[$bit]=-1;
      var $12=$mqr_addr;
      var $13=$filler;
      var $mqr4=$13+6;
      HEAP[$mqr4]=$12;
      var $14=$filler;
      $retval=$14;
      ;
    }
  
    var $15=$retval;
    ;
    return $15;
    return null;
  }
  

  function _QRraw_getCode($raw) {
    ;
    var __label__;
  
    var $retval;
    var $raw_addr;
    var $col;
    var $row;
    var $ret;
    $raw_addr=$raw;
    var $0=$raw_addr;
    var $count=$0+8;
    var $1=HEAP[$count];
    var $2=$raw_addr;
    var $dataLength=$2+1;
    var $3=HEAP[$dataLength];
    var $cmp=((($1))|0) < ((($3))|0);
    if ($cmp) { __label__ = 1;; } else { __label__ = 4;; }
    $if_then$$if_else$2: do { 
      if (__label__ == 1) {
  
        var $4=$raw_addr;
        var $count1=$4+8;
        var $5=HEAP[$count1];
        var $6=$raw_addr;
        var $blocks=$6+6;
        var $7=HEAP[$blocks];
        var $rem=((($5))|0)%((($7))|0);
        $row=$rem;
        var $8=$raw_addr;
        var $count2=$8+8;
        var $9=HEAP[$count2];
        var $10=$raw_addr;
        var $blocks3=$10+6;
        var $11=HEAP[$blocks3];
        var $div=((((($9))|0)/((($11))|0))|0);
        $col=$div;
        var $12=$col;
        var $13=$raw_addr;
        var $rsblock=$13+7;
        var $14=HEAP[$rsblock];
        var $arrayidx=$14;
        var $dataLength4=$arrayidx;
        var $15=HEAP[$dataLength4];
        var $cmp5=((($12))|0) >= ((($15))|0);
        if ($cmp5) { __label__ = 2;; } else { __label__ = 3;; }
        if (__label__ == 2) {
  
          var $16=$raw_addr;
          var $b1=$16+5;
          var $17=HEAP[$b1];
          var $18=$row;
          var $add=($18)+($17);
          $row=$add;
          ;
        }
  
        var $19=$col;
        var $20=$row;
        var $21=$raw_addr;
        var $rsblock7=$21+7;
        var $22=HEAP[$rsblock7];
        var $arrayidx8=$22+($20<<2);
        var $data=$arrayidx8+1;
        var $23=HEAP[$data];
        var $arrayidx9=$23+$19;
        var $24=HEAP[$arrayidx9];
        $ret=$24;
        __label__ = 8;break $if_then$$if_else$2;
      }
      else if (__label__ == 4) {
  
        var $25=$raw_addr;
        var $count10=$25+8;
        var $26=HEAP[$count10];
        var $27=$raw_addr;
        var $dataLength11=$27+1;
        var $28=HEAP[$dataLength11];
        var $29=$raw_addr;
        var $eccLength=$29+2;
        var $30=HEAP[$eccLength];
        var $add12=($28)+($30);
        var $cmp13=((($26))|0) < ((($add12))|0);
        if ($cmp13) { __label__ = 5;; } else { __label__ = 6;; }
        if (__label__ == 5) {
  
          var $31=$raw_addr;
          var $count15=$31+8;
          var $32=HEAP[$count15];
          var $33=$raw_addr;
          var $dataLength16=$33+1;
          var $34=HEAP[$dataLength16];
          var $sub=($32)-($34);
          var $35=$raw_addr;
          var $blocks17=$35+6;
          var $36=HEAP[$blocks17];
          var $rem18=((($sub))|0)%((($36))|0);
          $row=$rem18;
          var $37=$raw_addr;
          var $count19=$37+8;
          var $38=HEAP[$count19];
          var $39=$raw_addr;
          var $dataLength20=$39+1;
          var $40=HEAP[$dataLength20];
          var $sub21=($38)-($40);
          var $41=$raw_addr;
          var $blocks22=$41+6;
          var $42=HEAP[$blocks22];
          var $div23=((((($sub21))|0)/((($42))|0))|0);
          $col=$div23;
          var $43=$col;
          var $44=$row;
          var $45=$raw_addr;
          var $rsblock24=$45+7;
          var $46=HEAP[$rsblock24];
          var $arrayidx25=$46+($44<<2);
          var $ecc=$arrayidx25+3;
          var $47=HEAP[$ecc];
          var $arrayidx26=$47+$43;
          var $48=HEAP[$arrayidx26];
          $ret=$48;
          ;
  
          __label__ = 8;break $if_then$$if_else$2;
        }
        else if (__label__ == 6) {
  
          $retval=0;
          __label__ = 9;break $if_then$$if_else$2;
        }
      }
    } while(0);
    if (__label__ == 8) {
  
      var $49=$raw_addr;
      var $count30=$49+8;
      var $50=HEAP[$count30];
      var $inc=($50)+1;
      HEAP[$count30]=$inc;
      var $51=$ret;
      $retval=$51;
      ;
    }
  
    var $52=$retval;
    ;
    return $52;
    return null;
  }
  _QRraw_getCode["X"]=1;

  function _FrameFiller_next($filler) {
    ;
    var __label__;
  
    var $retval;
    var $filler_addr;
    var $p;
    var $x;
    var $y;
    var $w;
    $filler_addr=$filler;
    var $0=$filler_addr;
    var $bit=$0+5;
    var $1=HEAP[$bit];
    var $cmp=((($1))|0)==-1;
    if ($cmp) { __label__ = 1;; } else { __label__ = 2;; }
    $if_then$$if_end$2: do { 
      if (__label__ == 1) {
  
        var $2=$filler_addr;
        var $bit1=$2+5;
        HEAP[$bit1]=0;
        var $3=$filler_addr;
        var $frame=$3+1;
        var $4=HEAP[$frame];
        var $5=$filler_addr;
        var $y2=$5+3;
        var $6=HEAP[$y2];
        var $7=$filler_addr;
        var $width=$7;
        var $8=HEAP[$width];
        var $mul=($6)*($8);
        var $add_ptr=$4+$mul;
        var $9=$filler_addr;
        var $x3=$9+2;
        var $10=HEAP[$x3];
        var $add_ptr4=$add_ptr+$10;
        $retval=$add_ptr4;
        ;
      }
      else if (__label__ == 2) {
  
        var $11=$filler_addr;
        var $x5=$11+2;
        var $12=HEAP[$x5];
        $x=$12;
        var $13=$filler_addr;
        var $y6=$13+3;
        var $14=HEAP[$y6];
        $y=$14;
        var $15=$filler_addr;
        var $frame7=$15+1;
        var $16=HEAP[$frame7];
        $p=$16;
        var $17=$filler_addr;
        var $width8=$17;
        var $18=HEAP[$width8];
        $w=$18;
        var $19=$filler_addr;
        var $bit9=$19+5;
        var $20=HEAP[$bit9];
        var $cmp10=((($20))|0)==0;
        if ($cmp10) { __label__ = 3;; } else { __label__ = 4;; }
        if (__label__ == 3) {
  
          var $21=$x;
          var $dec=($21)-1;
          $x=$dec;
          var $22=$filler_addr;
          var $bit12=$22+5;
          var $23=HEAP[$bit12];
          var $inc=($23)+1;
          HEAP[$bit12]=$inc;
          ;
        }
        else if (__label__ == 4) {
  
          var $24=$x;
          var $inc13=($24)+1;
          $x=$inc13;
          var $25=$filler_addr;
          var $dir=$25+4;
          var $26=HEAP[$dir];
          var $27=$y;
          var $add=($27)+($26);
          $y=$add;
          var $28=$filler_addr;
          var $bit14=$28+5;
          var $29=HEAP[$bit14];
          var $dec15=($29)-1;
          HEAP[$bit14]=$dec15;
          ;
        }
  
        var $30=$filler_addr;
        var $dir17=$30+4;
        var $31=HEAP[$dir17];
        var $cmp18=((($31))|0) < 0;
        if ($cmp18) { __label__ = 6;; } else { __label__ = 12;; }
        if (__label__ == 6) {
  
          var $32=$y;
          var $cmp20=((($32))|0) < 0;
          if ($cmp20) { __label__ = 7;; } else { __label__ = 11;; }
          if (__label__ == 7) {
  
            $y=0;
            var $33=$x;
            var $sub=($33)-2;
            $x=$sub;
            var $34=$filler_addr;
            var $dir22=$34+4;
            HEAP[$dir22]=1;
            var $35=$filler_addr;
            var $mqr=$35+6;
            var $36=HEAP[$mqr];
            var $tobool=((($36))|0)!=0;
            if ($tobool) { __label__ = 10;; } else { __label__ = 8;; }
            $if_end26$$land_lhs_true$13: do { 
              if (__label__ == 8) {
  
                var $37=$x;
                var $cmp23=((($37))|0)==6;
                if (!($cmp23)) { __label__ = 10;break $if_end26$$land_lhs_true$13; }
  
                var $38=$x;
                var $dec25=($38)-1;
                $x=$dec25;
                $y=9;
                ;
              }
            } while(0);
  
            ;
          }
  
          ;
        }
        else if (__label__ == 12) {
  
          var $39=$y;
          var $40=$w;
          var $cmp29=((($39))|0)==((($40))|0);
          if ($cmp29) { __label__ = 13;; } else { __label__ = 17;; }
          if (__label__ == 13) {
  
            var $41=$w;
            var $sub31=($41)-1;
            $y=$sub31;
            var $42=$x;
            var $sub32=($42)-2;
            $x=$sub32;
            var $43=$filler_addr;
            var $dir33=$43+4;
            HEAP[$dir33]=-1;
            var $44=$filler_addr;
            var $mqr34=$44+6;
            var $45=HEAP[$mqr34];
            var $tobool35=((($45))|0)!=0;
            if ($tobool35) { __label__ = 16;; } else { __label__ = 14;; }
            $if_end41$$land_lhs_true36$21: do { 
              if (__label__ == 14) {
  
                var $46=$x;
                var $cmp37=((($46))|0)==6;
                if (!($cmp37)) { __label__ = 16;break $if_end41$$land_lhs_true36$21; }
  
                var $47=$x;
                var $dec39=($47)-1;
                $x=$dec39;
                var $48=$y;
                var $sub40=($48)-8;
                $y=$sub40;
                ;
              }
            } while(0);
  
            ;
          }
  
          ;
        }
  
        var $49=$x;
        var $cmp44=((($49))|0) < 0;
        if ($cmp44) { __label__ = 20;; } else { __label__ = 19;; }
        $if_then46$$lor_lhs_false$27: do { 
          if (__label__ == 19) {
  
            var $50=$y;
            var $cmp45=((($50))|0) < 0;
            if ($cmp45) { __label__ = 20;break $if_then46$$lor_lhs_false$27; }
  
            var $51=$x;
            var $52=$filler_addr;
            var $x48=$52+2;
            HEAP[$x48]=$51;
            var $53=$y;
            var $54=$filler_addr;
            var $y49=$54+3;
            HEAP[$y49]=$53;
            var $55=$y;
            var $56=$w;
            var $mul50=($55)*($56);
            var $57=$x;
            var $add51=($mul50)+($57);
            var $58=$p;
            var $arrayidx=$58+$add51;
            var $59=HEAP[$arrayidx];
            var $conv=((($59))&255);
            var $and=($conv) & 128;
            var $tobool52=((($and))|0)!=0;
            if ($tobool52) { __label__ = 22;; } else { __label__ = 23;; }
            if (__label__ == 22) {
  
              var $60=$filler_addr;
              var $call=_FrameFiller_next($60);
              $retval=$call;
              __label__ = 24;break $if_then$$if_end$2;
            }
            else if (__label__ == 23) {
  
              var $61=$y;
              var $62=$w;
              var $mul55=($61)*($62);
              var $63=$x;
              var $add56=($mul55)+($63);
              var $64=$p;
              var $arrayidx57=$64+$add56;
              $retval=$arrayidx57;
              __label__ = 24;break $if_then$$if_end$2;
            }
          }
        } while(0);
  
        $retval=0;
        ;
      }
    } while(0);
  
    var $65=$retval;
    ;
    return $65;
    return null;
  }
  _FrameFiller_next["X"]=1;

  function _QRcode_new($version, $width, $data) {
    ;
    var __label__;
  
    var $retval;
    var $version_addr;
    var $width_addr;
    var $data_addr;
    var $qrcode;
    $version_addr=$version;
    $width_addr=$width;
    $data_addr=$data;
    var $call=_malloc(12);
    var $0=$call;
    $qrcode=$0;
    var $1=$qrcode;
    var $cmp=((($1))|0)==0;
    if ($cmp) { __label__ = 1;; } else { __label__ = 2;; }
    if (__label__ == 1) {
  
      $retval=0;
      ;
    }
    else if (__label__ == 2) {
  
      var $2=$version_addr;
      var $3=$qrcode;
      var $version1=$3;
      HEAP[$version1]=$2;
      var $4=$width_addr;
      var $5=$qrcode;
      var $width2=$5+1;
      HEAP[$width2]=$4;
      var $6=$data_addr;
      var $7=$qrcode;
      var $data3=$7+2;
      HEAP[$data3]=$6;
      var $8=$qrcode;
      $retval=$8;
      ;
    }
  
    var $9=$retval;
    ;
    return $9;
    return null;
  }
  

  function _RSblock_init($blocks, $spec, $data, $ecc) {
    ;
    var __label__;
  
    var $retval;
    var $blocks_addr;
    var $spec_addr;
    var $data_addr;
    var $ecc_addr;
    var $i;
    var $block;
    var $dp;
    var $ep;
    var $rs;
    var $el;
    var $dl;
    $blocks_addr=$blocks;
    $spec_addr=$spec;
    $data_addr=$data;
    $ecc_addr=$ecc;
    var $0=$spec_addr;
    var $arrayidx=$0+1;
    var $1=HEAP[$arrayidx];
    $dl=$1;
    var $2=$spec_addr;
    var $arrayidx1=$2+2;
    var $3=HEAP[$arrayidx1];
    $el=$3;
    var $4=$el;
    var $5=$dl;
    var $sub=255-($5);
    var $6=$el;
    var $sub2=($sub)-($6);
    var $call=_init_rs(8, 285, 0, 1, $4, $sub2);
    $rs=$call;
    var $7=$rs;
    var $cmp=((($7))|0)==0;
    if ($cmp) { __label__ = 1;; } else { __label__ = 2;; }
    if (__label__ == 1) {
  
      $retval=-1;
      ;
    }
    else if (__label__ == 2) {
  
      var $8=$blocks_addr;
      $block=$8;
      var $9=$data_addr;
      $dp=$9;
      var $10=$ecc_addr;
      $ep=$10;
      $i=0;
      ;
      $for_cond$5: while(1) { 
  
        var $11=$i;
        var $12=$spec_addr;
        var $arrayidx3=$12;
        var $13=HEAP[$arrayidx3];
        var $cmp4=((($11))|0) < ((($13))|0);
        if (!($cmp4)) { __label__ = 6;break $for_cond$5; }
  
        var $14=$block;
        var $15=$dl;
        var $16=$dp;
        var $17=$el;
        var $18=$ep;
        var $19=$rs;
        _RSblock_initBlock($14, $15, $16, $17, $18, $19);
        var $20=$dl;
        var $21=$dp;
        var $add_ptr=$21+$20;
        $dp=$add_ptr;
        var $22=$el;
        var $23=$ep;
        var $add_ptr5=$23+$22;
        $ep=$add_ptr5;
        var $24=$block;
        var $incdec_ptr=$24+4;
        $block=$incdec_ptr;
        ;
  
        var $25=$i;
        var $inc=($25)+1;
        $i=$inc;
        __label__ = 3;continue $for_cond$5;
      }
  
      var $26=$spec_addr;
      var $arrayidx6=$26+3;
      var $27=HEAP[$arrayidx6];
      var $cmp7=((($27))|0)==0;
      if ($cmp7) { __label__ = 7;; } else { __label__ = 8;; }
      if (__label__ == 7) {
  
        $retval=0;
        ;
      }
      else if (__label__ == 8) {
  
        var $28=$spec_addr;
        var $arrayidx10=$28+4;
        var $29=HEAP[$arrayidx10];
        $dl=$29;
        var $30=$spec_addr;
        var $arrayidx11=$30+2;
        var $31=HEAP[$arrayidx11];
        $el=$31;
        var $32=$el;
        var $33=$dl;
        var $sub12=255-($33);
        var $34=$el;
        var $sub13=($sub12)-($34);
        var $call14=_init_rs(8, 285, 0, 1, $32, $sub13);
        $rs=$call14;
        var $35=$rs;
        var $cmp15=((($35))|0)==0;
        if ($cmp15) { __label__ = 9;; } else { __label__ = 10;; }
        if (__label__ == 9) {
  
          $retval=-1;
          ;
        }
        else if (__label__ == 10) {
  
          $i=0;
          ;
          while(1) { 
  
            var $36=$i;
            var $37=$spec_addr;
            var $arrayidx19=$37+3;
            var $38=HEAP[$arrayidx19];
            var $cmp20=((($36))|0) < ((($38))|0);
            if (!($cmp20)) { __label__ = 14;break ; }
  
            var $39=$block;
            var $40=$dl;
            var $41=$dp;
            var $42=$el;
            var $43=$ep;
            var $44=$rs;
            _RSblock_initBlock($39, $40, $41, $42, $43, $44);
            var $45=$dl;
            var $46=$dp;
            var $add_ptr22=$46+$45;
            $dp=$add_ptr22;
            var $47=$el;
            var $48=$ep;
            var $add_ptr23=$48+$47;
            $ep=$add_ptr23;
            var $49=$block;
            var $incdec_ptr24=$49+4;
            $block=$incdec_ptr24;
            ;
  
            var $50=$i;
            var $inc26=($50)+1;
            $i=$inc26;
            __label__ = 11;continue ;
          }
  
          $retval=0;
          ;
        }
      }
    }
  
    var $51=$retval;
    ;
    return $51;
    return null;
  }
  _RSblock_init["X"]=1;

  function _RSblock_initBlock($block, $dl, $data, $el, $ecc, $rs) {
    ;
    var __label__;
  
    var $block_addr;
    var $dl_addr;
    var $data_addr;
    var $el_addr;
    var $ecc_addr;
    var $rs_addr;
    $block_addr=$block;
    $dl_addr=$dl;
    $data_addr=$data;
    $el_addr=$el;
    $ecc_addr=$ecc;
    $rs_addr=$rs;
    var $0=$dl_addr;
    var $1=$block_addr;
    var $dataLength=$1;
    HEAP[$dataLength]=$0;
    var $2=$data_addr;
    var $3=$block_addr;
    var $data1=$3+1;
    HEAP[$data1]=$2;
    var $4=$el_addr;
    var $5=$block_addr;
    var $eccLength=$5+2;
    HEAP[$eccLength]=$4;
    var $6=$ecc_addr;
    var $7=$block_addr;
    var $ecc2=$7+3;
    HEAP[$ecc2]=$6;
    var $8=$rs_addr;
    var $9=$data_addr;
    var $10=$ecc_addr;
    _encode_rs_char($8, $9, $10);
    ;
    return;
    return;
  }
  

  function _MQRraw_new($input) {
    ;
    var __label__;
  
    var $retval;
    var $input_addr;
    var $raw;
    var $rs;
    $input_addr=$input;
    var $call=_malloc(32);
    var $0=$call;
    $raw=$0;
    var $1=$raw;
    var $cmp=((($1))|0)==0;
    if ($cmp) { __label__ = 1;; } else { __label__ = 2;; }
    if (__label__ == 1) {
  
      $retval=0;
      ;
    }
    else if (__label__ == 2) {
  
      var $2=$input_addr;
      var $version=$2;
      var $3=HEAP[$version];
      var $4=$raw;
      var $version1=$4;
      HEAP[$version1]=$3;
      var $5=$input_addr;
      var $version2=$5;
      var $6=HEAP[$version2];
      var $7=$input_addr;
      var $level=$7+1;
      var $8=HEAP[$level];
      var $call3=_MQRspec_getDataLength($6, $8);
      var $9=$raw;
      var $dataLength=$9+1;
      HEAP[$dataLength]=$call3;
      var $10=$input_addr;
      var $version4=$10;
      var $11=HEAP[$version4];
      var $12=$input_addr;
      var $level5=$12+1;
      var $13=HEAP[$level5];
      var $call6=_MQRspec_getECCLength($11, $13);
      var $14=$raw;
      var $eccLength=$14+2;
      HEAP[$eccLength]=$call6;
      var $15=$raw;
      var $dataLength7=$15+1;
      var $16=HEAP[$dataLength7];
      var $mul=(($16)<<3);
      var $17=$input_addr;
      var $version8=$17;
      var $18=HEAP[$version8];
      var $19=$input_addr;
      var $level9=$19+1;
      var $20=HEAP[$level9];
      var $call10=_MQRspec_getDataLengthBit($18, $20);
      var $sub=($mul)-($call10);
      var $21=$raw;
      var $oddbits=$21+6;
      HEAP[$oddbits]=$sub;
      var $22=$input_addr;
      var $call11=_QRinput_getByteStream($22);
      var $23=$raw;
      var $datacode=$23+3;
      HEAP[$datacode]=$call11;
      var $24=$raw;
      var $datacode12=$24+3;
      var $25=HEAP[$datacode12];
      var $cmp13=((($25))|0)==0;
      if ($cmp13) { __label__ = 3;; } else { __label__ = 4;; }
      if (__label__ == 3) {
  
        var $26=$raw;
        var $27=$26;
        ;
        $retval=0;
        ;
      }
      else if (__label__ == 4) {
  
        var $28=$raw;
        var $eccLength16=$28+2;
        var $29=HEAP[$eccLength16];
        var $call17=_malloc($29);
        var $30=$raw;
        var $ecccode=$30+4;
        HEAP[$ecccode]=$call17;
        var $31=$raw;
        var $ecccode18=$31+4;
        var $32=HEAP[$ecccode18];
        var $cmp19=((($32))|0)==0;
        if ($cmp19) { __label__ = 5;; } else { __label__ = 6;; }
        if (__label__ == 5) {
  
          var $33=$raw;
          var $datacode21=$33+3;
          var $34=HEAP[$datacode21];
          ;
          var $35=$raw;
          var $36=$35;
          ;
          $retval=0;
          ;
        }
        else if (__label__ == 6) {
  
          var $call23=_calloc(16, 1);
          var $37=$call23;
          var $38=$raw;
          var $rsblock=$38+5;
          HEAP[$rsblock]=$37;
          var $39=$raw;
          var $rsblock24=$39+5;
          var $40=HEAP[$rsblock24];
          var $cmp25=((($40))|0)==0;
          if ($cmp25) { __label__ = 7;; } else { __label__ = 8;; }
          if (__label__ == 7) {
  
            var $41=$raw;
            _MQRraw_free($41);
            $retval=0;
            ;
          }
          else if (__label__ == 8) {
  
            var $42=$raw;
            var $eccLength28=$42+2;
            var $43=HEAP[$eccLength28];
            var $44=$raw;
            var $dataLength29=$44+1;
            var $45=HEAP[$dataLength29];
            var $sub30=255-($45);
            var $46=$raw;
            var $eccLength31=$46+2;
            var $47=HEAP[$eccLength31];
            var $sub32=($sub30)-($47);
            var $call33=_init_rs(8, 285, 0, 1, $43, $sub32);
            $rs=$call33;
            var $48=$rs;
            var $cmp34=((($48))|0)==0;
            if ($cmp34) { __label__ = 9;; } else { __label__ = 10;; }
            if (__label__ == 9) {
  
              var $49=$raw;
              _MQRraw_free($49);
              $retval=0;
              ;
            }
            else if (__label__ == 10) {
  
              var $50=$raw;
              var $rsblock37=$50+5;
              var $51=HEAP[$rsblock37];
              var $52=$raw;
              var $dataLength38=$52+1;
              var $53=HEAP[$dataLength38];
              var $54=$raw;
              var $datacode39=$54+3;
              var $55=HEAP[$datacode39];
              var $56=$raw;
              var $eccLength40=$56+2;
              var $57=HEAP[$eccLength40];
              var $58=$raw;
              var $ecccode41=$58+4;
              var $59=HEAP[$ecccode41];
              var $60=$rs;
              _RSblock_initBlock($51, $53, $55, $57, $59, $60);
              var $61=$raw;
              var $count=$61+7;
              HEAP[$count]=0;
              var $62=$raw;
              $retval=$62;
              ;
            }
          }
        }
      }
    }
  
    var $63=$retval;
    ;
    return $63;
    return null;
  }
  _MQRraw_new["X"]=1;

  function _MQRraw_free($raw) {
    ;
    var __label__;
  
    var $raw_addr;
    $raw_addr=$raw;
    var $0=$raw_addr;
    var $cmp=((($0))|0)!=0;
    if ($cmp) { __label__ = 1;; } else { __label__ = 2;; }
    if (__label__ == 1) {
  
      var $1=$raw_addr;
      var $datacode=$1+3;
      var $2=HEAP[$datacode];
      ;
      var $3=$raw_addr;
      var $ecccode=$3+4;
      var $4=HEAP[$ecccode];
      ;
      var $5=$raw_addr;
      var $rsblock=$5+5;
      var $6=HEAP[$rsblock];
      var $7=$6;
      ;
      var $8=$raw_addr;
      var $9=$8;
      ;
      ;
    }
  
    ;
    return;
    return;
  }
  

  function _MQRraw_getCode($raw) {
    ;
    var __label__;
  
    var $retval;
    var $raw_addr;
    var $ret;
    $raw_addr=$raw;
    var $0=$raw_addr;
    var $count=$0+7;
    var $1=HEAP[$count];
    var $2=$raw_addr;
    var $dataLength=$2+1;
    var $3=HEAP[$dataLength];
    var $cmp=((($1))|0) < ((($3))|0);
    if ($cmp) { __label__ = 1;; } else { __label__ = 2;; }
    $if_then$$if_else$2: do { 
      if (__label__ == 1) {
  
        var $4=$raw_addr;
        var $count1=$4+7;
        var $5=HEAP[$count1];
        var $6=$raw_addr;
        var $datacode=$6+3;
        var $7=HEAP[$datacode];
        var $arrayidx=$7+$5;
        var $8=HEAP[$arrayidx];
        $ret=$8;
        __label__ = 6;break $if_then$$if_else$2;
      }
      else if (__label__ == 2) {
  
        var $9=$raw_addr;
        var $count2=$9+7;
        var $10=HEAP[$count2];
        var $11=$raw_addr;
        var $dataLength3=$11+1;
        var $12=HEAP[$dataLength3];
        var $13=$raw_addr;
        var $eccLength=$13+2;
        var $14=HEAP[$eccLength];
        var $add=($12)+($14);
        var $cmp4=((($10))|0) < ((($add))|0);
        if ($cmp4) { __label__ = 3;; } else { __label__ = 4;; }
        if (__label__ == 3) {
  
          var $15=$raw_addr;
          var $count6=$15+7;
          var $16=HEAP[$count6];
          var $17=$raw_addr;
          var $dataLength7=$17+1;
          var $18=HEAP[$dataLength7];
          var $sub=($16)-($18);
          var $19=$raw_addr;
          var $ecccode=$19+4;
          var $20=HEAP[$ecccode];
          var $arrayidx8=$20+$sub;
          var $21=HEAP[$arrayidx8];
          $ret=$21;
          ;
  
          __label__ = 6;break $if_then$$if_else$2;
        }
        else if (__label__ == 4) {
  
          $retval=0;
          __label__ = 7;break $if_then$$if_else$2;
        }
      }
    } while(0);
    if (__label__ == 6) {
  
      var $22=$raw_addr;
      var $count11=$22+7;
      var $23=HEAP[$count11];
      var $inc=($23)+1;
      HEAP[$count11]=$inc;
      var $24=$ret;
      $retval=$24;
      ;
    }
  
    var $25=$retval;
    ;
    return $25;
    return null;
  }
  _MQRraw_getCode["X"]=1;

  function _QRinput_isSplittableMode($mode) {
    ;
    var __label__;
    var __lastLabel__ = null;
  
    var $mode_addr;
    $mode_addr=$mode;
    var $0=$mode_addr;
    var $cmp=((($0))|0) >= 0;
    if ($cmp) { __lastLabel__ = 0; __label__ = 1;; } else { __lastLabel__ = 0; __label__ = 2;; }
    if (__label__ == 1) {
  
      var $1=$mode_addr;
      var $cmp1=((($1))|0) <= 3;
      __lastLabel__ = 1; ;
    }
  
    var $2=__lastLabel__ == 0 ? 0 : ($cmp1);
    var $land_ext=((($2))&1);
    ;
    return $land_ext;
    return null;
  }
  

  function _QRinput_new() {
    ;
    var __label__;
  
    var $call=_QRinput_new2(0, 0);
    ;
    return $call;
    return null;
  }
  

  function _QRinput_new2($version, $level) {
    ;
    var __label__;
  
    var $retval;
    var $version_addr;
    var $level_addr;
    var $input;
    $version_addr=$version;
    $level_addr=$level;
    var $0=$version_addr;
    var $cmp=((($0))|0) < 0;
    if ($cmp) { __label__ = 3;; } else { __label__ = 1;; }
    $if_then$$lor_lhs_false$2: do { 
      if (__label__ == 1) {
  
        var $1=$version_addr;
        var $cmp1=((($1))|0) > 40;
        if ($cmp1) { __label__ = 3;break $if_then$$lor_lhs_false$2; }
  
        var $2=$level_addr;
        var $cmp3=((($2))>>>0) > 3;
        if ($cmp3) { __label__ = 3;break $if_then$$lor_lhs_false$2; }
  
        var $call4=_malloc(28);
        var $3=$call4;
        $input=$3;
        var $4=$input;
        var $cmp5=((($4))|0)==0;
        if ($cmp5) { __label__ = 5;; } else { __label__ = 6;; }
        if (__label__ == 5) {
  
          $retval=0;
          __label__ = 7;break $if_then$$lor_lhs_false$2;
        }
        else if (__label__ == 6) {
  
          var $5=$input;
          var $head=$5+2;
          HEAP[$head]=0;
          var $6=$input;
          var $tail=$6+3;
          HEAP[$tail]=0;
          var $7=$version_addr;
          var $8=$input;
          var $version8=$8;
          HEAP[$version8]=$7;
          var $9=$level_addr;
          var $10=$input;
          var $level9=$10+1;
          HEAP[$level9]=$9;
          var $11=$input;
          var $mqr=$11+4;
          HEAP[$mqr]=0;
          var $12=$input;
          var $fnc1=$12+5;
          HEAP[$fnc1]=0;
          var $13=$input;
          $retval=$13;
          __label__ = 7;break $if_then$$lor_lhs_false$2;
        }
      }
    } while(0);
    if (__label__ == 3) {
  
      var $call=___errno();
      HEAP[$call]=22;
      $retval=0;
      ;
    }
  
    var $14=$retval;
    ;
    return $14;
    return null;
  }
  _QRinput_new2["X"]=1;

  function _QRinput_newMQR($version, $level) {
    ;
    var __label__;
  
    var $retval;
    var $version_addr;
    var $level_addr;
    var $input;
    $version_addr=$version;
    $level_addr=$level;
    var $0=$version_addr;
    var $cmp=((($0))|0) <= 0;
    if ($cmp) { __label__ = 2;; } else { __label__ = 1;; }
    $if_then$$lor_lhs_false$2: do { 
      if (__label__ == 1) {
  
        var $1=$version_addr;
        var $cmp1=((($1))|0) > 4;
        if ($cmp1) { __label__ = 2;break $if_then$$lor_lhs_false$2; }
  
        var $2=$version_addr;
        var $3=$level_addr;
        var $call=_MQRspec_getECCLength($2, $3);
        var $cmp2=((($call))|0)==0;
        if ($cmp2) { __label__ = 4;; } else { __label__ = 5;; }
        if (__label__ == 4) {
  
          __label__ = 8;break $if_then$$lor_lhs_false$2;
        }
        else if (__label__ == 5) {
  
          var $4=$version_addr;
          var $5=$level_addr;
          var $call5=_QRinput_new2($4, $5);
          $input=$call5;
          var $6=$input;
          var $cmp6=((($6))|0)==0;
          if ($cmp6) { __label__ = 6;; } else { __label__ = 7;; }
          if (__label__ == 6) {
  
            $retval=0;
            __label__ = 9;break $if_then$$lor_lhs_false$2;
          }
          else if (__label__ == 7) {
  
            var $7=$input;
            var $mqr=$7+4;
            HEAP[$mqr]=1;
            var $8=$input;
            $retval=$8;
            __label__ = 9;break $if_then$$lor_lhs_false$2;
          }
        }
      }
    } while(0);
    $if_then$$INVALID$$return$11: do { 
      if (__label__ == 2) {
  
        __label__ = 8;break $if_then$$INVALID$$return$11;
      }
    } while(0);
    if (__label__ == 8) {
  
      var $call9=___errno();
      HEAP[$call9]=22;
      $retval=0;
      ;
    }
  
    var $9=$retval;
    ;
    return $9;
    return null;
  }
  

  function _QRinput_getVersion($input) {
    ;
    var __label__;
  
    var $input_addr;
    $input_addr=$input;
    var $0=$input_addr;
    var $version=$0;
    var $1=HEAP[$version];
    ;
    return $1;
    return null;
  }
  

  function _QRinput_setVersion($input, $version) {
    ;
    var __label__;
  
    var $retval;
    var $input_addr;
    var $version_addr;
    $input_addr=$input;
    $version_addr=$version;
    var $0=$input_addr;
    var $mqr=$0+4;
    var $1=HEAP[$mqr];
    var $tobool=((($1))|0)!=0;
    if ($tobool) { __label__ = 3;; } else { __label__ = 1;; }
    $if_then$$lor_lhs_false$2: do { 
      if (__label__ == 1) {
  
        var $2=$version_addr;
        var $cmp=((($2))|0) < 0;
        if ($cmp) { __label__ = 3;break $if_then$$lor_lhs_false$2; }
  
        var $3=$version_addr;
        var $cmp2=((($3))|0) > 40;
        if ($cmp2) { __label__ = 3;break $if_then$$lor_lhs_false$2; }
  
        var $4=$version_addr;
        var $5=$input_addr;
        var $version3=$5;
        HEAP[$version3]=$4;
        $retval=0;
        __label__ = 5;break $if_then$$lor_lhs_false$2;
      }
    } while(0);
    if (__label__ == 3) {
  
      var $call=___errno();
      HEAP[$call]=22;
      $retval=-1;
      ;
    }
  
    var $6=$retval;
    ;
    return $6;
    return null;
  }
  

  function _QRinput_getErrorCorrectionLevel($input) {
    ;
    var __label__;
  
    var $input_addr;
    $input_addr=$input;
    var $0=$input_addr;
    var $level=$0+1;
    var $1=HEAP[$level];
    ;
    return $1;
    return null;
  }
  

  function _QRinput_setErrorCorrectionLevel($input, $level) {
    ;
    var __label__;
  
    var $retval;
    var $input_addr;
    var $level_addr;
    $input_addr=$input;
    $level_addr=$level;
    var $0=$input_addr;
    var $mqr=$0+4;
    var $1=HEAP[$mqr];
    var $tobool=((($1))|0)!=0;
    if ($tobool) { __label__ = 2;; } else { __label__ = 1;; }
    $if_then$$lor_lhs_false$2: do { 
      if (__label__ == 1) {
  
        var $2=$level_addr;
        var $cmp=((($2))>>>0) > 3;
        if ($cmp) { __label__ = 2;break $if_then$$lor_lhs_false$2; }
  
        var $3=$level_addr;
        var $4=$input_addr;
        var $level1=$4+1;
        HEAP[$level1]=$3;
        $retval=0;
        __label__ = 4;break $if_then$$lor_lhs_false$2;
      }
    } while(0);
    if (__label__ == 2) {
  
      var $call=___errno();
      HEAP[$call]=22;
      $retval=-1;
      ;
    }
  
    var $5=$retval;
    ;
    return $5;
    return null;
  }
  

  function _QRinput_setVersionAndErrorCorrectionLevel($input, $version, $level) {
    ;
    var __label__;
  
    var $retval;
    var $input_addr;
    var $version_addr;
    var $level_addr;
    $input_addr=$input;
    $version_addr=$version;
    $level_addr=$level;
    var $0=$input_addr;
    var $mqr=$0+4;
    var $1=HEAP[$mqr];
    var $tobool=((($1))|0)!=0;
    if ($tobool) { __label__ = 1;; } else { __label__ = 7;; }
    $if_then$$if_else$2: do { 
      if (__label__ == 1) {
  
        var $2=$version_addr;
        var $cmp=((($2))|0) <= 0;
        if ($cmp) { __label__ = 3;; } else { __label__ = 2;; }
        $if_then2$$lor_lhs_false$4: do { 
          if (__label__ == 2) {
  
            var $3=$version_addr;
            var $cmp1=((($3))|0) > 4;
            if ($cmp1) { __label__ = 3;break $if_then2$$lor_lhs_false$4; }
  
            var $4=$version_addr;
            var $5=$level_addr;
            var $call=_MQRspec_getECCLength($4, $5);
            var $cmp3=((($call))|0)==0;
            if ($cmp3) { __label__ = 5;; } else { __label__ = 6;; }
            if (__label__ == 5) {
  
              __label__ = 14;break $if_then$$if_else$2;
            }
            else if (__label__ == 6) {
  
              __label__ = 13;break $if_then$$if_else$2;
            }
          }
        } while(0);
  
        __label__ = 14;break $if_then$$if_else$2;
      }
      else if (__label__ == 7) {
  
        var $6=$version_addr;
        var $cmp6=((($6))|0) < 0;
        if ($cmp6) { __label__ = 9;; } else { __label__ = 8;; }
        $if_then9$$lor_lhs_false7$12: do { 
          if (__label__ == 8) {
  
            var $7=$version_addr;
            var $cmp8=((($7))|0) > 40;
            if ($cmp8) { __label__ = 9;break $if_then9$$lor_lhs_false7$12; }
  
            var $8=$level_addr;
            var $cmp11=((($8))>>>0) > 3;
            if ($cmp11) { __label__ = 11;; } else { __label__ = 12;; }
            if (__label__ == 11) {
  
              __label__ = 14;break $if_then$$if_else$2;
            }
            else if (__label__ == 12) {
  
              __label__ = 13;break $if_then$$if_else$2;
            }
          }
        } while(0);
  
        __label__ = 14;break $if_then$$if_else$2;
      }
    } while(0);
    if (__label__ == 14) {
  
      var $call17=___errno();
      HEAP[$call17]=22;
      $retval=-1;
      ;
    }
    else if (__label__ == 13) {
  
      var $9=$version_addr;
      var $10=$input_addr;
      var $version15=$10;
      HEAP[$version15]=$9;
      var $11=$level_addr;
      var $12=$input_addr;
      var $level16=$12+1;
      HEAP[$level16]=$11;
      $retval=0;
      ;
    }
  
    var $13=$retval;
    ;
    return $13;
    return null;
  }
  _QRinput_setVersionAndErrorCorrectionLevel["X"]=1;

  function _QRinput_append($input, $mode, $size, $data) {
    ;
    var __label__;
  
    var $retval;
    var $input_addr;
    var $mode_addr;
    var $size_addr;
    var $data_addr;
    var $entry1;
    $input_addr=$input;
    $mode_addr=$mode;
    $size_addr=$size;
    $data_addr=$data;
    var $0=$mode_addr;
    var $1=$size_addr;
    var $2=$data_addr;
    var $call=_QRinput_List_newEntry($0, $1, $2);
    $entry1=$call;
    var $3=$entry1;
    var $cmp=((($3))|0)==0;
    if ($cmp) { __label__ = 1;; } else { __label__ = 2;; }
    if (__label__ == 1) {
  
      $retval=-1;
      ;
    }
    else if (__label__ == 2) {
  
      var $4=$input_addr;
      var $5=$entry1;
      _QRinput_appendEntry($4, $5);
      $retval=0;
      ;
    }
  
    var $6=$retval;
    ;
    return $6;
    return null;
  }
  

  function _QRinput_List_newEntry($mode, $size, $data) {
    ;
    var __label__;
  
    var $retval;
    var $mode_addr;
    var $size_addr;
    var $data_addr;
    var $entry1;
    $mode_addr=$mode;
    $size_addr=$size;
    $data_addr=$data;
    var $0=$mode_addr;
    var $1=$size_addr;
    var $2=$data_addr;
    var $call=_QRinput_check($0, $1, $2);
    var $tobool=((($call))|0)!=0;
    if ($tobool) { __label__ = 1;; } else { __label__ = 2;; }
    $if_then$$if_end$2: do { 
      if (__label__ == 1) {
  
        var $call2=___errno();
        HEAP[$call2]=22;
        $retval=0;
        ;
      }
      else if (__label__ == 2) {
  
        var $call3=_malloc(20);
        var $3=$call3;
        $entry1=$3;
        var $4=$entry1;
        var $cmp=((($4))|0)==0;
        if ($cmp) { __label__ = 3;; } else { __label__ = 4;; }
        if (__label__ == 3) {
  
          $retval=0;
          ;
        }
        else if (__label__ == 4) {
  
          var $5=$mode_addr;
          var $6=$entry1;
          var $mode6=$6;
          HEAP[$mode6]=$5;
          var $7=$size_addr;
          var $8=$entry1;
          var $size7=$8+1;
          HEAP[$size7]=$7;
          var $9=$size_addr;
          var $cmp8=((($9))|0) > 0;
          if ($cmp8) { __label__ = 5;; } else { __label__ = 8;; }
          if (__label__ == 5) {
  
            var $10=$size_addr;
            var $call10=_malloc($10);
            var $11=$entry1;
            var $data11=$11+2;
            HEAP[$data11]=$call10;
            var $12=$entry1;
            var $data12=$12+2;
            var $13=HEAP[$data12];
            var $cmp13=((($13))|0)==0;
            if ($cmp13) { __label__ = 6;; } else { __label__ = 7;; }
            if (__label__ == 6) {
  
              var $14=$entry1;
              var $15=$14;
              ;
              $retval=0;
              __label__ = 9;break $if_then$$if_end$2;
            }
            else if (__label__ == 7) {
  
              var $16=$entry1;
              var $data16=$16+2;
              var $17=HEAP[$data16];
              var $18=$data_addr;
              var $19=$size_addr;
              assert($19 % 1 === 0, 'memcpy given ' + $19 + ' bytes to copy. Problem with 1=1 corrections perhaps?');for (var mcpi_s=$18,mcpi_e=$18+$19,mcpi_d=$17; mcpi_s<mcpi_e; mcpi_s++, mcpi_d++) {
                HEAP[mcpi_d] = HEAP[mcpi_s];
              };
              ;
            }
          }
  
          var $20=$entry1;
          var $bstream=$20+3;
          HEAP[$bstream]=0;
          var $21=$entry1;
          var $next=$21+4;
          HEAP[$next]=0;
          var $22=$entry1;
          $retval=$22;
          ;
        }
      }
    } while(0);
  
    var $23=$retval;
    ;
    return $23;
    return null;
  }
  _QRinput_List_newEntry["X"]=1;

  function _QRinput_appendEntry($input, $entry1) {
    ;
    var __label__;
  
    var $input_addr;
    var $entry_addr;
    $input_addr=$input;
    $entry_addr=$entry1;
    var $0=$input_addr;
    var $tail=$0+3;
    var $1=HEAP[$tail];
    var $cmp=((($1))|0)==0;
    if ($cmp) { __label__ = 1;; } else { __label__ = 2;; }
    if (__label__ == 1) {
  
      var $2=$entry_addr;
      var $3=$input_addr;
      var $head=$3+2;
      HEAP[$head]=$2;
      var $4=$entry_addr;
      var $5=$input_addr;
      var $tail2=$5+3;
      HEAP[$tail2]=$4;
      ;
    }
    else if (__label__ == 2) {
  
      var $6=$entry_addr;
      var $7=$input_addr;
      var $tail3=$7+3;
      var $8=HEAP[$tail3];
      var $next=$8+4;
      HEAP[$next]=$6;
      var $9=$entry_addr;
      var $10=$input_addr;
      var $tail4=$10+3;
      HEAP[$tail4]=$9;
      ;
    }
  
    var $11=$entry_addr;
    var $next5=$11+4;
    HEAP[$next5]=0;
    ;
    return;
    return;
  }
  

  function _QRinput_appendECIheader($input, $ecinum) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 4);
    var __label__;
  
    var $retval;
    var $input_addr;
    var $ecinum_addr;
    var $data=__stackBase__;
    $input_addr=$input;
    $ecinum_addr=$ecinum;
    var $0=$ecinum_addr;
    var $cmp=((($0))>>>0) > 999999;
    if ($cmp) { __label__ = 1;; } else { __label__ = 2;; }
    if (__label__ == 1) {
  
      var $call=___errno();
      HEAP[$call]=22;
      $retval=-1;
      ;
    }
    else if (__label__ == 2) {
  
      var $1=$ecinum_addr;
      var $and=($1) & 255;
      var $conv=((($and)) & 255);
      var $arrayidx=$data;
      HEAP[$arrayidx]=$conv;
      var $2=$ecinum_addr;
      var $shr=($2) >>> 8;
      var $and1=($shr) & 255;
      var $conv2=((($and1)) & 255);
      var $arrayidx3=$data+1;
      HEAP[$arrayidx3]=$conv2;
      var $3=$ecinum_addr;
      var $shr4=($3) >>> 16;
      var $and5=($shr4) & 255;
      var $conv6=((($and5)) & 255);
      var $arrayidx7=$data+2;
      HEAP[$arrayidx7]=$conv6;
      var $4=$ecinum_addr;
      var $shr8=($4) >>> 24;
      var $and9=($shr8) & 255;
      var $conv10=((($and9)) & 255);
      var $arrayidx11=$data+3;
      HEAP[$arrayidx11]=$conv10;
      var $5=$input_addr;
      var $arraydecay=$data;
      var $call12=_QRinput_append($5, 5, 4, $arraydecay);
      $retval=$call12;
      ;
    }
  
    var $6=$retval;
    STACKTOP = __stackBase__;
    return $6;
    return null;
  }
  

  function _QRinput_free($input) {
    ;
    var __label__;
  
    var $input_addr;
    var $list;
    var $next;
    $input_addr=$input;
    var $0=$input_addr;
    var $cmp=((($0))|0)!=0;
    if ($cmp) { __label__ = 1;; } else { __label__ = 5;; }
    if (__label__ == 1) {
  
      var $1=$input_addr;
      var $head=$1+2;
      var $2=HEAP[$head];
      $list=$2;
      ;
      while(1) { 
  
        var $3=$list;
        var $cmp1=((($3))|0)!=0;
        if (!($cmp1)) { __label__ = 4;break ; }
  
        var $4=$list;
        var $next2=$4+4;
        var $5=HEAP[$next2];
        $next=$5;
        var $6=$list;
        _QRinput_List_freeEntry($6);
        var $7=$next;
        $list=$7;
        __label__ = 2;continue ;
      }
  
      var $8=$input_addr;
      var $9=$8;
      ;
      ;
    }
  
    ;
    return;
    return;
  }
  

  function _QRinput_List_freeEntry($entry1) {
    ;
    var __label__;
  
    var $entry_addr;
    $entry_addr=$entry1;
    var $0=$entry_addr;
    var $cmp=((($0))|0)!=0;
    if ($cmp) { __label__ = 1;; } else { __label__ = 2;; }
    if (__label__ == 1) {
  
      var $1=$entry_addr;
      var $data=$1+2;
      var $2=HEAP[$data];
      ;
      var $3=$entry_addr;
      var $bstream=$3+3;
      var $4=HEAP[$bstream];
      _BitStream_free($4);
      var $5=$entry_addr;
      var $6=$5;
      ;
      ;
    }
  
    ;
    return;
    return;
  }
  

  function _QRinput_dup($input) {
    ;
    var __label__;
  
    var $retval;
    var $input_addr;
    var $n;
    var $list;
    var $e;
    $input_addr=$input;
    var $0=$input_addr;
    var $mqr=$0+4;
    var $1=HEAP[$mqr];
    var $tobool=((($1))|0)!=0;
    if ($tobool) { __label__ = 1;; } else { __label__ = 2;; }
    if (__label__ == 1) {
  
      var $2=$input_addr;
      var $version=$2;
      var $3=HEAP[$version];
      var $4=$input_addr;
      var $level=$4+1;
      var $5=HEAP[$level];
      var $call=_QRinput_newMQR($3, $5);
      $n=$call;
      ;
    }
    else if (__label__ == 2) {
  
      var $6=$input_addr;
      var $version1=$6;
      var $7=HEAP[$version1];
      var $8=$input_addr;
      var $level2=$8+1;
      var $9=HEAP[$level2];
      var $call3=_QRinput_new2($7, $9);
      $n=$call3;
      ;
    }
  
    var $10=$n;
    var $cmp=((($10))|0)==0;
    if ($cmp) { __label__ = 4;; } else { __label__ = 5;; }
    if (__label__ == 4) {
  
      $retval=0;
      ;
    }
    else if (__label__ == 5) {
  
      var $11=$input_addr;
      var $head=$11+2;
      var $12=HEAP[$head];
      $list=$12;
      ;
      while(1) { 
  
        var $13=$list;
        var $cmp6=((($13))|0)!=0;
        if (!($cmp6)) { __label__ = 10;break ; }
  
        var $14=$list;
        var $call7=_QRinput_List_dup($14);
        $e=$call7;
        var $15=$e;
        var $cmp8=((($15))|0)==0;
        if ($cmp8) { __label__ = 8;break ; }
  
        var $17=$n;
        var $18=$e;
        _QRinput_appendEntry($17, $18);
        var $19=$list;
        var $next=$19+4;
        var $20=HEAP[$next];
        $list=$20;
        __label__ = 6;continue ;
      }
      if (__label__ == 10) {
  
        var $21=$n;
        $retval=$21;
        ;
      }
      else if (__label__ == 8) {
  
        var $16=$n;
        _QRinput_free($16);
        $retval=0;
        ;
      }
    }
  
    var $22=$retval;
    ;
    return $22;
    return null;
  }
  _QRinput_dup["X"]=1;

  function _QRinput_List_dup($entry1) {
    ;
    var __label__;
  
    var $retval;
    var $entry_addr;
    var $n;
    $entry_addr=$entry1;
    var $call=_malloc(20);
    var $0=$call;
    $n=$0;
    var $1=$n;
    var $cmp=((($1))|0)==0;
    if ($cmp) { __label__ = 1;; } else { __label__ = 2;; }
    if (__label__ == 1) {
  
      $retval=0;
      ;
    }
    else if (__label__ == 2) {
  
      var $2=$entry_addr;
      var $mode=$2;
      var $3=HEAP[$mode];
      var $4=$n;
      var $mode2=$4;
      HEAP[$mode2]=$3;
      var $5=$entry_addr;
      var $size=$5+1;
      var $6=HEAP[$size];
      var $7=$n;
      var $size3=$7+1;
      HEAP[$size3]=$6;
      var $8=$n;
      var $size4=$8+1;
      var $9=HEAP[$size4];
      var $call5=_malloc($9);
      var $10=$n;
      var $data=$10+2;
      HEAP[$data]=$call5;
      var $11=$n;
      var $data6=$11+2;
      var $12=HEAP[$data6];
      var $cmp7=((($12))|0)==0;
      if ($cmp7) { __label__ = 3;; } else { __label__ = 4;; }
      if (__label__ == 3) {
  
        var $13=$n;
        var $14=$13;
        ;
        $retval=0;
        ;
      }
      else if (__label__ == 4) {
  
        var $15=$n;
        var $data10=$15+2;
        var $16=HEAP[$data10];
        var $17=$entry_addr;
        var $data11=$17+2;
        var $18=HEAP[$data11];
        var $19=$entry_addr;
        var $size12=$19+1;
        var $20=HEAP[$size12];
        assert($20 % 1 === 0, 'memcpy given ' + $20 + ' bytes to copy. Problem with 1=1 corrections perhaps?');for (var mcpi_s=$18,mcpi_e=$18+$20,mcpi_d=$16; mcpi_s<mcpi_e; mcpi_s++, mcpi_d++) {
          HEAP[mcpi_d] = HEAP[mcpi_s];
        };
        var $21=$n;
        var $bstream=$21+3;
        HEAP[$bstream]=0;
        var $22=$n;
        var $next=$22+4;
        HEAP[$next]=0;
        var $23=$n;
        $retval=$23;
        ;
      }
    }
  
    var $24=$retval;
    ;
    return $24;
    return null;
  }
  _QRinput_List_dup["X"]=1;

  function _QRinput_estimateBitsModeNum($size) {
    ;
    var __label__;
  
    var $size_addr;
    var $w;
    var $bits;
    $size_addr=$size;
    var $0=$size_addr;
    var $div=((((($0))|0)/3)|0);
    $w=$div;
    var $1=$w;
    var $mul=($1)*10;
    $bits=$mul;
    var $2=$size_addr;
    var $3=$w;
    var $mul1=($3)*3;
    var $sub=($2)-($mul1);
    if ($sub == 1) {
      __label__ = 1;;
    }
    else if ($sub == 2) {
      __label__ = 2;;
    }
    else {
    __label__ = 3;;
    }
    
    if (__label__ == 3) {
  
      ;
    }
    else if (__label__ == 1) {
  
      var $4=$bits;
      var $add=($4)+4;
      $bits=$add;
      ;
    }
    else if (__label__ == 2) {
  
      var $5=$bits;
      var $add3=($5)+7;
      $bits=$add3;
      ;
    }
  
    var $6=$bits;
    ;
    return $6;
    return null;
  }
  

  function _QRinput_estimateBitsModeAn($size) {
    ;
    var __label__;
  
    var $size_addr;
    var $w;
    var $bits;
    $size_addr=$size;
    var $0=$size_addr;
    var $div=((((($0))|0)/2)|0);
    $w=$div;
    var $1=$w;
    var $mul=($1)*11;
    $bits=$mul;
    var $2=$size_addr;
    var $and=($2) & 1;
    var $tobool=((($and))|0)!=0;
    if ($tobool) { __label__ = 1;; } else { __label__ = 2;; }
    if (__label__ == 1) {
  
      var $3=$bits;
      var $add=($3)+6;
      $bits=$add;
      ;
    }
  
    var $4=$bits;
    ;
    return $4;
    return null;
  }
  

  function _QRinput_estimateBitsMode8($size) {
    ;
    var __label__;
  
    var $size_addr;
    $size_addr=$size;
    var $0=$size_addr;
    var $mul=(($0)<<3);
    ;
    return $mul;
    return null;
  }
  

  function _QRinput_estimateBitsModeKanji($size) {
    ;
    var __label__;
  
    var $size_addr;
    $size_addr=$size;
    var $0=$size_addr;
    var $div=((((($0))|0)/2)|0);
    var $mul=($div)*13;
    ;
    return $mul;
    return null;
  }
  

  function _QRinput_estimateBitsModeECI($data) {
    ;
    var __label__;
  
    var $retval;
    var $data_addr;
    var $ecinum;
    $data_addr=$data;
    var $0=$data_addr;
    var $call=_QRinput_decodeECIfromByteArray($0);
    $ecinum=$call;
    var $1=$ecinum;
    var $cmp=((($1))>>>0) < 128;
    if ($cmp) { __label__ = 1;; } else { __label__ = 2;; }
    if (__label__ == 1) {
  
      $retval=12;
      ;
    }
    else if (__label__ == 2) {
  
      var $2=$ecinum;
      var $cmp1=((($2))>>>0) < 16384;
      if ($cmp1) { __label__ = 3;; } else { __label__ = 4;; }
      if (__label__ == 3) {
  
        $retval=20;
        ;
      }
      else if (__label__ == 4) {
  
        $retval=28;
        ;
      }
    }
  
    var $3=$retval;
    ;
    return $3;
    return null;
  }
  

  function _QRinput_decodeECIfromByteArray($data) {
    ;
    var __label__;
  
    var $data_addr;
    var $i;
    var $ecinum;
    $data_addr=$data;
    $ecinum=0;
    $i=0;
    ;
    while(1) { 
  
      var $0=$i;
      var $cmp=((($0))|0) < 4;
      if (!($cmp)) { __label__ = 4;break ; }
  
      var $1=$ecinum;
      var $shl=($1) << 8;
      $ecinum=$shl;
      var $2=$i;
      var $sub=3-($2);
      var $3=$data_addr;
      var $arrayidx=$3+$sub;
      var $4=HEAP[$arrayidx];
      var $conv=((($4))&255);
      var $5=$ecinum;
      var $or=($5) | ($conv);
      $ecinum=$or;
      ;
  
      var $6=$i;
      var $inc=($6)+1;
      $i=$inc;
      __label__ = 1;continue ;
    }
  
    var $7=$ecinum;
    ;
    return $7;
    return null;
  }
  

  function _QRinput_check($mode, $size, $data) {
    ;
    var __label__;
  
    var $retval;
    var $mode_addr;
    var $size_addr;
    var $data_addr;
    $mode_addr=$mode;
    $size_addr=$size;
    $data_addr=$data;
    var $0=$mode_addr;
    var $cmp=((($0))|0)==6;
    if ($cmp) { __label__ = 1;; } else { __label__ = 2;; }
    $land_lhs_true$$lor_lhs_false$2: do { 
      if (__label__ == 1) {
  
        var $1=$size_addr;
        var $cmp1=((($1))|0) < 0;
        if ($cmp1) { __label__ = 3;break $land_lhs_true$$lor_lhs_false$2; } else { __label__ = 2;break $land_lhs_true$$lor_lhs_false$2; }
      }
    } while(0);
    $if_then$$lor_lhs_false$4: do { 
      if (__label__ == 2) {
  
        var $2=$size_addr;
        var $cmp2=((($2))|0) <= 0;
        if ($cmp2) { __label__ = 3;break $if_then$$lor_lhs_false$4; }
  
        var $3=$mode_addr;
        if ($3 == 0) {
          __label__ = 5;;
        }
        else if ($3 == 1) {
          __label__ = 6;;
        }
        else if ($3 == 3) {
          __label__ = 7;;
        }
        else if ($3 == 2) {
          __label__ = 8;;
        }
        else if ($3 == 4) {
          __label__ = 9;;
        }
        else if ($3 == 5) {
          __label__ = 10;;
        }
        else if ($3 == 6) {
          __label__ = 11;;
        }
        else if ($3 == 7) {
          __label__ = 12;;
        }
        else if ($3 == -1) {
          __label__ = 13;;
        }
        else {
        __label__ = 13;;
        }
        
        if (__label__ == 13) {
  
          $retval=-1;
          __label__ = 14;break $if_then$$lor_lhs_false$4;
        }
        else if (__label__ == 5) {
  
          var $4=$size_addr;
          var $5=$data_addr;
          var $call=_QRinput_checkModeNum($4, $5);
          $retval=$call;
          __label__ = 14;break $if_then$$lor_lhs_false$4;
        }
        else if (__label__ == 6) {
  
          var $6=$size_addr;
          var $7=$data_addr;
          var $call4=_QRinput_checkModeAn($6, $7);
          $retval=$call4;
          __label__ = 14;break $if_then$$lor_lhs_false$4;
        }
        else if (__label__ == 7) {
  
          var $8=$size_addr;
          var $9=$data_addr;
          var $call6=_QRinput_checkModeKanji($8, $9);
          $retval=$call6;
          __label__ = 14;break $if_then$$lor_lhs_false$4;
        }
        else if (__label__ == 8) {
  
          $retval=0;
          __label__ = 14;break $if_then$$lor_lhs_false$4;
        }
        else if (__label__ == 9) {
  
          $retval=0;
          __label__ = 14;break $if_then$$lor_lhs_false$4;
        }
        else if (__label__ == 10) {
  
          $retval=0;
          __label__ = 14;break $if_then$$lor_lhs_false$4;
        }
        else if (__label__ == 11) {
  
          $retval=0;
          __label__ = 14;break $if_then$$lor_lhs_false$4;
        }
        else if (__label__ == 12) {
  
          var $10=$size_addr;
          var $11=$data_addr;
          var $call12=_QRinput_checkModeFNC1Second($10, $11);
          $retval=$call12;
          __label__ = 14;break $if_then$$lor_lhs_false$4;
        }
      }
    } while(0);
    if (__label__ == 3) {
  
      $retval=-1;
      ;
    }
  
    var $12=$retval;
    ;
    return $12;
    return null;
  }
  _QRinput_check["X"]=1;

  function _QRinput_checkModeNum($size, $data) {
    ;
    var __label__;
  
    var $retval;
    var $size_addr;
    var $data_addr;
    var $i;
    $size_addr=$size;
    $data_addr=$data;
    $i=0;
    ;
    while(1) { 
  
      var $0=$i;
      var $1=$size_addr;
      var $cmp=((($0))|0) < ((($1))|0);
      if (!($cmp)) { __label__ = 7;break ; }
  
      var $2=$i;
      var $3=$data_addr;
      var $arrayidx=$3+$2;
      var $4=HEAP[$arrayidx];
      var $conv=(tempInt=(($4)),(tempInt>=128?tempInt-256:tempInt));
      var $cmp1=((($conv))|0) < 48;
      if ($cmp1) { __label__ = 4;break ; }
  
      var $5=$i;
      var $6=$data_addr;
      var $arrayidx3=$6+$5;
      var $7=HEAP[$arrayidx3];
      var $conv4=(tempInt=(($7)),(tempInt>=128?tempInt-256:tempInt));
      var $cmp5=((($conv4))|0) > 57;
      if ($cmp5) { __label__ = 4;break ; }
  
      ;
  
      var $8=$i;
      var $inc=($8)+1;
      $i=$inc;
      __label__ = 1;continue ;
    }
    if (__label__ == 7) {
  
      $retval=0;
      ;
    }
    else if (__label__ == 4) {
  
      $retval=-1;
      ;
    }
  
    var $9=$retval;
    ;
    return $9;
    return null;
  }
  

  function _QRinput_checkModeAn($size, $data) {
    ;
    var __label__;
    var __lastLabel__ = null;
  
    var $retval;
    var $size_addr;
    var $data_addr;
    var $i;
    $size_addr=$size;
    $data_addr=$data;
    $i=0;
    ;
    while(1) { 
  
      var $0=$i;
      var $1=$size_addr;
      var $cmp=((($0))|0) < ((($1))|0);
      if (!($cmp)) { __label__ = 9;break ; }
  
      var $2=$i;
      var $3=$data_addr;
      var $arrayidx=$3+$2;
      var $4=HEAP[$arrayidx];
      var $conv=(tempInt=(($4)),(tempInt>=128?tempInt-256:tempInt));
      var $and=($conv) & 128;
      var $tobool=((($and))|0)!=0;
      if ($tobool) { __label__ = 3;; } else { __label__ = 4;; }
      if (__label__ == 3) {
  
        __lastLabel__ = 3; ;
      }
      else if (__label__ == 4) {
  
        var $5=$i;
        var $6=$data_addr;
        var $arrayidx1=$6+$5;
        var $7=HEAP[$arrayidx1];
        var $conv2=(tempInt=(($7)),(tempInt>=128?tempInt-256:tempInt));
        var $arrayidx3=_QRinput_anTable+$conv2;
        var $8=HEAP[$arrayidx3];
        var $conv4=(tempInt=(($8)),(tempInt>=128?tempInt-256:tempInt));
        __lastLabel__ = 4; ;
      }
  
      var $cond=__lastLabel__ == 3 ? -1 : ($conv4);
      var $cmp5=((($cond))|0) < 0;
      if ($cmp5) { __label__ = 6;break ; }
  
      ;
  
      var $9=$i;
      var $inc=($9)+1;
      $i=$inc;
      __label__ = 1;continue ;
    }
    if (__label__ == 9) {
  
      $retval=0;
      ;
    }
    else if (__label__ == 6) {
  
      $retval=-1;
      ;
    }
  
    var $10=$retval;
    ;
    return $10;
    return null;
  }
  

  function _QRinput_checkModeKanji($size, $data) {
    ;
    var __label__;
  
    var $retval;
    var $size_addr;
    var $data_addr;
    var $i;
    var $val;
    $size_addr=$size;
    $data_addr=$data;
    var $0=$size_addr;
    var $and=($0) & 1;
    var $tobool=((($and))|0)!=0;
    if ($tobool) { __label__ = 1;; } else { __label__ = 2;; }
    if (__label__ == 1) {
  
      $retval=-1;
      ;
    }
    else if (__label__ == 2) {
  
      $i=0;
      ;
      while(1) { 
  
        var $1=$i;
        var $2=$size_addr;
        var $cmp=((($1))|0) < ((($2))|0);
        if (!($cmp)) { __label__ = 11;break ; }
  
        var $3=$i;
        var $4=$data_addr;
        var $arrayidx=$4+$3;
        var $5=HEAP[$arrayidx];
        var $conv=((($5))&255);
        var $shl=($conv) << 8;
        var $6=$i;
        var $add=($6)+1;
        var $7=$data_addr;
        var $arrayidx1=$7+$add;
        var $8=HEAP[$arrayidx1];
        var $conv2=((($8))&255);
        var $or=($shl) | ($conv2);
        $val=$or;
        var $9=$val;
        var $cmp3=((($9))>>>0) < 33088;
        if ($cmp3) { __label__ = 8;break ; }
  
        var $10=$val;
        var $cmp5=((($10))>>>0) > 40956;
        if ($cmp5) { __label__ = 6;; } else { __label__ = 7;; }
        if (__label__ == 6) {
  
          var $11=$val;
          var $cmp7=((($11))>>>0) < 57408;
          if ($cmp7) { __label__ = 8;break ; }
        }
  
        var $12=$val;
        var $cmp10=((($12))>>>0) > 60351;
        if ($cmp10) { __label__ = 8;break ; }
  
        ;
  
        var $13=$i;
        var $add14=($13)+2;
        $i=$add14;
        __label__ = 3;continue ;
      }
      if (__label__ == 11) {
  
        $retval=0;
        ;
      }
      else if (__label__ == 8) {
  
        $retval=-1;
        ;
      }
    }
  
    var $14=$retval;
    ;
    return $14;
    return null;
  }
  _QRinput_checkModeKanji["X"]=1;

  function _QRinput_checkModeFNC1Second($size, $data) {
    ;
    var __label__;
  
    var $retval;
    var $size_addr;
    var $data_addr;
    $size_addr=$size;
    $data_addr=$data;
    var $0=$size_addr;
    var $cmp=((($0))|0)!=1;
    if ($cmp) { __label__ = 1;; } else { __label__ = 2;; }
    if (__label__ == 1) {
  
      $retval=-1;
      ;
    }
    else if (__label__ == 2) {
  
      $retval=0;
      ;
    }
  
    var $1=$retval;
    ;
    return $1;
    return null;
  }
  

  function _QRinput_getByteStream($input) {
    ;
    var __label__;
  
    var $retval;
    var $input_addr;
    var $bstream;
    var $array;
    $input_addr=$input;
    var $0=$input_addr;
    var $call=_QRinput_getBitStream($0);
    $bstream=$call;
    var $1=$bstream;
    var $cmp=((($1))|0)==0;
    if ($cmp) { __label__ = 1;; } else { __label__ = 2;; }
    if (__label__ == 1) {
  
      $retval=0;
      ;
    }
    else if (__label__ == 2) {
  
      var $2=$bstream;
      var $call1=_BitStream_toByte($2);
      $array=$call1;
      var $3=$bstream;
      _BitStream_free($3);
      var $4=$array;
      $retval=$4;
      ;
    }
  
    var $5=$retval;
    ;
    return $5;
    return null;
  }
  

  function _QRinput_getBitStream($input) {
    ;
    var __label__;
  
    var $retval;
    var $input_addr;
    var $bstream;
    var $ret;
    $input_addr=$input;
    var $0=$input_addr;
    var $call=_QRinput_mergeBitStream($0);
    $bstream=$call;
    var $1=$bstream;
    var $cmp=((($1))|0)==0;
    if ($cmp) { __label__ = 1;; } else { __label__ = 2;; }
    if (__label__ == 1) {
  
      $retval=0;
      ;
    }
    else if (__label__ == 2) {
  
      var $2=$input_addr;
      var $mqr=$2+4;
      var $3=HEAP[$mqr];
      var $tobool=((($3))|0)!=0;
      if ($tobool) { __label__ = 3;; } else { __label__ = 4;; }
      if (__label__ == 3) {
  
        var $4=$bstream;
        var $5=$input_addr;
        var $call2=_QRinput_appendPaddingBitMQR($4, $5);
        $ret=$call2;
        ;
      }
      else if (__label__ == 4) {
  
        var $6=$bstream;
        var $7=$input_addr;
        var $call3=_QRinput_appendPaddingBit($6, $7);
        $ret=$call3;
        ;
      }
  
      var $8=$ret;
      var $cmp5=((($8))|0) < 0;
      if ($cmp5) { __label__ = 6;; } else { __label__ = 7;; }
      if (__label__ == 6) {
  
        var $9=$bstream;
        _BitStream_free($9);
        $retval=0;
        ;
      }
      else if (__label__ == 7) {
  
        var $10=$bstream;
        $retval=$10;
        ;
      }
    }
  
    var $11=$retval;
    ;
    return $11;
    return null;
  }
  

  function _QRinput_Struct_new() {
    ;
    var __label__;
  
    var $retval;
    var $s;
    var $call=_malloc(16);
    var $0=$call;
    $s=$0;
    var $1=$s;
    var $cmp=((($1))|0)==0;
    if ($cmp) { __label__ = 1;; } else { __label__ = 2;; }
    if (__label__ == 1) {
  
      $retval=0;
      ;
    }
    else if (__label__ == 2) {
  
      var $2=$s;
      var $size=$2;
      HEAP[$size]=0;
      var $3=$s;
      var $parity=$3+1;
      HEAP[$parity]=-1;
      var $4=$s;
      var $head=$4+2;
      HEAP[$head]=0;
      var $5=$s;
      var $tail=$5+3;
      HEAP[$tail]=0;
      var $6=$s;
      $retval=$6;
      ;
    }
  
    var $7=$retval;
    ;
    return $7;
    return null;
  }
  

  function _QRinput_Struct_setParity($s, $parity) {
    ;
    var __label__;
  
    var $s_addr;
    var $parity_addr;
    $s_addr=$s;
    $parity_addr=$parity;
    var $0=$parity_addr;
    var $conv=((($0))&255);
    var $1=$s_addr;
    var $parity1=$1+1;
    HEAP[$parity1]=$conv;
    ;
    return;
    return;
  }
  

  function _QRinput_Struct_appendInput($s, $input) {
    ;
    var __label__;
  
    var $retval;
    var $s_addr;
    var $input_addr;
    var $e;
    $s_addr=$s;
    $input_addr=$input;
    var $0=$input_addr;
    var $mqr=$0+4;
    var $1=HEAP[$mqr];
    var $tobool=((($1))|0)!=0;
    if ($tobool) { __label__ = 1;; } else { __label__ = 2;; }
    if (__label__ == 1) {
  
      var $call=___errno();
      HEAP[$call]=22;
      $retval=-1;
      ;
    }
    else if (__label__ == 2) {
  
      var $2=$input_addr;
      var $call1=_QRinput_InputList_newEntry($2);
      $e=$call1;
      var $3=$e;
      var $cmp=((($3))|0)==0;
      if ($cmp) { __label__ = 3;; } else { __label__ = 4;; }
      if (__label__ == 3) {
  
        $retval=-1;
        ;
      }
      else if (__label__ == 4) {
  
        var $4=$s_addr;
        var $size=$4;
        var $5=HEAP[$size];
        var $inc=($5)+1;
        HEAP[$size]=$inc;
        var $6=$s_addr;
        var $tail=$6+3;
        var $7=HEAP[$tail];
        var $cmp4=((($7))|0)==0;
        if ($cmp4) { __label__ = 5;; } else { __label__ = 6;; }
        if (__label__ == 5) {
  
          var $8=$e;
          var $9=$s_addr;
          var $head=$9+2;
          HEAP[$head]=$8;
          var $10=$e;
          var $11=$s_addr;
          var $tail6=$11+3;
          HEAP[$tail6]=$10;
          ;
        }
        else if (__label__ == 6) {
  
          var $12=$e;
          var $13=$s_addr;
          var $tail7=$13+3;
          var $14=HEAP[$tail7];
          var $next=$14+1;
          HEAP[$next]=$12;
          var $15=$e;
          var $16=$s_addr;
          var $tail8=$16+3;
          HEAP[$tail8]=$15;
          ;
        }
  
        var $17=$s_addr;
        var $size10=$17;
        var $18=HEAP[$size10];
        $retval=$18;
        ;
      }
    }
  
    var $19=$retval;
    ;
    return $19;
    return null;
  }
  _QRinput_Struct_appendInput["X"]=1;

  function _QRinput_InputList_newEntry($input) {
    ;
    var __label__;
  
    var $retval;
    var $input_addr;
    var $entry1;
    $input_addr=$input;
    var $call=_malloc(8);
    var $0=$call;
    $entry1=$0;
    var $1=$entry1;
    var $cmp=((($1))|0)==0;
    if ($cmp) { __label__ = 1;; } else { __label__ = 2;; }
    if (__label__ == 1) {
  
      $retval=0;
      ;
    }
    else if (__label__ == 2) {
  
      var $2=$input_addr;
      var $3=$entry1;
      var $input2=$3;
      HEAP[$input2]=$2;
      var $4=$entry1;
      var $next=$4+1;
      HEAP[$next]=0;
      var $5=$entry1;
      $retval=$5;
      ;
    }
  
    var $6=$retval;
    ;
    return $6;
    return null;
  }
  

  function _QRinput_Struct_free($s) {
    ;
    var __label__;
  
    var $s_addr;
    var $list;
    var $next;
    $s_addr=$s;
    var $0=$s_addr;
    var $cmp=((($0))|0)!=0;
    if ($cmp) { __label__ = 1;; } else { __label__ = 5;; }
    if (__label__ == 1) {
  
      var $1=$s_addr;
      var $head=$1+2;
      var $2=HEAP[$head];
      $list=$2;
      ;
      while(1) { 
  
        var $3=$list;
        var $cmp1=((($3))|0)!=0;
        if (!($cmp1)) { __label__ = 4;break ; }
  
        var $4=$list;
        var $next2=$4+1;
        var $5=HEAP[$next2];
        $next=$5;
        var $6=$list;
        _QRinput_InputList_freeEntry($6);
        var $7=$next;
        $list=$7;
        __label__ = 2;continue ;
      }
  
      var $8=$s_addr;
      var $9=$8;
      ;
      ;
    }
  
    ;
    return;
    return;
  }
  

  function _QRinput_InputList_freeEntry($entry1) {
    ;
    var __label__;
  
    var $entry_addr;
    $entry_addr=$entry1;
    var $0=$entry_addr;
    var $cmp=((($0))|0)!=0;
    if ($cmp) { __label__ = 1;; } else { __label__ = 2;; }
    if (__label__ == 1) {
  
      var $1=$entry_addr;
      var $input=$1;
      var $2=HEAP[$input];
      _QRinput_free($2);
      var $3=$entry_addr;
      var $4=$3;
      ;
      ;
    }
  
    ;
    return;
    return;
  }
  

  function _QRinput_splitQRinputToStruct($input) {
    ;
    var __label__;
  
    var $retval;
    var $input_addr;
    var $p;
    var $s;
    var $bits;
    var $maxbits;
    var $nextbits;
    var $bytes;
    var $ret;
    var $list;
    var $next;
    var $prev;
    $input_addr=$input;
    var $0=$input_addr;
    var $mqr=$0+4;
    var $1=HEAP[$mqr];
    var $tobool=((($1))|0)!=0;
    if ($tobool) { __label__ = 1;; } else { __label__ = 2;; }
    $if_then$$if_end$2: do { 
      if (__label__ == 1) {
  
        var $call=___errno();
        HEAP[$call]=22;
        $retval=0;
        ;
      }
      else if (__label__ == 2) {
  
        var $call1=_QRinput_Struct_new();
        $s=$call1;
        var $2=$s;
        var $cmp=((($2))|0)==0;
        if ($cmp) { __label__ = 3;; } else { __label__ = 4;; }
        if (__label__ == 3) {
  
          $retval=0;
          ;
        }
        else if (__label__ == 4) {
  
          var $3=$input_addr;
          var $call4=_QRinput_dup($3);
          $input_addr=$call4;
          var $4=$input_addr;
          var $cmp5=((($4))|0)==0;
          if ($cmp5) { __label__ = 5;; } else { __label__ = 6;; }
          if (__label__ == 5) {
  
            var $5=$s;
            _QRinput_Struct_free($5);
            $retval=0;
            ;
          }
          else if (__label__ == 6) {
  
            var $6=$s;
            var $7=$input_addr;
            var $call8=_QRinput_calcParity($7);
            _QRinput_Struct_setParity($6, $call8);
            var $8=$input_addr;
            var $version=$8;
            var $9=HEAP[$version];
            var $10=$input_addr;
            var $level=$10+1;
            var $11=HEAP[$level];
            var $call9=_QRspec_getDataLength($9, $11);
            var $mul=(($call9)<<3);
            var $sub=($mul)-20;
            $maxbits=$sub;
            var $12=$maxbits;
            var $cmp10=((($12))|0) <= 0;
            if ($cmp10) { __label__ = 7;; } else { __label__ = 8;; }
            if (__label__ == 7) {
  
              var $13=$s;
              _QRinput_Struct_free($13);
              var $14=$input_addr;
              _QRinput_free($14);
              $retval=0;
              ;
            }
            else if (__label__ == 8) {
  
              $bits=0;
              var $15=$input_addr;
              var $head=$15+2;
              var $16=HEAP[$head];
              $list=$16;
              $prev=0;
              ;
              while(1) { 
  
                var $17=$list;
                var $cmp13=((($17))|0)!=0;
                if (!($cmp13)) { __label__ = 27;break ; }
  
                var $18=$list;
                var $19=$input_addr;
                var $version14=$19;
                var $20=HEAP[$version14];
                var $21=$input_addr;
                var $mqr15=$21+4;
                var $22=HEAP[$mqr15];
                var $call16=_QRinput_estimateBitStreamSizeOfEntry($18, $20, $22);
                $nextbits=$call16;
                var $23=$bits;
                var $24=$nextbits;
                var $add=($23)+($24);
                var $25=$maxbits;
                var $cmp17=((($add))|0) <= ((($25))|0);
                if ($cmp17) { __label__ = 11;; } else { __label__ = 14;; }
                if (__label__ == 11) {
  
                  var $26=$list;
                  var $27=$input_addr;
                  var $version19=$27;
                  var $28=HEAP[$version19];
                  var $29=$input_addr;
                  var $mqr20=$29+4;
                  var $30=HEAP[$mqr20];
                  var $call21=_QRinput_encodeBitStream($26, $28, $30);
                  $ret=$call21;
                  var $31=$ret;
                  var $cmp22=((($31))|0) < 0;
                  if ($cmp22) { __label__ = 12;break ; }
  
                  var $32=$ret;
                  var $33=$bits;
                  var $add25=($33)+($32);
                  $bits=$add25;
                  var $34=$list;
                  $prev=$34;
                  var $35=$list;
                  var $next26=$35+4;
                  var $36=HEAP[$next26];
                  $list=$36;
                  ;
                }
                else if (__label__ == 14) {
  
                  var $37=$list;
                  var $mode=$37;
                  var $38=HEAP[$mode];
                  var $39=$input_addr;
                  var $version27=$39;
                  var $40=HEAP[$version27];
                  var $41=$maxbits;
                  var $42=$bits;
                  var $sub28=($41)-($42);
                  var $call29=_QRinput_lengthOfCode($38, $40, $sub28);
                  $bytes=$call29;
                  var $43=$bytes;
                  var $cmp30=((($43))|0) > 0;
                  if ($cmp30) { __label__ = 15;; } else { __label__ = 20;; }
                  if (__label__ == 15) {
  
                    var $44=$list;
                    var $45=$bytes;
                    var $call32=_QRinput_splitEntry($44, $45);
                    $ret=$call32;
                    var $46=$ret;
                    var $cmp33=((($46))|0) < 0;
                    if ($cmp33) { __label__ = 16;break ; }
  
                    var $47=$list;
                    var $next36=$47+4;
                    var $48=HEAP[$next36];
                    $next=$48;
                    var $49=$list;
                    var $next37=$49+4;
                    HEAP[$next37]=0;
                    var $50=$input_addr;
                    var $version38=$50;
                    var $51=HEAP[$version38];
                    var $52=$input_addr;
                    var $level39=$52+1;
                    var $53=HEAP[$level39];
                    var $call40=_QRinput_new2($51, $53);
                    $p=$call40;
                    var $54=$p;
                    var $cmp41=((($54))|0)==0;
                    if ($cmp41) { __label__ = 18;break ; }
  
                    var $55=$next;
                    var $56=$p;
                    var $head44=$56+2;
                    HEAP[$head44]=$55;
                    var $57=$input_addr;
                    var $tail=$57+3;
                    var $58=HEAP[$tail];
                    var $59=$p;
                    var $tail45=$59+3;
                    HEAP[$tail45]=$58;
                    var $60=$list;
                    var $61=$input_addr;
                    var $tail46=$61+3;
                    HEAP[$tail46]=$60;
                    var $62=$list;
                    $prev=$62;
                    var $63=$next;
                    $list=$63;
                    ;
                  }
                  else if (__label__ == 20) {
  
                    var $64=$prev;
                    var $next48=$64+4;
                    HEAP[$next48]=0;
                    var $65=$input_addr;
                    var $version49=$65;
                    var $66=HEAP[$version49];
                    var $67=$input_addr;
                    var $level50=$67+1;
                    var $68=HEAP[$level50];
                    var $call51=_QRinput_new2($66, $68);
                    $p=$call51;
                    var $69=$p;
                    var $cmp52=((($69))|0)==0;
                    if ($cmp52) { __label__ = 21;break ; }
  
                    var $70=$list;
                    var $71=$p;
                    var $head55=$71+2;
                    HEAP[$head55]=$70;
                    var $72=$input_addr;
                    var $tail56=$72+3;
                    var $73=HEAP[$tail56];
                    var $74=$p;
                    var $tail57=$74+3;
                    HEAP[$tail57]=$73;
                    var $75=$prev;
                    var $76=$input_addr;
                    var $tail58=$76+3;
                    HEAP[$tail58]=$75;
                    ;
                  }
  
                  var $77=$s;
                  var $78=$input_addr;
                  var $call60=_QRinput_Struct_appendInput($77, $78);
                  $ret=$call60;
                  var $79=$ret;
                  var $cmp61=((($79))|0) < 0;
                  if ($cmp61) { __label__ = 24;break ; }
  
                  var $80=$p;
                  $input_addr=$80;
                  $bits=0;
                  ;
                }
  
                __label__ = 9;continue ;
              }
              if (__label__ == 27) {
  
                var $81=$s;
                var $82=$input_addr;
                var $call65=_QRinput_Struct_appendInput($81, $82);
                var $83=$s;
                var $size=$83;
                var $84=HEAP[$size];
                var $cmp66=((($84))|0) > 16;
                if ($cmp66) { __label__ = 28;; } else { __label__ = 29;; }
                if (__label__ == 28) {
  
                  var $85=$s;
                  _QRinput_Struct_free($85);
                  var $call68=___errno();
                  HEAP[$call68]=34;
                  $retval=0;
                  __label__ = 33;break $if_then$$if_end$2;
                }
                else if (__label__ == 29) {
  
                  var $86=$s;
                  var $call70=_QRinput_Struct_insertStructuredAppendHeaders($86);
                  $ret=$call70;
                  var $87=$ret;
                  var $cmp71=((($87))|0) < 0;
                  if ($cmp71) { __label__ = 30;; } else { __label__ = 31;; }
                  if (__label__ == 30) {
  
                    var $88=$s;
                    _QRinput_Struct_free($88);
                    $retval=0;
                    __label__ = 33;break $if_then$$if_end$2;
                  }
                  else if (__label__ == 31) {
  
                    var $89=$s;
                    $retval=$89;
                    __label__ = 33;break $if_then$$if_end$2;
                  }
                }
              }
              else if (__label__ == 12) {
  
                ;
              }
              else if (__label__ == 16) {
  
                ;
              }
              else if (__label__ == 18) {
  
                ;
              }
              else if (__label__ == 24) {
  
                ;
              }
              else if (__label__ == 21) {
  
                ;
              }
  
              var $90=$input_addr;
              _QRinput_free($90);
              var $91=$s;
              _QRinput_Struct_free($91);
              $retval=0;
              ;
            }
          }
        }
      }
    } while(0);
  
    var $92=$retval;
    ;
    return $92;
    return null;
  }
  _QRinput_splitQRinputToStruct["X"]=1;

  function _QRinput_calcParity($input) {
    ;
    var __label__;
  
    var $input_addr;
    var $parity;
    var $list;
    var $i;
    $input_addr=$input;
    $parity=0;
    var $0=$input_addr;
    var $head=$0+2;
    var $1=HEAP[$head];
    $list=$1;
    ;
    $while_cond$2: while(1) { 
  
      var $2=$list;
      var $cmp=((($2))|0)!=0;
      if (!($cmp)) { __label__ = 9;break $while_cond$2; }
  
      var $3=$list;
      var $mode=$3;
      var $4=HEAP[$mode];
      var $cmp1=((($4))|0)!=4;
      if ($cmp1) { __label__ = 3;; } else { __label__ = 8;; }
      if (__label__ == 3) {
  
        var $5=$list;
        var $size=$5+1;
        var $6=HEAP[$size];
        var $sub=($6)-1;
        $i=$sub;
        ;
        while(1) { 
  
          var $7=$i;
          var $cmp2=((($7))|0) >= 0;
          if (!($cmp2)) { __label__ = 7;break ; }
  
          var $8=$i;
          var $9=$list;
          var $data=$9+2;
          var $10=HEAP[$data];
          var $arrayidx=$10+$8;
          var $11=HEAP[$arrayidx];
          var $conv=((($11))&255);
          var $12=$parity;
          var $conv3=((($12))&255);
          var $xor=($conv3) ^ ($conv);
          var $conv4=((($xor)) & 255);
          $parity=$conv4;
          ;
  
          var $13=$i;
          var $dec=($13)-1;
          $i=$dec;
          __label__ = 4;continue ;
        }
  
        ;
      }
  
      var $14=$list;
      var $next=$14+4;
      var $15=HEAP[$next];
      $list=$15;
      __label__ = 1;continue $while_cond$2;
    }
  
    var $16=$parity;
    ;
    return $16;
    return null;
  }
  _QRinput_calcParity["X"]=1;

  function _QRinput_estimateBitStreamSizeOfEntry($entry1, $version, $mqr) {
    ;
    var __label__;
  
    var $retval;
    var $entry_addr;
    var $version_addr;
    var $mqr_addr;
    var $bits;
    var $l;
    var $m;
    var $num;
    $entry_addr=$entry1;
    $version_addr=$version;
    $mqr_addr=$mqr;
    $bits=0;
    var $0=$version_addr;
    var $cmp=((($0))|0)==0;
    if ($cmp) { __label__ = 1;; } else { __label__ = 2;; }
    if (__label__ == 1) {
  
      $version_addr=1;
      ;
    }
  
    var $1=$entry_addr;
    var $mode=$1;
    var $2=HEAP[$mode];
    if ($2 == 0) {
      __label__ = 3;;
    }
    else if ($2 == 1) {
      __label__ = 4;;
    }
    else if ($2 == 2) {
      __label__ = 5;;
    }
    else if ($2 == 3) {
      __label__ = 6;;
    }
    else if ($2 == 4) {
      __label__ = 7;;
    }
    else if ($2 == 5) {
      __label__ = 8;;
    }
    else if ($2 == 6) {
      __label__ = 9;;
    }
    else if ($2 == 7) {
      __label__ = 10;;
    }
    else {
    __label__ = 11;;
    }
    
    $sw_default$$sw_bb$$sw_bb2$$sw_bb5$$sw_bb8$$sw_bb11$$sw_bb12$$sw_bb14$$sw_bb15$5: do { 
      if (__label__ == 11) {
  
        $retval=0;
        __label__ = 16;break $sw_default$$sw_bb$$sw_bb2$$sw_bb5$$sw_bb8$$sw_bb11$$sw_bb12$$sw_bb14$$sw_bb15$5;
      }
      else if (__label__ == 3) {
  
        var $3=$entry_addr;
        var $size=$3+1;
        var $4=HEAP[$size];
        var $call=_QRinput_estimateBitsModeNum($4);
        $bits=$call;
        __label__ = 12;break $sw_default$$sw_bb$$sw_bb2$$sw_bb5$$sw_bb8$$sw_bb11$$sw_bb12$$sw_bb14$$sw_bb15$5;
      }
      else if (__label__ == 4) {
  
        var $5=$entry_addr;
        var $size3=$5+1;
        var $6=HEAP[$size3];
        var $call4=_QRinput_estimateBitsModeAn($6);
        $bits=$call4;
        __label__ = 12;break $sw_default$$sw_bb$$sw_bb2$$sw_bb5$$sw_bb8$$sw_bb11$$sw_bb12$$sw_bb14$$sw_bb15$5;
      }
      else if (__label__ == 5) {
  
        var $7=$entry_addr;
        var $size6=$7+1;
        var $8=HEAP[$size6];
        var $call7=_QRinput_estimateBitsMode8($8);
        $bits=$call7;
        __label__ = 12;break $sw_default$$sw_bb$$sw_bb2$$sw_bb5$$sw_bb8$$sw_bb11$$sw_bb12$$sw_bb14$$sw_bb15$5;
      }
      else if (__label__ == 6) {
  
        var $9=$entry_addr;
        var $size9=$9+1;
        var $10=HEAP[$size9];
        var $call10=_QRinput_estimateBitsModeKanji($10);
        $bits=$call10;
        __label__ = 12;break $sw_default$$sw_bb$$sw_bb2$$sw_bb5$$sw_bb8$$sw_bb11$$sw_bb12$$sw_bb14$$sw_bb15$5;
      }
      else if (__label__ == 7) {
  
        $retval=20;
        __label__ = 16;break $sw_default$$sw_bb$$sw_bb2$$sw_bb5$$sw_bb8$$sw_bb11$$sw_bb12$$sw_bb14$$sw_bb15$5;
      }
      else if (__label__ == 8) {
  
        var $11=$entry_addr;
        var $data=$11+2;
        var $12=HEAP[$data];
        var $call13=_QRinput_estimateBitsModeECI($12);
        $bits=$call13;
        __label__ = 12;break $sw_default$$sw_bb$$sw_bb2$$sw_bb5$$sw_bb8$$sw_bb11$$sw_bb12$$sw_bb14$$sw_bb15$5;
      }
      else if (__label__ == 9) {
  
        $retval=4;
        __label__ = 16;break $sw_default$$sw_bb$$sw_bb2$$sw_bb5$$sw_bb8$$sw_bb11$$sw_bb12$$sw_bb14$$sw_bb15$5;
      }
      else if (__label__ == 10) {
  
        $retval=12;
        __label__ = 16;break $sw_default$$sw_bb$$sw_bb2$$sw_bb5$$sw_bb8$$sw_bb11$$sw_bb12$$sw_bb14$$sw_bb15$5;
      }
    } while(0);
    if (__label__ == 12) {
  
      var $13=$mqr_addr;
      var $tobool=((($13))|0)!=0;
      if ($tobool) { __label__ = 13;; } else { __label__ = 14;; }
      if (__label__ == 13) {
  
        var $14=$entry_addr;
        var $mode17=$14;
        var $15=HEAP[$mode17];
        var $16=$version_addr;
        var $call18=_QRspec_lengthIndicator($15, $16);
        $l=$call18;
        var $17=$version_addr;
        var $sub=($17)-1;
        $m=$sub;
        var $18=$l;
        var $19=$m;
        var $add=($18)+($19);
        var $20=$bits;
        var $add19=($20)+($add);
        $bits=$add19;
        ;
      }
      else if (__label__ == 14) {
  
        var $21=$entry_addr;
        var $mode20=$21;
        var $22=HEAP[$mode20];
        var $23=$version_addr;
        var $call21=_QRspec_lengthIndicator($22, $23);
        $l=$call21;
        var $24=$l;
        var $shl=1 << ($24);
        $m=$shl;
        var $25=$entry_addr;
        var $size22=$25+1;
        var $26=HEAP[$size22];
        var $27=$m;
        var $add23=($26)+($27);
        var $sub24=($add23)-1;
        var $28=$m;
        var $div=((((($sub24))|0)/((($28))|0))|0);
        $num=$div;
        var $29=$num;
        var $30=$l;
        var $add25=($30)+4;
        var $mul=($29)*($add25);
        var $31=$bits;
        var $add26=($31)+($mul);
        $bits=$add26;
        ;
      }
  
      var $32=$bits;
      $retval=$32;
      ;
    }
  
    var $33=$retval;
    ;
    return $33;
    return null;
  }
  _QRinput_estimateBitStreamSizeOfEntry["X"]=1;

  function _QRinput_encodeBitStream($entry1, $version, $mqr) {
    ;
    var __label__;
  
    var $retval;
    var $entry_addr;
    var $version_addr;
    var $mqr_addr;
    var $words;
    var $ret;
    var $st1;
    var $st2;
    $entry_addr=$entry1;
    $version_addr=$version;
    $mqr_addr=$mqr;
    $st1=0;
    $st2=0;
    var $0=$entry_addr;
    var $bstream=$0+3;
    var $1=HEAP[$bstream];
    var $cmp=((($1))|0)!=0;
    if ($cmp) { __label__ = 1;; } else { __label__ = 2;; }
    if (__label__ == 1) {
  
      var $2=$entry_addr;
      var $bstream2=$2+3;
      var $3=HEAP[$bstream2];
      _BitStream_free($3);
      var $4=$entry_addr;
      var $bstream3=$4+3;
      HEAP[$bstream3]=0;
      ;
    }
  
    var $5=$entry_addr;
    var $mode=$5;
    var $6=HEAP[$mode];
    var $7=$version_addr;
    var $call=_QRspec_maximumWords($6, $7);
    $words=$call;
    var $8=$words;
    var $cmp4=((($8))|0)!=0;
    if ($cmp4) { __label__ = 3;; } else { __label__ = 19;; }
    $land_lhs_true$$if_else$5: do { 
      if (__label__ == 3) {
  
        var $9=$entry_addr;
        var $size=$9+1;
        var $10=HEAP[$size];
        var $11=$words;
        var $cmp5=((($10))|0) > ((($11))|0);
        if (!($cmp5)) { __label__ = 19;break $land_lhs_true$$if_else$5; }
  
        var $12=$entry_addr;
        var $mode7=$12;
        var $13=HEAP[$mode7];
        var $14=$words;
        var $15=$entry_addr;
        var $data=$15+2;
        var $16=HEAP[$data];
        var $call8=_QRinput_List_newEntry($13, $14, $16);
        $st1=$call8;
        var $17=$st1;
        var $cmp9=((($17))|0)==0;
        if ($cmp9) { __label__ = 5;; } else { __label__ = 6;; }
        if (__label__ == 5) {
  
          ;
        }
        else if (__label__ == 6) {
  
          var $18=$entry_addr;
          var $mode12=$18;
          var $19=HEAP[$mode12];
          var $20=$entry_addr;
          var $size13=$20+1;
          var $21=HEAP[$size13];
          var $22=$words;
          var $sub=($21)-($22);
          var $23=$words;
          var $24=$entry_addr;
          var $data14=$24+2;
          var $25=HEAP[$data14];
          var $arrayidx=$25+$23;
          var $call15=_QRinput_List_newEntry($19, $sub, $arrayidx);
          $st2=$call15;
          var $26=$st2;
          var $cmp16=((($26))|0)==0;
          if ($cmp16) { __label__ = 7;; } else { __label__ = 8;; }
          if (__label__ == 7) {
  
            ;
          }
          else if (__label__ == 8) {
  
            var $27=$st1;
            var $28=$version_addr;
            var $29=$mqr_addr;
            var $call19=_QRinput_encodeBitStream($27, $28, $29);
            $ret=$call19;
            var $30=$ret;
            var $cmp20=((($30))|0) < 0;
            if ($cmp20) { __label__ = 9;; } else { __label__ = 10;; }
            if (__label__ == 9) {
  
              ;
            }
            else if (__label__ == 10) {
  
              var $31=$st2;
              var $32=$version_addr;
              var $33=$mqr_addr;
              var $call23=_QRinput_encodeBitStream($31, $32, $33);
              $ret=$call23;
              var $34=$ret;
              var $cmp24=((($34))|0) < 0;
              if ($cmp24) { __label__ = 11;; } else { __label__ = 12;; }
              if (__label__ == 11) {
  
                ;
              }
              else if (__label__ == 12) {
  
                var $call27=_BitStream_new();
                var $35=$entry_addr;
                var $bstream28=$35+3;
                HEAP[$bstream28]=$call27;
                var $36=$entry_addr;
                var $bstream29=$36+3;
                var $37=HEAP[$bstream29];
                var $cmp30=((($37))|0)==0;
                if ($cmp30) { __label__ = 13;; } else { __label__ = 14;; }
                if (__label__ == 13) {
  
                  ;
                }
                else if (__label__ == 14) {
  
                  var $38=$entry_addr;
                  var $bstream33=$38+3;
                  var $39=HEAP[$bstream33];
                  var $40=$st1;
                  var $bstream34=$40+3;
                  var $41=HEAP[$bstream34];
                  var $call35=_BitStream_append($39, $41);
                  $ret=$call35;
                  var $42=$ret;
                  var $cmp36=((($42))|0) < 0;
                  if ($cmp36) { __label__ = 15;; } else { __label__ = 16;; }
                  if (__label__ == 15) {
  
                    ;
                  }
                  else if (__label__ == 16) {
  
                    var $43=$entry_addr;
                    var $bstream39=$43+3;
                    var $44=HEAP[$bstream39];
                    var $45=$st2;
                    var $bstream40=$45+3;
                    var $46=HEAP[$bstream40];
                    var $call41=_BitStream_append($44, $46);
                    $ret=$call41;
                    var $47=$ret;
                    var $cmp42=((($47))|0) < 0;
                    if ($cmp42) { __label__ = 17;; } else { __label__ = 18;; }
                    if (__label__ == 17) {
  
                      ;
                    }
                    else if (__label__ == 18) {
  
                      var $48=$st1;
                      _QRinput_List_freeEntry($48);
                      var $49=$st2;
                      _QRinput_List_freeEntry($49);
                      __label__ = 31;break $land_lhs_true$$if_else$5;
                    }
                  }
                }
              }
            }
          }
        }
  
        var $74=$st1;
        _QRinput_List_freeEntry($74);
        var $75=$st2;
        _QRinput_List_freeEntry($75);
        $retval=-1;
        __label__ = 33;break $land_lhs_true$$if_else$5;
      }
    } while(0);
    $return$$if_end62$$if_else$30: do { 
      if (__label__ == 19) {
  
        $ret=0;
        var $50=$entry_addr;
        var $mode45=$50;
        var $51=HEAP[$mode45];
        if ($51 == 0) {
          __label__ = 20;;
        }
        else if ($51 == 1) {
          __label__ = 21;;
        }
        else if ($51 == 2) {
          __label__ = 22;;
        }
        else if ($51 == 3) {
          __label__ = 23;;
        }
        else if ($51 == 4) {
          __label__ = 24;;
        }
        else if ($51 == 5) {
          __label__ = 25;;
        }
        else if ($51 == 7) {
          __label__ = 26;;
        }
        else {
        __label__ = 27;;
        }
        
        $sw_default$$sw_bb$$sw_bb47$$sw_bb49$$sw_bb51$$sw_bb53$$sw_bb55$$sw_bb57$32: do { 
          if (__label__ == 20) {
  
            var $52=$entry_addr;
            var $53=$version_addr;
            var $54=$mqr_addr;
            var $call46=_QRinput_encodeModeNum($52, $53, $54);
            $ret=$call46;
            __label__ = 28;break $sw_default$$sw_bb$$sw_bb47$$sw_bb49$$sw_bb51$$sw_bb53$$sw_bb55$$sw_bb57$32;
          }
          else if (__label__ == 21) {
  
            var $55=$entry_addr;
            var $56=$version_addr;
            var $57=$mqr_addr;
            var $call48=_QRinput_encodeModeAn($55, $56, $57);
            $ret=$call48;
            __label__ = 28;break $sw_default$$sw_bb$$sw_bb47$$sw_bb49$$sw_bb51$$sw_bb53$$sw_bb55$$sw_bb57$32;
          }
          else if (__label__ == 22) {
  
            var $58=$entry_addr;
            var $59=$version_addr;
            var $60=$mqr_addr;
            var $call50=_QRinput_encodeMode8($58, $59, $60);
            $ret=$call50;
            __label__ = 28;break $sw_default$$sw_bb$$sw_bb47$$sw_bb49$$sw_bb51$$sw_bb53$$sw_bb55$$sw_bb57$32;
          }
          else if (__label__ == 23) {
  
            var $61=$entry_addr;
            var $62=$version_addr;
            var $63=$mqr_addr;
            var $call52=_QRinput_encodeModeKanji($61, $62, $63);
            $ret=$call52;
            __label__ = 28;break $sw_default$$sw_bb$$sw_bb47$$sw_bb49$$sw_bb51$$sw_bb53$$sw_bb55$$sw_bb57$32;
          }
          else if (__label__ == 24) {
  
            var $64=$entry_addr;
            var $65=$mqr_addr;
            var $call54=_QRinput_encodeModeStructure($64, $65);
            $ret=$call54;
            __label__ = 28;break $sw_default$$sw_bb$$sw_bb47$$sw_bb49$$sw_bb51$$sw_bb53$$sw_bb55$$sw_bb57$32;
          }
          else if (__label__ == 25) {
  
            var $66=$entry_addr;
            var $67=$version_addr;
            var $call56=_QRinput_encodeModeECI($66, $67);
            $ret=$call56;
            __label__ = 28;break $sw_default$$sw_bb$$sw_bb47$$sw_bb49$$sw_bb51$$sw_bb53$$sw_bb55$$sw_bb57$32;
          }
          else if (__label__ == 26) {
  
            var $68=$entry_addr;
            var $69=$version_addr;
            var $call58=_QRinput_encodeModeFNC1Second($68, $69);
            $ret=$call58;
            __label__ = 27;break $sw_default$$sw_bb$$sw_bb47$$sw_bb49$$sw_bb51$$sw_bb53$$sw_bb55$$sw_bb57$32;
          }
        } while(0);
        if (__label__ == 27) {
  
          ;
        }
  
        var $70=$ret;
        var $cmp59=((($70))|0) < 0;
        if ($cmp59) { __label__ = 29;; } else { __label__ = 30;; }
        if (__label__ == 29) {
  
          $retval=-1;
          __label__ = 33;break $return$$if_end62$$if_else$30;
        }
        else if (__label__ == 30) {
  
          __label__ = 31;break $return$$if_end62$$if_else$30;
        }
      }
    } while(0);
    if (__label__ == 31) {
  
      var $71=$entry_addr;
      var $bstream63=$71+3;
      var $72=HEAP[$bstream63];
      var $length=$72;
      var $73=HEAP[$length];
      $retval=$73;
      ;
    }
  
    var $76=$retval;
    ;
    return $76;
    return null;
  }
  _QRinput_encodeBitStream["X"]=1;

  function _QRinput_lengthOfCode($mode, $version, $bits) {
    ;
    var __label__;
  
    var $mode_addr;
    var $version_addr;
    var $bits_addr;
    var $payload;
    var $size;
    var $chunks;
    var $remain;
    var $maxsize;
    $mode_addr=$mode;
    $version_addr=$version;
    $bits_addr=$bits;
    var $0=$bits_addr;
    var $sub=($0)-4;
    var $1=$mode_addr;
    var $2=$version_addr;
    var $call=_QRspec_lengthIndicator($1, $2);
    var $sub1=($sub)-($call);
    $payload=$sub1;
    var $3=$mode_addr;
    if ($3 == 0) {
      __label__ = 1;;
    }
    else if ($3 == 1) {
      __label__ = 7;;
    }
    else if ($3 == 2) {
      __label__ = 10;;
    }
    else if ($3 == 3) {
      __label__ = 11;;
    }
    else if ($3 == 4) {
      __label__ = 12;;
    }
    else {
    __label__ = 13;;
    }
    
    if (__label__ == 13) {
  
      $size=0;
      ;
    }
    else if (__label__ == 1) {
  
      var $4=$payload;
      var $div=((((($4))|0)/10)|0);
      $chunks=$div;
      var $5=$payload;
      var $6=$chunks;
      var $mul=($6)*10;
      var $sub2=($5)-($mul);
      $remain=$sub2;
      var $7=$chunks;
      var $mul3=($7)*3;
      $size=$mul3;
      var $8=$remain;
      var $cmp=((($8))|0) >= 7;
      if ($cmp) { __label__ = 2;; } else { __label__ = 3;; }
      if (__label__ == 2) {
  
        var $9=$size;
        var $add=($9)+2;
        $size=$add;
        ;
      }
      else if (__label__ == 3) {
  
        var $10=$remain;
        var $cmp4=((($10))|0) >= 4;
        if ($cmp4) { __label__ = 4;; } else { __label__ = 5;; }
        if (__label__ == 4) {
  
          var $11=$size;
          var $add6=($11)+1;
          $size=$add6;
          ;
        }
  
        ;
      }
  
      ;
    }
    else if (__label__ == 7) {
  
      var $12=$payload;
      var $div9=((((($12))|0)/11)|0);
      $chunks=$div9;
      var $13=$payload;
      var $14=$chunks;
      var $mul10=($14)*11;
      var $sub11=($13)-($mul10);
      $remain=$sub11;
      var $15=$chunks;
      var $mul12=(($15)<<1);
      $size=$mul12;
      var $16=$remain;
      var $cmp13=((($16))|0) >= 6;
      if ($cmp13) { __label__ = 8;; } else { __label__ = 9;; }
      if (__label__ == 8) {
  
        var $17=$size;
        var $inc=($17)+1;
        $size=$inc;
        ;
      }
  
      ;
    }
    else if (__label__ == 10) {
  
      var $18=$payload;
      var $div17=((((($18))|0)/8)|0);
      $size=$div17;
      ;
    }
    else if (__label__ == 11) {
  
      var $19=$payload;
      var $div19=((((($19))|0)/13)|0);
      var $mul20=(($div19)<<1);
      $size=$mul20;
      ;
    }
    else if (__label__ == 12) {
  
      var $20=$payload;
      var $div22=((((($20))|0)/8)|0);
      $size=$div22;
      ;
    }
  
    var $21=$mode_addr;
    var $22=$version_addr;
    var $call23=_QRspec_maximumWords($21, $22);
    $maxsize=$call23;
    var $23=$size;
    var $cmp24=((($23))|0) < 0;
    if ($cmp24) { __label__ = 15;; } else { __label__ = 16;; }
    if (__label__ == 15) {
  
      $size=0;
      ;
    }
  
    var $24=$maxsize;
    var $cmp27=((($24))|0) > 0;
    if ($cmp27) { __label__ = 17;; } else { __label__ = 19;; }
    $land_lhs_true$$if_end30$23: do { 
      if (__label__ == 17) {
  
        var $25=$size;
        var $26=$maxsize;
        var $cmp28=((($25))|0) > ((($26))|0);
        if (!($cmp28)) { __label__ = 19;break $land_lhs_true$$if_end30$23; }
  
        var $27=$maxsize;
        $size=$27;
        ;
      }
    } while(0);
  
    var $28=$size;
    ;
    return $28;
    return null;
  }
  _QRinput_lengthOfCode["X"]=1;

  function _QRinput_splitEntry($entry1, $bytes) {
    ;
    var __label__;
  
    var $retval;
    var $entry_addr;
    var $bytes_addr;
    var $e;
    var $ret;
    $entry_addr=$entry1;
    $bytes_addr=$bytes;
    var $0=$entry_addr;
    var $mode=$0;
    var $1=HEAP[$mode];
    var $2=$entry_addr;
    var $size=$2+1;
    var $3=HEAP[$size];
    var $4=$bytes_addr;
    var $sub=($3)-($4);
    var $5=$entry_addr;
    var $data=$5+2;
    var $6=HEAP[$data];
    var $7=$bytes_addr;
    var $add_ptr=$6+$7;
    var $call=_QRinput_List_newEntry($1, $sub, $add_ptr);
    $e=$call;
    var $8=$e;
    var $cmp=((($8))|0)==0;
    if ($cmp) { __label__ = 1;; } else { __label__ = 2;; }
    if (__label__ == 1) {
  
      $retval=-1;
      ;
    }
    else if (__label__ == 2) {
  
      var $9=$entry_addr;
      var $10=$bytes_addr;
      var $call2=_QRinput_List_shrinkEntry($9, $10);
      $ret=$call2;
      var $11=$ret;
      var $cmp3=((($11))|0) < 0;
      if ($cmp3) { __label__ = 3;; } else { __label__ = 4;; }
      if (__label__ == 3) {
  
        var $12=$e;
        _QRinput_List_freeEntry($12);
        $retval=-1;
        ;
      }
      else if (__label__ == 4) {
  
        var $13=$entry_addr;
        var $next=$13+4;
        var $14=HEAP[$next];
        var $15=$e;
        var $next6=$15+4;
        HEAP[$next6]=$14;
        var $16=$e;
        var $17=$entry_addr;
        var $next7=$17+4;
        HEAP[$next7]=$16;
        $retval=0;
        ;
      }
    }
  
    var $18=$retval;
    ;
    return $18;
    return null;
  }
  _QRinput_splitEntry["X"]=1;

  function _QRinput_Struct_insertStructuredAppendHeaders($s) {
    ;
    var __label__;
  
    var $retval;
    var $s_addr;
    var $num;
    var $i;
    var $list;
    $s_addr=$s;
    var $0=$s_addr;
    var $parity=$0+1;
    var $1=HEAP[$parity];
    var $cmp=((($1))|0) < 0;
    if ($cmp) { __label__ = 1;; } else { __label__ = 2;; }
    if (__label__ == 1) {
  
      var $2=$s_addr;
      var $call=_QRinput_Struct_calcParity($2);
      ;
    }
  
    $num=0;
    var $3=$s_addr;
    var $head=$3+2;
    var $4=HEAP[$head];
    $list=$4;
    ;
    $while_cond$5: while(1) { 
  
      var $5=$list;
      var $cmp1=((($5))|0)!=0;
      if (!($cmp1)) { __label__ = 5;break $while_cond$5; }
  
      var $6=$num;
      var $inc=($6)+1;
      $num=$inc;
      var $7=$list;
      var $next=$7+1;
      var $8=HEAP[$next];
      $list=$8;
      __label__ = 3;continue $while_cond$5;
    }
  
    $i=1;
    var $9=$s_addr;
    var $head2=$9+2;
    var $10=HEAP[$head2];
    $list=$10;
    ;
    while(1) { 
  
      var $11=$list;
      var $cmp4=((($11))|0)!=0;
      if (!($cmp4)) { __label__ = 10;break ; }
  
      var $12=$list;
      var $input=$12;
      var $13=HEAP[$input];
      var $14=$num;
      var $15=$i;
      var $16=$s_addr;
      var $parity6=$16+1;
      var $17=HEAP[$parity6];
      var $conv=((($17)) & 255);
      var $call7=_QRinput_insertStructuredAppendHeader($13, $14, $15, $conv);
      var $tobool=((($call7))|0)!=0;
      if ($tobool) { __label__ = 8;break ; }
  
      var $18=$i;
      var $inc10=($18)+1;
      $i=$inc10;
      var $19=$list;
      var $next11=$19+1;
      var $20=HEAP[$next11];
      $list=$20;
      __label__ = 6;continue ;
    }
    if (__label__ == 10) {
  
      $retval=0;
      ;
    }
    else if (__label__ == 8) {
  
      $retval=-1;
      ;
    }
  
    var $21=$retval;
    ;
    return $21;
    return null;
  }
  _QRinput_Struct_insertStructuredAppendHeaders["X"]=1;

  function _QRinput_Struct_calcParity($s) {
    ;
    var __label__;
  
    var $s_addr;
    var $list;
    var $parity;
    $s_addr=$s;
    $parity=0;
    var $0=$s_addr;
    var $head=$0+2;
    var $1=HEAP[$head];
    $list=$1;
    ;
    while(1) { 
  
      var $2=$list;
      var $cmp=((($2))|0)!=0;
      if (!($cmp)) { __label__ = 3;break ; }
  
      var $3=$list;
      var $input=$3;
      var $4=HEAP[$input];
      var $call=_QRinput_calcParity($4);
      var $conv=((($call))&255);
      var $5=$parity;
      var $conv1=((($5))&255);
      var $xor=($conv1) ^ ($conv);
      var $conv2=((($xor)) & 255);
      $parity=$conv2;
      var $6=$list;
      var $next=$6+1;
      var $7=HEAP[$next];
      $list=$7;
      __label__ = 1;continue ;
    }
  
    var $8=$s_addr;
    var $9=$parity;
    _QRinput_Struct_setParity($8, $9);
    var $10=$parity;
    ;
    return $10;
    return null;
  }
  

  function _QRinput_insertStructuredAppendHeader($input, $size, $index, $parity) {
    var __stackBase__  = STACKTOP; STACKTOP += 3; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 3);
    var __label__;
  
    var $retval;
    var $input_addr;
    var $size_addr;
    var $index_addr;
    var $parity_addr;
    var $entry1;
    var $buf=__stackBase__;
    $input_addr=$input;
    $size_addr=$size;
    $index_addr=$index;
    $parity_addr=$parity;
    var $0=$size_addr;
    var $cmp=((($0))|0) > 16;
    if ($cmp) { __label__ = 1;; } else { __label__ = 2;; }
    $if_then$$if_end$2: do { 
      if (__label__ == 1) {
  
        var $call=___errno();
        HEAP[$call]=22;
        $retval=-1;
        ;
      }
      else if (__label__ == 2) {
  
        var $1=$index_addr;
        var $cmp2=((($1))|0) <= 0;
        if ($cmp2) { __label__ = 4;; } else { __label__ = 3;; }
        $if_then4$$lor_lhs_false$5: do { 
          if (__label__ == 3) {
  
            var $2=$index_addr;
            var $cmp3=((($2))|0) > 16;
            if ($cmp3) { __label__ = 4;break $if_then4$$lor_lhs_false$5; }
  
            var $3=$size_addr;
            var $conv=((($3)) & 255);
            var $arrayidx=$buf;
            HEAP[$arrayidx]=$conv;
            var $4=$index_addr;
            var $conv7=((($4)) & 255);
            var $arrayidx8=$buf+1;
            HEAP[$arrayidx8]=$conv7;
            var $5=$parity_addr;
            var $arrayidx9=$buf+2;
            HEAP[$arrayidx9]=$5;
            var $arraydecay=$buf;
            var $call10=_QRinput_List_newEntry(4, 3, $arraydecay);
            $entry1=$call10;
            var $6=$entry1;
            var $cmp11=((($6))|0)==0;
            if ($cmp11) { __label__ = 6;; } else { __label__ = 7;; }
            if (__label__ == 6) {
  
              $retval=-1;
              __label__ = 8;break $if_then$$if_end$2;
            }
            else if (__label__ == 7) {
  
              var $7=$input_addr;
              var $head=$7+2;
              var $8=HEAP[$head];
              var $9=$entry1;
              var $next=$9+4;
              HEAP[$next]=$8;
              var $10=$entry1;
              var $11=$input_addr;
              var $head15=$11+2;
              HEAP[$head15]=$10;
              $retval=0;
              __label__ = 8;break $if_then$$if_end$2;
            }
          }
        } while(0);
  
        var $call5=___errno();
        HEAP[$call5]=22;
        $retval=-1;
        ;
      }
    } while(0);
  
    var $12=$retval;
    STACKTOP = __stackBase__;
    return $12;
    return null;
  }
  _QRinput_insertStructuredAppendHeader["X"]=1;

  function _QRinput_setFNC1First($input) {
    ;
    var __label__;
  
    var $retval;
    var $input_addr;
    $input_addr=$input;
    var $0=$input_addr;
    var $mqr=$0+4;
    var $1=HEAP[$mqr];
    var $tobool=((($1))|0)!=0;
    if ($tobool) { __label__ = 1;; } else { __label__ = 2;; }
    if (__label__ == 1) {
  
      var $call=___errno();
      HEAP[$call]=22;
      $retval=-1;
      ;
    }
    else if (__label__ == 2) {
  
      var $2=$input_addr;
      var $fnc1=$2+5;
      HEAP[$fnc1]=1;
      $retval=0;
      ;
    }
  
    var $3=$retval;
    ;
    return $3;
    return null;
  }
  

  function _QRinput_setFNC1Second($input, $appid) {
    ;
    var __label__;
  
    var $retval;
    var $input_addr;
    var $appid_addr;
    $input_addr=$input;
    $appid_addr=$appid;
    var $0=$input_addr;
    var $mqr=$0+4;
    var $1=HEAP[$mqr];
    var $tobool=((($1))|0)!=0;
    if ($tobool) { __label__ = 1;; } else { __label__ = 2;; }
    if (__label__ == 1) {
  
      var $call=___errno();
      HEAP[$call]=22;
      $retval=-1;
      ;
    }
    else if (__label__ == 2) {
  
      var $2=$input_addr;
      var $fnc1=$2+5;
      HEAP[$fnc1]=2;
      var $3=$appid_addr;
      var $4=$input_addr;
      var $appid1=$4+6;
      HEAP[$appid1]=$3;
      $retval=0;
      ;
    }
  
    var $5=$retval;
    ;
    return $5;
    return null;
  }
  

  function _QRinput_List_shrinkEntry($entry1, $bytes) {
    ;
    var __label__;
  
    var $retval;
    var $entry_addr;
    var $bytes_addr;
    var $data;
    $entry_addr=$entry1;
    $bytes_addr=$bytes;
    var $0=$bytes_addr;
    var $call=_malloc($0);
    $data=$call;
    var $1=$data;
    var $cmp=((($1))|0)==0;
    if ($cmp) { __label__ = 1;; } else { __label__ = 2;; }
    if (__label__ == 1) {
  
      $retval=-1;
      ;
    }
    else if (__label__ == 2) {
  
      var $2=$data;
      var $3=$entry_addr;
      var $data2=$3+2;
      var $4=HEAP[$data2];
      var $5=$bytes_addr;
      assert($5 % 1 === 0, 'memcpy given ' + $5 + ' bytes to copy. Problem with 1=1 corrections perhaps?');for (var mcpi_s=$4,mcpi_e=$4+$5,mcpi_d=$2; mcpi_s<mcpi_e; mcpi_s++, mcpi_d++) {
        HEAP[mcpi_d] = HEAP[mcpi_s];
      };
      var $6=$entry_addr;
      var $data3=$6+2;
      var $7=HEAP[$data3];
      ;
      var $8=$data;
      var $9=$entry_addr;
      var $data4=$9+2;
      HEAP[$data4]=$8;
      var $10=$bytes_addr;
      var $11=$entry_addr;
      var $size=$11+1;
      HEAP[$size]=$10;
      $retval=0;
      ;
    }
  
    var $12=$retval;
    ;
    return $12;
    return null;
  }
  

  function _QRinput_encodeModeNum($entry1, $version, $mqr) {
    ;
    var __label__;
  
    var $retval;
    var $entry_addr;
    var $version_addr;
    var $mqr_addr;
    var $words;
    var $i;
    var $ret;
    var $val;
    $entry_addr=$entry1;
    $version_addr=$version;
    $mqr_addr=$mqr;
    var $call=_BitStream_new();
    var $0=$entry_addr;
    var $bstream=$0+3;
    HEAP[$bstream]=$call;
    var $1=$entry_addr;
    var $bstream2=$1+3;
    var $2=HEAP[$bstream2];
    var $cmp=((($2))|0)==0;
    if ($cmp) { __label__ = 1;; } else { __label__ = 2;; }
    $if_then$$if_end$2: do { 
      if (__label__ == 1) {
  
        $retval=-1;
        ;
      }
      else if (__label__ == 2) {
  
        var $3=$mqr_addr;
        var $tobool=((($3))|0)!=0;
        if ($tobool) { __label__ = 3;; } else { __label__ = 10;; }
        $if_then3$$if_else$5: do { 
          if (__label__ == 3) {
  
            var $4=$version_addr;
            var $cmp4=((($4))|0) > 1;
            if ($cmp4) { __label__ = 4;; } else { __label__ = 7;; }
            if (__label__ == 4) {
  
              var $5=$entry_addr;
              var $bstream6=$5+3;
              var $6=HEAP[$bstream6];
              var $7=$version_addr;
              var $sub=($7)-1;
              var $call7=_BitStream_appendNum($6, $sub, 0);
              $ret=$call7;
              var $8=$ret;
              var $cmp8=((($8))|0) < 0;
              if ($cmp8) { __label__ = 5;; } else { __label__ = 6;; }
              if (__label__ == 5) {
  
                __label__ = 31;break $if_then3$$if_else$5;
              }
              else if (__label__ == 6) {
  
                ;
              }
            }
  
            var $9=$entry_addr;
            var $bstream12=$9+3;
            var $10=HEAP[$bstream12];
            var $11=$version_addr;
            var $call13=_MQRspec_lengthIndicator(0, $11);
            var $12=$entry_addr;
            var $size=$12+1;
            var $13=HEAP[$size];
            var $call14=_BitStream_appendNum($10, $call13, $13);
            $ret=$call14;
            var $14=$ret;
            var $cmp15=((($14))|0) < 0;
            if ($cmp15) { __label__ = 8;; } else { __label__ = 9;; }
            if (__label__ == 8) {
  
              __label__ = 31;break $if_then3$$if_else$5;
            }
            else if (__label__ == 9) {
  
              __label__ = 15;break $if_then3$$if_else$5;
            }
          }
          else if (__label__ == 10) {
  
            var $15=$entry_addr;
            var $bstream18=$15+3;
            var $16=HEAP[$bstream18];
            var $call19=_BitStream_appendNum($16, 4, 1);
            $ret=$call19;
            var $17=$ret;
            var $cmp20=((($17))|0) < 0;
            if ($cmp20) { __label__ = 11;; } else { __label__ = 12;; }
            if (__label__ == 11) {
  
              __label__ = 31;break $if_then3$$if_else$5;
            }
            else if (__label__ == 12) {
  
              var $18=$entry_addr;
              var $bstream23=$18+3;
              var $19=HEAP[$bstream23];
              var $20=$version_addr;
              var $call24=_QRspec_lengthIndicator(0, $20);
              var $21=$entry_addr;
              var $size25=$21+1;
              var $22=HEAP[$size25];
              var $call26=_BitStream_appendNum($19, $call24, $22);
              $ret=$call26;
              var $23=$ret;
              var $cmp27=((($23))|0) < 0;
              if ($cmp27) { __label__ = 13;; } else { __label__ = 14;; }
              if (__label__ == 13) {
  
                __label__ = 31;break $if_then3$$if_else$5;
              }
              else if (__label__ == 14) {
  
                __label__ = 15;break $if_then3$$if_else$5;
              }
            }
          }
        } while(0);
        $ABORT$$if_end30$23: do { 
          if (__label__ == 15) {
  
            var $24=$entry_addr;
            var $size31=$24+1;
            var $25=HEAP[$size31];
            var $div=((((($25))|0)/3)|0);
            $words=$div;
            $i=0;
            ;
            while(1) { 
  
              var $26=$i;
              var $27=$words;
              var $cmp32=((($26))|0) < ((($27))|0);
              if (!($cmp32)) { __label__ = 21;break ; }
  
              var $28=$i;
              var $mul=($28)*3;
              var $29=$entry_addr;
              var $data=$29+2;
              var $30=HEAP[$data];
              var $arrayidx=$30+$mul;
              var $31=HEAP[$arrayidx];
              var $conv=((($31))&255);
              var $sub33=($conv)-48;
              var $mul34=($sub33)*100;
              $val=$mul34;
              var $32=$i;
              var $mul35=($32)*3;
              var $add=($mul35)+1;
              var $33=$entry_addr;
              var $data36=$33+2;
              var $34=HEAP[$data36];
              var $arrayidx37=$34+$add;
              var $35=HEAP[$arrayidx37];
              var $conv38=((($35))&255);
              var $sub39=($conv38)-48;
              var $mul40=($sub39)*10;
              var $36=$val;
              var $add41=($36)+($mul40);
              $val=$add41;
              var $37=$i;
              var $mul42=($37)*3;
              var $add43=($mul42)+2;
              var $38=$entry_addr;
              var $data44=$38+2;
              var $39=HEAP[$data44];
              var $arrayidx45=$39+$add43;
              var $40=HEAP[$arrayidx45];
              var $conv46=((($40))&255);
              var $sub47=($conv46)-48;
              var $41=$val;
              var $add48=($41)+($sub47);
              $val=$add48;
              var $42=$entry_addr;
              var $bstream49=$42+3;
              var $43=HEAP[$bstream49];
              var $44=$val;
              var $call50=_BitStream_appendNum($43, 10, $44);
              $ret=$call50;
              var $45=$ret;
              var $cmp51=((($45))|0) < 0;
              if ($cmp51) { __label__ = 18;break ; }
  
              ;
  
              var $46=$i;
              var $inc=($46)+1;
              $i=$inc;
              __label__ = 16;continue ;
            }
            if (__label__ == 21) {
  
              var $47=$entry_addr;
              var $size55=$47+1;
              var $48=HEAP[$size55];
              var $49=$words;
              var $mul56=($49)*3;
              var $sub57=($48)-($mul56);
              var $cmp58=((($sub57))|0)==1;
              if ($cmp58) { __label__ = 22;; } else { __label__ = 25;; }
              if (__label__ == 22) {
  
                var $50=$words;
                var $mul61=($50)*3;
                var $51=$entry_addr;
                var $data62=$51+2;
                var $52=HEAP[$data62];
                var $arrayidx63=$52+$mul61;
                var $53=HEAP[$arrayidx63];
                var $conv64=((($53))&255);
                var $sub65=($conv64)-48;
                $val=$sub65;
                var $54=$entry_addr;
                var $bstream66=$54+3;
                var $55=HEAP[$bstream66];
                var $56=$val;
                var $call67=_BitStream_appendNum($55, 4, $56);
                $ret=$call67;
                var $57=$ret;
                var $cmp68=((($57))|0) < 0;
                if ($cmp68) { __label__ = 23;; } else { __label__ = 24;; }
                if (__label__ == 23) {
  
                  __label__ = 31;break $ABORT$$if_end30$23;
                }
                else if (__label__ == 24) {
  
                  ;
                }
              }
              else if (__label__ == 25) {
  
                var $58=$entry_addr;
                var $size73=$58+1;
                var $59=HEAP[$size73];
                var $60=$words;
                var $mul74=($60)*3;
                var $sub75=($59)-($mul74);
                var $cmp76=((($sub75))|0)==2;
                if ($cmp76) { __label__ = 26;; } else { __label__ = 29;; }
                if (__label__ == 26) {
  
                  var $61=$words;
                  var $mul79=($61)*3;
                  var $62=$entry_addr;
                  var $data80=$62+2;
                  var $63=HEAP[$data80];
                  var $arrayidx81=$63+$mul79;
                  var $64=HEAP[$arrayidx81];
                  var $conv82=((($64))&255);
                  var $sub83=($conv82)-48;
                  var $mul84=($sub83)*10;
                  $val=$mul84;
                  var $65=$words;
                  var $mul85=($65)*3;
                  var $add86=($mul85)+1;
                  var $66=$entry_addr;
                  var $data87=$66+2;
                  var $67=HEAP[$data87];
                  var $arrayidx88=$67+$add86;
                  var $68=HEAP[$arrayidx88];
                  var $conv89=((($68))&255);
                  var $sub90=($conv89)-48;
                  var $69=$val;
                  var $add91=($69)+($sub90);
                  $val=$add91;
                  var $70=$entry_addr;
                  var $bstream92=$70+3;
                  var $71=HEAP[$bstream92];
                  var $72=$val;
                  var $call93=_BitStream_appendNum($71, 7, $72);
                  var $73=$ret;
                  var $cmp94=((($73))|0) < 0;
                  if ($cmp94) { __label__ = 27;; } else { __label__ = 28;; }
                  if (__label__ == 27) {
  
                    __label__ = 31;break $ABORT$$if_end30$23;
                  }
                  else if (__label__ == 28) {
  
                    ;
                  }
                }
  
                ;
              }
  
              $retval=0;
              __label__ = 32;break $if_then$$if_end$2;
            }
            else if (__label__ == 18) {
  
              ;
            }
          }
        } while(0);
  
        var $74=$entry_addr;
        var $bstream100=$74+3;
        var $75=HEAP[$bstream100];
        _BitStream_free($75);
        var $76=$entry_addr;
        var $bstream101=$76+3;
        HEAP[$bstream101]=0;
        $retval=-1;
        ;
      }
    } while(0);
  
    var $77=$retval;
    ;
    return $77;
    return null;
  }
  _QRinput_encodeModeNum["X"]=1;

  function _QRinput_encodeModeAn($entry1, $version, $mqr) {
    ;
    var __label__;
    var __lastLabel__ = null;
  
    var $retval;
    var $entry_addr;
    var $version_addr;
    var $mqr_addr;
    var $words;
    var $i;
    var $ret;
    var $val;
    $entry_addr=$entry1;
    $version_addr=$version;
    $mqr_addr=$mqr;
    var $call=_BitStream_new();
    var $0=$entry_addr;
    var $bstream=$0+3;
    HEAP[$bstream]=$call;
    var $1=$entry_addr;
    var $bstream2=$1+3;
    var $2=HEAP[$bstream2];
    var $cmp=((($2))|0)==0;
    if ($cmp) { __label__ = 1;; } else { __label__ = 2;; }
    $if_then$$if_end$2: do { 
      if (__label__ == 1) {
  
        $retval=-1;
        ;
      }
      else if (__label__ == 2) {
  
        var $3=$mqr_addr;
        var $tobool=((($3))|0)!=0;
        if ($tobool) { __label__ = 3;; } else { __label__ = 10;; }
        $if_then3$$if_else$5: do { 
          if (__label__ == 3) {
  
            var $4=$version_addr;
            var $cmp4=((($4))|0) < 2;
            if ($cmp4) { __label__ = 4;; } else { __label__ = 5;; }
            if (__label__ == 4) {
  
              var $call6=___errno();
              HEAP[$call6]=22;
              __label__ = 35;break $if_then3$$if_else$5;
            }
            else if (__label__ == 5) {
  
              var $5=$entry_addr;
              var $bstream8=$5+3;
              var $6=HEAP[$bstream8];
              var $7=$version_addr;
              var $sub=($7)-1;
              var $call9=_BitStream_appendNum($6, $sub, 1);
              $ret=$call9;
              var $8=$ret;
              var $cmp10=((($8))|0) < 0;
              if ($cmp10) { __label__ = 6;; } else { __label__ = 7;; }
              if (__label__ == 6) {
  
                __label__ = 35;break $if_then3$$if_else$5;
              }
              else if (__label__ == 7) {
  
                var $9=$entry_addr;
                var $bstream13=$9+3;
                var $10=HEAP[$bstream13];
                var $11=$version_addr;
                var $call14=_MQRspec_lengthIndicator(1, $11);
                var $12=$entry_addr;
                var $size=$12+1;
                var $13=HEAP[$size];
                var $call15=_BitStream_appendNum($10, $call14, $13);
                $ret=$call15;
                var $14=$ret;
                var $cmp16=((($14))|0) < 0;
                if ($cmp16) { __label__ = 8;; } else { __label__ = 9;; }
                if (__label__ == 8) {
  
                  __label__ = 35;break $if_then3$$if_else$5;
                }
                else if (__label__ == 9) {
  
                  __label__ = 15;break $if_then3$$if_else$5;
                }
              }
            }
          }
          else if (__label__ == 10) {
  
            var $15=$entry_addr;
            var $bstream19=$15+3;
            var $16=HEAP[$bstream19];
            var $call20=_BitStream_appendNum($16, 4, 2);
            $ret=$call20;
            var $17=$ret;
            var $cmp21=((($17))|0) < 0;
            if ($cmp21) { __label__ = 11;; } else { __label__ = 12;; }
            if (__label__ == 11) {
  
              __label__ = 35;break $if_then3$$if_else$5;
            }
            else if (__label__ == 12) {
  
              var $18=$entry_addr;
              var $bstream24=$18+3;
              var $19=HEAP[$bstream24];
              var $20=$version_addr;
              var $call25=_QRspec_lengthIndicator(1, $20);
              var $21=$entry_addr;
              var $size26=$21+1;
              var $22=HEAP[$size26];
              var $call27=_BitStream_appendNum($19, $call25, $22);
              $ret=$call27;
              var $23=$ret;
              var $cmp28=((($23))|0) < 0;
              if ($cmp28) { __label__ = 13;; } else { __label__ = 14;; }
              if (__label__ == 13) {
  
                __label__ = 35;break $if_then3$$if_else$5;
              }
              else if (__label__ == 14) {
  
                __label__ = 15;break $if_then3$$if_else$5;
              }
            }
          }
        } while(0);
        $ABORT$$if_end31$23: do { 
          if (__label__ == 15) {
  
            var $24=$entry_addr;
            var $size32=$24+1;
            var $25=HEAP[$size32];
            var $div=((((($25))|0)/2)|0);
            $words=$div;
            $i=0;
            ;
            while(1) { 
  
              var $26=$i;
              var $27=$words;
              var $cmp33=((($26))|0) < ((($27))|0);
              if (!($cmp33)) { __label__ = 27;break ; }
  
              var $28=$i;
              var $mul=(($28)<<1);
              var $29=$entry_addr;
              var $data=$29+2;
              var $30=HEAP[$data];
              var $arrayidx=$30+$mul;
              var $31=HEAP[$arrayidx];
              var $conv=((($31))&255);
              var $and=($conv) & 128;
              var $tobool34=((($and))|0)!=0;
              if ($tobool34) { __label__ = 18;; } else { __label__ = 19;; }
              if (__label__ == 18) {
  
                __lastLabel__ = 18; ;
              }
              else if (__label__ == 19) {
  
                var $32=$i;
                var $mul35=(($32)<<1);
                var $33=$entry_addr;
                var $data36=$33+2;
                var $34=HEAP[$data36];
                var $arrayidx37=$34+$mul35;
                var $35=HEAP[$arrayidx37];
                var $conv38=((($35))&255);
                var $arrayidx39=_QRinput_anTable+$conv38;
                var $36=HEAP[$arrayidx39];
                var $conv40=(tempInt=(($36)),(tempInt>=128?tempInt-256:tempInt));
                __lastLabel__ = 19; ;
              }
  
              var $cond=__lastLabel__ == 18 ? -1 : ($conv40);
              var $mul41=($cond)*45;
              $val=$mul41;
              var $37=$i;
              var $mul42=(($37)<<1);
              var $add=($mul42)+1;
              var $38=$entry_addr;
              var $data43=$38+2;
              var $39=HEAP[$data43];
              var $arrayidx44=$39+$add;
              var $40=HEAP[$arrayidx44];
              var $conv45=((($40))&255);
              var $and46=($conv45) & 128;
              var $tobool47=((($and46))|0)!=0;
              if ($tobool47) { __label__ = 21;; } else { __label__ = 22;; }
              if (__label__ == 21) {
  
                __lastLabel__ = 21; ;
              }
              else if (__label__ == 22) {
  
                var $41=$i;
                var $mul50=(($41)<<1);
                var $add51=($mul50)+1;
                var $42=$entry_addr;
                var $data52=$42+2;
                var $43=HEAP[$data52];
                var $arrayidx53=$43+$add51;
                var $44=HEAP[$arrayidx53];
                var $conv54=((($44))&255);
                var $arrayidx55=_QRinput_anTable+$conv54;
                var $45=HEAP[$arrayidx55];
                var $conv56=(tempInt=(($45)),(tempInt>=128?tempInt-256:tempInt));
                __lastLabel__ = 22; ;
              }
  
              var $cond58=__lastLabel__ == 21 ? -1 : ($conv56);
              var $46=$val;
              var $add59=($46)+($cond58);
              $val=$add59;
              var $47=$entry_addr;
              var $bstream60=$47+3;
              var $48=HEAP[$bstream60];
              var $49=$val;
              var $call61=_BitStream_appendNum($48, 11, $49);
              $ret=$call61;
              var $50=$ret;
              var $cmp62=((($50))|0) < 0;
              if ($cmp62) { __label__ = 24;break ; }
  
              ;
  
              var $51=$i;
              var $inc=($51)+1;
              $i=$inc;
              __label__ = 16;continue ;
            }
            if (__label__ == 27) {
  
              var $52=$entry_addr;
              var $size66=$52+1;
              var $53=HEAP[$size66];
              var $and67=($53) & 1;
              var $tobool68=((($and67))|0)!=0;
              if ($tobool68) { __label__ = 28;; } else { __label__ = 34;; }
              if (__label__ == 28) {
  
                var $54=$words;
                var $mul70=(($54)<<1);
                var $55=$entry_addr;
                var $data71=$55+2;
                var $56=HEAP[$data71];
                var $arrayidx72=$56+$mul70;
                var $57=HEAP[$arrayidx72];
                var $conv73=((($57))&255);
                var $and74=($conv73) & 128;
                var $tobool75=((($and74))|0)!=0;
                if ($tobool75) { __label__ = 29;; } else { __label__ = 30;; }
                if (__label__ == 29) {
  
                  __lastLabel__ = 29; ;
                }
                else if (__label__ == 30) {
  
                  var $58=$words;
                  var $mul78=(($58)<<1);
                  var $59=$entry_addr;
                  var $data79=$59+2;
                  var $60=HEAP[$data79];
                  var $arrayidx80=$60+$mul78;
                  var $61=HEAP[$arrayidx80];
                  var $conv81=((($61))&255);
                  var $arrayidx82=_QRinput_anTable+$conv81;
                  var $62=HEAP[$arrayidx82];
                  var $conv83=(tempInt=(($62)),(tempInt>=128?tempInt-256:tempInt));
                  __lastLabel__ = 30; ;
                }
  
                var $cond85=__lastLabel__ == 29 ? -1 : ($conv83);
                $val=$cond85;
                var $63=$entry_addr;
                var $bstream86=$63+3;
                var $64=HEAP[$bstream86];
                var $65=$val;
                var $call87=_BitStream_appendNum($64, 6, $65);
                $ret=$call87;
                var $66=$ret;
                var $cmp88=((($66))|0) < 0;
                if ($cmp88) { __label__ = 32;; } else { __label__ = 33;; }
                if (__label__ == 32) {
  
                  __label__ = 35;break $ABORT$$if_end31$23;
                }
                else if (__label__ == 33) {
  
                  ;
                }
              }
  
              $retval=0;
              __label__ = 36;break $if_then$$if_end$2;
            }
            else if (__label__ == 24) {
  
              ;
            }
          }
        } while(0);
  
        var $67=$entry_addr;
        var $bstream93=$67+3;
        var $68=HEAP[$bstream93];
        _BitStream_free($68);
        var $69=$entry_addr;
        var $bstream94=$69+3;
        HEAP[$bstream94]=0;
        $retval=-1;
        ;
      }
    } while(0);
  
    var $70=$retval;
    ;
    return $70;
    return null;
  }
  _QRinput_encodeModeAn["X"]=1;

  function _QRinput_encodeMode8($entry1, $version, $mqr) {
    ;
    var __label__;
  
    var $retval;
    var $entry_addr;
    var $version_addr;
    var $mqr_addr;
    var $ret;
    $entry_addr=$entry1;
    $version_addr=$version;
    $mqr_addr=$mqr;
    var $call=_BitStream_new();
    var $0=$entry_addr;
    var $bstream=$0+3;
    HEAP[$bstream]=$call;
    var $1=$entry_addr;
    var $bstream2=$1+3;
    var $2=HEAP[$bstream2];
    var $cmp=((($2))|0)==0;
    if ($cmp) { __label__ = 1;; } else { __label__ = 2;; }
    $if_then$$if_end$2: do { 
      if (__label__ == 1) {
  
        $retval=-1;
        ;
      }
      else if (__label__ == 2) {
  
        var $3=$mqr_addr;
        var $tobool=((($3))|0)!=0;
        if ($tobool) { __label__ = 3;; } else { __label__ = 10;; }
        $if_then3$$if_else$5: do { 
          if (__label__ == 3) {
  
            var $4=$version_addr;
            var $cmp4=((($4))|0) < 3;
            if ($cmp4) { __label__ = 4;; } else { __label__ = 5;; }
            if (__label__ == 4) {
  
              var $call6=___errno();
              HEAP[$call6]=22;
              __label__ = 18;break $if_then3$$if_else$5;
            }
            else if (__label__ == 5) {
  
              var $5=$entry_addr;
              var $bstream8=$5+3;
              var $6=HEAP[$bstream8];
              var $7=$version_addr;
              var $sub=($7)-1;
              var $call9=_BitStream_appendNum($6, $sub, 2);
              $ret=$call9;
              var $8=$ret;
              var $cmp10=((($8))|0) < 0;
              if ($cmp10) { __label__ = 6;; } else { __label__ = 7;; }
              if (__label__ == 6) {
  
                __label__ = 18;break $if_then3$$if_else$5;
              }
              else if (__label__ == 7) {
  
                var $9=$entry_addr;
                var $bstream13=$9+3;
                var $10=HEAP[$bstream13];
                var $11=$version_addr;
                var $call14=_MQRspec_lengthIndicator(2, $11);
                var $12=$entry_addr;
                var $size=$12+1;
                var $13=HEAP[$size];
                var $call15=_BitStream_appendNum($10, $call14, $13);
                $ret=$call15;
                var $14=$ret;
                var $cmp16=((($14))|0) < 0;
                if ($cmp16) { __label__ = 8;; } else { __label__ = 9;; }
                if (__label__ == 8) {
  
                  __label__ = 18;break $if_then3$$if_else$5;
                }
                else if (__label__ == 9) {
  
                  __label__ = 15;break $if_then3$$if_else$5;
                }
              }
            }
          }
          else if (__label__ == 10) {
  
            var $15=$entry_addr;
            var $bstream19=$15+3;
            var $16=HEAP[$bstream19];
            var $call20=_BitStream_appendNum($16, 4, 4);
            $ret=$call20;
            var $17=$ret;
            var $cmp21=((($17))|0) < 0;
            if ($cmp21) { __label__ = 11;; } else { __label__ = 12;; }
            if (__label__ == 11) {
  
              __label__ = 18;break $if_then3$$if_else$5;
            }
            else if (__label__ == 12) {
  
              var $18=$entry_addr;
              var $bstream24=$18+3;
              var $19=HEAP[$bstream24];
              var $20=$version_addr;
              var $call25=_QRspec_lengthIndicator(2, $20);
              var $21=$entry_addr;
              var $size26=$21+1;
              var $22=HEAP[$size26];
              var $call27=_BitStream_appendNum($19, $call25, $22);
              $ret=$call27;
              var $23=$ret;
              var $cmp28=((($23))|0) < 0;
              if ($cmp28) { __label__ = 13;; } else { __label__ = 14;; }
              if (__label__ == 13) {
  
                __label__ = 18;break $if_then3$$if_else$5;
              }
              else if (__label__ == 14) {
  
                __label__ = 15;break $if_then3$$if_else$5;
              }
            }
          }
        } while(0);
        if (__label__ == 15) {
  
          var $24=$entry_addr;
          var $bstream32=$24+3;
          var $25=HEAP[$bstream32];
          var $26=$entry_addr;
          var $size33=$26+1;
          var $27=HEAP[$size33];
          var $28=$entry_addr;
          var $data=$28+2;
          var $29=HEAP[$data];
          var $call34=_BitStream_appendBytes($25, $27, $29);
          $ret=$call34;
          var $30=$ret;
          var $cmp35=((($30))|0) < 0;
          if ($cmp35) { __label__ = 16;; } else { __label__ = 17;; }
          if (__label__ == 16) {
  
            ;
          }
          else if (__label__ == 17) {
  
            $retval=0;
            __label__ = 19;break $if_then$$if_end$2;
          }
        }
  
        var $31=$entry_addr;
        var $bstream38=$31+3;
        var $32=HEAP[$bstream38];
        _BitStream_free($32);
        var $33=$entry_addr;
        var $bstream39=$33+3;
        HEAP[$bstream39]=0;
        $retval=-1;
        ;
      }
    } while(0);
  
    var $34=$retval;
    ;
    return $34;
    return null;
  }
  _QRinput_encodeMode8["X"]=1;

  function _QRinput_encodeModeKanji($entry1, $version, $mqr) {
    ;
    var __label__;
  
    var $retval;
    var $entry_addr;
    var $version_addr;
    var $mqr_addr;
    var $ret;
    var $i;
    var $val;
    var $h;
    $entry_addr=$entry1;
    $version_addr=$version;
    $mqr_addr=$mqr;
    var $call=_BitStream_new();
    var $0=$entry_addr;
    var $bstream=$0+3;
    HEAP[$bstream]=$call;
    var $1=$entry_addr;
    var $bstream2=$1+3;
    var $2=HEAP[$bstream2];
    var $cmp=((($2))|0)==0;
    if ($cmp) { __label__ = 1;; } else { __label__ = 2;; }
    $if_then$$if_end$2: do { 
      if (__label__ == 1) {
  
        $retval=-1;
        ;
      }
      else if (__label__ == 2) {
  
        var $3=$mqr_addr;
        var $tobool=((($3))|0)!=0;
        if ($tobool) { __label__ = 3;; } else { __label__ = 10;; }
        $if_then3$$if_else$5: do { 
          if (__label__ == 3) {
  
            var $4=$version_addr;
            var $cmp4=((($4))|0) < 2;
            if ($cmp4) { __label__ = 4;; } else { __label__ = 5;; }
            if (__label__ == 4) {
  
              var $call6=___errno();
              HEAP[$call6]=22;
              __label__ = 25;break $if_then3$$if_else$5;
            }
            else if (__label__ == 5) {
  
              var $5=$entry_addr;
              var $bstream8=$5+3;
              var $6=HEAP[$bstream8];
              var $7=$version_addr;
              var $sub=($7)-1;
              var $call9=_BitStream_appendNum($6, $sub, 3);
              $ret=$call9;
              var $8=$ret;
              var $cmp10=((($8))|0) < 0;
              if ($cmp10) { __label__ = 6;; } else { __label__ = 7;; }
              if (__label__ == 6) {
  
                __label__ = 25;break $if_then3$$if_else$5;
              }
              else if (__label__ == 7) {
  
                var $9=$entry_addr;
                var $bstream13=$9+3;
                var $10=HEAP[$bstream13];
                var $11=$version_addr;
                var $call14=_MQRspec_lengthIndicator(3, $11);
                var $12=$entry_addr;
                var $size=$12+1;
                var $13=HEAP[$size];
                var $div=((((($13))|0)/2)|0);
                var $call15=_BitStream_appendNum($10, $call14, $div);
                $ret=$call15;
                var $14=$ret;
                var $cmp16=((($14))|0) < 0;
                if ($cmp16) { __label__ = 8;; } else { __label__ = 9;; }
                if (__label__ == 8) {
  
                  __label__ = 25;break $if_then3$$if_else$5;
                }
                else if (__label__ == 9) {
  
                  __label__ = 15;break $if_then3$$if_else$5;
                }
              }
            }
          }
          else if (__label__ == 10) {
  
            var $15=$entry_addr;
            var $bstream19=$15+3;
            var $16=HEAP[$bstream19];
            var $call20=_BitStream_appendNum($16, 4, 8);
            $ret=$call20;
            var $17=$ret;
            var $cmp21=((($17))|0) < 0;
            if ($cmp21) { __label__ = 11;; } else { __label__ = 12;; }
            if (__label__ == 11) {
  
              __label__ = 25;break $if_then3$$if_else$5;
            }
            else if (__label__ == 12) {
  
              var $18=$entry_addr;
              var $bstream24=$18+3;
              var $19=HEAP[$bstream24];
              var $20=$version_addr;
              var $call25=_QRspec_lengthIndicator(3, $20);
              var $21=$entry_addr;
              var $size26=$21+1;
              var $22=HEAP[$size26];
              var $div27=((((($22))|0)/2)|0);
              var $call28=_BitStream_appendNum($19, $call25, $div27);
              $ret=$call28;
              var $23=$ret;
              var $cmp29=((($23))|0) < 0;
              if ($cmp29) { __label__ = 13;; } else { __label__ = 14;; }
              if (__label__ == 13) {
  
                __label__ = 25;break $if_then3$$if_else$5;
              }
              else if (__label__ == 14) {
  
                __label__ = 15;break $if_then3$$if_else$5;
              }
            }
          }
        } while(0);
        if (__label__ == 15) {
  
          $i=0;
          ;
          while(1) { 
  
            var $24=$i;
            var $25=$entry_addr;
            var $size33=$25+1;
            var $26=HEAP[$size33];
            var $cmp34=((($24))|0) < ((($26))|0);
            if (!($cmp34)) { __label__ = 24;break ; }
  
            var $27=$i;
            var $28=$entry_addr;
            var $data=$28+2;
            var $29=HEAP[$data];
            var $arrayidx=$29+$27;
            var $30=HEAP[$arrayidx];
            var $conv=((($30))&255);
            var $shl=($conv) << 8;
            var $31=$i;
            var $add=($31)+1;
            var $32=$entry_addr;
            var $data35=$32+2;
            var $33=HEAP[$data35];
            var $arrayidx36=$33+$add;
            var $34=HEAP[$arrayidx36];
            var $conv37=((($34))&255);
            var $or=($shl) | ($conv37);
            $val=$or;
            var $35=$val;
            var $cmp38=((($35))>>>0) <= 40956;
            if ($cmp38) { __label__ = 18;; } else { __label__ = 19;; }
            if (__label__ == 18) {
  
              var $36=$val;
              var $sub41=($36)-33088;
              $val=$sub41;
              ;
            }
            else if (__label__ == 19) {
  
              var $37=$val;
              var $sub43=($37)-49472;
              $val=$sub43;
              ;
            }
  
            var $38=$val;
            var $shr=($38) >>> 8;
            var $mul=($shr)*192;
            $h=$mul;
            var $39=$val;
            var $and=($39) & 255;
            var $40=$h;
            var $add45=($and)+($40);
            $val=$add45;
            var $41=$entry_addr;
            var $bstream46=$41+3;
            var $42=HEAP[$bstream46];
            var $43=$val;
            var $call47=_BitStream_appendNum($42, 13, $43);
            $ret=$call47;
            var $44=$ret;
            var $cmp48=((($44))|0) < 0;
            if ($cmp48) { __label__ = 21;break ; }
  
            ;
  
            var $45=$i;
            var $add52=($45)+2;
            $i=$add52;
            __label__ = 16;continue ;
          }
          if (__label__ == 24) {
  
            $retval=0;
            __label__ = 26;break $if_then$$if_end$2;
          }
          else if (__label__ == 21) {
  
            ;
          }
        }
  
        var $46=$entry_addr;
        var $bstream53=$46+3;
        var $47=HEAP[$bstream53];
        _BitStream_free($47);
        var $48=$entry_addr;
        var $bstream54=$48+3;
        HEAP[$bstream54]=0;
        $retval=-1;
        ;
      }
    } while(0);
  
    var $49=$retval;
    ;
    return $49;
    return null;
  }
  _QRinput_encodeModeKanji["X"]=1;

  function _QRinput_encodeModeStructure($entry1, $mqr) {
    ;
    var __label__;
  
    var $retval;
    var $entry_addr;
    var $mqr_addr;
    var $ret;
    $entry_addr=$entry1;
    $mqr_addr=$mqr;
    var $0=$mqr_addr;
    var $tobool=((($0))|0)!=0;
    if ($tobool) { __label__ = 1;; } else { __label__ = 2;; }
    $if_then$$if_end$2: do { 
      if (__label__ == 1) {
  
        var $call=___errno();
        HEAP[$call]=22;
        $retval=-1;
        ;
      }
      else if (__label__ == 2) {
  
        var $call2=_BitStream_new();
        var $1=$entry_addr;
        var $bstream=$1+3;
        HEAP[$bstream]=$call2;
        var $2=$entry_addr;
        var $bstream3=$2+3;
        var $3=HEAP[$bstream3];
        var $cmp=((($3))|0)==0;
        if ($cmp) { __label__ = 3;; } else { __label__ = 4;; }
        if (__label__ == 3) {
  
          $retval=-1;
          ;
        }
        else if (__label__ == 4) {
  
          var $4=$entry_addr;
          var $bstream6=$4+3;
          var $5=HEAP[$bstream6];
          var $call7=_BitStream_appendNum($5, 4, 3);
          $ret=$call7;
          var $6=$ret;
          var $cmp8=((($6))|0) < 0;
          if ($cmp8) { __label__ = 5;; } else { __label__ = 6;; }
          if (__label__ == 5) {
  
            ;
          }
          else if (__label__ == 6) {
  
            var $7=$entry_addr;
            var $bstream11=$7+3;
            var $8=HEAP[$bstream11];
            var $9=$entry_addr;
            var $data=$9+2;
            var $10=HEAP[$data];
            var $arrayidx=$10+1;
            var $11=HEAP[$arrayidx];
            var $conv=((($11))&255);
            var $sub=($conv)-1;
            var $call12=_BitStream_appendNum($8, 4, $sub);
            $ret=$call12;
            var $12=$ret;
            var $cmp13=((($12))|0) < 0;
            if ($cmp13) { __label__ = 7;; } else { __label__ = 8;; }
            if (__label__ == 7) {
  
              ;
            }
            else if (__label__ == 8) {
  
              var $13=$entry_addr;
              var $bstream17=$13+3;
              var $14=HEAP[$bstream17];
              var $15=$entry_addr;
              var $data18=$15+2;
              var $16=HEAP[$data18];
              var $arrayidx19=$16;
              var $17=HEAP[$arrayidx19];
              var $conv20=((($17))&255);
              var $sub21=($conv20)-1;
              var $call22=_BitStream_appendNum($14, 4, $sub21);
              $ret=$call22;
              var $18=$ret;
              var $cmp23=((($18))|0) < 0;
              if ($cmp23) { __label__ = 9;; } else { __label__ = 10;; }
              if (__label__ == 9) {
  
                ;
              }
              else if (__label__ == 10) {
  
                var $19=$entry_addr;
                var $bstream27=$19+3;
                var $20=HEAP[$bstream27];
                var $21=$entry_addr;
                var $data28=$21+2;
                var $22=HEAP[$data28];
                var $arrayidx29=$22+2;
                var $23=HEAP[$arrayidx29];
                var $conv30=((($23))&255);
                var $call31=_BitStream_appendNum($20, 8, $conv30);
                $ret=$call31;
                var $24=$ret;
                var $cmp32=((($24))|0) < 0;
                if ($cmp32) { __label__ = 11;; } else { __label__ = 12;; }
                if (__label__ == 11) {
  
                  ;
                }
                else if (__label__ == 12) {
  
                  $retval=0;
                  __label__ = 14;break $if_then$$if_end$2;
                }
              }
            }
          }
  
          var $25=$entry_addr;
          var $bstream36=$25+3;
          var $26=HEAP[$bstream36];
          _BitStream_free($26);
          var $27=$entry_addr;
          var $bstream37=$27+3;
          HEAP[$bstream37]=0;
          $retval=-1;
          ;
        }
      }
    } while(0);
  
    var $28=$retval;
    ;
    return $28;
    return null;
  }
  _QRinput_encodeModeStructure["X"]=1;

  function _QRinput_encodeModeECI($entry1, $version) {
    ;
    var __label__;
  
    var $retval;
    var $entry_addr;
    var $version_addr;
    var $ret;
    var $words;
    var $ecinum;
    var $code;
    $entry_addr=$entry1;
    $version_addr=$version;
    var $call=_BitStream_new();
    var $0=$entry_addr;
    var $bstream=$0+3;
    HEAP[$bstream]=$call;
    var $1=$entry_addr;
    var $bstream2=$1+3;
    var $2=HEAP[$bstream2];
    var $cmp=((($2))|0)==0;
    if ($cmp) { __label__ = 1;; } else { __label__ = 2;; }
    $if_then$$if_end$2: do { 
      if (__label__ == 1) {
  
        $retval=-1;
        ;
      }
      else if (__label__ == 2) {
  
        var $3=$entry_addr;
        var $data=$3+2;
        var $4=HEAP[$data];
        var $call3=_QRinput_decodeECIfromByteArray($4);
        $ecinum=$call3;
        var $5=$ecinum;
        var $cmp4=((($5))>>>0) < 128;
        if ($cmp4) { __label__ = 3;; } else { __label__ = 4;; }
        if (__label__ == 3) {
  
          $words=1;
          var $6=$ecinum;
          $code=$6;
          ;
        }
        else if (__label__ == 4) {
  
          var $7=$ecinum;
          var $cmp6=((($7))>>>0) < 16384;
          if ($cmp6) { __label__ = 5;; } else { __label__ = 6;; }
          if (__label__ == 5) {
  
            $words=2;
            var $8=$ecinum;
            var $add=($8)+32768;
            $code=$add;
            ;
          }
          else if (__label__ == 6) {
  
            $words=3;
            var $9=$ecinum;
            var $add9=($9)+786432;
            $code=$add9;
            ;
          }
  
          ;
        }
  
        var $10=$entry_addr;
        var $bstream12=$10+3;
        var $11=HEAP[$bstream12];
        var $call13=_BitStream_appendNum($11, 4, 7);
        $ret=$call13;
        var $12=$ret;
        var $cmp14=((($12))|0) < 0;
        if ($cmp14) { __label__ = 9;; } else { __label__ = 10;; }
        if (__label__ == 9) {
  
          ;
        }
        else if (__label__ == 10) {
  
          var $13=$entry_addr;
          var $bstream17=$13+3;
          var $14=HEAP[$bstream17];
          var $15=$words;
          var $mul=(($15)<<3);
          var $16=$code;
          var $call18=_BitStream_appendNum($14, $mul, $16);
          $ret=$call18;
          var $17=$ret;
          var $cmp19=((($17))|0) < 0;
          if ($cmp19) { __label__ = 11;; } else { __label__ = 12;; }
          if (__label__ == 11) {
  
            ;
          }
          else if (__label__ == 12) {
  
            $retval=0;
            __label__ = 14;break $if_then$$if_end$2;
          }
        }
  
        var $18=$entry_addr;
        var $bstream22=$18+3;
        var $19=HEAP[$bstream22];
        _BitStream_free($19);
        var $20=$entry_addr;
        var $bstream23=$20+3;
        HEAP[$bstream23]=0;
        $retval=-1;
        ;
      }
    } while(0);
  
    var $21=$retval;
    ;
    return $21;
    return null;
  }
  _QRinput_encodeModeECI["X"]=1;

  function _QRinput_encodeModeFNC1Second($entry1, $version) {
    ;
    var __label__;
  
    var $retval;
    var $entry_addr;
    var $version_addr;
    var $ret;
    $entry_addr=$entry1;
    $version_addr=$version;
    var $call=_BitStream_new();
    var $0=$entry_addr;
    var $bstream=$0+3;
    HEAP[$bstream]=$call;
    var $1=$entry_addr;
    var $bstream2=$1+3;
    var $2=HEAP[$bstream2];
    var $cmp=((($2))|0)==0;
    if ($cmp) { __label__ = 1;; } else { __label__ = 2;; }
    $if_then$$if_end$2: do { 
      if (__label__ == 1) {
  
        $retval=-1;
        ;
      }
      else if (__label__ == 2) {
  
        var $3=$entry_addr;
        var $bstream3=$3+3;
        var $4=HEAP[$bstream3];
        var $call4=_BitStream_appendNum($4, 4, 9);
        $ret=$call4;
        var $5=$ret;
        var $cmp5=((($5))|0) < 0;
        if ($cmp5) { __label__ = 3;; } else { __label__ = 4;; }
        if (__label__ == 3) {
  
          ;
        }
        else if (__label__ == 4) {
  
          var $6=$entry_addr;
          var $bstream8=$6+3;
          var $7=HEAP[$bstream8];
          var $8=$entry_addr;
          var $data=$8+2;
          var $9=HEAP[$data];
          var $call9=_BitStream_appendBytes($7, 1, $9);
          $ret=$call9;
          var $10=$ret;
          var $cmp10=((($10))|0) < 0;
          if ($cmp10) { __label__ = 5;; } else { __label__ = 6;; }
          if (__label__ == 5) {
  
            ;
          }
          else if (__label__ == 6) {
  
            $retval=0;
            __label__ = 8;break $if_then$$if_end$2;
          }
        }
  
        var $11=$entry_addr;
        var $bstream13=$11+3;
        var $12=HEAP[$bstream13];
        _BitStream_free($12);
        var $13=$entry_addr;
        var $bstream14=$13+3;
        HEAP[$bstream14]=0;
        $retval=-1;
        ;
      }
    } while(0);
  
    var $14=$retval;
    ;
    return $14;
    return null;
  }
  _QRinput_encodeModeFNC1Second["X"]=1;

  function _QRinput_mergeBitStream($input) {
    ;
    var __label__;
  
    var $retval;
    var $input_addr;
    var $bstream;
    var $list;
    var $ret;
    $input_addr=$input;
    var $0=$input_addr;
    var $mqr=$0+4;
    var $1=HEAP[$mqr];
    var $tobool=((($1))|0)!=0;
    if ($tobool) { __label__ = 1;; } else { __label__ = 4;; }
    $if_then$$if_else$2: do { 
      if (__label__ == 1) {
  
        var $2=$input_addr;
        var $call=_QRinput_createBitStream($2);
        var $cmp=((($call))|0) < 0;
        if ($cmp) { __label__ = 2;; } else { __label__ = 3;; }
        if (__label__ == 2) {
  
          $retval=0;
          __label__ = 19;break $if_then$$if_else$2;
        }
        else if (__label__ == 3) {
  
          __label__ = 11;break $if_then$$if_else$2;
        }
      }
      else if (__label__ == 4) {
  
        var $3=$input_addr;
        var $fnc1=$3+5;
        var $4=HEAP[$fnc1];
        var $tobool2=((($4))|0)!=0;
        if ($tobool2) { __label__ = 5;; } else { __label__ = 8;; }
        if (__label__ == 5) {
  
          var $5=$input_addr;
          var $call4=_QRinput_insertFNC1Header($5);
          var $cmp5=((($call4))|0) < 0;
          if ($cmp5) { __label__ = 6;; } else { __label__ = 7;; }
          if (__label__ == 6) {
  
            $retval=0;
            __label__ = 19;break $if_then$$if_else$2;
          }
          else if (__label__ == 7) {
  
            ;
          }
        }
  
        var $6=$input_addr;
        var $call9=_QRinput_convertData($6);
        var $cmp10=((($call9))|0) < 0;
        if ($cmp10) { __label__ = 9;; } else { __label__ = 10;; }
        if (__label__ == 9) {
  
          $retval=0;
          __label__ = 19;break $if_then$$if_else$2;
        }
        else if (__label__ == 10) {
  
          __label__ = 11;break $if_then$$if_else$2;
        }
      }
    } while(0);
    if (__label__ == 11) {
  
      var $call14=_BitStream_new();
      $bstream=$call14;
      var $7=$bstream;
      var $cmp15=((($7))|0)==0;
      if ($cmp15) { __label__ = 12;; } else { __label__ = 13;; }
      if (__label__ == 12) {
  
        $retval=0;
        ;
      }
      else if (__label__ == 13) {
  
        var $8=$input_addr;
        var $head=$8+2;
        var $9=HEAP[$head];
        $list=$9;
        ;
        while(1) { 
  
          var $10=$list;
          var $cmp18=((($10))|0)!=0;
          if (!($cmp18)) { __label__ = 18;break ; }
  
          var $11=$bstream;
          var $12=$list;
          var $bstream19=$12+3;
          var $13=HEAP[$bstream19];
          var $call20=_BitStream_append($11, $13);
          $ret=$call20;
          var $14=$ret;
          var $cmp21=((($14))|0) < 0;
          if ($cmp21) { __label__ = 16;break ; }
  
          var $16=$list;
          var $next=$16+4;
          var $17=HEAP[$next];
          $list=$17;
          __label__ = 14;continue ;
        }
        if (__label__ == 18) {
  
          var $18=$bstream;
          $retval=$18;
          ;
        }
        else if (__label__ == 16) {
  
          var $15=$bstream;
          _BitStream_free($15);
          $retval=0;
          ;
        }
      }
    }
  
    var $19=$retval;
    ;
    return $19;
    return null;
  }
  _QRinput_mergeBitStream["X"]=1;

  function _QRinput_appendPaddingBitMQR($bstream, $input) {
    ;
    var __label__;
  
    var $retval;
    var $bstream_addr;
    var $input_addr;
    var $bits;
    var $maxbits;
    var $words;
    var $maxwords;
    var $i;
    var $ret;
    var $termbits;
    var $padding;
    var $padbuf;
    var $padlen;
    $bstream_addr=$bstream;
    $input_addr=$input;
    $padding=0;
    var $0=$bstream_addr;
    var $length=$0;
    var $1=HEAP[$length];
    $bits=$1;
    var $2=$input_addr;
    var $version=$2;
    var $3=HEAP[$version];
    var $4=$input_addr;
    var $level=$4+1;
    var $5=HEAP[$level];
    var $call=_MQRspec_getDataLengthBit($3, $5);
    $maxbits=$call;
    var $6=$maxbits;
    var $div=((((($6))|0)/8)|0);
    $maxwords=$div;
    var $7=$maxbits;
    var $8=$bits;
    var $cmp=((($7))|0) < ((($8))|0);
    if ($cmp) { __label__ = 1;; } else { __label__ = 2;; }
    $if_then$$if_end$2: do { 
      if (__label__ == 1) {
  
        var $call1=___errno();
        HEAP[$call1]=34;
        $retval=-1;
        ;
      }
      else if (__label__ == 2) {
  
        var $9=$maxbits;
        var $10=$bits;
        var $cmp2=((($9))|0)==((($10))|0);
        if ($cmp2) { __label__ = 3;; } else { __label__ = 4;; }
        if (__label__ == 3) {
  
          $retval=0;
          ;
        }
        else if (__label__ == 4) {
  
          var $11=$input_addr;
          var $version5=$11;
          var $12=HEAP[$version5];
          var $mul=(($12)<<1);
          var $add=($mul)+1;
          $termbits=$add;
          var $13=$maxbits;
          var $14=$bits;
          var $sub=($13)-($14);
          var $15=$termbits;
          var $cmp6=((($sub))|0) <= ((($15))|0);
          if ($cmp6) { __label__ = 5;; } else { __label__ = 6;; }
          $if_then7$$if_end10$8: do { 
            if (__label__ == 5) {
  
              var $16=$bstream_addr;
              var $17=$maxbits;
              var $18=$bits;
              var $sub8=($17)-($18);
              var $call9=_BitStream_appendNum($16, $sub8, 0);
              $ret=$call9;
              ;
            }
            else if (__label__ == 6) {
  
              var $19=$termbits;
              var $20=$bits;
              var $add11=($20)+($19);
              $bits=$add11;
              var $21=$bits;
              var $add12=($21)+7;
              var $div13=((((($add12))|0)/8)|0);
              $words=$div13;
              var $22=$maxbits;
              var $23=$words;
              var $mul14=(($23)<<3);
              var $sub15=($22)-($mul14);
              var $cmp16=((($sub15))|0) > 0;
              if ($cmp16) { __label__ = 7;; } else { __label__ = 10;; }
              if (__label__ == 7) {
  
                var $24=$words;
                var $mul18=(($24)<<3);
                var $25=$bits;
                var $sub19=($mul18)-($25);
                var $26=$termbits;
                var $add20=($26)+($sub19);
                $termbits=$add20;
                var $27=$words;
                var $28=$maxwords;
                var $cmp21=((($27))|0)==((($28))|0);
                if ($cmp21) { __label__ = 8;; } else { __label__ = 9;; }
                if (__label__ == 8) {
  
                  var $29=$maxbits;
                  var $30=$words;
                  var $mul23=(($30)<<3);
                  var $sub24=($29)-($mul23);
                  var $31=$termbits;
                  var $add25=($31)+($sub24);
                  $termbits=$add25;
                  ;
                }
  
                ;
              }
              else if (__label__ == 10) {
  
                var $32=$words;
                var $mul27=(($32)<<3);
                var $33=$bits;
                var $sub28=($mul27)-($33);
                var $34=$termbits;
                var $add29=($34)+($sub28);
                $termbits=$add29;
                ;
              }
  
              var $call31=_BitStream_new();
              $padding=$call31;
              var $35=$padding;
              var $cmp32=((($35))|0)==0;
              if ($cmp32) { __label__ = 12;; } else { __label__ = 13;; }
              if (__label__ == 12) {
  
                $retval=-1;
                __label__ = 31;break $if_then$$if_end$2;
              }
              else if (__label__ == 13) {
  
                var $36=$padding;
                var $37=$termbits;
                var $call35=_BitStream_appendNum($36, $37, 0);
                $ret=$call35;
                var $38=$ret;
                var $cmp36=((($38))|0) < 0;
                if ($cmp36) { __label__ = 14;; } else { __label__ = 15;; }
                if (__label__ == 14) {
  
                  ;
                }
                else if (__label__ == 15) {
  
                  var $39=$maxwords;
                  var $40=$words;
                  var $sub39=($39)-($40);
                  $padlen=$sub39;
                  var $41=$padlen;
                  var $cmp40=((($41))|0) > 0;
                  if ($cmp40) { __label__ = 16;; } else { __label__ = 29;; }
                  if (__label__ == 16) {
  
                    var $42=$padlen;
                    var $call42=_malloc($42);
                    $padbuf=$call42;
                    var $43=$padbuf;
                    var $cmp43=((($43))|0)==0;
                    if ($cmp43) { __label__ = 17;; } else { __label__ = 18;; }
                    if (__label__ == 17) {
  
                      $ret=-1;
                      __label__ = 30;break $if_then7$$if_end10$8;
                    }
                    else if (__label__ == 18) {
  
                      $i=0;
                      ;
                      while(1) { 
  
                        var $44=$i;
                        var $45=$padlen;
                        var $cmp46=((($44))|0) < ((($45))|0);
                        if (!($cmp46)) { __label__ = 22;break ; }
  
                        var $46=$i;
                        var $and=($46) & 1;
                        var $tobool=((($and))|0)!=0;
                        var $cond=($tobool) ? 17 : 236;
                        var $conv=((($cond)) & 255);
                        var $47=$i;
                        var $48=$padbuf;
                        var $arrayidx=$48+$47;
                        HEAP[$arrayidx]=$conv;
                        ;
  
                        var $49=$i;
                        var $inc=($49)+1;
                        $i=$inc;
                        __label__ = 19;continue ;
                      }
  
                      var $50=$padding;
                      var $51=$padlen;
                      var $52=$padbuf;
                      var $call47=_BitStream_appendBytes($50, $51, $52);
                      $ret=$call47;
                      var $53=$padbuf;
                      ;
                      var $54=$ret;
                      var $cmp48=((($54))|0) < 0;
                      if ($cmp48) { __label__ = 23;; } else { __label__ = 24;; }
                      if (__label__ == 23) {
  
                        __label__ = 30;break $if_then7$$if_end10$8;
                      }
                      else if (__label__ == 24) {
  
                        var $55=$maxbits;
                        var $56=$maxwords;
                        var $mul52=(($56)<<3);
                        var $sub53=($55)-($mul52);
                        $termbits=$sub53;
                        var $57=$termbits;
                        var $cmp54=((($57))|0) > 0;
                        if ($cmp54) { __label__ = 25;; } else { __label__ = 28;; }
                        if (__label__ == 25) {
  
                          var $58=$padding;
                          var $59=$termbits;
                          var $call57=_BitStream_appendNum($58, $59, 0);
                          $ret=$call57;
                          var $60=$ret;
                          var $cmp58=((($60))|0) < 0;
                          if ($cmp58) { __label__ = 26;; } else { __label__ = 27;; }
                          if (__label__ == 26) {
  
                            __label__ = 30;break $if_then7$$if_end10$8;
                          }
                          else if (__label__ == 27) {
  
                            ;
                          }
                        }
  
                        ;
                      }
                    }
                  }
  
                  var $61=$bstream_addr;
                  var $62=$padding;
                  var $call64=_BitStream_append($61, $62);
                  $ret=$call64;
                  ;
                }
              }
            }
          } while(0);
  
          var $63=$padding;
          _BitStream_free($63);
          var $64=$ret;
          $retval=$64;
          ;
        }
      }
    } while(0);
  
    var $65=$retval;
    ;
    return $65;
    return null;
  }
  _QRinput_appendPaddingBitMQR["X"]=1;

  function _QRinput_appendPaddingBit($bstream, $input) {
    ;
    var __label__;
  
    var $retval;
    var $bstream_addr;
    var $input_addr;
    var $bits;
    var $maxbits;
    var $words;
    var $maxwords;
    var $i;
    var $ret;
    var $padding;
    var $padbuf;
    var $padlen;
    $bstream_addr=$bstream;
    $input_addr=$input;
    $padding=0;
    var $0=$bstream_addr;
    var $length=$0;
    var $1=HEAP[$length];
    $bits=$1;
    var $2=$input_addr;
    var $version=$2;
    var $3=HEAP[$version];
    var $4=$input_addr;
    var $level=$4+1;
    var $5=HEAP[$level];
    var $call=_QRspec_getDataLength($3, $5);
    $maxwords=$call;
    var $6=$maxwords;
    var $mul=(($6)<<3);
    $maxbits=$mul;
    var $7=$maxbits;
    var $8=$bits;
    var $cmp=((($7))|0) < ((($8))|0);
    if ($cmp) { __label__ = 1;; } else { __label__ = 2;; }
    $if_then$$if_end$2: do { 
      if (__label__ == 1) {
  
        var $call1=___errno();
        HEAP[$call1]=34;
        $retval=-1;
        ;
      }
      else if (__label__ == 2) {
  
        var $9=$maxbits;
        var $10=$bits;
        var $cmp2=((($9))|0)==((($10))|0);
        if ($cmp2) { __label__ = 3;; } else { __label__ = 4;; }
        if (__label__ == 3) {
  
          $retval=0;
          ;
        }
        else if (__label__ == 4) {
  
          var $11=$maxbits;
          var $12=$bits;
          var $sub=($11)-($12);
          var $cmp5=((($sub))|0) <= 4;
          if ($cmp5) { __label__ = 5;; } else { __label__ = 6;; }
          $if_then6$$if_end9$8: do { 
            if (__label__ == 5) {
  
              var $13=$bstream_addr;
              var $14=$maxbits;
              var $15=$bits;
              var $sub7=($14)-($15);
              var $call8=_BitStream_appendNum($13, $sub7, 0);
              $ret=$call8;
              ;
            }
            else if (__label__ == 6) {
  
              var $16=$bits;
              var $add=($16)+4;
              var $add10=($add)+7;
              var $div=((((($add10))|0)/8)|0);
              $words=$div;
              var $call11=_BitStream_new();
              $padding=$call11;
              var $17=$padding;
              var $cmp12=((($17))|0)==0;
              if ($cmp12) { __label__ = 7;; } else { __label__ = 8;; }
              if (__label__ == 7) {
  
                $retval=-1;
                __label__ = 22;break $if_then$$if_end$2;
              }
              else if (__label__ == 8) {
  
                var $18=$padding;
                var $19=$words;
                var $mul15=(($19)<<3);
                var $20=$bits;
                var $sub16=($mul15)-($20);
                var $call17=_BitStream_appendNum($18, $sub16, 0);
                $ret=$call17;
                var $21=$ret;
                var $cmp18=((($21))|0) < 0;
                if ($cmp18) { __label__ = 9;; } else { __label__ = 10;; }
                if (__label__ == 9) {
  
                  ;
                }
                else if (__label__ == 10) {
  
                  var $22=$maxwords;
                  var $23=$words;
                  var $sub21=($22)-($23);
                  $padlen=$sub21;
                  var $24=$padlen;
                  var $cmp22=((($24))|0) > 0;
                  if ($cmp22) { __label__ = 11;; } else { __label__ = 20;; }
                  if (__label__ == 11) {
  
                    var $25=$padlen;
                    var $call24=_malloc($25);
                    $padbuf=$call24;
                    var $26=$padbuf;
                    var $cmp25=((($26))|0)==0;
                    if ($cmp25) { __label__ = 12;; } else { __label__ = 13;; }
                    if (__label__ == 12) {
  
                      $ret=-1;
                      __label__ = 21;break $if_then6$$if_end9$8;
                    }
                    else if (__label__ == 13) {
  
                      $i=0;
                      ;
                      while(1) { 
  
                        var $27=$i;
                        var $28=$padlen;
                        var $cmp28=((($27))|0) < ((($28))|0);
                        if (!($cmp28)) { __label__ = 17;break ; }
  
                        var $29=$i;
                        var $and=($29) & 1;
                        var $tobool=((($and))|0)!=0;
                        var $cond=($tobool) ? 17 : 236;
                        var $conv=((($cond)) & 255);
                        var $30=$i;
                        var $31=$padbuf;
                        var $arrayidx=$31+$30;
                        HEAP[$arrayidx]=$conv;
                        ;
  
                        var $32=$i;
                        var $inc=($32)+1;
                        $i=$inc;
                        __label__ = 14;continue ;
                      }
  
                      var $33=$padding;
                      var $34=$padlen;
                      var $35=$padbuf;
                      var $call29=_BitStream_appendBytes($33, $34, $35);
                      $ret=$call29;
                      var $36=$padbuf;
                      ;
                      var $37=$ret;
                      var $cmp30=((($37))|0) < 0;
                      if ($cmp30) { __label__ = 18;; } else { __label__ = 19;; }
                      if (__label__ == 18) {
  
                        __label__ = 21;break $if_then6$$if_end9$8;
                      }
                      else if (__label__ == 19) {
  
                        ;
                      }
                    }
                  }
  
                  var $38=$bstream_addr;
                  var $39=$padding;
                  var $call35=_BitStream_append($38, $39);
                  $ret=$call35;
                  ;
                }
              }
            }
          } while(0);
  
          var $40=$padding;
          _BitStream_free($40);
          var $41=$ret;
          $retval=$41;
          ;
        }
      }
    } while(0);
  
    var $42=$retval;
    ;
    return $42;
    return null;
  }
  _QRinput_appendPaddingBit["X"]=1;

  function _QRinput_createBitStream($input) {
    ;
    var __label__;
  
    var $retval;
    var $input_addr;
    var $list;
    var $bits;
    var $total;
    $input_addr=$input;
    $total=0;
    var $0=$input_addr;
    var $head=$0+2;
    var $1=HEAP[$head];
    $list=$1;
    ;
    while(1) { 
  
      var $2=$list;
      var $cmp=((($2))|0)!=0;
      if (!($cmp)) { __label__ = 5;break ; }
  
      var $3=$list;
      var $4=$input_addr;
      var $version=$4;
      var $5=HEAP[$version];
      var $6=$input_addr;
      var $mqr=$6+4;
      var $7=HEAP[$mqr];
      var $call=_QRinput_encodeBitStream($3, $5, $7);
      $bits=$call;
      var $8=$bits;
      var $cmp1=((($8))|0) < 0;
      if ($cmp1) { __label__ = 3;break ; }
  
      var $9=$bits;
      var $10=$total;
      var $add=($10)+($9);
      $total=$add;
      var $11=$list;
      var $next=$11+4;
      var $12=HEAP[$next];
      $list=$12;
      __label__ = 1;continue ;
    }
    if (__label__ == 5) {
  
      var $13=$total;
      $retval=$13;
      ;
    }
    else if (__label__ == 3) {
  
      $retval=-1;
      ;
    }
  
    var $14=$retval;
    ;
    return $14;
    return null;
  }
  

  function _QRinput_insertFNC1Header($input) {
    ;
    var __label__;
  
    var $retval;
    var $input_addr;
    var $entry1;
    $input_addr=$input;
    $entry1=0;
    var $0=$input_addr;
    var $fnc1=$0+5;
    var $1=HEAP[$fnc1];
    var $cmp=((($1))|0)==1;
    if ($cmp) { __label__ = 1;; } else { __label__ = 2;; }
    if (__label__ == 1) {
  
      var $call=_QRinput_List_newEntry(6, 0, 0);
      $entry1=$call;
      ;
    }
    else if (__label__ == 2) {
  
      var $2=$input_addr;
      var $fnc12=$2+5;
      var $3=HEAP[$fnc12];
      var $cmp3=((($3))|0)==2;
      if ($cmp3) { __label__ = 3;; } else { __label__ = 4;; }
      if (__label__ == 3) {
  
        var $4=$input_addr;
        var $appid=$4+6;
        var $call5=_QRinput_List_newEntry(7, 1, $appid);
        $entry1=$call5;
        ;
      }
  
      ;
    }
  
    var $5=$entry1;
    var $cmp7=((($5))|0)==0;
    if ($cmp7) { __label__ = 6;; } else { __label__ = 7;; }
    if (__label__ == 6) {
  
      $retval=-1;
      ;
    }
    else if (__label__ == 7) {
  
      var $6=$input_addr;
      var $head=$6+2;
      var $7=HEAP[$head];
      var $mode=$7;
      var $8=HEAP[$mode];
      var $cmp10=((($8))|0)!=4;
      if ($cmp10) { __label__ = 9;; } else { __label__ = 8;; }
      $if_then14$$lor_lhs_false$12: do { 
        if (__label__ == 8) {
  
          var $9=$input_addr;
          var $head11=$9+2;
          var $10=HEAP[$head11];
          var $mode12=$10;
          var $11=HEAP[$mode12];
          var $cmp13=((($11))|0)!=5;
          if ($cmp13) { __label__ = 9;break $if_then14$$lor_lhs_false$12; }
  
          var $17=$input_addr;
          var $head18=$17+2;
          var $18=HEAP[$head18];
          var $next19=$18+4;
          var $19=HEAP[$next19];
          var $20=$entry1;
          var $next20=$20+4;
          HEAP[$next20]=$19;
          var $21=$entry1;
          var $22=$input_addr;
          var $head21=$22+2;
          var $23=HEAP[$head21];
          var $next22=$23+4;
          HEAP[$next22]=$21;
          __label__ = 11;break $if_then14$$lor_lhs_false$12;
        }
      } while(0);
      if (__label__ == 9) {
  
        var $12=$input_addr;
        var $head15=$12+2;
        var $13=HEAP[$head15];
        var $14=$entry1;
        var $next=$14+4;
        HEAP[$next]=$13;
        var $15=$entry1;
        var $16=$input_addr;
        var $head16=$16+2;
        HEAP[$head16]=$15;
        ;
      }
  
      $retval=0;
      ;
    }
  
    var $24=$retval;
    ;
    return $24;
    return null;
  }
  _QRinput_insertFNC1Header["X"]=1;

  function _QRinput_convertData($input) {
    ;
    var __label__;
  
    var $retval;
    var $input_addr;
    var $bits;
    var $ver;
    $input_addr=$input;
    var $0=$input_addr;
    var $call=_QRinput_estimateVersion($0);
    $ver=$call;
    var $1=$ver;
    var $2=$input_addr;
    var $call1=_QRinput_getVersion($2);
    var $cmp=((($1))|0) > ((($call1))|0);
    if ($cmp) { __label__ = 1;; } else { __label__ = 2;; }
    if (__label__ == 1) {
  
      var $3=$input_addr;
      var $4=$ver;
      var $call2=_QRinput_setVersion($3, $4);
      ;
    }
  
    ;
    while(1) { 
  
      var $5=$input_addr;
      var $call3=_QRinput_createBitStream($5);
      $bits=$call3;
      var $6=$bits;
      var $cmp4=((($6))|0) < 0;
      if ($cmp4) { __label__ = 4;break ; }
  
      var $7=$bits;
      var $add=($7)+7;
      var $div=((((($add))|0)/8)|0);
      var $8=$input_addr;
      var $level=$8+1;
      var $9=HEAP[$level];
      var $call7=_QRspec_getMinimumVersion($div, $9);
      $ver=$call7;
      var $10=$ver;
      var $cmp8=((($10))|0) < 0;
      if ($cmp8) { __label__ = 6;break ; }
  
      var $11=$ver;
      var $12=$input_addr;
      var $call11=_QRinput_getVersion($12);
      var $cmp12=((($11))|0) > ((($call11))|0);
      if (!($cmp12)) { __label__ = 9;break ; }
  
      var $13=$input_addr;
      var $14=$ver;
      var $call14=_QRinput_setVersion($13, $14);
      ;
  
      ;
  
      __label__ = 3;continue ;
    }
    if (__label__ == 4) {
  
      $retval=-1;
      ;
    }
    else if (__label__ == 6) {
  
      var $call10=___errno();
      HEAP[$call10]=34;
      $retval=-1;
      ;
    }
    else if (__label__ == 9) {
  
      ;
  
      $retval=0;
      ;
    }
  
    var $15=$retval;
    ;
    return $15;
    return null;
  }
  _QRinput_convertData["X"]=1;

  function _QRinput_estimateVersion($input) {
    ;
    var __label__;
  
    var $retval;
    var $input_addr;
    var $bits;
    var $version;
    var $prev;
    $input_addr=$input;
    $version=0;
    ;
    while(1) { 
  
      var $0=$version;
      $prev=$0;
      var $1=$input_addr;
      var $2=$prev;
      var $call=_QRinput_estimateBitStreamSize($1, $2);
      $bits=$call;
      var $3=$bits;
      var $add=($3)+7;
      var $div=((((($add))|0)/8)|0);
      var $4=$input_addr;
      var $level=$4+1;
      var $5=HEAP[$level];
      var $call1=_QRspec_getMinimumVersion($div, $5);
      $version=$call1;
      var $6=$version;
      var $cmp=((($6))|0) < 0;
      if ($cmp) { __label__ = 2;break ; }
  
      ;
  
      var $7=$version;
      var $8=$prev;
      var $cmp2=((($7))|0) > ((($8))|0);
      if ($cmp2) { __label__ = 1;continue ; } else { __label__ = 5;break ; }
    }
    if (__label__ == 2) {
  
      $retval=-1;
      ;
    }
    else if (__label__ == 5) {
  
      var $9=$version;
      $retval=$9;
      ;
    }
  
    var $10=$retval;
    ;
    return $10;
    return null;
  }
  

  function _QRinput_estimateBitStreamSize($input, $version) {
    ;
    var __label__;
  
    var $input_addr;
    var $version_addr;
    var $list;
    var $bits;
    $input_addr=$input;
    $version_addr=$version;
    $bits=0;
    var $0=$input_addr;
    var $head=$0+2;
    var $1=HEAP[$head];
    $list=$1;
    ;
    while(1) { 
  
      var $2=$list;
      var $cmp=((($2))|0)!=0;
      if (!($cmp)) { __label__ = 3;break ; }
  
      var $3=$list;
      var $4=$version_addr;
      var $5=$input_addr;
      var $mqr=$5+4;
      var $6=HEAP[$mqr];
      var $call=_QRinput_estimateBitStreamSizeOfEntry($3, $4, $6);
      var $7=$bits;
      var $add=($7)+($call);
      $bits=$add;
      var $8=$list;
      var $next=$8+4;
      var $9=HEAP[$next];
      $list=$9;
      __label__ = 1;continue ;
    }
  
    var $10=$bits;
    ;
    return $10;
    return null;
  }
  

  function _QRspec_getDataLength($version, $level) {
    ;
    var __label__;
  
    var $version_addr;
    var $level_addr;
    $version_addr=$version;
    $level_addr=$level;
    var $0=$version_addr;
    var $arrayidx=_qrspecCapacity+$0*7;
    var $words=$arrayidx+1;
    var $1=HEAP[$words];
    var $2=$level_addr;
    var $3=$version_addr;
    var $arrayidx1=_qrspecCapacity+$3*7;
    var $ec=$arrayidx1+3;
    var $arrayidx2=$ec+$2;
    var $4=HEAP[$arrayidx2];
    var $sub=($1)-($4);
    ;
    return $sub;
    return null;
  }
  

  function _QRspec_getECCLength($version, $level) {
    ;
    var __label__;
  
    var $version_addr;
    var $level_addr;
    $version_addr=$version;
    $level_addr=$level;
    var $0=$level_addr;
    var $1=$version_addr;
    var $arrayidx=_qrspecCapacity+$1*7;
    var $ec=$arrayidx+3;
    var $arrayidx1=$ec+$0;
    var $2=HEAP[$arrayidx1];
    ;
    return $2;
    return null;
  }
  

  function _QRspec_getMinimumVersion($size, $level) {
    ;
    var __label__;
  
    var $retval;
    var $size_addr;
    var $level_addr;
    var $i;
    var $words;
    $size_addr=$size;
    $level_addr=$level;
    $i=1;
    ;
    while(1) { 
  
      var $0=$i;
      var $cmp=((($0))|0) <= 40;
      if (!($cmp)) { __label__ = 6;break ; }
  
      var $1=$i;
      var $arrayidx=_qrspecCapacity+$1*7;
      var $words1=$arrayidx+1;
      var $2=HEAP[$words1];
      var $3=$level_addr;
      var $4=$i;
      var $arrayidx2=_qrspecCapacity+$4*7;
      var $ec=$arrayidx2+3;
      var $arrayidx3=$ec+$3;
      var $5=HEAP[$arrayidx3];
      var $sub=($2)-($5);
      $words=$sub;
      var $6=$words;
      var $7=$size_addr;
      var $cmp4=((($6))|0) >= ((($7))|0);
      if ($cmp4) { __label__ = 3;break ; }
  
      ;
  
      var $9=$i;
      var $inc=($9)+1;
      $i=$inc;
      __label__ = 1;continue ;
    }
    if (__label__ == 6) {
  
      $retval=-1;
      ;
    }
    else if (__label__ == 3) {
  
      var $8=$i;
      $retval=$8;
      ;
    }
  
    var $10=$retval;
    ;
    return $10;
    return null;
  }
  

  function _QRspec_getWidth($version) {
    ;
    var __label__;
  
    var $version_addr;
    $version_addr=$version;
    var $0=$version_addr;
    var $arrayidx=_qrspecCapacity+$0*7;
    var $width=$arrayidx;
    var $1=HEAP[$width];
    ;
    return $1;
    return null;
  }
  

  function _QRspec_getRemainder($version) {
    ;
    var __label__;
  
    var $version_addr;
    $version_addr=$version;
    var $0=$version_addr;
    var $arrayidx=_qrspecCapacity+$0*7;
    var $remainder=$arrayidx+2;
    var $1=HEAP[$remainder];
    ;
    return $1;
    return null;
  }
  

  function _QRspec_lengthIndicator($mode, $version) {
    ;
    var __label__;
  
    var $retval;
    var $mode_addr;
    var $version_addr;
    var $l;
    $mode_addr=$mode;
    $version_addr=$version;
    var $0=$mode_addr;
    var $call=_QRinput_isSplittableMode($0);
    var $tobool=((($call))|0)!=0;
    if ($tobool) { __label__ = 2;; } else { __label__ = 1;; }
    if (__label__ == 2) {
  
      var $1=$version_addr;
      var $cmp=((($1))|0) <= 9;
      if ($cmp) { __label__ = 3;; } else { __label__ = 4;; }
      if (__label__ == 3) {
  
        $l=0;
        ;
      }
      else if (__label__ == 4) {
  
        var $2=$version_addr;
        var $cmp2=((($2))|0) <= 26;
        if ($cmp2) { __label__ = 5;; } else { __label__ = 6;; }
        if (__label__ == 5) {
  
          $l=1;
          ;
        }
        else if (__label__ == 6) {
  
          $l=2;
          ;
        }
  
        ;
      }
  
      var $3=$l;
      var $4=$mode_addr;
      var $arrayidx=_lengthTableBits28+$4*3;
      var $arrayidx7=$arrayidx+$3;
      var $5=HEAP[$arrayidx7];
      $retval=$5;
      ;
    }
    else if (__label__ == 1) {
  
      $retval=0;
      ;
    }
  
    var $6=$retval;
    ;
    return $6;
    return null;
  }
  

  function _QRspec_maximumWords($mode, $version) {
    ;
    var __label__;
  
    var $retval;
    var $mode_addr;
    var $version_addr;
    var $l;
    var $bits;
    var $words;
    $mode_addr=$mode;
    $version_addr=$version;
    var $0=$mode_addr;
    var $call=_QRinput_isSplittableMode($0);
    var $tobool=((($call))|0)!=0;
    if ($tobool) { __label__ = 2;; } else { __label__ = 1;; }
    if (__label__ == 2) {
  
      var $1=$version_addr;
      var $cmp=((($1))|0) <= 9;
      if ($cmp) { __label__ = 3;; } else { __label__ = 4;; }
      if (__label__ == 3) {
  
        $l=0;
        ;
      }
      else if (__label__ == 4) {
  
        var $2=$version_addr;
        var $cmp2=((($2))|0) <= 26;
        if ($cmp2) { __label__ = 5;; } else { __label__ = 6;; }
        if (__label__ == 5) {
  
          $l=1;
          ;
        }
        else if (__label__ == 6) {
  
          $l=2;
          ;
        }
  
        ;
      }
  
      var $3=$l;
      var $4=$mode_addr;
      var $arrayidx=_lengthTableBits28+$4*3;
      var $arrayidx7=$arrayidx+$3;
      var $5=HEAP[$arrayidx7];
      $bits=$5;
      var $6=$bits;
      var $shl=1 << ($6);
      var $sub=($shl)-1;
      $words=$sub;
      var $7=$mode_addr;
      var $cmp8=((($7))|0)==3;
      if ($cmp8) { __label__ = 9;; } else { __label__ = 10;; }
      if (__label__ == 9) {
  
        var $8=$words;
        var $mul=(($8)<<1);
        $words=$mul;
        ;
      }
  
      var $9=$words;
      $retval=$9;
      ;
    }
    else if (__label__ == 1) {
  
      $retval=0;
      ;
    }
  
    var $10=$retval;
    ;
    return $10;
    return null;
  }
  

  function _QRspec_getEccSpec($version, $level, $spec) {
    ;
    var __label__;
  
    var $version_addr;
    var $level_addr;
    var $spec_addr;
    var $b1;
    var $b2;
    var $data;
    var $ecc;
    $version_addr=$version;
    $level_addr=$level;
    $spec_addr=$spec;
    var $0=$level_addr;
    var $1=$version_addr;
    var $arrayidx=_eccTable+($1<<3);
    var $arrayidx1=$arrayidx+($0<<1);
    var $arrayidx2=$arrayidx1;
    var $2=HEAP[$arrayidx2];
    $b1=$2;
    var $3=$level_addr;
    var $4=$version_addr;
    var $arrayidx3=_eccTable+($4<<3);
    var $arrayidx4=$arrayidx3+($3<<1);
    var $arrayidx5=$arrayidx4+1;
    var $5=HEAP[$arrayidx5];
    $b2=$5;
    var $6=$version_addr;
    var $7=$level_addr;
    var $call=_QRspec_getDataLength($6, $7);
    $data=$call;
    var $8=$version_addr;
    var $9=$level_addr;
    var $call6=_QRspec_getECCLength($8, $9);
    $ecc=$call6;
    var $10=$b2;
    var $cmp=((($10))|0)==0;
    if ($cmp) { __label__ = 1;; } else { __label__ = 2;; }
    if (__label__ == 1) {
  
      var $11=$b1;
      var $12=$spec_addr;
      var $arrayidx7=$12;
      HEAP[$arrayidx7]=$11;
      var $13=$data;
      var $14=$b1;
      var $div=((((($13))|0)/((($14))|0))|0);
      var $15=$spec_addr;
      var $arrayidx8=$15+1;
      HEAP[$arrayidx8]=$div;
      var $16=$ecc;
      var $17=$b1;
      var $div9=((((($16))|0)/((($17))|0))|0);
      var $18=$spec_addr;
      var $arrayidx10=$18+2;
      HEAP[$arrayidx10]=$div9;
      var $19=$spec_addr;
      var $arrayidx11=$19+4;
      HEAP[$arrayidx11]=0;
      var $20=$spec_addr;
      var $arrayidx12=$20+3;
      HEAP[$arrayidx12]=0;
      ;
    }
    else if (__label__ == 2) {
  
      var $21=$b1;
      var $22=$spec_addr;
      var $arrayidx13=$22;
      HEAP[$arrayidx13]=$21;
      var $23=$data;
      var $24=$b1;
      var $25=$b2;
      var $add=($24)+($25);
      var $div14=((((($23))|0)/((($add))|0))|0);
      var $26=$spec_addr;
      var $arrayidx15=$26+1;
      HEAP[$arrayidx15]=$div14;
      var $27=$ecc;
      var $28=$b1;
      var $29=$b2;
      var $add16=($28)+($29);
      var $div17=((((($27))|0)/((($add16))|0))|0);
      var $30=$spec_addr;
      var $arrayidx18=$30+2;
      HEAP[$arrayidx18]=$div17;
      var $31=$b2;
      var $32=$spec_addr;
      var $arrayidx19=$32+3;
      HEAP[$arrayidx19]=$31;
      var $33=$spec_addr;
      var $arrayidx20=$33+1;
      var $34=HEAP[$arrayidx20];
      var $add21=($34)+1;
      var $35=$spec_addr;
      var $arrayidx22=$35+4;
      HEAP[$arrayidx22]=$add21;
      ;
    }
  
    ;
    return;
    return;
  }
  _QRspec_getEccSpec["X"]=1;

  function _QRspec_getVersionPattern($version) {
    ;
    var __label__;
  
    var $retval;
    var $version_addr;
    $version_addr=$version;
    var $0=$version_addr;
    var $cmp=((($0))|0) < 7;
    if ($cmp) { __label__ = 2;; } else { __label__ = 1;; }
    $if_then$$lor_lhs_false$2: do { 
      if (__label__ == 1) {
  
        var $1=$version_addr;
        var $cmp1=((($1))|0) > 40;
        if ($cmp1) { __label__ = 2;break $if_then$$lor_lhs_false$2; }
  
        var $2=$version_addr;
        var $sub=($2)-7;
        var $arrayidx=_versionPattern+$sub;
        var $3=HEAP[$arrayidx];
        $retval=$3;
        __label__ = 4;break $if_then$$lor_lhs_false$2;
      }
    } while(0);
    if (__label__ == 2) {
  
      $retval=0;
      ;
    }
  
    var $4=$retval;
    ;
    return $4;
    return null;
  }
  

  function _QRspec_getFormatInfo($mask, $level) {
    ;
    var __label__;
  
    var $retval;
    var $mask_addr;
    var $level_addr;
    $mask_addr=$mask;
    $level_addr=$level;
    var $0=$mask_addr;
    var $cmp=((($0))|0) < 0;
    if ($cmp) { __label__ = 2;; } else { __label__ = 1;; }
    $if_then$$lor_lhs_false$2: do { 
      if (__label__ == 1) {
  
        var $1=$mask_addr;
        var $cmp1=((($1))|0) > 7;
        if ($cmp1) { __label__ = 2;break $if_then$$lor_lhs_false$2; }
  
        var $2=$mask_addr;
        var $3=$level_addr;
        var $arrayidx=_formatInfo29+($3<<3);
        var $arrayidx2=$arrayidx+$2;
        var $4=HEAP[$arrayidx2];
        $retval=$4;
        __label__ = 4;break $if_then$$lor_lhs_false$2;
      }
    } while(0);
    if (__label__ == 2) {
  
      $retval=0;
      ;
    }
  
    var $5=$retval;
    ;
    return $5;
    return null;
  }
  

  function _QRspec_newFrame($version) {
    ;
    var __label__;
  
    var $retval;
    var $version_addr;
    var $frame;
    var $width;
    $version_addr=$version;
    var $0=$version_addr;
    var $cmp=((($0))|0) < 1;
    if ($cmp) { __label__ = 2;; } else { __label__ = 1;; }
    $if_then$$lor_lhs_false$2: do { 
      if (__label__ == 1) {
  
        var $1=$version_addr;
        var $cmp1=((($1))|0) > 40;
        if ($cmp1) { __label__ = 2;break $if_then$$lor_lhs_false$2; }
  
        var $2=$version_addr;
        var $arrayidx=_frames30+$2;
        var $3=HEAP[$arrayidx];
        var $cmp2=((($3))|0)==0;
        if ($cmp2) { __label__ = 4;; } else { __label__ = 5;; }
        if (__label__ == 4) {
  
          var $4=$version_addr;
          var $call=_QRspec_createFrame($4);
          var $5=$version_addr;
          var $arrayidx4=_frames30+$5;
          HEAP[$arrayidx4]=$call;
          ;
        }
  
        var $6=$version_addr;
        var $arrayidx6=_frames30+$6;
        var $7=HEAP[$arrayidx6];
        var $cmp7=((($7))|0)==0;
        if ($cmp7) { __label__ = 6;; } else { __label__ = 7;; }
        if (__label__ == 6) {
  
          $retval=0;
          __label__ = 10;break $if_then$$lor_lhs_false$2;
        }
        else if (__label__ == 7) {
  
          var $8=$version_addr;
          var $arrayidx10=_qrspecCapacity+$8*7;
          var $width11=$arrayidx10;
          var $9=HEAP[$width11];
          $width=$9;
          var $10=$width;
          var $11=$width;
          var $mul=($10)*($11);
          var $call12=_malloc($mul);
          $frame=$call12;
          var $12=$frame;
          var $cmp13=((($12))|0)==0;
          if ($cmp13) { __label__ = 8;; } else { __label__ = 9;; }
          if (__label__ == 8) {
  
            $retval=0;
            __label__ = 10;break $if_then$$lor_lhs_false$2;
          }
          else if (__label__ == 9) {
  
            var $13=$frame;
            var $14=$version_addr;
            var $arrayidx16=_frames30+$14;
            var $15=HEAP[$arrayidx16];
            var $16=$width;
            var $17=$width;
            var $mul17=($16)*($17);
            assert($mul17 % 1 === 0, 'memcpy given ' + $mul17 + ' bytes to copy. Problem with 1=1 corrections perhaps?');for (var mcpi_s=$15,mcpi_e=$15+$mul17,mcpi_d=$13; mcpi_s<mcpi_e; mcpi_s++, mcpi_d++) {
              HEAP[mcpi_d] = HEAP[mcpi_s];
            };
            var $18=$frame;
            $retval=$18;
            __label__ = 10;break $if_then$$lor_lhs_false$2;
          }
        }
      }
    } while(0);
    if (__label__ == 2) {
  
      $retval=0;
      ;
    }
  
    var $19=$retval;
    ;
    return $19;
    return null;
  }
  _QRspec_newFrame["X"]=1;

  function _QRspec_createFrame($version) {
    ;
    var __label__;
  
    var $retval;
    var $version_addr;
    var $frame;
    var $p;
    var $q;
    var $width;
    var $x;
    var $y;
    var $verinfo;
    var $v;
    $version_addr=$version;
    var $0=$version_addr;
    var $arrayidx=_qrspecCapacity+$0*7;
    var $width1=$arrayidx;
    var $1=HEAP[$width1];
    $width=$1;
    var $2=$width;
    var $3=$width;
    var $mul=($2)*($3);
    var $call=_malloc($mul);
    $frame=$call;
    var $4=$frame;
    var $cmp=((($4))|0)==0;
    if ($cmp) { __label__ = 1;; } else { __label__ = 2;; }
    if (__label__ == 1) {
  
      $retval=0;
      ;
    }
    else if (__label__ == 2) {
  
      var $5=$frame;
      var $6=$width;
      var $7=$width;
      var $mul2=($6)*($7);
      for (var mspi = 0; mspi < $mul2; mspi++) {
      HEAP[$5+mspi]=0
      };
      var $8=$frame;
      var $9=$width;
      _putFinderPattern52($8, $9, 0, 0);
      var $10=$frame;
      var $11=$width;
      var $12=$width;
      var $sub=($12)-7;
      _putFinderPattern52($10, $11, $sub, 0);
      var $13=$frame;
      var $14=$width;
      var $15=$width;
      var $sub3=($15)-7;
      _putFinderPattern52($13, $14, 0, $sub3);
      var $16=$frame;
      $p=$16;
      var $17=$frame;
      var $18=$width;
      var $19=$width;
      var $sub4=($19)-7;
      var $mul5=($18)*($sub4);
      var $add_ptr=$17+$mul5;
      $q=$add_ptr;
      $y=0;
      ;
      $for_cond$5: while(1) { 
  
        var $20=$y;
        var $cmp6=((($20))|0) < 7;
        if (!($cmp6)) { __label__ = 6;break $for_cond$5; }
  
        var $21=$p;
        var $arrayidx7=$21+7;
        HEAP[$arrayidx7]=-64;
        var $22=$width;
        var $sub8=($22)-8;
        var $23=$p;
        var $arrayidx9=$23+$sub8;
        HEAP[$arrayidx9]=-64;
        var $24=$q;
        var $arrayidx10=$24+7;
        HEAP[$arrayidx10]=-64;
        var $25=$width;
        var $26=$p;
        var $add_ptr11=$26+$25;
        $p=$add_ptr11;
        var $27=$width;
        var $28=$q;
        var $add_ptr12=$28+$27;
        $q=$add_ptr12;
        ;
  
        var $29=$y;
        var $inc=($29)+1;
        $y=$inc;
        __label__ = 3;continue $for_cond$5;
      }
  
      var $30=$frame;
      var $31=$width;
      var $mul13=($31)*7;
      var $add_ptr14=$30+$mul13;
      for (var mspi = 0; mspi < 8; mspi++) {
      HEAP[$add_ptr14+mspi]=-64
      };
      var $32=$frame;
      var $33=$width;
      var $mul15=(($33)<<3);
      var $add_ptr16=$32+$mul15;
      var $add_ptr17=$add_ptr16-8;
      for (var mspi = 0; mspi < 8; mspi++) {
      HEAP[$add_ptr17+mspi]=-64
      };
      var $34=$frame;
      var $35=$width;
      var $36=$width;
      var $sub18=($36)-8;
      var $mul19=($35)*($sub18);
      var $add_ptr20=$34+$mul19;
      for (var mspi = 0; mspi < 8; mspi++) {
      HEAP[$add_ptr20+mspi]=-64
      };
      var $37=$frame;
      var $38=$width;
      var $mul21=(($38)<<3);
      var $add_ptr22=$37+$mul21;
      for (var mspi = 0; mspi < 9; mspi++) {
      HEAP[$add_ptr22+mspi]=-124
      };
      var $39=$frame;
      var $40=$width;
      var $mul23=($40)*9;
      var $add_ptr24=$39+$mul23;
      var $add_ptr25=$add_ptr24-8;
      for (var mspi = 0; mspi < 8; mspi++) {
      HEAP[$add_ptr25+mspi]=-124
      };
      var $41=$frame;
      var $add_ptr26=$41+8;
      $p=$add_ptr26;
      $y=0;
      ;
      $for_cond27$10: while(1) { 
  
        var $42=$y;
        var $cmp28=((($42))|0) < 8;
        if (!($cmp28)) { __label__ = 10;break $for_cond27$10; }
  
        var $43=$p;
        HEAP[$43]=-124;
        var $44=$width;
        var $45=$p;
        var $add_ptr30=$45+$44;
        $p=$add_ptr30;
        ;
  
        var $46=$y;
        var $inc32=($46)+1;
        $y=$inc32;
        __label__ = 7;continue $for_cond27$10;
      }
  
      var $47=$frame;
      var $48=$width;
      var $49=$width;
      var $sub34=($49)-7;
      var $mul35=($48)*($sub34);
      var $add_ptr36=$47+$mul35;
      var $add_ptr37=$add_ptr36+8;
      $p=$add_ptr37;
      $y=0;
      ;
      $for_cond38$15: while(1) { 
  
        var $50=$y;
        var $cmp39=((($50))|0) < 7;
        if (!($cmp39)) { __label__ = 14;break $for_cond38$15; }
  
        var $51=$p;
        HEAP[$51]=-124;
        var $52=$width;
        var $53=$p;
        var $add_ptr41=$53+$52;
        $p=$add_ptr41;
        ;
  
        var $54=$y;
        var $inc43=($54)+1;
        $y=$inc43;
        __label__ = 11;continue $for_cond38$15;
      }
  
      var $55=$frame;
      var $56=$width;
      var $mul45=($56)*6;
      var $add_ptr46=$55+$mul45;
      var $add_ptr47=$add_ptr46+8;
      $p=$add_ptr47;
      var $57=$frame;
      var $58=$width;
      var $mul48=(($58)<<3);
      var $add_ptr49=$57+$mul48;
      var $add_ptr50=$add_ptr49+6;
      $q=$add_ptr50;
      $x=1;
      ;
      $for_cond51$20: while(1) { 
  
        var $59=$x;
        var $60=$width;
        var $sub52=($60)-15;
        var $cmp53=((($59))|0) < ((($sub52))|0);
        if (!($cmp53)) { __label__ = 18;break $for_cond51$20; }
  
        var $61=$x;
        var $and=($61) & 1;
        var $or=144 | ($and);
        var $conv=((($or)) & 255);
        var $62=$p;
        HEAP[$62]=$conv;
        var $63=$x;
        var $and55=($63) & 1;
        var $or56=144 | ($and55);
        var $conv57=((($or56)) & 255);
        var $64=$q;
        HEAP[$64]=$conv57;
        var $65=$p;
        var $incdec_ptr=$65+1;
        $p=$incdec_ptr;
        var $66=$width;
        var $67=$q;
        var $add_ptr58=$67+$66;
        $q=$add_ptr58;
        ;
  
        var $68=$x;
        var $inc60=($68)+1;
        $x=$inc60;
        __label__ = 15;continue $for_cond51$20;
      }
  
      var $69=$version_addr;
      var $70=$frame;
      var $71=$width;
      _QRspec_putAlignmentPattern($69, $70, $71);
      var $72=$version_addr;
      var $cmp62=((($72))|0) >= 7;
      if ($cmp62) { __label__ = 19;; } else { __label__ = 36;; }
      if (__label__ == 19) {
  
        var $73=$version_addr;
        var $call65=_QRspec_getVersionPattern($73);
        $verinfo=$call65;
        var $74=$frame;
        var $75=$width;
        var $76=$width;
        var $sub66=($76)-11;
        var $mul67=($75)*($sub66);
        var $add_ptr68=$74+$mul67;
        $p=$add_ptr68;
        var $77=$verinfo;
        $v=$77;
        $x=0;
        ;
        $for_cond69$27: while(1) { 
  
          var $78=$x;
          var $cmp70=((($78))|0) < 6;
          if (!($cmp70)) { __label__ = 27;break $for_cond69$27; }
  
          $y=0;
          ;
          while(1) { 
  
            var $79=$y;
            var $cmp74=((($79))|0) < 3;
            if (!($cmp74)) { __label__ = 25;break ; }
  
            var $80=$v;
            var $and77=($80) & 1;
            var $or78=136 | ($and77);
            var $conv79=((($or78)) & 255);
            var $81=$width;
            var $82=$y;
            var $mul80=($81)*($82);
            var $83=$x;
            var $add=($mul80)+($83);
            var $84=$p;
            var $arrayidx81=$84+$add;
            HEAP[$arrayidx81]=$conv79;
            var $85=$v;
            var $shr=($85) >>> 1;
            $v=$shr;
            ;
  
            var $86=$y;
            var $inc83=($86)+1;
            $y=$inc83;
            __label__ = 22;continue ;
          }
  
          ;
  
          var $87=$x;
          var $inc86=($87)+1;
          $x=$inc86;
          __label__ = 20;continue $for_cond69$27;
        }
  
        var $88=$frame;
        var $89=$width;
        var $add_ptr88=$88+$89;
        var $add_ptr89=$add_ptr88-11;
        $p=$add_ptr89;
        var $90=$verinfo;
        $v=$90;
        $y=0;
        ;
        $for_cond90$37: while(1) { 
  
          var $91=$y;
          var $cmp91=((($91))|0) < 6;
          if (!($cmp91)) { __label__ = 35;break $for_cond90$37; }
  
          $x=0;
          ;
          while(1) { 
  
            var $92=$x;
            var $cmp95=((($92))|0) < 3;
            if (!($cmp95)) { __label__ = 33;break ; }
  
            var $93=$v;
            var $and98=($93) & 1;
            var $or99=136 | ($and98);
            var $conv100=((($or99)) & 255);
            var $94=$x;
            var $95=$p;
            var $arrayidx101=$95+$94;
            HEAP[$arrayidx101]=$conv100;
            var $96=$v;
            var $shr102=($96) >>> 1;
            $v=$shr102;
            ;
  
            var $97=$x;
            var $inc104=($97)+1;
            $x=$inc104;
            __label__ = 30;continue ;
          }
  
          var $98=$width;
          var $99=$p;
          var $add_ptr106=$99+$98;
          $p=$add_ptr106;
          ;
  
          var $100=$y;
          var $inc108=($100)+1;
          $y=$inc108;
          __label__ = 28;continue $for_cond90$37;
        }
  
        ;
      }
  
      var $101=$width;
      var $102=$width;
      var $sub111=($102)-8;
      var $mul112=($101)*($sub111);
      var $add113=($mul112)+8;
      var $103=$frame;
      var $arrayidx114=$103+$add113;
      HEAP[$arrayidx114]=-127;
      var $104=$frame;
      $retval=$104;
      ;
    }
  
    var $105=$retval;
    ;
    return $105;
    return null;
  }
  _QRspec_createFrame["X"]=1;

  function _QRspec_clearCache() {
    ;
    var __label__;
  
    var $i;
    $i=1;
    ;
    while(1) { 
  
      var $0=$i;
      var $cmp=((($0))|0) <= 40;
      if (!($cmp)) { __label__ = 4;break ; }
  
      var $1=$i;
      var $arrayidx=_frames30+$1;
      var $2=HEAP[$arrayidx];
      ;
      var $3=$i;
      var $arrayidx1=_frames30+$3;
      HEAP[$arrayidx1]=0;
      ;
  
      var $4=$i;
      var $inc=($4)+1;
      $i=$inc;
      __label__ = 1;continue ;
    }
  
    ;
    return;
    return;
  }
  

  function _putFinderPattern52($frame, $width, $ox, $oy) {
    ;
    var __label__;
  
    var $frame_addr;
    var $width_addr;
    var $ox_addr;
    var $oy_addr;
    var $x;
    var $y;
    var $s;
    $frame_addr=$frame;
    $width_addr=$width;
    $ox_addr=$ox;
    $oy_addr=$oy;
    var $0=$oy_addr;
    var $1=$width_addr;
    var $mul=($0)*($1);
    var $2=$ox_addr;
    var $add=($mul)+($2);
    var $3=$frame_addr;
    var $add_ptr=$3+$add;
    $frame_addr=$add_ptr;
    $s=_putFinderPattern_finder31;
    $y=0;
    ;
    $for_cond$2: while(1) { 
  
      var $4=$y;
      var $cmp=((($4))|0) < 7;
      if (!($cmp)) { __label__ = 8;break $for_cond$2; }
  
      $x=0;
      ;
      while(1) { 
  
        var $5=$x;
        var $cmp2=((($5))|0) < 7;
        if (!($cmp2)) { __label__ = 6;break ; }
  
        var $6=$x;
        var $7=$s;
        var $arrayidx=$7+$6;
        var $8=HEAP[$arrayidx];
        var $9=$x;
        var $10=$frame_addr;
        var $arrayidx4=$10+$9;
        HEAP[$arrayidx4]=$8;
        ;
  
        var $11=$x;
        var $inc=($11)+1;
        $x=$inc;
        __label__ = 3;continue ;
      }
  
      var $12=$width_addr;
      var $13=$frame_addr;
      var $add_ptr5=$13+$12;
      $frame_addr=$add_ptr5;
      var $14=$s;
      var $add_ptr6=$14+7;
      $s=$add_ptr6;
      ;
  
      var $15=$y;
      var $inc8=($15)+1;
      $y=$inc8;
      __label__ = 1;continue $for_cond$2;
    }
  
    ;
    return;
    return;
  }
  _putFinderPattern52["X"]=1;

  function _QRspec_putAlignmentPattern($version, $frame, $width) {
    ;
    var __label__;
  
    var $version_addr;
    var $frame_addr;
    var $width_addr;
    var $d;
    var $w;
    var $x;
    var $y;
    var $cx;
    var $cy;
    $version_addr=$version;
    $frame_addr=$frame;
    $width_addr=$width;
    var $0=$version_addr;
    var $cmp=((($0))|0) < 2;
    if ($cmp) { __label__ = 1;; } else { __label__ = 2;; }
    $if_then$$if_end$2: do { 
      if (__label__ == 1) {
  
        ;
      }
      else if (__label__ == 2) {
  
        var $1=$version_addr;
        var $arrayidx=_alignmentPattern+($1<<1);
        var $arrayidx1=$arrayidx+1;
        var $2=HEAP[$arrayidx1];
        var $3=$version_addr;
        var $arrayidx2=_alignmentPattern+($3<<1);
        var $arrayidx3=$arrayidx2;
        var $4=HEAP[$arrayidx3];
        var $sub=($2)-($4);
        $d=$sub;
        var $5=$d;
        var $cmp4=((($5))|0) < 0;
        if ($cmp4) { __label__ = 3;; } else { __label__ = 4;; }
        if (__label__ == 3) {
  
          $w=2;
          ;
        }
        else if (__label__ == 4) {
  
          var $6=$width_addr;
          var $7=$version_addr;
          var $arrayidx6=_alignmentPattern+($7<<1);
          var $arrayidx7=$arrayidx6;
          var $8=HEAP[$arrayidx7];
          var $sub8=($6)-($8);
          var $9=$d;
          var $div=((((($sub8))|0)/((($9))|0))|0);
          var $add=($div)+2;
          $w=$add;
          ;
        }
  
        var $10=$w;
        var $11=$w;
        var $mul=($10)*($11);
        var $sub10=($mul)-3;
        var $cmp11=((($sub10))|0)==1;
        if ($cmp11) { __label__ = 6;; } else { __label__ = 7;; }
        if (__label__ == 6) {
  
          var $12=$version_addr;
          var $arrayidx13=_alignmentPattern+($12<<1);
          var $arrayidx14=$arrayidx13;
          var $13=HEAP[$arrayidx14];
          $x=$13;
          var $14=$version_addr;
          var $arrayidx15=_alignmentPattern+($14<<1);
          var $arrayidx16=$arrayidx15;
          var $15=HEAP[$arrayidx16];
          $y=$15;
          var $16=$frame_addr;
          var $17=$width_addr;
          var $18=$x;
          var $19=$y;
          _QRspec_putAlignmentMarker($16, $17, $18, $19);
          ;
        }
        else if (__label__ == 7) {
  
          var $20=$version_addr;
          var $arrayidx18=_alignmentPattern+($20<<1);
          var $arrayidx19=$arrayidx18;
          var $21=HEAP[$arrayidx19];
          $cx=$21;
          $x=1;
          ;
          $for_cond$12: while(1) { 
  
            var $22=$x;
            var $23=$w;
            var $sub20=($23)-1;
            var $cmp21=((($22))|0) < ((($sub20))|0);
            if (!($cmp21)) { __label__ = 11;break $for_cond$12; }
  
            var $24=$frame_addr;
            var $25=$width_addr;
            var $26=$cx;
            _QRspec_putAlignmentMarker($24, $25, 6, $26);
            var $27=$frame_addr;
            var $28=$width_addr;
            var $29=$cx;
            _QRspec_putAlignmentMarker($27, $28, $29, 6);
            var $30=$d;
            var $31=$cx;
            var $add22=($31)+($30);
            $cx=$add22;
            ;
  
            var $32=$x;
            var $inc=($32)+1;
            $x=$inc;
            __label__ = 8;continue $for_cond$12;
          }
  
          var $33=$version_addr;
          var $arrayidx23=_alignmentPattern+($33<<1);
          var $arrayidx24=$arrayidx23;
          var $34=HEAP[$arrayidx24];
          $cy=$34;
          $y=0;
          ;
          $for_cond25$17: while(1) { 
  
            var $35=$y;
            var $36=$w;
            var $sub26=($36)-1;
            var $cmp27=((($35))|0) < ((($sub26))|0);
            if (!($cmp27)) { __label__ = 19;break $if_then$$if_end$2; }
  
            var $37=$version_addr;
            var $arrayidx29=_alignmentPattern+($37<<1);
            var $arrayidx30=$arrayidx29;
            var $38=HEAP[$arrayidx30];
            $cx=$38;
            $x=0;
            ;
            while(1) { 
  
              var $39=$x;
              var $40=$w;
              var $sub32=($40)-1;
              var $cmp33=((($39))|0) < ((($sub32))|0);
              if (!($cmp33)) { __label__ = 17;break ; }
  
              var $41=$frame_addr;
              var $42=$width_addr;
              var $43=$cx;
              var $44=$cy;
              _QRspec_putAlignmentMarker($41, $42, $43, $44);
              var $45=$d;
              var $46=$cx;
              var $add35=($46)+($45);
              $cx=$add35;
              ;
  
              var $47=$x;
              var $inc37=($47)+1;
              $x=$inc37;
              __label__ = 14;continue ;
            }
  
            var $48=$d;
            var $49=$cy;
            var $add39=($49)+($48);
            $cy=$add39;
            ;
  
            var $50=$y;
            var $inc41=($50)+1;
            $y=$inc41;
            __label__ = 12;continue $for_cond25$17;
          }
        }
      }
    } while(0);
  
    ;
    return;
    return;
  }
  _QRspec_putAlignmentPattern["X"]=1;

  function _QRspec_putAlignmentMarker($frame, $width, $ox, $oy) {
    ;
    var __label__;
  
    var $frame_addr;
    var $width_addr;
    var $ox_addr;
    var $oy_addr;
    var $x;
    var $y;
    var $s;
    $frame_addr=$frame;
    $width_addr=$width;
    $ox_addr=$ox;
    $oy_addr=$oy;
    var $0=$oy_addr;
    var $sub=($0)-2;
    var $1=$width_addr;
    var $mul=($sub)*($1);
    var $2=$ox_addr;
    var $add=($mul)+($2);
    var $sub1=($add)-2;
    var $3=$frame_addr;
    var $add_ptr=$3+$sub1;
    $frame_addr=$add_ptr;
    $s=_QRspec_putAlignmentMarker_finder;
    $y=0;
    ;
    $for_cond$2: while(1) { 
  
      var $4=$y;
      var $cmp=((($4))|0) < 5;
      if (!($cmp)) { __label__ = 8;break $for_cond$2; }
  
      $x=0;
      ;
      while(1) { 
  
        var $5=$x;
        var $cmp3=((($5))|0) < 5;
        if (!($cmp3)) { __label__ = 6;break ; }
  
        var $6=$x;
        var $7=$s;
        var $arrayidx=$7+$6;
        var $8=HEAP[$arrayidx];
        var $9=$x;
        var $10=$frame_addr;
        var $arrayidx5=$10+$9;
        HEAP[$arrayidx5]=$8;
        ;
  
        var $11=$x;
        var $inc=($11)+1;
        $x=$inc;
        __label__ = 3;continue ;
      }
  
      var $12=$width_addr;
      var $13=$frame_addr;
      var $add_ptr6=$13+$12;
      $frame_addr=$add_ptr6;
      var $14=$s;
      var $add_ptr7=$14+5;
      $s=$add_ptr7;
      ;
  
      var $15=$y;
      var $inc9=($15)+1;
      $y=$inc9;
      __label__ = 1;continue $for_cond$2;
    }
  
    ;
    return;
    return;
  }
  _QRspec_putAlignmentMarker["X"]=1;

  function _init_rs($symsize, $gfpoly, $fcr, $prim, $nroots, $pad) {
    ;
    var __label__;
  
    var $symsize_addr;
    var $gfpoly_addr;
    var $fcr_addr;
    var $prim_addr;
    var $nroots_addr;
    var $pad_addr;
    var $rs;
    $symsize_addr=$symsize;
    $gfpoly_addr=$gfpoly;
    $fcr_addr=$fcr;
    $prim_addr=$prim;
    $nroots_addr=$nroots;
    $pad_addr=$pad;
    var $0=HEAP[_rslist];
    $rs=$0;
    ;
    while(1) { 
  
      var $1=$rs;
      var $cmp=((($1))|0)!=0;
      if (!($cmp)) { __label__ = 16;break ; }
  
      var $2=$rs;
      var $pad1=$2+9;
      var $3=HEAP[$pad1];
      var $4=$pad_addr;
      var $cmp2=((($3))|0)!=((($4))|0);
      if ($cmp2) { __label__ = 3;; } else { __label__ = 4;; }
      if (__label__ == 3) {
  
        ;
      }
      else if (__label__ == 4) {
  
        var $5=$rs;
        var $nroots3=$5+5;
        var $6=HEAP[$nroots3];
        var $7=$nroots_addr;
        var $cmp4=((($6))|0)!=((($7))|0);
        if ($cmp4) { __label__ = 5;; } else { __label__ = 6;; }
        if (__label__ == 5) {
  
          ;
        }
        else if (__label__ == 6) {
  
          var $8=$rs;
          var $mm=$8;
          var $9=HEAP[$mm];
          var $10=$symsize_addr;
          var $cmp7=((($9))|0)!=((($10))|0);
          if ($cmp7) { __label__ = 7;; } else { __label__ = 8;; }
          if (__label__ == 7) {
  
            ;
          }
          else if (__label__ == 8) {
  
            var $11=$rs;
            var $gfpoly10=$11+10;
            var $12=HEAP[$gfpoly10];
            var $13=$gfpoly_addr;
            var $cmp11=((($12))|0)!=((($13))|0);
            if ($cmp11) { __label__ = 9;; } else { __label__ = 10;; }
            if (__label__ == 9) {
  
              ;
            }
            else if (__label__ == 10) {
  
              var $14=$rs;
              var $fcr14=$14+6;
              var $15=HEAP[$fcr14];
              var $16=$fcr_addr;
              var $cmp15=((($15))|0)!=((($16))|0);
              if ($cmp15) { __label__ = 11;; } else { __label__ = 12;; }
              if (__label__ == 11) {
  
                ;
              }
              else if (__label__ == 12) {
  
                var $17=$rs;
                var $prim18=$17+7;
                var $18=HEAP[$prim18];
                var $19=$prim_addr;
                var $cmp19=((($18))|0)!=((($19))|0);
                if (!($cmp19)) { __label__ = 14;break ; }
  
                ;
              }
            }
          }
        }
      }
  
      var $20=$rs;
      var $next=$20+11;
      var $21=HEAP[$next];
      $rs=$21;
      __label__ = 1;continue ;
    }
    if (__label__ == 16) {
  
      var $22=$symsize_addr;
      var $23=$gfpoly_addr;
      var $24=$fcr_addr;
      var $25=$prim_addr;
      var $26=$nroots_addr;
      var $27=$pad_addr;
      var $call=_init_rs_char($22, $23, $24, $25, $26, $27);
      $rs=$call;
      var $28=$rs;
      var $cmp22=((($28))|0)==0;
      if ($cmp22) { __label__ = 17;; } else { __label__ = 18;; }
      if (__label__ == 17) {
  
        ;
      }
      else if (__label__ == 18) {
  
        var $29=HEAP[_rslist];
        var $30=$rs;
        var $next25=$30+11;
        HEAP[$next25]=$29;
        var $31=$rs;
        HEAP[_rslist]=$31;
        ;
      }
    }
    else if (__label__ == 14) {
  
      ;
    }
  
    var $32=$rs;
    ;
    return $32;
    return null;
  }
  _init_rs["X"]=1;

  function _init_rs_char($symsize, $gfpoly, $fcr, $prim, $nroots, $pad) {
    ;
    var __label__;
  
    var $symsize_addr;
    var $gfpoly_addr;
    var $fcr_addr;
    var $prim_addr;
    var $nroots_addr;
    var $pad_addr;
    var $rs;
    var $i;
    var $j;
    var $sr;
    var $root;
    var $iprim;
    $symsize_addr=$symsize;
    $gfpoly_addr=$gfpoly;
    $fcr_addr=$fcr;
    $prim_addr=$prim;
    $nroots_addr=$nroots;
    $pad_addr=$pad;
    $rs=0;
    var $0=$symsize_addr;
    var $cmp=((($0))|0) < 0;
    if ($cmp) { __label__ = 2;; } else { __label__ = 1;; }
    $if_then$$lor_lhs_false$2: do { 
      if (__label__ == 1) {
  
        var $1=$symsize_addr;
        var $cmp1=((($1))|0) > 8;
        if ($cmp1) { __label__ = 2;break $if_then$$lor_lhs_false$2; }
  
        var $2=$fcr_addr;
        var $cmp2=((($2))|0) < 0;
        if ($cmp2) { __label__ = 5;; } else { __label__ = 4;; }
        $if_then5$$lor_lhs_false3$5: do { 
          if (__label__ == 4) {
  
            var $3=$fcr_addr;
            var $4=$symsize_addr;
            var $shl=1 << ($4);
            var $cmp4=((($3))|0) >= ((($shl))|0);
            if ($cmp4) { __label__ = 5;break $if_then5$$lor_lhs_false3$5; }
  
            var $5=$prim_addr;
            var $cmp7=((($5))|0) <= 0;
            if ($cmp7) { __label__ = 8;; } else { __label__ = 7;; }
            $if_then11$$lor_lhs_false8$8: do { 
              if (__label__ == 7) {
  
                var $6=$prim_addr;
                var $7=$symsize_addr;
                var $shl9=1 << ($7);
                var $cmp10=((($6))|0) >= ((($shl9))|0);
                if ($cmp10) { __label__ = 8;break $if_then11$$lor_lhs_false8$8; }
  
                var $8=$nroots_addr;
                var $cmp13=((($8))|0) < 0;
                if ($cmp13) { __label__ = 11;; } else { __label__ = 10;; }
                $if_then17$$lor_lhs_false14$11: do { 
                  if (__label__ == 10) {
  
                    var $9=$nroots_addr;
                    var $10=$symsize_addr;
                    var $shl15=1 << ($10);
                    var $cmp16=((($9))|0) >= ((($shl15))|0);
                    if ($cmp16) { __label__ = 11;break $if_then17$$lor_lhs_false14$11; }
  
                    var $11=$pad_addr;
                    var $cmp19=((($11))|0) < 0;
                    if ($cmp19) { __label__ = 14;; } else { __label__ = 13;; }
                    $if_then24$$lor_lhs_false20$14: do { 
                      if (__label__ == 13) {
  
                        var $12=$pad_addr;
                        var $13=$symsize_addr;
                        var $shl21=1 << ($13);
                        var $sub=($shl21)-1;
                        var $14=$nroots_addr;
                        var $sub22=($sub)-($14);
                        var $cmp23=((($12))|0) >= ((($sub22))|0);
                        if ($cmp23) { __label__ = 14;break $if_then24$$lor_lhs_false20$14; }
  
                        var $call=_calloc(1, 48);
                        var $15=$call;
                        $rs=$15;
                        var $16=$rs;
                        var $cmp26=((($16))|0)==0;
                        if ($cmp26) { __label__ = 16;; } else { __label__ = 17;; }
                        if (__label__ == 16) {
  
                          __label__ = 51;break $if_then$$lor_lhs_false$2;
                        }
                        else if (__label__ == 17) {
  
                          var $17=$symsize_addr;
                          var $18=$rs;
                          var $mm=$18;
                          HEAP[$mm]=$17;
                          var $19=$symsize_addr;
                          var $shl29=1 << ($19);
                          var $sub30=($shl29)-1;
                          var $20=$rs;
                          var $nn=$20+1;
                          HEAP[$nn]=$sub30;
                          var $21=$pad_addr;
                          var $22=$rs;
                          var $pad31=$22+9;
                          HEAP[$pad31]=$21;
                          var $23=$rs;
                          var $nn32=$23+1;
                          var $24=HEAP[$nn32];
                          var $add=($24)+1;
                          var $mul=($add);
                          var $call33=_malloc($mul);
                          var $25=$rs;
                          var $alpha_to=$25+2;
                          HEAP[$alpha_to]=$call33;
                          var $26=$rs;
                          var $alpha_to34=$26+2;
                          var $27=HEAP[$alpha_to34];
                          var $cmp35=((($27))|0)==0;
                          if ($cmp35) { __label__ = 18;; } else { __label__ = 19;; }
                          if (__label__ == 18) {
  
                            var $28=$rs;
                            var $29=$28;
                            ;
                            $rs=0;
                            __label__ = 51;break $if_then$$lor_lhs_false$2;
                          }
                          else if (__label__ == 19) {
  
                            var $30=$rs;
                            var $nn38=$30+1;
                            var $31=HEAP[$nn38];
                            var $add39=($31)+1;
                            var $mul40=($add39);
                            var $call41=_malloc($mul40);
                            var $32=$rs;
                            var $index_of=$32+3;
                            HEAP[$index_of]=$call41;
                            var $33=$rs;
                            var $index_of42=$33+3;
                            var $34=HEAP[$index_of42];
                            var $cmp43=((($34))|0)==0;
                            if ($cmp43) { __label__ = 20;; } else { __label__ = 21;; }
                            if (__label__ == 20) {
  
                              var $35=$rs;
                              var $alpha_to45=$35+2;
                              var $36=HEAP[$alpha_to45];
                              ;
                              var $37=$rs;
                              var $38=$37;
                              ;
                              $rs=0;
                              __label__ = 51;break $if_then$$lor_lhs_false$2;
                            }
                            else if (__label__ == 21) {
  
                              var $39=$rs;
                              var $nn47=$39+1;
                              var $40=HEAP[$nn47];
                              var $conv=((($40)) & 255);
                              var $41=$rs;
                              var $index_of48=$41+3;
                              var $42=HEAP[$index_of48];
                              var $arrayidx=$42;
                              HEAP[$arrayidx]=$conv;
                              var $43=$rs;
                              var $nn49=$43+1;
                              var $44=HEAP[$nn49];
                              var $45=$rs;
                              var $alpha_to50=$45+2;
                              var $46=HEAP[$alpha_to50];
                              var $arrayidx51=$46+$44;
                              HEAP[$arrayidx51]=0;
                              $sr=1;
                              $i=0;
                              ;
                              $for_cond$26: while(1) { 
  
                                var $47=$i;
                                var $48=$rs;
                                var $nn52=$48+1;
                                var $49=HEAP[$nn52];
                                var $cmp53=((($47))|0) < ((($49))|0);
                                if (!($cmp53)) { __label__ = 27;break $for_cond$26; }
  
                                var $50=$i;
                                var $conv55=((($50)) & 255);
                                var $51=$sr;
                                var $52=$rs;
                                var $index_of56=$52+3;
                                var $53=HEAP[$index_of56];
                                var $arrayidx57=$53+$51;
                                HEAP[$arrayidx57]=$conv55;
                                var $54=$sr;
                                var $conv58=((($54)) & 255);
                                var $55=$i;
                                var $56=$rs;
                                var $alpha_to59=$56+2;
                                var $57=HEAP[$alpha_to59];
                                var $arrayidx60=$57+$55;
                                HEAP[$arrayidx60]=$conv58;
                                var $58=$sr;
                                var $shl61=($58) << 1;
                                $sr=$shl61;
                                var $59=$sr;
                                var $60=$symsize_addr;
                                var $shl62=1 << ($60);
                                var $and=($59) & ($shl62);
                                var $tobool=((($and))|0)!=0;
                                if ($tobool) { __label__ = 24;; } else { __label__ = 25;; }
                                if (__label__ == 24) {
  
                                  var $61=$gfpoly_addr;
                                  var $62=$sr;
                                  var $xor=($62) ^ ($61);
                                  $sr=$xor;
                                  ;
                                }
  
                                var $63=$rs;
                                var $nn65=$63+1;
                                var $64=HEAP[$nn65];
                                var $65=$sr;
                                var $and66=($65) & ($64);
                                $sr=$and66;
                                ;
  
                                var $66=$i;
                                var $inc=($66)+1;
                                $i=$inc;
                                __label__ = 22;continue $for_cond$26;
                              }
  
                              var $67=$sr;
                              var $cmp67=((($67))|0)!=1;
                              if ($cmp67) { __label__ = 28;; } else { __label__ = 29;; }
                              if (__label__ == 28) {
  
                                var $68=$rs;
                                var $alpha_to70=$68+2;
                                var $69=HEAP[$alpha_to70];
                                ;
                                var $70=$rs;
                                var $index_of71=$70+3;
                                var $71=HEAP[$index_of71];
                                ;
                                var $72=$rs;
                                var $73=$72;
                                ;
                                $rs=0;
                                __label__ = 51;break $if_then$$lor_lhs_false$2;
                              }
                              else if (__label__ == 29) {
  
                                var $74=$nroots_addr;
                                var $add73=($74)+1;
                                var $mul74=($add73);
                                var $call75=_malloc($mul74);
                                var $75=$rs;
                                var $genpoly=$75+4;
                                HEAP[$genpoly]=$call75;
                                var $76=$rs;
                                var $genpoly76=$76+4;
                                var $77=HEAP[$genpoly76];
                                var $cmp77=((($77))|0)==0;
                                if ($cmp77) { __label__ = 30;; } else { __label__ = 31;; }
                                if (__label__ == 30) {
  
                                  var $78=$rs;
                                  var $alpha_to80=$78+2;
                                  var $79=HEAP[$alpha_to80];
                                  ;
                                  var $80=$rs;
                                  var $index_of81=$80+3;
                                  var $81=HEAP[$index_of81];
                                  ;
                                  var $82=$rs;
                                  var $83=$82;
                                  ;
                                  $rs=0;
                                  __label__ = 51;break $if_then$$lor_lhs_false$2;
                                }
                                else if (__label__ == 31) {
  
                                  var $84=$fcr_addr;
                                  var $85=$rs;
                                  var $fcr83=$85+6;
                                  HEAP[$fcr83]=$84;
                                  var $86=$prim_addr;
                                  var $87=$rs;
                                  var $prim84=$87+7;
                                  HEAP[$prim84]=$86;
                                  var $88=$nroots_addr;
                                  var $89=$rs;
                                  var $nroots85=$89+5;
                                  HEAP[$nroots85]=$88;
                                  var $90=$gfpoly_addr;
                                  var $91=$rs;
                                  var $gfpoly86=$91+10;
                                  HEAP[$gfpoly86]=$90;
                                  $iprim=1;
                                  ;
                                  $for_cond87$40: while(1) { 
  
                                    var $92=$iprim;
                                    var $93=$prim_addr;
                                    var $rem=((($92))|0)%((($93))|0);
                                    var $cmp88=((($rem))|0)!=0;
                                    if (!($cmp88)) { __label__ = 35;break $for_cond87$40; }
  
                                    ;
  
                                    var $94=$rs;
                                    var $nn92=$94+1;
                                    var $95=HEAP[$nn92];
                                    var $96=$iprim;
                                    var $add93=($96)+($95);
                                    $iprim=$add93;
                                    __label__ = 32;continue $for_cond87$40;
                                  }
  
                                  var $97=$iprim;
                                  var $98=$prim_addr;
                                  var $div=((((($97))|0)/((($98))|0))|0);
                                  var $99=$rs;
                                  var $iprim95=$99+8;
                                  HEAP[$iprim95]=$div;
                                  var $100=$rs;
                                  var $genpoly96=$100+4;
                                  var $101=HEAP[$genpoly96];
                                  var $arrayidx97=$101;
                                  HEAP[$arrayidx97]=1;
                                  $i=0;
                                  var $102=$fcr_addr;
                                  var $103=$prim_addr;
                                  var $mul98=($102)*($103);
                                  $root=$mul98;
                                  ;
                                  $for_cond99$45: while(1) { 
  
                                    var $104=$i;
                                    var $105=$nroots_addr;
                                    var $cmp100=((($104))|0) < ((($105))|0);
                                    if (!($cmp100)) { __label__ = 46;break $for_cond99$45; }
  
                                    var $106=$i;
                                    var $add103=($106)+1;
                                    var $107=$rs;
                                    var $genpoly104=$107+4;
                                    var $108=HEAP[$genpoly104];
                                    var $arrayidx105=$108+$add103;
                                    HEAP[$arrayidx105]=1;
                                    var $109=$i;
                                    $j=$109;
                                    ;
                                    while(1) { 
  
                                      var $110=$j;
                                      var $cmp107=((($110))|0) > 0;
                                      if (!($cmp107)) { __label__ = 44;break ; }
  
                                      var $111=$j;
                                      var $112=$rs;
                                      var $genpoly110=$112+4;
                                      var $113=HEAP[$genpoly110];
                                      var $arrayidx111=$113+$111;
                                      var $114=HEAP[$arrayidx111];
                                      var $conv112=((($114))&255);
                                      var $cmp113=((($conv112))|0)!=0;
                                      if ($cmp113) { __label__ = 40;; } else { __label__ = 41;; }
                                      if (__label__ == 40) {
  
                                        var $115=$j;
                                        var $sub116=($115)-1;
                                        var $116=$rs;
                                        var $genpoly117=$116+4;
                                        var $117=HEAP[$genpoly117];
                                        var $arrayidx118=$117+$sub116;
                                        var $118=HEAP[$arrayidx118];
                                        var $conv119=((($118))&255);
                                        var $119=$rs;
                                        var $120=$j;
                                        var $121=$rs;
                                        var $genpoly120=$121+4;
                                        var $122=HEAP[$genpoly120];
                                        var $arrayidx121=$122+$120;
                                        var $123=HEAP[$arrayidx121];
                                        var $idxprom=((($123))&255);
                                        var $124=$rs;
                                        var $index_of122=$124+3;
                                        var $125=HEAP[$index_of122];
                                        var $arrayidx123=$125+$idxprom;
                                        var $126=HEAP[$arrayidx123];
                                        var $conv124=((($126))&255);
                                        var $127=$root;
                                        var $add125=($conv124)+($127);
                                        var $call126=_modnn($119, $add125);
                                        var $128=$rs;
                                        var $alpha_to127=$128+2;
                                        var $129=HEAP[$alpha_to127];
                                        var $arrayidx128=$129+$call126;
                                        var $130=HEAP[$arrayidx128];
                                        var $conv129=((($130))&255);
                                        var $xor130=($conv119) ^ ($conv129);
                                        var $conv131=((($xor130)) & 255);
                                        var $131=$j;
                                        var $132=$rs;
                                        var $genpoly132=$132+4;
                                        var $133=HEAP[$genpoly132];
                                        var $arrayidx133=$133+$131;
                                        HEAP[$arrayidx133]=$conv131;
                                        ;
                                      }
                                      else if (__label__ == 41) {
  
                                        var $134=$j;
                                        var $sub134=($134)-1;
                                        var $135=$rs;
                                        var $genpoly135=$135+4;
                                        var $136=HEAP[$genpoly135];
                                        var $arrayidx136=$136+$sub134;
                                        var $137=HEAP[$arrayidx136];
                                        var $138=$j;
                                        var $139=$rs;
                                        var $genpoly137=$139+4;
                                        var $140=HEAP[$genpoly137];
                                        var $arrayidx138=$140+$138;
                                        HEAP[$arrayidx138]=$137;
                                        ;
                                      }
  
                                      ;
  
                                      var $141=$j;
                                      var $dec=($141)-1;
                                      $j=$dec;
                                      __label__ = 38;continue ;
                                    }
  
                                    var $142=$rs;
                                    var $143=$rs;
                                    var $genpoly142=$143+4;
                                    var $144=HEAP[$genpoly142];
                                    var $arrayidx143=$144;
                                    var $145=HEAP[$arrayidx143];
                                    var $idxprom144=((($145))&255);
                                    var $146=$rs;
                                    var $index_of145=$146+3;
                                    var $147=HEAP[$index_of145];
                                    var $arrayidx146=$147+$idxprom144;
                                    var $148=HEAP[$arrayidx146];
                                    var $conv147=((($148))&255);
                                    var $149=$root;
                                    var $add148=($conv147)+($149);
                                    var $call149=_modnn($142, $add148);
                                    var $150=$rs;
                                    var $alpha_to150=$150+2;
                                    var $151=HEAP[$alpha_to150];
                                    var $arrayidx151=$151+$call149;
                                    var $152=HEAP[$arrayidx151];
                                    var $153=$rs;
                                    var $genpoly152=$153+4;
                                    var $154=HEAP[$genpoly152];
                                    var $arrayidx153=$154;
                                    HEAP[$arrayidx153]=$152;
                                    ;
  
                                    var $155=$i;
                                    var $inc155=($155)+1;
                                    $i=$inc155;
                                    var $156=$prim_addr;
                                    var $157=$root;
                                    var $add156=($157)+($156);
                                    $root=$add156;
                                    __label__ = 36;continue $for_cond99$45;
                                  }
  
                                  $i=0;
                                  ;
                                  while(1) { 
  
                                    var $158=$i;
                                    var $159=$nroots_addr;
                                    var $cmp159=((($158))|0) <= ((($159))|0);
                                    if (!($cmp159)) { __label__ = 50;break ; }
  
                                    var $160=$i;
                                    var $161=$rs;
                                    var $genpoly162=$161+4;
                                    var $162=HEAP[$genpoly162];
                                    var $arrayidx163=$162+$160;
                                    var $163=HEAP[$arrayidx163];
                                    var $idxprom164=((($163))&255);
                                    var $164=$rs;
                                    var $index_of165=$164+3;
                                    var $165=HEAP[$index_of165];
                                    var $arrayidx166=$165+$idxprom164;
                                    var $166=HEAP[$arrayidx166];
                                    var $167=$i;
                                    var $168=$rs;
                                    var $genpoly167=$168+4;
                                    var $169=HEAP[$genpoly167];
                                    var $arrayidx168=$169+$167;
                                    HEAP[$arrayidx168]=$166;
                                    ;
  
                                    var $170=$i;
                                    var $inc170=($170)+1;
                                    $i=$inc170;
                                    __label__ = 47;continue ;
                                  }
  
                                  __label__ = 51;break $if_then$$lor_lhs_false$2;
                                }
                              }
                            }
                          }
                        }
                      }
                    } while(0);
  
                    __label__ = 51;break $if_then$$lor_lhs_false$2;
                  }
                } while(0);
  
                __label__ = 51;break $if_then$$lor_lhs_false$2;
              }
            } while(0);
  
            __label__ = 51;break $if_then$$lor_lhs_false$2;
          }
        } while(0);
  
        __label__ = 51;break $if_then$$lor_lhs_false$2;
      }
    } while(0);
    if (__label__ == 2) {
  
      ;
    }
  
    var $171=$rs;
    ;
    return $171;
    return null;
  }
  _init_rs_char["X"]=1;

  function _free_rs_char($rs) {
    ;
    var __label__;
  
    var $rs_addr;
    $rs_addr=$rs;
    var $0=$rs_addr;
    var $alpha_to=$0+2;
    var $1=HEAP[$alpha_to];
    ;
    var $2=$rs_addr;
    var $index_of=$2+3;
    var $3=HEAP[$index_of];
    ;
    var $4=$rs_addr;
    var $genpoly=$4+4;
    var $5=HEAP[$genpoly];
    ;
    var $6=$rs_addr;
    var $7=$6;
    ;
    ;
    return;
    return;
  }
  

  function _free_rs_cache() {
    ;
    var __label__;
  
    var $rs;
    var $next;
    var $0=HEAP[_rslist];
    $rs=$0;
    ;
    while(1) { 
  
      var $1=$rs;
      var $cmp=((($1))|0)!=0;
      if (!($cmp)) { __label__ = 3;break ; }
  
      var $2=$rs;
      var $next1=$2+11;
      var $3=HEAP[$next1];
      $next=$3;
      var $4=$rs;
      _free_rs_char($4);
      var $5=$next;
      $rs=$5;
      __label__ = 1;continue ;
    }
  
    HEAP[_rslist]=0;
    ;
    return;
    return;
  }
  

  function _encode_rs_char($rs, $data, $parity) {
    ;
    var __label__;
  
    var $rs_addr;
    var $data_addr;
    var $parity_addr;
    var $i;
    var $j;
    var $feedback;
    $rs_addr=$rs;
    $data_addr=$data;
    $parity_addr=$parity;
    var $0=$parity_addr;
    var $1=$rs_addr;
    var $nroots=$1+5;
    var $2=HEAP[$nroots];
    var $mul=($2);
    for (var mspi = 0; mspi < $mul; mspi++) {
    HEAP[$0+mspi]=0
    };
    $i=0;
    ;
    $for_cond$2: while(1) { 
  
      var $3=$i;
      var $4=$rs_addr;
      var $nn=$4+1;
      var $5=HEAP[$nn];
      var $6=$rs_addr;
      var $nroots1=$6+5;
      var $7=HEAP[$nroots1];
      var $sub=($5)-($7);
      var $8=$rs_addr;
      var $pad=$8+9;
      var $9=HEAP[$pad];
      var $sub2=($sub)-($9);
      var $cmp=((($3))|0) < ((($sub2))|0);
      if (!($cmp)) { __label__ = 13;break $for_cond$2; }
  
      var $10=$i;
      var $11=$data_addr;
      var $arrayidx=$11+$10;
      var $12=HEAP[$arrayidx];
      var $conv=((($12))&255);
      var $13=$parity_addr;
      var $arrayidx3=$13;
      var $14=HEAP[$arrayidx3];
      var $conv4=((($14))&255);
      var $xor=($conv) ^ ($conv4);
      var $15=$rs_addr;
      var $index_of=$15+3;
      var $16=HEAP[$index_of];
      var $arrayidx5=$16+$xor;
      var $17=HEAP[$arrayidx5];
      $feedback=$17;
      var $18=$feedback;
      var $conv6=((($18))&255);
      var $19=$rs_addr;
      var $nn7=$19+1;
      var $20=HEAP[$nn7];
      var $cmp8=((($conv6))|0)!=((($20))|0);
      if ($cmp8) { __label__ = 3;; } else { __label__ = 8;; }
      if (__label__ == 3) {
  
        $j=1;
        ;
        while(1) { 
  
          var $21=$j;
          var $22=$rs_addr;
          var $nroots11=$22+5;
          var $23=HEAP[$nroots11];
          var $cmp12=((($21))|0) < ((($23))|0);
          if (!($cmp12)) { __label__ = 7;break ; }
  
          var $24=$rs_addr;
          var $25=$feedback;
          var $conv15=((($25))&255);
          var $26=$rs_addr;
          var $nroots16=$26+5;
          var $27=HEAP[$nroots16];
          var $28=$j;
          var $sub17=($27)-($28);
          var $29=$rs_addr;
          var $genpoly=$29+4;
          var $30=HEAP[$genpoly];
          var $arrayidx18=$30+$sub17;
          var $31=HEAP[$arrayidx18];
          var $conv19=((($31))&255);
          var $add=($conv15)+($conv19);
          var $call=_modnn($24, $add);
          var $32=$rs_addr;
          var $alpha_to=$32+2;
          var $33=HEAP[$alpha_to];
          var $arrayidx20=$33+$call;
          var $34=HEAP[$arrayidx20];
          var $conv21=((($34))&255);
          var $35=$j;
          var $36=$parity_addr;
          var $arrayidx22=$36+$35;
          var $37=HEAP[$arrayidx22];
          var $conv23=((($37))&255);
          var $xor24=($conv23) ^ ($conv21);
          var $conv25=((($xor24)) & 255);
          HEAP[$arrayidx22]=$conv25;
          ;
  
          var $38=$j;
          var $inc=($38)+1;
          $j=$inc;
          __label__ = 4;continue ;
        }
  
        ;
      }
  
      var $39=$parity_addr;
      var $arrayidx26=$39;
      var $40=$parity_addr;
      var $arrayidx27=$40+1;
      var $41=$rs_addr;
      var $nroots28=$41+5;
      var $42=HEAP[$nroots28];
      var $sub29=($42)-1;
      var $mul30=($sub29);
      _llvm_memmove_p0i8_p0i8_i32($arrayidx26, $arrayidx27, $mul30, 1, 0);
      var $43=$feedback;
      var $conv31=((($43))&255);
      var $44=$rs_addr;
      var $nn32=$44+1;
      var $45=HEAP[$nn32];
      var $cmp33=((($conv31))|0)!=((($45))|0);
      if ($cmp33) { __label__ = 9;; } else { __label__ = 10;; }
      if (__label__ == 9) {
  
        var $46=$rs_addr;
        var $47=$feedback;
        var $conv36=((($47))&255);
        var $48=$rs_addr;
        var $genpoly37=$48+4;
        var $49=HEAP[$genpoly37];
        var $arrayidx38=$49;
        var $50=HEAP[$arrayidx38];
        var $conv39=((($50))&255);
        var $add40=($conv36)+($conv39);
        var $call41=_modnn($46, $add40);
        var $51=$rs_addr;
        var $alpha_to42=$51+2;
        var $52=HEAP[$alpha_to42];
        var $arrayidx43=$52+$call41;
        var $53=HEAP[$arrayidx43];
        var $54=$rs_addr;
        var $nroots44=$54+5;
        var $55=HEAP[$nroots44];
        var $sub45=($55)-1;
        var $56=$parity_addr;
        var $arrayidx46=$56+$sub45;
        HEAP[$arrayidx46]=$53;
        ;
      }
      else if (__label__ == 10) {
  
        var $57=$rs_addr;
        var $nroots47=$57+5;
        var $58=HEAP[$nroots47];
        var $sub48=($58)-1;
        var $59=$parity_addr;
        var $arrayidx49=$59+$sub48;
        HEAP[$arrayidx49]=0;
        ;
      }
  
      ;
  
      var $60=$i;
      var $inc52=($60)+1;
      $i=$inc52;
      __label__ = 1;continue $for_cond$2;
    }
  
    ;
    return;
    return;
  }
  _encode_rs_char["X"]=1;

  function _modnn($rs, $x) {
    ;
    var __label__;
  
    var $rs_addr;
    var $x_addr;
    $rs_addr=$rs;
    $x_addr=$x;
    ;
    while(1) { 
  
      var $0=$x_addr;
      var $1=$rs_addr;
      var $nn=$1+1;
      var $2=HEAP[$nn];
      var $cmp=((($0))|0) >= ((($2))|0);
      if (!($cmp)) { __label__ = 3;break ; }
  
      var $3=$rs_addr;
      var $nn1=$3+1;
      var $4=HEAP[$nn1];
      var $5=$x_addr;
      var $sub=($5)-($4);
      $x_addr=$sub;
      var $6=$x_addr;
      var $7=$rs_addr;
      var $mm=$7;
      var $8=HEAP[$mm];
      var $shr=($6) >> ((($8))|0);
      var $9=$x_addr;
      var $10=$rs_addr;
      var $nn2=$10+1;
      var $11=HEAP[$nn2];
      var $and=($9) & ($11);
      var $add=($shr)+($and);
      $x_addr=$add;
      __label__ = 1;continue ;
    }
  
    var $12=$x_addr;
    ;
    return $12;
    return null;
  }
  

  function _Split_splitStringToQRinput($string, $input, $hint, $casesensitive) {
    ;
    var __label__;
  
    var $retval;
    var $string_addr;
    var $input_addr;
    var $hint_addr;
    var $casesensitive_addr;
    var $newstr;
    var $ret;
    $string_addr=$string;
    $input_addr=$input;
    $hint_addr=$hint;
    $casesensitive_addr=$casesensitive;
    var $0=$string_addr;
    var $cmp=((($0))|0)==0;
    if ($cmp) { __label__ = 2;; } else { __label__ = 1;; }
    $if_then$$lor_lhs_false$2: do { 
      if (__label__ == 1) {
  
        var $1=$string_addr;
        var $2=HEAP[$1];
        var $conv=(tempInt=(($2)),(tempInt>=128?tempInt-256:tempInt));
        var $cmp1=((($conv))|0)==0;
        if ($cmp1) { __label__ = 2;break $if_then$$lor_lhs_false$2; }
  
        var $3=$casesensitive_addr;
        var $tobool=((($3))|0)!=0;
        if ($tobool) { __label__ = 7;; } else { __label__ = 4;; }
        if (__label__ == 7) {
  
          var $11=$string_addr;
          var $12=$input_addr;
          var $13=$hint_addr;
          var $call10=_Split_splitString($11, $12, $13);
          $ret=$call10;
          ;
        }
        else if (__label__ == 4) {
  
          var $4=$string_addr;
          var $5=$hint_addr;
          var $call4=_dupAndToUpper($4, $5);
          $newstr=$call4;
          var $6=$newstr;
          var $cmp5=((($6))|0)==0;
          if ($cmp5) { __label__ = 5;; } else { __label__ = 6;; }
          if (__label__ == 5) {
  
            $retval=-1;
            __label__ = 9;break $if_then$$lor_lhs_false$2;
          }
          else if (__label__ == 6) {
  
            var $7=$newstr;
            var $8=$input_addr;
            var $9=$hint_addr;
            var $call9=_Split_splitString($7, $8, $9);
            $ret=$call9;
            var $10=$newstr;
            ;
            ;
          }
        }
  
        var $14=$ret;
        $retval=$14;
        __label__ = 9;break $if_then$$lor_lhs_false$2;
      }
    } while(0);
    if (__label__ == 2) {
  
      var $call=___errno();
      HEAP[$call]=22;
      $retval=-1;
      ;
    }
  
    var $15=$retval;
    ;
    return $15;
    return null;
  }
  _Split_splitStringToQRinput["X"]=1;

  function _dupAndToUpper($str, $hint) {
    ;
    var __label__;
  
    var $retval;
    var $str_addr;
    var $hint_addr;
    var $newstr;
    var $p;
    var $mode;
    $str_addr=$str;
    $hint_addr=$hint;
    var $0=$str_addr;
    var $call=_strdup($0);
    $newstr=$call;
    var $1=$newstr;
    var $cmp=((($1))|0)==0;
    if ($cmp) { __label__ = 1;; } else { __label__ = 2;; }
    if (__label__ == 1) {
  
      $retval=0;
      ;
    }
    else if (__label__ == 2) {
  
      var $2=$newstr;
      $p=$2;
      ;
      $while_cond$5: while(1) { 
  
        var $3=$p;
        var $4=HEAP[$3];
        var $conv=(tempInt=(($4)),(tempInt>=128?tempInt-256:tempInt));
        var $cmp1=((($conv))|0)!=0;
        if (!($cmp1)) { __label__ = 11;break $while_cond$5; }
  
        var $5=$p;
        var $6=$hint_addr;
        var $call3=_Split_identifyMode($5, $6);
        $mode=$call3;
        var $7=$mode;
        var $cmp4=((($7))|0)==3;
        if ($cmp4) { __label__ = 5;; } else { __label__ = 6;; }
        if (__label__ == 5) {
  
          var $8=$p;
          var $add_ptr=$8+2;
          $p=$add_ptr;
          ;
        }
        else if (__label__ == 6) {
  
          var $9=$p;
          var $10=HEAP[$9];
          var $conv7=(tempInt=(($10)),(tempInt>=128?tempInt-256:tempInt));
          var $cmp8=((($conv7))|0) >= 97;
          if ($cmp8) { __label__ = 7;; } else { __label__ = 9;; }
          $land_lhs_true$$if_end16$11: do { 
            if (__label__ == 7) {
  
              var $11=$p;
              var $12=HEAP[$11];
              var $conv10=(tempInt=(($12)),(tempInt>=128?tempInt-256:tempInt));
              var $cmp11=((($conv10))|0) <= 122;
              if (!($cmp11)) { __label__ = 9;break $land_lhs_true$$if_end16$11; }
  
              var $13=$p;
              var $14=HEAP[$13];
              var $conv14=(tempInt=(($14)),(tempInt>=128?tempInt-256:tempInt));
              var $sub=($conv14)-32;
              var $conv15=((($sub)) & 255);
              var $15=$p;
              HEAP[$15]=$conv15;
              ;
            }
          } while(0);
  
          var $16=$p;
          var $incdec_ptr=$16+1;
          $p=$incdec_ptr;
          ;
        }
  
        __label__ = 3;continue $while_cond$5;
      }
  
      var $17=$newstr;
      $retval=$17;
      ;
    }
  
    var $18=$retval;
    ;
    return $18;
    return null;
  }
  _dupAndToUpper["X"]=1;

  function _Split_splitString($string, $input, $hint) {
    ;
    var __label__;
  
    var $retval;
    var $string_addr;
    var $input_addr;
    var $hint_addr;
    var $length;
    var $mode;
    $string_addr=$string;
    $input_addr=$input;
    $hint_addr=$hint;
    var $0=$string_addr;
    var $1=HEAP[$0];
    var $conv=(tempInt=(($1)),(tempInt>=128?tempInt-256:tempInt));
    var $cmp=((($conv))|0)==0;
    if ($cmp) { __label__ = 1;; } else { __label__ = 2;; }
    if (__label__ == 1) {
  
      $retval=0;
      ;
    }
    else if (__label__ == 2) {
  
      var $2=$string_addr;
      var $3=$hint_addr;
      var $call=_Split_identifyMode($2, $3);
      $mode=$call;
      var $4=$mode;
      var $cmp2=((($4))|0)==0;
      if ($cmp2) { __label__ = 3;; } else { __label__ = 4;; }
      if (__label__ == 3) {
  
        var $5=$string_addr;
        var $6=$input_addr;
        var $7=$hint_addr;
        var $call5=_Split_eatNum($5, $6, $7);
        $length=$call5;
        ;
      }
      else if (__label__ == 4) {
  
        var $8=$mode;
        var $cmp6=((($8))|0)==1;
        if ($cmp6) { __label__ = 5;; } else { __label__ = 6;; }
        if (__label__ == 5) {
  
          var $9=$string_addr;
          var $10=$input_addr;
          var $11=$hint_addr;
          var $call9=_Split_eatAn($9, $10, $11);
          $length=$call9;
          ;
        }
        else if (__label__ == 6) {
  
          var $12=$mode;
          var $cmp11=((($12))|0)==3;
          if ($cmp11) { __label__ = 7;; } else { __label__ = 9;; }
          $land_lhs_true$$if_else17$11: do { 
            if (__label__ == 7) {
  
              var $13=$hint_addr;
              var $cmp13=((($13))|0)==3;
              if (!($cmp13)) { __label__ = 9;break $land_lhs_true$$if_else17$11; }
  
              var $14=$string_addr;
              var $15=$input_addr;
              var $16=$hint_addr;
              var $call16=_Split_eatKanji($14, $15, $16);
              $length=$call16;
              __label__ = 10;break $land_lhs_true$$if_else17$11;
            }
          } while(0);
          if (__label__ == 9) {
  
            var $17=$string_addr;
            var $18=$input_addr;
            var $19=$hint_addr;
            var $call18=_Split_eat8($17, $18, $19);
            $length=$call18;
            ;
          }
  
          ;
        }
  
        ;
      }
  
      var $20=$length;
      var $cmp22=((($20))|0)==0;
      if ($cmp22) { __label__ = 13;; } else { __label__ = 14;; }
      if (__label__ == 13) {
  
        $retval=0;
        ;
      }
      else if (__label__ == 14) {
  
        var $21=$length;
        var $cmp26=((($21))|0) < 0;
        if ($cmp26) { __label__ = 15;; } else { __label__ = 16;; }
        if (__label__ == 15) {
  
          $retval=-1;
          ;
        }
        else if (__label__ == 16) {
  
          var $22=$length;
          var $23=$string_addr;
          var $arrayidx=$23+$22;
          var $24=$input_addr;
          var $25=$hint_addr;
          var $call30=_Split_splitString($arrayidx, $24, $25);
          $retval=$call30;
          ;
        }
      }
    }
  
    var $26=$retval;
    ;
    return $26;
    return null;
  }
  _Split_splitString["X"]=1;

  function _Split_identifyMode($string, $hint) {
    ;
    var __label__;
    var __lastLabel__ = null;
  
    var $retval;
    var $string_addr;
    var $hint_addr;
    var $c;
    var $d;
    var $word;
    $string_addr=$string;
    $hint_addr=$hint;
    var $0=$string_addr;
    var $arrayidx=$0;
    var $1=HEAP[$arrayidx];
    $c=$1;
    var $2=$c;
    var $conv=((($2))&255);
    var $cmp=((($conv))|0)==0;
    if ($cmp) { __label__ = 1;; } else { __label__ = 2;; }
    $if_then$$if_end$2: do { 
      if (__label__ == 1) {
  
        $retval=-1;
        ;
      }
      else if (__label__ == 2) {
  
        var $3=$c;
        var $conv2=(tempInt=(($3)),(tempInt>=128?tempInt-256:tempInt));
        var $sub=($conv2)-48;
        var $conv3=((($sub)) & 255);
        var $conv4=((($conv3))&255);
        var $cmp5=((($conv4))|0) < 10;
        if ($cmp5) { __label__ = 3;; } else { __label__ = 4;; }
        if (__label__ == 3) {
  
          $retval=0;
          ;
        }
        else if (__label__ == 4) {
  
          var $4=$c;
          var $conv8=((($4))&255);
          var $and=($conv8) & 128;
          var $tobool=((($and))|0)!=0;
          if ($tobool) { __label__ = 5;; } else { __label__ = 6;; }
          if (__label__ == 5) {
  
            __lastLabel__ = 5; ;
          }
          else if (__label__ == 6) {
  
            var $5=$c;
            var $conv9=((($5))&255);
            var $arrayidx10=_QRinput_anTable+$conv9;
            var $6=HEAP[$arrayidx10];
            var $conv11=(tempInt=(($6)),(tempInt>=128?tempInt-256:tempInt));
            __lastLabel__ = 6; ;
          }
  
          var $cond=__lastLabel__ == 5 ? -1 : ($conv11);
          var $cmp12=((($cond))|0) >= 0;
          if ($cmp12) { __label__ = 8;; } else { __label__ = 9;; }
          if (__label__ == 8) {
  
            $retval=1;
            ;
          }
          else if (__label__ == 9) {
  
            var $7=$hint_addr;
            var $cmp16=((($7))|0)==3;
            if ($cmp16) { __label__ = 10;; } else { __label__ = 18;; }
            if (__label__ == 10) {
  
              var $8=$string_addr;
              var $arrayidx19=$8+1;
              var $9=HEAP[$arrayidx19];
              $d=$9;
              var $10=$d;
              var $conv20=((($10))&255);
              var $cmp21=((($conv20))|0)!=0;
              if ($cmp21) { __label__ = 11;; } else { __label__ = 17;; }
              $if_then23$$if_end37$17: do { 
                if (__label__ == 11) {
  
                  var $11=$c;
                  var $conv24=((($11))&255);
                  var $shl=($conv24) << 8;
                  var $12=$d;
                  var $conv25=((($12))&255);
                  var $or=($shl) | ($conv25);
                  $word=$or;
                  var $13=$word;
                  var $cmp26=((($13))>>>0) >= 33088;
                  if ($cmp26) { __label__ = 12;; } else { __label__ = 13;; }
                  $land_lhs_true$$lor_lhs_false$19: do { 
                    if (__label__ == 12) {
  
                      var $14=$word;
                      var $cmp28=((($14))>>>0) <= 40956;
                      if ($cmp28) { __label__ = 15;break $land_lhs_true$$lor_lhs_false$19; } else { __label__ = 13;break $land_lhs_true$$lor_lhs_false$19; }
                    }
                  } while(0);
                  $if_then35$$lor_lhs_false$21: do { 
                    if (__label__ == 13) {
  
                      var $15=$word;
                      var $cmp30=((($15))>>>0) >= 57408;
                      if ($cmp30) { __label__ = 14;; } else { __label__ = 16;; }
                      if (__label__ == 14) {
  
                        var $16=$word;
                        var $cmp33=((($16))>>>0) <= 60351;
                        if ($cmp33) { __label__ = 15;break $if_then35$$lor_lhs_false$21; }
                      }
  
                      __label__ = 17;break $if_then23$$if_end37$17;
                    }
                  } while(0);
  
                  $retval=3;
                  __label__ = 21;break $if_then$$if_end$2;
                }
              } while(0);
  
              ;
            }
  
            ;
  
            ;
  
            $retval=2;
            ;
          }
        }
      }
    } while(0);
  
    var $17=$retval;
    ;
    return $17;
    return null;
  }
  _Split_identifyMode["X"]=1;

  function _Split_eatNum($string, $input, $hint) {
    ;
    var __label__;
  
    var $retval;
    var $string_addr;
    var $input_addr;
    var $hint_addr;
    var $p;
    var $ret;
    var $run;
    var $dif;
    var $ln;
    var $mode;
    $string_addr=$string;
    $input_addr=$input;
    $hint_addr=$hint;
    var $0=$input_addr;
    var $version=$0;
    var $1=HEAP[$version];
    var $call=_QRspec_lengthIndicator(0, $1);
    $ln=$call;
    var $2=$string_addr;
    $p=$2;
    ;
    $while_cond$2: while(1) { 
  
      var $3=$p;
      var $4=HEAP[$3];
      var $conv=(tempInt=(($4)),(tempInt>=128?tempInt-256:tempInt));
      var $sub=($conv)-48;
      var $conv1=((($sub)) & 255);
      var $conv2=((($conv1))&255);
      var $cmp=((($conv2))|0) < 10;
      if (!($cmp)) { __label__ = 3;break $while_cond$2; }
  
      var $5=$p;
      var $incdec_ptr=$5+1;
      $p=$incdec_ptr;
      __label__ = 1;continue $while_cond$2;
    }
  
    var $6=$p;
    var $7=$string_addr;
    var $sub_ptr_lhs_cast=($6) /* Warning: ptrtoint, .ll line 14771 */;
    var $sub_ptr_rhs_cast=($7) /* Warning: ptrtoint, .ll line 14772 */;
    var $sub_ptr_sub=($sub_ptr_lhs_cast)-($sub_ptr_rhs_cast);
    $run=$sub_ptr_sub;
    var $8=$p;
    var $9=$hint_addr;
    var $call4=_Split_identifyMode($8, $9);
    $mode=$call4;
    var $10=$mode;
    var $cmp5=((($10))|0)==2;
    if ($cmp5) { __label__ = 4;; } else { __label__ = 7;; }
    $if_then$$if_end18$6: do { 
      if (__label__ == 4) {
  
        var $11=$run;
        var $call7=_QRinput_estimateBitsModeNum($11);
        var $add=($call7)+4;
        var $12=$ln;
        var $add8=($add)+($12);
        var $call9=_QRinput_estimateBitsMode8(1);
        var $add10=($add8)+($call9);
        var $13=$run;
        var $add11=($13)+1;
        var $call12=_QRinput_estimateBitsMode8($add11);
        var $sub13=($add10)-($call12);
        $dif=$sub13;
        var $14=$dif;
        var $cmp14=((($14))|0) > 0;
        if ($cmp14) { __label__ = 5;; } else { __label__ = 6;; }
        if (__label__ == 5) {
  
          var $15=$string_addr;
          var $16=$input_addr;
          var $17=$hint_addr;
          var $call17=_Split_eat8($15, $16, $17);
          $retval=$call17;
          __label__ = 14;break $if_then$$if_end18$6;
        }
        else if (__label__ == 6) {
  
          __label__ = 7;break $if_then$$if_end18$6;
        }
      }
    } while(0);
    $return$$if_end18$11: do { 
      if (__label__ == 7) {
  
        var $18=$mode;
        var $cmp19=((($18))|0)==1;
        if ($cmp19) { __label__ = 8;; } else { __label__ = 11;; }
        if (__label__ == 8) {
  
          var $19=$run;
          var $call22=_QRinput_estimateBitsModeNum($19);
          var $add23=($call22)+4;
          var $20=$ln;
          var $add24=($add23)+($20);
          var $call25=_QRinput_estimateBitsModeAn(1);
          var $add26=($add24)+($call25);
          var $21=$run;
          var $add27=($21)+1;
          var $call28=_QRinput_estimateBitsModeAn($add27);
          var $sub29=($add26)-($call28);
          $dif=$sub29;
          var $22=$dif;
          var $cmp30=((($22))|0) > 0;
          if ($cmp30) { __label__ = 9;; } else { __label__ = 10;; }
          if (__label__ == 9) {
  
            var $23=$string_addr;
            var $24=$input_addr;
            var $25=$hint_addr;
            var $call33=_Split_eatAn($23, $24, $25);
            $retval=$call33;
            __label__ = 14;break $return$$if_end18$11;
          }
          else if (__label__ == 10) {
  
            ;
          }
        }
  
        var $26=$input_addr;
        var $27=$run;
        var $28=$string_addr;
        var $call36=_QRinput_append($26, 0, $27, $28);
        $ret=$call36;
        var $29=$ret;
        var $cmp37=((($29))|0) < 0;
        if ($cmp37) { __label__ = 12;; } else { __label__ = 13;; }
        if (__label__ == 12) {
  
          $retval=-1;
          ;
        }
        else if (__label__ == 13) {
  
          var $30=$run;
          $retval=$30;
          ;
        }
      }
    } while(0);
  
    var $31=$retval;
    ;
    return $31;
    return null;
  }
  _Split_eatNum["X"]=1;

  function _Split_eatAn($string, $input, $hint) {
    ;
    var __label__;
    var __lastLabel__ = null;
  
    var $retval;
    var $string_addr;
    var $input_addr;
    var $hint_addr;
    var $p;
    var $q;
    var $ret;
    var $run;
    var $dif;
    var $la;
    var $ln;
    $string_addr=$string;
    $input_addr=$input;
    $hint_addr=$hint;
    var $0=$input_addr;
    var $version=$0;
    var $1=HEAP[$version];
    var $call=_QRspec_lengthIndicator(1, $1);
    $la=$call;
    var $2=$input_addr;
    var $version1=$2;
    var $3=HEAP[$version1];
    var $call2=_QRspec_lengthIndicator(0, $3);
    $ln=$call2;
    var $4=$string_addr;
    $p=$4;
    ;
    $while_cond$2: while(1) { 
  
      var $5=$p;
      var $6=HEAP[$5];
      var $conv=(tempInt=(($6)),(tempInt>=128?tempInt-256:tempInt));
      var $and=($conv) & 128;
      var $tobool=((($and))|0)!=0;
      if ($tobool) { __label__ = 2;; } else { __label__ = 3;; }
      if (__label__ == 2) {
  
        __lastLabel__ = 2; ;
      }
      else if (__label__ == 3) {
  
        var $7=$p;
        var $8=HEAP[$7];
        var $conv3=(tempInt=(($8)),(tempInt>=128?tempInt-256:tempInt));
        var $arrayidx=_QRinput_anTable+$conv3;
        var $9=HEAP[$arrayidx];
        var $conv4=(tempInt=(($9)),(tempInt>=128?tempInt-256:tempInt));
        __lastLabel__ = 3; ;
      }
  
      var $cond=__lastLabel__ == 2 ? -1 : ($conv4);
      var $cmp=((($cond))|0) >= 0;
      if (!($cmp)) { __label__ = 15;break $while_cond$2; }
  
      var $10=$p;
      var $11=HEAP[$10];
      var $conv6=(tempInt=(($11)),(tempInt>=128?tempInt-256:tempInt));
      var $sub=($conv6)-48;
      var $conv7=((($sub)) & 255);
      var $conv8=((($conv7))&255);
      var $cmp9=((($conv8))|0) < 10;
      if ($cmp9) { __label__ = 6;; } else { __label__ = 13;; }
      if (__label__ == 6) {
  
        var $12=$p;
        $q=$12;
        ;
        while(1) { 
  
          var $13=$q;
          var $14=HEAP[$13];
          var $conv12=(tempInt=(($14)),(tempInt>=128?tempInt-256:tempInt));
          var $sub13=($conv12)-48;
          var $conv14=((($sub13)) & 255);
          var $conv15=((($conv14))&255);
          var $cmp16=((($conv15))|0) < 10;
          if (!($cmp16)) { __label__ = 9;break ; }
  
          var $15=$q;
          var $incdec_ptr=$15+1;
          $q=$incdec_ptr;
          __label__ = 7;continue ;
        }
  
        var $16=$p;
        var $17=$string_addr;
        var $sub_ptr_lhs_cast=($16) /* Warning: ptrtoint, .ll line 14958 */;
        var $sub_ptr_rhs_cast=($17) /* Warning: ptrtoint, .ll line 14959 */;
        var $sub_ptr_sub=($sub_ptr_lhs_cast)-($sub_ptr_rhs_cast);
        var $call19=_QRinput_estimateBitsModeAn($sub_ptr_sub);
        var $18=$q;
        var $19=$p;
        var $sub_ptr_lhs_cast20=($18) /* Warning: ptrtoint, .ll line 14964 */;
        var $sub_ptr_rhs_cast21=($19) /* Warning: ptrtoint, .ll line 14965 */;
        var $sub_ptr_sub22=($sub_ptr_lhs_cast20)-($sub_ptr_rhs_cast21);
        var $call23=_QRinput_estimateBitsModeNum($sub_ptr_sub22);
        var $add=($call19)+($call23);
        var $add24=($add)+4;
        var $20=$ln;
        var $add25=($add24)+($20);
        var $21=$q;
        var $22=$string_addr;
        var $sub_ptr_lhs_cast26=($21) /* Warning: ptrtoint, .ll line 14974 */;
        var $sub_ptr_rhs_cast27=($22) /* Warning: ptrtoint, .ll line 14975 */;
        var $sub_ptr_sub28=($sub_ptr_lhs_cast26)-($sub_ptr_rhs_cast27);
        var $call29=_QRinput_estimateBitsModeAn($sub_ptr_sub28);
        var $sub30=($add25)-($call29);
        $dif=$sub30;
        var $23=$dif;
        var $cmp31=((($23))|0) < 0;
        if ($cmp31) { __label__ = 10;break $while_cond$2; }
  
        var $24=$q;
        $p=$24;
        ;
  
        ;
      }
      else if (__label__ == 13) {
  
        var $25=$p;
        var $incdec_ptr35=$25+1;
        $p=$incdec_ptr35;
        ;
      }
  
      __label__ = 1;continue $while_cond$2;
    }
    if (__label__ == 10) {
  
      ;
    }
  
    var $26=$p;
    var $27=$string_addr;
    var $sub_ptr_lhs_cast38=($26) /* Warning: ptrtoint, .ll line 15007 */;
    var $sub_ptr_rhs_cast39=($27) /* Warning: ptrtoint, .ll line 15008 */;
    var $sub_ptr_sub40=($sub_ptr_lhs_cast38)-($sub_ptr_rhs_cast39);
    $run=$sub_ptr_sub40;
    var $28=$p;
    var $29=HEAP[$28];
    var $conv41=(tempInt=(($29)),(tempInt>=128?tempInt-256:tempInt));
    var $tobool42=((($conv41))|0)!=0;
    if ($tobool42) { __label__ = 16;; } else { __label__ = 23;; }
    $land_lhs_true$$if_end69$22: do { 
      if (__label__ == 16) {
  
        var $30=$p;
        var $31=HEAP[$30];
        var $conv43=(tempInt=(($31)),(tempInt>=128?tempInt-256:tempInt));
        var $and44=($conv43) & 128;
        var $tobool45=((($and44))|0)!=0;
        if ($tobool45) { __label__ = 17;; } else { __label__ = 18;; }
        if (__label__ == 17) {
  
          __lastLabel__ = 17; ;
        }
        else if (__label__ == 18) {
  
          var $32=$p;
          var $33=HEAP[$32];
          var $conv48=(tempInt=(($33)),(tempInt>=128?tempInt-256:tempInt));
          var $arrayidx49=_QRinput_anTable+$conv48;
          var $34=HEAP[$arrayidx49];
          var $conv50=(tempInt=(($34)),(tempInt>=128?tempInt-256:tempInt));
          __lastLabel__ = 18; ;
        }
  
        var $cond52=__lastLabel__ == 17 ? -1 : ($conv50);
        var $cmp53=((($cond52))|0) >= 0;
        if ($cmp53) { __label__ = 23;break $land_lhs_true$$if_end69$22; }
  
        var $35=$run;
        var $call56=_QRinput_estimateBitsModeAn($35);
        var $add57=($call56)+4;
        var $36=$la;
        var $add58=($add57)+($36);
        var $call59=_QRinput_estimateBitsMode8(1);
        var $add60=($add58)+($call59);
        var $37=$run;
        var $add61=($37)+1;
        var $call62=_QRinput_estimateBitsMode8($add61);
        var $sub63=($add60)-($call62);
        $dif=$sub63;
        var $38=$dif;
        var $cmp64=((($38))|0) > 0;
        if ($cmp64) { __label__ = 21;; } else { __label__ = 22;; }
        if (__label__ == 21) {
  
          var $39=$string_addr;
          var $40=$input_addr;
          var $41=$hint_addr;
          var $call67=_Split_eat8($39, $40, $41);
          $retval=$call67;
          __label__ = 26;break $land_lhs_true$$if_end69$22;
        }
        else if (__label__ == 22) {
  
          __label__ = 23;break $land_lhs_true$$if_end69$22;
        }
      }
    } while(0);
    if (__label__ == 23) {
  
      var $42=$input_addr;
      var $43=$run;
      var $44=$string_addr;
      var $call70=_QRinput_append($42, 1, $43, $44);
      $ret=$call70;
      var $45=$ret;
      var $cmp71=((($45))|0) < 0;
      if ($cmp71) { __label__ = 24;; } else { __label__ = 25;; }
      if (__label__ == 24) {
  
        $retval=-1;
        ;
      }
      else if (__label__ == 25) {
  
        var $46=$run;
        $retval=$46;
        ;
      }
    }
  
    var $47=$retval;
    ;
    return $47;
    return null;
  }
  _Split_eatAn["X"]=1;

  function _Split_eatKanji($string, $input, $hint) {
    ;
    var __label__;
  
    var $retval;
    var $string_addr;
    var $input_addr;
    var $hint_addr;
    var $p;
    var $ret;
    var $run;
    $string_addr=$string;
    $input_addr=$input;
    $hint_addr=$hint;
    var $0=$string_addr;
    $p=$0;
    ;
    while(1) { 
  
      var $1=$p;
      var $2=$hint_addr;
      var $call=_Split_identifyMode($1, $2);
      var $cmp=((($call))|0)==3;
      if (!($cmp)) { __label__ = 3;break ; }
  
      var $3=$p;
      var $add_ptr=$3+2;
      $p=$add_ptr;
      __label__ = 1;continue ;
    }
  
    var $4=$p;
    var $5=$string_addr;
    var $sub_ptr_lhs_cast=($4) /* Warning: ptrtoint, .ll line 15127 */;
    var $sub_ptr_rhs_cast=($5) /* Warning: ptrtoint, .ll line 15128 */;
    var $sub_ptr_sub=($sub_ptr_lhs_cast)-($sub_ptr_rhs_cast);
    $run=$sub_ptr_sub;
    var $6=$input_addr;
    var $7=$run;
    var $8=$string_addr;
    var $call1=_QRinput_append($6, 3, $7, $8);
    $ret=$call1;
    var $9=$ret;
    var $cmp2=((($9))|0) < 0;
    if ($cmp2) { __label__ = 4;; } else { __label__ = 5;; }
    if (__label__ == 4) {
  
      $retval=-1;
      ;
    }
    else if (__label__ == 5) {
  
      var $10=$run;
      $retval=$10;
      ;
    }
  
    var $11=$retval;
    ;
    return $11;
    return null;
  }
  

  function _Split_eat8($string, $input, $hint) {
    ;
    var __label__;
    var __lastLabel__ = null;
  
    var $retval;
    var $string_addr;
    var $input_addr;
    var $hint_addr;
    var $p;
    var $q;
    var $mode;
    var $ret;
    var $run;
    var $dif;
    var $la;
    var $ln;
    $string_addr=$string;
    $input_addr=$input;
    $hint_addr=$hint;
    var $0=$input_addr;
    var $version=$0;
    var $1=HEAP[$version];
    var $call=_QRspec_lengthIndicator(1, $1);
    $la=$call;
    var $2=$input_addr;
    var $version1=$2;
    var $3=HEAP[$version1];
    var $call2=_QRspec_lengthIndicator(0, $3);
    $ln=$call2;
    var $4=$string_addr;
    var $add_ptr=$4+1;
    $p=$add_ptr;
    ;
    $while_cond$2: while(1) { 
  
      var $5=$p;
      var $6=HEAP[$5];
      var $conv=(tempInt=(($6)),(tempInt>=128?tempInt-256:tempInt));
      var $cmp=((($conv))|0)!=0;
      if (!($cmp)) { __label__ = 26;break $while_cond$2; }
  
      var $7=$p;
      var $8=$hint_addr;
      var $call4=_Split_identifyMode($7, $8);
      $mode=$call4;
      var $9=$mode;
      var $cmp5=((($9))|0)==3;
      if ($cmp5) { __label__ = 3;break $while_cond$2; }
  
      var $10=$mode;
      var $cmp7=((($10))|0)==0;
      if ($cmp7) { __label__ = 5;; } else { __label__ = 12;; }
      if (__label__ == 5) {
  
        var $11=$p;
        $q=$11;
        ;
        while(1) { 
  
          var $12=$q;
          var $13=HEAP[$12];
          var $conv11=(tempInt=(($13)),(tempInt>=128?tempInt-256:tempInt));
          var $sub=($conv11)-48;
          var $conv12=((($sub)) & 255);
          var $conv13=((($conv12))&255);
          var $cmp14=((($conv13))|0) < 10;
          if (!($cmp14)) { __label__ = 8;break ; }
  
          var $14=$q;
          var $incdec_ptr=$14+1;
          $q=$incdec_ptr;
          __label__ = 6;continue ;
        }
  
        var $15=$p;
        var $16=$string_addr;
        var $sub_ptr_lhs_cast=($15) /* Warning: ptrtoint, .ll line 15235 */;
        var $sub_ptr_rhs_cast=($16) /* Warning: ptrtoint, .ll line 15236 */;
        var $sub_ptr_sub=($sub_ptr_lhs_cast)-($sub_ptr_rhs_cast);
        var $call17=_QRinput_estimateBitsMode8($sub_ptr_sub);
        var $17=$q;
        var $18=$p;
        var $sub_ptr_lhs_cast18=($17) /* Warning: ptrtoint, .ll line 15241 */;
        var $sub_ptr_rhs_cast19=($18) /* Warning: ptrtoint, .ll line 15242 */;
        var $sub_ptr_sub20=($sub_ptr_lhs_cast18)-($sub_ptr_rhs_cast19);
        var $call21=_QRinput_estimateBitsModeNum($sub_ptr_sub20);
        var $add=($call17)+($call21);
        var $add22=($add)+4;
        var $19=$ln;
        var $add23=($add22)+($19);
        var $20=$q;
        var $21=$string_addr;
        var $sub_ptr_lhs_cast24=($20) /* Warning: ptrtoint, .ll line 15251 */;
        var $sub_ptr_rhs_cast25=($21) /* Warning: ptrtoint, .ll line 15252 */;
        var $sub_ptr_sub26=($sub_ptr_lhs_cast24)-($sub_ptr_rhs_cast25);
        var $call27=_QRinput_estimateBitsMode8($sub_ptr_sub26);
        var $sub28=($add23)-($call27);
        $dif=$sub28;
        var $22=$dif;
        var $cmp29=((($22))|0) < 0;
        if ($cmp29) { __label__ = 9;break $while_cond$2; }
  
        var $23=$q;
        $p=$23;
        ;
  
        ;
      }
      else if (__label__ == 12) {
  
        var $24=$mode;
        var $cmp34=((($24))|0)==1;
        if ($cmp34) { __label__ = 13;; } else { __label__ = 23;; }
        if (__label__ == 13) {
  
          var $25=$p;
          $q=$25;
          ;
          while(1) { 
  
            var $26=$q;
            var $27=HEAP[$26];
            var $conv38=(tempInt=(($27)),(tempInt>=128?tempInt-256:tempInt));
            var $and=($conv38) & 128;
            var $tobool=((($and))|0)!=0;
            if ($tobool) { __label__ = 15;; } else { __label__ = 16;; }
            if (__label__ == 15) {
  
              __lastLabel__ = 15; ;
            }
            else if (__label__ == 16) {
  
              var $28=$q;
              var $29=HEAP[$28];
              var $conv39=(tempInt=(($29)),(tempInt>=128?tempInt-256:tempInt));
              var $arrayidx=_QRinput_anTable+$conv39;
              var $30=HEAP[$arrayidx];
              var $conv40=(tempInt=(($30)),(tempInt>=128?tempInt-256:tempInt));
              __lastLabel__ = 16; ;
            }
  
            var $cond=__lastLabel__ == 15 ? -1 : ($conv40);
            var $cmp41=((($cond))|0) >= 0;
            if (!($cmp41)) { __label__ = 19;break ; }
  
            var $31=$q;
            var $incdec_ptr44=$31+1;
            $q=$incdec_ptr44;
            __label__ = 14;continue ;
          }
  
          var $32=$p;
          var $33=$string_addr;
          var $sub_ptr_lhs_cast46=($32) /* Warning: ptrtoint, .ll line 15316 */;
          var $sub_ptr_rhs_cast47=($33) /* Warning: ptrtoint, .ll line 15317 */;
          var $sub_ptr_sub48=($sub_ptr_lhs_cast46)-($sub_ptr_rhs_cast47);
          var $call49=_QRinput_estimateBitsMode8($sub_ptr_sub48);
          var $34=$q;
          var $35=$p;
          var $sub_ptr_lhs_cast50=($34) /* Warning: ptrtoint, .ll line 15322 */;
          var $sub_ptr_rhs_cast51=($35) /* Warning: ptrtoint, .ll line 15323 */;
          var $sub_ptr_sub52=($sub_ptr_lhs_cast50)-($sub_ptr_rhs_cast51);
          var $call53=_QRinput_estimateBitsModeAn($sub_ptr_sub52);
          var $add54=($call49)+($call53);
          var $add55=($add54)+4;
          var $36=$la;
          var $add56=($add55)+($36);
          var $37=$q;
          var $38=$string_addr;
          var $sub_ptr_lhs_cast57=($37) /* Warning: ptrtoint, .ll line 15332 */;
          var $sub_ptr_rhs_cast58=($38) /* Warning: ptrtoint, .ll line 15333 */;
          var $sub_ptr_sub59=($sub_ptr_lhs_cast57)-($sub_ptr_rhs_cast58);
          var $call60=_QRinput_estimateBitsMode8($sub_ptr_sub59);
          var $sub61=($add56)-($call60);
          $dif=$sub61;
          var $39=$dif;
          var $cmp62=((($39))|0) < 0;
          if ($cmp62) { __label__ = 20;break $while_cond$2; }
  
          var $40=$q;
          $p=$40;
          ;
  
          ;
        }
        else if (__label__ == 23) {
  
          var $41=$p;
          var $incdec_ptr68=$41+1;
          $p=$incdec_ptr68;
          ;
        }
  
        ;
      }
  
      __label__ = 1;continue $while_cond$2;
    }
    if (__label__ == 3) {
  
      ;
    }
    else if (__label__ == 9) {
  
      ;
    }
    else if (__label__ == 20) {
  
      ;
    }
  
    var $42=$p;
    var $43=$string_addr;
    var $sub_ptr_lhs_cast72=($42) /* Warning: ptrtoint, .ll line 15368 */;
    var $sub_ptr_rhs_cast73=($43) /* Warning: ptrtoint, .ll line 15369 */;
    var $sub_ptr_sub74=($sub_ptr_lhs_cast72)-($sub_ptr_rhs_cast73);
    $run=$sub_ptr_sub74;
    var $44=$input_addr;
    var $45=$run;
    var $46=$string_addr;
    var $call75=_QRinput_append($44, 2, $45, $46);
    $ret=$call75;
    var $47=$ret;
    var $cmp76=((($47))|0) < 0;
    if ($cmp76) { __label__ = 27;; } else { __label__ = 28;; }
    if (__label__ == 27) {
  
      $retval=-1;
      ;
    }
    else if (__label__ == 28) {
  
      var $48=$run;
      $retval=$48;
      ;
    }
  
    var $49=$retval;
    ;
    return $49;
    return null;
  }
  _Split_eat8["X"]=1;

// === Auto-generated postamble setup entry stuff ===

Module.callMain = function callMain(args) {
  var argc = args.length+1;
  function pad() {
    for (var i = 0; i < 1-1; i++) {
      argv.push(0);
    }
  }
  var argv = [allocate(intArrayFromString("/bin/this.program"), 'i8', ALLOC_STATIC) ];
  pad();
  for (var i = 0; i < argc-1; i = i + 1) {
    argv.push(allocate(intArrayFromString(args[i]), 'i8', ALLOC_STATIC));
    pad();
  }
  argv.push(0);
  argv = allocate(argv, 'i32', ALLOC_STATIC);

  return _main(argc, argv, 0);
}

function run(args) {
  args = args || Module['arguments'];


__str=allocate([101,110,99,111,100,101,83,116,114,105,110,103,0] /* encodeString\00 */, "i8", ALLOC_STATIC);
__str1=allocate([79,75,10,0] /* OK\0A\00 */, "i8", ALLOC_STATIC);
__str2=allocate([37,100,10,0] /* %d\0A\00 */, "i8", ALLOC_STATIC);
__str3=allocate([37,100,0] /* %d\00 */, "i8", ALLOC_STATIC);
__str4=allocate([10,0] /* \0A\00 */, "i8", ALLOC_STATIC);
__str5=allocate([101,114,114,111,114,10,0] /* error\0A\00 */, "i8", ALLOC_STATIC);
__str6=allocate([69,73,78,86,65,76,10,105,110,118,97,108,105,100,32,105,110,112,117,116,32,111,98,106,101,99,116,10,0] /* EINVAL\0Ainvalid inp */, "i8", ALLOC_STATIC);
__str7=allocate([69,78,79,77,69,77,10,117,110,97,98,108,101,32,116,111,32,97,108,108,111,99,97,116,101,32,109,101,109,111,114,121,32,102,111,114,32,105,110,112,117,116,32,111,98,106,101,99,116,115,10,0] /* ENOMEM\0Aunable to a */, "i8", ALLOC_STATIC);
__str8=allocate([69,82,65,78,71,69,10,105,110,112,117,116,32,100,97,116,97,32,105,115,32,116,111,111,32,108,97,114,103,101,10,0] /* ERANGE\0Ainput data  */, "i8", ALLOC_STATIC);
__str9=allocate([117,110,107,110,111,119,110,10,117,110,107,110,111,119,110,32,101,114,114,111,114,10,0] /* unknown\0Aunknown er */, "i8", ALLOC_STATIC);
_maskMakers=allocate([2, 4, 6, 8, 10, 12, 14, 16], "i32 (i32, i8*, i8*)*", ALLOC_STATIC);
_maskMakers1=allocate([18, 20, 22, 24], "void (i32, i8*, i8*)*", ALLOC_STATIC);
_mqrspecCapacity=allocate([0, 0, 0, 0, 0, 11, 2, 0, 0, 0, 13, 5, 6, 0, 0, 15, 6, 8, 0, 0, 17, 8, 10, 14, 0], "i32", ALLOC_STATIC);
_lengthTableBits=allocate([3, 4, 5, 6, 0, 3, 4, 5, 0, 0, 4, 5, 0, 0, 3, 4], "i32", ALLOC_STATIC);
_typeTable=allocate([-1, -1, -1, 0, -1, -1, 1, 2, -1, 3, 4, -1, 5, 6, 7], "i32", ALLOC_STATIC);
_formatInfo=allocate([17477, 21934, 26515, 30328, 1758, 5941, 9480, 13539, 16754, 20633, 25252, 29519, 1001, 4610, 8255, 12756, 20011, 24512, 28157, 31766, 3248, 7515, 12134, 16013, 19228, 23287, 26826, 31009, 2439, 6252, 10833, 15290], "i32", ALLOC_STATIC);
_frames=allocate(5, "i8*", ALLOC_STATIC);
_putFinderPattern_finder=allocate([193,193,193,193,193,193,193,193,192,192,192,192,192,193,193,192,193,193,193,192,193,193,192,193,193,193,192,193,193,192,193,193,193,192,193,193,192,192,192,192,192,193,193,193,193,193,193,193,193] /* \C1\C1\C1\C1\C1\C1\C */, "i8", ALLOC_STATIC);
_QRinput_anTable=allocate([255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,36,255,255,255,37,38,255,255,255,255,39,40,255,41,42,43,0,1,2,3,4,5,6,7,8,9,44,255,255,255,255,255,255,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255] /* \FF\FF\FF\FF\FF\FF\F */, "i8", ALLOC_STATIC);
_qrspecCapacity=allocate([0, 0, 0, 0, 0, 0, 0, 21, 26, 0, 7, 10, 13, 17, 25, 44, 7, 10, 16, 22, 28, 29, 70, 7, 15, 26, 36, 44, 33, 100, 7, 20, 36, 52, 64, 37, 134, 7, 26, 48, 72, 88, 41, 172, 7, 36, 64, 96, 112, 45, 196, 0, 40, 72, 108, 130, 49, 242, 0, 48, 88, 132, 156, 53, 292, 0, 60, 110, 160, 192, 57, 346, 0, 72, 130, 192, 224, 61, 404, 0, 80, 150, 224, 264, 65, 466, 0, 96, 176, 260, 308, 69, 532, 0, 104, 198, 288, 352, 73, 581, 3, 120, 216, 320, 384, 77, 655, 3, 132, 240, 360, 432, 81, 733, 3, 144, 280, 408, 480, 85, 815, 3, 168, 308, 448, 532, 89, 901, 3, 180, 338, 504, 588, 93, 991, 3, 196, 364, 546, 650, 97, 1085, 3, 224, 416, 600, 700, 101, 1156, 4, 224, 442, 644, 750, 105, 1258, 4, 252, 476, 690, 816, 109, 1364, 4, 270, 504, 750, 900, 113, 1474, 4, 300, 560, 810, 960, 117, 1588, 4, 312, 588, 870, 1050, 121, 1706, 4, 336, 644, 952, 1110, 125, 1828, 4, 360, 700, 1020, 1200, 129, 1921, 3, 390, 728, 1050, 1260, 133, 2051, 3, 420, 784, 1140, 1350, 137, 2185, 3, 450, 812, 1200, 1440, 141, 2323, 3, 480, 868, 1290, 1530, 145, 2465, 3, 510, 924, 1350, 1620, 149, 2611, 3, 540, 980, 1440, 1710, 153, 2761, 3, 570, 1036, 1530, 1800, 157, 2876, 0, 570, 1064, 1590, 1890, 161, 3034, 0, 600, 1120, 1680, 1980, 165, 3196, 0, 630, 1204, 1770, 2100, 169, 3362, 0, 660, 1260, 1860, 2220, 173, 3532, 0, 720, 1316, 1950, 2310, 177, 3706, 0, 750, 1372, 2040, 2430], "i32", ALLOC_STATIC);
_lengthTableBits28=allocate([10, 12, 14, 9, 11, 13, 8, 16, 16, 8, 10, 12], "i32", ALLOC_STATIC);
_eccTable=allocate([0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 2, 0, 2, 0, 1, 0, 2, 0, 2, 0, 4, 0, 1, 0, 2, 0, 2, 2, 2, 2, 2, 0, 4, 0, 4, 0, 4, 0, 2, 0, 4, 0, 2, 4, 4, 1, 2, 0, 2, 2, 4, 2, 4, 2, 2, 0, 3, 2, 4, 4, 4, 4, 2, 2, 4, 1, 6, 2, 6, 2, 4, 0, 1, 4, 4, 4, 3, 8, 2, 2, 6, 2, 4, 6, 7, 4, 4, 0, 8, 1, 8, 4, 12, 4, 3, 1, 4, 5, 11, 5, 11, 5, 5, 1, 5, 5, 5, 7, 11, 7, 5, 1, 7, 3, 15, 2, 3, 13, 1, 5, 10, 1, 1, 15, 2, 17, 5, 1, 9, 4, 17, 1, 2, 19, 3, 4, 3, 11, 17, 4, 9, 16, 3, 5, 3, 13, 15, 5, 15, 10, 4, 4, 17, 0, 17, 6, 19, 6, 2, 7, 17, 0, 7, 16, 34, 0, 4, 5, 4, 14, 11, 14, 16, 14, 6, 4, 6, 14, 11, 16, 30, 2, 8, 4, 8, 13, 7, 22, 22, 13, 10, 2, 19, 4, 28, 6, 33, 4, 8, 4, 22, 3, 8, 26, 12, 28, 3, 10, 3, 23, 4, 31, 11, 31, 7, 7, 21, 7, 1, 37, 19, 26, 5, 10, 19, 10, 15, 25, 23, 25, 13, 3, 2, 29, 42, 1, 23, 28, 17, 0, 10, 23, 10, 35, 19, 35, 17, 1, 14, 21, 29, 19, 11, 46, 13, 6, 14, 23, 44, 7, 59, 1, 12, 7, 12, 26, 39, 14, 22, 41, 6, 14, 6, 34, 46, 10, 2, 64, 17, 4, 29, 14, 49, 10, 24, 46, 4, 18, 13, 32, 48, 14, 42, 32, 20, 4, 40, 7, 43, 22, 10, 67, 19, 6, 18, 31, 34, 34, 20, 61], "i32", ALLOC_STATIC);
_versionPattern=allocate([31892, 34236, 39577, 42195, 48118, 51042, 55367, 58893, 63784, 68472, 70749, 76311, 79154, 84390, 87683, 92361, 96236, 102084, 102881, 110507, 110734, 117786, 119615, 126325, 127568, 133589, 136944, 141498, 145311, 150283, 152622, 158308, 161089, 167017], "i32", ALLOC_STATIC);
_formatInfo29=allocate([30660, 29427, 32170, 30877, 26159, 25368, 27713, 26998, 21522, 20773, 24188, 23371, 17913, 16590, 20375, 19104, 13663, 12392, 16177, 14854, 9396, 8579, 11994, 11245, 5769, 5054, 7399, 6608, 1890, 597, 3340, 2107], "i32", ALLOC_STATIC);
_frames30=allocate(41, "i8*", ALLOC_STATIC);
_alignmentPattern=allocate([0, 0, 0, 0, 18, 0, 22, 0, 26, 0, 30, 0, 34, 0, 22, 38, 24, 42, 26, 46, 28, 50, 30, 54, 32, 58, 34, 62, 26, 46, 26, 48, 26, 50, 30, 54, 30, 56, 30, 58, 34, 62, 28, 50, 26, 50, 30, 54, 28, 54, 32, 58, 30, 58, 34, 62, 26, 50, 30, 54, 26, 52, 30, 56, 34, 60, 30, 58, 34, 62, 30, 54, 24, 50, 28, 54, 32, 58, 26, 54, 30, 58], "i32", ALLOC_STATIC);
_QRspec_putAlignmentMarker_finder=allocate([161,161,161,161,161,161,160,160,160,161,161,160,161,160,161,161,160,160,160,161,161,161,161,161,161] /* \A1\A1\A1\A1\A1\A1\A */, "i8", ALLOC_STATIC);
_putFinderPattern_finder31=allocate([193,193,193,193,193,193,193,193,192,192,192,192,192,193,193,192,193,193,193,192,193,193,192,193,193,193,192,193,193,192,193,193,193,192,193,193,192,192,192,192,192,193,193,193,193,193,193,193,193] /* \C1\C1\C1\C1\C1\C1\C */, "i8", ALLOC_STATIC);
_rslist=allocate(1, "%struct._RS*", ALLOC_STATIC);
FS.init(); __ATEXIT__.push({ func: function() { FS.quit() } });
___setErrNo(0);
FUNCTION_TABLE = [0,0,_Mask_mask0,0,_Mask_mask1,0,_Mask_mask2,0,_Mask_mask3,0,_Mask_mask4,0,_Mask_mask5,0,_Mask_mask6,0,_Mask_mask7,0,_Mask_mask02,0,_Mask_mask13,0,_Mask_mask24,0,_Mask_mask35,0]; Module["FUNCTION_TABLE"] = FUNCTION_TABLE;


  __globalConstructor__();

  var ret = null;
  if (Module['_main']) {
    ret = Module.callMain(args);
    __shutdownRuntime__();
  }
  return ret;
}
Module['run'] = run;

// {{PRE_RUN_ADDITIONS}}

Module['noInitialRun'] = true;

if (!Module['noInitialRun']) {
  run();
}

// {{POST_RUN_ADDITIONS}}





  // {{MODULE_ADDITIONS}}

/*
  return Module;
}).call(this, {}, arguments); // Replace parameters as needed
*/


// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_BitStream_new","_BitStream_append","_BitStream_allocate","_BitStream_appendNum","_BitStream_newFromNum","_BitStream_free","_BitStream_appendBytes","_BitStream_newFromBytes","_BitStream_toByte","_main","_func_encodeString","_covertNumString","_parseHex","_Mask_makeMask","_Mask_writeFormatInformation","_Mask_mask","_Mask_evaluateSymbol","_Mask_calcN2","_Mask_calcRunLength","_Mask_calcN1N3","_Mask_mask0","_Mask_mask1","_Mask_mask2","_Mask_mask3","_Mask_mask4","_Mask_mask5","_Mask_mask6","_Mask_mask7","_MMask_makeMask","_MMask_writeFormatInformation","_MMask_mask","_MMask_evaluateSymbol","_Mask_mask02","_Mask_mask13","_Mask_mask24","_Mask_mask35","_MQRspec_getDataLengthBit","_MQRspec_getDataLength","_MQRspec_getECCLength","_MQRspec_getWidth","_MQRspec_lengthIndicator","_MQRspec_maximumWords","_MQRspec_getFormatInfo","_MQRspec_newFrame","_MQRspec_createFrame","_MQRspec_clearCache","_putFinderPattern","_QRcode_free","_QRcode_encodeInput","_QRcode_encodeMaskMQR","_QRcode_encodeMask","_QRcode_encodeString","_QRcode_encodeStringReal","_QRcode_encodeStringMQR","_QRcode_encodeData","_QRcode_encodeDataReal","_QRcode_encodeString8bit","_QRcode_encodeDataMQR","_QRcode_encodeString8bitMQR","_QRcode_List_free","_QRcode_List_freeEntry","_QRcode_List_size","_QRcode_encodeInputStructured","_QRcode_List_newEntry","_QRcode_encodeDataStructured","_QRcode_encodeDataStructuredReal","_QRcode_encodeString8bitStructured","_QRcode_encodeStringStructured","_QRcode_clearCache","_QRcode_encodeInputToStructured","_QRraw_new","_QRraw_free","_FrameFiller_new","_QRraw_getCode","_FrameFiller_next","_QRcode_new","_RSblock_init","_RSblock_initBlock","_MQRraw_new","_MQRraw_free","_MQRraw_getCode","_QRinput_isSplittableMode","_QRinput_new","_QRinput_new2","_QRinput_newMQR","_QRinput_getVersion","_QRinput_setVersion","_QRinput_getErrorCorrectionLevel","_QRinput_setErrorCorrectionLevel","_QRinput_setVersionAndErrorCorrectionLevel","_QRinput_append","_QRinput_List_newEntry","_QRinput_appendEntry","_QRinput_appendECIheader","_QRinput_free","_QRinput_List_freeEntry","_QRinput_dup","_QRinput_List_dup","_QRinput_estimateBitsModeNum","_QRinput_estimateBitsModeAn","_QRinput_estimateBitsMode8","_QRinput_estimateBitsModeKanji","_QRinput_estimateBitsModeECI","_QRinput_decodeECIfromByteArray","_QRinput_check","_QRinput_checkModeNum","_QRinput_checkModeAn","_QRinput_checkModeKanji","_QRinput_checkModeFNC1Second","_QRinput_getByteStream","_QRinput_getBitStream","_QRinput_Struct_new","_QRinput_Struct_setParity","_QRinput_Struct_appendInput","_QRinput_InputList_newEntry","_QRinput_Struct_free","_QRinput_InputList_freeEntry","_QRinput_splitQRinputToStruct","_QRinput_calcParity","_QRinput_estimateBitStreamSizeOfEntry","_QRinput_encodeBitStream","_QRinput_lengthOfCode","_QRinput_splitEntry","_QRinput_Struct_insertStructuredAppendHeaders","_QRinput_Struct_calcParity","_QRinput_insertStructuredAppendHeader","_QRinput_setFNC1First","_QRinput_setFNC1Second","_QRinput_List_shrinkEntry","_QRinput_encodeModeNum","_QRinput_encodeModeAn","_QRinput_encodeMode8","_QRinput_encodeModeKanji","_QRinput_encodeModeStructure","_QRinput_encodeModeECI","_QRinput_encodeModeFNC1Second","_QRinput_mergeBitStream","_QRinput_appendPaddingBitMQR","_QRinput_appendPaddingBit","_QRinput_createBitStream","_QRinput_insertFNC1Header","_QRinput_convertData","_QRinput_estimateVersion","_QRinput_estimateBitStreamSize","_QRspec_getDataLength","_QRspec_getECCLength","_QRspec_getMinimumVersion","_QRspec_getWidth","_QRspec_getRemainder","_QRspec_lengthIndicator","_QRspec_maximumWords","_QRspec_getEccSpec","_QRspec_getVersionPattern","_QRspec_getFormatInfo","_QRspec_newFrame","_QRspec_createFrame","_QRspec_clearCache","_putFinderPattern52","_QRspec_putAlignmentPattern","_QRspec_putAlignmentMarker","_init_rs","_init_rs_char","_free_rs_char","_free_rs_cache","_encode_rs_char","_modnn","_Split_splitStringToQRinput","_dupAndToUpper","_Split_splitString","_Split_identifyMode","_Split_eatNum","_Split_eatAn","_Split_eatKanji","_Split_eat8"]



    delete Module['run'];
    
    Module._curOut = '';
    FS.init(null, function(v) { 
        if ( v != null )
            Module._curOut += String.fromCharCode(v); 
        });

    Module._libmain = function(argList) {
        Module._curOut = '';
        run(argList);
        return Module._curOut.split('\n');        
    };
    
    Module._JSLibEncodeStr = function(s) {
        t = unescape(encodeURIComponent(s));
        rst = '';
        for ( var i = 0; i < t.length; i++ ) {
            c = t.charCodeAt(i).toString(16);
            if ( c.length == 1 )
                rst += '0' + c;
            else
                rst += c;
        }
        return rst;
    };
    
    Module.encodeString = function(str, version, level, mode, caseSensitive) {
        var r = Module._libmain(["encodeString", 
            Module._JSLibEncodeStr(str), version.toString(), level.toString(), 
            mode.toString(), caseSensitive ? "1" : "0"]);
        
        if ( r[0] == "OK" ) {
            var w = parseInt(r[1]);
            var res = [];
            for ( var i = 0; i < w; i++ ) {
                var str = [];
                for ( var j = 0; j < w; j++ )
                    str.push(r[2].charAt(j * w + i) == '1' ? true : false);
                res.push(str);
            }
            return res;
        }
        else {
            if ( r[0] == "error" )
                throw new libqrException(r[1], r[2]);
            throw new libqrException("unknown", r.toString());
        }
    };

    return Module;
}).call(this);
    
    return locQre.encodeString(str, version, level, mode, caseSensitive);
    }
}})();
