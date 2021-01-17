import { HTMLElementTagName, PropsWithElement } from '../types';

type Props = {
    className?: string;
};

export type TopAppBarTitleProps<E = any> = PropsWithElement<E> & Props;

export default function <TElement extends HTMLElementTagName = 'span'>(
    props: TopAppBarTitleProps<TElement>
): JSX.Element;
