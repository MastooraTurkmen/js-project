import Wrapper from "../assets/wrappers/SmallSidebar"
import { FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { useSelector, useDispatch } from "react-redux";

const SmallSidebar = () => {
    return (
        <Wrapper>
            <div className="sidebar-container show-sidebar">
                <div className="content">
                    <button className="close-btn" onClick={() => console.log('toggle')}>
                        <FaTimes />
                    </button>
                    <header>
                        <Logo />
                    </header>
                </div>
            </div>
        </Wrapper>
    )
}

export default SmallSidebar