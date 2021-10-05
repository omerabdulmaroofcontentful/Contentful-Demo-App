import React, { Component } from 'react';
import {Tag,Pill,Card } from '@contentful/forma-36-react-components';
import ReactJson from 'react-json-view'


interface ConfigProps {
    sdk: any;
  }

interface ConfigState {
  tasks:any;
  entryChanged:any;
}
  


export default class SdkEntry extends Component<ConfigProps,ConfigState> {

      constructor(props:any){
        super(props);
        this.state={tasks:{},entryChanged:{}}

        this.props.sdk.entry.onSysChanged((value:any)=>{
          console.log('onSysChanged',value)
          this.setState({entryChanged:value})
        })
      }

      async componentDidMount() {

      }

      render(){
        return(
            <>
             <Card>
                   <Tag tagType="primary">sdk.entry</Tag>
                   <br />
                   <br />
                   <Pill label="sdk.entry.getSys()" />
                   <div className="divSpacer">
                      <ReactJson src={this.props.sdk.entry.getSys()} collapsed={0}/>
                  </div>
                  <Pill label="sdk.entry.onSysChanged(callback): function" />
                   <div className="divSpacer">
                      <ReactJson src={this.state.entryChanged} collapsed={0}/>
                  </div>
                  <Pill label="sdk.entry.field[id]" />
                   <div  className="divSpacer">
                      <ReactJson src={this.props.sdk.entry.fields["field1"]} collapsed={0}/>
                  </div>
                  <Pill label="sdk.entry.getTasks()" />
                   <div  className="divSpacer">
                      <ReactJson src={{}} collapsed={1}/>
                  </div>
              </Card>
            </>
        )
      }
  
}


