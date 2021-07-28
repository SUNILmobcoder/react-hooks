import React from 'react';

import usestate from './pic/useState.png';

import usecontext from './pic/useContext.png';
import contextClass from './pic/contextClass.png';
import contextFunction from './pic/contextFunction.png';

import usereducer from './pic/useReducer.png';
import usereducertodo from './pic/useReducerTodo.png';
import reducertodo from './pic/reducerTodo.png';

import usecallback from './pic/useCallback.png';
import usememo from './pic/useMemo.png';
import useref from './pic/useRef.png';



export default function ImageRef() {
    return (
        <div>
            <h1>useState</h1>
            <img src={usestate} alt="useState" />

            <h1>useContext</h1>
            <img src={usecontext} alt="useContext" />
            <img src={contextClass} alt="contextClass" />
            <img src={contextFunction} alt="contextFunction" />

            <h1>useReducer</h1>
            <img src={usereducer} alt="usereducer" />
            <img src={usereducertodo} alt="usereducertodo" />
            <img src={reducertodo} alt="reducertodo" />

            <h1>useMemo</h1>
            <img src={usememo} alt="useMemo" />

            <h1>useCallback</h1>
            <img src={usecallback} alt="useCallback" />

            <h1>useRef</h1>
            <img src={useref} alt="useRef" />
        </div>
    )
}
