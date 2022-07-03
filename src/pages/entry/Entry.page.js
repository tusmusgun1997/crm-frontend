import React, { useState } from 'react'
import { Jumbotron } from 'react-bootstrap'
import LoginForm from '../../components/login/Login.comp'
import ResetPassword from '../../components/password.reset/PasswordReset.comp'

import './entry.style.css'

const Entry = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [formLoad, setFormLoad] = useState('login')

    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case "email":
                setEmail(value);
                break;
            case "password":
                setPassword(value);
                break;

            default:
                break;
        }
    }

    const handleOnSubmit = (e) => {

        e.preventDefault();
        console.log(email, password)

        if (!email || !password) {
            alert('Fill up all the fields')
            return;
        }

        console.log(email, password)



    }

    const formSwitcher = (formType) => {
        setFormLoad(formType)
    }

    const handleOnResetSubmit = (e) => {
        e.preventDefault();
        console.log(email)

        if (!email) {
            return alert('please fill the email')
        }
    }

    return (
        <div className="entry-page bg-info">
            <Jumbotron className='form-box'>
                {formLoad === 'login' && <LoginForm handleChange={handleChange} handleOnSubmit={handleOnSubmit} email={email} password={password} formSwitcher={formSwitcher} />}
                {formLoad === 'reset' && <ResetPassword handleChange={handleChange} handleOnResetSubmit={handleOnResetSubmit} email={email} formSwitcher={formSwitcher} />
                }
            </Jumbotron>
        </div>
    )
}

export default Entry