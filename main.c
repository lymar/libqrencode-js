#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include "qrencode.h"

int main(int argc, char** argv)
{
    char str[256]; // TODO: size
    int strPos = 0;

    int t;
    
    for ( t = 1; t < argc; t++ )
    {
        printf("arg: %s %d\n", argv[t], t);
    
        int c = atoi(argv[t]);
        printf("%d\n",c);
        
        if ( c >= 0 && c <= (int)0x7F )
        {
            str[strPos++] = (char)c;
        }
        if ( c >= (int)0x80 && c <= (int)0x7FF )
        {
            str[strPos++] = (int)0xC0 | 
                            (c >> 6);
            str[strPos++] = (int)0x80 |
                            (c & (int)0x3f);
        }
        // TODO: Иероглифы http://ru.wikipedia.org/wiki/UTF-8
    }
    
    str[strPos] = 0;
    printf("string: %s\n", str);

    QRcode* res = QRcode_encodeString(str,0,QR_ECLEVEL_L,QR_MODE_8,1);
    
    for ( int i = 0; i < res->width; i++ )
    {
        for ( int j = 0; j < res->width; j++ )
        {
            if ( res->data[j*res->width + i] & 1 ) 
                printf("#");
            else
                printf(" ");
        }
        printf("\n");
    }
    
    printf("\n");
    
    QRcode_free(res);
    
    return 0;
}


int main2(int argc, char** argv)
{
    QRcode* res = QRcode_encodeString(argv[1],0,QR_ECLEVEL_L,QR_MODE_8,1);
    printf("string: %s %d %d\n", argv[1], strlen(argv[1]), argc);
    printf("width: %d\n", res->width);
    
    for ( int i = 0; i < res->width; i++ )
    {
        for ( int j = 0; j < res->width; j++ )
        {
            if ( res->data[j*res->width + i] & 1 ) 
                printf("#");
            else
                printf(" ");
        }
        printf("\n");
    }
    
    printf("\n");
    
    QRcode_free(res);
    
    
    return 0;
}

// clang *.c -D HAVE_CONFIG_H


// python ~/emscripten/tools/emmaken.py -D HAVE_CONFIG_H *.c
// llvm-link *.o -o qr.bc
// python ~/emscripten/emscripten.py -s INVOKE_RUN=0  qr.bc > qr.js


// run(["sdcsdcdl;fkvjsdklfvjskldfjvklsjdfvk sdfdfv ljsdc"])

/*
"йцу".charCodeAt(0)
1081
"йцу".charCodeAt(1)
1094
"йцу".charCodeAt(2)
1091
run(["1081","1094","1091"])
*/

