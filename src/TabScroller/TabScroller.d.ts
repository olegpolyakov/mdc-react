import React from 'react';

export type TabScrollerProps = {
    align?: 'start' | 'center' | 'end';
    // TODO: Specify current element type
    activeTab: HTMLElement;
    ref: React.ForwardedRef<HTMLDivElement>;
} & React.HTMLProps<HTMLDivElement>;

export default function (props: TabScrollerProps): JSX.Element;
