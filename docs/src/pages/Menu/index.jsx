import { useCallback, useState } from 'react';
import {
    FormField,
    Button,
    LayoutGrid,
    Menu,
    Radio,
    Typography
} from 'mdc-react';

import Page from '@/components/Page';
import Section from '@/components/Section';
import Code from '@/components/Code';

import './index.scss';

const id = 'menu';
const title = 'Menu';
const description = 'Menus display a list of choices on temporary surfaces.';
const links = {
    docs: 'https://github.com/material-components/material-components-web/tree/master/packages/mdc-menu',
    guide: 'https://material.io/components/menus'
};

export default function MenuPage() {
    const [isBasicOpen, setBasicOpen] = useState(false);
    const [isQuickOpen, setQuickOpen] = useState(false);
    const [isPersistentOpen, setPersistentOpen] = useState(false);
    const [isAnchoredOpen, setAnchoredOpen] = useState(false);
    const [anchorPosition, setAnchorPosition] = useState(Menu.Origin.TOP_LEFT);
    const [anchorOrigin, setAnchorOrigin] = useState(Menu.Origin.TOP_LEFT);
    const [transformOrigin, setTransformOrigin] = useState(Menu.Origin.TOP_LEFT);

    const handleAnchorPositionChange = useCallback((event, value) => {
        setAnchorPosition(value);
    }, []);

    const handleAnchorOriginChange = useCallback((event, value) => {
        setAnchorOrigin(value);
    }, []);

    const handleTransformOriginChange = useCallback((event, value) => {
        setTransformOrigin(value);
    }, []);

    return (
        <Page id={id} title={title} description={description} links={links}>
            <Section title="Basic menu">
                <Code>
                    <Menu
                        anchor={
                            <Button
                                label="Open"
                                outlined
                                onClick={() => setBasicOpen(true)}
                            />
                        }
                        open={isBasicOpen}
                        modal
                        onClose={() => {
                            setBasicOpen(false);
                        }}
                    >
                        <Menu.Item
                            text="Foo"
                        />

                        <Menu.Item
                            text="Bar"
                        />

                        <Menu.Item
                            text="Baz"
                        />
                    </Menu>
                </Code>
            </Section>

            <Section title="Quick menu">
                <Code>
                    <Menu
                        anchor={
                            <Button
                                label="Open"
                                outlined
                                onClick={() => setQuickOpen(true)}
                            />
                        }
                        open={isQuickOpen}
                        quick
                        onClose={() => {
                            setQuickOpen(false);
                        }}
                    >
                        <Menu.Item
                            text="Foo"
                        />

                        <Menu.Item
                            text="Bar"
                        />

                        <Menu.Item
                            text="Baz"
                        />
                    </Menu>
                </Code>
            </Section>

            <Section title="Persistent menu">
                <Code>
                    <Menu
                        anchor={
                            <Button
                                label="Open"
                                outlined
                                onClick={() => setPersistentOpen(v => !v)}
                            />
                        }
                        open={isPersistentOpen}
                        persistent
                    >
                        <Menu.Item
                            text="Foo"
                            onClick={() => setPersistentOpen(false)}
                        />

                        <Menu.Item
                            text="Bar"
                            onClick={() => setPersistentOpen(false)}
                        />

                        <Menu.Item
                            text="Baz"
                            onClick={() => setPersistentOpen(false)}
                        />
                    </Menu>
                </Code>
            </Section>

            <Section id="menu-origin" className={`origin--${anchorPosition.replace(' ', '-')}`} title="Menu origin">
                <LayoutGrid>
                    <LayoutGrid.Cell>
                        <fieldset>
                            <Typography element="legend" type="caption" noMargin>Anchor position</Typography>

                            <FormField label="Top left">
                                <Radio
                                    value={Menu.Origin.TOP_LEFT}
                                    checked={anchorPosition === Menu.Origin.TOP_LEFT}
                                    onChange={handleAnchorPositionChange}
                                />
                            </FormField>

                            <FormField label="Top right">
                                <Radio
                                    value={Menu.Origin.TOP_RIGHT}
                                    checked={anchorPosition === Menu.Origin.TOP_RIGHT}
                                    onChange={handleAnchorPositionChange}
                                />
                            </FormField>

                            <FormField label="Bottom left">
                                <Radio
                                    value={Menu.Origin.BOTTOM_LEFT}
                                    checked={anchorPosition === Menu.Origin.BOTTOM_LEFT}
                                    onChange={handleAnchorPositionChange}
                                />
                            </FormField>

                            <FormField label="Bottom right">
                                <Radio
                                    value={Menu.Origin.BOTTOM_RIGHT}
                                    checked={anchorPosition === Menu.Origin.BOTTOM_RIGHT}
                                    onChange={handleAnchorPositionChange}
                                />
                            </FormField>
                        </fieldset>
                    </LayoutGrid.Cell>

                    <LayoutGrid.Cell>
                        <fieldset>
                            <Typography element="legend" type="caption" noMargin>Anchor origin</Typography>

                            <FormField label="Top left">
                                <Radio
                                    value={Menu.Origin.TOP_LEFT}
                                    checked={anchorOrigin === Menu.Origin.TOP_LEFT}
                                    onChange={handleAnchorOriginChange}
                                />
                            </FormField>

                            <FormField label="Top right">
                                <Radio
                                    value={Menu.Origin.TOP_RIGHT}
                                    checked={anchorOrigin === Menu.Origin.TOP_RIGHT}
                                    onChange={handleAnchorOriginChange}
                                />
                            </FormField>

                            <FormField label="Bottom left">
                                <Radio
                                    value={Menu.Origin.BOTTOM_LEFT}
                                    checked={anchorOrigin === Menu.Origin.BOTTOM_LEFT}
                                    onChange={handleAnchorOriginChange}
                                />
                            </FormField>

                            <FormField label="Bottom right">
                                <Radio
                                    value={Menu.Origin.BOTTOM_RIGHT}
                                    checked={anchorOrigin === Menu.Origin.BOTTOM_RIGHT}
                                    onChange={handleAnchorOriginChange}
                                />
                            </FormField>
                        </fieldset>
                    </LayoutGrid.Cell>

                    <LayoutGrid.Cell>
                        <fieldset>
                            <Typography element="legend" type="caption" noMargin>Transform origin</Typography>

                            <FormField label="Top left">
                                <Radio
                                    value={Menu.Origin.TOP_LEFT}
                                    checked={transformOrigin === Menu.Origin.TOP_LEFT}
                                    onChange={handleTransformOriginChange}
                                />
                            </FormField>

                            <FormField label="Top right">
                                <Radio
                                    value={Menu.Origin.TOP_RIGHT}
                                    checked={transformOrigin === Menu.Origin.TOP_RIGHT}
                                    onChange={handleTransformOriginChange}
                                />
                            </FormField>

                            <FormField label="Bottom left">
                                <Radio
                                    value={Menu.Origin.BOTTOM_LEFT}
                                    checked={transformOrigin === Menu.Origin.BOTTOM_LEFT}
                                    onChange={handleTransformOriginChange}
                                />
                            </FormField>

                            <FormField label="Bottom right">
                                <Radio
                                    value={Menu.Origin.BOTTOM_RIGHT}
                                    checked={transformOrigin === Menu.Origin.BOTTOM_RIGHT}
                                    onChange={handleTransformOriginChange}
                                />
                            </FormField>
                        </fieldset>
                    </LayoutGrid.Cell>
                </LayoutGrid>

                <Code>
                    <Menu
                        anchor={
                            <Button
                                label={isPersistentOpen ? 'Close' : 'Open'}
                                outlined
                                onClick={() => setAnchoredOpen(v => !v)}
                            />
                        }
                        anchorOrigin={anchorOrigin}
                        transformOrigin={transformOrigin}
                        open={isAnchoredOpen}
                        onClose={() => {
                            setAnchoredOpen(false);
                        }}
                    >
                        <Menu.Item
                            text="Foo"
                        />

                        <Menu.Item
                            text="Bar"
                        />

                        <Menu.Item
                            text="Baz"
                        />
                    </Menu>
                </Code>
            </Section>
        </Page>
    );
}