import * as request from './requester.js'

const baseUrl = 'http://localhost:3030/jsonstore/games';

export async function getAll() {

    const data = await request.get(baseUrl);
    const games = Object.values(data);
    

    return games;
}

export async function create(gameData) {
    const result = await request.post(baseUrl, gameData);

    console.log(result);

    return result;
}

export async function getOne(id) {
    const result = await request.get(`${baseUrl}/${id}`);

    return result;
}

export async function onDelete(id) {
    const result = await request.del(`${baseUrl}/${id}`);

    return result
}