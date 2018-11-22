import React from 'react';

import { Layout, Typography, Radio } from 'src';

export default class RadioPage extends React.Component {
    state = {
        color: 'red'
    };

    handleChange = color => this.setState({ color });

    render() {
        return (
            <Layout column element="main">
                <Typography variant="headline3" component="h1">Radio</Typography>
    
                <Radio
                    name="color"
                    value="red"
                    checked={this.state.color === 'red'}
                    onChange={this.handleChange}
                />

                <Radio
                    name="color"
                    value="green"
                    checked={this.state.color === 'green'}
                    onChange={this.handleChange}
                />

                <Radio
                    name="color"
                    value="blue"
                    checked={this.state.color === 'blue'}
                    onChange={this.handleChange}
                />
            </Layout>
        );
    }
}