import { types } from "../../types";

export const create = ( input = {}, dispatch ) => {
    dispatch({
        type: types.create,
        payload: {
            id: new Date().valueOf(),
            description: input.description,
            created: new Date(),
            lastEdited: new Date(),
            isDone: false
        }
    });
};