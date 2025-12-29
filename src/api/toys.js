//Toys server data

import { api } from "./client";

export function getToys() {
    return api.get("/toys");
}

export function getToyById(toyId) {
    return api.get(`/toys/${toyId}`);
}

export function toggleToyStock(toyId, nextInStock) {
    return api.patch(`/toys/${toyId}`, { inStock: nextInStock });
}