import Vue from "vue";
import Vuex from "vuex";
import _ from "lodash";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
		user: JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : {}
	},
	getters: {
		getUser: state => {
			return state.user
		},
		getIsLogged: state => {
			return !_.isEmpty(state.user);
		}
	},
    mutations: {
		setUser (state, amount){
			state.user = amount;
		},
		resetUser(state) {
			state.user = {}
		}
	},
    actions: {
		setUser({commit}, amount) {
			localStorage.setItem("user", JSON.stringify(amount));
			commit('setUser', amount);
		},
		logout({commit}) {
			localStorage.removeItem("user");
			commit('resetUser');
		}
	},
    modules: {}
});
