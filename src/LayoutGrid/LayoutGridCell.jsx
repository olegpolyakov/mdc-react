import React from 'react';
import classnames from 'classnames';

export default function LayoutGridCell({ element = 'div', span, desktop, tablet, mobile, order, align, container, className, children, ...props }) {
    return React.createElement(element, {
        className:classnames('mdc-layout-grid__cell', {
            [`mdc-layout-grid__cell--span-${span}`]: span,
            [`mdc-layout-grid__cell--span-${desktop}-desktop`]: desktop,
            [`mdc-layout-grid__cell--span-${tablet}-tablet`]: tablet,
            [`mdc-layout-grid__cell--span-${mobile}-mobile`]: mobile,
            [`mdc-layout-grid__cell--order-${order}`]: order,
            [`mdc-layout-grid__cell--align-${align}`]: align
        }, className),
        ...props
    },
        container ?
            <div className="mdc-layout-grid__inner">
                {children}
            </div>
            :
            children   
    );
}