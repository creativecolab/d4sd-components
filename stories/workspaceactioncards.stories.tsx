import { storiesOf } from "@storybook/react";
import * as React from "react";
import { WorkspaceActionCard } from "../components/WorkspaceActionCard";
import {message} from "../";
const cards = [
  {title:"Discover a Challenge", desc:"Submit your problem description and solution proposal here", closed:false, buttonTitle:"JOIN DISCUSSION", buttonHandleClick:() => {
    message.success("Action clicked");
  }},
  {title:"Register your Team", desc: "Learn about the challenges surrounding San Diego", closed:false,dueDate: new Date("01/25/2020, 11:59:00 PM"), submitted:true, buttonTitle:"SEARCH FOR TEAMMATES"},
  {title:"Submit a Preliminary Concept", desc:"Submit your problem description and solution proposal here", closed:false, dueDate: new Date("12/12/2019, 11:59:00 PM"), submitted:false, buttonTitle:"SOMETHING"},
  {title: "Request and Provide Feedback", desc:"Feedback will be available once you’ve made a submission", closed:true, dueDate: new Date("12/18/2019, 11:59:00 PM"), submitted:false},
  {title: "Submit Your Team’s Final Concept", desc:"Final submission will be available once you’ve made a submission", closed:true, dueDate: new Date("12/24/2019, 11:59:00 PM"), submitted:false},
  {title:"View Community Voting Results", desc:"Judging will be available at the end of the competition", closed:true, dueDate: new Date("01/24/2020, 11:59:00 PM"), submitted:false}
]
storiesOf("Workspace Action Cards", module).add("Examples", () => (
  <div className="storycontainer">
    <div className="story-module" style={{marginTop:"50px"}}>
      {cards.map((card) => {
        return (
          <div><WorkspaceActionCard card={card} /></div>
        )
      })}
    </div>
  </div>
));
