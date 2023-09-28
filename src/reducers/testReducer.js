import { DELETE_TEST, GET_TEST, GET_TESTS } from "../actions/types"
const initialState={
    tests:[]
}
export default function(state=initialState,action){
    
    switch(action.type){
        case GET_TESTS:
            return{
                ...state,
                tests:action.payload,
            };
        case GET_TEST:
            return{
                ...state,
                test:action.payload,
            };
        case DELETE_TEST:
            return{
                ...state,
                tests:state.tests.filter(
                    (test)=>test.testIdentifier!=action.payload

                ) 
            }
            default:
                return state;
    }
}