import { types } from "../../types";

export const edit = ( input = {}, dispatch ) => {
    dispatch({
        type: types.edit,
        payload: {
            ...input,
            lastEdited: new Date(),
        }
    });
};