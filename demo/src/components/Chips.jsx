import React from 'react';

import { Layout, Typography, Chip, ChipSet } from '../../../src';

export default class ChipsPage extends React.Component {
    state = {
        basic: false
    };

    render() {
        return (
            <Layout column element="main">
                <Typography variant="headline3" component="h1">Chips</Typography>
    
                <section>
                    <Typography variant="subtitle1" component="h2">Basic Chips</Typography>

                    <ChipSet>
                        <Chip>Chip 1</Chip>
                        <Chip>Chip 2</Chip>
                        <Chip>Chip 3</Chip>
                        <Chip>Chip 4</Chip>
                    </ChipSet>
                </section>

                <section>
                    <Typography variant="subtitle1" component="h2">Action Chips</Typography>

                    <ChipSet>
                        <Chip leadingIcon="star">Chip 1</Chip>
                        <Chip leadingIcon="star">Chip 2</Chip>
                        <Chip leadingIcon="star">Chip 3</Chip>
                        <Chip leadingIcon="star">Chip 4</Chip>
                    </ChipSet>
                </section>

                <section>
                    <Typography variant="subtitle1" component="h2">Choice Chips</Typography>
                    
                    <ChipSet choice>
                        <Chip>Chip 1</Chip>
                        <Chip>Chip 2</Chip>
                        <Chip>Chip 3</Chip>
                        <Chip>Chip 4</Chip>
                    </ChipSet>
                </section>

                <section>
                    <Typography variant="subtitle1" component="h2">Filter Chips</Typography>
                    
                    <section>
                        <Typography variant="subtitle2" component="h3">No leading icon</Typography>

                        <ChipSet filter>
                            <Chip>Chip 1</Chip>
                            <Chip>Chip 2</Chip>
                            <Chip>Chip 3</Chip>
                            <Chip>Chip 4</Chip>
                        </ChipSet>
                    </section>

                    <section>
                        <Typography variant="subtitle2" component="h3">With leading icon</Typography>

                        <ChipSet filter>
                            <Chip leadingIcon="star">Chip 1</Chip>
                            <Chip leadingIcon="star">Chip 2</Chip>
                            <Chip leadingIcon="star">Chip 3</Chip>
                            <Chip leadingIcon="star">Chip 4</Chip>
                        </ChipSet>
                    </section>
                </section>
            </Layout>
        );
    }
}