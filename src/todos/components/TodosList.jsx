import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { useForm } from "../../hooks/useForm";

export const TodosList = () => {

    const { todosState, todosActions } = useContext(AppContext);
    const [editing, setEditing] = useState({
        isEditing: false,
        editingId: 0
    });

    const { description, setFormState, onInputChange, onResetForm } = useForm({
        description: "",
    });

    const handleStartEditing = ( todo ) => {
        setEditing({
            isEditing: true,
            editingId: todo.id
        });
        setFormState({
            description: todo.description
        });
    };


    const handleDoneEditing = ( todo ) => {
        const editedTodo = {
            ...todo,
            description: description,
        }
        todosActions.edit(editedTodo);
        setEditing({
            isEditing: false,
            editingId: 0
        });
    };

  return (
    <ul>
        { todosState.map( todo => (<li 
            key={ todo.id } 
        >
            { editing.isEditing && editing.editingId === todo.id
                ? (<>
                    <input type="text" name="description" value={ description } onChange={ onInputChange } />
                    <button onClick={ () => handleDoneEditing(todo) } >Done</button>
                </>)
                : (<span>{ todo.description }</span>)
            }
            <button onClick={ () => handleStartEditing(todo) } hidden={ editing.isEditing } >
                Edit
            </button>
            <button hidden={ editing.isEditing } >
                Delete
            </button>
        </li>) ) }
    </ul>
  )
}
