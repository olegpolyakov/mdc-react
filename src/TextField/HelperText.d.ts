import React from 'react';

export type TextFieldHelperTextProps = {
    persistent?: boolean;
    validation?: boolean;
} & React.HTMLProps<HTMLParagraphElement>;

export default function (props: TextFieldHelperTextProps): JSX.Element;
