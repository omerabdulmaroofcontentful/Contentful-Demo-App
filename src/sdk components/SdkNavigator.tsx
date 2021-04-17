import React, { Component } from 'react';
import {Card,Tag,Button,TextField } from '@contentful/forma-36-react-components';
import ReactJson from 'react-json-view'

export interface AppInstallationParameters { }

interface ConfigProps {
    sdk: any;
  }
  
interface ConfigState {
  entryId:'',
  assetId:'',
  contentTypeId:'',

}


export default class SdkNavigator extends Component<ConfigProps,ConfigState> {
     constructor(props: any) {
        super(props);
        this.state = {entryId:'',assetId:'',contentTypeId:''}

      }

      openEntry =(e:any)=>{
        this.props.sdk.navigator.openEntry(this.state.entryId,'')
      }

      openNewEntry =(e:any)=>{
        this.props.sdk.navigator.openNewEntry(this.state.contentTypeId,'')
      }

      openAsset =(e:any)=>{
        this.props.sdk.navigator.openNewEntry(this.state.assetId,'')
      }

      openNewAsset =(e:any)=>{
        this.props.sdk.navigator.openNewAsset()
      }

      openCurrentAppPage =(e:any)=>{
        this.props.sdk.navigator.openCurrentAppPage()
      }

      openAppConfig =(e:any)=>{
        this.props.sdk.navigator.openAppConfig()
      }


      onTextChange= (event:any )=>{
        event.preventDefault() 
        console.log(event.target.id)
        if(event.target.id =='entryId')
          this.setState({entryId:event.target.value})
        else if(event.target.id =='assetId')
          this.setState({assetId:event.target.value})
        else if(event.target.id =='newEntryId')
          this.setState({contentTypeId:event.target.value})

      }

      render(){
        return(
            <>
                    <Card>
                      <Tag tagType="primary">sdk.navigator</Tag>
                                <br />
                                <br />
                        <div>
                             <TextField  name="entryId" id="entryId" labelText="Entry id" helpText="Please provide entry id" onChange={this.onTextChange} value={this.state.entryId}></TextField>
                             <Button onClick={this.openEntry}>navigator.openEntry(entryId, options)</Button>
                        </div>
                        <br />
                        <br />
                        <div>
                            <TextField  name="asset" id="assetId" labelText="Asset id" helpText="Please provide asset id" onChange={this.onTextChange} value={this.state.assetId}></TextField>
                             <Button onClick={this.openAsset}>navigator.openAsset(entryId, options)</Button>
                        </div>
                        <br />
                        <br />
                        <div>
                             <TextField  name="entryId" id="newEntryId" labelText="Content Type Id" helpText="Please provide Content Type Id" onChange={this.onTextChange} value={this.state.entryId}></TextField>
                             <Button onClick={this.openNewEntry}>navigator.openNewEntry(contentTypeId, options)</Button>
                        </div>
                        <br />
                        <br />
                        <div>
                             <Button onClick={this.openNewAsset}>navigator.openNewAsset(options)</Button>
                        </div>
                        <br />
                        <div>
                             <Button onClick={this.openCurrentAppPage}>navigator.openCurrentAppPage()</Button>
                        </div>
                        <br />
                        <div>
                             <Button onClick={this.openAppConfig}>navigator.openAppConfig()</Button>
                        </div>
                    
                    </Card>
            </>
        )
      }
  
}


