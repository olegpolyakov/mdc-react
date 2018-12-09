import React from 'react';
import classnames from 'classnames';
import { CSSTransition } from 'react-transition-group';

import './index.scss';

export default class SideSheet extends React.Component {
    static displayName = 'MDCSideSheet';

    static defaultProps = {
        open: false,
        appear: false,
        dismissible: false,
        modal: false,

        onClose: Function.prototype
    };

    static cssClasses = {
        ROOT: 'mdc-side-sheet',
        DISMISSIBLE: 'mdc-side-sheet--dismissible',
        MODAL: 'mdc-side-sheet--modal',
        OPEN: 'mdc-side-sheet--open',
        ANIMATE: 'mdc-side-sheet--animate',
        OPENING: 'mdc-side-sheet--opening',
        CLOSING: 'mdc-side-sheet--closing',
        CONTENT: 'mdc-side-sheet__content',
        APP_CONTENT: 'mdc-side-sheet-app-content',
        SCRIM: 'mdc-side-sheet-scrim'
    };

    componentDidMount() {
        if (this.props.dismissible) {
            if (this.props.appContentSelector) {
                document.querySelector(this.props.appContentSelector).classList.add(SideSheet.cssClasses.APP_CONTENT);
            }
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.modal) {
            if (this.props.open === true && prevProps.open === false) {
                document.addEventListener('keydown', this.handleDocumentKeyDown);
            } else if (this.props.open === false && prevProps.open === true) {
                document.removeEventListener('keydown', this.handleDocumentKeyDown);
            }
        }
    }

    handleDocumentKeyDown = event => {
        if (event.key && event.key === 'Escape' || event.keyCode === 27) {
            this.props.onClose();
        }
    };

    handleScrimClick = event => this.props.onClose();

    render() {
        const {
            open,
            appear,
            dismissible,
            modal,
            onClose,

            element = 'aside',
            component: Element = element,
            className,
            children,
            ...props
        } = this.props;

        const classNames = classnames(SideSheet.cssClasses.ROOT, {
            [SideSheet.cssClasses.DISMISSIBLE]: dismissible,
            [SideSheet.cssClasses.MODAL]: modal
        }, className);

        return (
            <CSSTransition
                in={open}
                appear={appear}
                timeout={{
                    enter: 250,
                    exit: 200
                }}
                classNames={{
                    appear: `${SideSheet.cssClasses.OPEN}`,
                    enter: `${SideSheet.cssClasses.OPEN} ${SideSheet.cssClasses.ANIMATE}`,
                    enterActive: `${SideSheet.cssClasses.OPEN} ${SideSheet.cssClasses.OPENING}`,
                    enterDone: SideSheet.cssClasses.OPEN,
                    exit: `${SideSheet.cssClasses.OPEN} ${SideSheet.cssClasses.CLOSING}`,
                    exitActive: `${SideSheet.cssClasses.CLOSING}`
                }}
            >
                <React.Fragment>
                    <Element
                        className={classNames}
                        ref={element => this.rootElement = element}
                        {...props}
                    >
                        <div className="mdc-side-sheet__content">
                            {children}
                        </div>
                    </Element>

                    {modal &&
                        <div
                            className="mdc-side-sheet-scrim"
                            ref={element => this.scrimElement = element}
                            onClick={this.handleScrimClick}
                        />
                    }
                </React.Fragment>
            </CSSTransition>
        );
    }
}