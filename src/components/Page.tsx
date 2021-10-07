import React, { Component } from 'react';
import { Card,Icon, Heading } from '@contentful/forma-36-react-components';
import '@contentful/forma-36-react-components/dist/styles.css';
import { PageExtensionSDK } from 'contentful-ui-extensions-sdk';
import SdkLocation from '../sdk components/SdkLocation'
import SdkParams from '../sdk components/SdkParams'
import SdkDialog from '../sdk components/SdkDialog'
import SdkNavigator from '../sdk components/SdkNavigator'
import SdkIds from '../sdk components/SdkIds'
import SdkUser from '../sdk components/SdkUser'
import SdkLocales from '../sdk components/SdkLocales'
import SdkExplorer from '../sdk components/SdkExplorer'
import ThirdPartyAPI from '../sdk components/ThirdPartyAPI'

interface PageProps {
  sdk: PageExtensionSDK;
}


export default class Page extends Component<PageProps>{

  constructor(props: any){
    super(props);

  }

  async componentDidMount() {

  }



  render(){
    return (
      <>
        <div className="flexbox-container">
            <Icon icon="ReceiptTrimmed" size="large"/>
            <Heading>LOCATION_PAGE</Heading>
        </div>
        <div className="grid-container-page">
            <SdkLocation sdk={this.props.sdk}/>
            <SdkParams sdk={this.props.sdk}/>
            <SdkIds sdk={this.props.sdk}/>
            <SdkUser sdk={this.props.sdk}/>
            <SdkNavigator sdk={this.props.sdk}/>
            <SdkDialog sdk={this.props.sdk}/>
            <SdkLocales sdk={this.props.sdk}/>
            <ThirdPartyAPI sdk={this.props.sdk}/>
            <SdkExplorer sdk={this.props.sdk}/>
          </div>
      </>
    )
  }
}

