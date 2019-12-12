import { useState, useEffect, useLayoutEffect } from 'react';

export function useCreated(fn) {
    const [created, setCreated] = useState(false);

    if (!created) fn();

    useEffect(() => setCreated(true), []);

    return created;
}

export function useMounted(fn) {
    useEffect(() => fn(), []);
}

export function useUpdated(fn, deps) {
    const [created, setCreated] = useState(false);

    useEffect(() => {
        if (!created) return setCreated(true);

        return fn();
    }, deps);
}

export function useRendered(fn, deps) {
    useLayoutEffect(() => fn(), deps);
}

export function useDestroyed(fn) {
    useEffect(() => () => fn(), []);
}