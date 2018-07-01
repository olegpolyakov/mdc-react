import React from 'react';

import { Layout, Typography, Avatar, Icon } from '../../../src';

export default class AvatarPage extends React.Component {
    render() {
        return (
            <Layout column element="main">
                <Typography variant="headline3" component="h1">Avatar</Typography>
    
                <section>
                    <Avatar src="https://codedojo.ru/img/topics/react.svg" large />
                    <Avatar src="https://codedojo.ru/img/topics/react.svg" />
                    <Avatar src="https://codedojo.ru/img/topics/react.svg" small />
                </section>

                <section>
                    <Avatar large>
                        <Icon>star</Icon>
                    </Avatar>

                    <Avatar>
                        <Icon>star</Icon>
                    </Avatar>

                    <Avatar small>
                        <Icon>star</Icon>
                    </Avatar>
                </section>

                <section>
                    <Avatar large>
                        CD
                    </Avatar>

                    <Avatar>
                        CD
                    </Avatar>

                    <Avatar small>
                        CD
                    </Avatar>
                </section>
            </Layout>
        );
    }
}