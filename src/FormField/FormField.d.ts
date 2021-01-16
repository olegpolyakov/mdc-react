import {HTMLElementMap, HTMLElementTagName, InferredComponent, RefForwardingProps} from '../types';

export type FormField = {
    label: string;
    alignEnd?: boolean;
    nowrap?: boolean;
    spaceBetween?: boolean;

    className: string;
    // TODO: remove from types component prop
};

export default function <
    TName extends HTMLElementTagName = 'span',
    TRef extends HTMLElementMap<TName>,
    TComponent extends InferredComponent<TComponent>
>(props: FormField & RefForwardingProps<TName, TRef, TComponent>): JSX.Element;
