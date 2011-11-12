var longStr = "";

var i;

for ( i = 0; i < 70; i++ ) longStr += "ldjkfvnkjsdfbjkvn";

for ( i = 0; i < 10; i++ ) {
    print(i);
    qrencode.encodeString(longStr, 0, qrencode.QR_ECLEVEL_H, 
        qrencode.QR_MODE_8, true);
}
