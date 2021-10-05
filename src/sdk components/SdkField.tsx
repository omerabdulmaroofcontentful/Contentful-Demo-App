import React, { Component } from 'react';
import {Pill,Card,Tag,TextInput, Button } from '@contentful/forma-36-react-components';
import ReactJson from 'react-json-view'

export interface AppInstallationParameters { }

interface ConfigProps {
    sdk: any;
  }
  
interface ConfigState {
  field:{};
  fieldValue:''
  fieldValueChanges:''
}


export default class SdkField extends Component<ConfigProps,ConfigState> {
     constructor(props: any) {
        super(props);
        this.state={field:{},fieldValue:'',fieldValueChanges:''}

      }
      
      async componentDidMount(){
        let field = await this.props.sdk.field
        let fieldValue = field.getValue()
        this.setState({field:field,fieldValue:fieldValue})


        this.props.sdk.field.onValueChanged((value:any) =>{
            this.setState({fieldValueChanges:value})
        })
      }

      onChange = (e: any) => {
        const value = e.currentTarget.value;
        if (value) {
          this.props.sdk.field.setValue(value);
        } else {
          this.props.sdk.field.removeValue();
        }
      };

       onClick =(e:any)=>{
        this.props.sdk.field.removeValue()
        this.setState({fieldValue:'',fieldValueChanges:''})
      }

      render(){
        return(
            <>
                   <Card>
                    <Tag tagType="primary">sdk.field</Tag>
                    <br />
                    <br />

                    <Pill label="sdk.field"/>
                    <div className="divSpacer">
                      <ReactJson src={this.state.field} collapsed={0}/>
                   </div>

                     <Pill label="sdk.field.setValue(value):"/>
                    <TextInput id="input" onChange={this.onChange} value={this.state.fieldValue}></TextInput> 
 
                   <Pill label="sdk.field.removeValue():"/>
                    <div className="divSpacer">
                      <Button onClick={this.onClick}>Remove</Button>
                   </div>

                   <Pill label="sdk.field.onValueChanged" />
                   <TextInput onChange={this.onChange} value={this.state.fieldValueChanges}></TextInput>
                  </Card>
            </>
        )
      }
  
}


