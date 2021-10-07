import React, { Component } from 'react';
import {Card,Tag,Pill,TextField,Button } from '@contentful/forma-36-react-components';
import ReactJson from 'react-json-view'
import Autocomplete from 'react-autocomplete'

export interface AppInstallationParameters { }

interface ConfigProps {
    sdk: any;
  }

interface ConfigState {
  jsonresult: any;
  stringresult:any;
  sdkAutoComplete:any;
  sdkAutoCompleteString:any;
}



  var methodsArray = new Array()
  var methodString 
  const onTextChange= (event:any )=>{
    methodString = event.target.value
  }


export default class SdkExplorer extends Component<ConfigProps,ConfigState> {
     constructor(props: any) {
        super(props);
        //this.state = {{jsonresult:{}}}
        this.state = { jsonresult: {},
                       stringresult:'',
                       sdkAutoComplete:[{label:'parameters'},
                         {label:'parameters.installation'},
                         {label:'parameters.instance'},
                         {label:'ids'}                                                  
                       ],
                       sdkAutoCompleteString:''}; 
        this.onClick = this.onClick.bind(this);
        this.onClick2 = this.onClick2.bind(this);
        this.onTextChange2 = this.onTextChange2.bind(this);
      }


      isJSON (something) {
        if (typeof something != 'string')
            something = JSON.stringify(something);

        try {
            JSON.parse(something);
            return true;
        } catch (e) {
            return false;
        }
      }

      onClick(event:any) {
        console.log('length',methodsArray.length)
        this.setState({jsonresult:{},stringresult:''})

        if(methodsArray.length>0){
          methodsArray = []
          console.log('deleteing methodArry')
        }
          
        let keys:any = methodString.split('.')
        var result

        try {
          keys.map((value,i)=>{
            console.log('value',i,value,keys.length)

            if(i==0){
              result = this.props.sdk[value]
            }
            else{
              result = result[value]
            }
            
            if(i === (keys.length-1)){
              console.log(i,keys.length-1)
              if(this.isJSON(result)){
                this.setState({jsonresult:result})
              }else{
                this.setState({jsonresult:{result}})
              }
            }
          
            console.log('result',result)
          })
        } catch (error) {
          console.log(error)
        }
   
 
      }

      onClick2(value:any){
        console.log(value)
        this.setState({sdkAutoCompleteString:value})

        console.log('length',value.length)
        this.setState({jsonresult:{},stringresult:''})

        let keys:any = value.split('.')
        var result

        try {
          keys.map((value,i)=>{
            console.log('value',i,value,keys.length)

            if(i==0){
              result = this.props.sdk[value]
            }
            else{
              result = result[value]
            }
            
            if(i === (keys.length-1)){
              console.log(i,keys.length-1)
              if(this.isJSON(result)){
                this.setState({jsonresult:result})
              }else{
                this.setState({jsonresult:{result}})
              }
            }
          
            console.log('result',result)
          })
        } catch (error) {
          console.log(error)
        }
      }

      onTextChange2(e:any){
        console.log(e)
        this.setState({sdkAutoCompleteString:e.target.value})
      }

      render(){
        return(
            <>
                    <Card>
                      <Tag tagType="primary">sdk.</Tag>
                                <br />
                                <br />
                        <Pill label="this.props.sdk." />
                        
                        <Autocomplete
                            getItemValue={(item) => item.label}
                            items={this.state.sdkAutoComplete}
                            renderItem={(item, isHighlighted) =>
                              <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                                {item.label}
                              </div>
                            }
                            value={this.state.sdkAutoCompleteString}
                            onChange={this.onTextChange2}
                            onSelect={this.onClick2}
                          />

                        {/* <ReactJson src={this.state.jsonresult} collapsed={1} />  */}
                    </Card>
            </>
        )
      }
  
}


