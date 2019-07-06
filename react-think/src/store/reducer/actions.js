import axios from "axios"
export const jia=()=>({
  type:"JIA"
})
export const jian=()=>({
  type:"JIAN"
})

export const init=(data)=>({
  type:"INIT",
  data
})
export const load=()=>{
  return (dispatch)=>{
    axios.get('/test.json').then((res)=>{
      const data=res.data.data;
      const action=init(data);
      dispatch(action);
    })
  }
}