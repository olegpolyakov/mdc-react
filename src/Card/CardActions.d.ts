import {HTMLElementMap, HTMLElementTagName, PropsWithElement} from '../types';

type Props = {
    fullBleed?: boolean;
    className?: string;
};

// prettier-ignore
export type CardActionsProps<
  T extends HTMLElementTagName,
  R extends HTMLElementMap<R>,
  > = PropsWithElement<Props, T, R>;

// prettier-ignore
export default function <
  TName extends HTMLElementTagName = 'div',
  TRef extends HTMLElementMap<TName>,
  >(props: CardActionsProps<TName, TRef>): JSX.Element;
