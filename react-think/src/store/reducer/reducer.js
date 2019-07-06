import { fromJS} from 'immutable';
const defaultState=fromJS({
  value:0,
  list:[]
})
export default (state=defaultState,action)=>{
  if(action.type==="JIA"){
    // let newState=JSON.parse(JSON.stringify(state));
    // newState.value=newState.value+1;
    // return newState;
    return state.set('value',state.get('value')+1);
  }

  if(action.type==="JIAN"){
    // let newState=JSON.parse(JSON.stringify(state));
    // newState.value=newState.value-1;
    // return newState;
    return state.set('value',state.get('value')-1);
  }
  if(action.type==="INIT"){
    // let newState=JSON.parse(JSON.stringify(state));
    // newState.list=action.data;
    // return newState;
    return state.set('list',action.data);
  }

  return state;
}