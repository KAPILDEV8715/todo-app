'use client'
import React, { useContext } from 'react'
import { Todo_context } from '../../../component/context'
import context from '../../../component/context'


function index() {
    return (
        <Todo_context>
            <counter />
        </Todo_context>
    )
}



export function counter() {
    let data = useContext(context)
    console.log(data);
    return <>
        sample
    </>
}


export default index
