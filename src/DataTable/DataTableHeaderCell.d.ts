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

// prettier-ignore
export type DataTableHeaderCellProps<
  T extends HTMLElementTagName,
  R extends HTMLElementMap<R>,
  > = PropsWithElement<Props, T, R>;

// prettier-ignore
export default function <
  TName extends HTMLElementTagName = 'th',
  TRef extends HTMLElementMap<TName>,
  >(props: DataTableHeaderCellProps<TName, TRef>): JSX.Element;
