import { useReducer } from 'react'
import { reducers } from '../reducer';
import { AppContext } from './AppContext'
import todosActions from "../actions/todos"

export const AppProvider = ({ children }) => {

    const [ todosState, todosDispatch ] = useReducer( reducers.todos, [] );

  return (
    <AppContext.Provider value={{
        todosState: todosState,
        todosActions: todosActions(todosDispatch)
    }} >
        { children }
    </AppContext.Provider>
  )
}
