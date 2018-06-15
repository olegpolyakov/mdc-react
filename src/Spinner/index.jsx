import React from 'react';
import classnames from 'classnames';

export default function CircularProgress({ element = 'div', active = true, singleColor }) {
    return React.createElement(element, {
        className: classnames('mdc-spinner', {
            'mdc-spinner--active': active,
            'mdc-spinner--single-color': singleColor
        })
    },
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
    </div>,

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
    </div>,

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
    </div>,

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
    );
}