import {HTMLElementMap, HTMLElementTagName, InferredComponent, RefForwardingProps} from '../types';

type TypographyType = {
    headline1: 'h1';
    headline2: 'h2';
    headline3: 'h3';
    headline4: 'h4';
    headline5: 'h5';
    headline6: 'h6';
    subtitle1: 'h5';
    subtitle2: 'h6';
    body1: 'p';
    body2: 'p';
    button: 'span';
    caption: 'span';
    overline: 'span';
};

type TypographyProps = {
    type?: keyof TypographyType;
    display?: 'block' | 'inline' | 'inline-block';
    align?: 'left' | 'center' | 'right' | 'justify';
    noMargin?: boolean;
    noWrap?: boolean;
    className?: string;
};

export default function <
    TName extends HTMLElementTagName = 'p',
    TRef extends HTMLElementMap<TName>,
    TComponent extends InferredComponent<TComponent>
>(props: TypographyProps & RefForwardingProps<TName, TRef, TComponent>): JSX.Element;
