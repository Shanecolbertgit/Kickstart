import react from 'react';

export default (props) => {
    return (
        <div>
            <h1> Im a header</h1>
            {props.children}
        </div>
    );

};