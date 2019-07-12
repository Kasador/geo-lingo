import React, { Component } from 'react';
import './CreateAccount.scss';
import { Link } from 'react-router-dom';
import DatePicker from 'react-date-picker'



class CreateAccount extends Component {

    state = {
       
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPass: '',
        birthdate: new Date(),
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

            case 'password':
                this.setState({ password: e.target.value });
            break;

            case 'confirmPass':
                this.setState({ confirmPass: e.target.value });
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
       
        let updatedLanguages = this.state.learningLanguagesList.concat(this.state.learningLanguage); //creates a copy of the languages array in state and adds the new language in

        this.setState({learningLanguage: '', learningLanguagesList: updatedLanguages}); //replace old array with new array and reset learning language input.
        
    }

    //when the x is clicked, remove selected language from state
    deleteLanguage = (e, language) => {

        e.preventDefault();
        this.setState(prevState => ({
            learningLanguagesList: prevState.learningLanguagesList.filter(el => el !== language) //keep array items except for specified langage, then update state with filtered array.
        }));
    }

    handleSubmit = (e) => {
        e.preventDefault();

        //check if password and confirmpass are the same

        if (this.state.password === this.state.confirmPass) {
            console.log(this.state)
        } else {
            alert('Passwords are different')
        }
        
       
    }

    handleDateChange = date => {
       this.setState({birthdate: date}); 
    }

    

   

    render () {

     

        // loop through the languages in the state array and output them into a list
        const languages = this.state.learningLanguagesList.map(language => {
            
            return (
               <li key={language}>
                   <h3>{language}</h3>
                   <button onClick={(e) => this.deleteLanguage(e, language)}>X</button>
                </li>
            )
        })
        
        return (
            <>
            <div className="account-creation-page">

                <Link to="/sign-in/"><button className="back-button">Go Back</button></Link>

                <h1>Create an Account</h1>

                <form onSubmit={this.handleSubmit} className="form">

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
                        <label>Email Address: </label>
                        <input type="text" value={this.state.email} onChange={(e) => this.handleUserInfoChange(e, 'email')}/>
                    </div>

                    <div>
                        <label>Date of Birth</label>
                        <DatePicker 
                            value={this.state.birthdate}
                            onChange={this.handleDateChange}/>
                    </div>
                       
                    

                    <div>
                        <label>Password: </label>
                        <input type="password" value={this.state.password} onChange={(e) => this.handleUserInfoChange(e, 'password')} />
                    </div>

                    <div>
                        <label>Confirm Password: </label>
                        <input type="password" value={this.state.confirmPass} onChange={(e) => this.handleUserInfoChange(e, 'confirmPass')} />
                    </div>

                    <div>
                        <label>Native Language: </label>
                        <input type="text" value={this.state.nativeLanguage} onChange={(e) => this.handleUserInfoChange(e, 'nativeLanguage')} />
                    </div>

                    {/* the part below contains the whole learning languages section */}

                    <div className="languages-input">
                        <label>Languages you want to learn:</label>

                        <input type="text" value={this.state.learningLanguage} onChange={(e) => this.handleUserInfoChange(e, 'learningLanguage')} />

                        <button onClick={this.submitLanguage}>Add Language</button>

                        {/* shows the languages added */}
                        <div className="learning-languages">
                            <ul>
                                {languages}
                            </ul>
                        </div>

                    </div>

                    <div>
                        {/*Submits the entire form */}
                        <button type="submit">Submit</button>
                    </div>

                    
                </form>

                


                
            </div>

            
           
            </>
        )
    }
}

export default CreateAccount;