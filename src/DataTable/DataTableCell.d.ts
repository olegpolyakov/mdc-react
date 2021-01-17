import {HTMLElementMap, HTMLElementTagName, PropsWithElement} from '../types';

type Props = {
    checkbox?: boolean;
    numeric?: boolean;
    scope?: 'col' | 'row' | 'colgroup' | 'rowgroup';
    className?: string;
};

export type DataTableCellProps<E, R> = PropsWithElement<E, R> & Props;

export default function <TElement extends HTMLElementTagName = 'th', TRef extends HTMLElementMap<TElement>>(
    props: DataTableCellProps<TElement, TRef>
): JSX.Element;
