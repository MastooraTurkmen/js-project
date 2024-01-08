import { useState, useEffect } from "react";
import { Logo, FormRow } from "../component";
import Wrapper from "../assets/wrappers/RegisterPage";
import { toast } from "react-toastify";
import { loginUser, registerUser } from "../features/user/userSlice";

const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: true,
}

const Register = () => {
    const [values, setValues] = useState(initialState)
    const { user, isLoading } = userSlice(store => store.user)

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setValues({ ...values, [name]: value })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const { name, email, password, isMember } = values
        if (!email || !password || (!isMember || !name)) {
            toast.error('Please fill out all fields');
            return;
        }
        if (isMember) {
            dispatchEvent(loginUser({ email: email, password: password }))
            return;
        }
        dispatch(registerUser(name, email, password))
    }

    const toggleMemeber = () => {
        setValues({ ...values, isMember: !values.isMember })
    }

    return (
        <Wrapper className="full-page">
            <form className="form" onSubmit={onSubmit}>
                <Logo />
                <h3>{values.isMember ? 'Login' : "Register"}</h3>
                {/* name field */}
                {!values.isMember &&
                    <FormRow
                        type='text'
                        name='name'
                        value={values.name}
                        handleChange={handleChange}
                    />
                }
                {/* email field */}
                <FormRow
                    type='email'
                    name='email'
                    value={values.email}
                    handleChange={handleChange}
                />
                {/* password field */}
                <FormRow
                    type='password'
                    name='password'
                    value={values.password}
                    handleChange={handleChange}
                />
                <button type="button" className="btn btn-block">submit</button>
                <p> {values.isMember ? 'Not a member yet.' : 'Already a member?'}
                    <button type="button" className="member-btn" onClick={toggleMemeber}>
                        {values.isMember ? 'Register' : 'Login'}
                    </button>
                </p>
            </form>
        </Wrapper>
    )
}

export default Register