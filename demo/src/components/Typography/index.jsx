import React from 'react';

import { Layout, Typography } from 'src';

export default function TypographyPage() {
    return (
        <Layout column element="main">
            <Typography variant="headline3" component="h1">Typography</Typography>

            <Typography variant="headline1">Headline 1</Typography>
            <Typography variant="headline2">Headline 2</Typography>
            <Typography variant="headline3">Headline 3</Typography>
            <Typography variant="headline4">Headline 4</Typography>
            <Typography variant="headline5">Headline 5</Typography>
            <Typography variant="headline6">Headline 6</Typography>

            <Typography variant="subtitle1">Subtitle 1</Typography>
            <Typography variant="subtitle2">Subtitle 2</Typography>

            <Typography variant="body1">
                Body 1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>

            <Typography variant="body2">
                Body 2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate aliquid ad quas sunt voluptatum officia dolorum cumque, possimus nihil molestias sapiente necessitatibus dolor saepe inventore, soluta id accusantium voluptas beatae.
            </Typography>

            <Typography variant="caption" component="p">Caption Text</Typography>

            <Typography variant="button" component="p">Button Text</Typography>

            <Typography variant="overline" component="p">Overline Text</Typography>
        </Layout>
    );
}