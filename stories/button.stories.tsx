import { storiesOf } from "@storybook/react";
import * as React from "react";
import { Button, Radio } from "../";
storiesOf("Button", module)
  .add("with text", () => <Button>Hello Button</Button>)
  .add("with some emoji", () => <Button>😀 😎 👍 💯</Button>);
storiesOf("Radio", module)
  .add("with text", () => <Radio>Hello Button</Radio>)
  .add("with some emoji", () => <Radio>😀 😎 👍 💯</Radio>);
