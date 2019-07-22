import React, { Component } from 'react';
import './CreateAccount.scss';
import { Link } from 'react-router-dom';

class CreateAccount extends Component {
    state = {
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPass: '',
        birthdate: {month: 'January', day: '1', year: '1940'},
        gender: '',
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

    //       ---DATE-PICKER---
    selectMonth = (e) => {
        const month = e.target.value;
        
        this.setState(prevState => {
            let birthdate = Object.assign({}, prevState.birthdate);
            birthdate.month = month;
            return { birthdate }
        })  
      
    }

    selectDay = (e) => {
        const day = e.target.value;

        this.setState(prevState => {
            let birthdate = Object.assign({}, prevState.birthdate);
            birthdate.day = day;
            return { birthdate }
        })
    }

    selectYear = (e) => {
        const year = e.target.value;

        this.setState(prevState => {
            let birthdate = Object.assign({}, prevState.birthdate);
            birthdate.year = year;
            return { birthdate}
        })
    }
 
    // displays the days in the dropdown based on the month selected
    datePickerDays = (month) => {
        let datesArray = [];
        if (month === 'February') {
            for (let i = 1; i <= 29; i++) { // 29 for leap years
    
                datesArray.push(<option value={i} key={i}>{i}</option>)
                
            }
        } else if (month === 'January' || month === 'March' || month === 'May' || month === 'July' || month === 'August' || month === 'October' || month === 'December') {
            for (let i = 1; i <= 31; i++) {

            datesArray.push(<option value={i} key={i}>{i}</option>)
            }
        } else {
            for (let i = 1; i <= 30; i++) {

                datesArray.push(<option value={i} key={i}>{i}</option>)

            }
        }

        return datesArray;
    }

    //displays years starting from minimum year to maximum year
    datePickerYears = (minYear, maxYear) => {
        
        const yearsArray = [] 

        for (let i = minYear; i <= maxYear; i++) {
            yearsArray.push(<option value={i} key={i}>{i}</option>)
        }
        
        return yearsArray;
    }
        


    //      ---DATE PICKER END---

    handleGenderSelect = (e, gender) => {
        e.preventDefault();
        if (gender === 'male') {
            this.setState({gender: 'male'})
       
        } else if (gender === 'female') {
            this.setState({gender: 'female'})
        
        } else {
            console.log('no')
        }  
    }

    handleSubmit = (e) => {
        e.preventDefault();

        //check if password and confirmpass are the same
        //add checks for everything else here later

        if (this.state.password === this.state.confirmPass) {
            console.log(this.state);
        } else {
            alert('Passwords are different');
        }
    }

    render () {

        let maleButtonStyle, femaleButtonStyle;

        //add styling based on this.state.gender
        if (this.state.gender === 'male') {
            maleButtonStyle = { backgroundColor: '#FF6666' };
            femaleButtonStyle = { backgroundColor: 'white' };
        } else if (this.state.gender === 'female') {
            maleButtonStyle = { backgroundColor: 'white' };
            femaleButtonStyle = { backgroundColor: '#FF6666' };
        } else {
            maleButtonStyle = { backgroundColor: 'white' };
            femaleButtonStyle = { backgroundColor: 'white' };
        }
     
        

        // loop through the languages in the state array and output them into a list
        const languages = this.state.learningLanguagesList.map(language => {
            
            return (
               <li key={language}>
                   <h3>{language}</h3>
                   <button onClick={(e) => this.deleteLanguage(e, language)}>X</button>
                </li>
            )
        });
        // take away underline decoration 
        const styleBackBtn = {
            textDecoration: 'none',
        }
        
        return (
            <div className="CreateAccount">
                {/* back to top */}
                <Link to="/sign-in/" style={styleBackBtn}>
                    <div className="BackBtnContainer">
                        <i className="fas fa-chevron-left"></i>
                        <span>Go Back</span>
                    </div>
                </Link>
                {/* top section */}
                <section className="TopSection">
                    <div className="TopSectionWrapper">
                        <h1>Sign Up</h1>
                    </div>
                </section>
                {/* bottom section */}
                <section className="BotttomSection">
                    {/* form section */}
                    <form className="Form">
                        <h1>Create Your Geolingo Account</h1>
                        <div className="FormContainer">
                            <div className="FormContainerFlex">
                                {/* username */}
                                <label>Username: </label>    
                                <input type="text" value={this.state.username} onChange={(e) => this.handleUserInfoChange(e, 'username')} /> 
                                {/* firs name */}
                                <label>First Name: </label>
                                <input type="text" value={this.state.firstName} onChange={(e) => this.handleUserInfoChange(e, 'firstName')}/>
                                {/* last name  */}
                                <label>Last Name: </label>
                                <input type="text" value={this.state.lastName} onChange={(e) => this.handleUserInfoChange(e, 'lastName')}/>
                                {/* email */}
                                <label>Email Address: </label>
                                <input type="text" value={this.state.email} onChange={(e) => this.handleUserInfoChange(e, 'email')}/>
                                {/* DOB & gender */}
                                <div className="flex_DOBGENDER">
                                    <div className="DOBGENDER">
                                        <label>Date of Birth</label>
                                        <div className="date_selecter">
                                            <select name="month" onChange={this.selectMonth}>
                                                <option value="January">January</option>
                                                <option value="February">February</option>
                                                <option value="March">March</option>
                                                <option value="April">April</option>
                                                <option value="May">May</option>
                                                <option value="June">June</option>
                                                <option value="July">July</option>
                                                <option value="August">August</option>
                                                <option value="September">September</option>
                                                <option value="October">October</option>
                                                <option value="November">November</option>
                                                <option value="December">December</option>
                                            </select>
                                            <select name="day" onChange={this.selectDay}>
                                                
                                                {this.datePickerDays(this.state.birthdate.month)}
                                                
                                            </select>
                                            <select name="year" onChange={this.selectYear}>
                                                
                                                {this.datePickerYears(1940, 2003)} {/* pass in minimum and maximum years */}
                                                
                                                
                                            

                                            </select>
                                        </div>
                                        


                                    </div>
                                    <div className="DOBGENDER">
                                        <label>Gender</label>
                                        <div className="GenderBtns">
                                            <button
                                                className="GenderBtn maleBtn"
                                                style={maleButtonStyle}
                                                onClick={(e) => this.handleGenderSelect(e, 'male')}
                                                >Male</button>
                                            <button
                                                className="GenderBtn femaleBtn"
                                                style={femaleButtonStyle}
                                                onClick={(e) => this.handleGenderSelect(e, 'female')}
                                                >Female</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="FormContainerFlex">
                                {/* password */}
                                <label>Password: </label>
                                <input type="password" value={this.state.password} onChange={(e) => this.handleUserInfoChange(e, 'password')} />
                                {/* confirm password */}
                                <label>Confirm Password: </label>
                                <input type="password" value={this.state.confirmPass} onChange={(e) => this.handleUserInfoChange(e, 'confirmPass')} />
                                {/* native language */}
                                <label>Native Language: </label>
                                <input type="text" value={this.state.nativeLanguage} onChange={(e) => this.handleUserInfoChange(e, 'nativeLanguage')} />
                                {/* languages wanting to learn */}
                                <div className="LanguagesInput">
                                    <label>Languages you want to learn:</label>
                                    <br></br>
                                    <input type="text" value={this.state.learningLanguage} onChange={(e) => this.handleUserInfoChange(e, 'learningLanguage')} />
                                    <button onClick={this.submitLanguage} id="AddLanguageBtn">Add</button>
                                    {/* shows the languages added */}
                                    <div className="learning-languages">
                                        <ul>
                                            {languages}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* create account button */}
                        <button onClick={this.handleSubmit} type="submit" id="AccountSubmit">Create Account</button>
                        {/* terms of use text */}
                        <span id="TermsOfUse">By clicking the button, you agree to Geolingo's Policy &#38; Terms of Use.</span>
                    </form>
                </section>
            </div>
        );
    }
}

export default CreateAccount;