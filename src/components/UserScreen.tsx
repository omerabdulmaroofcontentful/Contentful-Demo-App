
import React, { Component } from 'react';
import {Pill, Table, TableHead, TableRow, TableCell, TableBody } from '@contentful/forma-36-react-components';
import { AppExtensionSDK, PageExtensionSDK } from 'contentful-ui-extensions-sdk';
// import { highlight, languages } from 'prismjs/components/prism-core';
// import 'prismjs/components/prism-clike';
// import 'prismjs/components/prism-javascript';
import Editor from 'react-simple-code-editor';

interface ConfigProps {
  sdk: PageExtensionSDK;
}

const code = `function add(a, b) {
  return a + b;
}`;

const CreateUserTable = (props: any) => {
  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Admin</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>{props.user.firstName + " " + props.user.lastName}</TableCell>
            <TableCell>{props.user.email}</TableCell>
            <TableCell>{String(props.user.spaceMembership.admin)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  )

}

export default class UserScreen extends Component<ConfigProps> {
  constructor(props: any) {
    super(props);
    this.state = { code };

  }

  async componentDidMount() {

    console.log('user info', JSON.stringify(this.props.sdk.user.spaceMembership.admin))
  }

  render() {
    return (
      <>
            <Pill label="sdk.user"/>
        <CreateUserTable user={this.props.sdk.user} />
        {/* <Editor
          value={this.state.code}
          onValueChange={code => this.setState({ code })}
          highlight={}
          padding={10}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 12,
          }} */}
        {/* /> */}
      </>
    )
  }

}
