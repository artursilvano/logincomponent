import React from 'react'
import NavLoginSignup from './components/NavLoginSignup'
import FormLogin from './components/FormLogin'
import FormSignup from './components/FormSignup'


export default class LoginSignup extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            selected: true,
            
        }
        this.handleLoginPage = this.handleLoginPage.bind(this)
        this.handleSignupPage = this.handleSignupPage.bind(this)
    }

    handleLoginPage() {
        this.setState({selected: true})
    }

    handleSignupPage(target) {
        this.setState({selected: false})
    }

    render() {
        return(
        <div id='formloginsignup'>
            <NavLoginSignup loginClick={this.handleLoginPage} signupClick={this.handleSignupPage} selected={this.state.selected}/>

            <div id='forms'>
                {this.state.selected
                ? <FormLogin />
                : <FormSignup /> }
            </div>

        </div>
        )
    }
}