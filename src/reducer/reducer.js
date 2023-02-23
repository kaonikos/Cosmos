import { Actions } from './actions';

const initState = {
	currentPage: 'home',
};

// eslint-disable-next-line default-param-last
const reducer = (currentState = initState, action) => {
	switch (action.type) {
	case Actions.SetCurrentPage:
		return {
			...currentState,
			currentPage: action.payload,
		};
	default: return currentState;
	}
};

export default reducer;
