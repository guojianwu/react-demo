import React, { Component } from 'react';
import { Link } from 'react-router'
import One from '@/page/One'
class App extends Component {
  render() {
    return (
      <div className="App">
         <ul>
            <li><Link to="/">About</Link></li>
            {/* <li><Link to="/inbox">Inbox</Link></li>
            <li><Link to="/inbox/messages/22222">messages</Link></li> */}
          </ul>
          <div>
            {this.props.children}
          </div>
       {/* <One {...this.props}/> */}
      </div>
    );
  }
}

export default App;
