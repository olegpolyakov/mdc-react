import React, {useRef} from 'react';
import {Story} from '@storybook/react';

import {Avatar} from '../src';

export const Basic: Story = () => {
    const ref = useRef<HTMLIFrameElement>(null);

    return (
        <Avatar src={'/'} element={'iframe'} ref={ref}>
            <div>children</div>
        </Avatar>
    );
};

Basic.storyName = 'Basic Avatar';
