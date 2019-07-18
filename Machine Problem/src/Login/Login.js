import React, {Component} from 'react';
import './Login.css';
import fire from '../fire/fire';
import Logo from '../Logo/Logo';

class Login extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.inputDataHandler = this.inputDataHandler.bind(this);
        this.signup = this.signup.bind(this);
        this.state = {
            email: '',
            password: ''
        }
    }

    
    login(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then ( (u)=>  { })
        .catch((error) => {
            console.log(error);
            window.alert("Unsuccessful log in!");
        })
        
        return; 
    
    }
    signup(e) {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .catch((error) => {
            console.log(error);
            window.alert("Please enter a valid email and 6 character password!");
            //Password should atleast characters
        });
        window.alert("New User has been added! ");
        return;
    }
    
    inputDataHandler(e) {
        this.setState ({ [e.target.name] : e.target.value});
    
    }

    render () {
        return (
            <div className = "Login">
            <Logo /> <br/><br/>
    
            <form>
                
                <label> <strong> Email </strong>  </label><br/>
                <input value = {this.state.email} onChange = {this.inputDataHandler}
                    name="email" type= "email" placeholder= "Email address"
                    /><br/>
                <label> <strong> Password </strong>  </label><br/>
                <input value = {this.state.password} onChange = {this.inputDataHandler}
                    name="password" type= "password" placeholder= "Password"/><br/>
                <button type= "submit" onClick ={this.login}>Login </button>
                <button type= "submit" onClick ={this.signup}>Sign Up </button>
                
            </form>
            
            </div>
        );
    }
}

export default Login;