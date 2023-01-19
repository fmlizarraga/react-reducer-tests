import { create } from "./create";
import { edit } from "./edit";

const action = ( dispatch ) => {
    return {
        create: ( input ) => create( input, dispatch ),
        edit: ( input ) => edit( input, dispatch ),
    }
};

export default action;