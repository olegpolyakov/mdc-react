import React from 'react';

export type TextFieldHeaderTextProps = {
    persistent?: boolean;
    validation?: boolean;
} & React.HTMLProps<HTMLParagraphElement>;

export default function (props: TextFieldHeaderTextProps): JSX.Element;
