import { useContext, useEffect, useState } from "react";
import { ActionIcon, Badge, Card, Grid, Group, Text, TextInput } from "@mantine/core";
import { IconCursorText, IconSquareCheck, IconSquareX } from "@tabler/icons";

import { AppContext } from "../../context/AppContext";
import { useForm } from "../../hooks/useForm";
import { useLocalStorage } from "@mantine/hooks";

export const TodosList = () => {

    const { todosState, todosActions } = useContext(AppContext);
    const [editing, setEditing] = useState({
        isEditing: false,
        editingId: 0
    });

    const { description, setFormState, onInputChange, onResetForm } = useForm({
        description: "",
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

    const handleDone = ( todo ) => {
        todosActions.setDone(todo);
    };

    const handleDelete = ( todo ) => {
        todosActions.deleteById(todo.id);
    };

    useEffect(() => {
        setLocalTodos(todosState);
    }, [todosState])
    

  return (
    <Grid>
        { todosState.map( todo => (
            <Grid.Col
                key={ todo.id } 
                md={4}
            >
                <Card shadow="sm" p="lg" radius="md" withBorder >
                    { editing.isEditing && editing.editingId === todo.id
                        ? (<Group mb="xs" mt="sm" >
                                <TextInput icon={ <IconCursorText size={14} /> } name="description" value={ description } onChange={ onInputChange } />
                                <ActionIcon variant="filled" color="green" size={32} onClick={ () => handleDoneEditing( todo ) } ><IconSquareCheck size={24} /></ActionIcon>
                            </Group>)
                        : (<>
                                    <Group onClick={ () => handleDone( todo ) } >
                                        <Text weight={500} >{ todo.description }</Text>
                                        <Badge color={ todo.isDone ? "green" : "red" } variant="light" >
                                            { todo.isDone ? "Done" : "Pending" }
                                        </Badge>
                                    </Group>
                                    <Group mt="md" >
                                        <ActionIcon variant="outline" color="blue" size={32} disabled={ editing.isEditing } onClick={ () => handleStartEditing( todo ) } >
                                            <IconCursorText size={24} />
                                        </ActionIcon>
                                        <ActionIcon variant="outline" color="red" size={32} disabled={ editing.isEditing } onClick={ () => handleDelete( todo ) } >
                                            <IconSquareX size={24} />
                                        </ActionIcon>
                                    </Group>
                            </>)}
                </Card>
            </Grid.Col>
        ))}
    </Grid>
  )
}
