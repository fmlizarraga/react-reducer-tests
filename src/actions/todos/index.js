import { create } from "./create";

const action = ( dispatch ) => {
    return {
        create: ( input ) => create( input, dispatch ),
    }
};

export default action;