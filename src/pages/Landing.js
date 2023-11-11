import logo from '../assets/images/logo.svg'
import main from '../assets/images/main.svg'
import styled from 'styled-components'

const Landing = () => {
    return (
        <Wrapper>
            <nav>
                <img src={logo} alt="jobster logo" className="logo" />
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

const Wrapper = styled.main`
nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
}
 .page {
    min-height: calc(100vh - var(--nav-height));
    
  }

`;

export default Landing