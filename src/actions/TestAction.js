import axios from "axios";
import {GET_ERRORS,GET_TESTS,DELETE_TEST,GET_TEST} from "./types";



export const createTest = (test,navigate)=>async(dispatch)=>{
    try{
        const res = await axios.post("http://localhost:8080/api/tests",test);
        navigate("/listTest");
    }catch(error){
        dispatch({
            type:GET_ERRORS,
            payload:error.response.data,
        });
    }
}

export const getTests = () => async(dispatch)=>{
    const res = await axios.get("http://localhost:8080/api/tests/all");
    
       dispatch({
        type:GET_TESTS,
        payload:res.data,
       });
    
};

export const deleteTest = (id) => async(dispatch)=>{

    if(window.confirm("Are you sure? This will delete the test and the data releated to it.")){
        const res = await axios.delete(`http://localhost:8080/api/tests/${id}`);

    dispatch({
        type:DELETE_TEST,
        payload:id,

    })
    }
    

}

export const getTest = (id) => async(dispatch)=>{
    const res = await axios.get(`http://localhost:8080/api/tests/${id}`);
    dispatch({
        type:GET_TEST,
        payload:res.data,
    });
};