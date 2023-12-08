/* eslint-disable @typescript-eslint/no-unused-vars */
export interface ILocalStorage {
    getStringItem(key: string): string | null;
    getObjectItem<T>(key: string): T | null;
}

class LocalStorage implements ILocalStorage {
    getStringItem(key: string): string | null {
        const item = localStorage.getItem(key) || sessionStorage.getItem(key);

        if (item === null || item === undefined) return null;

        return item;
    }

    getObjectItem<T>(key: string): T | null {
        const item = localStorage.getItem(key) || sessionStorage.getItem(key);

        if (item === null || item === undefined) return null;

        try {
            return JSON.parse(item) as T;
        } catch (err) {
            console.error(err, item);
        }

        return null;
    }

    setItem(key: string, val: string) {
        try {
            localStorage.setItem(key, val);
        } catch(err) {
            sessionStorage.setItem(key, val);
        }

    }

    delItem(key: string) {
        localStorage.removeItem(key);
        sessionStorage.removeItem(key);
    }
}

class MockStorage implements ILocalStorage {
    getStringItem(key: string): string | null {
        return null;
    }

    getObjectItem<T>(key: string): T | null {
        return null;
    }

    setItem(k: string, v: string) {
        return null;
    }

    delItem(K: string) {
    }
}

export const persistentStorage = window?.localStorage ? new LocalStorage() : new MockStorage();