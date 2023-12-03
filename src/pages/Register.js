import { useState, useEffect } from "react";
import { Logo, FormRow } from "../component";
import Wrapper from "../assets/wrappers/RegisterPage";

const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: true,
}

const Register = () => {
    const [values, setValues] = useState(initialState)

    const handleChange = (e) => {
        console.log(e.target);
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(e.target);
    }

    return (
        <Wrapper className="full-page">
            <form className="form" onSubmit={onSubmit}>
                <Logo />
                <h3>Login</h3>
                {/* name field */}
                <FormRow
                    type='text'
                    name='name'
                    value={values.name}
                    handleChange={handleChange}
                />
                {/* email field */}
                <FormRow
                    type='email'
                    name='email'
                    
                />
                <button type="button" className="btn btn-block">submit</button>
            </form>
        </Wrapper>
    )
}

export default Register