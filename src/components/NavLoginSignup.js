import React from 'react'

export default class NavLoginSignup extends React.Component {

    render() {
        let selectionColor = 'rgb(223, 223, 223)'

        return(
            <nav id='Navloginsignup'>

                <input type='button' value='Log In' onClick={this.props.loginClick} style={{backgroundColor: this.props.selected ? selectionColor : 'transparent'}} id='loginselector' />

                <input type='button' value='Sign Up' onClick={this.props.signupClick} style={{backgroundColor: !this.props.selected ? selectionColor : 'transparent'}} id='signupselector' />
                
                <hr/>
            </nav>
            
        )
    }
}