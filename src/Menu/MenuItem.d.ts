import { HTMLElementTagName } from '../types';
import { ListItemProps } from '../List/ListItem';

export type MenuItemProps<E = any> = {
    selected?: boolean;
    disabled?: boolean;
} & ListItemProps<E>;

export default function <TElement extends HTMLElementTagName = 'li'>(props: MenuItemProps<TElement>): JSX.Element;
