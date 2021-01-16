import React from 'react';

type HasChildren<T> = T extends React.ReactNode ? undefined : React.ReactNode;

type Props<TChildren extends React.ReactNode | void = void> = {
    component?: HasChildren<TChildren>;
    children?: React.ReactNode;
    button?: boolean;
    icon?: boolean;
    // ...props
} & {[k: string]: any};

export default function (props: Props): JSX.Element;
