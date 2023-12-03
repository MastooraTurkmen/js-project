import { useState, useEffect } from "react";
import { Logo } from "../component";
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
                <div className="form-row">
                    <label htmlFor="name" className="form-label">
                        name
                    </label>
                    <input className="form-input" type="text" name="name" onChange={handleChange} value={values.name} />
                </div>
            </form>
        </Wrapper>
    )
}

export default Register