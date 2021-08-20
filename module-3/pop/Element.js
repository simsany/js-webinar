
/**
 * Create Element class, which represents an element of
 * the application, and
 * 
 * 1. It has a protractor locator (.locator),
 *    e.g. by.css("h1.title")
 * 2. It has a name (.name), e.g. "Document Title"
 * 3. It can have a parent Element, 
 *    which is the context of the element (.parent)
 * 4. It can have children Elements (.children)
 * 5. It has a method to retrieve the protractor element
 *    by the locator (.get([name])) in it's context
 *     - if it gets a name as parameter, it tries to find
 *       in it's children (recursively) the Element with
 *       the given name or throws an Erorr if it cannot
 *       find the element
 */

/*module.exports = class Element {
	constructor(name, locator) {
		this.locator = locator
		this.name = name
		this.parent = null
		this.children = {}
	}
	setParent = (parent) => { this.parent = parent }



	addChildren = (child) => {


		if (this.children.hasOwnProperty(child.name)) { throw new Error() };
		this.children[child.name] = child;
	}



	get = function (locator) {
		if (!locator) {
			return element(this.locator)
		}


		let locatorToReturn;
		function find(obj, locator) {

			Object.keys(obj).forEach(key => {
				if (key == locator) {
					locatorToReturn = obj[key]
				}
				else {
					if(obj[key].children.length === 0){
					find(obj[key].children, locator)
				}
				}
			})

			return locatorToReturn;

		}
		if (!find(this.children, locator).locator) {
			throw new Error()


		}
		return element(find(this.children, locator).locator)



	}



}
*/

class Dog{
constructor(age,name){
this.age=age
this.name=name

}

static bark() {
	console.log('vau')}


}



class LittleDog extends Dog{

constructor(age,name,size){

super(age,name)

this.size=size

}

 static barkk() {
	this.bark()
	console.log('vauucauu')}

}
 

LittleDog.barkk()
let masik=new LittleDog(1,"kutya",11)

