export const SET_POSTS = 'SET_POSTS';
export const FILTER_BY_NAME = 'FILTER_BY_NAME';

// action creaters
export const setPosts = (posts) => ({ type: SET_POSTS, payload: { posts } });
export const filterByNameAction = (name) => ({
	type: FILTER_BY_NAME,
	payload: { name },
});
