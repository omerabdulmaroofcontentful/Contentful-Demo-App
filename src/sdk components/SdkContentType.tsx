import React, { Component } from 'react';
import { Pill,Card, Tag } from '@contentful/forma-36-react-components';
import ReactJson from 'react-json-view'

export interface AppInstallationParameters { }

interface ConfigProps {
  sdk: any;
}

interface ConfigState {

}


export default class SdkContentType extends Component<ConfigProps, ConfigState> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <>
        <Card>
          <Tag tagType="primary">sdk.contentType</Tag>
          <br />
          <br />
          <Pill label="sdk.contentType" />
          <div>
               <ReactJson src={this.props.sdk.contentType} collapsed={0}/>
          </div>
        </Card>
      </>
    )
  }

}


