import { useContext, useEffect, useState } from "react";
import { useLocalStorage } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import { AppContext } from "../context/AppContext";

export const useTodos = () => {

  const { todosState, todosActions } = useContext(AppContext);

  const [editing, setEditing] = useState({
      isEditing: false,
      editingId: 0
  });

  const [targetTodo, setTargetTodo] = useState({});

  const { getInputProps, onSubmit, setValues:setFormState } = useForm({
      initialValues: {
          description: '',
      },
      validate: {
          description: ( value ) => ( value.length < 3 ? 'Description must have at least 3 lettrs.' : null ),
      }
  });

  const [ localTodos, setLocalTodos ] = useLocalStorage({ key: 'todos', defaultValue: [] });

  const handleStartEditing = ( todo ) => {
    setEditing({
        isEditing: true,
        editingId: todo.id
    });
    setFormState({
        description: todo.description
    });
    setTargetTodo(todo);
  };

  const handleSubmit = onSubmit((value)=>handleDoneEditing(value));

  const handleDoneEditing = ( { description } ) => {
      const editedTodo = {
          ...targetTodo,
          description: description,
      }
      todosActions.edit(editedTodo);
      setEditing({
          isEditing: false,
          editingId: 0
      });
  };

  const handleDone = ( todo ) => todosActions.setDone(todo);

  const handleDelete = ( todo ) => todosActions.deleteById(todo.id);

  useEffect(() => {
      setLocalTodos(todosState);
  }, [todosState]);

  return {
    ...editing,
    handleStartEditing,
    handleDone,
    handleDelete,
    handleSubmit,
    getInputProps,
    todos: todosState
  };
}
