import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		count: 0,
		msg: 'my name is hello'
	},
	mutations: {
		increment (state) {
			state.count++
		},
		decrement (state) {
			state.count--
		}
	}
})