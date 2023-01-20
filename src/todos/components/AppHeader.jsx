import { Container, createStyles, Header, Title } from "@mantine/core"
import { IconClipboardCheck } from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  header: {
    backgroundColor: theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background,
    borderBottom: 0,
    borderRadius: 5,
  },

  inner: {
    height: 56,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.white,
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background,
        0.1
      ),
    },
  },

  linkLabel: {
    marginRight: 5,
  },
}));

export const AppHeader = () => {
  const { classes } = useStyles();
  return (
    <Header
      height={56}
      className={ classes.header }
      mb={60}
    >
      <Container>
        <div className={ classes.inner } >
          <Title order={3} color="white" ><IconClipboardCheck size={24} /> My ToDo's</Title>
        </div>
      </Container>
    </Header>
  )
}
