import React, { Component } from 'react';
import { Card,Icon, Heading, Form, Workbench, Paragraph, Tabs, Tab,FormLabel ,Pill } from '@contentful/forma-36-react-components';
import '@contentful/forma-36-react-components/dist/styles.css';
import { MultipleEntryReferenceEditor } from '@contentful/field-editor-reference';
import { AppExtensionSDK, PageExtensionSDK } from 'contentful-ui-extensions-sdk';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { css } from 'emotion';
import Access from './AccessScreen'
import Locales from './LocalesScreen'
import Navigator from './NavigatorScreen'
import Space from './SpaceScreen'
import User from './UserScreen'

interface PageProps {
  sdk: PageExtensionSDK;
}

interface PageState {
  installationParameters: {},
}

const ParametersComponent = (props:any)=>{
  console.log('ParametersComponent',JSON.stringify(props))

  return(
    <>
      <Pill label="sdk.parameters.installation" />
      <Form>
          <FormLabel htmlFor="Param 1">{props.installationParams.param1}</FormLabel>
          <FormLabel htmlFor="Param 2">{props.installationParams.param2}</FormLabel>
      </Form>
    </>
  )
}

export default class Page extends Component<PageProps,PageState>{

  constructor(props: any){
    super(props);
    this.state = { installationParameters: {}};
  }

  async componentDidMount() {
    // Get current parameters of the app.
    // If the app is not installed yet, `parameters` will be `null`.
    console.log('componentDidMount',this.props.sdk.parameters)    
    let installationParameters = await this.props.sdk.parameters.installation
    if (installationParameters){
      this.setState({installationParameters:installationParameters})
      console.log('ConfiguerComponent',this.state.installationParameters)
    }
    }

  getSDK(){
    return this.props.sdk
  }


  render(){
    return (
      <>
      <Card>
      <div className="flexbox-container">
          <Icon icon="ReceiptTrimmed" size="large"/>
          <Heading>LOCATION_PAGE</Heading>
      </div>
      <Workbench className={css({ margin: '80px' })}>
      
      <Form>
        <Heading>App Framework SDK playground</Heading>
        <Paragraph>Welcome to your contentful app. This is your config page...</Paragraph>
        <BrowserRouter >
          <Tabs
            role="navigation"
            withDivider
          >
            <Route
                 render={tabprops => (
                  <>
                      {/* <Link to="/access">Access</Link> */}
                      <Tab
                        id="access"
                        selected={tabprops.location.pathname === 'access'}
                        onSelect={()=>{
                          tabprops.history.push('/access') 
                          //console.log('access',JSON.stringify(this.props.sdk)) 
                        }}
                      >
                        Access
                      </Tab>
                      <Tab
                        id="locales"
                        onSelect={()=>{
                          tabprops.history.push('/locales')
                        }}
                      >
                        Locales
                      </Tab>
                      <Tab
                        id="navigator"
                        onSelect={()=>{
                          tabprops.history.push('/navigator')
                        }}
                      >
                        Navigator
                      </Tab>
                      <Tab
                        id="parameters"
                        onSelect={()=>{
                          tabprops.history.push('/parameters')
                        }}
                      >
                        Parameters
                      </Tab>
                      <Tab
                        id="space"
                        onSelect={()=>{
                          tabprops.history.push('/space')
                        }}
                      >
                        Space
                      </Tab>
                      <Tab
                        id="user"
                        onSelect={()=>{
                          tabprops.history.push('/user')
                        }}
                      >
                        User
                      </Tab> 
                     
                  </>
                )}           
            />
          </Tabs> 
          <Switch>

              {/* <Route path="/parameters"  component={ParametersComponent}/> */}
              <Route path="/parameters" render={routeProps => <ParametersComponent  installationParams={this.state.installationParameters}/>}/>
              <Route path="/access" render={routeProps => <Access {...routeProps} sdk={this.props.sdk}/>}/>
              <Route path="/locales" render={routeProps => <Locales {...routeProps} sdk={this.props.sdk}/>}/>
              <Route path="/navigator" render={routeProps => <Navigator {...routeProps} sdk={this.props.sdk}/>}/>
              <Route path="/space" render={routeProps => <Space {...routeProps} sdk={this.props.sdk}/>}/>
              <Route path="/user" render={routeProps => <User {...routeProps} sdk={this.props.sdk}/>}/>
          </Switch>
        </BrowserRouter >
      </Form>
    </Workbench>
      </Card>
     
      </>
    )
  }
}

