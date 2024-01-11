import { Outlet } from "react-router-dom"
import { Navbar, BigSidebar, SmallSidebar } from "../../component"
import Wrapper from "../../assets/wrappers/SharedLayout"

const SharedLayout = () => {
    return (
        <Wrapper>
            <main className="dashboard">
                <SmallSidebar />
                <BigSidebar />
            </main>
        </Wrapper>
    )
}

export default SharedLayout