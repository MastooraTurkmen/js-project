import { useState, useEffect } from "react";
import { Logo } from "../components";
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
        e.preventDefault()
        console.log(e.target);
    }

    return (
        <Wrapper>

        </Wrapper>
    )
}

export default Register