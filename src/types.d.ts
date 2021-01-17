import React, {ForwardRefExoticComponent, ComponentType, HTMLProps, ElementRef, ComponentProps} from 'react';

export type InferredComponent<C> = ComponentType<ComponentProps<C>> | void;

export type ElementOrNothing<C, TElement> = C extends ComponentType<any> ? undefined : TElement;

export type HTMLElementTagName = keyof JSX.IntrinsicElements;

export type HTMLElementMap<E extends HTMLElementTagName> = ElementRef<E> extends HTMLElement ? ElementRef<E> : never;

export type RestProps<C, TRef> = C extends ComponentType<infer P> ? P : TRef extends HTMLElement ? HTMLProps<TRef> : {};

export type RefAttributes<C, TRef> = {
    ref?: React.ForwardedRef<
        C extends ForwardRefExoticComponent<any> ? ElementRef<C> : C extends ComponentType<any> ? null : TRef
    >;
};

export type RefForwardingProps<
    TElement extends HTMLElementTagName,
    TComponent extends InferredComponent<TComponent> = void,
    TRef extends HTMLElementMap<TElement>
> = {
    element?: ElementOrNothing<TComponent, TElement>;
    component?: TComponent;
} & RefAttributes<TComponent, TRef> &
    RestProps<TComponent, TRef>;

export type PropsWithElementAndComponent<E, C, R> = RefForwardingProps<E, C, R>;

export type PropsWithElement<E, R> = Omit<RefForwardingProps<E, R>, 'component'>;
