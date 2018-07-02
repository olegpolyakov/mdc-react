import React from 'react';
import classnames from 'classnames';

export default function CircularProgress({ progress, className, ...props }) {
    const angle = progress * 289.067 / 100;
    const diff = 289.067 - angle;

    return (
        <svg className={classnames('mdc-circular-progress', className)} width="100%" height="100%" viewBox="0 0 100 100">
            <path
                className="mdc-circular-progress__background"
                fill="none"
                strokeWidth="8"
                d="M50,4 a46,46 0 0,1 0,92 a46,46 0 0,1 0,-92"
            />

            <path
                className="mdc-circular-progress__foreground"
                fill="none"
                strokeWidth="8"
                d="M50,4 a46,46 0 0,1 0,92 a46,46 0 0,1 0,-92"
                style={{
                    strokeDasharray: "289.067, 289.067",
                    strokeDashoffset: diff
                }}
            />
        </svg>
    );
}