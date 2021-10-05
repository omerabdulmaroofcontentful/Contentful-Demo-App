
import React,{Component} from 'react';
import { Form,TextField,Button,Pill } from '@contentful/forma-36-react-components';
import { PageExtensionSDK } from 'contentful-ui-extensions-sdk';

interface ConfigProps {
  sdk: PageExtensionSDK;
}
interface ConfigState {
  
}

const NavigatorComponent = (props:any)=>{

  var entryId = ''
  const onClick= (event:any )=>{
   
    if(entryId.length != 0 ){

      try {
        props.sdk.navigator.openEntry(entryId)
      } catch (error) {
        props.sdk.notifier.error('Please provide Entry ID')
        console.log('wrong entryId')
      }
      
      console.log('not empty')
    }else{
      console.log('empty')
    }
  }

  const onTextChange= (event:any )=>{
    entryId = event.target.value
    console.log(event.target.value)
  }

  return(
    <>
        <Pill label="sdk.navigator" />
        <Form>
           <TextField  name="Entry ID" id="field" labelText="Entry ID" onChange={onTextChange}></TextField>
           <Button buttonType="primary" onClick={onClick}>Navigate</Button>
        </Form>
    </>
  )
}

export default class NavigatorScreen extends Component<ConfigProps, ConfigState> {

  constructor(props: any) {
    super(props);

  }

  async componentDidMount() {



  }

  render() {
    return (
      <>
        <NavigatorComponent sdk={this.props.sdk}/>
      </>
    )
  }

}
