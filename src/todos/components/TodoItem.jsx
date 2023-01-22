import { ActionIcon, Badge, Card, Group, Text } from "@mantine/core"
import { IconCursorText, IconSquareX } from "@tabler/icons"

export const TodoItem = ({ todo, isEditing, handleStartEditing, handleDone, handleDelete }) => {
  return (
    <>
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
            <ActionIcon variant="outline" color="blue" size={32} disabled={ isEditing } onClick={ () => handleStartEditing( todo ) } >
                <IconCursorText size={24} />
            </ActionIcon>
            <ActionIcon variant="outline" color="red" size={32} disabled={ isEditing } onClick={ () => handleDelete( todo ) } >
                <IconSquareX size={24} />
            </ActionIcon>
        </Group>
    </>
  )
}
