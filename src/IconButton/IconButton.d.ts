import {HTMLElementMap, HTMLElementTagName, InferredComponent, RefForwardingProps} from '../types';

type IconButtonProps = {
    icon?: React.ReactElement;
    className?: string;
};

export default function <
    TName extends HTMLElementTagName = 'span',
    TRef extends HTMLElementMap<TName>,
    TComponent extends InferredComponent<TComponent>
>(props: IconButtonProps & RefForwardingProps<TName, TRef, TComponent>): JSX.Element;
