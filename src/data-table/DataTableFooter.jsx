import { forwardRef } from 'react';
import classnames from 'classnames';

import { cssClasses } from './constants';

const DataTableFooter = forwardRef(({ className, ...props }, ref) => {
    const classNames = classnames(cssClasses.FOOTER, className);

    return (
        <tfoot ref={ref} className={classNames} {...props} />
    );
});

DataTableFooter.displayName = 'MDCDataTableFooter';

export default DataTableFooter;