export const SET_POSTS = 'SET_POSTS';
export const FILTER_BY_NAME = 'FILTER_BY_NAME';
export const SET_UNMODIFIED_POSTS = 'SET_UNMODIFIED_POSTS';
// action creaters
export const setPosts = (posts) => ({ type: SET_POSTS, payload: { posts } });
export const setUnModifiedPosts = (posts) => ({
	type: SET_UNMODIFIED_POSTS,
	payload: { posts },
});
export const filterByNameAction = (name) => ({
	type: FILTER_BY_NAME,
	payload: { name },
});
