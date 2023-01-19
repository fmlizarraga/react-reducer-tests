import { create } from "./create";
import { edit } from "./edit";
import { setDone } from "./setDone";

const action = ( dispatch ) => {
    return {
        create: ( input ) => create( input, dispatch ),
        edit: ( input ) => edit( input, dispatch ),
        setDone: ( input ) => setDone( input, dispatch ),
    }
};

export default action;