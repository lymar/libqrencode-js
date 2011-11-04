/*
 * Libqrencode port to JavaScript
 * https://github.com/lymar/libqrencode-js
 *
 * Copyright (c) Kentaro Fukuchi <kentaro@fukuchi.org> (original Libqrencode)
 * Copyright (c) Sergey Lymar (port to JavaScript)
 *
 * Licensed under GNU Lesser General Public License.
 */
{{varName}} = (function(Module, args) {
    Module = Module || {};
    Module.arguments = args || [];
    
{{genCode}}

    Module['encodeString'] = function() {
        var r = "";
        FS.init(null, function(v) { 
            if ( v != null )
                r = r + String.fromCharCode(v); 
            });
        run();
        return r;
    };
    
    return Module;
}).call(this);

delete this["Module"];

