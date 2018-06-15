import React, { Component } from 'react';
import { MDCRipple } from "@material/ripple/dist/mdc.ripple";

export default class MaterialComponent extends Component {
    constructor(props) {
        super(props);

        this._mdcProps = [];
        this.componentName = '';
        this.className = '';
    }

    attachRipple() {
        if (this.props.riple && this.control) {
            MDCRipple.attachTo(this.control);
        }
    }

    componentDidMount() {
        this.foundation.init();
    }

    componentWillUnmount() {
        this.foundation.destroy();
    }
}