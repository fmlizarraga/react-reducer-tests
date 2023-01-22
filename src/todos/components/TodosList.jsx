import { ActionIcon, Badge, Card, Grid, Group, Text } from "@mantine/core";
import { IconCursorText, IconSquareX } from "@tabler/icons";
import { useTodos } from "../../hooks/useTodos";

import { TodoEdit } from "./TodoEdit";
import { TodoItem } from "./TodoItem";

export const TodosList = () => {

    const { 
        getInputProps, 
        handleSubmit, 
        editingId,
        isEditing, 
        handleStartEditing, 
        handleDone, 
        handleDelete, 
        todos 
    } = useTodos();
    

  return (
    <Grid>
        { todos.map( todo => (
            <Grid.Col
                key={ todo.id } 
                md={4}
            >
                <Card shadow="sm" p="lg" radius="md" withBorder >
                    { isEditing && editingId === todo.id
                        ? <TodoEdit handleSubmit={ handleSubmit } getInputProps={ getInputProps } />
                        : <TodoItem todo={ todo } isEditing={ isEditing } handleStartEditing={ handleStartEditing } handleDone={ handleDone } handleDelete={ handleDelete } />
                    }
                </Card>
            </Grid.Col>
        ))}
    </Grid>
  )
}
