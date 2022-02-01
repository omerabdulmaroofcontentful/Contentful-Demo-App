import React, { Component } from 'react';
import {Card,Tag,Note,Autocomplete,TextLink } from '@contentful/forma-36-react-components';
import CMAWrapper from '../CMAWrapper'
import ReactJson from 'react-json-view'

export interface AppInstallationParameters { }

interface ConfigProps {
    sdk: any;
  }

interface ConfigState {
  contentTypes: any;

}

function CMAExplorerComponent(sdk:any) {
  const items = [
    // {label: 'appBundle.getMany()' },
    // {label: 'appDefinition.getMany()' },
    // {label: 'appInstallation.getMany()' },
    {label: 'asset.getMany()' },
    {label: 'contentType.getMany()' },
    {label: 'extension.getMany()' },
    {label: 'editorInterface.getMany()' },
    {label: 'entry.getMany()' },
    {label: 'role.getMany()' },
    {label: 'locale.getMany()' },
    // {label: 'space.getMany()' },
    //{label: 'scheduledActions.getMany()' },
    //{label: 'environment.getMany()' },
    //{label: 'environmentAlias.getMany()' },
    //{label: 'webhook.getMany()' },
    {label: 'tag.getMany()' },
    //{label: 'organizationMembership.getMany()' },
    //{label: 'spaceMember.getMany()' },
    //{label: 'team.getMany()' },
    //{label: 'teamSpaceMembership.getMany()' },
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
  const handleOnChange = async (item) =>{
    console.log(item)
    setSelectedItem(item.label);
    let keys:any = item.label.split('.')
    console.log('keys',keys)
    if(keys.includes('getMany()')){
      result = await CMAWrapper.getCMAWrapper(sdk)[keys[0]].getMany()
      if(isJSON(result)){
        setjsonresult(result)
      }else{
        setjsonresult({jsonresult:result})
      }

      console.log(result)
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
  

export default class CMAExplorer extends Component<ConfigProps,ConfigState> {
     constructor(props: any) {
        super(props);
        this.state = {contentTypes:{},
                     }

      
      }

      async componentDidMount(){
        //intiating it first time
        CMAWrapper.getCMAWrapper(this.props.sdk)
      }
      render(){
        return(
            <>
                    <Card>
                      <Tag tagType="primary">CMA Explorer</Tag>
                                <br />
                                <br />
                      <CMAExplorerComponent props={this.props.sdk}/>
                      <Note>This explorer show few methods, For all supported API endpoints <TextLink target="_blank" href="https://github.com/contentful/contentful-management.js/tree/legacy">visit</TextLink> </Note>
                    </Card>
            </>
        )
      }
  
}


