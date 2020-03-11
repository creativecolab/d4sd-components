import { storiesOf } from "@storybook/react";
import * as React from "react";
import { Card } from "../components/Card";
const {Meta} = Card;
storiesOf("Card", module).add("Examples", () => (
  <div style={{width: "100px;"}}>
    <Card>
      <Meta
        title="Join the discussion"
        description="We have a Slack workspace set up with multiple channels that will allow participants to communicate with their team members and the greater D4SD community. When you register online, you will be connected to our network of resources based on how you want to participate."
      />
    </Card>
  </div>
));
