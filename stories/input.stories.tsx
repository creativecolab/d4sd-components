import { storiesOf } from "@storybook/react";
import * as React from "react";
import { Input } from "../components/Input";

storiesOf("Input", module).add("Examples", () => (
  <div className="storycontainer">
    <div className="story-module">
      <h3>Input Fields</h3>
      <Input />
      <Input.TextArea />
    </div>
    <div className="story-module">
    </div>
  </div>
));
