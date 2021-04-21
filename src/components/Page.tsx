import React, { Component } from 'react';
import { Card,Icon, Heading, Form, Workbench, Paragraph, Tabs, Tab,FormLabel ,Pill } from '@contentful/forma-36-react-components';
import '@contentful/forma-36-react-components/dist/styles.css';
import { MultipleEntryReferenceEditor } from '@contentful/field-editor-reference';
import { AppExtensionSDK, PageExtensionSDK } from 'contentful-ui-extensions-sdk';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { css } from 'emotion';
import Access from './AccessScreen'
import Locales from './LocalesScreen'
import Navigator from './NavigatorScreen'
import Space from './SpaceScreen'
import User from './UserScreen'
import SdkLocation from '../sdk components/SdkLocation'
import SdkParams from '../sdk components/SdkParams'
import SdkDialog from '../sdk components/SdkDialog'
import SdkNavigator from '../sdk components/SdkNavigator'
import SdkIds from '../sdk components/SdkIds'
import SdkUser from '../sdk components/SdkUser'
import SdkLocales from '../sdk components/SdkLocales'

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
      <Card>
      <div className="flexbox-container">
          <Icon icon="ReceiptTrimmed" size="large"/>
          <Heading>LOCATION_PAGE</Heading>
      </div>
        <SdkLocation sdk={this.props.sdk}/>
        <SdkParams sdk={this.props.sdk}/>
        <SdkDialog sdk={this.props.sdk}/>
        <SdkNavigator sdk={this.props.sdk}/>
        <SdkIds sdk={this.props.sdk}/>
        <SdkUser sdk={this.props.sdk}/>
        <SdkLocales sdk={this.props.sdk}/>      
      </Card>
     
      </>
    )
  }
}

