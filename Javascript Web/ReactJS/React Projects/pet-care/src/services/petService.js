import * as request from './request.js';

const baseUrl = 'http://localhost:3030/jsonstore/pets'

export async function getAll() {
    const data = await request.get(baseUrl)
    const pets = Object.values(data);

    return pets
}

export async function create(petData) {
    const data = await request.post(baseUrl, petData);

    return data;
}

export async function getOne(petId) {
    const data = await request.get(`${baseUrl}/${petId}`);

    return data;
}