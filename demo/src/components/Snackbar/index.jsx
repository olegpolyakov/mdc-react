import React from 'react';

import { Layout, Typography, Button, Snackbar, Icon } from 'src';

export default class SnackbarPage extends React.Component {
    state = {
        active: false
    };

    onClose = event => this.setState({ active: false });

    render() {
        return (
            <Layout column element="main">
                <Typography variant="headline3" component="h1">Snackbar</Typography>
    
                <section>
                    <Button onClick={() => this.setState({ active: true })}>Open Snackbar</Button>

                    <Snackbar
                        active={this.state.active}
                        text="Hello World"
                        actionText="OK"
                        icon={<Icon>star</Icon>}
                        onClose={this.onClose}
                    />
                </section>
            </Layout>
        );
    }
}