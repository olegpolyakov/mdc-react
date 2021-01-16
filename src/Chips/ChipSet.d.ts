import {HTMLElementMap, HTMLElementTagName, InferredComponent, RefForwardingProps} from '../types';

export type ChipSetProps = {
    // chips???
    value: string | number;
    input?: boolean;
    choice?: boolean;
    filter?: boolean;
    // TODO: specify arguments
    onChange?: () => void;
};

export default function <
    TName extends HTMLElementTagName = 'div',
    TRef extends HTMLElementMap<TName>,
    TComponent extends InferredComponent<TComponent>
>(props: ChipSetProps & RefForwardingProps<TName, TRef, TComponent>): JSX.Element;
