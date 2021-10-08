import { useState } from 'react';
import {
    Button,
    Dialog
} from 'mdc-react';

import Page from '@/components/Page';
import Section from '@/components/Section';
import Code from '@/components/Code';

const id = 'dialog';
const title = 'Dialog';
const description = 'Dialogs inform users about a specific task and may contain critical information, require decisions, or involve multiple tasks.';
const links = {
    docs: 'https://github.com/material-components/material-components-web/tree/master/packages/mdc-dialog',
    guide: 'https://material.io/components/dialogs'
};

export default function DialogPage() {
    const [isBasicOpen, setBasicOpen] = useState(false);
    const [isConfirmationOpen, setConfirmationOpen] = useState(false);
    const [isStackingOpen, setStackingOpen] = useState(false);
    const [isScrollableOpen, setScrollableOpen] = useState(false);
    const [isFullscreenOpen, setFullscreenOpen] = useState(false);

    return (
        <Page id={id} title={title} description={description} links={links}>
            <Section title="Basic dialog">
                <Code
                    setup={
                        <Button onClick={() => setBasicOpen(v => !v)}>Open</Button>
                    }
                >
                    <Dialog
                        title="Title"
                        content="Content"
                        open={isBasicOpen}
                        onClose={() => setBasicOpen(v => !v)}
                    />
                </Code>
            </Section>

            <Section title="Confirmation dialog">
                <Code
                    setup={
                        <Button onClick={() => setConfirmationOpen(v => !v)}>Open</Button>
                    }
                >
                    <Dialog
                        title="Title"
                        content="Are you sure?"
                        open={isConfirmationOpen}
                        persistent
                        autoStackButtons
                        actions={[
                            <Button key="close" onClick={() => setConfirmationOpen(v => !v)}>Close</Button>,
                            <Button key="confirm">Confirm</Button>
                        ]}
                        onClose={() => setConfirmationOpen(v => !v)}
                    />
                </Code>
            </Section>

            <Section title="Dialog with stacking buttons">
                <Code
                    setup={
                        <Button onClick={() => setStackingOpen(v => !v)}>Open</Button>
                    }
                >
                    <Dialog
                        title="Title"
                        open={isStackingOpen}
                        autoStackButtons
                        actions={[
                            <Button key="close" onClick={() => setStackingOpen(v => !v)}>A very very very very very long button</Button>,
                            <Button key="confirm">A very very very very very long button</Button>
                        ]}
                        onClose={() => setStackingOpen(v => !v)}
                    />
                </Code>
            </Section>

            <Section title="Scrollable dialog">
                <Code
                    setup={
                        <Button onClick={() => setScrollableOpen(v => !v)}>Open</Button>
                    }
                >
                    <Dialog
                        title="Title"
                        open={isScrollableOpen}
                        actions={
                            <Button onClick={() => setScrollableOpen(v => !v)}>Close</Button>
                        }
                        onClose={() => setScrollableOpen(v => !v)}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt earum quibusdam dolor hic accusamus, deserunt libero? Deleniti ratione libero, eveniet neque aliquam repellat dicta obcaecati atque, sequi voluptatem explicabo beatae!

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis animi vel cupiditate eveniet? Laudantium recusandae illo minus saepe itaque dolores fugiat, perferendis nostrum! Assumenda fugiat fuga deserunt omnis odit dicta!

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus accusantium a quisquam in repudiandae et ullam cum dignissimos exercitationem, blanditiis perspiciatis alias hic vel, laudantium aliquam omnis recusandae nemo animi.

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt earum quibusdam dolor hic accusamus, deserunt libero? Deleniti ratione libero, eveniet neque aliquam repellat dicta obcaecati atque, sequi voluptatem explicabo beatae!

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis animi vel cupiditate eveniet? Laudantium recusandae illo minus saepe itaque dolores fugiat, perferendis nostrum! Assumenda fugiat fuga deserunt omnis odit dicta!

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus accusantium a quisquam in repudiandae et ullam cum dignissimos exercitationem, blanditiis perspiciatis alias hic vel, laudantium aliquam omnis recusandae nemo animi.

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt earum quibusdam dolor hic accusamus, deserunt libero? Deleniti ratione libero, eveniet neque aliquam repellat dicta obcaecati atque, sequi voluptatem explicabo beatae!

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis animi vel cupiditate eveniet? Laudantium recusandae illo minus saepe itaque dolores fugiat, perferendis nostrum! Assumenda fugiat fuga deserunt omnis odit dicta!

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus accusantium a quisquam in repudiandae et ullam cum dignissimos exercitationem, blanditiis perspiciatis alias hic vel, laudantium aliquam omnis recusandae nemo animi.

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt earum quibusdam dolor hic accusamus, deserunt libero? Deleniti ratione libero, eveniet neque aliquam repellat dicta obcaecati atque, sequi voluptatem explicabo beatae!

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis animi vel cupiditate eveniet? Laudantium recusandae illo minus saepe itaque dolores fugiat, perferendis nostrum! Assumenda fugiat fuga deserunt omnis odit dicta!

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus accusantium a quisquam in repudiandae et ullam cum dignissimos exercitationem, blanditiis perspiciatis alias hic vel, laudantium aliquam omnis recusandae nemo animi.

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt earum quibusdam dolor hic accusamus, deserunt libero? Deleniti ratione libero, eveniet neque aliquam repellat dicta obcaecati atque, sequi voluptatem explicabo beatae!

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis animi vel cupiditate eveniet? Laudantium recusandae illo minus saepe itaque dolores fugiat, perferendis nostrum! Assumenda fugiat fuga deserunt omnis odit dicta!

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus accusantium a quisquam in repudiandae et ullam cum dignissimos exercitationem, blanditiis perspiciatis alias hic vel, laudantium aliquam omnis recusandae nemo animi.

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt earum quibusdam dolor hic accusamus, deserunt libero? Deleniti ratione libero, eveniet neque aliquam repellat dicta obcaecati atque, sequi voluptatem explicabo beatae!

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis animi vel cupiditate eveniet? Laudantium recusandae illo minus saepe itaque dolores fugiat, perferendis nostrum! Assumenda fugiat fuga deserunt omnis odit dicta!

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus accusantium a quisquam in repudiandae et ullam cum dignissimos exercitationem, blanditiis perspiciatis alias hic vel, laudantium aliquam omnis recusandae nemo animi.
                    </Dialog>
                </Code>
            </Section>

            <Section title="Fullscreen dialog">
                <Code
                    setup={
                        <Button onClick={() => setFullscreenOpen(v => !v)}>Open</Button>
                    }
                >
                    <Dialog
                        title="Fullscreen Dialog"
                        open={isFullscreenOpen}
                        fullscreen
                        actions={
                            <Button onClick={() => setFullscreenOpen(v => !v)}>Close</Button>
                        }
                        onClose={() => setFullscreenOpen(v => !v)}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt earum quibusdam dolor hic accusamus, deserunt libero? Deleniti ratione libero, eveniet neque aliquam repellat dicta obcaecati atque, sequi voluptatem explicabo beatae!

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis animi vel cupiditate eveniet? Laudantium recusandae illo minus saepe itaque dolores fugiat, perferendis nostrum! Assumenda fugiat fuga deserunt omnis odit dicta!

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus accusantium a quisquam in repudiandae et ullam cum dignissimos exercitationem, blanditiis perspiciatis alias hic vel, laudantium aliquam omnis recusandae nemo animi.

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt earum quibusdam dolor hic accusamus, deserunt libero? Deleniti ratione libero, eveniet neque aliquam repellat dicta obcaecati atque, sequi voluptatem explicabo beatae!

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis animi vel cupiditate eveniet? Laudantium recusandae illo minus saepe itaque dolores fugiat, perferendis nostrum! Assumenda fugiat fuga deserunt omnis odit dicta!

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus accusantium a quisquam in repudiandae et ullam cum dignissimos exercitationem, blanditiis perspiciatis alias hic vel, laudantium aliquam omnis recusandae nemo animi.

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt earum quibusdam dolor hic accusamus, deserunt libero? Deleniti ratione libero, eveniet neque aliquam repellat dicta obcaecati atque, sequi voluptatem explicabo beatae!

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis animi vel cupiditate eveniet? Laudantium recusandae illo minus saepe itaque dolores fugiat, perferendis nostrum! Assumenda fugiat fuga deserunt omnis odit dicta!

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus accusantium a quisquam in repudiandae et ullam cum dignissimos exercitationem, blanditiis perspiciatis alias hic vel, laudantium aliquam omnis recusandae nemo animi.

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt earum quibusdam dolor hic accusamus, deserunt libero? Deleniti ratione libero, eveniet neque aliquam repellat dicta obcaecati atque, sequi voluptatem explicabo beatae!

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis animi vel cupiditate eveniet? Laudantium recusandae illo minus saepe itaque dolores fugiat, perferendis nostrum! Assumenda fugiat fuga deserunt omnis odit dicta!

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus accusantium a quisquam in repudiandae et ullam cum dignissimos exercitationem, blanditiis perspiciatis alias hic vel, laudantium aliquam omnis recusandae nemo animi.

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt earum quibusdam dolor hic accusamus, deserunt libero? Deleniti ratione libero, eveniet neque aliquam repellat dicta obcaecati atque, sequi voluptatem explicabo beatae!

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis animi vel cupiditate eveniet? Laudantium recusandae illo minus saepe itaque dolores fugiat, perferendis nostrum! Assumenda fugiat fuga deserunt omnis odit dicta!

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus accusantium a quisquam in repudiandae et ullam cum dignissimos exercitationem, blanditiis perspiciatis alias hic vel, laudantium aliquam omnis recusandae nemo animi.

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt earum quibusdam dolor hic accusamus, deserunt libero? Deleniti ratione libero, eveniet neque aliquam repellat dicta obcaecati atque, sequi voluptatem explicabo beatae!

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis animi vel cupiditate eveniet? Laudantium recusandae illo minus saepe itaque dolores fugiat, perferendis nostrum! Assumenda fugiat fuga deserunt omnis odit dicta!

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus accusantium a quisquam in repudiandae et ullam cum dignissimos exercitationem, blanditiis perspiciatis alias hic vel, laudantium aliquam omnis recusandae nemo animi.
                    </Dialog>
                </Code>
            </Section>
        </Page>
    );
}