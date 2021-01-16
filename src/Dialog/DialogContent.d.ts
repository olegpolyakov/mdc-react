import React, {PropsWithChildren} from 'react';

export type DialogContentProps = PropsWithChildren & {ref?: React.ForwardedRef<HTMLDivElement>};

export default function (props: DialogContentProps): JSX.Element;
