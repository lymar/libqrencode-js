#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <errno.h>
#include "qrencode.h"

static char 
parseHex(char s) {
    switch ( s ) {
        case '0': return 0x0;
        case '1': return 0x1;
        case '2': return 0x2;
        case '3': return 0x3;
        case '4': return 0x4;
        case '5': return 0x5;
        case '6': return 0x6;
        case '7': return 0x7;
        case '8': return 0x8;
        case '9': return 0x9;
        case 'A': 
        case 'a': return 0xa;
        case 'B': 
        case 'b': return 0xb;
        case 'C': 
        case 'c': return 0xc;
        case 'D': 
        case 'd': return 0xd;
        case 'E': 
        case 'e': return 0xe;
        case 'F': 
        case 'f': return 0xf;
        default: return 0;
    }
}

// convert string "<hex num><hex num>..." to C string
static void 
covertNumString(char* numStr, char* resStr, int resStrMax)
{
    int nsl = strlen(numStr);
    resStrMax--;    
    int i;

    for ( i = 0; (2*i+1) < nsl && i < resStrMax; i++ )
        resStr[i] = parseHex(numStr[2*i]) << 4 | parseHex(numStr[2*i+1]);
    resStr[i] = 0;
}

static int
func_encodeString(char** argv) {
    char str[16384];
    covertNumString(argv[0], str, sizeof(str));
    
    int version = atoi(argv[1]);
    int level = atoi(argv[2]);
    int hint = atoi(argv[3]);
    int casesensitive = atoi(argv[4]);
    
    QRcode* res = QRcode_encodeString(str,version,level,hint,casesensitive);
    
    if ( res ) {
        printf("OK\n");
        printf("%d\n", res->width);
        for ( int i = 0; i < res->width * res->width; i++ )
            printf("%d", (int)(res->data[i] & 0x1));
        printf("\n");
        QRcode_free(res);
        return 0;
    }
    else {
        printf("error\n");
        switch ( errno ) {
            case EINVAL:
                printf("EINVAL\ninvalid input object\n");
                break;
            case ENOMEM:
                printf("ENOMEM\nunable to allocate memory for input objects\n");
                break;
            case ERANGE:
                printf("ERANGE\ninput data is too large\n");
                break;
            default:
                printf("unknown\nunknown error\n");
                break;
        }
        QRcode_free(res);
        return errno;
    }
}

int 
main(int argc, char** argv) {
    if ( argc < 2 )
        return -1;

    if ( !strcmp(argv[1], "encodeString" ) )
        return func_encodeString(&argv[2]);
}
