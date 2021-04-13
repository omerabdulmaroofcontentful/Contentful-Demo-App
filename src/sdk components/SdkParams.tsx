import React, { Component } from 'react';
import {Card,Tag,Pill } from '@contentful/forma-36-react-components';
import ReactJson from 'react-json-view'

export interface AppInstallationParameters { }

interface ConfigProps {
    sdk: any;
  }
  
interface ConfigState {

}


export default class SdkParams extends Component<ConfigProps,ConfigState> {
     constructor(props: any) {
        super(props);
        

      }

      render(){
        return(
            <>
                    <Card>
                      <Tag tagType="primary">sdk.parameters</Tag>
                                <br />
                                <br />
                        <Pill label="sdk.parameters.installation" />
                        <div>
                          <ReactJson src={this.props.sdk.parameters.installation} collapsed={0} />
                        </div>
                        <Pill label="sdk.parameters.instance" />
                        <div>
                          <ReactJson src={this.props.sdk.parameters.instance} collapsed={0} />
                        </div>
                    </Card>
            </>
        )
      }
  
}


