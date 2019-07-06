import { fromJS} from 'immutable';
const defaultState=fromJS({
  value:0,
  list:[]
})
export default (state=defaultState,action)=>{
  if(action.type==="JIA_2"){
    // let newState=JSON.parse(JSON.stringify(state));
    // newState.value=newState.value+1;
    // return newState;
    return state.set('value',state.get('value')+1);
  }

  if(action.type==="JIAN_2"){
    // let newState=JSON.parse(JSON.stringify(state));
    // newState.value=newState.value-1;
    // return newState;
    return state.set('value',state.get('value')-1);
  }
  return state;
}