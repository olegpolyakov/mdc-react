import { useState } from 'react';
import { Button, Drawer } from 'mdc-react';

import Page from '@/components/Page';
import Section from '@/components/Section';
import Code from '@/components/Code';

const id = 'drawer';
const title = 'Drawer';
const description = 'Navigation drawers provide access to destinations in your app.';
const links = {
    docs: 'https://github.com/material-components/material-components-web/tree/master/packages/mdc-drawer',
    guide: 'https://material.io/components/navigation-drawer'
};

export default function DrawerPage() {
    const [isDismissibleOpen, setDismissibleOpen] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <Page id={id} title={title} description={description} links={links}>
            <Section title="Permanent drawer">
                <Code>
                    <Drawer>
                        <Drawer.Header title="Title" />
                    </Drawer>
                </Code>
            </Section>

            <Section title="Dismissible drawer">
                <Code
                    setup={
                        <Button
                            label="Toggle"
                            onClick={() => setDismissibleOpen(v => !v)}
                        />
                    }
                >
                    <Drawer
                        open={isDismissibleOpen}
                        dismissible
                    >
                        <Drawer.Header title="Title" />
                    </Drawer>
                </Code>
            </Section>

            <Section title="Modal drawer">
                <Code
                    setup={
                        <Button
                            label="Toggle"
                            onClick={() => setModalOpen(v => !v)}
                        />
                    }
                >
                    <Drawer
                        open={isModalOpen}
                        onClose={() => setModalOpen(v => !v)}
                        modal
                    >
                        <Drawer.Header title="Title" />
                    </Drawer>
                </Code>
            </Section>
        </Page>
    );
}