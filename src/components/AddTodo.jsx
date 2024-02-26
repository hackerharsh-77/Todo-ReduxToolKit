import React from 'react'
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'



function AddTodo() {
    const [input,setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e)=>{
        e.preventDefault();
        dispatch(addTodo(input))
        setInput('')
    }
  return (
    <div>
        <form onSubmit={addTodoHandler} className='space-x-mt-12'>
            <input type="text" placeholder='enter todo...' value={input} onChange={(e)=>{setInput(e.target.value)}} />
            <button type="submit">Add</button>
        </form>
    </div>
  )
}

export default AddTodo