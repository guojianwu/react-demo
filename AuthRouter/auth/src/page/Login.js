import   React ,{Component} from 'react';
export default class Login extends Component {
  login=()=>{
    localStorage.setItem('info',true);
    this.props.history.push("/")
  }
  render(){
    console.log('login')
    return (
      <div>
        Login
        <button onClick={this.login}>login</button>
      </div>
    )
  }
}
