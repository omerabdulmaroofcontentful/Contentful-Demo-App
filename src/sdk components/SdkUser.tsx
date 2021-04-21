import React, { Component } from 'react';
import {Card,Tag,Pill } from '@contentful/forma-36-react-components';
import ReactJson from 'react-json-view'

export interface AppInstallationParameters { }

interface ConfigProps {
    sdk: any;
  }
  

export default class SdkUser extends Component<ConfigProps> {
     constructor(props: any) {
        super(props);
        

      }

      render(){
        return(
            <>
                    <Card>
                      <Tag tagType="primary">sdk.user</Tag>
                                <br />
                                <br />
                        <Pill label="sdk.user" />
                        <div>
                          <ReactJson src={this.props.sdk.user} collapsed={0} />
                        </div>
                    </Card>
            </>
        )
      }
  
}


