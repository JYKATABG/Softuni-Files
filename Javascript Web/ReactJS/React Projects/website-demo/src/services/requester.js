export async function request(method, url, data) {

    const options = {};

    if (method !== 'GET') {
        options.method = method;

        if (data) {
            options.headers = {
                'content-type': 'application/json'
            };
            options.body = JSON.stringify(data);
        }
    }

    const response = await fetch(url, options)

    try {
        const result = await response.json();

        return result
    } catch (error) {
        return {}
    }
}

export const get = request.bind(null, 'get');
export const post = request.bind(null, 'post');
export const put = request.bind(null, 'put');
export const del = request.bind(null, 'del');