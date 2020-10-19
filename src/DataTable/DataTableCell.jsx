import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default React.forwardRef(DataTableCell);

function DataTableCell({
    checkbox = false,
    numeric = false,

    element: Element = 'td',
    scope = Element === 'th' ? 'row' : undefined,
    className,
    children,
    ...props
}, ref) {
    const classNames = classnames('mdc-data-table__cell', {
        'mdc-data-table__cell--checkbox': checkbox,
        'mdc-data-table__cell--numeric': numeric
    }, className);

    return (
        <Element ref={ref} className={classNames} scope={scope} {...props}>
            {(checkbox ? React.cloneElement(children, {
                className: classnames('mdc-data-table__row-checkbox', children.props.className)
            }) : children)}
        </Element>
    );
}

DataTableCell.displayName = 'MDCDataTableCell';

DataTableCell.propTypes = {
    checkbox: PropTypes.bool,
    numeric: PropTypes.bool
};