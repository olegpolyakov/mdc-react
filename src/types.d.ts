import React, {ForwardRefExoticComponent, ComponentType, RefObject, HTMLProps, ElementRef} from 'react';

// React.ComponentProps is the same
export type InferredProps<C> = C extends ComponentType<infer P> ? P : {};

export type InferredComponent<C> = ComponentType<InferredProps<C>> | void;

export type ElementORNothing<C, TElement> = C extends ComponentType<any> ? undefined : TElement;

export type HTMLElementTagName = keyof JSX.IntrinsicElements;

export type RefAttributes<C, TRef> = {
    ref?: React.ForwardedRef<
        C extends ForwardRefExoticComponent<RefObject<infer R>> ? R : C extends ComponentType<any> ? null : TRef
    >;
};

export type RestProps<C, TRef> = C extends ComponentType<infer P> ? P : TRef extends HTMLElement ? HTMLProps<TRef> : {};

export type RefForwardingProps<
    TElement extends HTMLElementTagName,
    TRef extends HTMLElementMap<TElement>,
    C extends InferredComponent<C> = void
> = {
    element?: ElementORNothing<C, TElement>;
    component?: C;
} & RestProps<C, TRef> &
    RefAttributes<C, TRef>;

export type PropsWithElementAndComponent<E, R, C> = RefForwardingProps<E, R, C>;

export type PropsWithElement<E, R> = Omit<RefForwardingProps<E, R>, 'component'>;

export type HTMLElementMap<E extends keyof JSX.IntrinsicElements = any> = ElementRef<E> extends HTMLElement
    ? ElementRef<E>
    : never;
