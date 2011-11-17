var strHelloEn = "hello";
var strHelloRu = "привет";
var strHelloJp = "こんにちは";

var array2dToStr = function(a) {
    var r = "[";
    for ( var j = 0; j < a.length; j++ ) {
        r += "[";
        for ( var i = 0; i < a[j].length; i++ ) 
            r += a[i][j] ? "1" : "0";
        r += "]";
    }
    r += "]";
    return r;        
};

var test_encodeString = [
      new testCase("encodeString (L): en",
        function() {
            unitTest.assertEqual("correctness",
                array2dToStr(qrencode.encodeString(strHelloEn, 0, 
                    qrencode.QR_ECLEVEL_L,
                    qrencode.QR_MODE_8, true)),
                "[[111111100101101111111][100000101101001000001][101110101100101011101][101110100101001011101][101110101000101011101][100000101001101000001][111111101010101111111][000000001111100000000][110100110110001110110][011111011100001000011][001101111010110001101][000101001001000001011][000010110110101010000][000000001111000110101][111111101110010101110][100000100111110110000][101110100101001110001][101110101011000101111][101110100110100010101][100000101110011000000][111111101011100101010]]");
        })
    , new testCase("encodeString (L): ru",
        function() {
            unitTest.assertEqual("correctness",
                array2dToStr(qrencode.encodeString(strHelloRu, 0, 
                    qrencode.QR_ECLEVEL_L,
                    qrencode.QR_MODE_8, true)),
                "[[111111100010101111111][100000101010101000001][101110101011001011101][101110100000101011101][101110101111101011101][100000101110001000001][111111101010101111111][000000001000000000000][110100110011101110110][001010001011010010101][101100110101010011010][110100011010100101111][001010110001011011101][000000001011000011010][111111101111100100111][100000100101111101110][101110100110100010100][101110101000001010011][101110100100011000101][100000101010011110100][111111101011110010110]]");
        })
    , new testCase("encodeString (L): jp",
        function() {
            unitTest.assertEqual("correctness",
                array2dToStr(qrencode.encodeString(strHelloJp, 0, 
                    qrencode.QR_ECLEVEL_L,
                    qrencode.QR_MODE_8, true)),
                "[[111111100100101111111][100000101101001000001][101110101100001011101][101110100100101011101][101110101000001011101][100000101000101000001][111111101010101111111][000000001110000000000][110100110111101110110][100111010001010101010][000110100100001011110][000110011001110010100][011100111110100011101][000000001101101101001][111111101110011100011][100000100110001010101][101110100100110000000][101110101110111000011][101110100100010001001][100000101110001101100][111111101101100011110]]");
        })
    , new testCase("encodeString (H): ru",
        function() {
            unitTest.assertEqual("correctness",
                array2dToStr(qrencode.encodeString(strHelloJp, 0, 
                    qrencode.QR_ECLEVEL_H,
                    qrencode.QR_MODE_8, true)),
                "[[11111110100111010000101111111][10000010011101010101101000001][10111010011000001100101011101][10111010110001101001001011101][10111010010110011110101011101][10000010001000101010101000001][11111110101010101010101111111][00000000011111010000000000000][00101110110000110000110001001][10011000011001101101110011010][11100011100101100001101001100][00101001011001100110101011101][00100110101011000011110110001][00000001111001000110111111010][01110011100110010101001001100][01001100011001100110000101101][10101110001000101001001111101][00111100111101011111000100111][10000010101010100110001111010][01000101110000110111001101001][10110110110110101010111110110][00000000111010010101100011011][11111110011001100101101011010][10000010100010110101100010100][10111010101010101001111110001][10111010011010101110011100110][10111010111010101000101000001][10000010000110000101001010110][11111110001010011001000010111]]");
        })
    , new testCase("encodeString: long string (2938)",
        function() {
            var s = "";
            for ( var i = 0; i < 2938; i++ ) s += 'a';
            unitTest.assertEqual("correctness",
                qrencode.encodeString(s, 0, 
                    qrencode.QR_ECLEVEL_L,
                    qrencode.QR_MODE_8, true).length.toString(),
                    "177")
        })
];

var test_exceptions = [
      new testCase("exception: invalid input object",
        function() {
            unitTest.assertException("exception",
                function() {
                    qrencode.encodeString("str", 0, 
                        qrencode.QR_ECLEVEL_L,
                        99, true);
                },
                function(a) {return a.type == "EINVAL";});
        })
    , new testCase("exception: input data is too large",
        function() {
            var s = "";
            for ( var i = 0; i < 10000; i++ ) s += 'aaaaaaaaaa';
            unitTest.assertException("exception",
                function() {
                    qrencode.encodeString(s, 0, 
                        qrencode.QR_ECLEVEL_L,
                        qrencode.QR_MODE_8, true);
                },
                function(a) {
                    return (a instanceof qrencode.libqrException) && 
                           (a.type == "ERANGE");
                });
        })
    ];

var allTests = [].concat(
      test_encodeString
    , test_exceptions
    );

