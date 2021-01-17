import {HTMLElementMap, HTMLElementTagName, PropsWithElement} from '../types';

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

export type ListProps<E, R> = PropsWithElement<E, R> & Props;

export default function <TElement extends HTMLElementTagName = 'th', TRef extends HTMLElementMap<TElement>>(
    props: ListProps<TElement, TRef>
): JSX.Element;
