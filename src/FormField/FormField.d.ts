import {HTMLElementMap, HTMLElementTagName, PropsWithElement} from '../types';

type Props = {
    label?: string;
    alignEnd?: boolean;
    nowrap?: boolean;
    spaceBetween?: boolean;
    className?: string;
};

export type FormFieldProps<E, R> = PropsWithElement<E, R> & Props;

export default function <TElement extends HTMLElementTagName = 'span', TRef extends HTMLElementMap<TElement>>(
    props: FormFieldProps<TElement, TRef>
): JSX.Element;
