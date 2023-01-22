import { useContext } from "react";
import { ActionIcon, createStyles, Flex, Group, SimpleGrid, TextInput, Title } from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconClipboardList, IconSquarePlus } from "@tabler/icons";

import { AppContext } from "../../context/AppContext";

const useStyles = createStyles( ( theme ) => ({
    root: {
        padding: 0,
    },
    button: {
        backgroundColor: theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background,
    },
}));

export const TodosAdd = () => {

    const { classes } = useStyles();

    const { todosActions } = useContext( AppContext );

    const { getInputProps, onSubmit, reset: resetForms } = useForm({
        initialValues: {
            description: '',
        },

        validate: {
            description: ( value ) => ( value.length < 3 ? 'Description must have at least 3 lettrs.' : null ),
        }
    });

    const handleNewTodo = ({ description }) => {
        todosActions.create({
            description: description,
        });
        resetForms();
    };

  return (
    <SimpleGrid className={ classes.root } cols={1} mb="md" >
        <div>
            <Title order={3} color="white" >Add a new ToDo!</Title>
        </div>
        <div>
            <form onSubmit={ onSubmit(handleNewTodo) } >
                    <Group>
                        <TextInput placeholder="I have to..." icon={ <IconClipboardList size={14} /> } label="Description" name="description" {...getInputProps('description')} />
                        <ActionIcon mt={14} type="submit" variant="filled" size={48} className={ classes.button } ><IconSquarePlus size={32} /></ActionIcon>
                    </Group>
            </form>
        </div>
    </SimpleGrid>
  )
}
