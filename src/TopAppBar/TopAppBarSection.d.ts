import { HTMLElementTagName, PropsWithElement } from '../types';

type Props = {
    align?: 'start' | 'center' | 'end';
    className?: string;
};

export type TopAppBarSectionProps<E = any> = PropsWithElement<E> & Props;

export default function <TElement extends HTMLElementTagName = 'div'>(
    props: TopAppBarSectionProps<TElement>
): JSX.Element;
