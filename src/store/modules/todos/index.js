import {state} from './state';
import * as actions from './actions';
import * as getters from './getters';
import * as mutations from './mutations';

const namespaced = true

export default {
	namespaced,
	state,
	actions,
	getters,
	mutations
}