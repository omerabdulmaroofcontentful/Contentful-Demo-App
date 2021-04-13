import React, { Component } from 'react';
import { EditorExtensionSDK } from 'contentful-ui-extensions-sdk';
import SdkLocation from '../sdk components/SdkLocation'
import SdkEditor from '../sdk components/SdkEditor'
import SdkEntry from '../sdk components/SdkEntry'
import SdkContentType from '../sdk components/SdkContentType'
import SdkParams from '../sdk components/SdkParams'
import { Card,Icon,Heading } from '@contentful/forma-36-react-components';
interface EditorProps {
  sdk: EditorExtensionSDK;
}


export default class EditorScreen extends Component<EditorProps> {

  constructor(props: any) {
    super(props)

  }

  render() {
    return (<>
    <Card>
       <div className="flexbox-container">
        <Icon icon="ReceiptTrimmed" size="large"/>
        <Heading>LOCATION_ENTRY_EDITOR</Heading>
       </div>
      <SdkLocation sdk={this.props.sdk}/>
      <SdkEditor sdk={this.props.sdk}/>
      <SdkEntry sdk={this.props.sdk}/>
      <SdkContentType sdk={this.props.sdk}/>
      <SdkParams sdk={this.props.sdk}/>
    </Card>
    </>)

  }

}




