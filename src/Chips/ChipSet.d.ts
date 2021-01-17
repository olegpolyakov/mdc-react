import {HTMLElementMap, HTMLElementTagName, InferredComponent, PropsWithElementAndComponent} from '../types';
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

export type ChipSetProps<E, C, R> = PropsWithElementAndComponent<E, C, R> & Props;

export default function <
    TElement extends HTMLElementTagName = 'div',
    TComponent extends InferredComponent<TComponent>,
    TRef extends HTMLElementMap<TElement>
>(props: ChipSetProps<TElement, TComponent, TRef>): JSX.Element;
