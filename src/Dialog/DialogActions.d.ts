import React, {PropsWithChildren} from 'react';

export type DialogActionsProps = PropsWithChildren & {ref?: React.ForwardedRef<HTMLDivElement>};

export default function (props: DialogActionsProps): JSX.Element;
