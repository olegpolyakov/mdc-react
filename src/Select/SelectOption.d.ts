import {HTMLElementTagName, HTMLElementMap} from '../types';
import {MenuItemProps} from '../Menu/MenuItem';

export type SelectOptionProps<E = any, R = any> = {
    selected?: boolean;
    checkbox?: boolean;
    onClick?: () => void;
} & MenuItemProps<E, R>;

export default function <TElement extends HTMLElementTagName = 'li', TRef extends HTMLElementMap<TElement>>(
    props: SelectOptionProps<TElement, TRef>
): JSX.Element;
