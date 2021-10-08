import { useState } from 'react';
import { Checkbox } from 'mdc-react';

import Page from '@/components/Page';
import Section from '@/components/Section';
import Code from '@/components/Code';

const id = 'checkbox';
const title = 'Checkbox';
const description = 'Checkboxes allow the user to select multiple options from a set.';
const links = {
    docs: 'https://github.com/material-components/material-components-web/tree/master/packages/mdc-checkbox',
    guide: 'https://material.io/components/checkboxes'
};

export default function CheckboxPage() {
    const [isChecked, setChecked] = useState(false);

    return (
        <Page id={id} title={title} description={description} links={links}>
            <Section title="Controlled">
                <Code>
                    <Checkbox
                        checked={isChecked}
                        onChange={() => setChecked(v => !v)}
                    />
                </Code>
            </Section>

            <Section title="Uncontrolled">
                <Code>
                    <Checkbox
                        defaultChecked={false}
                    />
                </Code>
            </Section>

            <Section title="Indeterminate">
                <Code>
                    <Checkbox
                        indeterminate
                        defaultChecked={false}
                    />
                </Code>
            </Section>

            <Section title="Disabled">
                <Code>
                    <Checkbox disabled />
                </Code>
            </Section>
        </Page>
    );
}