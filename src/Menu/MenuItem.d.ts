import {HTMLElementMap, HTMLElementTagName} from '../types';
import {ListItemProps} from '../List/ListItem';

type MenuItemProps<E = any, R = any> = {
    selected?: boolean;
    disabled?: boolean;
} & ListItemProps<E, R>;

export default function <TElement extends HTMLElementTagName = 'li', TRef extends HTMLElementMap<TElement>>(
    props: MenuItemProps<TElement, TRef>
): JSX.Element;
