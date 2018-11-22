import React from 'react';

import { Layout, Typography, FAB, Icon } from 'src';

export default class FABPage extends React.Component{
    render() {
        return (
            <Layout column element="main">
                <Typography variant="headline3" component="h1">FAB</Typography>
    
                <section>
                    <Typography variant="subtitle1" component="h3">Standard Floating Action Button</Typography>

                    <FAB icon={<Icon>favorite_border</Icon>} />
                </section>

                <section>
                    <Typography variant="subtitle1" component="h3">Mini Floating Action Button</Typography>

                    <FAB icon={<Icon>favorite_border</Icon>} mini />
                </section>

                <section>
                    <Typography variant="subtitle1" component="h3">Extended FAB</Typography>

                    
                    <FAB icon={<Icon>favorite_border</Icon>} label="Favorite" extended />
                </section>

                <section>
                    <Typography variant="subtitle1" component="h3">Extended FAB (without Icon)</Typography>
                    
                    <FAB label="Favorite" extended />
                </section>
            </Layout>
        );
    }
}