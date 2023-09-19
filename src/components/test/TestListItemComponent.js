import React from "react";

class TestListItemComponent extends React.Component{
    render(){
        return(

            <div className="container">
            <div className="card card-body bg-light mb-3">
                <div className="row">
                    <div className="col-2">
                        <span className="mx-auto">JT01</span>
                    </div>
                    <div className="col-lg-6 col-md-4 col-8">
                        <h3>{this.props.testName}</h3>
                        <p>Java Test On OOPs Concept</p>
                    </div>
                    <div className="col-md-4 d-none d-lg-block">
                        <ul className="list-group">
                            {/* <a href="#">
                                <li className="list-group-item board">
                                    <i className="fa fa-flag-checkered pr-1">Project Board </i>
                                </li>
                            </a> */}
                            <a href="#">
                                <li className="list-group-item update">
                                    <i className="fa fa-edit pr-1">Update Test</i>
                                </li>
                            </a>
                            <a href="">
                                <li className="list-group-item delete">
                                    <i className="fa fa-minus-circle pr-1">Delete Test</i>
                                </li>
                            </a>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        );
    }
}
export default TestListItemComponent;