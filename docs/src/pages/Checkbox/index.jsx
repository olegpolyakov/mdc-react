import { useState } from 'react';
import { Checkbox } from 'mdc-react';

import Demo from '@/components/Demo';
import Page from '@/components/Page';

const id = 'checkbox';
const title = 'Checkbox';
const description = 'Checkboxes allow the user to select multiple options from a set.';
const links = {
    docs: 'https://github.com/material-components/material-components-web/tree/master/packages/mdc-checkbox',
    guide: 'https://material.io/components/checkboxes'
};

export default function CheckboxPage() {
    const [checked, setChecked] = useState(false);
    const [controlled, setControlled] = useState(false);
    const [indeterminate, setIndeterminate] = useState(false);
    const [disabled, setDisabled] = useState(false);

    return (
        <Page id={id} title={title} description={description} links={links}>
            <Demo>
                <Checkbox
                    checked={checked}
                    defaultChecked={false}
                    indeterminate={indeterminate}
                    disabled={disabled}
                    onChange={() => setChecked(v => !v)}
                />
            </Demo>
        </Page>
    );
}