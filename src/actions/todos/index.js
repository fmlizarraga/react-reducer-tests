import { create } from "./create";
import { deleteById } from "./deleteById";
import { edit } from "./edit";
import { setDone } from "./setDone";

const action = ( dispatch ) => {
    return {
        create: ( input ) => create( input, dispatch ),
        edit: ( input ) => edit( input, dispatch ),
        setDone: ( input ) => setDone( input, dispatch ),
        deleteById: ( id ) => deleteById( id, dispatch ),
    }
};

export default action;