import React from 'react';

const HelloWorld = (props) => {
    return (
        <div>
            name = {props.name};
            content = {props.children}
        </div>
    );
}

export default HelloWorld;