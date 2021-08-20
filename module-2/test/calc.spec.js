const Calculator = require('../calc');
const expect = require('chai').expect;
const assert = require('chai').assert;
const calc= function(n){ return new Calculator(n)}

before(function() {
    console.log('Test started')
    console.time('Test finished')
});

after(function() {
    console.timeEnd('Test finished')
});

beforeEach(function() {
    console.log('Test case started')
});

afterEach(function() {
   console.log('Test case finished')
});

describe.only('calc', () => {
    describe("Calculator constructor", () => {
        
        it("should return a Calculator object", () => {
           //return assert.instanceOf(calc(3),Calculator)
		   return expect(calc(3)).to.be.an.instanceOf(Calculator);
        });
		 it("should return proper value", () => {
            return expect(calc(3).v).to.equal(3);
        });
    });
    describe("add", () => {
        it("should be a function", () => {
            return expect(calc(3).add).to.be.a('function');
        });
        it("should be able to perform addition to a given number", () => {
            return expect(calc(3).add(5).v).to.equal(8);
        });
    });
    describe("minus", () => {

        
         it("should be a function", () => {
            return expect(calc(3).minus).to.be.a('function');
        });
        const testDatas = [
            {args:  [3,2], expected: 1},
            {args: [3,4], expected: -1},
            {args: [3,-2], expected: 5,},
            {args: [-1,-2], expected: 1,},
            {args: [-5,-2], expected: -3},
          ];

          testDatas.forEach(({args,expected})=>{it(`should be able to perform ${args[1]<0?'negative':"positive"} from ${args[0]<0?'negative':"positive"} substraction`, () => {
                return expect(calc(args[0]).minus(args[1]).v).to.equal(expected);
            });})
        // it("should be able to perform negative from positive a given number", () => {
        //     return expect(calc(3).minus(2).v).to.equal(1);
        // });
		// it("should be able to perform substraction from a given number", () => {
        //     return expect(calc(3).minus(4).v).to.equal(-1);
        // });
		// it("should be able to perform substraction from a given number", () => {
        //     return expect(calc(3).minus(-2).v).to.equal(5);
        // });
		// it("should be able to perform substraction from a given number", () => {
        //     return expect(calc(-1).minus(-2).v).to.equal(1);
        // });
		// it("should be able to perform substraction from a given number", () => {
        //     return expect(calc(-5).minus(-2).v).to.equal(-3);
        // });	
    });
    describe("sqrt", () => {
        it("should exist", () => {
            return expect(calc(3).sqrt).to.exist;
        });
        it("should be able to calculate the square root of a given number", () => {
            return expect(calc(4).sqrt().v).to.equal(2);
        });
        it("should handle square root of a negative number", () => {
            return expect(()=>{calc(-3).sqrt()}).to.throw();
        });
    });
    describe("times", () => {
        it("should exist", () => {
            return expect(calc(3).times).to.exist;
        });
        it("should be able to  multiply a given number", () => {
            return expect(calc(3).times(10).v).to.equal(30);
        });
		it("should be able to  multiply a given number", () => {
            return expect(calc(3).times(-10).v).to.equal(-30);
        });
		it("should be able to  multiply a given number", () => {
            return expect(calc(-3).times(-10).v).to.equal(30);
        });
    });
    describe("divide", () => {
        it("should exist", () => {
            return expect(calc(3).divide).to.exist;
        });
        it("should be able to divide a given number", () => {
            return expect(calc(10).divide(2).v).to.equal(5);
        });
		it("should be able to divide a given number", () => {
            return expect(calc(10).divide(-2).v).to.equal(-5);
        });
		it("should be able to divide a given number", () => {
            return expect(calc(-10).divide(-2).v).to.equal(5);
        });
        it("should handle division by zero", () => {
            return expect(() => calc(5).divide(0)).to.throw();
        });
    });
	describe("modulo", () => {
        it("should exist", () => {
            return expect(calc(3).modulo).to.exist;
        });
        it("should be able to give the modulo with two given numbers", () => {
            return expect(calc(10).modulo(2).v).to.equal(0);
        });
		it("should be able to give the modulo with two given numbers", () => {
            return expect(calc(10).modulo(3).v).to.equal(1);
        });
		it("should be able to give the modulo with two given numbers", () => {
            return expect(calc(10).modulo(-2).v).to.equal(0);
        });
		it("should be able to give the modulo with two given numbers", () => {
            return expect(calc(-10).modulo(-2).v).to.equal(0);
        });
		it("should be able to give the modulo with two given numbers", () => {
            return expect(calc(10).modulo(-3).v).to.equal(1);
        });
		it("should be able to give the modulo with two given numbers", () => {
            return expect(calc(-10).modulo(-3).v).to.equal(-1);
        });
    });


    describe("toString", () => {
        it("should exist", () => {
            return expect(calc(3).toString).to.exist;
        });
	    it("should return with a string", () => {
            return expect(calc(3).toString()).to.be.an('string');
        });
	    it("should return with the correct string", () => {
            return expect(calc(3).toString()).to.be.equal('3');
        });
	    it("should return with the correct string", () => {
            return expect(calc(-3).toString()).to.be.equal('-3');
        })
    });;
    describe("chained operations", () => {
        it("should able to perform chained operations", () => {
            return expect(calc(3).add(4).minus(3).times(6).v).to.equal(24);
        });
    });
})