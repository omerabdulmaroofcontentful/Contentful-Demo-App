import React, { Component } from 'react';
import {Card, Paragraph,Heading,Icon } from '@contentful/forma-36-react-components';
import { DialogExtensionSDK } from 'contentful-ui-extensions-sdk';
import SdkLocation from '../sdk components/SdkLocation'
import SdkParams from '../sdk components/SdkParams'
import SdkIds from '../sdk components/SdkIds'
import SdkUser from '../sdk components/SdkUser'
import SdkLocales from '../sdk components/SdkLocales'
interface DialogProps {
  sdk: DialogExtensionSDK;
}
interface ConfigState {

}

export default class DialogScreen extends Component<DialogProps, ConfigState> {

  render(){
    return(
      <Card>
         <div className="flexbox-container">
          <Icon icon="ReceiptTrimmed" size="large"/>
          <Heading>LOCATION_DIALOG</Heading>
        </div>
        <div className="grid-container-dialog">
        <SdkLocation sdk={this.props.sdk}/>
        <SdkParams sdk={this.props.sdk}/>
        <SdkIds sdk={this.props.sdk}/>
        <SdkUser sdk={this.props.sdk}/>
        <SdkLocales sdk={this.props.sdk}/>
        </div>
      </Card>
    )
  }
}

