import React from 'react';

import { Layout, Typography, Avatar, Icon } from 'src';

export default class AvatarPage extends React.Component {
    render() {
        return (
            <Layout column element="main">
                <Typography variant="headline3" component="h1">Avatar</Typography>
    
                <section>
                    <Typography variant="subtitle1" component="h2">Image Avatar</Typography>

                    <Avatar src="https://codedojo.ru/img/topics/react.svg" small />
                    <Avatar src="https://codedojo.ru/img/topics/react.svg" />
                    <Avatar src="https://codedojo.ru/img/topics/react.svg" large />
                </section>

                <section>
                    <Typography variant="subtitle1" component="h2">Icon Avatar</Typography>

                    <Avatar small>
                        <Icon>star</Icon>
                    </Avatar>

                    <Avatar>
                        <Icon>star</Icon>
                    </Avatar>

                    <Avatar large>
                        <Icon>star</Icon>
                    </Avatar>
                </section>

                <section>
                    <Typography variant="subtitle1" component="h2">Text Avatar</Typography>

                    <Avatar small>
                        CD
                    </Avatar>

                    <Avatar>
                        CD
                    </Avatar>

                    <Avatar large>
                        CD
                    </Avatar>
                </section>
            </Layout>
        );
    }
}