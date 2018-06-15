import React from 'react';

import { Layout, Typography, Checkbox } from '../../../src';

export default class CheckboxPage extends React.Component {
    state = {
        basic: false
    };

    render() {
        return (
            <Layout column element="main">
                <Typography variant="headline3" component="h1">Checkbox</Typography>
    
                <Checkbox
                    name="basic"
                    checked={this.state.basic}
                    onChange={(event, checked) => this.setState({ basic: checked })}
                />
            </Layout>
        );
    }
}