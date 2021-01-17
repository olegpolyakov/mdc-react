import React, {ForwardRefExoticComponent, ComponentType, HTMLProps, ElementRef, ComponentProps} from 'react';

export type InferredComponent<C> = ComponentType<ComponentProps<C>> | void;

export type ElementORNothing<C, TElement> = C extends ComponentType<any> ? undefined : TElement;

export type HTMLElementTagName = keyof JSX.IntrinsicElements;

export type RefAttributes<C, TRef> = {
    ref?: React.ForwardedRef<
        C extends ForwardRefExoticComponent<any> ? ElementRef<C> : C extends ComponentType<any> ? null : TRef
    >;
};

export type RestProps<C, TRef> = C extends ComponentType<infer P> ? P : TRef extends HTMLElement ? HTMLProps<TRef> : {};

export type HTMLElementMap<E extends HTMLElementTagName> = ElementRef<E> extends HTMLElement ? ElementRef<E> : never;

export type RefForwardingProps<
    TElement extends HTMLElementTagName,
    TRef extends HTMLElementMap<TElement>,
    C extends InferredComponent<C> = void
> = {
    element?: ElementORNothing<C, TElement>;
    component?: C;
} & RefAttributes<C, TRef> &
    RestProps<C, TRef>;

export type PropsWithElementAndComponent<E, R, C> = RefForwardingProps<E, R, C>;

export type PropsWithElement<E, R> = Omit<RefForwardingProps<E, R>, 'component'>;
