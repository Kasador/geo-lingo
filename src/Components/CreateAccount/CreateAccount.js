import React, { Component } from 'react';
import './CreateAccount.scss';


class CreateAccount extends Component {

    state = {
       
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        nativeLanguage: '',
        learningLanguage: '',
        learningLanguagesList: [],
      
    }

    handleUserInfoChange = (e, type) => { //onChange handler passes in the event and type.

        //check if type is username, first name, email, etc
        switch (type) {

            case 'username':
                this.setState({username: e.target.value});
            break;

            case 'firstName':
                this.setState({firstName: e.target.value});
            break;

            case 'lastName':
                this.setState({lastName: e.target.value});
            break;

            case 'email':
                this.setState({email: e.target.value});
            break;

            case 'nativeLanguage':
                this.setState({nativeLanguage: e.target.value});
            break;

            case 'learningLanguage':
                this.setState({learningLanguage: e.target.value});
            
            break;

            default:
                alert('something went wrong') //maybe put something more meaningful here

        }
        
    }

    //this function is used when the 'add language' button is clicked
    submitLanguage = (e) => {
        e.preventDefault(); 
       
        let addedLanguage = this.state.learningLanguagesList.concat(this.state.learningLanguage); //creates a copy of the languages array in state and adds the new language in

        this.setState({learningLanguagesList: addedLanguage}); //replace old array with new array
        
    }


    

   

    render () {

        // loop through the languages in the state array and output them into a list
        const languages = this.state.learningLanguagesList.map(language => {
            
            return (
                <li key={language}>{language}</li>
            )
        })
        
        return (
            <div className="account-creation-page">
                <h1>Create an Account</h1>

                <form onSubmit={this.handleSubmit}>

                    <div>
                        <label>Username: </label>    
                         <input type="text" value={this.state.username} onChange={(e) => this.handleUserInfoChange(e, 'username')} /> 
                    </div>

                    <div>
                        <label>First Name: </label>
                        <input type="text" value={this.state.firstName} onChange={(e) => this.handleUserInfoChange(e, 'firstName')}/>
                    </div>

                    <div>
                        <label>Last Name: </label>
                        <input type="text" value={this.state.lastName} onChange={(e) => this.handleUserInfoChange(e, 'lastName')}/>
                    </div>

                    <div>
                        <label>Email: </label>
                        <input type="text" value={this.state.email} onChange={(e) => this.handleUserInfoChange(e, 'email')}/>
                    </div>

                    <div>
                        <label>Native Language: </label>
                        <input type="text" value={this.state.nativeLanguage} onChange={(e) => this.handleUserInfoChange(e, 'nativeLanguage')} />
                    </div>

                    <div>
                        <label>Languages you want to learn:</label>
                        <input type="text" value={this.state.learningLanguage} onChange={(e) => this.handleUserInfoChange(e, 'learningLanguage')} />
                        <button onClick={this.submitLanguage}>Add Language</button>
                    </div>


                </form>

                {/* shows the languages added */}
                <div className="learning-languages">
                    <ul>
                        {languages}
                    </ul>
                </div>
            </div>
        )
    }
}

export default CreateAccount;