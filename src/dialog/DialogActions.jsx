import { forwardRef } from 'react';

import { Clone } from '../component';

import { cssClasses } from './constants';

const DialogActions = forwardRef(({ children }, ref) => {
    return (
        <div ref={ref} className={cssClasses.ACTIONS}>
            <Clone
                component={children}
                className={cssClasses.BUTTON}
            />
        </div>
    );
});

DialogActions.displayName = 'MDCDialogActions';

export default DialogActions;