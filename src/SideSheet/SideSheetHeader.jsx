import React from 'react';

import IconButton from '../IconButton';

export default React.forwardRef(SideSheetHeader);

function SideSheetHeader({
    title,
    closeIcon = 'close',
    onClose,

    element: Element = 'header',
    ...props
}, ref) {
    return (
        <Element ref={ref} className="mdc-side-sheet__header" {...props}>
            {title &&
                <h3 className="mdc-side-sheet__title">{title}</h3>
            }

            {closeIcon &&
                <IconButton
                    className="mdc-side-sheet__close-button"
                    icon={closeIcon}
                    onClick={onClose}
                />
            }
        </Element>
    );
}

SideSheetHeader.displayName = 'MDCSideSheetHeader';