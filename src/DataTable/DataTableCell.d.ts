import {HTMLElementMap, HTMLElementTagName, PropsWithElement} from '../types';

type Props = {
    checkbox?: boolean;
    numeric?: boolean;
    scope?: 'col' | 'row' | 'colgroup' | 'rowgroup';
    className?: string;
};

// prettier-ignore
export type DataTableCellProps<
  T extends HTMLElementTagName,
  R extends HTMLElementMap<R>,
  > = PropsWithElement<Props, T, R>;

// prettier-ignore
export default function <
  TName extends HTMLElementTagName = 'th',
  TRef extends HTMLElementMap<TName>,
  >(props: DataTableCellProps<TName, TRef>): JSX.Element;
