
import React, { Component } from 'react';
import { List,ListItem,Pill } from '@contentful/forma-36-react-components';
import { AppExtensionSDK, PageExtensionSDK } from 'contentful-ui-extensions-sdk';

interface ConfigProps {
  sdk: PageExtensionSDK;
}
interface ConfigState {
  locales: any;
}

const CreateLocalesTable = (props: any) => {

  return (
    <>
      <List>
        <ListItem>Default Locale: {props.locales.default}</ListItem>
      </List>
    </>
  )
}

export default class LocalesScreen extends Component<ConfigProps, ConfigState> {

  constructor(props: any) {
    super(props);
    this.state = { locales: '' };

  }

  async componentDidMount() {
    console.log(this.props.sdk.user)
    let locales = await this.props.sdk.locales
    if (locales)
      this.setState({ locales: locales, })
  }

  render() {
    return (
      <>
        <Pill label="sdk.locales" />
        <CreateLocalesTable locales={this.state.locales} />
      </>
    )
  }

}
