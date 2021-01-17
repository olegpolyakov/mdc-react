import { HTMLElementTagName, PropsWithElement } from '../types';

type Props = {
    checkbox?: boolean;
    numeric?: boolean;
    scope?: 'col' | 'row' | 'colgroup' | 'rowgroup';
    className?: string;
};

export type DataTableCellProps<E = any> = PropsWithElement<E> & Props;

export default function <TElement extends HTMLElementTagName = 'th'>(props: DataTableCellProps<TElement>): JSX.Element;
