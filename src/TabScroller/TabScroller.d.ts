import React, {PropsWithChildren} from 'react';

type TabScrollerProps = PropsWithChildren<{
    align?: 'start' | 'center' | 'end';
    // TODO: Specify current element type
    activeTab: HTMLElement;
    ref: React.ForwardedRef<HTMLDivElement>;
}> &
    React.HTMLProps<HTMLDivElement>;

export default function (props: TabScrollerProps): JSX.Element;
