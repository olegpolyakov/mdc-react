import React, { useRef, useState, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { useMounted } from '../lifecycle-hooks';
import TopAppBarRow from './TopAppBarRow';
import TopAppBarSection from './TopAppBarSection';
import TopAppBarTitle from './TopAppBarTitle';

export default React.forwardRef(TopAppBar);

function TopAppBar({
    title,
    navigationIcon,
    actionItems,
    fixed = false,
    sticky = false,
    dense = false,
    prominent = false,
    short = false,
    collapsed = false,
    fixedAdjustSibling = false,

    element = 'header',
    component: Element = element,
    className,
    children,
    ...props
}, ref) {
    const rootRef = useRef();
    const lastScrollPositionRef = useRef();
    const [scrolled, setScrolled] = useState(false);
    const [hidden, setHidden] = useState(false);

    useImperativeHandle(ref, () => rootRef);

    useMounted(() => {
        function handleScroll(event) {
            const scrollValue = window.pageYOffset;

            if (fixed) {
                setScrolled(scrollValue > 0);
            } else if (sticky) {
                const currentScrollPosition = Math.max(scrollValue, 0);
                const laslastScrollPosition = lastScrollPositionRef.current || 0;
                const diff = currentScrollPosition - laslastScrollPosition;
                const shoudlHide = diff > 0;

                lastScrollPositionRef.current = currentScrollPosition;

                setHidden(shoudlHide);
            }
        }

        window.addEventListener('scroll', handleScroll);

        if (fixedAdjustSibling) {
            rootRef.current.nextSibling.classList.add('mdc-top-app-bar--fixed-adjust');
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
            rootRef.current.nextSibling.classList.remove('mdc-top-app-bar--fixed-adjust');
        };
    });

    const classNames = classnames('mdc-top-app-bar', {
        'mdc-top-app-bar--fixed': fixed,
        'mdc-top-app-bar--sticky': sticky,
        'mdc-top-app-bar--dense': dense,
        'mdc-top-app-bar--prominent': prominent,
        'mdc-top-app-bar--short': short,
        'mdc-top-app-bar--short-collapsed': short && collapsed,
        'mdc-top-app-bar--fixed-scrolled': fixed && scrolled,
        'mdc-top-app-bar--sticky-hidden': sticky && hidden,
        'mdc-top-app-bar--sticky-shown': sticky && !hidden
    }, className);

    return (
        <Element
            ref={rootRef}
            className={classNames}
            {...props}
        >
            {children ||
                <TopAppBarRow>
                    {(navigationIcon || title) &&
                        <TopAppBarSection align="start">
                            {navigationIcon &&
                                React.cloneElement(navigationIcon, {
                                    className: 'mdc-top-app-bar__navigation-icon'
                                })
                            }

                            {title && (React.isValidElement(title) ?
                                React.cloneElement(title, {
                                    className: 'mdc-top-app-bar__title'
                                })
                                :
                                <TopAppBarTitle>{title}</TopAppBarTitle>
                            )}
                        </TopAppBarSection>
                    }

                    {actionItems &&
                        <TopAppBarSection align="end">
                            {React.Children.map(actionItems, item =>
                                React.cloneElement(item, {
                                    className: 'mdc-top-app-bar__action-item'
                                })
                            )}
                        </TopAppBarSection>
                    }
                </TopAppBarRow>
            }
        </Element>
    );
}

TopAppBar.displayName = 'MDCTopAppBar';

TopAppBar.propTypes = {
    title: PropTypes.node,
    navigationIcon: PropTypes.element,
    actionItems: PropTypes.arrayOf(PropTypes.element),
    fixed: PropTypes.bool,
    sticky: PropTypes.bool,
    dense: PropTypes.bool,
    prominent: PropTypes.bool,
    short: PropTypes.bool,
    collapsed: PropTypes.bool,
    fixedAdjustSibling: PropTypes.bool
};