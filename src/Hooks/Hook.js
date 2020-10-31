
import React , { useState , useMemo } from "react";
const randomColor = () => '#' + (Math.random * 0xFFFFFF<<0).toString(16);
function Hook() {
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [age, setAge] = useState('');
    const FullName = useMemo( 
        () => <div style={{color : randomColor()}}> {firstName} {lastName} {age}</div> 
        , [firstName , lastName , age] );

    return (
        <div>
            FullName : {FullName}
            <input value={firstName} placeholder="Enter FirstName" onChange={(e => setfirstName(e.target.value))} />
            <input value={lastName} placeholder="Enter LastName" onChange={(e => setlastName(e.target.value))} />
            <input value={age} placeholder="Enter Age" onChange={(e => setAge(e.target.value))} />
        </div>
    );
}
export default Hook;