import React, { Component } from 'react';
import {Button,Card,Tag,Pill } from '@contentful/forma-36-react-components';
import ReactJson from 'react-json-view'

export interface AppInstallationParameters { }

interface ConfigProps {
    sdk: any;
  }
  
interface ConfigState {

}



export default class SdkDialog extends Component<ConfigProps,ConfigState> {
     constructor(props: any) {
        super(props);
        

      }

      openExtension =(e:any)=>{
          this.props.sdk.dialogs.openExtension({
            id:'dialog',
            width:500,
            parameters:{test:'test',value:42}
          }).then((data:any) =>{
            console.log(data)
          })
      }

      openCurrentApp =(e:any)=>{
        this.props.sdk.dialogs.openCurrentApp({
          id:'dialog',
          width:1000,
          shouldCloseOnEscapePress:true,
          allowHeightOverflow:true,
          minHeight:500,
          parameters:{test:'test',value:42}
        }).then((data:any) =>{
          console.log(data)
        })
      }

      openCurrent =(e:any)=>{
        this.props.sdk.dialogs.openCurrent({
          id:'dialog',
          width:1000,
          minHeight:500,
          shouldCloseOnEscapePress:true,
          allowHeightOverflow:true,
          parameters:{test:'test',value:42}
        }).then((data:any) =>{
          console.log(data)
        })
      }

      openAlert =(e:any)=>{
        this.props.sdk.dialogs.openAlert({
          title:'alert title',
          message:'alert message'
        }).then((data:any) =>{
          console.log(data)
        })
      }

      openConfirm =(e:any)=>{
        this.props.sdk.dialogs.openConfirm({
          title: 'My question',
          message: 'What is your answer?',
          intent: 'positive',
          confirmLabel: 'Yes!',
          cancelLabel: 'No',
        }).then((data:any) =>{
          console.log(data)
        })
      }

      render(){
        return(
            <>
                    <Card>
                      <Tag tagType="primary">sdk.dialogs</Tag>
                                <br />
                                <br />
                        {/* <Pill label="sdk.dialogs.openExtension" />
                        <div>
                          <Button onClick={this.openExtension}>sdk.dialogs.openExtension</Button>
                        </div> */}

                        {/* <Pill label="sdk.dialogs.openCurrentApp" /> */}
                        <div>
                          <Button onClick={this.openCurrentApp}>sdk.dialogs.openCurrentApp</Button>
                        </div>
                        <br />
                        <div>
                          <Button onClick={this.openCurrent}>sdk.dialogs.openCurrent</Button>
                        </div>
                        <br />
                        <div>
                          <Button onClick={this.openAlert}>sdk.dialogs.openAlert</Button>
                        </div>
                        <br />
                        <div>
                          <Button onClick={this.openConfirm}>sdk.dialogs.openConfirm</Button>
                        </div>
                    </Card>
            </>
        )
      }
  
}


