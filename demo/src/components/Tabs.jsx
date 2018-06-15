import React from 'react';

import { Layout, Typography, Tabs, Tab } from '../../../src';

export default class TabsPage extends React.Component {
    render() {
        return (
            <Layout column element="main">
                <Typography variant="headline3" component="h1">Tabs</Typography>
    
                <section style={{maxWidth: '640px'}}>
                    <Tabs>
                        <Tab label="Tab 1">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit iusto labore eaque veritatis repellendus, suscipit doloribus ab libero voluptate est, dignissimos modi velit delectus assumenda rerum veniam sunt. Iure, tempore.
                        </Tab>
        
                        <Tab label="Tab 2">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis iusto soluta quasi, consectetur nostrum porro dignissimos fuga esse? Libero vitae enim quam laudantium vel fugit culpa inventore commodi quidem iusto!
                        </Tab>

                        <Tab label="Tab 3">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, eos. Natus earum quo quibusdam repellat molestias culpa necessitatibus ipsa libero, quasi et, provident rem nulla molestiae dolorum ullam neque in.
                        </Tab>
                    </Tabs>
                </section>
            </Layout>
        );
    }
}