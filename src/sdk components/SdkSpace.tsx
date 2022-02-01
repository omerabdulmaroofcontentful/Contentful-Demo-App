import React, { Component } from 'react';
import {Card,Tag,Pill } from '@contentful/forma-36-react-components';
import ReactJson from 'react-json-view'


export interface AppInstallationParameters { }

interface ConfigProps {
    sdk: any;
  }

interface ConfigState {
  contentTypes: any;
  cachedContentTypes:any;
  editorInterfaces:any;
  users:any;
  scheduledActions:any;
}
  

export default class SdkSpace extends Component<ConfigProps,ConfigState> {
     constructor(props: any) {
        super(props);
        this.state = {contentTypes:{},
                      cachedContentTypes:{},
                      editorInterfaces:{},
                      users:{},
                      scheduledActions:{}}

      
      }

      async componentDidMount(){
        let contentTypes = await this.props.sdk.space.getContentTypes()
        let cachedContentTypes = await this.props.sdk.space.getCachedContentTypes()
        let editorInterfaces = await this.props.sdk.space.getEditorInterfaces()
        let users = await this.props.sdk.space.getUsers()  
        let scheduledActions = await this.props.sdk.space.getAllScheduledActions()

        this.setState({contentTypes:contentTypes,
                      cachedContentTypes:cachedContentTypes,
                      editorInterfaces:editorInterfaces,
                      users:users,
                      scheduledActions:scheduledActions})
      }
      render(){
        return(
            <>
                    <Card>
                      <Tag tagType="primary">sdk.space</Tag>
                                <br />
                                <br />
                        <Pill label="sdk.space.getContentTypes()" />
                        <div className="divSpacer">
                          <ReactJson src={this.state.contentTypes} collapsed={0} />
                        </div>
                        <Pill label="sdk.space.getCachedContentTypes()" />
                        <div className="divSpacer">
                          <ReactJson src={this.state.cachedContentTypes} collapsed={0} />
                        </div>
                        <Pill label="sdk.space.getUsers()" />
                        <div className="divSpacer">
                          <ReactJson src={this.state.users} collapsed={0} />
                        </div>
                        <Pill label="sdk.space.getAllScheduledActions()" />
                        <div className="divSpacer">
                          <ReactJson src={this.state.scheduledActions} collapsed={0} />
                        </div>
                    </Card>
            </>
        )
      }
  
}


