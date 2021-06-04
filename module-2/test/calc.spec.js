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
	
	it("should return 3", () => {
        return expect(calc(3).v).to.equal(3);
    });
	
	it("should return 8", () => {
        return expect(calc(3).add(5).v).to.equal(8);
    });
	
	it("should return 1", () => {
        return expect(calc(3).minus(2).v).to.equal(1);
    });
	
	it("should return 2", () => {
        return expect(calc(4).sqrt().v).to.equal(2);
    });
	
	it("should return 30", () => {
        return expect(calc(3).times(10).v).to.equal(30);
    });
	
	it("should return 5", () => {
        return expect(calc(10).divide(2).v).to.equal(5);
    });
	
	
	it("should throw an error", () => {
        return expect(() =>calc(5).divide(0)).to.throw();
    });
	
	it("should throw an error", () => {
        return expect(() =>calc(-3).sqrt()).to.throw();
    });
	
	it("should return 5", () => {
        return expect(calc(3).add(4).minus(3).times(6).v).to.equal(24);
    });
	

});