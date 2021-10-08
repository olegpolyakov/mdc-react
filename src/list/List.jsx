import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { create } from '../component';

import { listCssClasses as cssClasses } from './constants';
import ListItem from './ListItem';

const List = forwardRef(({
    items,

    element: Element = 'ul',
    className,
    children = items?.map(item => create(ListItem, item)),
    ...props
}, ref) => {
    const classNames = classnames(cssClasses.ROOT, className);

    return (
        <Element ref={ref} className={classNames} {...props}>
            {children}
        </Element>
    );
});

List.displayName = 'MDCList';

ListItem.propTypes = {
    items: PropTypes.array
};

export default List;