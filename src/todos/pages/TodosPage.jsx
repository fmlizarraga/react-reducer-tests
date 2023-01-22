import { Container, createStyles, Flex } from "@mantine/core";
import { AppHeader } from "../components/AppHeader";
import { TodosAdd } from "../components/TodosAdd";
import { TodosList } from "../components/TodosList";

const useStyles = createStyles( theme => ({
  root: {
    position: 'absolute',
    padding: 0,
    margin: 0,
    minHeight: "100%",
    maxHeight: "100vp",
    width: "100%",
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
  },
  
  inner: {
    padding: 0,
    margin: 8,
    position: 'relative',
    height: '100%',
  },

  content: {
    margin: theme.spacing.sm,
    position: 'relative',
  }

}) );

export const TodosPage = () => {

  const { classes } = useStyles();
  
  return (
    <Flex
      className={ classes.root }
      gap="md"
      justify="stretch"
      align="stretch"
      direction="column"
      wrap="wrap"
    >
      <div className={classes.inner} >
        <AppHeader/>
        <div className={classes.content} >
          <TodosAdd/>
          <TodosList/>
        </div>
      </div>
    </Flex>
  )
}
