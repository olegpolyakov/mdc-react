import { useState } from 'react';
import {
    Button,
    SideSheet
} from 'mdc-react';

import Page from '@/components/Page';
import Section from '@/components/Section';
import Code from '@/components/Code';

const id = 'side-sheet';
const title = 'Side Sheet';
const description = 'Side sheets are surfaces containing supplementary content that are anchored to the left or right edge of the screen.';
const links = {
    guide: 'https://material.io/components/sheets-side'
};

export default function SideSheetPage() {
    const [isDismissibleOpen, setDismissibleOpen] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <Page id={id} title={title} description={description} links={links}>
            <Section title="Basic side sheet">
                <Code>
                    <SideSheet title="Title">
                        Content
                    </SideSheet>
                </Code>
            </Section>

            <Section title="Dismissible side sheet">
                <Code
                    setup={
                        <Button
                            label="Toggle"
                            outlined
                            onClick={() => setDismissibleOpen(v => !v)}
                        />
                    }
                >
                    <SideSheet
                        title="Title"
                        closeIcon="close"
                        open={isDismissibleOpen}
                        dismissible
                        onClose={() => setDismissibleOpen(false)}
                    >
                        Content
                    </SideSheet>
                </Code>
            </Section>

            <Section title="Modal side sheet">
                <Code
                    setup={
                        <Button
                            label="Open"
                            outlined
                            onClick={() => setModalOpen(true)}
                        />
                    }
                >
                    <SideSheet
                        title="Title"
                        closeIcon="close"
                        open={isModalOpen}
                        modal
                        onClose={() => setModalOpen(false)}
                    >
                        Content
                    </SideSheet>
                </Code>
            </Section>
        </Page>
    );
}