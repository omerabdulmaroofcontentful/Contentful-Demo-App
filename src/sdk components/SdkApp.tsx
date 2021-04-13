import React, { Component } from 'react';
import {Pill,Tag,Card } from '@contentful/forma-36-react-components';
import ReactJson from 'react-json-view'

export interface AppInstallationParameters { }

interface ConfigProps {
    sdk: any;
  }
  
interface ConfigState {
  parameters:any
  currentState:any
  isInstalled:any
}


export default class SdkApp extends Component<ConfigProps,ConfigState> {
      constructor(props: any) {
        super(props);
         this.state={parameters:{},currentState:{},isInstalled:{}}
      }

      async componentDidMount() {
        let params = await this.props.sdk.app.getParameters()
        let currentState = await this.props.sdk.app.getCurrentState()
        let appIsInstalled = await this.props.sdk.app.isInstalled()

        this.setState({parameters:params,currentState:currentState,isInstalled:{Installed:appIsInstalled}})
        
      }

      render(){
        return(
            <>
              <Card>
                  <Tag tagType="primary">sdk.app</Tag>
                   <br />
                   <br />

                  <Pill label="sdk.app.getParameters"/>
                  <div>
                      <ReactJson src={this.state.parameters} collapsed={0}/>
                  </div>
                  <Pill label="sdk.app.getCurrentState"/>
                  <div>
                      <ReactJson src={this.state.currentState} collapsed={0}/>
                  </div>
                  <Pill label="sdk.app.isInstalled"/>
                  <div>
                      <ReactJson src={this.state.isInstalled} collapsed={0}/>
                  </div>
                </Card>
            </>
        )
      }
  
}


