import { forwardRef } from 'react';

import { Clone } from '../component';
import IconButton from '../icon-button';

import { cssClasses } from './constants';

const SideSheetHeader = forwardRef(({
    title,
    closeIcon,
    onClose,

    element: Element = 'header',
    ...props
}, ref) => {
    return (
        <Element ref={ref} className={cssClasses.HEADER} {...props}>
            {title &&
                <Clone
                    component={title}
                    fallback="h3"
                    className={cssClasses.TITLE}
                />
            }

            {closeIcon &&
                <Clone
                    component={closeIcon}
                    fallback={IconButton}
                    className={cssClasses.CLOSE_BUTTON}
                    onClick={onClose}
                />
            }
        </Element>
    );
});

SideSheetHeader.displayName = 'MDCSideSheetHeader';

export default SideSheetHeader;