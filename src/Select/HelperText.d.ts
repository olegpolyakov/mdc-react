import { HTMLElementTagName } from '../types';

export type SelectHelperTextProps<TElement extends HTMLElementTagName = any> = {
    validation?: boolean;
    persistent?: boolean;
    element?: TElement;
};

export default function <TElement extends HTMLElementTagName = 'p'>(
    props: SelectHelperTextProps<TElement>
): JSX.Element;
