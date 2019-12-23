import { storiesOf } from "@storybook/react";
import * as React from "react";
import { WorkspaceActionCard } from "../components/WorkspaceActionCard";
import {message} from "../";
const cards = [
  {title:"Discover a Challenge", desc:"Submit your problem description and solution proposal here", closed:false,shortDesc: "Something here goes here ... ",active:true, buttonHandleClick:() => {
    message.success("Action clicked");
  }},
  {title:"Register your Team", desc: "Learn about the challenges surrounding San Diego", closed:false,dueDate: new Date("01/25/2020, 11:59:00 PM"),startDate: new Date("12/16/2019, 11:59:00 PM"), submitState:"submitted", buttonTitle:"SEARCH FOR TEAMMATES", active:true, buttonHandleClick:() => {
    message.success("HELLO");
  }},
  {title:"Submit a Preliminary Concept", desc:"Submit your problem description and solution proposal here", shortDesc: "Something here goes here ... ",active:false, closed:false, dueDate: new Date("02/03/2020, 11:59:00 PM"),startDate: new Date("12/01/2019, 11:59:00 PM"),submitState:"saved", buttonTitle:"SOMETHING"},
  {title: "Request and Provide Feedback", desc:"Feedback will be available once you’ve made a submission", closed:false, dueDate: new Date("02/02/2020, 11:59:00 PM"), startDate: new Date("12/16/2019, 11:59:00 PM"), submitState:"none", feedbacklink:"https://www.bing.com"},
  {title: "Request and Provide Feedback 2", desc:"Feedback will be available once you’ve made a submission", closed:false, dueDate: new Date("02/02/2020, 11:59:00 PM"), startDate: new Date("12/16/2019, 11:59:00 PM"), submitState:"waitForFeedback", feedbacklink:"https://www.bing.com"},
  {title: "Request and Provide Feedback 3", desc:"Feedback will be available once you’ve made a submission", closed:false, dueDate: new Date("02/02/2020, 11:59:00 PM"), startDate: new Date("12/16/2019, 11:59:00 PM"), submitState:"feedback", feedback:3, feedbacklink:"https://www.bing.com"},
  {title: "Request and Provide Feedback 4", desc:"Feedback will be available once you’ve made a submission", closed:false, dueDate: new Date("02/02/2020, 11:59:00 PM"), startDate: new Date("12/16/2019, 11:59:00 PM"), submitState:"feedback", feedback:0, feedbacklink:"https://www.bing.com"},
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
