export default (state=0,action)=>{
  switch(action.type){
      case 'JIA':
          return state+1;
      case 'JIAN':
          return state-1;
      default:
         return 0;
  }
}