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
    const [value, setValue] = useState(initialState)

    const handleChange = (e) => {
        console.log(e.target);
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(e.target);
    }

    return (
        <Wrapper className="full-page">

        </Wrapper>
    )
}

export default Register