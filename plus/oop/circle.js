/**
 * Create the Circle class.
 *
 * @typedef {object} Circle
 * @property {number} r the radius of the circle
 * @function area return the area of the circle
 * @function perimeter return the perimeter of the circle
 */

class Circle{
constructor(radius){
if(!radius || radius <= 0){
 
    throw new Error('Invalid radius');


}
this.r=radius
this.getArea= function(){
    return Math.pow(this.r,2)*Math.PI


}

this.getPerimeter= function(){
return this.r*2*Math.PI


}
}




}
module.exports = Circle;