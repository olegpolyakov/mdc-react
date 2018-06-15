import React, { Component, PropTypes } from 'react';
import classnames from 'classnames/dedupe';
import { MDCRadioFoundation } from '@material/radio/dist/mdc.radio';

class Radio extends Component {
    static propTypes = {
        id: PropTypes.string,
        name: PropTypes.string,
        className: PropTypes.string,
        checked: PropTypes.bool,
        disabled: PropTypes.bool,
        lable: PropTypes.string,
        onChange: PropTypes.func
    }

    static defaultProps = {
        onChange: () => { }
    }

    state = {
        classes: ''
    }

    foundation = new MDCRadioFoundation({
        addClass: className => this.setState(prevState => ({
            classes: classnames(prevState.classes, className)
        })),

        removeClass: className => this.setState(prevState => ({
            classes: classnames(prevState.classes, {
                [className]: false
            })
        })),

        getNativeControl: () => this.refs.radio
    })

    componentWillMount() {
        const { checked, disabled } = this.props;

        if (checked) {
            this.foundation.setChecked(checked);
        }

        if (disabled) {
            this.foundation.setDisabled(disabled);
        }
    }

    componentDidMount() {
        this.foundation.init();
    }

    componentWillUnmount() {
        this.foundation.destroy()
    }

    componentWillReceiveProps({ checked, disabled }) {
        if (checked) {
            this.foundation.setChecked(checked);
        }

        if (disabled) {
            this.foundation.setDisabled(disabled);
        }
    }

    render() {
        const {
            id,
            name,
            className,
            checked,
            disabled,
            onChange,
            ...otherProps
        } = this.props;

        const classNames = classnames('mdc-radio', this.state.classes, {
            'mdc-radio--disabled': disabled
        }, className);

        return (
            <div className={classNames}>
                <input ref="radio"
                    type="radio"
                    id={id}
                    name={name}
                    className="mdc-radio__native-control"
                    checked={checked}
                    disabled={disabled}
                    onChange={event => onChange(event.target.checked, event)}
                    {...otherProps} />
                <div className="mdc-radio__background">
                    <div className="mdc-radio__outer-circle" />
                    <div className="mdc-radio__inner-circle" />
                </div>
            </div>
        )
    }
}

export default Radio;