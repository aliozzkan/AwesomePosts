/**
 * 
 * LOCAL STORAGE 
 */

 /**
  * 
  * SET USER 
  */

import _ from "lodash";
import Moment from "moment";
import uuidv1 from "uuid/v1";

/**
 * Define Time Format
 */
const time_format = "YYYY-MM-DD HH-mm-ss";

// Get storage JSON type
function getSTORAGE() {
	const store = JSON.parse(localStorage.getItem("storage"));
	if(_.isEmpty(store)) {
		return {
			users: [],
			posts: []
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
/**
 * Functions Of Post
 */
export function store_add_post(userId ,title, content) {
	let newPost = {
		userId,
		title,
		content
	};
	/**
	 * Dynamics for post 
	 */
	newPost.id = uuidv1();
	newPost.createdTime = Moment().format(time_format);
	newPost.lastEditedTime = Moment().format(time_format);
	/**
	 * Save in store
	 */
	STORAGE.posts = [...STORAGE.posts, newPost];
	setSTORAGE(STORAGE);

	return newPost;

}

function get_user(id) {
	const index = STORAGE.users.findIndex(user => id === user.id);
	return index !== -1 ? {...STORAGE.users[index]} : {}
}

export function get_all_posts() {
	let posts = [...STORAGE.posts];
	posts = posts.map(post => ({...post, user: get_user(post.userId)}));
	return [...posts.reverse()];
}

export function get_posts_by_user(userId) {
	let posts = [...STORAGE.posts.filter(post => post.userId === userId)];
	return [...posts.reverse()];
}

export function edit_post(postId, title, content) {
	const postIndex = STORAGE.posts.findIndex(post => postId === post.id);
	STORAGE.posts[postIndex].title = title;
	STORAGE.posts[postIndex].content = content;
	STORAGE.posts[postIndex].lastEditedTime = Moment().format(time_format);
	setSTORAGE(STORAGE);

	return {...STORAGE.posts[postIndex]};
}

export function delete_post(postId) {
	STORAGE.posts = STORAGE.posts.filter(post => post.id !== postId);
	setSTORAGE(STORAGE);

	return true;
}