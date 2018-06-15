import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { Layout, Typography, Button, Drawer } from '../../../src';

export default class DrawerPage extends React.Component {
    state = {
        temporary: false,
        persistent: false
    };

    open = type => () => this.setState({ [type]: true });

    close = type => () => this.setState({ [type]: false });

    toggle = type => () => this.setState(state => ({ [type]: !state[type] }));

    render() {
        return (
            <Layout column element="main">
                <Route exact path="/drawer" render={() => <Redirect to="/drawer/permanent" />} />

                <Route exact path="/drawer/permanent" render={() =>
                    <section>
                        <Drawer permanent>
                            Permanent Drawer
                        </Drawer>
                    </section>
                } />
                
                <Route exact path="/drawer/temporary" render={() =>
                    <section>
                        <Button onClick={this.open('temporary')}>Open Temporary Drawer</Button>

                        <Drawer
                            temporary
                            open={this.state.temporary}
                            onClose={this.close('temporary')}>
                            Temporary Drawer
                        </Drawer>
                    </section>
                } />
                
                <Route exact path="/drawer/persistent" render={() =>
                    <section>
                        <Button onClick={this.toggle('persistent')}>Toggle Persistent Drawer</Button>

                        <Drawer
                            persistent
                            open={this.state.persistent}>
                            Persistent Drawer
                        </Drawer>
                    </section>
                } />
            </Layout>
        );
    }
}