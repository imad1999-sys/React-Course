import React, { Component, useState, useEffect } from 'react';

export class LoginFormClass extends Component {
    state = {
        email: '',
        password: '',
    }
    handleEmail = (e) => {
        this.setState({
            email: e.target.value,
        });
    }
    componentDidMount() {
        console.log('class component did mount');
    }
    componentDidUpdate(prevState , prevProps) {
        if(prevState.email != this.state.email){
            console.log('class component email did update');
        }
        console.log('class component did update');
    }
    componentWillUnmount() {
        console.log('class component will unmount');
    }
    componentWillUpdate() {
        console.log('class component will update');
    }
    handlePassword = (e) => {
        this.setState({
            password: e.target.value,
        });
    }
    render() {
        return <div>
            <h2>Class Example</h2>
            <input value={this.state.email} onChange={this.handleEmail} />
            <input value={this.state.password} onChange={this.handlePassword} />
        </div>
    }
}

export function LoginFormFunction() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        console.log('function component will mount');
        return () => {
            console.log('function component will unmount');
        }
    }, []);

    useEffect(() => {
        if (email === '')
            return;
        console.log('function component email will update');
    }, [email]);


    function handleEmail(e) {
        setEmail(e.target.value);
    }
    function handlePassword(e) {
        setPassword(e.target.value);
    }
    return <div>
        <h2>Function Example</h2>
        <input value={email} onChange={handleEmail} />
        <input value={password} onChange={handlePassword} />
    </div>
}