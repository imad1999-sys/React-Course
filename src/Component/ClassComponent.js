import React, { Component } from 'react';

export default class ClassComponent extends Component {
    constructor () {
        super();
        this.inputRef = React.createRef();
    }
    run = () => {
        this.inputRef.current.focus();
        console.log(this.inputRef.current);
    }
    render(){
        return <div>
            <h1>Hi from class</h1>
            <input ref = {this.inputRef}/>
            <button onClick={this.run}>Run</button>
        </div>
    }
}