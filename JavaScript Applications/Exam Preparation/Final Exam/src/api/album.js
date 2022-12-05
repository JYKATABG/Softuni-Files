import { del, get, post, put } from "./api.js";


export async function getAllAlbums() {
    return get('/data/albums?sortBy=_createdOn%20desc')
}

export async function getAllbumById(id) {
    return get('/data/albums/' + id);
}

export async function deleteAlbum(id) {
    return del('/data/albums/' + id)
}

export async function createAlbum(album) {
    return post('/data/albums', album)
}

export async function editAlbum(id, album) {
    return put('/data/albums/' + id, album)
}