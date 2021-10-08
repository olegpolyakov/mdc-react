import { forwardRef } from 'react';

import { cssClasses } from './constants';

const DialogContent = forwardRef((props, ref) => {
    return (
        <div ref={ref} className={cssClasses.CONTENT} {...props} />
    );
});

DialogContent.displayName = 'MDCDialogContent';

export default DialogContent;