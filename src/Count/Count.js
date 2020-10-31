import React, { useReducer } from "react";

function countReducer(state, action) {
    if (action.type === 'INCREMENT') {
        return {count: state.count + action.payload};
    }
    if (action.type === 'DECREMENT') {
        return {count: state.count - action.payload};
    }
    if (action.type === 'RESET') {
        return {count: action.payload};
    }
    throw new Error(action + ' is not defined in useReducer');
}
export default function Count() {
    const [state, dispatch] = useReducer(countReducer, {count : 0});
    return (
        <div>
            Count : {state.count}
            <button onClick={() => dispatch({type:'INCREMENT' , payload : 2})}>
                Increment
            </button>
            <button onClick={() => dispatch({type:'DECREMENT', payload: 4})}>
                Decrement
            </button>
            <button onClick={() => dispatch({type:'RESET' , payload : 0})}>
                Reset
            </button>
        </div>

    );
}