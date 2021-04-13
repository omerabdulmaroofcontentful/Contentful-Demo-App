import React,{Component} from 'react';
import {PageExtensionSDK } from 'contentful-ui-extensions-sdk';
import {Table,TableHead,TableCell,TableBody, TableRow,Pill,Icon } from '@contentful/forma-36-react-components';

interface ConfigProps {
  sdk: PageExtensionSDK;
}
interface ConfigState {
  scheduleAction:string;
  users:string,
  editorInterface:string
}

const SpaceScheduleComponent = (props:any)=>{

  let scheduleActions = JSON.parse(props.scheduleActions)
  console.log('SpaceComponent',scheduleActions)
 
  return(

    <>
    <Pill
      label="sdk.space.getAllScheduledActions()"
      dragHandleComponent={
        <Icon
          icon="ArrowUp"
          color="positive"
          // style={{ padding: '0.375rem 0.625rem' }}
        />
      }
    />
    <Table>
      <TableHead>
          <TableCell>Entry Id</TableCell>
          <TableCell>Date of Schedule</TableCell>
          <TableCell>Schedule Type</TableCell>
          <TableCell></TableCell>
      </TableHead>
     <TableBody> 
        {scheduleActions.map((scheduleAction:any) => 
          <TableRow> 
            <TableCell>{scheduleAction.entity.sys.id}</TableCell>
            <TableCell>{scheduleAction.scheduledFor.datetime}</TableCell>
            <TableCell>{scheduleAction.entity.sys.linkType}</TableCell>
          </TableRow>)}
     </TableBody>
    </Table>
    </>
  )
}
const SpaceUserComponent = (props:any)=>{

  let users = JSON.parse(props.users)

  return(<>
    <Pill
      label="sdk.space.getUsers()"
      dragHandleComponent={
        <Icon
          icon="ArrowUp"
          color="positive"
        // style={{ padding: '0.375rem 0.625rem' }}
        />
      } />

    <Table>
      <TableHead>
        <TableCell>Name</TableCell>
        <TableCell>Email</TableCell>
        <TableCell></TableCell>
      </TableHead>
      <TableBody>
        {users.items.map((user: any) =>
          <TableRow>
            <TableCell>{user.firstName}</TableCell>
            <TableCell>{user.email}</TableCell>
          </TableRow>)}
      </TableBody>
    </Table>

  </>)
}
const SpaceEditorInterface = (props:any)=>{

  let editorInterfaces = JSON.parse(props.editorInterfaces)

  return(<>
      <Pill
      label="sdk.space.getEditorInterfaces()"
      dragHandleComponent={
        <Icon
          icon="ArrowUp"
          color="positive"
        // style={{ padding: '0.375rem 0.625rem' }}
        />
      } />

<Table>
      <TableHead>
        <TableCell>ContentType Name</TableCell>
        <TableCell>Controls</TableCell>
      </TableHead>
      <TableBody>
        {editorInterfaces.items.map((editorInterface: any) =>
          <TableRow>
            <TableCell>{editorInterface.sys.contentType.sys.id}</TableCell>
            <TableCell>{JSON.stringify(editorInterface.controls)}</TableCell>       
          </TableRow>)}
      </TableBody>
    </Table>
  </>)
}

export default class SpaceScreen extends Component<ConfigProps,ConfigState> {

  constructor(props: any) {
    super(props);
    this.setState({scheduleAction:'test', users:'test'})
    console.log('scheduleAction',this.state ?? 'oops')
  }

  async componentDidMount() {

    const scheduledActions = await this.props.sdk.space.getAllScheduledActions()
    const users = await this.props.sdk.space.getUsers()
    const editorInterfaces = await this.props.sdk.space.getEditorInterfaces()

    const scheduledActionsString = JSON.stringify(scheduledActions)
    const usersString = JSON.stringify(users)
    const editorInterfaceString = JSON.stringify(editorInterfaces)

    this.setState({scheduleAction:scheduledActionsString, 
                                       users:usersString,  
                  editorInterface:editorInterfaceString})
   
  }

  render() {

    if(this.state)
      return (
        <>
            { <SpaceScheduleComponent scheduleActions={this.state.scheduleAction}/> }
            { <SpaceUserComponent users={this.state.users}/> }
            { <SpaceEditorInterface editorInterfaces={this.state.editorInterface}/>}
        </>
      )

      return(<></>)
  }

}