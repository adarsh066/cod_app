import React from "react";
import TestListItemComponent from "./TestListItemComponent";
// import '../test/TestListComponent.css';

class TestListComponent extends React.Component{
   constructor(){
    super();
    this.state={
        testName:"Dummy Test",

    }
   }
    render(){
        return(
            
            <div className="projects">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="display-4 text-center">Test List</h1>
                        <br />
                       
                        <br />
                        <hr />
    
                        
                            <TestListItemComponent testName={this.state.testName}/>
                        
    
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default TestListComponent;

