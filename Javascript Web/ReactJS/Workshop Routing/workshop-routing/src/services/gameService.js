import * as requester from "./requester.js";

let baseUrl = 'http://localhost:3030/jsonstore/games'

export async function getAll() {
    const result = await requester.get(baseUrl);
    const games = Object.values(result);

    return games;
}

export function create(gameData) {
    const result = requester.post(baseUrl, gameData);

    return result;
}

export async function getOne(gameId) {
    const result = await requester.get(`${baseUrl}/${gameId}`)

    return result;
}