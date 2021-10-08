import { forwardRef, useState, useEffect, useCallback, useRef, Children } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { useUpdated } from '../hooks';
import { Clone, create } from '../component';
import List from '../list';

import { cssClasses } from './constants';
import MenuItem from './MenuItem';
import MenuSurface from './MenuSurface';

const Menu = forwardRef(({
    open,
    items,
    listProps = {},

    children = items?.map(item => create(MenuItem, item)),
    className,
    ...props
}, ref) => {
    const listRef = useRef();

    const [focusedChildIndex, setFocusedChildIndex] = useState(0);

    useEffect(() => {
        if (open) {
            setFocusedChildIndex(
                Children.toArray(children).findIndex(i => i.props.selected)
            );
        }
    }, [open, children]);

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

    const classNames = classnames(cssClasses.ROOT, className);

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
                tabIndex={open ? 0 : -1}
                {...listProps}
            >
                {Children.map(children, (item, index) =>
                    <Clone
                        component={item}
                        tabIndex={(index === focusedChildIndex) ? 0 : -1}
                    />
                )}
            </List>
        </MenuSurface>
    );
});

Menu.displayName = 'MDCMenu';

Menu.propTypes = {
    ...MenuSurface.propTypes,
    listProps: PropTypes.object
};

export default Menu;