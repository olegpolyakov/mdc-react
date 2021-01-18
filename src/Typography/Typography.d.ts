import { HTMLElementTagName, InferredComponent, PropsWithElementAndComponent } from '../types';

export type TypographyType = {
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

type Props = {
    type?: keyof TypographyType;
    display?: 'block' | 'inline' | 'inline-block';
    align?: 'left' | 'center' | 'right' | 'justify';
    noMargin?: boolean;
    noWrap?: boolean;
    className?: string;
};

export type TypographyProps<E = any, C = any> = PropsWithElementAndComponent<E, C> & Props;

export default function <
    TElement extends HTMLElementTagName = TypographyType['body1'],
    TComponent extends InferredComponent<TComponent>
>(props: TypographyProps<TElement, TComponent>): JSX.Element;
