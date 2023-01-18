import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { useForm } from "../../hooks/useForm"

export const TodosAdd = () => {

    const { todosActions } = useContext( AppContext );

    const { description, onInputChange, onResetForm } = useForm({
        description: ""
    });

    const handleNewTodo = (event) => {
        event.preventDefault();

        todosActions.create({
            description: description,
        });
        onResetForm();
    };

  return (
    <form onSubmit={ handleNewTodo } >
        <h3>Add a new todo</h3>
        <hr />

        <input
            type="text"
            name="description"
            value={ description }
            onChange={ onInputChange }
        />

        <button
            type="submit"
        >
            Add
        </button>
    </form>
  )
}
