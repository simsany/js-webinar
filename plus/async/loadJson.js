/*
 * Rewrite the following code to use async/await 
 */
module.exports = async function loadJson(url) {
    response=await fetch(url)
	if (response.status == 200) {
                return response.json();
            } else {
                throw new Error(response.status);
            }
	

};

	/*return fetch(url)
        .then(response => {
            if (response.status == 200) {
                return response.json();
            } else {
                throw new Error(response.status);
            }
        });
		*/