import {
  observable,
  computed,
  autorun,
  action
} from 'mobx'

class AppStateTest {
  @observable count =0
  @observable name ='gjw'
  @computed get msg(){
    return `${this.name} say count is ${this.count}`
  }
  @action add(val){
    this.count+=val;
  }
  @action dec(val){
    this.count-=val;
  }
}

const appStateTest =new AppStateTest();
  
// autorun(()=>{
//   console.log(appState.msg)
// })

// setInterval(()=>{
//   appState.add();
// },1000)

export default appStateTest;