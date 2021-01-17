import {HTMLElementMap, HTMLElementTagName, PropsWithElement} from '../types';
import React from 'react';

type Props = {
    label?: React.ReactNode;
    value?: React.ReactNode;
    checkbox?: boolean;
    numeric?: boolean;
    withSort?: boolean;
    sorted?: boolean;
    sortIconButton?: React.ReactNode;
    onSort?: () => void;
    className?: string;
    role?: string;
    scope?: 'col' | 'row' | 'colgroup' | 'rowgroup';
};

export type DataTableHeaderCellProps<E, R> = PropsWithElement<T, R> & Props;

export default function <TElement extends HTMLElementTagName = 'th', TRef extends HTMLElementMap<TElement>>(
    props: DataTableHeaderCellProps<TElement, TRef>
): JSX.Element;
