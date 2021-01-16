import {HTMLElementMap, HTMLElementTagName, InferredComponent, RefForwardingProps} from '../types';

type TabBarProps = {
    value?: string | number;
    stacked?: boolean;
    minWidth?: boolean;
    fade?: boolean;
    underline?: boolean;
    align?: 'start' | 'center' | 'end';
    // TODO: Specify arguments
    onChange?: () => void;
    className?: string;
};

export default function <
    TName extends HTMLElementTagName = 'span',
    TRef extends HTMLElementMap<TName>,
    TComponent extends InferredComponent<TComponent>
>(props: TabBarProps & RefForwardingProps<TName, TRef, TComponent>): JSX.Element;
