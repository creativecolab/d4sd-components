import { storiesOf } from "@storybook/react";
import * as React from "react";
import 'antd/dist/antd.css'
import './style.less';
import { Button, Radio } from "../";

storiesOf("Button", module)
  .add("All", () =>
    <div className="storycontainer">
    <div className="story-module">
        <h3>Small Buttons (fixed)</h3>
        <Button type='primary-outline' size='small'>PREVIOUS</Button>
        <Button type='primary' size='small'>NEXT</Button>
        <Button type='primary' size='small'>VERY STRETCHED OUT BUTTON</Button>
        <Button type='secondary-outline' size='small'>PREVIOUS</Button>
        <Button type='secondary' size='small'>NEXT</Button>
        <Button type='secondary' size='small'>VERY STRETCHED OUT BUTTON</Button>
    </div>
      <div className="story-module">
          <h3>Medium Buttons (sizable)</h3>
          <Button type='primary-outline'>PREVIOUS</Button>
          <Button type='primary'>NEXT</Button>
          <Button type='primary'>VERY STRETCHED OUT BUTTON</Button>
          <Button type='secondary-outline'>PREVIOUS</Button>
          <Button type='secondary'>NEXT</Button>
          <Button type='secondary'>VERY STRETCHED OUT BUTTON</Button>
      </div>
      <div className="story-module">
          <h3>Large Buttons (fixed)</h3>
          <Button type='primary-outline' size='large'>PREVIOUS</Button>
          <Button type='primary' size='large'>NEXT</Button>
          <Button type='primary' size='large'>VERY STRETCHED OUT BUTTON LIKE REALLY STRETCHED</Button>
          <Button type='secondary-outline' size='large'>PREVIOUS</Button>
          <Button type='secondary' size='large'>NEXT</Button>
          <Button type='secondary' size='large'>VERY STRETCHED OUT BUTTON LIKE REALLY STRETCHED</Button>
      </div>
    </div>)
storiesOf("Radio", module)
  .add("Examples", () =>
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
    </div>)
