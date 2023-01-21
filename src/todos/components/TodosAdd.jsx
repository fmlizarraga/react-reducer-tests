import { useContext } from "react";
import { ActionIcon, createStyles, Flex, SimpleGrid, TextInput, Title } from "@mantine/core";
import { IconClipboardList, IconSquarePlus } from "@tabler/icons";

import { AppContext } from "../../context/AppContext";
import { useForm } from "../../hooks/useForm";

const useStyles = createStyles( ( theme ) => ({
    button: {
        backgroundColor: theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background,
    }
}));

export const TodosAdd = () => {

    const { classes } = useStyles();

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
    <SimpleGrid cols={1} >
        <div>
            <Title order={3} >Add a new ToDo!</Title>
        </div>
        <div>
            <form onSubmit={ handleNewTodo } >
                <Flex
                    mih={50}
                    gap="sm"
                    justify="flex-start"
                    align="center"
                    direction="row"
                    wrap="wrap"
                >
                    <TextInput placeholder="I have to..." icon={ <IconClipboardList size={14} /> } name="description" value={ description } onChange={ onInputChange } />
                    <ActionIcon type="submit" variant="filled" size={36} className={ classes.button } ><IconSquarePlus size={24} /></ActionIcon>
                </Flex>
            </form>
        </div>
    </SimpleGrid>
  )
}
