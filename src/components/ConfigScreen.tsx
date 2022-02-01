import React, { Component } from 'react';
import { AppExtensionSDK } from '@contentful/app-sdk';
import 'jsoneditor-react/es/editor.min.css';
import {Pill,Card,Icon, Heading} from '@contentful/forma-36-react-components';
import JSONInput from 'react-json-editor-ajrm';
import locale    from 'react-json-editor-ajrm/locale/en';
import SdkLocation from '../sdk components/SdkLocation'
import SdkApp from '../sdk components/SdkApp'
import SdkDialog from '../sdk components/SdkDialog'
import SdkNavigator from '../sdk components/SdkNavigator'
import SdkIds from '../sdk components/SdkIds'
import SdkUser from '../sdk components/SdkUser'
import SdkLocales from '../sdk components/SdkLocales'
import SdkSpace from '../sdk components/SdkSpace'
import SdkExplorer from '../sdk components/SdkExplorer'
import ThirdPartyAPI from '../sdk components/ThirdPartyAPI'

export interface AppInstallationParameters { }

interface ConfigProps {
  sdk: AppExtensionSDK;
}

interface ConfigState {
  parameters: AppInstallationParameters,
  targetState:any;
}



export default class Config extends Component<ConfigProps, ConfigState> {
  constructor(props: any) {
    super(props);
    this.state = { parameters: {},targetState:{}}; 
    console.log('constructor')

    props.sdk.app.onConfigure(() => this.onConfigure());
    this.onParamChange = this.onParamChange.bind(this)
  }

  getSDK(){
    return this.props.sdk
  }

   onParamChange(event:any) {
      
     // TODO: set state of react dictioary
      let parameters = JSON.parse(JSON.stringify(this.state.parameters))
      parameters[event.target.id] = event.target.value
      this.setState({parameters:parameters})
      console.log(this.state.parameters)
   }

  async componentDidMount() {
  //  Get current parameters of the app.
    //If the app is not installed yet, `parameters` will be `null`.
    let isInstalled = await this.props.sdk.app.isInstalled()
    console.log('componentDidMount',isInstalled)

    const parameters:any = await this.props.sdk.app.getParameters();
    const currentState:any = await this.props.sdk.app.getCurrentState();
    this.setState({ parameters:parameters, targetState:currentState }, async () => {
      // Once preparation has finished, call `setReady` to hide
      // the loading screen and present the app to a user.
      console.log('this.setState', parameters,currentState)
      this.props.sdk.app.setReady();
    });
    
    // const parameters:any = await this.props.sdk.app.getParameters();
    // const currentState:any = await this.props.sdk.app.getCurrentState();
    // if(parameters){
    //   this.setState({parameters:parameters,targetState:currentState})
    //   console.log('componentDidMount',JSON.stringify(this.state.parameters))
    //   console.log('componentDidMount',JSON.stringify(parameters))
    //   this.props.sdk.app.setReady();
    // }

  }

  onConfigure = async () => {

    const currentState = await this.props.sdk.app.getCurrentState();

    console.log('onConfigure',this.state.parameters,this.state.targetState)
    let localParam = this.state.parameters
    let targetState = this.state.targetState
    
    setTimeout(function(){
        window.location.reload()
    },2000)

    if(localParam == null){
      return {
        parameters:{key:'hello world'},
        targetState:{EditorInterface:{
          ...currentState?.EditorInterface
        }}
      }
    }

    return {
      parameters:localParam,
      targetState:{EditorInterface:{
        ...currentState?.EditorInterface
      }}
    }
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
      <div className="center-aligned">
      <div className="flexbox-container">
          <Icon icon="ReceiptTrimmed" size="large"/>
          <Heading>LOCATION_APP_CONFIG</Heading>
        </div>
        <div className="grid-container-field">
        <SdkLocation sdk={this.props.sdk}/>

        <Card>
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
        {/* <SdkParams sdk={this.props.sdk}/> */}
        <SdkDialog sdk={this.props.sdk}/>
        <SdkNavigator sdk={this.props.sdk}/>
        <SdkIds sdk={this.props.sdk}/>
        <SdkUser sdk={this.props.sdk}/>
        <SdkLocales sdk={this.props.sdk}/>
        <SdkSpace sdk={this.props.sdk}/> 
        <ThirdPartyAPI sdk={this.props.sdk}/> 
        <SdkExplorer sdk={this.props.sdk}/> 

        </div>
        <p>App Version 1.0</p>   
      </div>
      </>
    );
  }
}


