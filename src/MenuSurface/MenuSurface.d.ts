import React from 'react';

type MenuSurfaceProps = {
    anchor?: object;
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
    // Note: ref is forwarded as instance of HTMLDIvElement without MutableRefObject wrapper
    // Use without .current field
    ref: HTMLDivElement;
} & React.HTMLProps<HTMLDivElement>;

export default function (props: MenuSurfaceProps): JSX.Element;
