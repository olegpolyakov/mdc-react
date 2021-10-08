import { forwardRef } from 'react';
import classnames from 'classnames';

import { ListItem } from '../list';
import { cssClasses } from './constants';

const MenuItem = forwardRef(({
    selected = false,
    disabled = false,

    className,
    ...props
}, ref) => {
    const classNames = classnames(cssClasses.ITEM, {
        [cssClasses.ITEM_SELECTED]: selected
    }, className);

    return (
        <ListItem
            ref={ref}
            role="menuitem"
            className={classNames}
            selected={selected}
            disabled={disabled}
            data-disabled={disabled || undefined}
            tabIndex={disabled ? '-1' : undefined}
            {...props}
        />
    );
});

MenuItem.displayName = 'MDCMenuItem';

MenuItem.propTypes = {
    ...ListItem.propTypes
};

export default MenuItem;