import { api } from "./client";

export function getElves() {
    return api.get("/elves");
}

export function getElfDetails(elfId) {
    return api.get(`/elves/${elfId}`);
}