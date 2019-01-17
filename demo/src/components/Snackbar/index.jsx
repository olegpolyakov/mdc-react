import React from 'react';

import { Layout, Typography, Button, Snackbar, Icon, IconButton } from 'src';

export default class SnackbarPage extends React.Component {
    state = {
        open: false
    };

    onClose = event => this.setState({ open: false });

    render() {
        return (
            <Layout column element="main">
                <Typography variant="headline3" component="h1">Snackbar</Typography>
    
                <section>
                    <Button onClick={() => this.setState({ open: true })}>Open Snackbar</Button>

                    <Snackbar
                        open={this.state.open}
                        label="Hello World"
                        actions={[
                            <Button onClick={this.onClose}>OK</Button>,
                            <IconButton onClick={this.onClose} dismiss>
                                <Icon>close</Icon>
                            </IconButton>
                        ]}
                        closeOnEscape
                        onClose={this.onClose}
                    />
                </section>
            </Layout>
        );
    }
}