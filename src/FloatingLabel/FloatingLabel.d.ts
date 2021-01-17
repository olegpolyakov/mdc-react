import React, {ForwardedRef} from 'react';

export type FloatingLabelProps = {
    float?: boolean;
    required?: boolean;
    className?: string;
    ref?: ForwardedRef<HTMLSpanElement>;
} & React.HTMLProps<HTMLSpanElement>;

export default function (props: FloatingLabelProps): JSX.Element;
