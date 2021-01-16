import React from 'react';
import {HTMLElementMap, HTMLElementTagName, InferredComponent, RefForwardingProps} from '../types';

type TabProps = {
    value?: string | number;
    icon?: React.ReactElement;
    label?: React.ReactNode;
    active?: boolean;
    stacked?: boolean;
    minWidth?: boolean;
    fade?: boolean;
    underline?: boolean;
    // BoudaryRect??
    previousIndicatorClientRect?: ClientRect | any;
    // TODO: Specify arguments
    onClick?: () => void;
    className?: string;
};

// useImperativeHandle(ref, () => rootRef.current);

export default function <
    TName extends HTMLElementTagName = 'span',
    TRef extends HTMLElementMap<TName>,
    TComponent extends InferredComponent<TComponent>
>(props: TabProps & RefForwardingProps<TName, TRef, TComponent>): JSX.Element;
