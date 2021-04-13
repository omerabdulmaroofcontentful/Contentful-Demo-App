import React, { Component } from 'react';
import {Table,TableHead,TableCell,TableBody, TableRow,Spinner,Pill } from '@contentful/forma-36-react-components';
import { PageExtensionSDK } from 'contentful-ui-extensions-sdk';


export interface AppInstallationParameters { }

interface ConfigProps {
    sdk: PageExtensionSDK;
  }
  
interface ConfigState {
accessResult:any;
}

let supportTypes = ['ContentType','EditorInterface','Entry','Asset']
let accessTypes = ['create','read','update','delete','publish','unpublish','archive','unarchive']

const  CreateAccessTable =  (props:any)=>{
  

  if(props.accessResult){
    console.log('pros',props.accessResult)
    let accessResult = props.accessResult
    // props.accessResult.filter((value:any) => value.type.access =='create' )
    return(
      <Table>
      <TableHead>
          <TableCell></TableCell>
          {supportTypes.map((value) => <TableCell>{value}</TableCell>)}
      </TableHead>
      <TableBody>
        {accessTypes.map((access) => <TableRow key={access}><TableCell>{access}</TableCell>{supportTypes.map((support)=> <TableCell>{JSON.stringify(accessResult.filter((value:any)=> value.type.access==access && value.type.support==support)[0].value)}</TableCell> )}</TableRow>)}
      </TableBody>
       </Table>
    )
  }else{
    console.log('pros','empty')
    return(<Spinner size="large"/>)
  }
  // let temp = props.accessResult
  // temp.foreach((test:any)=>console.log(test))

  //props.accessResult.foreach((test:any)=>console.log(test))
  //  let accessResult = JSON.parse(props.accessResult)
  //  props.accessResult.map((result:any)=> console.log(result))
   // props.accessResult.filter((result:any) => result.type.support=='Entry' && result.type.access =='read')
 
}

async function accessPopulationFunction (supportTypes:any,accessTypes:any,props:any){

  return await Promise.all(accessTypes.map(async (access:any)=> {
    return await Promise.all(supportTypes.map(async (support:any)=> {
      if(support.length!=-1) {

      //  console.log('componentDidMount1',support,access,await props.sdk.access.can(access,support))
        let result = false
        try {
          result = await props.sdk.access.can(access,support)
          console.log(`${access} for ${support} ${result}`)
        } catch (e) { 
          result = false
          console.log(`${access} for ${support} not found`)
        }

        
        if((access==='create' && support==='EditorInterface') ||
           (access==='delete' && support==='EditorInterface') ||
           (access==='publish' && support==='EditorInterface') ||
           (access==='unpublish' && support==='EditorInterface') ||
           (access==='archive' && support==='EditorInterface')||
           (access==='archive' && support==='ContentType')||
           (access==='unarchive' && support==='EditorInterface')||
           (access==='unarchive' && support==='ContentType')){
    
          return{
            type:{support,access},
            value: 'not supported'
          }
        }

        return{
            type:{support,access},
            value: result
        }
      }
      else{
        return {}
      }
    }))
  }))
}

export default class AccessScreen extends Component<ConfigProps,ConfigState> {
     constructor(props: any) {
        super(props);
        this.state = {accessResult:''}; 

      }

      async  componentDidMount() {

        let result = await accessPopulationFunction(supportTypes,accessTypes,this.props)
        console.log('result',result)

        var accessResultArray:string[] = []
        
        result.forEach((value:any) =>{
           value.forEach((value2:any) =>{
            accessResultArray.push(value2)
           })
          })

        this.setState({
          accessResult:accessResultArray,
        })
      }

      render(){
        return(
            <>
              <Pill label="sdk.access.can" />
              <CreateAccessTable sdk={this.props.sdk} accessResult={this.state.accessResult} test="value"/>
            </>
        )
      }
  
}

// const Access =  (sdk:AppExtensionSDK) => {

//   React.useEffect(()=> {
    
//     async function getContentfulInfo() {
//         // let contentTypes = await sdk.space.getContentTypes()     
//         // console.log('Access Component',contentTypes)
//     }

//     getContentfulInfo()
//   })


//   return (
//     <>
//       <Paragraph>Hello ACCESS Component</Paragraph>
//       <p>
//           sdk.access.can()
//       </p>
//     </>
//   )};

//export default Access;
