import react from 'react';
import { Container } from 'semantic=ui-react';
import header from './header';

export default (props) => {
    return (
        <Container>
            <header />
            {props.children}
        </Container>
    );

};