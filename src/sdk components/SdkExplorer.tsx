import React, { Component } from 'react';
import {Card,Tag,Pill,Autocomplete } from '@contentful/forma-36-react-components';
import ReactJson from 'react-json-view'
//import Autocomplete from 'react-autocomplete'

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

  function SdkExplorerComponent(sdk:any) {
    const items = [
      {label: 'app' },
      {label: 'editor' },
      {label: 'editor.editorInterface' },
      {label: 'field.locale'},
      {label: 'field.type'},
      {label: 'locale'},
      {label: 'locales.default'},
      {label: 'locales.available'},
      {label: 'locales.names'},
      {label: 'locales.direction'},
      {label: 'locales.optional'},
      {label: 'parameters' },
      {label: 'parameters.installation' },
      {label: 'parameters.instance' },
      {label: 'user' },
      {label: 'ids' },
    ];
  
    const [filteredItems, setFilteredItems] = React.useState(items);
    const [selectedItem, setSelectedItem] = React.useState();
    const [jsonresult, setjsonresult] = React.useState({});
  
    const handleQueryChange = (query) => {
      setFilteredItems(
        query ? items.filter((item) => item.label.includes(query)) : items,
      );
    };

    const isJSON=(something)=>{
      if (typeof something != 'string')
      something = JSON.stringify(something);

      try {
          JSON.parse(something);
          return true;
      } catch (e) {
          return false;
      }
    }


    var result
    const handleOnChange = (item) => {
      console.log(item)
      setSelectedItem(item.label);
      let keys:any = item.label.split('.')
      console.log('keys',keys)
      try {
        keys.map((value,i)=>{
          console.log('value',i,value,keys.length)

          if(i==0){
            result = sdk.props[value]
          }
          else{
            result = result[value]
          }
          
          if(i === (keys.length-1)){
            console.log(i,keys.length-1)
            if(isJSON(result)){
              setjsonresult(result)
            }else{
              setjsonresult({jsonresult:result})
            }
          }
        
          console.log('result',result)
        })
      } catch (error) {
        console.log(error)
      }
    };
  
    return (
      <>
        <Autocomplete
        items={filteredItems}
        onQueryChange={handleQueryChange}
        width={'full'}
        placeholder={selectedItem}
        emptyListMessage={'no result found'}
        noMatchesMessage={'no matches'}
        onChange={handleOnChange}
      >
        {(options) =>
          options.map((option) => <span>{option.label}</span>)
        }
      </Autocomplete>

      <ReactJson src={jsonresult} collapsed={1} />
      </>
    );
  }

export default class SdkExplorer extends Component<ConfigProps,ConfigState> {
      render(){
        return(
            <>
                    <Card>
                      <Tag tagType="primary">sdk.</Tag>
                                <br />
                                <br />
                        <Pill label="this.props.sdk." />
                        <SdkExplorerComponent props={this.props.sdk}/>
                    </Card>
            </>
        )
      }
  
}


