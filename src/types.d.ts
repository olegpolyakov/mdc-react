import React, { ForwardRefExoticComponent, ComponentType, DetailedHTMLProps, ElementRef, ComponentProps } from 'react';

/**
 * Give component type with props
 */
export type InferredComponent<C> = ComponentType<ComponentProps<C>> | void;

/**
 * ElementOrNothing type prevents misuse of both element and component props together
 */
export type ElementOrNothing<C, TElement> = C extends ComponentType<any> ? undefined : TElement;

/**
 * HTMLElementTagName is a union of string literals like 'div' | 'span' | 'p'
 */
export type HTMLElementTagName = keyof JSX.IntrinsicElements;

/**
 * HTMLElementMap gives a type of html element by key like 'div' or 'span' etc..
 * HTMLElementMap<'iframe'> == HTMLIFrameElement and HTMLElementMap<'canvas'> == HTMLCanvasElement
 * It is needed for properly typed ref on JSX element
 */
export type HTMLElementMap<E> = E extends HTMLElementTagName ? ElementRef<E> : never;

/**
 * JSXElementMap gives props of JSX element by key like 'div' or 'span' etc..
 * JSXElementMap<'iframe'> gives react props that are specified for iframe element
 */
export type JSXElementMap<E extends HTMLElementTagName> = {
    [K in E]: JSX.IntrinsicElements[K] extends DetailedHTMLProps<any, any> ? JSX.IntrinsicElements[K] : never;
}[E];

/**
 * RestProps returns type of passed component's props or JSX element's props or nothing
 * This is needed for passing props with spread operator like {...props}
 */
// prettier-ignore
export type RestProps<C, E> = C extends ComponentType<infer P> ? P : E extends HTMLElementTagName ? JSXElementMap<E> : {};

/**
 * RefAttributes gives type of ref prop
 * Type will take ref from passed ForwardRefExoticComponent
 * This type makes impossible passing any ref when component which is not a ForwardRefExoticComponent
 */
export type RefAttributes<C, TRef> = {
    ref?: React.ForwardedRef<
        C extends ForwardRefExoticComponent<any> ? ElementRef<C> : C extends ComponentType<any> ? null : TRef
    >;
};

/**
 * {
 * element: keyof JSX.IntrinsicElements;
 * component: ForwardRefExoticComponent<any>>
 * }
 */
export type PropsWithElementAndComponent<
    TElement extends HTMLElementTagName,
    TRef extends HTMLElementMap<TElement>,
    TComponent extends InferredComponent<TComponent> = void
> = {
    element?: ElementOrNothing<TComponent, TElement>;
    component?: TComponent;
} & RefAttributes<TComponent, TRef> &
    RestProps<TComponent, TElement>;

/**
 * {
 * element: keyof JSX.IntrinsicElements;
 * }
 */
export type PropsWithElement<TElement extends HTMLElementTagName, TRef extends HTMLElementMap<TElement>> = {
    element?: TElement;
} & { ref?: React.ForwardedRef<TRef> } & JSXElementMap<TElement>;
