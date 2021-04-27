import React, { Component } from 'react';
import { AppExtensionSDK } from 'contentful-ui-extensions-sdk';
import SdkLocation from '../sdk components/SdkLocation'
import 'jsoneditor-react/es/editor.min.css';
import {Pill,Card,Icon, Heading, Form, Workbench, Paragraph, Tabs, Tab,TextField  } from '@contentful/forma-36-react-components';
import SdkApp from '../sdk components/SdkApp'
import JSONInput from 'react-json-editor-ajrm';
import locale    from 'react-json-editor-ajrm/locale/en';
import {darktheme,light_mitsuketa_tribute}    from 'react-json-editor-ajrm/themes';

import { JsonEditor as Editor } from 'jsoneditor-react';
import 'jsoneditor-react/es/editor.min.css';
import SdkParams from '../sdk components/SdkParams'
import { css } from 'emotion';
import { iconColors } from '@contentful/forma-36-react-components/dist/components/Icon/constants';


export interface AppInstallationParameters { }

interface ConfigProps {
  sdk: AppExtensionSDK;
}

interface ConfigState {
  parameters: AppInstallationParameters,
  targetState:any;
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
    this.state = { parameters: {},targetState:{}}; 

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
    const currentState:any = await this.props.sdk.app.getCurrentState();
    if(parameters){
      this.setState({parameters:parameters,targetState:currentState})
      console.log('componentDidMount',JSON.stringify(this.state.parameters))
      console.log('componentDidMount',JSON.stringify(parameters))
      this.props.sdk.app.setReady();
    }
  }

  onConfigure = async () => {

    console.log('onConfigure',JSON.stringify(this.state.parameters))
    return {
      parameters: this.state.parameters,
      targetState: this.state.targetState
    };
  };

  parametersValueChanged = async (result:any) => {

    if(result.error == false) {
      console.log('result.error == false')
      this.setState({parameters:result.jsObject})
      console.log(this.state.parameters)
    }
       
       
    console.log(result)
    console.log(result.error)
  };

  stateValueChanged = async (result:any) => {

    if(result.error == false) {
      console.log('result.error == false')
      this.setState({targetState:result.jsObject})
      console.log(this.state.targetState)
    }
       
       
    console.log(result)
    console.log(result.error)
  };




  render() {
    return (
      <>
       <Card>
       <SdkLocation sdk={this.props.sdk}/>
       <Card>
       <div className="flexbox-container">
          <Icon icon="ReceiptTrimmed" size="large"/>
          <Heading>LOCATION_APP_CONFIG</Heading>
        </div>
      
        <Pill label="app.onConfigure(cb): void"/>
        <br />
        <br />
        <Pill label="Parameters"/>
        <br />
        <JSONInput
            id          = 'a_unique_id'
            placeholder = { this.state.parameters }
            onChange={this.parametersValueChanged}
            locale      = { locale }
            height      = '300px'
            width = '400px'
            colors = {
                  {  
                      default:'#0C141C',
                      background:'#EDF4FC',
                      background_warning:'#A82D3E',
                      string:'#0C141C',
                      number:'#0C141C',
                      colon:'#0C141C',
                      keys:'#BF3045',
                      keys_whiteSpace:'#0C141C',
                      primitive:'#0C141C'
                    }}

        />
       <br />
      <br />
      <Pill label="State"/>
        <br />
        <JSONInput
            id          = 'a_unique_id'
            placeholder = { this.state.targetState }
            onChange={this.stateValueChanged}
            locale      = { locale }
            height      = '300px'
            width = '400px'
            colors = {
              {  
                  default:'#0C141C',
                  background:'#EDF4FC',
                  background_warning:'#A82D3E',
                  string:'#0C141C',
                  number:'#0C141C',
                  colon:'#0C141C',
                  keys:'#BF3045',
                  keys_whiteSpace:'#0C141C',
                  primitive:'#0C141C'
                }}
        />

        </Card>
       
        <SdkApp sdk={this.props.sdk}/>

       </Card>
      </>
    );
  }
}


