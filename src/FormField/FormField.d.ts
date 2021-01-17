import { HTMLElementTagName, PropsWithElement } from '../types';

type Props = {
    label?: string;
    alignEnd?: boolean;
    nowrap?: boolean;
    spaceBetween?: boolean;
    className?: string;
};

export type FormFieldProps<E = any> = PropsWithElement<E> & Props;

export default function <TElement extends HTMLElementTagName = 'span'>(props: FormFieldProps<TElement>): JSX.Element;
