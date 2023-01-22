import { ActionIcon, Group, TextInput } from "@mantine/core"
import { IconCursorText, IconSquareCheck } from "@tabler/icons"

export const TodoEdit = ({ handleSubmit, getInputProps }) => {

  return (
    <>
        <form onSubmit={ handleSubmit } >
            <Group mb="xs" mt="sm" >
                <TextInput icon={ <IconCursorText size={14} /> } name="description" { ...getInputProps('description') } />
                <ActionIcon type="submit" variant="filled" color="green" size={32} ><IconSquareCheck size={24} /></ActionIcon>
            </Group>
        </form>
    </>
  )
}
