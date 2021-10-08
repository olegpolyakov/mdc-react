import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { listGroupCssClasses as cssClasses } from './constants';

const ListGroupSubheader = forwardRef(({
    title,

    element: Element = 'h3',
    className,
    children = title,
    ...props
}, ref) => {
    const classNames = classnames(cssClasses.SUBHEADER, className);

    return (
        <Element ref={ref} className={classNames} {...props}>{children}</Element>
    );
});

ListGroupSubheader.displayName = 'MDCListGroupSubheader';

ListGroupSubheader.propTypes = {
    title: PropTypes.string
};

export default ListGroupSubheader;