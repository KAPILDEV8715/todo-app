'use client'

import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

const Todo_context = createContext(null)

function context({ children }) {

    let [count, setCount] = useState(0)
    return (
        <Todo_context.Provider value={{ count, setCount }}>
            {children}
        </Todo_context.Provider>
    )
}

export default context;
export { Todo_context }