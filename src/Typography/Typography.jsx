import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const variants = {
    headline1: 'h1',
    headline2: 'h2',
    headline3: 'h3',
    headline4: 'h4',
    headline5: 'h5',
    headline6: 'h6',
    subtitle1: 'h5',
    subtitle2: 'h6',
    body1: 'p',
    body2: 'p',
    button: 'span',
    caption: 'span',
    overline: 'span'
};

export default function Typography({
    variant = 'body1',
    display,
    align,
    noMargin = false,
    noWrap = false,

    element = variants[variant],
    component: Element = element,
    className,
    ...props
}) {
    const classNames = classnames('mdc-typography', `mdc-typography--${variant}`, {
        [`mdc-typography--display-${display}`]: display,
        [`mdc-typography--align-${align}`]: align,
        'mdc-typography--no-margin': noMargin,
        'mdc-typography--overflow-ellipsis': noWrap
    }, className);

    return (
        <Element className={classNames} {...props} />
    );
}

Typography.displayName = 'MDCTypography';

Typography.propTypes = {
    variant: PropTypes.oneOf(Object.keys(variants)),
    display: PropTypes.oneOf(['block', 'inline', 'inline-block']),
    align: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
    noMargin: PropTypes.bool,
    noWrap: PropTypes.bool
};