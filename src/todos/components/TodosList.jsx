import { useContext, useEffect, useState } from "react";
import { ActionIcon, Badge, Card, Grid, Group, Text, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconCursorText, IconSquareCheck, IconSquareX } from "@tabler/icons";

import { AppContext } from "../../context/AppContext";
import { useLocalStorage } from "@mantine/hooks";

export const TodosList = () => {

    const { todosState, todosActions } = useContext(AppContext);
    const [editing, setEditing] = useState({
        isEditing: false,
        editingId: 0
    });

    const { getInputProps, onSubmit, reset:resetForms, setValues:setFormState } = useForm({
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
    };


    const handleDoneEditing = ( { description }, todo ) => {
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
                        ? ( <form onSubmit={ onSubmit((value)=>handleDoneEditing(value,todo)) } >
                                <Group mb="xs" mt="sm" >
                                    <TextInput icon={ <IconCursorText size={14} /> } name="description" { ...getInputProps('description') } />
                                    <ActionIcon type="submit" variant="filled" color="green" size={32} ><IconSquareCheck size={24} /></ActionIcon>
                                </Group>
                            </form>)
                        : (<>
                                    <Group onClick={ () => handleDone( todo ) } >
                                        <Text size="xl" weight={500} >{ todo.description }</Text>
                                        <Badge color={ todo.isDone ? "green" : "red" } variant="light" >
                                            { todo.isDone ? "Done" : "Pending" }
                                        </Badge>
                                    </Group>
                                    <Card.Section px="lg" >
                                        <Text size="xs" color="dimmed" >
                                            Created: { new Date(todo.created).toLocaleString() }
                                        </Text>
                                        <Text size="xs" color="dimmed" >
                                            Last edited: { new Date(todo.lastEdited).toLocaleString() }
                                        </Text>
                                    </Card.Section>
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
