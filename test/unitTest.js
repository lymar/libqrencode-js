var testCase = (function() {
    function testCase(tcName, tcFunc) {
        this.tcName = tcName;
        this.tcFunc = tcFunc;
    }

    return testCase;
})();

var unitTestException = (function() {
    function unitTestException(msg) {
        this.msg = msg;
    }
    
    unitTestException.prototype.toString = function() {
        return "unitTestException: " + this.msg;
    };
    
    return unitTestException;
})();

var unitTest = (function() {
    function unitTest() {
    }
    
    unitTest.prototype.print = function(s) {
        print(s);
    };
    
    unitTest.prototype.run = function(cases) {
        var failed = 0;
        var prfx = "    ";
        
        for ( var i = 0; i < cases.length; i++ )
        {
            try {
                cases[i].tcFunc();
                this.print(prfx + cases[i].tcName + ": ok");
            }
            catch (e) {
                this.print(prfx + cases[i].tcName + 
                    ": failed\nunexpected exception");
                if ( e instanceof unitTestException )
                    this.print(e.msg);
                else
                    this.print(e);
                failed = failed + 1;
            }
        }
        
        this.print("");
        this.print("total: " + cases.length);
        this.print("failed: " + failed);
    };
    
    unitTest.assertEqual = function(msg,actual,expect) {
        if ( actual === expect ) return;
        
        throw new unitTestException("Failure: " + msg + 
            "\nexpected:\n" + expect.toString() + "\n\nbut got:\n" +
            actual.toString() + "\n");
    };
    
    unitTest.assertException = function(msg,fun,isCorrect) {
        try {
            fun();
            throw new unitTestException("Failure: " + msg + 
                "\nException not raised");
        }
        catch (e) {
            if ( !isCorrect(e) )
                throw e;
        }
    };

    return unitTest;
})();

/*var tst = new unitTest();

tst.run([
      new testCase("lowEncodeString", function() {
        unitTest.assertEqual("eqs",1,1);
        })
    , new testCase("lowEncodeString 2", function() {
        unitTest.assertException("eqs",
            function() {throw "qwe"},
            function(a) {return true;});
        })
    ]);
*/
//print(e instanceof unitTestException);
//print(unitTest.assertEqual("qwe",1,1));

