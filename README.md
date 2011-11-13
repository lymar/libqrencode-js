# libqrencode-js: QR Code encoding library

This library is a port of [libqrencode](https://github.com/fukuchi/libqrencode) to JavaScript.

## Online demo

http://lymar.github.com/libqrencode-js/

## Download

[libqrencode-3.9.0_3.js](https://raw.github.com/lymar/libqrencode-js/3.9.0_3/release/libqrencode-3.9.0_3.js)  
[libqrencode-3.9.0_3.min.js](https://raw.github.com/lymar/libqrencode-js/3.9.0_3/release/libqrencode-3.9.0_3.min.js)

## Usage

### Constants

#### Mode

    QR_MODE_NUM           Numeric mode
    QR_MODE_AN            Alphabet-numeric mode
    QR_MODE_8             8-bit data mode
    QR_MODE_KANJI         Kanji (shift-jis) mode
    QR_MODE_ECI           ECI mode
    QR_MODE_FNC1FIRST     FNC1, first position
    QR_MODE_FNC1SECOND    FNC1, second position

#### Error correction level
    QR_ECLEVEL_L          lowest
    QR_ECLEVEL_M
    QR_ECLEVEL_Q
    QR_ECLEVEL_H          highest

### Function

    encodeString(str, version, level, mode, caseSensitive)
    
        str             input string.
        
        version         version of the symbol. If 0, the library chooses the minimum version for the given input data.
        
        level           error correction level.
        
        mode            tell the library how non-alphanumerical characters should be encoded. If QR_MODE_KANJI is given, 
                        kanji characters will be encoded as Shif-JIS characters. If QR_MODE_8 is given, all of 
                        non-alphanumerical characters will be encoded as is. If you want to embed UTF-8 string, 
                        choose this.
                        
        caseSensitive   case-sensitive or not.
        
        ----
        
        return          2d boolean array which represent QR Code line by line.
        
        ----
        
        exceptions      {'type': 'EINVAL', 'msg': 'invalid input object'}
                        {'type': 'ENOMEM', 'msg': 'unable to allocate memory for input objects'}
                        {'type': 'ERANGE', 'msg': 'input data is too large'}
                        {'type': 'unknown', 'msg': 'unknown error'}

### Example

See [example.html](https://github.com/lymar/libqrencode-js/blob/master/release/example.html).

## Build

### Preparations

Install:

* [Emscripten](https://github.com/kripken/emscripten) with [Clang](http://clang.llvm.org/get_started.html) and [V8](http://code.google.com/apis/v8/build.html).
* [UglifyJS](https://github.com/mishoo/UglifyJS).

### Update libqrencode git submodule

    git submodule init
    git submodule update

### Compiling

    ./make.py

### Testing

#### With d8

    cd test
    ./run.sh

#### With Web browser

Open test/run.html

## Licensing information

Copyright (C) 2006-2011 Kentaro Fukuchi (original libqrencode)  
Copyright (C) 2011 Sergey Lymar (port to JavaScript)

This library is free software; you can redistribute it and/or modify it under the terms of the GNU Lesser General Public License as published by the Free Software Foundation; either version 2.1 of the License, or any later version.

This library is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more details. 

You should have received a copy of the GNU Lesser General Public License along with this library; if not, write to the Free Software Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA
