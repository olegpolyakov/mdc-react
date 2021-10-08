import { useState } from 'react';
import {
    Button,
    Layout,
    SegmentedButton,
    Snackbar,
    TextField
} from 'mdc-react';

import Page from '@/components/Page';
import Section from '@/components/Section';
import Code from '@/components/Code';

const id = 'snackbar';
const title = 'Snackbar';
const description = 'Snackbars provide brief messages about app processes at the bottom of the screen.';
const links = {
    docs: 'https://github.com/material-components/material-components-web/tree/master/packages/mdc-snackbar',
    guide: 'https://material.io/components/snackbars'
};

export default function SnackbarPage() {
    const [isOpen, setOpen] = useState(false);
    const [timeout, setTimeout] = useState(5000);
    const [hasAction, setHasAction] = useState(false);
    const [isLeading, setLeading] = useState(false);
    const [isStacked, setStacked] = useState(false);

    return (
        <Page id={id} title={title} description={description} links={links}>
            <Section title="Demo">
                <Layout row>
                    <fieldset>
                        <legend>Elements</legend>

                        <SegmentedButton>
                            <SegmentedButton.Segment
                                label="Action"
                                selected={hasAction}
                                onClick={() => setHasAction(v => !v)}
                            />
                        </SegmentedButton>
                    </fieldset>

                    <fieldset>
                        <legend>Variants</legend>

                        <SegmentedButton>
                            <SegmentedButton.Segment
                                label="Leading"
                                selected={isLeading}
                                onClick={() => setLeading(v => !v)}
                            />

                            <SegmentedButton.Segment
                                label="Stacked"
                                selected={isStacked}
                                onClick={() => setStacked(v => !v)}
                            />
                        </SegmentedButton>
                    </fieldset>

                    <TextField
                        label="Timeout"
                        value={timeout}
                        suffix="ms"
                        outlined
                        onChange={(_, value) => setTimeout(value)}
                    />
                </Layout>

                <Code
                    setup={
                        <Button
                            label="Show"
                            outlined
                            onClick={() => setOpen(true)}
                        />
                    }
                >
                    <Snackbar
                        open={isOpen}
                        timeout={timeout}
                        label="Message"
                        action={hasAction ?
                            <Button>Action</Button>
                            :
                            undefined
                        }
                        leading={isLeading || undefined}
                        stacked={isStacked || undefined}
                        onClose={() => setOpen(undefined)}
                    />
                </Code>
            </Section>
        </Page>
    );
}