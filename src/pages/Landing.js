import logo from '../assets/images/logo.svg'
import main from '../assets/images/main.svg'

const Landing = () => {
    return (
        <main>
            <nav>
                <img src={logo} alt="jobster logo" className="logo" />
            </nav>
            <div className="container page">
                {/* info */}
                <div className="info">

                </div>
                <img src={main} alt="" className="img main-img" />
            </div>
        </main>
    )
}

export default Landing