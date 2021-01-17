import React from 'react';

type ComponentOrNothing<T> = T extends React.ReactNode ? undefined : React.ReactNode;

type Props<TChildren extends React.ReactNode | void = void, P extends Record<keyof any, any>> = {
    component?: ComponentOrNothing<TChildren>;
    children?: TChildren;
    button?: boolean;
    icon?: boolean;
} & P;

export default function (props: Props): JSX.Element;
