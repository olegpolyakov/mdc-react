import React, {ForwardRefExoticComponent, ComponentType, RefObject} from 'react';

export type InferredProps<C> = C extends ComponentType<infer P> ? P : {};

export type InferredComponent<C> = ComponentType<InferredProps<C>> | void;

export type ElementType<C, TName> = C extends ComponentType<any> ? undefined : TName;

export type HTMLElementTagName = keyof JSX.IntrinsicElements;

export type RefAttributes<C, TRef> = {
    ref?: React.ForwardedRef<
        C extends ForwardRefExoticComponent<RefObject<infer R>> ? R : C extends ComponentType<any> ? null : TRef
    >;
};

export type RefForwardingProps<
    TName extends HTMLElementTagName,
    TRef extends HTMLElementMap<TName>,
    C extends InferredComponent<C> = void
> = React.PropsWithChildren<{
    element?: ElementType<C, TName>;
    component?: C;
}> &
    InferredProps<C> &
    RefAttributes<C, TRef>;

export type PropsWithElementAndComponent<
    P extends {},
    TName extends HTMLElementTagName = 'span',
    TRef extends HTMLElementMap<TName>,
    TComponent extends InferredComponent<TComponent>
> = P & RefForwardingProps<TName, TRef, TComponent>;

export type PropsWithElement<
    P extends {},
    TName extends HTMLElementTagName = 'span',
    TRef extends HTMLElementMap<TName>
> = P & Omit<RefForwardingProps<TName, TRef>, 'component'>;

export type HTMLElementMap<T extends HTMLElementTagName> = T extends 'span'
    ? HTMLSpanElement
    : T extends 'div'
    ? HTMLDivElement
    : T extends 'button'
    ? HTMLButtonElement
    : T extends 'pre'
    ? HTMLPreElement
    : T extends 'img'
    ? HTMLImageElement
    : T extends 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    ? HTMLHeadingElement
    : T extends 'p'
    ? HTMLParagraphElement
    : T extends 'a'
    ? HTMLAnchorElement
    : T extends 'form'
    ? HTMLFormElement
    : T extends 'fieldset'
    ? HTMLFieldSetElement
    : T extends 'input'
    ? HTMLInputElement
    : T extends 'label'
    ? HTMLLabelElement
    : T extends 'textarea'
    ? HTMLTextAreaElement
    : T extends 'legend'
    ? HTMLLegendElement
    : T extends 'select'
    ? HTMLSelectElement
    : T extends 'optgroup'
    ? HTMLOptGroupElement
    : T extends 'option'
    ? HTMLOptionElement
    : T extends 'ol'
    ? HTMLOListElement
    : T extends 'ul'
    ? HTMLUListElement
    : T extends 'li'
    ? HTMLLIElement
    : T extends 'col'
    ? HTMLTableColElement
    : T extends 'table'
    ? HTMLTableElement
    : T extends 'td'
    ? HTMLTableDataCellElement
    : T extends 'th'
    ? HTMLTableHeaderCellElement
    : T extends 'tr'
    ? HTMLTableRowElement
    : HTMLElement;
