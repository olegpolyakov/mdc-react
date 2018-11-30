import React from 'react';

export default function DrawerHeader({ title, subtitle, children, ...props }) {
    return (
        <div className="mdc-drawer__header" {...props}>
            {title && <h3 className="mdc-drawer__title">{title}</h3>}
            {subtitle && <h6 className="mdc-drawer__subtitle">{subtitle}</h6>}
            {children}
        </div>
    );
};