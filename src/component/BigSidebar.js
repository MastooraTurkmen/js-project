import Wrapper from "../assets/wrappers/BigSidebar"
import NavLinks from "./NavLinks";
import Logo from "../components/Logo";
import { useSelector } from "react-redux";

const BigSidebar = () => {
    const { isSidebarOpen } = useSelector()

    return (
        <Wrapper>
            <div>BigSidebar</div>
        </Wrapper>
    )
}

export default BigSidebar