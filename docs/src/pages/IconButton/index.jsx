import { useState } from 'react';
import {
    IconButton
} from 'mdc-react';

import Page from '@/components/Page';
import Section from '@/components/Section';
import Code from '@/components/Code';

const id = 'icon-button';
const title = 'Icon Button';
const description = 'Icon buttons allow users to take actions, and make choices, with a single tap.';
const links = {
    docs: 'https://github.com/material-components/material-components-web/tree/master/packages/mdc-icon-button',
    guide: 'https://material.io/components/buttons'
};

export default function IconButtonPage() {
    const [isOn, setOn] = useState(true);

    return (
        <Page id={id} title={title} description={description} links={links}>
            <Section title="Basic icon button">
                <Code>
                    <IconButton
                        icon="star"
                    />
                </Code>
            </Section>

            <Section title="Toggling icon button">
                <Code>
                    <IconButton
                        icon={isOn ? 'favorite' : 'favorite_border'}
                        onClick={() => setOn(v => !v)}
                    />
                </Code>
            </Section>
        </Page>
    );
}