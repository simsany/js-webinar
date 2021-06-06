const calc = require('../calc');
const expect = require('chai').expect;

describe.only('calc', () => {
    /*
     * calc(3).v // 3
     * calc(3).add(5).v // 8
     * calc(3).minus(2).v // 1
     * calc(4).sqrt().v // 2
     * calc(3).times(10).v // 30
     * calc(10).divide(2).v // 5
     * calc(10).modulo(5).v // 0
     * calc(5).divide(0) // throw error
     * calc(-3).sqrt() // throw error
     * calc(3).add(4)
     *     .minus(3)
     *     .times(6).v // 24
     */
    // TODO: write test cases to test calculator
    
    
    describe("should have proper value", () => {
        
        it("should return proper value", () => {
            
            return expect(calc(3).v).to.equal(3);
        });
    });

    describe("add", () => {

        it("should exist", () => {
            
            return expect(calc(3).add(3)).not.to.be.undefined;
        });

        it("should be able to perform addition to a given number", () => {
            
            return expect(calc(3).add(5).v).to.equal(8);
        });
    });



    describe("minus", () => {

        it("should exist", () => {
            
            return expect(calc(3).minus(3)).not.to.be.undefined;
        });

        it("should be able to perform substraction from a given number", () => {
            
            return expect(calc(3).minus(2).v).to.equal(1);
        });
    });


    describe("sqrt", () => {

        it("should exist", () => {
            
            return expect(calc(3).sqrt()).not.to.be.undefined;
        });

        it("should be able to calculate the square root of a given number", () => {
            
            return expect(calc(4).sqrt().v).to.equal(2);
        });

        it("should handle square root of a negative number", () => {
           
            return expect(() => calc(-3).sqrt()).to.throw();
        });
    });




    describe("times", () => {

        it("should exist", () => {
            
            return expect(calc(3).times(5)).not.to.be.undefined;
        });

        it("should be able to  multiply a given number", () => {
            
            return expect(calc(3).times(10).v).to.equal(30);
        });
    });




    describe("divide", () => {

        it("should exist", () => {
            
            return expect(calc(3).times(5)).not.to.be.undefined;
        });

        it("should be able to divide a given number", () => {
            
            return expect(calc(10).divide(2).v).to.equal(5);
        });

        it("should handle division by zero", () => {
            
            return expect(() => calc(5).divide(0)).to.throw();
        });
    });





    describe("chained operations", () => {

        it("should able to perform chained operations", () => {
            
            return expect(calc(3).add(4).minus(3).times(6).v).to.equal(24);
        });
    });

});