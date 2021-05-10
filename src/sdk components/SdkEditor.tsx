import React, { Component } from 'react';
import { Tag,Card, Pill } from '@contentful/forma-36-react-components';
import ReactJson from 'react-json-view'

export interface AppInstallationParameters { }

interface ConfigProps {
  sdk: any;
}

interface ConfigState {
  localeUpdatedValue: any;
  showDisabledFields: any;
}


export default class SdkEditor extends Component<ConfigProps, ConfigState> {
  constructor(props: any) {
    super(props);
    this.state = { localeUpdatedValue: {}, showDisabledFields: true }

    this.props.sdk.editor.onLocaleSettingsChanged((value: any) => {
      console.log('Locale changed', value)
      this.setState({ localeUpdatedValue: value })
    })

    this.props.sdk.editor.onShowDisabledFieldsChanged((value: any) => {
      console.log('Disabled fields changed', value)
      this.setState({ showDisabledFields: JSON.stringify(value) })
    })

  }

  render() {
    return (
      <>
       
        <Card>
        <Tag tagType="primary">sdk.editor</Tag>
                   <br />
                   <br />
          <Pill label="sdk.editor.editorInterface" />
          <div  className="divSpacer">
            <ReactJson src={this.props.sdk.editor.editorInterface} collapsed={0} />
          </div>
          <Pill label="sdk.editor.onLocaleSettingsChanged(callback): function" />
          <div  className="divSpacer">
            <ReactJson src={this.state.localeUpdatedValue} collapsed={0} />
          </div>
          <Pill label="sdk.editor.onShowDisabledFieldsChanged(callback): function" />
          <div  className="divSpacer">
            Show disabled fields: {this.state.showDisabledFields}
          </div>
        </Card>
      </>
    )
  }

}


