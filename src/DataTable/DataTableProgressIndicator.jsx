import React from 'react';

import LinearProgress from '../LinearProgress/LinearProgress';

export default React.forwardRef(DataTableProgressIndicator);

function DataTableProgressIndicator(props, ref) {
    return (
        <div ref={ref} className="mdc-data-table__progress-indicator" {...props}>
            <div className="mdc-data-table__scrim" />

            <LinearProgress className="mdc-data-table__linear-progress" indeterminate />
        </div>
    );
}

DataTableProgressIndicator.displayName = 'MDCDataTableProgressIndicator';