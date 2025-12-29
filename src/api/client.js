const BASE_URL = "http://localhost:3001";

async function request(path, options = {}) {
    const res = await fetch(
        `${BASE_URL}${path}`, {
        headers: {
            "Content-Type": "application/json",
            ...(options.headers || {})
        },
        ...options,
    });

    const text = await res.text();
    const data = text ? JSON.parse(text) : null;

    if (!res.ok) {
        let message;
        if (data && data.message) {
            message = data.message;
        } else {
            message = `Request failed: ${res.status} ${res.statusText}`;
        }
        throw new Error(message);
    }
    return data;
}

export const api = {
    get: (path) => request(path),
    post: (path, body) =>
        request(path, { method: "POST", body: JSON.stringify(body) }),
    patch: (path, body) =>
        request(path, {method: "PATCH", body: JSON.stringify(body)})
};