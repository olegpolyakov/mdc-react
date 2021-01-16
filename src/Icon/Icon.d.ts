import {HTMLElementMap, HTMLElementTagName, InferredComponent, RefForwardingProps} from '../types';

type IconSize = 'small' | 'medium' | 'large';
type IconProps = {
    size: IconSize;
    dark?: boolean;
    light?: boolean;
    inactive?: boolean;
    className?: string;
};

export default function <
    TName extends HTMLElementTagName = 'span',
    TRef extends HTMLElementMap<TName>,
    TComponent extends InferredComponent<TComponent>
>(props: IconProps & RefForwardingProps<TName, TRef, TComponent>): JSX.Element;
