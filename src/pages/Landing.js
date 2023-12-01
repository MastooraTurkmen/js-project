import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../component/index'
import { Link } from 'react-router-dom'

const Landing = () => {
    return (
        <Wrapper>
            <nav>
                <Logo />
            </nav>
            <div className="container page">
                {/* info */}
                <div className="info">
                    <h1>job <span>tracking</span></h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Iure iusto accusantium dolores illum natus nihil nobis et quae quidem ab!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Iure iusto accusantium dolores illum natus nihil nobis et quae quidem ab!
                    </p>
                    <button className="btn btn-hero">Login/Register</button>
                </div>
                <img src={main} alt="" className="img main-img" />
            </div>
        </Wrapper>
    )
}

export default Landing