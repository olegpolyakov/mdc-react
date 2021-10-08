import {
    Checkbox,
    FormField
} from 'mdc-react';

import Page from '@/components/Page';
import Section from '@/components/Section';
import Code from '@/components/Code';

import './index.scss';

const id = 'form-field';
const title = 'Form Field';
const description = 'Form Field aligns a form field (for example, a checkbox) with its label and makes it RTL-aware.';
const links = {
    docs: 'https://github.com/material-components/material-components-web/tree/master/packages/mdc-form-field'
};

export default function FormFieldPage() {
    return (
        <Page id={id} title={title} description={description} links={links}>
            <Section title="Basic form field">
                <Code>
                    <FormField label="Label">
                        <Checkbox />
                    </FormField>
                </Code>
            </Section>

            <Section title="Form field that goes before the element">
                <Code>
                    <FormField label="Label" alignEnd>
                        <Checkbox />
                    </FormField>
                </Code>
            </Section>

            <Section title="No wrap form field">
                <Code>
                    <FormField label="Label" nowrap>
                        <Checkbox />
                    </FormField>
                </Code>
            </Section>

            <Section title="Form field with space between">
                <Code>
                    <FormField label="Label" spaceBetween>
                        <Checkbox />
                    </FormField>
                </Code>
            </Section>
        </Page>
    );
}