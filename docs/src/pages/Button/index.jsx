import { useState } from 'react';
import {
    Button,
    Layout,
    SegmentedButton
} from 'mdc-react';

import Page from '@/components/Page';
import Section from '@/components/Section';
import Code from '@/components/Code';

const id = 'button';
const title = 'Button';
const description = 'Buttons communicate an action a user can take. They are typically placed throughout your UI, in places like dialogs, forms, cards, and toolbars.';
const links = {
    docs: 'https://github.com/material-components/material-components-web/tree/master/packages/mdc-button',
    guide: 'https://material.io/components/buttons'
};

export default function ButtonPage() {
    const [type, setType] = useState('plain');
    const [leadingIcon, setLeadingIcon] = useState(false);
    const [trailingIcon, setTrailingIcon] = useState(false);

    const outlined = type === 'outlined' || undefined;
    const unelevated = type === 'unelevated' || undefined;
    const raised = type === 'raised' || undefined;

    return (
        <Page id={id} title={title} description={description} links={links}>
            <Section title="Demo">
                <Layout row>
                    <fieldset>
                        <legend>Type</legend>

                        <SegmentedButton
                            segments={[
                                { value: 'plain', label: 'Plain' },
                                { value: 'outlined', label: 'Outlined' },
                                { value: 'unelevated', label: 'Unelevated' },
                                { value: 'raised', label: 'Raised' }
                            ]}
                            value={type}
                            onChange={setType}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>Icons</legend>

                        <SegmentedButton>
                            <SegmentedButton.Segment
                                label="Leading Icon"
                                selected={leadingIcon}
                                onClick={() => setLeadingIcon(v => !v)}
                            />

                            <SegmentedButton.Segment
                                label="Trailing Icon"
                                selected={trailingIcon}
                                onClick={() => setTrailingIcon(v => !v)}
                            />
                        </SegmentedButton>
                    </fieldset>
                </Layout>

                <Code>
                    <Button
                        leadingIcon={leadingIcon ? 'save' : undefined}
                        trailingIcon={trailingIcon ? 'close' : undefined}
                        outlined={outlined}
                        unelevated={unelevated}
                        raised={raised}
                    >Button</Button>
                </Code>
            </Section>
        </Page>
    );
}