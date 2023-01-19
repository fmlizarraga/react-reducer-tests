import { types } from "../types";

export const todosReducer = ( state = [], action ) => {
    switch (action.type) {
        case types.create: {
            return [...state, action.payload];
        }

        case types.edit: {
            const newState = [...state];
            newState.forEach(todo => {
                if (todo.id === action.payload.id) {
                    todo.description = action.payload.description;
                    todo.lastEdited = action.payload.lastEdited;
                    todo.isDone = action.payload.isDone;
                }
            });
            return newState;
        }

        case types.deleteById: {
            return state.filter(todo => todo.id !== action.payload);
        }
    
        default: {
            return state;
        }
    }
};