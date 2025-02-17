
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

 module.exports = class Element {
	constructor(name, locator) {
		this.locator = locator
		this.name = name
		this.parent = null
		this.setParent = function (parent) { this.parent = parent }
		this.children = {}


		this.addChildren = function (child) {
			let child_to_assign = {};
			child_to_assign[child.name] = child;
			if (Object.keys(this.children).includes(child.name)) { throw new Error() };
			this.children = Object.assign(this.children, child_to_assign);
		}



		this.get = function (locator) {
			if (!locator){

				return element(this.locator)

			}
			

			let locatorToReturn;
			function find (obj,locator){
				
		Object.keys(obj).forEach(key => {
			if (key == locator) {
				locatorToReturn = obj[key]
				}
			if (typeof obj[key] == 'object' && obj[key] != null) {
				find(obj[key], locator)
				}
			})
				
				return locatorToReturn;
				
				}
			if(!find(this.children,locator).locator){
				throw new Error()


			}
			return element(find(this.children,locator).locator)

			
			
		}
	}


}