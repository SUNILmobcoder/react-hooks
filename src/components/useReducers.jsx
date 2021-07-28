import React, { useReducer } from 'react';

const ACTION = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement'
}

function reducer(state, action) {
    switch(action.type) {
        case ACTION.INCREMENT:
            return {count : state.count + 1}
        case ACTION.DECREMENT:
            return {count : state.count - 1}
        default:
            return state
    }
}


export default function UseReducers({ name }) {
    const [state, dispatch] = useReducer(reducer, { count: 0})

    function decrementCount() {
        dispatch({type: ACTION.DECREMENT })
    }
    function incrementCount() {
        dispatch({type: ACTION.INCREMENT })
    }
    return (
        <>
            <button onClick={decrementCount}>-</button>
            <span>{state.count}</span>
            <button onClick={incrementCount}>+</button>
        </>
    )
}
