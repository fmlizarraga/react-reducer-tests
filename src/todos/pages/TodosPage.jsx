import { AppHeader } from "../components/AppHeader"
import { TodosAdd } from "../components/TodosAdd"
import { TodosList } from "../components/TodosList"

export const TodosPage = () => {


  return (
    <>
        {/* <NavbarMinimal/> */}

        <AppHeader/>

        <TodosList/>

        <TodosAdd/>
    </>
  )
}
