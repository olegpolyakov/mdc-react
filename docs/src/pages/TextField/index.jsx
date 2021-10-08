import { useState } from 'react';
import {
    TabBar, Tab,
    TextField
} from 'mdc-react';

import Page from '@/components/Page';
import Section from '@/components/Section';
import Code from '@/components/Code';

const id = 'text-field';
const title = 'Text Field';
const description = 'Text fields let users enter and edit text.';
const links = {
    docs: 'https://github.com/material-components/material-components-web/tree/master/packages/mdc-textfield',
    guide: 'https://material.io/components/text-fields'
};

export default function TypographyPage() {
    const [type, setType] = useState('filled');

    const isFilled = type === 'filled' || undefined;
    const isOutlined = type === 'outlined' || undefined;

    return (
        <Page id={id} title={title} description={description} links={links}>
            <TabBar value={type} onChange={setType} minWidth>
                <Tab
                    value="filled"
                    label="Filled"
                />

                <Tab
                    value="outlined"
                    label="Outlined"
                />
            </TabBar>

            <Section title="Basic text field">
                <Code>
                    <TextField
                        defaultValue=""
                        filled={isFilled}
                        outlined={isOutlined}
                    />
                </Code>
            </Section>

            <Section title="Text field with a label">
                <Code>
                    <TextField
                        defaultValue=""
                        label="Label"
                        filled={isFilled}
                        outlined={isOutlined}
                    />
                </Code>
            </Section>

            <Section title="Textarea">
                <Code>
                    <TextField
                        defaultValue=""
                        label="Label"
                        textarea
                        filled={isFilled}
                        outlined={isOutlined}
                    />
                </Code>
            </Section>

            <Section title="Autoresizable textarea">
                <Code>
                    <TextField
                        defaultValue=""
                        label="Label"
                        textarea
                        autoResize
                        filled={isFilled}
                        outlined={isOutlined}
                    />
                </Code>
            </Section>

            <Section title="Pre-filled text field">
                <Code>
                    <TextField
                        defaultValue="Some text"
                        label="Label"
                        filled={isFilled}
                        outlined={isOutlined}
                    />
                </Code>
            </Section>

            <Section title="With helper text">
                <Code>
                    <TextField
                        defaultValue=""
                        helperText="Helper text"
                        filled={isFilled}
                        outlined={isOutlined}
                    />
                </Code>
            </Section>

            <Section title="With persistent helper text">
                <Code>
                    <TextField
                        defaultValue=""
                        persistentHelperText="Helper text"
                        filled={isFilled}
                        outlined={isOutlined}
                    />
                </Code>
            </Section>

            <Section title="Text field with validation message">
                <Code>
                    <TextField
                        defaultValue=""
                        label="Label"
                        required
                        validationMessage="Validation message"
                        filled={isFilled}
                        outlined={isOutlined}
                    />
                </Code>
            </Section>

            <Section title="Text field with a character counter">
                <Code>
                    <TextField
                        defaultValue=""
                        label="Label"
                        maxLength={10}
                        filled={isFilled}
                        outlined={isOutlined}
                    />
                </Code>
            </Section>

            <Section title="Text field with an internal character counter">
                <Code>
                    <TextField
                        defaultValue=""
                        label="Label"
                        maxLength={120}
                        filled={isFilled}
                        outlined={isOutlined}
                        textarea
                        internalCounter
                    />
                </Code>
            </Section>

            <Section title="Text field with a prefix">
                <Code>
                    <TextField
                        defaultValue=""
                        label="Label"
                        prefix="@"
                        filled={isFilled}
                        outlined={isOutlined}
                    />
                </Code>
            </Section>

            <Section title="Text field with a suffix">
                <Code>
                    <TextField
                        defaultValue=""
                        label="Label"
                        suffix="$"
                        filled={isFilled}
                        outlined={isOutlined}
                    />
                </Code>
            </Section>

            <Section title="Text field with a leading icon">
                <Code>
                    <TextField
                        defaultValue=""
                        leadingIcon="star"
                        filled={isFilled}
                        outlined={isOutlined}
                    />
                </Code>
            </Section>

            <Section title="Text field with a trailing icon">
                <Code>
                    <TextField
                        defaultValue=""
                        trailingIcon="edit"
                        filled={isFilled}
                        outlined={isOutlined}
                    />
                </Code>
            </Section>
        </Page>
    );
}