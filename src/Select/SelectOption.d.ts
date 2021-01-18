import { HTMLElementTagName } from '../types';
import { MenuItemProps } from '../Menu/MenuItem';

export type SelectOptionProps<E = any> = {
    selected?: boolean;
    checkbox?: boolean;
    onClick?: () => void;
} & MenuItemProps<E>;

export default function <TElement extends HTMLElementTagName = 'li'>(props: SelectOptionProps<TElement>): JSX.Element;
