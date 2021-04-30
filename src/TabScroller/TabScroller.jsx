import React, { useRef } from 'react';
import classnames from 'classnames';

import { useUpdated } from '../lifecycle-hooks';

export default React.forwardRef(TabScroller);

function TabScroller({
    align,
    activeTab,

    children,
    ...props
}, ref) {
    const scrollAreaRef = useRef();

    useUpdated(() => {
        if (!activeTab) return;

        const scrollAreaWidth = scrollAreaRef.current.offsetWidth;
        const tabWidth = activeTab.offsetWidth;
        const tabHalfWidth = tabWidth * 0.5;
        const offsetLeft = activeTab.offsetLeft - scrollAreaRef.current.scrollLeft;
        const offsetLeftDelta = activeTab.offsetLeft - scrollAreaRef.current.scrollLeft;
        const offsetRight = activeTab.offsetLeft + tabWidth - scrollAreaRef.current.scrollLeft;
        const offsetRightDelta = scrollAreaWidth - offsetRight;

        if (offsetRight > scrollAreaWidth || offsetRightDelta < tabHalfWidth) {
            scrollAreaRef.current.scrollBy({
                left: offsetRight > scrollAreaWidth ? Math.abs(offsetRightDelta) + tabHalfWidth : tabHalfWidth - offsetRightDelta,
                behavior: 'smooth'
            });
        } else if (offsetLeft < 0 || offsetLeftDelta < tabHalfWidth) {
            scrollAreaRef.current.scrollBy({
                left: offsetLeft < 0 ? offsetLeftDelta - tabHalfWidth : -(tabHalfWidth - offsetLeftDelta),
                behavior: 'smooth'
            });
        }
    }, [activeTab]);

    const classNames = classnames('mdc-tab-scroller', {
        [`mdc-tab-scroller--align-${align}`]: align
    });

    return (
        <div ref={ref} className={classNames} {...props}>
            <div ref={scrollAreaRef} className="mdc-tab-scroller__scroll-area">
                {children}
            </div>
        </div>
    );
}

TabScroller.displayName = 'MDCTabScroller';