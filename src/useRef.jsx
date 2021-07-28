import React, { useState, useEffect, useRef } from 'react'

export default function USEREF() {
    const [name, setName] = useState('');
    const renderCount = useRef(0);
    const inputRef = useRef();
    const prevName = useRef('');

    useEffect(() => {
        renderCount.current += 1;
    })
    useEffect(() => {
        prevName.current = name;
    },[name])
    function focus() {
        inputRef.current.focus();
    }
    return (
        <>
            <input ref={inputRef} value={name} onChange={e => setName(e.target.value)} />
            <div>My name is {name} and used to be {prevName.current}</div>
            <button onClick={focus}>Focus</button>
            <div>I render {renderCount.current} times</div>
        </>
    )
}
