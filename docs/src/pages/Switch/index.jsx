import { useState } from 'react';
import {
    Switch
} from 'mdc-react';

import Page from '@/components/Page';
import Section from '@/components/Section';
import Code from '@/components/Code';

const id = 'switch';
const title = 'Switch';
const description = 'Switches toggle the state of a single item on or off.';
const links = {
    docs: 'https://github.com/material-components/material-components-web/tree/master/packages/mdc-switch',
    guide: 'https://material.io/components/switches'
};

export default function SwitchPage() {
    const [isSelected, setSelected] = useState(false);

    return (
        <Page id={id} title={title} description={description} links={links}>
            <Section title="Basic switch">
                <Code>
                    <Switch
                        selected={isSelected}
                        onChange={() => setSelected(v => !v)}
                    />
                </Code>
            </Section>

            <Section title="Disabled switch">
                <Code>
                    <Switch disabled />
                </Code>
            </Section>
        </Page>
    );
}