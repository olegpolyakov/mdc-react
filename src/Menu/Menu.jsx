import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import MenuSurface from '../MenuSurface/MenuSurface';
import List from '../List/List';

export default function Menu({
    open,
    listProps = {},

    children,
    className,
    ...props
}) {
    const listRef = useRef();
    const classNames = classnames('mdc-menu', className);
    const hasSelectedChildren = React.Children.toArray(children).some(i => i.props.selected);

    useEffect(() => {
        if (open) {
            listRef.current?.focus();
        }
    }, [open]);

    return (
        <MenuSurface
            open={open}
            className={classNames}
            {...props}
        >
            <List
                ref={listRef}
                role="menu"
                aria-hidden="true"
                aria-orientation="vertical"
                tabIndex={-1}
                {...listProps}
            >
                {React.Children.map(children, (child, index) =>
                    React.cloneElement(child, {
                        tabIndex: hasSelectedChildren ?
                            (child.props.selected ? 0 : -1) :
                            (index === 0) ? 0 : -1
                    })
                )}
            </List>
        </MenuSurface>
    );
}

Menu.displayName = 'MDCMenu';

Menu.propTypes = {
    ...MenuSurface.propTypes,
    listProps: PropTypes.object
};