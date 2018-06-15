import React from 'react';

import { Layout, Typography, Button, Dialog, DialogBody, DialogButton, DialogFooter, DialogHeader } from '../../../src';

export default class DialogPage extends React.Component {
    state = {
        basic: false,
        confirmation: false,
        scrollable: false
    };

    open = type => () => this.setState({ [type]: true });

    close = type => () => this.setState({ [type]: false });

    render() {
        return (
            <Layout column element="main">
                <Typography variant="headline3" component="h1">Dialog</Typography>

                <section>
                    <Button onClick={this.open('basic')}>Open Dialog</Button>

                    <Dialog open={this.state.basic} onClose={this.close('basic')}>
                        <DialogHeader title="Use Google's location service?" />

                        <DialogBody>
                            Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
                        </DialogBody>

                        <DialogFooter>
                            <DialogButton cancel onClick={this.close('basic')}>Decline</DialogButton>
                            <DialogButton accept action onClick={this.close('basic')}>Accept</DialogButton>
                        </DialogFooter>
                    </Dialog>
                </section>

                <section>
                    <Button onClick={this.open('confirmation')}>Open Confirmation Dialog</Button>

                    <Dialog open={this.state.confirmation} onClose={this.close('confirmation')} confirmation>
                        <DialogHeader title="Use Google's location service?" />

                        <DialogBody>
                            Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
                        </DialogBody>

                        <DialogFooter>
                            <DialogButton cancel onClick={this.close('confirmation')}>Decline</DialogButton>
                            <DialogButton accept action onClick={this.close('confirmation')}>Accept</DialogButton>
                        </DialogFooter>
                    </Dialog>
                </section>

                <section>
                    <Button onClick={this.open('scrollable')}>Open Scrollable Dialog</Button>

                    <Dialog open={this.state.scrollable} onClose={this.close('scrollable')}>
                        <DialogHeader title="Use Google's location service?" />

                        <DialogBody scrollable>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, incidunt. Debitis, repudiandae dignissimos et quam velit autem mollitia tenetur, eligendi rerum repellendus, explicabo ad aperiam vel ipsam! Exercitationem, voluptates molestiae.

                            Iusto reiciendis mollitia ab commodi. Animi maiores nesciunt officia enim corrupti officiis consequuntur vel, consectetur eveniet ad dolorum reprehenderit similique qui deleniti ut sed explicabo id error at. Laudantium, excepturi!

                            Suscipit quam laboriosam animi quasi similique voluptatem molestiae voluptas sint itaque, labore eos, maiores harum qui totam libero amet nisi? Similique nihil veritatis aspernatur molestias accusantium, eius dolorum autem optio?

                            Cum eligendi consequuntur voluptas. Repellat nisi commodi numquam aliquam quasi tenetur obcaecati, animi cum eum. Facilis esse cupiditate fugiat, quod eveniet, inventore impedit nam ex tempore harum laudantium provident assumenda.

                            Ut iste aperiam excepturi rerum consectetur illo officiis quo sed sunt labore earum soluta tempore omnis a, enim maiores non? Facilis qui alias sunt veniam esse hic. Aut, ducimus aliquid!

                            Qui quaerat saepe sunt earum nihil porro, sint quibusdam, id eos vero asperiores dolorem iusto dolore illo, architecto fuga? Voluptates distinctio eligendi nihil provident accusantium. Maxime ullam ratione officia non.

                            Molestiae sapiente quae nulla. Voluptates quibusdam numquam earum vero deserunt in, cum tenetur accusamus ipsum minus veniam libero quasi fuga dolorem laudantium error quo et accusantium neque vitae aliquam tempore.

                            Optio asperiores quisquam odit eaque incidunt laboriosam repudiandae ex eum iure quia, id vero atque perspiciatis, officiis quaerat aut ut dolorem libero eos perferendis ducimus! Veritatis nam libero tempora maxime?

                            Sapiente reiciendis quis eveniet iure dicta perferendis quos consectetur, soluta sunt, labore ipsam inventore maiores laudantium recusandae deleniti autem animi consequatur, voluptatem sint. Dignissimos minima labore earum vitae ad non!

                            Cum ex totam dolore officiis maiores quidem necessitatibus consequatur molestias culpa, quas, aperiam tempora et! Dolorem, voluptates dignissimos? Voluptatem voluptatibus expedita, error ducimus distinctio necessitatibus laudantium officiis dolorum nam vitae?
                        </DialogBody>

                        <DialogFooter>
                            <DialogButton cancel onClick={this.close('scrollable')}>Decline</DialogButton>
                            <DialogButton accept action onClick={this.close('scrollable')}>Accept</DialogButton>
                        </DialogFooter>
                    </Dialog>
                </section>
            </Layout>
        );
    }
}