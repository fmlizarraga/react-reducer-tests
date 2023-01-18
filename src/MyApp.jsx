import { AppProvider } from './context/AppProvider'
import { TodosPage } from './todos/pages/TodosPage'

export const MyApp = () => {
  return (
    <AppProvider>
      <TodosPage/>
    </AppProvider>
  )
}
