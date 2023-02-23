import { Actions } from './actions';

const initState = {
	currentPage: 'home',
	darkMode: false,
};

// eslint-disable-next-line default-param-last
const reducer = (currentState = initState, action) => {
	switch (action.type) {
	case Actions.SetCurrentPage:
		return {
			...currentState,
			currentPage: action.payload,
		};
	case Actions.SetDarkMode:
		return {
			...currentState,
			darkMode: action.payload,
		};
	default: return currentState;
	}
};

export default reducer;
