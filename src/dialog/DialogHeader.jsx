import { forwardRef } from 'react';

import { Clone } from '../component';
import IconButton from '../icon-button';

import { cssClasses } from './constants';

const DialogHeader = forwardRef(({
    title,
    closeIcon,
    fullscreen,
    onClose,

    children,
    ...props
}, ref) => {
    return (
        <div ref={ref} className={cssClasses.HEADER} {...props}>
            <Clone
                component={title}
                fallback="h2"
                className={cssClasses.TITLE}
            />

            {(fullscreen || closeIcon) &&
                <Clone
                    component={closeIcon}
                    fallback={<IconButton icon="close" />}
                    className={cssClasses.CLOSE}
                    onClick={onClose}
                />
            }

            {children}
        </div>
    );
});

DialogHeader.displayName = 'MDCDialogHeader';

export default DialogHeader;