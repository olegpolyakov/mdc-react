import React from 'react';
import classnames from 'classnames';

Spinner.displayName = 'MDCSpinner';

import './index.scss';

export default function Spinner({
    active = true,
    singleColor = true,

    className,
    ...props
}) {
    const classNames = classnames('mdc-spinner', {
        'mdc-spinner--active': active,
        'mdc-spinner--single-color': singleColor
    }, className);

    return (
        <div className={classNames} {...props}>
            <div className="mdc-spinner__layer mdc-spinner__layer-1">
                <div className="mdc-spinner__circle-clipper mdc-spinner__left">
                    <div className="mdc-spinner__circle"></div>
                </div>
                <div className="mdc-spinner__gap-patch">
                    <div className="mdc-spinner__circle"></div>
                </div>
                <div className="mdc-spinner__circle-clipper mdc-spinner__right">
                    <div className="mdc-spinner__circle"></div>
                </div>
            </div>

            <div className="mdc-spinner__layer mdc-spinner__layer-2">
                <div className="mdc-spinner__circle-clipper mdc-spinner__left">
                    <div className="mdc-spinner__circle"></div>
                </div>
                <div className="mdc-spinner__gap-patch">
                    <div className="mdc-spinner__circle"></div>
                </div>
                <div className="mdc-spinner__circle-clipper mdc-spinner__right">
                    <div className="mdc-spinner__circle"></div>
                </div>
            </div>

            <div className="mdc-spinner__layer mdc-spinner__layer-3">
                <div className="mdc-spinner__circle-clipper mdc-spinner__left">
                    <div className="mdc-spinner__circle"></div>
                </div>
                <div className="mdc-spinner__gap-patch">
                    <div className="mdc-spinner__circle"></div>
                </div>
                <div className="mdc-spinner__circle-clipper mdc-spinner__right">
                    <div className="mdc-spinner__circle"></div>
                </div>
            </div>

            <div className="mdc-spinner__layer mdc-spinner__layer-4">
                <div className="mdc-spinner__circle-clipper mdc-spinner__left">
                    <div className="mdc-spinner__circle"></div>
                </div>
                <div className="mdc-spinner__gap-patch">
                    <div className="mdc-spinner__circle"></div>
                </div>
                <div className="mdc-spinner__circle-clipper mdc-spinner__right">
                    <div className="mdc-spinner__circle"></div>
                </div>
            </div>
        </div>
    );
}