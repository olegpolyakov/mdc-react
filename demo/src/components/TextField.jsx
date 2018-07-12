import React from 'react';

import { Layout, Typography, TextField } from '../../../src';

export default class TextFieldPage extends React.Component {
    state = {
        username: 'olegpolyakov',
        bio: 'Bla bla bla'
    };

    render() {
        return (
            <Layout column element="main">
                <Typography variant="headline3" component="h1">Text Field</Typography>
    
                <TextField
                    label="Username"
                    value={this.state.username}
                    onChange={value => this.setState({ username: value })}
                />

                <TextField
                    label="Bio"
                    value={this.state.bio}
                    multiline
                    onChange={value => this.setState({ bio: value })}
                />
            </Layout>
        );
    }
}