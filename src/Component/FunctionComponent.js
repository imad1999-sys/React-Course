import React, { useState, useEffect } from 'react';

export default function FunctionComponent () {
    const [fName , setFname] = useState('');
    const [lName , setLname] = useState('');
    const fNameRef = React.useRef();
    const lNameRef = React.useRef();
    const buttonRef = React.useRef();
    useEffect ( () => {
        fNameRef.current.focus();
    } , [] );
    function onFirstInputKey (e) {
        console.log(e.key);
        if(e.key === 'Enter'){
            lNameRef.current.focus();
        }
    }
    function onLastInputKey (e) {
        console.log(e.key);
        if(e.key === 'Enter'){
            buttonRef.current.focus();
        }
    }
    function run () {
        console.log({fName , lName});
    }
    return <div>
        Hi From Function
        <input ref = {fNameRef} onKeyDown={onFirstInputKey} placeholder="firstName" value={fName} onChange={ (e) => setFname(e.target.value)}></input>
        <input ref = {lNameRef} onKeyDown={onLastInputKey} placeholder="lastName" value={lName} onChange={ (e) => setLname(e.target.value)}></input>
        <button ref = {buttonRef} onClick={run}>Save</button>
    </div>
}