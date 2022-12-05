import { del, get, post, put } from "./api.js";


export async function getAllPosts() {
    return get('/data/posts?sortBy=_createdOn%20desc');
}

export async function getById(id) {
    return get('/data/posts/' + id);
}

export async function deletePost(id) {
    return del('/data/posts/' + id);
}

export async function createPost(newPost) {
    return post('/data/posts', newPost)
}
export async function editPost(id, editedPost) {
    return put('/data/posts/' + id, editedPost)
}

export async function getByUserId(userId) {
    return get(`/data/posts?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
}