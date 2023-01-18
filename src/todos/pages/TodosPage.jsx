import { TodosAdd } from "../components/TodosAdd"
import { TodosList } from "../components/TodosList"

export const TodosPage = () => {


  return (
    <>
        <h1>TodosPage</h1>
        <hr />

        <TodosList/>

        <TodosAdd/>
    </>
  )
}
