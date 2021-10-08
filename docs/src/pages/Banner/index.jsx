import { useState } from 'react';
import {
    Banner,
    Button,
    TopAppBar
} from 'mdc-react';

import Page from '@/components/Page';
import Section from '@/components/Section';
import Code from '@/components/Code';

import './index.scss';

const id = 'banner';
const title = 'Banner';
const description = 'A banner displays a prominent message and related optional actions.';
const links = {
    docs: 'https://github.com/material-components/material-components-web/tree/master/packages/mdc-banner',
    guide: 'https://material.io/components/banners'
};

export default function BadgePage() {
    const [isOpen1, setOpen1] = useState(false);
    const [isOpen2, setOpen2] = useState(false);
    const [isOpen3, setOpen3] = useState(false);
    const [isOpen4, setOpen4] = useState(false);

    return (
        <Page id={id} title={title} description={description} links={links}>
            <Section title="Banner with text">
                <Code
                    setup={
                        <TopAppBar
                            title="Title"
                            actionItems={
                                <Button
                                    label="Toggle"
                                    onClick={() => setOpen1(v => !v)}
                                />
                            }
                        />
                    }
                >
                    <Banner
                        text="Lorem ipsum"
                        open={isOpen1}
                    />
                </Code>
            </Section>

            <Section title="Banner with icon and text">
                <Code
                    setup={
                        <TopAppBar
                            title="Title"
                            actionItems={
                                <Button
                                    label="Toggle"
                                    onClick={() => setOpen2(v => !v)}
                                />
                            }
                        />
                    }
                >
                    <Banner
                        icon="warning"
                        text="Lorem ipsum"
                        open={isOpen2}
                    />
                </Code>
            </Section>

            <Section title="Banner with icon, text and actions">
                <Code
                    setup={
                        <TopAppBar
                            title="Title"
                            actionItems={
                                <Button
                                    label="Toggle"
                                    onClick={() => setOpen3(v => !v)}
                                />
                            }
                        />
                    }
                >
                    <Banner
                        icon="warning"
                        text="Lorem ipsum"
                        action={<Button>OK</Button>}
                        open={isOpen3}
                    />
                </Code>
            </Section>

            <Section title="Banner with icon, text and actions">
                <Code
                    setup={
                        <TopAppBar
                            title="Title"
                            actionItems={
                                <Button
                                    label="Toggle"
                                    onClick={() => setOpen4(v => !v)}
                                />
                            }
                        />
                    }
                >
                    <Banner
                        icon="warning"
                        text="Lorem ipsum"
                        primaryAction={<Button>OK</Button>}
                        secondaryAction={<Button>Close</Button>}
                        open={isOpen4}
                    />
                </Code>
            </Section>
        </Page>
    );
}