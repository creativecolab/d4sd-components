import { storiesOf } from "@storybook/react";
import * as React from "react";
import 'antd/dist/antd.css'
import './style.less';
import { Button, Radio, Timeline } from "../";

storiesOf("Button", module).add("All", () => (
  <div className="storycontainer">
    <div className="story-module">
      <h3>Small Buttons (fixed)</h3>
      <Button type="primary-outline" size="small">
        PREVIOUS
      </Button>
      <Button type="primary" size="small">
        NEXT
      </Button>
      <Button type="primary" size="small">
        VERY STRETCHED OUT BUTTON
      </Button>
      <Button type="secondary-outline" size="small">
        PREVIOUS
      </Button>
      <Button type="secondary" size="small">
        NEXT
      </Button>
      <Button type="secondary" size="small">
        VERY STRETCHED OUT BUTTON
      </Button>
    </div>
    <div className="story-module">
      <h3>Medium Buttons (sizable)</h3>
      <Button type="primary-outline">PREVIOUS</Button>
      <Button type="primary">NEXT</Button>
      <Button type="primary">VERY STRETCHED OUT BUTTON</Button>
      <Button type="secondary-outline">PREVIOUS</Button>
      <Button type="secondary">NEXT</Button>
      <Button type="secondary">VERY STRETCHED OUT BUTTON</Button>
    </div>
    <div className="story-module">
      <h3>Large Buttons (fixed)</h3>
      <Button type="primary-outline" size="large">
        PREVIOUS
      </Button>
      <Button type="primary" size="large">
        NEXT
      </Button>
      <Button type="primary" size="large">
        VERY STRETCHED OUT BUTTON LIKE REALLY STRETCHED
      </Button>
      <Button type="secondary-outline" size="large">
        PREVIOUS
      </Button>
      <Button type="secondary" size="large">
        NEXT
      </Button>
      <Button type="secondary" size="large">
        VERY STRETCHED OUT BUTTON LIKE REALLY STRETCHED
      </Button>
    </div>
  </div>
));
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
    </div>));
storiesOf("Timeline", module)
    .add("Examples", () =>
    <div className="storycontainer">
    <div className="story-module">
    <Timeline>
    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
    <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
    <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
    <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
  </Timeline>
    </div>
    <div className="story-module">
    <Timeline>
    <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
    <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
    <Timeline.Item color="red">
      <p>Solve initial network problems 1</p>
      <p>Solve initial network problems 2</p>
      <p>Solve initial network problems 3 2015-09-01</p>
    </Timeline.Item>
    <Timeline.Item>
      <p>Technical testing 1</p>
      <p>Technical testing 2</p>
      <p>Technical testing 3 2015-09-01</p>
    </Timeline.Item>
    <Timeline.Item color="gray">
      <p>Technical testing 1</p>
      <p>Technical testing 2</p>
      <p>Technical testing 3 2015-09-01</p>
    </Timeline.Item>
    <Timeline.Item color="gray">
      <p>Technical testing 1</p>
      <p>Technical testing 2</p>
      <p>Technical testing 3 2015-09-01</p>
    </Timeline.Item>
  </Timeline>
    </div>
    </div>
)
