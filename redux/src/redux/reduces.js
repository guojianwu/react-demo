export default (state=0,action)=>{
  switch(action.type){
      case 'JIA':
          return state+1;
          break;
      case 'JIAN':
          return state-1;
          break;
      default:
         return 0;
  }

  return state;
}