import { HTMLElementTagName, PropsWithElement } from '../types';

type Props = {
    dense?: boolean;
    textualList?: boolean;
    avatarList?: boolean;
    iconList?: boolean;
    imageList?: boolean;
    thumbnailList?: boolean;
    videoList?: boolean;
    twoLine?: boolean;
};

export type ListProps<E = any> = PropsWithElement<E> & Props;

export default function <TElement extends HTMLElementTagName = 'th'>(props: ListProps<TElement>): JSX.Element;
