import Wrapper from "../assets/wrappers/Navbar";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa';
import Logo from "./Logo";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
    const { user } = useSelector((store) => store.user)
    const dispatch = useDispatch()

    return (
        <Wrapper>
            <div className="nav-center">
                <button type="button" className="toggle-btn" onClick={() => console.log('toggle-sidebar')}>
                    <FaAlignLeft />
                </button>
                <div>
                    <Logo />
                    <h3 className="logo-text">dashboard</h3>
                </div>
                <div className="btn-container">
                    
                </div>
            </div>
        </Wrapper>
    )
}

export default Navbar;