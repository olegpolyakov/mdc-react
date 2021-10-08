import { forwardRef } from 'react';

import LinearProgress from '../linear-progress';

import { cssClasses } from './constants';

const DataTableProgressIndicator = forwardRef((props, ref) => {
    return (
        <div ref={ref} className={cssClasses.PROGRESS_INDICATOR} {...props}>
            <div className={cssClasses.SCRIM} />

            <LinearProgress className={cssClasses.LINEAR_PROGRESS} indeterminate />
        </div>
    );
});

DataTableProgressIndicator.displayName = 'MDCDataTableProgressIndicator';

export default DataTableProgressIndicator;