import React, { useRef, useState, useCallback } from 'react';
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
    const contentRef = useRef();
    const [isTransitioning, setTransitioning] = useState(false);
    const [isTransitioned, setTransitioned] = useState(false);

    useUpdated(() => {
        if (fade) return;

        if (active) {
            setTransitioning(true);
            setTransitioned(false);
        } else {
            setTransitioning(false);
            setTransitioned(false);
        }
    }, [active, fade]);

    const handleTransitionEnd = useCallback(() => {
        if (fade) return;

        setTransitioning(false);
        setTransitioned(true);
    }, [fade]);

    const rootClassNames = classnames('mdc-tab-indicator', {
        'mdc-tab-indicator--active': active,
        'mdc-tab-indicator--fade': fade,
        'mdc-tab-indicator--no-transition': !isTransitioning
    });

    const contentClassNames = classnames('mdc-tab-indicator__content', {
        'mdc-tab-indicator__content--underline': underline
    });

    const contentStyle = (active && !fade) ?
        getContentStyle(contentRef.current?.getBoundingClientRect(), previousIndicatorClientRect, isTransitioning, isTransitioned) :
        undefined;

    return (
        <span className={rootClassNames} {...props}>
            <span
                ref={contentRef}
                className={contentClassNames}
                style={contentStyle}
                onTransitionEnd={handleTransitionEnd}
            />
        </span>
    );
}

TabIndicator.displayName = 'MDCTabIndicator';

TabIndicator.propTypes = {
    active: PropTypes.bool,
    fade: PropTypes.bool,
    underline: PropTypes.bool,
    icon: PropTypes.bool,
    previousIndicatorClientRect: PropTypes.object
};

function getContentStyle(contentClientRect, previousIndicatorClientRect, isTransitioning, hasTransitioned) {
    if (!contentClientRect || !previousIndicatorClientRect) return;

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