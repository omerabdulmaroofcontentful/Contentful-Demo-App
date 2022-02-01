import { createClient } from 'contentful-management'

class Singleton {

   getCMAWrapper(sdk) {
    if(!Singleton.cmaClient){
      console.log('First time')
      Singleton.cmaClient =  createClient(
        { apiAdapter: sdk.cmaAdapter },
        {
        type: 'plain',
        defaults: {
            environmentId: sdk.ids.environment,
            spaceId: sdk.ids.space,
        },
        }
      )
      //console.log('First time',await Singleton.cmaClient.getContentTypes)
    }else{
      console.log('second time')
    }
    
    return Singleton.cmaClient
  }
  
  }
  
  const singletonInstance = new Singleton();
  
  Object.freeze(singletonInstance);
  export default singletonInstance