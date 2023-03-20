import React, {useState} from 'react';

const Form = (props) => {

    const [firstName, setFirstName] = useState('')
    const [firstNameError, setFirstNameError] = useState(false)
    const [lastName, setLastName] = useState('')
    const [lastNameError, setLastNameError] = useState(false)
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState(false)
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState(false)
    const [confPassword, setConfPassword] = useState('')
    const [confPasswordError, setConfPasswordError] = useState(false)

    const handleFirstName = (e) => {
        console.log(e.target.value);
        if(e.target.value.length < 2) {
            setFirstNameError(true);
        } else {
            setFirstNameError(false)
        }
        setFirstName(e.target.value);
    }
    const handleLastName = (e) => {
        console.log(e.target.value);
        if(e.target.value.length < 2) {
            setLastNameError(true);
        } else {
            setLastNameError(false);
        }
        setLastName(e.target.value);
    }
    const handleEmail = (e) => {
        console.log(e.target.value);
        if(e.target.value.length < 2) {
            setEmailError(true);
        } else {
            setEmailError(false);
        }
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        console.log(e.target.value);
        if(e.target.value.length < 8) {
            setPasswordError(true);
        } else {
            setPasswordError(false);
        }
        setPassword(e.target.value);
    }
    const handleConfPassword = (e) => {
        console.log(e.target.value);
        if(e.target.value !== password) {
            setConfPasswordError(true);
        } else {
            setConfPasswordError(false);
        }
        setConfPassword(e.target.value);
    }




    return(
        <div>
            <form>
                <label>First Name </label>
                <input type = "text" name = "firstName" onChange= {handleFirstName}></input>
            </form>
            {
                firstNameError ?
                <p>First Name must be at least 2 characters</p> :
                ''
            }
            <form>
                <label>Last Name </label>
                <input type = "text" name = "lastName" onChange= {handleLastName}></input>
            </form>
            {
                lastNameError ?
                <p>Last Name must be at least 2 characters</p> :
                ''
            }
            <form>
                <label>Email </label>
                <input type = "text" name = "email" onChange= {handleEmail}></input>
            </form>
            {
                emailError ?
                <p>Email must be at least 2 characters</p> :
                ''
            }
            <form>
                <label>Password </label>
                <input type = "password" name = "password" onChange= {handlePassword}></input>
            </form>
            {
                passwordError ?
                <p>Password must be at least 8 characters</p> :
                ''
            }
            <form>
                <label>Confirm Password </label>
                <input type = "password" name = "confPassword" onChange= {handleConfPassword}></input>
            </form>
            {
                confPasswordError ?
                <p>Passwords must match</p> :
                ''
            }

            <div>
                <p>First Name {firstName}</p>
                <p>Last Name {lastName}</p>
                <p>Email {email}</p>
                <p>Password {password}</p>
                <p>Confirm Password {confPassword}</p>
            </div>
        </div>
    )
}

export default Form