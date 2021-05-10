import React, { Component } from 'react';
import {Pill,Card,Tag} from '@contentful/forma-36-react-components';
import ReactJson from 'react-json-view'

export interface AppInstallationParameters { }

interface ConfigProps {
    sdk: any;
  }

  interface ConfigState {
    defaultLocale: any;
  }
  

export default class SdkLocales extends Component<ConfigProps,ConfigState> {
     constructor(props: any) {
        super(props);
        this.state = {defaultLocale:{}}
  
      }
      
      async componentDidMount(){
        this.setState({defaultLocale:{'defaulLocale':this.props.sdk.locales.default}})
      }

      render(){
        return(
            <>
                   <Card>
                    <Tag tagType="primary">sdk.locales</Tag>
                    <br />
                    <br />

                    <Pill label="sdk.locales.default"/>
                    <div className="divSpacer">
                      <ReactJson src={this.state.defaultLocale} collapsed={0}/>
                   </div>

                   <Pill label="sdk.locales.available"/>
                    <div className="divSpacer">
                      <ReactJson src={this.props.sdk.locales.available} collapsed={0}/>
                   </div>

                   <Pill label="sdk.locales.fallbacks"/>
                    <div className="divSpacer">
                      <ReactJson src={this.props.sdk.locales.fallbacks} collapsed={0}/>
                   </div>

                   <Pill label="sdk.locales.direction"/>
                    <div className="divSpacer">
                      <ReactJson src={this.props.sdk.locales.direction} collapsed={0}/>
                   </div>

                   <Pill label="sdk.locales.optional"/>
                    <div className="divSpacer">
                      <ReactJson src={this.props.sdk.locales.optional} collapsed={0}/>
                   </div>
                  </Card>
            </>
        )
      }
  
}


