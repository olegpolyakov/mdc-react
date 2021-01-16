import React from 'react';

// FIXME
type DialogTitleProps<T extends any> = {
    ref: React.ForwardedRef<T | HTMLHeadingElement>;
    children: React.ReactNode;
};

export default function <T>(props: DialogTitleProps<T>): JSX.Element;
