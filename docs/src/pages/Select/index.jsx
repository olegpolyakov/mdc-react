import { useState } from 'react';
import {
    Select
} from 'mdc-react';

import Page from '@/components/Page';
import Section from '@/components/Section';
import Code from '@/components/Code';

const id = 'select';
const title = 'Select';
const description = 'Segmented buttons allow users to toggle the selected states of grouped buttons.';
const links = {
    docs: 'https://github.com/material-components/material-components-web/tree/master/packages/mdc-select'
};

export default function SelectPage() {
    const [filled, setFilled] = useState();
    const [outlined, setOutlined] = useState();
    const [preselected, setPreselected] = useState('foo');
    const [multiple, setMultiple] = useState([]);
    const [icon, setIcon] = useState();

    return (
        <Page id={id} title={title} description={description} links={links}>
            <Section title="Filled select">
                <Code>
                    <Select
                        label="Choose"
                        value={filled}
                        filled
                        onChange={(event, value) => setFilled(value)}
                    >
                        <Select.Option value="foo" text="Foo" />
                        <Select.Option value="bar" text="Bar" />
                        <Select.Option value="baz" text="Baz" />
                    </Select>
                </Code>
            </Section>

            <Section title="Outlined select">
                <Code>
                    <Select
                        label="Choose"
                        value={outlined}
                        outlined
                        onChange={(event, value) => setOutlined(value)}
                    >
                        <Select.Option value="foo" text="Foo" />
                        <Select.Option value="bar" text="Bar" />
                        <Select.Option value="baz" text="Baz" />
                    </Select>
                </Code>
            </Section>

            <Section title="Preselected select">
                <Code>
                    <Select
                        label="Choose"
                        value={preselected}
                        filled
                        onChange={(event, value) => setPreselected(value)}
                    >
                        <Select.Option value="foo" text="Foo" />
                        <Select.Option value="bar" text="Bar" />
                        <Select.Option value="baz" text="Baz" />
                    </Select>
                </Code>
            </Section>

            <Section title="Multiple select">
                <Code>
                    <Select
                        label="Choose"
                        value={multiple}
                        filled
                        onChange={(event, value) => setMultiple(value)}
                    >
                        <Select.Option value="foo" text="Foo" />
                        <Select.Option value="bar" text="Bar" />
                        <Select.Option value="baz" text="Baz" />
                    </Select>
                </Code>
            </Section>

            <Section title="Select with an icon">
                <Code>
                    <Select
                        label="Choose"
                        value={icon}
                        icon="star"
                        filled
                        onChange={(event, value) => setIcon(value)}
                    >
                        <Select.Option value="foo" text="Foo" />
                        <Select.Option value="bar" text="Bar" />
                        <Select.Option value="baz" text="Baz" />
                    </Select>
                </Code>
            </Section>
        </Page>
    );
}