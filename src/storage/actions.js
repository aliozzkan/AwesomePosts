/**
 * 
 * LOCAL STORAGE 
 */

 /**
  * 
  * SET USER 
  */

import _ from "lodash";
import uuidv1 from "uuid/v1";

// Get storage JSON type
function getSTORAGE() {
	const store = JSON.parse(localStorage.getItem("storage"));
	console.log(store);
	if(_.isEmpty(store)) {
		return {
			users: []
		}
	} else {
		return store;
	}
}

// Save storage stringify type
function setSTORAGE(newStore) {
	localStorage.setItem("storage", JSON.stringify(newStore));
}


/**
 * 
 * Main store
 */
var STORAGE = getSTORAGE();


export function store_register(username, fullname, password) {
	let newUser = {username, fullname, password};
	/**
	 * 
	 * Create id for new user
	 */
	newUser.id = uuidv1();
	STORAGE.users = [...STORAGE.users, newUser];
	setSTORAGE(STORAGE);
	return newUser;
}

export function store_login(username, password) {
	/**
	 * Find user's index in User List
	 */
	const userIndex = STORAGE.users.findIndex(user => username === user.username);
	if(userIndex === -1) return {};

	// Get userinfo in store
	const userInfo = STORAGE.users[userIndex];

	// Compare passwords
	if(password !== userInfo.password) return {};

	return {userInfo: {...userInfo}, status: true};

}