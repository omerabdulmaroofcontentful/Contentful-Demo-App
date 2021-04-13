import React, { Component } from 'react';
import { AppExtensionSDK } from 'contentful-ui-extensions-sdk';
import SdkLocation from '../sdk components/SdkLocation'
import {Pill,Card,Icon, Heading, Form, Workbench, Paragraph, Tabs, Tab,TextField  } from '@contentful/forma-36-react-components';
import SdkApp from '../sdk components/SdkApp'
import SdkParams from '../sdk components/SdkParams'
import { css } from 'emotion';


export interface AppInstallationParameters { }

interface ConfigProps {
  sdk: AppExtensionSDK;
}

interface ConfigState {
  parameters: AppInstallationParameters,
}

const ParametersComponent = (props:any)=>{
  //console.log('ParametersComponent',JSON.stringify(props))

  const onTextChange= (event:any )=>{
    event.preventDefault() 
    props.onParamChange(event)
  }

  return(
    <>
      <Form>
           <TextField  name="Param 1" id="param1" labelText="Param 1" onChange={onTextChange} value={props.parameters.param1}></TextField>
           <TextField  name="Param 2" id="param2" labelText="Param 2" onChange={onTextChange} value={props.parameters.param2}></TextField>
      </Form>
    </>
  )
}

export default class Config extends Component<ConfigProps, ConfigState> {
  constructor(props: any) {
    super(props);
    this.state = { parameters: {}}; 

    props.sdk.app.onConfigure(() => this.onConfigure());
    this.onParamChange = this.onParamChange.bind(this)
  }

  getSDK(){
    return this.props.sdk
  }

   onParamChange(event:any) {
      
      //TODO: set state of react dictioary
      let parameters = JSON.parse(JSON.stringify(this.state.parameters))
      parameters[event.target.id] = event.target.value
      this.setState({parameters:parameters})
      console.log(this.state.parameters)
   }

  async componentDidMount() {
    // Get current parameters of the app.
    // If the app is not installed yet, `parameters` will be `null`.
    const parameters:any = await this.props.sdk.app.getParameters();
    if(parameters){
      this.setState({parameters:parameters})
      console.log('componentDidMount',JSON.stringify(this.state.parameters))
      console.log('componentDidMount',JSON.stringify(parameters))
      this.props.sdk.app.setReady();
    }
  }

  onConfigure = async () => {

    const currentState = await this.props.sdk.app.getCurrentState();
    console.log('onConfigure',JSON.stringify(this.state.parameters))
    return {
      parameters: this.state.parameters,
      targetState: currentState
    };
  };

  render() {
    return (
      <>
       <Card>
       <Card>
       <div className="flexbox-container">
          <Icon icon="ReceiptTrimmed" size="large"/>
          <Heading>LOCATION_APP_CONFIG</Heading>
        </div>
    
     
        <ParametersComponent onParamChange={this.onParamChange} parameters={this.state.parameters}/>  
        </Card>
        <SdkLocation sdk={this.props.sdk}/>
        <SdkApp sdk={this.props.sdk}/>

       </Card>
      </>
    );
  }
}


