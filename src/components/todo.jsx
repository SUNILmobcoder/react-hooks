import React from 'react';
import { ACTION } from '../TodoReducer';

export default function Todo({todo, dispatch}) {
    return (
        <div>
            <span style={{color: todo.complete ? "#aaa" : "#000"}}>{todo.name}, hello</span>
            <button onClick={() => dispatch({type: ACTION.TOGGLE_TODO, payload: { id: todo.id}})}>Toggle</button>
            <button onClick={() => dispatch({type: ACTION.DELETE_TODO, payload: { id: todo.id}})}>Delete</button>
        </div>
    )
}
