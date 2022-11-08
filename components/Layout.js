import react from 'react';
import header from './header';

export default (props) => {
    return (
        <div>
            <header />
            {props.children}
        </div>
    );

};