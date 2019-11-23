import { storiesOf } from "@storybook/react";
import * as React from "react";
import { Button } from "../components/Button";

storiesOf("Button", module).add("All", () => (
  <div className="storycontainer">
    <div className="story-module spaced">
      <h3>Small Buttons (fixed)</h3>
      <Button.Google>GOOGLE</Button.Google>
      <Button.Facebook>GOOGLE</Button.Facebook>
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
    <div className="story-module spaced">
      <h3>Medium Buttons (sizable)</h3>
      <Button type="primary-outline">PREVIOUS</Button>
      <Button type="primary">NEXT</Button>
      <Button type="primary">VERY STRETCHED OUT BUTTON</Button>
      <Button type="secondary-outline">PREVIOUS</Button>
      <Button type="secondary">NEXT</Button>
      <Button type="secondary">VERY STRETCHED OUT BUTTON</Button>
    </div>
    <div className="story-module spaced">
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
