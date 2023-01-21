import { useReducer } from 'react'
import { reducers } from '../reducer';
import { AppContext } from './AppContext'
import todosActions from "../actions/todos"

const initTodos = () => {
  const todos = JSON.parse(localStorage.getItem('todos'));
  return todos || [];
};

export const AppProvider = ({ children }) => {

    const [ todosState, todosDispatch ] = useReducer( reducers.todos, [], initTodos );

  return (
    <AppContext.Provider value={{
        todosState: todosState,
        todosActions: todosActions(todosDispatch)
    }} >
        { children }
    </AppContext.Provider>
  )
}
