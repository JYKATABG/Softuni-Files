function requestValidator(obj) {

    let validMethods = ["GET", "POST", "DELETE", "CONNECT"];
    let uriPath = /^[\w.]+$/g;
    let validVersions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
    let specialCh = [`<`, `>`, `\\`, `&`, `'`, `"`];

    if (!validMethods.includes(obj.method)) {
        throw new Error("Invalid request header: Invalid Method");
    }
    if (!obj.hasOwnProperty("uri")) {
        throw new Error("Invalid request header: Invalid URI")
    }

    if (obj.uri !== "*" && !obj.uri.match(uriPath)) {
        throw new Error("Invalid request header: Invalid URI");
    }

    if (!validVersions.includes(obj.version)) {
        throw new Error("Invalid request header: Invalid Version")
    }

    for (let ch of obj.message) {
        if (specialCh.includes(ch)) {
            throw new Error("Invalid request header: Invalid Message")
        }
    }
    return obj;
}
requestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: 'hello world'
});