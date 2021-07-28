import React, { useEffect, useState } from 'react'

export default function List({ getItem }) {
    const [items, setItems] = useState([])

    useEffect(() => {
        console.log("Updating Items")
        setItems(getItem())
    },[getItem])
    return items.map(item => <div key={item}>{item}</div>)
}