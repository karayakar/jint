/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-163.js
 * @description Object.defineProperty - 'O' is an Array, 'name' is the length property of 'O', the [[Value]] field of 'desc' equals to value of the length property, test no TypeError is thrown when the length property is not writable (15.4.5.1 step 3.f.i)
 */


function testcase() {

        var arrObj = [];

        Object.defineProperty(arrObj, "length", {
            writable: false
        });

        try {
            Object.defineProperty(arrObj, "length", {
                value: 0
            });
            return true;
        } catch (e) {
            return false;
        }
    }
runTestCase(testcase);
