import React from 'react';

export type MenuSurfaceProps = {
    anchor?: HTMLElement | any;
    open?: boolean;
    top?: boolean;
    left?: boolean;
    bottom?: boolean;
    right?: boolean;
    belowAnchor?: boolean;
    fixed?: boolean;
    fullWidth?: boolean;
    persistent?: boolean;
    // TODO: specify arguments
    onClose?: () => void;
    onKeyDown: () => void;
    className?: string;
    // Note: ref is forwarded as instance
    // Use without .current field
    ref?: HTMLDivElement;
} & React.HTMLProps<HTMLDivElement>;

export default function (props: MenuSurfaceProps): JSX.Element;
