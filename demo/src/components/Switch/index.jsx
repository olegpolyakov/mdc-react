import React from 'react';

import { Layout, Typography, Switch } from 'src';

export default class SwitchPage extends React.Component {
    state = {
        checked: false
    };

    handleChange = checked => this.setState({ checked });

    render() {
        return (
            <Layout column element="main">
                <Typography variant="headline3" component="h1">Switch</Typography>
    
                <section>
                    <Switch checked={this.state.checked} onChange={this.handleChange} />
                </section>
    
                <section>
                    <Typography variant="subtitle1" component="h2">Disabled</Typography>
                    <Switch disabled />
                </section>
            </Layout>
        );
    }
}