import React from 'react';

import { Layout, Typography, Button, Icon } from 'src';

import './index.scss';

export default class ButtonsPage extends React.Component {
    render() {
        return (
            <Layout column element="main" id="buttons-page">
                <Typography variant="headline3" component="h1">Buttons</Typography>

                <Typography>Buttons allow users to take actions, and make choices, with a single tap.</Typography>
    
                <section>
                    <Typography variant="subtitle2">Text Button</Typography>
                    
                    <Button>Default</Button>
                    <Button dense>Dense</Button>
                    <Button icon={<Icon>start</Icon>}>Icon</Button>
                    <Button element="a" href="#">Link</Button>
                    <Button disabled>Disabled</Button>
                </section>
    
                <section>
                    <Typography variant="subtitle2">Raised Button</Typography>
                    
                    <Button raised>Default</Button>
                    <Button raised dense>Dense</Button>
                    <Button raised icon={<Icon>start</Icon>}>Icon</Button>
                    <Button raised element="a">Link</Button>
                    <Button raised disabled>Disabled</Button>
                </section>
    
                <section>
                    <Typography variant="subtitle2">Unelevated Button</Typography>

                    <Button unelevated>Default</Button>
                    <Button unelevated dense>Dense</Button>
                    <Button unelevated icon={<Icon>start</Icon>}>Icon</Button>
                    <Button unelevated element="a">Link</Button>
                    <Button unelevated disabled>Disabled</Button>
                </section>
    
                <section>
                    <Typography variant="subtitle2">Outlined Button</Typography>
                    
                    <Button outlined>Default</Button>
                    <Button outlined dense>Dense</Button>
                    <Button outlined icon={<Icon>start</Icon>}>Icon</Button>
                    <Button outlined element="a">Link</Button>
                    <Button outlined disabled>Disabled</Button>
                </section>
            </Layout>
        );
    }
}