import {HTMLElementMap, HTMLElementTagName, InferredComponent, RefForwardingProps} from '../types';
import React from 'react';

export type BannerProps = {
    text: React.ReactNode;
    icon: React.ReactElement;
    action: React.ReactElement;
    primaryAction?: React.ReactElement;
    secondaryAction: React.ReactElement;
    open?: boolean;
    fixed?: boolean;
    centered?: boolean;
    mobileStacked?: boolean;
    className?: string;
};

export default function <
    TName extends HTMLElementTagName = 'span',
    TRef extends HTMLElementMap<TName>,
    TComponent extends InferredComponent<TComponent>
>(props: BannerProps & RefForwardingProps<TName, TRef, TComponent>): JSX.Element;
