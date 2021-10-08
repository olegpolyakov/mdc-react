import { List, Typography } from 'mdc-react';

import './index.scss';

export default function Page({
    id,
    title,
    description,
    links,

    children,
    ...props
}) {
    return (
        <article id={`${id}-page`} className="page" {...props}>
            <header className="page-header">
                <Typography className="page-title" type="headline4" noMargin>{title}</Typography>

                {description &&
                    <Typography className="page-description" type="body1" noMargin>{description}</Typography>
                }

                {links &&
                    <List>
                        {links.guide &&
                            <List.Item>
                                <a href={links.guide} target="_blank" rel="noreferrer">Guide</a>
                            </List.Item>
                        }

                        {links.docs &&
                            <List.Item>
                                <a href={links.docs} target="_blank" rel="noreferrer">Docs</a>
                            </List.Item>
                        }
                    </List>
                }
            </header>

            <div className="page-content">
                {children}
            </div>
        </article>
    );
}