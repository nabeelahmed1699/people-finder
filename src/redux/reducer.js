import { SET_POSTS } from './actions';

export default function reducer(state, action) {
	if (action.type === SET_POSTS) {
		return { ...state, posts: action.payload.posts };
	}
	return state;
}
