import { api } from "./client";

export function getOrders() {
    return api.get("/orders");
}

export function createOrders(orderData) {
    return api.post("/orders", orderData);
}