import React, {useState} from 'react';

const Form = (props) => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confPassword, setConfPassword] = useState('')

    const handleFirstName = (e) => {
        console.log(e.target.value);
        setFirstName(e.target.value);
    }
    const handleLastName = (e) => {
        console.log(e.target.value);
        setLastName(e.target.value);
    }
    const handleEmail = (e) => {
        console.log(e.target.value);
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        console.log(e.target.value);
        setPassword(e.target.value);
    }
    const handleConfPassword = (e) => {
        console.log(e.target.value);
        setConfPassword(e.target.value);
    }




    return(
        <div>
            <form>
                <label>First Name </label>
                <input type = "text" name = "firstName" onChange= {handleFirstName}></input>
            </form>
            <form>
                <label>Last Name </label>
                <input type = "text" name = "lastName" onChange= {handleLastName}></input>
            </form>
            <form>
                <label>Email </label>
                <input type = "text" name = "email" onChange= {handleEmail}></input>
            </form>
            <form>
                <label>Password </label>
                <input type = "password" name = "password" onChange= {handlePassword}></input>
            </form>
            <form>
                <label>Confirm Password </label>
                <input type = "password" name = "confPassword" onChange= {handleConfPassword}></input>
            </form>

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