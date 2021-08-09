import React from 'react';

class LifeCycle extends React.Component {
    constructor(props) {
        super(props);
        console.log("constructor()");
    }

    componentDidMount() {
        // called after the component is mounted
        console.log("componentDidMount()");
    }

    componentWillUnmount() {
        // called before component is removed from DOM
        console.log("componentWillUnmount()");
    }

    componentDidUpdate() {
        // called when the component is updated. Wont be call when initializing
        console.log("componentDidUpdate()");
    }

    shouldComponentUpdate(nextProps, nextState){
        // called when this.props or this.state changes, before render
        // returns boolean, meaning whether render should be executed
        // if false then the UI wont be updated
        // true by default
        // wont be called when render is executed for the first time
        console.log("shouldComponentUpdate()");
    }

    render() {
        return (
            <div>
                <h1>React Life Cycle!</h1>
            </div>
        );
    }
}

export default LifeCycle;