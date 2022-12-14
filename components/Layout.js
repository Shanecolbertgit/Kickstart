import react from 'react';
import { Container } from 'semantic=ui-react';
import Head from 'next/head';
import header from './header';

export default (props) => {
    return (
        <Container>
            <Head>
                <link
                    rel="stylesheet"
                    href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
                />
            </Head>

            <header />
            {props.children}
        </Container>
    );

};