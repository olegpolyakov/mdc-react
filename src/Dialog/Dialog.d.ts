import React from 'react';
import {HTMLElementMap, HTMLElementTagName, PropsWithElement} from '../types';

type Props = {
    title: React.ReactNode;
    content: React.ReactNode;
    actions?: React.ReactNode[];
    open?: boolean;
    appear?: boolean;
    persistent?: boolean;
    onClose?: () => void;
    className?: string;
};

// prettier-ignore
export type DialogProps<
  T extends HTMLElementTagName,
  R extends HTMLElementMap<R>,
  > = PropsWithElement<Props, T, R>;

// prettier-ignore
export default function <
  TName extends HTMLElementTagName = 'div',
  TRef extends HTMLElementMap<TName>,
  >(props: DialogProps<TName, TRef>): JSX.Element;
