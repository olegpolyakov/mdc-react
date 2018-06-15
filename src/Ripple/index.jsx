import React from 'react';
import classnames from 'classnames';
import { MDCRippleFoundation, util } from '@material/ripple/dist/mdc.ripple';

export default class Ripple extends React.Component {
    foundation = new MDCRippleFoundation({
        browserSupportsCssVars: () => util.supportsCssVariables(window),
        isUnbounded: () => instance.unbounded,
        isSurfaceActive: () => instance.root_[MATCHES](':active'),
        isSurfaceDisabled: () => instance.disabled,
        addClass: (className) => instance.root_.classList.add(className),
        removeClass: (className) => instance.root_.classList.remove(className),
        registerInteractionHandler: (evtType, handler) =>
          instance.root_.addEventListener(evtType, handler, util.applyPassive()),
        deregisterInteractionHandler: (evtType, handler) =>
          instance.root_.removeEventListener(evtType, handler, util.applyPassive()),
        registerResizeHandler: (handler) => window.addEventListener('resize', handler),
        deregisterResizeHandler: (handler) => window.removeEventListener('resize', handler),
        updateCssVariable: (varName, value) => instance.root_.style.setProperty(varName, value),
        computeBoundingRect: () => instance.root_.getBoundingClientRect(),
        getWindowPageOffset: () => ({x: window.pageXOffset, y: window.pageYOffset}),
    })
}