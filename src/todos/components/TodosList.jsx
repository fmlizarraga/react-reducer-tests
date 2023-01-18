import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export const TodosList = () => {

    const { todosState } = useContext(AppContext);

  return (
    <ul>
        { todosState.map( todo => (<li 
            key={ todo.id } 
        >
            <span>
                { todo.description }
            </span>
            <button>
                Delete
            </button>
        </li>) ) }
    </ul>
  )
}
