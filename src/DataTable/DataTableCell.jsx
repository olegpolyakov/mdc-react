import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function DataTableCell({
    checkbox = false,
    numeric = false,

    element: Element = 'td',
    scope = Element === 'th' ? 'row' : undefined,
    className,
    children,
    ...props
}) {
    const classNames = classnames('mdc-data-table__cell', {
        'mdc-data-table__cell--checkbox': checkbox,
        'mdc-data-table__cell--numeric': numeric
    }, className);

    return (
        <Element className={classNames} scope={scope} {...props}>
            {(checkbox ? React.cloneElement(children, {
                className: 'mdc-data-table__row-checkbox'
            }) : children)}
        </Element>
    );
}

DataTableCell.displayName = 'MDCDataTableCell';

DataTableCell.propTypes = {
    checkbox: PropTypes.bool,
    numeric: PropTypes.bool
};