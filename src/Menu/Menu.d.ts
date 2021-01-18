import { HTMLElementTagName } from '../types';
import { MenuSurfaceProps } from '../MenuSurface/MenuSurface';
import { ListProps } from '../List/List';

export type MenuProps<E = any, LE = any> = {
    listProps?: ListProps<LE>;
    className?: string;
    open?: boolean;
} & MenuSurfaceProps<E>;

export default function <TElement extends HTMLElementTagName = 'div', TListElement extends HTMLElementTagName = 'ul'>(
    props: MenuProps<TElement, TRef, TListElement, TListRef>
): JSX.Element;
