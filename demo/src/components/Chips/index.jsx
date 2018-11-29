import React from 'react';

import {
    Layout,
    Typography,
    Chip, ChipSet,
    Icon
} from 'src';

export default class ChipsPage extends React.Component {
    state = {
        selected: null,
        filtered: [1]
    };

    handleSelect = value => this.setState({ selected: value });

    handleFilter = value => this.setState(state => ({
        filtered: state.filtered.includes(value) ? state.filtered.filter(v => v !== value) : state.filtered.concat(value)
    }))

    render() {
        const { selected, filtered } = this.state;

        return (
            <Layout column element="main">
                <Typography variant="headline3" component="h1">Chips</Typography>
    
                <section>
                    <Typography variant="subtitle1" component="h2">Basic Chips</Typography>

                    <ChipSet>
                        <Chip>Angular</Chip>
                        <Chip>React</Chip>
                        <Chip>Vue.js</Chip>
                    </ChipSet>
                </section>

                <section>
                    <Typography variant="subtitle1" component="h2">Action Chips</Typography>

                    <ChipSet>
                        <Chip leadingIcon={<Icon>star</Icon>}>Angular</Chip>
                        <Chip leadingIcon={<Icon>star</Icon>}>React</Chip>
                        <Chip leadingIcon={<Icon>star</Icon>}>Vue.js</Chip>
                    </ChipSet>
                </section>

                <section>
                    <Typography variant="subtitle1" component="h2">Choice Chips</Typography>
                    
                    <ChipSet choice selectedChip={selected} onSelect={this.handleSelect}>
                        <Chip value="angular">Angular</Chip>
                        <Chip value="react">React</Chip>
                        <Chip value="vuejs">Vue.js</Chip>
                    </ChipSet>
                </section>

                <section>
                    <Typography variant="subtitle1" component="h2">Filter Chips</Typography>
                    
                    <section>
                        <Typography variant="subtitle2" component="h3">No leading icon</Typography>

                        <ChipSet filter filteredChips={filtered} onSelect={this.handleFilter}>
                            <Chip>Angular</Chip>
                            <Chip>React</Chip>
                            <Chip>Vue.js</Chip>
                        </ChipSet>
                    </section>

                    <section>
                        <Typography variant="subtitle2" component="h3">With leading icon</Typography>

                        <ChipSet filter filteredChips={filtered} onSelect={this.handleFilter}>
                            <Chip leadingIcon={<Icon>star</Icon>}>Angular</Chip>
                            <Chip leadingIcon={<Icon>star</Icon>}>React</Chip>
                            <Chip leadingIcon={<Icon>star</Icon>}>Vue.js</Chip>
                        </ChipSet>
                    </section>
                </section>
            </Layout>
        );
    }
}