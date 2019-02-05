import React from 'react';

import {
    Layout,
    Typography,
    Button,
    Dialog, DialogTitle, DialogContent, DialogActions
} from 'src';

export default class DialogPage extends React.Component {
    state = {
        basic: false,
        confirmation: false,
        scrollable: false
    };

    open = type => () => this.setState({ [type]: true });

    close = type => () => this.setState({ [type]: false });

    render() {
        return (
            <Layout column element="main">
                <Typography variant="headline3" component="h1">Dialog</Typography>

                <section>
                    <Button onClick={this.open('basic')}>Open Dialog</Button>

                    <Dialog
                        open={this.state.basic}
                        onClose={this.close('basic')}
                    >
                        <DialogTitle>Use Google's location service?</DialogTitle>

                        <DialogContent>
                            <Typography>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</Typography>
                            <Typography>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</Typography>
                            <Typography>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</Typography>
                            <Typography>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</Typography>
                        </DialogContent>
                        
                        <DialogActions>
                            <Button>Cancel</Button>
                            <Button>OK</Button>
                        </DialogActions>
                    </Dialog>
                </section>
            </Layout>
        );
    }
}