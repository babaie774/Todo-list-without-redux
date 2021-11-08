import React from 'react'
import { AddTodoAction } from '../../Actions/TodoActions'
import TodoDispatchContext from '../../Contexts/TodoDispatchContext'


export default function AddTodoForm() {
    const [valueInput, setValueInput] = React.useState('')

    const TodoDispatchContexts = React.useContext(TodoDispatchContext)

    const HandleInputValue = (e: React.ChangeEvent) => {
        const Target = e.target as HTMLInputElement
        setValueInput(Target.value)
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        TodoDispatchContexts(AddTodoAction(valueInput))
        setValueInput('')
    }




    return (
        <form onSubmit={(event) => { handleSubmit(event) }} action="javascript:void(0);">
            <input type="text" value={valueInput} onChange={(event) => { HandleInputValue(event) }} className="form-control add-task" placeholder="New Task..." />
        </form>
    )
}