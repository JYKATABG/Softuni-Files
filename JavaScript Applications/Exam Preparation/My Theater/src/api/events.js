import { del, get, post, put } from "./api.js";

export async function getAllEvents() {
    return get('/data/theaters?sortBy=_createdOn%20desc&distinct=title')
}

export async function createEvent(event) {
    return post('/data/theaters', event);
}

export async function getEventById(id) {
    return get('/data/theaters/' + id);
}

export async function deleteById(id) {
    return del('/data/theaters/' + id);
}
export async function getUserDataById(userId) {
    return get(`/data/theaters?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
}
export async function editEvent(id, event) {
    return put(`/data/theaters/` + id, event);
}