import { MantineProvider } from '@mantine/core'
import { AppProvider } from './context/AppProvider'
import { TodosPage } from './todos/pages/TodosPage'

export const MyApp = () => {
  return (
    <MantineProvider
      theme={{
        // Override any other properties from default theme
        fontFamily: 'Open Sans, sans serif',
        spacing: { xs: 15, sm: 20, md: 25, lg: 30, xl: 40 },
        colorScheme: 'dark'
      }}
    >
      <AppProvider>
        <TodosPage/>
      </AppProvider>
    </MantineProvider>
  )
}
