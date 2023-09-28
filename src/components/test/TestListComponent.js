import React from "react";
import TestListItemComponent from "./TestListItemComponent";
// import '../test/TestListComponent.css';
import { getTests } from "../../actions/TestAction";
import {connect} from "react-redux";
import PropTypes from "prop-types";

class TestListComponent extends React.Component{
 componentDidMount(){
    this.props.getTests();
 }
   
    render(){
        const {tests} = this.props.tests;
        return(
            
            <div className="projects">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        {/* <h1 className="display-4 text-center">Test List</h1> */}
                        <br/>
                        <br/>
                        <h1 className="text-body-secondary font-weight-bold text-center">Test List</h1>
                        <br />
                       
                      
                        
    
                        {tests.map((test)=>(
                            <TestListItemComponent key={test.id} test={test}/>
                        ))}
                            
                        
    
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

TestListComponent.propTypes={
    getTests:PropTypes.func.isRequired,
}

const mapStateToProps=(state)=>({
    tests:state.tests,
})
export default connect(mapStateToProps,{getTests})(TestListComponent);

