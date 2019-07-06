// export default (state=0,action)=>{
//     switch(action.type){
//         case 'JIA':
//             return state+1;
//             break;
//         case 'JIAN':
//             return state-1;
//             break;
//         default:
//            return 0;
//     }

//     return state;
// }

import {createStore} from 'redux'
import reduces from './reduces'
let store=createStore(reduces,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window .__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;