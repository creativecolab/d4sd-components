import { storiesOf } from "@storybook/react";
import * as React from "react";
const useState = React.useState;
import { Steps} from "../components/Steps";
import {Button} from '../components/Button';
const {Step} = Steps;
storiesOf("Steps", module).add("Examples", () => {
  const [currentStep, setStep] = useState(0);
  const handleChange = (curr: any) => {
    setStep(curr);
  }
  return (
  <div className="storycontainer">
    <div className="story-module" >
    <h3>Steps Small</h3>
    <p>Note, in order to achieve figma specifications, the text on top of the bubbles will have to overflow their containers for now, this will have to be handled by the user. If you don't need icons for the various steps, use the next module</p>
    <Steps size="small" current={currentStep} style={{width: 'calc(100% - 40px)', marginLeft: '20px'}} onChange={handleChange}>
      <Step title="Finished" />
      <Step title="In Progress" />
      <Step title="Waiting" />
    </Steps>
    <br/>
    <Button onClick={()=> {
      setStep(currentStep < 3 ? currentStep+1 : 3);
    }}>Next</Button>
    <Button  type="primary-outline" size="small" onClick={()=> {
      setStep(currentStep > 0 ? currentStep-1 : 0);
    }}>Previous</Button>
    </div>

    <div className="story-module" >
      <h3>Progress with Dots and clickable progress</h3>
    <Steps progressDot current={currentStep} onChange={handleChange}>
      <Step title="Finished" description="This is a description."/>
      <Step title="In Progress" description="This is a description." />
      <Step title="Waiting" description="This is a description." />
    </Steps>
    </div>
  </div>
)});
