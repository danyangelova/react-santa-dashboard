
// state, who's acting like useState, but it's stored in localStorage

import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue) {
    //UI state
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const raw = localStorage.getItem(key);
            return raw != null ? JSON.parse(raw) : initialValue;
        } catch {
            return initialValue;
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(storedValue));
        } catch { }
    }, [key, storedValue]);

    return [storedValue, setStoredValue];
}