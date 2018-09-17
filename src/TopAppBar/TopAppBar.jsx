import React from 'react';
import classnames from 'classnames';

import TopAppBarRow from './TopAppBarRow';
import TopAppBarSection from './TopAppBarSection';

export default class TopAppBar extends React.Component {
    static defaultProps = {
        fixed: false,
        sticky: false,
        dense: false,
        prominent: false,
        short: false,
        collapsed: false,
        fixedAdjustSibling: false,

        element: 'header'
    };

    state = {
        hidden: undefined,
        scrolled: false
    };

    root = React.createRef();

    lastScrollPosition = this.viewportScrollY;

    get viewportScrollY() {
        return window.pageYOffset;
    }

    get height() {
        return this.root.current ? this.root.current.clientHeight : 0;
    }

    setScrolled() {
        const currentScroll = this.viewportScrollY;

        if (currentScroll <= 0) {
            if (this.state.scrolled) {
                this.setState({ scrolled: false });
            }
        } else {
            if (!this.state.scrolled) {
                this.setState({ scrolled: true });
            }
        }
    }

    componentDidMount() {
        if (this.props.fixed) {
            window.addEventListener('scroll', this.handleFixedScroll);
            this.setScrolled();
        } else if (this.props.sticky) {
            window.addEventListener('scroll', this.handleScroll);
        }

        if (this.props.fixedAdjustSibling) {
            this.root.current.nextSibling.classList.add(classnames('mdc-top-app-bar--fixed-adjust'));
        }
        
    }

    componentWillUnmount() {
        if (this.props.fixed) {
            window.removeEventListener('scroll', this.handleFixedScroll);
        } else if (this.props.sticky) {
            window.removeEventListener('scroll', this.handleScroll);
        }

        if (this.props.fixedAdjustSibling) {
            this.root.current.nextSibling.classList.remove(classnames('mdc-top-app-bar--fixed-adjust'));
        }
    }

    handleScroll = event => {
        const currentScrollPosition = Math.max(this.viewportScrollY, 0);
        const diff = currentScrollPosition - this.lastScrollPosition;

        this.lastScrollPosition = currentScrollPosition;
        
        if (diff > 0) {
            this.setState({ hidden: true });
        } else if (diff < 0) {
            this.setState({ hidden: false });
        }
    };

    handleFixedScroll = event => this.setScrolled();

    handleResize = event => {};

    render() {
        const {
            title,
            navigationIcon,
            fixed,
            dense,
            prominent,
            short,
            collapsed,
            actionItems,
            fixedAdjustSibling,

            element,
            component = element,
            className,
            children,
            ...props
        } = this.props;

        const { scrolled, hidden } = this.state;

        return React.createElement(component, {
            ref: this.root,
            
            className: classnames('mdc-top-app-bar', {
                'mdc-top-app-bar--fixed': fixed,
                'mdc-top-app-bar--sticky': sticky,
                'mdc-top-app-bar--dense': dense,
                'mdc-top-app-bar--prominent': prominent,
                'mdc-top-app-bar--short': short,
                'mdc-top-app-bar--short-collapsed': short && collapsed,
                'mdc-top-app-bar--fixed-scrolled': fixed && scrolled,
                'mdc-top-app-bar--hidden': hidden === true,
                'mdc-top-app-bar--shown': hidden === false
            }, className),
            
            ...props
        },
            <TopAppBarRow>
                <TopAppBarSection align="start">
                    {navigationIcon && React.cloneElement(navigationIcon, { className: 'mdc-top-app-bar__navigation-icon' })}
                    {title && React.createElement('span', { className: 'mdc-top-app-bar__title' }, title)}
                </TopAppBarSection>

                {(actionItems && actionItems.length) &&
                    <TopAppBarSection align="end">
                        {actionItems.map((item, key) =>
                            React.cloneElement(item, { key, className: 'mdc-top-app-bar__action-item' })
                        )}
                    </TopAppBarSection>
                }
            </TopAppBarRow>,

            children
        );
    }
}