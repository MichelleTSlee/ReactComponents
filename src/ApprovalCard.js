import React from "react";

//White card with two buttons
//Need to show Comment details in this card (but if reused this component could swap this out and put something else in)


const ApprovalCard = (props) => {
 return (
   <div className ="ui card">
    <div className="content">{props.children} </div>
    <div className="extra content">
    <div className="ui two buttons">
      <div className="ui basic green button">Approve</div>
      <div className="ui basic red button">Reject</div>
    </div>
    </div>
    </div>
  );
};


export default ApprovalCard;
