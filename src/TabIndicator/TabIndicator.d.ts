import React from 'react';

export type TabIndicatorProps = {
    active?: boolean;
    fade?: boolean;
    underline?: boolean;
    previousIndicatorClientRect?: ClientRect;
    ref?: React.ForwardedRef<HTMLSpanElement>;
} & Ract.HTMLProps<HTMLSpanElement>;

export default function (props: TabIndicatorProps): JSX.Element;
