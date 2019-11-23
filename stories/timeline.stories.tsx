import { storiesOf } from "@storybook/react";
import * as React from "react";

import {Card, message } from "../";
import {Timeline} from "../components/Timeline";

storiesOf("Timeline", module).add("Examples", () => (
  <div className="storycontainer">
    <div className="story-module">
    <h3>Default Timeline</h3>
      <Timeline>
        <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
        <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
        <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
        <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
      </Timeline>
    </div>
    <div className="story-module" style={{marginLeft:90}}>
    <h3>Setting type="card" for timeline gives d4sd timeline</h3>
    <p>Best to use the Card component inside a Timeline.item</p>
    <br />
      <Timeline type="card">
        <Timeline.Item>
          <Card>
          <h2>Prelim Submissions</h2>
          </Card>
        </Timeline.Item>
        <Timeline.Item>
            <Card>
            <h2>DISCOVER</h2>
            </Card>
        </Timeline.Item>
      </Timeline>
      <div className="story-module" style={{marginLeft:0, marginTop:100}}>
      <h3>Interactive timelime items and with pretext on left of item</h3>
      <p>The left side of the timeline is the left most point of all the circles</p>
      <br/>
        <Timeline type="card">
          <Timeline.Item pretext={<h3>FEB 4 - <br /> FEB 20</h3>}>
            <Card>
            <h2>Prelim Submissions</h2>
            </Card>
            <Card>
            <h2>More things in one item</h2>
            </Card>
          </Timeline.Item>
          <MessageTimeline pretext={<h3>MAR 1- <br /> MAR 20</h3>}>
              <Card>
              <h2>Hover over me!</h2>
              </Card>
          </MessageTimeline>
          <MessageTimeline pretext={<h3>MAR 20- <br /> MAR 29</h3>}>
              <Card>
              <h2>Hover over me as well!</h2>
              </Card>
          </MessageTimeline>
        </Timeline>
        </div>
        <div className="story-module" style={{marginLeft:0, marginTop:100}}>
        <h3>extended bars to fill space</h3>
        <br/>
          <Timeline type="card" extended>
            <Timeline.Item>
              <Card>
              <h2>Prelim Submissions</h2>
              </Card>
              <Card>
              <h2>More things in one item</h2>
              </Card>
            </Timeline.Item>
            <MessageTimeline>
                <Card>
                <h2>Hover over me!</h2>
                </Card>
            </MessageTimeline>
            <MessageTimeline>
                <Card>
                <h2>Hover over me as well!</h2>
                </Card>
            </MessageTimeline>
          </Timeline>
          </div>
    </div>
  </div>
));

// example of interactive timeline
const MessageTimeline = (props: any) => {
  const handleHover = () => {
    message.success("Hovered");
  }
  return <Timeline.Item onMouseEnter={handleHover} style={{cursor:'pointer'}} {...props}>{props.children}</Timeline.Item>
}
