import React, { Component } from 'react';
import {Card,Tag,Pill } from '@contentful/forma-36-react-components';
import ReactJson from 'react-json-view'

export interface AppInstallationParameters { }

interface ConfigProps {
    sdk: any;
  }
  
interface ConfigState {

}


export default class SdkIds extends Component<ConfigProps,ConfigState> {
     constructor(props: any) {
        super(props);
        

      }

      render(){
        return(
            <>
                    <Card>
                      <Tag tagType="primary">sdk.ids</Tag>
                                <br />
                                <br />
                        <Pill label="sdk.ids" />
                        <div className="divSpacer">
                          <ReactJson src={this.props.sdk.ids} collapsed={0} />
                        </div>
                     
                    </Card>
            </>
        )
      }
  
}


