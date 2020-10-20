import React, { useState, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { useEffect, useUpdated } from '../lifecycle-hooks';
import MenuSurface from '../MenuSurface/MenuSurface';
import List from '../List/List';

export default React.forwardRef(Menu);

function Menu({
    open,
    listProps = {},

    children,
    className,
    ...props
}, ref) {
    const listRef = useRef();
    const [focusedChildIndex, setFocusedChildIndex] = useState(0);

    useEffect(() => {
        if (open) {
            setFocusedChildIndex(
                React.Children.toArray(children).findIndex(i => i.props.selected)
            );
        }
    }, [open]);

    useUpdated(() => {
        if (open) {
            listRef.current.children[focusedChildIndex]?.focus();
        }
    }, [focusedChildIndex, open]);

    const handleKeyDown = useCallback(event => {
        event.preventDefault();

        if (event.key === 'ArrowDown') {
            setFocusedChildIndex(index => {
                const nextIndex = index + 1;

                return nextIndex < listRef.current.children.length ? nextIndex : index;
            });
        } else if (event.key === 'ArrowUp') {
            setFocusedChildIndex(index => {
                const nextIndex = index - 1;

                return nextIndex >= 0 ? nextIndex : index;
            });
        }
    }, []);

    const classNames = classnames('mdc-menu', className);

    return (
        <MenuSurface
            ref={ref}
            open={open}
            className={classNames}
            onKeyDown={handleKeyDown}
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
                        tabIndex: (index === focusedChildIndex) ? 0 : -1
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