import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { useForm } from "../../hooks/useForm";

export const TodosList = () => {

    const { todosState, todosActions } = useContext(AppContext);
    const [isEditing, setIsEditing] = useState(false);

    const { description, setFormState, onInputChange, onResetForm } = useForm({
        description: "",
    });

    const handleStartEditing = ( todo ) => {
        setIsEditing(true);
        setFormState({
            description: todo.description
        });
    };


    const handleDoneEditing = ( todo ) => {
        editedTodo = {
            ...todo,
            description: description,
        };
    };

  return (
    <ul>
        { todosState.map( todo => (<li 
            key={ todo.id } 
        >
            { isEditing 
                ? (<>
                    <input type="text" name="description" value={ description } onChange={ onInputChange } />
                    <button>Done</button>
                </>)
                : (<span>{ todo.description }</span>)
            }
            <button onClick={ () => handleStartEditing(todo) } >
                Edit
            </button>
            <button>
                Delete
            </button>
        </li>) ) }
    </ul>
  )
}
