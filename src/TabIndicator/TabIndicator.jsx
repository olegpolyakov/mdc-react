import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { useUpdated } from '../lifecycle-hooks';

export default function TabIndicator({
    active = false,
    fade = false,
    underline = true,
    previousIndicatorClientRect,

    ...props
}) {
    const contentRef = React.useRef();
    const [isTransitioning, setTransitioning] = React.useState(false);
    const [hasTransitioned, setTransitioned] = React.useState(false);

    const rootClassNames = classnames('mdc-tab-indicator', {
        'mdc-tab-indicator--active': active,
        'mdc-tab-indicator--fade': fade,
        'mdc-tab-indicator--no-transition': !isTransitioning
    });

    const contentClassNames = classnames('mdc-tab-indicator__content', {
        'mdc-tab-indicator__content--underline': underline
    });

    function getContentStyle() {
        if (fade || !previousIndicatorClientRect || !contentRef.current) return;

        const contentClientRect = contentRef.current.getBoundingClientRect();

        if (!isTransitioning && !hasTransitioned) {
            const xPosition = previousIndicatorClientRect.left - contentClientRect.left;
            const widthDelta = previousIndicatorClientRect.width / contentClientRect.width;

            return { transform: `translateX(${xPosition}px) scaleX(${widthDelta})` };
        } else if (hasTransitioned) {
            return { transform: undefined };
        } else {
            return {};
        }
    }

    function handleTransitionEnd() {
        setTransitioning(false);
        setTransitioned(true);
    }

    useUpdated(() => {
        if (fade) return;

        if (active) {
            setTransitioning(true);
            setTransitioned(false);
        } else {
            setTransitioning(false);
            setTransitioned(false);
        }
    }, [active]);

    const contentStyle = getContentStyle();

    return (
        <span className={rootClassNames} {...props}>
            <span
                ref={contentRef}
                className={contentClassNames}
                style={contentStyle}
                onTransitionEnd={!fade ? handleTransitionEnd : undefined}
            />
        </span>
    );
}

TabIndicator.displayName = 'MDCTabIndicator';

TabIndicator.propTypes = {
    active: PropTypes.bool,
    fade: PropTypes.bool,
    underline: PropTypes.bool,
    icon: PropTypes.bool
};