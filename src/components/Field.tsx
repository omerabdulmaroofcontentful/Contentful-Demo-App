import React, { Component } from 'react';
import {Icon,Heading,Button, Modal } from '@contentful/forma-36-react-components';
import { FieldExtensionSDK }  from '@contentful/app-sdk';
import SdkLocation from '../sdk components/SdkLocation'
import SdkEditor from '../sdk components/SdkEditor'
import SdkEntry from '../sdk components/SdkEntry'
import SdkContentType from '../sdk components/SdkContentType'
import SdkParams from '../sdk components/SdkParams'
import SdkField from '../sdk components/SdkField'
import SdkDialog from '../sdk components/SdkDialog'
import SdkNavigator from '../sdk components/SdkNavigator'
import SdkIds from '../sdk components/SdkIds'
import SdkUser from '../sdk components/SdkUser'
import SdkLocales from '../sdk components/SdkLocales'
import SdkSpace from '../sdk components/SdkSpace'
import ThirdPartyAPI from '../sdk components/ThirdPartyAPI'
import SdkExplorer from '../sdk components/SdkExplorer'

interface FieldProps {
  sdk: FieldExtensionSDK;
}
interface ConfigState {
  value: string,
  instanceParams:string,
  installationParams:string,
  showModal:boolean
}


const ModalComponent = (props: any) => {

  const [isShown, setShown] = React.useState(false);

  return (
    <>
      <Modal title="Centered modal" isShown={isShown} onClose={setShown}>
        {
          () => (
            <>
              <Modal.Header title="Title" />
              <Modal.Content>Hello from controlled modal window</Modal.Content>
              <Modal.Controls>
                <Button buttonType="positive" onClick={() => setShown(false)}>
                    Confirm
                </Button>
                <Button buttonType="muted" onClick={() => setShown(false)}>
                    Close
                </Button>
              </Modal.Controls>
            </>
          )
        }
      </Modal>
    </>
  )
}

export default class FieldScreen extends Component<FieldProps, ConfigState> {

  constructor(props: any) {
    super(props);
    this.state = {
      value: props.sdk.field.getValue() || '',
      showModal:false,
      installationParams:'',
      instanceParams:''
    };

    this.props.sdk.window.updateHeight(1000)
  }

  async componentDidMount() {

    let instanceParameters = await JSON.stringify(this.props.sdk.parameters.instance)
    let installationParameters = await JSON.stringify(this.props.sdk.parameters.installation)

    this.setState({instanceParams:instanceParameters,installationParams:installationParameters})
    console.log('componentDidMount',this.state.instanceParams)

    // this.props.sdk.field.onValueChanged((value:any)=>{
    //   console.log(value)
    // })
    // this.props.sdk.entry.fields.field1.onValueChanged('en-GB', (value) => {
    //   this.props.sdk.entry.fields.field2.setValue(value)
    // })
  }


  onChange = (e: any) => {
    const value = e.currentTarget.value;
    this.setState({ value });
    if (value) {
      this.props.sdk.field.setValue(value);
    } else {
      this.props.sdk.field.removeValue();
    }
  };

  onButtonClick = (e: any) => {
    console.log('button clicked')
  }

  render() {

    return (<>
      <div>    
          <div className="flexbox-container">
            <Icon icon="ReceiptTrimmed" size="large"/>
            <Heading>LOCATION_ENTRY_FIELD</Heading>
          </div>
          <div className="grid-container-field">
          <SdkLocation sdk={this.props.sdk}/>
          <SdkField sdk={this.props.sdk}/>
          <SdkEditor sdk={this.props.sdk}/>
          <SdkEntry sdk={this.props.sdk}/>
          <SdkContentType sdk={this.props.sdk}/>
          <SdkParams sdk={this.props.sdk}/>
          <SdkDialog sdk={this.props.sdk}/>
          <SdkNavigator sdk={this.props.sdk}/>
          <SdkIds sdk={this.props.sdk}/>
          <SdkUser sdk={this.props.sdk}/>
          <SdkLocales sdk={this.props.sdk}/>
          <SdkSpace sdk={this.props.sdk}/>
          <ThirdPartyAPI sdk={this.props.sdk}/>
          <SdkExplorer sdk={this.props.sdk}/>
          </div> 
      </div>
    </>
    )
  }

}

