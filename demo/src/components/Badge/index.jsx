import React from 'react';

import {
    Badge,
    Button,
    Icon,
    IconButton,
    Layout,
    Typography
} from 'src';

export default class BadgesPage extends React.Component {
    render() {
        return (
            <Layout column element="main">
                <Typography variant="headline3" component="h1">Badge</Typography>
    
                <section>
                    <Badge value="42">
                        <Typography element="span">Typography</Typography>
                    </Badge>

                    <Badge value="42" overlap>
                        <Button>Button</Button>
                    </Badge>

                    <Badge value="42" overlap noBackground>
                        <IconButton>
                            <Icon>star</Icon>
                        </IconButton>
                    </Badge>
                </section>
            </Layout>
        );
    }
}