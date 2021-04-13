import React, { Component } from 'react';
import {Card, Paragraph,Heading,Icon } from '@contentful/forma-36-react-components';
import { DialogExtensionSDK } from 'contentful-ui-extensions-sdk';
import SdkLocation from '../sdk components/SdkLocation'
import SdkEditor from '../sdk components/SdkEditor'
import SdkEntry from '../sdk components/SdkEntry'
import SdkContentType from '../sdk components/SdkContentType'
import SdkParams from '../sdk components/SdkParams'
import SdkField from '../sdk components/SdkField'
import SdkDialog from '../sdk components/SdkDialog'
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
        <SdkLocation sdk={this.props.sdk}/>
        {/* <SdkField sdk={this.props.sdk}/>
        <SdkEditor sdk={this.props.sdk}/> */}
        {/* <SdkEntry sdk={this.props.sdk}/> */}
        {/* <SdkContentType sdk={this.props.sdk}/> */}
        <SdkParams sdk={this.props.sdk}/>
        {/* <SdkDialog sdk={this.props.sdk}/> */}
      </Card>
    )
  }
}

{/* // const Dialog = (props: DialogProps) => {
//   return <Paragraph>Hello Dialog Component</Paragraph>;
// };

// export default Dialog; */}
