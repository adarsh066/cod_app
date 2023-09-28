import React from "react";
import {getTest,createTest} from "../../actions/TestAction";
import {connect}from "react-redux";
import PropTypes from "prop-types";
import withParam from "../commons/withParams";


class UpdateTestComponent extends React.Component{

    constructor(props){
        super(props);
        this.state={
            id:"",
            testName:"",
            testIdentifier:"",
            testdescription:"",
            test_start_date:"",
            test_end_date:""
        };
    }

    componentWillReceiveProps(nextProps){
        const {
            id,
            testName,
            testIdentifier,
            testdescription,
            test_start_date,
            test_end_date
        } = nextProps.test;

        this.setState({
            id,
            testName,
            testIdentifier,
            testdescription,
            test_start_date,
            test_end_date,
        })
    }

    componentDidMount(){
        const {id} = this.props.params;
        this.props.getTest(id);
    }
    onChange = (event)=>{
        this.setState({[event.target.name]:event.target.value});
       };

       onSubmit=(event)=>{
        event.preventDefault();
        const updatedTest={
            id:this.state.id,
            testName:this.state.testName,
            testIdentifier:this.state.testIdentifier,
            testdescription:this.state.testdescription,
            test_start_date:this.state.test_start_date,
            test_end_date:this.state.test_end_date,
        };
        this.props.createTest(updatedTest,this.props.navigate);
       };
    render(){
        return(
            <div className="project">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h5 className="display-4 text-center">Edit Test</h5>
                        <hr />
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input type="text"
                                 className="form-control form-control-lg "
                                  placeholder="Test Name" 
                                  name="testName"
                                  value={this.state.testName}
                                  onChange={this.onChange}
                                  />
                            </div>
                            <div className="form-group">
                                <input type="text"
                                className="form-control form-control-lg"
                                placeholder="Unique Test ID"
                                    disabled 
                                name="testIdentifier"
                                value={this.state.testIdentifier}
                                onChange={this.onChange}  
                                    />
                            </div>
                            {/* disabled for Edit Only!! remove "disabled" for the Create operation  */}
                            <div className="form-group">
                                <textarea className="form-control form-control-lg"
                                placeholder="Test Description"
                                name="testdescription"
                                value={this.state.testdescription}
                                onChange={this.onChange}
                                
                                ></textarea>
                            </div>
                            <h6>Start Date</h6>
                            <div className="form-group">
                                <input type="date" 
                                className="form-control form-control-lg" 
                                name="test_start_date"
                                value={this.test_start_date}
                                onChange={this.onChange}
                                />
                            </div>
                            <h6>Estimated End Date</h6>
                            <div className="form-group">
                                <input type="date" 
                                className="form-control form-control-lg" 
                                name="test_end_date" 
                                value={this.test_end_date}
                                onChange={this.onChange}
                                />
                            </div>
    
                            <input type="submit" className="btn btn-primary btn-block mt-4" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

UpdateTestComponent.propTypes = {
    getTest:PropTypes.func.isRequired,
    createTest:PropTypes.func.isRequired,

}

const mapStateToProps=(state)=>({
    test:state.tests.test,
});
export default connect(mapStateToProps,{getTest,createTest})
(withParam(UpdateTestComponent));