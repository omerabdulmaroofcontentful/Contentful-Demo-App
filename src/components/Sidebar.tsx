import React, { Component } from 'react';
import { SidebarExtensionSDK } from 'contentful-ui-extensions-sdk';
import SdkParams from '../sdk components/SdkParams'
import SdkLocation from '../sdk components/SdkLocation'
import SdkDialog from '../sdk components/SdkDialog'
import SdkNavigator from '../sdk components/SdkNavigator'
import SdkIds from '../sdk components/SdkIds'
import SdkUser from '../sdk components/SdkUser'
import SdkLocales from '../sdk components/SdkLocales'
import SdkSpace from '../sdk components/SdkSpace'
import SdkContentType from '../sdk components/SdkContentType'

import {Icon,Heading } from '@contentful/forma-36-react-components';

interface SidebarProps {
  sdk: SidebarExtensionSDK;
}

interface ConfigProps {
  sdk: any;
}

interface ConfigState {

}

export default class Sidebar extends Component<ConfigProps,ConfigState> {
  constructor(props: any) {
    super(props);
    
    this.props.sdk.window.updateHeight(1000)
  }
  
  async componentDidMount(){

  }

  render(){
    return(
        <>
          <div className="flexbox-container">
          <Icon icon="ReceiptTrimmed" size="large"/>
          <Heading>LOCATION_ENTRY_SIDEBAR</Heading>
          </div>
        <div className="grid-container-field">
          <SdkLocation sdk={this.props.sdk}/>
          <SdkContentType sdk={this.props.sdk}/>
          <SdkParams sdk={this.props.sdk}/>
          <SdkDialog sdk={this.props.sdk}/>
          <SdkNavigator sdk={this.props.sdk}/>
          <SdkIds sdk={this.props.sdk}/>
          <SdkUser sdk={this.props.sdk}/>
          <SdkLocales sdk={this.props.sdk}/>
          <SdkSpace sdk={this.props.sdk}/> 
          </div>
        </>
    )
  }
}
