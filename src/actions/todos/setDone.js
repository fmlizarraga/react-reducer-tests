import { types } from "../../types";

export const setDone = ( input = {}, dispatch ) => {
    dispatch({
        type: types.edit,
        payload: {
            ...input,
            isDone: input.isDone,
        }
    });
};