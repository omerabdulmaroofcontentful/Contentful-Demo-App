import React, { Component } from 'react';
import { EditorExtensionSDK } from '@contentful/app-sdk';
import SdkLocation from '../sdk components/SdkLocation'
import SdkEditor from '../sdk components/SdkEditor'
import SdkEntry from '../sdk components/SdkEntry'
import SdkContentType from '../sdk components/SdkContentType'
import SdkParams from '../sdk components/SdkParams'
import SdkDialog from '../sdk components/SdkDialog'
import SdkNavigator from '../sdk components/SdkNavigator'
import SdkIds from '../sdk components/SdkIds'
import SdkUser from '../sdk components/SdkUser'
import SdkLocales from '../sdk components/SdkLocales'
import SdkExplorer from '../sdk components/SdkExplorer'
import ThirdPartyAPI from '../sdk components/ThirdPartyAPI'
import SdkSpace from '../sdk components/SdkSpace'
import CMAExplorer from '../sdk components/CMAExplorer'
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
        <div className="grid-container">
          <SdkLocation sdk={this.props.sdk}/>
          <SdkEditor sdk={this.props.sdk}/>
          <SdkEntry sdk={this.props.sdk}/>
          <SdkContentType sdk={this.props.sdk}/>
          <SdkParams sdk={this.props.sdk}/>
          <SdkDialog sdk={this.props.sdk}/>
          <SdkNavigator sdk={this.props.sdk}/>
          <SdkIds sdk={this.props.sdk}/>
          <SdkUser sdk={this.props.sdk}/>
          <SdkLocales sdk={this.props.sdk}/>
          <ThirdPartyAPI sdk={this.props.sdk}/>
          <SdkExplorer sdk={this.props.sdk}/>
          <SdkSpace sdk={this.props.sdk}/>
          <CMAExplorer sdk={this.props.sdk}/>
        </div>
      </Card>
    </>)

  }

}




