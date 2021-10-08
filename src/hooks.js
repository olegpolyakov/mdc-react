import { useEffect, useLayoutEffect, useState } from 'react';

export function useCreated(fn) {
    const [created, setCreated] = useState(false);

    if (created) return;

    fn();
    setCreated(true);
}

export function useMounted(fn) {
    useEffect(() => fn(), []);
}

export function useUpdated(fn, deps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        if (!mounted) return setMounted(true);

        return fn();
    }, deps);
}

export function useUpdatedSync(fn, deps) {
    const [mounted, setMounted] = useState(false);

    useLayoutEffect(() => {
        if (!mounted) return setMounted(true);

        return fn();
    }, deps);
}

export function useUnmounted(fn) {
    useEffect(() => () => fn(), []);
}