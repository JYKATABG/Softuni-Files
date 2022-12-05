import { del, get, post, put } from "./api.js";


export async function getAllOffers() {
    return get('/data/offers?sortBy=_createdOn%20desc')
}

export async function getOffersById(id) {
    return get('/data/offers/' + id)
}

export async function deleteOffer(id) {
    return del('/data/offers/' + id)
}

export async function createOffer(offer) {
    return post('/data/offers', offer)
}
export async function editOffer(id, offer) {
    return put('/data/offers/' + id, offer)
}