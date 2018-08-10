import React from 'react';
import classnames from 'classnames';

const adapter = /** @type {!MDCTabScrollerAdapter} */ ({
    eventTargetMatchesSelector: (evtTarget, selector) => {
        const MATCHES = util.getMatchesProperty(HTMLElement.prototype);
        return evtTarget[MATCHES](selector);
    },
    addClass: (className) => this.root_.classList.add(className),
    removeClass: (className) => this.root_.classList.remove(className),
    addScrollAreaClass: (className) => this.area_.classList.add(className),

    setScrollAreaStyleProperty: (prop, value) => this.area_.style.setProperty(prop, value),
    setScrollContentStyleProperty: (prop, value) => this.content_.style.setProperty(prop, value),
    getScrollContentStyleValue: (propName) => window.getComputedStyle(this.content_).getPropertyValue(propName),
    setScrollAreaScrollLeft: (scrollX) => this.area_.scrollLeft = scrollX,
    getScrollAreaScrollLeft: () => this.area_.scrollLeft,
    getScrollContentOffsetWidth: () => this.content_.offsetWidth,
    getScrollAreaOffsetWidth: () => this.area_.offsetWidth,

    computeScrollAreaClientRect: () => this.area_.getBoundingClientRect(),
    computeScrollContentClientRect: () => this.content_.getBoundingClientRect(),
    computeHorizontalScrollbarHeight: () => util.computeHorizontalScrollbarHeight(document),
});

import './index.scss';

export default class TabScroller extends React.Component {
    static horizontalScrollbarHeight;

    static computeHorizontalScrollbarHeight(shouldCacheResult = true) {
        if (shouldCacheResult && typeof TabScroller.horizontalScrollbarHeight !== 'undefined') {
            return TabScroller.horizontalScrollbarHeight;
        }

        const el = document.createElement('div');
        
        el.classList.add('mdc-tab-scroller__test');
        document.body.appendChild(el);

        const horizontalScrollbarHeight = el.offsetHeight - el.clientHeight;
        document.body.removeChild(el);

        if (shouldCacheResult) {
            TabScroller.horizontalScrollbarHeight = horizontalScrollbarHeight;
        }

        return horizontalScrollbarHeight;
    }

    state = {
        isAnimating: false
    };

    componentDidMount() {
        const horizontalScrollbarHeight = TabScroller.computeHorizontalScrollbarHeight();

        this.area.style.setProperty('margin-bottom', -horizontalScrollbarHeight + 'px');
        this.area.classList.add('mdc-tab-scroller__scroll-area--scroll');
    }

    handleInteraction = () => { };

    handleTransitionEnd = () => {
        if (this.state.isAnimating) {
            this.setState({ isAnimating: false });
        }
    };

    render() {
        const { align, children } = this.props;
        const { isAnimating } = this.state;

        return (
            <div
                ref={element => this.root = element}
                className={classnames('mdc-tab-scroller', {
                    [`mdc-tab-scroller--align-${align}`]: align,
                    'mdc-tab-scroller--animating': isAnimating
                })}>
                <div
                    ref={element => this.area = element}
                    className="mdc-tab-scroller__scroll-area"
                    onWheel={this.handleInteraction}
                    onTouchStart={this.handleInteraction}
                    onPointerDown={this.handleInteraction}
                    onMouseDown={this.handleInteraction}
                    onKeyDown={this.handleInteraction}>
                    <div
                        ref={element => this.content = element}
                        className="mdc-tab-scroller__scroll-content"
                        onTransitionEnd={this.handleTransitionEnd}>
                        {children}
                    </div>
                </div>
            </div>
        );
    }
}