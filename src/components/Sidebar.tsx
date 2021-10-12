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
import SdkExplorer from '../sdk components/SdkExplorer'

import {Icon,Heading, AccordionItem, Accordion } from '@contentful/forma-36-react-components';

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
          <Accordion>
            <AccordionItem title="SDK.LOCATION"><SdkLocation sdk={this.props.sdk}/></AccordionItem>
            <AccordionItem title="SDK.CONTENTTYPE"><SdkContentType sdk={this.props.sdk}/></AccordionItem>
            <AccordionItem title="SDK.PARAMS"><SdkParams sdk={this.props.sdk}/></AccordionItem>
            <AccordionItem title="SDK.DIALOG"><SdkDialog sdk={this.props.sdk}/></AccordionItem>
            <AccordionItem title="SDK.NAVIGATOR"><SdkNavigator sdk={this.props.sdk}/></AccordionItem>
            <AccordionItem title="SDK.IDS"><SdkIds sdk={this.props.sdk}/></AccordionItem>
            <AccordionItem title="SDK.USER"><SdkUser sdk={this.props.sdk}/></AccordionItem>
            <AccordionItem title="SDK.LOCALES"><SdkLocales sdk={this.props.sdk}/></AccordionItem>
            <AccordionItem title="SDK.SPACE"> <SdkSpace sdk={this.props.sdk}/> </AccordionItem>
            <AccordionItem title="SDK EXPLORER"> <SdkExplorer sdk={this.props.sdk}/> </AccordionItem>
          </Accordion> 
        </>
    )
  }
}
