import {HTMLElementMap, HTMLElementTagName, InferredComponent, RefForwardingProps} from '../types';

export type ElevationProps = {
    z?: number;
    transition?: boolean;
    className?: string;
};

export default function <
    TName extends HTMLElementTagName = 'span',
    TRef extends HTMLElementMap<TName>,
    TComponent extends InferredComponent<TComponent>
>(props: ElevationProps & RefForwardingProps<TName, TRef, TComponent>): JSX.Element;
