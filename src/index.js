import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
    <ApprovalCard>
      <CommentDetail
        author="Peter"
        text="I'm a panda"
        timeAgo="3:00PM"
        avatar={faker.image.avatar()}
      />
    </ApprovalCard>
    <ApprovalCard>
      <CommentDetail
        author="Michelle"
        text="I'm tired"
        timeAgo="4:00PM"
        avatar={faker.image.avatar()}
      />
    </ApprovalCard>
    <ApprovalCard>
        <CommentDetail
        author="Demi"
        text="Why can't I watch Legacies?"
        timeAgo="5:00PM"
        avatar={faker.image.avatar()}
      />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
