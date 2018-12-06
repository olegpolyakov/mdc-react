import React from 'react';

import { Layout, Typography, TextField, Icon } from 'src';

export default class TextFieldPage extends React.Component {
    state = {
        username: 'olegpolyakov',
        bio: 'Bla bla bla'
    };

    render() {
        return (
            <Layout column element="main">
                <Typography variant="headline3" component="h1">Text Field</Typography>
    
                <section>
                    <Typography variant="subtitle1" component="h2">Filled</Typography>

                    <Layout>
                        <TextField
                            label="Standard"
                            value={this.state.username}
                            onChange={value => this.setState({ username: value })}
                        />

                        <TextField
                            label="Dense"
                            value={this.state.username}
                            dense
                            onChange={value => this.setState({ username: value })}
                        />
                    </Layout>
                </section>

                <section>
                    <Typography variant="subtitle1" component="h2">Outlined</Typography>

                    <Layout>
                        <TextField
                            label="Standard"
                            value={this.state.username}
                            outlined
                            onChange={value => this.setState({ username: value })}
                        />

                        <TextField
                            label="Dense"
                            value={this.state.username}
                            outlined
                            dense
                            onChange={value => this.setState({ username: value })}
                        />
                    </Layout>
                </section>

                <section>
                    <Typography variant="subtitle1" component="h2">Filled With Leading Icon</Typography>

                    <Layout>
                        <TextField
                            label="Standard"
                            value={this.state.username}
                            leadingIcon={<Icon>event</Icon>}
                            onChange={value => this.setState({ username: value })}
                        />

                        <TextField
                            label="Dense"
                            value={this.state.username}
                            leadingIcon={<Icon>event</Icon>}
                            dense
                            onChange={value => this.setState({ username: value })}
                        />
                    </Layout>
                </section>

                <section>
                    <Typography variant="subtitle1" component="h2">Filled With Trailing Icon</Typography>

                    <Layout>
                        <TextField
                            label="Standard"
                            value={this.state.username}
                            trailingIcon={<Icon>event</Icon>}
                            onChange={value => this.setState({ username: value })}
                        />

                        <TextField
                            label="Dense"
                            value={this.state.username}
                            trailingIcon={<Icon>event</Icon>}
                            dense
                            onChange={value => this.setState({ username: value })}
                        />
                    </Layout>
                </section>

                <section>
                    <Typography variant="subtitle1" component="h2">Full Width</Typography>

                    <Layout column>
                        <TextField
                            label="Standard"
                            value={this.state.bio}
                            fullwidth
                            onChange={value => this.setState({ bio: value })}
                        />

                        <TextField
                            label="Standard"
                            dense
                            value={this.state.bio}
                            fullwidth
                            onChange={value => this.setState({ bio: value })}
                        />
                    </Layout>
                </section>

                <section>
                    <Typography variant="subtitle1" component="h2">Textarea</Typography>

                    <Layout column>
                        <TextField
                            label="Standard"
                            value={this.state.bio}
                            textarea
                            onChange={value => this.setState({ bio: value })}
                        />

                        <TextField
                            label="Standard"
                            dense
                            value={this.state.bio}
                            textarea
                            onChange={value => this.setState({ bio: value })}
                        />
                    </Layout>
                </section>
            </Layout>
        );
    }
}