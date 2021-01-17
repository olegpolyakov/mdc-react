import React, {ForwardedRef} from 'react';

export type LineRippleProps = {
    active?: boolean;
    className?: string;
    ref?: ForwardedRef<HTMLSpanElement>;
} & React.HTMLProps<HTMLSpanElement>;

export default function (props: LineRippleProps): JSX.Element;
