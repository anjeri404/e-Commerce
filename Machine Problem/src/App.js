import React, {Component} from 'react';
import './App.css';
import Login from './Login/Login';
import Display from './Display/Display';
import fire from './fire/fire';
import Icon from './Logo/Icon';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        user: []
    }
}

componentDidMount () {
    this.authListener();
}
    authListener () {
        fire.auth().onAuthStateChanged((user) => {
           // console.log(user);
            if(user) {
                this.setState({ user });
                localStorage.setItem('user', user.uid);
            } else {
                this.setState({ user: null});
                localStorage.removeItem('user');
            }
        });
    }
  render () {
    return (
      
      <div className="App">

        <header>  
       
            <h1>  <Icon />Tops.PH </h1> <br/>
            
            <ul  className = "List">
              <li> About Us </li>
              <li> Today's Deal </li>  
              <li>  Gift Card </li>
              <li>  Help </li>
                </ul>
                </header>
                
              
              {this.state.user ?
                (<Display />) : 
                (<Login />) } 
  
          </div>
       );
    }
}

export default App;
