import React, { Component } from 'react';
import { Card, Pill, Tag, Typography } from '@contentful/forma-36-react-components';
import ReactJson from 'react-json-view'
import { locations } from '@contentful/app-sdk';
export interface AppInstallationParameters { }

interface ConfigProps {
  sdk: any;
}

interface ConfigState {
  location: any
}


export default class SdkLocation extends Component<ConfigProps, ConfigState> {
  constructor(props: any) {
    super(props);
    this.state = { location: '' }
  }

  async componentDidMount() {
    if(this.props.sdk.location.is(locations.LOCATION_APP_CONFIG)){
      this.setState({location:'locations.LOCATION_APP_CONFIG'})
    }
    if(this.props.sdk.location.is(locations.LOCATION_DIALOG)){
      this.setState({location:'locations.LOCATION_DIALOG'})
    }
    if(this.props.sdk.location.is(locations.LOCATION_ENTRY_EDITOR)){
      this.setState({location:'locations.LOCATION_ENTRY_EDITOR'})
    }
    if(this.props.sdk.location.is(locations.LOCATION_ENTRY_FIELD)){
      this.setState({location:'locations.LOCATION_ENTRY_FIELD'})
    }
    if(this.props.sdk.location.is(locations.LOCATION_ENTRY_SIDEBAR)){
      this.setState({location:'locations.LOCATION_ENTRY_SIDEBAR'})
    }
    if(this.props.sdk.location.is(locations.LOCATION_PAGE)){
      this.setState({location:'locations.LOCATION_PAGE'})
    }
 
    console.log('location',this.state.location)
  }

  render() {
    return (
      <>
        <Card>
          <Tag tagType="primary">sdk.location</Tag>
          <br />
          <br />

          <Pill label="sdk.location.is"/>
                    <div className="divSpacer">
                        <Typography>{this.state.location}</Typography>
                    </div>
        </Card>
     
      </>
    )
  }

}


