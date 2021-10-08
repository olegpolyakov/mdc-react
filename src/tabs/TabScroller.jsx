import { forwardRef, useRef } from 'react';
import classnames from 'classnames';

import { useMounted, useUpdated } from '../hooks';

import { scrollerCssClasses as cssClasses } from './constants';

const TabScroller = forwardRef(({
    align,
    activeTab,

    children,
    ...props
}, ref) => {
    const scrollAreaRef = useRef();
    const scrollContentRef = useRef();

    useMounted(() => {
        const scrollAreaWidth = scrollAreaRef.current.offsetWidth;
        const scrollContentWidth = scrollContentRef.current.offsetWidth;

        if (scrollContentWidth > scrollAreaWidth) {
            scrollAreaRef.current.classList.add(cssClasses.SCROLL_AREA_SCROLL);
        }
    });

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

    const classNames = classnames(cssClasses.ROOT, {
        [`${cssClasses.ALIGN}-${align}`]: align
    });

    return (
        <div ref={ref} className={classNames} {...props}>
            <div ref={scrollAreaRef} className={cssClasses.SCROLL_AREA}>
                <div ref={scrollContentRef} className={cssClasses.SCROLL_CONTENT}>
                    {children}
                </div>
            </div>
        </div>
    );
});

TabScroller.displayName = 'MDCTabScroller';

export default TabScroller;