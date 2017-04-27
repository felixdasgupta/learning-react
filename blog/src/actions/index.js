import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';

const API_KEY = `?key=cc6ec7a00a78fb1`;
const ROOT_URL = `http://reduxblog.herokuapp.com/api`

export function fetchPosts(){
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}