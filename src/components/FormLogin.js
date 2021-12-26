import React from "react";

export default class FormLogin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
        this.usernameChange = this.usernameChange.bind(this)
        this.passwordChange = this.passwordChange.bind(this)
    }

    usernameChange(event) {
        this.setState({
            username: event.target.value
        })
    }

    passwordChange(event) {
        this.setState({
            password: event.target.value
        })
    }

    showPassword() {
        let passwordtype = document.getElementById('passwordlogin')
        passwordtype.type === 'password' ? passwordtype.type = 'text' : passwordtype.type = 'password'
    }

    render() {
        return(
            <form action='login' id='Login'>
                <label id='usernamelabel'>E-mail / Username</label>
                <input type='text' id='usernamelogin' onChange={this.usernameChange} value={this.state.username} />

                <label class='passwordlabel'>Password</label>
                <input type='password' id='passwordlogin' onChange={this.passwordChange} value={this.state.password} />

                <input type='checkbox' id='showpasswordlogin' onChange={this.showPassword}/>

                <input type='submit' value='Log In' id='loginbutton'/>
            </form> 
        ) 
    }
}