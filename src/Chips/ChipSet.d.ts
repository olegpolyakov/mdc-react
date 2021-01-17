import {
    HTMLElementMap,
    HTMLElementTagName,
    InferredComponent,
    PropsWithElementAndComponent,
    RefForwardingProps
} from '../types';
import {PropsWithChildren} from 'react';
import {Props} from './Chip';

type Props = {
    // chips???
    value?: string | number;
    input?: boolean;
    choice?: boolean;
    filter?: boolean;
    // TODO: specify arguments
    onChange?: () => void;
};

export type ChipSetProps<E, C, R> = PropsWithElementAndComponent<E, C, R> & PropsWithChildren<Props>;

export default function <
    TElement extends HTMLElementTagName = 'div',
    TComponent extends InferredComponent<TComponent>,
    TRef extends HTMLElementMap<TElement>
>(props: ChipSetProps<TElement, TComponent, TRef>): JSX.Element;
