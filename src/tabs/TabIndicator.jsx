import { forwardRef, useContext, useImperativeHandle, useRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { useUpdatedSync } from '../hooks';

import { indicatorCssClasses as cssClasses } from './constants';
import TabContext from './context';

const TabIndicator = forwardRef(({
    icon,
    active = false,
    fade = false,
    underline = !icon,

    ...props
}, ref) => {
    const { previousTab } = useContext(TabContext);

    const rootRef = useRef();
    const contentRef = useRef();

    useImperativeHandle(ref, () => rootRef.current);

    useUpdatedSync(() => {
        if (fade || !active || !previousTab) return;

        const activeIndicator = rootRef.current;
        const previousIndicator = previousTab.querySelector('.mdc-tab-indicator');
        const previousIndicatorClientRect = previousIndicator.getBoundingClientRect();
        const activeIndicatorClientRect = activeIndicator.getBoundingClientRect();

        const xPosition = previousIndicatorClientRect.left - activeIndicatorClientRect.left;
        const widthDelta = previousIndicatorClientRect.width / activeIndicatorClientRect.width;

        rootRef.current.classList.add(cssClasses.NO_TRANSITION);
        contentRef.current.style.transform = `translateX(${xPosition}px) scaleX(${widthDelta})`;
        // Force repaint before updating classes and transform to ensure the transform properly takes effect
        contentRef.current.getBoundingClientRect();
        rootRef.current.classList.remove(cssClasses.NO_TRANSITION);
        contentRef.current.style.transform = '';
    }, [fade, active]);

    const rootClassNames = classnames(cssClasses.ROOT, {
        [cssClasses.ACTIVE]: active,
        [cssClasses.FADE]: fade
    });

    const contentClassNames = classnames(cssClasses.CONTENT, {
        [cssClasses.CONTENT_ICON]: icon,
        [cssClasses.CONTENT_UNDERLINE]: underline
    });

    return (
        <span ref={rootRef} className={rootClassNames} {...props}>
            <span
                ref={contentRef}
                className={contentClassNames}
            >
                {icon}
            </span>
        </span>
    );
});

TabIndicator.displayName = 'MDCTabIndicator';

TabIndicator.propTypes = {
    icon: PropTypes.node,
    active: PropTypes.bool,
    fade: PropTypes.bool,
    underline: PropTypes.bool
};

export default TabIndicator;