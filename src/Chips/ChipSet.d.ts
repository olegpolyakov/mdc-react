import { HTMLElementTagName, InferredComponent, PropsWithElementAndComponent } from '../types';
import { Props } from './Chip';

type Props = {
    // chips???
    value?: string | number;
    input?: boolean;
    choice?: boolean;
    filter?: boolean;
    // TODO: specify arguments
    onChange?: () => void;
};

export type ChipSetProps<E = any, C = any> = PropsWithElementAndComponent<E, C> & Props;

export default function <TElement extends HTMLElementTagName = 'div', TComponent extends InferredComponent<TComponent>>(
    props: ChipSetProps<TElement, TComponent>
): JSX.Element;
