import {HTMLElementMap, HTMLElementTagName, InferredComponent, RefForwardingProps} from '../types';

export type BadgeProps = {
    value: string | number;
    inset?: boolean;
    noBackground?: boolean;

    className;
    // TODO: add component props or remove from types
};

export default function <
    TName extends HTMLElementTagName = 'span',
    TRef extends HTMLElementMap<TName>,
    TComponent extends InferredComponent<TComponent>
>(props: BadgeProps & RefForwardingProps<TName, TRef, TComponent>): JSX.Element;
