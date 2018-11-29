import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { Layout, Typography, Button, SideSheet } from 'src';

export default class SideSheetPage extends React.Component {
    state = {
        dismissible: false,
        modal: false
    };

    open = type => () => this.setState({ [type]: true });

    close = type => () => this.setState({ [type]: false });

    toggle = type => () => this.setState(state => ({ [type]: !state[type] }));

    render() {
        return (
            <Layout column element="main">
                <Route exact path="/side-sheet" render={() =>
                    <section>
                        <SideSheet>
                            Permanent Drawer
                        </SideSheet>
                    </section>
                } />
                
                <Route exact path="/side-sheet/dismissible" render={() =>
                    <React.Fragment>
                        <SideSheet
                            open={this.state.dismissible}
                            dismissible
                        >
                            Dismissable Side Sheet
                        </SideSheet>

                        <section className="mdc-side-sheet-app-content">
                            <Button onClick={this.toggle('dismissible')}>Open Side Sheet</Button>
                        </section>
                    </React.Fragment>
                } />
                
                <Route exact path="/side-sheet/modal" render={() =>
                    <React.Fragment>
                        <SideSheet
                            modal
                            open={this.state.modal}
                            onClose={this.close('modal')}
                        >
                            Modal Side Sheet
                        </SideSheet>

                        <section>
                            <Button onClick={this.open('modal')}>Toggle Persistent Drawer</Button>
                        </section>
                    </React.Fragment>
                } />
            </Layout>
        );
    }
}