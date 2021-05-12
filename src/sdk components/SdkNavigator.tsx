import React, { Component } from 'react';
import {Card,Tag,Button, TextInput } from '@contentful/forma-36-react-components';
import ReactJson from 'react-json-view'
import {
  locations
} from '@contentful/app-sdk'

export interface AppInstallationParameters { }

interface ConfigProps {
    sdk: any;
  }
  
interface ConfigState {
  entryId:'',
  assetId:'',
  contentTypeId:'',
  className: any ,
}


export default class SdkNavigator extends Component<ConfigProps,ConfigState> {
     constructor(props: any) {
        super(props);
        this.state = {entryId:'',assetId:'',contentTypeId:'', className:''}

      }

       componentDidMount = () => {
          this.setState({className:'smallSizedButton'}) 
          if(!this.props.sdk.location.is(locations.LOCATION_ENTRY_SIDEBAR)) {
            this.setState({className:'normalButton'}) 
          }
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
                             <TextInput className={this.state.className} name="entryId" id="entryId" placeholder="Please provide entry id" onChange={this.onTextChange} value={this.state.entryId}></TextInput>
                             <Button className={this.state.className} onClick={this.openEntry}>navigator.openEntry(entryId, options)</Button>
                        </div>
                        <br />
                        <br />
                        <div>
                            <TextInput className={this.state.className} name="asset" id="assetId" placeholder="Please provide asset id" onChange={this.onTextChange} value={this.state.assetId}></TextInput>
                             <Button className={this.state.className} onClick={this.openAsset}>navigator.openAsset(entryId, options)</Button>
                        </div>
                        <br />
                        <br />
                        <div>
                             <TextInput className={this.state.className} name="entryId" id="newEntryId" placeholder="Please provide Content Type Id" onChange={this.onTextChange} value={this.state.entryId}></TextInput>
                             <Button className={this.state.className} onClick={this.openNewEntry}>navigator.openNewEntry(contentTypeId, options)</Button>
                        </div>
                        <br />
                        <br />
                        <div>
                             <Button className={this.state.className} onClick={this.openNewAsset}>navigator.openNewAsset(options)</Button>
                        </div>
                        <br />
                        <div>
                             <Button className={this.state.className} onClick={this.openCurrentAppPage}>navigator.openCurrentAppPage()</Button>
                        </div>
                        <br />
                        <div>
                             <Button className={this.state.className} onClick={this.openAppConfig}>navigator.openAppConfig()</Button>
                        </div>
                    
                    </Card>
            </>
        )
      }
  
}


