import { storiesOf } from "@storybook/react";
import * as React from "react";
import { Radio } from "../";

storiesOf("Radio", module).add("Examples", () => (
  <div className="storycontainer">
    <div className="story-module">
      <h3>Exclusive buttons</h3>
      <Radio.Group>
        <Radio value="accept">I accept the terms</Radio>
        <br />
        <Radio value="no">I don't accept the terms</Radio>
      </Radio.Group>
    </div>
    <div className="story-module">
      <h3>Not-Exclusive buttons</h3>
      <Radio value="accept">I accept the terms</Radio>
      <br />
      <Radio value="no">I don't accept the terms</Radio>
      <Radio disabled={true}>Disabled</Radio>
    </div>
  </div>
));
