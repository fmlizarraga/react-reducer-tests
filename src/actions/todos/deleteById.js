import { types } from "../../types";

export const deleteById = ( itemId = 0, dispatch ) => {
    dispatch({
        type: types.deleteById,
        payload: itemId
    });
};