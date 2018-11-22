import React from 'react';

import { Layout, Typography, Checkbox } from 'src';

export default class CheckboxPage extends React.Component {
    state = {
        basic: false
    };

    handleChange = () => this.setState(state => ({ basic: !state.basic }))

    render() {
        return (
            <Layout column element="main">
                <Typography variant="headline3" component="h1">Checkbox</Typography>
    
                <section>
                    <Checkbox
                        name="basic"
                        checked={this.state.basic}
                        onChange={this.handleChange}
                    />
                </section>
            </Layout>
        );
    }
}