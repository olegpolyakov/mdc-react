import React from 'react';

import { Layout, Typography, TabBar, Tab } from 'src';

export default class TabsPage extends React.Component {
    state = {
        activeTab: 'foo'
    };

    handleChange = activeTab => this.setState({ activeTab });

    render() {
        const { activeTab } = this.state;
        
        return (
            <Layout column element="main">
                <Typography variant="headline3" component="h1">Tabs</Typography>
    
                <section style={{maxWidth: '640px'}}>
                    <TabBar value={activeTab} onChange={this.handleChange}>
                        <Tab label="Tab 1" value="foo" />
                        <Tab label="Tab 2" value="bar" />
                        <Tab label="Tab 3" value="baz" />
                    </TabBar>

                    {activeTab === 'foo' && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit iusto labore eaque veritatis repellendus, suscipit doloribus ab libero voluptate est, dignissimos modi velit delectus assumenda rerum veniam sunt. Iure, tempore.</p>}
                    {activeTab === 'bar' && <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis iusto soluta quasi, consectetur nostrum porro dignissimos fuga esse? Libero vitae enim quam laudantium vel fugit culpa inventore commodi quidem iusto!</p>}
                    {activeTab === 'baz' && <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, eos. Natus earum quo quibusdam repellat molestias culpa necessitatibus ipsa libero, quasi et, provident rem nulla molestiae dolorum ullam neque in.</p>}
                </section>
            </Layout>
        );
    }
}