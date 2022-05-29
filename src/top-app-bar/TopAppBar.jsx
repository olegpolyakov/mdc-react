import { forwardRef, useRef, useState, useEffect, useImperativeHandle, Children } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { Clone } from '../component';
import IconButton from '../icon-button';

import { cssClasses, Align } from './constants';
import TopAppBarRow from './TopAppBarRow';
import TopAppBarSection from './TopAppBarSection';

const TopAppBar = forwardRef(({
    title,
    navigationIcon,
    actionItems,
    fixed = false,
    sticky = false,
    dense = false,
    prominent = false,
    short = false,
    collapsed = false,
    raised = false,
    onNavigationIconClick = Function.prototype,

    element = 'header',
    component: Element = element,
    className,
    children,
    ...props
}, ref) => {
    const rootRef = useRef();
    const [scrolled, setScrolled] = useState(false);
    const [hidden, setHidden] = useState(false);

    useImperativeHandle(ref, () => rootRef.current);

    useEffect(() => {
        let lastScrollPosition = 0;

        function handleScroll() {
            const scrollValue = window.pageYOffset;

            if (fixed) {
                setScrolled(scrollValue > 0);
            } else if (sticky) {
                const currentScrollPosition = Math.max(scrollValue, 0);
                const diff = currentScrollPosition - lastScrollPosition;
                const shouldHide = diff > 0;

                lastScrollPosition = currentScrollPosition;

                setHidden(shouldHide);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [fixed, sticky]);

    const classNames = classnames(cssClasses.ROOT, {
        [cssClasses.FIXED]: fixed,
        [cssClasses.STICKY]: sticky,
        [cssClasses.DENSE]: dense,
        [cssClasses.PROMINENT]: prominent,
        [cssClasses.SHORT]: short,
        [cssClasses.SHORT_COLLAPSED]: short && collapsed,
        [cssClasses.FIXED_SCROLLED]: fixed && scrolled,
        [cssClasses.STICKY_HIDDEN]: sticky && hidden,
        [cssClasses.STICKY_SHOWN]: sticky && !hidden,
        [cssClasses.RAISED]: raised
    }, className);

    return (
        <Element
            ref={rootRef}
            className={classNames}
            {...props}
        >
            {children ||
                <TopAppBarRow>
                    {(title || navigationIcon) &&
                        <TopAppBarSection align={Align.START}>
                            {navigationIcon &&
                                <Clone
                                    component={navigationIcon}
                                    fallback={IconButton}
                                    className={cssClasses.NAVIGATION_ICON}
                                    onClick={onNavigationIconClick}
                                />
                            }

                            {title &&
                                <Clone
                                    component={title}
                                    fallback="span"
                                    className={cssClasses.TITLE}
                                />
                            }
                        </TopAppBarSection>
                    }

                    {actionItems &&
                        <TopAppBarSection align={Align.END}>
                            {Children.map(actionItems, item =>
                                <Clone
                                    component={item}
                                    className={cssClasses.ACTION_ITEM}
                                />
                            )}
                        </TopAppBarSection>
                    }
                </TopAppBarRow>
            }
        </Element>
    );
});

TopAppBar.displayName = 'MDCTopAppBar';

TopAppBar.propTypes = {
    title: PropTypes.node,
    navigationIcon: PropTypes.node,
    actionItems: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element),
    ]),
    fixed: PropTypes.bool,
    sticky: PropTypes.bool,
    dense: PropTypes.bool,
    prominent: PropTypes.bool,
    short: PropTypes.bool,
    collapsed: PropTypes.bool,
    raised: PropTypes.bool
};

export default TopAppBar;