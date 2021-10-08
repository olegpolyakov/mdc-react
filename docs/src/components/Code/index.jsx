import { Children, isValidElement, useState } from 'react';
import { Card, Button } from 'mdc-react';

import './index.scss';

export default function Code({ setup, children }) {
    const [isCodeOpen, setCodeOpen] = useState(false);

    return (
        <section className="code">
            <Card outlined>
                <Card.Section primary>
                    {setup}

                    {children}
                </Card.Section>

                {isCodeOpen &&
                    <Card.Section secondary>
                        <pre>
                            <code>
                                {Children.toArray(children)
                                    .map(component => printComponent(component))
                                    .join('\n')
                                }
                            </code>
                        </pre>
                    </Card.Section>
                }

                <Card.Actions>
                    <Button label={isCodeOpen ? 'Hide code' : 'Show code'} onClick={() => setCodeOpen(v => !v)} />
                </Card.Actions>
            </Card>
        </section>
    );
}

function printComponent(component, depth = 0) {
    const displayName = component.type.displayName.replace('MDC', '');
    const children = component.props.children;
    const props = Object.entries(component.props).filter(([key, value]) => key !== 'children' && value !== undefined);
    const indent = '  '.repeat(depth);

    let result = indent + `<${displayName}`;

    if (!isEmpty(props)) {
        result += ` ${printProps(props, depth + 1)}`;
    }

    if (!children) {
        result += result.endsWith('\n') ? (indent + '/>') : ' />';
    } else if (isValidElement(children)) {
        result += `>\n${printComponent(children, depth + 1)}\n${indent}</${displayName}>`;
    } else if (Array.isArray(children)) {
        result += result.endsWith('\n') ? (indent + '>\n') : '>\n';

        result += children.map(child => printComponent(child, depth + 1)).join('\n');

        result += `\n${indent}</${displayName}>`;
    } else {
        result += `>${children}</${displayName}>`;
    }

    return result;
}

function printProps(props, depth) {
    let result = '';
    const indent = '  '.repeat(depth);

    if (props.length < 3) {
        result += props.map(printProp).join(' ');
    } else {
        result += `\n${indent}${props.map(printProp).join('\n' + indent)}\n`;
    }

    return result;
}

function printProp([key, value]) {
    if (value === true) {
        return key;
    } else if (typeof value === 'string') {
        return `${key}="${value}"`;
    } else {
        return `${key}={${printValue(value)}}`;
    }
}

function printValue(value) {
    if (typeof value === 'string') {
        return `'${value}'`;
    } else if (Array.isArray(value)) {
        return `[${value.map(v => printValue(v)).join(', ')}]`;
    } else if (isValidElement(value)) {
        return printComponent(value);
    } else if (typeof value === 'function') {
        return `${value.name || '[Function]'}`;
    } else {
        return value;
    }
}

function isEmpty(value) {
    if (!value) {
        return true;
    } else if (Array.isArray(value)) {
        return value.length === 0;
    } else if (typeof value === 'object') {
        return Object.keys(value).length === 0;
    }
}