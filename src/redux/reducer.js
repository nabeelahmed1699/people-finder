import { SET_POSTS, SET_UNMODIFIED_POSTS } from './actions';

export default function reducer(state, action) {
	if (action.type === SET_POSTS) {
		return { ...state, posts: action.payload.posts };
	}
	if (action.type === SET_UNMODIFIED_POSTS) {
		return { ...state, unModifiedPosts: action.payload.posts };
	}
	return state;
}
