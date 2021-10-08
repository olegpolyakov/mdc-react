import { Elevation, Slider } from 'mdc-react';

import Page from '@/components/Page';
import Section from '@/components/Section';
import Code from '@/components/Code';
import { useCallback, useState } from 'react';

import './index.scss';

const id = 'elevation';
const title = 'Elevation';
const description = 'Elevation is the relative distance between two surfaces along the z-axis.';
const links = {
    docs: 'https://github.com/material-components/material-components-web/tree/master/packages/mdc-elevation',
    guide: 'https://material.io/design/environment/elevation'
};

export default function ElevationPage() {
    const [z, setZ] = useState(0);

    const handleChange = useCallback(value => {
        setZ(value);
    }, []);

    return (
        <Page id={id} title={title} description={description} links={links}>
            <Section>
                <Code
                    setup={
                        <Slider
                            value={z}
                            min="0"
                            max="24"
                            step="1"
                            discrete
                            tickMarks
                            onChange={handleChange}
                        />
                    }
                >
                    <Elevation z={z} />
                </Code>
            </Section>
        </Page>
    );
}